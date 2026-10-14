import { createHash } from "crypto";

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

/** True when the presented token is a valid site-owner admin token. */
export function isAdminToken(token: string | null | undefined): boolean {
  if (!token) return false;
  const envToken = process.env.ADMIN_TOKEN || process.env.STORAGE_ADMIN_TOKEN;
  if (envToken && token === envToken) return true;
  return SHIPPED_TOKEN_SHA256.includes(sha256Hex(token));
}

/** True when ANY admin path is configured (env var or shipped hash). */
export function adminAvailable(): boolean {
  return Boolean(
    process.env.ADMIN_TOKEN ||
      process.env.STORAGE_ADMIN_TOKEN ||
      SHIPPED_TOKEN_SHA256.length > 0
  );
}
