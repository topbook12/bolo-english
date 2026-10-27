"use client";

// ─── XP client helper (D29, ROADMAP-60) ─────────────────────────────────────
// The ONLY client-side XP call: the grammar "lesson done" claim. Everything
// else (quiz/call/review/dictation XP) is minted server-side at the existing
// write-points — the client never asks and never sends a number.
//
// Extra local guard: one claim per (lesson, day) in localStorage so double
// taps / re-renders don't even reach the API (the server day-dedups anyway).

import { getDeviceId } from "@/hooks/use-device";

const LAST_LESSON_KEY = "bolo_xp_lesson_last";

/** Fire-and-forget lesson XP claim. Never throws, never blocks the UI. */
export function claimLessonXp(topicId: string): void {
  if (typeof window === "undefined") return;
  const deviceId = getDeviceId();
  if (!deviceId || !topicId) return;
  const day = new Date(Date.now() + 6 * 3_600_000).toISOString().slice(0, 10); // Asia/Dhaka day
  try {
    const last = JSON.parse(localStorage.getItem(LAST_LESSON_KEY) ?? "{}") as Record<string, string>;
    if (last[topicId] === day) return; // already claimed today
  } catch {
    /* private mode — the server dedup protects us anyway */
  }
  fetch("/api/xp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ deviceId, kind: "lesson", refId: topicId }),
    keepalive: true,
  })
    .then(() => {
      try {
        const last = JSON.parse(localStorage.getItem(LAST_LESSON_KEY) ?? "{}") as Record<string, string>;
        last[topicId] = day;
        localStorage.setItem(LAST_LESSON_KEY, JSON.stringify(last));
      } catch {
        /* ignore */
      }
    })
    .catch(() => null);
}
