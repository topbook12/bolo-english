import { NextResponse } from "next/server";
import { db, getSessionUser } from "@/lib/auth";

// GET /api/auth/me → current user or null
export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ ok: true, data: { user } });
  }
  // Task 28: the shared getSessionUser select doesn't fetch the account's
  // locked language — add it additively so /me matches login/register.
  const lang = await db.user.findUnique({
    where: { id: user.id },
    select: { nativeLang: true },
  });
  return NextResponse.json({
    ok: true,
    data: { user: { ...user, nativeLang: lang?.nativeLang ?? null } },
  });
}
