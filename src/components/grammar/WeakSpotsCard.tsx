"use client";

// ─── Weak-spots targeted practice (D24, ROADMAP-60.md) ──────────────────────
// Reads the learner's grammar-quiz history via GET /api/practice, finds the
// topics that keep beating them (accuracy < 70%, ≥4 questions judged), and
// builds a round-robin 5-question practice set from those topics' bank
// quizzes — weakest topic first, shuffled. Fully keyless (static bank).

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Loader2, RotateCcw, Target, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { apiGet, apiPost } from "@/lib/client-api";
import { useDeviceValue } from "@/hooks/use-device";
import { getBankQuiz } from "@/components/grammar/bank";
import { TOPICS } from "@/components/grammar/shared";
import {
  buildAdaptiveSet,
  computeWeakTopics,
  type PracticeRow,
  type WeakTopic,
} from "@/lib/weakness";
import { cn } from "@/lib/utils";

interface AdaptiveItem {
  topic: string;
  q: { question: string; options: string[]; answer: number; explanation: string };
}

type Phase = "idle" | "playing" | "done";

export default function WeakSpotsCard() {
  const t = useTranslations("grammar.weak");
  const deviceId = useDeviceValue((s) => s.deviceId, "");

  const [weak, setWeak] = useState<WeakTopic[] | null>(null); // null = loading
  const [phase, setPhase] = useState<Phase>("idle");
  const [items, setItems] = useState<AdaptiveItem[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);

  const load = useCallback(() => {
    if (!deviceId) return;
    apiGet<PracticeRow[]>(`/api/practice?deviceId=${encodeURIComponent(deviceId)}&kind=grammar-quiz&take=120`)
      .then((rows) => {
        setWeak(computeWeakTopics(Array.isArray(rows) ? rows : []));
      })
      .catch(() => setWeak([]));
  }, [deviceId]);

  useEffect(() => {
    load();
  }, [load]);

  function start() {
    if (!weak || weak.length === 0) return;
    const set = buildAdaptiveSet(weak, (topic, level) => getBankQuiz(topic, level, "en"), 5);
    if (set.length === 0) return;
    setItems(set);
    setIdx(0);
    setPicked(null);
    setCorrect(0);
    setPhase("playing");
  }

  function pick(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === items[idx].q.answer) setCorrect((c) => c + 1);
  }

  function next() {
    if (idx + 1 >= items.length) {
      // log the adaptive session (server derives quiz_complete analytics)
      const topics = [...new Set(items.map((i) => i.topic))].join(",").slice(0, 120);
      void apiPost("/api/practice", {
        deviceId: deviceId || undefined,
        kind: "grammar-adaptive",
        refId: topics,
        score: correct,
        total: items.length,
      }).catch(() => undefined);
      setPhase("done");
      return;
    }
    setIdx((n) => n + 1);
    setPicked(null);
  }

  function topicName(id: string): string {
    const key = TOPICS.find((tp) => tp.topic === id)?.key;
    return key ? t(`topics.${key}.name`) : id;
  }

  if (phase === "playing") {
    const cur = items[idx];
    const q = cur.q;
    return (
      <Card className="premium-card border-border/70 rounded-2xl bg-card">
        <CardContent className="space-y-4 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <Badgeish label={`${idx + 1}/${items.length}`} />
            <Badgeish label={topicName(cur.topic)} muted />
          </div>
          <Progress value={(idx / items.length) * 100} className="h-1.5" aria-label={t("title")} />
          <p className="text-base font-semibold leading-relaxed">{q.question}</p>
          <div className="grid gap-2">
            {q.options.map((opt, i) => {
              const isAnswer = i === q.answer;
              const isPicked = picked === i;
              const show = picked !== null;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => pick(i)}
                  disabled={show}
                  className={cn(
                    "flex min-h-11 items-center gap-2 rounded-xl border px-3.5 py-2.5 text-left text-sm font-medium transition-all",
                    !show && "border-border/60 hover:bg-accent",
                    show && isAnswer && "border-emerald-400/70 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
                    show && isPicked && !isAnswer && "border-rose-400/70 bg-rose-500/10 text-rose-800 dark:text-rose-300",
                    show && !isPicked && !isAnswer && "border-border/40 opacity-60"
                  )}
                >
                  {show && isAnswer && <Check className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden />}
                  {show && isPicked && !isAnswer && <X className="h-4 w-4 shrink-0 text-rose-500" aria-hidden />}
                  {opt}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <>
              <p className="rounded-xl border border-border/60 bg-muted/40 p-3 text-xs leading-relaxed text-muted-foreground">
                {q.explanation}
              </p>
              <Button onClick={next} className="min-h-11 w-full rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md hover:from-amber-600 hover:to-orange-600">
                {idx + 1 >= items.length ? t("finish") : t("next")}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    );
  }

  if (phase === "done") {
    return (
      <Card className="premium-card border-border/70 rounded-2xl bg-card">
        <CardContent className="space-y-3 p-5 text-center sm:p-6">
          <p className="text-sm font-bold">{t("doneTitle", { score: correct, total: items.length })}</p>
          <p className="text-xs text-muted-foreground">{t("doneNote")}</p>
          <Button variant="outline" onClick={load} className="min-h-11 w-full gap-1.5 rounded-xl">
            <RotateCcw className="h-4 w-4" aria-hidden />
            {t("backToWeak")}
          </Button>
        </CardContent>
      </Card>
    );
  }

  // idle — show the weak list (or nothing when there is no weakness / no data)
  if (!deviceId || weak === null) {
    return (
      <Card className="premium-card border-border/70 rounded-2xl bg-card">
        <CardContent className="flex min-h-20 items-center justify-center gap-2 p-5 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          {t("loading")}
        </CardContent>
      </Card>
    );
  }

  if (weak.length === 0) return null;

  return (
    <Card className="premium-card border-amber-300/50 rounded-2xl bg-card">
      <CardContent className="space-y-3 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/90 to-orange-500/90 text-white shadow-md shadow-amber-500/30 dark:shadow-amber-500/20">
            <Target className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold">{t("title")}</p>
            <p className="text-xs text-muted-foreground">{t("desc")}</p>
          </div>
        </div>
        <div className="space-y-1.5">
          {weak.slice(0, 3).map((w) => (
            <div
              key={w.topic}
              className="flex items-center gap-2 rounded-xl border border-border/60 bg-muted/40 p-2.5"
            >
              <span className="min-w-0 flex-1 truncate text-sm font-semibold">{topicName(w.topic)}</span>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-bold",
                  w.accuracy < 50
                    ? "bg-rose-500/10 text-rose-700 dark:text-rose-300"
                    : "bg-amber-500/10 text-amber-700 dark:text-amber-300"
                )}
              >
                {w.accuracy}% · {w.asked}q
              </span>
            </div>
          ))}
        </div>
        <Button
          onClick={start}
          className="min-h-11 w-full gap-2 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/25 hover:from-amber-600 hover:to-orange-600"
        >
          <Target className="h-4 w-4" aria-hidden />
          {t("start")}
        </Button>
      </CardContent>
    </Card>
  );
}

function Badgeish({ label, muted }: { label: string; muted?: boolean }) {
  return (
    <span
      className={cn(
        "rounded-full border px-2.5 py-1 text-[11px] font-bold",
        muted ? "border-border/50 text-muted-foreground" : "border-amber-400/60 bg-amber-500/10 text-amber-800 dark:text-amber-300"
      )}
    >
      {label}
    </span>
  );
}
