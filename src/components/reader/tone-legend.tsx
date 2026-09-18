"use client";

const TONES = [
  { n: 1, jp: "1", desc: "high & flat — hold a steady high note", color: "#b45309" },
  { n: 2, jp: "2", desc: "rising — like an English question: \u201chuh?\u201d", color: "#d97706" },
  { n: 3, jp: "3", desc: "mid & flat — neutral, even tone", color: "#ca8a04" },
  { n: 4, jp: "4", desc: "low & falling — slide downhill", color: "#4d7c0f" },
  { n: 5, jp: "5", desc: "low & rising — a hesitant \u201cum…?\u201d", color: "#0f766e" },
  { n: 6, jp: "6", desc: "low & flat — a low murmur", color: "#7c2d12" },
];

export function ToneLegend() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
      {TONES.map((t) => (
        <div key={t.n} className="flex items-center gap-2">
          <span
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
            style={{ backgroundColor: t.color }}
          >
            {t.n}
          </span>
          <span className="text-xs leading-tight text-stone-600">{t.desc}</span>
        </div>
      ))}
    </div>
  );
}
