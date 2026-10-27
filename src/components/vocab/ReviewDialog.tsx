"use client";

// ReviewDialog — the spaced-repetition flashcard session ("মনে রাখার রিভিউ").
//
// Psychology: each card forces ACTIVE RECALL (the learner must produce the
// meaning from memory) before the answer is revealed, then a self-grade
// ("পেরেছি" / "পারিনি") schedules the next repetition on the Leitner ladder
// (see review-store.ts). Forgot cards come back once more within the same
// session — immediate correction without shame, then spacing takes over.

import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Brain, Check, Ear, PartyPopper, RotateCcw, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { apiGet, apiPost } from "@/lib/client-api";
import { cn } from "@/lib/utils";
import { pickTri } from "@/lib/library-types";
import type { LibraryVocabData } from "@/lib/library-types";
import type { DailyWord } from "@/lib/types";
import { speakEnglish, cancelSpeech } from "@/components/vocab/speech";
import { dueWords, gradeWord } from "@/components/vocab/review-store";
import { track } from "@/lib/track";
import { useDeviceValue } from "@/hooks/use-device";

/** Max NEW cards per session — a small, winnable chunk (self-efficacy). */
const SESSION_MAX = 10;

/**
 * D22: adapt a wordbook row (DailyWord — what "আজকের শব্দ" saves) into the
 * LibraryVocabData shape the flashcard renders. DailyWord is bn-oriented, so
 * en/hi fall back to the English meaning; examples are English-only.
 */
function dailyWordToVocabData(w: DailyWord): LibraryVocabData {
  return {
    pronunciation: w.pronunciation ?? "",
    partOfSpeech: w.partOfSpeech ?? "",
    meaning: {
      bn: w.banglaMeaning || w.englishMeaning,
      en: w.englishMeaning || w.banglaMeaning,
      hi: w.englishMeaning || w.banglaMeaning,
    },
    englishMeaning: w.englishMeaning ?? "",
    examples: (w.examples ?? []).slice(0, 3).map((en) => ({ en, bn: "" })),
    tip: {
      bn: w.usageTip ?? "",
      en: w.usageTip ?? "",
      hi: w.usageTip ?? "",
    },
    synonyms: [],
    antonyms: [],
  };
}

interface VocabRow {
  id: string;
  word: string;
  level: string;
  data: LibraryVocabData;
}

interface SessionState {
  phase: "loading" | "card" | "done";
  queue: string[]; // unique new cards remaining
  requeue: string[]; // forgot-once cards that come back later in-session
  forgotSeen: string[]; // words already given their second chance
  current: string | null;
  revealed: boolean;
  ok: number; // "পেরেছি" count (unique words)
  graded: number; // unique words graded this session
  initialTotal: number; // size of the first batch (for the progress bar)
}

const FRESH_SESSION: SessionState = {
  phase: "loading",
  queue: [],
  requeue: [],
  forgotSeen: [],
  current: null,
  revealed: false,
  ok: 0,
  graded: 0,
  initialTotal: 0,
};

export default function ReviewDialog({
  open,
  onOpenChange,
  learned,
  onReviewed,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  learned: string[];
  /** Called when the dialog closes so the parent can refresh its due badge. */
  onReviewed?: () => void;
}) {
  const t = useTranslations("review");
  const locale = useLocale();
  const deviceId = useDeviceValue((s) => s.deviceId, "");

  const [session, setSession] = useState<SessionState>(FRESH_SESSION);
  const [cards, setCards] = useState<Map<string, VocabRow>>(new Map());

  /* ---- open: load vocab data, pick the due batch ---- */
  useEffect(() => {
    if (!open) return;
    let alive = true;
    queueMicrotask(() => {
      setSession(FRESH_SESSION);
      void (async () => {
        try {
          const res = await apiGet<{ items: VocabRow[] }>("/api/library?kind=vocab&limit=300");
          const byWord = new Map<string, VocabRow>();
          for (const row of Array.isArray(res.items) ? res.items : []) {
            if (!row?.word || byWord.has(row.word)) continue;
            byWord.set(row.word, row);
          }
          if (!alive) return;
          // D22: ALSO load the learner's own wordbook — words saved from the
          // daily-words generator are NOT in the curated library, and they
          // used to vanish from the review queue ("Review complete" with 3
          // words due). Adapted DailyWord rows make every saved word
          // reviewable. Library data still wins when both exist (richer).
          if (deviceId) {
            try {
              const wb = await apiGet<(DailyWord & { id: string; word: string })[]>(
                `/api/vocab?deviceId=${encodeURIComponent(deviceId)}`
              );
              for (const row of Array.isArray(wb) ? wb : []) {
                if (!row?.word || byWord.has(row.word)) continue;
                byWord.set(row.word, {
                  id: row.id,
                  word: row.word,
                  level: "beginner",
                  data: dailyWordToVocabData(row),
                });
              }
            } catch {
              /* wordbook unavailable — library-only review (old behavior) */
            }
          }
          setCards(byWord);
          const learnedSet = new Set(learned);
          const learnedWords = [...byWord.values()]
            .filter((r) => learnedSet.has(r.word))
            .map((r) => r.word);
          const ordered = dueWords(learnedWords); // lowest box, oldest due first
          const batch = ordered.slice(0, SESSION_MAX);
          setSession({
            ...FRESH_SESSION,
            phase: batch.length > 0 ? "card" : "done",
            queue: batch.slice(1),
            current: batch[0] ?? null,
            initialTotal: batch.length,
          });
        } catch {
          if (!alive) return;
          setCards(new Map());
          setSession({ ...FRESH_SESSION, phase: "done" });
        }
      })();
    });
    return () => {
      alive = false;
      cancelSpeech();
    };
    // learned list is captured at open time — that is the intended snapshot
  }, [open]);

  const card = useMemo(
    () => (session.current ? cards.get(session.current) ?? null : null),
    [session.current, cards]
  );

  /* ---- grade the current card and move to the next ---- */
  const advance = (remembered: boolean | null) => {
    const word = session.current;
    if (!word) return;
    if (remembered !== null) gradeWord(word, remembered); // side effect: persist box

    const queue = [...session.queue];
    let requeue = [...session.requeue];
    const forgotSeen = [...session.forgotSeen];
    if (remembered === false && !forgotSeen.includes(word)) {
      // one more chance, later in this session
      forgotSeen.push(word);
      requeue.push(word);
    }

    let next = queue.shift() ?? null;
    if (!next) {
      next = requeue.shift() ?? null;
    }
    const done = next === null;

    // Session complete → log the review once (fire-and-forget, same pattern as
    // the quiz players). Score/total as raw counts so the Progress "practice"
    // bars aggregate correctly (percent = ok/graded). Never fires for the
    // nothing-due opening state (graded === 0).
    const graded = session.graded + (remembered !== null ? 1 : 0);
    const ok = session.ok + (remembered === true ? 1 : 0);
    if (done && deviceId && graded > 0) {
      apiPost("/api/practice", {
        deviceId,
        kind: "vocab-review",
        refId: "leitner-session",
        score: ok,
        total: graded,
      }).catch(() => undefined);
      // D22: the SRS-specific product signal (the generic quiz_complete also
      // fires server-side via /api/practice; this one names the SRS funnel).
      track("srs_review", { graded, ok });
    }

    setSession({
      phase: done ? "done" : "card",
      queue,
      requeue,
      forgotSeen,
      current: next,
      revealed: false,
      ok,
      graded,
      initialTotal: session.initialTotal,
    });
  };

  const handleClose = (next: boolean) => {
    if (!next) cancelSpeech();
    onOpenChange(next);
    if (!next) onReviewed?.();
  };

  const progressPct =
    session.initialTotal > 0
      ? Math.min(100, Math.round((session.graded / session.initialTotal) * 100))
      : 0;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-md gap-0 overflow-hidden rounded-3xl p-0"
        aria-describedby={undefined}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-gradient-to-r from-teal-50 to-emerald-50 p-4 dark:from-teal-950/40 dark:to-emerald-950/30">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-sm">
              <Brain className="h-4 w-4" aria-hidden />
            </span>
            <DialogTitle className="truncate text-sm font-bold">{t("title")}</DialogTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={() => handleClose(false)}
            aria-label="Close"
          >
            <X className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        {session.phase === "loading" && (
          <div className="flex flex-col items-center gap-3 p-10" aria-busy="true">
            <span
              className="h-8 w-8 animate-spin rounded-full border-[3px] border-teal-500/30 border-t-teal-600"
              aria-hidden
            />
            <p className="text-sm text-muted-foreground">{t("loading")}</p>
          </div>
        )}

        {session.phase === "card" && card && (
          <div className="p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <Progress
                value={progressPct}
                className="h-2 flex-1"
                aria-label={t("progressAria")}
              />
              <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                {session.graded}/{session.initialTotal}
              </span>
            </div>

            {/* The flashcard */}
            <div
              className={cn(
                "flex flex-col items-center rounded-2xl border border-border/70 bg-gradient-to-b from-muted/60 to-background p-6 text-center",
                session.revealed &&
                  "border-teal-300/60 bg-gradient-to-b from-teal-50/60 to-background dark:border-teal-800/60 dark:from-teal-950/30"
              )}
              role="group"
              aria-label={t("cardAria")}
            >
              <button
                type="button"
                onClick={() => speakEnglish(card.word)}
                className="group flex min-h-11 items-center gap-2 rounded-2xl px-3 py-1 transition-colors hover:bg-teal-500/10"
                aria-label={t("speakAria")}
              >
                <span className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {card.word}
                </span>
                <Ear
                  className="h-5 w-5 text-teal-600 opacity-60 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </button>
              {card.data.pronunciation && (
                <p className="mt-1 text-sm text-muted-foreground" dir="auto">
                  {card.data.pronunciation}
                </p>
              )}

              {!session.revealed ? (
                <>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    {t("cardHint")}
                  </p>
                  <Button
                    size="lg"
                    className="btn-shine mt-4 min-h-11 gap-2 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700"
                    onClick={() => setSession((s) => ({ ...s, revealed: true }))}
                  >
                    <Check className="h-4 w-4" aria-hidden />
                    {t("reveal")}
                  </Button>
                </>
              ) : (
                <>
                  {/* Back — the meaning (the thing to recall) */}
                  <div className="mt-4 w-full space-y-3 text-left" dir="auto">
                    <div className="rounded-xl bg-background/80 p-3">
                      {card.data.partOfSpeech && (
                        <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                          {card.data.partOfSpeech}
                        </p>
                      )}
                      <p className="mt-1 text-lg font-bold leading-snug">
                        {pickTri(card.data.meaning, locale)}
                      </p>
                    </div>
                    {card.data.examples[0] && (
                      <div className="rounded-xl bg-background/80 p-3">
                        <p className="text-sm font-medium leading-relaxed">
                          {card.data.examples[0].en}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {card.data.examples[0].bn}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-5 flex w-full gap-2">
                    <Button
                      variant="outline"
                      className="min-h-11 flex-1 gap-1.5 border-rose-300/70 text-rose-700 hover:bg-rose-500/10 hover:text-rose-800 dark:border-rose-800 dark:text-rose-300"
                      onClick={() => advance(false)}
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden />
                      {t("forgot")}
                    </Button>
                    <Button
                      className="min-h-11 flex-1 gap-1.5 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700"
                      onClick={() => advance(true)}
                    >
                      <Check className="h-4 w-4" aria-hidden />
                      {t("remembered")}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {session.phase === "done" && (
          <div className="flex flex-col items-center gap-3 p-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
              <PartyPopper className="h-7 w-7" aria-hidden />
            </span>
            <DialogTitle className="text-lg font-bold">{t("doneTitle")}</DialogTitle>
            {session.graded > 0 ? (
              <>
                <DialogDescription className="text-sm leading-relaxed">
                  {t("doneBody", { n: session.graded, ok: session.ok })}
                </DialogDescription>
                <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                  {t("doneNext")}
                </p>
              </>
            ) : (
              <DialogDescription className="max-w-xs text-sm leading-relaxed">
                {t("noneDueBody")}
              </DialogDescription>
            )}
            <Button
              size="lg"
              className="btn-shine mt-2 min-h-11 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700"
              onClick={() => handleClose(false)}
            >
              {t("close")}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
