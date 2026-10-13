"use client";

import { useEffect, useState, useCallback, useRef } from "react";

// Registers the service worker + exposes the PWA install prompt.

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: string }>;
}

export function usePwaInstall() {
  const [canInstall, setCanInstall] = useState(false);
  const promptEventRef = useRef<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      promptEventRef.current = e as BeforeInstallPromptEvent;
      setCanInstall(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const promptInstall = useCallback(async () => {
    const ev = promptEventRef.current;
    if (!ev) return;
    ev.prompt();
    await ev.userChoice;
    promptEventRef.current = null;
    setCanInstall(false);
  }, []);

  return { canInstall, promptInstall };
}

export default function PwaRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    // Development: never register a SW (it would cache dev chunks and break
    // hot reload) and clean up any previously registered one.
    if (process.env.NODE_ENV !== "production") {
      navigator.serviceWorker.getRegistrations().then((regs) => {
        for (const r of regs) void r.unregister();
      }).catch(() => null);
      return;
    }

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => null);
    };
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);
  return null;
}
