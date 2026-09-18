"use client";

import audioMap from "@/data/audio-map.json";

/**
 * Cantonese audio engine — GUARANTEED Cantonese, never Mandarin.
 *
 * Priority:
 *  1. Pre-generated static clips (public/audio/*.mp3), every one recorded
 *     with the Microsoft zh-HK "HiuMaan" neural voice — a native Hong Kong
 *     Cantonese voice. Instant playback, works on any device.
 *  2. /api/tts — server-side generation with the SAME zh-HK HiuMaan voice
 *     (covers any text not pre-generated, e.g. future editions).
 *  3. Absolute last resort: the device's own voice, but ONLY if it is a
 *     genuine Cantonese voice (yue* / zh-HK / Sin-ji / HiuMaan / ...).
 *
 * Mandarin voices are never used, no matter what the device offers.
 */

export type VoiceQuality = "loading" | "cantonese";

export interface VoiceStatus {
  quality: VoiceQuality;
  /** human-readable voice name, e.g. "HiuMaan · Hong Kong" */
  label: string;
}

/** The voice used for every clip we serve. */
export const VOICE_LABEL = "HiuMaan · Hong Kong";

const CANTONESE_NAME_RE =
  /(sin-?ji|hiu\s?maan|hiu\s?gaai|wan-?lung|yating|canton|粵語|粤語|廣東話|广东话)/i;

/** True only for genuine Cantonese device voices. Mandarin → false. */
function isTrueCantoneseVoice(v: SpeechSynthesisVoice): boolean {
  const lang = (v.lang || "").toLowerCase().replace("_", "-");
  const name = v.name || "";
  if (lang.startsWith("yue")) return true;
  if (lang.includes("zh-hk")) return true;
  if (lang.includes("hant") && lang.includes("hk")) return true;
  return lang.startsWith("zh") && CANTONESE_NAME_RE.test(name);
}

/**
 * Audio source is now guaranteed Cantonese (static HK clips + HK server
 * voice), so the status chip no longer depends on device voices.
 */
export async function detectVoice(): Promise<VoiceStatus> {
  return { quality: "cantonese", label: VOICE_LABEL };
}

/** Same cleanup rule used when pre-generating the clip manifest. */
function cleanText(text: string): string {
  return text.replace(/[，。、！？；：,.!?;:\s]+$/g, "");
}

function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

/** Shared <audio> element — starting a new clip replaces the previous one. */
let player: HTMLAudioElement | null = null;
function getPlayer(): HTMLAudioElement {
  if (!player) player = new Audio();
  return player;
}

let currentAbort: AbortController | null = null;

function playSrc(src: string, rate: number, signal: AbortSignal): Promise<void> {
  const audio = getPlayer();
  audio.pause();
  audio.src = src;
  audio.playbackRate = Math.min(Math.max(rate, 0.5), 1.5);
  // keep the natural pitch when playing at learner speed
  type PitchAudio = HTMLAudioElement & {
    preservesPitch?: boolean;
    webkitPreservesPitch?: boolean;
  };
  const a = audio as PitchAudio;
  if ("preservesPitch" in a) a.preservesPitch = true;
  if ("webkitPreservesPitch" in a) a.webkitPreservesPitch = true;

  return new Promise<void>((resolve) => {
    const done = () => {
      audio.removeEventListener("ended", done);
      audio.removeEventListener("error", done);
      signal.removeEventListener("abort", done);
      resolve();
    };
    audio.addEventListener("ended", done);
    audio.addEventListener("error", done);
    signal.addEventListener("abort", done);
    audio.play().catch(done);
  });
}

/**
 * Speak the given Chinese text — always in Cantonese.
 * Static HK clip → server HK voice → genuine Cantonese device voice.
 */
export async function speak(
  text: string,
  opts: { rate?: number; voiceStatus?: VoiceStatus } = {},
): Promise<void> {
  const clean = cleanText(text);
  if (!clean) return;

  stopSpeaking();
  if (currentAbort) currentAbort.abort();
  const abort = new AbortController();
  currentAbort = abort;
  const rate = opts.rate ?? 0.9;

  // 1) Pre-generated clip recorded with the Hong Kong voice.
  const file = (audioMap as Record<string, string>)[clean];
  if (file) {
    await playSrc(`/audio/${file}`, rate, abort.signal);
    return;
  }

  // 2) Server generation — same zh-HK HiuMaan voice.
  try {
    const res = await fetch(`/api/tts?text=${encodeURIComponent(clean)}`, {
      signal: abort.signal,
    });
    if (res.ok) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      try {
        await playSrc(url, rate, abort.signal);
      } finally {
        URL.revokeObjectURL(url);
      }
      return;
    }
  } catch {
    /* aborted, offline, or generation failed — try the next source */
  }

  // 3) Last resort: the device's voice — but ONLY a genuine Cantonese one.
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    const voice = window.speechSynthesis.getVoices().find(isTrueCantoneseVoice);
    if (voice) {
      await new Promise<void>((resolve) => {
        const u = new SpeechSynthesisUtterance(clean);
        u.voice = voice;
        u.lang = voice.lang;
        u.rate = rate;
        u.onend = () => resolve();
        u.onerror = () => resolve();
        window.speechSynthesis.speak(u);
      });
    }
  }
  // No Cantonese source at all → stay silent. We NEVER fall back to Mandarin.
}
