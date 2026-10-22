-- Production (Turso) migration for Task 27 — run ONCE.
-- Applies the delta from the pre-27 schema to the current schema:
--   * User.nativeLang, User.role columns (Tasks 27-c / 27-e)
--   * UserApiKey key-pool table + index (Task 27-d)
--
-- How to run (pick one):
--   A) Turso CLI:   turso db shell <your-db-name> < scripts/prod-migrate-user-keys.sql
--   B) Prisma CLI:  DATABASE_URL="libsql://<your-db>.turso.io?authToken=<token>" \
--                     bunx prisma db execute --file scripts/prod-migrate-user-keys.sql
--
-- Safe to re-run only if it failed midway: the ALTERs will error
-- "duplicate column name" (harmless) — the CREATE TABLE will error if the
-- table already exists, which means this file was already applied.

-- AlterTable
ALTER TABLE "User" ADD COLUMN "nativeLang" TEXT;
ALTER TABLE "User" ADD COLUMN "role" TEXT;

-- CreateTable
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
);

-- CreateIndex
CREATE INDEX "UserApiKey_userId_idx" ON "UserApiKey"("userId");
