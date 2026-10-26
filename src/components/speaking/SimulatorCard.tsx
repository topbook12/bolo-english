"use client";

// ─── Speaking simulator (D17, ROADMAP-60.md) ────────────────────────────────
// An IELTS-style mock test inside the app: Part 1 interview → Part 2 long
// turn (cue card + prep timer) → Part 3 discussion → ONE band-style grading
// call. Voice answers ride the same BYOK STT pipeline as the call room; a
// text input is always available as fallback. The learner's quota is
// protected by per-answer hard caps and a single feedback request.

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowRight,
  CirclePlay,
  Loader2,
  Mic,
  RotateCcw,
  Send,
  Square,
  Timer,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { useDeviceValue } from "@/hooks/use-device";
import { useToast } from "@/hooks/use-toast";
import { callAi } from "@/lib/client-api";
import { getDeviceId } from "@/hooks/use-device";
import { track } from "@/lib/track";
import { blobToBase64, transcodeToWavBlob } from "@/lib/audio-wav";
import { SIM_SETS, simSetById, type SimSet } from "@/lib/simulator-bank";
import { cn } from "@/lib/utils";

const MAX_ANSWER_MS = 150_000; // hard cap per answer (Part 2 = 2 min + grace)

interface SimAnswer {
  kind: "p1" | "p2" | "p3";
  question: string;
  answer: string;
}

interface SimFeedback {
  overallBand: number;
  bands: { fluency: number; lexical: number; grammar: number };
  summary: string;
  topTip: string;
}

type Phase = "pick" | "running" | "grading" | "done";

export default function SimulatorCard() {
  const t = useTranslations("speaking.sim");
  const locale = useLocale() as "en" | "bn" | "hi";
  const { toast } = useToast();
  const hasKey = useDeviceValue((s) => s.hasKey, false);

  const [phase, setPhase] = useState<Phase>("pick");
  const [set, setSet] = useState<SimSet | null>(null);
  const [plan, setPlan] = useState<{ kind: "p1" | "p2" | "p3"; q: string; targetSec: number }[]>([]);
  const [step, setStep] = useState(0); // index into plan
  const [answers, setAnswers] = useState<SimAnswer[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false); // STT in flight
  const [recording, setRecording] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [prepLeft, setPrepLeft] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<SimFeedback | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const maxTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prepRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const answersRef = useRef<SimAnswer[]>([]);
  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  const current = plan[step];
  const totalSteps = plan.length || 1;
  const isCueCard = current?.kind === "p2";

  function stopTimers() {
    if (timerRef.current) clearInterval(timerRef.current);
    if (prepRef.current) clearInterval(prepRef.current);
    if (maxTimerRef.current) clearTimeout(maxTimerRef.current);
    timerRef.current = null;
    prepRef.current = null;
    maxTimerRef.current = null;
  }

  // Stop everything on unmount.
  useEffect(() => {
    return () => {
      stopTimers();
      streamRef.current?.getTracks().forEach((tr) => tr.stop());
      if (recorderRef.current?.state === "recording") recorderRef.current.stop();
    };
  }, []);

  function startSet(s: SimSet) {
    setSet(s);
    setPlan([
      ...s.part1,
      { kind: "p2" as const, q: s.part2.topic, targetSec: s.part2.speakSec },
      ...s.part3,
    ]);
    setAnswers([]);
    setFeedback(null);
    setStep(0);
    setInput("");
    setElapsed(0);
    setPrepLeft(null);
    setPhase("running");
  }

  /** Part 2 (cue card) opens with its preparation countdown the moment the
   *  learner ARRIVES at that step — never during Part 1. */
  function beginPrepIfCue(nextIndex: number) {
    if (!set || plan[nextIndex]?.kind !== "p2") return;
    const prepSec = set.part2.prepSec;
    if (!prepSec || prepSec <= 0) return;
    setPrepLeft(prepSec);
    prepRef.current = setInterval(() => {
      setPrepLeft((n) => {
        if (n === null) return null;
        if (n <= 1) {
          if (prepRef.current) clearInterval(prepRef.current);
          prepRef.current = null;
          return null;
        }
        return n - 1;
      });
    }, 1000);
  }

  function reset() {
    stopTimers();
    streamRef.current?.getTracks().forEach((tr) => tr.stop());
    if (recorderRef.current?.state === "recording") recorderRef.current.stop();
    recorderRef.current = null;
    setPhase("pick");
    setSet(null);
    setPlan([]);
    setAnswers([]);
    setFeedback(null);
    setStep(0);
    setInput("");
    setElapsed(0);
    setPrepLeft(null);
  }

  async function startRecording() {
    if (recording || busy || !current) return;
    if (prepLeft !== null) return; // still preparing
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      toast({ title: t("unsupported") });
      return;
    }
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      toast({ title: t("permission") });
      return;
    }
    streamRef.current = stream;
    chunksRef.current = [];
    const mimeCandidates = ["audio/webm", "audio/ogg;codecs=opus", "audio/mp4"];
    const mimeType = mimeCandidates.find((m) => MediaRecorder.isTypeSupported(m));
    const rec = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
    rec.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };
    rec.onstop = () => void finishRecording(current.q, current.kind);
    recorderRef.current = rec;
    rec.start();
    setRecording(true);
    setElapsed(0);
    timerRef.current = setInterval(() => setElapsed((n) => n + 100), 100);
    maxTimerRef.current = setTimeout(() => stopRecording(), MAX_ANSWER_MS);
  }

  function stopRecording() {
    if (maxTimerRef.current) clearTimeout(maxTimerRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    const rec = recorderRef.current;
    if (rec && rec.state === "recording") rec.stop();
    streamRef.current?.getTracks().forEach((tr) => tr.stop());
    streamRef.current = null;
    setRecording(false);
  }

  async function finishRecording(question: string, kind: "p1" | "p2" | "p3") {
    setBusy(true);
    const chunks = chunksRef.current;
    const mime = recorderRef.current?.mimeType || "audio/webm";
    recorderRef.current = null;
    try {
      const original = new Blob(chunks, { type: mime });
      if (original.size === 0) {
        setBusy(false);
        return;
      }
      const wav = await transcodeToWavBlob(original);
      const send = wav ?? original;
      const audio = await blobToBase64(send);
      const res = await fetch("/api/stt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId: getDeviceId(), audio, mime: wav ? "audio/wav" : mime }),
      });
      const json = (await res.json().catch(() => null)) as {
        ok?: boolean;
        data?: { text?: unknown };
        error?: unknown;
      } | null;
      if (!res.ok || !json?.ok) {
        toast({
          title: typeof json?.error === "string" ? json.error : t("sttFailed"),
          variant: "destructive",
        });
        setBusy(false);
        return;
      }
      const text = typeof json.data?.text === "string" ? json.data.text.trim() : "";
      if (!text) {
        toast({ title: t("noSpeech") });
        setBusy(false);
        return;
      }
      submitAnswer({ kind, question, answer: text });
    } catch {
      toast({ title: t("sttFailed"), variant: "destructive" });
      setBusy(false);
    }
  }

  function submitAnswer(a: SimAnswer) {
    setBusy(false);
    setElapsed(0);
    setAnswers((prev) => [...prev, a]);
    setInput("");
    if (step + 1 >= plan.length) {
      void gradeSet([...answersRef.current, a]);
    } else {
      beginPrepIfCue(step + 1);
      setStep((n) => n + 1);
    }
  }

  async function gradeSet(all: SimAnswer[]) {
    if (!set) return;
    setPhase("grading");
    try {
      const fb = await callAi<SimFeedback>(getDeviceId(), "simulator-feedback", {
        setId: set.id,
        answers: all,
      });
      setFeedback(fb);
      setPhase("done");
      track("simulator_done", {
        setId: set.id,
        band: fb.overallBand,
        answers: all.length,
      });
    } catch (e) {
      toast({ title: t("feedbackFailed"), description: (e as Error).message, variant: "destructive" });
      setPhase("running"); // back to the last question so nothing is lost
      setStep(plan.length - 1);
    }
  }

  function skipAnswer() {
    if (!current) return;
    if (recording) stopRecording();
    const a: SimAnswer = { kind: current.kind, question: current.q, answer: "" };
    setAnswers((prev) => [...prev, a]);
    setInput("");
    setElapsed(0);
    if (step + 1 >= plan.length) {
      const all = [...answersRef.current, a].filter((x) => x.answer.length > 0);
      if (all.length === 0) {
        toast({ title: t("needOne") });
        return;
      }
      void gradeSet(all);
    } else {
      beginPrepIfCue(step + 1);
      setStep((n) => n + 1);
    }
  }

  /* ── render ── */

  if (phase === "pick") {
    return (
      <Card className="premium-card border-border/70 rounded-2xl bg-card">
        <CardContent className="space-y-3 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-sm font-bold">{t("title")}</p>
              <p className="text-xs text-muted-foreground">{t("desc")}</p>
            </div>
            {!hasKey && <Badge variant="outline" className="shrink-0 text-[10px]">{t("needKey")}</Badge>}
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {SIM_SETS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => startSet(s)}
                className="flex min-h-16 flex-col items-start gap-0.5 rounded-xl border border-border/60 px-3.5 py-3 text-left transition-all hover:border-rose-500/50 hover:bg-accent"
              >
                <span className="flex items-center gap-1.5 text-sm font-bold">
                  <CirclePlay className="h-4 w-4 text-rose-500" aria-hidden />
                  {s.title}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {t("setMeta", { questions: s.part1.length + s.part3.length + 1 })}
                </span>
              </button>
            ))}
          </div>
          <p className="text-[11px] leading-relaxed text-muted-foreground">{t("quotaNote")}</p>
        </CardContent>
      </Card>
    );
  }

  if (phase === "grading") {
    return (
      <Card className="rounded-2xl border-border/70 bg-card">
        <CardContent className="flex min-h-32 items-center justify-center gap-2 p-6 text-sm text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
          {t("grading")}
        </CardContent>
      </Card>
    );
  }

  if (phase === "done" && feedback && set) {
    return (
      <Card className="premium-card border-border/70 rounded-2xl bg-card">
        <CardContent className="space-y-4 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-bold">{t("resultTitle")}</p>
            <Badge variant="secondary">{set.title}</Badge>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-muted/40 p-4">
            <div className="text-center">
              <p className="text-4xl font-bold tracking-tight text-gradient">
                {feedback.overallBand.toFixed(1)}
              </p>
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{t("overall")}</p>
            </div>
            <div className="flex-1 space-y-1.5">
              {(["fluency", "lexical", "grammar"] as const).map((k) => (
                <div key={k} className="flex items-center gap-2">
                  <span className="w-16 text-[11px] font-medium text-muted-foreground">{t(k)}</span>
                  <Progress value={((feedback.bands[k] - 4) / 5) * 100} className="h-1.5 flex-1" aria-label={t(k)} />
                  <span className="w-8 text-right text-xs font-bold tabular-nums">{feedback.bands[k].toFixed(1)}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm leading-relaxed">{feedback.summary}</p>
          <p className="rounded-xl border border-amber-300/60 bg-amber-50 p-3 text-xs leading-relaxed dark:border-amber-900/60 dark:bg-amber-950/30">
            <Timer className="mr-1 inline h-3.5 w-3.5" aria-hidden />
            <span className="font-semibold">{t("topTip")}: </span>
            {feedback.topTip}
          </p>
          <Button variant="outline" onClick={reset} className="min-h-11 w-full gap-1.5">
            <RotateCcw className="h-4 w-4" aria-hidden />
            {t("again")}
          </Button>
        </CardContent>
      </Card>
    );
  }

  /* running */
  if (!current) return null;
  const cue = set && isCueCard ? set.part2 : null;
  const partLabel = current.kind === "p1" ? t("part1") : current.kind === "p2" ? t("part2") : t("part3");

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardContent className="space-y-4 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{partLabel}</Badge>
            <span className="text-xs text-muted-foreground">
              {t("progress", { n: step + 1, total: totalSteps })}
            </span>
          </div>
          <Button size="sm" variant="ghost" onClick={reset} className="min-h-9 text-xs text-muted-foreground">
            {t("quit")}
          </Button>
        </div>
        <Progress value={(step / totalSteps) * 100} className="h-1.5" aria-label={t("title")} />

        {cue ? (
          <div className="space-y-2 rounded-xl border border-amber-300/60 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/30">
            <p className="text-sm font-bold">{cue.topic}</p>
            <ul className="list-disc space-y-0.5 pl-4 text-xs leading-relaxed text-muted-foreground">
              {cue.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-base font-semibold leading-relaxed">{current.q}</p>
        )}

        {prepLeft !== null && isCueCard && (
          <div className="flex items-center justify-center gap-2 rounded-xl border border-border/60 p-4 text-sm font-semibold">
            <Timer className="h-4 w-4 text-amber-500" aria-hidden />
            {t("prepLeft", { n: prepLeft })}
          </div>
        )}

        <div className="space-y-3">
          {recording && (
            <div className="flex items-center justify-center gap-2 rounded-xl border border-rose-300/60 bg-rose-500/5 p-3 text-sm font-semibold text-rose-700 dark:text-rose-300">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-rose-500" aria-hidden />
              {(elapsed / 1000).toFixed(1)}s · {t("target", { n: current.targetSec })}
            </div>
          )}
          {busy && (
            <div className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border/60 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              {t("transcribing")}
            </div>
          )}
          {!recording && !busy && prepLeft === null && (
            <Button
              onClick={() => void startRecording()}
              className="min-h-12 w-full gap-2 bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md hover:from-rose-600 hover:to-pink-700"
            >
              <Mic className="h-5 w-5" aria-hidden />
              {t("record")}
            </Button>
          )}
          {recording && (
            <Button onClick={stopRecording} variant="destructive" className="min-h-12 w-full gap-2">
              <Square className="h-4 w-4" aria-hidden />
              {t("stop")}
            </Button>
          )}
          <div className="flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && input.trim() && !busy && !recording) {
                  submitAnswer({ kind: current.kind, question: current.q, answer: input.trim() });
                }
              }}
              placeholder={t("typePlaceholder")}
              disabled={busy || recording}
              className="h-11 flex-1 rounded-xl"
              aria-label={t("typePlaceholder")}
            />
            <Button
              onClick={() => submitAnswer({ kind: current.kind, question: current.q, answer: input.trim() })}
              disabled={busy || recording || !input.trim()}
              size="icon"
              className="h-11 w-11 shrink-0 rounded-xl"
              aria-label={t("send")}
            >
              <Send className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <button
            type="button"
            onClick={skipAnswer}
            className="mx-auto flex min-h-9 text-xs text-muted-foreground underline-offset-2 hover:underline"
          >
            {t("skip")}
            <ArrowRight className="ml-1 inline h-3 w-3" aria-hidden />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

