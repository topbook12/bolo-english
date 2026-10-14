import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import {
  db,
  hashPassword,
  normalizeEmail,
  validatePassword,
  cleanName,
  setSessionCookie,
  mergeDeviceData,
} from "@/lib/auth";

// POST /api/auth/register  { deviceId, email, password, name? }
export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  const body = await req.json().catch(() => null);
  const deviceId = typeof body?.deviceId === "string" ? body.deviceId.slice(0, 80) : "";
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  }
  if (!checkRateLimit(`register:${deviceId}`)) {
    return NextResponse.json(
      { ok: false, error: apiMsg(reqLocale(req), "rateLimited") },
      { status: 429 }
    );
  }

  const email = normalizeEmail(body?.email);
  const password = validatePassword(body?.password);
  const name = cleanName(body?.name);

  if (!email) {
    return NextResponse.json(
      { ok: false, error: apiMsg(reqLocale(req), "invalidEmail") },
      { status: 400 }
    );
  }
  if (!password) {
    return NextResponse.json(
      { ok: false, error: apiMsg(reqLocale(req), "weakPassword") },
      { status: 400 }
    );
  }

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json(
      { ok: false, error: apiMsg(reqLocale(req), "emailTaken") },
      { status: 409 }
    );
  }

  const passwordHash = await hashPassword(password);
  const user = await db.user.create({
    data: { email, passwordHash, name },
  });

  // Adopt this device's guest config (key/name/level) into the new account —
  // only an untagged (guest) row is claimed, so the key follows the account
  // from now on and can never leak to a different email on this device.
  await db.userConfig
    .updateMany({
      where: { deviceId, userId: null },
      data: { userId: user.id },
    })
    .catch(() => null);
  await setSessionCookie(user.id);
  await mergeDeviceData(user.id, deviceId);

  return NextResponse.json({
    ok: true,
    data: { user: { id: user.id, email: user.email, name: user.name } },
  });
}
