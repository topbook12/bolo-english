import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // `standalone` output is only needed for the local sandbox; Vercel builds natively
  output: process.env.VERCEL ? undefined : "standalone",
  reactStrictMode: false,
  // i18n JSON files are read with fs at request time — guarantee they ship in
  // the Vercel serverless bundle (dynamic paths are not auto-traced reliably)
  outputFileTracingIncludes: {
    "/**": ["./messages/**/*"],
  },
};

export default withNextIntl(nextConfig);
