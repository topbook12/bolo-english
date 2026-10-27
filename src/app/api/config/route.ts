import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { encryptKey, maskKey } from "@/lib/crypto";
import { sanitizeApiKey, isValidGeminiKeyFormat } from "@/lib/key-format";
import { geminiText, GeminiError } from "@/lib/gemini";
import { getSessionUser } from "@/lib/auth";
import { resolveConfigRow } from "@/lib/user-config";
import { MAX_POOL_KEYS } from "@/lib/key-pool";
import { reqLocale, apiMsg, type ApiLocale } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { isNoName } from "@/lib/no-name";
import { AVATARS } from "@/lib/badges";

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
  goal?: string;
  dailyTarget?: number;
  avatar?: string; // D34: emoji key ("" = auto)
  partnerOptIn?: boolean; // D31: opt-in to partner matching
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
            goal: update.goal ?? "general",
            dailyTarget: update.dailyTarget ?? 10,
            avatar: update.avatar ?? "",
            partnerOptIn: update.partnerOptIn ?? false,
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
      goal: update.goal ?? "general",
      dailyTarget: update.dailyTarget ?? 10,
    },
    update,
  });
}

/* ── Key pool (owner requirement: several Gemini keys per account) ──────────
 * Logged-in users save keys into the UserApiKey pool (max MAX_POOL_KEYS);
 * when the active key hits its quota the AI layer rotates to the next one
 * automatically (src/lib/key-pool.ts + src/lib/gemini.ts). The legacy
 * single-key UserConfig row stays in sync for the FIRST pool key only, so
 * old code paths (and the guest-style legacy resolution) keep working.
 * Guests keep the exact pre-pool single-key behavior. */

/** Masked pool row for the browser — NEVER the plaintext key. */
type PoolEntry = {
  id: string;
  keyPreview: string;
  active: boolean;
  inCooldown: boolean;
  failures: number;
};

/** Load + shape the caller's pool rows; undefined when unavailable (guest,
 * pre-migration DB, storage error) so callers can omit the field. */
async function loadPool(
  userId: string
): Promise<PoolEntry[] | undefined> {
  try {
    const rows = await db.userApiKey.findMany({
      where: { userId },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
    });
    const now = Date.now();
    const firstHealthy = rows.findIndex(
      (r) => !r.cooldownUntil || r.cooldownUntil.getTime() <= now
    );
    return rows.map((r, i) => ({
      id: r.id,
      keyPreview: r.keyPreview,
      active: i === firstHealthy,
      inCooldown: !!r.cooldownUntil && r.cooldownUntil.getTime() > now,
      failures: r.failures,
    }));
  } catch (e) {
    // Table missing on a not-yet-migrated production DB etc. — degrade
    // silently, the response stays valid without the pool field.
    console.warn("[/api/config] pool read failed — omitting pool:", (e as Error)?.message ?? e);
    return undefined;
  }
}

/* ── Shared save-gate: sanitize + format check + live Google verification ──
 * Both the pool path and the legacy single-key path run the SAME checks:
 *   - 401 (Google rejected the key itself) → refuse to save, tell the user
 *   - anything else (quota 429, region/permission 403, Google 5xx, network
 *     timeout) → the key was never proven invalid, so SAVE it and surface
 *     a warning. A valid key failing to save was the top user complaint. */
type VerifyResult =
  | { ok: true; key: string; warning: string | null }
  | { ok: false; res: NextResponse };

async function verifyApiKey(raw: string, locale: ApiLocale): Promise<VerifyResult> {
  // Strip zero-width chars / quotes / stray whitespace that sneaks in when
  // copying the key on mobile, then auto-extract a complete 39-char Gemini
  // key from copied-with-junk text ("Key: AIza…", trailing dari, etc.).
  const key = sanitizeApiKey(String(raw));
  if (!key || !isValidGeminiKeyFormat(key)) {
    // Diagnostic, not a dead end: show exactly what arrived (length + the
    // first characters) so the user can see WHAT went wrong with the copy.
    console.warn(
      `[/api/config] key rejected: len=${key.length} prefix=${JSON.stringify(key.slice(0, 6))}`
    );
    return {
      ok: false,
      res: NextResponse.json(
        {
          ok: false,
          error: apiMsg(locale, "keyDiag", {
            len: key.length,
            prefix: key.slice(0, 4) || "—",
          }),
        },
        { status: 400 }
      ),
    };
  }
  // Verify the key with a tiny request before storing it.
  try {
    await geminiText(key, "Reply with exactly: OK", {
      temperature: 0,
      maxOutputTokens: 512,
    });
    return { ok: true, key, warning: null };
  } catch (e) {
    const status = e instanceof GeminiError ? e.status : 0;
    const gerr = e instanceof GeminiError ? e : null;
    if (status === 401 && gerr?.code === "authKeyPending") {
      // Google's new AQ. auth key: the credential TYPE was recognized but
      // Google currently refuses it (known rollout issue — forum-documented,
      // Google support suggests creating a key under a NEW project). The key
      // was never proven invalid → SAVE it and surface the situation. The
      // key starts working the moment Google's side activates it.
      return { ok: true, key, warning: apiMsg(locale, "authKeyPending") };
    }
    if (gerr?.code === "modelIneligible") {
      // Google refused the MODELS for this key ("not eligible to use Gemini
      // 2.5 Flash — use Gemini 2.0 Flash" and the fallback was refused too).
      // The key itself was never proven invalid → SAVE it with a clear,
      // localized explanation instead of Google's raw English text.
      return { ok: true, key, warning: apiMsg(locale, "modelFallbackWarning") };
    }
    if (status === 401) {
      // Google rejected the key string itself → refuse to save (localized),
      // plus the raw Google message as `detail` for self-diagnosis.
      const ge = gerr ?? (e as GeminiError);
      return {
        ok: false,
        res: NextResponse.json(
          {
            ok: false,
            error: ge.code ? apiMsg(locale, ge.code) : ge.message,
            detail: ge.raw || ge.message,
          },
          { status: 400 }
        ),
      };
    }
    return {
      ok: true,
      key,
      warning: apiMsg(locale, "keyUnverified", {
        reason: (e as Error).message.slice(0, 120),
      }),
    };
  }
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
    // Pool previews for logged-in users only (never plaintext keys).
    const pool = user ? await loadPool(user.id) : undefined;
    const base = {
      displayName: name,
      level: cfg?.level ?? "beginner",
      goal: cfg?.goal ?? "general",
      dailyTarget: cfg?.dailyTarget ?? 10,
      avatar: cfg?.avatar ?? "", // D34 emoji key ("" = auto)
      partnerOptIn: cfg?.partnerOptIn ?? false, // D31
      ...(pool ? { pool } : {}),
    };
    if (!cfg || !cfg.keyPreview) {
      return NextResponse.json({ ok: true, data: { hasKey: false, keyPreview: null, ...base } });
    }
    return NextResponse.json({ ok: true, data: { hasKey: true, keyPreview: cfg.keyPreview, ...base } });
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
  const user = await getSessionUser();
  const { displayName, level, goal } = body;

  const update: ConfigUpdate = {};
  if (typeof displayName === "string" && displayName.trim()) {
    update.displayName = displayName.trim().slice(0, 24);
  }
  if (typeof level === "string" && ["beginner", "intermediate", "advanced"].includes(level)) {
    update.level = level;
  }
  // D9: learning goal — whitelisted, shapes the personalized weekly plan.
  if (typeof goal === "string" && ["general", "job", "exam", "travel", "school"].includes(goal)) {
    update.goal = goal;
  }
  // D10: daily practice target in minutes (5|10|20).
  if (body?.dailyTarget === 5 || body?.dailyTarget === 10 || body?.dailyTarget === 20) {
    update.dailyTarget = body.dailyTarget;
  }
  // D34: avatar — whitelisted emoji key ("" = auto by level).
  if (typeof body?.avatar === "string" && AVATARS.includes(body.avatar as never)) {
    update.avatar = body.avatar;
  }
  // D31: partner-matching opt-in (privacy-first — never implied).
  if (typeof body?.partnerOptIn === "boolean") {
    update.partnerOptIn = body.partnerOptIn;
  }

  let warning: string | null = null;
  let poolAdded = false;

  if (typeof body.apiKey === "string" && body.apiKey.trim()) {
    const v = await verifyApiKey(body.apiKey, locale);
    if (!v.ok) return v.res;
    warning = v.warning;
    const enc = encryptKey(v.key);
    const preview = maskKey(v.key);

    if (user) {
      // Logged in → append to the key POOL (previews only ever leave here).
      try {
        const existing = await db.userApiKey.findMany({
          where: { userId: user.id },
          orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
        });
        if (existing.length >= MAX_POOL_KEYS) {
          return NextResponse.json(
            { ok: false, error: apiMsg(locale, "poolFull") },
            { status: 400 }
          );
        }
        const maxSort = existing.reduce((m, r) => Math.max(m, r.sortOrder), 0);
        await db.userApiKey.create({
          data: {
            userId: user.id,
            apiKeyEnc: enc,
            keyPreview: preview,
            sortOrder: maxSort + 1,
          },
        });
        poolAdded = true;
        // Legacy mirror for the FIRST key only, so the legacy single-key
        // path (old devices / pre-pool code) keeps working.
        if (existing.length === 0) {
          update.apiKeyEnc = enc;
          update.keyPreview = preview;
        }
      } catch (e) {
        // Pool table missing on a not-yet-migrated production DB etc. →
        // fall back to the legacy single-key save so the key still lands.
        console.warn(
          "[/api/config] pool write failed — legacy single-key save:",
          (e as Error)?.message ?? e
        );
        update.apiKeyEnc = enc;
        update.keyPreview = preview;
      }
    } else {
      // Guest → exact pre-pool single-key behavior.
      update.apiKeyEnc = enc;
      update.keyPreview = preview;
    }
  }

  if (Object.keys(update).length === 0 && !poolAdded) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "nothingToUpdate") }, { status: 400 });
  }

  try {
    if (Object.keys(update).length > 0) {
      await writeConfig(deviceId, update);
    }

    // Keep the account in sync: a logged-in user's display-name edit updates
    // their User.name too, so greeting + AI personalization stay consistent.
    const savedName = typeof update.displayName === "string" ? update.displayName : null;
    if (user && savedName) {
      await db.user.update({ where: { id: user.id }, data: { name: savedName } }).catch(() => null);
    }

    const cfg = await resolveConfigRow(deviceId);
    return NextResponse.json({
      ok: true,
      warning,
      ...(poolAdded ? { message: apiMsg(locale, "keyPoolAdded") } : {}),
      data: {
        hasKey: !!cfg?.keyPreview,
        keyPreview: cfg?.keyPreview || null,
        displayName: resolveName(savedName ?? user?.name, cfg?.displayName),
        level: cfg?.level,
        goal: cfg?.goal ?? "general",
        dailyTarget: cfg?.dailyTarget ?? 10,
      },
    });
  } catch (e) {
    return storageErrorResponse(e, reqLocale(req));
  }
}

// DELETE /api/config?deviceId=...[&keyId=...]
//   keyId + logged in → remove that one POOL row (only if it belongs to the
//   caller); without keyId → legacy wipe of the saved single key.
export async function DELETE(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  }
  const keyId = cleanDeviceId(req.nextUrl.searchParams.get("keyId"));
  try {
    const user = await getSessionUser();
    if (user && keyId) {
      try {
        const row = await db.userApiKey.findUnique({ where: { id: keyId } });
        if (!row || row.userId !== user.id) {
          // Not found, or belongs to someone else — never leak which.
          return NextResponse.json(
            { ok: false, error: apiMsg(locale, "nothingToUpdate") },
            { status: 404 }
          );
        }
        await db.userApiKey.delete({ where: { id: keyId } });
        // Keep the legacy FIRST-key mirror consistent: if the removed key was
        // the mirrored one, point the mirror at the next pool key (or wipe).
        const rest = await db.userApiKey.findMany({
          where: { userId: user.id },
          orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
        });
        const legacyRow = await db.userConfig.findFirst({ where: { userId: user.id } });
        if (legacyRow && legacyRow.keyPreview === row.keyPreview) {
          const first = rest[0];
          await db.userConfig
            .updateMany({
              where: { userId: user.id },
              data: first
                ? { apiKeyEnc: first.apiKeyEnc, keyPreview: first.keyPreview }
                : { apiKeyEnc: "", keyPreview: "" },
            })
            .catch(() => null);
        }
        return NextResponse.json({ ok: true, message: apiMsg(locale, "keyPoolRemoved") });
      } catch (e) {
        // Pool unavailable (pre-migration DB etc.) → fall through to the
        // legacy wipe so the caller still gets a working delete.
        console.warn(
          "[/api/config] pool delete failed — legacy wipe:",
          (e as Error)?.message ?? e
        );
      }
    }
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
