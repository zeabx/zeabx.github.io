import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

/**
 * Server-side Cantonese TTS — REAL Cantonese, never Mandarin.
 *
 * GET /api/tts?text=你好
 * Generates speech with the Microsoft zh-HK "HiuMaan" neural voice (a native
 * Hong Kong Cantonese voice) via the msedge-tts package, and caches mp3
 * files on disk so repeated requests are instant.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CACHE_DIR = path.join(process.cwd(), ".audio-cache");
const VOICE = "zh-HK-HiuMaanNeural"; // native Hong Kong Cantonese, female

type EdgeTTS = import("msedge-tts").MsEdgeTTS;

let ttsReady: Promise<EdgeTTS> | null = null;
/** Serialize synthesis — one request at a time keeps the socket happy. */
let queue: Promise<unknown> = Promise.resolve();

function getTts(): Promise<EdgeTTS> {
  if (!ttsReady) {
    ttsReady = (async () => {
      const { MsEdgeTTS, OUTPUT_FORMAT } = await import("msedge-tts");
      const tts = new MsEdgeTTS();
      await tts.setMetadata(
        VOICE,
        OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3,
      );
      return tts;
    })();
  }
  return ttsReady;
}

function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function synthesize(text: string): Promise<Buffer> {
  const run = async (): Promise<Buffer> => {
    const tts = await getTts();
    const { audioStream } = tts.toStream(text);
    const chunks: Buffer[] = [];
    for await (const chunk of audioStream) {
      chunks.push(Buffer.from(chunk as Uint8Array));
    }
    return Buffer.concat(chunks);
  };
  const next = queue.then(run, run);
  // keep the queue alive even if a request fails
  queue = next.catch(() => undefined);
  return next;
}

export async function GET(req: NextRequest) {
  const text = (req.nextUrl.searchParams.get("text") || "")
    .replace(/[\u0000-\u001f]/g, "")
    .trim();
  if (!text) {
    return NextResponse.json({ error: "Missing text" }, { status: 400 });
  }
  if (text.length > 300) {
    return NextResponse.json({ error: "Text too long" }, { status: 400 });
  }

  try {
    const hash = crypto.createHash("md5").update(text).digest("hex");
    const cachePath = path.join(CACHE_DIR, `${hash}.mp3`);

    let buffer: Buffer;
    if (fs.existsSync(cachePath) && fs.statSync(cachePath).size > 200) {
      buffer = fs.readFileSync(cachePath);
    } else {
      buffer = await synthesize(xmlEscape(text));
      if (buffer.length < 200) {
        throw new Error("TTS returned empty audio");
      }
      if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });
      fs.writeFileSync(cachePath, buffer);
    }

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": buffer.length.toString(),
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch (error) {
    console.error("Cantonese TTS error:", error);
    return NextResponse.json({ error: "TTS generation failed" }, { status: 500 });
  }
}
