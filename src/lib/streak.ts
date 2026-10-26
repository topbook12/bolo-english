"use client";

// ─── Client streak marking (D11, ROADMAP-60.md) ─────────────────────────────
// Marks the device active for TODAY in the DEVICE'S OWN timezone, once per
// day (localStorage-deduped), fire-and-forget. Called from the app shell on
// mount — "used the app that day" is the streak definition; quizzes, calls
// and lessons all happen inside a session anyway.
//
// The day string is computed locally (streak-days.todayLocalDay) — the
// server never learns the timezone, only the already-localized calendar day.

import { getDeviceId } from "@/hooks/use-device";
import { todayLocalDay } from "@/lib/streak-days";

const LAST_MARKED = "bolo_streak_last_day";

/** Best-effort mark — never throws, never blocks the UI. */
export function markActivityDay(): void {
  if (typeof window === "undefined") return;
  const deviceId = getDeviceId();
  if (!deviceId) return;
  const day = todayLocalDay();
  try {
    if (localStorage.getItem(LAST_MARKED) === day) return; // already marked today
  } catch {
    /* private mode — mark anyway; the server upsert is idempotent */
  }
  fetch("/api/streak", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ deviceId, day }),
    keepalive: true,
  })
    .then(() => {
      try {
        localStorage.setItem(LAST_MARKED, day);
      } catch {
        /* ignore */
      }
    })
    .catch(() => null);
}

export { todayLocalDay };
