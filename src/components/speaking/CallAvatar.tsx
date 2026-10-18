"use client";

import { cn } from "@/lib/utils";

/* Native-dialer style avatar.
 * A gradient disc carrying the caller's initial (or an emoji), wrapped in
 * three staggered ripple rings while the call is dialing/waiting — the same
 * visual signature as the mobile phone app when you call someone.
 * Purely presentational; safe anywhere on the dark call stage. */
export default function CallAvatar({
  name,
  size = 128,
  ringing = false,
  emoji,
  className,
}: {
  name: string;
  /** Diameter in px (also scales the initial + ripple spread). */
  size?: number;
  /** Show the expanding ripple rings (connecting / waiting state). */
  ringing?: boolean;
  /** Optional emoji instead of the initial (e.g. 🤖 for the AI partner). */
  emoji?: string;
  className?: string;
}) {
  const initial = (name.trim()[0] ?? "?").toUpperCase();
  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {ringing && (
        <>
          <span className="call-ripple" />
          <span className="call-ripple [animation-delay:0.9s]" />
          <span className="call-ripple [animation-delay:1.8s]" />
        </>
      )}
      <div
        className="absolute inset-0 grid place-items-center rounded-full font-bold text-white ring-1 ring-white/25"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.66 0.13 172), oklch(0.52 0.12 205) 60%, oklch(0.48 0.11 250))",
          boxShadow:
            "0 18px 44px oklch(0.3 0.08 190 / 0.45), inset 0 1px 0 oklch(1 0 0 / 0.25)",
          fontSize: Math.round(size * 0.38),
          lineHeight: 1,
        }}
      >
        {emoji ?? initial}
      </div>
    </div>
  );
}

/** Small inline voice equalizer — the "this person is speaking" signature. */
export function VoiceEq({ className }: { className?: string }) {
  return (
    <span className={cn("call-eq", className)} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}
