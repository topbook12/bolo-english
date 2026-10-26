"use client";

// ─── Web-push client helpers (D12, ROADMAP-60.md) ───────────────────────────
// Flow: Settings "Enable notifications" → browser permission prompt →
// pushManager.subscribe(VAPID key) → POST /api/push/subscribe. Turning it
// off unsubscribes BOTH in the browser and on the server. Everything is
// best-effort: unsupported browsers / unconfigured deployments degrade to
// a disabled card, never an error toast storm.

import { getDeviceId } from "@/hooks/use-device";

export type PushState = "unsupported" | "unconfigured" | "denied" | "subscribed" | "off";

function urlBase64ToUint8Array(base64: string): Uint8Array {
  const pad = "=".repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + pad).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(b64);
  const out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
  return out;
}

/**
 * The active SW registration, resolved IMMEDIATELY — never via
 * navigator.serviceWorker.ready, which waits forever for a registration
 * and hangs the whole card in development (where the SW is deliberately
 * unregistered so it can't cache dev chunks).
 */
async function getActiveRegistration(): Promise<ServiceWorkerRegistration | null> {
  try {
    return (await navigator.serviceWorker.getRegistration()) ?? null;
  } catch {
    return null;
  }
}

export async function getPushState(): Promise<PushState> {
  if (typeof window === "undefined") return "unsupported";
  if (!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) {
    return "unsupported";
  }
  try {
    const res = await fetch("/api/push/public-key");
    const json = await res.json().catch(() => null);
    if (!json?.ok || !json.publicKey) return "unconfigured";
    if (Notification.permission === "denied") return "denied";
    const reg = await getActiveRegistration();
    if (!reg) return "off"; // dev (no SW) or SW still installing
    const sub = await reg.pushManager.getSubscription();
    return sub ? "subscribed" : "off";
  } catch {
    return "off";
  }
}

/** Full enable flow. Throws only with a short code the card can localize. */
export async function subscribeToPush(locale: string): Promise<void> {
  const state = await getPushState();
  if (state === "unsupported") throw new Error("unsupported");
  if (state === "unconfigured") throw new Error("unconfigured");
  const perm = await Notification.requestPermission();
  if (perm !== "granted") throw new Error("denied");

  const res = await fetch("/api/push/public-key");
  const json = await res.json().catch(() => null);
  const publicKey = json?.publicKey;
  if (!json?.ok || !publicKey) throw new Error("unconfigured");

  const reg = await getActiveRegistration();
  if (!reg) throw new Error("unsupported"); // no service worker → no push
  const sub = await reg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicKey).buffer as ArrayBuffer,
  });
  const raw = sub.toJSON();
  const deviceId = getDeviceId();
  const save = await fetch("/api/push/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ deviceId, locale, subscription: raw }),
  });
  if (!save.ok) throw new Error("save_failed");
}

export async function unsubscribeFromPush(): Promise<void> {
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    if (sub) {
      const endpoint = sub.endpoint;
      await sub.unsubscribe().catch(() => null);
      await fetch("/api/push/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endpoint }),
      }).catch(() => null);
    }
  } catch {
    /* best-effort — the card re-syncs its state either way */
  }
}
