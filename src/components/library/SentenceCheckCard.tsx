"use client";

// SentenceCheckCard — the owner-authored Vocabulary Library's signature
// feature. The learner writes their own sentence with a library word and
// asks "is my sentence correct?". AI feedback: verdict, corrected sentence,
// why, tips, and an improved version.
//
// This is exactly the API-key policy moment the owner described: reading the
// word entry is free; pressing Check consumes the learner's own Gemini key
// (feature: sentence-check on /api/ai).

import { useState } from "react";
import {
  BadgeCheck,
  Check,
  KeyRound,
  Lightbulb,
  Loader2,
  PenLine,
  RefreshCw,
  TriangleAlert,
  Wand2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslations } from "next-intl";
import { useDeviceValue } from "@/hooks/use-device";
import { callAi } from "@/lib/client-api";
import { cn } from "@/lib/utils";
import type { SentenceCheckResult } from "@/lib/types";

export interface SentenceCheckCardProps {
  word: string;
  /** Localized "word — meaning" line sent as extra context to the teacher. */
  meaningLine?: string;
  className?: string;
  compact?: boolean;
}

export default function SentenceCheckCard({
  word,
  meaningLine,
  className,
  compact,
}: SentenceCheckCardProps) {
  const t = useTranslations("library");
  const deviceId = useDeviceValue((s) => s.deviceId, "");
  const hasKey = useDeviceValue((s) => s.hasKey, false);
  const loaded = useDeviceValue((s) => s.loaded, false);

  const [sentence, setSentence] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<SentenceCheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = !!deviceId && !!sentence.trim() && !busy;

  const submit = async () => {
    const s = sentence.trim();
    if (!s || busy || !deviceId) return;
    setBusy(true);
    setError(null);
    try {
      const data = await callAi<SentenceCheckResult>(deviceId, "sentence-check", {
        word,
        sentence: s.slice(0, 300),
        meaning: (meaningLine ?? "").slice(0, 200),
      });
      setResult(data);
    } catch (e) {
      setError((e as Error).message);
      setResult(null);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card
      className={cn("premium-card rounded-2xl border-border/70 bg-card shadow-sm", className)}
      aria-label={t("check.aria")}
    >
      <CardContent className={cn("space-y-3", compact ? "p-4" : "p-4 sm:p-5")}>
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-sm">
            <PenLine className="h-4.5 w-4.5" aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="text-sm font-bold leading-tight">{t("check.title")}</h3>
            {!compact && (
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                {t("check.subtitle")}
              </p>
            )}
          </div>
        </div>

        {/* No key yet: soft amber hint — reading stays free, checking needs the key */}
        {loaded && !hasKey && (
          <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50/80 p-3 dark:border-amber-900/60 dark:bg-amber-950/30">
            <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden />
            <div className="min-w-0 text-xs leading-relaxed">
              <p className="font-semibold text-amber-900 dark:text-amber-200">
                {t("check.needKeyTitle")}
              </p>
              <p className="mt-0.5 text-amber-800/80 dark:text-amber-300/80">
                {t("check.needKeyBody")}
              </p>
            </div>
          </div>
        )}

        <div className="flex items-end gap-2">
          <textarea
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void submit();
              }
            }}
            placeholder={t("check.placeholder")}
            aria-label={t("check.title")}
            rows={2}
            maxLength={300}
            className="min-h-11 w-full resize-none rounded-xl border border-border/70 bg-background px-3.5 py-2.5 text-sm leading-relaxed outline-none transition-shadow placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-primary/30"
          />
          <Button
            onClick={() => void submit()}
            disabled={!canSubmit}
            className="btn-shine min-h-11 shrink-0 gap-1.5 rounded-xl px-4"
            aria-label={t("check.send")}
          >
            {busy ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                <span className="hidden sm:inline">{t("check.sending")}</span>
              </>
            ) : (
              <>
                <BadgeCheck className="h-4 w-4" aria-hidden />
                <span className="hidden sm:inline">{t("check.send")}</span>
              </>
            )}
          </Button>
        </div>

        {/* Result */}
        {busy && (
          <div className="space-y-2.5 rounded-xl border border-border/60 bg-muted/30 p-4" aria-busy="true">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-10/12" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
        )}

        {!busy && result && (
          <div className="animate-fade-in-up space-y-3">
            {/* Verdict banner */}
            <div
              className={cn(
                "flex items-center gap-2.5 rounded-xl border p-3.5",
                result.verdict === "correct"
                  ? "border-emerald-500/30 bg-emerald-500/[0.07]"
                  : "border-amber-500/30 bg-amber-500/[0.07]"
              )}
              role="status"
            >
              {result.verdict === "correct" ? (
                <BadgeCheck className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
              ) : (
                <TriangleAlert className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden />
              )}
              <p
                className={cn(
                  "text-sm font-bold",
                  result.verdict === "correct"
                    ? "text-emerald-800 dark:text-emerald-300"
                    : "text-amber-800 dark:text-amber-300"
                )}
              >
                {result.verdict === "correct" ? t("check.verdictCorrect") : t("check.verdictWrong")}
              </p>
            </div>

            {/* Corrected sentence */}
            {result.corrected && (
              <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5">
                <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  {t("check.correctedLabel")}
                </p>
                <p className="mt-1 break-words text-[15px] font-medium leading-relaxed text-emerald-800 dark:text-emerald-300">
                  {result.corrected}
                </p>
              </div>
            )}

            {/* Why */}
            {result.explanation && (
              <div className="rounded-r-xl border-l-2 border-primary/50 bg-primary/[0.04] py-2.5 pl-3.5 pr-3">
                <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  {t("check.explanationLabel")}
                </p>
                <p className="mt-1 break-words text-sm leading-7 text-foreground/90">
                  {result.explanation}
                </p>
              </div>
            )}

            {/* Tips */}
            {(result.suggestions ?? []).length > 0 && (
              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 dark:border-amber-900/60 dark:bg-amber-950/20">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400">
                  <Lightbulb className="h-3.5 w-3.5" aria-hidden />
                  {t("check.suggestionsLabel")}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {result.suggestions.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed">
                      <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/60">
                        <Check className="h-2.5 w-2.5 text-amber-700 dark:text-amber-300" strokeWidth={3} aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Improved version */}
            {result.improved && result.improved !== result.corrected && (
              <div className="rounded-xl border border-violet-500/25 bg-violet-500/[0.05] p-3.5">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-violet-600 dark:text-violet-400">
                  <Wand2 className="h-3.5 w-3.5" aria-hidden />
                  {t("check.improvedLabel")}
                </p>
                <p className="mt-1 break-words text-[15px] font-medium leading-relaxed text-violet-900 dark:text-violet-300">
                  {result.improved}
                </p>
              </div>
            )}
          </div>
        )}

        {!busy && error && (
          <div
            className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 p-3.5"
            role="alert"
          >
            <div className="min-w-0 flex-1 text-xs leading-relaxed text-destructive">
              <p className="font-semibold">{t("check.errorTitle")}</p>
              <p className="mt-0.5 break-words opacity-90">{error}</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => void submit()}
              className="min-h-9 gap-1.5 bg-transparent px-3 text-xs"
              aria-label="retry"
            >
              <RefreshCw className="h-3.5 w-3.5" aria-hidden />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
