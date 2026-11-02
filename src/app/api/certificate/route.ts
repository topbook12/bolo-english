import { NextRequest, NextResponse } from "next/server";
import { randomInt } from "crypto";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { ensureDbTables } from "@/lib/db-bootstrap";
import { computeStreaks, todayLocalDay } from "@/lib/streak-days";

export const dynamic = "force-dynamic";

// ─── Certificate API (D40, ROADMAP-60) ──────────────────────────────────────
// POST /api/certificate { deviceId } → issue ONE certificate for the signed-in
// learner. Requires LOGIN (a certificate is a document about a person).
// Eligibility is computed SERVER-SIDE from honest ledgers only — the client
// never sends a number: totalXp (XpEvent sum), activeDays (ActivityDay count),
// current streak (pure streak-days math over client-local day strings).
//   • eligible:        XP ≥ 1000 AND activeDays ≥ 14
//   • tier "achiever": XP ≥ 3000 AND activeDays ≥ 30, else "learner"
// The verify code is issuer-signed looking (BOLO-XXXX-XXXX, no 0/O/1/I) and
// unique — collision retries make the 31^8 space effectively infinite.
//
// GET /api/certificate?deviceId=… → my certificates, newest first (cap 20).
// Signed in: the ACCOUNT's certificates (all devices) + this device's rows.
// Signed out: device scope only. Also returns `progress` — the live XP /
// active-days numbers the card needs to draw the eligibility bars in the
// same single request.

interface CertStats {
  xp: number;
  activeDays: number;
  streak: number;
}

const XP_GOAL = 1000;
const DAYS_GOAL = 14;
const ACHIEVER_XP = 3000;
const ACHIEVER_DAYS = 30;

// No 0/O/1/I — a verify code must be unambiguous when read aloud or typed.
const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

function randomChunk(len: number): string {
  let out = "";
  for (let i = 0; i < len; i++) out += CODE_ALPHABET[randomInt(CODE_ALPHABET.length)];
  return out;
}

const newCode = () => `BOLO-${randomChunk(4)}-${randomChunk(4)}`;

function isUniqueViolation(e: unknown): boolean {
  return typeof e === "object" && e !== null && (e as { code?: string }).code === "P2002";
}

function parseStats(raw: string): CertStats {
  try {
    const o = JSON.parse(raw) as Partial<CertStats>;
    return {
      xp: Number(o.xp) || 0,
      activeDays: Number(o.activeDays) || 0,
      streak: Number(o.streak) || 0,
    };
  } catch {
    return { xp: 0, activeDays: 0, streak: 0 };
  }
}

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);

  // A certificate is a signed document — it needs an account to belong to.
  const user = await getSessionUser().catch(() => null);
  if (!user) {
    return NextResponse.json(
      { ok: false, error: apiMsg(locale, "certLoginRequired") },
      { status: 401 }
    );
  }

  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  if (!deviceId) {
    return NextResponse.json(
      { ok: false, error: apiMsg(locale, "deviceIdRequired") },
      { status: 400 }
    );
  }

  try {
    await ensureDbTables(); // self-migrating: Certificate table appears here

    if (!checkIpLimit(req, "certificate-post", 6, 60_000, deviceId)) {
      return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
    }

    // ── honest stats, recomputed server-side from the ledgers ──
    const [xpAgg, activeDayCount, recentDays, cfg] = await Promise.all([
      db.xpEvent.aggregate({ where: { deviceId }, _sum: { xp: true } }),
      db.activityDay.count({ where: { deviceId } }),
      db.activityDay.findMany({
        where: { deviceId },
        select: { day: true },
        orderBy: { day: "desc" },
        take: 400, // a current streak longer than 400 days still reads fine
      }),
      db.userConfig.findUnique({ where: { deviceId }, select: { displayName: true, level: true } }),
    ]);

    const totalXp = Number(xpAgg._sum.xp ?? 0);
    const activeDays = activeDayCount;
    const streak = computeStreaks(
      recentDays.map((r) => r.day),
      todayLocalDay()
    ).current;

    // Eligibility gate (403, not 400 — the request is valid, the effort isn't there yet).
    if (totalXp < XP_GOAL || activeDays < DAYS_GOAL) {
      return NextResponse.json(
        {
          ok: false,
          error: apiMsg(locale, "certNotEligible", { xp: totalXp, days: activeDays }),
        },
        { status: 403 }
      );
    }

    const tier = totalXp >= ACHIEVER_XP && activeDays >= ACHIEVER_DAYS ? "achiever" : "learner";
    const level = cfg?.level || "beginner";
    const name = (user.name || cfg?.displayName || apiMsg(locale, "learnerName"))
      .trim()
      .slice(0, 60);

    // ── issue with collision-safe code generation (max 5 retries) ──
    let row = null as null | Awaited<ReturnType<typeof db.certificate.create>>;
    for (let attempt = 0; attempt < 5 && !row; attempt++) {
      try {
        row = await db.certificate.create({
          data: {
            code: newCode(),
            userId: user.id,
            deviceId,
            name,
            level,
            tier,
            stats: JSON.stringify({ xp: totalXp, activeDays, streak } satisfies CertStats),
          },
        });
      } catch (e) {
        if (!isUniqueViolation(e)) throw e; // code collision → retry with a new code
      }
    }
    if (!row) {
      return NextResponse.json(
        { ok: false, error: apiMsg(locale, "certCreateFailed") },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      data: {
        id: row.id,
        code: row.code,
        name: row.name,
        level: row.level,
        tier: row.tier,
        stats: parseStats(row.stats),
        createdAt: row.createdAt.toISOString(),
      },
    });
  } catch (e) {
    console.error("[/api/certificate]", e instanceof Error ? `${e.name}: ${e.message}` : String(e));
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));

  const user = await getSessionUser().catch(() => null);
  if (!user && !deviceId) {
    return NextResponse.json(
      { ok: false, error: apiMsg(locale, "deviceIdRequired") },
      { status: 400 }
    );
  }

  try {
    await ensureDbTables();

    // Signed in → account scope (certificates follow the person across
    // devices) UNION this device's rows; signed out → device scope only.
    const where = user
      ? deviceId
        ? { OR: [{ userId: user.id }, { deviceId }] }
        : { userId: user.id }
      : { deviceId };

    const [rows, xpAgg, activeDayCount, recentDays] = await Promise.all([
      db.certificate.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: 20,
      }),
      db.xpEvent.aggregate({ where: { deviceId }, _sum: { xp: true } }),
      deviceId ? db.activityDay.count({ where: { deviceId } }) : Promise.resolve(0),
      deviceId
        ? db.activityDay.findMany({
            where: { deviceId },
            select: { day: true },
            orderBy: { day: "desc" },
            take: 400,
          })
        : Promise.resolve([] as { day: string }[]),
    ]);

    const progress = {
      xp: Number(xpAgg._sum.xp ?? 0),
      activeDays: activeDayCount,
      streak: recentDays.length
        ? computeStreaks(
            recentDays.map((r) => r.day),
            todayLocalDay()
          ).current
        : 0,
    };

    return NextResponse.json({
      ok: true,
      data: rows.map((r) => ({
        id: r.id,
        code: r.code,
        name: r.name,
        level: r.level,
        tier: r.tier,
        stats: parseStats(r.stats),
        createdAt: r.createdAt.toISOString(),
      })),
      progress,
    });
  } catch (e) {
    console.error("[/api/certificate]", e instanceof Error ? `${e.name}: ${e.message}` : String(e));
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
