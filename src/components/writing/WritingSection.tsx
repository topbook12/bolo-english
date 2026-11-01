"use client";

// ─── Writing practice (Backlog A1 — শেখার গভীরতা) ───────────────────────────
// Pick a task (paragraph / email / essay) → write in the editor → ONE BYOK
// AI call grades it (grammar / structure / vocabulary, 0-100 each) with
// line-level corrections and an improved rewrite. Every graded piece is
// stored by /api/writing (device-scoped) and powers the history list.
//
// Free-platform note: grading rides the learner's own Gemini key, exactly
// like every other AI feature; nothing here is paywalled.

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeft,
  BookOpenText,
  BrainCircuit,
  Check,
  ChevronDown,
  Copy,
  KeyRound,
  Lightbulb,
  Loader2,
  Mail,
  PenLine,
  RotateCcw,
  Send,
  SpellCheck,
  Timer,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SectionHeader from "@/components/shared/SectionHeader";
import StatCard from "@/components/shared/StatCard";
import { useDeviceValue, getDeviceId } from "@/hooks/use-device";
import { useToast } from "@/hooks/use-toast";
import { apiGet, apiPost, callAi } from "@/lib/client-api";
import {
  countWords,
  writingTaskById,
  writingTasksGrouped,
  type WritingKind,
  type WritingTask,
} from "@/lib/writing-bank";
import type { LibraryLevel } from "@/lib/library-types";
import { cn } from "@/lib/utils";

interface WritingScores {
  grammar: number;
  structure: number;
  vocabulary: number;
}

interface WritingFeedback {
  scores: WritingScores;
  summary: string;
  corrections: { original: string; corrected: string; note: string }[];
  strengths: string[];
  tips: string[];
  improved: string;
}

interface HistoryRow {
  id: string;
  taskKey: string;
  kind: string;
  text: string;
  overall: number;
  scores: string;
  feedback: string;
  createdAt: string;
}

type View = "pick" | "editor" | "grading" | "feedback";

const KIND_META: Record<WritingKind, { icon: typeof PenLine; tint: string; labelKey: string }> = {
  paragraph: { icon: PenLine, tint: "text-emerald-600 dark:text-emerald-400", labelKey: "kind.paragraph" },
  email: { icon: Mail, tint: "text-teal-600 dark:text-teal-400", labelKey: "kind.email" },
  essay: { icon: BookOpenText, tint: "text-amber-600 dark:text-amber-500", labelKey: "kind.essay" },
};

const LEVEL_BADGE: Record<LibraryLevel, string> = {
  beginner: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  intermediate: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  advanced: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
};

export default function WritingSection() {
  const t = useTranslations("writing");
  const tCommon = useTranslations("common");
  const locale = useLocale() as "en" | "bn" | "hi";
  const { toast } = useToast();
  const hasKey = useDeviceValue((s) => s.hasKey, false);

  const [view, setView] = useState<View>("pick");
  const [task, setTask] = useState<WritingTask | null>(null);
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [copied, setCopied] = useState(false);

  // history
  const [history, setHistory] = useState<HistoryRow[] | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const loadHistory = useCallback(async () => {
    try {
      const rows = await apiGet<HistoryRow[]>(`/api/writing?deviceId=${encodeURIComponent(getDeviceId())}`);
      setHistory(rows);
    } catch {
      setHistory([]); // honest-empty: history is optional, never blocks the tab
    }
  }, []);

  useEffect(() => {
    void loadHistory();
  }, [loadHistory]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function startTask(selected: WritingTask) {
    setTask(selected);
    setText("");
    setFeedback(null);
    setElapsed(0);
    setView("editor");
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setElapsed((n) => n + 1), 1000);
  }

  function backToPick() {
    if (timerRef.current) clearInterval(timerRef.current);
    setView("pick");
    setTask(null);
    setText("");
    setFeedback(null);
  }

  async function submit() {
    if (!task || submitting) return;
    const words = countWords(text);
    if (words < 12) {
      toast({ title: t("tooShort"), variant: "destructive" });
      return;
    }
    setSubmitting(true);
    if (timerRef.current) clearInterval(timerRef.current);
    setView("grading");
    try {
      const fb = await callAi<WritingFeedback>(getDeviceId(), "writing-feedback", {
        taskKey: task.id,
        text: text.trim(),
      });
      setFeedback(fb);
      setView("feedback");
      // Persist in the background — a storage hiccup never hides the feedback.
      void apiPost<{ id: string; overall: number; xp: number }>("/api/writing", {
        deviceId: getDeviceId(),
        taskKey: task.id,
        text: text.trim(),
        overall: Math.round((fb.scores.grammar + fb.scores.structure + fb.scores.vocabulary) / 3),
        scores: fb.scores,
        feedback: fb,
      })
        .then(() => void loadHistory())
        .catch(() => null);
    } catch (e) {
      toast({ title: t("feedbackFailed"), description: (e as Error).message, variant: "destructive" });
      setView("editor"); // nothing is lost — the draft is still in the box
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => setElapsed((n) => n + 1), 1000);
    } finally {
      setSubmitting(false);
    }
  }

  function openHistoryRow(row: HistoryRow) {
    const hTask = writingTaskById(row.taskKey);
    if (!hTask) return;
    let fb: WritingFeedback | null = null;
    try {
      const parsed = JSON.parse(row.feedback) as Partial<WritingFeedback>;
      if (parsed && typeof parsed === "object") {
        // Real rows always store the full feedback; fall back to the row's
        // separate `scores` JSON when an older/partial row lacks it.
        const scores = parsed.scores ?? (JSON.parse(row.scores) as WritingScores);
        if (scores && typeof scores === "object" && typeof scores.grammar === "number") {
          fb = {
            scores: {
              grammar: scores.grammar,
              structure: scores.structure,
              vocabulary: scores.vocabulary,
            },
            summary: parsed.summary ?? "",
            corrections: parsed.corrections ?? [],
            strengths: parsed.strengths ?? [],
            tips: parsed.tips ?? [],
            improved: parsed.improved ?? "",
          };
        }
      }
    } catch {
      fb = null;
    }
    if (!fb) return;
    setFeedback(fb);
    setTask(hTask);
    setText(row.text);
    setView("feedback");
    window.scrollTo({ top: 0 });
  }

  function copyImproved() {
    if (!feedback?.improved) return;
    void navigator.clipboard?.writeText(feedback.improved).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  /* ── picker ── */
  if (view === "pick") {
    const groups = writingTasksGrouped();
    const avg = history && history.length > 0
      ? Math.round(history.reduce((a, r) => a + r.overall, 0) / history.length)
      : 0;
    const best = history && history.length > 0 ? Math.max(...history.map((r) => r.overall)) : 0;

    return (
      <div className="mx-auto max-w-5xl space-y-5 lg:space-y-6">
        <SectionHeader icon={PenLine} tint="violet" title={t("title")} subtitle={t("subtitle")} />

        {!hasKey && (
          <p className="flex items-start gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2.5 text-xs leading-relaxed text-amber-700 dark:text-amber-300">
            <KeyRound className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {t("keyNote")}
          </p>
        )}

        {history && history.length >= 3 && (
          <div className="grid grid-cols-3 gap-3">
            <StatCard icon={PenLine} label={t("stat.done")} value={String(history.length)} />
            <StatCard icon={BrainCircuit} label={t("stat.avg")} value={String(avg)} />
            <StatCard icon={Check} label={t("stat.best")} value={String(best)} />
          </div>
        )}

        {groups.map((g) => {
          const meta = KIND_META[g.kind];
          const Icon = meta.icon;
          return (
            <section key={g.kind} aria-label={t(meta.labelKey)} className="space-y-2.5">
              <h2 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Icon className={cn("h-3.5 w-3.5", meta.tint)} aria-hidden="true" />
                {t(meta.labelKey)}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.tasks.map((taskItem) => (
                  <button
                    key={taskItem.id}
                    type="button"
                    onClick={() => startTask(taskItem)}
                    className="group flex min-h-40 flex-col rounded-2xl border border-border/60 bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-400/60 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="outline" className={cn("shrink-0 text-[10px]", LEVEL_BADGE[taskItem.level])}>
                        {tCommon(`level.${taskItem.level}`)}
                      </Badge>
                      <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                        <Timer className="h-3 w-3" aria-hidden="true" />
                        {t("minutes", { n: taskItem.minutes })}
                      </span>
                    </div>
                    <p className="mt-2.5 text-sm font-semibold leading-snug">{taskItem.prompt}</p>
                    <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                      {taskItem.guide}
                    </p>
                    <span className="mt-auto pt-2.5 text-[11px] font-medium text-violet-600 group-hover:underline dark:text-violet-400">
                      {t("startCta")} →
                    </span>
                  </button>
                ))}
              </div>
            </section>
          );
        })}

        {/* history */}
        <Collapsible open={historyOpen} onOpenChange={setHistoryOpen}>
          <Card className="rounded-2xl border-border/70 bg-card">
            <CollapsibleTrigger asChild>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-2 p-4 text-left sm:p-5"
                aria-expanded={historyOpen}
              >
                <span className="flex items-center gap-2 text-sm font-bold">
                  <RotateCcw className="h-4 w-4 text-violet-500" aria-hidden="true" />
                  {t("history.title")}
                  {history && history.length > 0 && (
                    <Badge variant="secondary" className="text-[10px]">
                      {history.length}
                    </Badge>
                  )}
                </span>
                <ChevronDown
                  className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", historyOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="max-h-96 space-y-2 overflow-y-auto px-4 pb-4 nice-scroll sm:px-5 sm:pb-5">
                {!history || history.length === 0 ? (
                  <p className="py-4 text-center text-xs text-muted-foreground">{t("history.empty")}</p>
                ) : (
                  history.map((row) => {
                    const hTask = writingTaskById(row.taskKey);
                    return (
                      <button
                        key={row.id}
                        type="button"
                        onClick={() => openHistoryRow(row)}
                        className="flex w-full items-center gap-3 rounded-xl border border-border/50 p-3 text-left transition-colors hover:bg-accent"
                      >
                        <span
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                            row.overall >= 80
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                              : row.overall >= 60
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                                : "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                          )}
                        >
                          {row.overall}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-xs font-semibold">
                            {hTask?.prompt ?? row.taskKey}
                          </span>
                          <span className="block text-[11px] text-muted-foreground">
                            {new Date(row.createdAt).toLocaleDateString(locale === "bn" ? "bn-BD" : locale === "hi" ? "hi-IN" : "en-GB", {
                              day: "numeric",
                              month: "short",
                            })}
                            {" · "}
                            {t(`kind.${row.kind as WritingKind}`)}
                          </span>
                        </span>
                      </button>
                    );
                  })
                )}
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      </div>
    );
  }

  /* ── grading ── */
  if (view === "grading") {
    return (
      <div className="mx-auto max-w-3xl space-y-4">
        <SectionHeader icon={PenLine} tint="violet" title={t("title")} subtitle={t("grading")}>
          <Button variant="outline" onClick={backToPick} className="min-h-11 gap-1.5 rounded-xl">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {tCommon("back")}
          </Button>
        </SectionHeader>
        <Card className="rounded-2xl border-border/70 bg-card">
          <CardContent className="flex min-h-40 flex-col items-center justify-center gap-3 p-8 text-sm text-muted-foreground">
            <Loader2 className="h-7 w-7 animate-spin text-violet-500" aria-hidden="true" />
            {t("grading")}
            <p className="max-w-xs text-center text-xs leading-relaxed">{t("gradingHint")}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ── feedback ── */
  if (view === "feedback" && task && feedback) {
    const axes: { key: keyof WritingScores; icon: typeof SpellCheck }[] = [
      { key: "grammar", icon: SpellCheck },
      { key: "structure", icon: BookOpenText },
      { key: "vocabulary", icon: BrainCircuit },
    ];
    const overall = Math.round((feedback.scores.grammar + feedback.scores.structure + feedback.scores.vocabulary) / 3);

    return (
      <div className="mx-auto max-w-3xl space-y-4">
        <SectionHeader icon={PenLine} tint="violet" title={t("result.title")} subtitle={t("result.subtitle")}>
          <Button variant="outline" onClick={backToPick} className="min-h-11 gap-1.5 rounded-xl">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {tCommon("back")}
          </Button>
        </SectionHeader>

        {/* overall + axes */}
        <Card className="premium-card rounded-2xl border-border/70 bg-card">
          <CardContent className="space-y-4 p-5 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p
                  className={cn(
                    "text-4xl font-bold tracking-tight",
                    overall >= 80 ? "text-emerald-600 dark:text-emerald-400" : overall >= 60 ? "text-amber-600 dark:text-amber-400" : "text-rose-600 dark:text-rose-400"
                  )}
                >
                  {overall}
                </p>
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{t("result.overall")}</p>
              </div>
              <div className="min-w-0 flex-1">
                <p className="line-clamp-2 text-xs font-medium text-muted-foreground">{task.prompt}</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {axes.map(({ key, icon: Icon }) => (
                <div key={key} className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 shrink-0 text-violet-500" aria-hidden="true" />
                  <span className="w-20 shrink-0 text-[11px] font-medium text-muted-foreground">{t(`axis.${key}`)}</span>
                  <Progress value={feedback.scores[key]} className="h-2 flex-1" aria-label={t(`axis.${key}`)} />
                  <span className="w-9 text-right text-xs font-bold tabular-nums">{feedback.scores[key]}</span>
                </div>
              ))}
            </div>
            {feedback.summary && (
              <p className="rounded-xl border border-border/60 bg-muted/40 p-3 text-sm leading-relaxed">
                {feedback.summary}
              </p>
            )}
          </CardContent>
        </Card>

        {/* corrections */}
        {feedback.corrections.length > 0 && (
          <Card className="rounded-2xl border-border/70 bg-card">
            <CardContent className="space-y-3 p-5 sm:p-6">
              <p className="text-sm font-bold">{t("result.corrections")}</p>
              <div className="max-h-96 space-y-2.5 overflow-y-auto nice-scroll">
                {feedback.corrections.map((c, i) => (
                  <div key={i} className="rounded-xl border border-border/60 p-3">
                    <p className="text-xs leading-relaxed text-rose-700 line-through decoration-rose-400/70 dark:text-rose-300">
                      {c.original}
                    </p>
                    <p className="mt-1 text-xs font-semibold leading-relaxed text-emerald-700 dark:text-emerald-300">
                      {c.corrected}
                    </p>
                    {c.note && <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{c.note}</p>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* strengths + tips */}
        {(feedback.strengths.length > 0 || feedback.tips.length > 0) && (
          <div className="grid gap-3 sm:grid-cols-2">
            {feedback.strengths.length > 0 && (
              <Card className="rounded-2xl border-emerald-300/50 bg-card">
                <CardContent className="space-y-2 p-4 sm:p-5">
                  <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    {t("result.strengths")}
                  </p>
                  <ul className="list-disc space-y-1 pl-4 text-xs leading-relaxed">
                    {feedback.strengths.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            {feedback.tips.length > 0 && (
              <Card className="rounded-2xl border-amber-300/50 bg-card">
                <CardContent className="space-y-2 p-4 sm:p-5">
                  <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
                    {t("result.tips")}
                  </p>
                  <ul className="list-disc space-y-1 pl-4 text-xs leading-relaxed">
                    {feedback.tips.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* improved version */}
        {feedback.improved && (
          <Card className="rounded-2xl border-violet-300/50 bg-card">
            <CardContent className="space-y-3 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-bold">{t("result.improved")}</p>
                <Button size="sm" variant="outline" onClick={copyImproved} className="min-h-9 gap-1.5 text-xs">
                  {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                  {copied ? tCommon("saved") : t("result.copy")}
                </Button>
              </div>
              <p className="whitespace-pre-wrap rounded-xl border border-border/60 bg-muted/40 p-4 text-sm leading-relaxed">
                {feedback.improved}
              </p>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button onClick={() => startTask(task)} className="min-h-11 flex-1 gap-2 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md hover:from-violet-600 hover:to-purple-700">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            {t("result.again")}
          </Button>
          <Button onClick={backToPick} variant="outline" className="min-h-11 flex-1 gap-2 rounded-xl">
            <PenLine className="h-4 w-4" aria-hidden="true" />
            {t("result.newTask")}
          </Button>
        </div>
      </div>
    );
  }

  /* ── editor ── */
  if (!task) return null;
  const words = countWords(text);
  const tip = task.tip[locale];

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <SectionHeader icon={PenLine} tint="violet" title={t("editor.title")} subtitle={t("editor.subtitle")}>
        <Button variant="outline" onClick={backToPick} className="min-h-11 gap-1.5 rounded-xl">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {tCommon("back")}
        </Button>
      </SectionHeader>

      <Card className="premium-card rounded-2xl border-border/70 bg-card">
        <CardContent className="space-y-4 p-5 sm:p-6">
          {/* task box */}
          <div className="space-y-1.5 rounded-xl border border-violet-300/50 bg-violet-500/5 p-4">
            <div className="flex items-center justify-between gap-2">
              <Badge variant="outline" className={cn("text-[10px]", LEVEL_BADGE[task.level])}>
                {tCommon(`level.${task.level}`)}
              </Badge>
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Timer className="h-3 w-3" aria-hidden="true" />
                {t("minutes", { n: task.minutes })}
              </span>
            </div>
            <p className="text-sm font-bold leading-snug">{task.prompt}</p>
            <p className="text-xs leading-relaxed text-muted-foreground">{task.guide}</p>
          </div>

          <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
            <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden="true" />
            {tip}
          </p>

          {/* editor */}
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, 4000))}
            placeholder={t("editor.placeholder")}
            className="min-h-56 resize-y rounded-xl text-sm leading-relaxed"
            aria-label={t("editor.placeholder")}
          />

          {/* counters */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
            <span className={cn("font-medium", words >= task.minWords ? "text-emerald-600 dark:text-emerald-400" : "")}>
              {t("editor.wordCount", { words, min: task.minWords })}
            </span>
            <span className="tabular-nums">
              {t("editor.elapsed", { m: Math.floor(elapsed / 60), s: String(elapsed % 60).padStart(2, "0") })}
            </span>
          </div>

          <Button
            onClick={() => void submit()}
            disabled={submitting || words < 12}
            className="min-h-12 w-full gap-2 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md hover:from-violet-600 hover:to-purple-700"
          >
            {submitting ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
            {t("editor.submit")}
          </Button>
          <p className="text-center text-[11px] leading-relaxed text-muted-foreground">{t("editor.submitHint")}</p>
        </CardContent>
      </Card>
    </div>
  );
}
