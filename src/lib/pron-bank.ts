// ─── Pronunciation practice bank + word-level scoring (D15, ROADMAP-60.md) ──
// PURE module. Exercises are English words/sentences with a phonetic hint
// and a trilingual tip; the learner speaks, the BYOK STT transcript is
// compared word-by-word, and every word gets a verdict. No db, no server.

import type { LibraryLevel } from "./library-types";

export interface PronExercise {
  id: string;
  level: LibraryLevel;
  kind: "word" | "sentence";
  /** The English target the learner must say. */
  text: string;
  /** Plain-text pronunciation hint (respelling, e.g. "thuh-nks"). */
  phonetic: string;
  /** Trilingual tip: what Bengali/Hindi speakers typically get wrong here. */
  tip: { en: string; bn: string; hi: string };
}

export const PRON_EXERCISES: PronExercise[] = [
  /* BEGINNER — high-frequency words with the sounds Bengali/Hindi speakers
     most often swap (v/w, s/sh, final consonants). */
  {
    id: "b-thanks",
    level: "beginner",
    kind: "word",
    text: "thanks",
    phonetic: "thæŋks",
    tip: {
      en: "Tongue lightly between the teeth for 'th' — not 't' or 'd'.",
      bn: "'th'-এ জিভ দাঁতের ফাঁকে হালকা রাখো — 'ট' বা 'ড' নয়।",
      hi: "'th' के लिए जीभ दाँतों के बीच हल्की रखें — 'ट' या 'ड' नहीं।",
    },
  },
  {
    id: "b-very",
    level: "beginner",
    kind: "word",
    text: "very",
    phonetic: "ˈveri",
    tip: {
      en: "Top teeth touch the bottom lip for 'v' — 'b' and 'w' are different sounds.",
      bn: "'v'-এর সময় উপরের দাঁত নিচের ঠোঁটে লাগবে — 'ভ' আর 'ডব্লিউ' আলাদা শব্দ।",
      hi: "'v' के लिए ऊपरी दाँत निचले होंठ से लगें — 'भ' और 'व' अलग ध्वनियाँ हैं।",
    },
  },
  {
    id: "b-school",
    level: "beginner",
    kind: "word",
    text: "school",
    phonetic: "skuːl",
    tip: {
      en: "Say 's-k' together — no vowel before it (not 'es-kool').",
      bn: "'স্ক' একসাথে বলো — আগে স্বর নয় ('ইস্কুল' নয়)।",
      hi: "'स्क' साथ में बोलें — आगे स्वर नहीं ('इस्कूल' नहीं)।",
    },
  },
  {
    id: "b-work",
    level: "beginner",
    kind: "word",
    text: "work",
    phonetic: "wɜːrk",
    tip: {
      en: "Round your lips for 'w' and hold the 'r' long — one syllable, not two.",
      bn: "'w'-এ ঠোঁট গোল করো, 'r' টানো — এক সিলেবল, দুটো নয়।",
      hi: "'w' के लिए होंठ गोल करें, 'r' लंबा — एक ही सिलेबल।",
    },
  },
  {
    id: "b-water",
    level: "beginner",
    kind: "word",
    text: "water",
    phonetic: "ˈwɔːtər",
    tip: {
      en: "The ending is a soft '-er' — don't add an extra 'o' sound.",
      bn: "শেষে নরম '-er' — অতিরিক্ত 'ও' যোগ করো না।",
      hi: "अंत में हल्का '-er' — अतिरिक्त 'ओ' मत जोड़ें।",
    },
  },
  {
    id: "b-sent",
    level: "beginner",
    kind: "sentence",
    text: "I would like a cup of tea.",
    phonetic: "aɪ wʊd laɪk ə kʌp əv tiː",
    tip: {
      en: "'would like' melts together: 'wud-like'. 'of' sounds like 'uv'.",
      bn: "'would like' গলে যায়: 'ওয়ুড-লাইক'। 'of' শোনায় 'অভ'-এর মতো।",
      hi: "'would like' आपस में मिल जाते हैं: 'wud-like'। 'of' = 'uv'।",
    },
  },
  {
    id: "b-sent2",
    level: "beginner",
    kind: "sentence",
    text: "Where is the bus stop?",
    phonetic: "wɛər ɪz ðə bʌs stɒp",
    tip: {
      en: "'wh' in 'where' is just a breathy 'w'. Rise at the end for the question.",
      bn: "'where'-এর 'wh' শুধুই হাওয়া-ভাঙা 'w'। প্রশ্নে শেষে সুর ওঠে।",
      hi: "'where' का 'wh' सिर्फ़ हल्की 'w' है। सवाल में अंत में सुर ऊपर।",
    },
  },
  {
    id: "b-sent3",
    level: "beginner",
    kind: "sentence",
    text: "See you tomorrow.",
    phonetic: "siː juː təˈmɒroʊ",
    tip: {
      en: "'tomorrow' = tuh-MOR-oh — stress the middle, never 'to-mor-row' with 3 beats.",
      bn: "'tomorrow' = টুমরো — মাঝে জোর, তিন-টুকরো নয়।",
      hi: "'tomorrow' = टु-मॉरो — बीच पर ज़ोर, तीन टुकड़े नहीं।",
    },
  },

  /* INTERMEDIATE — consonant clusters, -ed endings, word stress. */
  {
    id: "i-world",
    level: "intermediate",
    kind: "word",
    text: "world",
    phonetic: "wɜːrld",
    tip: {
      en: "The 'rld' cluster: say 'werld' without a vowel between r-l-d.",
      bn: "'rld' ক্লাস্টার: r-l-d-এর মাঝে স্বর ঢোকাবে না।",
      hi: "'rld' समूह: r-l-d के बीच स्वर मत घुसाइए।",
    },
  },
  {
    id: "i-decided",
    level: "intermediate",
    kind: "word",
    text: "decided",
    phonetic: "dɪˈsaɪdɪd",
    tip: {
      en: "-ed after 'd' sounds like 'id': duh-SAI-did (3 syllables).",
      bn: "'d'-এর পরে '-ed' হয় 'ইড': ডিসাই-ডিড (৩ সিলেবল)।",
      hi: "'d' के बाद '-ed' = 'id': डि-साइ-डिड (3 सिलेबल)।",
    },
  },
  {
    id: "i-comfortable",
    level: "intermediate",
    kind: "word",
    text: "comfortable",
    phonetic: "ˈkʌmftəbl",
    tip: {
      en: "Only 3 syllables in real speech: KUMF-tuh-bul — the 'or' disappears.",
      bn: "আসল বলায় ৩ সিলেবলই: কামফ-টাবল — 'or' হারিয়ে যায়।",
      hi: "बोलचाल में सिर्फ़ 3 सिलेबल: कम्फ़-ट-बल — 'or' गायब।",
    },
  },
  {
    id: "i-opportunity",
    level: "intermediate",
    kind: "word",
    text: "opportunity",
    phonetic: "ˌɒpərˈtuːnəti",
    tip: {
      en: "Stress the 'TU': o-por-TU-ni-ty — keep every vowel short except that one.",
      bn: "'TU'-তে জোর: ও-পর-টিউ-নিটি — বাকি স্বর ছোট রাখো।",
      hi: "'TU' पर ज़ोर: ओ-पर-टू-नि-टी — बाकी स्वर छोटे।",
    },
  },
  {
    id: "i-vegetable",
    level: "intermediate",
    kind: "word",
    text: "vegetable",
    phonetic: "ˈvedʒtəbl",
    tip: {
      en: "Say VEG-tuh-bul — the middle 'e' is silent in natural English.",
      bn: "বলো ভেজ-টেবল — মাঝের 'e' নীরব।",
      hi: "बोलें वेज-ट-बल — बीच का 'e' मौन।",
    },
  },
  {
    id: "i-sent",
    level: "intermediate",
    kind: "sentence",
    text: "I've been working here for three years.",
    phonetic: "aɪv bɪn ˈwɜːrkɪŋ hɪr fɔːr θriː jɪrz",
    tip: {
      en: "'been' = 'bin' (short). 'three' needs the tongue-between-teeth 'th'.",
      bn: "'been' = 'বিন' (ছোট)। 'three'-তে দাঁতের-ফাঁকে-জিভ 'th' লাগবে।",
      hi: "'been' = 'bin' (छोटा)। 'three' में दाँतों के बीच 'th'।",
    },
  },
  {
    id: "i-sent2",
    level: "intermediate",
    kind: "sentence",
    text: "Could you tell me how much it costs?",
    phonetic: "kʊd juː tɛl miː haʊ mʌtʃ ɪt kɒsts",
    tip: {
      en: "'Could you' glues into 'cudjoo'. End the 'ts' cluster crisply.",
      bn: "'Could you' মিশে 'কুডজু'। শেষে 'ts' ঝরঝরে বলো।",
      hi: "'Could you' मिलकर 'cudjoo'। अंत का 'ts' साफ़ बोलें।",
    },
  },
  {
    id: "i-sent3",
    level: "intermediate",
    kind: "sentence",
    text: "The meeting starts at half past nine.",
    phonetic: "ðə ˈmiːtɪŋ stɑːrts æt hæf pæst naɪn",
    tip: {
      en: "Both 'the' and 'meeting' start with the soft 'th' — teeth, not tongue-tip tap.",
      bn: "'the' আর 'meeting' দুটোতেই নরম 'th' — দাঁতে জিভ, টোঁটকা নয়।",
      hi: "'the' और 'meeting' दोनों में हल्की 'th' — दाँतों पर जीभ।",
    },
  },

  /* ADVANCED — reductions, linking, tricky finals. */
  {
    id: "a-entrepreneur",
    level: "advanced",
    kind: "word",
    text: "entrepreneur",
    phonetic: "ˌɒntrəprəˈnɜːr",
    tip: {
      en: "French import: on-truh-pruh-NUR — stress the last syllable.",
      bn: "ফরাসি ঋণ: অন-ট্রা-প্রা-নার — শেষ সিলেবলে জোর।",
      hi: "फ़्रेंच शब्द: ऑन-ट्र-प्र-नर — अंतिम सिलेबल पर ज़ोर।",
    },
  },
  {
    id: "a-through",
    level: "advanced",
    kind: "word",
    text: "through",
    phonetic: "θruː",
    tip: {
      en: "One sound, not two: 'th' + 'rew' in a single smooth motion — no 't' burst.",
      bn: "একটাই শব্দ: 'th' + 'rew' এক টানে — 'ট'-বিস্ফোরণ নয়।",
      hi: "एक ही ध्वनि: 'th' + 'rew' एक साथ — 'ट' विस्फोट नहीं।",
    },
  },
  {
    id: "a-sixths",
    level: "advanced",
    kind: "word",
    text: "sixths",
    phonetic: "sɪksθs",
    tip: {
      en: "The monster cluster 'ks-th-s' — slow down: siks-ths.",
      bn: "দানব-ক্লাস্টার 'ks-th-s' — ধীরে: সিক্স-থস।",
      hi: "विशाल समूह 'ks-th-s' — धीरे: सिक्स-थ्स।",
    },
  },
  {
    id: "a-literally",
    level: "advanced",
    kind: "word",
    text: "literally",
    phonetic: "ˈlɪtərəli",
    tip: {
      en: "LIT-ruh-lee in fast speech — don't add a 'ral' syllable.",
      bn: "দ্রুত বলায় লিট-রা-লি — অতিরিক্ত 'রাল' সিলেবল নয়।",
      hi: "तेज़ बोल में लिट-र-ली — अतिरिक्त 'ral' नहीं।",
    },
  },
  {
    id: "a-particularly",
    level: "advanced",
    kind: "word",
    text: "particularly",
    phonetic: "pərˈtɪkjələrli",
    tip: {
      en: "per-TIK-yuh-ler-lee — the 'c' is a 'k', and the ending runs together.",
      bn: "পার-টিক-ইউলার-লি — 'c' হলো 'ক', শেষটা একসাথে বলো।",
      hi: "पर-टिक-य-लर-ली — 'c' = 'k', अंत एक साथ।",
    },
  },
  {
    id: "a-sent",
    level: "advanced",
    kind: "sentence",
    text: "I'd have thought it would've been cheaper.",
    phonetic: "aɪd əv θɔːt ɪt wʊdəv bɪn ˈtʃiːpər",
    tip: {
      en: "Contractions glue: 'I'd have' = 'I-duv', 'would've' = 'wud-uv'.",
      bn: "সংকোচন মিশে যায়: 'I'd have' = 'আইডাভ', 'would've' = 'উডাভ'।",
      hi: "संकुचन मिलते हैं: 'I'd have' = 'I-duv', 'would've' = 'wud-uv'।",
    },
  },
  {
    id: "a-sent2",
    level: "advanced",
    kind: "sentence",
    text: "She sells seashells by the seashore.",
    phonetic: "ʃiː sɛlz ˈsiːʃɛlz baɪ ðə ˈsiːʃɔːr",
    tip: {
      en: "Classic 's/sh' workout: 's' spreads the lips, 'sh' pushes them forward.",
      bn: "'s/sh'-এর ক্লাসিক অনুশীলন: 's'-এ ঠোঁট ছড়ানো, 'sh'-এ সামনে।",
      hi: "'s/sh' की क्लासिक कसरत: 's' में होंठ फैले, 'sh' में आगे।",
    },
  },
  {
    id: "a-sent3",
    level: "advanced",
    kind: "sentence",
    text: "Rural journeys rarely require early arrivals.",
    phonetic: "ˈrʊrəl ˈdʒɜːrniz ˈrerli rɪˈkwaɪər ˈɜːrli əˈraɪvəlz",
    tip: {
      en: "'rural' and 'rarely' — keep the 'r' tongue-tapped, never rolled like Bangla 'ড়'.",
      bn: "'rural'/'rarely' — 'r' টোঁটকা-ট্যাপ, বাংলা 'ড়'-এর মতো গড়গড় নয়।",
      hi: "'rural'/'rarely' — 'r' हल्का टैप, बंसी-स्टाइल रोल नहीं।",
    },
  },
];

/** All exercises for one level, words first then sentences. */
export function pronExercisesForLevel(level: LibraryLevel): PronExercise[] {
  const pool = PRON_EXERCISES.filter((e) => e.level === level);
  return [...pool].sort((a, b) => (a.kind === b.kind ? 0 : a.kind === "word" ? -1 : 1));
}

/* ── word-level comparison ── */

const WORD_RE = /[a-zA-Z']+/g;

export type WordVerdict = "ok" | "close" | "miss";

export interface CompareResult {
  /** 0-100: share of target words spoken correctly (close = half credit). */
  score: number;
  words: { word: string; verdict: WordVerdict }[];
}

function normalize(w: string): string {
  return w.toLowerCase().replace(/'/g, "");
}

/** Levenshtein distance between two short strings. */
function lev(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(
        prev[j] + 1,
        cur[j - 1] + 1,
        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
    prev = cur;
  }
  return prev[n];
}

/**
 * Compare the target against what STT heard. Each target word is matched
 * greedily against the nearest unused spoken word; distance 0 = ok,
 * distance ≤ ~20% of length = close, else miss. Extra spoken words are
 * ignored (STT may append context); missing words hurt the score.
 */
export function compareSpeech(target: string, transcript: string): CompareResult {
  const targetWords = (target.match(WORD_RE) ?? []).map(normalize);
  const spoken = (transcript.match(WORD_RE) ?? []).map(normalize);
  const used = new Set<number>();

  const words = targetWords.map((tw) => {
    let bestIdx = -1;
    let bestDist = Infinity;
    spoken.forEach((sw, i) => {
      if (used.has(i)) return;
      const d = lev(tw, sw);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
      }
    });
    const threshold = Math.max(1, Math.round(tw.length * 0.2));
    let verdict: WordVerdict = "miss";
    if (bestIdx >= 0 && bestDist === 0) {
      verdict = "ok";
      used.add(bestIdx);
    } else if (bestIdx >= 0 && bestDist <= threshold) {
      verdict = "close";
      used.add(bestIdx);
    }
    return { word: tw, verdict };
  });

  const weight = words.reduce(
    (acc, w) => acc + (w.verdict === "ok" ? 1 : w.verdict === "close" ? 0.5 : 0),
    0
  );
  const score = words.length ? Math.round((weight / words.length) * 100) : 0;
  return { score, words };
}
