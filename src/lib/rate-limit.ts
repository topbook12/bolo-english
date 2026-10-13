// Simple in-memory rate limiter for the AI proxy.
// Prevents a leaked deviceId from hammering the endpoint.
// 30 requests / minute / device is plenty for learning features.

const buckets = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_REQ = 30;

export function checkRateLimit(deviceId: string): boolean {
  const now = Date.now();
  const list = (buckets.get(deviceId) ?? []).filter((t) => now - t < WINDOW_MS);
  if (list.length >= MAX_REQ) {
    buckets.set(deviceId, list);
    return false;
  }
  list.push(now);
  buckets.set(deviceId, list);
  return true;
}
