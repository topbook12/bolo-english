import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
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
  const body = await req.json().catch(() => null);
  const deviceId = typeof body?.deviceId === "string" ? body.deviceId.slice(0, 80) : "";
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: "deviceId required" }, { status: 400 });
  }
  if (!checkRateLimit(`register:${deviceId}`)) {
    return NextResponse.json(
      { ok: false, error: "অনেক দ্রুত অনুরোধ — একটু পরে চেষ্টা করুন।" },
      { status: 429 }
    );
  }

  const email = normalizeEmail(body?.email);
  const password = validatePassword(body?.password);
  const name = cleanName(body?.name);

  if (!email) {
    return NextResponse.json(
      { ok: false, error: "সঠিক ইমেইল দিন (যেমন: name@gmail.com)।" },
      { status: 400 }
    );
  }
  if (!password) {
    return NextResponse.json(
      { ok: false, error: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।" },
      { status: 400 }
    );
  }

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json(
      { ok: false, error: "এই ইমেইলে আগেই অ্যাকাউন্ট খোলা আছে — লগইন করুন।" },
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
