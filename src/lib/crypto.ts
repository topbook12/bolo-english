import crypto from "crypto";

// AES-256-GCM encryption for user API keys.
// Secret resolution (deterministic per deployment so keys stay decryptable):
//   1. ENCRYPTION_SECRET env (64-char hex) — preferred
//   2. derived from AUTH_SECRET env
//   3. derived from TURSO_AUTH_TOKEN env (stable secret on Vercel)
// The raw Gemini key never leaves the server in plaintext.

function getSecret(): Buffer {
  const hex = process.env.ENCRYPTION_SECRET;
  if (hex && hex.length >= 64) {
    return Buffer.from(hex, "hex");
  }
  const base = process.env.AUTH_SECRET || process.env.TURSO_AUTH_TOKEN;
  if (base && base.length >= 16) {
    return crypto.createHash("sha256").update(`bolo-enc:${base}`).digest();
  }
  // Local dev fallback — keeps dev running without env setup
  return crypto.createHash("sha256").update("bolo-english-local-dev").digest();
}

export function encryptKey(plain: string): string {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", getSecret(), iv);
  const enc = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString("hex")}:${tag.toString("hex")}:${enc.toString("hex")}`;
}

export function decryptKey(payload: string): string {
  const [ivHex, tagHex, dataHex] = payload.split(":");
  if (!ivHex || !tagHex || !dataHex) throw new Error("bad payload");
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    getSecret(),
    Buffer.from(ivHex, "hex")
  );
  decipher.setAuthTag(Buffer.from(tagHex, "hex"));
  const dec = Buffer.concat([
    decipher.update(Buffer.from(dataHex, "hex")),
    decipher.final(),
  ]);
  return dec.toString("utf8");
}

export function maskKey(key: string): string {
  if (key.length <= 8) return "****";
  return `${key.slice(0, 4)}...${key.slice(-4)}`;
}

export function isValidGeminiKeyFormat(key: string): boolean {
  // Gemini keys are typically AIza... ~39 chars, but stay permissive
  return /^[A-Za-z0-9_\-]{20,}$/.test(key.trim());
}
