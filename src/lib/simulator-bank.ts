// ─── Speaking simulator bank (D17, ROADMAP-60.md) ───────────────────────────
// PURE module — IELTS-speaking-style exam sets: Part 1 (short interview
// questions), Part 2 (long-turn cue card) and Part 3 (abstract discussion).
// The learner answers out loud (BYOK STT) or types; ONE final AI call grades
// band-style (fluency / lexical / grammar) — per-question STT calls are the
// only quota cost, the feedback itself is a single request.

import type { ScenarioId } from "./scenarios";

export type SimPartKind = "p1" | "p2" | "p3";

export interface SimQuestion {
  kind: SimPartKind;
  /** The examiner's question (English — it's what's being learned). */
  q: string;
  /** Seconds the learner SHOULD aim to speak (soft target shown on the timer). */
  targetSec: number;
}

export interface SimCueCard {
  topic: string;
  bullets: string[];
  /** IELTS: 1 minute preparation, 2 minutes speaking. */
  prepSec: number;
  speakSec: number;
}

export interface SimSet {
  id: string;
  title: string;
  part1: SimQuestion[];
  part2: SimCueCard;
  part3: SimQuestion[];
}

export const SIM_SETS: SimSet[] = [
  {
    id: "daily-life",
    title: "Daily life",
    part1: [
      { kind: "p1", q: "Let's talk about where you live. Do you live in a house or an apartment?", targetSec: 20 },
      { kind: "p1", q: "What do you like most about your neighbourhood?", targetSec: 20 },
      { kind: "p1", q: "Do you prefer mornings or evenings? Why?", targetSec: 20 },
    ],
    part2: {
      topic: "Describe a typical day in your life.",
      bullets: [
        "when you usually wake up and what you do first",
        "how you spend the main part of your day",
        "one thing you enjoy and one thing you would change",
        "and explain how you feel about your daily routine",
      ],
      prepSec: 60,
      speakSec: 120,
    },
    part3: [
      { kind: "p3", q: "How have daily routines changed compared to your parents' generation?", targetSec: 30 },
      { kind: "p3", q: "Do you think technology has made daily life easier or busier?", targetSec: 30 },
    ],
  },
  {
    id: "work-career",
    title: "Work & career",
    part1: [
      { kind: "p1", q: "Are you working or studying at the moment? Tell me about it.", targetSec: 20 },
      { kind: "p1", q: "What skills are most important in your field?", targetSec: 20 },
      { kind: "p1", q: "Would you like to run your own business one day? Why or why not?", targetSec: 20 },
    ],
    part2: {
      topic: "Describe a job you would love to have in the future.",
      bullets: [
        "what the job is and what it involves day to day",
        "what skills or training it needs",
        "why it suits you",
        "and explain why this job attracts you",
      ],
      prepSec: 60,
      speakSec: 120,
    },
    part3: [
      { kind: "p3", q: "Why do you think some jobs pay much more than others?", targetSec: 30 },
      { kind: "p3", q: "How might artificial intelligence change the jobs people do?", targetSec: 30 },
    ],
  },
  {
    id: "education",
    title: "Education & learning",
    part1: [
      { kind: "p1", q: "What did you enjoy most about your school days?", targetSec: 20 },
      { kind: "p1", q: "Do you study better alone or with other people? Why?", targetSec: 20 },
      { kind: "p1", q: "What's something new you have learned recently?", targetSec: 20 },
    ],
    part2: {
      topic: "Describe a teacher or coach who influenced you.",
      bullets: [
        "who this person was and how you knew them",
        "what they taught you — in class or about life",
        "a specific moment you remember",
        "and explain how they changed the way you think",
      ],
      prepSec: 60,
      speakSec: 120,
    },
    part3: [
      { kind: "p3", q: "Should schools teach more practical skills like money or communication?", targetSec: 30 },
      { kind: "p3", q: "Do you think online learning can replace classrooms one day?", targetSec: 30 },
    ],
  },
];

export function simSetById(id: unknown): SimSet | undefined {
  return SIM_SETS.find((s) => s.id === id);
}

/** Flat ordered answer-plan for a set (part1 → part2 → part3). */
export function simPlan(set: SimSet): { kind: SimPartKind; q: string; targetSec: number }[] {
  return [
    ...set.part1,
    { kind: "p2" as const, q: set.part2.topic, targetSec: set.part2.speakSec },
    ...set.part3,
  ];
}

/** Unused re-export guard — keeps the ScenarioId import meaningful if the
 *  bank later grows scenario-linked sets. */
export type { ScenarioId };
