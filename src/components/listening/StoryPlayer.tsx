"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  CircleAlert,
  CircleCheck,
  Gauge,
  Headphones,
  Languages,
  Lightbulb,
  ListChecks,
  Pause,
  Play,
  RotateCcw,
  Square,
  Volume2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { callAi } from "@/lib/client-api";
import type { ListeningStoryContent } from "@/lib/types";
import EmptyState from "@/components/shared/EmptyState";
import QuizPlayer, { useDigits } from "@/components/listening/QuizPlayer";
import { markStoryDone, toStoryContent } from "@/components/listening/library";
import { pickLang, type LibraryStory } from "@/components/listening/types";

export type ListeningLevel = "beginner" | "intermediate" | "advanced";

// Labels come from i18n (common.level.*) — ids only here.
export const LISTENING_LEVELS: { id: ListeningLevel }[] = [
  { id: "beginner" },
  { id: "intermediate" },
  { id: "advanced" },
];

type SpeechState = "idle" | "playing" | "paused";

type LoadState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; story: ListeningStoryContent };

// ---- speechSynthesis support probe (hydration-safe, no effect setState) ----
const subscribeNoop = () => () => undefined;
const speechSupportedSnapshot = () =>
  typeof window !== "undefined" && "speechSynthesis" in window;
const speechSupportedServerSnapshot = () => true;

interface StoryPlayerProps {
  deviceId: string;
  topic: string;
  topicLabel: string;
  level: ListeningLevel;
  onBack: () => void;
  /** Built-in library story — skips AI generation entirely (works with no API key). */
  libraryStory?: LibraryStory;
}

export default function StoryPlayer({
  deviceId,
  topic,
  topicLabel,
  level,
  onBack,
  libraryStory,
}: StoryPlayerProps) {
  const t = useTranslations("listening.player");
  const tc = useTranslations("common");
  const locale = useLocale();
  const fmt = useDigits();

  const [loadState, setLoadState] = useState<LoadState>({ status: "loading" });
  const [reloadKey, setReloadKey] = useState(0);
  const [phase, setPhase] = useState<"story" | "quiz">("story");
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [quizDone, setQuizDone] = useState(false);

  // Library stories are static — derive their content synchronously (no
  // effect/setState, no loading state, no API key needed).
  const libraryContent = useMemo(
    () => (libraryStory ? toStoryContent(libraryStory, locale) : null),
    [libraryStory, locale]
  );

  // ---- browser TTS state (window.speechSynthesis — 100% free) ----
  const supportsTts = useSyncExternalStore(
    subscribeNoop,
    speechSupportedSnapshot,
    speechSupportedServerSnapshot
  );
  const [speechState, setSpeechState] = useState<SpeechState>("idle");
  const [curIdx, setCurIdx] = useState<number | null>(null);
  const [rate, setRate] = useState("1");
  const rateRef = useRef(1);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const paraRefs = useRef<(HTMLDivElement | null)[]>([]);
  // generation token + stopped flag: guards against stale onend/onerror callbacks
  const speechRef = useRef<{ stopped: boolean; gen: number }>({ stopped: true, gen: 0 });

  const levelLabel = tc(`level.${level}`);
  // Library story wins when present; otherwise the AI-loaded story is used.
  const story: ListeningStoryContent | null =
    libraryContent ?? (loadState.status === "ready" ? loadState.story : null);

  const cancelSpeech = useCallback(() => {
    speechRef.current.stopped = true;
    speechRef.current.gen += 1;
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setCurIdx(null);
    setSpeechState("idle");
  }, []);

  // Load AI story (the server caches each topic+level story it creates).
  // Library stories skip this entirely — their content is derived above.
  useEffect(() => {
    if (libraryStory) return;
    let cancelled = false;
    callAi<ListeningStoryContent>(deviceId, "listening-story", { topic, level })
      .then((s) => {
        if (!cancelled) setLoadState({ status: "ready", story: s });
      })
      .catch((e: unknown) => {
        if (!cancelled) {
          setLoadState({
            status: "error",
            message: e instanceof Error ? e.message : "",
          });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [deviceId, topic, level, reloadKey, libraryStory]);

  // English voice list (async loading via onvoiceschanged) — ref only, no setState
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const load = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", load);
  }, []);

  // Unmount cleanup — always stop any speech (also covers leaving the story view)
  useEffect(() => {
    return () => {
      speechRef.current.stopped = true;
      speechRef.current.gen += 1;
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Auto-scroll the currently spoken paragraph into view
  useEffect(() => {
    if (curIdx === null) return;
    paraRefs.current[curIdx]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [curIdx]);

  const speakFrom = useCallback(
    (startIdx: number) => {
      const synth =
        typeof window !== "undefined" && "speechSynthesis" in window ? window.speechSynthesis : null;
      if (!synth || !story) return;
      synth.cancel();
      speechRef.current.stopped = false;
      const gen = speechRef.current.gen + 1;
      speechRef.current.gen = gen;

      const pickVoice = (): SpeechSynthesisVoice | null => {
        const voices = voicesRef.current;
        if (!voices.length) return null;
        const en = voices.filter((v) => v.lang.toLowerCase().replace("_", "-").startsWith("en"));
        const us = en.filter((v) => v.lang.toLowerCase().replace("_", "-") === "en-us");
        return (
          us.find((v) => /google us english|natural|neural|samantha|aria/i.test(v.name)) ??
          us[0] ??
          en[0] ??
          null
        );
      };

      const speakOne = (idx: number) => {
        if (speechRef.current.stopped || gen !== speechRef.current.gen) return;
        const text = story.story[idx];
        if (text === undefined) {
          // পুরো গল্প শেষ
          setCurIdx(null);
          setSpeechState("idle");
          return;
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US";
        const voice = pickVoice();
        if (voice) utterance.voice = voice;
        utterance.rate = rateRef.current;
        utterance.pitch = 1;
        utterance.onend = () => {
          if (speechRef.current.stopped || gen !== speechRef.current.gen) return;
          speakOne(idx + 1);
        };
        utterance.onerror = () => {
          if (speechRef.current.stopped || gen !== speechRef.current.gen) return;
          setCurIdx(null);
          setSpeechState("idle");
        };
        setCurIdx(idx);
        setSpeechState("playing");
        // Chrome-এ cancel() এর ঠিক পরে speak() কল করলে কখনো কাজ করে না — ছোট বিরতি দরকার
        window.setTimeout(() => {
          if (!speechRef.current.stopped && gen === speechRef.current.gen) {
            synth.speak(utterance);
          }
        }, 80);
      };

      speakOne(startIdx);
    },
    [story]
  );

  const handlePlay = () => {
    if (!story) return;
    setHasPlayed(true);
    speakFrom(curIdx ?? 0);
  };

  const handlePause = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.pause();
    setSpeechState("paused");
  };

  const handleResume = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.resume();
    setSpeechState("playing");
  };

  const handleRateChange = (val: string) => {
    setRate(val);
    rateRef.current = parseFloat(val);
    // চলমান অনুচ্ছেদটা নতুন স্পিডে আবার শুরু হয়
    if (speechState !== "idle" && curIdx !== null) speakFrom(curIdx);
  };

  const goToQuiz = () => {
    cancelSpeech(); // গল্প ভিউ ছাড়ার সময় সব স্পিচ বন্ধ
    setPhase("quiz");
  };

  const retry = () => {
    setLoadState({ status: "loading" });
    setReloadKey((k) => k + 1);
  };

  // ---------- QUIZ PHASE ----------
  if (phase === "quiz" && story) {
    return (
      <QuizPlayer
        deviceId={deviceId}
        storyTitle={story.title}
        questions={Array.isArray(story.questions) ? story.questions : []}
        onBackToStory={() => setPhase("story")}
        onNewStory={onBack}
        onFinished={() => {
          setQuizDone(true);
          setSummaryOpen(true);
          if (libraryStory) markStoryDone(libraryStory.id);
        }}
      />
    );
  }

  // ---------- STORY VIEW ----------
  if (story) {
    const paragraphs = Array.isArray(story.story) ? story.story : [];
    const playing = speechState === "playing";

    return (
      <div className="animate-fade-in-up space-y-4">
        {/* Player card: title + level chip + controls */}
        <Card className="premium-card rounded-2xl bg-card shadow-sm">
          <CardContent className="space-y-4 p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-11 w-11 shrink-0 rounded-xl"
                onClick={onBack}
                aria-label={t("backToTopics")}
              >
                <ArrowLeft className="h-4.5 w-4.5" />
              </Button>
              <div className="min-w-0 flex-1">
                <h2 className="truncate text-lg font-bold">{story.title}</h2>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                  <Badge variant="secondary" className="gap-1 font-medium">
                    <Headphones className="h-3 w-3" aria-hidden /> {topicLabel}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="gap-1 font-medium"
                    aria-label={t("levelPrefix", { level: levelLabel })}
                  >
                    <Gauge className="h-3 w-3" aria-hidden /> {levelLabel}
                  </Badge>
                  {quizDone && (
                    <Badge className="gap-1 bg-emerald-600 text-white hover:bg-emerald-600">
                      <CircleCheck className="h-3.5 w-3.5" aria-hidden /> {t("quizDone")}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Controls */}
            {supportsTts ? (
              <div className="flex flex-wrap items-center gap-2">
                {speechState === "idle" && (
                  <Button
                    onClick={handlePlay}
                    disabled={paragraphs.length === 0}
                    className="btn-shine min-h-11 gap-1.5 rounded-xl"
                  >
                    <Play className="h-4.5 w-4.5 fill-current" aria-hidden /> {t("listen")}
                  </Button>
                )}
                {speechState === "playing" && (
                  <Button onClick={handlePause} className="min-h-11 gap-1.5 rounded-xl">
                    <Pause className="h-4.5 w-4.5 fill-current" aria-hidden /> {t("pause")}
                  </Button>
                )}
                {speechState === "paused" && (
                  <Button onClick={handleResume} className="min-h-11 gap-1.5 rounded-xl">
                    <Play className="h-4.5 w-4.5 fill-current" aria-hidden /> {t("resume")}
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={cancelSpeech}
                  disabled={speechState === "idle"}
                  className="min-h-11 gap-1.5 rounded-xl"
                >
                  <Square className="h-4 w-4 fill-current" aria-hidden /> {t("stop")}
                </Button>
                <div className="ml-auto flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-muted-foreground" aria-hidden />
                  <Select value={rate} onValueChange={handleRateChange}>
                    <SelectTrigger
                      className="h-11 w-[132px] rounded-xl"
                      aria-label={t("speed")}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0.75">{t("speedSlow")}</SelectItem>
                      <SelectItem value="1">{t("speedNormal")}</SelectItem>
                      <SelectItem value="1.25">{t("speedFast")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <p className="flex items-start gap-2 rounded-xl bg-muted/60 p-3 text-sm text-muted-foreground">
                <Volume2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {t("noTts")}
              </p>
            )}

            {/* Progress line */}
            <p className="flex items-center gap-2 text-xs text-muted-foreground" aria-live="polite">
              {playing && (
                <span className="flex items-end gap-0.5" aria-hidden>
                  <span className="h-2.5 w-0.5 animate-pulse rounded-full bg-primary" />
                  <span className="h-3.5 w-0.5 animate-pulse rounded-full bg-primary [animation-delay:200ms]" />
                  <span className="h-2 w-0.5 animate-pulse rounded-full bg-primary [animation-delay:400ms]" />
                </span>
              )}
              {paragraphs.length === 0
                ? t("noParagraphs")
                : speechState === "idle"
                  ? t("totalParagraphs", { n: fmt(paragraphs.length) })
                  : t("nowPlaying", {
                      cur: fmt((curIdx ?? 0) + 1),
                      total: fmt(paragraphs.length),
                    })}
            </p>
          </CardContent>
        </Card>

        {/* Paragraphs */}
        {paragraphs.length === 0 ? (
          <EmptyState emoji="🎧" title={t("noParagraphs")} description={t("noTts")} />
        ) : (
          <div
            className="nice-scroll max-h-96 space-y-3 overflow-y-auto pr-1"
            role="list"
            aria-label={t("paragraphsAria")}
          >
            {paragraphs.map((p, i) => (
              <div
                key={i}
                role="listitem"
                ref={(el) => {
                  paraRefs.current[i] = el;
                }}
                className={cn(
                  "rounded-xl border p-4 transition-colors",
                  curIdx === i ? "border-primary bg-primary/5 shadow-sm" : "border-border/60"
                )}
              >
                <span
                  className={cn(
                    "mb-1.5 block text-[11px] font-medium",
                    curIdx === i ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {t("paragraphN", { n: fmt(i + 1) })}
                </span>
                <p className="text-sm leading-relaxed sm:text-[15px]">{p}</p>
              </div>
            ))}
          </div>
        )}

        {/* Key vocabulary — library stories ship with curated word lists */}
        {libraryStory && libraryStory.vocabulary.length > 0 && (
          <div className="rounded-2xl border border-border/60 bg-card p-4">
            <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-foreground">
              <BookOpen className="h-3.5 w-3.5 text-primary" aria-hidden /> {t("vocabTitle")}
            </p>
            <div className="nice-scroll max-h-64 space-y-2 overflow-y-auto pr-1">
              {libraryStory.vocabulary.map((v) => (
                <div key={v.word} className="rounded-xl border border-border/50 p-3">
                  <p className="text-sm font-semibold">{v.word}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{pickLang(v.meaning, locale)}</p>
                  <p className="mt-1 text-xs italic text-muted-foreground/80">“{v.example}”</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quiz CTA + summary */}
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Button
              onClick={goToQuiz}
              disabled={paragraphs.length === 0}
              className="btn-shine min-h-11 w-full gap-2 rounded-xl sm:w-auto"
            >
              <ListChecks className="h-4.5 w-4.5" aria-hidden /> {t("goToQuiz")}
            </Button>
            {!hasPlayed && !quizDone && (
              <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
                <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden />
                {t("tipListenFirst")}
              </p>
            )}
          </div>

          <Collapsible open={summaryOpen} onOpenChange={setSummaryOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="min-h-11 gap-1.5 px-3 text-primary"
                aria-expanded={summaryOpen}
              >
                <Languages className="h-4 w-4" aria-hidden />
                {summaryOpen ? t("hideSummary") : t("showSummary")}
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", summaryOpen && "rotate-180")}
                  aria-hidden
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-2 rounded-2xl border border-teal-500/20 bg-teal-500/5 p-4">
                <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300">
                  <Languages className="h-3.5 w-3.5" aria-hidden /> {t("summaryTitle")}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {story.banglaSummary}
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    );
  }

  // ---------- ERROR ----------
  if (loadState.status === "error") {
    return (
      <div className="animate-fade-in-up space-y-3">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 shrink-0 rounded-xl"
            onClick={onBack}
            aria-label={t("backToTopics")}
          >
            <ArrowLeft className="h-4.5 w-4.5" />
          </Button>
          <h2 className="truncate text-lg font-bold">{t("loadFailedTitle")}</h2>
        </div>
        <Alert variant="destructive">
          <CircleAlert />
          <AlertTitle>{t("loadFailed")}</AlertTitle>
          <AlertDescription>{loadState.message || t("fallbackError")}</AlertDescription>
        </Alert>
        <div className="flex gap-2">
          <Button variant="outline" onClick={retry} className="min-h-11 gap-1.5 rounded-xl">
            <RotateCcw className="h-4 w-4" /> {tc("retry")}
          </Button>
          <Button variant="ghost" onClick={onBack} className="min-h-11">
            {t("backToTopic")}
          </Button>
        </div>
      </div>
    );
  }

  // ---------- LOADING ----------
  return (
    <div className="space-y-4" aria-busy="true" aria-label={t("loadingAria")}>
      <div className="flex items-center gap-2">
        <Skeleton className="h-11 w-11 rounded-xl" />
        <div className="flex-1 space-y-1.5">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-3.5 w-32" />
        </div>
      </div>
      <Skeleton className="h-24 rounded-2xl" />
      <Skeleton className="h-14 rounded-xl" />
      <div className="nice-scroll max-h-96 space-y-3 overflow-y-auto pr-1">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-20 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
