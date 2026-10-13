import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

// Works everywhere with ONE code path:
//  - Vercel/production: TURSO_DATABASE_URL (+ TURSO_AUTH_TOKEN) → Turso libSQL
//  - Local dev: falls back to the SQLite file from DATABASE_URL (db/custom.db)

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function makeDb(): PrismaClient {
  const tursoUrl = process.env.TURSO_DATABASE_URL;
  if (tursoUrl) {
    const adapter = new PrismaLibSQL({
      url: tursoUrl,
      authToken: process.env.TURSO_AUTH_TOKEN || undefined,
    });
    return new PrismaClient({ adapter });
  }
  return new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL } },
  });
}

export const db = globalForPrisma.prisma ?? makeDb();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
