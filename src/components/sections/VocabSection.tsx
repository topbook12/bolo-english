"use client";

import { useCallback, useEffect, useState } from "react";
import { BookMarked, CalendarDays, LibraryBig, Target } from "lucide-react";
import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToastAction } from "@/components/ui/toast";
import SectionHeader from "@/components/shared/SectionHeader";
import { useDevice } from "@/hooks/use-device";
import { useToast } from "@/hooks/use-toast";
import { apiGet, apiPost, apiDelete } from "@/lib/client-api";
import type { DailyWord } from "@/lib/types";
import type { SavedWord } from "@/components/vocab/types";
import DailyWordsTab from "@/components/vocab/DailyWordsTab";
import WordbookTab from "@/components/vocab/WordbookTab";
import QuizTab from "@/components/vocab/QuizTab";
import { cancelSpeech } from "@/components/vocab/speech";

type VocabTab = "daily" | "wordbook" | "quiz";

// VOCAB SECTION — আজকের শব্দ / ওয়ার্ডবুক / কুইজ
export default function VocabSection() {
  const t = useTranslations("vocab");
  const { deviceId, hasKey, loaded } = useDevice();
  const { toast } = useToast();

  const [tab, setTab] = useState<VocabTab>("daily");
  const [words, setWords] = useState<SavedWord[] | null>(null); // null = loading
  const [wbError, setWbError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [savingWord, setSavingWord] = useState<string | null>(null);
  const [deletingWord, setDeletingWord] = useState<string | null>(null);

  // Wordbook is loaded here so both "আজকের শব্দ" (saved state) and "কুইজ" (source words) share it
  useEffect(() => {
    if (!deviceId) return;
    let alive = true;
    apiGet<SavedWord[]>(`/api/vocab?deviceId=${encodeURIComponent(deviceId)}`)
      .then((d) => {
        if (!alive) return;
        setWords(d);
        setWbError(null);
      })
      .catch((e) => {
        if (!alive) return;
        setWbError((e as Error).message);
      });
    return () => {
      alive = false;
    };
  }, [deviceId, refreshKey]);

  // Stop any ongoing speech when leaving the section
  useEffect(() => {
    return () => cancelSpeech();
  }, []);

  const refreshWordbook = useCallback(() => setRefreshKey((k) => k + 1), []);

  const isSaved = useCallback(
    (word: string) => {
      const q = word.trim().toLowerCase();
      return !!words?.some((w) => w.word.toLowerCase() === q);
    },
    [words]
  );

  const handleSave = useCallback(
    async (w: DailyWord) => {
      if (!deviceId || savingWord) return;
      setSavingWord(w.word);
      try {
        await apiPost("/api/vocab", { deviceId, word: w });
        refreshWordbook();
        toast({ title: t("toast.saved", { word: w.word }) });
      } catch (e) {
        toast({
          title: t("toast.saveFailed"),
          description: (e as Error).message,
          variant: "destructive",
        });
      } finally {
        setSavingWord(null);
      }
    },
    [deviceId, savingWord, refreshWordbook, toast, t]
  );

  // Undo a delete — re-posts the removed word back into the wordbook
  const undoDelete = useCallback(
    async (w: SavedWord) => {
      if (!deviceId) return;
      try {
        await apiPost("/api/vocab", { deviceId, word: w });
        refreshWordbook();
        toast({ title: t("toast.undoDone", { word: w.word }) });
      } catch {
        refreshWordbook(); // re-sync list with server state
      }
    },
    [deviceId, refreshWordbook, toast, t]
  );

  const handleDelete = useCallback(
    async (w: SavedWord) => {
      if (!deviceId || deletingWord) return;
      setDeletingWord(w.word);
      const prev = words;
      setWords((cur) => (cur ? cur.filter((x) => x.id !== w.id) : cur)); // optimistic
      try {
        await apiDelete(
          `/api/vocab?deviceId=${encodeURIComponent(deviceId)}&word=${encodeURIComponent(w.word)}`
        );
        toast({
          title: t("toast.deleted", { word: w.word }),
          action: (
            <ToastAction altText={t("toast.undo")} onClick={() => undoDelete(w)}>
              ↩ {t("toast.undo")}
            </ToastAction>
          ),
        });
      } catch (e) {
        setWords(prev ?? null); // rollback on failure
        toast({
          title: t("toast.deleteFailed"),
          description: (e as Error).message,
          variant: "destructive",
        });
      } finally {
        setDeletingWord(null);
      }
    },
    [deviceId, deletingWord, words, toast, t, undoDelete]
  );

  const tabTrigger =
    "h-10 gap-1.5 rounded-xl text-xs font-semibold data-[state=active]:bg-card data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm dark:data-[state=active]:text-emerald-300 sm:text-sm";

  return (
    <section aria-label={t("aria.section")} className="space-y-4">
      <SectionHeader
        icon={LibraryBig}
        title={t("title")}
        subtitle={t("subtitle")}
        tint="emerald"
      />

      <Tabs value={tab} onValueChange={(v) => setTab(v as VocabTab)} className="gap-4">
        <TabsList className="grid h-12 w-full grid-cols-3 gap-1 rounded-2xl bg-muted/70 p-1">
          <TabsTrigger value="daily" className={tabTrigger}>
            <CalendarDays className="h-4 w-4" aria-hidden />
            {t("tabs.daily")}
          </TabsTrigger>
          <TabsTrigger value="wordbook" className={tabTrigger}>
            <BookMarked className="h-4 w-4" aria-hidden />
            {t("tabs.wordbook")}
          </TabsTrigger>
          <TabsTrigger value="quiz" className={tabTrigger}>
            <Target className="h-4 w-4" aria-hidden />
            {t("tabs.quiz")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="mt-0">
          <DailyWordsTab
            deviceId={deviceId}
            hasKey={hasKey}
            deviceLoaded={loaded}
            isSaved={isSaved}
            onSave={handleSave}
            savingWord={savingWord}
            onGoQuiz={() => setTab("quiz")}
          />
        </TabsContent>

        <TabsContent value="wordbook" className="mt-0">
          <WordbookTab
            deviceId={deviceId}
            words={words}
            error={wbError}
            onRetry={refreshWordbook}
            onDelete={handleDelete}
            deletingWord={deletingWord}
            isSaved={isSaved}
            onSave={handleSave}
            savingWord={savingWord}
            onGoDaily={() => setTab("daily")}
          />
        </TabsContent>

        <TabsContent value="quiz" className="mt-0">
          <QuizTab deviceId={deviceId} words={words} onGoWordbook={() => setTab("wordbook")} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
