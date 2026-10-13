import { decryptKey } from "./crypto";
import { db } from "./db";

// Server-side Gemini client. The user's own API key is fetched from DB
// (decrypted here only), and every call is proxied through our backend so the
// raw key is never exposed to other clients.

const MODELS = ["gemini-2.5-flash", "gemini-2.0-flash"] as const;

export interface GeminiOptions {
  temperature?: number;
  systemPrompt?: string;
  json?: boolean;
  maxOutputTokens?: number;
}

interface GeminiPart {
  text: string;
}
interface GeminiResponse {
  candidates?: { content?: { parts?: GeminiPart[] } }[];
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

export async function geminiJson<T>(
  apiKey: string,
  prompt: string,
  opts: GeminiOptions = {}
): Promise<T> {
  const text = await geminiText(apiKey, prompt, { ...opts, json: true });
  // Robust JSON extraction (model may wrap in ```json fences)
  let raw = text.trim();
  const fence = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) raw = fence[1].trim();
  const start = raw.search(/[[{]/);
  if (start > 0) raw = raw.slice(start);
  // Trim trailing junk after last closing bracket
  const lastObj = Math.max(raw.lastIndexOf("}"), raw.lastIndexOf("]"));
  if (lastObj !== -1 && lastObj < raw.length - 1) {
    raw = raw.slice(0, lastObj + 1);
  }
  try {
    return JSON.parse(raw) as T;
  } catch {
    throw new GeminiError("AI একটি ভুল ফরম্যাটে উত্তর দিয়েছে, আবার চেষ্টা করুন।", 502);
  }
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
      lastErr = e as GeminiError;
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

  const generationConfig: Record<string, unknown> = {
    temperature: opts.temperature ?? 0.7,
    maxOutputTokens: opts.maxOutputTokens ?? 8192,
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

  const text = json.candidates?.[0]?.content?.parts
    ?.map((p) => p.text)
    .filter(Boolean)
    .join("\n");

  if (!text) {
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
