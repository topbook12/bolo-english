"use client";

import { useTranslations } from "next-intl";
import {
  AlignLeft,
  AlertTriangle,
  ArrowRight,
  BookA,
  BookOpen,
  CircleHelp,
  Clock,
  Dumbbell,
  Gauge,
  Lightbulb,
  MapPin,
  MessageCircleQuestion,
  MessageSquareText,
  PenLine,
  Repeat,
  Replace,
  Sparkles,
  Target,
  Type,
  Users,
  Volume2,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StatCard from "@/components/shared/StatCard";
import PointList from "@/components/shared/PointList";
import { speakEnglish } from "@/components/vocab/speech";
import type {
  AnalysisMistake,
  CallAnalysis,
  MistakeCategory,
  TranscriptLine,
} from "@/lib/types";
import { cn } from "@/lib/utils";

// Deep post-call analysis ("a real coach, not a surface report"):
// score hero + strengths, mistakes grouped by category with severity dots,
// a numbered focus plan (how to develop further), recurring-pattern strip,
// server-computed conversation stats, TTS drills on the improved dialogue
// and an honest "N of M lines captured" note beside the transcript.

const CATEGORY_META: Record<
  MistakeCategory,
  { icon: LucideIcon; chip: string; accent: string }
> = {
  tense: {
    icon: Clock,
    chip: "bg-amber-100/90 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
    accent: "border-l-amber-400 dark:border-l-amber-600",
  },
  article: {
    icon: BookA,
    chip: "bg-teal-100/90 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300",
    accent: "border-l-teal-400 dark:border-l-teal-600",
  },
  preposition: {
    icon: MapPin,
    chip: "bg-orange-100/90 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300",
    accent: "border-l-orange-400 dark:border-l-orange-600",
  },
  "word-choice": {
    icon: Replace,
    chip: "bg-emerald-100/90 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
    accent: "border-l-emerald-400 dark:border-l-emerald-600",
  },
  agreement: {
    icon: Users,
    chip: "bg-rose-100/90 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300",
    accent: "border-l-rose-400 dark:border-l-rose-600",
  },
  vocabulary: {
    icon: BookOpen,
    chip: "bg-emerald-100/90 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
    accent: "border-l-emerald-400 dark:border-l-emerald-600",
  },
  "sentence-structure": {
    icon: AlignLeft,
    chip: "bg-teal-100/90 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300",
    accent: "border-l-teal-400 dark:border-l-teal-600",
  },
  other: {
    icon: CircleHelp,
    chip: "bg-slate-100/90 text-slate-700 dark:bg-slate-900/60 dark:text-slate-300",
    accent: "border-l-slate-300 dark:border-l-slate-600",
  },
};

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

/** Small round TTS button — uses the shared speakEnglish util (no-ops
 * gracefully when speechSynthesis is unavailable). */
function SpeakBtn({
  text,
  label,
  highlighted,
}: {
  text: string;
  label: string;
  highlighted?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => speakEnglish(text)}
      aria-label={label}
      title={label}
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors",
        highlighted
          ? "border-teal-300 bg-white/70 text-teal-700 hover:bg-teal-100 dark:border-teal-700 dark:bg-teal-900/40 dark:text-teal-300 dark:hover:bg-teal-900/70"
          : "border-transparent text-muted-foreground hover:bg-accent"
      )}
    >
      <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
    </button>
  );
}

const normText = (s: string) =>
  s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, "").trim();

/** Legacy stored analyses carry no stats.analyzedLines — estimate the
 * learner's own lines by fingerprinting the corrected sentences back onto
 * the transcript (0 → note hidden). */
function guessOwnLines(transcript: TranscriptLine[], analysis: CallAnalysis): number {
  const needles = [
    ...(analysis.mistakes ?? []).map((m) => m.original),
    ...(analysis.betterDialogue ?? []).map((d) => d.original),
  ]
    .map(normText)
    .filter((s) => s.length > 6);
  if (needles.length === 0) return 0;
  const counts = new Map<string, number>();
  for (const tl of transcript) {
    const norm = normText(tl.text);
    if (!norm) continue;
    if (needles.some((n) => norm.includes(n) || n.includes(norm))) {
      counts.set(tl.speaker, (counts.get(tl.speaker) ?? 0) + 1);
    }
  }
  return counts.size ? Math.max(...counts.values()) : 0;
}

export default function CallAnalysisView({
  analysis,
  transcript,
}: {
  analysis: CallAnalysis;
  transcript: TranscriptLine[];
}) {
  const t = useTranslations("analysis");

  const scoreStats = [
    { icon: Gauge, label: t("fluency"), v: analysis.fluencyScore, tint: "emerald" },
    { icon: PenLine, label: t("grammar"), v: analysis.grammarScore, tint: "amber" },
    { icon: BookA, label: t("vocabulary"), v: analysis.vocabularyScore, tint: "teal" },
  ];

  // mistakes grouped by category (legacy rows without category → "other")
  const mistakeGroups = (() => {
    const map = new Map<MistakeCategory, AnalysisMistake[]>();
    for (const m of analysis.mistakes ?? []) {
      const cat: MistakeCategory = m.category ?? "other";
      const list = map.get(cat) ?? [];
      list.push(m);
      map.set(cat, list);
    }
    return [...map.entries()]
      .map(([category, items]) => ({ category, items }))
      .sort((a, b) => b.items.length - a.items.length);
  })();

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

  // coverage honesty: only meaningful when more than one person spoke
  const multiSpeaker = new Set(transcript.map((tl) => tl.speaker)).size > 1;
  const ownLines =
    analysis.stats?.analyzedLines ?? guessOwnLines(transcript, analysis);
  const showCoverage = multiSpeaker && transcript.length > 0 && ownLines > 0;

  return (
    <div className="fade-in-up space-y-4">
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

      {/* strengths — what you did well 💪 */}
      {analysis.strengths && analysis.strengths.length > 0 && (
        <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/70 p-4 dark:border-emerald-900 dark:bg-emerald-950/25">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold text-emerald-800 dark:text-emerald-300">
            <Sparkles className="h-4 w-4" aria-hidden="true" /> {t("strengthsTitle")}
          </h3>
          <ul className="mt-2.5 space-y-2">
            {analysis.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                  ✓
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* score stat cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {scoreStats.map((s) => (
          <StatCard key={s.label} icon={s.icon} value={`${s.v ?? 0}/100`} label={s.label} tint={s.tint} />
        ))}
      </div>

      {/* conversation stats (server-computed) */}
      {analysis.stats && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <StatCard
            icon={MessageSquareText}
            value={analysis.stats.sentences}
            label={t("statsSentences")}
            tint="teal"
          />
          <StatCard
            icon={Type}
            value={analysis.stats.avgWordsPerSentence}
            label={t("statsAvgWords")}
            tint="orange"
          />
          <StatCard
            icon={BookA}
            value={analysis.stats.uniqueWords}
            label={t("statsUnique")}
            tint="emerald"
          />
        </div>
      )}

      {/* recurring patterns 🔁 (categories that came back from previous sessions) */}
      {analysis.repeatedCategories && analysis.repeatedCategories.length > 0 && (
        <div className="rounded-2xl border border-rose-200/80 bg-rose-50/70 p-3.5 dark:border-rose-900 dark:bg-rose-950/25">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-rose-800 dark:text-rose-300">
            <Repeat className="h-4 w-4" aria-hidden="true" /> {t("recurringTitle")}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {analysis.repeatedCategories.map((c) => {
              const meta = CATEGORY_META[c] ?? CATEGORY_META.other;
              const Icon = meta.icon;
              return (
                <Badge
                  key={c}
                  variant="outline"
                  className="gap-1 border-rose-300/70 bg-white/60 font-normal dark:border-rose-800 dark:bg-rose-950/40"
                >
                  <Icon className="h-3 w-3" aria-hidden="true" />
                  {t(`cats.${c}`)}
                </Badge>
              );
            })}
          </div>
        </div>
      )}

      {/* mistakes grouped by category */}
      {mistakeGroups.length > 0 && (
        <div className="space-y-2">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <AlertTriangle className="h-4 w-4 text-amber-500" aria-hidden="true" />{" "}
            {t("mistakesTitle")}
          </h3>
          <div className="nice-scroll max-h-96 space-y-4 overflow-y-auto pr-1">
            {mistakeGroups.map((g) => {
              const meta = CATEGORY_META[g.category] ?? CATEGORY_META.other;
              const GroupIcon = meta.icon;
              return (
                <div key={g.category} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-lg",
                        meta.chip
                      )}
                    >
                      <GroupIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold">{t(`cats.${g.category}`)}</span>
                    <Badge
                      variant="secondary"
                      className="h-5 min-w-5 justify-center rounded-full px-1.5 text-[11px]"
                    >
                      {g.items.length}
                    </Badge>
                  </div>
                  {g.items.map((m, i) => (
                    <Card key={i} className={cn("border border-border/60 border-l-4 bg-card/80", meta.accent)}>
                      <CardContent className="p-3.5 text-sm">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span
                            aria-hidden="true"
                            title={m.severity === "major" ? t("severityMajor") : t("severityMinor")}
                            className={cn(
                              "h-1.5 w-1.5 shrink-0 rounded-full",
                              m.severity === "major" ? "bg-rose-500" : "bg-slate-400"
                            )}
                          />
                          <span className="text-destructive line-through decoration-destructive/40">
                            {m.original}
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-amber-600" aria-hidden="true" />
                          <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                            {m.corrected}
                          </span>
                        </div>
                        {m.explanation && (
                          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                            {m.explanation}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* better dialogue + TTS drill */}
      {analysis.betterDialogue && analysis.betterDialogue.length > 0 && (
        <div className="space-y-2">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <BookOpen className="h-4 w-4 text-teal-600" aria-hidden="true" /> {t("betterTitle")}
          </h3>
          <div className="nice-scroll max-h-96 space-y-2 overflow-y-auto pr-1">
            {analysis.betterDialogue.map((d, i) => (
              <div
                key={i}
                className="rounded-xl border-l-4 border-teal-500 bg-teal-50/50 p-3 text-sm dark:bg-teal-950/20"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="min-w-0 flex-1 text-muted-foreground">{d.original}</p>
                  <SpeakBtn text={d.original} label={t("speakOriginal")} />
                </div>
                <div className="mt-1.5 flex items-start justify-between gap-2">
                  <p className="flex min-w-0 flex-1 items-start gap-1.5 font-medium text-foreground">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" aria-hidden="true" />
                    {d.improved}
                  </p>
                  <SpeakBtn text={d.improved} label={t("speak")} highlighted />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* grammar gaps */}
      {analysis.grammarGaps && analysis.grammarGaps.length > 0 && (
        <div className="space-y-2">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <BookOpen className="h-4 w-4 text-amber-500" aria-hidden="true" /> {t("grammarGapsTitle")}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {analysis.grammarGaps.map((g, i) => (
              <Badge
                key={i}
                variant="outline"
                className="gap-1 border-amber-300/70 bg-amber-50/60 font-normal dark:border-amber-800 dark:bg-amber-950/30"
              >
                <BookOpen className="h-3 w-3 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                {g}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* vocabulary gaps */}
      {analysis.vocabularyGaps && analysis.vocabularyGaps.length > 0 && (
        <div className="space-y-2">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <BookA className="h-4 w-4 text-emerald-600" aria-hidden="true" /> {t("vocabGapsTitle")}
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

      {/* focus plan — your next steps 🎯 */}
      {analysis.focusPlan && analysis.focusPlan.length > 0 && (
        <div className="space-y-2">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <Target className="h-4 w-4 text-amber-600" aria-hidden="true" /> {t("focusTitle")}
          </h3>
          <div className="space-y-2.5">
            {analysis.focusPlan.map((step, i) => (
              <div
                key={i}
                className="rounded-2xl border border-amber-200/70 bg-gradient-to-br from-amber-50/90 via-card to-teal-50/70 p-4 dark:border-amber-900/60 dark:from-amber-950/25 dark:via-card dark:to-teal-950/25"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-teal-500 text-xs font-bold text-white shadow-sm">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold leading-snug text-foreground">{step.title}</p>
                    {step.why && (
                      <p className="mt-1.5 flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
                        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden="true" />
                        <span>
                          <span className="font-semibold text-amber-700 dark:text-amber-400">
                            {t("focusWhy")}:{" "}
                          </span>
                          {step.why}
                        </span>
                      </p>
                    )}
                    {step.drill && (
                      <p className="mt-1.5 flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
                        <Dumbbell className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" aria-hidden="true" />
                        <span>
                          <span className="font-semibold text-teal-700 dark:text-teal-400">
                            {t("focusDrill")}:{" "}
                          </span>
                          {step.drill}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* suggestions */}
      {analysis.suggestions && analysis.suggestions.length > 0 && (
        <div className="space-y-2">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <Lightbulb className="h-4 w-4 text-amber-500" aria-hidden="true" /> {t("suggestionsTitle")}
          </h3>
          <PointList items={analysis.suggestions} variant="check" />
        </div>
      )}

      {/* transcript + coverage honesty note */}
      {transcript.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="flex items-center gap-1.5 text-sm font-semibold">
              <MessageCircleQuestion className="h-4 w-4 text-teal-600" aria-hidden="true" />{" "}
              {t("transcriptTitle")}
            </h3>
            {showCoverage && (
              <span className="shrink-0 text-[11px] text-muted-foreground">
                {t("coverage", { n: ownLines, m: transcript.length })}
              </span>
            )}
          </div>
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
