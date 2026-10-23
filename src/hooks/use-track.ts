"use client";

import { useEffect, useRef } from "react";
import { initSessionTracking, track } from "@/lib/track";

/**
 * Returns the whitelisted-track function for manual events
 * (e.g. cv_export, app_install). Event names MUST exist in
 * src/lib/analytics.ts TRACK_EVENTS — TypeScript enforces it.
 */
export function useTrack() {
  return track;
}

/**
 * One-time app-lifecycle tracking (session_start/end). Call once, from the
 * app shell — idempotent inside the tracker.
 */
export function useSessionTracking(): void {
  useEffect(() => {
    initSessionTracking();
  }, []);
}

/**
 * Auto-tracks every section visit ({section_view, section}). The initial
 * mount fires too, so the first section a learner lands on is counted.
 */
export function useSectionTracking(tab: string): void {
  const mounted = useRef(false);
  useEffect(() => {
    // Skip the very first run: initSessionTracking already ran in the same
    // commit, and the restore-from-localStorage tab would double-count as a
    // "visit" the learner didn't click. Every real switch after that counts.
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    track("section_view", { section: tab });
  }, [tab]);
}
