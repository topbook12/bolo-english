import { createHash } from "crypto";
import { decryptKey } from "./crypto";
import { db } from "./db";
import { isNoName } from "@/lib/no-name";
import { resolveConfigRow } from "./user-config";

// Server-side Gemini client. The user's own API key is fetched from DB
// (decrypted here only), and every call is proxied through our backend so the
// raw key is never exposed to other clients.

// Model fallback order + per-model output-token caps. Bangla text tokenizes
// several times heavier than English — a small cap truncates long JSON
// mid-string, which used to surface as "AI একটি ভুল ফরম্যাটে উত্তর দিয়েছে".
const MODELS = ["gemini-2.5-flash", "gemini-2.0-flash"] as const;
const OUTPUT_CAPS: Record<string, number> = {
  "gemini-2.5-flash": 65_536,
  "gemini-2.0-flash": 8_192,
};
// Default ceiling for JSON answers — generous headroom, still fast enough to
// finish inside the route's maxDuration (60s) even with one retry.
const JSON_TOKEN_BUDGET = 32_768;
const CALL_TIMEOUT_MS = 30_000;

export interface GeminiOptions {
  temperature?: number;
  systemPrompt?: string;
  json?: boolean;
  maxOutputTokens?: number;
  /** Feature name for server-side token accounting (console observability). */
  label?: string;
}

interface GeminiPart {
  text: string;
}
interface GeminiCandidate {
  content?: { parts?: GeminiPart[] };
  finishReason?: string;
}
interface GeminiErrorDetail {
  reason?: string;
}
interface GeminiResponse {
  candidates?: GeminiCandidate[];
  usageMetadata?: {
    promptTokenCount?: number;
    candidatesTokenCount?: number;
    totalTokenCount?: number;
  };
  error?: { message?: string; details?: GeminiErrorDetail[] };
}

// Machine-readable error codes — routes translate these into the user's UI
// language via src/lib/api-i18n.ts, so no user ever sees hardcoded Bengali.
export type GeminiErrCode =
  | "noKey"
  | "keyUnreadable"
  | "badFormat"
  | "aiNetwork"
  | "aiFailed"
  | "empty"
  | "safety"
  | "badKey"
  | "quota"
  | "geminiServer"
  | "authKeyPending"
  | "modelIneligible";

export class GeminiError extends Error {
  status: number;
  code?: GeminiErrCode;
  /** Raw provider message (English) — surfaced in diagnostics, never shown alone. */
  raw?: string;
  constructor(message: string, status = 500, code?: GeminiErrCode, raw?: string) {
    super(message);
    this.status = status;
    this.code = code;
    this.raw = raw;
  }
}

// All three getters resolve ACCOUNT-first (session cookie → the user's own
// config row) so the same email works on every device; guests fall back to
// the device-local row. See src/lib/user-config.ts.
export async function getUserApiKey(deviceId: string): Promise<string> {
  const cfg = await resolveConfigRow(deviceId);
  if (!cfg || !cfg.apiKeyEnc) {
    throw new GeminiError(
      "আপনার Gemini API Key সেট করা নেই। Settings-এ গিয়ে কী যোগ করুন।",
      400,
      "noKey"
    );
  }
  try {
    return decryptKey(cfg.apiKeyEnc);
  } catch {
    throw new GeminiError(
      "আপনার API Key পড়া যায়নি — Settings-এ গিয়ে আবার সেভ করুন।",
      400,
      "keyUnreadable"
    );
  }
}

export async function getAiLevel(deviceId: string): Promise<string> {
  const cfg = await resolveConfigRow(deviceId);
  return cfg?.level ?? "beginner";
}

export async function getUserName(deviceId: string): Promise<string> {
  const cfg = await resolveConfigRow(deviceId);
  const n = cfg?.displayName?.trim();
  // "" / the legacy no-name marker → AI conversations are in English, so
  // fall back to the international default instead (src/lib/no-name.ts).
  return isNoName(n) ? "Student" : (n as string).slice(0, 24);
}

/* ── Model eligibility (free-tier keys that can't use a specific model) ────
 * Google refuses some models per-key ("not eligible to use Gemini 2.5 Flash —
 * use Gemini 2.0 Flash", "model not supported for this project", per-model
 * free-tier quota…). These are MODEL-level problems: another model in the
 * fallback chain usually works, so they must SKIP to the next model instead
 * of aborting the whole call. Only KEY-level failures (401 invalid key,
 * geo/permission blocks) abort. Verified live: an eligible-blocked key
 * previously surfaced Google's raw English eligibility text in the save
 * toast and broke every AI feature — because 403/429 aborted the loop
 * before the 2.0-flash fallback ever ran. */

const MODEL_INELIGIBLE_RE =
  /(not\s+eligible|\bmodel\b[^\n]{0,80}?(not\s+supported|not\s+available|does\s+not\s+exist|not\s+found|is\s+unavailable)|models?\s+not\s+found|not\s+found\s+for\s+api\s+version|requires?\s+billing|billing\s+is\s+not\s+enabled|free\s+tier)/i;

/** True when Google's message says THIS MODEL isn't available to this key. */
export function isModelIneligibleMsg(msg: string): boolean {
  if (!msg) return false;
  // A key-invalid message also contains the word "key" — it must never be
  // treated as model-level, otherwise a bad key would burn fallback calls.
  if (/api key not valid|api_key_invalid/i.test(msg)) return false;
  return MODEL_INELIGIBLE_RE.test(msg);
}

// Warm-instance memory: sha256(key)[0..16] → models proven ineligible for it.
// After the first detection, later calls skip straight to a working model.
const ineligibleModels = new Map<string, Set<string>>();

function keyHash(apiKey: string): string {
  return createHash("sha256").update(apiKey).digest("hex").slice(0, 16);
}

function markIneligible(apiKey: string, model: string): void {
  const h = keyHash(apiKey);
  const set = ineligibleModels.get(h) ?? new Set<string>();
  set.add(model);
  ineligibleModels.set(h, set);
  console.log(`[ai] model ${model} not eligible for key ${h} → skipping`);
}

function eligibleModels(apiKey: string): string[] {
  const skip = ineligibleModels.get(keyHash(apiKey));
  return skip ? MODELS.filter((m) => !skip.has(m)) : [...MODELS];
}

export class NoEligibleModelError extends GeminiError {
  constructor() {
    super("No Gemini model is eligible for this key.", 403, "modelIneligible");
  }
}

/* ── JSON extraction & repair ─────────────────────────────────────────────
 * Models occasionally wrap JSON in prose/fences, add trailing commas, or get
 * truncated by the output cap. All of that previously surfaced as a generic
 * "ভুল ফরম্যাটে" error. Repair in layers before giving up. */

function tryParse(s: string): unknown {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

function extractAndParseJson<T>(text: string): T {
  let raw = text.trim();
  // Strip any accidental BOM/zero-width chars the model may echo back
  raw = raw.replace(/[\u200B-\u200D\u2060\uFEFF]/g, "");
  const fence = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) raw = fence[1].trim();
  const start = raw.search(/[[{]/);
  if (start > 0) raw = raw.slice(start);
  // Trim trailing junk after last closing bracket
  const lastObj = Math.max(raw.lastIndexOf("}"), raw.lastIndexOf("]"));
  if (lastObj !== -1 && lastObj < raw.length - 1) {
    raw = raw.slice(0, lastObj + 1);
  }

  let parsed = tryParse(raw);
  if (parsed !== null) return parsed as T;

  // Repair 1: trailing commas  {"a":1,}  [1,2,]
  let s = raw.replace(/,\s*(?=[}\]])/g, "");
  parsed = tryParse(s);
  if (parsed !== null) return parsed as T;

  // Repair 2: truncated output — close the open string & bracket stack
  const stack: string[] = [];
  let inStr = false;
  let esc = false;
  for (const ch of s) {
    if (inStr) {
      if (esc) esc = false;
      else if (ch === "\\") esc = true;
      else if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') inStr = true;
    else if (ch === "{" || ch === "[") stack.push(ch);
    else if (ch === "}" || ch === "]") stack.pop();
  }
  let closed = s + (inStr ? '"' : "");
  for (let i = stack.length - 1; i >= 0; i--) closed += stack[i] === "{" ? "}" : "]";
  closed = closed.replace(/,\s*(?=[}\]])/g, ""); // dangling comma before closers
  parsed = tryParse(closed);
  if (parsed !== null) return parsed as T;

  // Repair 3: unescaped control characters inside strings. LLMs regularly
  // emit real newlines/tabs inside JSON string values, which breaks
  // JSON.parse even when every bracket is balanced. Escape them (only
  // inside strings) and retry.
  const escaped = escapeControlCharsInStrings(closed);
  parsed = tryParse(escaped);
  if (parsed !== null) return parsed as T;

  throw new GeminiError(
    "AI একটি ভুল ফরম্যাটে উত্তর দিয়েছে — আবার চেষ্টা করুন।",
    502,
    "badFormat"
  );
}

/** Turn raw \n / \r / \t that sit INSIDE JSON strings into \\n \\r \\t. */
function escapeControlCharsInStrings(s: string): string {
  let out = "";
  let inStr = false;
  let esc = false;
  for (const ch of s) {
    if (inStr) {
      if (esc) {
        esc = false;
        out += ch;
        continue;
      }
      if (ch === "\\") {
        esc = true;
        out += ch;
        continue;
      }
      if (ch === '"') {
        inStr = false;
        out += ch;
        continue;
      }
      if (ch === "\n") {
        out += "\\n";
        continue;
      }
      if (ch === "\r") {
        out += "\\r";
        continue;
      }
      if (ch === "\t") {
        out += "\\t";
        continue;
      }
      out += ch;
      continue;
    }
    if (ch === '"') inStr = true;
    out += ch;
  }
  return out;
}

const JSON_ONLY_NUDGE =
  "\n\nCRITICAL: Respond with ONLY the raw JSON value. No markdown, no code fences, no explanation — nothing before or after the JSON.";

export async function geminiJson<T>(
  apiKey: string,
  prompt: string,
  opts: GeminiOptions = {}
): Promise<T> {
  let lastErr: GeminiError | null = null;
  const models = eligibleModels(apiKey);
  if (models.length === 0) throw new NoEligibleModelError();
  for (const model of models) {
    // 2 attempts per model: attempt 2 appends a strict JSON-only nudge
    // (fixes prose-wrapped answers); a transient/truncated reply is usually
    // fine on the next try. Model-ineligible/quota errors skip the nudge
    // retry — the same model will refuse again — and fall through to the
    // next model instead.
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const text = await callModel(
          apiKey,
          model,
          attempt === 0 ? prompt : prompt + JSON_ONLY_NUDGE,
          {
            ...opts,
            json: true,
            maxOutputTokens: opts.maxOutputTokens ?? JSON_TOKEN_BUDGET,
          }
        );
        return extractAndParseJson<T>(text);
      } catch (e) {
        lastErr =
          e instanceof GeminiError
            ? e
            : new GeminiError("AI কল ব্যর্থ হয়েছে — ইন্টারনেট সংযোগ চেক করুন।", 502, "aiNetwork");
        if (lastErr.code === "modelIneligible") {
          markIneligible(apiKey, model);
          break; // → next model immediately
        }
        // Only KEY-level failures abort the whole chain: an invalid key
        // fails identically on every model. 403 is kept as an abort EXCEPT
        // for model-eligibility refusals (handled above). 429 (quota) often
        // applies to ONE model's free-tier limit — the fallback model has a
        // separate bucket, so it gets its chance too.
        if (lastErr.status === 401 || (lastErr.status === 403 && lastErr.code !== "quota")) {
          throw lastErr;
        }
        if (lastErr.code === "quota") break;
        // Safety blocks are content-based — the same prompt on the same or an
        // OLDER model will not pass either. Retrying used to cost up to 4×
        // the input tokens for a guaranteed-miss (BYOK = the user's money).
        if (lastErr.code === "safety") throw lastErr;
      }
    }
    // Both attempts on this model failed. badFormat/empty will not improve on
    // the strictly-weaker fallback model (smaller output cap, weaker JSON) —
    // only infrastructure errors (network/5xx) justify trying the next model.
    if (lastErr && (lastErr.code === "badFormat" || lastErr.code === "empty")) {
      throw lastErr;
    }
  }
  throw lastErr ?? new GeminiError("AI কল ব্যর্থ হয়েছে।", 500, "aiFailed");
}

export async function geminiText(
  apiKey: string,
  prompt: string,
  opts: GeminiOptions = {}
): Promise<string> {
  let lastErr: GeminiError | null = null;
  const models = eligibleModels(apiKey);
  if (models.length === 0) throw new NoEligibleModelError();
  for (const model of models) {
    try {
      return await callModel(apiKey, model, prompt, opts);
    } catch (e) {
      lastErr =
        e instanceof GeminiError
          ? e
          : new GeminiError("AI কল ব্যর্থ হয়েছে — ইন্টারনেট সংযোগ চেক করুন।", 502, "aiNetwork");
      if (lastErr.code === "modelIneligible") {
        markIneligible(apiKey, model);
        continue; // → next model
      }
      // Key-level failures abort; model-level quota gets the next model.
      if (lastErr.status === 401 || (lastErr.status === 403 && lastErr.code !== "quota")) {
        throw lastErr;
      }
    }
  }
  throw lastErr ?? new GeminiError("AI কল ব্যর্থ হয়েছে।", 500, "aiFailed");
}

async function callModel(
  apiKey: string,
  model: string,
  prompt: string,
  opts: GeminiOptions
): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const cap = OUTPUT_CAPS[model] ?? 8192;
  const generationConfig: Record<string, unknown> = {
    temperature: opts.temperature ?? 0.7,
    maxOutputTokens: Math.min(opts.maxOutputTokens ?? cap, cap),
  };
  if (opts.json) generationConfig.responseMimeType = "application/json";
  if (model.includes("2.5")) {
    // Disable thinking for speed on 2.5 flash
    generationConfig.thinkingConfig = { thinkingBudget: 0 };
  }

  const body: Record<string, unknown> = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig,
  };
  if (opts.systemPrompt) {
    body.systemInstruction = { parts: [{ text: opts.systemPrompt }] };
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify(body),
    // Bound each attempt so a hung Google call can't eat the whole route budget
    signal: AbortSignal.timeout(CALL_TIMEOUT_MS),
  });

  const json = (await res.json().catch(() => ({}))) as GeminiResponse;

  if (!res.ok) {
    const msg = json?.error?.message ?? `Gemini HTTP ${res.status}`;
    // The `reason` in error.details distinguishes failures that share the
    // same message: API_KEY_INVALID (the key string is bogus) vs
    // ACCESS_TOKEN_TYPE_UNSUPPORTED (Google's new AQ. auth key recognized
    // but currently refused — a known rollout issue, the key itself was
    // never proven invalid).
    const reason =
      json?.error?.details?.find((d) => typeof d?.reason === "string")?.reason ?? "";
    if (reason === "ACCESS_TOKEN_TYPE_UNSUPPORTED") {
      throw new GeminiError(
        "Google refused this new-format (AQ.) auth key — known rollout issue.",
        401,
        "authKeyPending",
        msg.slice(0, 200)
      );
    }
    // Model-level refusal ("not eligible to use Gemini 2.5 Flash…",
    // "model not supported for this project", per-model free-tier limit) →
    // code modelIneligible so the callers fall back to the next model
    // instead of surfacing Google's raw text to the user.
    if (isModelIneligibleMsg(msg)) {
      throw new GeminiError(msg.slice(0, 160), res.status, "modelIneligible", msg.slice(0, 200));
    }
    const status =
      res.status === 400 && /api key/i.test(msg)
        ? 401
        : res.status === 400 && /quota/i.test(msg)
          ? 429
          : res.status;
    const fe = friendlyError(msg, status);
    throw new GeminiError(fe.message, status, fe.code, msg.slice(0, 200));
  }

  const candidate = json.candidates?.[0];
  const text = candidate?.content?.parts
    ?.map((p) => p.text)
    .filter(Boolean)
    .join("\n");

  // Token accounting — every BYOK request spends the USER's quota, so each
  // feature's spend is observable in the server logs (no PII, just counts).
  if (opts.label && json.usageMetadata) {
    const u = json.usageMetadata;
    console.log(
      `[ai] ${opts.label} ${model} in=${u.promptTokenCount ?? "?"} out=${u.candidatesTokenCount ?? "?"} total=${u.totalTokenCount ?? "?"}`
    );
  }

  if (!text) {
    const reason = candidate?.finishReason ?? "";
    if (reason === "SAFETY" || reason === "PROHIBITED_CONTENT" || reason === "BLOCKED") {
      throw new GeminiError(
        "AI নিরাপত্তা নীতির কারণে এই বিষয়ে উত্তর দিতে পারছে না — ভিন্নভাবে আবার চেষ্টা করুন।",
        502,
        "safety"
      );
    }
    throw new GeminiError("AI খালি উত্তর দিয়েছে, আবার চেষ্টা করুন।", 502, "empty");
  }
  return text;
}

function friendlyError(
  msg: string,
  status: number
): { message: string; code: GeminiErrCode } {
  if (status === 401 || /api key/i.test(msg))
    return {
      message: "API Key সঠিক নয় বা বাতিল হয়ে গেছে। Settings-এ গিয়ে নতুন কী দিন।",
      code: "badKey",
    };
  if (status === 429 || /quota/i.test(msg))
    return {
      message: "আপনার Gemini কোটা শেষ — কিছুক্ষণ পর আবার চেষ্টা করুন।",
      code: "quota",
    };
  if (status >= 500)
    return {
      message: "Google Gemini সার্ভারে সমস্যা, একটু পরে চেষ্টা করুন।",
      code: "geminiServer",
    };
  // message = raw technical reason (routes wrap it in the user's language)
  return { message: msg.slice(0, 140), code: "aiFailed" };
}
