// D46 SEO — sitemap.xml: homepage + the /learn topic cluster.
// Next.js generates /sitemap.xml from this file at build time.

import type { MetadataRoute } from "next";
import { allLearnPages } from "@/lib/learn-slugs";
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
  ];
}
