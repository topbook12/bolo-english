// D47 SEO — public, login-free guide articles (/guide/<slug>).
//
// One statically-generated page per guide, Bengali-first (the target search
// is bangla-first: "english speaking bangla", "IELTS প্রস্তুতি"…), rendering
// the full trilingual article with a client language switcher. Section-level
// CTA bands deep-link into the matching app section (/?open=<tab>), and the
// related-guides grid + /learn band keep the internal-linking graph dense.
// Crawlers and guests never hit the login gate here — content IS the ad.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Compass } from "lucide-react";
import GuideBody from "@/components/guide/GuideBody";
import type { GuideCardMini } from "@/components/guide/GuideBody";
import {
  allGuides,
  guideBySlug,
  guideMinutes,
} from "@/lib/guides";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { ogImageUrl } from "@/lib/og";
import ShareButton from "@/components/shared/ShareButton";

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return allGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) return {};
  const title = `${guide.title.bn} | ${SITE_NAME}`;
  const description = guide.excerpt.bn.slice(0, 158);
  const url = `${SITE_URL}/guide/${guide.slug}`;
  // D48 — per-guide share card (badge + Bengali title) for WhatsApp previews.
  const image = ogImageUrl("guide", {
    title: guide.title.bn,
    sub: guide.excerpt.bn.slice(0, 120),
  });
  return {
    title,
    description,
    keywords: [...guide.keywords, SITE_NAME],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      siteName: SITE_NAME,
      locale: "bn_BD",
      images: [{ url: image, width: 1200, height: 630, alt: guide.title.bn }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();

  const minutes = guideMinutes(guide);
  const url = `${SITE_URL}/guide/${guide.slug}`;

  const related: GuideCardMini[] = allGuides()
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 4)
    .map((g) => ({
      slug: g.slug,
      emoji: g.emoji,
      title: g.title,
      excerpt: g.excerpt,
      minutes: guideMinutes(g),
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title.bn,
        description: guide.excerpt.bn.slice(0, 200),
        inLanguage: "bn",
        url: `${SITE_URL}/guide/${guide.slug}`,
        mainEntityOfPage: `${SITE_URL}/guide/${guide.slug}`,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        author: { "@type": "Organization", name: SITE_NAME },
        publisher: { "@type": "Organization", name: SITE_NAME },
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((f) => ({
          "@type": "Question",
          name: f.q.bn,
          acceptedAnswer: { "@type": "Answer", text: f.a.bn },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "হোম", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "গাইড", item: `${SITE_URL}/guide` },
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title.bn,
            item: `${SITE_URL}/guide/${guide.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top bar */}
      <header className="border-b border-border/80 bg-card/80 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
          <Link href="/guide" className="flex items-center gap-2 font-bold text-foreground">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <Compass className="size-4" />
            </span>
            {SITE_NAME}
          </Link>
          <div className="flex items-center gap-2">
            {/* D48 — share this guide (native sheet / clipboard fallback) */}
            <ShareButton
              url={url}
              title={guide.title.bn}
              text="বাংলায় ইংরেজি শেখার ফ্রি গাইড"
              label="শেয়ার করুন"
              copiedLabel="লিংক কপি হয়েছে! বন্ধুদের পাঠিয়ে দিন।"
              errorLabel="লিংক কপি করা যায়নি।"
              className="border-emerald-200 dark:border-emerald-900"
            />
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              অ্যাপে প্র্যাকটিস করুন
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Article */}
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 sm:px-6 py-8">
        <nav aria-label="ব্রেডক্রাম্ব" className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-emerald-700 dark:hover:text-emerald-400">হোম</Link>
          <span aria-hidden>›</span>
          <Link href="/guide" className="hover:text-emerald-700 dark:hover:text-emerald-400">গাইড</Link>
          <span aria-hidden>›</span>
          <span className="text-foreground/80 font-medium truncate">{guide.title.bn}</span>
        </nav>

        <GuideBody guide={guide} minutes={minutes} related={related} />
      </main>

      {/* Sticky footer — pushes down naturally on tall pages */}
      <footer className="mt-auto border-t border-border/80 bg-card">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-semibold text-foreground/80">{SITE_NAME}</span>
            <Link href="/guide" className="hover:text-emerald-700 dark:hover:text-emerald-400">সব গাইড</Link>
            <Link href="/guide/english-speaking-25-din" className="hover:text-emerald-700 dark:hover:text-emerald-400">২৫ দিনে স্পিকিং</Link>
            <Link href="/guide/ielts-band-7-roadmap" className="hover:text-emerald-700 dark:hover:text-emerald-400">IELTS ব্যান্ড ৭</Link>
            <Link href="/guide/chakrir-interview-english" className="hover:text-emerald-700 dark:hover:text-emerald-400">ইন্টারভিউ ইংরেজি</Link>
            <Link href="/learn" className="hover:text-emerald-700 dark:hover:text-emerald-400">গ্রামার লেসন</Link>
            <Link href="/" className="hover:text-emerald-700 dark:hover:text-emerald-400">অ্যাপ</Link>
          </div>
          <p className="mt-3 text-xs leading-5 text-muted-foreground/70">
            বাংলায় ইংরেজি শেখার ফ্রি গাইড, রোডম্যাপ ও প্র্যাকটিস অ্যাপ।
          </p>
        </div>
      </footer>
    </div>
  );
}
