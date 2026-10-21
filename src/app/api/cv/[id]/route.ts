import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { cleanDeviceId, cleanStr } from "@/lib/validate";
import { checkIpLimit, hitLimit } from "@/lib/rate-limit";
import { normalizeCvData } from "@/lib/cv/types";

// ─── CV Studio: update / delete one CV (device must own it) ─────────────────
// PUT    /api/cv/[id] {deviceId, title, data}
// DELETE /api/cv/[id]?deviceId=…

const MAX_DATA_CHARS = 2_000_000;

function ipOf(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
}

export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const locale = reqLocale(req);
  if (!checkIpLimit(req, "cv-put", 60) || !hitLimit(`cv:${ipOf(req)}`, 60, 60_000)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  }
  const { id } = await ctx.params;
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  const raw = typeof body?.data === "object" && body.data !== null ? body.data : null;
  if (!raw)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "cvDataInvalid") }, { status: 400 });
  const data = normalizeCvData(raw);
  const title = cleanStr(body?.title, 80) || "আমার সিভি";
  const json = JSON.stringify(data);
  if (json.length > MAX_DATA_CHARS)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "cvDataInvalid") }, { status: 413 });

  try {
    const row = await db.cvDocument.findUnique({ where: { id } });
    if (!row || row.deviceId !== deviceId)
      return NextResponse.json({ ok: false, error: apiMsg(locale, "cvNotFound") }, { status: 404 });
    await db.cvDocument.update({ where: { id }, data: { title, data: json } });
    return NextResponse.json({ ok: true, data: { id, updatedAt: new Date() } });
  } catch {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const locale = reqLocale(req);
  const { id } = await ctx.params;
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  try {
    const row = await db.cvDocument.findUnique({ where: { id } });
    if (!row || row.deviceId !== deviceId)
      return NextResponse.json({ ok: false, error: apiMsg(locale, "cvNotFound") }, { status: 404 });
    await db.cvDocument.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
