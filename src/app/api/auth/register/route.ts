import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { LOCALE_COOKIE } from "@/i18n/config";
import {
  db,
  hashPassword,
  normalizeEmail,
  validatePassword,
  cleanName,
  setSessionCookie,
  mergeDeviceData,
  promoteAdminsIfEnv,
  isAdminEmail,
} from "@/lib/auth";

// POST /api/auth/register  { deviceId, email, password, name?, nativeLang? }
// Task 27-c: nativeLang ("bn"|"en"|"hi", default "bn") is saved on the User
// at creation and the bolo_locale cookie is set to it — the account's
// language is LOCKED from the very first render (no switcher in the app).
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
  const nativeLang =
    body?.nativeLang === "bn" || body?.nativeLang === "en" || body?.nativeLang === "hi"
      ? body.nativeLang
      : "bn"; // absent/invalid → Bangla (the primary audience)
  const user = await db.user.create({
    data: { email, passwordHash, name, nativeLang },
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
  // Site owner auto-promotion: email listed in ADMIN_EMAILS → role "admin"
  // (awaited so /api/auth/me already sees it right after register; no-op for
  // everyone else).
  await promoteAdminsIfEnv(user);

  const res = NextResponse.json({
    ok: true,
    // role lets the client store show/hide the admin cards immediately
    // (additive field; /api/auth/me returns the same shape).
    data: {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: isAdminEmail(user.email) ? "admin" : null,
      },
    },
  });
  // Lock the UI language to the account's choice (1 year, JS-readable —
  // same attributes as the client helper in src/i18n/locale-cookie.ts).
  res.cookies.set(LOCALE_COOKIE, nativeLang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
