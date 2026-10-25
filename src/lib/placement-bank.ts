// ─── Placement test bank + grading (D8, ROADMAP-60.md) ──────────────────────
// PURE module — imported by the /api/placement route (server grading) and
// the PlacementTest component. No db, no server-only.
//
// 12 questions, roughly ascending difficulty (A1 → B2), four kinds:
//   vocab · grammar · usage · listening (TTS reads the sentence aloud)
// Every question's stem/options are trilingual so a bn/hi learner is tested
// on ENGLISH knowledge, not on reading the test's own language.
//
// Scoring: 0-3 → A1, 4-6 → A2, 7-9 → B1, 10-12 → B2.
// The app's stored level (UserConfig.level) is the coarse map:
//   A1/A2 → beginner · B1 → intermediate · B2 → advanced.

export type PlacementKind = "vocab" | "grammar" | "usage" | "listening";
export type PlacementLevel = "A1" | "A2" | "B1" | "B2";
export type StoredLevel = "beginner" | "intermediate" | "advanced";

export interface PlacementQuestion {
  id: string;
  kind: PlacementKind;
  /** Stem per language — for listening, `en` is the sentence TTS speaks. */
  q: { en: string; bn: string; hi: string };
  /** 4 options per language (listening options stay English sentences). */
  options: { en: string; bn?: string; hi?: string }[];
  answer: number; // 0-3
}

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  {
    id: "p1",
    kind: "vocab",
    q: { en: "Choose the right word: I ___ to school every day.", bn: "সঠিক শব্দ বাছো: আমি প্রতিদিন স্কুলে যাই।", hi: "सही शब्द चुनें: मैं रोज़ स्कूल जाता हूँ।" },
    options: [{ en: "go", bn: "go", hi: "go" }, { en: "goes", bn: "goes", hi: "goes" }, { en: "going", bn: "going", hi: "going" }, { en: "gone", bn: "gone", hi: "gone" }],
    answer: 0,
  },
  {
    id: "p2",
    kind: "vocab",
    q: { en: "What is the opposite of “cheap”?", bn: "“cheap”-এর বিপরীত কী?", hi: "“cheap” का विलोम क्या है?" },
    options: [{ en: "small", bn: "ছোট", hi: "छोटा" }, { en: "expensive", bn: "দামি", hi: "महंगा" }, { en: "fast", bn: "দ্রুত", hi: "तेज़" }, { en: "weak", bn: "দুর্বল", hi: "कमज़ोर" }],
    answer: 1,
  },
  {
    id: "p3",
    kind: "grammar",
    q: { en: "She ___ a student.", bn: "সে (মেয়ে) একজন ছাত্রী।", hi: "वह (लड़की) एक छात्रा है।" },
    options: [{ en: "am", bn: "am", hi: "am" }, { en: "are", bn: "are", hi: "are" }, { en: "is", bn: "is", hi: "is" }, { en: "be", bn: "be", hi: "be" }],
    answer: 2,
  },
  {
    id: "p4",
    kind: "listening",
    q: { en: "Listen — which sentence do you hear?", bn: "শোনো — কোন বাক্যটি শুনছো?", hi: "सुनो — कौन सा वाक्य सुन रहे हो?" },
    options: [{ en: "The cat is on the mat." }, { en: "The cat sat on the mat." }, { en: "The hat is on the cat." }, { en: "The cat is under the mat." }],
    answer: 0,
  },
  {
    id: "p5",
    kind: "grammar",
    q: { en: "Yesterday I ___ a movie.", bn: "গতকাল আমি একটি সিনেমা দেখেছিলাম।", hi: "कल मैंने एक फ़िल्म देखी।" },
    options: [{ en: "watch", bn: "watch", hi: "watch" }, { en: "watches", bn: "watches", hi: "watches" }, { en: "watched", bn: "watched", hi: "watched" }, { en: "watching", bn: "watching", hi: "watching" }],
    answer: 2,
  },
  {
    id: "p6",
    kind: "usage",
    q: { en: "Pick the correct preposition: I'm good ___ math.", bn: "সঠিক প্রিপজিশন বাছো: I'm good ___ math.", hi: "सही preposition चुनें: I'm good ___ math." },
    options: [{ en: "in", bn: "in", hi: "in" }, { en: "at", bn: "at", hi: "at" }, { en: "on", bn: "on", hi: "on" }, { en: "for", bn: "for", hi: "for" }],
    answer: 1,
  },
  {
    id: "p7",
    kind: "listening",
    q: { en: "Listen — which sentence do you hear?", bn: "শোনো — কোন বাক্যটি শুনছো?", hi: "सुनो — कौन सा वाक्य सुन रहे हो?" },
    options: [{ en: "He has finished his homework." }, { en: "He had finish his homework." }, { en: "He have finished his homework." }, { en: "He finished his homeworks." }],
    answer: 0,
  },
  {
    id: "p8",
    kind: "grammar",
    q: { en: "I ___ English since 2022.", bn: "আমি ২০২২ সাল থেকে ইংরেজি শিখছি।", hi: "मैं 2022 से अंग्रेज़ी सीख रहा हूँ।" },
    options: [{ en: "learn", bn: "learn", hi: "learn" }, { en: "am learning", bn: "am learning", hi: "am learning" }, { en: "have been learning", bn: "have been learning", hi: "have been learning" }, { en: "learnt", bn: "learnt", hi: "learnt" }],
    answer: 2,
  },
  {
    id: "p9",
    kind: "usage",
    q: { en: "If it rains tomorrow, we ___ the picnic.", bn: "যদি কাল বৃষ্টি হয়, আমরা পিকনিক ___।", hi: "अगर कल बारिश हुई, तो हम पिकनिक ___।" },
    options: [{ en: "cancel", bn: "বাতিল করব", hi: "रद्द करेंगे" }, { en: "will cancel", bn: "বাতিল করব", hi: "रद्द करेंगे" }, { en: "cancelled", bn: "বাতিল করেছিলাম", hi: "रद्द की थी" }, { en: "would cancel", bn: "বাতিল করতাম", hi: "रद्द करते" }],
    answer: 1,
  },
  {
    id: "p10",
    kind: "usage",
    q: { en: "Choose the natural sentence:", bn: "স্বাভাবিক বাক্যটি বাছো:", hi: "स्वाभाविक वाक्य चुनें:" },
    options: [{ en: "I have a good news for you.", bn: "—", hi: "—" }, { en: "I have good news for you.", bn: "—", hi: "—" }, { en: "I have a good news to you.", bn: "—", hi: "—" }, { en: "I have good a news for you.", bn: "—", hi: "—" }],
    answer: 1,
  },
  {
    id: "p11",
    kind: "grammar",
    q: { en: "Rarely ___ such dedication.", bn: "কখনোই এমন নিষ্ঠা দেখিনি (উল্টো ক্রম):", hi: "शायद ही कभी ऐसी लगन देखी हो (वाक्य-क्रम):" },
    options: [{ en: "I have seen", bn: "I have seen", hi: "I have seen" }, { en: "have I seen", bn: "have I seen", hi: "have I seen" }, { en: "I saw", bn: "I saw", hi: "I saw" }, { en: "did I saw", bn: "did I saw", hi: "did I saw" }],
    answer: 1,
  },
  {
    id: "p12",
    kind: "vocab",
    q: { en: "“The report shed light on the issue” means the report ___ it.", bn: "“shed light on” বোঝায় রিপোর্টটি বিষয়টি ___।", hi: "“shed light on” का अर्थ है रिपोर्ट ने विषय को ___।" },
    options: [{ en: "hid", bn: "লুকিয়েছে", hi: "छिपाया" }, { en: "made clearer", bn: "স্পষ্ট করেছে", hi: "स्पष्ट किया" }, { en: "ignored", bn: "উপেক্ষা করেছে", hi: "नज़रअंदाज़ किया" }, { en: "criticised", bn: "সমালোচনা করেছে", hi: "आलोचना की" }],
    answer: 1,
  },
];

export const PLACEMENT_TOTAL = PLACEMENT_QUESTIONS.length; // 12

/** Grade an answers array (index into each question's options). */
export function gradePlacement(answers: unknown): {
  valid: boolean;
  score: number;
  level: PlacementLevel;
  stored: StoredLevel;
} {
  if (!Array.isArray(answers) || answers.length !== PLACEMENT_TOTAL) {
    return { valid: false, score: 0, level: "A1", stored: "beginner" };
  }
  let score = 0;
  for (let i = 0; i < PLACEMENT_TOTAL; i++) {
    const a = answers[i];
    if (typeof a !== "number" || !Number.isInteger(a) || a < 0 || a > 3) {
      return { valid: false, score: 0, level: "A1", stored: "beginner" };
    }
    if (a === PLACEMENT_QUESTIONS[i].answer) score++;
  }
  const level: PlacementLevel =
    score <= 3 ? "A1" : score <= 6 ? "A2" : score <= 9 ? "B1" : "B2";
  const stored: StoredLevel =
    level === "A1" || level === "A2" ? "beginner" : level === "B1" ? "intermediate" : "advanced";
  return { valid: true, score, level, stored };
}
