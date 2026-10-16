"use client";

// Lesson view — renders one grammar lesson for a topic/level, with a sticky
// CTA into the quiz. Load order: owner-authored DB lesson (zero keys) →
// static bank (zero keys) → AI generation (BYO Gemini key).
//
// v4 UX (Task 10, owner mandate): lessons are POINT-FORM, not paragraphs —
// every lesson shows a clickable ROADMAP ("এই লেসনে আমরা যা শিখব"), and each
// section renders as a color-tinted step card with an emoji, a one-line lead,
// scannable bullet points, an optional formula box and an optional mini table.
// Legacy paragraph lessons (static bank / AI) still render via the fallback.

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleCheckBig,
  CircleX,
  Code2,
  GraduationCap,
  Languages,
  Lightbulb,
  ListChecks,
  Map,
  RefreshCw,
  TriangleAlert,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useDevice } from "@/hooks/use-device";
import { apiGet, callAi } from "@/lib/client-api";
import { cn } from "@/lib/utils";
import type { GrammarLessonContent } from "@/lib/types";
import { pickTri, type LibraryGrammarEntry } from "@/lib/library-types";
import { errMessage, fmtNum, saveDoneTopic, type GrammarTopic, type Level } from "@/components/grammar/shared";
import { bankLessonToContent, getBankLesson } from "@/components/grammar/bank";
import LibraryAskBox from "@/components/library/AskBox";

interface LessonViewProps {
  topic: GrammarTopic;
  level: Level;
  onBack: () => void;
  onStartQuiz: () => void;
  /**
   * Display name for owner-made topics that have no i18n topic key.
   * Always preferred when present — `t()` on a missing key throws in dev.
   */
  topicName?: string;
  /** Present when a next topic exists in the sequential course order. */
  onNextLesson?: () => void;
}

/* ─── v4 section palette — rotating premium tints (no blue/indigo) ───────── */

interface SectionTint {
  bar: string; // gradient accent bar
  chip: string; // emoji chip bg
  step: string; // "ধাপ ১" label color
  check: string; // bullet check icon color
  checkBg: string; // bullet check circle bg
  formula: string; // formula box border+bg
  th: string; // table header cell
}

const SECTION_TINTS: SectionTint[] = [
  {
    bar: "from-emerald-500 to-teal-500",
    chip: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    step: "text-emerald-600 dark:text-emerald-400",
    check: "text-emerald-600 dark:text-emerald-400",
    checkBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    formula: "border-emerald-500/25 bg-gradient-to-r from-emerald-500/[0.07] to-teal-500/[0.07]",
    th: "bg-emerald-500/10 text-emerald-800 dark:text-emerald-200",
  },
  {
    bar: "from-amber-500 to-orange-500",
    chip: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    step: "text-amber-600 dark:text-amber-400",
    check: "text-amber-600 dark:text-amber-400",
    checkBg: "bg-amber-500/10 dark:bg-amber-500/15",
    formula: "border-amber-500/25 bg-gradient-to-r from-amber-500/[0.07] to-orange-500/[0.07]",
    th: "bg-amber-500/10 text-amber-800 dark:text-amber-200",
  },
  {
    bar: "from-rose-500 to-pink-500",
    chip: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    step: "text-rose-600 dark:text-rose-400",
    check: "text-rose-600 dark:text-rose-400",
    checkBg: "bg-rose-500/10 dark:bg-rose-500/15",
    formula: "border-rose-500/25 bg-gradient-to-r from-rose-500/[0.07] to-pink-500/[0.07]",
    th: "bg-rose-500/10 text-rose-800 dark:text-rose-200",
  },
  {
    bar: "from-teal-500 to-cyan-600",
    chip: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    step: "text-teal-600 dark:text-teal-400",
    check: "text-teal-600 dark:text-teal-400",
    checkBg: "bg-teal-500/10 dark:bg-teal-500/15",
    formula: "border-teal-500/25 bg-gradient-to-r from-teal-500/[0.07] to-cyan-600/[0.07]",
    th: "bg-teal-500/10 text-teal-800 dark:text-teal-200",
  },
  {
    bar: "from-orange-500 to-amber-600",
    chip: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    step: "text-orange-600 dark:text-orange-400",
    check: "text-orange-600 dark:text-orange-400",
    checkBg: "bg-orange-500/10 dark:bg-orange-500/15",
    formula: "border-orange-500/25 bg-gradient-to-r from-orange-500/[0.07] to-amber-600/[0.07]",
    th: "bg-orange-500/10 text-orange-800 dark:text-orange-200",
  },
];

const ANIM_STEPS = [
  "animate-fade-in-up-1",
  "animate-fade-in-up-2",
  "animate-fade-in-up-3",
];

function tintOf(i: number): SectionTint {
  return SECTION_TINTS[i % SECTION_TINTS.length];
}

/** Split a leading emoji (+ optional FE0F/ZWJ continuation) from a heading. */
const LEADING_EMOJI_RE =
  /^(\p{Extended_Pictographic}(?:\uFE0F|\u200D\p{Extended_Pictographic})*)\s*/u;

function splitEmoji(heading: string): [string, string] {
  const m = heading.match(LEADING_EMOJI_RE);
  return m ? [m[1], heading.slice(m[0].length)] : ["", heading];
}

/** Minimal rich text: converts **bold** spans to <strong>, escapes the rest. */
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") && p.length > 4 ? (
          <strong key={i} className="font-semibold text-foreground">
            {p.slice(2, -2)}
          </strong>
        ) : (
          p
        )
      )}
    </>
  );
}

/* ─── content mapping ─────────────────────────────────────────────────────── */

/** Owner-authored DB entry → the render-shaped content this view renders. */
function dbEntryToContent(
  entry: LibraryGrammarEntry,
  locale: string
): GrammarLessonContent {
  return {
    title: pickTri(entry.data.title, locale),
    level: entry.level,
    intro: pickTri(entry.data.intro, locale),
    roadmap: (entry.data.roadmap ?? []).map((r) => pickTri(r, locale)),
    sections: (entry.data.sections ?? []).map((s) => ({
      heading: pickTri(s.heading, locale),
      lead: s.lead ? pickTri(s.lead, locale) : undefined,
      points: s.points?.length ? s.points.map((p) => pickTri(p, locale)) : undefined,
      formula: s.formula ? pickTri(s.formula, locale) : undefined,
      table: s.table
        ? {
            head: s.table.head.map((h) => pickTri(h, locale)),
            rows: s.table.rows.map((row) => row.map((c) => pickTri(c, locale))),
          }
        : undefined,
      explanation: s.body ? pickTri(s.body, locale) : undefined,
      examples: (s.examples ?? []).map((ex) => ({
        wrong: ex.wrong,
        right: ex.right,
        note: pickTri(ex.note, locale),
      })),
    })),
    tips: (entry.data.tips ?? []).map((tip) => pickTri(tip, locale)),
  };
}

/** Compact pre-localized context for the "ask a question" teacher (≤3500 chars). */
function lessonContextOf(d: GrammarLessonContent): string {
  const parts: string[] = [`Intro: ${d.intro}`];
  for (const s of d.sections ?? []) {
    const body =
      (s.points ?? []).join(" • ") || s.explanation || "";
    parts.push(
      `## ${s.heading}\n${body}\nExamples: ${(s.examples ?? [])
        .map((e) => e.right)
        .join(" | ")}`
    );
  }
  parts.push(`Tips: ${(d.tips ?? []).join("; ")}`);
  return parts.join("\n").slice(0, 3500);
}

/* ─── pieces ──────────────────────────────────────────────────────────────── */

/** One AI example as a premium "wrong → right" card. */
function ExampleCard({ wrong, right, note }: { wrong: string; right: string; note?: string }) {
  const t = useTranslations("grammar");
  return (
    <div className="rounded-xl border border-border/70 bg-muted/30 p-3.5">
      <div className="grid grid-cols-[1.25rem_1fr] items-start gap-x-2.5">
        <CircleX className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden />
        <p className="min-w-0 break-words text-sm leading-relaxed text-muted-foreground line-through decoration-destructive/50">
          <span className="sr-only">{t("lesson.wrongLabel")} </span>
          {wrong}
        </p>
        <ArrowRight className="my-1 h-4 w-4 shrink-0 text-emerald-500/80" aria-hidden />
        <span aria-hidden />
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
        <p className="min-w-0 break-words text-[15px] font-medium leading-relaxed text-emerald-800 dark:text-emerald-300">
          <span className="sr-only">{t("lesson.rightLabel")} </span>
          {right}
        </p>
      </div>
      {note && (
        <p className="mt-2.5 flex items-start gap-1.5 border-t border-border/60 pt-2.5 text-[13px] leading-relaxed text-muted-foreground">
          <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden />
          <span className="min-w-0 flex-1">{note}</span>
        </p>
      )}
    </div>
  );
}

function LessonSkeleton() {
  return (
    <Card aria-hidden>
      <CardContent className="space-y-4 p-5 sm:p-6">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-7 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        {[1, 2].map((i) => (
          <div key={i} className="space-y-2.5 rounded-2xl border border-border/70 p-4">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-16 w-full rounded-xl" />
            <Skeleton className="h-16 w-full rounded-xl" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function LessonView({
  topic,
  level,
  onBack,
  onStartQuiz,
  topicName,
  onNextLesson,
}: LessonViewProps) {
  const t = useTranslations("grammar");
  const tc = useTranslations("common");
  const locale = useLocale();
  const fmt = useCallback((n: number) => fmtNum(n, locale), [locale]);

  const { deviceId } = useDevice();
  const [data, setData] = useState<GrammarLessonContent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const reqIdRef = useRef(0);

  // Owner topics have no i18n topic key — GrammarSection passes the DB title
  // as `topicName`. `t()` on a missing key throws in dev, so the prop wins.
  const name = topicName ?? t(`topics.${topic.key}.name`);

  const load = useCallback(async () => {
    const reqId = ++reqIdRef.current;
    setLoading(true);
    setError(null);
    // 1) Owner-authored library lesson first — stored in the site's own DB,
    //    zero API keys, editable by the owner from the Content Studio.
    //    Any DB problem stays SILENT: we just fall through to the bank/AI.
    try {
      const res = await apiGet<{ items: LibraryGrammarEntry[] }>(
        `/api/library?kind=grammar&topic=${encodeURIComponent(topic.topic)}&level=${level}`
      );
      if (reqId !== reqIdRef.current) return; // stale (topic switched)
      const entry = res.items?.[0];
      if (entry) {
        setData(dbEntryToContent(entry, locale));
        setLoading(false);
        return;
      }
    } catch {
      // DB miss/offline → static bank or AI below (never an error state)
    }
    // 2) Static bank — stored in this site's own source, zero API keys,
    //    zero network. Covers foundation×beginner and advanced×advanced in
    //    bn/en/hi (see bank/index.ts).
    const banked = getBankLesson(topic.topic, level, locale);
    if (banked) {
      setData(bankLessonToContent(banked));
      setLoading(false);
      return;
    }
    // 3) Bank miss → AI generation (needs the user's Gemini key; the result
    //    is cached in the site's own DB so it loads from storage afterwards).
    if (!deviceId) {
      if (reqId === reqIdRef.current) setLoading(false);
      return;
    }
    try {
      const d = await callAi<GrammarLessonContent>(deviceId, "grammar-lesson", {
        topic: topic.topic,
        level,
      });
      if (reqId !== reqIdRef.current) return;
      setData(d);
    } catch (e) {
      if (reqId !== reqIdRef.current) return;
      setError(errMessage(e, t("errors.unknown")));
    } finally {
      if (reqId === reqIdRef.current) setLoading(false);
    }
  }, [deviceId, topic.topic, level, locale, t]);

  useEffect(() => {
    void load();
  }, [load]);

  /** Roadmap chip → smooth-scroll to the matching section card. */
  const scrollToSection = useCallback((i: number) => {
    document
      .getElementById(`gsec-${i}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="mx-auto max-w-4xl space-y-4 pb-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="-ml-2 min-h-11 gap-1.5 text-muted-foreground"
          aria-label={t("lesson.backAria")}
        >
          <ArrowLeft className="h-4 w-4" /> {t("lesson.back")}
        </Button>
      </div>

      {loading && <LessonSkeleton />}

      {!loading && error && (
        <Alert variant="destructive">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>{t("lesson.errorTitle")}</AlertTitle>
          <AlertDescription>
            <p>{error}</p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => void load()}
              className="mt-2 min-h-11 gap-1.5 bg-transparent"
            >
              <RefreshCw className="h-4 w-4" /> {tc("retry")}
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {!loading && !error && data && (
        <>
          {/* Hero */}
          <section
            aria-label={name}
            className="premium-card animate-fade-in-up rounded-2xl border-border/70 bg-gradient-to-br from-emerald-500/10 via-card to-amber-500/10 p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge className="border-transparent bg-gradient-to-br from-emerald-500 to-teal-500 text-[11px] text-white">
                {tc(`level.${level}`)}
              </Badge>
              <Badge variant="outline" className="text-[11px]">
                {name}
              </Badge>
              {(data.sections ?? []).length > 0 && (
                <Badge variant="outline" className="text-[11px]">
                  {t("lesson.stepLabel", { n: fmt((data.sections ?? []).length) })}
                </Badge>
              )}
            </div>
            <h1 className="mt-2.5 text-xl font-bold tracking-tight sm:text-2xl">
              {data.title || name}
            </h1>
            {data.intro && (
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {data.intro}
              </p>
            )}
            {locale !== "bn" && (
              <p className="mt-2.5 flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
                <Languages className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                <span>{t("lesson.langNote")}</span>
              </p>
            )}
          </section>

          {/* Roadmap — the lesson's visible follow-up map (v4) */}
          {(data.roadmap ?? []).length > 0 && (
            <section
              aria-label={t("lesson.roadmapAria")}
              className="premium-card animate-fade-in-up-1 rounded-2xl border-border/70 bg-card p-4 shadow-sm sm:p-5"
            >
              <h2 className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-muted-foreground">
                <Map className="h-4 w-4 text-emerald-500" aria-hidden />
                {t("lesson.roadmapTitle")}
              </h2>
              <ol className="mt-3 grid gap-2 sm:grid-cols-2">
                {(data.roadmap ?? []).map((r, i) => {
                  const tint = tintOf(i);
                  const [, text] = splitEmoji(r);
                  return (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(i)}
                        className="group flex w-full items-center gap-2.5 rounded-xl border border-border/60 bg-muted/20 p-2.5 text-start transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/[0.06] focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:outline-none"
                        aria-label={`${t("lesson.stepLabel", { n: fmt(i + 1) })}: ${text}`}
                      >
                        <span
                          className={cn(
                            "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-xs font-bold text-white shadow-sm transition-transform group-hover:scale-105",
                            tint.bar
                          )}
                          aria-hidden
                        >
                          {fmt(i + 1)}
                        </span>
                        <span className="min-w-0 flex-1 text-sm leading-snug">{text}</span>
                        <ArrowRight
                          className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50 transition group-hover:translate-x-0.5 group-hover:text-emerald-500"
                          aria-hidden
                        />
                      </button>
                    </li>
                  );
                })}
              </ol>
            </section>
          )}

          {/* Sections — one tinted step card each (v4 point-form) */}
          <div className="space-y-4">
            {(data.sections ?? []).map((s, i) => {
              const tint = tintOf(i);
              const [emoji, headingText] = splitEmoji(s.heading);
              const points = s.points ?? [];
              const exs = s.examples ?? [];
              return (
                <Card
                  key={`${s.heading}-${i}`}
                  id={`gsec-${i}`}
                  className={cn(
                    "premium-card scroll-mt-24 overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm",
                    ANIM_STEPS[Math.min(i, 2)]
                  )}
                >
                  {/* top accent bar */}
                  <div className={cn("h-1 w-full bg-gradient-to-r", tint.bar)} aria-hidden />
                  <CardContent className="space-y-3.5 p-4 sm:p-6">
                    <header className="flex items-start gap-3">
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl shadow-sm",
                          tint.chip
                        )}
                        aria-hidden
                      >
                        {emoji || fmt(i + 1)}
                      </span>
                      <div className="min-w-0">
                        <span
                          className={cn(
                            "text-[11px] font-bold uppercase tracking-wider",
                            tint.step
                          )}
                        >
                          {t("lesson.stepLabel", { n: fmt(i + 1) })}
                        </span>
                        <h2 className="mt-0.5 text-base font-bold leading-snug sm:text-lg">
                          {headingText}
                        </h2>
                      </div>
                    </header>

                    {s.lead && (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {s.lead}
                      </p>
                    )}

                    {/* Point-form bullets — the v4 core (paragraph fallback below) */}
                    {points.length > 0 ? (
                      <ul className="space-y-2" role="list">
                        {points.map((p, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 rounded-lg py-0.5"
                          >
                            <span
                              className={cn(
                                "mt-1 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full",
                                tint.checkBg
                              )}
                              aria-hidden
                            >
                              <Check
                                className={cn("h-3 w-3", tint.check)}
                                strokeWidth={3}
                              />
                            </span>
                            <span className="min-w-0 flex-1 text-[15px] leading-7 text-foreground/90">
                              <Rich text={p} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      s.explanation && (
                        <div className="rounded-r-xl border-l-2 border-emerald-500/50 bg-emerald-500/[0.04] py-2.5 pl-3.5 pr-3">
                          <p className="min-w-0 break-words text-[15px] leading-7 text-foreground/90">
                            {s.explanation}
                          </p>
                        </div>
                      )
                    )}

                    {/* Formula box */}
                    {s.formula && (
                      <div
                        className={cn(
                          "flex items-start gap-2.5 rounded-xl border p-3",
                          tint.formula
                        )}
                      >
                        <Code2
                          className={cn("mt-0.5 h-4 w-4 shrink-0", tint.check)}
                          aria-hidden
                        />
                        <div className="min-w-0">
                          <span
                            className={cn(
                              "text-[11px] font-bold uppercase tracking-wider",
                              tint.step
                            )}
                          >
                            {t("lesson.formulaLabel")}
                          </span>
                          <p className="mt-0.5 text-[15px] leading-relaxed font-semibold break-words">
                            <Rich text={s.formula} />
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Mini comparison table */}
                    {s.table && s.table.head.length > 0 && (
                      <div className="overflow-x-auto rounded-xl border border-border/70">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr>
                              {s.table.head.map((h, k) => (
                                <th
                                  key={k}
                                  scope="col"
                                  className={cn(
                                    "px-3 py-2 text-start text-[13px] font-bold whitespace-nowrap",
                                    tint.th
                                  )}
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {s.table.rows.map((row, ri) => (
                              <tr key={ri} className="border-t border-border/60 odd:bg-muted/20">
                                {row.map((c, ci) => (
                                  <td
                                    key={ci}
                                    className="px-3 py-2 align-top leading-relaxed break-words"
                                  >
                                    {c}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Examples */}
                    {exs.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                          <GraduationCap className="h-3.5 w-3.5" aria-hidden />
                          {t("lesson.examplesLabel")} · {fmt(exs.length)}
                        </div>
                        <div className="nice-scroll mt-2 max-h-96 space-y-3 overflow-y-auto pr-1">
                          {exs.map((ex, j) => (
                            <ExampleCard
                              key={j}
                              wrong={ex.wrong}
                              right={ex.right}
                              note={ex.note}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Tips */}
          {(data.tips ?? []).length > 0 && (
            <Card className="animate-fade-in-up border-amber-200 bg-amber-50/70 shadow-none dark:border-amber-900/60 dark:bg-amber-950/20">
              <CardContent className="p-4 sm:p-5">
                <h2 className="flex items-center gap-2 font-semibold">
                  <Lightbulb className="h-4.5 w-4.5 text-amber-500" aria-hidden />
                  {t("lesson.tipsTitle")}
                </h2>
                <div className="nice-scroll mt-3 max-h-96 overflow-y-auto pr-1">
                  <ul className="space-y-2.5">
                    {(data.tips ?? []).map((tip, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/60">
                          <Check
                            className="h-3 w-3 text-amber-700 dark:text-amber-300"
                            strokeWidth={3}
                          />
                        </span>
                        <span className="min-w-0 flex-1">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Ask the teacher — reading is free; asking uses the learner's key */}
          <LibraryAskBox
            compact
            className="mt-2"
            title={data.title || name}
            context={lessonContextOf(data)}
          />

          {/* Sticky quiz CTA (above the mobile bottom nav) */}
          <div className="sticky bottom-20 z-20 mt-6 md:bottom-4">
            <div className="premium-card flex items-center gap-3 rounded-2xl bg-card/95 p-3 shadow-lg backdrop-blur">
              <div className="hidden min-w-0 flex-1 sm:block">
                <p className="truncate text-sm font-semibold">{name}</p>
                <p className="text-xs text-muted-foreground">{tc(`level.${level}`)}</p>
              </div>
              {/* Mark-as-read: keyless completion for the Learning Path —
                  reading the lesson fully counts even without a quiz. */}
              {onNextLesson && (
                <Button
                  variant="outline"
                  onClick={onNextLesson}
                  className="min-h-11 gap-1.5 rounded-xl border-teal-500/40 px-3 text-teal-700 hover:bg-teal-500/10 dark:text-teal-300"
                  aria-label={t("lesson.nextLessonAria")}
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                  <span className="hidden sm:inline">{t("lesson.nextLesson")}</span>
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => saveDoneTopic(topic.topic)}
                className="min-h-11 gap-1.5 rounded-xl border-emerald-500/40 px-3 text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-300"
                aria-label={t("lesson.markReadAria")}
              >
                <CircleCheckBig className="h-4 w-4" aria-hidden />
                <span className="hidden sm:inline">{t("lesson.markRead")}</span>
              </Button>
              <Button
                onClick={onStartQuiz}
                className="btn-shine min-h-11 flex-1 gap-2 rounded-xl text-base sm:flex-none sm:px-8"
                aria-label={t("lesson.startQuizAria")}
              >
                <ListChecks className="h-5 w-5" /> {t("lesson.startQuiz")}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
