"use client";

// Shared client-side helpers for calling our APIs.

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
    throw new Error(json.error || `সার্ভার সমস্যা (${res.status})`);
  }
  return json.data as T;
}

export async function apiGet<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const json = await res.json();
  if (!res.ok || !json.ok) {
    throw new Error(json.error || `সার্ভার সমস্যা (${res.status})`);
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
    throw new Error(json.error || `সার্ভার সমস্যা (${res.status})`);
  }
  return json.data as T;
}

export async function apiDelete(url: string): Promise<void> {
  const res = await fetch(url, { method: "DELETE" });
  const json = await res.json();
  if (!res.ok || !json.ok) {
    throw new Error(json.error || `সার্ভার সমস্যা (${res.status})`);
  }
}
