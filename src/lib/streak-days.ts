// ─── Streak math over client-local day strings (D11, ROADMAP-60.md) ─────────
// PURE module — no db, no server-only. Days are "YYYY-MM-DD" strings in the
// DEVICE's own calendar (the client computes them), so comparing them as
// strings is timezone-safe by construction: consecutive calendar days sort
// lexicographically in order.
//
// Streak semantics (Duolingo-style, forgiving at the boundary):
//   • current streak counts back from today (or yesterday — the streak is
//     still alive until the day actually ends, so a user who studied
//     yesterday but hasn't opened the app yet today is NOT broken);
//   • longest streak is the best run anywhere in the history.

export const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

/** "YYYY-MM-DD" → epoch days (UTC-anchored; only used for diffs). */
function toEpochDays(day: string): number {
  const [y, m, d] = day.split("-").map(Number);
  return Date.UTC(y, m - 1, d) / 86_400_000;
}

/** Inverse of toEpochDays. */
function fromEpochDays(n: number): string {
  const dt = new Date(n * 86_400_000);
  return dt.toISOString().slice(0, 10);
}

/** Today's date in the device's local calendar as "YYYY-MM-DD". */
export function todayLocalDay(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export interface StreakInfo {
  /** Consecutive active days ending today (or yesterday). */
  current: number;
  /** Best run in the whole history. */
  longest: number;
  /** The last 7 calendar days ending today, oldest → newest ("1"/"0"). */
  last7: ("1" | "0")[];
  /** Whether the device already has an ActivityDay for today. */
  todayDone: boolean;
}

/**
 * Compute streak info from a set of active day strings + today's local day.
 * Invalid/foreign strings are ignored; empty history is a valid input.
 */
export function computeStreaks(
  activeDays: Iterable<string>,
  today: string
): StreakInfo {
  const set = new Set<string>();
  for (const d of activeDays) {
    if (typeof d === "string" && DAY_RE.test(d)) set.add(d);
  }

  const todayDone = set.has(today);

  // Walk back from today; if today is missing, start from yesterday (the
  // streak is still alive until the day ends).
  let current = 0;
  let cursor = toEpochDays(today);
  if (!set.has(fromEpochDays(cursor))) cursor -= 1;
  while (set.has(fromEpochDays(cursor))) {
    current++;
    cursor -= 1;
  }

  // Longest run anywhere in the history.
  let longest = 0;
  const sorted = [...set].sort();
  let run = 0;
  let prev: number | null = null;
  for (const d of sorted) {
    const n = toEpochDays(d);
    run = prev !== null && n - prev === 1 ? run + 1 : 1;
    prev = n;
    if (run > longest) longest = run;
  }

  // Last 7 calendar days ending today (oldest → newest).
  const last7: ("1" | "0")[] = [];
  const todayN = toEpochDays(today);
  for (let i = 6; i >= 0; i--) {
    last7.push(set.has(fromEpochDays(todayN - i)) ? "1" : "0");
  }

  return { current, longest, last7, todayDone };
}
