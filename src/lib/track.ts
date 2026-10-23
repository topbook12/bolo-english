"use client";

// ─── Privacy-first analytics client (D1, ROADMAP-60.md) ────────────────────
// Batched, loss-tolerant event queue feeding /api/track.
//
// Design rules:
//   • NEVER throws, NEVER blocks UI, NEVER logs PII (names are a closed
//     whitelist in src/lib/analytics.ts; props sanitized there too).
//   • Batched: ≤8 queued events or 5s, whichever first. sendBeacon on page
//     hide so nothing is lost when the learner leaves.
//   • Session model: session_start on first load (or return after a 30-min
//     gap — the classic web-session timeout), session_end on hide. Mobile
//     background→foreground within 30 min resumes the SAME session, so
//     app-switching doesn't inflate the daily session count.

import { getDeviceId } from "@/hooks/use-device";
import type { TrackEventName } from "@/lib/analytics";

const FLUSH_AT = 8; // events queued → flush now
const FLUSH_EVERY_MS = 5_000;
const SESSION_GAP_MS = 30 * 60 * 1000; // 30-min inactivity = new session
const LAST_END_KEY = "bolo_session_end";

interface Pending {
  name: TrackEventName;
  props?: Record<string, unknown>;
}

let queue: Pending[] = [];
let flushTimer: ReturnType<typeof setTimeout> | null = null;
let initialized = false;
let sessionStartedAt = 0;
let lastHiddenAt = 0;

function send(events: Pending[]): void {
  if (!events.length || typeof window === "undefined") return;
  const body = JSON.stringify({ deviceId: getDeviceId(), events });
  try {
    const blob = new Blob([body], { type: "application/json" });
    if (navigator.sendBeacon?.("/api/track", blob)) return;
  } catch {
    /* fall through to fetch */
  }
  try {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* analytics is best-effort */
  }
}

export function flushTracking(): void {
  if (!queue.length) return;
  const batch = queue.splice(0, 20);
  send(batch);
  if (queue.length) scheduleFlush();
}

function scheduleFlush(): void {
  if (flushTimer || typeof window === "undefined") return;
  flushTimer = setTimeout(() => {
    flushTimer = null;
    flushTracking();
  }, FLUSH_EVERY_MS);
}

/** Queue one whitelisted event. Safe to call from anywhere client-side. */
export function track(name: TrackEventName, props?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  queue.push(props ? { name, props } : { name });
  if (queue.length >= FLUSH_AT) flushTracking();
  else scheduleFlush();
}

function lastSessionEnd(): number {
  const raw = Number(localStorage.getItem(LAST_END_KEY));
  return Number.isFinite(raw) ? raw : 0;
}

function onVisibility(): void {
  if (document.visibilityState === "hidden") {
    lastHiddenAt = Date.now();
    if (sessionStartedAt) {
      track("session_end", {
        durationSec: Math.min(Math.round((Date.now() - sessionStartedAt) / 1000), 86_400),
      });
    }
    try {
      localStorage.setItem(LAST_END_KEY, String(Date.now()));
    } catch {
      /* private mode */
    }
    flushTracking(); // beacon flush NOW — this may be the last chance
  } else if (lastHiddenAt && Date.now() - lastHiddenAt > SESSION_GAP_MS) {
    // Returned after a long absence → this is a NEW session.
    sessionStartedAt = Date.now();
    track("session_start", { locale: document.documentElement.lang || "" });
  }
}

function onPageHide(): void {
  flushTracking();
}

/**
 * App-lifecycle tracking. Call ONCE from the app shell — idempotent.
 * Emits session_start (first load or 30-min-return) and arms the
 * visibility/pagehide listeners for session_end + crash-safe flushes.
 */
export function initSessionTracking(): void {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  const end = lastSessionEnd();
  if (!end || Date.now() - end > SESSION_GAP_MS) {
    sessionStartedAt = Date.now();
    track("session_start", { locale: document.documentElement.lang || "" });
  } else {
    sessionStartedAt = Date.now(); // resumed within the same session window
  }
  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("pagehide", onPageHide);
}
