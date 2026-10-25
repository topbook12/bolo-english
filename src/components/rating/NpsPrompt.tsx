"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Gauge, X, CalendarClock, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NpsForm from "@/components/rating/NpsForm";

// Weekly NPS pulse (D4, ROADMAP-60). A gentle non-modal card that appears at
// most ONCE PER WEEK, only for devices that have been around ≥7 days (fresh
// installs are not asked before they have anything to rate), and can be
// silenced forever — re-enableable from Settings.
//
// State lives in localStorage `bolo_nps`: { first, last, never }.
//   first = first visit (brand-new users wait a week before being asked)
//   last  = last prompt shown / answered → the 7-day gate
//   never = "don't ask again" (Settings can reset it)

const LS_KEY = "bolo_nps";
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
/** Show delay after page load — never interrupt the first seconds. */
const SHOW_DELAY_MS = 12_000;

interface NpsState {
  first: number;
  last: number;
  never: boolean;
}

const EMPTY_NPS_STATE: NpsState = { first: 0, last: 0, never: false };

function parseNpsState(raw: string | null): NpsState {
  if (!raw) return EMPTY_NPS_STATE;
  try {
    const p = JSON.parse(raw) as Partial<NpsState>;
    return {
      first: typeof p.first === "number" ? p.first : 0,
      last: typeof p.last === "number" ? p.last : 0,
      never: p.never === true,
    };
  } catch {
    return EMPTY_NPS_STATE;
  }
}

// ── Tiny external store over the localStorage state ─────────────────────────
// Lets Settings (Rate card) and the floating prompt stay in sync via
// useSyncExternalStore — the established pattern in this codebase
// (see InstallPrompt). Writes notify all subscribers.

const npsListeners = new Set<() => void>();
let npsCache: { raw: string | null; state: NpsState } = {
  raw: null,
  state: EMPTY_NPS_STATE,
};

export function subscribeNps(cb: () => void): () => void {
  npsListeners.add(cb);
  return () => {
    npsListeners.delete(cb);
  };
}

export function getNpsSnapshot(): NpsState {
  const raw =
    typeof window !== "undefined" ? window.localStorage.getItem(LS_KEY) : null;
  if (npsCache.raw !== raw) npsCache = { raw, state: parseNpsState(raw) };
  return npsCache.state;
}

export function getNpsServerSnapshot(): NpsState {
  return EMPTY_NPS_STATE;
}

export function readNpsState(): NpsState {
  if (typeof window === "undefined") return EMPTY_NPS_STATE;
  return parseNpsState(window.localStorage.getItem(LS_KEY));
}

export function writeNpsState(patch: Partial<NpsState>): NpsState {
  const next = { ...readNpsState(), ...patch };
  try {
    window.localStorage.setItem(LS_KEY, JSON.stringify(next));
  } catch {
    /* private mode — in-memory only, prompt simply reappears next visit */
  }
  npsListeners.forEach((l) => l());
  return next;
}

/** True when this device is due a weekly NPS prompt. */
export function isNpsDue(state: NpsState): boolean {
  if (state.never) return false;
  const anchor = Math.max(state.last || state.first, state.first);
  if (!anchor) return false; // no first visit recorded yet
  return Date.now() - anchor >= WEEK_MS;
}

export default function NpsPrompt() {
  const t = useTranslations("rating");
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const state = readNpsState();
    // Record first visit if this is a brand-new device.
    if (!state.first) writeNpsState({ first: Date.now() });
    if (!isNpsDue(state)) return;
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // React to external state changes — e.g. the weekly prompt re-enabled
  // from the Settings "rate us" card while this component stays mounted.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const unsub = subscribeNps(() => {
      if (timer) clearTimeout(timer);
      timer = null;
      if (!visible && isNpsDue(getNpsSnapshot())) {
        timer = setTimeout(() => setVisible(true), 2000);
      }
    });
    return () => {
      unsub();
      if (timer) clearTimeout(timer);
    };
  }, [visible]);

  const dismiss = useCallback((never: boolean) => {
    writeNpsState({ last: Date.now(), ...(never ? { never: true } : {}) });
    setVisible(false);
  }, []);

  const answered = useCallback(() => {
    writeNpsState({ last: Date.now() });
    setDone(true);
    setTimeout(() => setVisible(false), 2500);
  }, []);

  if (!visible) return null;

  return (
    <Card className="fixed bottom-24 left-4 z-40 w-[min(20rem,calc(100vw-5.75rem))] rounded-2xl border-violet-200/70 bg-card/95 shadow-xl shadow-violet-500/10 backdrop-blur-md dark:border-violet-900 md:bottom-24 md:right-6 md:left-auto md:w-80">
      <CardContent className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-sm">
              <Gauge className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">{t("nps.title")}</p>
              <p className="text-[11px] text-muted-foreground">{t("nps.subtitle")}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => dismiss(false)}
            aria-label={t("later")}
            className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>

        {done ? (
          <p className="py-2 text-center text-sm font-medium text-violet-700 dark:text-violet-300">
            {t("thanksFull")}
          </p>
        ) : (
          <>
            <NpsForm onDone={answered} />
            <div className="flex items-center gap-2 border-t border-border/60 pt-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => dismiss(false)}
                className="min-h-8 gap-1 px-2 text-[11px] text-muted-foreground"
              >
                <CalendarClock className="h-3 w-3" aria-hidden />
                {t("later")}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => dismiss(true)}
                className="min-h-8 gap-1 px-2 text-[11px] text-muted-foreground"
              >
                <Ban className="h-3 w-3" aria-hidden />
                {t("never")}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
