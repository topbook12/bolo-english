"use client";

/* ─── Referral client helpers (D41 fix — capture BEFORE login) ───────────────
 * BUG this module fixes: ReferralCard only mounts inside the Community
 * section, so a friend landing on `/?ref=CODE` while signed OUT (LoginGate
 * visible) never captured the code — after registering, the claim silently
 * never fired and the referral was lost.
 *
 * Now the capture is idempotent + available everywhere:
 *   • LoginGate banner calls captureRefFromUrl() — saves `bolo_ref` and
 *     cleans the URL even for signed-out visitors.
 *   • RefCapture (AppShell, mode "claim") auto-claims the stored code the
 *     moment a session exists — no Community visit required.
 * The server's unique inviteeUserId + one-claim guards stay the source of
 * truth; these helpers only avoid noisy double POSTs. */

export const REF_KEY = "bolo_ref";

// Client-side mirror of isValidReferralCodeFormat in src/lib/referral.ts —
// that lib imports node:crypto + Prisma, so it can't enter the client bundle.
const REFERRAL_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

export function isValidCodeFormat(code: string): boolean {
  if (code.length !== 8 || code[0] !== "R") return false;
  for (let i = 1; i < 8; i++) if (!REFERRAL_ALPHABET.includes(code[i])) return false;
  return true;
}

/** Stored pending code (validated) or null. */
export function readPendingRef(): string | null {
  try {
    const stored = localStorage.getItem(REF_KEY);
    return stored && isValidCodeFormat(stored) ? stored : null;
  } catch {
    return null; // private mode / storage blocked
  }
}

export function savePendingRef(code: string): void {
  try {
    localStorage.setItem(REF_KEY, code);
  } catch {
    /* storage blocked — invite flow just stays hidden */
  }
}

export function clearPendingRef(code?: string): void {
  try {
    if (!code || localStorage.getItem(REF_KEY) === code) localStorage.removeItem(REF_KEY);
  } catch {
    /* ignore */
  }
}

/** Pull `?ref=CODE` from the URL once: validate → save → strip the param.
 *  Returns the captured (or already-stored) code. Idempotent — safe to call
 *  from multiple components on the same page. */
export function captureRefFromUrl(): string | null {
  try {
    const url = new URL(window.location.href);
    const raw = url.searchParams.get("ref");
    if (raw) {
      const code = raw.trim().toUpperCase();
      if (isValidCodeFormat(code)) savePendingRef(code);
      url.searchParams.delete("ref");
      window.history.replaceState(null, "", url.toString());
      return readPendingRef();
    }
  } catch {
    /* ignore */
  }
  return readPendingRef();
}

export interface ClaimOutcome {
  /** true = claimed now (welcome toast justified). */
  claimed: boolean;
  /** XP actually granted to the invitee (0 when capped server-side). */
  granted: number;
  inviterName: string;
}

/** One auto-claim attempt per page load (StrictMode double-mount guard). */
let claimInFlight = false;

/** Claim the stored ref for the CURRENT session. Resolution contract:
 *  success/definitive-failure (400/404/409) → the stored code is dropped;
 *  5xx / network failure → the code stays for a retry on a later visit. */
export async function claimPendingRef(deviceId: string): Promise<ClaimOutcome | null> {
  const code = readPendingRef();
  if (!code || claimInFlight) return null;
  claimInFlight = true;
  try {
    const res = await fetch("/api/referral", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, deviceId }),
    });
    const json = (await res.json().catch(() => null)) as {
      ok?: boolean;
      data?: { ok?: boolean; xpInvitee?: number; invitedName?: string };
    } | null;
    if (res.ok && json?.ok) {
      clearPendingRef(code);
      return {
        claimed: true,
        granted: json.data?.xpInvitee ?? 0,
        inviterName: json.data?.invitedName ?? "",
      };
    }
    if (res.status === 400 || res.status === 404 || res.status === 409) {
      clearPendingRef(code); // invalid / not found / self / already claimed — drop
      return null;
    }
    return null; // 5xx — keep stored for retry
  } catch {
    return null; // network — retry on a later mount
  } finally {
    claimInFlight = false;
  }
}
