import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { cleanDeviceId, cleanStr } from "@/lib/validate";
import { checkIpLimit, hitLimit } from "@/lib/rate-limit";
import { normalizeCvData } from "@/lib/cv/types";

// ─── CV Studio CRUD ─────────────────────────────────────────────────────────
// GET  /api/cv?deviceId=…          → list the device's CVs (newest first)
// POST /api/cv {deviceId,title,data} → create (cap 20 per device)

const MAX_CV_PER_DEVICE = 20;
// Full CvData JSON incl. a resized photo (~50-150KB base64) must fit.
const MAX_DATA_CHARS = 2_000_000;

function ipOf(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
}

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });

  try {
    const rows = await db.cvDocument.findMany({
      where: { deviceId },
      orderBy: { updatedAt: "desc" },
      take: MAX_CV_PER_DEVICE,
    });
    return NextResponse.json({
      ok: true,
      data: rows.map((r) => ({
        id: r.id,
        title: r.title,
        updatedAt: r.updatedAt,
        data: normalizeCvData(JSON.parse(r.data)),
      })),
    });
  } catch {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  if (!checkIpLimit(req, "cv-post", 30) || !hitLimit(`cv:${ipOf(req)}`, 30, 60_000)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  }
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
    const count = await db.cvDocument.count({ where: { deviceId } });
    if (count >= MAX_CV_PER_DEVICE)
      return NextResponse.json({ ok: false, error: apiMsg(locale, "cvLimitReached") }, { status: 400 });
    const row = await db.cvDocument.create({ data: { deviceId, title, data: json } });
    return NextResponse.json({ ok: true, data: { id: row.id, updatedAt: row.updatedAt } });
  } catch {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
