import "server-only";
import { db } from "./db";
import { getSessionUser } from "./auth";
import { encryptKey, tryDecryptKey } from "./crypto";
import { resolveConfigRow } from "./user-config";

/* ── Multi-key Gemini pool (owner requirement) ─────────────────────────────
 * Users can save SEVERAL Gemini API keys per account. When the active key
 * hits its quota (429) the AI layer cools that key down and transparently
 * continues with the next healthy one — the user never notices.
 *
 * Resolution order (getActiveKey):
 *   1. Logged in + pool rows exist → first HEALTHY row (sortOrder asc),
 *      decrypted with tryDecryptKey (multi-secret self-healing).
 *   2. ALL rows in cooldown → the row whose cooldown ends SOONEST
 *      (graceful degradation: a maybe-recovered key beats no key at all).
 *   3. Pool empty, unreadable ciphertexts, Prisma error (e.g. the table
 *      missing on a not-yet-migrated production DB) or guest → the legacy
 *      single-key path (resolveConfigRow + its self-healing wipe) — the
 *      exact pre-pool behavior.
 *
 * Keys are AES-256-GCM encrypted at rest and NEVER leave the server raw;
 * /api/config only ever returns masked previews (keyPreview) to the browser. */

export const MAX_POOL_KEYS = 6;
export const DEFAULT_COOLDOWN_HOURS = 2;

export type KeySource = "pool" | "legacy";

export interface ActiveKey {
  key: string | null;
  source: KeySource;
  /** Pool row the key came from (undefined for the legacy path). */
  rowId?: string;
  /** Legacy path only: a row existed but no secret could open it (wiped). */
  unreadable?: boolean;
}

/** Minimal shape the selection helpers need (Prisma UserApiKey row fits). */
export interface PoolRowLike {
  id: string;
  apiKeyEnc: string;
  cooldownUntil: Date | null;
}

/** A row is healthy when it isn't inside a quota cooldown window. */
function isHealthy(r: PoolRowLike, now: number): boolean {
  return !r.cooldownUntil || r.cooldownUntil.getTime() <= now;
}

/**
 * Pure selection: given pool rows (already ordered by sortOrder), return the
 * rows in the order they should be tried — healthy rows first (sortOrder
 * order); when EVERY row is cooling down, ordered by soonest cooldown expiry
 * (graceful degradation instead of a hard failure). Exported for QA tests.
 */
export function orderPoolCandidates<T extends PoolRowLike>(rows: T[], now = Date.now()): T[] {
  const healthy = rows.filter((r) => isHealthy(r, now));
  if (healthy.length > 0) return healthy;
  return [...rows].sort(
    (a, b) => (a.cooldownUntil?.getTime() ?? 0) - (b.cooldownUntil?.getTime() ?? 0)
  );
}

/** First candidate of orderPoolCandidates (null when the pool is empty). */
export function pickPoolKey<T extends PoolRowLike>(rows: T[], now = Date.now()): T | null {
  return orderPoolCandidates(rows, now)[0] ?? null;
}

/**
 * Put a pool key into cooldown after a quota/rate-limit failure (2h default).
 * Fire-and-forget: callers do `void cooldownKey(...)` — bookkeeping must
 * never fail an AI call. The returned promise never rejects (errors are only
 * logged), so awaiting it in tests is also safe.
 */
export function cooldownKey(rowId: string, hours = DEFAULT_COOLDOWN_HOURS): Promise<void> {
  const until = new Date(Date.now() + hours * 60 * 60 * 1000);
  return db.userApiKey
    .update({
      where: { id: rowId },
      data: { failures: { increment: 1 }, cooldownUntil: until },
    })
    .then(() => undefined)
    .catch((e: unknown) => {
      console.warn(`[key-pool] cooldown update failed for row ${rowId}:`, e);
    });
}

/* ── Legacy single-key read (self-healing) ──────────────────────────────────
 * Lives here — not in gemini.ts — so BOTH the legacy getter and the pool
 * fallback share one implementation. Behavior is identical to the historic
 * getUserApiKey:
 *   - ciphertext written under an older secret → re-encrypted under the
 *     current secret (one-time migration),
 *   - unrecoverable ciphertext → wiped so Settings stops showing "saved"
 *     for a key that can never decrypt again (unreadable: true, so callers
 *     can keep raising the distinct keyUnreadable error). */
export interface LegacyKeyResult {
  key: string | null;
  /** A row existed but no secret could open it — it was wiped above. */
  unreadable: boolean;
}

export async function legacyActiveKey(deviceId: string): Promise<LegacyKeyResult> {
  const cfg = await resolveConfigRow(deviceId);
  if (!cfg || !cfg.apiKeyEnc) return { key: null, unreadable: false };
  const att = tryDecryptKey(cfg.apiKeyEnc);
  if (att.key) {
    if (!att.primary) {
      const reenc = encryptKey(att.key);
      await db.userConfig
        .update({ where: { id: cfg.id }, data: { apiKeyEnc: reenc } })
        .catch(() => null);
      console.log(
        `[ai] key row ${cfg.id} re-encrypted under current secret (legacy secret matched)`
      );
    }
    return { key: att.key, unreadable: false };
  }
  console.error(
    `[ai] key row ${cfg.id} UNREADABLE (${att.reason}) — wiping broken ciphertext, user must re-save`
  );
  await db.userConfig
    .update({ where: { id: cfg.id }, data: { apiKeyEnc: "", keyPreview: "" } })
    .catch(() => null);
  return { key: null, unreadable: true };
}

/**
 * Resolve the usable Gemini key for the caller.
 * Logged-in users get their pool key when one exists; guests (and every
 * degraded case above) get the legacy single-key result. Never throws —
 * callers turn `key === null` into their own "no key" error.
 */
export async function getActiveKey(deviceId: string): Promise<ActiveKey> {
  const user = await getSessionUser();
  if (user) {
    try {
      const rows = await db.userApiKey.findMany({
        where: { userId: user.id },
        orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
      });
      if (rows.length > 0) {
        const now = Date.now();
        // Walk candidates in order: a row whose ciphertext can't be opened
        // any more (env rotated past every known secret) must not take the
        // whole pool down — skip it and try the next key.
        for (const row of orderPoolCandidates(rows, now)) {
          const att = tryDecryptKey(row.apiKeyEnc);
          if (att.key) {
            if (!att.primary) {
              // Heal rows written under an older secret (same as legacy).
              const reenc = encryptKey(att.key);
              await db.userApiKey
                .update({ where: { id: row.id }, data: { apiKeyEnc: reenc } })
                .catch(() => null);
              console.log(`[key-pool] row ${row.id} re-encrypted under current secret`);
            }
            return { key: att.key, source: "pool", rowId: row.id };
          }
          console.warn(
            `[key-pool] row ${row.id} unreadable (${att.reason}) — skipping to the next pool key`
          );
        }
        // No pool ciphertext could be opened → legacy path below.
      }
    } catch (e) {
      // Prisma error (table missing on a not-yet-migrated production DB,
      // connection blip, stale client build) → degrade silently to legacy.
      console.warn(
        "[key-pool] pool lookup failed — falling back to the legacy key:",
        (e as Error)?.message ?? e
      );
    }
  }
  const legacy = await legacyActiveKey(deviceId);
  return { key: legacy.key, source: "legacy", unreadable: legacy.unreadable };
}
