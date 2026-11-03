// D47 — guide CTA registry: maps a GuideCtaKind to the in-app destination.
//
// Guide articles embed platform links ("প্ল্যাটফর্ম-লিংক এমবেড") after their
// sections so a reader can jump straight from reading to practising. The
// href uses the /?open=<tab> deep link that AppShell consumes on mount
// (D47) so the app opens on the exact section the article is pointing at.
//
// IELTS simulator + pronunciation drills live inside the Speaking section,
// and the certificate card lives inside Progress — their hrefs reflect that.

import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  BookOpenCheck,
  Boxes,
  FileText,
  Headphones,
  MessagesSquare,
  Mic,
  PenLine,
  Target,
  Users,
} from "lucide-react";
import type { GuideCtaKind, LocalizedText } from "./types";

export interface GuideCta {
  /** In-app deep link (works for guests too — login gate preserves intent). */
  href: string;
  label: LocalizedText;
  desc: LocalizedText;
  icon: LucideIcon;
}

export const GUIDE_CTAS: Record<GuideCtaKind, GuideCta> = {
  speaking: {
    href: "/?open=speaking",
    label: { bn: "স্পিকিং প্র্যাকটিস করুন", en: "Practice speaking", hi: "स्पीकिंग प्रैक्टिस करें" },
    desc: {
      bn: "AI পার্টনারের সাথে আজই কথা বলুন — ফ্রি",
      en: "Talk with your AI partner today — free",
      hi: "AI पार्टनर के साथ आज ही बात करें — मुफ़्त",
    },
    icon: MessagesSquare,
  },
  grammar: {
    href: "/?open=grammar",
    label: { bn: "গ্রামার লেসন দেখুন", en: "Open grammar lessons", hi: "ग्रामर लेसन देखें" },
    desc: {
      bn: "সহজ বাংলা ব্যাখ্যা + ভুল→সঠিক কুইজ",
      en: "Simple Bangla explanations + wrong→right quizzes",
      hi: "आसान बांग्ला व्याख्या + ग़लत→सही क्विज़",
    },
    icon: BookOpenCheck,
  },
  vocab: {
    href: "/?open=vocab",
    label: { bn: "ডেইলি শব্দ শিখুন", en: "Learn daily words", hi: "रोज़ नए शब्द सीखें" },
    desc: {
      bn: "প্রতিদিন নতুন শব্দ, কুইজ ও ওয়ার্ডবুক",
      en: "New words every day, quizzes and wordbook",
      hi: "हर दिन नए शब्द, क्विज़ और वर्डबुक",
    },
    icon: Boxes,
  },
  listening: {
    href: "/?open=listening",
    label: { bn: "গল্প শুনুন", en: "Listen to stories", hi: "कहानियाँ सुनें" },
    desc: {
      bn: "আপনার লেভেলের গ্রেডেড লিসেনিং গল্প",
      en: "Level-matched listening stories",
      hi: "अपने लेवल के ग्रेडेड लिसनिंग कहानियाँ",
    },
    icon: Headphones,
  },
  reading: {
    href: "/?open=reading",
    label: { bn: "পড়া প্র্যাকটিস করুন", en: "Practice reading", hi: "पढ़ाई प्रैक्टिस करें" },
    desc: {
      bn: "লাইন-ধরে বাংলা সহায়তাসহ প্যাসেজ",
      en: "Passages with line-by-line Bangla help",
      hi: "लाइन-दर-लाइन बांग्ला सहायता वाले पैसेज",
    },
    icon: BookOpen,
  },
  writing: {
    href: "/?open=writing",
    label: { bn: "রাইটিং প্র্যাকটিস করুন", en: "Practice writing", hi: "राइटिंग प्रैक्टिस करें" },
    desc: {
      bn: "AI স্কোর ও সংশোধনসহ এডিটর",
      en: "Editor with AI scoring and corrections",
      hi: "AI स्कोर और सुधार के साथ एडिटर",
    },
    icon: PenLine,
  },
  ielts: {
    href: "/?open=speaking",
    label: { bn: "IELTS সিমুলেটর চালান", en: "Run the IELTS simulator", hi: "IELTS सिमुलेटर चलाएँ" },
    desc: {
      bn: "পূর্ণ মক টেস্ট ও ব্যান্ড-ফিডব্যাক",
      en: "Full mock tests with band feedback",
      hi: "पूरे मॉक टेस्ट और बैंड-फीडबैक",
    },
    icon: Target,
  },
  pronunciation: {
    href: "/?open=speaking",
    label: { bn: "উচ্চারণ প্র্যাকটিস করুন", en: "Practice pronunciation", hi: "उच्चारण प्रैक्टिस करें" },
    desc: {
      bn: "শুনে-বলে স্কোর ও ড্রিল",
      en: "Listen-and-repeat scoring and drills",
      hi: "सुनकर-बोलकर स्कोर और ड्रिल",
    },
    icon: Mic,
  },
  cv: {
    href: "/?open=cv",
    label: { bn: "CV Studio খুলুন", en: "Open CV Studio", hi: "CV Studio खोलें" },
    desc: {
      bn: "ইংরেজি CV ও কভার-লেটার বিল্ডার",
      en: "English CV and cover-letter builder",
      hi: "इंग्लिश CV और कवर-लेटर बिल्डर",
    },
    icon: FileText,
  },
  community: {
    href: "/?open=community",
    label: { bn: "কমিউনিটিতে যোগ দিন", en: "Join the community", hi: "कम्युनिटी से जुड़ें" },
    desc: {
      bn: "পার্টনার-ম্যাচ, লিডারবোর্ড ও ফিড",
      en: "Partner match, leaderboard and feed",
      hi: "पार्टनर-मैच, लीडरबोर्ड और फ़ीड",
    },
    icon: Users,
  },
  certificate: {
    href: "/?open=progress",
    label: { bn: "সার্টিফিকেট দেখুন", en: "See your certificate", hi: "सर्टिफिकेट देखें" },
    desc: {
      bn: "XP ও সক্রিয় দিন জমিয়ে সার্টিফিকেট জিতুন",
      en: "Earn a certificate with XP and active days",
      hi: "XP और एक्टिव दिन जोड़कर सर्टिफिकेट पाएँ",
    },
    icon: Award,
  },
};
