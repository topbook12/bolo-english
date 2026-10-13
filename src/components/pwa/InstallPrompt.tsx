"use client";

import { useCallback, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePwaInstall } from "@/components/pwa/PwaRegister";

// Floating "Install the app" prompt (requirement: the install icon should
// surface on first use / whenever the app isn't installed yet).
//
// Rules:
//  - never renders during SSR/hydration — every gate is a useSyncExternalStore
//    probe with a false/“not dismissed” server snapshot, and the browser
//    install event only ever fires after mount;
//  - hides when the PWA already runs in standalone mode;
//  - Android/desktop → uses the captured `beforeinstallprompt` event;
//  - iOS Safari (no beforeinstallprompt) → shows the Add-to-Home-Screen hint;
//  - "Later" hides it for 3 days (localStorage), X hides it for the session.

const DISMISS_KEY = "bolo_pwa_install_dismissed_at";
const DISMISS_MS = 3 * 86_400_000;

const subscribeNoop = () => () => undefined;

/* ── standalone probe ── */
const standaloneSnapshot = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as unknown as { standalone?: boolean }).standalone === true);
const standaloneServerSnapshot = () => false;

/* ── iOS Safari probe (no beforeinstallprompt there) ── */
const iosSnapshot = () =>
  typeof window !== "undefined" &&
  (/iphone|ipad|ipod/i.test(window.navigator.userAgent) ||
    (/Macintosh/.test(window.navigator.userAgent) && "ontouchend" in document));
const iosServerSnapshot = () => false;

/* ── dismissal store: "none" | "session" | "days" (primitive snapshots) ── */
type DismissScope = "none" | "session" | "days";
let dismissScope: DismissScope | null = null; // null → not read yet
let sessionDismissed = false;
const dismissListeners = new Set<() => void>();

function notifyDismiss() {
  dismissListeners.forEach((cb) => cb());
}

const subscribeDismiss = (cb: () => void) => {
  dismissListeners.add(cb);
  return () => {
    dismissListeners.delete(cb);
  };
};

const dismissSnapshot = (): DismissScope => {
  if (typeof window === "undefined") return "none";
  if (sessionDismissed) return "session";
  if (dismissScope === null) {
    try {
      const at = Number(window.localStorage.getItem(DISMISS_KEY) ?? "0");
      dismissScope = Date.now() - at < DISMISS_MS ? "days" : "none";
    } catch {
      dismissScope = "none";
    }
  }
  return dismissScope;
};

const dismissServerSnapshot = (): DismissScope => "none";

const dismissFor = (scope: Exclude<DismissScope, "none">) => {
  if (scope === "session") {
    sessionDismissed = true;
  } else {
    dismissScope = "days";
    try {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* private mode — session-only anyway */
    }
  }
  notifyDismiss();
};

export default function InstallPrompt() {
  const t = useTranslations("common.install");
  const { canInstall, promptInstall } = usePwaInstall();
  const standalone = useSyncExternalStore(
    subscribeNoop,
    standaloneSnapshot,
    standaloneServerSnapshot
  );
  const isIos = useSyncExternalStore(subscribeNoop, iosSnapshot, iosServerSnapshot);
  const dismissed = useSyncExternalStore(
    subscribeDismiss,
    dismissSnapshot,
    dismissServerSnapshot
  );

  const onLater = useCallback(() => dismissFor("days"), []);
  const onClose = useCallback(() => dismissFor("session"), []);

  // Show when: app not installed, user hasn't dismissed, and either the
  // browser fired beforeinstallprompt OR it's iOS Safari (hint instead).
  const show = !standalone && dismissed === "none" && (canInstall || isIos);
  if (!show) return null;

  return (
    <div
      role="complementary"
      aria-label={t("title")}
      className="animate-fade-in-up fixed inset-x-3 bottom-[74px] z-50 md:inset-x-auto md:bottom-5 md:right-5 md:w-80"
    >
      <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/95 p-3.5 shadow-xl backdrop-blur-md">
        <span
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-lg font-black text-white shadow-md"
        >
          B
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold leading-tight">{t("title")}</p>
          {canInstall ? (
            <>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{t("desc")}</p>
              <div className="mt-2 flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => void promptInstall()}
                  className="btn-shine h-9 gap-1.5 rounded-xl px-3"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden /> {t("cta")}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={onLater}
                  className="h-9 rounded-xl px-3 text-muted-foreground"
                >
                  {t("later")}
                </Button>
              </div>
            </>
          ) : (
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t("iosHint")}</p>
          )}
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors after:absolute after:-inset-1.5 after:content-[''] hover:bg-accent"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
