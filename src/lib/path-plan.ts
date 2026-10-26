// ─── Personalized weekly learning plan (D9, ROADMAP-60.md) ──────────────────
// PURE module — takes the learner's level + goal and lays the existing 5
// pedagogical units (learning-path.ts) onto a 4-week schedule with a
// goal-specific "extra push" each week. No db, no server-only: imported by
// PathSection (client) and usable from anywhere.
//
// Design:
//   • The unit ORDER never changes — it is a scaffolding sequence (ZPD), each
//     unit reusing the previous one's words. Personalization comes from
//     (a) which week maps to which units, (b) the weekly theme text, and
//     (c) the goal-specific extra activity — NOT from shuffling content.
//   • Week mapping (5 units → 4 weeks):
//       week 1 → units 1+2   (foundation sprint)
//       week 2 → unit 3      (+ extra)
//       week 3 → unit 4      (+ extra)
//       week 4 → unit 5      (+ bonus reading + full review)
//   • Goal extras (all map to sections that already exist and are free):
//       general → vocab review (wordbook SRS)
//       job     → speaking (interview-style AI roleplay)
//       exam    → listening (exam-style comprehension)
//       travel  → speaking (travel roleplay)
//       school  → reading (extra graded passages)
//   • Theme/tip STRINGS live in i18n: path.plan.themes.<goal>.w1..w4 and
//     path.plan.tip.<goal> — trilingual, ALL-PARITY enforced by i18n-check.

import type { LibraryLevel } from "./library-types";

export type GoalId = "general" | "job" | "exam" | "travel" | "school";
export type ExtraActivity = "review" | "speaking" | "listening" | "reading";

export const PATH_GOALS: GoalId[] = ["general", "job", "exam", "travel", "school"];

export function isGoalId(v: unknown): v is GoalId {
  return typeof v === "string" && (PATH_GOALS as string[]).includes(v);
}

/** Map a stored UserConfig.level to the plan input (defensive default). */
export function goalFromStored(v: unknown): GoalId {
  return isGoalId(v) ? v : "general";
}

export interface PlanWeek {
  /** 1-based week number. */
  week: number;
  /** Path unit numbers (1-5) covered this week. */
  units: number[];
  /** Goal-specific extra activity for the week. */
  extra: ExtraActivity;
}

const WEEK_EXTRA: Record<GoalId, ExtraActivity> = {
  general: "review",
  job: "speaking",
  exam: "listening",
  travel: "speaking",
  school: "reading",
};

/** The 4-week schedule for any level+goal (units are level-agnostic numbers). */
export function buildWeekPlan(_level: LibraryLevel, goal: GoalId): PlanWeek[] {
  const extra = WEEK_EXTRA[goal];
  return [
    { week: 1, units: [1, 2], extra },
    { week: 2, units: [3], extra },
    { week: 3, units: [4], extra },
    { week: 4, units: [5], extra },
  ];
}

/** Unit number → week number (for "Week N" badges on unit cards). */
export function unitToWeek(unit: number): number {
  if (unit <= 2) return 1;
  return unit - 1; // unit 3→week 2, 4→3, 5→4
}

/** Total weeks in the plan (kept as a constant for UI text). */
export const PLAN_WEEKS = 4;
