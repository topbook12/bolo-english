import crypto from "crypto";
import { db } from "@/lib/db";

// ─── Referral codes (D41, ROADMAP-60) ───────────────────────────────────────
// A referral code is a DETERMINISTIC, derivable key for a user account:
//     code = "R" + 7 chars of SHA-256(userId + ":bolo-ref"), base31-ish
// No DB write is needed to derive or verify a code — the same user always
// maps to the same code. The alphabet drops I/L/O/0/1 so a code read aloud
// or typed from a screenshot is unambiguous (same idea as the certificate
// verify codes).
//
// Reversing (code → userId) is impossible by design (one-way hash), so the
// claim flow resolves codes through a small in-memory index built from the
// User table (see userIdForCode below).

/** No I/L/O/0/1 — 31 unambiguous characters. */
export const REFERRAL_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

const SALT = ":bolo-ref";
const CODE_LENGTH = 7; // "R" + 7 = 8 chars total

/**
 * Deterministic referral code for a user account. Same id → same code,
 * forever, on every server instance (pure function of the id).
 */
export function referralCodeFor(userId: string): string {
  const digest = crypto.createHash("sha256").update(userId + SALT).digest();
  let out = "R";
  for (let i = 0; i < CODE_LENGTH; i++) {
    // Byte % 31 has a tiny modulo bias — irrelevant for an invite key
    // (not a security token); 31^7 ≈ 27.5 billion codes makes collisions
    // between real users practically impossible.
    out += REFERRAL_ALPHABET[digest[i] % REFERRAL_ALPHABET.length];
  }
  return out;
}

/** Loose gate before any DB work: starts with "R", total length 8, alphabet only. */
export function isValidReferralCodeFormat(code: string): boolean {
  if (typeof code !== "string") return false;
  const c = code.trim().toUpperCase();
  if (c.length !== CODE_LENGTH + 1 || c[0] !== "R") return false;
  for (let i = 1; i < c.length; i++) {
    if (!REFERRAL_ALPHABET.includes(c[i])) return false;
  }
  return true;
}

/* ── code → userId index ─────────────────────────────────────────────────────
 * TRADEOFF (documented): codes are one-way hashes of userId, so resolving a
 * code needs the full id list. We build a Map<code, userId> from ONE
 * db.user.findMany (≤5000 users — trivially fast at SQLite scale) and cache
 * it for 10 minutes per server instance. This needs NO schema change and no
 * stored mapping; the cost is O(users) once per 10 min. A miss triggers one
 * forced rebuild (a user may have signed up after the snapshot was taken);
 * a second miss is final → the caller 404s.
 * Collisions (two users → one code) would last-write-win in the map; at
 * 31^7 space this is practically impossible and benign (invite still works,
 * just attributes to one account). */

const INDEX_TTL_MS = 10 * 60 * 1000;
const INDEX_MAX_USERS = 5000;

let codeIndex: Map<string, string> | null = null;
let codeIndexAt = 0;
let indexBuild: Promise<Map<string, string>> | null = null;

async function buildIndex(): Promise<Map<string, string>> {
  const users = await db.user.findMany({
    select: { id: true },
    take: INDEX_MAX_USERS,
    orderBy: { createdAt: "asc" }, // stable snapshot: oldest accounts win a collision
  });
  const map = new Map<string, string>();
  for (const u of users) map.set(referralCodeFor(u.id), u.id);
  return map;
}

/** Rebuild the index at most once concurrently; coalesces parallel misses. */
function rebuildIndex(): Promise<Map<string, string>> {
  if (!indexBuild) {
    indexBuild = buildIndex()
      .then((m) => {
        codeIndex = m;
        codeIndexAt = Date.now();
        return m;
      })
      .finally(() => {
        indexBuild = null;
      });
  }
  return indexBuild;
}

/**
 * Resolve a referral code to its inviter's userId (or null = unknown code).
 * Cached 10 minutes; a fresh miss forces ONE rebuild before giving up.
 * Throws on DB failure — callers turn that into their 503 path.
 */
export async function userIdForCode(code: string): Promise<string | null> {
  const normalized = code.trim().toUpperCase();
  if (!isValidReferralCodeFormat(normalized)) return null;

  if (!codeIndex || Date.now() - codeIndexAt > INDEX_TTL_MS) {
    await rebuildIndex();
  }
  const hit = codeIndex?.get(normalized);
  if (hit) return hit;

  // Miss on a fresh-enough snapshot → rebuild ONCE (new signup since the
  // snapshot), retry, then give up (the code simply doesn't exist).
  await rebuildIndex();
  return codeIndex?.get(normalized) ?? null;
}
