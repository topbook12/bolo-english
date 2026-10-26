"use client";

// ─── 7-day mission checklist (D13, ROADMAP-60.md) ───────────────────────────
// The activation ladder for new learners: seven concrete missions that walk
// them through every core surface (test → words → grammar → listen → speak
// → read → come back tomorrow). Progress is DERIVED from the same live
// stores and APIs the rest of the app uses — no new source of truth, so the
// checklist can never lie:
//   1. level test   → localStorage flag set by the D8 PlacementTest
//   2. 10 words     → vocab learned-store ≥ 10
//   3. grammar      → grammar done-topics ≥ 1
//   4. listen       → listening done-ids ≥ 1
//   5. speak        → /api/progress totalSessions ≥ 1
//   6. read         → reading done-ids ≥ 1
//   7. return       → /api/streak last7 has ≥ 2 active days
// Dismissing (X) persists in localStorage; a fully-completed card keeps
// celebrating until dismissed.

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import {
  BadgeCheck,
  BookOpen,
  CircleCheck,
  Circle,
  GraduationCap,
  Headphones,
  Mic,
  LibraryBig,
  Sun,
  Target,
  X,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  getDoneTopicsServerSnapshot,
  getDoneTopicsSnapshot,
  subscribeDoneTopics,
} from "@/components/grammar/shared";
import {
  getDoneIdsServerSnapshot,
  getDoneIdsSnapshot,
  subscribeDoneIds,
} from "@/components/listening/library";
import {
  getDoneIdsServerSnapshot as getReadIdsServerSnapshot,
  getDoneIdsSnapshot as getReadIdsSnapshot,
  subscribeDoneIds as subscribeReadIds,
} from "@/components/reading/reading-store";
import {
  getLearnedWordsServerSnapshot,
  getLearnedWordsSnapshot,
  subscribeLearnedWords,
} from "@/components/vocab/learned-store";
import { apiGet } from "@/lib/client-api";
import { useDeviceValue } from "@/hooks/use-device";
import { cn } from "@/lib/utils";

const HIDDEN = "bolo_missions_hidden";
const PLACEMENT_FLAG = "bolo_placement_done";

interface ProgressData {
  totalSessions: number;
}
interface StreakData {
  last7: ("1" | "0")[];
}

export default function WeekMissionCard() {
  const t = useTranslations("missions");
  const deviceId = useDeviceValue((s) => s.deviceId, "");
  const [hidden, setHidden] = useState(false);
  const [placementDone, setPlacementDone] = useState(false);
  const [sessions, setSessions] = useState<number | null>(null);
  const [returnDays, setReturnDays] = useState<number | null>(null);

  // Live progress stores (hydration-safe — same pattern as PathSection).
  const learned = useSyncExternalStore(
    subscribeLearnedWords,
    getLearnedWordsSnapshot,
    getLearnedWordsServerSnapshot
  );
  const doneTopics = useSyncExternalStore(
    subscribeDoneTopics,
    getDoneTopicsSnapshot,
    getDoneTopicsServerSnapshot
  );
  const doneIds = useSyncExternalStore(
    subscribeDoneIds,
    getDoneIdsSnapshot,
    getDoneIdsServerSnapshot
  );
  const readDone = useSyncExternalStore(
    subscribeReadIds,
    getReadIdsSnapshot,
    getReadIdsServerSnapshot
  );

  // Dismissal + placement flag are client-only. queueMicrotask keeps the
  // setStates out of the effect body (no cascading renders — project rule).
  useEffect(() => {
    queueMicrotask(() => {
      try {
        if (localStorage.getItem(HIDDEN) === "1") setHidden(true);
        if (localStorage.getItem(PLACEMENT_FLAG) === "1") setPlacementDone(true);
      } catch {
        /* private mode — card just stays visible */
      }
    });
  }, []);

  // Speaking + return-day come from the server APIs (already cached-ish —
  // both are tiny GETs and only re-run when the device id appears).
  useEffect(() => {
    if (!deviceId) return;
    apiGet<ProgressData>(`/api/progress?deviceId=${deviceId}`)
      .then((d) => setSessions(d.totalSessions ?? 0))
      .catch(() => setSessions(null));
    apiGet<StreakData>(`/api/streak?deviceId=${deviceId}`)
      .then((d) => setReturnDays((d.last7 ?? []).filter((v) => v === "1").length))
      .catch(() => setReturnDays(null));
  }, [deviceId]);

  const missions = [
    { id: "test", icon: GraduationCap, done: placementDone },
    { id: "words", icon: LibraryBig, done: learned.length >= 10 },
    { id: "grammar", icon: BookOpen, done: doneTopics.length >= 1 },
    { id: "listen", icon: Headphones, done: doneIds.length >= 1 },
    { id: "speak", icon: Mic, done: (sessions ?? 0) >= 1 },
    { id: "read", icon: BookOpen, done: readDone.length >= 1 },
    { id: "return", icon: Sun, done: (returnDays ?? 0) >= 2 },
  ];
  const doneCount = missions.filter((m) => m.done).length;
  const allDone = doneCount === missions.length;

  const dismiss = () => {
    setHidden(true);
    try {
      localStorage.setItem(HIDDEN, "1");
    } catch {
      /* ignore */
    }
  };

  if (hidden) return null;

  return (
    <Card
      className={cn(
        "animate-fade-in-up overflow-hidden",
        allDone
          ? "border-emerald-300/70 bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:border-emerald-900/50 dark:from-emerald-950/30 dark:via-background dark:to-teal-950/20"
          : "border-sky-200/70 bg-gradient-to-br from-sky-50 via-background to-cyan-50 dark:border-sky-900/50 dark:from-sky-950/30 dark:via-background dark:to-cyan-950/20"
      )}
    >
      <CardContent className="space-y-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2.5">
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-sm",
                allDone
                  ? "bg-gradient-to-br from-emerald-500 to-teal-600"
                  : "bg-gradient-to-br from-sky-500 to-cyan-600"
              )}
            >
              {allDone ? <BadgeCheck className="h-5 w-5" aria-hidden /> : <Target className="h-5 w-5" aria-hidden />}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-bold">{t("title")}</p>
              <p className="text-xs text-muted-foreground">
                {allDone ? t("allDone") : t("subtitle", { done: doneCount, total: missions.length })}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={dismiss}
            aria-label={t("hide")}
            className="min-h-8 shrink-0 px-2 text-muted-foreground"
          >
            <X className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <Progress value={(doneCount / missions.length) * 100} className="h-1.5" aria-label={t("title")} />

        <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2" aria-label={t("title")}>
          {missions.map((m) => (
            <li
              key={m.id}
              className={cn(
                "flex min-h-10 items-center gap-2 rounded-xl border px-3 py-2 text-sm",
                m.done
                  ? "border-emerald-300/60 bg-emerald-500/5 dark:border-emerald-800/60"
                  : "border-border/50"
              )}
            >
              {m.done ? (
                <CircleCheck className="h-4.5 w-4.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
              ) : (
                <Circle className="h-4.5 w-4.5 shrink-0 text-muted-foreground/50" aria-hidden />
              )}
              <m.icon className={cn("h-4 w-4 shrink-0", m.done ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground")} aria-hidden />
              <span className={cn("min-w-0 flex-1", m.done && "font-medium text-emerald-900 dark:text-emerald-200")}>
                {t(`items.${m.id}`)}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

