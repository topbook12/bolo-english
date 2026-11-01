// ─── Writing practice bank (Backlog A1 — শেখার গভীরতা) ──────────────────────
// PURE module — owner-authored writing tasks: opinion essays, formal/informal
// emails and guided paragraphs. The learner writes in English and gets ONE
// BYOK AI call back with grammar / structure / vocabulary scores (0-100),
// line-level corrections and an improved rewrite.
//
// Design mirrors the simulator bank: static, trilingual hints, no db.

import type { LibraryLevel } from "./library-types";

export type WritingKind = "essay" | "email" | "paragraph";

export interface WritingTask {
  id: string;
  kind: WritingKind;
  level: LibraryLevel;
  /** English task prompt (what the learner must write about). */
  prompt: string;
  /** Short English guidance shown under the prompt. */
  guide: string;
  /** Soft minimum word count — a lighter check, never a hard gate. */
  minWords: number;
  /** Target time in minutes (display only). */
  minutes: number;
  /** Trilingual coaching hint shown before writing. */
  tip: { en: string; bn: string; hi: string };
}

export const WRITING_TASKS: WritingTask[] = [
  /* PARAGRAPH — beginner-friendly, one focused idea. */
  {
    id: "p-my-day",
    kind: "paragraph",
    level: "beginner",
    prompt: "Write a paragraph about your typical morning before school or work.",
    guide: "What time do you wake up? What do you do first, next, and last?",
    minWords: 40,
    minutes: 8,
    tip: {
      en: "Use time words to connect ideas: first, then, after that, finally.",
      bn: "সময়-শব্দ দিয়ে ধারা জোড়ো: first, then, after that, finally.",
      hi: "समय-शब्दों से जोड़ें: first, then, after that, finally।",
    },
  },
  {
    id: "p-fav-food",
    kind: "paragraph",
    level: "beginner",
    prompt: "Describe a food you love. What does it look, smell and taste like?",
    guide: "Try to make the reader hungry with describing words.",
    minWords: 40,
    minutes: 8,
    tip: {
      en: "Adjectives do the work here: crispy, sweet, spicy, smoky, creamy.",
      bn: "বিশেষণই কাজ করবে: crispy, sweet, spicy, smoky, creamy.",
      hi: "विशेषण से काम लें: crispy, sweet, spicy, smoky, creamy।",
    },
  },
  {
    id: "p-best-friend",
    kind: "paragraph",
    level: "beginner",
    prompt: "Write about a close friend or family member you admire.",
    guide: "Who are they? What are they like? Why do you admire them?",
    minWords: 45,
    minutes: 8,
    tip: {
      en: "Give ONE small real example — 'She once stayed up all night helping me…'",
      bn: "একটা ছোট সত্যি উদাহরণ দাও — 'She once stayed up all night helping me…'",
      hi: "एक छोटा सच्चा उदाहरण दें — 'She once stayed up all night helping me…'",
    },
  },

  /* EMAIL — practical, real-life formats. */
  {
    id: "e-leave",
    kind: "email",
    level: "intermediate",
    prompt:
      "Write a formal email to your teacher requesting three days of leave because you are sick.",
    guide: "Subject line + greeting + reason + request + polite close.",
    minWords: 60,
    minutes: 10,
    tip: {
      en: "Formal emails avoid contractions: 'I would like' beats 'I'd like'.",
      bn: "ফরমাল ইমেইলে সংকোচন এড়াও: 'I would like' > 'I'd like'।",
      hi: "औपचारिक ईमेल में contractions नहीं: 'I would like' > 'I'd like'।",
    },
  },
  {
    id: "e-complaint",
    kind: "email",
    level: "intermediate",
    prompt:
      "Write an email to an online shop: the mobile cover you ordered arrived broken. Ask for a replacement.",
    guide: "Order details + what is wrong + what you want them to do.",
    minWords: 60,
    minutes: 10,
    tip: {
      en: "Stay polite even when complaining: 'Unfortunately…', 'I would appreciate…'.",
      bn: "অভিযোগেও ভদ্র থাকো: 'Unfortunately…', 'I would appreciate…'।",
      hi: "शिकायत में भी विनम्र रहें: 'Unfortunately…', 'I would appreciate…'।",
    },
  },
  {
    id: "e-invite",
    kind: "email",
    level: "beginner",
    prompt:
      "Write an informal email inviting your cousin to visit you during the Eid holidays.",
    guide: "Warm greeting + plans + dates + ask when they can come.",
    minWords: 50,
    minutes: 8,
    tip: {
      en: "Informal = contractions welcome: 'I'm so excited…', 'Can you make it…?'",
      bn: "অনানুষ্ঠানিক = সংকোচন চলবে: 'I'm so excited…', 'Can you make it…?'",
      hi: "अनौपचारिक = contractions चलेंगे: 'I'm so excited…', 'Can you make it…?'",
    },
  },

  /* ESSAY — opinion + reasons, exam-style. */
  {
    id: "s-mobile",
    kind: "essay",
    level: "intermediate",
    prompt:
      "Some people think mobile phones help students learn; others think they distract them. What is your opinion?",
    guide: "Opinion + 2 reasons with examples + short conclusion.",
    minWords: 90,
    minutes: 15,
    tip: {
      en: "Link your reasons: 'Firstly…', 'Moreover…', 'On the other hand…'.",
      bn: "কারণগুলো যুক্ত করো: 'Firstly…', 'Moreover…', 'On the other hand…'।",
      hi: "कारण जोड़ें: 'Firstly…', 'Moreover…', 'On the other hand…'।",
    },
  },
  {
    id: "s-jobs",
    kind: "essay",
    level: "advanced",
    prompt:
      "In the age of AI, which matters more for a career: university degrees or practical skills? Discuss both and give your view.",
    guide: "Present both sides fairly, then commit to one with evidence.",
    minWords: 120,
    minutes: 20,
    tip: {
      en: "Concede before you counter: 'While degrees open doors, skills keep them open.'",
      bn: "আগে স্বীকার করো, তারপর খণ্ডন: 'While degrees open doors, skills keep them open.'",
      hi: "पहले स्वीकार करें, फिर जवाब दें: 'While degrees open doors, skills keep them open.'",
    },
  },
  {
    id: "s-town",
    kind: "essay",
    level: "intermediate",
    prompt:
      "Would you rather live in a big city or a small town? Explain your choice with reasons.",
    guide: "Pick one side — the examiner wants a clear position.",
    minWords: 90,
    minutes: 15,
    tip: {
      en: "One idea per paragraph; start each with its main point.",
      bn: "প্যারাগ্রাফে একটাই ভাবনা; শুরুতেই মূল কথাটা বলো।",
      hi: "हर पैराग्राफ में एक ही विचार; शुरुआत में ही मुख्य बात।",
    },
  },
];

export function writingTaskById(id: unknown): WritingTask | undefined {
  if (typeof id !== "string") return undefined;
  return WRITING_TASKS.find((t) => t.id === id);
}

/** Ordered task list for the picker, grouped by kind (paragraph → email → essay). */
export function writingTasksGrouped(): { kind: WritingKind; tasks: WritingTask[] }[] {
  const order: WritingKind[] = ["paragraph", "email", "essay"];
  return order
    .map((kind) => ({ kind, tasks: WRITING_TASKS.filter((t) => t.kind === kind) }))
    .filter((g) => g.tasks.length > 0);
}

/** Rough word count for the live counter. */
export function countWords(text: string): number {
  const m = text.trim().match(/\S+/g);
  return m ? m.length : 0;
}
