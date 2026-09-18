/**
 * Collect every speakable Chinese string from the edition + vocab data files.
 * Mirrors exactly what the UI can ask speak() to say:
 *  - token.text (article + headline tokens, non-punctuation)
 *  - each char inside token.chars (popup per-char play buttons)
 *  - joined headline text (listen-headline button)
 *  - joined paragraph text (listen-paragraph buttons)
 *  - vocab words + example sentences
 *
 * Keys in the manifest are CLEANED the same way speak() cleans them
 * (trailing punctuation / whitespace stripped).
 *
 * Run: node scripts/collect-speakable.mts
 */
import { writeFileSync } from "node:fs";
import { edition1 } from "../src/data/edition-1.ts";

const clean = (s: string): string => s.replace(/[，。、！？；：,.!?;:\s]+$/g, "");

const texts = new Set<string>();
const add = (s: string) => {
  const c = clean(s);
  if (c) texts.add(c);
};

for (const token of [...edition1.title, ...edition1.paragraphs.flat()]) {
  if (token.punct) continue;
  add(token.text);
  if (token.chars) for (const c of token.chars) add(c.ch);
}

// joined texts as built by playParagraph()
add(edition1.title.map((t) => t.text).join(""));
for (const para of edition1.paragraphs) {
  add(para.map((t) => t.text).join(""));
}

// vocabulary deep-dive
for (const v of edition1.vocab) {
  add(v.word);
  for (const ex of v.examples) add(ex.sentence);
}

const manifest = [...texts];
writeFileSync(
  new URL("./speakable-manifest.json", import.meta.url),
  JSON.stringify(manifest, null, 2),
);
console.log(`Collected ${manifest.length} unique speakable strings`);
