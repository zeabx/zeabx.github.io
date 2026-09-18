// Data model for the Daily Cantonese Reading Lab
// Each edition = one news story rendered in written Cantonese (粵文)

export interface CharSense {
  /** the single character */
  ch: string;
  /** Jyutping romanization, e.g. "coeng4" */
  jp: string;
  /** English meanings of the character on its own */
  senses: string[];
}

export interface Token {
  /** token text — one or more characters, or punctuation */
  text: string;
  /** per-character breakdown (required for non-punctuation tokens) */
  chars?: CharSense[];
  /** Jyutping of the whole combination, e.g. "zyung3 coi4" */
  wordJp?: string;
  /** English meanings of the combination */
  wordSenses?: string[];
  /** grammar / usage / cultural note shown in the popup */
  note?: string;
  /** true for punctuation tokens (not clickable) */
  punct?: boolean;
  /** digits token (special reading note) */
  isNumber?: boolean;
}

export interface VocabExample {
  sentence: string;
  jp: string;
  en: string;
}

export interface VocabItem {
  word: string;
  jp: string;
  /** English meanings */
  senses: string[];
  /** "legal" | "grammar" */
  category: "legal" | "grammar";
  /** short introduction of the word */
  intro: string;
  /** extra usage notes (optional) */
  note?: string;
  examples: VocabExample[];
}

export interface Edition {
  id: string;
  /** display date, e.g. "Tuesday, 16 September 2026" */
  date: string;
  number: number;
  /** big Cantonese headline */
  title: Token[];
  /** English translation of the headline */
  titleEn: string;
  /** one-line English intro to the story */
  intro: string;
  /** attribution / adaptation note */
  sourceNote: string;
  topic: string;
  paragraphs: Token[][];
  vocab: VocabItem[];
}
