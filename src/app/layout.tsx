import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_Bengali, Noto_Sans_Devanagari } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { localeMeta, defaultLocale, type Locale } from "@/i18n/config";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import AdminSetupCapture from "@/components/admin/AdminSetupCapture";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const notoBengali = Noto_Sans_Bengali({ variable: "--font-bengali", subsets: ["bengali", "latin"], weight: ["400", "500", "600", "700"] });
const notoDevanagari = Noto_Sans_Devanagari({ variable: "--font-devanagari", subsets: ["devanagari", "latin"], weight: ["400", "500", "600", "700"] });

const META: Record<Locale, { title: string; description: string; keywords: string[] }> = {
  en: {
    title: "Bolo English — Speak English Fearlessly",
    description:
      "Free English learning platform: 1:1 & group video-call speaking practice, live AI corrections, grammar, daily vocabulary & listening.",
    keywords: ["learn English", "English speaking practice", "AI English tutor", "grammar", "vocabulary", "listening practice", "free English app"],
  },
  bn: {
    title: "Bolo English — নির্ভয়ে ইংরেজি বলুন",
    description:
      "ফ্রি ইংরেজি শেখার প্ল্যাটফর্ম: ভিডিও কলে ১:১ ও গ্রুপ কথা বলা, লাইভ AI সংশোধন, গ্রামার, ডেইলি ভোকাবুলারি ও লিসেনিং প্র্যাকটিস।",
    keywords: ["ইংরেজি শেখা", "English learning", "speaking practice", "PWA", "বাংলা"],
  },
  hi: {
    title: "Bolo English — बेझिझक अंग्रेज़ी बोलें",
    description:
      "मुफ़्त अंग्रेज़ी सीखने का प्लेटफ़ॉर्म: 1:1 और ग्रुप वीडियो कॉल स्पीकिंग प्रैक्टिस, लाइव AI सुधार, ग्रामर, डेली वोकैबुलरी और लिसनिंग प्रैक्टिस।",
    keywords: ["अंग्रेज़ी सीखें", "English learning", "speaking practice", "PWA"],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const m = META[locale] ?? META[defaultLocale];
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
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
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#059669",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  return (
    <html lang={localeMeta[locale as Locale]?.htmlLang ?? "en"} suppressHydrationWarning>
      <body
        className={`font-sans ${geistSans.variable} ${geistMono.variable} ${notoBengali.variable} ${notoDevanagari.variable} antialiased bg-background text-foreground`}
      >
        <NextIntlClientProvider>
          <AdminSetupCapture />
          {children}
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
