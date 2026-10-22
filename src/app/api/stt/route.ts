import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import { checkIpLimit } from "@/lib/rate-limit";
import { reqLocale, apiMsg } from "@/lib/api-i18n";

// Server speech-to-text fallback (Task 27-m) for browsers WITHOUT the Web
// Speech API — iPhone Safari has no recognition at all. The call room records
// a push-to-talk hold with MediaRecorder, base64-encodes it and POSTs it here;
// the transcription comes back and lands in the transcript exactly like a
// recognition final, so captions AND the end-of-call analysis keep working.
// Backend-only: the z-ai-web-dev-sdk ASR runs server-side with site credentials.

export const maxDuration = 60;

/* ── limits ── */
const MAX_AUDIO_BYTES = 8 * 1024 * 1024; // ~8MB decoded audio (a 20s hold is ≪ 1MB)
const DEFAULT_MIME = "audio/webm";
// Strict allow-list: "audio/<subtype>" plus an optional codecs parameter, and
// nothing else — no paths, no parameters we don't understand.
const MIME_RE = /^audio\/[\w.+-]{1,60}(;\s*codecs=[\w.+-]{1,60})?$/;
// Base64 body only (the client strips the data: URL prefix). Whitespace is
// tolerated — some runtimes wrap long base64.
const B64_RE = /^[A-Za-z0-9+/=\s]+$/;

function jsonOk(data: unknown) {
  return NextResponse.json({ ok: true, data });
}

function jsonErr(message: string, status = 500) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);

  // Per-IP shield (anonymous route — no device key). 30 holds/min is far more
  // than a real conversation needs; it catches loops and key-drain bots.
  if (!checkIpLimit(req, "stt", 30)) {
    return jsonErr(apiMsg(locale, "rateLimited"), 429);
  }

  let body: { audio?: unknown; mime?: unknown };
  try {
    body = await req.json();
  } catch {
    return jsonErr(apiMsg(locale, "paramsRequired"), 400);
  }

  const audio = typeof body.audio === "string" ? body.audio : "";
  if (!audio || !B64_RE.test(audio)) {
    return jsonErr(apiMsg(locale, "paramsRequired"), 400);
  }

  // decoded size ≈ base64 length × 3/4 (padding slop ignored — close enough)
  const approxBytes = Math.floor((audio.length * 3) / 4);
  if (approxBytes > MAX_AUDIO_BYTES) {
    return jsonErr("audioTooLarge", 413);
  }

  const rawMime = typeof body.mime === "string" ? body.mime : "";
  const mime = MIME_RE.test(rawMime) ? rawMime : DEFAULT_MIME;
  void mime; // informational only — the ASR backend sniffs the container itself

  try {
    const zai = await ZAI.create();
    const res = await zai.audio.asr.create({ file_base64: audio });
    const text =
      typeof (res as { text?: unknown })?.text === "string"
        ? ((res as { text: string }).text.trim().slice(0, 4000) as string)
        : "";
    return jsonOk({ text });
  } catch (e) {
    console.error("[stt] ASR call failed:", e);
    return jsonErr(apiMsg(locale, "serverProblem", { status: 502 }), 502);
  }
}
