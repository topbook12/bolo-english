import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import {
  db,
  verifyPassword,
  normalizeEmail,
  setSessionCookie,
  mergeDeviceData,
} from "@/lib/auth";

// POST /api/auth/login  { deviceId, email, password }
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const deviceId = typeof body?.deviceId === "string" ? body.deviceId.slice(0, 80) : "";
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: "deviceId required" }, { status: 400 });
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

  return NextResponse.json({
    ok: true,
    data: { user: { id: user.id, email: user.email, name: user.name } },
  });
}
