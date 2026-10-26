import "server-only";
import webpush from "web-push";

// ─── Web-push server helper (D12, ROADMAP-60.md) ────────────────────────────
// VAPID keys come from env (VAPID_PUBLIC_KEY / VAPID_PRIVATE_KEY). Without
// them the whole feature degrades gracefully: the public-key endpoint
// answers null, Settings shows "not configured", and the sender no-ops —
// nothing ever 500s because reminders are optional by nature.

let cached: { pub: string; priv: string } | null = null;

/** True when both VAPID env vars are present (keys cached after first read). */
export function isPushConfigured(): boolean {
  const pub = process.env.VAPID_PUBLIC_KEY;
  const priv = process.env.VAPID_PRIVATE_KEY;
  if (!pub || !priv) return false;
  if (!cached) cached = { pub, priv };
  return true;
}

export function vapidPublicKey(): string | null {
  return isPushConfigured() ? cached!.pub : null;
}

function ensureConfig(): void {
  if (!isPushConfigured() || !cached) {
    throw new Error("push_not_configured");
  }
}

/** VAPID subject (mailto:) with a sane default. */
function subject(): string {
  return process.env.VAPID_SUBJECT || "mailto:hello@boloenglish.app";
}

export interface PushPayload {
  title: string;
  body: string;
  /** Deep-link path opened on notification click. */
  url?: string;
  tag?: string;
}

/** Send one notification. Returns "ok" | "gone" (endpoint dead) | "error". */
export async function sendToSubscription(
  sub: { endpoint: string; p256dh: string; auth: string },
  payload: PushPayload
): Promise<"ok" | "gone" | "error"> {
  ensureConfig();
  try {
    await webpush.sendNotification(
      {
        endpoint: sub.endpoint,
        keys: { p256dh: sub.p256dh, auth: sub.auth },
      },
      JSON.stringify(payload),
      {
        vapidDetails: { subject: subject(), publicKey: cached!.pub, privateKey: cached!.priv },
        // Push service best-effort window
        TTL: 60 * 60 * 12,
      }
    );
    return "ok";
  } catch (e) {
    const status = (e as { statusCode?: number }).statusCode;
    if (status === 404 || status === 410) return "gone"; // subscription expired
    console.error("[push] send failed:", (e as Error)?.message ?? e);
    return "error";
  }
}

/* ── Notification copy per UI language (closed map, no user free-text) ── */

type Locale = "en" | "bn" | "hi";

const COPY: Record<
  Locale,
  {
    dailyTitle: string;
    dailyBody: (word: string, meaning: string) => string;
    streakTitle: string;
    streakBody: (n: number) => string;
  }
> = {
  en: {
    dailyTitle: "Today's words are here ✨",
    dailyBody: (w, m) => `${w} — ${m}. One minute, that's all.`,
    streakTitle: "🔥 Your streak is at risk!",
    streakBody: (n) =>
      n === 1
        ? "Practice today or your 1-day streak is gone."
        : `Practice today — don't lose your ${n}-day streak!`,
  },
  bn: {
    dailyTitle: "আজকের শব্দ এসে গেছে ✨",
    dailyBody: (w, m) => `${w} — ${m}। মাত্র এক মিনিট।`,
    streakTitle: "🔥 তোমার স্ট্রিক ঝুঁকিতে!",
    streakBody: (n) =>
      n === 1
        ? "আজ প্র্যাকটিস করো, নইলে ১ দিনের স্ট্রিক শেষ।"
        : `আজ প্র্যাকটিস করো — ${n} দিনের স্ট্রিক হারিও না!`,
  },
  hi: {
    dailyTitle: "आज के शब्द आ गए ✨",
    dailyBody: (w, m) => `${w} — ${m}। सिर्फ़ एक मिनट।`,
    streakTitle: "🔥 आपकी स्ट्रीक ख़तरे में!",
    streakBody: (n) =>
      n === 1
        ? "आज अभ्यास करें, वरना 1 दिन की स्ट्रीक खत्म।"
        : `आज अभ्यास करें — ${n} दिन की स्ट्रीक मत खोइए!`,
  },
};

export function notificationCopy(locale: string) {
  return COPY[(locale as Locale) in COPY ? (locale as Locale) : "en"];
}
