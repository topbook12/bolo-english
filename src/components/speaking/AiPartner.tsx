"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowRight,
  Bot,
  Check,
  CheckCheck,
  Gauge,
  BookOpen,
  Briefcase,
  Headset,
  Lightbulb,
  Mic,
  Plane,
  RotateCcw,
  Send,
  Sparkles,
  SpellCheck,
  Stethoscope,
  Target,
  User as UserIcon,
  Volume2,
  VolumeX,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import EmptyState from "@/components/shared/EmptyState";
import PointList from "@/components/shared/PointList";
import StatCard from "@/components/shared/StatCard";
import { useDevice } from "@/hooks/use-device";
import { useToast } from "@/hooks/use-toast";
import { useSpeechRecognition } from "@/hooks/use-speech-recognition";
import { callAi } from "@/lib/client-api";
import { SCENARIOS, scenarioById, type ScenarioId } from "@/lib/scenarios";
import { track } from "@/lib/track";
import { VoiceEq } from "@/components/speaking/CallAvatar";
import type { ChatPartnerReply, CallAnalysis, TranscriptLine, CorrectionItem } from "@/lib/types";

interface Msg {
  role: "user" | "ai";
  text: string;
  followUp?: string;
  hint?: string;
  corrections?: CorrectionItem[];
}

// Topic values are the API prompt strings (kept stable); labels come from i18n.
const TOPICS: { value: string; key: string }[] = [
  { value: "free conversation", key: "free" },
  { value: "daily life", key: "daily" },
  { value: "office & work", key: "office" },
  { value: "travel", key: "travel" },
  { value: "interview practice", key: "interview" },
  { value: "friends", key: "friends" },
  { value: "study & exam", key: "exam" },
];

// D16: goal-based roleplay scenarios (src/lib/scenarios.ts) — the AI plays
// a character, the learner has a mission, and Finish adds scenario feedback.
const SCENARIO_ICONS: Record<ScenarioId, React.ComponentType<{ className?: string }>> = {
  interview: Briefcase,
  restaurant: Utensils,
  doctor: Stethoscope,
  airport: Plane,
  support: Headset,
};

const TTS_STORAGE_KEY = "bolo_ai_tts";

function cancelSpeech() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

// English TTS for Raha's replies — en-US voice preferred, slightly slow for learners.
// onStart/onEnd let the header swap the status dot for the native-call
// voice equalizer while she is actually talking.
function speakEnglish(text: string, opts?: { onStart?: () => void; onEnd?: () => void }) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = 0.95;
  utter.onstart = () => opts?.onStart?.();
  utter.onend = () => opts?.onEnd?.();
  utter.onerror = () => opts?.onEnd?.();
  const list = synth.getVoices();
  const enUs = list.find((v) => v.lang?.toLowerCase().replace("_", "-") === "en-us");
  const en = list.find((v) => v.lang?.toLowerCase().startsWith("en"));
  if (enUs) utter.voice = enUs;
  else if (en) utter.voice = en;
  synth.speak(utter);
}

export default function AiPartner({ onSessionDone }: { onSessionDone?: () => void }) {
  const t = useTranslations("speaking");
  const tCommon = useTranslations("common");
  const locale = useLocale() as "en" | "bn" | "hi";
  const { deviceId, hasKey, displayName } = useDevice();
  // Localized fallback name for transcript/analysis
  const myName = displayName || tCommon("student");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [topic, setTopic] = useState(TOPICS[0].value);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<CallAnalysis | null>(null);
  const [voiceOn, setVoiceOn] = useState(true);
  const [ttsSpeaking, setTtsSpeaking] = useState(false);
  // D16: active roleplay + its end-of-scene feedback
  const [scenario, setScenario] = useState<ScenarioId | null>(null);
  const [roleFeedback, setRoleFeedback] = useState<{
    goalAchieved: boolean;
    score: number;
    strengths: string;
    improvements: string;
  } | null>(null);
  const scenRef = useRef<ScenarioId | null>(null);
  scenRef.current = scenario;
  const { toast } = useToast();
  const endRef = useRef<HTMLDivElement>(null);
  /* Progress fix (user report: মিনিট/প্রগ্রেস আপডেট হচ্ছে না):
   * sessionStartRef — when the FIRST message went out, so the saved duration
   * is the real elapsed talk time (was a fake msgs.length * 20 estimate).
   * savedSessionRef — id of the session saved BEFORE the AI analysis runs,
   * so minutes/progress land even when the AI call fails or the user has no
   * key. finishAndAnalyze() PATCHes the analysis onto this record. */
  const sessionStartRef = useRef<number | null>(null);
  const savedSessionRef = useRef<string | null>(null);
  const deviceIdRef = useRef(deviceId);
  deviceIdRef.current = deviceId;

  // Voice input: recognized final text is appended into the message input.
  const {
    supported: micSupported,
    listening,
    interim,
    error: micError,
    start: startListening,
    stop: stopListening,
  } = useSpeechRecognition((line) => {
    setInput((prev) => (prev ? `${prev} ${line.text}` : line.text));
  });

  // Restore speaker preference (default: on) + warm up voice list + cancel on unmount.
  useEffect(() => {
    try {
      if (window.localStorage.getItem(TTS_STORAGE_KEY) === "0") setVoiceOn(false);
    } catch {
      /* private mode */
    }
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      if (synth.getVoices().length === 0) {
        synth.addEventListener?.("voiceschanged", () => synth.getVoices(), { once: true });
      }
    }
    return () => cancelSpeech();
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, busy]);

  /* progress fix: leaving the tab after a real chat (≥2 user messages)
   * WITHOUT pressing Finish used to lose the whole conversation. The
   * unmount save records it; savedSessionRef keeps it a no-op when
   * finishAndAnalyze() already saved. */
  const msgsRef = useRef(msgs);
  msgsRef.current = msgs;
  const myNameRef = useRef(myName);
  myNameRef.current = myName;
  useEffect(() => {
    return () => {
      if (savedSessionRef.current) return; // already saved via Finish
      if (!deviceIdRef.current) return;
      const lines = msgsRef.current
        .filter((m) => m.role === "user")
        .map((m) => ({ speaker: myNameRef.current, text: m.text, at: Date.now() }));
      if (lines.length < 2) return;
      const durationSec = sessionStartRef.current
        ? Math.max(1, Math.round((Date.now() - sessionStartRef.current) / 1000))
        : lines.length * 20;
      void fetch("/api/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deviceId: deviceIdRef.current,
          type: "ai-partner",
          partnerCount: 1,
          durationSec,
          transcript: lines,
          analysis: {},
        }),
      }).catch(() => null);
    };
  }, []);

  const send = async (override?: string) => {
    const text = (override ?? input).trim();
    if (!text || busy || !deviceId) return;
    if (sessionStartRef.current === null) sessionStartRef.current = Date.now();
    setInput("");
    setMsgs((m) => [...m, { role: "user", text }]);
    setBusy(true);
    try {
      // Token fix #12: the server trims to the last 12 turns anyway — don't
      // ship an ever-growing POST body on a long chat.
      const history = msgs.slice(-12).map((m) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.followUp ? `${m.text}\n\n${m.followUp}` : m.text,
      }));
      const active = scenRef.current;
      const reply = await callAi<ChatPartnerReply>(deviceId, "chat-partner", {
        history,
        topic: active ? "goal-based roleplay" : topic,
        ...(active ? { scenario: active } : {}),
      });
      setMsgs((m) => [
        ...m,
        {
          role: "ai",
          text: reply.reply,
          followUp: reply.followUp || undefined,
          hint: reply.banglaHint,
          corrections: reply.corrections ?? [],
        },
      ]);
      if (voiceOn) {
        speakEnglish(reply.followUp ? `${reply.reply} ${reply.followUp}` : reply.reply, {
          onStart: () => setTtsSpeaking(true),
          onEnd: () => setTtsSpeaking(false),
        });
      }
    } catch (e) {
      toast({ title: t("partner.aiError"), description: (e as Error).message, variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  // D16: enter a roleplay — the opener is static (zero API cost), spoken
  // aloud like any other AI line. Leaving/clearing resets the conversation.
  const chooseScenario = (id: ScenarioId | null) => {
    cancelSpeech();
    setScenario(id);
    setRoleFeedback(null);
    setAnalysis(null);
    setMsgs([]);
    setInput("");
    if (!id) return;
    const scen = scenarioById(id);
    if (!scen) return;
    if (sessionStartRef.current === null) sessionStartRef.current = Date.now();
    setMsgs([{ role: "ai", text: withNameT(scen.opener) }]);
    if (voiceOn) {
      speakEnglish(scen.opener, {
        onStart: () => setTtsSpeaking(true),
        onEnd: () => setTtsSpeaking(false),
      });
    }
  };

  /** Opener carries {name} — replaced with the learner's display name. */
  function withNameT(template: string): string {
    return template.replace(/\{name\}/g, (myName || "the learner").slice(0, 24));
  }

  const toggleVoice = () => {
    const next = !voiceOn;
    setVoiceOn(next);
    try {
      window.localStorage.setItem(TTS_STORAGE_KEY, next ? "1" : "0");
    } catch {
      /* private mode */
    }
    if (!next) {
      cancelSpeech();
      setTtsSpeaking(false);
    }
  };

  const finishAndAnalyze = async () => {
    const userLines: TranscriptLine[] = msgs
      .filter((m) => m.role === "user")
      .map((m) => ({ speaker: myName, text: m.text, at: Date.now() }));
    if (userLines.length < 2) {
      toast({ title: t("partner.needTwo") });
      return;
    }
    setAnalyzing(true);
    // real elapsed talk time (was msgs.length * 20 — a fiction)
    const durationSec = sessionStartRef.current
      ? Math.max(1, Math.round((Date.now() - sessionStartRef.current) / 1000))
      : msgs.length * 20;
    /* 1) SAVE THE SESSION FIRST — progress fix. Minutes used to depend on
     *    the AI call below: no key / API error / quota meant the whole chat
     *    was never recorded. Now the record exists before analysis starts. */
    let sessionId = savedSessionRef.current;
    if (!sessionId) {
      try {
        const res = await fetch("/api/sessions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            deviceId,
            type: "ai-partner",
            partnerCount: 1,
            durationSec,
            transcript: userLines,
            analysis: {},
          }),
        });
        const j = await res.json().catch(() => null);
        if (j?.ok && j.data?.id) {
          sessionId = String(j.data.id);
          savedSessionRef.current = sessionId;
        }
      } catch {
        /* save failed — the analysis path below re-POSTs as fallback */
      }
    }
    // progress data can refresh now, even if the AI analysis fails below
    onSessionDone?.();
    /* 1b) D16: roleplay feedback — mission verdict + score, before the
     *     generic deep-coach analysis (scenario-specific beats generic). */
    const activeScen = scenRef.current;
    if (activeScen) {
      try {
        const fb = await callAi<{
          goalAchieved: boolean;
          score: number;
          strengths: string;
          improvements: string;
        }>(deviceId, "scenario-feedback", {
          scenario: activeScen,
          history: msgs.slice(-20).map((m) => ({
            role: m.role === "user" ? "user" : "assistant",
            content: m.text,
          })),
        });
        setRoleFeedback(fb);
        track("roleplay_done", {
          scenario: activeScen,
          score: Number(fb.score) || 0,
          goal: fb.goalAchieved ? "yes" : "no",
        });
      } catch {
        /* feedback is an enhancement — the analysis below still runs */
      }
    }
    /* 2) AI analysis — an enhancement, never a gate on the saved minutes. */
    try {
      const result = await callAi<CallAnalysis>(deviceId, "call-analysis", {
        transcript: userLines,
        durationSec,
        partnerCount: 1,
      });
      setAnalysis(result);
      let attached = false;
      if (sessionId) {
        try {
          const patch = await fetch(`/api/sessions/${sessionId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ deviceId, analysis: result, durationSec }),
          });
          if (patch.ok) attached = true;
        } catch {
          /* fall through to the POST below */
        }
      }
      if (!attached) {
        await fetch("/api/sessions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            deviceId,
            type: "ai-partner",
            partnerCount: 1,
            durationSec,
            transcript: userLines,
            analysis: result,
          }),
        });
      }
    } catch (e) {
      // the session is already saved — only the analysis is missing
      toast({ title: t("partner.analysisError"), description: (e as Error).message, variant: "destructive" });
    } finally {
      setAnalyzing(false);
    }
  };

  const reset = () => {
    cancelSpeech();
    setMsgs([]);
    setAnalysis(null);
    setRoleFeedback(null);
    setScenario(null);
    sessionStartRef.current = null; // new conversation → new clock + record
    savedSessionRef.current = null;
  };

  if (analysis) {
    return (
      <Card className="premium-card rounded-2xl py-0">
        <CardContent className="space-y-4 p-4 sm:p-6">
          {/* D16: roleplay mission verdict — shown above the deep analysis */}
          {roleFeedback && (
            <div className="space-y-2.5 rounded-2xl border border-amber-300/70 bg-gradient-to-br from-amber-50 via-background to-orange-50 p-4 dark:border-amber-900/60 dark:from-amber-950/30 dark:via-background dark:to-orange-950/20">
              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-2 text-sm font-bold">
                  <Target className="h-4 w-4 text-amber-500" aria-hidden="true" />
                  {t("scenario.feedbackTitle")}
                </p>
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-bold text-white ${
                    roleFeedback.goalAchieved
                      ? "bg-gradient-to-br from-emerald-500 to-teal-600"
                      : "bg-gradient-to-br from-orange-500 to-rose-500"
                  }`}
                >
                  {roleFeedback.goalAchieved
                    ? t("scenario.goalAchieved")
                    : t("scenario.goalMissed")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={Math.max(0, Math.min(100, roleFeedback.score))} className="h-2 flex-1" aria-label={t("scenario.feedbackTitle")} />
                <span className="text-sm font-bold tabular-nums">{Math.round(roleFeedback.score)}%</span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">{t("scenario.strengths")}: </span>
                {roleFeedback.strengths}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">{t("scenario.improvements")}: </span>
                {roleFeedback.improvements}
              </p>
            </div>
          )}
          <div className="flex items-center justify-between gap-2">
            <h3 className="flex items-center gap-2 text-base font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/90 to-orange-500/90 text-white shadow-md">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              {t("partner.analysis.title")}
            </h3>
            <Button
              size="sm"
              variant="outline"
              onClick={reset}
              className="min-h-11 gap-1.5 rounded-xl px-3"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              {t("partner.analysis.newChat")}
            </Button>
          </div>
          <AnalysisBody
            analysis={analysis}
            transcript={msgs
              .filter((m) => m.role === "user")
              .map((m) => ({ speaker: myName, text: m.text, at: 0 }))}
          />
        </CardContent>
      </Card>
    );
  }

  const quickPhrases = t.raw("partner.quickPhrases") as string[];
  const howtoItems = t.raw("partner.empty.howto") as string[];
  const userCount = msgs.filter((m) => m.role === "user").length;
  const micLabel = listening ? t("partner.micStop") : t("partner.micStart");

  return (
    <Card className="premium-card rounded-2xl py-0">
      <CardContent className="space-y-4 p-4 sm:p-6">
        {/* Raha identity header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/90 to-orange-500/90 text-white shadow-md">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="flex items-center gap-1.5 truncate text-sm font-semibold">
                {t("partner.name")}
                {/* native-call presence: pulsing while thinking, voice bars
                    while she speaks TTS, calm green when idle */}
                {busy ? (
                  <span
                    className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-amber-400"
                    aria-hidden="true"
                  />
                ) : ttsSpeaking ? (
                  <VoiceEq className="text-amber-500" />
                ) : (
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                )}
              </p>
              <p className="truncate text-[11px] text-muted-foreground">{t("partner.role")}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleVoice}
            className="h-11 w-11 shrink-0 rounded-xl"
            aria-label={voiceOn ? t("partner.voiceOn") : t("partner.voiceOff")}
            aria-pressed={voiceOn}
            title={voiceOn ? t("partner.voiceOn") : t("partner.voiceOff")}
          >
            {voiceOn ? (
              <Volume2 className="h-5 w-5 text-rose-600 dark:text-rose-400" aria-hidden="true" />
            ) : (
              <VolumeX className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
            )}
          </Button>
        </div>

        {/* D16: roleplay scenario chips — hidden once a scene is live */}
        {msgs.length === 0 && !scenario && (
          <div>
            <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              <Target className="h-3.5 w-3.5" aria-hidden="true" />
              {t("scenario.pickLabel")}
            </p>
            <div
              className="nice-scroll -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
              role="group"
              aria-label={t("scenario.pickLabel")}
            >
              {SCENARIOS.map((s) => {
                const Icon = SCENARIO_ICONS[s.id];
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => chooseScenario(s.id)}
                    className="flex min-h-11 shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 text-sm font-medium text-muted-foreground transition-colors hover:border-rose-500/50 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {t(`scenario.names.${s.id}`)}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* D16: mission banner (visible while the scene is live) */}
        {scenario && (() => {
          const scen = scenarioById(scenario);
          if (!scen) return null;
          const Icon = SCENARIO_ICONS[scen.id];
          return (
            <div className="flex items-start gap-2.5 rounded-xl border border-amber-300/70 bg-amber-50 p-3 dark:border-amber-900/60 dark:bg-amber-950/30">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-sm">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold">
                  {t("scenario.missionLabel")} · {t(`scenario.names.${scen.id}`)}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {scen.mission[locale]}
                </p>
              </div>
            </div>
          );
        })()}

        {/* topic chips */}
        <div>
          <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            {t("partner.topicLabel")}
          </p>
          <div
            className="nice-scroll -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
            role="group"
            aria-label={t("partner.topicAria")}
          >
            {TOPICS.map((tp) => {
              const active = topic === tp.value;
              return (
                <button
                  key={tp.value}
                  type="button"
                  onClick={() => setTopic(tp.value)}
                  aria-pressed={active}
                  className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors ${
                    active
                      ? "border-rose-500 bg-rose-500 text-white shadow-sm"
                      : "border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {t(`partner.topics.${tp.key}`)}
                </button>
              );
            })}
          </div>
        </div>

        {/* chat area */}
        <div
          className="nice-scroll max-h-96 min-h-64 space-y-3 overflow-y-auto rounded-2xl border border-border/70 bg-background/40 p-3"
          aria-live="polite"
        >
          {msgs.length === 0 && (
            <div className="py-2">
              <EmptyState
                illustration="/illustrations/ill-speaking.webp"
                title={t("partner.empty.title")}
                description={t("partner.empty.desc")}
              />
              <p className="mt-3 text-center text-sm italic text-foreground">
                &ldquo;{t("partner.empty.starter")}&rdquo;
              </p>
              <div className="mt-3 rounded-xl bg-muted/50 p-3">
                <PointList items={howtoItems} itemClassName="text-[13px]" />
              </div>
            </div>
          )}

          {msgs.map((m, i) => {
            if (m.role === "user") {
              return (
                <div key={i} className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-br from-rose-500 to-pink-600 px-3.5 py-2 text-sm text-white shadow-sm">
                    <span className="mb-0.5 flex items-center justify-end gap-1 text-[10px] opacity-70">
                      {displayName || tCommon("you")}
                      <UserIcon className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
                  </div>
                </div>
              );
            }
            const fixes = m.corrections ?? [];
            return (
              <div key={i} className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                    <Bot className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md border bg-card px-3.5 py-2 text-sm shadow-sm">
                    <span className="mb-0.5 flex items-center gap-1 text-[10px] text-muted-foreground">
                      <Bot className="h-3 w-3" aria-hidden="true" /> {t("partner.name")}
                    </span>
                    <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
                    {m.followUp && (
                      <p className="mt-1.5 border-t border-border/60 pt-1.5 italic leading-relaxed text-foreground/80">
                        {m.followUp}
                      </p>
                    )}
                    {m.hint && (
                      <p className="mt-1.5 flex items-start gap-1 text-[11px] leading-relaxed text-muted-foreground">
                        <Lightbulb
                          className="mt-0.5 h-3 w-3 shrink-0 text-amber-500"
                          aria-hidden="true"
                        />
                        <span>{m.hint}</span>
                      </p>
                    )}
                  </div>
                </div>

                {fixes.length > 0 && (
                  <div className="ml-10 rounded-xl border border-amber-500/25 bg-amber-50/70 p-2.5 dark:bg-amber-950/30">
                    <p className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                      <CheckCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      {t("partner.fixes", { n: fixes.length })}
                    </p>
                    <div className="space-y-2">
                      {fixes.map((c, j) => (
                        <div key={j} className="text-xs">
                          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                            <span className="text-destructive/80 line-through decoration-destructive/60">
                              {c.original}
                            </span>
                            <ArrowRight
                              className="h-3 w-3 shrink-0 text-muted-foreground"
                              aria-hidden="true"
                            />
                            <span className="flex items-center gap-1 font-medium text-emerald-700 dark:text-emerald-300">
                              <Check className="h-3 w-3" aria-hidden="true" /> {c.corrected}
                            </span>
                          </div>
                          <p className="mt-0.5 leading-relaxed text-muted-foreground">
                            {c.explanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {busy && (
            <div className="flex items-start gap-2" role="status" aria-label={t("partner.typingAria")}>
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                <Bot className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border bg-card px-4 py-3">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground/70" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground/70 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground/70 [animation-delay:300ms]" />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* quick phrases (tap to send) — scenario starters take over */}
        <div className="nice-scroll -mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-0.5">
          {msgs.length === 0 && (
            <span className="shrink-0 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              {t("partner.quickTitle")}
            </span>
          )}
          {(scenario && msgs.length <= 1
            ? (scenarioById(scenario)?.starters ?? [])
            : quickPhrases
          ).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => void send(p)}
              className="min-h-11 shrink-0 rounded-full border bg-card px-3.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {p}
            </button>
          ))}
        </div>

        {/* input row: mic + text + send */}
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={listening ? stopListening : startListening}
            disabled={!micSupported || busy}
            className={`h-11 w-11 shrink-0 rounded-xl ${
              listening
                ? "border-rose-500/50 bg-rose-500/10 text-rose-700 dark:text-rose-300"
                : ""
            }`}
            aria-label={micLabel}
            aria-pressed={listening}
            title={micSupported ? micLabel : t("partner.micUnsupported")}
          >
            <Mic className={`h-5 w-5 ${listening ? "animate-pulse" : ""}`} aria-hidden="true" />
          </Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send();
              }
            }}
            placeholder={interim || (listening ? t("partner.listening") : t("partner.inputPlaceholder"))}
            disabled={busy}
            className="h-11 flex-1 rounded-xl"
            aria-label={t("partner.inputAria")}
          />
          <Button
            onClick={() => void send()}
            disabled={busy || !input.trim()}
            size="icon"
            className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/25 hover:from-rose-600 hover:to-pink-700"
            aria-label={tCommon("send")}
          >
            <Send className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
        {micError && <p className="text-[11px] text-destructive">{micError}</p>}

        {userCount >= 2 && (
          <Button
            variant="outline"
            className="h-11 w-full gap-2 rounded-xl"
            onClick={finishAndAnalyze}
            disabled={analyzing}
          >
            <Sparkles className="h-4 w-4 text-amber-500" aria-hidden="true" />
            {analyzing ? t("partner.analyzing") : t("partner.analyzeCta")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        )}

        {msgs.length > 0 && (
          <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
            {t("partner.footer", { n: userCount })} · {t("partner.encourage")}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

// tiny local wrapper to avoid circular import of CallAnalysisView types
function AnalysisBody({
  analysis,
  transcript,
}: {
  analysis: CallAnalysis;
  transcript: TranscriptLine[];
}) {
  const t = useTranslations("speaking");
  return (
    <div className="space-y-3">
      {analysis.summary && (
        <p className="rounded-xl bg-muted/60 p-3 text-sm leading-relaxed">{analysis.summary}</p>
      )}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <StatCard
          icon={Gauge}
          value={analysis.fluencyScore ?? 0}
          label={t("partner.analysis.fluency")}
          tint="emerald"
        />
        <StatCard
          icon={SpellCheck}
          value={analysis.grammarScore ?? 0}
          label={t("partner.analysis.grammar")}
          tint="teal"
        />
        <StatCard
          icon={BookOpen}
          value={analysis.vocabularyScore ?? 0}
          label={t("partner.analysis.vocab")}
          tint="amber"
        />
      </div>
      {analysis.mistakes && analysis.mistakes.length > 0 && (
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {t("partner.analysis.fixesTitle")}
          </p>
          {analysis.mistakes.map((m, i) => (
            <div key={i} className="rounded-xl border p-2.5 text-sm">
              <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs">
                <span className="text-destructive/80 line-through decoration-destructive/60">
                  {m.original}
                </span>
                <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground" aria-hidden="true" />
                <span className="flex items-center gap-1 font-medium text-emerald-700 dark:text-emerald-300">
                  <Check className="h-3 w-3" aria-hidden="true" /> {m.corrected}
                </span>
              </div>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{m.explanation}</p>
            </div>
          ))}
        </div>
      )}
      {analysis.suggestions && analysis.suggestions.length > 0 && (
        <PointList items={analysis.suggestions} itemClassName="text-muted-foreground" />
      )}
      {transcript.length > 0 && (
        <div className="nice-scroll max-h-40 space-y-1 overflow-y-auto rounded-xl border p-3">
          {transcript.map((tl, i) => (
            <p key={i} className="text-sm">
              <span className="font-semibold text-primary">{tl.speaker}: </span>
              {tl.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
