import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { localeMeta, type Locale } from "@/i18n/config";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bolo English — নির্ভয়ে ইংরেজি বলুন",
  description:
    "ফ্রি ইংরেজি শেখার প্ল্যাটফর্ম: ভিডিও কলে ১:১ ও গ্রুপ কথা বলা, লাইভ AI সংশোধন, গ্রামার, ডেইলি ভোকাবুলারি ও লিসেনিং প্র্যাকটিস।",
  keywords: ["ইংরেজি শেখা", "English learning", "speaking practice", "PWA", "বাংলা"],
  applicationName: "Bolo English",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-192.png", sizes: "192x192" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bolo English",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#059669",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={localeMeta[locale as Locale]?.htmlLang ?? "bn"} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoBengali.variable} antialiased bg-background text-foreground`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
