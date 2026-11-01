"use client";

// ─── Simulator band history (Backlog A2) ────────────────────────────────────
// Lightweight localStorage store: every graded mock/part-drill appends one
// row {day, band, mode, setId, part}. Powers the trend chips on the
// simulator pick screen. Device-scoped, nothing ever leaves the browser.

const KEY = "bolo_sim_history";
const MAX = 60;

export interface SimHistoryEntry {
  day: string; // YYYY-MM-DD (device-local)
  band: number; // 4.0-9.0
  mode: "ielts" | "interview";
  setId: string;
  part: "full" | "p1" | "p2" | "p3";
}

export function loadSimHistory(): SimHistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw) as unknown;
    if (!Array.isArray(arr)) return [];
    return arr
      .filter(
        (e): e is SimHistoryEntry =>
          !!e &&
          typeof e === "object" &&
          typeof (e as SimHistoryEntry).day === "string" &&
          typeof (e as SimHistoryEntry).band === "number" &&
          typeof (e as SimHistoryEntry).setId === "string"
      )
      .slice(-MAX);
  } catch {
    return [];
  }
}

export function addSimHistory(entry: Omit<SimHistoryEntry, "day">): void {
  if (typeof window === "undefined") return;
  try {
    const list = loadSimHistory();
    list.push({
      ...entry,
      day: new Date().toISOString().slice(0, 10),
    });
    window.localStorage.setItem(KEY, JSON.stringify(list.slice(-MAX)));
  } catch {
    /* private mode — history is a nice-to-have */
  }
}

/** Aggregate helpers for the pick-screen chips. */
export function simHistoryStats(list: SimHistoryEntry[]) {
  const best = list.length ? Math.max(...list.map((e) => e.band)) : 0;
  const last = list.length ? list[list.length - 1].band : 0;
  const recent = list.slice(-5);
  const avg = recent.length
    ? Math.round((recent.reduce((a, e) => a + e.band, 0) / recent.length) * 10) / 10
    : 0;
  return { best, last, avg, recent };
}
