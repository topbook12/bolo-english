import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { isAdminToken } from "@/lib/admin-auth";
import { ensureLibrary } from "@/lib/db-bootstrap";
import {
  isLibraryLevel,
  LIBRARY_READING_GENRES,
  type LibraryListeningData,
  type LibraryVocabData,
  type LibraryGrammarData,
  type LibraryReadingData,
} from "@/lib/library-types";

export const runtime = "nodejs";

/* ── Owner-authored Library API ──────────────────────────────────────────
 * GET    /api/library?kind=vocab|grammar|listening  → public, ZERO keys.
 *          Learners browse everything free — no Gemini key, no login.
 * POST   /api/library   → admin upsert (Content Studio), x-admin-token.
 * DELETE /api/library?kind=&id= → admin delete, x-admin-token.
 *
 * Admin token: src/lib/admin-auth.ts — ADMIN_TOKEN/STORAGE_ADMIN_TOKEN env
 * or the shipped owner-token hash, so ONE token unlocks all admin cards.
 * Every handler first runs ensureLibrary(): creates the tables when the
 * production DB predates the Library models and seeds the starter content
 * once — the owner never runs db:push or a seed script.
 * ─────────────────────────────────────────────────────────────────────── */

function jsonOk(data: unknown) {
  return NextResponse.json({ ok: true, data });
}
function jsonErr(message: string, status = 500) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

function authorized(req: NextRequest): boolean {
  return isAdminToken(req.headers.get("x-admin-token"));
}

type LibraryKind = "vocab" | "grammar" | "listening" | "reading";

function parseKind(raw: string | null): LibraryKind | null {
  return raw === "vocab" || raw === "grammar" || raw === "listening" || raw === "reading"
    ? raw
    : null;
}

/** Minimal structural guard — the Content Studio validates deeply client-side. */
function looksValidData(kind: LibraryKind, d: unknown): boolean {
  if (!d || typeof d !== "object") return false;
  const o = d as Record<string, unknown>;
  if (kind === "vocab") {
    const v = o as Partial<LibraryVocabData>;
    return typeof v.meaning === "object" && !!v.meaning;
  }
  if (kind === "grammar") {
    const g = o as Partial<LibraryGrammarData>;
    return (
      typeof g.title === "object" &&
      !!g.title &&
      Array.isArray(g.sections) &&
      g.sections.length > 0
    );
  }
  const l = o as Partial<LibraryListeningData>;
  return (
    typeof l.title === "object" &&
    !!l.title &&
    Array.isArray(l.paragraphs) &&
    l.paragraphs.length > 0
  );
}

function looksValidReading(d: Record<string, unknown>): boolean {
  const r = d as Partial<LibraryReadingData>;
  if (typeof r.title !== "object" || !r.title) return false;
  if (!Array.isArray(r.paragraphs) || r.paragraphs.length === 0) return false;
  // genre is optional at the API guard level (UI falls back to "story")
  if (r.genre !== undefined && !LIBRARY_READING_GENRES.includes(r.genre)) return false;
  return true;
}

function slugify(input: string): string {
  const base = input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
  return base || `story-${Date.now().toString(36)}`;
}

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const kind = parseKind(req.nextUrl.searchParams.get("kind"));
  if (!kind) return jsonErr(apiMsg(locale, "libraryKindInvalid"), 400);

  const level = req.nextUrl.searchParams.get("level");
  const levelFilter = level && isLibraryLevel(level) ? { level } : undefined;

  // Self-bootstrap: create tables + one-time seed when missing.
  await ensureLibrary(kind);

  try {
    if (kind === "vocab") {
      const q = (req.nextUrl.searchParams.get("q") ?? "").trim().toLowerCase();
      const rows = await db.libraryVocab.findMany({
        where: levelFilter,
        orderBy: [{ unit: "asc" }, { sortOrder: "asc" }, { word: "asc" }],
        take: 1000,
      });
      const items = rows
        .map((r) => ({
          id: r.id,
          word: r.word,
          level: r.level,
          category: r.category,
          unit: r.unit,
          data: JSON.parse(r.data) as LibraryVocabData,
        }))
        .filter(
          (it) =>
            !q ||
            it.word.toLowerCase().includes(q) ||
            (it.data.englishMeaning ?? "").toLowerCase().includes(q)
        );
      return jsonOk({ items });
    }

    if (kind === "grammar") {
      const topic = req.nextUrl.searchParams.get("topic");
      // Single full entry (for the lesson view)
      if (topic) {
        const lv = level && isLibraryLevel(level) ? level : undefined;
        const row = await db.libraryGrammar.findFirst({
          where: { topic, ...(lv ? { level: lv } : {}) },
          orderBy: { sortOrder: "asc" },
        });
        if (!row) return jsonOk({ items: [] });
        return jsonOk({
          items: [
            {
              id: row.id,
              topic: row.topic,
              level: row.level,
              title: row.title,
              data: JSON.parse(row.data) as LibraryGrammarData,
            },
          ],
        });
      }
      // Meta list (for topic grids)
      const rows = await db.libraryGrammar.findMany({
        where: levelFilter,
        orderBy: [{ unit: "asc" }, { sortOrder: "asc" }, { title: "asc" }],
        take: 500,
      });
      return jsonOk({
        items: rows.map((r) => ({
          id: r.id,
          topic: r.topic,
          level: r.level,
          title: r.title,
          unit: r.unit,
        })),
      });
    }

    // listening
    if (kind === "listening") {
      const rows = await db.libraryListening.findMany({
        where: levelFilter,
        orderBy: [{ unit: "asc" }, { sortOrder: "asc" }, { createdAt: "asc" }],
        take: 500,
      });
      return jsonOk({
        items: rows.map((r) => ({
          id: r.id,
          slug: r.slug,
          level: r.level,
          category: r.category,
          minutes: r.minutes,
          unit: r.unit,
          data: JSON.parse(r.data) as LibraryListeningData,
        })),
      });
    }

    // reading (Task 11): trilingual passages, ordered path-first like listening
    const rows = await db.libraryReading.findMany({
      where: levelFilter,
      orderBy: [{ unit: "asc" }, { sortOrder: "asc" }, { createdAt: "asc" }],
      take: 500,
    });
    return jsonOk({
      items: rows.map((r) => ({
        id: r.id,
        slug: r.slug,
        level: r.level,
        category: r.category,
        minutes: r.minutes,
        unit: r.unit,
        data: JSON.parse(r.data) as LibraryReadingData,
      })),
    });
  } catch {
    return jsonErr(apiMsg(locale, "dbConnectFailed"), 503);
  }
}

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  if (!authorized(req)) {
    return jsonErr(apiMsg(locale, "libraryAdminRequired"), 403);
  }
  const body = await req.json().catch(() => null);
  const kind = parseKind(body?.kind ?? null);
  const entry = body?.entry;
  if (!kind) return jsonErr(apiMsg(locale, "libraryKindInvalid"), 400);
  if (!entry || typeof entry !== "object") {
    return jsonErr(apiMsg(locale, "libraryEntryRequired"), 400);
  }
  await ensureLibrary(kind);

  const data = entry.data;
  const valid =
    kind === "reading"
      ? !!data && typeof data === "object" && looksValidReading(data as Record<string, unknown>)
      : looksValidData(kind, data);
  if (!valid) {
    return jsonErr(apiMsg(locale, "libraryDataInvalid"), 400);
  }
  const dataJson = JSON.stringify(data);
  const sortOrder = Number.isFinite(Number(entry.sortOrder)) ? Number(entry.sortOrder) : 0;
  // Learning-path unit: 1-5 on the path, 0 = extra/standalone. Owner-settable.
  const unitRaw = Math.floor(Number(entry.unit));
  const unit = Number.isFinite(unitRaw) && unitRaw >= 0 && unitRaw <= 99 ? unitRaw : 1;

  try {
    if (kind === "vocab") {
      const word = String(entry.word ?? "").trim().slice(0, 60);
      if (!word) return jsonErr(apiMsg(locale, "libraryWordRequired"), 400);
      const level = isLibraryLevel(entry.level) ? entry.level : "beginner";
      const category = String(entry.category ?? "general").slice(0, 30);
      const row = await db.libraryVocab.upsert({
        where: { word_level: { word, level } },
        create: { word, level, category, data: dataJson, unit, sortOrder },
        update: { category, data: dataJson, unit, sortOrder },
      });
      return jsonOk({ id: row.id });
    }

    if (kind === "grammar") {
      const topic = String(entry.topic ?? "").trim().slice(0, 80);
      const title = String(entry.title ?? "").trim().slice(0, 120);
      if (!topic || !title) {
        return jsonErr(apiMsg(locale, "libraryTopicRequired"), 400);
      }
      const level = isLibraryLevel(entry.level) ? entry.level : "beginner";
      const row = await db.libraryGrammar.upsert({
        where: { topic_level: { topic, level } },
        create: { topic, level, title, data: dataJson, unit, sortOrder },
        update: { title, data: dataJson, unit, sortOrder },
      });
      return jsonOk({ id: row.id });
    }

    // listening
    if (kind === "listening") {
      const titleEn = String(data?.title?.en ?? data?.title?.bn ?? "").trim();
      const slug = slugify(String(entry.slug ?? "") || titleEn);
      const level = isLibraryLevel(entry.level) ? entry.level : "beginner";
      const category = String(entry.category ?? "daily").slice(0, 30);
      const minutes = Math.max(1, Math.min(60, Number(entry.minutes ?? 2) || 2));
      const row = await db.libraryListening.upsert({
        where: { slug },
        create: { slug, level, category, minutes, data: dataJson, unit, sortOrder },
        update: { level, category, minutes, data: dataJson, unit, sortOrder },
      });
      return jsonOk({ id: row.id });
    }

    // reading (Task 11)
    const titleEn = String(data?.title?.en ?? data?.title?.bn ?? "").trim();
    const slug = slugify(String(entry.slug ?? "") || titleEn);
    const level = isLibraryLevel(entry.level) ? entry.level : "beginner";
    const category = String(entry.category ?? "daily").slice(0, 30);
    const minutes = Math.max(1, Math.min(60, Number(entry.minutes ?? 3) || 3));
    const row = await db.libraryReading.upsert({
      where: { slug },
      create: { slug, level, category, minutes, data: dataJson, unit, sortOrder },
      update: { level, category, minutes, data: dataJson, unit, sortOrder },
    });
    return jsonOk({ id: row.id });
  } catch {
    return jsonErr(apiMsg(locale, "dbConnectFailed"), 503);
  }
}

export async function DELETE(req: NextRequest) {
  const locale = reqLocale(req);
  if (!authorized(req)) {
    return jsonErr(apiMsg(locale, "libraryAdminRequired"), 403);
  }
  const kind = parseKind(req.nextUrl.searchParams.get("kind"));
  const id = (req.nextUrl.searchParams.get("id") ?? "").trim();
  if (!kind) return jsonErr(apiMsg(locale, "libraryKindInvalid"), 400);
  if (!id) return jsonErr(apiMsg(locale, "libraryIdRequired"), 400);
  await ensureLibrary(kind);

  try {
    if (kind === "vocab") {
      const row = await db.libraryVocab.delete({ where: { id } }).catch(() => null);
      if (!row) return jsonErr(apiMsg(locale, "libraryNotFound"), 404);
    } else if (kind === "grammar") {
      const row = await db.libraryGrammar.delete({ where: { id } }).catch(() => null);
      if (!row) return jsonErr(apiMsg(locale, "libraryNotFound"), 404);
    } else if (kind === "listening") {
      const row = await db.libraryListening.delete({ where: { id } }).catch(() => null);
      if (!row) return jsonErr(apiMsg(locale, "libraryNotFound"), 404);
    } else {
      const row = await db.libraryReading.delete({ where: { id } }).catch(() => null);
      if (!row) return jsonErr(apiMsg(locale, "libraryNotFound"), 404);
    }
    return jsonOk({ deleted: id });
  } catch {
    return jsonErr(apiMsg(locale, "dbConnectFailed"), 503);
  }
}
