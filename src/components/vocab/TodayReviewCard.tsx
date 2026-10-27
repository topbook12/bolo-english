"use client";

// ─── Today's review card (D22, ROADMAP-60.md) ───────────────────────────────
// The vocab section's SRS hub: how many words are due RIGHT NOW, how many
// have graduated, and one tap to start the flashcard session (ReviewDialog —
// the same proven session the Learning Path opens). Forgotten words always
// come first (box 0 → oldest due), which is the whole point of the queue.

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Brain, PartyPopper, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSyncExternalStore } from "react";
import ReviewDialog from "@/components/vocab/ReviewDialog";
import {
  countDue,
  countMastered,
  getReviewMapServerSnapshot,
  getReviewMapSnapshot,
  subscribeReviewMap,
} from "@/components/vocab/review-store";

export default function TodayReviewCard({ learned }: { learned: string[] }) {
  const t = useTranslations("vocab.reviewCard");
  const [open, setOpen] = useState(false);
  const [tick, setTick] = useState(0); // recompute due counts every minute

  // Review map is an external localStorage store — subscribe safely.
  useSyncExternalStore(subscribeReviewMap, getReviewMapSnapshot, getReviewMapServerSnapshot);

  // Due counts change as time passes — poll every minute (cheap, local).
  useEffect(() => {
    const iv = setInterval(() => setTick((n) => n + 1), 60_000);
    return () => clearInterval(iv);
  }, []);

  const due = countDue(learned);
  const mastered = countMastered(learned);
  void tick; // tick only forces the recompute above

  return (
    <>
      <div className="premium-card flex flex-wrap items-center gap-3 rounded-2xl border-border/70 bg-card p-4 sm:p-5">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/90 to-teal-500/90 text-white shadow-md shadow-emerald-500/30 dark:shadow-emerald-500/20">
            <Brain className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-bold">{t("title")}</p>
            {learned.length === 0 ? (
              <p className="truncate text-xs text-muted-foreground">{t("empty")}</p>
            ) : due > 0 ? (
              <p className="truncate text-xs text-muted-foreground">
                {t("due", { n: due })} · {t("mastered", { n: mastered })}
              </p>
            ) : (
              <p className="flex items-center gap-1 truncate text-xs text-muted-foreground">
                <PartyPopper className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
                {t("caughtUp", { n: mastered })}
              </p>
            )}
          </div>
        </div>
        <Button
          onClick={() => setOpen(true)}
          disabled={due === 0}
          className="h-11 shrink-0 gap-1.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700"
        >
          <Sparkles className="h-4 w-4" aria-hidden />
          {due > 0 ? t("start", { n: due }) : t("allDone")}
        </Button>
      </div>

      <ReviewDialog open={open} onOpenChange={setOpen} learned={learned} />
    </>
  );
}
