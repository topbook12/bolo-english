// ─── Owner-authored Library: vocab seed data ───
// 36 entries — 12 per level (beginner / intermediate / advanced),
// mixed categories (general / daily / work / travel / academic).
//
// NOTE: LibraryVocabEntry has no sortOrder field — order is conveyed by array
// position: beginner rows 0–11, intermediate rows 0–11, advanced rows 0–11.
// The seeder (which maps rows by word+level) can use the array index as the
// DB sortOrder. `id` is "" here; the server generates the real id.
import type {
  LibraryVocabData,
  LibraryVocabEntry,
} from "../../src/lib/library-types";

export const SEED_VOCAB: LibraryVocabEntry[] = [
  /* ─────────────────────────── BEGINNER (0–11) ─────────────────────────── */

  {
    id: "",
    word: "hungry",
    level: "beginner",
    category: "daily",
    data: {
      pronunciation: "হাংগ্রি",
      partOfSpeech: "adjective",
      meaning: {
        bn: "ক্ষুধার্ত — যখন খেতে ইচ্ছে করে",
        en: "feeling that you want to eat",
        hi: "भूखा — जब खाने की इच्छा हो",
      },
      englishMeaning: "feeling that you want or need food",
      examples: [
        {
          en: "I am very hungry. Let's have lunch.",
          bn: "আমার খুব ক্ষিদে পেয়েছে। চলো দুপুরের খাবার খেতে যাই।",
        },
        {
          en: "The children were hungry after playing outside.",
          bn: "বাইরে খেলা করার পর বাচ্চাদের খিদে পেয়েছিল।",
        },
      ],
      tip: {
        bn: "নিজের ক্ষুধা বোঝাতে 'I am hungry' — এই একটা বাক্যই প্রতিদিন কাজে লাগবে। খাওয়ার পর বলুন 'I am full', মানে পেট ভরে গেছে। খুব বেশি ক্ষুধা বোঝাতে 'I'm starving'।",
        en: "'I am hungry' is one of the most useful everyday sentences. After eating, say 'I am full'. For extreme hunger, say 'I'm starving'.",
        hi: "'I am hungry' — बहुत काम का वाक्य। खाने के बाद 'I am full' कहें।",
      },
      synonyms: ["starving", "famished"],
      antonyms: ["full", "satisfied"],
    },
  },
  {
    id: "",
    word: "tired",
    level: "beginner",
    category: "daily",
    data: {
      pronunciation: "টায়ার্ড",
      partOfSpeech: "adjective",
      meaning: {
        bn: "ক্লান্ত — যখন বিশ্রাম বা ঘুম দরকার",
        en: "feeling that you need rest or sleep",
        hi: "थका हुआ — जब आराम चाहिए",
      },
      englishMeaning: "feeling that you need rest or sleep",
      examples: [
        {
          en: "I worked all day, so I am tired now.",
          bn: "সারাদিন কাজ করেছি, তাই এখন বড্ড ক্লান্ত লাগছে।",
        },
        {
          en: "Don't drive if you feel tired.",
          bn: "ক্লান্ত লাগলে গাড়ি চালাবেন না।",
        },
      ],
      tip: {
        bn: "ক্লান্তি বোঝাতে 'I am tired' খুব কাজের। ঘুম আসছে বোঝাতে বলুন 'I am sleepy' — দুটো এক নয়। মারাত্মক ক্লান্তির জন্য শব্দটা 'exhausted'।",
        en: "Use 'I am tired' for being worn out, and 'I am sleepy' for wanting to sleep — they are different. Very strong tiredness is 'exhausted'.",
        hi: "'Tired' = थकान, 'sleepy' = नींद — दोनों अलग हैं। बहुत थकान के लिए 'exhausted'।",
      },
      synonyms: ["exhausted", "weary", "sleepy"],
      antonyms: ["energetic", "fresh"],
    },
  },
  {
    id: "",
    word: "beautiful",
    level: "beginner",
    category: "general",
    data: {
      pronunciation: "বিউটিফুল",
      partOfSpeech: "adjective",
      meaning: {
        bn: "সুন্দর — চোখে যা ভালো লাগে",
        en: "very pleasing to look at",
        hi: "सुंदर",
      },
      englishMeaning: "very pretty or pleasing to look at",
      examples: [
        {
          en: "What a beautiful sunset!",
          bn: "কী সুন্দর সূর্যাস্ত!",
        },
        {
          en: "She wore a beautiful saree at the wedding.",
          bn: "বিয়ের অনুষ্ঠানে সে একটা সুন্দর শাড়ি পরেছিল।",
        },
      ],
      tip: {
        bn: "কারো চেহারা বা সাজের প্রশংসায় 'You look beautiful' বলুন। জিনিস বা জায়গার জন্য 'That's beautiful'। আরও জোরালো প্রশংসা চাইলে 'gorgeous' বা 'stunning'।",
        en: "Praise someone's look with 'You look beautiful', and things or places with 'That's beautiful'. Stronger words: 'gorgeous', 'stunning'.",
        hi: "तारीफ़ के लिए 'You look beautiful', चीज़ों के लिए 'That's beautiful' कहें।",
      },
      synonyms: ["pretty", "lovely", "gorgeous"],
      antonyms: ["ugly", "plain"],
    },
  },
  {
    id: "",
    word: "cheap",
    level: "beginner",
    category: "travel",
    data: {
      pronunciation: "চিপ",
      partOfSpeech: "adjective",
      meaning: {
        bn: "সস্তা — কম দামের",
        en: "costing little money",
        hi: "सस्ता",
      },
      englishMeaning: "costing very little money",
      examples: [
        {
          en: "This shop sells cheap but good clothes.",
          bn: "এই দোকানে সস্তা কিন্তু ভালো কাপড় পাওয়া যায়।",
        },
        {
          en: "Plane tickets are usually cheaper in the rainy season.",
          bn: "বর্ষার সময় বিমানের টিকিট সাধারণত কম দামে পাওয়া যায়।",
        },
      ],
      tip: {
        bn: "'cheap' বললে বোঝায় দাম কম, মান খারাপ নয়। তবে অন্যের কেনা জিনিস নিয়ে 'cheap' বললে অপমানজনক শোনাতে পারে — তখন ভদ্র শব্দ 'inexpensive' ব্যবহার করুন।",
        en: "'Cheap' means low in price, not low in quality. But calling something someone bought 'cheap' can sound rude — 'inexpensive' is the politer word.",
        hi: "'Cheap' का मतलब कम दाम। विनम्र शब्द: 'inexpensive'।",
      },
      synonyms: ["inexpensive", "low-cost", "affordable"],
      antonyms: ["expensive", "costly"],
    },
  },
  {
    id: "",
    word: "early",
    level: "beginner",
    category: "work",
    data: {
      pronunciation: "আর্লি",
      partOfSpeech: "adverb",
      meaning: {
        bn: "তাড়াতাড়ি; নির্ধারিত সময়ের আগে",
        en: "before the usual or expected time",
        hi: "जल्दी; समय से पहले",
      },
      englishMeaning: "before the usual or expected time",
      examples: [
        {
          en: "The meeting starts at nine, so please come early.",
          bn: "মিটিং নয়টায় শুরু হয়, তাই একটু আগে চলে আসবেন।",
        },
        {
          en: "She reached the station early and had tea.",
          bn: "সে সময়ের আগেই স্টেশনে পৌঁছে চা খেয়ে নিল।",
        },
      ],
      tip: {
        bn: "অফিস-স্কুলে সময়ের আগে পৌঁছানো বোঝাতে 'come early' বা 'reach early'। 'earlier' মানে আরও আগে — 'Come earlier than yesterday'। বিপরীত শব্দ 'late'।",
        en: "Use 'come early' or 'reach early' for arriving before the right time; 'late' is the opposite. 'Earlier' means even sooner.",
        hi: "समय से पहले पहुँचने के लिए 'come early', देर से के लिए 'late'।",
      },
      synonyms: ["beforehand", "ahead of time"],
      antonyms: ["late", "tardy"],
    },
  },
  {
    id: "",
    word: "help",
    level: "beginner",
    category: "general",
    data: {
      pronunciation: "হেল্প",
      partOfSpeech: "verb",
      meaning: {
        bn: "সাহায্য করা",
        en: "to do something useful for someone",
        hi: "मदद करना",
      },
      englishMeaning: "to make things easier for someone by doing something useful",
      examples: [
        {
          en: "Can you help me carry this bag?",
          bn: "এই ব্যাগটা নিয়ে যেতে আমাকে সাহায্য করবেন?",
        },
        {
          en: "She helps her mother with cooking every day.",
          bn: "সে প্রতিদিন মাকে রান্নার কাজে সাহায্য করে।",
        },
      ],
      tip: {
        bn: "সাহায্য চাইতে সবচেয়ে ভদ্র উপায়: 'Could you help me, please?' আর সাহায্যের প্রস্তাব দিতে 'Can I help you?' — দোকান-রেস্টুরেন্টে এই বাক্যটাই শোনা যায়।",
        en: "To ask for help politely: 'Could you help me, please?' To offer help: 'Can I help you?' — the line you hear in shops and restaurants.",
        hi: "मदद माँगने के लिए: 'Could you help me, please?' पेशकश के लिए: 'Can I help you?'",
      },
      synonyms: ["assist", "aid", "support"],
      antonyms: ["hinder", "obstruct"],
    },
  },
  {
    id: "",
    word: "walk",
    level: "beginner",
    category: "daily",
    data: {
      pronunciation: "ওয়াক",
      partOfSpeech: "verb",
      meaning: {
        bn: "হাঁটা; পায়ে চলা",
        en: "to move on foot",
        hi: "चलना; पैदल जाना",
      },
      englishMeaning: "to move forward by putting one foot in front of the other",
      examples: [
        {
          en: "I walk to the market every morning.",
          bn: "আমি প্রতিদিন সকালে হেঁটে বাজারে যাই।",
        },
        {
          en: "Let's walk along the river in the evening.",
          bn: "চলো সন্ধ্যায় নদীর ধারে হাঁটি।",
        },
      ],
      tip: {
        bn: "পায়ে কোনো জায়গায় যাওয়া বোঝাতে 'walk to + জায়গা' — 'I walked to school'। আর শুধু টহল দিতে বেরোনো বোঝাতে 'go for a walk'।",
        en: "Use 'walk to + place' when you go somewhere on foot: 'I walked to school'. Walking just for pleasure is 'go for a walk'.",
        hi: "पैदल जाने के लिए 'walk to + जगह' कहें; सिर्फ़ टहलने के लिए 'go for a walk'।",
      },
      synonyms: ["stroll", "march"],
      antonyms: [],
    },
  },
  {
    id: "",
    word: "buy",
    level: "beginner",
    category: "travel",
    data: {
      pronunciation: "বাই",
      partOfSpeech: "verb",
      meaning: {
        bn: "কেনা — টাকা দিয়ে জিনিস নেওয়া",
        en: "to get something by paying money",
        hi: "खरीदना",
      },
      englishMeaning: "to get something by paying money for it",
      examples: [
        {
          en: "I want to buy some fruit from the market.",
          bn: "বাজার থেকে কিছু ফল কিনতে চাই।",
        },
        {
          en: "She bought a ticket for the morning train.",
          bn: "সে সকালের ট্রেনের টিকিট কিনেছিল।",
        },
      ],
      tip: {
        bn: "'buy' মানে কেনা, 'sell' মানে বিক্রি করা — গুলিয়ে ফেলবেন না। বাজারে দাম কমাতে বলুন 'Can you make it cheaper?' বা 'Can you give me a better price?'",
        en: "'Buy' = you get it; 'sell' = you give it away for money. To bargain in a market: 'Can you make it cheaper?'",
        hi: "'Buy' = खरीदना, 'sell' = बेचना। भाव कम करने के लिए: 'Can you make it cheaper?'",
      },
      synonyms: ["purchase", "get"],
      antonyms: ["sell", "give away"],
    },
  },
  {
    id: "",
    word: "happy",
    level: "beginner",
    category: "general",
    data: {
      pronunciation: "হ্যাপি",
      partOfSpeech: "adjective",
      meaning: {
        bn: "খুশি; আনন্দিত",
        en: "feeling pleasure or joy",
        hi: "खुश; आनंदित",
      },
      englishMeaning: "feeling glad or pleased",
      examples: [
        {
          en: "I am so happy to see you after a long time.",
          bn: "অনেকদিন পর তোমাকে দেখে খুব খুশি হলাম।",
        },
        {
          en: "The students were happy with their exam results.",
          bn: "পরীক্ষার ফলাফলে ছাত্ররা খুশি ছিল।",
        },
      ],
      tip: {
        bn: "কারো সাথে দেখা হলে উষ্ণ ভাব দিতে বলুন 'I'm so happy to see you!' খুশির কারণ বোঝাতে 'happy about' বা 'happy with' ব্যবহার করুন — 'I'm happy with my results'।",
        en: "Add warmth when meeting someone: 'I'm so happy to see you!' Use 'happy about' or 'happy with' before the reason: 'I'm happy with my results'.",
        hi: "मिलते समय 'I'm so happy to see you!' कहें। कारण बताने के लिए 'happy about / with'।",
      },
      synonyms: ["glad", "cheerful", "joyful"],
      antonyms: ["sad", "unhappy"],
    },
  },
  {
    id: "",
    word: "rain",
    level: "beginner",
    category: "daily",
    data: {
      pronunciation: "রেইন",
      partOfSpeech: "noun",
      meaning: {
        bn: "বৃষ্টি",
        en: "water that falls from clouds",
        hi: "बारिश",
      },
      englishMeaning: "water that falls from the sky in small drops",
      examples: [
        {
          en: "The rain stopped and a rainbow appeared.",
          bn: "বৃষ্টি থামল, আর রংধনু দেখা দিল।",
        },
        {
          en: "Take an umbrella — there is rain in the forecast.",
          bn: "ছাতা নাও — আবহাওয়ার খবরে বৃষ্টির কথা বলছে।",
        },
      ],
      tip: {
        bn: "'rain' বিশেষ্য ও ক্রিয়া দুটোই: 'The rain is heavy' এবং 'It's raining'। মুষলধারে বৃষ্টি বোঝাতে 'It's pouring' — রাস্তায় ভেজা এড়াতে খুব কাজের বাক্য।",
        en: "'Rain' is both a noun and a verb: 'The rain is heavy' / 'It's raining'. For very heavy rain: 'It's pouring'.",
        hi: "'Rain' संज्ञा और क्रिया दोनों है: 'It's raining'। तेज़ बारिश: 'It's pouring'।",
      },
      synonyms: ["rainfall", "shower", "drizzle"],
      antonyms: [],
    },
  },
  {
    id: "",
    word: "friend",
    level: "beginner",
    category: "general",
    data: {
      pronunciation: "ফ্রেন্ড",
      partOfSpeech: "noun",
      meaning: {
        bn: "বন্ধু",
        en: "a person you know well and like",
        hi: "दोस्त; मित्र",
      },
      englishMeaning: "a person you know well and like, who is not family",
      examples: [
        {
          en: "My best friend lives in Chattogram.",
          bn: "আমার সবচেয়ে প্রিয় বন্ধু চট্টগ্রামে থাকে।",
        },
        {
          en: "We have been friends since school.",
          bn: "আমরা স্কুল থেকেই বন্ধু।",
        },
      ],
      tip: {
        bn: "'best friend' মানে সবচেয়ে কাছের বন্ধু। বন্ধুত্ব গড়া বোঝাতে 'make friends with someone' — 'I made a new friend at the coaching centre'।",
        en: "'Best friend' is your closest one. To start a friendship, 'make friends with someone': 'I made a new friend at the coaching centre'.",
        hi: "'Best friend' सबसे करीबी दोस्त। दोस्ती बनाना = 'make friends'।",
      },
      synonyms: ["companion", "pal", "mate"],
      antonyms: ["enemy", "stranger"],
    },
  },
  {
    id: "",
    word: "easy",
    level: "beginner",
    category: "academic",
    data: {
      pronunciation: "ইজি",
      partOfSpeech: "adjective",
      meaning: {
        bn: "সহজ — যা করতে কষ্ট হয় না",
        en: "not difficult",
        hi: "आसान",
      },
      englishMeaning: "not difficult; needing little effort",
      examples: [
        {
          en: "This math problem is easier than the last one.",
          bn: "এই অংকটা আগেরটার চেয়ে সহজ।",
        },
        {
          en: "Take it easy — the exam is still a week away.",
          bn: "টেনশন করো না — পরীক্ষা আরও এক সপ্তাহ দূরে।",
        },
      ],
      tip: {
        bn: "পরীক্ষা বা পড়া সহজ বোঝাতে 'The exam was easy'। কাউকে সান্ত্বনা দিতে 'Take it easy' মানে টেনশন না নেওয়া। 'easy' আর 'simple' প্রায় একই, তবে 'simple' মানে জটিলতাই নেই।",
        en: "Say 'The exam was easy' about tests. 'Take it easy' means relax. 'Easy' and 'simple' are close, but 'simple' stresses that something is not complicated.",
        hi: "परीक्षा आसान थी = 'The exam was easy'। सांत्वना देने के लिए 'Take it easy'।",
      },
      synonyms: ["simple", "effortless"],
      antonyms: ["difficult", "hard"],
    },
  },

  /* ───────────────────────── INTERMEDIATE (0–11) ───────────────────────── */

  {
    id: "",
    word: "improve",
    level: "intermediate",
    category: "work",
    data: {
      pronunciation: "ইমপ্রুভ",
      partOfSpeech: "verb",
      meaning: {
        bn: "উন্নত করা; উন্নতি করা",
        en: "to become better, or to make something better",
        hi: "सुधार करना; बेहतर बनाना",
      },
      englishMeaning: "to make something better, or to get better",
      examples: [
        {
          en: "I want to improve my English speaking skills.",
          bn: "আমি ইংরেজি বলার দক্ষতা উন্নত করতে চাই।",
        },
        {
          en: "His performance has improved a lot this year.",
          bn: "এ বছর তার কাজের মান অনেকটাই উন্নত হয়েছে।",
        },
      ],
      tip: {
        bn: "'improve' দুইভাবেই চলে: 'I improved my pronunciation' এবং 'My pronunciation improved' — দুটোই শুদ্ধ। ইন্টারভিউতে 'I want to improve my skills' খুব কাজের বাক্য।",
        en: "'Improve' works both ways: 'I improved my pronunciation' and 'My pronunciation improved' are both correct. In interviews, 'I want to improve my skills' is very useful.",
        hi: "'Improve' दोनों तरह से चलता है: 'I improved my pronunciation' / 'My pronunciation improved'।",
      },
      synonyms: ["enhance", "upgrade", "refine"],
      antonyms: ["worsen", "decline"],
    },
  },
  {
    id: "",
    word: "manage",
    level: "intermediate",
    category: "work",
    data: {
      pronunciation: "ম্যানেজ",
      partOfSpeech: "verb",
      meaning: {
        bn: "সামলানো; পরিচালনা করা",
        en: "to deal with something successfully",
        hi: "सँभालना; प्रबंधन करना",
      },
      englishMeaning: "to succeed in dealing with something, especially something difficult",
      examples: [
        {
          en: "She manages a team of ten people.",
          bn: "সে দশজনের একটা দল পরিচালনা করে।",
        },
        {
          en: "We managed to finish the report before the deadline.",
          bn: "ডেডলাইনের আগেই আমরা রিপোর্টটা শেষ করতে পেরেছি।",
        },
      ],
      tip: {
        bn: "'manage to do something' মানে কঠিন কিছু করতে সফল হওয়া — 'I managed to book the ticket'। আর বাংলার 'ম্যানেজ করে দেখো' অর্থে (গুছিয়ে সমাধান করা) ইংরেজিতে বলুন 'sort it out' বা 'figure it out'।",
        en: "'Manage to do something' means to succeed despite difficulty: 'I managed to book the ticket'. For the informal sense of fixing things, say 'sort it out' or 'figure it out'.",
        hi: "'Manage to do something' = कठिनाई के बावजूद सफल होना।",
      },
      synonyms: ["handle", "run", "oversee"],
      antonyms: ["mismanage", "neglect"],
    },
  },
  {
    id: "",
    word: "suggest",
    level: "intermediate",
    category: "daily",
    data: {
      pronunciation: "সাজেস্ট",
      partOfSpeech: "verb",
      meaning: {
        bn: "পরামর্শ দেওয়া; প্রস্তাব করা",
        en: "to tell someone your idea about what to do",
        hi: "सुझाव देना",
      },
      englishMeaning: "to offer an idea or plan for others to consider",
      examples: [
        {
          en: "I suggest trying the new café near the campus.",
          bn: "আমার পরামর্শ, ক্যাম্পাসের পাশের নতুন ক্যাফেটা একবার চেখে দেখো।",
        },
        {
          en: "She suggested that we leave early to avoid traffic.",
          bn: "যানজট এড়াতে আগে রওনা দেওয়ার পরামর্শ দিল সে।",
        },
      ],
      tip: {
        bn: "মনে রাখবেন 'suggest to go' ভুল — বলবেন 'suggest going' বা 'suggest that we go'। অনানুষ্ঠানিকভাবে সাজেশন দিতে 'How about...?' বা 'Why don't we...?' খুব সহজ।",
        en: "Never say 'suggest to go' — say 'suggest going' or 'suggest that we go'. Casually, 'How about...?' and 'Why don't we...?' also make suggestions.",
        hi: "'suggest to go' नहीं — 'suggest going' या 'suggest that we go' कहें।",
      },
      synonyms: ["recommend", "propose", "advise"],
      antonyms: ["oppose", "discourage"],
    },
  },
  {
    id: "",
    word: "afford",
    level: "intermediate",
    category: "travel",
    data: {
      pronunciation: "আফোর্ড",
      partOfSpeech: "verb",
      meaning: {
        bn: "সামর্থ্য থাকা — খরচ চালাতে পারা",
        en: "to have enough money for something",
        hi: "सामर्थ्य होना; खर्च उठा सकना",
      },
      englishMeaning: "to have enough money (or time) to buy or do something",
      examples: [
        {
          en: "We can't afford to stay in a five-star hotel.",
          bn: "পাঁচ তারার হোটেলে থাকার সামর্থ্য আমাদের নেই।",
        },
        {
          en: "Now that I have a job, I can afford to travel more.",
          bn: "এখন চাকরি পেয়েছি, তাই বেশি ভ্রমণের খরচ চালাতে পারি।",
        },
      ],
      tip: {
        bn: "'afford'-এর সাথে প্রায় সবসময় can/could/be able to লাগে — শুধু 'I afford' বলা হয় না। না-বোধক 'I can't afford it' বাক্যটা ভ্রমণ-শপিংয়ে খুব কাজে লাগে।",
        en: "'Afford' almost always needs can/could/be able to — never just 'I afford it'. 'I can't afford it' is a very handy sentence while travelling or shopping.",
        hi: "'Afford' के साथ can/could ज़रूरी: 'I can't afford it' — बहुत काम का वाक्य।",
      },
      synonyms: [],
      antonyms: [],
    },
  },
  {
    id: "",
    word: "achieve",
    level: "intermediate",
    category: "academic",
    data: {
      pronunciation: "অ্যাচিভ",
      partOfSpeech: "verb",
      meaning: {
        bn: "অর্জন করা — পরিশ্রমে পাওয়া",
        en: "to succeed in getting a result you worked for",
        hi: "प्राप्त करना; हासिल करना",
      },
      englishMeaning: "to succeed in doing or getting something after effort",
      examples: [
        {
          en: "After months of hard work, she achieved a GPA of 5.00.",
          bn: "মাসের পর মাস কষ্ট করে পড়ে সে জিপিএ-৫ অর্জন করেছে।",
        },
        {
          en: "You can achieve your goals with steady practice.",
          bn: "নিয়মিত চর্চার মাধ্যমে নিজের লক্ষ্য অর্জন করা সম্ভব।",
        },
      ],
      tip: {
        bn: "'achieve' ব্যবহার হয় লক্ষ্য, সাফল্য, স্বপ্নের সাথে — 'achieve a goal / success / a dream'। মানুষের সাথে বসে না; কাউকে কোথাও পৌঁছানো বা যোগাযোগ করা বোঝাতে 'reach'।",
        en: "Use 'achieve' with goals, success and dreams: 'achieve a goal / success / a dream'. It does not go with people — to contact someone, use 'reach'.",
        hi: "'Achieve a goal / success / dream' — लक्ष्य-सफलता के साथ आता है।",
      },
      synonyms: ["accomplish", "attain", "fulfil"],
      antonyms: ["fail", "lose"],
    },
  },
  {
    id: "",
    word: "brave",
    level: "intermediate",
    category: "general",
    data: {
      pronunciation: "ব্রেভ",
      partOfSpeech: "adjective",
      meaning: {
        bn: "সাহসী",
        en: "not afraid of danger or pain",
        hi: "बहादुर; साहसी",
      },
      englishMeaning: "willing to face danger or pain without fear",
      examples: [
        {
          en: "It was brave of him to speak against the injustice.",
          bn: "অন্যায়ের বিরুদ্ধে কথা বলা তার জন্য সাহসের কাজ ছিল।",
        },
        {
          en: "Be brave — the injection will hurt only for a second.",
          bn: "সাহস রাখো — ইনজেকশনে এক সেকেন্ডের ব্যথা মাত্র।",
        },
      ],
      tip: {
        bn: "কারো কাজের প্রশংসায় 'It was brave of you to...' কাঠামোটা 'You are brave' এর চেয়ে বেশি আবেগ দেয়। সাহসিকতার বিশেষ্য রূপ 'bravery'।",
        en: "To praise an action, 'It was brave of you to...' feels warmer than just 'You are brave'. The noun is 'bravery'.",
        hi: "कार्य की प्रशंसा: 'It was brave of you to...'। संज्ञा: 'bravery'।",
      },
      synonyms: ["courageous", "fearless", "bold"],
      antonyms: ["cowardly", "timid"],
    },
  },
  {
    id: "",
    word: "confident",
    level: "intermediate",
    category: "work",
    data: {
      pronunciation: "কনফিডেন্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "আত্মবিশ্বাসী",
        en: "sure that you can do something well",
        hi: "आत्मविश्वासी",
      },
      englishMeaning: "being sure that you can do something well",
      examples: [
        {
          en: "She looked confident during the job interview.",
          bn: "চাকরির ইন্টারভিউতে সে আত্মবিশ্বাসী দেখাচ্ছিল।",
        },
        {
          en: "I feel confident about tomorrow's presentation.",
          bn: "কালকের প্রেজেন্টেশন নিয়ে আমার আত্মবিশ্বাস আছে।",
        },
      ],
      tip: {
        bn: "বিষয়ের সাথে জোড়া লাগাতে 'confident about something' সবচেয়ে নিরাপদ। ইন্টারভিউয়ের আগে চর্চা করুন: 'I'm confident I can do this' — কথা বলার সুরেই আত্মবিশ্বাস ফোটে।",
        en: "'Confident about something' is the safest pattern. Before interviews, practise saying 'I'm confident I can do this' — confidence grows in your voice.",
        hi: "'Confident about something' सबसे सुरक्षित पैटर्न है।",
      },
      synonyms: ["self-assured", "assured"],
      antonyms: ["shy", "unsure"],
    },
  },
  {
    id: "",
    word: "polite",
    level: "intermediate",
    category: "general",
    data: {
      pronunciation: "পোলাইট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "ভদ্র — ব্যবহারে শালীন ও সম্মানজনক",
        en: "behaving in a respectful and kind way",
        hi: "विनम्र; शिष्ट",
      },
      englishMeaning: "showing respect and good manners to others",
      examples: [
        {
          en: "The waiter was polite even though we arrived late.",
          bn: "আমরা দেরিতে গেলেও ওয়েটার ভদ্র ব্যবহার করেছিল।",
        },
        {
          en: "It is polite to say 'excuse me' before interrupting.",
          bn: "কারো কথা থামানোর আগে 'excuse me' বলা ভদ্রতার অংশ।",
        },
      ],
      tip: {
        bn: "ইংরেজিতে ভদ্র শোনানোর সহজ কৌশল: আদেশের বদলে প্রশ্ন — 'Give me the bill'-এর বদলে 'Could I have the bill, please?' please, thank you, sorry — এই তিনটা শব্দই ভদ্রতার মূল ভিত্তি।",
        en: "The easy trick to sound polite: turn commands into questions — 'Could I have the bill, please?' instead of 'Give me the bill'. Please, thank you and sorry are the three pillars.",
        hi: "विनम्र लगने का तरीका: आदेश की जगह प्रश्न — 'Could I have the bill, please?'",
      },
      synonyms: ["courteous", "well-mannered", "respectful"],
      antonyms: ["rude", "impolite"],
    },
  },
  {
    id: "",
    word: "delay",
    level: "intermediate",
    category: "travel",
    data: {
      pronunciation: "ডিলেই",
      partOfSpeech: "verb",
      meaning: {
        bn: "বিলম্ব করা; পিছিয়ে দেওয়া",
        en: "to make something happen later than planned",
        hi: "देर करना; विलंबित करना",
      },
      englishMeaning: "to make something happen later than planned",
      examples: [
        {
          en: "Our flight was delayed by two hours.",
          bn: "আমাদের ফ্লাইট দুই ঘণ্টা দেরিতে হয়েছে।",
        },
        {
          en: "Don't delay booking the hotel — rooms fill up fast.",
          bn: "হোটেল বুকিং পিছিয়ে দেবেন না — ঘরগুলো তাড়াতাড়ি ভরে যায়।",
        },
      ],
      tip: {
        bn: "এয়ারপোর্টে 'The flight is delayed' শুনলে বুঝবেন ফ্লাইট দেরিতে উড়বে; 'cancelled' মানে বাতিল। ব্যবহার মনে রাখুন: 'be delayed' বা 'delay something' — 'late' ক্রিয়া নয়।",
        en: "At the airport, 'The flight is delayed' means it will leave late; 'cancelled' means it will not fly. Use 'be delayed' or 'delay something' — 'late' is not a verb.",
        hi: "एयरपोर्ट पर 'The flight is delayed' = देरी; 'cancelled' = रद्द।",
      },
      synonyms: ["postpone", "hold up", "put off"],
      antonyms: ["hasten", "speed up"],
    },
  },
  {
    id: "",
    word: "borrow",
    level: "intermediate",
    category: "academic",
    data: {
      pronunciation: "বরো",
      partOfSpeech: "verb",
      meaning: {
        bn: "ধার নেওয়া — ফেরত দেওয়ার শর্তে",
        en: "to take and use something that belongs to someone else, with a plan to return it",
        hi: "उधार लेना",
      },
      englishMeaning: "to take and use something that you will give back later",
      examples: [
        {
          en: "You can borrow up to four books from the library.",
          bn: "লাইব্রেরি থেকে সর্বোচ্চ চারটা বই ধার নেওয়া যায়।",
        },
        {
          en: "May I borrow your notes from yesterday's class?",
          bn: "গতকালের ক্লাসের নোটটা একটু ধার নিতে পারি?",
        },
      ],
      tip: {
        bn: "সবচেয়ে জরুরি পার্থক্য: 'borrow' = ধার নেওয়া, 'lend' = ধার দেওয়া। তাই বলবেন 'Can I borrow your pen?' বা 'Can you lend me your pen?' — 'Can you borrow me...' ভুল। ব্যাংক থেকে টাকা নিলেও 'borrow money from the bank'।",
        en: "Key difference: 'borrow' = take, 'lend' = give. So ask 'Can I borrow your pen?' or 'Can you lend me your pen?' — never 'Can you borrow me...'. You also 'borrow money from a bank'.",
        hi: "'Borrow' = लेना, 'lend' = देना। सही: 'Can you lend me your pen?'",
      },
      synonyms: [],
      antonyms: ["lend", "give"],
    },
  },
  {
    id: "",
    word: "rent",
    level: "intermediate",
    category: "travel",
    data: {
      pronunciation: "রেন্ট",
      partOfSpeech: "verb",
      meaning: {
        bn: "ভাড়া নেওয়া বা ভাড়া দেওয়া — টাকার বিনিময়ে সাময়িক ব্যবহার",
        en: "to pay money to use something that belongs to someone else",
        hi: "किराए पर लेना या देना",
      },
      englishMeaning: "to pay money regularly to use a house, car, etc. that belongs to someone else",
      examples: [
        {
          en: "We rented a car for our Cox's Bazar trip.",
          bn: "কক্সবাজার ভ্রমণের জন্য আমরা একটা গাড়ি ভাড়া নিয়েছিলাম।",
        },
        {
          en: "He rents a flat near his university.",
          bn: "সে বিশ্ববিদ্যালয়ের কাছে একটা ফ্ল্যাট ভাড়া নিয়ে থাকে।",
        },
      ],
      tip: {
        bn: "'rent' দুদিক থেকেই চলে — 'rent a car' (ভাড়া নেওয়া) আর 'rent out a flat' (ভাড়া দেওয়া)। 'borrow'-এর সাথে পার্থক্য: borrow বিনামূল্যে, rent মানেই টাকা দিয়ে সাময়িক ব্যবহার।",
        en: "'Rent' works from both sides: you 'rent a car' (take it) or 'rent out' your flat (give it). Unlike 'borrow', renting always costs money.",
        hi: "'Rent a car' = लेना, 'rent out' = देना। Borrow मुफ़्त, rent में पैसे लगते हैं।",
      },
      synonyms: ["lease", "hire"],
      antonyms: ["own", "buy"],
    },
  },
  {
    id: "",
    word: "gain",
    level: "intermediate",
    category: "work",
    data: {
      pronunciation: "গেইন",
      partOfSpeech: "verb",
      meaning: {
        bn: "অর্জন করা; বাড়া (অভিজ্ঞতা, আস্থা, ওজন)",
        en: "to get more of something useful, such as skill or experience",
        hi: "प्राप्त करना; बढ़ाना",
      },
      englishMeaning: "to get or increase something such as skill, money or weight",
      examples: [
        {
          en: "You will gain experience by working on real projects.",
          bn: "সত্যিকারের প্রজেক্টে কাজ করলেই অভিজ্ঞতা বাড়বে।",
        },
        {
          en: "He has gained the trust of his teammates.",
          bn: "সে দলের সঙ্গীদের আস্থা অর্জন করেছে।",
        },
      ],
      tip: {
        bn: "জোড়া ধরে শিখুন: 'gain experience / gain weight / gain trust'। প্রবাদটাও মনে রাখুন — 'No pain, no gain': পরিশ্রম ছাড়া কিছুই মেলে না।",
        en: "Learn the set phrases: 'gain experience', 'gain weight', 'gain trust'. Remember the proverb 'No pain, no gain'.",
        hi: "'Gain experience / weight / trust' — ये जोड़े याद रखें। प्रवाद: 'No pain, no gain'।",
      },
      synonyms: ["acquire", "obtain", "earn"],
      antonyms: ["lose", "drop"],
    },
  },

  /* ────────────────────────── ADVANCED (0–11) ──────────────────────────── */

  {
    id: "",
    word: "reluctant",
    level: "advanced",
    category: "general",
    data: {
      pronunciation: "রিলাক্ট্যান্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "অনিচ্ছুক; আগ্রহ না দেখানো",
        en: "not willing to do something; hesitating",
        hi: "अनिच्छुक; हिचकिचाता हुआ",
      },
      englishMeaning: "unwilling and hesitating to do something",
      examples: [
        {
          en: "He was reluctant to admit his mistake.",
          bn: "নিজের ভুল স্বীকার করতে সে ছিল অনিচ্ছুক।",
        },
        {
          en: "Many students are reluctant to ask questions in class.",
          bn: "ক্লাসে প্রশ্ন করতে অনেক শিক্ষার্থীই অনিচ্ছুক থাকে।",
        },
      ],
      tip: {
        bn: "কাঠামো মনে রাখুন: 'be reluctant to + verb' — 'She is reluctant to speak in English'। ক্রিয়াবিশেষণ রূপ 'reluctantly': 'He reluctantly agreed'।",
        en: "Pattern: 'be reluctant to + verb' — 'She is reluctant to speak in English'. The adverb is 'reluctantly': 'He reluctantly agreed'.",
        hi: "पैटर्न: 'be reluctant to + verb'। क्रिया-विशेषण: 'reluctantly'।",
      },
      synonyms: ["unwilling", "hesitant", "disinclined"],
      antonyms: ["eager", "willing"],
    },
  },
  {
    id: "",
    word: "feasible",
    level: "advanced",
    category: "work",
    data: {
      pronunciation: "ফিজিবল",
      partOfSpeech: "adjective",
      meaning: {
        bn: "বাস্তবসম্মত; করা সম্ভব এমন",
        en: "possible and practical to do",
        hi: "संभव और व्यावहारिक",
      },
      englishMeaning: "possible to do; practical and likely to work",
      examples: [
        {
          en: "Is the new deadline actually feasible?",
          bn: "নতুন ডেডলাইনটা কি সত্যিই বাস্তবসম্মত?",
        },
        {
          en: "The team found a feasible solution within the budget.",
          bn: "টিম বাজেটের মধ্যেই একটা বাস্তবসম্মত সমাধান বের করেছে।",
        },
      ],
      tip: {
        bn: "মিটিংয়ে প্রস্তাব যাচাইয়ের সবচেয়ে কাজের শব্দ — 'That plan sounds feasible'। ব্যবসায় 'feasibility study' মানে পরিকল্পনা বাস্তবায়নযোগ্য কি না তার যাচাই।",
        en: "In meetings, 'That plan sounds feasible' is a very useful line. In business, 'a feasibility study' checks whether a plan can actually work.",
        hi: "मीटिंग में 'That plan sounds feasible' काफ़ी काम आता है।",
      },
      synonyms: ["practical", "workable", "viable"],
      antonyms: ["impractical", "impossible"],
    },
  },
  {
    id: "",
    word: "overwhelmed",
    level: "advanced",
    category: "daily",
    data: {
      pronunciation: "ওভারহোয়েলমড",
      partOfSpeech: "adjective",
      meaning: {
        bn: "অতিরিক্ত চাপে অভিভূত; কোনমতে সামলাতে না পারা",
        en: "feeling unable to deal with something because it is too much",
        hi: "अभिभूत; बोझ से दबा हुआ",
      },
      englishMeaning: "feeling you cannot cope because something is too much to handle",
      examples: [
        {
          en: "I felt overwhelmed by the amount of homework.",
          bn: "হোমওয়ার্কের পাহাড়প্রমাণ চাপে আমি অভিভূত হয়ে পড়েছিলাম।",
        },
        {
          en: "She was overwhelmed with emotion at the farewell.",
          bn: "বিদায় অনুষ্ঠানে সে আবেগে অভিভূত হয়ে পড়েছিল।",
        },
      ],
      tip: {
        bn: "মানসিক চাপ খুলে বলা ভালো: 'I'm feeling overwhelmed' — এটা দুর্বলতা নয়। 'overwhelmed by' বাইরের চাপের জন্য, 'overwhelmed with' আবেগের জন্য — 'overwhelmed with gratitude' মানে কৃতজ্ঞতায় অভিভূত।",
        en: "It is healthy to say 'I'm feeling overwhelmed'. Use 'overwhelmed by' for pressure and 'overwhelmed with' for emotion — 'overwhelmed with gratitude'.",
        hi: "दबाव के लिए 'overwhelmed by', भावना के लिए 'overwhelmed with'।",
      },
      synonyms: ["overloaded", "swamped", "overpowered"],
      antonyms: ["calm", "composed"],
    },
  },
  {
    id: "",
    word: "acknowledge",
    level: "advanced",
    category: "academic",
    data: {
      pronunciation: "অ্যাকনলেজ",
      partOfSpeech: "verb",
      meaning: {
        bn: "স্বীকার করা; কৃতজ্ঞতা বা স্বীকৃতি জানানো",
        en: "to accept that something is true; to show you have received something",
        hi: "स्वीकार करना; स्वीकृति देना",
      },
      englishMeaning:
        "to accept that something is true, or to show that you have received or noticed something",
      examples: [
        {
          en: "The report acknowledges the lack of reliable data.",
          bn: "রিপোর্টে নির্ভরযোগ্য তথ্যের অভাব স্বীকার করা হয়েছে।",
        },
        {
          en: "He acknowledged his sources at the end of the essay.",
          bn: "রচনার শেষে সে উৎসগুলোর স্বীকৃতি দিয়েছে।",
        },
      ],
      tip: {
        bn: "একাডেমিক লেখায় উৎস দেওয়া বাধ্যতামূলক — 'acknowledge your sources', নইলে প্লেজিয়ারিজম হয়। ইমেইলে 'Please acknowledge receipt' মানে চিঠি পেয়েছেন কি না জানিয়ে দিন।",
        en: "In academic writing you must 'acknowledge your sources', or it counts as plagiarism. In emails, 'Please acknowledge receipt' means confirm that you received it.",
        hi: "Academic लेखन में 'acknowledge your sources' ज़रूरी है।",
      },
      synonyms: ["admit", "recognize", "concede"],
      antonyms: ["deny", "ignore"],
    },
  },
  {
    id: "",
    word: "neglect",
    level: "advanced",
    category: "general",
    data: {
      pronunciation: "নিগ্লেক্ট",
      partOfSpeech: "verb",
      meaning: {
        bn: "অবহেলা করা; যত্ন না নেওয়া",
        en: "to fail to give proper care or attention",
        hi: "उपेक्षा करना; लापरवाही करना",
      },
      englishMeaning: "to not give enough care or attention to someone or something",
      examples: [
        {
          en: "Don't neglect your health while chasing deadlines.",
          bn: "ডেডলাইনের তাড়নায় নিজের স্বাস্থ্যের যত্ন নিতে ভুলে যাবেন না।",
        },
        {
          en: "The old building has been neglected for years.",
          bn: "পুরোনো ভবনটা বছরের পর বছর অবহেলার শিকার।",
        },
      ],
      tip: {
        bn: "জোড়া ধরে মনে রাখুন: 'neglect your studies / family / health'। 'neglect to do something' মানে করতে ভুলে যাওয়া। বিশেষ্য রূপেও চলে: 'child neglect'।",
        en: "Learn the pairs: 'neglect your studies / family / health'. 'Neglect to do something' means to forget to do it. As a noun: 'child neglect'.",
        hi: "'Neglect your studies / family / health' — ये जोड़े याद रखें।",
      },
      synonyms: ["ignore", "overlook", "disregard"],
      antonyms: ["care for", "attend to"],
    },
  },
  {
    id: "",
    word: "ambitious",
    level: "advanced",
    category: "work",
    data: {
      pronunciation: "অ্যাম্বিশাস",
      partOfSpeech: "adjective",
      meaning: {
        bn: "উচ্চাকাঙ্ক্ষী — বড় লক্ষ্য নিয়ে এগোনো",
        en: "having a strong wish to be successful",
        hi: "महत्वाकांक्षी",
      },
      englishMeaning: "having a strong desire to achieve success",
      examples: [
        {
          en: "She is ambitious and wants to lead the team one day.",
          bn: "সে উচ্চাকাঙ্ক্ষী — একদিন দলের নেতৃত্ব দিতে চায়।",
        },
        {
          en: "Launching in five cities in one year is an ambitious plan.",
          bn: "এক বছরেই পাঁচটা শহরে সার্ভিস চালু করা — বেশ উচ্চাভিলাষী পরিকল্পনা।",
        },
      ],
      tip: {
        bn: "'ambitious' প্রশংসা ও সতর্কবার্তা দুটোতেই চলে — 'an ambitious young engineer' (প্রশংসা), 'an overly ambitious plan' (সতর্কতা)। ইন্টারভিউয়ে 'I'm ambitious about my career growth' নিরাপদ উত্তর।",
        en: "'Ambitious' can praise or warn: 'an ambitious young engineer' vs 'an overly ambitious plan'. In interviews, 'I'm ambitious about my career growth' is a safe line.",
        hi: "'Ambitious' तारीफ़ और चेतावनी दोनों में चलता है।",
      },
      synonyms: ["aspiring", "driven", "determined"],
      antonyms: ["unambitious", "complacent"],
    },
  },
  {
    id: "",
    word: "negotiate",
    level: "advanced",
    category: "travel",
    data: {
      pronunciation: "নেগোশিয়েট",
      partOfSpeech: "verb",
      meaning: {
        bn: "দরদাম করা; আলোচনার মাধ্যমে সমঝোতা করা",
        en: "to talk in order to reach an agreement",
        hi: "बातचीत करके समझौता करना",
      },
      englishMeaning: "to discuss something formally in order to reach an agreement",
      examples: [
        {
          en: "He negotiated a better price for the hotel room.",
          bn: "হোটেলের ঘরের ভাড়া নিয়ে তিনি ভালো দরদাম করেছিলেন।",
        },
        {
          en: "The two companies negotiated a new contract.",
          bn: "দুই কোম্পানি নতুন চুক্তি নিয়ে আলোচনা করে সমঝোতায় পৌঁছেছে।",
        },
      ],
      tip: {
        bn: "বাজারে দরদাম মানে 'bargain' বা 'negotiate the price'; চাকরির বেতন নিয়েও negotiate হয় — 'negotiate a higher salary'। কাঠামো: 'negotiate with someone about something'।",
        en: "In markets you 'bargain' or 'negotiate the price'; you can also 'negotiate a higher salary'. Pattern: 'negotiate with someone about something'.",
        hi: "बाज़ार में 'bargain' या 'negotiate the price' कहें; वेतन के लिए भी 'negotiate a higher salary'।",
      },
      synonyms: ["bargain", "haggle", "confer"],
      antonyms: ["impose", "dictate"],
    },
  },
  {
    id: "",
    word: "persevere",
    level: "advanced",
    category: "academic",
    data: {
      pronunciation: "পার্সিভিয়ার (পার-সি-ভিয়ার)",
      partOfSpeech: "verb",
      meaning: {
        bn: "হাল না ছেড়ে অবিরাম চেষ্টা চালিয়ে যাওয়া",
        en: "to keep trying despite difficulties",
        hi: "दृढ़ता से कोशिश जारी रखना",
      },
      englishMeaning: "to continue trying to do something even when it is difficult",
      examples: [
        {
          en: "Persevere with your practice and fluency will come.",
          bn: "চর্চা চালিয়ে যান — সাবলীলতা আপনা-আপনি চলে আসবে।",
        },
        {
          en: "Despite failing twice, she persevered with her research.",
          bn: "দুবার ব্যর্থ হওয়ার পরও সে গবেষণা চালিয়ে গেছে।",
        },
      ],
      tip: {
        bn: "উচ্চারণ 'per-suh-VEER' — শেষ অংশে জোর। 'persevere with something' জোড়ায় চলে: 'persevere with your studies'। পরীক্ষার আগে নিজেকে বলুন: 'I will persevere'।",
        en: "Pronounce it per-suh-VEER, stress at the end. It pairs with 'with': 'persevere with your studies'. Before exams, tell yourself: 'I will persevere'.",
        hi: "उच्चारण: per-suh-VEER। 'Persevere with your studies' जैसे वाक्य बनते हैं।",
      },
      synonyms: ["persist", "endure", "carry on"],
      antonyms: ["give up", "quit"],
    },
  },
  {
    id: "",
    word: "dilemma",
    level: "advanced",
    category: "general",
    data: {
      pronunciation: "ডিলেমা (ডাই-লেমা)",
      partOfSpeech: "noun",
      meaning: {
        bn: "দ্বিধা — দুটো কঠিন পথের মাঝে বাধ্য হয়ে পড়া",
        en: "a difficult choice between two options",
        hi: "दुविधा",
      },
      englishMeaning:
        "a situation where you must choose between two options, and both have problems",
      examples: [
        {
          en: "I faced a dilemma: accept the job offer or stay with my family.",
          bn: "দ্বিধায় পড়েছিলাম — চাকরির অফারটা নেব, নাকি পরিবারের কাছেই থাকব।",
        },
        {
          en: "The doctor's dilemma was whether to tell the patient the truth.",
          bn: "রোগীকে সত্যি বলা উচিত কি না — এই দ্বিধায় ছিলেন ডাক্তার।",
        },
      ],
      tip: {
        bn: "'face a dilemma' ও 'be in a dilemma' দুটোই ঠিক। 'dilemma' মানে দুটো কঠিন অপশনের মাঝে বাধ্য চয়েস — একাডেমিক রাইটিং আর IELTS-এ প্রায়ই আসে।",
        en: "Say 'face a dilemma' or 'be in a dilemma'. A dilemma is a forced choice between two difficult options — common in academic writing and IELTS.",
        hi: "'Face a dilemma' और 'be in a dilemma' दोनों सही हैं।",
      },
      synonyms: ["predicament", "quandary"],
      antonyms: [],
    },
  },
  {
    id: "",
    word: "deteriorate",
    level: "advanced",
    category: "daily",
    data: {
      pronunciation: "ডিটেরিয়ারেট",
      partOfSpeech: "verb",
      meaning: {
        bn: "অবনতি হওয়া — ধীরে ধীরে খারাপ দিকে যাওয়া",
        en: "to become worse over time",
        hi: "बिगड़ना; बदतर होना",
      },
      englishMeaning: "to become worse in quality, condition or health",
      examples: [
        {
          en: "His health deteriorated after the surgery.",
          bn: "অপারেশনের পর তার স্বাস্থ্যের অবনতি হয়েছিল।",
        },
        {
          en: "The road condition deteriorated during the monsoon.",
          bn: "বর্ষার সময় রাস্তার অবস্থার আরও অবনতি হয়েছিল।",
        },
      ],
      tip: {
        bn: "কথাবার্তায় সহজ বিকল্প 'get worse' — দুটোই ঠিক। ডাক্তারি নোট বা রিপোর্টে 'deteriorate' লেখা হয়: 'his condition deteriorated rapidly'।",
        en: "In speech, 'get worse' means the same and is easier; 'deteriorate' appears in reports and medical notes: 'his condition deteriorated rapidly'.",
        hi: "बोलचाल में 'get worse', लिखित रिपोर्ट में 'deteriorate'।",
      },
      synonyms: ["worsen", "decline", "degrade"],
      antonyms: ["improve", "recover"],
    },
  },
  {
    id: "",
    word: "meticulous",
    level: "advanced",
    category: "work",
    data: {
      pronunciation: "মেটিকুলাস (মে-টিকু-লাস)",
      partOfSpeech: "adjective",
      meaning: {
        bn: "খুঁটিনাটি ব্যাপারেও নিখুঁত; অত্যন্ত যত্নবান",
        en: "very careful about small details",
        hi: "अत्यंत सतर्क; बारीकियों पर ध्यान देने वाला",
      },
      englishMeaning: "paying great attention to every small detail",
      examples: [
        {
          en: "Her meticulous planning saved the project.",
          bn: "তার নিখুঁত পরিকল্পনাই প্রজেক্টটা বাঁচিয়েছিল।",
        },
        {
          en: "He keeps meticulous records of every expense.",
          bn: "প্রতিটা খরচের হিসাব সে নিখুঁতভাবে রাখে।",
        },
      ],
      tip: {
        bn: "সিভি বা ইন্টারভিউয়ে 'meticulous attention to detail' অত্যন্ত প্রশংসিত গুণ — অ্যাকাউন্টিং, ডিজাইন, প্রোগ্রামিংয়ের মতো কাজে এই শব্দটা ব্যবহার করুন।",
        en: "On a CV or in interviews, 'meticulous attention to detail' is a highly praised quality — perfect for accounting, design or programming.",
        hi: "CV या इंटरव्यू में 'meticulous attention to detail' बहुत प्रभावी है।",
      },
      synonyms: ["thorough", "painstaking", "precise"],
      antonyms: ["careless", "sloppy"],
    },
  },
  {
    id: "",
    word: "versatile",
    level: "advanced",
    category: "general",
    data: {
      pronunciation: "ভার্সাটাইল",
      partOfSpeech: "adjective",
      meaning: {
        bn: "বহুমুখী প্রতিভাসম্পন্ন; নানা কাজে পারদর্শী",
        en: "able to do many different things well",
        hi: "बहुमुखी; हर काम में सक्षम",
      },
      englishMeaning: "able to do many different things, or usable for many purposes",
      examples: [
        {
          en: "She is a versatile player — strong at both batting and bowling.",
          bn: "সে বহুমুখী প্রতিভার অধিকারী খেলোয়াড় — ব্যাটিং আর বোলিং দুটোতেই পারদর্শী।",
        },
        {
          en: "Eggs are versatile — you can cook them in so many ways.",
          bn: "ডিম বহুমুখী খাবার — অনেক রকমে রান্না করা যায়।",
        },
      ],
      tip: {
        bn: "মানুষ ও জিনিস দুটোর জন্যই versatile — 'a versatile actor', 'a versatile tool'। সিভিতে 'I'm a versatile developer' বললে বোঝায় নানা ধরনের কাজেই আপনি দক্ষ।",
        en: "'Versatile' fits both people and things: 'a versatile actor', 'a versatile tool'. On a CV, 'I'm a versatile developer' means you handle many kinds of work.",
        hi: "'Versatile' लोगों और चीज़ों दोनों के लिए चलता है।",
      },
      synonyms: ["adaptable", "all-round", "flexible"],
      antonyms: ["inflexible", "limited"],
    },
  },
];
