import type { Edition } from "./types";
import { vocab1 } from "./vocab-1";

/**
 * Edition No. 1 — 16 September 2026
 * Story: CK Hutchison launches international arbitration against Panama
 * Based on reporting by Reuters / SCMP / AP / WSJ (Aug 2026), adapted into
 * written Cantonese (粵文) at a learner-friendly level.
 */
export const edition1: Edition = {
  id: "2026-09-16",
  date: "Tuesday, 16 September 2026",
  number: 1,
  vocab: vocab1,
  titleEn: "CK Hutchison demands US$1.5 billion from Panama",
  intro:
    "A Hong Kong conglomerate is suing the Central American nation of Panama at an international tribunal, after its Supreme Court stripped the company of two ports it had run for nearly 30 years.",
  sourceNote:
    "Based on reporting by Reuters, South China Morning Post, AP and WSJ (Feb–Aug 2026), adapted into written Cantonese (粵文) for learners.",
  topic: "International law · Arbitration · Hong Kong",
  title: [
    {
      text: "長和",
      chars: [
        { ch: "長", jp: "coeng4", senses: ["long", "chief (in 長江 Yangtze)"] },
        { ch: "和", jp: "wo4", senses: ["and", "harmony", "peace"] },
      ],
      wordJp: "coeng4 wo4",
      wordSenses: ["CK Hutchison (Hong Kong conglomerate)"],
      note: "Short name of CK Hutchison Holdings in Hong Kong media (from 長江 and 和記， its parent firms). You will see it in every HK business story.",
    },
    {
      text: "向",
      chars: [{ ch: "向", jp: "hoeng3", senses: ["towards", "to (a direction or person)"] }],
      wordJp: "hoeng3",
      wordSenses: ["towards", "to"],
    },
    {
      text: "巴拿馬",
      chars: [
        { ch: "巴", jp: "baa1", senses: ["phonetic in foreign names"] },
        { ch: "拿", jp: "naa4", senses: ["to take", "to hold"] },
        { ch: "馬", jp: "maa5", senses: ["horse"] },
      ],
      wordJp: "baa1 naa4 maa5",
      wordSenses: ["Panama"],
      note: "Foreign names are usually transliterated character by character — the characters are chosen for sound, not meaning. 馬 (horse) here is just a sound.",
    },
    {
      text: "追討",
      chars: [
        { ch: "追", jp: "zeoi1", senses: ["to chase", "to pursue"] },
        { ch: "討", jp: "tou2", senses: ["to demand", "to discuss"] },
      ],
      wordJp: "zeoi1 tou2",
      wordSenses: ["to pursue and demand (a debt, payment)"],
      note: "追 = chase after + 討 = demand → chase someone for money you are owed. Featured in today's vocabulary section!",
    },
    {
      text: "15",
      chars: [{ ch: "15", jp: "sap6 ng5", senses: ["fifteen"] }],
      wordJp: "sap6 ng5",
      wordSenses: ["15 — read aloud as 十五 (sap6 ng5)"],
      isNumber: true,
      note: "Digits in a newspaper are read out as full Cantonese numbers: 15 = 十五 (sap6 ng5). You already know 五 from Lesson 2!",
    },
    {
      text: "億",
      chars: [{ ch: "億", jp: "jik1", senses: ["hundred million"] }],
      wordJp: "jik1",
      wordSenses: ["100 million"],
      note: "Chinese counts in big steps: 萬 = 10,000, 億 = 100,000,000. So 15億 = 15 × 100 million = 1.5 billion USD.",
    },
    {
      text: "美元",
      chars: [
        { ch: "美", jp: "mei5", senses: ["beautiful", "America (short for 美國)"] },
        { ch: "元", jp: "jyun4", senses: ["dollar", "currency unit"] },
      ],
      wordJp: "mei5 jyun4",
      wordSenses: ["US dollar"],
    },
  ],
  paragraphs: [
    // ---------- Paragraph 1 ----------
    [
      {
        text: "香港",
        chars: [
          { ch: "香", jp: "hoeng1", senses: ["fragrant"] },
          { ch: "港", jp: "gong2", senses: ["harbour", "Hong Kong (short form)"] },
        ],
        wordJp: "hoeng1 gong2",
        wordSenses: ["Hong Kong (literally: fragrant harbour)"],
      },
      {
        text: "公司",
        chars: [
          { ch: "公", jp: "gung1", senses: ["public", "shared"] },
          { ch: "司", jp: "si1", senses: ["to manage", "department"] },
        ],
        wordJp: "gung1 si1",
        wordSenses: ["company", "firm"],
      },
      {
        text: "長和",
        chars: [
          { ch: "長", jp: "coeng4", senses: ["long", "chief"] },
          { ch: "和", jp: "wo4", senses: ["and", "harmony"] },
        ],
        wordJp: "coeng4 wo4",
        wordSenses: ["CK Hutchison"],
      },
      {
        text: "喺",
        chars: [{ ch: "喺", jp: "hai2", senses: ["at", "in", "located at"] }],
        wordJp: "hai2",
        wordSenses: ["at / in / to be located at"],
        note: "CANTONESE-ONLY character! Standard written Chinese uses 在 (zoi6). Whenever you see 喺 you know the text is true written Cantonese. It is one of the most common characters in Hong Kong writing.",
      },
      {
        text: "巴拿馬",
        chars: [
          { ch: "巴", jp: "baa1", senses: ["phonetic"] },
          { ch: "拿", jp: "naa4", senses: ["to take"] },
          { ch: "馬", jp: "maa5", senses: ["horse"] },
        ],
        wordJp: "baa1 naa4 maa5",
        wordSenses: ["Panama"],
      },
      {
        text: "運河",
        chars: [
          { ch: "運", jp: "wan6", senses: ["to transport", "luck"] },
          { ch: "河", jp: "ho4", senses: ["river"] },
        ],
        wordJp: "wan6 ho4",
        wordSenses: ["canal (transport river)"],
      },
      {
        text: "經營",
        chars: [
          { ch: "經", jp: "ging1", senses: ["through", "classics", "to manage"] },
          { ch: "營", jp: "jing4", senses: ["to operate", "camp"] },
        ],
        wordJp: "ging1 jing4",
        wordSenses: ["to operate / run (a business)"],
      },
      {
        text: "兩個",
        chars: [
          { ch: "兩", jp: "loeng5", senses: ["two (before measure words)"] },
          { ch: "個", jp: "go3", senses: ["general measure word"] },
        ],
        wordJp: "loeng5 go3",
        wordSenses: ["two (of something)"],
        note: "From your Lesson 2! Cantonese uses 兩 (loeng5), NOT 二 (ji6), when counting with a measure word: 兩個 = two items. 二 is only for digits, dates and maths.",
      },
      {
        text: "港口",
        chars: [
          { ch: "港", jp: "gong2", senses: ["harbour"] },
          { ch: "口", jp: "hau2", senses: ["mouth", "entrance"] },
        ],
        wordJp: "gong2 hau2",
        wordSenses: ["port, harbour"],
      },
      { text: "，", punct: true },
      {
        text: "做",
        chars: [{ ch: "做", jp: "zou6", senses: ["to do", "to make", "to work as"] }],
        wordJp: "zou6",
        wordSenses: ["to do / make"],
      },
      {
        text: "咗",
        chars: [{ ch: "咗", jp: "zo2", senses: ["(completed-action particle)"] }],
        wordJp: "zo2",
        wordSenses: ["marks a completed action — like English \u201c-ed\u201d"],
        note: "CANTONESE-ONLY character and the heartbeat of spoken Cantonese! Verb + 咗 = the action is done: 做咗 = did, 食咗 = ate. Featured in today's grammar corner.",
      },
      {
        text: "差不多",
        chars: [
          { ch: "差", jp: "caa1", senses: ["to differ", "short of"] },
          { ch: "不", jp: "bat6", senses: ["not", "no"] },
          { ch: "多", jp: "do1", senses: ["many", "much"] },
        ],
        wordJp: "caa1 bat6 do1",
        wordSenses: ["almost, nearly"],
      },
      {
        text: "三十年",
        chars: [
          { ch: "三", jp: "saam1", senses: ["three (Lesson 2!)"] },
          { ch: "十", jp: "sap6", senses: ["ten"] },
          { ch: "年", jp: "nin4", senses: ["year"] },
        ],
        wordJp: "saam1 sap6 nin4",
        wordSenses: ["thirty years"],
      },
      { text: "。", punct: true },
      {
        text: "今年",
        chars: [
          { ch: "今", jp: "gam1", senses: ["now", "this (current)"] },
          { ch: "年", jp: "nin4", senses: ["year"] },
        ],
        wordJp: "gam1 nin4",
        wordSenses: ["this year"],
      },
      {
        text: "一月",
        chars: [
          { ch: "一", jp: "jat1", senses: ["one (Lesson 2!)"] },
          { ch: "月", jp: "jyut6", senses: ["moon", "month"] },
        ],
        wordJp: "jat1 jyut6",
        wordSenses: ["January (month one)"],
        note: "Months are simply numbers + 月： 一月 January, 二月 February, 十二月 December. Free vocabulary once you know numbers!",
      },
      { text: "，", punct: true },
      {
        text: "巴拿馬",
        chars: [
          { ch: "巴", jp: "baa1", senses: ["phonetic"] },
          { ch: "拿", jp: "naa4", senses: ["to take"] },
          { ch: "馬", jp: "maa5", senses: ["horse"] },
        ],
        wordJp: "baa1 naa4 maa5",
        wordSenses: ["Panama"],
      },
      {
        text: "最高法院",
        chars: [
          { ch: "最", jp: "zeoi3", senses: ["most", "-est"] },
          { ch: "高", jp: "gou1", senses: ["tall", "high"] },
          { ch: "法", jp: "faat3", senses: ["law", "method"] },
          { ch: "院", jp: "jyun2", senses: ["institution", "courtyard"] },
        ],
        wordJp: "zeoi3 gou1 faat3 jyun2",
        wordSenses: ["Supreme Court"],
        note: "法 (law) is the key character of every legal word: 法律 law, 法官 judge, 法庭 courtroom, 法院 court. Learn it once, read it everywhere.",
      },
      {
        text: "裁定",
        chars: [
          { ch: "裁", jp: "coi4", senses: ["to judge", "to decide", "to cut"] },
          { ch: "定", jp: "ding6", senses: ["fixed", "to decide"] },
        ],
        wordJp: "coi4 ding6",
        wordSenses: ["to rule, to adjudicate (court decision)"],
        note: "A formal court word: when a judge 裁定 something, it is an official ruling. Featured in today's vocabulary section!",
      },
      {
        text: "份",
        chars: [{ ch: "份", jp: "fan6", senses: ["measure word (documents, copies)"] }],
        wordJp: "fan6",
        wordSenses: ["measure word for documents / contracts"],
        note: "Remember 個 from Lesson 2? Cantonese has dozens of these measure words. 份 is used for flat items and documents: 一份合約 = one contract, 一份報紙 = one newspaper.",
      },
      {
        text: "合約",
        chars: [
          { ch: "合", jp: "hap6", senses: ["to join", "to fit together"] },
          { ch: "約", jp: "joek3", senses: ["agreement", "appointment"] },
        ],
        wordJp: "hap6 joek3",
        wordSenses: ["contract"],
      },
      {
        text: "違憲",
        chars: [
          { ch: "違", jp: "wai4", senses: ["to violate", "to go against"] },
          { ch: "憲", jp: "hin3", senses: ["constitution"] },
        ],
        wordJp: "wai4 hin3",
        wordSenses: ["unconstitutional"],
      },
      { text: "，", punct: true },
      {
        text: "取消",
        chars: [
          { ch: "取", jp: "ceoi2", senses: ["to take", "to fetch"] },
          { ch: "消", jp: "siu1", senses: ["to disappear", "to eliminate"] },
        ],
        wordJp: "ceoi2 siu1",
        wordSenses: ["to cancel"],
      },
      {
        text: "咗",
        chars: [{ ch: "咗", jp: "zo2", senses: ["(completed-action particle)"] }],
        wordJp: "zo2",
        wordSenses: ["completed action: cancelled"],
      },
      {
        text: "長和",
        chars: [
          { ch: "長", jp: "coeng4", senses: ["long", "chief"] },
          { ch: "和", jp: "wo4", senses: ["and", "harmony"] },
        ],
        wordJp: "coeng4 wo4",
        wordSenses: ["CK Hutchison"],
      },
      {
        text: "嘅",
        chars: [{ ch: "嘅", jp: "ge3", senses: ["\u2019s", "of (possessive)"] }],
        wordJp: "ge3",
        wordSenses: ["possessive particle — like English \u2019s or \u201cof\u201d"],
        note: "CANTONESE-ONLY character! 長和嘅經營權 = the operating rights OF CK Hutchison. Standard Chinese uses 的 instead. 嘅 tells you immediately that this is written Cantonese.",
      },
      {
        text: "經營權",
        chars: [
          { ch: "經", jp: "ging1", senses: ["through", "to manage"] },
          { ch: "營", jp: "jing4", senses: ["to operate"] },
          { ch: "權", jp: "kyun4", senses: ["right", "authority"] },
        ],
        wordJp: "ging1 jing4 kyun4",
        wordSenses: ["operating rights, concession"],
        note: "權 (right/power) appears in all legal-rights words: 人權 human rights, 版權 copyright, 權益 rights and interests.",
      },
      { text: "。", punct: true },
      {
        text: "幾個月",
        chars: [
          { ch: "幾", jp: "gei2", senses: ["several", "how many"] },
          { ch: "個", jp: "go3", senses: ["measure word"] },
          { ch: "月", jp: "jyut6", senses: ["month"] },
        ],
        wordJp: "gei2 go3 jyut6",
        wordSenses: ["a few months"],
      },
      {
        text: "之後",
        chars: [
          { ch: "之", jp: "zi1", senses: ["(linking word)", "it"] },
          { ch: "後", jp: "hau6", senses: ["after", "behind"] },
        ],
        wordJp: "zi1 hau6",
        wordSenses: ["after, afterwards"],
      },
      { text: "，", punct: true },
      {
        text: "營運",
        chars: [
          { ch: "營", jp: "jing4", senses: ["to operate"] },
          { ch: "運", jp: "wan6", senses: ["to transport", "to run"] },
        ],
        wordJp: "jing4 wan6",
        wordSenses: ["operations, to operate"],
      },
      {
        text: "業務",
        chars: [
          { ch: "業", jp: "jip6", senses: ["business", "profession"] },
          { ch: "務", jp: "mou6", senses: ["affairs", "duty"] },
        ],
        wordJp: "jip6 mou6",
        wordSenses: ["business, business affairs"],
      },
      {
        text: "交",
        chars: [{ ch: "交", jp: "gaau1", senses: ["to hand over", "to deliver", "to exchange"] }],
        wordJp: "gaau1",
        wordSenses: ["to hand over / deliver"],
      },
      {
        text: "咗",
        chars: [{ ch: "咗", jp: "zo2", senses: ["(completed-action particle)"] }],
        wordJp: "zo2",
        wordSenses: ["completed action: handed over"],
      },
      {
        text: "畀",
        chars: [{ ch: "畀", jp: "bei2", senses: ["to, for (giving)"] }],
        wordJp: "bei2",
        wordSenses: ["to / for — marks the receiver"],
        note: "CANTONESE-ONLY character! 交咗畀馬士基 = handed it over TO Maersk. Standard Chinese uses 給. Pattern: verb + 咗 + 畀 + someone = did it to/for someone.",
      },
      {
        text: "丹麥",
        chars: [
          { ch: "丹", jp: "daan1", senses: ["red (literary)", "phonetic"] },
          { ch: "麥", jp: "mak6", senses: ["wheat", "phonetic"] },
        ],
        wordJp: "daan1 mak6",
        wordSenses: ["Denmark"],
      },
      {
        text: "航運",
        chars: [
          { ch: "航", jp: "hong4", senses: ["to sail", "navigate"] },
          { ch: "運", jp: "wan6", senses: ["to transport"] },
        ],
        wordJp: "hong4 wan6",
        wordSenses: ["shipping, maritime transport"],
      },
      {
        text: "馬士基",
        chars: [
          { ch: "馬", jp: "maa5", senses: ["horse"] },
          { ch: "士", jp: "si6", senses: ["scholar", "phonetic"] },
          { ch: "基", jp: "gei1", senses: ["base", "phonetic"] },
        ],
        wordJp: "maa5 si6 gei1",
        wordSenses: ["Maersk (Danish shipping giant)"],
      },
      { text: "。", punct: true },
    ],
    // ---------- Paragraph 2 ----------
    [
      {
        text: "上個禮拜",
        chars: [
          { ch: "上", jp: "soeng6", senses: ["up", "previous", "on (a surface)"] },
          { ch: "個", jp: "go3", senses: ["measure word"] },
          { ch: "禮", jp: "lai5", senses: ["courtesy", "ritual"] },
          { ch: "拜", jp: "baai3", senses: ["to worship", "to visit"] },
        ],
        wordJp: "soeng6 go3 lai5 baai3",
        wordSenses: ["last week"],
        note: "禮拜 (literally: worship) is THE colloquial Cantonese word for week — a leftover from calling Sunday the day of worship. 禮拜一 = Monday, 呢個禮拜 = this week, 上個禮拜 = last week.",
      },
      { text: "，", punct: true },
      {
        text: "長和",
        chars: [
          { ch: "長", jp: "coeng4", senses: ["long", "chief"] },
          { ch: "和", jp: "wo4", senses: ["and", "harmony"] },
        ],
        wordJp: "coeng4 wo4",
        wordSenses: ["CK Hutchison"],
      },
      {
        text: "正式",
        chars: [
          { ch: "正", jp: "zing3", senses: ["correct", "main", "proper"] },
          { ch: "式", jp: "sik1", senses: ["style", "form", "ceremony"] },
        ],
        wordJp: "zing3 sik1",
        wordSenses: ["formally, officially"],
      },
      {
        text: "展開",
        chars: [
          { ch: "展", jp: "zin2", senses: ["to unfold", "to exhibit"] },
          { ch: "開", jp: "hoi1", senses: ["to open"] },
        ],
        wordJp: "zin2 hoi1",
        wordSenses: ["to launch, to begin, to unfold"],
      },
      {
        text: "國際",
        chars: [
          { ch: "國", jp: "gwok3", senses: ["country", "nation"] },
          { ch: "際", jp: "zai3", senses: ["border", "between"] },
        ],
        wordJp: "gwok3 zai3",
        wordSenses: ["international"],
      },
      {
        text: "仲裁",
        chars: [
          { ch: "仲", jp: "zyung3", senses: ["to arbitrate", "second"] },
          { ch: "裁", jp: "coi4", senses: ["to judge", "to decide"] },
        ],
        wordJp: "zyung3 coi4",
        wordSenses: ["arbitration"],
        note: "Instead of suing in national courts, companies often bring disputes before a neutral private tribunal (e.g. in The Hague or London) — that is 仲裁. Featured in today's vocabulary section!",
      },
      { text: "，", punct: true },
      {
        text: "話",
        chars: [{ ch: "話", jp: "waa6", senses: ["to say", "to claim", "speech"] }],
        wordJp: "waa6",
        wordSenses: ["to say / to claim"],
        note: "In Cantonese, 話 does the job of English \u201csaid\u201d — you will see it constantly in news: 佢話 = he said. It replaces the Mandarin word 說 (syut3).",
      },
      {
        text: "巴拿馬",
        chars: [
          { ch: "巴", jp: "baa1", senses: ["phonetic"] },
          { ch: "拿", jp: "naa4", senses: ["to take"] },
          { ch: "馬", jp: "maa5", senses: ["horse"] },
        ],
        wordJp: "baa1 naa4 maa5",
        wordSenses: ["Panama"],
      },
      {
        text: "摧毀",
        chars: [
          { ch: "摧", jp: "ceoi1", senses: ["to break", "to destroy"] },
          { ch: "毀", jp: "wai2", senses: ["to ruin", "to damage"] },
        ],
        wordJp: "ceoi1 wai2",
        wordSenses: ["to destroy, to wreck"],
      },
      {
        text: "咗",
        chars: [{ ch: "咗", jp: "zo2", senses: ["(completed-action particle)"] }],
        wordJp: "zo2",
        wordSenses: ["completed action: destroyed"],
      },
      {
        text: "佢哋",
        chars: [
          { ch: "佢", jp: "keoi5", senses: ["he / she / it"] },
          { ch: "哋", jp: "dei6", senses: ["(plural marker)"] },
        ],
        wordJp: "keoi5 dei6",
        wordSenses: ["they, them"],
        note: "CANTONESE pronouns! 佢 = he/she (standard Chinese: 他/她)， and 哋 = plural \u201c-s\u201d: 佢哋 = they, 我哋 = we, 你哋 = you (plural).",
      },
      {
        text: "嘅",
        chars: [{ ch: "嘅", jp: "ge3", senses: ["\u2019s", "of (possessive)"] }],
        wordJp: "ge3",
        wordSenses: ["possessive particle"],
      },
      {
        text: "投資",
        chars: [
          { ch: "投", jp: "tau4", senses: ["to throw", "to put in"] },
          { ch: "資", jp: "zi1", senses: ["capital", "resources"] },
        ],
        wordJp: "tau4 zi1",
        wordSenses: ["investment, to invest"],
      },
      { text: "，", punct: true },
      {
        text: "要求",
        chars: [
          { ch: "要", jp: "jiu3", senses: ["to want", "to need", "must"] },
          { ch: "求", jp: "kau4", senses: ["to seek", "to beg"] },
        ],
        wordJp: "jiu3 kau4",
        wordSenses: ["to demand, to require"],
      },
      {
        text: "賠償",
        chars: [
          { ch: "賠", jp: "pui4", senses: ["to pay compensation", "to lose money"] },
          { ch: "償", jp: "soeng4", senses: ["to repay", "to compensate"] },
        ],
        wordJp: "pui4 soeng4",
        wordSenses: ["compensation, to compensate"],
        note: "Featured in today's vocabulary section! 賠 alone also means \u201cto lose money in business\u201d: 賠本 = lose one's capital.",
      },
      {
        text: "超過",
        chars: [
          { ch: "超", jp: "ciu1", senses: ["to exceed", "super-"] },
          { ch: "過", jp: "gwo3", senses: ["to pass", "over"] },
        ],
        wordJp: "ciu1 gwo3",
        wordSenses: ["more than, to exceed"],
      },
      {
        text: "十五億",
        chars: [
          { ch: "十", jp: "sap6", senses: ["ten"] },
          { ch: "五", jp: "ng5", senses: ["five (Lesson 2!)"] },
          { ch: "億", jp: "jik1", senses: ["hundred million"] },
        ],
        wordJp: "sap6 ng5 jik1",
        wordSenses: ["1.5 billion"],
        note: "十五 = fifteen — you can now READ this because of Lesson 2! 15 × 億 (100M) = 1.5 billion USD.",
      },
      {
        text: "美元",
        chars: [
          { ch: "美", jp: "mei5", senses: ["beautiful", "America"] },
          { ch: "元", jp: "jyun4", senses: ["dollar"] },
        ],
        wordJp: "mei5 jyun4",
        wordSenses: ["US dollars"],
      },
      { text: "，", punct: true },
      {
        text: "即係",
        chars: [
          { ch: "即", jp: "zik1", senses: ["namely", "exactly"] },
          { ch: "係", jp: "hai6", senses: ["to be (is/are)"] },
        ],
        wordJp: "zik1 hai6",
        wordSenses: ["that is, in other words, i.e."],
        note: "CANTONESE phrase: 即係 = \u201cwhich means / in other words\u201d. 係 (hai6) is the Cantonese \u201cto be\u201d (standard Chinese: 是 si6). News writers use 即係 to convert figures for local readers.",
      },
      {
        text: "大約",
        chars: [
          { ch: "大", jp: "daai6", senses: ["big"] },
          { ch: "約", jp: "joek3", senses: ["approximately", "agreement"] },
        ],
        wordJp: "daai6 joek3",
        wordSenses: ["approximately, about"],
        note: "See 約 in both 合約 (contract) and 大約 (approximately) — one character, related senses: something agreed/fixed vs. roughly.",
      },
      {
        text: "一百一十七億",
        chars: [
          { ch: "一", jp: "jat1", senses: ["one (Lesson 2!)"] },
          { ch: "百", jp: "baak3", senses: ["hundred"] },
          { ch: "一", jp: "jat1", senses: ["one"] },
          { ch: "十", jp: "sap6", senses: ["ten"] },
          { ch: "七", jp: "cat1", senses: ["seven"] },
          { ch: "億", jp: "jik1", senses: ["hundred million"] },
        ],
        wordJp: "jat1 baak3 jat1 sap6 cat1 jik1",
        wordSenses: ["11.7 billion"],
        note: "一百 = 100. 一百一十七 = 117. The little 一 before 十 is how Chinese says \u201cand\u201d in numbers: one hundred AND seventeen. 117 × 100M = 11.7 billion HKD.",
      },
      {
        text: "港元",
        chars: [
          { ch: "港", jp: "gong2", senses: ["harbour", "Hong Kong"] },
          { ch: "元", jp: "jyun4", senses: ["dollar"] },
        ],
        wordJp: "gong2 jyun4",
        wordSenses: ["Hong Kong dollars (HKD)"],
      },
      { text: "。", punct: true },
      {
        text: "長和",
        chars: [
          { ch: "長", jp: "coeng4", senses: ["long", "chief"] },
          { ch: "和", jp: "wo4", senses: ["and", "harmony"] },
        ],
        wordJp: "coeng4 wo4",
        wordSenses: ["CK Hutchison"],
      },
      {
        text: "認為",
        chars: [
          { ch: "認", jp: "jing6", senses: ["to recognise", "to admit"] },
          { ch: "為", jp: "wai4", senses: ["for", "to be", "to consider"] },
        ],
        wordJp: "jing6 wai4",
        wordSenses: ["to believe, to consider, to hold (an opinion)"],
      },
      {
        text: "巴拿馬政府",
        chars: [
          { ch: "巴", jp: "baa1", senses: ["phonetic"] },
          { ch: "拿", jp: "naa4", senses: ["to take"] },
          { ch: "馬", jp: "maa5", senses: ["horse"] },
          { ch: "政", jp: "zing3", senses: ["politics", "government"] },
          { ch: "府", jp: "fu2", senses: ["government office", "mansion"] },
        ],
        wordJp: "baa1 naa4 maa5 zing3 fu2",
        wordSenses: ["the Panamanian government"],
        note: "政府 (zing3 fu2) = government — used for any government: 香港政府， 中國政府， 美國政府.",
      },
      {
        text: "嘅",
        chars: [{ ch: "嘅", jp: "ge3", senses: ["\u2019s", "of (possessive)"] }],
        wordJp: "ge3",
        wordSenses: ["possessive particle"],
      },
      {
        text: "做法",
        chars: [
          { ch: "做", jp: "zou6", senses: ["to do", "to make"] },
          { ch: "法", jp: "faat3", senses: ["law", "method"] },
        ],
        wordJp: "zou6 faat3",
        wordSenses: ["way of doing things, action, conduct"],
        note: "Lit. \u201cdo-method\u201d. Here 法 means \u201cmethod\u201d, not \u201claw\u201d — same character, wider meaning: 想法 way of thinking, 講法 explanation.",
      },
      {
        text: "違反",
        chars: [
          { ch: "違", jp: "wai4", senses: ["to violate"] },
          { ch: "反", jp: "faan2", senses: ["to oppose", "to reverse"] },
        ],
        wordJp: "wai4 faan2",
        wordSenses: ["to violate, to breach (a law, contract)"],
      },
      {
        text: "咗",
        chars: [{ ch: "咗", jp: "zo2", senses: ["(completed-action particle)"] }],
        wordJp: "zo2",
        wordSenses: ["completed action: breached"],
      },
      {
        text: "投資協議",
        chars: [
          { ch: "投", jp: "tau4", senses: ["to put in"] },
          { ch: "資", jp: "zi1", senses: ["capital"] },
          { ch: "協", jp: "hip3", senses: ["to cooperate", "joint"] },
          { ch: "議", jp: "ji5", senses: ["to discuss", "agreement"] },
        ],
        wordJp: "tau4 zi1 hip3 ji5",
        wordSenses: ["investment agreement"],
        note: "協議 (hip3 ji5) = agreement/treaty. Compare 合約 (contract, commercial) vs 協議 (agreement, often formal/state level).",
      },
      { text: "。", punct: true },
    ],
    // ---------- Paragraph 3 ----------
    [
      {
        text: "中國",
        chars: [
          { ch: "中", jp: "zung1", senses: ["middle", "central"] },
          { ch: "國", jp: "gwok3", senses: ["country"] },
        ],
        wordJp: "zung1 gwok3",
        wordSenses: ["China (the Middle Kingdom)"],
      },
      {
        text: "外交部",
        chars: [
          { ch: "外", jp: "ngoi6", senses: ["outside", "foreign"] },
          { ch: "交", jp: "gaau1", senses: ["to exchange", "to hand over"] },
          { ch: "部", jp: "bou6", senses: ["ministry", "department", "section"] },
        ],
        wordJp: "ngoi6 gaau1 bou6",
        wordSenses: ["Ministry of Foreign Affairs"],
        note: "Lit. \u201cforeign-exchange ministry\u201d — the Chinese foreign ministry. 交 appears twice today: 交咗 (handed over) and 外交 (diplomacy).",
      },
      {
        text: "回應",
        chars: [
          { ch: "回", jp: "wui4", senses: ["to return", "to reply"] },
          { ch: "應", jp: "jing3", senses: ["to respond", "should"] },
        ],
        wordJp: "wui4 jing3",
        wordSenses: ["to respond, to reply (publicly)"],
      },
      {
        text: "話",
        chars: [{ ch: "話", jp: "waa6", senses: ["to say"] }],
        wordJp: "waa6",
        wordSenses: ["said"],
      },
      { text: "，", punct: true },
      {
        text: "支持",
        chars: [
          { ch: "支", jp: "zi1", senses: ["to prop up", "branch"] },
          { ch: "持", jp: "cyu4", senses: ["to hold", "to persist"] },
        ],
        wordJp: "zi1 cyu4",
        wordSenses: ["to support, to back"],
      },
      {
        text: "香港企業",
        chars: [
          { ch: "香", jp: "hoeng1", senses: ["fragrant"] },
          { ch: "港", jp: "gong2", senses: ["harbour"] },
          { ch: "企", jp: "kei5", senses: ["to stand", "enterprise"] },
          { ch: "業", jp: "jip6", senses: ["business"] },
        ],
        wordJp: "hoeng1 gong2 kei5 jip6",
        wordSenses: ["Hong Kong enterprises, HK companies"],
      },
      {
        text: "用",
        chars: [{ ch: "用", jp: "jung6", senses: ["to use", "to spend"] }],
        wordJp: "jung6",
        wordSenses: ["to use"],
      },
      {
        text: "法律",
        chars: [
          { ch: "法", jp: "faat3", senses: ["law"] },
          { ch: "律", jp: "leot6", senses: ["law", "statute", "rule"] },
        ],
        wordJp: "faat3 leot6",
        wordSenses: ["the law"],
        note: "律 also appears in 律師 (leoi5 si1) = lawyer — one of the most useful legal words for your Hong Kong reading.",
      },
      {
        text: "途徑",
        chars: [
          { ch: "途", jp: "tou4", senses: ["road", "way"] },
          { ch: "徑", jp: "ging3", senses: ["path", "track"] },
        ],
        wordJp: "tou4 ging3",
        wordSenses: ["channel, avenue, means (to an end)"],
        note: "Lit. \u201croad-path\u201d. 用法律途徑 = use legal channels — the classic phrase when someone is taking a dispute to court or arbitration.",
      },
      {
        text: "維護",
        chars: [
          { ch: "維", jp: "wai4", senses: ["to maintain", "to preserve"] },
          { ch: "護", jp: "wu6", senses: ["to protect", "to guard"] },
        ],
        wordJp: "wai4 wu6",
        wordSenses: ["to defend, to uphold, to safeguard"],
      },
      {
        text: "自身",
        chars: [
          { ch: "自", jp: "zi6", senses: ["self", "from"] },
          { ch: "身", jp: "san1", senses: ["body", "oneself"] },
        ],
        wordJp: "zi6 san1",
        wordSenses: ["one's own"],
      },
      {
        text: "權益",
        chars: [
          { ch: "權", jp: "kyun4", senses: ["right", "authority"] },
          { ch: "益", jp: "jik1", senses: ["benefit", "interest"] },
        ],
        wordJp: "kyun4 jik1",
        wordSenses: ["rights and interests"],
        note: "維護自身權益 = safeguard one's own rights and interests — a set phrase in every legal dispute story.",
      },
      { text: "。", punct: true },
      {
        text: "有",
        chars: [{ ch: "有", jp: "jau5", senses: ["to have", "there is/are"] }],
        wordJp: "jau5",
        wordSenses: ["there is / there are"],
        note: "有法律學者提醒 = \u201cthere are legal scholars who warn...\u201d News style: 有 + profession = \u201csome X say\u201d. Its opposite is 冇 (mou5) = \u201cdon't have\u201d — pure Cantonese!",
      },
      {
        text: "法律學者",
        chars: [
          { ch: "法", jp: "faat3", senses: ["law"] },
          { ch: "律", jp: "leot6", senses: ["law"] },
          { ch: "學", jp: "hok6", senses: ["to study", "learning"] },
          { ch: "者", jp: "ze2", senses: ["person who (-er)"] },
        ],
        wordJp: "faat3 leot6 hok6 ze2",
        wordSenses: ["legal scholars, legal academics"],
        note: "學者 = scholar (a person who studies). The suffix 者 builds \u201c-person\u201d words: 記者 reporter, 讀者 reader, 作者 author.",
      },
      {
        text: "提醒",
        chars: [
          { ch: "提", jp: "tai4", senses: ["to lift", "to mention"] },
          { ch: "醒", jp: "sing2", senses: ["to wake up", "alert"] },
        ],
        wordJp: "tai4 sing2",
        wordSenses: ["to remind, to warn"],
        note: "Lit. \u201clift-awake\u201d — to nudge someone awake so they don't forget. Very common in daily Cantonese too.",
      },
      { text: "，", punct: true },
      {
        text: "國際仲裁程序",
        chars: [
          { ch: "國", jp: "gwok3", senses: ["country"] },
          { ch: "際", jp: "zai3", senses: ["between"] },
          { ch: "仲", jp: "zyung3", senses: ["to arbitrate"] },
          { ch: "裁", jp: "coi4", senses: ["to judge"] },
          { ch: "程", jp: "cing4", senses: ["course", "journey"] },
          { ch: "序", jp: "zoe6", senses: ["order", "sequence"] },
        ],
        wordJp: "gwok3 zai3 zyung3 coi4 cing4 zoe6",
        wordSenses: ["international arbitration procedures"],
        note: "程序 (cing4 zoe6) = procedure/process. You will meet it in court stories, app updates (更新程序), and computer programs.",
      },
      {
        text: "複雜",
        chars: [
          { ch: "複", jp: "fuk1", senses: ["repeated", "compound"] },
          { ch: "雜", jp: "zaap6", senses: ["mixed", "miscellaneous"] },
        ],
        wordJp: "fuk1 zaap6",
        wordSenses: ["complicated, complex"],
      },
      { text: "，", punct: true },
      {
        text: "隨時",
        chars: [
          { ch: "隨", jp: "ceoi4", senses: ["to follow", "casual"] },
          { ch: "時", jp: "si4", senses: ["time", "hour"] },
        ],
        wordJp: "ceoi4 si4",
        wordSenses: ["at any time, easily could"],
        note: "Lit. \u201cfollowing the time\u201d. 隨時要打幾年 = \u201ccould easily take several years\u201d. In daily life: 隨時搵我 = call me anytime!",
      },
      {
        text: "要",
        chars: [{ ch: "要", jp: "jiu3", senses: ["to need", "must", "will"] }],
        wordJp: "jiu3",
        wordSenses: ["need to / will take"],
      },
      {
        text: "打",
        chars: [{ ch: "打", jp: "daa2", senses: ["to hit", "to fight", "to play"] }],
        wordJp: "daa2",
        wordSenses: ["to hit / to fight"],
        note: "打 (hit) builds dozens of phrases: 打電話 make a phone call, 打波 play ball, 打工 work a job — and 打官司 fight a lawsuit.",
      },
      {
        text: "幾年",
        chars: [
          { ch: "幾", jp: "gei2", senses: ["several"] },
          { ch: "年", jp: "nin4", senses: ["year"] },
        ],
        wordJp: "gei2 nin4",
        wordSenses: ["several years"],
      },
      {
        text: "官司",
        chars: [
          { ch: "官", jp: "gun1", senses: ["official", "government"] },
          { ch: "司", jp: "si1", senses: ["to manage", "department"] },
        ],
        wordJp: "gun1 si1",
        wordSenses: ["lawsuit, legal case"],
        note: "Lit. \u201cofficial-manager\u201d — an ancient term for taking a dispute before the officials. Still THE everyday word for lawsuit in Hong Kong. Featured in today's vocabulary section!",
      },
      {
        text: "先至",
        chars: [
          { ch: "先", jp: "sin1", senses: ["first", "only then"] },
          { ch: "至", jp: "zi3", senses: ["until", "arrive", "extremely"] },
        ],
        wordJp: "sin1 zi3",
        wordSenses: ["only then, not until"],
        note: "CANTONESE phrase! Standard Chinese uses 才 (coi4). 打幾年官司先至有結果 = it will take years of litigation BEFORE there is a result.",
      },
      {
        text: "有",
        chars: [{ ch: "有", jp: "jau5", senses: ["to have", "there will be"] }],
        wordJp: "jau5",
        wordSenses: ["to have"],
      },
      {
        text: "結果",
        chars: [
          { ch: "結", jp: "git3", senses: ["to tie", "to conclude"] },
          { ch: "果", jp: "gwo2", senses: ["fruit", "result"] },
        ],
        wordJp: "git3 gwo2",
        wordSenses: ["result, outcome"],
        note: "Lit. \u201ctie-fruit\u201d — what the tree finally bears. 結 also appears in 結婚 (git3 fan1) = get married.",
      },
      { text: "。", punct: true },
    ],
  ],
};
