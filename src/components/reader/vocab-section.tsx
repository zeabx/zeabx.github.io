"use client";

import { useState } from "react";
import { Scale, MessageSquareQuote, Volume2 } from "lucide-react";
import type { VocabItem } from "@/data/types";
import { speak, type VoiceStatus } from "@/lib/cantonese-audio";

function VocabCard({ item, voiceStatus }: { item: VocabItem; voiceStatus: VoiceStatus }) {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const isLegal = item.category === "legal";

  const playWord = () => void speak(item.word, { rate: 0.7, voiceStatus });
  const playExample = async (i: number) => {
    setPlayingIdx(i);
    await speak(item.examples[i].sentence, { rate: 0.85, voiceStatus });
    setPlayingIdx(null);
  };

  return (
    <div className="flex flex-col rounded-xl border border-[#e7e0d4] bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* header */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-zh text-3xl font-semibold text-stone-900">{item.word}</h3>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white ${
                isLegal ? "bg-[#0f766e]" : "bg-[#9f1239]"
              }`}
            >
              {isLegal ? (
                <Scale className="h-3 w-3" />
              ) : (
                <MessageSquareQuote className="h-3 w-3" />
              )}
              {isLegal ? "legal term" : "grammar"}
            </span>
          </div>
          <p className="mt-1 font-mono text-sm text-[#b45309]">{item.jp}</p>
        </div>
        <button
          onClick={playWord}
          aria-label={`Play ${item.word}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b45309] text-white transition hover:bg-[#92400e]"
        >
          <Volume2 className="h-4 w-4" />
        </button>
      </div>

      {/* meanings */}
      <ul className="mb-3 space-y-0.5">
        {item.senses.map((s, i) => (
          <li key={i} className="text-[15px] font-medium leading-snug text-stone-800">
            {s}
          </li>
        ))}
      </ul>

      {/* intro */}
      <p className="mb-3 text-[13.5px] leading-relaxed text-stone-600">{item.intro}</p>

      {/* note */}
      {item.note && (
        <div className="mb-4 rounded-lg bg-stone-50 px-3 py-2">
          <p className="text-[12.5px] leading-relaxed text-stone-500">{item.note}</p>
        </div>
      )}

      {/* examples */}
      <div className="mt-auto border-t border-dashed border-[#e7e0d4] pt-3">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-stone-400">
          Seen in other sentences
        </p>
        <div className="space-y-3">
          {item.examples.map((ex, i) => (
            <div key={i} className="flex items-start gap-2">
              <button
                onClick={() => playExample(i)}
                aria-label="Play example"
                className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e7e0d4] text-stone-500 transition hover:bg-[#fef3c7] hover:text-[#b45309]"
              >
                <Volume2
                  className={`h-3.5 w-3.5 ${playingIdx === i ? "animate-pulse text-[#b45309]" : ""}`}
                />
              </button>
              <div className="min-w-0">
                <p className="font-zh text-[17px] leading-snug text-stone-900">{ex.sentence}</p>
                <p className="font-mono text-[12px] text-stone-500">{ex.jp}</p>
                <p className="text-[13px] italic text-stone-600">{ex.en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VocabSection({
  vocab,
  voiceStatus,
}: {
  vocab: VocabItem[];
  voiceStatus: VoiceStatus;
}) {
  const legal = vocab.filter((v) => v.category === "legal");
  const grammar = vocab.filter((v) => v.category === "grammar");

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-16" id="vocab">
      <div className="mb-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b45309]">
          Deep dive
        </p>
        <h2 className="mt-1 text-2xl font-bold text-stone-900">
          Today&apos;s Character Combos 詞語
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-stone-600">
          Nine combinations pulled from the article: six you will meet in every
          legal news story, and three Cantonese grammar characters that make the
          text unmistakably Cantonese. Each one comes with fresh example
          sentences you have not seen yet.
        </p>
      </div>

      <div className="mb-3 flex items-center gap-2">
        <Scale className="h-4 w-4 text-[#0f766e]" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f766e]">
          Legal vocabulary
        </h3>
      </div>
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {legal.map((item) => (
          <VocabCard key={item.word} item={item} voiceStatus={voiceStatus} />
        ))}
      </div>

      <div className="mb-3 flex items-center gap-2">
        <MessageSquareQuote className="h-4 w-4 text-[#9f1239]" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#9f1239]">
          Cantonese grammar corner
        </h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {grammar.map((item) => (
          <VocabCard key={item.word} item={item} voiceStatus={voiceStatus} />
        ))}
      </div>
    </section>
  );
}
