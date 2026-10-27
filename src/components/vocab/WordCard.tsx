"use client";

import { useState } from "react";
import { BookmarkPlus, Lightbulb, Loader2, Sparkles, Star, Volume2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import PointList from "@/components/shared/PointList";
import { callAi } from "@/lib/client-api";
import { getDeviceId, useDeviceValue } from "@/hooks/use-device";
import { useToast } from "@/hooks/use-toast";
import { track } from "@/lib/track";
import { speakEnglish } from "./speech";
import { posChip } from "./vocab-visuals";
import type { DailyWord } from "@/lib/types";

interface WordCardProps {
  w: DailyWord;
  saved: boolean;
  saving: boolean;
  onSave: () => void;
}

interface AiSentence {
  en: string;
  note: string;
}

// A deterministic pastel gradient per word, so every daily card gets its own
// colour identity without any lookup table (same word → same colour daily).
const HERO_GRADIENTS = [
  "from-emerald-500/15 via-teal-500/10 to-transparent",
  "from-amber-500/15 via-orange-500/10 to-transparent",
  "from-rose-500/15 via-pink-500/10 to-transparent",
  "from-violet-500/15 via-purple-500/10 to-transparent",
  "from-lime-500/15 via-green-500/10 to-transparent",
  "from-fuchsia-500/15 via-rose-500/10 to-transparent",
];

function heroGradient(word: string): string {
  let h = 0;
  for (let i = 0; i < word.length; i++) h = (h * 33 + word.charCodeAt(i)) | 0;
  return HERO_GRADIENTS[Math.abs(h) % HERO_GRADIENTS.length];
}

// Rich premium card for one DailyWord — used in the daily-words tab and for the
// "add your own word" lookup result in the wordbook tab.
// NOTE: meanings / examples / tips are AI content (Gemini, Bangla) — they are
// DATA and are never translated; only UI chrome strings go through i18n.
export default function WordCard({ w, saved, saving, onSave }: WordCardProps) {
  const t = useTranslations("vocab");
  const tCommon = useTranslations("common");
  const { toast } = useToast();
  const hasKey = useDeviceValue((s) => s.hasKey, false);
  const [aiState, setAiState] = useState<"idle" | "busy" | "done">("idle");
  const [aiSentences, setAiSentences] = useState<AiSentence[]>([]);

  // D23: level-tuned AI examples — 3 fresh real-life sentences using this
  // word, glossed in the UI language. Shared AiCache on the server means the
  // learner's key pays ONCE per word per level (everyone after is free).
  async function loadAiExamples() {
    if (aiState === "busy") return;
    setAiState("busy");
    try {
      const data = await callAi<{ sentences: AiSentence[] }>(
        getDeviceId(),
        "vocab-example",
        { word: w.word }
      );
      setAiSentences(data.sentences ?? []);
      setAiState("done");
      track("ai_examples", { word: w.word.slice(0, 40) });
    } catch (e) {
      setAiState("idle");
      toast({ title: (e as Error).message, variant: "destructive" });
    }
  }

  return (
    <article className="premium-card flex flex-col overflow-hidden rounded-2xl bg-card">
      {/* Hero — word + phonetics on a soft per-word gradient band */}
      <header className={`relative bg-gradient-to-br px-4 pb-3.5 pt-4 ${heroGradient(w.word)}`}>
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="break-words text-2xl font-extrabold leading-tight tracking-tight">
              {w.word}
            </h3>
            {w.pronunciation && (
              <button
                type="button"
                onClick={() => speakEnglish(w.word)}
                className="mt-1.5 -ml-1 flex max-w-full min-h-8 items-center gap-1.5 rounded-full border border-amber-300/70 bg-amber-50/80 px-2.5 py-1 text-xs font-medium text-amber-800 transition-colors hover:bg-amber-100 dark:border-amber-700/50 dark:bg-amber-950/40 dark:text-amber-200 dark:hover:bg-amber-900/40"
                aria-label={t("word.hearAria", { word: w.word })}
              >
                <Volume2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
                <span className="truncate">{w.pronunciation}</span>
              </button>
            )}
          </div>
          {w.partOfSpeech && (
            <span
              className={`shrink-0 rounded-full border border-border/50 px-2 py-0.5 text-[10px] font-bold capitalize ${posChip(w.partOfSpeech)}`}
            >
              {w.partOfSpeech}
            </span>
          )}
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Bangla meaning — highlighted (AI data, kept as-is) */}
        <p className="rounded-xl border border-emerald-200/60 bg-emerald-500/10 px-3 py-2.5 text-sm font-semibold text-emerald-800 dark:border-emerald-800/50 dark:text-emerald-200">
          {w.banglaMeaning}
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">{w.englishMeaning}</p>

        {/* Examples — numbered list, tap any line to hear it */}
        {w.examples?.length > 0 && (
          <div>
            <p className="mb-1.5 text-xs font-semibold text-muted-foreground">
              🎧 {t("word.examplesLabel")}
            </p>
            <PointList
              variant="number"
              className="space-y-1"
              items={w.examples.map((ex, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => speakEnglish(ex)}
                  aria-label={t("word.hearExampleAria", { text: ex })}
                  className="flex min-h-11 w-full items-center gap-1.5 rounded-lg px-1.5 py-1 text-left transition-colors hover:bg-amber-500/10"
                >
                  <Volume2
                    className="h-3.5 w-3.5 shrink-0 text-amber-600 dark:text-amber-400"
                    aria-hidden
                  />
                  <span className="min-w-0 flex-1 text-sm italic leading-snug">{ex}</span>
                </button>
              ))}
            />
          </div>
        )}

        {/* D23: AI-generated level-tuned examples (on demand, BYOK) */}
        {aiState !== "done" ? (
          <Button
            variant="outline"
            onClick={() => void loadAiExamples()}
            disabled={aiState === "busy"}
            className="h-10 gap-1.5 rounded-xl border-dashed text-xs"
            aria-label={t("word.moreExamplesAria", { word: w.word })}
          >
            {aiState === "busy" ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
            ) : (
              <Sparkles className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" aria-hidden />
            )}
            {t("word.moreExamples")}
          </Button>
        ) : (
          <div>
            <p className="mb-1.5 flex items-center gap-1 text-xs font-semibold text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" aria-hidden />
              {t("word.aiExamplesLabel")}
            </p>
            <PointList
              variant="number"
              className="space-y-1"
              items={aiSentences.map((s, i) => (
                <div key={i} className="rounded-lg px-1.5 py-1">
                  <button
                    type="button"
                    onClick={() => speakEnglish(s.en)}
                    aria-label={t("word.hearExampleAria", { text: s.en })}
                    className="flex min-h-9 w-full items-center gap-1.5 rounded-lg text-left transition-colors hover:bg-violet-500/10"
                  >
                    <Volume2
                      className="h-3.5 w-3.5 shrink-0 text-violet-600 dark:text-violet-400"
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1 text-sm italic leading-snug">{s.en}</span>
                  </button>
                  {s.note && (
                    <p className="pl-6 text-[11px] leading-relaxed text-muted-foreground">{s.note}</p>
                  )}
                </div>
              ))}
            />
            {!hasKey && (
              <p className="mt-1 text-[11px] text-muted-foreground">{t("word.aiKeyNote")}</p>
            )}
          </div>
        )}

        {/* Usage tip — amber 💡 card */}
        {w.usageTip && (
          <aside className="flex items-start gap-2.5 rounded-xl border border-amber-200/70 bg-amber-50 px-3 py-2.5 dark:border-amber-800/50 dark:bg-amber-950/30">
            <Lightbulb
              className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400"
              aria-hidden
            />
            <div className="min-w-0">
              <p className="text-xs font-semibold text-amber-900 dark:text-amber-200">
                💡 {t("word.tipLabel")}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-amber-800/85 dark:text-amber-200/75">
                {w.usageTip}
              </p>
            </div>
          </aside>
        )}

        {/* Actions — hear + save, 44px targets */}
        <footer className="mt-auto flex items-center gap-2 pt-1">
          <Button
            variant="outline"
            className="btn-shine h-11 flex-1 gap-1.5 rounded-xl sm:flex-none sm:px-5"
            onClick={() => speakEnglish(w.word)}
            aria-label={t("word.hearAria", { word: w.word })}
          >
            <Volume2 className="h-4 w-4" aria-hidden />
            {t("word.hear")}
          </Button>
          {saved ? (
            <Button
              variant="outline"
              disabled
              className="h-11 flex-1 gap-1.5 rounded-xl border-emerald-300/70 bg-emerald-500/10 text-emerald-700 sm:flex-none sm:px-5 dark:border-emerald-700/60 dark:text-emerald-300"
              aria-label={t("word.savedAria", { word: w.word })}
            >
              <Star className="h-4 w-4 fill-current" aria-hidden />
              {tCommon("saved")}
            </Button>
          ) : (
            <Button
              className="h-11 flex-1 gap-1.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700 sm:flex-none sm:px-5"
              onClick={onSave}
              disabled={saving}
              aria-label={t("word.saveAria", { word: w.word })}
            >
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <BookmarkPlus className="h-4 w-4" aria-hidden />
              )}
              {t("word.save")}
            </Button>
          )}
        </footer>
      </div>
    </article>
  );
}
