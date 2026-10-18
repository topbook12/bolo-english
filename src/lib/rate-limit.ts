// In-memory rate limiting for mutating APIs.
//
// Two axes (Vercel serverless note: in-memory buckets reset per instance —
// this is a best-effort shield, not accounting; the DB-persisted daily cap is
// future work):
//   • per-device (client-supplied, trivially rotated) → weak on its own
//   • per-IP (x-forwarded-for from Vercel) → the strong axis, applies to
//     every route that previously had NO limit at all
// Fixed-window counters with lazy map cleanup — no dependencies.

const buckets = new Map<string, { count: number; reset: number }>();
let lastSweep = 0;

function sweep(now: number) {
  if (now - lastSweep < 60_000) return;
  lastSweep = now;
  for (const [k, v] of buckets) if (v.reset < now) buckets.delete(k);
}

/** Fixed-window limiter. Returns true when the request is allowed. */
export function hitLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  sweep(now);
  const b = buckets.get(key);
  if (!b || b.reset < now) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  b.count += 1;
  return b.count <= max;
}

/* ── legacy device limiter (kept for /api/ai) ── */
const WINDOW_MS = 60_000;
const MAX_REQ = 30;
const deviceBuckets = new Map<string, number[]>();

export function checkRateLimit(deviceId: string): boolean {
  const now = Date.now();
  const list = (deviceBuckets.get(deviceId) ?? []).filter((t) => now - t < WINDOW_MS);
  if (list.length >= MAX_REQ) {
    deviceBuckets.set(deviceId, list);
    return false;
  }
  list.push(now);
  deviceBuckets.set(deviceId, list);
  return true;
}

/* ── per-IP helpers ── */

/** Best-effort client IP (Vercel sets x-forwarded-for / x-real-ip). */
export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim().slice(0, 60);
  return req.headers.get("x-real-ip")?.slice(0, 60) ?? "unknown";
}

/**
 * Per-IP limiter for mutating endpoints. `max` per `windowMs`.
 * When the caller also has a deviceId, pass it so one IP shared by many
 * learners (school NAT) isn't over-throttled: the key becomes ip:deviceId.
 */
export function checkIpLimit(
  req: Request,
  bucket: string,
  max: number,
  windowMs = 60_000,
  deviceId?: string
): boolean {
  const ip = clientIp(req);
  const key = deviceId ? `${bucket}:${ip}:${deviceId.slice(0, 40)}` : `${bucket}:${ip}`;
  return hitLimit(key, max, windowMs);
}

/** Per-IP limiter WITHOUT a device fallback — for fully anonymous routes. */
export function checkIpLimitStrict(
  req: Request,
  bucket: string,
  max: number,
  windowMs = 60_000
): boolean {
  return hitLimit(`${bucket}:${clientIp(req)}`, max, windowMs);
}
