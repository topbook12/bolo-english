// ─────────────────────────────────────────────────────────────────────────────
// Production (Turso) DB migration runner — Task 27 delta + schema-drift repair,
// IDEMPOTENT.
//
// What it applies (only the pieces that are MISSING — safe to run any number
// of times, on the wrong machine, or after a partial failure):
//   * User.nativeLang, User.role   (Tasks 27-c / 27-e)
//   * UserApiKey table + index     (Task 27-d key pool)
//   * CvDocument table + index     (CV Studio — found missing on production
//                                   during the 2026-10 drift audit)
//   * AnalyticsEvent table + idx   (D1 product analytics — 60-day roadmap;
//                                   /api/track degrades to console errors
//                                   without it, so apply before the deploy
//                                   that ships D1 reaches production)
//   * Feedback table + idx         (D3 in-app feedback widget — without it
//                                   POST /api/feedback returns 500 on the
//                                   live site, so apply before that deploy)
//   * SessionRating table + idx    (D4 session ratings + NPS — without it
//                                   POST /api/rating returns 500 on the
//                                   live site, so apply before that deploy)
//   * ClientError table + idx      (D5 client error monitoring — without it
//                                   error reports are silently dropped; apply
//                                   before that deploy)
//   * MetricDigest table           (D6 weekly metrics digest — without it the
//                                   weekly snapshot cron fails; apply before
//                                   that deploy)
//
// WHY THIS EXISTS: the new login code (already deployed to Vercel) selects
// User.role / User.nativeLang — until the columns exist in the production
// database, LOGIN ON THE LIVE SITE FAILS. This script closes that gap.
//
// HOW TO RUN (from the project folder, after `bun install`):
//   1. Copy the two values from Vercel → Project → Settings →
//      Environment Variables:  TURSO_DATABASE_URL  and  TURSO_AUTH_TOKEN
//   2. macOS / Linux (bash):
//        export TURSO_DATABASE_URL="libsql://your-db.turso.io"
//        export TURSO_AUTH_TOKEN="your-token"
//        bun scripts/prod-migrate.ts
//      Windows (PowerShell):
//        $env:TURSO_DATABASE_URL = "libsql://your-db.turso.io"
//        $env:TURSO_AUTH_TOKEN   = "your-token"
//        bun scripts/prod-migrate.ts
//
// The token is read from env only — never typed as an argument, never logged.
// A `file:` URL also works (used by the self-test against a scratch DB).
// ─────────────────────────────────────────────────────────────────────────────

import { createClient, type Client } from "@libsql/client";

const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

function log(color: string, msg: string) {
  console.log(`${color}${msg}${RESET}`);
}

async function tablesOf(db: Client): Promise<Set<string>> {
  const res = await db.execute(
    `SELECT name FROM sqlite_master WHERE type='table' ORDER BY name`
  );
  return new Set(res.rows.map((r) => String(r.name)));
}

async function columnsOf(db: Client, table: string): Promise<Set<string>> {
  const res = await db.execute(`PRAGMA table_info("${table}")`);
  return new Set(res.rows.map((r) => String(r.name)));
}

async function main() {
  // IMPORTANT: deliberately NO fallback to DATABASE_URL. Bun auto-loads the
  // project .env (which holds the LOCAL dev DATABASE_URL) — silently running
  // against the local file would print "COMPLETE ✅" while production stays
  // unmigrated. Only an explicit TURSO_DATABASE_URL is accepted.
  const url = process.env.TURSO_DATABASE_URL || "";
  const authToken = process.env.TURSO_AUTH_TOKEN || "";

  if (!url) {
    log(
      RED,
      [
        "MIGRATION FAILED — no database URL found.",
        "",
        "Set the two env vars from Vercel → Settings → Environment Variables:",
        '  export TURSO_DATABASE_URL="libsql://your-db.turso.io"',
        '  export TURSO_AUTH_TOKEN="your-token"',
        "then run:  bun scripts/prod-migrate.ts",
      ].join("\n")
    );
    process.exit(1);
  }

  // Show only the host so the operator can confirm the right database —
  // never print credentials.
  let host = url;
  try {
    host = new URL(url.replace(/^libsql:/, "https:")).host;
    if (!host) host = url; // file: URLs have no host — show the path
  } catch {
    // keep raw url (harmless, local filename only)
  }
  log(GREEN, `Connected → ${host}`);

  const db = createClient({ url, authToken: authToken || undefined });

  // ── Guard: must be the Bolo English database ──────────────────────────────
  const tables = await tablesOf(db);
  if (!tables.has("User")) {
    log(
      RED,
      [
        'MIGRATION ABORTED — no "User" table found in this database.',
        "That means TURSO_DATABASE_URL points at the wrong database.",
        "Nothing was changed. Check the value on Vercel and try again.",
      ].join("\n")
    );
    process.exit(1);
  }

  let changed = 0;

  // ── 1) User.nativeLang ────────────────────────────────────────────────────
  const userCols = await columnsOf(db, "User");
  if (!userCols.has("nativeLang")) {
    await db.execute(`ALTER TABLE "User" ADD COLUMN "nativeLang" TEXT`);
    log(GREEN, 'Added  User.nativeLang  (signup language lock)');
    changed++;
  } else {
    log(YELLOW, 'Skip   User.nativeLang  (already exists)');
  }

  // ── 2) User.role ──────────────────────────────────────────────────────────
  if (!userCols.has("role")) {
    await db.execute(`ALTER TABLE "User" ADD COLUMN "role" TEXT`);
    log(GREEN, 'Added  User.role  (admin role)');
    changed++;
  } else {
    log(YELLOW, 'Skip   User.role  (already exists)');
  }

  // ── 2b) UserConfig.goal (D9 — personalized weekly plan) ──────────────────
  const userConfigCols = await columnsOf(db, "UserConfig");
  if (!userConfigCols.has("goal")) {
    await db.execute(
      `ALTER TABLE "UserConfig" ADD COLUMN "goal" TEXT NOT NULL DEFAULT 'general'`
    );
    log(GREEN, 'Added  UserConfig.goal  (D9 learning goal, default general)');
    changed++;
  } else {
    log(YELLOW, 'Skip   UserConfig.goal  (already exists)');
  }

  // ── 2c) UserConfig.dailyTarget (D10 — onboarding daily target) ──────────
  if (!userConfigCols.has("dailyTarget")) {
    await db.execute(
      `ALTER TABLE "UserConfig" ADD COLUMN "dailyTarget" INTEGER NOT NULL DEFAULT 10`
    );
    log(GREEN, 'Added  UserConfig.dailyTarget  (D10 daily minutes, default 10)');
    changed++;
  } else {
    log(YELLOW, 'Skip   UserConfig.dailyTarget  (already exists)');
  }

  // ── 3) UserApiKey table + index ───────────────────────────────────────────
  if (!tables.has("UserApiKey")) {
    await db.execute(/* sql */ `
      CREATE TABLE "UserApiKey" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "userId" TEXT NOT NULL,
          "apiKeyEnc" TEXT NOT NULL,
          "keyPreview" TEXT NOT NULL,
          "sortOrder" INTEGER NOT NULL DEFAULT 0,
          "cooldownUntil" DATETIME,
          "failures" INTEGER NOT NULL DEFAULT 0,
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" DATETIME NOT NULL
      )
    `);
    log(GREEN, 'Created  UserApiKey table  (Gemini key pool)');
    changed++;
  } else {
    log(YELLOW, "Skip     UserApiKey table  (already exists)");
  }

  const idx = await db.execute(
    `SELECT name FROM sqlite_master WHERE type='index' AND name='UserApiKey_userId_idx'`
  );
  if (idx.rows.length === 0) {
    await db.execute(
      `CREATE INDEX "UserApiKey_userId_idx" ON "UserApiKey"("userId")`
    );
    log(GREEN, "Created  UserApiKey_userId_idx  (index)");
    changed++;
  } else {
    log(YELLOW, "Skip     UserApiKey_userId_idx  (already exists)");
  }

  // ── 4) CvDocument table + index (CV Studio) ──────────────────────────────
  // Found missing on production during the drift audit — CV Studio would
  // 500 on the live site without it.
  if (!tables.has("CvDocument")) {
    await db.execute(/* sql */ `
      CREATE TABLE "CvDocument" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "deviceId" TEXT NOT NULL,
          "title" TEXT NOT NULL DEFAULT 'আমার সিভি',
          "data" TEXT NOT NULL,
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" DATETIME NOT NULL
      )
    `);
    log(GREEN, "Created  CvDocument table  (CV Studio)");
    changed++;
  } else {
    log(YELLOW, "Skip     CvDocument table  (already exists)");
  }

  const cvIdx = await db.execute(
    `SELECT name FROM sqlite_master WHERE type='index' AND name='CvDocument_deviceId_idx'`
  );
  if (cvIdx.rows.length === 0) {
    await db.execute(
      `CREATE INDEX "CvDocument_deviceId_idx" ON "CvDocument"("deviceId")`
    );
    log(GREEN, "Created  CvDocument_deviceId_idx  (index)");
    changed++;
  } else {
    log(YELLOW, "Skip     CvDocument_deviceId_idx  (already exists)");
  }

  // ── 5) AnalyticsEvent table + indexes (D1 product analytics) ─────────────
  // Privacy-first event log (see prisma/schema.prisma comment). All inserts
  // are best-effort on the server, but applying the table keeps the data
  // flowing from day one of the 60-day plan.
  if (!tables.has("AnalyticsEvent")) {
    await db.execute(/* sql */ `
      CREATE TABLE "AnalyticsEvent" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "name" TEXT NOT NULL,
          "deviceId" TEXT NOT NULL,
          "userId" TEXT,
          "props" TEXT NOT NULL DEFAULT '{}',
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
    log(GREEN, "Created  AnalyticsEvent table  (product analytics)");
    changed++;
  } else {
    log(YELLOW, "Skip     AnalyticsEvent table  (already exists)");
  }

  for (const idx of [
    "AnalyticsEvent_name_createdAt_idx",
    "AnalyticsEvent_deviceId_createdAt_idx",
    "AnalyticsEvent_userId_createdAt_idx",
  ] as const) {
    const have = await db.execute(
      `SELECT name FROM sqlite_master WHERE type='index' AND name='${idx}'`
    );
    if (have.rows.length === 0) {
      const target =
        idx === "AnalyticsEvent_name_createdAt_idx"
          ? `("name","createdAt")`
          : idx === "AnalyticsEvent_deviceId_createdAt_idx"
            ? `("deviceId","createdAt")`
            : `("userId","createdAt")`;
      await db.execute(
        `CREATE INDEX "${idx}" ON "AnalyticsEvent"${target}`
      );
      log(GREEN, `Created  ${idx}  (index)`);
      changed++;
    } else {
      log(YELLOW, `Skip     ${idx}  (already exists)`);
    }
  }

  // ── 6) Feedback table + indexes (D3 in-app feedback) ──────────────────────
  // One row = one submission from the floating feedback widget. The admin
  // queue (Settings → Feedback card) reads/writes these. Without the table
  // the submit endpoint 500s on production.
  if (!tables.has("Feedback")) {
    await db.execute(/* sql */ `
      CREATE TABLE "Feedback" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "category" TEXT NOT NULL,
          "message" TEXT NOT NULL,
          "status" TEXT NOT NULL DEFAULT 'new',
          "page" TEXT NOT NULL DEFAULT '',
          "deviceId" TEXT NOT NULL,
          "userId" TEXT,
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" DATETIME NOT NULL
      )
    `);
    log(GREEN, "Created  Feedback table  (in-app feedback widget)");
    changed++;
  } else {
    log(YELLOW, "Skip     Feedback table  (already exists)");
  }

  for (const idx of [
    "Feedback_status_createdAt_idx",
    "Feedback_deviceId_idx",
  ] as const) {
    const have = await db.execute(
      `SELECT name FROM sqlite_master WHERE type='index' AND name='${idx}'`
    );
    if (have.rows.length === 0) {
      const target =
        idx === "Feedback_status_createdAt_idx"
          ? `("status","createdAt")`
          : `("deviceId")`;
      await db.execute(
        `CREATE INDEX "${idx}" ON "Feedback"${target}`
      );
      log(GREEN, `Created  ${idx}  (index)`);
      changed++;
    } else {
      log(YELLOW, `Skip     ${idx}  (already exists)`);
    }
  }

  // ── 7) SessionRating table + indexes (D4 session ratings + NPS) ─────────
  // One row = one rating: 1-5 after a speaking call or quiz, 0-10 for the
  // weekly NPS pulse. The admin overview (Settings → Ratings card) and the
  // NPS math read these. Without the table the rating endpoints 500.
  if (!tables.has("SessionRating")) {
    await db.execute(/* sql */ `
      CREATE TABLE "SessionRating" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "kind" TEXT NOT NULL,
          "score" INTEGER NOT NULL,
          "comment" TEXT NOT NULL DEFAULT '',
          "context" TEXT NOT NULL DEFAULT '',
          "deviceId" TEXT NOT NULL,
          "userId" TEXT,
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
    log(GREEN, "Created  SessionRating table  (session ratings + NPS)");
    changed++;
  } else {
    log(YELLOW, "Skip     SessionRating table  (already exists)");
  }

  for (const idx of [
    "SessionRating_kind_createdAt_idx",
    "SessionRating_deviceId_createdAt_idx",
  ] as const) {
    const have = await db.execute(
      `SELECT name FROM sqlite_master WHERE type='index' AND name='${idx}'`
    );
    if (have.rows.length === 0) {
      const target =
        idx === "SessionRating_kind_createdAt_idx"
          ? `("kind","createdAt")`
          : `("deviceId","createdAt")`;
      await db.execute(
        `CREATE INDEX "${idx}" ON "SessionRating"${target}`
      );
      log(GREEN, `Created  ${idx}  (index)`);
      changed++;
    } else {
      log(YELLOW, `Skip     ${idx}  (already exists)`);
    }
  }

  // ── 8) ClientError table + indexes (D5 client error monitoring) ──────────
  // One row = one browser-side error report (boundary/window/rejection).
  // The admin monitor (Settings → Client errors card) reads these. Without
  // the table the error reporter silently fails (by design, it never
  // disturbs users) — but the owner loses the signal.
  if (!tables.has("ClientError")) {
    await db.execute(/* sql */ `
      CREATE TABLE "ClientError" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "message" TEXT NOT NULL,
          "stack" TEXT NOT NULL DEFAULT '',
          "digest" TEXT NOT NULL DEFAULT '',
          "path" TEXT NOT NULL DEFAULT '',
          "source" TEXT NOT NULL DEFAULT 'boundary',
          "deviceId" TEXT NOT NULL,
          "userId" TEXT,
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
    log(GREEN, "Created  ClientError table  (client error monitoring)");
    changed++;
  } else {
    log(YELLOW, "Skip     ClientError table  (already exists)");
  }

  for (const idx of [
    "ClientError_createdAt_idx",
    "ClientError_deviceId_createdAt_idx",
  ] as const) {
    const have = await db.execute(
      `SELECT name FROM sqlite_master WHERE type='index' AND name='${idx}'`
    );
    if (have.rows.length === 0) {
      const target =
        idx === "ClientError_createdAt_idx"
          ? `("createdAt")`
          : `("deviceId","createdAt")`;
      await db.execute(
        `CREATE INDEX "${idx}" ON "ClientError"${target}`
      );
      log(GREEN, `Created  ${idx}  (index)`);
      changed++;
    } else {
      log(YELLOW, `Skip     ${idx}  (already exists)`);
    }
  }

  // ── 9) MetricDigest table (D6 weekly metrics digest) ───────────────────
  // One row per ISO week — frozen JSON snapshot for the owner's week
  // report (written by the Vercel cron or an admin). Without the table
  // POST /api/digest fails and the weekly snapshot is lost.
  if (!tables.has("MetricDigest")) {
    await db.execute(/* sql */ `
      CREATE TABLE "MetricDigest" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "weekKey" TEXT NOT NULL UNIQUE,
          "data" TEXT NOT NULL,
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" DATETIME NOT NULL
      )
    `);
    log(GREEN, "Created  MetricDigest table  (weekly metrics digest)");
    changed++;
  } else {
    log(YELLOW, "Skip     MetricDigest table  (already exists)");
  }

  // ── 10) ActivityDay table (D11 — server-tracked streak) ────────────────
  // One row per (device, client-local day). Without it POST /api/streak
  // fails and the streak stays at zero for everyone.
  if (!tables.has("ActivityDay")) {
    await db.execute(/* sql */ `
      CREATE TABLE "ActivityDay" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "deviceId" TEXT NOT NULL,
          "userId" TEXT,
          "day" TEXT NOT NULL,
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" DATETIME NOT NULL
      )
    `);
    await db.execute(
      `CREATE UNIQUE INDEX "ActivityDay_deviceId_day_key" ON "ActivityDay"("deviceId", "day")`
    );
    await db.execute(
      `CREATE INDEX "ActivityDay_userId_day_idx" ON "ActivityDay"("userId", "day")`
    );
    await db.execute(`CREATE INDEX "ActivityDay_day_idx" ON "ActivityDay"("day")`);
    log(GREEN, "Created  ActivityDay table + 3 indexes  (D11 streak)");
    changed++;
  } else {
    log(YELLOW, "Skip     ActivityDay table  (already exists)");
  }

  // ── 11) PushSubscription table (D12 — web push reminders) ─────────────
  if (!tables.has("PushSubscription")) {
    await db.execute(/* sql */ `
      CREATE TABLE "PushSubscription" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "endpoint" TEXT NOT NULL UNIQUE,
          "p256dh" TEXT NOT NULL,
          "auth" TEXT NOT NULL,
          "deviceId" TEXT NOT NULL,
          "userId" TEXT,
          "locale" TEXT NOT NULL DEFAULT 'en',
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" DATETIME NOT NULL
      )
    `);
    await db.execute(
      `CREATE INDEX "PushSubscription_deviceId_idx" ON "PushSubscription"("deviceId")`
    );
    log(GREEN, "Created  PushSubscription table + index  (D12 web push)");
    changed++;
  } else {
    log(YELLOW, "Skip     PushSubscription table  (already exists)");
  }

  // ── 12) TurnKey health counters (D19 — TURN health monitor) ────────────
  // Mint counters that let the owner SEE a dying relay key before calls
  // fail. Idempotent column adds; existing rows default to 0/null.
  if (tables.has("TurnKey")) {
    const turnCols = await columnsOf(db, "TurnKey");
    const turnAdds: [string, string, string][] = [
      ["mintOk", `INTEGER NOT NULL DEFAULT 0`, "successful mints"],
      ["mintFail", `INTEGER NOT NULL DEFAULT 0`, "failed mints"],
      ["lastMintAt", `DATETIME`, "last successful mint"],
      ["lastFailAt", `DATETIME`, "last failed mint"],
    ];
    for (const [col, ddl, why] of turnAdds) {
      if (!turnCols.has(col)) {
        await db.execute(`ALTER TABLE "TurnKey" ADD COLUMN "${col}" ${ddl}`);
        log(GREEN, `Added  TurnKey.${col}  (D19 TURN health — ${why})`);
        changed++;
      } else {
        log(YELLOW, `Skip   TurnKey.${col}  (already exists)`);
      }
    }
  } else {
    log(YELLOW, "Skip   TurnKey health columns  (TurnKey table not present yet)");
  }

  // ── 13) CallRoom discovery columns (D20 — public rooms + scheduling) ────
  // topic: user-typed room topic shown in the public discovery list.
  // scheduledFor: when a "practice tonight" room opens. status "scheduled"
  // rooms join via code 5 min early; stale-prune already skips them.
  if (tables.has("CallRoom")) {
    const roomCols = await columnsOf(db, "CallRoom");
    if (!roomCols.has("topic")) {
      await db.execute(`ALTER TABLE "CallRoom" ADD COLUMN "topic" TEXT NOT NULL DEFAULT ''`);
      log(GREEN, "Added  CallRoom.topic  (D20 discovery)");
      changed++;
    } else {
      log(YELLOW, "Skip   CallRoom.topic  (already exists)");
    }
    if (!roomCols.has("scheduledFor")) {
      await db.execute(`ALTER TABLE "CallRoom" ADD COLUMN "scheduledFor" DATETIME`);
      log(GREEN, "Added  CallRoom.scheduledFor  (D20 scheduled rooms)");
      changed++;
    } else {
      log(YELLOW, "Skip   CallRoom.scheduledFor  (already exists)");
    }
  } else {
    log(YELLOW, "Skip   CallRoom discovery columns  (CallRoom table not present yet)");
  }

  // ── 14) XpEvent table (D29 — unified XP engine) ─────────────────────
  // One row = one XP grant (quiz/reading/dictation/review/call/lesson).
  // Without it POST /api/practice + /api/sessions award nothing and
  // GET /api/xp returns zeros. Day buckets = Asia/Dhaka calendar days.
  if (!tables.has("XpEvent")) {
    await db.execute(/* sql */ `
      CREATE TABLE "XpEvent" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "deviceId" TEXT NOT NULL,
          "userId" TEXT,
          "kind" TEXT NOT NULL,
          "refId" TEXT NOT NULL DEFAULT '',
          "xp" INTEGER NOT NULL,
          "day" TEXT NOT NULL,
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
    await db.execute(
      `CREATE INDEX "XpEvent_deviceId_day_idx" ON "XpEvent"("deviceId", "day")`
    );
    await db.execute(
      `CREATE INDEX "XpEvent_userId_day_idx" ON "XpEvent"("userId", "day")`
    );
    await db.execute(`CREATE INDEX "XpEvent_day_idx" ON "XpEvent"("day")`);
    await db.execute(
      `CREATE INDEX "XpEvent_kind_refId_day_idx" ON "XpEvent"("kind", "refId", "day")`
    );
    log(GREEN, "Created  XpEvent table + 4 indexes  (D29 XP engine)");
    changed++;
  } else {
    log(YELLOW, "Skip     XpEvent table  (already exists)");
  }

  // ── Final verification (reads the REAL state, not our assumptions) ────────
  const finalTables = await tablesOf(db);
  const finalCols = await columnsOf(db, "User");
  const finalConfigCols = await columnsOf(db, "UserConfig");
  const ok =
    finalCols.has("nativeLang") &&
    finalCols.has("role") &&
    finalConfigCols.has("goal") &&
    finalConfigCols.has("dailyTarget") &&
    finalTables.has("UserApiKey") &&
    finalTables.has("CvDocument") &&
    finalTables.has("AnalyticsEvent") &&
    finalTables.has("Feedback") &&
    finalTables.has("SessionRating") &&
    finalTables.has("ClientError") &&
    finalTables.has("MetricDigest") &&
    finalTables.has("ActivityDay") &&
    finalTables.has("PushSubscription") &&
    finalTables.has("XpEvent");

  console.log("");
  if (ok) {
    log(
      GREEN,
      `MIGRATION COMPLETE ✅  (${changed} change${changed === 1 ? "" : "s"} applied — ${
        changed === 0 ? "database was already up to date" : "live login now works"
      })`
    );
    console.log(
      "Tables:",
      [...finalTables].sort().filter((t) => !t.startsWith("sqlite_")).join(", ")
    );
  } else {
    log(RED, "MIGRATION INCOMPLETE ❌ — verification failed, tell the developer.");
    process.exit(1);
  }
}

main().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  log(RED, `MIGRATION FAILED ❌ — ${message}`);
  if (/unauthorized|401|403/i.test(message)) {
    console.error(
      "→ The TURSO_AUTH_TOKEN is missing or wrong. Copy the exact value\n" +
        "  from Vercel → Settings → Environment Variables and try again."
    );
  }
  process.exit(1);
});
