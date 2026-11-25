"use client";

import { Mic } from "lucide-react";
import { VoiceEq } from "@/components/speaking/CallAvatar";

/* ── LiveSubtitleBar — WhatsApp-dictation-style live captions ────────────────
 * The "speak → words appear on screen" surface for the AI-partner chat (and
 * any parent that owns a speech engine). Mirrors the phone-dictation feel:
 *
 *   [ (mic) ● লাইভ ▁▃▅▃ ]
 *   I went to the market <and bought…>   ← final (muted) + interim (bold, caret)
 *
 * • `interim` re-renders on every recognition result — the same engine that
 *   powers WhatsApp's voice typing (Web Speech API), so on Android Chrome the
 *   words appear WHILE the learner is still speaking.
 * • `lastFinal` keeps the previous completed sentence visible (muted) so the
 *   learner can re-read it while the next one is forming.
 * • Empty state shows the localized "listening…" hint with breathing dots.
 * • Push-to-talk parents (browsers without the Web Speech API) reuse the same
 *   bar: `live=false` + `hint=processing label` while /api/stt transcribes.
 * Purely presentational — zero state of its own; the parent owns the engine. */
export default function LiveSubtitleBar({
  open,
  live,
  interim,
  lastFinal,
  hint,
  liveLabel,
  ariaLabel,
}: {
  /** Render at all (parent: listening || ptt active). */
  open: boolean;
  /** Active capture signature: pinging mic + eq bars + LIVE badge. */
  live: boolean;
  /** In-flight partial transcript (updates as the learner speaks). */
  interim: string;
  /** Most recent completed sentence (kept visible, muted). */
  lastFinal: string;
  /** Empty-state hint ("শুনছি…" / "লেখা হচ্ছে…"). */
  hint: string;
  /** Badge text ("লাইভ"). */
  liveLabel: string;
  /** Screen-reader label for the whole region. */
  ariaLabel: string;
}) {
  if (!open) return null;
  const hasText = !!(lastFinal || interim);
  return (
    <div
      role="status"
      aria-label={ariaLabel}
      aria-live="polite"
      className="relative overflow-hidden rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-transparent px-3.5 py-2.5 shadow-sm"
    >
      <div className="flex items-start gap-2.5">
        {/* pulsing mic signature */}
        <span className="relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white shadow-sm">
          {live && (
            <span
              className="absolute inset-0 animate-ping rounded-full bg-rose-400/50"
              aria-hidden="true"
            />
          )}
          <Mic className="relative h-4 w-4" aria-hidden="true" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="flex items-center gap-1 rounded-full bg-rose-500/90 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
              <span
                className="h-1 w-1 animate-pulse rounded-full bg-white"
                aria-hidden="true"
              />
              {liveLabel}
            </span>
            {live && <VoiceEq className="h-3 text-rose-600 dark:text-rose-400" />}
          </div>

          {hasText ? (
            <p className="mt-1 leading-relaxed">
              {lastFinal && (
                <span className="mr-1.5 text-[13px] text-muted-foreground">{lastFinal}</span>
              )}
              <span className="text-[15px] font-semibold text-foreground">
                {interim}
                {live && interim && (
                  <span
                    className="ml-0.5 inline-block h-4 w-[2px] animate-pulse rounded bg-rose-500 align-middle"
                    aria-hidden="true"
                  />
                )}
              </span>
            </p>
          ) : (
            <p className="mt-1 flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground">
              <span>{hint}</span>
              {live && (
                <>
                  <span
                    className="h-1 w-1 animate-pulse rounded-full bg-rose-500/70"
                    aria-hidden="true"
                  />
                  <span
                    className="h-1 w-1 animate-pulse rounded-full bg-rose-500/70 [animation-delay:150ms]"
                    aria-hidden="true"
                  />
                  <span
                    className="h-1 w-1 animate-pulse rounded-full bg-rose-500/70 [animation-delay:300ms]"
                    aria-hidden="true"
                  />
                </>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
