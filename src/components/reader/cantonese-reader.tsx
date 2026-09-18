"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { BookOpenText, Ear, GraduationCap, Info, Lightbulb, Volume2 } from "lucide-react";
import type { Edition, Token } from "@/data/types";
import { speak, VOICE_LABEL, type VoiceStatus } from "@/lib/cantonese-audio";
import { CharPopup } from "./char-popup";
import { VocabSection } from "./vocab-section";
import { ToneLegend } from "./tone-legend";

interface Selection {
  token: Token;
  anchor: DOMRect;
}

function useExplored(editionId: string) {
  const [explored, setExplored] = useState<Set<string>>(new Set());

  useEffect(() => {
    // deferred: load persisted progress after hydration (client-only data)
    let cancelled = false;
    const t = setTimeout(() => {
      if (cancelled) return;
      try {
        const raw = localStorage.getItem(`cklab-progress-${editionId}`);
        if (raw) setExplored(new Set(JSON.parse(raw) as string[]));
      } catch {
        /* ignore */
      }
    }, 0);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [editionId]);

  const mark = useCallback(
    (chars: string[]) => {
      setExplored((prev) => {
        const next = new Set(prev);
        let changed = false;
        for (const c of chars) {
          if (!next.has(c)) {
            next.add(c);
            changed = true;
          }
        }
        if (changed) {
          try {
            localStorage.setItem(
              `cklab-progress-${editionId}`,
              JSON.stringify([...next]),
            );
          } catch {
            /* ignore */
          }
        }
        return next;
      });
    },
    [editionId],
  );

  return [explored, mark] as const;
}

function useJyutpingToggle() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // deferred: read preference after hydration
    let cancelled = false;
    const t = setTimeout(() => {
      if (cancelled) return;
      try {
        setShow(localStorage.getItem("cklab-jp") === "1");
      } catch {
        /* ignore */
      }
    }, 0);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);
  const toggle = useCallback(() => {
    setShow((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("cklab-jp", next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);
  return [show, toggle] as const;
}

/* ---------------- Token rendering ---------------- */

function TokenButton({
  token,
  explored,
  showJp,
  onSelect,
}: {
  token: Token;
  explored: Set<string>;
  showJp: boolean;
  onSelect: (t: Token, e: DOMRect) => void;
}) {
  if (token.punct) {
    return <span className="font-zh shrink-0 text-[30px] leading-none text-stone-500 sm:text-[34px]">{token.text}</span>;
  }
  const chars = token.chars ?? [];
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSelect(token, e.currentTarget.getBoundingClientRect());
  };
  const jpRow = showJp && token.wordJp && (
    <span className="mb-0.5 block whitespace-nowrap font-mono text-[9.5px] leading-none text-[#b45309]/70">
      {token.wordJp}
    </span>
  );

  return (
    <button
      onClick={handleClick}
      title="Tap for meaning & sound"
      className="group -mx-0.5 inline-flex flex-col items-center rounded-md px-0.5 pb-1 pt-0.5 transition-colors hover:bg-[#fef3c7] focus-visible:bg-[#fef3c7] focus-visible:outline-none"
    >
      {jpRow}
      <span className="flex items-end leading-none">
        {chars.length > 0
          ? chars.map((c, i) => (
              <span
                key={i}
                className={`font-zh text-[30px] leading-none sm:text-[34px] ${
                  explored.has(c.ch)
                    ? "text-[#92400e]"
                    : "text-stone-900 group-hover:text-[#b45309]"
                }`}
              >
                {c.ch}
              </span>
            ))
          : (
              <span className="font-zh text-[30px] leading-none text-stone-900 sm:text-[34px]">
                {token.text}
              </span>
            )}
      </span>
      <span
        className={`mt-1 h-[3px] w-full rounded-full transition-colors ${
          chars.length > 1
            ? explored.has(chars[0].ch)
              ? "bg-[#d97706]"
              : "bg-transparent group-hover:bg-[#d97706]/40"
            : "bg-transparent"
        }`}
      />
    </button>
  );
}

/* ---------------- Main component ---------------- */

export function CantoneseReader({ edition }: { edition: Edition }) {
  // Audio is always the pre-generated Hong Kong voice — no device detection
  // needed, and Mandarin voices are never used.
  const [voiceStatus] = useState<VoiceStatus>({
    quality: "cantonese",
    label: VOICE_LABEL,
  });
  const [selected, setSelected] = useState<Selection | null>(null);
  const [explored, mark] = useExplored(edition.id);
  const [showJp, toggleJp] = useJyutpingToggle();
  const [playingPara, setPlayingPara] = useState<number | null>(null);

  const totalChars = useMemo(() => {
    const all = [...edition.title, ...edition.paragraphs.flat()]
      .flatMap((t) => (t.chars ? t.chars.map((c) => c.ch) : []));
    return new Set(all).size;
  }, [edition]);

  const handleSelect = useCallback(
    (token: Token, anchor: DOMRect) => {
      if (selected && selected.token.text === token.text) {
        setSelected(null);
        return;
      }
      setSelected({ token, anchor });
      if (token.chars) {
        mark(token.chars.map((c) => c.ch));
      }
      void speak(token.text, { rate: token.chars && token.chars.length > 1 ? 0.8 : 0.7, voiceStatus });
    },
    [selected, mark, voiceStatus],
  );

  const playParagraph = async (i: number, tokens: Token[]) => {
    setPlayingPara(i);
    const text = tokens.map((t) => t.text).join("");
    await speak(text, { rate: 0.9, voiceStatus });
    setPlayingPara(null);
  };

  const voiceChip = {
    loading: { dot: "bg-stone-300", text: "Loading Cantonese voice…" },
    cantonese: { dot: "bg-emerald-600", text: `Cantonese voice: ${voiceStatus.label}` },
  }[voiceStatus.quality];

  return (
    <div className="flex min-h-screen flex-col bg-[#faf7f2] text-stone-900">
      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-30 border-b border-[#e7e0d4] bg-[#faf7f2]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#b45309] text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-zh text-lg font-bold leading-none text-stone-900">
                粵語新聞閱讀室
              </h1>
              <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
                Cantonese News Reading Lab
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e7e0d4] bg-white px-3 py-1 text-xs text-stone-600">
              <span className={`h-2 w-2 rounded-full ${voiceChip.dot} ${voiceStatus.quality === "loading" ? "animate-pulse" : ""}`} />
              {voiceChip.text}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fef3c7] px-3 py-1 text-xs font-medium text-[#92400e]">
              <BookOpenText className="h-3.5 w-3.5" />
              {explored.size} / {totalChars} chars explored
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ---------- Edition intro ---------- */}
        <section className="mx-auto w-full max-w-5xl px-4 pt-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#b45309] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              Edition No. {edition.number}
            </span>
            <span className="text-xs text-stone-500">{edition.date}</span>
            <span className="text-xs text-stone-400">·</span>
            <span className="text-xs text-stone-500">{edition.topic}</span>
          </div>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-stone-700">
            {edition.intro}
          </p>
          <div className="mt-3 flex items-start gap-2 rounded-lg bg-stone-100/70 px-3 py-2">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-stone-400" />
            <p className="text-xs leading-relaxed text-stone-500">{edition.sourceNote}</p>
          </div>
        </section>

        {/* ---------- How to use ---------- */}
        <section className="mx-auto w-full max-w-5xl px-4 pt-6">
          <div className="grid gap-4 rounded-xl border border-[#e7e0d4] bg-white p-5 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-stone-700">
                <Lightbulb className="h-4 w-4 text-[#d97706]" />
                How to use this page
              </h2>
              <ul className="mt-3 space-y-1.5 text-[13.5px] leading-relaxed text-stone-600">
                <li>
                  <strong className="text-stone-800">Tap any character or word</strong> — a card
                  opens with its Jyutping, tone number, English meaning, and the
                  meaning of the combination it belongs to.
                </li>
                <li>
                  <strong className="text-stone-800">Sound plays automatically</strong> in real
                  Cantonese — every clip is recorded with a Hong Kong voice
                  (HiuMaan), so what you hear is always Cantonese, never
                  Mandarin.
                </li>
                <li>
                  <strong className="text-stone-800">Underlined words</strong> are multi-character
                  combinations; <span className="text-[#92400e]">dark amber characters</span> are
                  ones you have already explored.
                </li>
              </ul>
              <button
                onClick={toggleJp}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#e7e0d4] px-3 py-1.5 text-xs font-medium text-stone-600 transition hover:border-[#d97706] hover:text-[#b45309]"
              >
                <Ear className="h-3.5 w-3.5" />
                {showJp ? "Hide" : "Show"} Jyutping above the text
              </button>
            </div>
            <div className="rounded-lg bg-[#fdf8ef] p-4">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                The 6 tones (the number after Jyutping)
              </h3>
              <ToneLegend />
            </div>
          </div>
        </section>

        {/* ---------- Headline ---------- */}
        <section className="mx-auto w-full max-w-5xl px-4 pt-10">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b45309]">
              Today&apos;s headline
            </h2>
            <button
              onClick={() => playParagraph(-1, edition.title)}
              aria-label="Listen to the headline"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e7e0d4] bg-white text-stone-500 transition hover:bg-[#fef3c7] hover:text-[#b45309]"
            >
              <Volume2 className={`h-4 w-4 ${playingPara === -1 ? "animate-pulse text-[#b45309]" : ""}`} />
            </button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-x-1 gap-y-3 border-b border-[#e7e0d4] pb-6">
            {edition.title.map((token, i) => (
              <TokenButton
                key={`t-${i}`}
                token={token}
                explored={explored}
                showJp={showJp}
                onSelect={handleSelect}
              />
            ))}
          </div>
          <p className="mt-3 text-sm italic text-stone-500">“{edition.titleEn}”</p>
        </section>

        {/* ---------- Article ---------- */}
        <section className="mx-auto w-full max-w-5xl px-4 pt-10">
          <div className="space-y-8">
            {edition.paragraphs.map((tokens, pi) => (
              <div key={pi} className="relative rounded-xl bg-white/60 p-4 sm:p-5">
                <button
                  onClick={() => playParagraph(pi, tokens)}
                  aria-label={`Listen to paragraph ${pi + 1}`}
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#e7e0d4] bg-white text-stone-400 transition hover:bg-[#fef3c7] hover:text-[#b45309]"
                  title="Listen to the whole paragraph"
                >
                  <Volume2 className={`h-3.5 w-3.5 ${playingPara === pi ? "animate-pulse text-[#b45309]" : ""}`} />
                </button>
                <div className="flex flex-wrap items-end gap-x-1.5 gap-y-3">
                  {tokens.map((token, ti) => (
                    <TokenButton
                      key={`${pi}-${ti}`}
                      token={token}
                      explored={explored}
                      showJp={showJp}
                      onSelect={handleSelect}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[13px] text-stone-400">
            — 你讀完咗今日嘅新聞喇！(You finished today&apos;s news!) —
          </p>
        </section>

        {/* ---------- Vocabulary deep dive ---------- */}
        <div className="pt-14">
          <VocabSection vocab={edition.vocab} voiceStatus={voiceStatus} />
        </div>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="mt-auto border-t border-[#e7e0d4] bg-[#f3ede2] pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-4">
          <p className="text-xs text-stone-500">
            Cantonese News Reading Lab · Edition No. {edition.number} · A new
            legal story in written Cantonese, every day.
          </p>
          <p className="font-zh text-xs text-stone-400">聽日見！（See you tomorrow!）</p>
        </div>
      </footer>

      {/* ---------- Popup ---------- */}
      {selected && (
        <CharPopup
          token={selected.token}
          anchor={selected.anchor}
          voiceStatus={voiceStatus}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
