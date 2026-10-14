"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useToast } from "@/hooks/use-toast";

/**
 * One-click owner setup. Visiting the site with
 *   /?setup_admin=<token>
 * saves the admin token into localStorage (the same key every admin card
 * reads) and silently cleans the URL, so the owner never has to touch the
 * Vercel dashboard or paste anything by hand. Normal visitors without the
 * query parameter are completely unaffected (this component renders null).
 */
export default function AdminSetupCapture() {
  const { toast } = useToast();
  const t = useTranslations("settings.studio");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("setup_admin");
    if (!token) return;

    // Strip the secret from the address bar immediately.
    const clean = new URL(window.location.href);
    clean.searchParams.delete("setup_admin");
    window.history.replaceState({}, "", clean.toString());

    let saved = false;
    try {
      window.localStorage.setItem("bolo.storageAdmin", token);
      saved = true;
    } catch {
      // storage unavailable (e.g. private mode) — nothing to save
    }
    if (saved) toast({ title: t("setupUnlocked") });
  }, [toast, t]);

  return null;
}
