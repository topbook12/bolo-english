"use client";

// LibraryAskBox — "প্রশ্ন করুন" for ALL owner-authored library content
// (vocabulary word / grammar lesson / listening story).
//
// The API-key policy of the site lives here in one line: READING the stored
// content is free; the learner's own Gemini key is consumed ONLY when they
// press Ask (feature: content-ask on /api/ai).

import { useState } from "react";
import {
  Check,
  KeyRound,
  Loader2,
  MessageCircleQuestion,
  RefreshCw,
  Send,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslations } from "next-intl";
import { useDeviceValue } from "@/hooks/use-device";
import { callAi } from "@/lib/client-api";
import { cn } from "@/lib/utils";
import type { ContentAnswer } from "@/lib/types";

export interface AskBoxProps {
  /** Content title sent to the teacher (localized for the learner). */
  title: string;
  /** Pre-localized compact content used as the AI context (≤4000 chars). */
  context: string;
  /** Where the box is shown — tweaks the placeholder tone. */
  className?: string;
  /** Compact variant for side rails on desktop. */
  compact?: boolean;
}

export default function LibraryAskBox({ title, context, className, compact }: AskBoxProps) {
  const t = useTranslations("library");
  const deviceId = useDeviceValue((s) => s.deviceId, "");
  const hasKey = useDeviceValue((s) => s.hasKey, false);
  const loaded = useDeviceValue((s) => s.loaded, false);

  const [question, setQuestion] = useState("");
  const [busy, setBusy] = useState(false);
  const [answer, setAnswer] = useState<ContentAnswer | null>(null);
  const [askedQuestion, setAskedQuestion] = useState("");
  const [error, setError] = useState<string | null>(null);

  const canSubmit = !!deviceId && !!question.trim() && !busy;

  const submit = async () => {
    const q = question.trim();
    if (!q || busy || !deviceId) return;
    setBusy(true);
    setError(null);
    setAskedQuestion(q);
    try {
      const data = await callAi<ContentAnswer>(deviceId, "content-ask", {
        title,
        context: context.slice(0, 4000),
        question: q.slice(0, 400),
      });
      setAnswer(data);
    } catch (e) {
      setError((e as Error).message);
      setAnswer(null);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card
      className={cn("premium-card rounded-2xl border-border/70 bg-card shadow-sm", className)}
      aria-label={t("ask.aria")}
    >
      <CardContent className={cn("space-y-3", compact ? "p-4" : "p-4 sm:p-5")}>
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-sm">
            <MessageCircleQuestion className="h-4.5 w-4.5" aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="text-sm font-bold leading-tight">{t("ask.title")}</h3>
            {!compact && (
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                {t("ask.subtitle")}
              </p>
            )}
          </div>
        </div>

        {/* No key yet: soft amber hint — reading stays free, asking needs the key */}
        {loaded && !hasKey && (
          <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50/80 p-3 dark:border-amber-900/60 dark:bg-amber-950/30">
            <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden />
            <div className="min-w-0 text-xs leading-relaxed">
              <p className="font-semibold text-amber-900 dark:text-amber-200">
                {t("ask.needKeyTitle")}
              </p>
              <p className="mt-0.5 text-amber-800/80 dark:text-amber-300/80">
                {t("ask.needKeyBody")}
              </p>
            </div>
          </div>
        )}

        <div className="flex items-end gap-2">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void submit();
              }
            }}
            placeholder={t("ask.placeholder")}
            aria-label={t("ask.title")}
            rows={compact ? 2 : 2}
            maxLength={400}
            className="min-h-11 w-full resize-none rounded-xl border border-border/70 bg-background px-3.5 py-2.5 text-sm leading-relaxed outline-none transition-shadow placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-primary/30"
          />
          <Button
            onClick={() => void submit()}
            disabled={!canSubmit}
            className="btn-shine min-h-11 shrink-0 gap-1.5 rounded-xl px-4"
            aria-label={t("ask.send")}
          >
            {busy ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                <span className="hidden sm:inline">{t("ask.sending")}</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden />
                <span className="hidden sm:inline">{t("ask.send")}</span>
              </>
            )}
          </Button>
        </div>

        {/* Answer */}
        {busy && (
          <div className="space-y-2.5 rounded-xl border border-border/60 bg-muted/30 p-4" aria-busy="true">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        )}

        {!busy && answer && (
          <div className="animate-fade-in-up rounded-xl border border-violet-500/25 bg-violet-500/[0.05] p-4">
            <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-violet-600 dark:text-violet-400">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {t("ask.answerTitle")}
            </p>
            <p className="mt-2 whitespace-pre-line break-words text-sm leading-7 text-foreground/90">
              {answer.answer}
            </p>
            {(answer.bullets ?? []).length > 0 && (
              <ul className="mt-3 space-y-1.5 border-t border-violet-500/15 pt-3">
                {answer.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-500" strokeWidth={3} aria-hidden />
                    <span className="min-w-0 flex-1">{b}</span>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-2.5 truncate text-[11px] text-muted-foreground" aria-hidden>
              ✓ {askedQuestion}
            </p>
          </div>
        )}

        {!busy && error && (
          <div
            className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 p-3.5"
            role="alert"
          >
            <div className="min-w-0 flex-1 text-xs leading-relaxed text-destructive">
              <p className="font-semibold">{t("ask.errorTitle")}</p>
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
