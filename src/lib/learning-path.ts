// ─── The Learning Path ("শেখার পথ") — pedagogical backbone ───
//
// Built on learning psychology so a student can simply follow the path and
// understand, in small sequential chunks (Vygotsky's ZPD / scaffolding):
//
//   • 5 units per level. Each unit is a small, complete chunk:
//       1. LEARN  — 12 thematically-clustered words (schema theory: words
//          grouped by meaning stick together and are easier to recall)
//       2. BUILD  — one grammar lesson that reuses those words
//       3. LISTEN — one graded story episode (Krashen's comprehensible
//          input i+1) that recycles the same vocabulary
//       4. RECALL — the story quiz (testing effect / active recall)
//   • Serial stories ("Sadia Moves to Dhaka", "The Internship", "The Green
//     Startup") give narrative pull — curiosity to reach the next episode
//     is a powerful, free motivator.
//   • Every step is 100% free: words and stories come from the DB library,
//     beginner/advanced grammar comes from the static bank, intermediate
//     grammar comes from owner-authored DB lessons. No API key anywhere.
//
// Unit completion (self-efficacy: visible, achievable wins):
//   • words    → ≥ 10 of 12 marked "learned" (mastery threshold, forgiving)
//   • grammar  → topic id present in the grammar done-list (quiz finished
//                or "mark as read")
//   • listening→ episode slug in the listening done-list (quiz finished)
//
// Theme/goal strings are i18n keys under `path.units.<key>.{theme,goal}` in
// messages/sections/path.<locale>.json.

import type { LibraryLevel } from "./library-types";

export interface PathUnitDef {
  /** 1-based unit number within the level. */
  unit: number;
  /** i18n key under path.units.<key> (theme + goal strings). */
  key: string;
  /** Grammar lesson for this unit — bank topic (beginner/advanced) or DB topic (intermediate). */
  grammar: { source: "bank" | "db"; topic: string } | null;
  /** DB listening slug for this unit's episode (serial story). */
  listeningSlug: string | null;
  /** Slug prefix of the level's serial (for episode labels). */
  serial: string;
}

export const PATH_LEVELS: LibraryLevel[] = ["beginner", "intermediate", "advanced"];

/** Mastery threshold: a vocab unit counts as done at ≥10/12 words learned. */
export const VOCAB_UNIT_MASTERY = 10;

export const PATH_UNITS: Record<LibraryLevel, PathUnitDef[]> = {
  /* BEGINNER — first steps: be/have, everyday people, places and actions. */
  beginner: [
    {
      unit: 1,
      key: "b1",
      grammar: { source: "bank", topic: "Tense basics" },
      listeningSlug: "sadia-dhaka-ep1",
      serial: "sadia-dhaka",
    },
    {
      unit: 2,
      key: "b2",
      grammar: { source: "bank", topic: "Subject-Verb Agreement" },
      listeningSlug: "sadia-dhaka-ep2",
      serial: "sadia-dhaka",
    },
    {
      unit: 3,
      key: "b3",
      grammar: { source: "bank", topic: "Question Formation" },
      listeningSlug: "sadia-dhaka-ep3",
      serial: "sadia-dhaka",
    },
    {
      unit: 4,
      key: "b4",
      grammar: { source: "bank", topic: "Prepositions (in/on/at)" },
      listeningSlug: "sadia-dhaka-ep4",
      serial: "sadia-dhaka",
    },
    {
      unit: 5,
      key: "b5",
      grammar: { source: "bank", topic: "Articles (a/an/the)" },
      listeningSlug: "sadia-dhaka-ep5",
      serial: "sadia-dhaka",
    },
  ],

  /* INTERMEDIATE — owner-authored DB lessons form a full B1 curriculum. */
  intermediate: [
    {
      unit: 1,
      key: "i1",
      grammar: { source: "db", topic: "Tense basics" },
      listeningSlug: "internship-ep1",
      serial: "internship",
    },
    {
      unit: 2,
      key: "i2",
      grammar: { source: "db", topic: "Articles (a/an/the)" },
      listeningSlug: "internship-ep2",
      serial: "internship",
    },
    {
      unit: 3,
      key: "i3",
      grammar: { source: "db", topic: "Prepositions (in/on/at)" },
      listeningSlug: "internship-ep3",
      serial: "internship",
    },
    {
      unit: 4,
      key: "i4",
      grammar: { source: "db", topic: "Conditionals" },
      listeningSlug: "internship-ep4",
      serial: "internship",
    },
    {
      unit: 5,
      key: "i5",
      grammar: { source: "db", topic: "Comparatives & Superlatives" },
      listeningSlug: "internship-ep5",
      serial: "internship",
    },
  ],

  /* ADVANCED — C1 nuance: aspect, participle clauses, emphasis, cohesion. */
  advanced: [
    {
      unit: 1,
      key: "a1",
      grammar: { source: "bank", topic: "Advanced Tense & Aspect Nuances" },
      listeningSlug: "green-startup-ep1",
      serial: "green-startup",
    },
    {
      unit: 2,
      key: "a2",
      grammar: { source: "bank", topic: "Participle Clauses" },
      listeningSlug: "green-startup-ep2",
      serial: "green-startup",
    },
    {
      unit: 3,
      key: "a3",
      grammar: { source: "bank", topic: "Cleft Sentences" },
      listeningSlug: "green-startup-ep3",
      serial: "green-startup",
    },
    {
      unit: 4,
      key: "a4",
      grammar: { source: "bank", topic: "Discourse Markers & Cohesion" },
      listeningSlug: "green-startup-ep4",
      serial: "green-startup",
    },
    {
      unit: 5,
      key: "a5",
      grammar: { source: "bank", topic: "Collocations & Word Partnerships" },
      listeningSlug: "green-startup-ep5",
      serial: "green-startup",
    },
  ],
};

/** Display titles of the three serials (English base; UI shows i18n names). */
export const SERIAL_TITLES: Record<string, string> = {
  "sadia-dhaka": "Sadia Moves to Dhaka",
  internship: "The Internship",
  "green-startup": "The Green Startup",
};

/** All listening slugs that belong to the path (per level). */
export function pathListeningSlugs(level: LibraryLevel): string[] {
  return PATH_UNITS[level]
    .map((u) => u.listeningSlug)
    .filter((s): s is string => Boolean(s));
}
