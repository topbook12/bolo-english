// Static grammar bank — data contract.
//
// WHY: grammar lessons used to require a Gemini API key (AI-generated, then
// cached in AiCache). The site now ships its own curated lesson bank so the
// core learning content is STORED ON OUR OWN SITE and loads with zero API
// keys, zero network, for every guest. AI generation stays available for
// topic/level/locale combinations outside the bank (and results are cached in
// the site's own DB afterwards).
//
// This file is intentionally dependency-free: the bank files only
// `import type` from here, so the data compiles everywhere (client bundle,
// tests, future scripts).

export type BankLocale = "bn" | "en" | "hi";
/** D25: "intermediate" added — the 10 core foundation topics now have a full
 *  B1 wave (previously intermediate was AI-only). */
export type BankLevel = "beginner" | "intermediate" | "advanced";

export interface BankExample {
  /** Incorrect sentence (English). */
  wrong: string;
  /** Corrected sentence (English). */
  right: string;
  /** Short why-it's-wrong note in the lesson locale. */
  note: string;
}

export interface BankSection {
  heading: string;
  /** Explanation paragraph in the lesson locale. */
  explanation: string;
  examples: BankExample[];
}

export interface BankQuizQuestion {
  /** Question text in English (it tests English). */
  question: string;
  /** Exactly 4 options. */
  options: string[];
  /** Index of the correct option (0-3). */
  answer: number;
  /** Why the answer is right, in the lesson locale. */
  explanation: string;
}

export interface BankLesson {
  /** Canonical topic id — MUST match GrammarTopic.topic in ../shared.ts. */
  topic: string;
  level: BankLevel;
  locale: BankLocale;
  title: string;
  /** 1–2 sentence hook in the lesson locale. */
  intro: string;
  sections: BankSection[];
  /** 4 practical tips in the lesson locale. */
  tips: string[];
  /** 5 quiz questions. */
  quiz: BankQuizQuestion[];
}
