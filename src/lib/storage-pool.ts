import { db } from "@/lib/db";
import { decryptKey } from "@/lib/crypto";
import { s3Put, s3Get, s3Delete, type S3Creds } from "@/lib/s3";

// Zero-cost storage pool.
//
// The owner registers N free-tier S3-compatible accounts. putObject() walks
// them in order (active first); any quota/limit error marks the account
// exhausted and transparently fails over to the next one. Manual switching /
// rotation is exposed through /api/storage (admin token required).

export type PoolAccount = {
  id: string;
  label: string;
  provider: string;
  endpoint: string;
  region: string;
  bucket: string;
  publicBaseUrl: string;
  limitBytes: number;
  status: string;
  sortOrder: number;
};

const QUOTA_MARKERS = [
  "quota",
  "resource_exhausted",
  "storage limit",
  "storage exceeded",
  "limit exceeded",
  "plan limit",
  "free tier",
  "402",
  "429",
];

export function looksLikeQuotaError(status: number, text?: string): boolean {
  if (status === 402 || status === 429) return true;
  if (!text) return false;
  const t = text.toLowerCase();
  return QUOTA_MARKERS.some((m) => t.includes(m));
}

export async function listAccounts(): Promise<PoolAccount[]> {
  const rows = await db.storageAccount.findMany({
    orderBy: [{ status: "asc" }, { sortOrder: "asc" }, { createdAt: "asc" }],
  });
  // active first, then exhausted/disabled — but keep stable order inside
  return rows
    .sort((a, b) => {
      const rank = (s: string) => (s === "active" ? 0 : s === "exhausted" ? 1 : 2);
      const d = rank(a.status) - rank(b.status);
      return d !== 0 ? d : a.sortOrder - b.sortOrder || a.createdAt.getTime() - b.createdAt.getTime();
    })
    .map((r) => ({
      id: r.id,
      label: r.label,
      provider: r.provider,
      endpoint: r.endpoint,
      region: r.region,
      bucket: r.bucket,
      publicBaseUrl: r.publicBaseUrl,
      limitBytes: r.limitBytes,
      status: r.status,
      sortOrder: r.sortOrder,
    }));
}

/** Load decrypted S3 credentials for an account. */
export async function loadCreds(id: string): Promise<S3Creds> {
  const r = await db.storageAccount.findUnique({ where: { id } });
  if (!r) throw new Error("account not found");
  return {
    endpoint: r.endpoint,
    region: r.region,
    bucket: r.bucket,
    accessKey: decryptKey(r.accessKeyEnc),
    secretKey: decryptKey(r.secretKeyEnc),
  };
}

/** Mark an account exhausted and promote the next healthy one. */
export async function markExhausted(id: string): Promise<void> {
  await db.storageAccount
    .update({ where: { id }, data: { status: "exhausted" } })
    .catch(() => null);
}

export async function setActive(id: string): Promise<void> {
  const acc = await db.storageAccount.findUnique({ where: { id } });
  if (!acc || acc.status === "disabled") return;
  await db.storageAccount.updateMany({
    where: { status: "active" },
    data: { status: "disabled" },
  });
  await db.storageAccount.update({ where: { id }, data: { status: "active" } });
}

/**
 * Upload an object through the pool. Tries accounts in order (active first);
 * on quota-like failures the account is marked exhausted and the next one is
 * tried. Returns the public URL of the object or null when every account
 * failed.
 */
export async function putObject(
  key: string,
  body: Buffer,
  contentType: string
): Promise<{ url: string; accountId: string } | null> {
  const accounts = await listAccounts();
  let lastText = "";
  for (const acc of accounts) {
    if (acc.status === "disabled") continue;
    try {
      const creds = await loadCreds(acc.id);
      const res = await s3Put(creds, key, body, contentType);
      if (res.ok) {
        await db.storageObject.upsert({
          where: { key },
          create: { key, accountId: acc.id, sizeBytes: body.length },
          update: { accountId: acc.id, sizeBytes: body.length },
        });
        return { url: publicUrl(acc, key), accountId: acc.id };
      }
      lastText = res.body?.toString("utf8").slice(0, 400) ?? "";
      if (looksLikeQuotaError(res.status, lastText)) {
        await markExhausted(acc.id);
        continue; // fail over to next account
      }
      return null; // non-quota error — do not burn through the pool
    } catch {
      continue;
    }
  }
  void lastText;
  return null;
}

export function publicUrl(acc: PoolAccount, key: string): string {
  const base = acc.publicBaseUrl.replace(/\/+$/, "");
  return `${base}/${key}`;
}

/** Stable public URL for a logical key (used by /api/media/<key> as 302). */
export async function resolveObjectUrl(key: string): Promise<string | null> {
  const obj = await db.storageObject.findUnique({ where: { key } });
  if (!obj) return null;
  const acc = await db.storageAccount.findUnique({ where: { id: obj.accountId } });
  if (!acc) return null;
  return publicUrl(
    {
      id: acc.id,
      label: acc.label,
      provider: acc.provider,
      endpoint: acc.endpoint,
      region: acc.region,
      bucket: acc.bucket,
      publicBaseUrl: acc.publicBaseUrl,
      limitBytes: acc.limitBytes,
      status: acc.status,
      sortOrder: acc.sortOrder,
    },
    key
  );
}

/** Connection probe: PUT a tiny file, read it back, delete it. */
export async function testAccount(
  id: string
): Promise<{ ok: boolean; detail: string }> {
  try {
    const creds = await loadCreds(id);
    const probeKey = `bolo-probe-${Date.now()}.txt`;
    const put = await s3Put(
      creds,
      probeKey,
      Buffer.from("bolo-english pool probe"),
      "text/plain"
    );
    if (!put.ok) {
      const txt = put.body?.toString("utf8").slice(0, 200) ?? "";
      if (looksLikeQuotaError(put.status, txt))
        return { ok: false, detail: `quota/limit (HTTP ${put.status})` };
      return { ok: false, detail: `upload failed (HTTP ${put.status}) ${txt}` };
    }
    const get = await s3Get(creds, probeKey);
    const del = await s3Delete(creds, probeKey);
    if (!get.ok)
      return {
        ok: false,
        detail: "upload OK but public read path not verified (GET failed)",
      };
    return { ok: true, detail: `OK — PUT/GET/DELETE verified (DELETE ${del.status})` };
  } catch (e) {
    return { ok: false, detail: (e as Error)?.message || "unknown error" };
  }
}
