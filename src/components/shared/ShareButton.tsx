"use client";

// D48 share-cards — one share button everywhere.
//
// Primary path is the Web Share API (native sheet on Android/iOS — the way
// WhatsApp users actually share). On desktop browsers without navigator.share
// it falls back to a clipboard copy with a toast, so the button NEVER
// dead-ends. All display strings come in as props: the public SEO pages are
// Bengali-first hardcoded, in-app callers pass next-intl strings.

import { useCallback, useState } from "react";
import { Check, Loader2, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ShareButtonProps {
  /** Shared link (absolute). */
  url: string;
  /** Native share-sheet title. */
  title: string;
  /** Optional body text shown above the link in the share sheet. */
  text?: string;
  /** Button label. */
  label: string;
  /** Toast when the link is copied (no navigator.share available). */
  copiedLabel: string;
  /** Toast when even the clipboard fails. */
  errorLabel: string;
  className?: string;
}

export default function ShareButton({
  url,
  title,
  text,
  label,
  copiedLabel,
  errorLabel,
  className,
}: ShareButtonProps) {
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const onShare = useCallback(async () => {
    setBusy(true);
    try {
      // cast keeps the else branch type-safe: share() is optional at RUNTIME
      // (older desktop browsers) even though lib.dom types it as present.
      const share = (navigator as { share?: (d: ShareData) => Promise<void> }).share;
      if (typeof share === "function") {
        await share.call(navigator, { title, text, url });
        return; // sheet closed after share (or user cancelled — nothing to do)
      }
      // clipboard fallback (desktop)
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: copiedLabel });
      window.setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // user cancelled the native sheet — silently fine
      if (e instanceof DOMException && e.name === "AbortError") return;
      try {
        // last resort: clipboard may still work even when share() threw
        await navigator.clipboard.writeText(url);
        toast({ title: copiedLabel });
      } catch {
        toast({ title: errorLabel, variant: "destructive" });
      }
    } finally {
      setBusy(false);
    }
  }, [url, title, text, copiedLabel, errorLabel]);

  return (
    <button
      type="button"
      onClick={onShare}
      disabled={busy}
      aria-label={label}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:border-emerald-400 hover:text-emerald-700 disabled:opacity-60 dark:hover:text-emerald-400",
        className
      )}
    >
      {busy ? (
        <Loader2 className="size-4 animate-spin" aria-hidden />
      ) : copied ? (
        <Check className="size-4 text-emerald-600 dark:text-emerald-400" aria-hidden />
      ) : (
        <Share2 className="size-4" aria-hidden />
      )}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
