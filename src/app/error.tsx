"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { RotateCcw, House, BugOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDeviceId } from "@/hooks/use-device";

// Route-level error boundary (D5, ROADMAP-60). Next.js calls this when a
// page/render throws. Shows a friendly trilingual recovery screen AND posts
// a short report to /api/client-error (once — the effect runs once per
// error instance; the reporter endpoint itself is deduped + rate-limited).

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("monitor");
  const reportedRef = useRef(false);

  useEffect(() => {
    // Ref guard (not setState): report once per error instance, StrictMode-safe.
    if (reportedRef.current) return;
    reportedRef.current = true;
    fetch("/api/client-error", {
      method: "POST",
      headers: { "content-type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        deviceId: getDeviceId(),
        message: error?.message || "Unknown boundary error",
        stack: error?.stack || "",
        digest: error?.digest || "",
        path: window.location.pathname,
        source: "boundary",
      }),
    }).catch(() => undefined);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5 px-4 py-16 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/30">
        <BugOff className="h-8 w-8" aria-hidden />
      </span>
      <div className="max-w-md space-y-2">
        <h1 className="text-xl font-bold">{t("boundary.title")}</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t("boundary.desc")}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          onClick={reset}
          className="min-h-11 gap-1.5 bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-sm hover:from-rose-600 hover:to-pink-700"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          {t("boundary.retry")}
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            window.location.href = "/";
          }}
          className="min-h-11 gap-1.5"
        >
          <House className="h-4 w-4" aria-hidden />
          {t("boundary.home")}
        </Button>
      </div>
    </div>
  );
}
