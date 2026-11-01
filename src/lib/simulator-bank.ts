// ─── Speaking simulator bank (D17 + Backlog A2 expansion) ────────────────────
// PURE module. TWO exam modes:
//   • "ielts"     — Part 1 interview → Part 2 long-turn cue card → Part 3
//                   discussion, graded on a 4.0-9.0 band scale.
//   • "interview" — a realistic job interview: warm-up → one behavioral /
//                   situational deep-dive (cue-card style) → role-fit close,
//                   graded with the same band scale but STAR-aware tips.
// Plus PART-DRILL plans: the learner practices ONE part at a time instead of
// the full ~8-minute mock. The learner answers out loud (BYOK STT) or types;
// ONE final AI call grades band-style.

import type { ScenarioId } from "./scenarios";

export type SimPartKind = "p1" | "p2" | "p3";
export type SimMode = "ielts" | "interview";

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
  mode: SimMode;
  part1: SimQuestion[];
  part2: SimCueCard;
  part3: SimQuestion[];
}

/* ── IELTS sets (3 original + 3 new = 6) ─────────────────────────────────── */

export const SIM_SETS: SimSet[] = [
  {
    id: "daily-life",
    title: "Daily life",
    mode: "ielts",
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
    mode: "ielts",
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
    mode: "ielts",
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
  {
    id: "travel-places",
    title: "Travel & places",
    mode: "ielts",
    part1: [
      { kind: "p1", q: "Do you like travelling? Tell me about the best trip you have ever taken.", targetSec: 20 },
      { kind: "p1", q: "Do you prefer travelling by train, bus or plane? Why?", targetSec: 20 },
      { kind: "p1", q: "What place in your country would you recommend to a foreign visitor?", targetSec: 20 },
    ],
    part2: {
      topic: "Describe a place you visited that you will never forget.",
      bullets: [
        "where it is and when you went there",
        "what you did there",
        "who you went with",
        "and explain why it made such a strong impression on you",
      ],
      prepSec: 60,
      speakSec: 120,
    },
    part3: [
      { kind: "p3", q: "Why do you think some people travel to the same place every year while others always seek somewhere new?", targetSec: 30 },
      { kind: "p3", q: "How does tourism change the places people visit — for better or worse?", targetSec: 30 },
    ],
  },
  {
    id: "technology",
    title: "Technology & gadgets",
    mode: "ielts",
    part1: [
      { kind: "p1", q: "How often do you use your smartphone, and for what?", targetSec: 20 },
      { kind: "p1", q: "Is there a gadget you wish you owned? What would you do with it?", targetSec: 20 },
      { kind: "p1", q: "Do you think people spend too much time on screens?", targetSec: 20 },
    ],
    part2: {
      topic: "Describe a piece of technology that changed how you live or study.",
      bullets: [
        "what it is and when you got it",
        "how you use it day to day",
        "what life was like before you had it",
        "and explain why it matters so much to you",
      ],
      prepSec: 60,
      speakSec: 120,
    },
    part3: [
      { kind: "p3", q: "Should children be taught coding and digital skills at school?", targetSec: 30 },
      { kind: "p3", q: "Do you think social media does more harm than good for young people?", targetSec: 30 },
    ],
  },
  {
    id: "health-lifestyle",
    title: "Health & lifestyle",
    mode: "ielts",
    part1: [
      { kind: "p1", q: "What do you do to stay healthy? Do you exercise regularly?", targetSec: 20 },
      { kind: "p1", q: "Do you prefer home-cooked food or eating out? Why?", targetSec: 20 },
      { kind: "p1", q: "How do you usually relax after a busy day?", targetSec: 20 },
    ],
    part2: {
      topic: "Describe a habit you changed that improved your life.",
      bullets: [
        "what the old habit was and why you had it",
        "what made you decide to change",
        "how you changed it step by step",
        "and explain how your life is different now",
      ],
      prepSec: 60,
      speakSec: 120,
    },
    part3: [
      { kind: "p3", q: "Why do you think fast food is still popular even though people know it is unhealthy?", targetSec: 30 },
      { kind: "p3", q: "Who is most responsible for keeping people healthy — the individual, the family, or the government?", targetSec: 30 },
    ],
  },
];

/* ── Job-interview sets (Backlog A2) ─────────────────────────────────────── */

export const INTERVIEW_SETS: SimSet[] = [
  {
    id: "interview-hr",
    title: "HR & self-introduction",
    mode: "interview",
    part1: [
      { kind: "p1", q: "Tell me about yourself and what you do currently.", targetSec: 30 },
      { kind: "p1", q: "What are your greatest strengths, with a quick example?", targetSec: 25 },
      { kind: "p1", q: "Why do you want to work in this kind of role?", targetSec: 25 },
    ],
    part2: {
      topic: "Describe a project or achievement you are genuinely proud of.",
      bullets: [
        "what the project was and why it mattered",
        "your exact role and the hardest part",
        "what you did to get through it",
        "and explain the result — numbers help if you have them",
      ],
      prepSec: 45,
      speakSec: 120,
    },
    part3: [
      { kind: "p3", q: "Where do you see yourself in three years, and how does this job fit that picture?", targetSec: 30 },
      { kind: "p3", q: "What kind of team environment brings out your best work?", targetSec: 25 },
    ],
  },
  {
    id: "interview-behavioral",
    title: "Behavioral & problem-solving",
    mode: "interview",
    part1: [
      { kind: "p1", q: "Tell me about a time you had a disagreement with a teammate. How did you handle it?", targetSec: 30 },
      { kind: "p1", q: "Describe a deadline you nearly missed. What did you do?", targetSec: 30 },
      { kind: "p1", q: "How do you react when you receive tough feedback?", targetSec: 25 },
    ],
    part2: {
      topic: "Describe a serious mistake you made and how you fixed it.",
      bullets: [
        "what went wrong and why",
        "how quickly you noticed it",
        "the exact steps you took to repair it",
        "and explain what you changed afterwards so it never repeats",
      ],
      prepSec: 45,
      speakSec: 120,
    },
    part3: [
      { kind: "p3", q: "If two urgent tasks land on your desk at once, how do you decide what comes first?", targetSec: 30 },
      { kind: "p3", q: "Tell me about a skill you learned outside school or work. How did you learn it?", targetSec: 25 },
    ],
  },
];

export const ALL_SIM_SETS: SimSet[] = [...SIM_SETS, ...INTERVIEW_SETS];

export function simSetById(id: unknown): SimSet | undefined {
  if (typeof id !== "string") return undefined;
  return ALL_SIM_SETS.find((s) => s.id === id);
}

/** Flat ordered answer-plan for a FULL set (part1 → part2 → part3). */
export function simPlan(set: SimSet): { kind: SimPartKind; q: string; targetSec: number }[] {
  return [
    ...set.part1,
    { kind: "p2" as const, q: set.part2.topic, targetSec: set.part2.speakSec },
    ...set.part3,
  ];
}

/** Part-drill plan (Backlog A2): ONE part at a time.
 *  p1 → 3 short questions · p2 → 1 cue card · p3 → 2 discussion questions.
 *  Draws from a random set of the same mode so every drill feels fresh. */
export function simPartPlan(mode: SimMode, part: SimPartKind, random: () => number = Math.random) {
  const pool = (mode === "ielts" ? SIM_SETS : INTERVIEW_SETS).filter((s) =>
    part === "p2" ? true : s[part === "p1" ? "part1" : "part3"].length > 0
  );
  const set = pool[Math.floor(random() * pool.length)] ?? SIM_SETS[0];
  if (part === "p1") {
    const qs = set.part1;
    const picked = qs.length <= 3 ? qs : [...qs].sort(() => random() - 0.5).slice(0, 3);
    return { set, plan: picked.map((q) => ({ kind: q.kind, q: q.q, targetSec: q.targetSec })) };
  }
  if (part === "p2") {
    return {
      set,
      plan: [{ kind: "p2" as const, q: set.part2.topic, targetSec: set.part2.speakSec }],
    };
  }
  const qs = set.part3;
  const picked = qs.length <= 2 ? qs : [...qs].sort(() => random() - 0.5).slice(0, 2);
  return { set, plan: picked.map((q) => ({ kind: q.kind, q: q.q, targetSec: q.targetSec })) };
}

/** Unused re-export guard — keeps the ScenarioId import meaningful if the
 *  bank later grows scenario-linked sets. */
export type { ScenarioId };
