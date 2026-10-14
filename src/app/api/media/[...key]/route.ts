import { NextRequest, NextResponse } from "next/server";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { resolveObjectUrl } from "@/lib/storage-pool";

// Stable public URL for pooled storage objects.
//
// GET /api/media/<logical-key>  →  302 redirect to the object's current home.
// Public URLs never change even when the active storage account is rotated —
// the mapping (StorageObject table) is updated at upload time.

export const runtime = "nodejs";

export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ key: string[] }> }
) {
  const { key } = await ctx.params;
  const logical = key.join("/");
  const url = await resolveObjectUrl(logical);
  if (!url) {
    const locale = reqLocale(req);
    return NextResponse.json({ error: apiMsg(locale, "mediaNotFound") }, { status: 404 });
  }
  return NextResponse.redirect(url, 302);
}
