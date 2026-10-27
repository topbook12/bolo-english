// ─── Shadowing bank (D18, ROADMAP-60.md) ────────────────────────────────────
// PURE module. Shadowing = listen → speak along with the speaker → compare.
// Every line is a natural, everyday English sentence with trilingual
// translation help, grouped in 3 levels. Listening rides free on-device TTS;
// the only BYOK cost is one STT call per attempt — same proven pipeline as
// the pronunciation card.

export type ShadowLevel = "beginner" | "intermediate" | "advanced";

export interface ShadowLine {
  id: string;
  level: ShadowLevel;
  /** Natural spoken English (contractions included — that's the point). */
  text: string;
  /** Bangla meaning (also shown to English-UI learners as helper). */
  bn: string;
  /** Hindi meaning. */
  hi: string;
}

export const SHADOW_LINES: ShadowLine[] = [
  /* BEGINNER — short present-tense lines, clear rhythm. */
  {
    id: "b1",
    level: "beginner",
    text: "I go to the market every morning.",
    bn: "আমি প্রতি সকালে বাজারে যাই।",
    hi: "मैं हर सुबह बाज़ार जाता हूँ।",
  },
  {
    id: "b2",
    level: "beginner",
    text: "She's my younger sister.",
    bn: "সে আমার ছোট বোন।",
    hi: "वह मेरी छोटी बहन है।",
  },
  {
    id: "b3",
    level: "beginner",
    text: "We eat dinner together at night.",
    bn: "আমরা রাতে একসাথে রাতের খাবার খাই।",
    hi: "हम रात में साथ डिनर करते हैं।",
  },
  {
    id: "b4",
    level: "beginner",
    text: "It's raining heavily today.",
    bn: "আজ ভীষণ বৃষ্টি হচ্ছে।",
    hi: "आज भारी बारिश हो रही है।",
  },
  {
    id: "b5",
    level: "beginner",
    text: "I don't understand this word.",
    bn: "এই শব্দটা আমি বুঝি না।",
    hi: "मैं यह शब्द नहीं समझता।",
  },
  {
    id: "b6",
    level: "beginner",
    text: "Could you say that again, please?",
    bn: "আপনি কি দয়া করে আবার বলতে পারেন?",
    hi: "क्या आप कृपया दोबारा बोल सकते हैं?",
  },

  /* INTERMEDIATE — contractions, linking, everyday past/future. */
  {
    id: "i1",
    level: "intermediate",
    text: "I'd love to visit Cox's Bazar next winter.",
    bn: "আমি পরের শীতে কক্সবাজার যেতে চাই।",
    hi: "मैं अगली सर्दियों में कॉक्स बाज़ार जाना चाहूँगा।",
  },
  {
    id: "i2",
    level: "intermediate",
    text: "He didn't show up at the meeting yesterday.",
    bn: "সে গতকালের মিটিংয়ে হাজির হয়নি।",
    hi: "वह कल मीटिंग में नहीं आया।",
  },
  {
    id: "i3",
    level: "intermediate",
    text: "We've been waiting for the bus for twenty minutes.",
    bn: "আমরা বিশ মিনিট ধরে বাসের জন্য অপেক্ষা করছি।",
    hi: "हम बीस मिनट से बस का इंतज़ार कर रहे हैं।",
  },
  {
    id: "i4",
    level: "intermediate",
    text: "You should've told me earlier about the exam.",
    bn: "পরীক্ষার কথা আমাকে আগে বলা উচিত ছিল।",
    hi: "परीक्षा के बारे में मुझे पहले बता देना चाहिए था।",
  },
  {
    id: "i5",
    level: "intermediate",
    text: "What are you planning to do after graduation?",
    bn: "গ্র্যাজুয়েশনের পরে কী করতে চাও?",
    hi: "ग्रेजुएशन के बाद आप क्या करने की योजना बना रहे हैं?",
  },
  {
    id: "i6",
    level: "intermediate",
    text: "Let me know if you need any help with the form.",
    bn: "ফর্মটায় সাহায্য লাগলে আমাকে জানাও।",
    hi: "फॉर्म में मदद चाहिए तो मुझे बताना।",
  },

  /* ADVANCED — connected speech, conditionals, work fluency. */
  {
    id: "a1",
    level: "advanced",
    text: "If I'd known about the traffic, I would've left earlier.",
    bn: "যানজটের কথা জানতে পারলে আমি আগে রওনা দিতাম।",
    hi: "अगर मुझे ट्रैफ़िक का पता होता, तो मैं पहले निकल जाता।",
  },
  {
    id: "a2",
    level: "advanced",
    text: "I've been meaning to ask you about the project deadline.",
    bn: "প্রজেক্টের ডেডলাইন নিয়ে তোমাকে জিজ্ঞেস করতে করতে চলে গেছিলাম।",
    hi: "मैं प्रोजेक्ट की डेडलाइन के बारे में पूछना चाह रहा था।",
  },
  {
    id: "a3",
    level: "advanced",
    text: "To be honest, the report could've been a bit more concise.",
    bn: "সত্যি বলতে, রিপোর্টটা আরেকটু সংক্ষিপ্ত হতে পারত।",
    hi: "सच कहूँ तो, रिपोर्ट थोड़ी और संक्षिप्त हो सकती थी।",
  },
  {
    id: "a4",
    level: "advanced",
    text: "We're looking forward to working with your team.",
    bn: "আমরা তোমাদের টিমের সাথে কাজ করার জন্য অপেক্ষা করছি।",
    hi: "हम आपकी टीम के साथ काम करने के लिए उत्सुक हैं।",
  },
  {
    id: "a5",
    level: "advanced",
    text: "Had it not been raining, we would've walked to the office.",
    bn: "বৃষ্টি না হলে আমরা হেঁটে অফিসে যেতাম।",
    hi: "बारिश न होती तो हम पैदल ऑफिस चले जाते।",
  },
  {
    id: "a6",
    level: "advanced",
    text: "The sooner we finish this, the better it is for everyone.",
    bn: "আমরা যত তাড়াতাড়ি এটা শেষ করব, সবার জন্য তত ভালো।",
    hi: "जितनी जल्दी हम यह ख़त्म करेंगे, सबके लिए उतना बेहतर।",
  },
];

/** All lines for one level, in bank order. */
export function shadowLinesForLevel(level: ShadowLevel): ShadowLine[] {
  return SHADOW_LINES.filter((l) => l.level === level);
}
