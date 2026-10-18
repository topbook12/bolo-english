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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Clickjacking / MIME sniffing / referrer leakage — no downside.
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          // WebRTC app: only this origin may use camera/mic.
          {
            key: "Permissions-Policy",
            value: "camera=(self), microphone=(self), geolocation=(), payment=()",
          },
          // HSTS (Vercel terminates TLS; browsers then refuse plain HTTP).
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
