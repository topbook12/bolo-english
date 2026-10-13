import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { encryptKey, maskKey } from "@/lib/crypto";
import { sanitizeApiKey, isValidGeminiKeyFormat } from "@/lib/key-format";
import { geminiText, GeminiError } from "@/lib/gemini";
import { getSessionUser } from "@/lib/auth";

// Internal "no name" marker stored in the DB; the client localizes its own
// fallback so a guest sees "Student" / "শিক্ষার্থী" / "छात्र" per UI language.
const NO_NAME = "শিক্ষার্থী";

// Display name precedence: account name → custom device name → null (client localizes)
function resolveName(
  userName: string | null | undefined,
  deviceName: string | null | undefined
): string | null {
  const n = userName?.trim();
  if (n && n !== NO_NAME) return n.slice(0, 24);
  const d = deviceName?.trim();
  if (d && d !== NO_NAME) return d.slice(0, 24);
  return null;
}

/* ── storage error → clear, actionable message ────────────────────────────
 * On a misconfigured deployment (Vercel without TURSO_DATABASE_URL) the DB
 * layer used to throw an unhandled Prisma error → bare 500 "Internal Server
 * Error" → the client's res.json() crashed with a cryptic SyntaxError, and
 * from the user's point of view a perfectly valid API key "just wouldn't
 * save". Every DB call below is wrapped so the user always gets a message
 * that names the exact fix. */
function storageErrorResponse(e: unknown): NextResponse {
  const msg = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
  const notConfigured =
    /P1012|Environment variable|not found|DATABASE_URL|TURSO/i.test(msg);
  console.error("[/api/config] storage error:", msg);
  return NextResponse.json(
    {
      ok: false,
      error: notConfigured
        ? "সার্ভারের ডাটাবেস এখনো কনফিগার করা হয়নি — Vercel Dashboard → আপনার Project → Settings → Environment Variables-এ TURSO_DATABASE_URL ও TURSO_AUTH_TOKEN যোগ করে Redeploy দিন। এর পরে কী সেভ হবে।"
        : "সার্ভারের ডাটাবেসে সংযোগ করা যাচ্ছে না — কিছুক্ষণ পর আবার চেষ্টা করুন।",
      storage: true,
    },
    { status: 503 }
  );
}

// GET /api/config?deviceId=...  → masked profile (key never returned raw)
export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get("deviceId");
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: "deviceId required" }, { status: 400 });
  }
  try {
    const [cfg, user] = await Promise.all([
      db.userConfig.findUnique({ where: { deviceId } }),
      getSessionUser(),
    ]);
    const name = resolveName(user?.name, cfg?.displayName);
    if (!cfg || !cfg.keyPreview) {
      return NextResponse.json({
        ok: true,
        data: { hasKey: false, keyPreview: null, displayName: name, level: "beginner" },
      });
    }
    return NextResponse.json({
      ok: true,
      data: {
        hasKey: true,
        keyPreview: cfg.keyPreview,
        displayName: name,
        level: cfg.level,
      },
    });
  } catch (e) {
    return storageErrorResponse(e);
  }
}

// POST /api/config  { deviceId, apiKey?, displayName?, level? }
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.deviceId) {
    return NextResponse.json({ ok: false, error: "deviceId required" }, { status: 400 });
  }
  const { deviceId, displayName, level } = body;

  const update: Record<string, unknown> = {};
  if (typeof displayName === "string" && displayName.trim()) {
    update.displayName = displayName.trim().slice(0, 24);
  }
  if (typeof level === "string" && ["beginner", "intermediate", "advanced"].includes(level)) {
    update.level = level;
  }

  let warning: string | null = null;

  if (typeof body.apiKey === "string" && body.apiKey.trim()) {
    // Strip zero-width chars / quotes / stray whitespace that sneaks in when
    // copying the key on mobile — a perfectly valid key used to be rejected
    // with a confusing "format" error because of invisible characters.
    const key = sanitizeApiKey(String(body.apiKey));
    if (!key || !isValidGeminiKeyFormat(key)) {
      return NextResponse.json(
        { ok: false, error: "কীটি সম্পূর্ণ কপি হয়নি বা ভুল — AI Studio-তে কী-টি খুলে COPY আইকনে চাপ দিয়ে আবার পেস্ট করুন।" },
        { status: 400 }
      );
    }
    // Verify the key with a tiny request before storing it. Semantics matter:
    //  - 401 (Google rejected the key itself) → refuse to save, tell the user
    //  - anything else (quota 429, region/permission 403, Google 5xx, network
    //    timeout) → the key was never proven invalid, so SAVE it and surface
    //    a warning. A valid key failing to save was the top user complaint.
    try {
      await geminiText(key, "Reply with exactly: OK", {
        temperature: 0,
        maxOutputTokens: 512,
      });
    } catch (e) {
      const status = e instanceof GeminiError ? e.status : 0;
      if (status === 401) {
        return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 400 });
      }
      warning = `কী সেভ হয়েছে, তবে যাচাই করা যায়নি — ${(e as Error).message}`;
    }
    update.apiKeyEnc = encryptKey(key);
    update.keyPreview = maskKey(key);
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ ok: false, error: "nothing to update" }, { status: 400 });
  }

  try {
    await db.userConfig.upsert({
      where: { deviceId },
      create: {
        deviceId,
        apiKeyEnc: (update.apiKeyEnc as string) ?? "",
        keyPreview: (update.keyPreview as string) ?? "",
        displayName: (update.displayName as string) ?? NO_NAME,
        level: (update.level as string) ?? "beginner",
      },
      update,
    });

    // Keep the account in sync: a logged-in user's display-name edit updates
    // their User.name too, so greeting + AI personalization stay consistent.
    const savedName = typeof update.displayName === "string" ? update.displayName : null;
    const user = await getSessionUser();
    if (user && savedName) {
      await db.user.update({ where: { id: user.id }, data: { name: savedName } }).catch(() => null);
    }

    const cfg = await db.userConfig.findUnique({ where: { deviceId } });
    return NextResponse.json({
      ok: true,
      warning,
      data: {
        hasKey: !!cfg?.keyPreview,
        keyPreview: cfg?.keyPreview ?? null,
        displayName: resolveName(savedName ?? user?.name, cfg?.displayName),
        level: cfg?.level,
      },
    });
  } catch (e) {
    return storageErrorResponse(e);
  }
}

// DELETE /api/config?deviceId=... → remove saved key
export async function DELETE(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get("deviceId");
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: "deviceId required" }, { status: 400 });
  }
  try {
    await db.userConfig.updateMany({
      where: { deviceId },
      data: { apiKeyEnc: "", keyPreview: "" },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return storageErrorResponse(e);
  }
}
