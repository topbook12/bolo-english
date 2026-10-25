"use client";

import { useEffect } from "react";
import { getDeviceId } from "@/hooks/use-device";

// Window-level error reporter (D5, ROADMAP-60). Catches what the boundary
// can't: global window errors and unhandled promise rejections outside the
// React tree. Fire-and-forget keepalive posts, deduped per session so one
// repeating error can't flood the log (≤3 reports per unique message).
// The endpoint is additionally rate-limited server-side (30/min).

const MAX_REPORTS_PER_MESSAGE = 3;
/** Errors arriving while the tab is already unloading → drop (pagehide is
    tracked by the analytics session-end flush; keepalive covers the rest). */

const reportedCounts = new Map<string, number>();

function report(
  message: string,
  stack: string,
  source: "window" | "rejection"
): void {
  const key = `${source}:${message.slice(0, 120)}`;
  const n = reportedCounts.get(key) ?? 0;
  if (n >= MAX_REPORTS_PER_MESSAGE) return;
  reportedCounts.set(key, n + 1);

  fetch("/api/client-error", {
    method: "POST",
    headers: { "content-type": "application/json" },
    keepalive: true,
    body: JSON.stringify({
      deviceId: getDeviceId(),
      message,
      stack,
      digest: "",
      path: window.location.pathname,
      source,
    }),
  }).catch(() => undefined);
}

export default function ErrorReporter() {
  useEffect(() => {
    const onError = (e: ErrorEvent) => {
      report(
        e.message || "Unknown window error",
        e.error?.stack || "",
        "window"
      );
    };
    const onRejection = (e: PromiseRejectionEvent) => {
      const r = e.reason;
      const msg =
        (typeof r === "object" && r !== null && r.message) || String(r ?? "");
      report(msg || "Unhandled rejection", r?.stack || "", "rejection");
    };
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
