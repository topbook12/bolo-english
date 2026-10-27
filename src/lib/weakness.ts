// ─── Weakness detection engine (D24, ROADMAP-60.md) ─────────────────────────
// PURE module. Reads the learner's grammar-quiz history (PracticeLog rows:
// kind "grammar-quiz", refId = topic id) and finds the TOPICS the learner
// keeps getting wrong. The adaptive player then builds a targeted 5-question
// set from those topics' bank quizzes.

import { TOPICS } from "@/components/grammar/shared";
import type { QuizQuestion } from "@/lib/types";

export interface PracticeRow {
  kind: string;
  refId: string;
  score: number;
  total: number;
}

export interface WeakTopic {
  topic: string; // canonical topic id (matches TOPICS)
  correct: number;
  asked: number; // Σ total across quizzes of this topic
  accuracy: number; // 0–100
}

/** Below this accuracy a topic counts as "weak" (and worth targeted practice). */
export const WEAK_THRESHOLD = 70;
/** A topic needs at least this many answered questions before it can be judged. */
const MIN_ASKED = 4;
/** Only the most recent quizzes count — old scars shouldn't dominate. */
const RECENT_LIMIT = 40;

const VALID_TOPICS = new Set(TOPICS.map((t) => t.topic));

/**
 * Weakest topics first, worst accuracy at the top. Only real curriculum
 * topics count (owner-made topic ids without i18n keys are skipped), and a
 * topic must have ≥ MIN_ASKED answered questions to be judged at all.
 */
export function computeWeakTopics(rows: PracticeRow[]): WeakTopic[] {
  const grammar = rows
    .filter((r) => r && r.kind === "grammar-quiz" && VALID_TOPICS.has(r.refId))
    .slice(0, RECENT_LIMIT);
  const agg = new Map<string, { correct: number; asked: number }>();
  for (const r of grammar) {
    const a = agg.get(r.refId) ?? { correct: 0, asked: 0 };
    a.correct += Math.max(0, Math.min(r.score, r.total));
    a.asked += Math.max(0, r.total);
    agg.set(r.refId, a);
  }
  return [...agg.entries()]
    .filter(([, a]) => a.asked >= MIN_ASKED)
    .map(([topic, a]) => ({
      topic,
      correct: a.correct,
      asked: a.asked,
      accuracy: a.asked > 0 ? Math.round((a.correct / a.asked) * 100) : 100,
    }))
    .filter((t) => t.accuracy < WEAK_THRESHOLD)
    .sort((a, b) => a.accuracy - b.accuracy || b.asked - a.asked);
}

/**
 * Build a targeted practice set: up to `count` bank questions drawn from the
 * weak topics (weakest first, round-robin so every weak topic is heard),
 * shuffled. Level resolution: foundation topics are banked at beginner,
 * advanced topics at advanced — the levels the static bank actually covers.
 */
export function buildAdaptiveSet(
  weak: WeakTopic[],
  getQuiz: (topic: string, level: "beginner" | "advanced") => QuizQuestion[] | null,
  count = 5
): { topic: string; q: QuizQuestion }[] {
  const pools = weak
    .map((w) => {
      const isAdvanced = TOPICS.find((t) => t.topic === w.topic)?.key;
      const level = ADVANCED_TOPIC_KEYS.has(isAdvanced ?? "") ? "advanced" : "beginner";
      const quiz = getQuiz(w.topic, level) ?? [];
      return { topic: w.topic, level, quiz: [...quiz] };
    })
    .filter((p) => p.quiz.length > 0);
  // round-robin: weakest topic contributes first, then the next…
  const out: { topic: string; q: QuizQuestion }[] = [];
  let added = true;
  while (out.length < count && added) {
    added = false;
    for (const p of pools) {
      if (out.length >= count) break;
      const q = p.quiz.shift();
      if (q) {
        out.push({ topic: p.topic, q });
        added = true;
      }
    }
  }
  // shuffle so the learner can't predict which question belongs to which topic
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Advanced-grid topic keys (the bank's advanced level coverage). */
const ADVANCED_TOPIC_KEYS = new Set([
  "tenseAspect",
  "participleClauses",
  "cleft",
  "discourse",
  "collocations",
  "inversion",
  "mixedConditionals",
  "subjunctive",
  "hedging",
  "reportedSpeech",
  "nominalisation",
  "ellipsis",
  "register",
  "precisionArticles",
]);
