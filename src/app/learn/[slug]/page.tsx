// D46 SEO — public, login-free grammar landing pages (/learn/<slug>).
//
// One statically-generated page per grammar-bank topic, Bengali-first (the
// target search is "English grammar bangla"), rendering the full offline
// lesson: intro, sections with wrong→right examples, tips, plus internal
// links (topic hub + related topics) and a CTA into the app. Crawlers and
// guests never hit the login gate here — content IS the advertisement.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Sparkles,
  XCircle,
} from "lucide-react";
import { allLearnPages, learnPageBySlug } from "@/lib/learn-slugs";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return allLearnPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = learnPageBySlug(slug);
  if (!page) return {};
  const title = `${page.lesson.title} — বাংলায় ইংরেজি গ্রামার | ${SITE_NAME}`;
  const description = page.lesson.intro.slice(0, 158);
  const url = `${SITE_URL}/learn/${page.slug}`;
  return {
    title,
    description,
    keywords: [
      page.name,
      "ইংরেজি গ্রামার বাংলা",
      "English grammar bangla",
      "ইংরেজি শেখার সহজ উপায়",
      `${page.name} bangla`,
      SITE_NAME,
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: SITE_NAME,
      locale: "bn_BD",
    },
    twitter: { card: "summary", title, description },
  };
}

/** Rough Bengali reading-time estimate (≈150 words/min). */
function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(2, Math.round(words / 150));
}

export default async function LearnTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = learnPageBySlug(slug);
  if (!page) notFound();
  const { lesson } = page;

  const plain = [
    lesson.intro,
    ...lesson.sections.map((s) => `${s.heading} ${s.explanation}`),
    ...lesson.tips,
  ].join(" ");
  const minutes = readingMinutes(plain);

  const siblings = allLearnPages()
    .filter((p) => p.advanced === page.advanced && p.slug !== page.slug)
    .slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: lesson.title,
        description: lesson.intro.slice(0, 200),
        inLanguage: "bn",
        url: `${SITE_URL}/learn/${page.slug}`,
        mainEntityOfPage: `${SITE_URL}/learn/${page.slug}`,
        author: { "@type": "Organization", name: SITE_NAME },
        publisher: { "@type": "Organization", name: SITE_NAME },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "হোম", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "গ্রামার লেসন", item: `${SITE_URL}/learn` },
          {
            "@type": "ListItem",
            position: 3,
            name: lesson.title,
            item: `${SITE_URL}/learn/${page.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top bar */}
      <header className="border-b border-stone-200/80 bg-white/80 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
          <Link href="/learn" className="flex items-center gap-2 font-bold text-stone-900">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <BookOpenCheck className="size-4" />
            </span>
            {SITE_NAME}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            অ্যাপে প্র্যাকটিস করুন
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </header>

      {/* Article */}
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 sm:px-6 py-8">
        <nav aria-label="ব্রেডক্রাম্ব" className="mb-4 flex items-center gap-1 text-sm text-stone-500">
          <Link href="/" className="hover:text-emerald-700">হোম</Link>
          <ChevronRight className="size-3.5" />
          <Link href="/learn" className="hover:text-emerald-700">গ্রামার লেসন</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-stone-700 font-medium">{lesson.title}</span>
        </nav>

        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
            {page.advanced ? "লেভেল: অ্যাডভান্সড" : "লেভেল: বিগিনার"}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700">
            <Clock3 className="size-3.5" /> ~{minutes} মিনিটের পাঠ
          </span>
          <span className="rounded-full bg-stone-500/10 px-3 py-1 text-xs font-semibold text-stone-600">
            বাংলা ব্যাখ্যা + ইংরেজি উদাহরণ
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
          {lesson.title}
        </h1>
        <p className="mt-3 text-[15px] leading-7 text-stone-700">{lesson.intro}</p>

        <article className="mt-8 space-y-8">
          {lesson.sections.map((section, si) => (
            <section key={si} aria-labelledby={`sec-${si}`}>
              <h2
                id={`sec-${si}`}
                className="flex items-center gap-2 text-lg font-bold text-stone-900"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-bold text-white">
                  {si + 1}
                </span>
                {section.heading}
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-stone-700">
                {section.explanation}
              </p>
              <div className="mt-4 space-y-3">
                {section.examples.map((ex, ei) => (
                  <div
                    key={ei}
                    className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
                  >
                    <p className="flex items-start gap-2 text-sm text-rose-600">
                      <XCircle className="mt-0.5 size-4 shrink-0" />
                      <span className="line-through decoration-rose-300">{ex.wrong}</span>
                    </p>
                    <p className="mt-1.5 flex items-start gap-2 text-sm font-medium text-emerald-700">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                      {ex.right}
                    </p>
                    <p className="mt-2 rounded-lg bg-stone-50 px-3 py-2 text-[13px] leading-6 text-stone-600">
                      {ex.note}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </article>

        {/* Tips */}
        <section className="mt-10 rounded-2xl border border-emerald-200/70 bg-emerald-50/60 p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-emerald-900">
            <Sparkles className="size-5 text-emerald-600" />
            মনে রাখার ৪টি টিপস
          </h2>
          <ul className="mt-3 space-y-2.5">
            {lesson.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[15px] leading-7 text-stone-700">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-600" />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* App CTA */}
        <section className="mt-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-md">
          <h2 className="text-lg font-bold">এখন নিজেকে যাচাই করুন</h2>
          <p className="mt-1.5 text-sm leading-6 text-emerald-50">
            Bolo English অ্যাপে এই টপিকে ৫টি প্রশ্নের কুইজ, আরও লেসন, ডেইলি শব্দ,
            লিসেনিং গল্প আর স্পিকিং প্র্যাকটিস — সব ফ্রি।
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-emerald-700 shadow transition hover:bg-emerald-50"
          >
            ফ্রি অ্যাপ খুলুন
            <ArrowRight className="size-4" />
          </Link>
        </section>

        {/* Related topics — internal linking for the topic cluster */}
        <section className="mt-10">
          <h2 className="text-base font-bold text-stone-900">
            {page.advanced ? "আরও অ্যাডভান্সড টপিক" : "পরের টপিকগুলো দেখুন"}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`/learn/${s.slug}`}
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700"
              >
                {s.lesson.title}
              </Link>
            ))}
            <Link
              href="/learn"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
            >
              <ArrowLeft className="size-4" />
              সব গ্রামার লেসন
            </Link>
          </div>
        </section>
      </main>

      {/* Sticky footer — pushes down naturally on tall pages */}
      <footer className="mt-auto border-t border-stone-200/80 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 text-sm text-stone-500">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-semibold text-stone-700">{SITE_NAME}</span>
            <Link href="/learn" className="hover:text-emerald-700">সব লেসন</Link>
            <Link href="/learn/tenses" className="hover:text-emerald-700">টেন্স</Link>
            <Link href="/learn/articles" className="hover:text-emerald-700">আর্টিকেল</Link>
            <Link href="/learn/conditionals" className="hover:text-emerald-700">কন্ডিশনাল</Link>
            <Link href="/learn/future-forms" className="hover:text-emerald-700">ফিউচার ফর্ম</Link>
            <Link href="/" className="hover:text-emerald-700">অ্যাপ</Link>
          </div>
          <p className="mt-3 text-xs leading-5 text-stone-400">
            বাংলায় সহজ ইংরেজি গ্রামার — ফ্রি লেসন, কুইজ ও প্র্যাকটিস।
          </p>
        </div>
      </footer>
    </div>
  );
}
