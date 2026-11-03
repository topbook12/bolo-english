// D46 SEO foundation — canonical site URL helper.
//
// The absolute site URL is needed for sitemap.xml, robots.txt and the OG/
// canonical tags. Set NEXT_PUBLIC_SITE_URL in the deployment environment
// (e.g. "https://boloenglish.com" — no trailing slash); when it is absent
// the local dev origin is used so generated absolute URLs stay valid.

export const SITE_URL: string = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export const SITE_NAME = "Bolo English";
