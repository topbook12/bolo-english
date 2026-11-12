"use client";

// RandomWordTab — এক ক্লিকে র‍্যান্ডম শব্দ + ফ্ল্যাশকার্ড প্র্যাকটিস।
// প্রতিটি ক্লিকে /api/vocab/random থেকে নতুন শব্দ (লাইব্রেরির ৫৬৪ শব্দ,
// ফ্রি-কি-লেস)। প্র্যাকটিস-ফ্লো testing effect মেনে চলে: আগে নিজে মনে
// করার চেষ্টা → তারপর অর্থ রিভিল → "শিখেছি / আবার দেখব" সেলফ-মার্কিং।
// "শিখেছি" মার্ক লার্নিং-পাথের mastery-তেও গোনে (learned-store)।

import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  AlertCircle,
  BookmarkPlus,
  Check,
  Dices,
  Ear,
  Lightbulb,
  Loader2,
  Repeat2,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { apiGet } from "@/lib/client-api";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";
import {
  pickTri,
  type LibraryLevel,
  type LibraryVocabData,
  type LibraryVocabEntry,
} from "@/lib/library-types";
import { markWordLearned } from "./learned-store";
import { speakEnglish, speakEnglishAt } from "./speech";
import { posChip } from "./vocab-visuals";
import type { DailyWord } from "@/lib/types";

/* ── helpers ─────────────────────────────────────────────────────────── */

/** JSON payload for POST /api/vocab — the exact shape the wordbook API expects. */
function wordbookPayload(entry: LibraryVocabEntry): DailyWord {
  const d = entry.data;
  return {
    word: entry.word,
    pronunciation: d.pronunciation ?? "",
    partOfSpeech: d.partOfSpeech ?? "",
    banglaMeaning: d.meaning?.bn ?? d.meaning?.en ?? "",
    englishMeaning: d.englishMeaning ?? "",
    examples: (d.examples ?? []).map((x) => x.en),
    usageTip: d.tip?.bn ?? "",
  };
}

/** Deterministic pastel hero gradient per word (same word → same colour). */
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

const LEVELS: LibraryLevel[] = ["beginner", "intermediate", "advanced"];

// Tricky-words list survives reloads (session history is state-only).
const HARD_KEY = "bolo_random_hard_v1";
const HARD_MAX = 30;

function readHardList(): LibraryVocabEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(HARD_KEY) ?? "[]");
    return Array.isArray(parsed) ? (parsed as LibraryVocabEntry[]) : [];
  } catch {
    return [];
  }
}

function persistHardList(list: LibraryVocabEntry[]): void {
  try {
    window.localStorage.setItem(HARD_KEY, JSON.stringify(list.slice(0, HARD_MAX)));
  } catch {
    /* private mode — stays session-only */
  }
}

/* ── component ───────────────────────────────────────────────────────── */

interface RandomWordTabProps {
  isSaved: (word: string) => boolean;
  onSave: (w: DailyWord) => void;
  savingWord: string | null;
}

type LevelFilter = "all" | LibraryLevel;
interface RandomResponse {
  items: LibraryVocabEntry[];
}

export default function RandomWordTab({ isSaved, onSave, savingWord }: RandomWordTabProps) {
  const t = useTranslations("vocab");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  const [level, setLevel] = useState<LevelFilter>("all");
  const [entry, setEntry] = useState<LibraryVocabEntry | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [seen, setSeen] = useState(0); // session counters
  const [known, setKnown] = useState(0);
  const [history, setHistory] = useState<LibraryVocabEntry[]>([]); // session ids order
  const [hardList, setHardList] = useState<LibraryVocabEntry[]>([]);

  // Load the persisted tricky-words list once on mount (client-only).
  useEffect(() => {
    const queue = queueMicrotask(() => setHardList(readHardList()));
    return queue;
  }, []);

  const fetchWord = useCallback(
    async (lv: LevelFilter) => {
      if (busy) return;
      setBusy(true);
      setError(null);
      try {
        const exclude = history
          .slice(-120)
          .map((h) => h.id)
          .join(",");
        const qs = new URLSearchParams();
        if (lv !== "all") qs.set("level", lv);
        if (exclude) qs.set("exclude", exclude);
        const d = await apiGet<RandomResponse>(`/api/vocab/random?${qs.toString()}`);
        const next = d.items?.[0];
        if (!next) {
          setError(t("random.empty"));
          return;
        }
        setEntry(next);
        setRevealed(false);
        setSeen((n) => n + 1);
        setHistory((h) => [...h.filter((x) => x.id !== next.id), next].slice(-120));
        track("random_word_fetch", { level: lv, word: next.word.slice(0, 40) });
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setBusy(false);
      }
    },
    [busy, history, t]
  );

  const goNext = useCallback(() => void fetchWord(level), [fetchWord, level]);

  // "শিখে ফেলেছি" — learning-path mastery + session counter, then auto-next.
  const knowIt = useCallback(() => {
    if (!entry) return;
    markWordLearned(entry.word);
    setKnown((n) => n + 1);
    track("random_word_known", { word: entry.word.slice(0, 40) });
    goNext();
  }, [entry, goNext]);

  // "কঠিন" — persist to the tricky list, then auto-next.
  const hardIt = useCallback(() => {
    if (!entry) return;
    setHardList((list) => {
      const next = [entry, ...list.filter((x) => x.id !== entry.id)].slice(0, HARD_MAX);
      persistHardList(next);
      return next;
    });
    track("random_word_hard", { word: entry.word.slice(0, 40) });
    goNext();
  }, [entry, goNext]);

  const revisit = useCallback((e: LibraryVocabEntry) => {
    setEntry(e);
    setRevealed(true);
  }, []);

  const removeFromHard = useCallback((id: string) => {
    setHardList((list) => {
      const next = list.filter((x) => x.id !== id);
      persistHardList(next);
      return next;
    });
  }, []);

  const d: LibraryVocabData | null = entry?.data ?? null;
  // Optional v3-journey fields — local consts so TS narrows everywhere below.
  const collocations = d?.collocations ?? [];
  const wordFamily = d?.wordFamily ?? [];
  const meaning = useMemo(() => (d ? pickTri(d.meaning, locale) : ""), [d, locale]);
  const tip = useMemo(() => (d ? pickTri(d.tip, locale) : ""), [d, locale]);
  const saved = entry ? isSaved(entry.word) : false;
  const chip = entry ? levelChip(entry.level) : null;

  return (
    <div className="space-y-4">
      {/* Level filter — All + 3 library levels */}
      <div role="radiogroup" aria-label={t("random.levelAria")} className="flex flex-wrap gap-1.5">
        {(["all", ...LEVELS] as LevelFilter[]).map((lv) => {
          const active = level === lv;
          return (
            <button
              key={lv}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => {
                setLevel(lv);
              }}
              className={cn(
                "h-9 rounded-full border px-3.5 text-xs font-semibold transition-colors",
                active
                  ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                  : "border-border/60 bg-card text-muted-foreground hover:bg-muted/50"
              )}
            >
              {lv === "all" ? t("random.levelAll") : tCommon(`level.${lv}`)}
            </button>
          );
        })}
      </div>

      {/* Hero CTA — one tap = one new word */}
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-emerald-200/60 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent px-4 py-6 dark:border-emerald-800/40">
        <p className="text-center text-sm text-muted-foreground">{t("random.intro")}</p>
        <Button
          className="btn-shine h-14 gap-2 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 px-6 text-base font-bold text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700 sm:px-10"
          onClick={() => (entry ? goNext() : void fetchWord(level))}
          disabled={busy}
          aria-label={t("random.ctaAria")}
        >
          {busy ? (
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
          ) : (
            <Dices className="h-5 w-5" aria-hidden />
          )}
          {busy ? t("random.ctaBusy") : entry ? t("random.another") : t("random.cta")}
        </Button>
      </div>

      {/* Fetch error → alert with retry */}
      {error && !busy && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" aria-hidden />
          <AlertTitle>{t("random.errorTitle")}</AlertTitle>
          <AlertDescription className="flex flex-wrap items-center gap-2">
            {error}
            <Button variant="outline" size="sm" className="h-8" onClick={() => void fetchWord(level)}>
              {t("random.retry")}
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* ── Flashcard ── */}
      {entry && d && (
        <article className="premium-card overflow-hidden rounded-2xl bg-card" aria-live="polite">
          {/* Hero — word + phonetics */}
          <header
            className={cn("relative bg-gradient-to-br px-4 pb-4 pt-5", heroGradient(entry.word))}
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="break-words text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  {entry.word}
                </h3>
                {d.pronunciation && (
                  <button
                    type="button"
                    onClick={() => speakEnglish(entry.word)}
                    aria-label={t("word.hearAria", { word: entry.word })}
                    className="mt-2 -ml-1 flex min-h-8 items-center gap-1.5 rounded-full border border-amber-300/70 bg-amber-50/80 px-2.5 py-1 text-xs font-medium text-amber-800 transition-colors hover:bg-amber-100 dark:border-amber-700/50 dark:bg-amber-950/40 dark:text-amber-200 dark:hover:bg-amber-900/40"
                  >
                    <Volume2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    <span className="truncate">{d.pronunciation}</span>
                  </button>
                )}
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                {d.partOfSpeech && (
                  <span
                    className={cn(
                      "rounded-full border border-border/50 px-2 py-0.5 text-[10px] font-bold capitalize",
                      posChip(d.partOfSpeech)
                    )}
                  >
                    {d.partOfSpeech}
                  </span>
                )}
                {chip && (
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                    style={{ backgroundColor: chip.color }}
                  >
                    {chip.emoji} {tCommon(`level.${entry.level}`)}
                  </span>
                )}
              </div>
            </div>

            {/* Hear row — normal + slow */}
            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                variant="outline"
                className="btn-shine h-10 gap-1.5 rounded-xl border-emerald-300/70 bg-card/80 text-emerald-700 hover:bg-card dark:border-emerald-700/60 dark:text-emerald-300"
                onClick={() => speakEnglish(entry.word)}
                aria-label={t("word.hearAria", { word: entry.word })}
              >
                <Volume2 className="h-4 w-4" aria-hidden />
                {t("word.hear")}
              </Button>
              <Button
                variant="outline"
                className="h-10 gap-1.5 rounded-xl border-emerald-300/70 bg-card/80 text-emerald-700 hover:bg-card dark:border-emerald-700/60 dark:text-emerald-300"
                onClick={() => speakEnglishAt(entry.word, 0.6)}
                aria-label={t("random.hearSlow")}
              >
                <Ear className="h-4 w-4" aria-hidden />
                {t("random.hearSlow")}
              </Button>
            </div>
          </header>

          <div className="flex flex-col gap-3 p-4">
            {/* Pre-reveal — recall first (testing effect), then reveal */}
            {!revealed ? (
              <div className="flex flex-col gap-3">
                <p className="rounded-xl border border-dashed border-emerald-300/70 bg-emerald-500/5 px-3 py-2.5 text-sm text-emerald-800 dark:border-emerald-700/60 dark:text-emerald-200">
                  🤔 {t("random.recallHint")}
                </p>
                <Button
                  className="btn-shine h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-base font-bold text-white shadow-md shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700"
                  onClick={() => setRevealed(true)}
                  aria-label={t("random.revealAria")}
                >
                  <Sparkles className="h-4 w-4" aria-hidden />
                  {t("random.reveal")}
                </Button>
              </div>
            ) : (
              <>
                {/* Bangla meaning — highlighted */}
                {meaning && (
                  <p className="rounded-xl border border-emerald-200/60 bg-emerald-500/10 px-3 py-2.5 text-base font-semibold text-emerald-800 dark:border-emerald-800/50 dark:text-emerald-200">
                    {meaning}
                  </p>
                )}

                {d.englishMeaning && (
                  <p className="text-sm leading-relaxed text-muted-foreground">{d.englishMeaning}</p>
                )}

                {/* Examples — tap to hear, bn gloss below */}
                {(d.examples?.length ?? 0) > 0 && (
                  <div>
                    <p className="mb-1.5 text-xs font-semibold text-muted-foreground">
                      🎧 {t("lib.examplesLabel")}
                    </p>
                    <ol className="space-y-1.5">
                      {d.examples.map((ex, i) => (
                        <li key={i}>
                          <button
                            type="button"
                            onClick={() => speakEnglish(ex.en)}
                            aria-label={t("word.hearExampleAria", { text: ex.en })}
                            className="flex min-h-11 w-full items-start gap-1.5 rounded-lg px-1.5 py-1.5 text-left transition-colors hover:bg-amber-500/10"
                          >
                            <Volume2
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600 dark:text-amber-400"
                              aria-hidden
                            />
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm italic leading-snug">{ex.en}</span>
                              {ex.bn && (
                                <span className="mt-0.5 block text-xs text-muted-foreground">
                                  {ex.bn}
                                </span>
                              )}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Synonyms / antonyms chips */}
                {((d.synonyms?.length ?? 0) > 0 || (d.antonyms?.length ?? 0) > 0) && (
                  <div className="space-y-1.5 text-xs">
                    {(d.synonyms?.length ?? 0) > 0 && (
                      <p className="text-muted-foreground">
                        <span className="font-semibold">{t("lib.synonymsLabel")}</span>{" "}
                        {d.synonyms.join(", ")}
                      </p>
                    )}
                    {(d.antonyms?.length ?? 0) > 0 && (
                      <p className="text-muted-foreground">
                        <span className="font-semibold">{t("lib.antonymsLabel")}</span>{" "}
                        {d.antonyms.join(", ")}
                      </p>
                    )}
                  </div>
                )}

                {/* Collocations + word family (v3 journey wave — optional) */}
                {collocations.length > 0 && (
                  <div>
                    <p className="mb-1 text-xs font-semibold text-muted-foreground">
                      {t("lib.collocations")}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {collocations.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-sky-200/70 bg-sky-500/10 px-2.5 py-1 text-[11px] font-medium text-sky-800 dark:border-sky-800/60 dark:text-sky-200"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {wordFamily.length > 0 && (
                  <div>
                    <p className="mb-1 text-xs font-semibold text-muted-foreground">
                      {t("lib.wordFamily")}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {wordFamily.map((f, i) => (
                        <span key={f} className="flex items-center gap-1.5">
                          {i > 0 && <span className="text-muted-foreground">→</span>}
                          <span className="rounded-full border border-violet-200/70 bg-violet-500/10 px-2.5 py-1 text-[11px] font-medium text-violet-800 dark:border-violet-800/60 dark:text-violet-200">
                            {f}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Usage tip — amber 💡 card */}
                {tip && (
                  <aside className="flex items-start gap-2.5 rounded-xl border border-amber-200/70 bg-amber-50 px-3 py-2.5 dark:border-amber-800/50 dark:bg-amber-950/30">
                    <Lightbulb
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400"
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-amber-900 dark:text-amber-200">
                        💡 {t("lib.tipLabel")}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-amber-800/85 dark:text-amber-200/75">
                        {tip}
                      </p>
                    </div>
                  </aside>
                )}

                {/* Practice actions — know / hard / save, 44px targets */}
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <Button
                    className="btn-shine h-11 flex-1 gap-1.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700 sm:flex-none sm:px-5"
                    onClick={knowIt}
                    disabled={busy}
                    aria-label={t("random.knowAria")}
                  >
                    <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
                    {t("random.know")}
                  </Button>
                  <Button
                    variant="outline"
                    className="h-11 flex-1 gap-1.5 rounded-xl border-amber-300/70 text-amber-700 hover:bg-amber-500/10 sm:flex-none sm:px-5 dark:border-amber-700/60 dark:text-amber-300"
                    onClick={hardIt}
                    disabled={busy}
                    aria-label={t("random.hardAria")}
                  >
                    <Repeat2 className="h-4 w-4" aria-hidden />
                    {t("random.hard")}
                  </Button>
                  {saved ? (
                    <Button
                      variant="outline"
                      disabled
                      className="h-11 flex-1 gap-1.5 rounded-xl border-emerald-300/70 bg-emerald-500/10 text-emerald-700 sm:flex-none sm:px-5 dark:border-emerald-700/60 dark:text-emerald-300"
                      aria-label={t("word.savedAria", { word: entry.word })}
                    >
                      <Check className="h-4 w-4 fill-current" aria-hidden />
                      {t("lib.saved")}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="h-11 flex-1 gap-1.5 rounded-xl sm:flex-none sm:px-5"
                      onClick={() => onSave(wordbookPayload(entry))}
                      disabled={savingWord === entry.word}
                      aria-label={t("word.saveAria", { word: entry.word })}
                    >
                      {savingWord === entry.word ? (
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      ) : (
                        <BookmarkPlus className="h-4 w-4" aria-hidden />
                      )}
                      {t("lib.saveWordbook")}
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        </article>
      )}

      {/* Session stats */}
      {seen > 0 && (
        <p className="text-center text-xs font-medium text-muted-foreground">
          {t("random.sessionStats", { seen, known })}
        </p>
      )}

      {/* Tricky words — persisted, tap to revisit, x to remove */}
      {hardList.length > 0 && (
        <section aria-label={t("random.hardListLabel")} className="rounded-2xl border border-amber-200/70 bg-amber-50/50 p-3 dark:border-amber-800/40 dark:bg-amber-950/20">
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="text-xs font-bold text-amber-800 dark:text-amber-200">
              🔁 {t("random.hardListLabel")} ({hardList.length})
            </p>
            <Button
              variant="ghost"
              className="h-7 gap-1 rounded-lg px-2 text-[11px] text-amber-700 hover:text-amber-800 dark:text-amber-300"
              onClick={() => {
                setHardList([]);
                persistHardList([]);
              }}
            >
              <X className="h-3 w-3" aria-hidden />
              {t("random.clearHard")}
            </Button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {hardList.map((h) => (
              <span
                key={h.id}
                className="flex items-center gap-1 rounded-full border border-amber-300/70 bg-card px-1 py-0.5 pl-1.5 dark:border-amber-700/50"
              >
                <button
                  type="button"
                  onClick={() => revisit(h)}
                  className="min-h-7 rounded-full px-1.5 text-xs font-semibold text-amber-900 hover:underline dark:text-amber-100"
                >
                  {h.word}
                </button>
                <button
                  type="button"
                  onClick={() => removeFromHard(h.id)}
                  aria-label={`${h.word} — ${t("random.clearHard")}`}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-amber-600 transition-colors hover:bg-amber-500/15 dark:text-amber-400"
                >
                  <X className="h-3 w-3" aria-hidden />
                </button>
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Session history chips — tap to revisit */}
      {history.length > 1 && (
        <section aria-label={t("random.historyLabel")}>
          <p className="mb-1.5 text-xs font-semibold text-muted-foreground">
            {t("random.historyLabel")}
          </p>
          <div className="flex max-h-28 flex-wrap gap-1.5 overflow-y-auto">
            {[...history].reverse().map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => revisit(h)}
                className={cn(
                  "min-h-8 rounded-full border px-3 text-xs font-medium transition-colors",
                  entry?.id === h.id
                    ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                    : "border-border/60 bg-card text-muted-foreground hover:bg-muted/50"
                )}
              >
                {h.word}
              </button>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}

/** Level chip visuals — mirrors the journey palette (emerald/amber/violet). */
function levelChip(lv: LibraryLevel): { emoji: string; color: string } {
  return {
    beginner: { emoji: "🌱", color: "#10b981" },
    intermediate: { emoji: "🚀", color: "#f59e0b" },
    advanced: { emoji: "🏔", color: "#8b5cf6" },
  }[lv];
}
