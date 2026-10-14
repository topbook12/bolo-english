import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reqLocale, apiMsg, type ApiLocale, type ApiMsgKey } from "@/lib/api-i18n";
import { encryptKey } from "@/lib/crypto";
import {
  listAccounts,
  setActive,
  markExhausted,
  testAccount,
} from "@/lib/storage-pool";
import { aiCacheStats, dbTableStats } from "@/lib/ai-cache-prune";
import { isAdminToken, adminAvailable } from "@/lib/admin-auth";

// Site-owner admin API for the zero-cost storage pool + quota dashboard.
//
// Security: every mutating call must send header `x-admin-token` equal to the
// STORAGE_ADMIN_TOKEN environment variable. When the env var is not set the
// API stays locked (403) — safe default on Vercel.

export const runtime = "nodejs";

function authorized(req: NextRequest): boolean {
  return isAdminToken(req.headers.get("x-admin-token"));
}

function jsonErr(locale: ApiLocale, key: ApiMsgKey, status: number) {
  return NextResponse.json({ error: apiMsg(locale, key) }, { status });
}

function maskUrl(u: string): string {
  try {
    const p = new URL(u);
    return `${p.protocol}//${p.host}`;
  } catch {
    return "invalid-url";
  }
}

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const accounts = await listAccounts();
  const objects = await db.storageObject.aggregate({
    _count: { key: true },
    _sum: { sizeBytes: true },
  });
  const [cache, tables] = await Promise.all([aiCacheStats(), dbTableStats()]);
  return NextResponse.json({
    adminConfigured: adminAvailable(),
    accounts: accounts.map((a) => ({
      ...a,
      endpoint: maskUrl(a.endpoint),
      publicBaseUrl: maskUrl(a.publicBaseUrl),
    })),
    objects: { count: objects._count.key, bytes: objects._sum.sizeBytes ?? 0 },
    aiCache: cache,
    tables: tables.map((t) => ({
      model: t.model,
      rows: t.rows >= 0 ? t.rows : 0,
    })),
    // Free-tier reference values for the dashboard (what the owner is working against)
    limits: {
      tursoBytes: 5 * 1024 * 1024 * 1024, // 5 GB storage
      vercelBandwidthBytes: 100 * 1024 * 1024 * 1024, // 100 GB / month
      siteContentBytes: 3 * 1024 * 1024, // static site payload (~2.4 MB)
    },
  });
}

export async function POST(req: NextRequest) {
  const locale = reqLocale(req) as ApiLocale;
  if (!authorized(req)) return jsonErr(locale, "storageAdminRequired", 403);
  const body = await req.json().catch(() => null);
  if (!body) return jsonErr(locale, "paramsRequired", 400);

  // ── action: test an existing account ──
  if (body.action === "test") {
    if (!body.id) return jsonErr(locale, "paramsRequired", 400);
    const r = await testAccount(String(body.id));
    return NextResponse.json(r);
  }
  // ── action: rotate (activate next healthy account) ──
  if (body.action === "rotate") {
    const accounts = await listAccounts();
    const healthy = accounts.filter(
      (a) => a.status === "active" || a.status === "exhausted"
    );
    if (healthy.length < 2)
      return NextResponse.json({
        ok: false,
        detail: apiMsg(locale, "storageNoOther"),
      });
    const next = healthy[1]; // listAccounts orders active first
    await setActive(next.id);
    return NextResponse.json({ ok: true, detail: next.label });
  }

  // ── default: add a new account ──
  const label = String(body.label || "").trim();
  const endpoint = String(body.endpoint || "").trim().replace(/\/+$/, "");
  const bucket = String(body.bucket || "").trim();
  const accessKey = String(body.accessKey || "").trim();
  const secretKey = String(body.secretKey || "").trim();
  const publicBaseUrl = String(body.publicBaseUrl || "").trim().replace(/\/+$/, "");
  const limitBytes = Math.max(0, Math.floor(Number(body.limitBytes || 0)));
  if (!label || !endpoint || !bucket || !accessKey || !secretKey || !publicBaseUrl) {
    return jsonErr(locale, "storageFieldsRequired", 400);
  }
  if (!/^https:\/\//.test(endpoint) || !/^https:\/\//.test(publicBaseUrl)) {
    return jsonErr(locale, "storageHttpsRequired", 400);
  }
  const last = await db.storageAccount.findFirst({
    orderBy: { sortOrder: "desc" },
  });
  const acc = await db.storageAccount.create({
    data: {
      label,
      endpoint,
      bucket,
      accessKeyEnc: encryptKey(accessKey),
      secretKeyEnc: encryptKey(secretKey),
      publicBaseUrl,
      limitBytes,
      region: String(body.region || "auto"),
      status: "active",
      sortOrder: (last?.sortOrder ?? 0) + 1,
    },
  });
  // Multiple accounts: the new one takes over as the single active slot.
  const count = await db.storageAccount.count();
  if (count > 1) await setActive(acc.id);
  const probe = await testAccount(acc.id);
  return NextResponse.json({ ok: probe.ok, id: acc.id, detail: probe.detail });
}

export async function PATCH(req: NextRequest) {
  const locale = reqLocale(req) as ApiLocale;
  if (!authorized(req)) return jsonErr(locale, "storageAdminRequired", 403);
  const body = await req.json().catch(() => null);
  const id = String(body?.id || "");
  const action = String(body?.action || "");
  if (!id || !action) return jsonErr(locale, "paramsRequired", 400);
  if (action === "activate") {
    await setActive(id);
    return NextResponse.json({ ok: true });
  }
  if (action === "disable") {
    await db.storageAccount.update({ where: { id }, data: { status: "disabled" } });
    return NextResponse.json({ ok: true });
  }
  if (action === "mark-exhausted") {
    await markExhausted(id);
    return NextResponse.json({ ok: true });
  }
  return jsonErr(locale, "unknownAction", 400);
}

export async function DELETE(req: NextRequest) {
  const locale = reqLocale(req) as ApiLocale;
  if (!authorized(req)) return jsonErr(locale, "storageAdminRequired", 403);
  const id = new URL(req.url).searchParams.get("id");
  if (!id) return jsonErr(locale, "paramsRequired", 400);
  await db.storageAccount.delete({ where: { id } }).catch(() => null);
  await db.storageObject.deleteMany({ where: { accountId: id } });
  return NextResponse.json({ ok: true });
}
