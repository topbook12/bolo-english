import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { cleanDeviceId } from "@/lib/validate";
import { ensureDbTables } from "@/lib/db-bootstrap";

export const dynamic = "force-dynamic";

// GET /api/ai/usage?deviceId=...&days=7|30 — personal AI usage for the hub.
//
// Source: the privacy-first ai_call analytics rows the /api/ai proxy already
// writes (feature name only, no prompts, no PII). Aggregated HERE in SQL so
// raw rows never leave the server — the response ships counts only.
//
// Ownership:
//   logged in  → the account's rows (userId match) PLUS this device's
//                guest-era rows (userId IS NULL + deviceId), so history
//                survives the login upgrade instead of resetting to zero;
//   guest      → this device's rows only.
//
// Honest-empty: no events → zeros, never an error. Day buckets are UTC
// (same convention as the admin /api/analytics dashboard).

interface KeyRow {
  k: string | null;
  n: bigint | number;
}
interface DayRow {
  d: string;
  n: bigint | number;
}

const num = (v: bigint | number | null | undefined) => Number(v ?? 0);

function dayStr(offsetDays: number): string {
  return new Date(Date.now() - offsetDays * 86_400_000).toISOString().slice(0, 10);
}

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  }
  const daysParam = Number(req.nextUrl.searchParams.get("days") ?? 7);
  const days = daysParam === 30 ? 30 : 7;
  const since = Date.now() - days * 86_400_000;

  try {
    await ensureDbTables().catch(() => null);
    const user = await getSessionUser();

    const ownerSql = user
      ? `(userId = ? OR (userId IS NULL AND deviceId = ?))`
      : `deviceId = ?`;
    const ownerParams: string[] = user ? [user.id, deviceId] : [deviceId];

    const [byFeatureRows, byDayRows] = await Promise.all([
      db.$queryRawUnsafe<KeyRow[]>(
        `SELECT COALESCE(json_extract(props,'$.feature'),'?') k, COUNT(*) n
         FROM AnalyticsEvent
         WHERE name='ai_call' AND ${ownerSql} AND createdAt >= ?
         GROUP BY k ORDER BY n DESC LIMIT 20`,
        ...ownerParams,
        since
      ),
      db.$queryRawUnsafe<DayRow[]>(
        `SELECT substr(datetime(createdAt/1000,'unixepoch'),1,10) d, COUNT(*) n
         FROM AnalyticsEvent
         WHERE name='ai_call' AND ${ownerSql} AND createdAt >= ?
         GROUP BY d ORDER BY d`,
        ...ownerParams,
        since
      ),
    ]);

    const byFeature = (byFeatureRows as KeyRow[])
      .map((r) => ({ feature: String(r.k ?? "?"), count: num(r.n) }))
      .filter((r) => r.feature !== "?");

    // Fill the full window so the chart never has gaps (honest-empty days).
    const byDayMap = new Map<string, number>(
      (byDayRows as DayRow[]).map((r) => [String(r.d), num(r.n)])
    );
    const byDay: { day: string; count: number }[] = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = dayStr(i);
      byDay.push({ day: d, count: byDayMap.get(d) ?? 0 });
    }

    return NextResponse.json({
      ok: true,
      data: {
        days,
        total: byFeature.reduce((s, f) => s + f.count, 0),
        byFeature,
        byDay,
      },
    });
  } catch (e) {
    const msg = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
    console.error("[/api/ai/usage] failed:", msg);
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
