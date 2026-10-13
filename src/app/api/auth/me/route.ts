import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";

// GET /api/auth/me → current user or null
export async function GET() {
  const user = await getSessionUser();
  return NextResponse.json({ ok: true, data: { user } });
}
