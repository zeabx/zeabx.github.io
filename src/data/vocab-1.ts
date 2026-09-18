import type { VocabItem } from "./types";

/**
 * Edition No. 1 — Character-combination deep dive
 * 6 legal terms + 3 Cantonese grammar characters from today's article.
 */
export const vocab1: VocabItem[] = [
  // ---------------- LEGAL TERMS ----------------
  {
    word: "追討",
    jp: "zeoi1 tou2",
    senses: ["to pursue and demand (a debt, payment, compensation)"],
    category: "legal",
    intro:
      "追 (chase) + 討 (demand). You 追討 someone when you actively chase money or property you believe is yours — a creditor chasing a debtor, a company claiming damages. Stronger than simply asking; it implies persistent, formal claiming.",
    note:
      "Common collocations: 追討欠款 demand repayment of a debt, 追討賠償 pursue compensation, 向某人追討 demand from someone.",
    examples: [
      {
        sentence: "債主上門追討欠款。",
        jp: "zoek3 zyu2 soeng5 mun4 zeoi1 tou2 him3 fun2",
        en: "The creditor came to the door to demand repayment of the debt.",
      },
      {
        sentence: "佢向業主追討按金。",
        jp: "keoi5 hoeng3 jip6 zyu2 zeoi1 tou2 on3 gam1",
        en: "He demanded his rental deposit back from the landlord.",
      },
    ],
  },
  {
    word: "裁定",
    jp: "coi4 ding6",
    senses: ["to rule, to adjudicate, to decide (court)"],
    category: "legal",
    intro:
      "裁 (judge/cut) + 定 (fix). This is the formal word for a court or arbitrator delivering a ruling. When a judge 裁定 something, it is now officially decided. You'll see it in almost every Hong Kong court report.",
    note:
      "Related: 裁判 (coi4 pun3) referee/judgement, 裁決 (coi4 kyut3) verdict/ruling, 仲裁 (zyung3 coi4) arbitration.",
    examples: [
      {
        sentence: "法官裁定佢無罪。",
        jp: "faat3 gun1 coi4 ding6 keoi5 mou4 zeoi6",
        en: "The judge ruled that he was not guilty.",
      },
      {
        sentence: "法院裁定份遺囑有效。",
        jp: "faat3 jyun2 coi4 ding6 fan6 wai4 zyu1 jau5 haau6",
        en: "The court ruled that the will is valid.",
      },
    ],
  },
  {
    word: "取消",
    jp: "ceoi2 siu1",
    senses: ["to cancel, to call off, to abolish"],
    category: "legal",
    intro:
      "取 (take) + 消 (disappear). Everyday word for cancelling anything — flights, weddings, subscriptions — but in legal news it also means annulling a licence, a contract or a right, like Panama cancelling CK Hutchison's port concession.",
    note:
      "Grammar pattern: 取消咗 = cancelled (咗 marks completion). Nouns: 取消通知 cancellation notice.",
    examples: [
      {
        sentence: "航空公司取消咗所有航班。",
        jp: "hong4 hung1 gung1 si1 ceoi2 siu1 zo2 so2 jau5 hong4 baan1",
        en: "The airline cancelled all flights.",
      },
      {
        sentence: "佢哋取消咗婚禮。",
        jp: "keoi5 dei6 ceoi2 siu1 zo2 fan1 lai5",
        en: "They called off the wedding.",
      },
    ],
  },
  {
    word: "仲裁",
    jp: "zyung3 coi4",
    senses: ["arbitration"],
    category: "legal",
    intro:
      "仲 (mediate) + 裁 (judge). Arbitration is a private alternative to going to court: both sides agree to let a neutral tribunal decide. Global companies almost always write arbitration clauses into cross-border contracts — exactly what CK Hutchison is now using against Panama.",
    note:
      "香港 is one of the world's busiest arbitration hubs (香港仲裁中心 = HKIAC). People: 仲裁員 arbitrator. Document: 仲裁裁決 arbitral award.",
    examples: [
      {
        sentence: "兩間公司同意用仲裁解決紛爭。",
        jp: "loeng5 gaan1 gung1 si1 tung4 ji3 jung6 zyung3 coi4 gaai2 kyut3 fan1 zang1",
        en: "The two companies agreed to resolve the dispute through arbitration.",
      },
      {
        sentence: "仲裁員聽取雙方嘅證供。",
        jp: "zyung3 coi4 jyun4 ting1 ceoi2 soeng1 fong1 ge3 zing3 gung1",
        en: "The arbitrator heard the evidence from both sides.",
      },
    ],
  },
  {
    word: "賠償",
    jp: "pui4 soeng4",
    senses: ["to compensate; compensation, damages"],
    category: "legal",
    intro:
      "賠 (repay/lose money) + 償 (repay). The word for paying damages. CK Hutchison 賠償 demands from Panama are called 索償 (sok2 soeng4) claims. As a verb or noun it works both ways: 要求賠償 = demand compensation.",
    note:
      "As a standalone verb, 賠 means to lose money in business: 賠本 (lose capital), 賠錢 (lose money). So a company that 賠償 someone is literally transferring money to make up a loss.",
    examples: [
      {
        sentence: "保險公司賠償咗筆錢畀佢。",
        jp: "bou2 him2 gung1 si1 pui4 soeng4 zo2 bat1 cin2 bei2 keoi5",
        en: "The insurance company paid him a sum of compensation.",
      },
      {
        sentence: "工廠污染河道，要賠償村民。",
        jp: "gung1 cong2 wu1 jim5 ho4 dou6, jiu3 pui4 soeng4 cyun1 man4",
        en: "The factory polluted the river and has to compensate the villagers.",
      },
    ],
  },
  {
    word: "官司",
    jp: "gun1 si1",
    senses: ["lawsuit, legal case, litigation"],
    category: "legal",
    intro:
      "官 (official) + 司 (manage) — an ancient phrase from imperial times, when you \u201ctook a case to the officials\u201d. It survived into modern Cantonese and is THE everyday Hong Kong word for a lawsuit. 打官司 (daa2 gun1 si1) = to fight a lawsuit.",
    note:
      "Colloquial flavour: 打贏官司 win the case, 打輸官司 lose the case, 官司纏身 tangled up in lawsuits.",
    examples: [
      {
        sentence: "佢同鄰居打官司。",
        jp: "keoi5 tung4 leon4 geoi1 daa2 gun1 si1",
        en: "He is fighting a lawsuit against his neighbour.",
      },
      {
        sentence: "呢單官司打好多年。",
        jp: "ni1 daan1 gun1 si1 daa2 hou2 do1 nin4",
        en: "This lawsuit has been dragging on for many years.",
      },
    ],
  },
  // ---------------- GRAMMAR CORNER ----------------
  {
    word: "咗",
    jp: "zo2",
    senses: ["(particle) marks a completed action"],
    category: "grammar",
    intro:
      "The most Cantonese character in today's article — it appears five times! Attach 咗 after a verb and the action is finished, exactly like English \u201c-ed\u201d or \u201chave done\u201d. It is the written-Cantonese twin of Mandarin's 了 (liu5).",
    note:
      "Pattern: verb + 咗 + object. 做咗 did · 食咗 ate · 取消咗 cancelled · 交咗畀 handed over to. Negative: 未 + verb + 咗 = not yet done: 未食咗飯 = haven't eaten yet.",
    examples: [
      {
        sentence: "我食咗飯喇。",
        jp: "ngo5 sik6 zo2 faan6 laa3",
        en: "I have (already) eaten.",
      },
      {
        sentence: "佢買咗層樓。",
        jp: "keoi5 maai5 zo2 cang4 lau2",
        en: "He bought a flat.",
      },
    ],
  },
  {
    word: "嘅",
    jp: "ge3",
    senses: ["(particle) \u2019s / of — possessive"],
    category: "grammar",
    intro:
      "嘅 links two nouns the way English uses \u2019s or \u201cof\u201d: 長和嘅投資 = CK Hutchison's investment. It appeared three times today and ranks among the top five most frequent characters in any written-Cantonese text.",
    note:
      "It also turns phrases into descriptions: 好嘅 = good ones, 我嘅書 = my book. Mandarin's equivalent is 的 (dik1) — you will never see 的 in genuine written Cantonese sentences like this one.",
    examples: [
      {
        sentence: "呢本書係我嘅。",
        jp: "ni1 bun2 syu1 hai6 ngo5 ge3",
        en: "This book is mine.",
      },
      {
        sentence: "佢嘅律師好犀利。",
        jp: "keoi5 ge3 leoi5 si1 hou2 sai1 lei6",
        en: "His lawyer is really sharp.",
      },
    ],
  },
  {
    word: "喺",
    jp: "hai2",
    senses: ["(particle) at / in / to be located at"],
    category: "grammar",
    intro:
      "喺 is the written-Cantonese verb \u201cto be at\u201d. 我喺香港 = I am in Hong Kong. It also builds location phrases in front of other verbs: 喺巴拿馬經營港口 = operate ports IN Panama. Mandarin's equivalent is 在 (zoi6).",
    note:
      "Watch the difference: 喺 hai2 (at) vs 係 hai6 (to be). Same sound, different tone — 喺=2 (rising), 係=6 (low flat). 我喺屋企 = I am at home; 我係律師 = I am a lawyer.",
    examples: [
      {
        sentence: "我喺屋企做嘢。",
        jp: "ngo5 hai2 uk1 kei2 zou6 je5",
        en: "I work at home.",
      },
      {
        sentence: "法庭喺下晝開庭。",
        jp: "faat3 ting4 hai2 haa6 zau3 hoi1 ting4",
        en: "The court sits in the afternoon.",
      },
    ],
  },
];
