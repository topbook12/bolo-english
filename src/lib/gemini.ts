import { decryptKey } from "./crypto";
import { db } from "./db";

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
}

interface GeminiPart {
  text: string;
}
interface GeminiCandidate {
  content?: { parts?: GeminiPart[] };
  finishReason?: string;
}
interface GeminiResponse {
  candidates?: GeminiCandidate[];
  error?: { message?: string };
}

export class GeminiError extends Error {
  status: number;
  constructor(message: string, status = 500) {
    super(message);
    this.status = status;
  }
}

export async function getUserApiKey(deviceId: string): Promise<string> {
  const cfg = await db.userConfig.findUnique({ where: { deviceId } });
  if (!cfg) {
    throw new GeminiError(
      "আপনার Gemini API Key সেট করা নেই। Settings-এ গিয়ে কী যোগ করুন।",
      400
    );
  }
  try {
    return decryptKey(cfg.apiKeyEnc);
  } catch {
    throw new GeminiError(
      "আপনার API Key পড়া যায়নি — Settings-এ গিয়ে আবার সেভ করুন।",
      400
    );
  }
}

export async function getAiLevel(deviceId: string): Promise<string> {
  const cfg = await db.userConfig.findUnique({ where: { deviceId } });
  return cfg?.level ?? "beginner";
}

export async function getUserName(deviceId: string): Promise<string> {
  const cfg = await db.userConfig.findUnique({ where: { deviceId } });
  const n = cfg?.displayName?.trim();
  // "শিক্ষার্থী" is the internal no-name marker — AI conversations are in
  // English, so fall back to the international default instead.
  return n && n !== "শিক্ষার্থী" ? n.slice(0, 24) : "Student";
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
    502
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
  for (const model of MODELS) {
    // 2 attempts per model: attempt 2 appends a strict JSON-only nudge
    // (fixes prose-wrapped answers); a transient/truncated reply is usually
    // fine on the next try. Auth/quota errors abort immediately.
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
            : new GeminiError("AI কল ব্যর্থ হয়েছে — ইন্টারনেট সংযোগ চেক করুন।", 502);
        if (lastErr.status === 401 || lastErr.status === 403 || lastErr.status === 429) {
          throw lastErr;
        }
      }
    }
  }
  throw lastErr ?? new GeminiError("AI কল ব্যর্থ হয়েছে।");
}

export async function geminiText(
  apiKey: string,
  prompt: string,
  opts: GeminiOptions = {}
): Promise<string> {
  let lastErr: GeminiError | null = null;
  for (const model of MODELS) {
    try {
      return await callModel(apiKey, model, prompt, opts);
    } catch (e) {
      lastErr =
        e instanceof GeminiError
          ? e
          : new GeminiError("AI কল ব্যর্থ হয়েছে — ইন্টারনেট সংযোগ চেক করুন।", 502);
      // If auth/quota error, don't try other models with the same key
      if (lastErr.status === 401 || lastErr.status === 403 || lastErr.status === 429) {
        throw lastErr;
      }
    }
  }
  throw lastErr ?? new GeminiError("AI কল ব্যর্থ হয়েছে।");
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
    const status =
      res.status === 400 && /api key/i.test(msg)
        ? 401
        : res.status === 400 && /quota/i.test(msg)
          ? 429
          : res.status;
    throw new GeminiError(friendlyError(msg, status), status);
  }

  const candidate = json.candidates?.[0];
  const text = candidate?.content?.parts
    ?.map((p) => p.text)
    .filter(Boolean)
    .join("\n");

  if (!text) {
    const reason = candidate?.finishReason ?? "";
    if (reason === "SAFETY" || reason === "PROHIBITED_CONTENT" || reason === "BLOCKED") {
      throw new GeminiError(
        "AI নিরাপত্তা নীতির কারণে এই বিষয়ে উত্তর দিতে পারছে না — ভিন্নভাবে আবার চেষ্টা করুন।",
        502
      );
    }
    throw new GeminiError("AI খালি উত্তর দিয়েছে, আবার চেষ্টা করুন।", 502);
  }
  return text;
}

function friendlyError(msg: string, status: number): string {
  if (status === 401 || /api key/i.test(msg))
    return "API Key সঠিক নয় বা বাতিল হয়ে গেছে। Settings-এ গিয়ে নতুন কী দিন।";
  if (status === 429 || /quota/i.test(msg))
    return "আপনার Gemini কোটা শেষ — কিছুক্ষণ পর আবার চেষ্টা করুন।";
  if (status >= 500) return "Google Gemini সার্ভারে সমস্যা, একটু পরে চেষ্টা করুন।";
  return `AI কল ব্যর্থ: ${msg.slice(0, 140)}`;
}
