// D47 — /guide registry: the single source of truth for every guide
// article (hub listing, generateStaticParams, sitemap, related-article
// blocks). Server-safe: pure static data, no client imports.

import type { Guide, GuideLang } from "./types";
import { guide as speaking25 } from "./data/english-speaking-25-din";
import { guide as ielts7 } from "./data/ielts-band-7-roadmap";
import { guide as grammarOrder } from "./data/english-grammar-learn-order";
import { guide as vocabHacks } from "./data/english-vocabulary-memory-hacks";
import { guide as interviewEnglish } from "./data/chakrir-interview-english";
import { guide as listeningGuide } from "./data/sune-sune-english-shikha";

export type { Guide, GuideLang, LocalizedText } from "./types";
export { GUIDE_CTAS } from "./cta";

/** All guides in curated reading order. */
export const GUIDES: Guide[] = [
  speaking25,
  ielts7,
  grammarOrder,
  vocabHacks,
  interviewEnglish,
  listeningGuide,
];

export function allGuides(): Guide[] {
  return GUIDES;
}

/** Find one guide by slug, or null. */
export function guideBySlug(slug: string): Guide | null {
  return GUIDES.find((g) => g.slug === slug) ?? null;
}

const bnDigits = "০১২৩৪৫৬৭৮৯";

/** Bengali reading-time estimate (≈140 words/min) over the bn fields. */
export function guideMinutes(g: Guide): number {
  const parts: string[] = [g.excerpt.bn, g.title.bn];
  for (const s of g.sections) {
    parts.push(s.heading.bn, ...s.paragraphs.map((p) => p.bn));
    for (const st of s.steps ?? []) parts.push(st.bn);
  }
  for (const f of g.faqs) parts.push(f.q.bn, f.a.bn);
  const words = parts.join(" ").trim().split(/\s+/).length;
  return Math.max(4, Math.round(words / 140));
}

/** Localized date string without Intl (deterministic server/client). */
export function localizedDate(iso: string, lang: GuideLang): string {
  const [y, m, d] = iso.split("-").map((n) => parseInt(n, 10));
  const months: Record<GuideLang, string[]> = {
    bn: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    hi: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
  };
  const digits: Record<GuideLang, string> = { bn: bnDigits, en: "0123456789", hi: "०१२३४५६७८९" };
  const toDigits = (n: number) =>
    String(n)
      .split("")
      .map((c) => digits[lang][Number(c)] ?? c)
      .join("");
  return `${toDigits(d)} ${months[lang][m - 1]} ${toDigits(y)}`;
}
