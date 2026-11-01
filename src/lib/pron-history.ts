"use client";

// ─── Pronunciation progress store (Backlog A3) ──────────────────────────────
// Device-local (localStorage) history of every graded pronunciation attempt.
// Nothing leaves the browser. Powers the progress graph, the weak-word list
// and the drill suggestions below the practice card.
//
// Row shape: { at, exId, level, score, words: [{word, verdict}] }
// Kept to the last 80 attempts (enough for a trend, tiny on disk).

import type { CompareResult, WordVerdict } from "./pron-bank";
import type { LibraryLevel } from "./library-types";

const KEY = "bolo_pron_history";
const MAX = 80;

export interface PronAttempt {
  at: number; // epoch ms
  exId: string;
  level: LibraryLevel;
  score: number; // 0-100
  words: { word: string; verdict: WordVerdict }[];
}

export function loadPronHistory(): PronAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw) as unknown;
    if (!Array.isArray(arr)) return [];
    return arr
      .filter(
        (e): e is PronAttempt =>
          !!e &&
          typeof e === "object" &&
          typeof (e as PronAttempt).at === "number" &&
          typeof (e as PronAttempt).exId === "string" &&
          typeof (e as PronAttempt).score === "number" &&
          Array.isArray((e as PronAttempt).words)
      )
      .slice(-MAX);
  } catch {
    return [];
  }
}

export function addPronAttempt(
  exId: string,
  level: LibraryLevel,
  cmp: CompareResult
): void {
  if (typeof window === "undefined") return;
  try {
    const list = loadPronHistory();
    list.push({
      at: Date.now(),
      exId,
      level,
      score: cmp.score,
      words: cmp.words.map((w) => ({ word: w.word, verdict: w.verdict })),
    });
    window.localStorage.setItem(KEY, JSON.stringify(list.slice(-MAX)));
  } catch {
    /* private mode — progress is a nice-to-have, never blocks practice */
  }
}

export function clearPronHistory(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}

/* ── aggregation ── */

export interface WeakWord {
  word: string;
  missRate: number; // 0-1 — share of attempts where it was miss/close-with-miss
  seen: number;
}

/** Words the learner most often MISSES, worst first. Only words seen ≥2x. */
export function weakWords(list: PronAttempt[], limit = 8): WeakWord[] {
  const agg = new Map<string, { miss: number; seen: number }>();
  for (const a of list) {
    for (const w of a.words) {
      if (!/^[a-zA-Z'-]{2,}$/.test(w.word)) continue; // skip fragments
      const key = w.word.toLowerCase();
      const cur = agg.get(key) ?? { miss: 0, seen: 0 };
      cur.seen += 1;
      if (w.verdict === "miss") cur.miss += 1;
      agg.set(key, cur);
    }
  }
  return [...agg.entries()]
    .filter(([, v]) => v.seen >= 2 && v.miss > 0)
    .map(([word, v]) => ({ word, missRate: v.miss / v.seen, seen: v.seen }))
    .sort((a, b) => b.missRate - a.missRate || b.seen - a.seen)
    .slice(0, limit);
}

/** Chart series: last N attempts, oldest first. */
export function trendSeries(list: PronAttempt[], n = 20): { at: number; score: number }[] {
  return list.slice(-n).map((a) => ({ at: a.at, score: a.score }));
}

export function pronStats(list: PronAttempt[]) {
  const attempts = list.length;
  const last = attempts ? list[attempts - 1].score : 0;
  const first5 = list.slice(0, 5);
  const last5 = list.slice(-5);
  const avg = (xs: number[]) => (xs.length ? Math.round(xs.reduce((a, b) => a + b, 0) / xs.length) : 0);
  const start = avg(first5.map((a) => a.score));
  const recent = avg(last5.map((a) => a.score));
  const best = attempts ? Math.max(...list.map((a) => a.score)) : 0;
  // delta of recent vs the very first attempts (only meaningful with 5+)
  const delta = attempts >= 5 ? recent - start : 0;
  return { attempts, last, avg: avg(list.map((a) => a.score)), best, delta, start, recent };
}
