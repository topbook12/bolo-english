// Static grammar bank — lookup helpers.
//
// The bank makes grammar lessons work with ZERO API keys: content is stored
// in this site's own source (bundled client-side, like the listening
// library), so a guest can open a lesson/quiz offline and instantly.
// AI generation stays available for combinations outside the bank; those
// results are cached in the site's own DB (AiCache) after the first load.

import type { Level } from "../shared";
import type { QuizQuestion } from "@/lib/types";
import type { BankLesson, BankLocale } from "./types";
import FOUNDATION_BN from "./foundation-bn";
import FOUNDATION_EN from "./foundation-en";
import FOUNDATION_HI from "./foundation-hi";
import ADVANCED_BN from "./advanced-bn";
import ADVANCED_EN from "./advanced-en";
import ADVANCED_HI from "./advanced-hi";

const LESSONS: BankLesson[] = [
  ...FOUNDATION_BN,
  ...FOUNDATION_EN,
  ...FOUNDATION_HI,
  ...ADVANCED_BN,
  ...ADVANCED_EN,
  ...ADVANCED_HI,
];

// Fast lookup: topic → level → locale → lesson
const INDEX = new Map<string, BankLesson>();
for (const l of LESSONS) {
  INDEX.set(`${l.topic}::${l.level}::${l.locale}`, l);
}

/**
 * Find a static bank lesson for a topic/level/locale, or null when the
 * combination isn't banked (caller falls back to the AI path).
 *
 * Bank coverage: every foundation topic × beginner and every advanced
 * topic × advanced, each in bn/en/hi. Intermediate lessons are AI-only.
 */
export function getBankLesson(
  topic: string,
  level: Level,
  locale: string
): BankLesson | null {
  const loc: BankLocale = locale === "bn" || locale === "hi" ? locale : "en";
  return INDEX.get(`${topic}::${level}::${loc}`) ?? null;
}

/** Convert a bank lesson into the AI-shaped GrammarLessonContent. */
export function bankLessonToContent(l: BankLesson) {
  return {
    title: l.title,
    level: l.level,
    intro: l.intro,
    sections: l.sections,
    tips: l.tips,
  };
}

/** Static quiz for a topic/level/locale, or null when not banked. */
export function getBankQuiz(
  topic: string,
  level: Level,
  locale: string
): QuizQuestion[] | null {
  const lesson = getBankLesson(topic, level, locale);
  if (!lesson) return null;
  return lesson.quiz;
}

/** Number of bundled lessons (for tests/debug). */
export const BANK_LESSON_COUNT = LESSONS.length;
