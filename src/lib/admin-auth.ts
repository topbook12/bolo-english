import { createHash, timingSafeEqual } from "crypto";

/* ─── Site-owner admin authorization (shared by all admin APIs) ────────────
 * Used by /api/library, /api/storage and /api/turn so the owner configures
 * ONE token for every admin card (Content Studio, Storage Pool, TURN Pool).
 *
 * A token is accepted when it equals one of:
 *   1. The ADMIN_TOKEN or STORAGE_ADMIN_TOKEN environment variable — the
 *      classic way (set it on Vercel to rotate or add another token), OR
 *   2. One of the shipped token hashes below.
 *
 * Shipped hashes: the owner received the matching token out-of-band (chat /
 * one-click setup link). Only SHA-256 hashes are committed, so the public
 * repository never contains a usable secret — the hash of a high-entropy
 * random token cannot be reversed or brute-forced.
 * ──────────────────────────────────────────────────────────────────────── */

const SHIPPED_TOKEN_SHA256: string[] = [
  // Owner token issued during Library delivery (rotatable: replace the hash).
  "11011d009778c800b1317ad422096e9e7ee1340b65c9e9fbfbe4e16d4ae4ef31",
];

export function sha256Hex(input: string): string {
  return createHash("sha256").update(input, "utf8").digest("hex");
}

/** Length-safe constant-time comparison — no trivial length oracle. */
function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a, "utf8");
  const bb = Buffer.from(b, "utf8");
  if (ab.length !== bb.length) {
    timingSafeEqual(Buffer.alloc(32), Buffer.alloc(32)); // burn comparable time
    return false;
  }
  return timingSafeEqual(ab, bb);
}

/** True when the presented token is a valid site-owner admin token. */
export function isAdminToken(token: string | null | undefined): boolean {
  if (!token) return false;
  const envToken = process.env.ADMIN_TOKEN || process.env.STORAGE_ADMIN_TOKEN;
  if (envToken && safeEqual(token, envToken)) return true;
  const digest = sha256Hex(token);
  return SHIPPED_TOKEN_SHA256.some((h) => safeEqual(digest, h));
}

/** True when ANY admin path is configured (env var or shipped hash). */
export function adminAvailable(): boolean {
  return Boolean(
    process.env.ADMIN_TOKEN ||
      process.env.STORAGE_ADMIN_TOKEN ||
      SHIPPED_TOKEN_SHA256.length > 0
  );
}
