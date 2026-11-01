"use client";

// ─── Offline banner (Backlog A4 — অফলাইন মোড) ───────────────────────────────
// A slim banner under the header that appears ONLY while the browser is
// actually offline (navigator.onLine + online/offline events). The app keeps
// working: the shell is cached, grammar bank + wordbook are device-local,
// and the last copies of the daily words / library are served by the SW.

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CloudOff } from "lucide-react";

export default function OfflineBanner() {
  const t = useTranslations("common.offline");
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const sync = () => setOffline(!navigator.onLine);
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  if (!offline) return null;

  return (
    <div
      role="status"
      className="flex items-center justify-center gap-2 border-b border-amber-500/30 bg-amber-500/15 px-3 py-1.5 text-center text-xs font-medium text-amber-800 dark:text-amber-300"
    >
      <CloudOff className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {t("banner")}
    </div>
  );
}
