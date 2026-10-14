"use client";

// Shared client-side helpers for calling our APIs.
// Fallback messages follow the user's UI language (locale cookie) — the
// server usually provides an already-localized error, these are just the
// "no error field / network layer" fallbacks.

import { clientMsg } from "@/lib/api-i18n";

export async function callAi<T>(
  deviceId: string,
  feature: string,
  payload: Record<string, unknown> = {}
): Promise<T> {
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ deviceId, feature, payload }),
  });
  const json = await res.json();
  if (!res.ok || !json.ok) {
    throw new Error(json.error || clientMsg("serverProblem", { status: res.status }));
  }
  return json.data as T;
}

export async function apiGet<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const json = await res.json();
  if (!res.ok || !json.ok) {
    throw new Error(json.error || clientMsg("serverProblem", { status: res.status }));
  }
  return json.data as T;
}

export async function apiPost<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok || !json.ok) {
    throw new Error(json.error || clientMsg("serverProblem", { status: res.status }));
  }
  return json.data as T;
}

export async function apiDelete(url: string): Promise<void> {
  const res = await fetch(url, { method: "DELETE" });
  const json = await res.json();
  if (!res.ok || !json.ok) {
    throw new Error(json.error || clientMsg("serverProblem", { status: res.status }));
  }
}
