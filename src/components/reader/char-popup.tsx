"use client";

import { useEffect, useMemo, useState } from "react";
import { Volume2, X } from "lucide-react";
import type { Token } from "@/data/types";
import { speak, type VoiceStatus } from "@/lib/cantonese-audio";

interface CharPopupProps {
  token: Token;
  anchor: DOMRect;
  voiceStatus: VoiceStatus;
  onClose: () => void;
}

/** Jyutping tone chip colours (tones 1-6). */
const TONE_COLORS = [
  "bg-[#b45309] text-white", // 1 high flat
  "bg-[#d97706] text-white", // 2 rising
  "bg-[#ca8a04] text-white", // 3 mid flat
  "bg-[#4d7c0f] text-white", // 4 low falling
  "bg-[#0f766e] text-white", // 5 low rising
  "bg-[#7c2d12] text-white", // 6 low flat
];

function toneNum(jp: string): number {
  const m = jp.match(/(\d)\s*$/);
  return m ? parseInt(m[1], 10) : 3;
}

function JpChip({ jp, big }: { jp: string; big?: boolean }) {
  const n = toneNum(jp.split(/\s+/)[0] || jp);
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={`font-mono tracking-tight ${big ? "text-lg" : "text-sm"} text-stone-700`}
      >
        {jp}
      </span>
      <span
        className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold ${TONE_COLORS[n - 1]}`}
        title={`Tone ${n}`}
      >
        {n}
      </span>
    </span>
  );
}

export function CharPopup({ token, anchor, voiceStatus, onClose }: CharPopupProps) {
  // The popup only renders after a user click (client-only), so reading the
  // viewport during render is safe — no SSR/hydration concerns.
  const { isMobile, style } = useMemo(() => {
    if (typeof window === "undefined") {
      return { isMobile: false, style: {} as React.CSSProperties };
    }
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (w < 640) return { isMobile: true, style: {} as React.CSSProperties };
    const cardW = 380;
    const cardH = 340;
    let left = anchor.left + anchor.width / 2 - cardW / 2;
    left = Math.max(12, Math.min(left, w - cardW - 12));
    let top = anchor.bottom + 10;
    if (top + cardH > h - 12) {
      top = Math.max(12, anchor.top - cardH - 10);
    }
    return {
      isMobile: false,
      style: { position: "fixed", left, top, width: cardW, zIndex: 60 } as React.CSSProperties,
    };
  }, [anchor]);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const isWord = token.chars && token.chars.length > 1;
  const play = async () => {
    setPlaying(true);
    await speak(token.text, { rate: isWord ? 0.8 : 0.7, voiceStatus });
    setPlaying(false);
  };

  const playChar = (ch: string) => {
    if (ch.length === 1) void speak(ch, { rate: 0.6, voiceStatus });
  };

  return (
    <>
      {/* click-catcher */}
      <div className="fixed inset-0 z-40" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-label={`Meaning of ${token.text}`}
        className={
          isMobile
            ? "fixed inset-x-0 bottom-0 z-50 max-h-[72vh] overflow-y-auto rounded-t-2xl border-t border-[#e7e0d4] bg-white p-5 shadow-2xl"
            : "rounded-xl border border-[#e7e0d4] bg-white p-4 shadow-2xl"
        }
        style={isMobile ? {} : style}
      >
        {/* header */}
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <span
              className={`font-zh font-semibold leading-none text-stone-900 ${
                isWord ? "text-4xl" : "text-5xl"
              }`}
            >
              {token.text}
            </span>
            <div className="flex flex-col gap-1">
              {token.wordJp && (
                <JpChip jp={token.wordJp} big />
              )}
              {token.isNumber && (
                <span className="text-xs text-stone-500">read digits aloud as a number!</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={play}
              aria-label="Play pronunciation"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b45309] text-white transition hover:bg-[#92400e]"
            >
              <Volume2 className={`h-4 w-4 ${playing ? "animate-pulse" : ""}`} />
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex h-9 w-9 items-center justify-center rounded-full text-stone-400 transition hover:bg-stone-100 hover:text-stone-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* word meaning */}
        {token.wordSenses && (
          <div className="mb-3">
            {token.wordSenses.map((s, i) => (
              <p key={i} className="text-[15px] font-medium text-stone-800">
                {s}
              </p>
            ))}
          </div>
        )}

        {/* note */}
        {token.note && (
          <div className="mb-3 rounded-lg border-l-4 border-[#d97706] bg-[#fef3c7]/60 px-3 py-2">
            <p className="text-[13px] leading-relaxed text-stone-700">{token.note}</p>
          </div>
        )}

        {/* character-by-character breakdown */}
        {token.chars && token.chars.length > 0 && (
          <div>
            {isWord && (
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                Character by character
              </p>
            )}
            <div className={isWord ? "flex flex-col gap-2" : ""}>
              {token.chars.map((c, i) => (
                <button
                  key={i}
                  onClick={() => playChar(c.ch.length === 1 ? c.ch : token.text)}
                  className={
                    isWord
                      ? "flex items-center gap-3 rounded-lg px-2 py-1.5 text-left transition hover:bg-stone-50"
                      : "flex items-center gap-3 rounded-lg text-left"
                  }
                >
                  <span className="font-zh text-2xl text-stone-800">{c.ch}</span>
                  <span className="flex flex-col">
                    <JpChip jp={c.jp} />
                    <span className="text-[13px] text-stone-600">{c.senses.join(", ")}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
