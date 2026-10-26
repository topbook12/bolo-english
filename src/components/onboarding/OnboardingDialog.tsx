"use client";

// ─── Onboarding widget (D10, ROADMAP-60.md) ─────────────────────────────────
// Shown ONCE per device, right after the first login/registration (roadmap:
// "রেজিস্টারের পর"). Three short steps:
//   1. GOAL         — job / exam / travel / school / general (feeds D9 plan)
//   2. DAILY TARGET — 5 / 10 / 20 minutes a day (feeds D11 streaks)
//   3. LEVEL TEST   — jump into the D8 placement test (or skip)
// Language is intentionally NOT a step: it is locked at signup (signup gate).
//
// Completion state lives in localStorage ("bolo_onboarded") — device-scoped
// by design, so a fresh device of the same account is offered onboarding
// once too. Nothing here is a paywall or a blocker: skipping is always one
// tap, and the dialog never re-appears after finish/skip.

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Briefcase,
  Building2,
  CalendarClock,
  Check,
  GraduationCap,
  Gauge,
  Globe2,
  PartyPopper,
  Plane,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDevice, getDeviceId } from "@/hooks/use-device";
import { useAuth } from "@/hooks/use-auth";
import { track } from "@/lib/track";
import { PATH_GOALS, type GoalId } from "@/lib/path-plan";
import PlacementTest from "@/components/placement/PlacementTest";
import { cn } from "@/lib/utils";

const FLAG = "bolo_onboarded";
const TARGETS = [5, 10, 20] as const;
type Step = "goal" | "target" | "test" | "done";

const GOAL_ICON: Record<GoalId, React.ComponentType<{ className?: string }>> = {
  general: Globe2,
  job: Briefcase,
  exam: GraduationCap,
  travel: Plane,
  school: Building2,
};

export function isOnboarded(): boolean {
  if (typeof window === "undefined") return true;
  return localStorage.getItem(FLAG) === "1";
}

export default function OnboardingDialog() {
  const t = useTranslations("onboarding");
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("goal");
  const [goal, setGoal] = useState<GoalId>("general");
  const [target, setTarget] = useState<number>(10);
  const [placing, setPlacing] = useState(false);
  // Only values EXPLICITLY chosen during this run are persisted — a skip on
  // step 1/2 must never overwrite an existing config with defaults.
  const [goalPicked, setGoalPicked] = useState(false);
  const [targetPicked, setTargetPicked] = useState(false);

  const user = useAuth((s) => s.user);
  const loaded = useAuth((s) => s.loaded);

  // Open once, when the user is signed in and this device hasn't onboarded.
  // queueMicrotask keeps setState out of the effect body (no cascading
  // renders — the same pattern PathSection uses for its loaders).
  useEffect(() => {
    if (!loaded || !user) return;
    if (isOnboarded()) return;
    queueMicrotask(() => {
      // Pre-select what the account already has (a returning user on a new
      // device sees their goal/target instead of the defaults).
      const st = useDevice.getState();
      if (st.goal) setGoal(st.goal);
      if (typeof st.dailyTarget === "number") setTarget(st.dailyTarget);
      setStep("goal");
      setOpen(true);
    });
  }, [loaded, user]);

  const finish = useCallback(
    (placed: boolean) => {
      setOpen(false);
      setPlacing(false);
      try {
        localStorage.setItem(FLAG, "1");
      } catch {
        /* private mode — dialog may reappear next visit; harmless */
      }
      // Persist ONLY what the learner actually picked (fire-and-forget).
      const deviceId = getDeviceId();
      if (deviceId && (goalPicked || targetPicked)) {
        fetch("/api/config", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            deviceId,
            ...(goalPicked ? { goal } : {}),
            ...(targetPicked ? { dailyTarget: target } : {}),
          }),
        }).catch(() => null);
      }
      track("onboarding_done", {
        placed: placed ? "yes" : "no",
        target: targetPicked ? String(target) : "unset",
      });
    },
    [goal, target, goalPicked, targetPicked]
  );

  const chooseGoal = (g: GoalId) => {
    setGoal(g);
    setGoalPicked(true);
    useDevice.getState().setConfig({ goal: g });
    setStep("target");
  };

  const chooseTarget = (n: number) => {
    setTarget(n);
    setTargetPicked(true);
    useDevice.getState().setConfig({ dailyTarget: n });
    setStep("test");
  };

  const stepIndex = step === "goal" ? 1 : step === "target" ? 2 : 3;

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (o) return;
        // Closing while mid-test abandons the test (back to step 3) — never
        // traps the user inside. Closing otherwise = skip → mark done.
        if (placing) {
          setPlacing(false);
          return;
        }
        if (step !== "done") finish(false);
      }}
    >
      <DialogContent className="max-h-[90vh] max-w-md overflow-y-auto rounded-2xl">
        {!placing && step !== "done" && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-base">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-sm">
                  {step === "goal" ? (
                    <PartyPopper className="h-4 w-4" aria-hidden />
                  ) : step === "target" ? (
                    <CalendarClock className="h-4 w-4" aria-hidden />
                  ) : (
                    <Gauge className="h-4 w-4" aria-hidden />
                  )}
                </span>
                {step === "goal"
                  ? t("goal.title")
                  : step === "target"
                    ? t("target.title")
                    : t("test.title")}
              </DialogTitle>
              <DialogDescription>
                {step === "goal"
                  ? t("goal.desc")
                  : step === "target"
                    ? t("target.desc")
                    : t("test.desc")}
              </DialogDescription>
            </DialogHeader>

            {/* step dots */}
            <div className="flex items-center gap-1.5" aria-hidden>
              {[1, 2, 3].map((n) => (
                <span
                  key={n}
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-colors",
                    n <= stepIndex ? "bg-sky-500" : "bg-muted"
                  )}
                />
              ))}
            </div>

            {step === "goal" && (
              <div className="space-y-2" role="radiogroup" aria-label={t("goal.title")}>
                {PATH_GOALS.map((g) => {
                  const Icon = GOAL_ICON[g];
                  return (
                    <button
                      key={g}
                      type="button"
                      role="radio"
                      aria-checked={goal === g}
                      onClick={() => chooseGoal(g)}
                      className={cn(
                        "flex min-h-11 w-full items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-sm font-medium transition-all",
                        goal === g
                          ? "border-transparent bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-sm"
                          : "border-border/60 hover:bg-accent"
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" aria-hidden />
                      {t(`goal.${g}`)}
                      {goal === g && <Check className="ml-auto h-4 w-4" aria-hidden />}
                    </button>
                  );
                })}
              </div>
            )}

            {step === "target" && (
              <div className="space-y-2" role="radiogroup" aria-label={t("target.title")}>
                {TARGETS.map((n) => (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={target === n}
                    onClick={() => chooseTarget(n)}
                    className={cn(
                      "flex min-h-12 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all",
                      target === n
                        ? "border-transparent bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-sm"
                        : "border-border/60 hover:bg-accent"
                    )}
                  >
                    <span className="text-lg font-bold">{n}</span>
                    <span className="min-w-0 flex-1 text-sm font-medium">
                      {t("target.minutes")}
                      <span className="block text-xs opacity-80">{t(`target.hint_${n}`)}</span>
                    </span>
                    {target === n && <Check className="h-4 w-4 shrink-0" aria-hidden />}
                  </button>
                ))}
                <Button variant="ghost" size="sm" onClick={() => setStep("goal")} className="min-h-9 text-xs text-muted-foreground">
                  {t("back")}
                </Button>
              </div>
            )}

            {step === "test" && (
              <div className="space-y-3">
                <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5">
                  <p className="text-sm font-semibold">{t("test.cardTitle")}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {t("test.cardBody")}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button
                    onClick={() => setPlacing(true)}
                    className="min-h-11 flex-1 gap-1.5 bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-sm hover:from-sky-600 hover:to-cyan-700"
                  >
                    <Gauge className="h-4 w-4" aria-hidden />
                    {t("test.start")}
                  </Button>
                  <Button variant="outline" onClick={() => finish(false)} className="min-h-11 flex-1">
                    {t("test.skip")}
                  </Button>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setStep("target")} className="min-h-9 text-xs text-muted-foreground">
                  {t("back")}
                </Button>
              </div>
            )}
          </>
        )}

        {placing && (
          <>
            <DialogHeader>
              <DialogTitle>{t("test.placingTitle")}</DialogTitle>
              <DialogDescription>{t("test.placingDesc")}</DialogDescription>
            </DialogHeader>
            <PlacementTest
              onDone={() => {
                setStep("done");
                finish(true);
              }}
            />
          </>
        )}

        {step === "done" && (
          <div className="space-y-3 py-2 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md">
              <PartyPopper className="h-6 w-6" aria-hidden />
            </span>
            <p className="text-sm font-bold">{t("done.title")}</p>
            <p className="text-xs leading-relaxed text-muted-foreground">{t("done.body")}</p>
            <Button onClick={() => finish(true)} className="min-h-11 w-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm hover:from-emerald-600 hover:to-teal-700">
              {t("done.cta")}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
