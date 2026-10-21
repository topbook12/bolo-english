import { NextRequest, NextResponse } from "next/server";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { cleanDeviceId, cleanStr } from "@/lib/validate";
import { checkIpLimit, hitLimit } from "@/lib/rate-limit";
import { GeminiError, geminiJson, geminiText, getUserApiKey } from "@/lib/gemini";

// ─── CV Studio AI assist (BYOK) ─────────────────────────────────────────────
// POST { deviceId, mode, ... }
//   mode="extract" { text, targetLang: "auto"|"bn"|"en"|"hi" }
//     → raw biodata (any language/layout) → structured CvData content.
//   mode="polish"  { text, kind: "summary"|"bullet", lang }
//     → one text field rewritten professionally (same language).

export const maxDuration = 60;

function ipOf(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
}

const s = (v: unknown, max: number): string => (typeof v === "string" ? v.trim().slice(0, max) : "");
const arr = (v: unknown): unknown[] => (Array.isArray(v) ? v.slice(0, 30) : []);

function sanitizeAiContent(raw: unknown): Record<string, unknown> | null {
  if (typeof raw !== "object" || raw === null) return null;
  const r = raw as Record<string, unknown>;
  const p = (typeof r.personal === "object" && r.personal !== null ? r.personal : {}) as Record<string, unknown>;
  return {
    lang: ["bn", "en", "hi"].includes(r.lang as string) ? r.lang : "bn",
    personal: {
      name: s(p.name, 80),
      headline: s(p.headline, 120),
      email: s(p.email, 120),
      phone: s(p.phone, 40),
      address: s(p.address, 220),
      fatherName: s(p.fatherName, 120),
      motherName: s(p.motherName, 120),
      dateOfBirth: s(p.dateOfBirth, 60),
      nationality: s(p.nationality, 60),
      religion: s(p.religion, 60),
      maritalStatus: s(p.maritalStatus, 60),
      bloodGroup: s(p.bloodGroup, 8),
      website: s(p.website, 160),
      linkedin: s(p.linkedin, 160),
    },
    summary: s(r.summary, 1200),
    education: arr(r.education)
      .slice(0, 10)
      .map((e) => {
        const o = (e ?? {}) as Record<string, unknown>;
        return {
          id: "",
          degree: s(o.degree, 160),
          institution: s(o.institution, 160),
          group: s(o.group, 80),
          result: s(o.result, 80),
          year: s(o.year, 40),
          details: s(o.details, 300),
        };
      })
      .filter((e) => e.degree || e.institution),
    experience: arr(r.experience)
      .slice(0, 8)
      .map((e) => {
        const o = (e ?? {}) as Record<string, unknown>;
        return {
          id: "",
          role: s(o.role, 140),
          org: s(o.org, 160),
          start: s(o.start, 40),
          end: s(o.end, 40),
          location: s(o.location, 80),
          bullets: arr(o.bullets).slice(0, 6).map((b) => s(b, 220)).filter(Boolean),
        };
      })
      .filter((e) => e.role || e.org),
    projects: arr(r.projects)
      .slice(0, 8)
      .map((e) => {
        const o = (e ?? {}) as Record<string, unknown>;
        return { id: "", name: s(o.name, 140), description: s(o.description, 400), link: s(o.link, 200) };
      })
      .filter((e) => e.name),
    skills: arr(r.skills)
      .slice(0, 15)
      .map((e) => {
        const o = (e ?? {}) as Record<string, unknown>;
        const lv = typeof o.level === "number" ? Math.round(o.level) : 0;
        return { id: "", name: s(o.name, 80), level: Math.min(5, Math.max(0, lv)) };
      })
      .filter((e) => e.name),
    languages: arr(r.languages)
      .slice(0, 8)
      .map((e) => {
        const o = (e ?? {}) as Record<string, unknown>;
        const lv = typeof o.level === "number" ? Math.round(o.level) : 0;
        return { id: "", name: s(o.name, 60), level: Math.min(5, Math.max(0, lv)) };
      })
      .filter((e) => e.name),
    training: arr(r.training)
      .slice(0, 10)
      .map((e) => {
        const o = (e ?? {}) as Record<string, unknown>;
        return { id: "", name: s(o.name, 160), issuer: s(o.issuer, 140), year: s(o.year, 40) };
      })
      .filter((e) => e.name),
    awards: arr(r.awards)
      .slice(0, 8)
      .map((e) => {
        const o = (e ?? {}) as Record<string, unknown>;
        return { id: "", name: s(o.name, 160), issuer: s(o.issuer, 140), year: s(o.year, 40) };
      })
      .filter((e) => e.name),
    hobbies: arr(r.hobbies).slice(0, 10).map((h) => s(h, 60)).filter(Boolean),
    references: arr(r.references)
      .slice(0, 4)
      .map((e) => {
        const o = (e ?? {}) as Record<string, unknown>;
        return {
          id: "",
          name: s(o.name, 120),
          org: s(o.org, 180),
          relation: s(o.relation, 80),
          phone: s(o.phone, 40),
          email: s(o.email, 120),
        };
      })
      .filter((e) => e.name),
    personalExtra: arr(r.personalExtra)
      .slice(0, 10)
      .map((e) => {
        const o = (e ?? {}) as Record<string, unknown>;
        return { id: "", label: s(o.label, 80), value: s(o.value, 200) };
      })
      .filter((e) => e.label || e.value),
  };
}

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  if (!checkIpLimit(req, "cv-ai", 12) || !hitLimit(`cvai:${ipOf(req)}`, 12, 60_000)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  }
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });

  try {
    const apiKey = await getUserApiKey(deviceId);

    if (body?.mode === "extract") {
      const text = cleanStr(body?.text, 12_000);
      if (!text)
        return NextResponse.json({ ok: false, error: apiMsg(locale, "cvTextRequired") }, { status: 400 });
      const target = ["bn", "en", "hi"].includes(body?.targetLang) ? body.targetLang : "auto";
      const prompt = `You are a professional CV data extractor. Below is a person's biodata / résumé / free-form career information. It may be in Bengali, English, Hindi or mixed, in any layout.

TASK: return ONLY a JSON object with this exact shape:
{"lang":"bn|en|hi","personal":{"name","headline","email","phone","address","fatherName","motherName","dateOfBirth","nationality","religion","maritalStatus","bloodGroup","website","linkedin"},"summary","education":[{"degree","institution","group","result","year","details"}],"experience":[{"role","org","start","end","location","bullets":["…"]}],"projects":[{"name","description","link"}],"skills":[{"name","level":1-5}],"languages":[{"name","level":1-5}],"training":[{"name","issuer","year"}],"awards":[{"name","issuer","year"}],"hobbies":["…"],"references":[{"name","org","relation","phone","email"}],"personalExtra":[{"label","value"}]}

RULES:
- Copy facts EXACTLY as given — never invent employers, degrees, dates or numbers.
- Omit a field entirely (empty string "" / empty array) when the source does not mention it.
- "lang" = the language of the source text (bn/en/hi)${target === "auto" ? "" : ` — BUT rewrite every text value in ${target === "bn" ? "Bengali (বাংলা)" : target === "en" ? "clear professional English" : "Hindi"} and set lang to "${target}"`} .
- "summary": 2-3 sentence professional profile built ONLY from the given facts.
- skill/language level: judge 1-5 from context (default 4 when unclear).
- Use "personalExtra" for personal key-value facts that don't fit other fields (e.g. permanent address).
- end="" inside experience means "currently working there".

SOURCE TEXT:
"""
${text}
"""`;

      const parsed = await geminiJson<unknown>(apiKey, prompt, { temperature: 0.2, label: "cv-extract" });
      const clean = sanitizeAiContent(parsed);
      if (!clean)
        return NextResponse.json({ ok: false, error: apiMsg(locale, "badFormat") }, { status: 502 });
      return NextResponse.json({ ok: true, data: clean });
    }

    if (body?.mode === "polish") {
      const text = cleanStr(body?.text, 1_500);
      if (!text)
        return NextResponse.json({ ok: false, error: apiMsg(locale, "cvTextRequired") }, { status: 400 });
      const kind = body?.kind === "bullet" ? "bullet" : "summary";
      const lang = ["bn", "en", "hi"].includes(body?.lang) ? body.lang : "bn";
      const out = await geminiText(
        apiKey,
        `Rewrite this ${kind === "summary" ? "CV professional summary" : "CV experience bullet"} in ${lang === "bn" ? "Bengali" : lang === "en" ? "English" : "Hindi"}. Keep every fact exactly as given; improve wording, clarity and impact; keep it under ${kind === "summary" ? "3 sentences" : "1 line"}. Reply with ONLY the rewritten text — no quotes, no explanation.\n\nTEXT:\n${text}`,
        { temperature: 0.4, maxOutputTokens: 1024, label: "cv-polish" }
      );
      return NextResponse.json({ ok: true, data: { text: out.trim().slice(0, 1_200) } });
    }

    return NextResponse.json({ ok: false, error: apiMsg(locale, "unknownFeature", { feature: String(body?.mode ?? "") }) }, { status: 400 });
  } catch (e) {
    const status = e instanceof GeminiError ? e.status : 500;
    const code = e instanceof GeminiError && e.code ? e.code : "aiFailed";
    return NextResponse.json(
      { ok: false, error: apiMsg(locale, code), detail: e instanceof GeminiError ? e.raw || e.message : String(e) },
      { status }
    );
  }
}
