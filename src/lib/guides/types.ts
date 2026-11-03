// D47 — guide/blog content model.
//
// Every guide is one standalone SEO article, fully trilingual (bn/en/hi).
// The server renders the Bengali (bn) version in the initial HTML — that is
// what crawlers index (the target search is bangla-first) — and a client
// language switcher can re-render the same data in en/hi without refetch.
//
// Data is pure text: no icons, no JSX, no imports beyond types — so guide
// files stay serializable and can be shipped to client components as-is.

export type GuideLang = "bn" | "en" | "hi";

/** The same string in the three platform languages. */
export interface LocalizedText {
  bn: string;
  en: string;
  hi: string;
}

/**
 * Where a guide section's call-to-action points inside the app.
 * Mapped to href + label in cta.ts (kept separate so data files stay pure).
 */
export type GuideCtaKind =
  | "speaking"
  | "grammar"
  | "vocab"
  | "listening"
  | "reading"
  | "writing"
  | "ielts"
  | "pronunciation"
  | "cv"
  | "community"
  | "certificate";

export interface GuideSection {
  heading: LocalizedText;
  paragraphs: LocalizedText[];
  /** Optional numbered how-to steps (rendered as a checklist). */
  steps?: LocalizedText[];
  /** Optional platform-link embed shown after this section. */
  cta?: GuideCtaKind;
}

export interface GuideFaq {
  q: LocalizedText;
  a: LocalizedText;
}

export interface Guide {
  /** Permanent URL slug — never change after release. */
  slug: string;
  /** Card/hero visual. */
  emoji: string;
  /** ISO dates (YYYY-MM-DD). */
  publishedAt: string;
  updatedAt: string;
  title: LocalizedText;
  /** 1–2 sentence card + meta-description summary. */
  excerpt: LocalizedText;
  /** Bangla/English mixed search keywords for the meta tags. */
  keywords: string[];
  sections: GuideSection[];
  faqs: GuideFaq[];
}
