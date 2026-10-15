// ─── Owner-authored Library: shared data contracts ───
// These shapes are the single source of truth for:
//   • the JSON stored in LibraryVocab / LibraryGrammar / LibraryListening rows
//   • /api/library responses (rows are returned with `data` already parsed)
//   • the admin Content Studio forms (owner authors content in these shapes)
//   • the seed script (scripts/seed-library.ts)
//
// Language rule: every explanation lives in TriText (bn primary, en + hi) so
// learners browse in their own UI language with ZERO API keys. English
// learning content itself (words, example sentences, story paragraphs)
// always stays English — that is the skill being practiced.

/** Trilingual text: Bengali primary, English + Hindi optional (fallback chain bn→en→hi handled by pickLang-style helpers). */
export interface TriText {
  bn: string;
  en: string;
  hi: string;
}

export type LibraryLevel = "beginner" | "intermediate" | "advanced";

export const LIBRARY_LEVELS: LibraryLevel[] = ["beginner", "intermediate", "advanced"];

/** Pick the right language from a TriText field with a safe fallback chain. */
export function pickTri(field: TriText | undefined | null, locale: string): string {
  if (!field) return "";
  const v = locale === "bn" ? field.bn : locale === "hi" ? field.hi : field.en;
  return v || field.en || field.bn || field.hi || "";
}

/* ─────────────────────────── VOCABULARY ─────────────────────────── */

export interface LibraryVocabExample {
  /** English example sentence using the word. */
  en: string;
  /** Bengali translation of the example (shown under it). */
  bn: string;
}

export interface LibraryVocabData {
  pronunciation: string; // Bangla-friendly phonetics e.g. "রিলাক্স (রি-লাক্স)"
  partOfSpeech: string; // noun / verb / adjective / adverb / phrase
  meaning: TriText; // meaning in the learner's language
  englishMeaning: string; // simple English meaning
  examples: LibraryVocabExample[]; // 2-3 examples
  tip: TriText; // real-life usage tip
  synonyms: string[];
  antonyms: string[];
}

export interface LibraryVocabEntry {
  id: string;
  word: string;
  level: LibraryLevel;
  category: string; // general | daily | work | travel | academic
  unit?: number; // learning-path unit within the level (1-5; 0 = extra)
  data: LibraryVocabData;
}

/* ─────────────────────────── GRAMMAR ─────────────────────────── */

export interface LibraryGrammarExample {
  wrong: string; // incorrect English sentence
  right: string; // corrected English sentence
  note: TriText; // why wrong/right
}

export interface LibraryGrammarSection {
  heading: TriText;
  body: TriText; // detailed explanation
  examples: LibraryGrammarExample[];
}

export interface LibraryGrammarQuizQuestion {
  question: string; // English (tests English)
  options: string[]; // 4 options
  answer: number; // 0-based index
  explanation: TriText;
}

export interface LibraryGrammarData {
  title: TriText;
  intro: TriText;
  sections: LibraryGrammarSection[];
  tips: TriText[];
  quiz?: LibraryGrammarQuizQuestion[]; // optional — reserved for future DB quizzes
}

/** Meta row for topic grids (no heavy data payload). */
export interface LibraryGrammarMeta {
  id: string;
  topic: string;
  level: LibraryLevel;
  title: string;
  unit?: number; // learning-path unit within the level (1-5; 0 = extra)
}

export interface LibraryGrammarEntry extends LibraryGrammarMeta {
  data: LibraryGrammarData;
}

/* ─────────────────────────── LISTENING ─────────────────────────── */

export type LibraryListeningCategory =
  | "daily"
  | "travel"
  | "work"
  | "culture"
  | "science"
  | "inspire";

export const LIBRARY_LISTENING_CATEGORIES: LibraryListeningCategory[] = [
  "daily",
  "travel",
  "work",
  "culture",
  "science",
  "inspire",
];

export interface LibraryListeningVocab {
  word: string;
  meaning: TriText;
  example: string; // English example sentence
}

export interface LibraryListeningQuiz {
  question: TriText;
  options: TriText[]; // exactly 4
  answer: number; // 0-3
  explain: TriText;
}

export interface LibraryListeningData {
  title: TriText;
  summary: TriText;
  /** The story itself — always ENGLISH (this is listening practice). */
  paragraphs: string[];
  vocabulary: LibraryListeningVocab[];
  quiz: LibraryListeningQuiz[];
}

export interface LibraryListeningEntry {
  id: string;
  slug: string;
  level: LibraryLevel;
  category: LibraryListeningCategory;
  minutes: number;
  unit?: number; // learning-path episode number (1-5; 0 = standalone)
  data: LibraryListeningData;
}

/** Level guard used by the API + admin studio. */
export function isLibraryLevel(v: unknown): v is LibraryLevel {
  return v === "beginner" || v === "intermediate" || v === "advanced";
}
