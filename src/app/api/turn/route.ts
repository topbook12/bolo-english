import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reqLocale, apiMsg, type ApiLocale, type ApiMsgKey } from "@/lib/api-i18n";
import { encryptKey } from "@/lib/crypto";
import {
  listTurnKeys,
  setActiveTurn,
  testTurnKey,
} from "@/lib/turn-pool";
import { isAdminToken, adminAvailable } from "@/lib/admin-auth";
import { ensureDbTables } from "@/lib/db-bootstrap";

// Site-owner admin API for the TURN relay pool (Cloudflare Realtime keys).
// Same guard as /api/storage: header x-admin-token must equal the
// STORAGE_ADMIN_TOKEN env var. Locked (403) when the env var is not set.

export const runtime = "nodejs";

function authorized(req: NextRequest): boolean {
  return isAdminToken(req.headers.get("x-admin-token"));
}

function jsonErr(locale: ApiLocale, key: ApiMsgKey, status: number) {
  return NextResponse.json({ error: apiMsg(locale, key) }, { status });
}

export async function GET(req: NextRequest) {
  await ensureDbTables(); // self-heal TurnKey table on production DBs that predate it
  // Hardening (audit P1-10): key ids/labels/status were readable by ANYONE.
  // Booleans stay open (the admin cards need them to know whether to ask for
  // a token); the pool details require a valid admin token.
  const ok = authorized(req);
  const keys = ok ? await listTurnKeys().catch(() => []) : [];
  return NextResponse.json({
    adminConfigured: adminAvailable(),
    keys,
    envKeyConfigured: Boolean(
      process.env.CF_TURN_KEY_ID && process.env.CF_TURN_API_TOKEN
    ),
  });
}

export async function POST(req: NextRequest) {
  const locale = reqLocale(req) as ApiLocale;
  if (!authorized(req)) return jsonErr(locale, "storageAdminRequired", 403);
  await ensureDbTables(); // self-heal schema before mutating
  const body = await req.json().catch(() => null);
  if (!body) return jsonErr(locale, "paramsRequired", 400);

  if (body.action === "test") {
    if (!body.id) return jsonErr(locale, "paramsRequired", 400);
    return NextResponse.json(await testTurnKey(String(body.id)));
  }
  if (body.action === "rotate") {
    const keys = await listTurnKeys();
    const usable = keys.filter((k) => k.status !== "disabled");
    if (usable.length < 2)
      return NextResponse.json({ ok: false, detail: apiMsg(locale, "turnNoOther") });
    await setActiveTurn(usable[1].id);
    return NextResponse.json({ ok: true, detail: usable[1].label });
  }

  // default: add a key
  const label = String(body.label || "").trim();
  const keyId = String(body.keyId || "").trim();
  const apiToken = String(body.apiToken || "").trim();
  if (!label || !keyId || !apiToken)
    return jsonErr(locale, "turnFieldsRequired", 400);
  const last = await db.turnKey.findFirst({ orderBy: { sortOrder: "desc" } });
  const key = await db.turnKey.create({
    data: {
      label,
      keyId,
      apiTokenEnc: encryptKey(apiToken),
      status: "active",
      sortOrder: (last?.sortOrder ?? 0) + 1,
    },
  });
  const count = await db.turnKey.count();
  if (count > 1) await setActiveTurn(key.id);
  const probe = await testTurnKey(key.id);
  return NextResponse.json({ ok: probe.ok, id: key.id, detail: probe.detail });
}

export async function PATCH(req: NextRequest) {
  const locale = reqLocale(req) as ApiLocale;
  if (!authorized(req)) return jsonErr(locale, "storageAdminRequired", 403);
  await ensureDbTables(); // self-heal schema before mutating
  const body = await req.json().catch(() => null);
  const id = String(body?.id || "");
  const action = String(body?.action || "");
  if (!id || !action) return jsonErr(locale, "paramsRequired", 400);
  if (action === "activate") {
    await setActiveTurn(id);
    return NextResponse.json({ ok: true });
  }
  if (action === "disable") {
    await db.turnKey.update({ where: { id }, data: { status: "disabled" } });
    return NextResponse.json({ ok: true });
  }
  return jsonErr(locale, "unknownAction", 400);
}

export async function DELETE(req: NextRequest) {
  const locale = reqLocale(req) as ApiLocale;
  if (!authorized(req)) return jsonErr(locale, "storageAdminRequired", 403);
  await ensureDbTables(); // self-heal schema before mutating
  const id = new URL(req.url).searchParams.get("id");
  if (!id) return jsonErr(locale, "paramsRequired", 400);
  await db.turnKey.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
