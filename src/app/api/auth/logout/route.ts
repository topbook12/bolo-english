import { NextRequest, NextResponse } from "next/server";
import { checkIpLimitStrict } from "@/lib/rate-limit";
import {
  db,
  clearSessionCookie,
  rotateSessionEpoch,
  getSessionUserId,
} from "@/lib/auth";

// POST /api/auth/logout
//
// D50 session rotation: besides clearing the cookie, bump the user's
// session epoch so a copy of the stolen/persisted cookie can no longer be
// replayed after logout (clear-only logout leaves the 30-day JWT valid).
export async function POST(req: NextRequest) {
  // Anonymous call — strict per-IP limit keeps logout spam trivial.
  if (!checkIpLimitStrict(req, "auth-logout", 30)) {
    return NextResponse.json({ ok: false, error: "rate limited" }, { status: 429 });
  }
  const userId = await getSessionUserId();
  if (userId) {
    await rotateSessionEpoch(userId);
  }
  await clearSessionCookie();
  return NextResponse.json({ ok: true });
}
