// D46 SEO — /learn/<slug> landing-page registry.
//
// Every grammar topic in the static bank gets ONE public, login-free landing
// page (server-rendered, statically generated) so people searching
// "English grammar bangla" land on real lesson content and can click through
// to the app. This file is the single source of truth for:
//   • topic id → URL slug mapping
//   • which bank level each page renders (foundation → beginner,
//     advanced → advanced)
//   • the reverse lookup used by generateStaticParams + sitemap.ts
//
// Server-safe: imports only static data, no client code.

import type { BankLesson, BankLevel } from "@/components/grammar/bank/types";
import { getBankLesson, bankLessonToContent } from "@/components/grammar/bank";
import { ADVANCED_TOPICS, TOPICS } from "@/components/grammar/shared";

/** Canonical topic id → URL slug. Slugs are permanent once released. */
export const TOPIC_SLUGS: Record<string, string> = {
  // foundation (course order)
  "Tense basics": "tenses",
  "Subject-Verb Agreement": "subject-verb-agreement",
  "Question Formation": "question-formation",
  "Prepositions (in/on/at)": "prepositions",
  "Articles (a/an/the)": "articles",
  "Present Perfect vs Past Simple": "present-perfect-vs-past-simple",
  Conditionals: "conditionals",
  "Passive Voice": "passive-voice",
  "Modals (can/should/must)": "modals",
  "Phrasal Verbs": "phrasal-verbs",
  "Since vs For": "since-vs-for",
  "Common Mistakes by Bengali Speakers": "common-mistakes-bengali-speakers",
  // D43 content-scale wave (beginner)
  "Present Simple vs Present Continuous": "present-simple-vs-present-continuous",
  "Past Continuous": "past-continuous",
  "Future Forms (will vs going to)": "future-forms",
  "Countable & Uncountable Nouns": "countable-uncountable-nouns",
  "Adjectives & Adverbs": "adjectives-and-adverbs",
  "Adverbs of Frequency": "adverbs-of-frequency",
  "Possessives ('s / mine / of)": "possessives",
  Imperatives: "imperatives",
  "There is vs There are": "there-is-there-are",
  "Either, Neither & Both": "either-neither-both",
  // advanced (C1)
  "Advanced Tense & Aspect Nuances": "advanced-tense-and-aspect",
  "Participle Clauses": "participle-clauses",
  "Cleft Sentences": "cleft-sentences",
  "Discourse Markers & Cohesion": "discourse-markers",
  "Collocations & Word Partnerships": "collocations",
  "Inversion & Emphasis Structures": "inversion-and-emphasis",
  "Mixed & Inverted Conditionals": "mixed-conditionals",
  "Subjunctive & Unreal Uses": "subjunctive",
  "Hedging & Softening Language": "hedging-language",
  "Advanced Reported Speech": "advanced-reported-speech",
  "Nominalisation & Academic Style": "nominalisation",
  "Ellipsis & Substitution": "ellipsis-and-substitution",
  "Register: Formal vs Informal English": "formal-vs-informal-english",
  "Precision Articles & Quantifiers": "precision-articles-quantifiers",
};

export interface LearnPageData {
  /** Canonical grammar topic id (bank key). */
  topic: string;
  slug: string;
  /** Level the landing page renders (foundation → beginner, advanced → advanced). */
  level: BankLevel;
  /** The bank lesson for this topic (guaranteed for every TOPICS entry). */
  lesson: BankLesson;
  /** Human display name (canonical English topic string). */
  name: string;
  /** True when the topic belongs to the advanced (C1) group. */
  advanced: boolean;
}

const ADVANCED_TOPIC_SET = new Set(ADVANCED_TOPICS.map((t) => t.topic));

/** All landing pages, in course order (foundation first, then advanced). */
export function allLearnPages(): LearnPageData[] {
  const pages: LearnPageData[] = [];
  for (const t of TOPICS) {
    const slug = TOPIC_SLUGS[t.topic];
    if (!slug) continue; // unregistered topic — skip defensively
    const advanced = ADVANCED_TOPIC_SET.has(t.topic);
    const level: BankLevel = advanced ? "advanced" : "beginner";
    const lesson = getBankLesson(t.topic, level, "bn");
    if (!lesson) continue;
    pages.push({ topic: t.topic, slug, level, lesson, name: t.topic, advanced });
  }
  return pages;
}

/** Find one landing page by slug, or null. */
export function learnPageBySlug(slug: string): LearnPageData | null {
  return allLearnPages().find((p) => p.slug === slug) ?? null;
}

/** Re-export the lesson→UI content shape for the page renderer. */
export { bankLessonToContent };
