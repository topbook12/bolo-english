import { db } from "@/lib/db";
import { decryptKey } from "@/lib/crypto";

// Cloudflare Realtime TURN pool.
//
// Every Cloudflare account includes 1 TB/month of free TURN relay. Each key
// is a long-term secret that mints unlimited short-lived credentials via:
//   POST https://rtc.live.cloudflare.com/v1/turn/keys/{keyId}/credentials/generate-ice-servers
//        Authorization: Bearer {apiToken}   body: {"ttl": seconds}   → 201
//
// The pool walks keys in order (active first); a key that errors (bad token,
// quota exhausted) is marked and the next one is tried. Minted credentials
// are cached in memory for most of their TTL.

const MINT_URL = (keyId: string) =>
  `https://rtc.live.cloudflare.com/v1/turn/keys/${keyId}/credentials/generate-ice-servers`;

const CRED_TTL_SEC = 15 * 60; // 15min — short-lived limits the value of a leaked cred
const CACHE_TTL_MS = (CRED_TTL_SEC - 3 * 60) * 1000; // keep 3min safety margin

// A key that just failed to mint is not retried for this long — protects the
// mint endpoint (and our status churn) from per-call hammering.
const FAILED_COOLDOWN_MS = 10 * 60 * 1000;
const failedAt = new Map<string, number>();

export type IceServer = { urls: string[]; username?: string; credential?: string };

type Cached = { servers: IceServer[]; expires: number };
const cache = new Map<string, Cached>();

export type TurnRow = {
  id: string;
  label: string;
  keyId: string;
  status: string;
  sortOrder: number;
};

export async function listTurnKeys(): Promise<TurnRow[]> {
  const rows = await db.turnKey.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
  });
  return rows
    .sort((a, b) => {
      const rank = (s: string) => (s === "active" ? 0 : s === "exhausted" ? 1 : 2);
      const d = rank(a.status) - rank(b.status);
      return d !== 0 ? d : a.sortOrder - b.sortOrder;
    })
    .map((r) => ({
      id: r.id,
      label: r.label,
      keyId: r.keyId,
      status: r.status,
      sortOrder: r.sortOrder,
    }));
}

/** Mint short-lived iceServers from one key.
 *  - IceServer[]        → fresh (or cached) credentials
 *  - { dead: true }     → the key itself is invalid (401/403) — mark exhausted
 *  - null               → transient failure / in cooldown — do NOT mark */
export async function mintIceServers(
  keyId: string,
  apiToken: string
): Promise<IceServer[] | { dead: true } | null> {
  const hit = cache.get(keyId);
  if (hit && hit.expires > Date.now()) return hit.servers;
  // recent failure → cooldown (prevents burning quota on a dead key)
  const failed = failedAt.get(keyId);
  if (failed && Date.now() - failed < FAILED_COOLDOWN_MS) return null;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 10000);
    const res = await fetch(MINT_URL(keyId), {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ ttl: CRED_TTL_SEC }),
      signal: ctrl.signal,
    });
    clearTimeout(t);
    if (!res.ok) {
      // 401/403 = the key itself is dead → let the caller mark it exhausted.
      // Transient errors (timeout/5xx/429) must NOT permanently burn the key:
      // just cool it down briefly and let the next call retry.
      if (res.status === 401 || res.status === 403) {
        failedAt.set(keyId, Date.now());
        return { dead: true as const };
      }
      failedAt.set(keyId, Date.now());
      return null;
    }
    const data = (await res.json()) as { iceServers?: IceServer[] };
    const servers = Array.isArray(data.iceServers) ? data.iceServers : null;
    if (!servers) {
      failedAt.set(keyId, Date.now());
      return null;
    }
    // Docs: browsers block port 53 — filter those URLs out to avoid timeouts.
    const cleaned = servers.map((s) => ({
      ...s,
      urls: s.urls.filter((u) => !/:53(\?|$)/.test(u)),
    }));
    cache.set(keyId, { servers: cleaned, expires: Date.now() + CACHE_TTL_MS });
    failedAt.delete(keyId);
    return cleaned;
  } catch {
    failedAt.set(keyId, Date.now());
    return null;
  }
}

/**
 * Get iceServers from the DB pool: try keys in order (active first).
 * A key that fails to mint is marked exhausted → automatic failover.
 */
export async function iceFromPool(): Promise<IceServer[] | null> {
  let keys: TurnRow[] = [];
  try {
    keys = await listTurnKeys();
  } catch {
    return null;
  }
  for (const k of keys) {
    if (k.status === "disabled") continue;
    try {
      const row = await db.turnKey.findUnique({ where: { id: k.id } });
      if (!row) continue;
      const servers = await mintIceServers(row.keyId, decryptKey(row.apiTokenEnc));
      if (servers && !("dead" in servers)) return servers;
      // Only a DEFINITIVE rejection (401/403) marks the key exhausted —
      // timeouts/5xx just cool down and are retried on a later call.
      if (servers && "dead" in servers) {
        await db.turnKey
          .update({ where: { id: k.id }, data: { status: "exhausted" } })
          .catch(() => null);
      }
    } catch {
      continue;
    }
  }
  return null;
}

/** Env-based single key (the owner can start with 2 Vercel env vars). */
export async function iceFromEnv(): Promise<IceServer[] | null> {
  const keyId = process.env.CF_TURN_KEY_ID;
  const token = process.env.CF_TURN_API_TOKEN;
  if (!keyId || !token) return null;
  const servers = await mintIceServers(keyId, token);
  return servers && !("dead" in servers) ? servers : null;
}

/** One-click probe used by the admin API. */
export async function testTurnKey(id: string): Promise<{
  ok: boolean;
  detail: string;
}> {
  try {
    const row = await db.turnKey.findUnique({ where: { id } });
    if (!row) return { ok: false, detail: "key not found" };
    const servers = await mintIceServers(row.keyId, decryptKey(row.apiTokenEnc));
    if (servers && "dead" in servers)
      return { ok: false, detail: "key rejected by Cloudflare (401/403) — replace the apiToken" };
    if (!servers)
      return { ok: false, detail: "mint failed (transient error or 10-min cooldown after a failure)" };
    const urls = servers.flatMap((s) => s.urls).filter((u) => u.startsWith("turn"));
    return { ok: true, detail: `OK — ${urls.length} TURN URLs minted` };
  } catch (e) {
    return { ok: false, detail: (e as Error)?.message || "unknown error" };
  }
}

export async function setActiveTurn(id: string): Promise<void> {
  const key = await db.turnKey.findUnique({ where: { id } });
  if (!key || key.status === "disabled") return;
  await db.turnKey.updateMany({ where: { status: "active" }, data: { status: "exhausted" } });
  await db.turnKey.update({ where: { id }, data: { status: "active" } });
}
