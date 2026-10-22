import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { LOCALE_COOKIE } from "@/i18n/config";
import {
  db,
  verifyPassword,
  normalizeEmail,
  setSessionCookie,
  mergeDeviceData,
  promoteAdminsIfEnv,
  isAdminEmail,
} from "@/lib/auth";

// POST /api/auth/login  { deviceId, email, password }
export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  const body = await req.json().catch(() => null);
  const deviceId = typeof body?.deviceId === "string" ? body.deviceId.slice(0, 80) : "";
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  }
  const email = normalizeEmail(body?.email);
  const password = typeof body?.password === "string" ? body.password : "";
  if (!email || !password) {
    return NextResponse.json(
      { ok: false, error: apiMsg(reqLocale(req), "missingCredentials") },
      { status: 400 }
    );
  }
  if (!checkRateLimit(`login:${email}`)) {
    return NextResponse.json(
      { ok: false, error: apiMsg(reqLocale(req), "rateLimited") },
      { status: 429 }
    );
  }

  const user = await db.user.findUnique({ where: { email } });
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json(
      { ok: false, error: apiMsg(reqLocale(req), "wrongCredentials") },
      { status: 401 }
    );
  }

  // Device-guest key adoption (guest save → account) happens lazily in
  // resolveAccountRow on the next config read — account-first, and only from
  // untagged guest rows, so a different email never inherits a key here.
  await setSessionCookie(user.id);
  await mergeDeviceData(user.id, deviceId);
  // Site owner auto-promotion: email listed in ADMIN_EMAILS → role "admin"
  // (awaited so /api/auth/me already sees it right after login; no-op for
  // everyone else).
  await promoteAdminsIfEnv(user);

  // Task 27-c: the account's language rules every device. Re-point the
  // bolo_locale cookie to User.nativeLang on login; accounts without a
  // saved language keep the current cookie value (no language change).
  const accountLang = user.nativeLang;
  const localeToSet = accountLang === "bn" || accountLang === "en" || accountLang === "hi"
    ? accountLang
    : locale; // reqLocale(): existing cookie value (or the app default)
  const res = NextResponse.json({
    ok: true,
    // role lets the client store show/hide the admin cards immediately
    // (additive field; /api/auth/me returns the same shape).
    data: {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: isAdminEmail(user.email) || user.role === "admin" ? "admin" : null,
        nativeLang: user.nativeLang,
      },
    },
  });
  res.cookies.set(LOCALE_COOKIE, localeToSet, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
