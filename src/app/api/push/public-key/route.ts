import { NextResponse } from "next/server";
import { vapidPublicKey } from "@/lib/push-server";

// GET /api/push/public-key → { publicKey: string | null }
// null = VAPID not configured on this deployment — the client hides the
// push card instead of offering a button that can't work.
export async function GET() {
  return NextResponse.json({ ok: true, publicKey: vapidPublicKey() });
}
