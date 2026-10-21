import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { encryptKey, maskKey } from "@/lib/crypto";
import { sanitizeApiKey, isValidGeminiKeyFormat } from "@/lib/key-format";
import { geminiText, GeminiError } from "@/lib/gemini";
import { getSessionUser } from "@/lib/auth";
import { resolveConfigRow } from "@/lib/user-config";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { isNoName } from "@/lib/no-name";

// Display name precedence: account name → custom device name → null (client localizes)
function resolveName(
  userName: string | null | undefined,
  deviceName: string | null | undefined
): string | null {
  const n = userName?.trim();
  if (n && !isNoName(n)) return n.slice(0, 24);
  const d = deviceName?.trim();
  if (d && !isNoName(d)) return d.slice(0, 24);
  return null;
}

/* ── storage error → clear, actionable message ────────────────────────────
 * On a misconfigured deployment (Vercel without TURSO_DATABASE_URL) the DB
 * layer used to throw an unhandled Prisma error → bare 500 "Internal Server
 * Error" → the client's res.json() crashed with a cryptic SyntaxError, and
 * from the user's point of view a perfectly valid API key "just wouldn't
 * save". Every DB call below is wrapped so the user always gets a message
 * that names the exact fix. */
function storageErrorResponse(e: unknown, locale: ReturnType<typeof reqLocale>): NextResponse {
  const msg = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
  const notConfigured =
    /P1012|Environment variable|not found|DATABASE_URL|TURSO/i.test(msg);
  console.error("[/api/config] storage error:", msg);
  return NextResponse.json(
    {
      ok: false,
      error: notConfigured
        ? apiMsg(locale, "dbNotConfigured")
        : apiMsg(locale, "dbConnectFailed"),
      storage: true,
    },
    { status: 503 }
  );
}

/* ── Row targeting ──────────────────────────────────────────────────────────
 * The API key follows the ACCOUNT, not the device:
 *   - logged in → read/write the row tagged with the user's userId, so the
 *     same email sees the same key on every device, and a different email on
 *     this device never inherits it;
 *   - guest → the device-local row (unchanged behavior). */
type ConfigUpdate = {
  apiKeyEnc?: string;
  keyPreview?: string;
  displayName?: string;
  level?: string;
};

async function writeConfig(
  deviceId: string,
  update: ConfigUpdate
): Promise<void> {
  const user = await getSessionUser();

  if (user) {
    const acc = await db.userConfig.findFirst({
      where: { userId: user.id },
      orderBy: { updatedAt: "desc" },
    });
    if (acc) {
      await db.userConfig.update({ where: { id: acc.id }, data: update });
    } else {
      try {
        await db.userConfig.create({
          data: {
            // Synthetic per-account deviceId — can never collide with real
            // client device ids (random UUIDs).
            deviceId: `account:${user.id}`,
            userId: user.id,
            apiKeyEnc: update.apiKeyEnc ?? "",
            keyPreview: update.keyPreview ?? "",
            displayName: update.displayName ?? "",
            level: update.level ?? "beginner",
          },
        });
      } catch {
        // Raced with account-row adoption (parallel request) — update instead.
        const acc2 = await db.userConfig.findFirst({
          where: { userId: user.id },
        });
        if (!acc2) throw new Error("userConfig account row create failed");
        await db.userConfig.update({ where: { id: acc2.id }, data: update });
      }
    }
    // Scrub any leftover guest key in THIS device's slot so a different email
    // logging in here can never inherit it. Only untagged (guest) rows are
    // touched — never another account's row.
    await db.userConfig
      .updateMany({
        where: { deviceId, userId: null },
        data: { apiKeyEnc: "", keyPreview: "" },
      })
      .catch(() => null);
    return;
  }

  // Guest → device-local row
  await db.userConfig.upsert({
    where: { deviceId },
    create: {
      deviceId,
      apiKeyEnc: update.apiKeyEnc ?? "",
      keyPreview: update.keyPreview ?? "",
      displayName: update.displayName ?? "",
      level: update.level ?? "beginner",
    },
    update,
  });
}

// GET /api/config?deviceId=...  → masked profile (key never returned raw)
export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  }
  try {
    const [cfg, user] = await Promise.all([
      resolveConfigRow(deviceId),
      getSessionUser(),
    ]);
    const name = resolveName(user?.name, cfg?.displayName);
    if (!cfg || !cfg.keyPreview) {
      return NextResponse.json({
        ok: true,
        data: {
          hasKey: false,
          keyPreview: null,
          displayName: name,
          level: cfg?.level ?? "beginner",
        },
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
    return storageErrorResponse(e, reqLocale(req));
  }
}

// POST /api/config  { deviceId, apiKey?, displayName?, level? }
export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  // IP limiter: key saving triggers a live Gemini verification call —
  // a flood here would burn verification requests (audit P0-3).
  if (!checkIpLimit(req, "config-post", 15)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  }
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  }
  const { displayName, level } = body;

  const update: ConfigUpdate = {};
  if (typeof displayName === "string" && displayName.trim()) {
    update.displayName = displayName.trim().slice(0, 24);
  }
  if (typeof level === "string" && ["beginner", "intermediate", "advanced"].includes(level)) {
    update.level = level;
  }

  let warning: string | null = null;

  if (typeof body.apiKey === "string" && body.apiKey.trim()) {
    // Strip zero-width chars / quotes / stray whitespace that sneaks in when
    // copying the key on mobile, then auto-extract a complete 39-char Gemini
    // key from copied-with-junk text ("Key: AIza…", trailing dari, etc.).
    const key = sanitizeApiKey(String(body.apiKey));
    if (!key || !isValidGeminiKeyFormat(key)) {
      // Diagnostic, not a dead end: show exactly what arrived (length + the
      // first characters) so the user can see WHAT went wrong with the copy.
      console.warn(
        `[config] key rejected: len=${key.length} prefix=${JSON.stringify(key.slice(0, 6))}`
      );
      return NextResponse.json(
        {
          ok: false,
          error: apiMsg(reqLocale(req), "keyDiag", {
            len: key.length,
            prefix: key.slice(0, 4) || "—",
          }),
        },
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
        // Google rejected the key itself → refuse to save (localized), plus
        // the raw Google message as `detail` for self-diagnosis.
        const ge = e as GeminiError;
        return NextResponse.json(
          {
            ok: false,
            error: ge.code ? apiMsg(reqLocale(req), ge.code) : ge.message,
            detail: ge.raw || ge.message,
          },
          { status: 400 }
        );
      }
      warning = apiMsg(reqLocale(req), "keyUnverified", {
        reason: (e as Error).message.slice(0, 120),
      });
    }
    update.apiKeyEnc = encryptKey(key);
    update.keyPreview = maskKey(key);
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "nothingToUpdate") }, { status: 400 });
  }

  try {
    await writeConfig(deviceId, update);

    // Keep the account in sync: a logged-in user's display-name edit updates
    // their User.name too, so greeting + AI personalization stay consistent.
    const user = await getSessionUser();
    const savedName = typeof update.displayName === "string" ? update.displayName : null;
    if (user && savedName) {
      await db.user.update({ where: { id: user.id }, data: { name: savedName } }).catch(() => null);
    }

    const cfg = await resolveConfigRow(deviceId);
    return NextResponse.json({
      ok: true,
      warning,
      data: {
        hasKey: !!cfg?.keyPreview,
        keyPreview: cfg?.keyPreview || null,
        displayName: resolveName(savedName ?? user?.name, cfg?.displayName),
        level: cfg?.level,
      },
    });
  } catch (e) {
    return storageErrorResponse(e, reqLocale(req));
  }
}

// DELETE /api/config?deviceId=... → remove saved key (account + this device)
export async function DELETE(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  }
  try {
    const user = await getSessionUser();
    if (user) {
      await db.userConfig.updateMany({
        where: { userId: user.id },
        data: { apiKeyEnc: "", keyPreview: "" },
      });
    }
    await db.userConfig.updateMany({
      where: { deviceId },
      data: { apiKeyEnc: "", keyPreview: "" },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return storageErrorResponse(e, reqLocale(req));
  }
}
