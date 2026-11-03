// D46/D47 SEO — sitemap.xml: homepage + the /learn topic cluster + the
// /guide article cluster. Next.js generates /sitemap.xml from this file.

import type { MetadataRoute } from "next";
import { allLearnPages } from "@/lib/learn-slugs";
import { allGuides } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/learn`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...allLearnPages().map((p) => ({
      url: `${SITE_URL}/learn/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.advanced ? 0.6 : 0.8,
    })),
    {
      url: `${SITE_URL}/guide`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...allGuides().map((g) => ({
      url: `${SITE_URL}/guide/${g.slug}`,
      lastModified: new Date(g.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
