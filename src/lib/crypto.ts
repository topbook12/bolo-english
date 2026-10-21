import crypto from "crypto";
import { isValidGeminiKeyFormat } from "./key-format";

export { isValidGeminiKeyFormat };

// AES-256-GCM encryption for user API keys.
// Secret resolution (deterministic per deployment so keys stay decryptable):
//   1. ENCRYPTION_SECRET env (64-char hex) — preferred
//   2. derived from AUTH_SECRET env
//   3. derived from TURSO_AUTH_TOKEN env (stable secret on Vercel)
// The raw Gemini key never leaves the server in plaintext.

function sha256Secret(base: string): Buffer {
  return crypto.createHash("sha256").update(`bolo-enc:${base}`).digest();
}

function getSecret(): Buffer {
  const hex = process.env.ENCRYPTION_SECRET;
  if (hex && hex.length >= 64) {
    return Buffer.from(hex, "hex");
  }
  const base = process.env.AUTH_SECRET || process.env.TURSO_AUTH_TOKEN;
  if (base && base.length >= 16) {
    return sha256Secret(base);
  }
  // Local dev fallback — keeps dev running without env setup
  return crypto.createHash("sha256").update("bolo-english-local-dev").digest();
}

/* ── Multi-candidate decryption (heals secret/env changes) ────────────────
 * A ciphertext written under an OLDER secret (env var added/rotated later,
 * a row written by a deployment whose secret differed) used to become
 * permanently unreadable: AES-GCM auth fails → every AI feature died with
 * "key couldn't be read" while Settings kept showing the key as saved.
 * Try every secret the app has EVER derived from the current env (plus the
 * constant local-dev fallback) — the GCM auth tag is the proof of match. */
function secretCandidates(): Buffer[] {
  const list: Buffer[] = [];
  const push = (b: Buffer) => {
    if (b.length === 32 && !list.some((x) => x.equals(b))) list.push(b);
  };
  const hex = process.env.ENCRYPTION_SECRET;
  if (hex && hex.length >= 64) push(Buffer.from(hex, "hex"));
  if (process.env.AUTH_SECRET && process.env.AUTH_SECRET.length >= 16) {
    push(sha256Secret(process.env.AUTH_SECRET));
  }
  if (process.env.TURSO_AUTH_TOKEN && process.env.TURSO_AUTH_TOKEN.length >= 16) {
    push(sha256Secret(process.env.TURSO_AUTH_TOKEN));
  }
  push(getSecret()); // current resolution (covers the no-env local fallback)
  push(crypto.createHash("sha256").update("bolo-english-local-dev").digest());
  return list;
}

function decryptWithSecret(payload: string, secret: Buffer): string {
  const [ivHex, tagHex, dataHex] = payload.split(":");
  if (!ivHex || !tagHex || !dataHex) throw new Error("bad payload");
  const decipher = crypto.createDecipheriv("aes-256-gcm", secret, Buffer.from(ivHex, "hex"));
  decipher.setAuthTag(Buffer.from(tagHex, "hex"));
  const dec = Buffer.concat([
    decipher.update(Buffer.from(dataHex, "hex")),
    decipher.final(),
  ]);
  return dec.toString("utf8");
}

export function encryptKey(plain: string): string {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", getSecret(), iv);
  const enc = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString("hex")}:${tag.toString("hex")}:${enc.toString("hex")}`;
}

export function decryptKey(payload: string): string {
  return decryptWithSecret(payload, getSecret());
}

export interface DecryptAttempt {
  /** Plaintext key when any candidate secret matched; null when none did. */
  key: string | null;
  /** True when the PRIMARY (current) secret decrypted it — no migration needed. */
  primary: boolean;
  /** Short machine-readable reason when key === null (for server logs). */
  reason: string;
}

/** Try every known secret. Never throws for auth failures — reports instead. */
export function tryDecryptKey(payload: string): DecryptAttempt {
  const candidates = secretCandidates();
  // Not even the right SHAPE (empty / no colons / non-hex) → nothing can open it
  const parts = payload.split(":");
  if (parts.length !== 3 || parts.some((p) => !p || !/^[0-9a-f]+$/i.test(p))) {
    return { key: null, primary: false, reason: "bad-payload" };
  }
  for (let i = 0; i < candidates.length; i++) {
    try {
      return {
        key: decryptWithSecret(payload, candidates[i]),
        primary: i === 0,
        reason: "",
      };
    } catch {
      /* try the next candidate */
    }
  }
  return { key: null, primary: false, reason: "no-secret-matched" };
}

export function maskKey(key: string): string {
  if (key.length <= 8) return "****";
  return `${key.slice(0, 4)}...${key.slice(-4)}`;
}
