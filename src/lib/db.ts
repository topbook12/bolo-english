import { createRequire } from "node:module";
import path from "node:path";
import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

// Works everywhere with ONE code path:
//  - Vercel/production: TURSO_DATABASE_URL (+ TURSO_AUTH_TOKEN) → Turso libSQL
//  - Local dev: falls back to the SQLite file from DATABASE_URL (db/custom.db)

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function makeDb(Ctor: typeof PrismaClient = PrismaClient): PrismaClient {
  const tursoUrl = process.env.TURSO_DATABASE_URL;
  if (tursoUrl) {
    const adapter = new PrismaLibSQL({
      url: tursoUrl,
      authToken: process.env.TURSO_AUTH_TOKEN || undefined,
    });
    return new Ctor({ adapter });
  }
  return new Ctor({
    datasources: { db: { url: process.env.DATABASE_URL } },
  });
}

/* ── dev self-heal (stale generated client) ────────────────────────────────
 * A `prisma generate` that lands WHILE `next dev` is serving (a model added
 * to schema.prisma, e.g. Certificate) leaves this long-lived process holding
 * the OLD generated client: the globalThis singleton + the bundler/require
 * caches keep serving the pre-generate module, so `db.<newModel>` is
 * undefined and the new routes 500 until a restart.
 *
 * Detection is structural, not name-based: a Prisma "delegate" is an object
 * exposing findUnique. If a freshly loaded client exposes MORE models than
 * the cached singleton, the singleton is stale → swap it for the fresh one
 * (loaded through node's own require after purging its prisma cache, which
 * bypasses any bundler-level module cache).
 * Dev-only: production/serverless boots a fresh process per deploy and must
 * not churn connections — there this is a no-op passthrough. */
function delegateCount(c: unknown): number {
  let n = 0;
  for (const v of Object.values((c ?? {}) as Record<string, unknown>)) {
    if (v && typeof v === "object" && "findUnique" in (v as object)) n++;
  }
  return n;
}

function loadFreshClient(): PrismaClient | null {
  try {
    const nodeRequire = createRequire(path.join(process.cwd(), "package.json"));
    for (const id of Object.keys(nodeRequire.cache)) {
      if (/[\\/](@prisma[\\/]client|\.prisma[\\/]client)[\\/]/.test(id)) {
        delete nodeRequire.cache[id];
      }
    }
    const mod = nodeRequire("@prisma/client") as { PrismaClient?: typeof PrismaClient };
    if (typeof mod?.PrismaClient !== "function") return null;
    return makeDb(mod.PrismaClient);
  } catch {
    // best-effort: unreachable cache just means the old instance stays
    return null;
  }
}

function resolveDb(): PrismaClient {
  const cached = globalForPrisma.prisma;
  if (cached) {
    if (process.env.NODE_ENV !== "production") {
      const fresh = loadFreshClient();
      if (fresh && delegateCount(fresh) > delegateCount(cached)) {
        console.log("[db] stale PrismaClient detected — reloaded generated client");
        globalForPrisma.prisma = fresh;
        return fresh;
      }
      try {
        // candidate not needed — close it politely (Prisma: $disconnect)
        fresh?.$disconnect?.().catch(() => undefined);
      } catch {
        /* ignore */
      }
    }
    return cached;
  }
  const created = makeDb();
  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = created;
  return created;
}

export const db = resolveDb();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
