"use client";

import { useTranslations } from "next-intl";
import {
  AlertTriangle,
  ArrowRight,
  BookA,
  BookOpen,
  Gauge,
  Lightbulb,
  MessageCircleQuestion,
  PenLine,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StatCard from "@/components/shared/StatCard";
import PointList from "@/components/shared/PointList";
import type { CallAnalysis, TranscriptLine } from "@/lib/types";

// Premium post-call analysis: score hero with SVG progress ring, stat cards,
// mistake → correction cards, grammar/vocab gap chips and the full transcript.

function ScoreRing({ score }: { score: number }) {
  const clamped = Math.min(100, Math.max(0, score));
  const r = 52;
  const C = 2 * Math.PI * r;
  const offset = C * (1 - clamped / 100);
  return (
    <div className="relative h-32 w-32 shrink-0">
      <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90" aria-hidden="true">
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          strokeWidth="10"
          className="stroke-emerald-100 dark:stroke-emerald-950"
        />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          stroke="url(#score-gradient)"
          strokeDasharray={C}
          strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="score-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-gradient text-3xl font-extrabold leading-none">{clamped}</span>
        <span className="mt-0.5 text-[10px] font-medium text-muted-foreground">/100</span>
      </div>
    </div>
  );
}

export default function CallAnalysisView({
  analysis,
  transcript,
}: {
  analysis: CallAnalysis;
  transcript: TranscriptLine[];
}) {
  const t = useTranslations("call");

  const stats = [
    { icon: Gauge, label: t("fluency"), v: analysis.fluencyScore, tint: "emerald" },
    { icon: PenLine, label: t("grammar"), v: analysis.grammarScore, tint: "amber" },
    { icon: BookA, label: t("vocabulary"), v: analysis.vocabularyScore, tint: "teal" },
  ];

  // stable per-speaker colors (emerald → teal → amber → rose), no blue/indigo
  const speakerPalette = [
    "text-emerald-700 dark:text-emerald-400",
    "text-teal-700 dark:text-teal-400",
    "text-amber-700 dark:text-amber-400",
    "text-rose-700 dark:text-rose-400",
  ];
  const speakerColor = new Map<string, string>();
  for (const tl of transcript) {
    if (!speakerColor.has(tl.speaker)) {
      speakerColor.set(tl.speaker, speakerPalette[speakerColor.size % speakerPalette.length]);
    }
  }

  return (
    <div className="space-y-4">
      {/* score hero */}
      <div className="premium-card flex items-center gap-4 rounded-2xl bg-card p-5">
        <ScoreRing score={analysis.overallScore} />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t("scoreOverall")}
          </p>
          {analysis.summary && (
            <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{analysis.summary}</p>
          )}
        </div>
      </div>

      {/* score stat cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map((s) => (
          <StatCard key={s.label} icon={s.icon} value={`${s.v ?? 0}/100`} label={s.label} tint={s.tint} />
        ))}
      </div>

      {/* mistakes: original → corrected */}
      {analysis.mistakes?.length > 0 && (
        <div className="space-y-2">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <AlertTriangle className="h-4 w-4 text-amber-500" /> {t("mistakesTitle")}
          </h3>
          <div className="nice-scroll max-h-96 space-y-2 overflow-y-auto pr-1">
            {analysis.mistakes.map((m, i) => (
              <Card
                key={i}
                className="border-amber-200/80 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/25"
              >
                <CardContent className="p-3.5 text-sm">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-destructive line-through decoration-destructive/40">
                      {m.original}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-amber-600" />
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                      {m.corrected}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {m.explanation}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* better dialogue */}
      {analysis.betterDialogue?.length > 0 && (
        <div className="space-y-2">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <BookOpen className="h-4 w-4 text-teal-600" /> {t("betterTitle")}
          </h3>
          <div className="nice-scroll max-h-96 space-y-2 overflow-y-auto pr-1">
            {analysis.betterDialogue.map((d, i) => (
              <div
                key={i}
                className="rounded-xl border-l-4 border-teal-500 bg-teal-50/50 p-3 text-sm dark:bg-teal-950/20"
              >
                <p className="text-muted-foreground">{d.original}</p>
                <p className="mt-1.5 flex items-start gap-1.5 font-medium text-foreground">
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" />
                  {d.improved}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* grammar gaps */}
      {analysis.grammarGaps?.length > 0 && (
        <div className="space-y-2">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <BookOpen className="h-4 w-4 text-amber-500" /> {t("grammarGapsTitle")}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {analysis.grammarGaps.map((g, i) => (
              <Badge
                key={i}
                variant="outline"
                className="gap-1 border-amber-300/70 bg-amber-50/60 font-normal dark:border-amber-800 dark:bg-amber-950/30"
              >
                <BookOpen className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                {g}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* vocabulary gaps */}
      {analysis.vocabularyGaps?.length > 0 && (
        <div className="space-y-2">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <BookA className="h-4 w-4 text-emerald-600" /> {t("vocabGapsTitle")}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {analysis.vocabularyGaps.map((v, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="gap-1.5 bg-emerald-100/70 font-normal text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200"
              >
                <span className="font-bold">{v.word}</span>
                <span className="text-emerald-700/70 dark:text-emerald-400/70">—</span>
                <span>{v.meaning}</span>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* suggestions */}
      {analysis.suggestions?.length > 0 && (
        <div className="space-y-2">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <Lightbulb className="h-4 w-4 text-amber-500" /> {t("suggestionsTitle")}
          </h3>
          <PointList items={analysis.suggestions} variant="check" />
        </div>
      )}

      {/* transcript */}
      {transcript.length > 0 && (
        <div className="space-y-2">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <MessageCircleQuestion className="h-4 w-4 text-teal-600" /> {t("transcriptTitle")}
          </h3>
          <div className="nice-scroll max-h-96 space-y-1.5 overflow-y-auto rounded-xl border bg-muted/30 p-3.5">
            {transcript.map((tl, i) => (
              <p key={i} className="text-sm leading-relaxed">
                <span className={`font-semibold ${speakerColor.get(tl.speaker) ?? ""}`}>
                  {tl.speaker}:{" "}
                </span>
                {tl.text}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
