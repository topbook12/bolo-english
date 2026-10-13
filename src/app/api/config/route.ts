import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { encryptKey, maskKey, isValidGeminiKeyFormat } from "@/lib/crypto";
import { geminiText } from "@/lib/gemini";

// GET /api/config?deviceId=...  → masked profile (key never returned raw)
export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get("deviceId");
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: "deviceId required" }, { status: 400 });
  }
  const cfg = await db.userConfig.findUnique({ where: { deviceId } });
  if (!cfg || !cfg.keyPreview) {
    return NextResponse.json({
      ok: true,
      data: { hasKey: false, keyPreview: null, displayName: "শিক্ষার্থী", level: "beginner" },
    });
  }
  return NextResponse.json({
    ok: true,
    data: {
      hasKey: true,
      keyPreview: cfg.keyPreview,
      displayName: cfg.displayName,
      level: cfg.level,
    },
  });
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

  if (typeof body.apiKey === "string" && body.apiKey.trim()) {
    const key = body.apiKey.trim();
    if (!isValidGeminiKeyFormat(key)) {
      return NextResponse.json(
        { ok: false, error: "কী-এর ফরম্যাট ঠিক দেখাচ্ছে না। AI Studio থেকে কপি করে আবার দিন।" },
        { status: 400 }
      );
    }
    // Verify the key with a tiny request before storing it
    try {
      await geminiText(key, "Reply with exactly: OK", {
        temperature: 0,
        maxOutputTokens: 512,
      });
    } catch (e) {
      return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 400 });
    }
    update.apiKeyEnc = encryptKey(key);
    update.keyPreview = maskKey(key);
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ ok: false, error: "nothing to update" }, { status: 400 });
  }

  await db.userConfig.upsert({
    where: { deviceId },
    create: {
      deviceId,
      apiKeyEnc: (update.apiKeyEnc as string) ?? "",
      keyPreview: (update.keyPreview as string) ?? "",
      displayName: (update.displayName as string) ?? "শিক্ষার্থী",
      level: (update.level as string) ?? "beginner",
    },
    update,
  });

  const cfg = await db.userConfig.findUnique({ where: { deviceId } });
  return NextResponse.json({
    ok: true,
    data: {
      hasKey: !!cfg?.keyPreview,
      keyPreview: cfg?.keyPreview ?? null,
      displayName: cfg?.displayName,
      level: cfg?.level,
    },
  });
}

// DELETE /api/config?deviceId=... → remove saved key
export async function DELETE(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get("deviceId");
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: "deviceId required" }, { status: 400 });
  }
  await db.userConfig.updateMany({
    where: { deviceId },
    data: { apiKeyEnc: "", keyPreview: "" },
  });
  return NextResponse.json({ ok: true });
}
