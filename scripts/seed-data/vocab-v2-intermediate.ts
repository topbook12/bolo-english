// ─── Learning-path vocab seeds: INTERMEDIATE (48 new entries, units 1–5) ───
// Part of Task 9 (library enrichment). Existing intermediate words live in
// vocab-data.ts and are re-mapped to units by the seeder — do NOT include them.
import type {
  LibraryVocabData,
  LibraryLevel,
} from "../../src/lib/library-types";

export interface SeedVocabV2Entry {
  word: string;
  level: LibraryLevel;
  category: string;
  unit: number; // learning-path unit 1-5
  data: LibraryVocabData;
}

export const SEED_VOCAB_V2_INTERMEDIATE: SeedVocabV2Entry[] = [
  /* ───── UNIT 1 · general · Talking & opinions (10) ───── */

  {
    word: "explain",
    level: "intermediate",
    category: "general",
    unit: 1,
    data: {
      pronunciation: "ইক্সপ্লেইন",
      partOfSpeech: "verb",
      meaning: {
        bn: "ব্যাখ্যা করা — কোনো কিছু সহজ করে বুঝিয়ে বলা",
        en: "to make something clear or easy to understand by giving details",
        hi: "समझाना — किसी बात को आसान भाषा में स्पष्ट करके बताना",
      },
      englishMeaning: "to make something clear or easy to understand by giving details",
      examples: [
        {
          en: "Can you explain how this app works?",
          bn: "তুমি কি বুঝিয়ে বলতে পারবে এই অ্যাপটা কীভাবে কাজ করে?",
        },
        {
          en: "The teacher explained the lesson again slowly.",
          bn: "শিক্ষক পড়াটা আবার ধীরে ধীরে ব্যাখ্যা করলেন।",
        },
      ],
      tip: {
        bn: "কিছু বোঝাতে না পারলে শুরু করুন 'Let me explain' দিয়ে — মানে আমি বুঝিয়ে বলছি। আবার না বুঝলে ভদ্রভাবে জিজ্ঞেস করুন 'Could you explain that again?' — ক্লাসে, অফিসে, সব জায়গায় চলে।",
        en: "Start with 'Let me explain' when you make something clear. If you missed it, politely ask 'Could you explain that again?'",
        hi: "कुछ समझाते समय 'Let me explain' से शुरू करें। न समझ आए तो पूछें 'Could you explain that again?'",
      },
      synonyms: ["clarify", "describe", "spell out"],
      antonyms: ["confuse", "obscure"],
    },
  },
  {
    word: "describe",
    level: "intermediate",
    category: "general",
    unit: 1,
    data: {
      pronunciation: "ডিসক্রাইব",
      partOfSpeech: "verb",
      meaning: {
        bn: "বর্ণনা করা — কেমন দেখতে বা কেমন হয়, সেটা মুখে ফুটিয়ে বলা",
        en: "to say what something or someone is like",
        hi: "वर्णन करना — बताना कि कोई चीज़ या व्यक्ति कैसा/कैसी है",
      },
      englishMeaning: "to say what something or someone is like, using words",
      examples: [
        {
          en: "Describe your best friend in three words.",
          bn: "তিনটা শব্দে তোমার প্রিয় বন্ধুকে বর্ণনা করো।",
        },
        {
          en: "She described the thief to the police.",
          bn: "সে পুলিশকে চোরটার বর্ণনা দিল।",
        },
      ],
      tip: {
        bn: "কাউকে চেনাতে বা কোনো ছবির কথা বলতে 'describe' হাতিয়ার। ইন্টারভিউতে আসা কমন প্রশ্ন: 'How would you describe yourself?' — এর জবাব আগে থেকে বানিয়ে রাখা ভালো।",
        en: "'Describe' is your tool for introducing people and picture talk. A common interview question is 'How would you describe yourself?' — prepare your answer.",
        hi: "लोगों का परिचय और तस्वीर बताने के लिए 'describe'। इंटरव्यू में पूछा जाता है 'How would you describe yourself?'",
      },
      synonyms: ["portray", "depict", "explain"],
      antonyms: ["misrepresent", "confuse"],
    },
  },
  {
    word: "discuss",
    level: "intermediate",
    category: "general",
    unit: 1,
    data: {
      pronunciation: "ডিসকাস",
      partOfSpeech: "verb",
      meaning: {
        bn: "আলোচনা করা — কোনো বিষয় নিয়ে একসাথে কথা বলা",
        en: "to talk about something with other people, sharing ideas",
        hi: "चर्चा करना — दूसरों के साथ मिलकर किसी विषय पर बात करना",
      },
      englishMeaning: "to talk about something with other people and share ideas",
      examples: [
        {
          en: "We need to discuss the new project plan.",
          bn: "নতুন প্রজেক্টের প্ল্যান নিয়ে আমাদের আলোচনা করা দরকার।",
        },
        {
          en: "The manager discussed my salary with me.",
          bn: "ম্যানেজার আমার বেতন নিয়ে আমার সাথে আলোচনা করেছিলেন।",
        },
      ],
      tip: {
        bn: "মনে রাখার সবচেয়ে জরুরি নিয়ম: 'discuss' এর পরে 'about' বসে না। 'Discuss about it' ভুল — বলুন 'discuss it' অথবা 'talk about it'। এই ভুলটা ইংরেজি শেখা প্রায় সবাই করে।",
        en: "Golden rule: 'discuss' never takes 'about'. Say 'discuss it' or 'talk about it' — never 'discuss about it'.",
        hi: "सुनहरा नियम: 'discuss' के बाद 'about' नहीं आता — 'discuss it' या 'talk about it' कहें।",
      },
      synonyms: ["talk over", "debate", "talk about"],
      antonyms: ["ignore", "avoid"],
    },
  },
  {
    word: "agree",
    level: "intermediate",
    category: "general",
    unit: 1,
    data: {
      pronunciation: "আগ্রি",
      partOfSpeech: "verb",
      meaning: {
        bn: "একমত হওয়া — কারো কথায় রাজি থাকা",
        en: "to have the same opinion as someone else",
        hi: "सहमत होना — किसी की बात मान लेना",
      },
      englishMeaning: "to have the same opinion as someone else",
      examples: [
        {
          en: "I agree with you completely.",
          bn: "আমি তোমার সাথে পুরোপুরি একমত।",
        },
        {
          en: "They agreed to meet on Friday.",
          bn: "তারা শুক্রবারে দেখা করতে রাজি হয়েছে।",
        },
      ],
      tip: {
        bn: "'I am agree' বলা ভুল — agree একটা verb, তাই পুরো বাক্য 'I agree'। জোর দিতে 'I totally agree' বা 'I couldn't agree more'। কারো সাথে সম্মত হলে 'agree with' + মানুষ, 'agree to' + প্রস্তাব।",
        en: "'I am agree' is wrong — agree is a verb, so the sentence is just 'I agree'. For emphasis: 'I totally agree'. Agree WITH a person, agree TO a plan.",
        hi: "'I am agree' ग़लत — agree verb है, वाक्य है 'I agree'। व्यक्ति से agree WITH, योजना से agree TO।",
      },
      synonyms: ["concur", "accept", "go along with"],
      antonyms: ["disagree", "differ"],
    },
  },
  {
    word: "disagree",
    level: "intermediate",
    category: "general",
    unit: 1,
    data: {
      pronunciation: "ডিসআগ্রি",
      partOfSpeech: "verb",
      meaning: {
        bn: "দ্বিমত হওয়া — কারো কথায় একমত না হওয়া",
        en: "to have a different opinion from someone",
        hi: "असहमत होना — किसी की बात से अलग राय रखना",
      },
      englishMeaning: "to have a different opinion from someone else",
      examples: [
        {
          en: "I respect your view, but I disagree.",
          bn: "আমি তোমার মতকে সম্মান করি, কিন্তু আমি একমত না।",
        },
        {
          en: "They often disagree about small things.",
          bn: "ছোট ছোট বিষয় নিয়ে তাদের প্রায়ই মতপার্থক্য হয়।",
        },
      ],
      tip: {
        bn: "ভদ্রভাবে দ্বিমত জানাতে: 'I'm not sure I agree', 'I see it a bit differently' বা 'I don't quite agree'। সরাসরি 'You are wrong' বললে আলাপ তর্কে ফেরে — স্পিকিং পরীক্ষায় এটা বিশেষভাবে এড়ানো ভালো।",
        en: "Disagree politely: 'I'm not sure I agree', 'I see it a bit differently', 'I don't quite agree'. Saying 'you are wrong' turns talk into an argument.",
        hi: "शिष्ट असहमति: 'I'm not sure I agree', 'I see it a bit differently'। 'You are wrong' कहने से बहस हो सकती है।",
      },
      synonyms: ["differ", "object", "clash"],
      antonyms: ["agree", "concur"],
    },
  },
  {
    word: "mention",
    level: "intermediate",
    category: "general",
    unit: 1,
    data: {
      pronunciation: "মেনশন",
      partOfSpeech: "verb",
      meaning: {
        bn: "উল্লেখ করা — কথায় বা লেখায় সংক্ষেপে তুলে ধরা",
        en: "to talk about something briefly, without many details",
        hi: "उल्लेख करना — संक्षेप में किसी बात का ज़िक्र करना",
      },
      englishMeaning: "to say or write something briefly",
      examples: [
        {
          en: "She didn't mention the price.",
          bn: "সে দামের কথা উল্লেখই করেনি।",
        },
        {
          en: "As I mentioned earlier, the meeting is at 10.",
          bn: "আগেই উল্লেখ করেছি, মিটিংটা ১০টায়।",
        },
      ],
      tip: {
        bn: "'Thank you' বললে উত্তরে 'Don't mention it' শুনতে পারেন — মানে এ কী সব বলা, কথাই নেই। আর আগের কথা টানতে 'As I mentioned earlier, ...' — ইমেইলে খুব চলে।",
        en: "'Don't mention it' is a friendly answer to 'thank you' (= it was nothing). To pull back an earlier point: 'As I mentioned earlier, ...' — very useful in emails.",
        hi: "'Thank you' के जवाब में 'Don't mention it' (= कोई बात नहीं)। ईमेल में 'As I mentioned earlier, ...' बहुत आम है।",
      },
      synonyms: ["bring up", "refer to", "state"],
      antonyms: ["omit", "ignore"],
    },
  },
  {
    word: "complain",
    level: "intermediate",
    category: "general",
    unit: 1,
    data: {
      pronunciation: "কমপ্লেইন",
      partOfSpeech: "verb",
      meaning: {
        bn: "অভিযোগ করা — খারাপ কিছু নিয়ে অসন্তোষ প্রকাশ করা",
        en: "to say that you are not happy about something",
        hi: "शिकायत करना — बुरी चीज़ के बारे में असंतोष ज़ाहिर करना",
      },
      englishMeaning: "to say that you are annoyed or unhappy about something",
      examples: [
        {
          en: "The customer complained about the late delivery.",
          bn: "কাস্টমার দেরিতে ডেলিভারি হওয়ার জন্য অভিযোগ করেছে।",
        },
        {
          en: "Stop complaining and do something.",
          bn: "অভিযোগ করা বন্ধ করো, কিছু একটা করো।",
        },
      ],
      tip: {
        bn: "দোকানে, হোটেলে বা অফিসে অভিযোগের ভদ্র শুরু: 'I'd like to complain about...'। আর মনে রাখো — উল্টো শব্দ 'compliment' মানে প্রশংসা করা; 'complaint' (noun) মানে অভিযোগটাই।",
        en: "Polite opener in shops, hotels, offices: 'I'd like to complain about...'. Remember: the opposite 'compliment' means to praise; the noun 'complaint' is the complaint itself.",
        hi: "दुकान/होटल में शिकायत की शुरुआत: 'I'd like to complain about...'। इसका विलोम 'compliment' = प्रशंसा।",
      },
      synonyms: ["grumble", "protest", "object"],
      antonyms: ["praise", "compliment"],
    },
  },
  {
    word: "apologize",
    level: "intermediate",
    category: "general",
    unit: 1,
    data: {
      pronunciation: "অ্যাপোলোজাইজ",
      partOfSpeech: "verb",
      meaning: {
        bn: "ক্ষমা চাওয়া — ভুল বা সমস্যার জন্য দুঃখপ্রকাশ করা",
        en: "to say sorry for something you did wrong",
        hi: "माफ़ी माँगना — ग़लती के लिए क्षमा माँगना",
      },
      englishMeaning: "to say sorry for doing something wrong",
      examples: [
        {
          en: "He apologized for being late.",
          bn: "দেরি করে ফেলার জন্য সে ক্ষমা চেয়েছে।",
        },
        {
          en: "I want to apologize for my mistake.",
          bn: "আমার ভুলের জন্য আমি ক্ষমা চাইতে চাই।",
        },
      ],
      tip: {
        bn: "প্যাটার্নটা ধরে রাখো: apologize TO someone FOR something — 'I apologized to him for the delay'। দৈনন্দিন কথায় 'I'm sorry' যথেষ্ট; ইমেইল, চিঠি বা সরকারিভাবে 'I apologize' জমে।",
        en: "Keep the pattern: apologize TO someone FOR something. In daily talk 'I'm sorry' is enough; 'I apologize' suits emails and formal writing.",
        hi: "पैटर्न याद रखें: apologize TO someone FOR something। रोज़ की बात में 'I'm sorry' काफ़ी है।",
      },
      synonyms: ["say sorry", "make amends"],
      antonyms: ["defend", "justify"],
    },
  },
  {
    word: "promise",
    level: "intermediate",
    category: "general",
    unit: 1,
    data: {
      pronunciation: "প্রমিস",
      partOfSpeech: "verb & noun",
      meaning: {
        bn: "প্রতিশ্রুতি দেওয়া — নিশ্চয়তা দেওয়া যে কিছু অবশ্যই করবে",
        en: "to tell someone you will definitely do something",
        hi: "वादा करना — यह भरोसा देना कि वह काम ज़रूर करोगे",
      },
      englishMeaning: "to tell someone that you will certainly do something",
      examples: [
        {
          en: "I promise I will call you tonight.",
          bn: "আজ রাতে তোমাকে ফোন করব বলে প্রতিশ্রুতি দিচ্ছি।",
        },
        {
          en: "She promised to help me with the project.",
          bn: "সে প্রজেক্টে আমাকে সাহায্য করার কথা দিয়েছে।",
        },
      ],
      tip: {
        bn: "দুটো কলোকেশন জীবনসাথী: 'keep a promise' = দেওয়া কথা রাখা, 'break a promise' = কথা ভাঙা। আর 'A promise is a promise' মানে দেওয়া কথা রাখতেই হবে — কোনো অজুহাত চলবে না।",
        en: "Two lifelong collocations: 'keep a promise' (do it) and 'break a promise' (fail to). 'A promise is a promise' means no excuses.",
        hi: "'Keep a promise' = वादा निभाना, 'break a promise' = तोड़ना। 'A promise is a promise' = बात निभानी ही पड़ेगी।",
      },
      synonyms: ["pledge", "give your word", "swear"],
      antonyms: ["refuse", "break your word"],
    },
  },
  {
    word: "advise",
    level: "intermediate",
    category: "general",
    unit: 1,
    data: {
      pronunciation: "অ্যাডভাইজ",
      partOfSpeech: "verb",
      meaning: {
        bn: "পরামর্শ দেওয়া — কাউকে জানিয়ে দেওয়া কী করা ভালো হবে",
        en: "to tell someone what you think they should do",
        hi: "सलाह देना — बताना कि क्या करना बेहतर होगा",
      },
      englishMeaning: "to give someone advice about what to do",
      examples: [
        {
          en: "The doctor advised him to rest.",
          bn: "ডাক্তার তাকে বিশ্রাম নেওয়ার পরামর্শ দিয়েছেন।",
        },
        {
          en: "I advise you to check the contract carefully.",
          bn: "আমি বলছি চুক্তিটা ভালো করে দেখে নাও।",
        },
      ],
      tip: {
        bn: "advise (verb, /z/) আর advice (noun, /s/) — বানান প্রায় এক, উচ্চারণ আলাদা। 'The doctor advised rest' (ক্রিয়া) বনাম 'The doctor's advice was to rest' (বিশেষ্য)। এই জোড়া ইংরেজি পরীক্ষার প্রিয়।",
        en: "Advise is the verb (/z/), advice the noun (/s/) — nearly the same spelling, different sound. 'The doctor advised rest' vs 'The doctor's advice'. Exams love this pair.",
        hi: "Advise verb (/z/), advice noun (/s/) — हिज्जे मिलते-जुलते, उच्चारण अलग। यह जोड़ी परीक्षा में पसंदीदा है।",
      },
      synonyms: ["recommend", "counsel", "suggest"],
      antonyms: ["discourage", "dissuade"],
    },
  },

  /* ───── UNIT 2 · work · Work & money (9) ───── */

  {
    word: "salary",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "স্যালারি",
      partOfSpeech: "noun",
      meaning: {
        bn: "বেতন — চাকরির জন্য প্রতি মাসে পাওয়া নির্দিষ্ট টাকা",
        en: "money you receive regularly for your job, usually every month",
        hi: "वेतन — नौकरी के बदले हर महीने मिलने वाला तय पैसा",
      },
      englishMeaning: "fixed regular payment, usually monthly, that you get for a job",
      examples: [
        {
          en: "My salary is paid on the 5th of every month.",
          bn: "আমার বেতন প্রতি মাসের ৫ তারিখে দেওয়া হয়।",
        },
        {
          en: "The job pays a good salary.",
          bn: "চাকরিটায় ভালো বেতন দেওয়া হয়।",
        },
      ],
      tip: {
        bn: "salary = মাসিক নির্দিষ্ট বেতন; ঘণ্টাভিত্তিক মজুরিকে বলে wage। ইন্টারভিউয়ে বেতন জানার ভদ্র উপায়: 'Could you tell me about the salary range?' — প্রথম কথাতেই টাকার কথা না তুলে এভাবে জিজ্ঞেস করা ভালো।",
        en: "A salary is fixed monthly pay; hourly pay is a wage. In an interview ask politely: 'Could you tell me about the salary range?'",
        hi: "Salary = मासिक वेतन; प्रति-घंटा = wage। इंटरव्यू में पूछें: 'Could you tell me about the salary range?'",
      },
      synonyms: ["pay", "wage", "earnings"],
      antonyms: ["debt"],
    },
  },
  {
    word: "hire",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "হায়ার",
      partOfSpeech: "verb",
      meaning: {
        bn: "নিয়োগ দেওয়া — কাজের জন্য কাউকে নিয়ে নেওয়া; কিছু ভাড়া নেওয়াকেও hire বলে",
        en: "to give someone a job; also to pay to use something for a short time",
        hi: "नियुक्त करना — किसी को काम पर रखना; किराए पर लेना भी",
      },
      englishMeaning: "to give someone a job, or to pay to use something for a short time",
      examples: [
        {
          en: "The company hired five new engineers.",
          bn: "কোম্পানিটা পাঁচজন নতুন ইঞ্জিনিয়ার নিয়োগ দিয়েছে।",
        },
        {
          en: "We hired a car for the weekend.",
          bn: "উইকেন্ডের জন্য আমরা একটা গাড়ি ভাড়া নিয়েছিলাম।",
        },
      ],
      tip: {
        bn: "টিভি শোতে বস যখন বলে 'You're hired!' মানে চাকরিটা তোমার। উল্টোটা 'You're fired'। আরেকটা মজার তথ্য: ব্রিটিশরা বলে 'hire a car', আমেরিকানরা বলে 'rent a car' — দুটোই ঠিক।",
        en: "When a TV-show boss says 'You're hired!', the job is yours; the opposite is 'You're fired'. Fun fact: the British 'hire a car' = the American 'rent a car'.",
        hi: "'You're hired!' = काम आपका; विपरीत 'You're fired'। British 'hire a car' = American 'rent a car'।",
      },
      synonyms: ["employ", "recruit", "take on"],
      antonyms: ["fire", "dismiss"],
    },
  },
  {
    word: "resign",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "রিজাইন",
      partOfSpeech: "verb",
      meaning: {
        bn: "চাকরি ছাড়া — নিজে থেকে পদ ছেড়ে দেওয়া",
        en: "to officially leave your job by choice",
        hi: "इस्तीफ़ा देना — ख़ुद नौकरी छोड़ देना",
      },
      englishMeaning: "to officially leave your job by choice",
      examples: [
        {
          en: "He resigned to start his own business.",
          bn: "নিজের ব্যবসা শুরু করার জন্য সে চাকরি ছেড়ে দিয়েছে।",
        },
        {
          en: "She resigned from her post last month.",
          bn: "গত মাসে তিনি পদত্যাগ করেছেন।",
        },
      ],
      tip: {
        bn: "'resign from' + পদ: 'He resigned from his post'। মনে গেঁথে নাও — resign মানে নিজে থেকে ছাড়া, fired মানে বস ছাড়িয়ে দেওয়া। ছাড়ার চিঠির নাম resignation letter, ইন্টারভিউতে 'Why did you resign?' আসতে পারে।",
        en: "'Resign from' + your position. Burn it in: resign = you choose to leave; fired = the boss ends it. The letter is a resignation letter; interviews may ask 'Why did you resign?'",
        hi: "'Resign from' + पद। Resign = ख़ुद छोड़ना; fired = निकाल देना। इस्तीफ़े की चिट्ठी = resignation letter।",
      },
      synonyms: ["quit", "step down", "leave your job"],
      antonyms: ["join", "get hired"],
    },
  },
  {
    word: "apply",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "অ্যাপ্লাই",
      partOfSpeech: "verb",
      meaning: {
        bn: "আবেদন করা — চাকরি বা ভর্তির জন্য আনুষ্ঠানিক দরখাস্ত করা",
        en: "to make a formal request for a job, place, or permission",
        hi: "आवेदन करना — नौकरी या प्रवेश के लिए औपचारिक अर्ज़ी देना",
      },
      englishMeaning: "to make a formal request for a job, a place, or permission",
      examples: [
        {
          en: "I applied for three jobs this week.",
          bn: "এই সপ্তাহে আমি তিনটা চাকরিতে আবেদন করেছি।",
        },
        {
          en: "More than a hundred students applied.",
          bn: "শতাধিক শিক্ষার্থী আবেদন করেছে।",
        },
      ],
      tip: {
        bn: "দুই প্যাটার্ন গুলিয়ো না: 'apply for' a job/scholarship/visa, কিন্তু 'apply to' a company/university/embassy। আবেদনের জায়গাটা application, ভর্তি হলে তুমি applicant।",
        en: "Two patterns: apply FOR a job/scholarship/visa, apply TO a company/university/embassy. The form you send is an application; you are the applicant.",
        hi: "दो पैटर्न: apply FOR a job/visa, apply TO a company/university। भेजा फ़ॉर्म = application; आवेदक = applicant।",
      },
      synonyms: ["put in for", "send an application"],
      antonyms: ["withdraw", "quit"],
    },
  },
  {
    word: "skill",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "স্কিল",
      partOfSpeech: "noun",
      meaning: {
        bn: "দক্ষতা — কোনো কাজ ভালোভাবে করতে পারার গুণ, অভ্যাসে আসে",
        en: "the ability to do something well, learned by practice",
        hi: "कौशल — कोई काम अच्छी तरह करने की योग्यता",
      },
      englishMeaning: "an ability to do something well, usually learned by practice",
      examples: [
        {
          en: "Communication is an important job skill.",
          bn: "যোগাযোগের দক্ষতা চাকরির জন্য গুরুত্বপূর্ণ একটা স্কিল।",
        },
        {
          en: "She is learning new digital skills.",
          bn: "সে নতুন নতুন ডিজিটাল দক্ষতা শিখছে।",
        },
      ],
      tip: {
        bn: "স্কিল দুই ভাগে ভাগ হয়: hard skill (কোডিং, রান্না, এক্সেল) আর soft skill (কথা বলা, দলবদ্ধ কাজ, সময় ব্যবস্থাপনা)। ইন্টারভিউতে জবাব তৈরি রাখো: 'My strongest skill is...' আর 'I'm learning to improve my skills'।",
        en: "Skills split into hard skills (coding, Excel) and soft skills (speaking, teamwork, time management). Prepare 'My strongest skill is...' for interviews.",
        hi: "Hard skill (कोडिंग, Excel) और soft skill (बातचीत, टीमवर्क)। इंटरव्यू के लिए 'My strongest skill is...' तैयार रखें।",
      },
      synonyms: ["ability", "talent", "expertise"],
      antonyms: ["inability", "weakness"],
    },
  },
  {
    word: "experience",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "এক্সপেরিয়েন্স",
      partOfSpeech: "noun",
      meaning: {
        bn: "অভিজ্ঞতা — কাজ বা জীবন থেকে যা শিখেছ; কোনো ঘটনাকেও বলে",
        en: "knowledge or skill gained from doing a job or living through events",
        hi: "अनुभव — काम या ज़िंदगी से मिली सीख; कोई घटना भी",
      },
      englishMeaning: "knowledge or skill gained from doing something over time",
      examples: [
        {
          en: "She has five years of teaching experience.",
          bn: "তার পাঁচ বছরের শিক্ষকতার অভিজ্ঞতা আছে।",
        },
        {
          en: "It was a wonderful experience.",
          bn: "সেটা একটা দারুণ অভিজ্ঞতা ছিল।",
        },
      ],
      tip: {
        bn: "সাধারণ অভিজ্ঞতা অগণনীয়: 'I have experience in sales' — কিন্তু একটা নির্দিষ্ট ঘটনা হলে 'a strange experience'। ইন্টারভিউয়ের প্রথম প্রশ্নই প্রায়ই 'Tell me about your experience' — এই বাক্যটা আগেই ভাবে রাখো।",
        en: "General experience is uncountable: 'I have experience in sales'; one specific event is 'a strange experience'. Interviews often open with 'Tell me about your experience'.",
        hi: "सामान्य अनुभव uncountable: 'I have experience in sales'; एक घटना के लिए 'a strange experience'। इंटरव्यू का पहला सवाल अक्सर 'Tell me about your experience'।",
      },
      synonyms: ["background", "know-how", "practice"],
      antonyms: ["inexperience"],
    },
  },
  {
    word: "income",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "ইনকাম",
      partOfSpeech: "noun",
      meaning: {
        bn: "আয় — একটা সময়ে মোট যত টাকা ঢোকে",
        en: "all the money you receive in a period of time",
        hi: "आय — किसी समय में आने वाला कुल पैसा",
      },
      englishMeaning: "the total money you receive in a period of time",
      examples: [
        {
          en: "His monthly income comes from two jobs.",
          bn: "তার মাসিক আয় দুটো কাজ থেকে আসে।",
        },
        {
          en: "They need a second source of income.",
          bn: "তাদের আয়ের আরেকটা উৎস দরকার।",
        },
      ],
      tip: {
        bn: "income = সব আয় মিলিয়ে — বেতন, ব্যবসা, ভাড়া। মোট আয় gross income, খরচ বাদ দিলে net income। বাজেট নিয়ে কথা বলার প্রথম বাক্য: 'My income is lower than my expenses' — সমস্যা বুঝিয়ে দেয়।",
        en: "Income is all money coming in — salary, business, rent. The total is gross income; after expenses, net income. 'My income is lower than my expenses' explains the problem in one line.",
        hi: "Income = कुल आय — वेतन, व्यापार, किराया। कुल = gross income; खर्च के बाद = net income।",
      },
      synonyms: ["earnings", "revenue", "pay"],
      antonyms: ["expense", "loss"],
    },
  },
  {
    word: "expense",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "এক্সপেন্স",
      partOfSpeech: "noun",
      meaning: {
        bn: "খরচ — কোনো কিছুর জন্য যে টাকা বেরোয়",
        en: "money that you spend on something",
        hi: "खर्च — किसी चीज़ पर जाने वाला पैसा",
      },
      englishMeaning: "money that you spend on something",
      examples: [
        {
          en: "Rent is our biggest monthly expense.",
          bn: "ভাড়াই আমাদের সবচেয়ে বড় মাসিক খরচ।",
        },
        {
          en: "The company paid my travel expenses.",
          bn: "কোম্পানি আমার ভ্রমণের খরচ দিয়েছে।",
        },
      ],
      tip: {
        bn: "খরচ কমাতে 'cut down on expenses'। অফিসের কাজে নিজের পকেট থেকে খরচ করলে ফেরত চাইতে বলো 'Can I claim my expenses?' — টাকা ফেরতকে বলে reimbursement।",
        en: "To spend less: 'cut down on expenses'. If you pay from your own pocket for work, ask 'Can I claim my expenses?' — the payback is a reimbursement.",
        hi: "खर्च घटाने के लिए 'cut down on expenses'। काम के पैसे वापस पाने के लिए 'Can I claim my expenses?'",
      },
      synonyms: ["cost", "spending", "outlay"],
      antonyms: ["income", "savings"],
    },
  },
  {
    word: "invest",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "ইনভেস্ট",
      partOfSpeech: "verb",
      meaning: {
        bn: "বিনিয়োগ করা — ভবিষ্যতে লাভের আশায় টাকা বা সময় লাগানো",
        en: "to put money or effort into something to get more back later",
        hi: "निवेश करना — भविष्य के फ़ायदे की उम्मीद में पैसा या समय लगाना",
      },
      englishMeaning: "to put money or effort into something to get more back later",
      examples: [
        {
          en: "He invested his savings in a small shop.",
          bn: "সে নিজের জমানো টাকা একটা ছোট দোকানে বিনিয়োগ করেছে।",
        },
        {
          en: "Invest some time in learning English.",
          bn: "ইংরেজি শেখায় কিছুটা সময় বিনিয়োগ করো।",
        },
      ],
      tip: {
        bn: "'invest in' + জিনিস: 'invest in shares', 'invest in yourself'। টাকা ছাড়াও সময় বিনিয়োগ হয় — 'Invest time in practice'। লাগানো টাকার নাম investment, যে বিনিয়োগ করে সে investor।",
        en: "Use 'invest in' + thing: 'invest in shares', 'invest in yourself'. Time counts too — 'invest time in practice'. The money is an investment; the person is an investor.",
        hi: "'Invest in' + चीज़: 'invest in shares', 'invest in yourself'। समय भी निवेश है — 'invest time in practice'।",
      },
      synonyms: ["fund", "put money into", "back"],
      antonyms: ["withdraw", "divest"],
    },
  },

  /* ───── UNIT 3 · travel · Travel & moving around (9) ───── */

  {
    word: "depart",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "ডিপার্ট",
      partOfSpeech: "verb",
      meaning: {
        bn: "রওনা দেওয়া — এক জায়গা ছেড়ে যাত্রা শুরু করা",
        en: "to leave a place and start a journey",
        hi: "रवाना होना — एक जगह छोड़कर यात्रा शुरू करना",
      },
      englishMeaning: "to leave a place and begin a journey",
      examples: [
        {
          en: "The train departs at 7:30 in the morning.",
          bn: "ট্রেনটা সকাল ৭:৩০-এ ছেড়ে যায়।",
        },
        {
          en: "Our flight departs from gate 12.",
          bn: "আমাদের ফ্লাইট গেট ১২ থেকে রওনা হবে।",
        },
      ],
      tip: {
        bn: "এয়ারপোর্টে দুই বোর্ড: departure board (ছাড়া ফ্লাইট) আর arrival board (আসা ফ্লাইট)। ঘোষণায় শোনা যায় 'Flight 301 is now departing' — depart শব্দটা মূলত ট্রেন-প্লেনের সময়সূচিতে চলে।",
        en: "Two boards at the airport: departure board (leaving) and arrival board (incoming). Announcements say 'Flight 301 is now departing' — depart lives in train/plane schedules.",
        hi: "एयरपोर्ट के दो बोर्ड: departure (जाना) और arrival (आना)। घोषणा में 'Flight 301 is now departing' सुनाई देता है।",
      },
      synonyms: ["leave", "take off", "set off"],
      antonyms: ["arrive", "return"],
    },
  },
  {
    word: "arrive",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "অ্যারাইভ",
      partOfSpeech: "verb",
      meaning: {
        bn: "পৌঁছানো — যাত্রা শেষ করে গন্তব্যে পৌঁছে যাওয়া",
        en: "to reach a place after a journey",
        hi: "पहुँचना — यात्रा पूरी करके मंज़िल तक जा पहुँचना",
      },
      englishMeaning: "to reach a place after a journey",
      examples: [
        {
          en: "We arrived in Dhaka at midnight.",
          bn: "আমরা মধ্যরাতে ঢাকায় পৌঁছেছি।",
        },
        {
          en: "What time does the bus arrive?",
          bn: "বাসটা কটায় পৌঁছাবে?",
        },
      ],
      tip: {
        bn: "প্যাটার্ন মুখস্থ করো: arrive IN Dhaka/India (বড় জায়গা), arrive AT the station/airport (নির্দিষ্ট স্থাপনা), কিন্তু 'arrive home' — মাঝে কিছুই না। 'Arrive to' বললে ভুল ধরা হবে।",
        en: "Memorize the pattern: arrive IN a city, arrive AT a station, but 'arrive home' with nothing in between. 'Arrive to' is counted as a mistake.",
        hi: "पैटर्न याद करें: arrive IN a city, arrive AT a station, लेकिन 'arrive home' (बीच में कुछ नहीं)। 'Arrive to' ग़लत माना जाता है।",
      },
      synonyms: ["reach", "get in", "show up"],
      antonyms: ["depart", "leave"],
    },
  },
  {
    word: "journey",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "জার্নি",
      partOfSpeech: "noun",
      meaning: {
        bn: "যাত্রা — এক জায়গা থেকে আরেক জায়গায় যাওয়ার পুরো সফর",
        en: "the whole trip from one place to another",
        hi: "यात्रा — एक जगह से दूसरी जगह जाने का पूरा सफ़र",
      },
      englishMeaning: "an act of travelling from one place to another",
      examples: [
        {
          en: "The journey took six hours.",
          bn: "যাত্রাটায় ছয় ঘণ্টা লেগেছে।",
        },
        {
          en: "Have a safe journey!",
          bn: "তোমার যাত্রা নিরাপদ হোক!",
        },
      ],
      tip: {
        bn: "বিদায়ের সবচেয়ে দরকারি বাক্য: 'Have a safe journey!' মোটামুটি ভাগ করা যায় — trip ছোট/কাছাকাছি সফর, journey দীর্ঘ পথ। 'A journey of a thousand miles begins with a single step' — প্রেরণার বিখ্যাত লাইন।",
        en: "The best traveller's goodbye: 'Have a safe journey!' Rough split: trip = short travel, journey = a long road. 'A journey of a thousand miles begins with a single step.'",
        hi: "विदाई का बेहतरीन वाक्य: 'Have a safe journey!' छोटी यात्रा = trip, लंबी = journey।",
      },
      synonyms: ["trip", "voyage", "travel"],
      antonyms: ["stay"],
    },
  },
  {
    word: "abroad",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "অ্যাব্রড",
      partOfSpeech: "adverb",
      meaning: {
        bn: "বিদেশে — নিজের দেশের বাইরে কোনো দেশে",
        en: "in or to a foreign country",
        hi: "विदेश में — अपने देश के बाहर",
      },
      englishMeaning: "in or to a foreign country",
      examples: [
        {
          en: "My sister studies abroad.",
          bn: "আমার বোন বিদেশে পড়ে।",
        },
        {
          en: "They went abroad for work last year.",
          bn: "গত বছর তারা কাজের জন্য বিদেশ গিয়েছিল।",
        },
      ],
      tip: {
        bn: "'to' ভুলে যাও: 'go abroad', 'study abroad', 'live abroad' — abroad এর আগে আর কিছু বসে না। 'I've never been abroad' = জীবনে প্রথম দেশের বাইরে যাওয়া হয়নি; ভিসা-পাসপোর্ট প্রসঙ্গে এই শব্দটাই চলে।",
        en: "Drop the 'to': 'go abroad', 'study abroad', 'live abroad' — nothing sits between them. 'I've never been abroad' = I have never left my country.",
        hi: "'To' हटाओ: 'go abroad', 'study abroad', 'live abroad' — बीच में कुछ नहीं। 'I've never been abroad' = देश छोड़ा नहीं।",
      },
      synonyms: ["overseas", "out of the country"],
      antonyms: ["home"],
    },
  },
  {
    word: "luggage",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "লাগেজ",
      partOfSpeech: "noun",
      meaning: {
        bn: "লাগেজ / মালপত্র — সফরের ব্যাগ-সুটকেসসহ যাবতীয় জিনিস",
        en: "the bags and cases you take when travelling",
        hi: "सामान — सफ़र का बैग-बक्सा सब",
      },
      englishMeaning: "the bags and suitcases you take when you travel",
      examples: [
        {
          en: "How much luggage can I take on the flight?",
          bn: "ফ্লাইটে আমি কতটুকু লাগেজ নিতে পারব?",
        },
        {
          en: "Wait here, I'll collect the luggage.",
          bn: "এখানে অপেক্ষা করো, আমি লাগেজ নিয়ে আসছি।",
        },
      ],
      tip: {
        bn: "luggage গণনীয় নয় — 'two luggages' ভুল; বলুন 'two bags' বা 'two pieces of luggage'। ফ্লাইটে সাথে নেওয়া ব্যাগ hand luggage/carry-on, গুদামে যাওয়া ব্যাগ checked luggage।",
        en: "'Luggage' is uncountable — never 'two luggages'; say 'two bags' or 'two pieces of luggage'. The cabin bag is hand luggage/carry-on; the stored one is checked luggage.",
        hi: "Luggage uncountable — 'two luggages' ग़लत; 'two bags' कहें। केबिन बैग = hand luggage; नीचे जाने वाला = checked luggage।",
      },
      synonyms: ["baggage", "bags", "suitcases"],
      antonyms: ["carry-on", "hand luggage"],
    },
  },
  {
    word: "passenger",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "প্যাসেঞ্জার",
      partOfSpeech: "noun",
      meaning: {
        bn: "যাত্রী — গাড়ি, বাস, ট্রেন বা প্লেনে চড়ে ভ্রমণকারী মানুষ",
        en: "a person travelling in a vehicle, not the driver",
        hi: "यात्री — गाड़ी, बस, ट्रेन या विमान में सफ़र करने वाला",
      },
      englishMeaning: "a person travelling in a vehicle, not the driver",
      examples: [
        {
          en: "The bus was full of passengers.",
          bn: "বাসটা যাত্রীদের ভরা ছিল।",
        },
        {
          en: "Passengers must wear seat belts.",
          bn: "যাত্রীদের সিটবেল্ট বাঁধতে হবে।",
        },
      ],
      tip: {
        bn: "গাড়ি চালাচ্ছে না যে, সে-ই passenger — বাস, ট্রেন, প্লেনের যাত্রী সবাই। গাড়ির পাশের সিটকে বলে the passenger seat। বিমানবন্দরের ঘোষণায় শোনা যায় 'Passengers are requested to...'।",
        en: "Anyone travelling who isn't driving is a passenger. The front seat next to the driver is 'the passenger seat'. Airport announcements start 'Passengers are requested to...'",
        hi: "गाड़ी चलाने वाले के अलावा सब passenger। सामने की सीट = passenger seat। हवाई अड्डे की घोषणा: 'Passengers are requested to...'",
      },
      synonyms: ["traveller", "rider", "commuter"],
      antonyms: ["driver", "pilot"],
    },
  },
  {
    word: "destination",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "ডেস্টিনেশন",
      partOfSpeech: "noun",
      meaning: {
        bn: "গন্তব্য — যে জায়গায় পৌঁছাতে যাচ্ছ",
        en: "the place you are travelling to",
        hi: "गंतव्य — जिस जगह जाना है",
      },
      englishMeaning: "the place where you are going",
      examples: [
        {
          en: "Cox's Bazar is a popular holiday destination.",
          bn: "কক্সবাজার ছুটি কাটানোর জনপ্রিয় একটা জায়গা।",
        },
        {
          en: "Please enter your destination in the app.",
          bn: "অ্যাপে আপনার গন্তব্য লিখে দিন।",
        },
      ],
      tip: {
        bn: "রাইড বা ট্যাক্সিতে চালক জিজ্ঞেস করে 'What's your destination?' — এর সহজ জবাব: 'I'm going to...'। জনপ্রিয় ভ্রমণকেন্দ্রকে বলে tourist destination; অ্যাপে 'set destination' মানে গন্তব্য সেট করা।",
        en: "In a taxi or ride app the driver asks 'What's your destination?' — answer simply 'I'm going to...'. A popular spot is a tourist destination; apps say 'set destination'.",
        hi: "टैक्सी में ड्राइवर पूछता है 'What's your destination?' — जवाब: 'I'm going to...'। प्रसिद्ध जगह = tourist destination।",
      },
      synonyms: ["endpoint", "stop", "terminus"],
      antonyms: ["origin", "starting point"],
    },
  },
  {
    word: "book",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "বুক",
      partOfSpeech: "verb",
      meaning: {
        bn: "বুক করা — টিকিট, ঘর বা আসন আগে থেকে ঠিক করে নেওয়া",
        en: "to arrange and pay for a ticket, room, or place in advance",
        hi: "बुक करना — टिकट या कमरा पहले से तय करना",
      },
      englishMeaning: "to arrange and pay for a ticket, room, or place in advance",
      examples: [
        {
          en: "I booked a hotel room online.",
          bn: "অনলাইনে আমি একটা হোটেল রুম বুক করেছি।",
        },
        {
          en: "Have you booked the tickets yet?",
          bn: "টিকিট কি বুক করে ফেলেছ?",
        },
      ],
      tip: {
        bn: "book শুধু বই নয় — verb হিসেবে আগাম ঠিক করা: 'book a ticket/room/table'। রেস্টুরেন্টে ফোনে বলুন 'I'd like to book a table for two at 8' — এই এক বাক্যেই কাজ সারা।",
        en: "'Book' is also a verb — arrange in advance: book a ticket/room/table. On the phone say 'I'd like to book a table for two at 8' and the job is done.",
        hi: "'Book' verb भी है — पहले से तय करना: book a ticket/room/table। रेस्तराँ में कहें 'I'd like to book a table for two at 8'।",
      },
      synonyms: ["reserve", "schedule", "arrange in advance"],
      antonyms: ["cancel"],
    },
  },
  {
    word: "cancel",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "ক্যানসেল",
      partOfSpeech: "verb",
      meaning: {
        bn: "বাতিল করা — ঠিক করা কিছু আর হবে না বলে বন্ধ করে দেওয়া",
        en: "to decide that something planned will not happen",
        hi: "रद्द करना — तय चीज़ को होने न देना",
      },
      englishMeaning: "to decide that something that was planned will not happen",
      examples: [
        {
          en: "The flight was cancelled because of fog.",
          bn: "কুয়াশার কারণে ফ্লাইটটা বাতিল হয়ে গেছে।",
        },
        {
          en: "I need to cancel my appointment.",
          bn: "আমার ডাক্তারের অ্যাপয়েন্টমেন্ট বাতিল করা দরকার।",
        },
      ],
      tip: {
        bn: "বাতিল হলে শোনা যায় 'The flight has been cancelled' — ব্রিটিশ বানান cancelled, আমেরিকান canceled, দুটোই চলে। বাতিল টিকিটের টাকা ফেরত = refund: 'Can I get a refund?'",
        en: "You'll hear 'The flight has been cancelled' — British 'cancelled', American 'canceled', both fine. Money back on a cancelled ticket = refund: 'Can I get a refund?'",
        hi: "'The flight has been cancelled' सुनाई देगा — British 'cancelled', American 'canceled'। टिकट का पैसा वापस = refund।",
      },
      synonyms: ["call off", "call it off"],
      antonyms: ["confirm", "schedule", "book"],
    },
  },

  /* ───── UNIT 4 · general · Character & feelings (9) ───── */

  {
    word: "generous",
    level: "intermediate",
    category: "general",
    unit: 4,
    data: {
      pronunciation: "জেনারাস",
      partOfSpeech: "adjective",
      meaning: {
        bn: "উদার — মুখ খুলে দেওয়া, সহজে অন্যের সাথে ভাগ করে নেওয়া",
        en: "happy to give more than is expected",
        hi: "उदार — ख़ुशी-ख़ुशी देने वाला",
      },
      englishMeaning: "willing to give money, time, or help freely",
      examples: [
        {
          en: "It was very generous of you to pay for everyone.",
          bn: "সবার হয়ে খরচ চাপা দেওয়াটা তোমার দিক থেকে খুবই উদার কাজ ছিল।",
        },
        {
          en: "She is generous with her time.",
          bn: "সে সময় দেওয়ার ব্যাপারে খুব উদার।",
        },
      ],
      tip: {
        bn: "উদারতার প্রশংসার ফর্মুলা: 'That's so generous of you!' — 'of you' প্যাটার্নটা খেয়াল করো। noun শব্দটা generosity — 'generousity' নয়, বানানে ফাঁদ আছে।",
        en: "The praise formula: 'That's so generous of you!' — note 'of you'. The noun is generosity, with a trap in the spelling: not 'generousity'.",
        hi: "प्रशंसा का फ़ॉर्मूला: 'That's so generous of you!'। noun है generosity — 'generousity' नहीं लिखें।",
      },
      synonyms: ["kind", "giving", "charitable"],
      antonyms: ["stingy", "selfish"],
    },
  },
  {
    word: "patient",
    level: "intermediate",
    category: "general",
    unit: 4,
    data: {
      pronunciation: "পেশেন্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "ধৈর্যশীল — রাগ না করে অপেক্ষা করতে পারা",
        en: "able to wait or keep trying calmly without getting angry",
        hi: "धैर्यवान — बिना गुस्सा किए इंतज़ार करने वाला",
      },
      englishMeaning: "able to wait calmly for a long time without getting angry",
      examples: [
        {
          en: "Be patient, the results will come.",
          bn: "ধৈর্য ধরো, ফল আসবে।",
        },
        {
          en: "She is patient with young children.",
          bn: "ছোট বাচ্চাদের সাথে সে খুব ধৈর্যশীল।",
        },
      ],
      tip: {
        bn: "'patient with' + মানুষ: 'Be patient with beginners'। মজার ব্যাপার — একই শব্দ noun হিসেবে হাসপাতালের রোগীও: 'The patient needs rest'। প্রসঙ্গ দেখে অর্থ ধরবে।",
        en: "Use 'patient with' + person: 'Be patient with beginners'. Fun fact: the same word as a noun means a hospital patient — 'The patient needs rest'. Context decides.",
        hi: "'Patient with' + व्यक्ति: 'Be patient with beginners'। यही शब्द noun रूप में मरीज़ भी है — context से समझें।",
      },
      synonyms: ["calm", "tolerant", "understanding"],
      antonyms: ["impatient", "restless"],
    },
  },
  {
    word: "honest",
    level: "intermediate",
    category: "general",
    unit: 4,
    data: {
      pronunciation: "অনেস্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "সৎ — সত্য বলা আর ঠিক কাজ করা, কাউকে ঠকায় না",
        en: "truthful and fair, not likely to lie or cheat",
        hi: "ईमानदार — सच बोलने वाला, किसी को धोखा न देने वाला",
      },
      englishMeaning: "truthful and fair; someone who does not lie or cheat",
      examples: [
        {
          en: "I want your honest opinion.",
          bn: "আমি তোমার সৎ মত চাই।",
        },
        {
          en: "He is honest about his mistakes.",
          bn: "সে নিজের ভুল নিয়ে সৎ — লুকায় না।",
        },
      ],
      tip: {
        bn: "মন খুলে সত্যি বলতে বাক্য শুরু করো 'To be honest, ...' বা 'Honestly, ...' দিয়ে। উচ্চারণে শুরুর h প্রায় নীরব — 'অনেস্ট'। আরেকটা রূপ: honesty (সততা)।",
        en: "Open a frank sentence with 'To be honest, ...' or 'Honestly, ...'. The starting h is almost silent — 'ON-est'. The noun form is honesty.",
        hi: "सीधी बात के लिए 'To be honest, ...' से शुरू करें। शुरुआती 'h' लगभग silent — 'ON-est'। noun: honesty।",
      },
      synonyms: ["truthful", "sincere", "fair"],
      antonyms: ["dishonest", "corrupt"],
    },
  },
  {
    word: "grateful",
    level: "intermediate",
    category: "general",
    unit: 4,
    data: {
      pronunciation: "গ্রেটফুল",
      partOfSpeech: "adjective",
      meaning: {
        bn: "কৃতজ্ঞ — কারো উপকারের জন্য মন থেকে ধন্যবাদ জানানো",
        en: "feeling thankful to someone for their help",
        hi: "आभारी — किसी की मदद के लिए दिल से शुक्रिया अदा करने वाला",
      },
      englishMeaning: "feeling or showing thanks to someone",
      examples: [
        {
          en: "I'm really grateful for your help.",
          bn: "তোমার সাহায্যের জন্য আমি সত্যিই কৃতজ্ঞ।",
        },
        {
          en: "We are grateful to the whole team.",
          bn: "পুরো টিমের কাছে আমরা কৃতজ্ঞ।",
        },
      ],
      tip: {
        bn: "প্যাটার্ন: grateful TO someone FOR something — 'I'm grateful to you for your advice'। আর 'I'd be grateful if you could...' ইংরেজিতে অনুরোধ করার সবচেয়ে ভদ্র উপায়গুলোর একটা — ইমেইলে জমে।",
        en: "Pattern: grateful TO someone FOR something. Even better: 'I'd be grateful if you could...' — one of the politest ways to request something in English.",
        hi: "पैटर्न: grateful TO someone FOR something। विनम्र अनुरोध: 'I'd be grateful if you could...' — ईमेल में बहुत काम आता है।",
      },
      synonyms: ["thankful", "appreciative"],
      antonyms: ["ungrateful", "unappreciative"],
    },
  },
  {
    word: "jealous",
    level: "intermediate",
    category: "general",
    unit: 4,
    data: {
      pronunciation: "জেলাস",
      partOfSpeech: "adjective",
      meaning: {
        bn: "ঈর্ষান্বিত — কারো ভাগ্য বা সাফল্য দেখে মন খারাপ হওয়া",
        en: "unhappy because someone has something you want",
        hi: "ईर्ष्यालु — किसी और की क़िस्मत या कामयाबी देखकर दुखी होना",
      },
      englishMeaning: "unhappy or angry because someone has what you want",
      examples: [
        {
          en: "Don't be jealous of your friend's success.",
          bn: "বন্ধুর সাফল্যে হিংসা কোরো না।",
        },
        {
          en: "He got jealous when she praised another player.",
          bn: "সে অন্য খেলোয়াড়ের প্রশংসা করলে সে ঈর্ষা করে ফেলল।",
        },
      ],
      tip: {
        bn: "'jealous of' + ব্যক্তি/জিনিস: 'jealous of his success'। হালকা, প্রায় প্রশংসামিশ্রিত অনুভূতিতে envy: 'I envy your confidence' — এটা বললে কেউ মন খারাপ করে না।",
        en: "Use 'jealous of' + person/thing: 'jealous of his success'. For a light, almost complimentary feeling use envy: 'I envy your confidence' — nobody minds hearing that.",
        hi: "'Jealous of' + व्यक्ति/चीज़। हल्की, तारीफ़ जैसी भावना के लिए envy: 'I envy your confidence' — यह सुनकर कोई बुरा नहीं मानता।",
      },
      synonyms: ["envious", "covetous"],
      antonyms: ["content", "satisfied"],
    },
  },
  {
    word: "annoyed",
    level: "intermediate",
    category: "general",
    unit: 4,
    data: {
      pronunciation: "অ্যানয়েড",
      partOfSpeech: "adjective",
      meaning: {
        bn: "বিরক্ত — একটু রাগা বা প্লীহা খারাপ হওয়া",
        en: "slightly angry or irritated about something",
        hi: "नाराज़ — हल्का गुस्सा या झुँझलाहट",
      },
      englishMeaning: "slightly angry; irritated",
      examples: [
        {
          en: "I was annoyed by the loud music.",
          bn: "জোরে মিউজিকে আমি বিরক্ত হয়েছিলাম।",
        },
        {
          en: "She looked annoyed when the call dropped.",
          bn: "কল কেটে গেলে সে বিরক্ত মনে হচ্ছিল।",
        },
      ],
      tip: {
        bn: "রাগের মাপকাঠি মনে রাখো: annoyed (একটু) → angry (মাঝারি) → furious (তপ্ত)। বাক্যে 'annoyed with' + মানুষ, 'annoyed about/at' + বিষয় — 'annoyed with him about the noise'।",
        en: "The anger scale: annoyed (a little) → angry (medium) → furious (very). Use 'annoyed with' a person and 'annoyed about' a thing — 'annoyed with him about the noise'.",
        hi: "गुस्से का पैमाना: annoyed → angry → furious। 'Annoyed with' व्यक्ति, 'annoyed about' बात।",
      },
      synonyms: ["irritated", "irked", "vexed"],
      antonyms: ["pleased", "delighted"],
    },
  },
  {
    word: "embarrassed",
    level: "intermediate",
    category: "general",
    unit: 4,
    data: {
      pronunciation: "এমব্যারাস্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "লজ্জিত — মানুষের সামনে বিব্রত বা অস্বস্তিতে পড়া",
        en: "feeling shy, awkward, or ashamed in front of others",
        hi: "शर्मिंदा — लोगों के सामने असहज महसूस करना",
      },
      englishMeaning: "feeling ashamed or shy in front of other people",
      examples: [
        {
          en: "I was so embarrassed when I forgot her name.",
          bn: "তার নাম ভুলে গেলে আমি ভীষণ বিব্রত হয়েছিলাম।",
        },
        {
          en: "Don't be embarrassed — everyone makes mistakes.",
          bn: "লজ্জা পেয়ো না — সবাই ভুল করে।",
        },
      ],
      tip: {
        bn: "ব্যাকরণের ফাঁদ: 'I am embarrassed' = আমি লজ্জিত; কিন্তু 'I am embarrassing' = আমি অন্যদের লজ্জা দিচ্ছি! যে ঘটনা লজ্জা ধরায় সে embarrassing moment, আর লজ্জার অনুভূতিটা embarrassment।",
        en: "Grammar trap: 'I am embarrassed' = I feel shy, but 'I am embarrassing' = I make others feel shy! The event is an 'embarrassing moment'; the feeling is embarrassment.",
        hi: "Grammar जाल: 'I am embarrassed' = मुझे शर्म आई; 'I am embarrassing' = मैं दूसरों को शर्मिंदा कर रहा हूँ! घटना = embarrassing moment।",
      },
      synonyms: ["ashamed", "mortified", "awkward"],
      antonyms: ["proud", "comfortable"],
    },
  },
  {
    word: "curious",
    level: "intermediate",
    category: "general",
    unit: 4,
    data: {
      pronunciation: "কিউরিয়াস",
      partOfSpeech: "adjective",
      meaning: {
        bn: "কৌতূহলী — জানতে ইচ্ছে করা",
        en: "wanting to know or learn about something",
        hi: "जिज्ञासु — जानने की इच्छा रखने वाला",
      },
      englishMeaning: "wanting to know or learn about something",
      examples: [
        {
          en: "Children are naturally curious.",
          bn: "বাচ্চারা স্বভাবগতভাবেই কৌতূহলী।",
        },
        {
          en: "I'm curious to know what happened next.",
          bn: "পরে কী হলো জানতে ইচ্ছে করছে।",
        },
      ],
      tip: {
        bn: "'curious about' + বিষয়, 'curious to know/see' + কাজ। প্রশ্ন করার আগে মিষ্টি সূচনা: 'Just curious — how much did it cost?' — জিজ্ঞেস করাটা অশালীন না হয়ে যায়।",
        en: "'Curious about' + topic, 'curious to know/see' + action. A sweet opener before asking: 'Just curious — how much did it cost?'",
        hi: "'Curious about' + विषय, 'curious to know/see' + क्रिया। पूछने से पहले: 'Just curious — how much did it cost?'",
      },
      synonyms: ["inquisitive", "eager", "interested"],
      antonyms: ["indifferent", "uninterested"],
    },
  },
  {
    word: "calm",
    level: "intermediate",
    category: "general",
    unit: 4,
    data: {
      pronunciation: "কাম",
      partOfSpeech: "adjective",
      meaning: {
        bn: "শান্ত — উত্তেজনা ছাড়া, মন স্থির",
        en: "peaceful and not worried, angry, or excited",
        hi: "शांत — बिना घबराहट या गुस्से के",
      },
      englishMeaning: "not worried, angry, or excited; peaceful",
      examples: [
        {
          en: "Stay calm during the exam.",
          bn: "পরীক্ষার সময় শান্ত থেকো।",
        },
        {
          en: "She has a calm voice.",
          bn: "তার কণ্ঠস্বর শান্ত।",
        },
      ],
      tip: {
        bn: "কাউকে শান্ত করতে 'Stay calm' বা 'Calm down' — তবে সাবধান, রাগের মাথায় 'Calm down!' বললে উল্টো আগুন জ্বলে। verb হিসেবে calm down = শান্ত হওয়া; শান্ত জায়গাকে বলে calm place।",
        en: "To soothe someone: 'Stay calm' or 'Calm down' — but warning: snapping 'Calm down!' at an angry person pours fuel on fire. As a verb, calm down = become peaceful.",
        hi: "शांत कराने के लिए 'Stay calm' या 'Calm down' — पर गुस्से में 'Calm down!' कहना आग में घी। calm down (verb) = शांत हो जाना।",
      },
      synonyms: ["peaceful", "relaxed", "composed"],
      antonyms: ["nervous", "excited", "anxious"],
    },
  },

  /* ───── UNIT 5 · academic · Study & goals (11) ───── */

  {
    word: "effort",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "এফোর্ট",
      partOfSpeech: "noun",
      meaning: {
        bn: "চেষ্টা — কিছু অর্জনের জন্য পরিশ্রম করা",
        en: "the energy and hard work you put into doing something",
        hi: "प्रयास — कुछ पाने के लिए मेहनत करना",
      },
      englishMeaning: "the energy and hard work you put into doing something",
      examples: [
        {
          en: "Learning a language takes effort.",
          bn: "ভাষা শেখায় চেষ্টা লাগে।",
        },
        {
          en: "You can see the effort in her essay.",
          bn: "তার রচনায় তার পরিশ্রম স্পষ্ট বোঝা যায়।",
        },
      ],
      tip: {
        bn: "'make an effort' = চেষ্টা করা, 'spare no effort' = যত লাগে করা। ফল যা-ই হোক চেষ্টার প্রশংসা করতে 'Good effort!' — শিক্ষক আর কোচরা প্রতিদিন বলে।",
        en: "'Make an effort' = try; 'spare no effort' = do everything possible. Praise a try with 'Good effort!' — teachers and coaches say it daily.",
        hi: "'Make an effort' = कोशिश करना; 'spare no effort' = पूरी मेहनत। कोशिश की प्रशंसा: 'Good effort!'",
      },
      synonyms: ["hard work", "attempt", "exertion"],
      antonyms: ["laziness", "idleness"],
    },
  },
  {
    word: "habit",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "হ্যাবিট",
      partOfSpeech: "noun",
      meaning: {
        bn: "অভ্যাস — ভাবনা ছাড়াই প্রতিদিন যে কাজ হয়ে যায়",
        en: "something you do often and regularly, without thinking",
        hi: "आदत — बिना सोचे रोज़ होने वाला काम",
      },
      englishMeaning: "something you do regularly, often without thinking",
      examples: [
        {
          en: "Reading daily is a good habit.",
          bn: "প্রতিদিন পড়া ভালো একটা অভ্যাস।",
        },
        {
          en: "I'm trying to break my phone habit.",
          bn: "ফোনের অভ্যাস ছাড়ার চেষ্টা করছি।",
        },
      ],
      tip: {
        bn: "নতুন অভ্যাস build/form হয়, পুরনোটা break হয়: 'build a habit', 'break a bad habit'। স্পিকিং পরীক্ষার প্রিয় প্রশ্ন 'What are your study habits?' — এর জবাবে দৈনিক রুটিন বলো।",
        en: "You build or form a habit and break a bad one: 'build a habit', 'break a bad habit'. A favourite speaking-test question is 'What are your study habits?'",
        hi: "नई आदत build/form होती है, बुरी आदत break होती है। स्पीकिंग टेस्ट में पूछा जाता है 'What are your study habits?'",
      },
      synonyms: ["routine", "custom", "practice"],
      antonyms: ["impulse"],
    },
  },
  {
    word: "focus",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "ফোকাস",
      partOfSpeech: "verb & noun",
      meaning: {
        bn: "মনোযোগ দেওয়া — পুরো মন একটা কাজে লাগানো",
        en: "to give all your attention to one thing",
        hi: "ध्यान केंद्रित करना — पूरा ध्यान एक काम पर लगाना",
      },
      englishMeaning: "to give all your attention to one thing",
      examples: [
        {
          en: "Focus on your pronunciation, not speed.",
          bn: "স্পিডের দিকে নয়, উচ্চারণে মনোযোগ দাও।",
        },
        {
          en: "I lost focus after an hour.",
          bn: "এক ঘণ্টা পর মনোযোগ হারিয়ে ফেলেছি।",
        },
      ],
      tip: {
        bn: "'on' ভুলে যেয়ো না: 'focus on pronunciation'। মনোযোগ নষ্টকারীর নাম distraction — 'My phone is my biggest distraction'। এক শব্দে নিজেকে সাবধানও করা যায়: 'Focus!'",
        en: "Never drop the 'on': 'focus on pronunciation'. The attention-stealer is a distraction — 'My phone is my biggest distraction'. You can even warn yourself with one word: 'Focus!'",
        hi: "'On' न भूलें: 'focus on pronunciation'। ध्यान भटकाने वाली चीज़ = distraction — 'My phone is my biggest distraction'।",
      },
      synonyms: ["concentrate", "pay attention"],
      antonyms: ["distract", "daydream"],
    },
  },
  {
    word: "progress",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "প্রগ্রেস",
      partOfSpeech: "noun",
      meaning: {
        bn: "অগ্রগতি — ধীরে ধীরে সামনে এগিয়ে যাওয়া বা ভালো হওয়া",
        en: "movement forward towards a goal; improvement",
        hi: "प्रगति — धीरे-धीरे आगे बढ़ना या सुधरना",
      },
      englishMeaning: "forward movement towards a goal; improvement over time",
      examples: [
        {
          en: "You're making great progress in speaking.",
          bn: "বলার দক্ষতায় তুমি দারুণ অগ্রগতি করছ।",
        },
        {
          en: "Slow progress is still progress.",
          bn: "ধীর অগ্রগতিও অগ্রগতিই।",
        },
      ],
      tip: {
        bn: "progress গণনীয় নয় — 'a progress' ভুল, বলুন 'some progress' বা 'a lot of progress'। বানানে s দিয়ে শেষ হলেও verb হিসেবেও চলে: 'We are progressing well'।",
        en: "'Progress' is uncountable — never 'a progress'; say 'some progress' or 'a lot of progress'. Despite the s, it also works as a verb: 'We are progressing well'.",
        hi: "'Progress' uncountable — 'a progress' ग़लत; 'some progress' कहें। s से ख़त्म होकर भी verb चलता है: 'We are progressing well'।",
      },
      synonyms: ["improvement", "headway", "advancement"],
      antonyms: ["setback", "decline"],
    },
  },
  {
    word: "goal",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "গোল",
      partOfSpeech: "noun",
      meaning: {
        bn: "লক্ষ্য — যে ফল পেতে কাজ করছ",
        en: "something you want to achieve in the future",
        hi: "लक्ष्य — जिस नतीजे के लिए काम कर रहे हो",
      },
      englishMeaning: "something you want to achieve in the future",
      examples: [
        {
          en: "My goal is to speak English fluently.",
          bn: "আমার লক্ষ্য সাবলীলভাবে ইংরেজি বলা।",
        },
        {
          en: "Set small goals to stay motivated.",
          bn: "নিজেকে উৎসাহিত রাখতে ছোট ছোট লক্ষ্য ঠিক করো।",
        },
      ],
      tip: {
        bn: "'set a goal' = লক্ষ্য ঠিক করা, 'reach/achieve a goal' = পূরণ করা। SMART goal মানে Specific, Measurable, Achievable, Relevant, Time-bound — স্পষ্ট ও মাপা যায় এমন লক্ষ্য। ফুটবলের গোলও এই শব্দ।",
        en: "'Set a goal' = choose it; 'reach/achieve a goal' = get it. A SMART goal is Specific, Measurable, Achievable, Relevant, Time-bound. Football's goal is the same word.",
        hi: "'Set a goal' = लक्ष्य तय करना; 'achieve a goal' = पाना। SMART goal = स्पष्ट, मापने योग्य लक्ष्य। फ़ुटबॉल का गोल भी यही शब्द।",
      },
      synonyms: ["aim", "target", "objective"],
      antonyms: ["distraction"],
    },
  },
  {
    word: "failure",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "ফেইলিয়র",
      partOfSpeech: "noun",
      meaning: {
        bn: "ব্যর্থতা — চেষ্টা করেও পাওয়ার মতো ফল না পাওয়া",
        en: "the fact of not succeeding in what you try to do",
        hi: "असफलता — कोशिश के बाद भी मनचाहा नतीजा न मिलना",
      },
      englishMeaning: "the fact of not achieving what you tried to do",
      examples: [
        {
          en: "Failure is part of learning.",
          bn: "ব্যর্থতা শেখারই একটা অংশ।",
        },
        {
          en: "He saw the failure as a lesson.",
          bn: "সে ব্যর্থতাকে একটা পাঠ হিসেবে দেখেছে।",
        },
      ],
      tip: {
        bn: "দুটো বহুল শোনা বাক্য: 'Failure is the pillar of success' আর 'fear of failure'। ভারী শোনাতে চাইলে নরম বিকল্প: 'It didn't work out' — ব্যর্থ হলাম না গো, জমেনি।",
        en: "Two famous phrases: 'Failure is the pillar of success' and 'fear of failure'. To soften it, say 'It didn't work out' instead of 'I failed'.",
        hi: "दो प्रसिद्ध वाक्य: 'Failure is the pillar of success' और 'fear of failure'। नरम भाषा में 'It didn't work out' कहें।",
      },
      synonyms: ["defeat", "setback", "flop"],
      antonyms: ["success", "achievement"],
    },
  },
  {
    word: "opportunity",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "অপোরচুনিটি",
      partOfSpeech: "noun",
      meaning: {
        bn: "সুযোগ — কিছু করার উপযুক্ত মুহূর্ত বা পরিস্থিতি",
        en: "a chance to do something good or to improve",
        hi: "अवसर — कुछ करने का सही मौक़ा",
      },
      englishMeaning: "a chance to do something good or useful",
      examples: [
        {
          en: "This job is a great opportunity for me.",
          bn: "এই চাকরিটা আমার জন্য দারুণ একটা সুযোগ।",
        },
        {
          en: "Don't miss the opportunity to practice.",
          bn: "প্র্যাকটিস করার সুযোগ হাতছাড়া কোরো না।",
        },
      ],
      tip: {
        bn: "'take/seize an opportunity' = সুযোগ কাজে লাগানো, 'miss an opportunity' = হাতছাড়া। প্রবাদ: 'Opportunity knocks but once'। রোজকার কথায় chance আরও সহজ — দুটোই জানা জরুরি।",
        en: "'Take/seize an opportunity' = use it; 'miss an opportunity' = lose it. Proverb: 'Opportunity knocks but once'. In daily talk 'chance' is simpler.",
        hi: "'Take/seize an opportunity' = सुयोग लेना; 'miss' = खो देना। कहावत: 'Opportunity knocks but once'। रोज़मर्रा में 'chance' आसान।",
      },
      synonyms: ["chance", "opening", "break"],
      antonyms: ["obstacle"],
    },
  },
  {
    word: "challenge",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "চ্যালেঞ্জ",
      partOfSpeech: "noun",
      meaning: {
        bn: "চ্যালেঞ্জ — করা কঠিন কিন্তু সম্ভব এমন কাজ",
        en: "something difficult that tests your ability",
        hi: "चुनौती — करना मुश्किल पर मुमकिन वाला काम",
      },
      englishMeaning: "something new and difficult that tests your ability",
      examples: [
        {
          en: "Speaking on camera was a real challenge.",
          bn: "ক্যামেরার সামনে কথা বলা আসলেই একটা চ্যালেঞ্জ ছিল।",
        },
        {
          en: "I enjoy a challenge.",
          bn: "চ্যালেঞ্জ আমার ভালো লাগে।",
        },
      ],
      tip: {
        bn: "'face a challenge' = মুখোমুখি হওয়া, 'take on a challenge' = ইচ্ছা করে নেওয়া। adjective রূপ challenging — 'a challenging task'। খুব সহজ কাজকে মজা করে বলা হয় 'a piece of cake', উল্টোটা challenge।",
        en: "'Face a challenge' = deal with it; 'take on a challenge' = accept it willingly. The adjective is challenging — 'a challenging task'. The opposite of a challenge is a piece of cake.",
        hi: "'Face a challenge' = सामना करना; 'take on a challenge' = चुनौती लेना। विशेषण: challenging। बहुत आसान काम = a piece of cake।",
      },
      synonyms: ["test", "hurdle", "task"],
      antonyms: ["breeze", "ease"],
    },
  },
  {
    word: "knowledge",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "নলেজ",
      partOfSpeech: "noun",
      meaning: {
        bn: "জ্ঞান — পড়ে, দেখে, করে যা জেনেছ",
        en: "the information and understanding you have gained",
        hi: "ज्ञान — पढ़कर, देखकर, करके जो सीखा है",
      },
      englishMeaning: "the information, skills, and understanding you have gained",
      examples: [
        {
          en: "She has deep knowledge of history.",
          bn: "ইতিহাস নিয়ে তার গভীর জ্ঞান আছে।",
        },
        {
          en: "Travel gave him knowledge of the world.",
          bn: "ভ্রমণ তাকে পৃথিবী সম্পর্কে জ্ঞান এনে দিয়েছে।",
        },
      ],
      tip: {
        bn: "knowledge গণনীয় নয় — 'a knowledge' নয়। প্যাটার্ন: 'knowledge of/about English'। 'To my knowledge' মানে যতটুকু জানি; 'common knowledge' মানে সবার জানা কথা।",
        en: "'Knowledge' is uncountable — never 'a knowledge'. Pattern: 'knowledge of/about English'. 'To my knowledge' = as far as I know; 'common knowledge' = everybody knows it.",
        hi: "'Knowledge' uncountable — 'a knowledge' नहीं। पैटर्न: 'knowledge of/about English'। 'To my knowledge' = जहाँ तक मुझे पता है।",
      },
      synonyms: ["understanding", "wisdom", "learning"],
      antonyms: ["ignorance"],
    },
  },
  {
    word: "discipline",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "ডিসিপ্লিন",
      partOfSpeech: "noun",
      meaning: {
        bn: "নিয়মানুবর্তিতা — নিয়ম মেনে নিয়মিত কাজ করা",
        en: "the practice of following rules and working regularly",
        hi: "अनुशासन — नियम मानकर नियमित काम करना",
      },
      englishMeaning: "the habit of following rules and working in a controlled, regular way",
      examples: [
        {
          en: "Discipline matters more than motivation.",
          bn: "মোটিভেশনের চেয়ে নিয়মানুবর্তিতাই বেশি জরুরি।",
        },
        {
          en: "Good discipline helps you reach your goals.",
          bn: "ভালো শৃঙ্খলা লক্ষ্যে পৌঁছাতে সাহায্য করে।",
        },
      ],
      tip: {
        bn: "পড়াশোনার সবচেয়ে দরকারি শব্দ self-discipline — নিজেকে নিয়ন্ত্রণ করার ক্ষমতা। বিখ্যাত কথাটা মনে রাখো: 'Discipline beats motivation' — মুড আসে-যায়, নিয়ম থেকে যায়।",
        en: "The key study word is self-discipline — the ability to control yourself. Remember the famous line: 'Discipline beats motivation' — moods come and go, rules stay.",
        hi: "पढ़ाई का सबसे ज़रूरी शब्द self-discipline — ख़ुद पर नियंत्रण। प्रसिद्ध बात: 'Discipline beats motivation' — मूड आता-जाता है, नियम रहता है।",
      },
      synonyms: ["self-control", "order", "routine"],
      antonyms: ["indiscipline", "chaos"],
    },
  },
  {
    word: "exam",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "এক্সাম",
      partOfSpeech: "noun",
      meaning: {
        bn: "পরীক্ষা — যা শিখেছ তা মাপার আনুষ্ঠানিক টেস্ট",
        en: "a formal test of what you have learned",
        hi: "परीक्षा — जो सीखा है उसकी जाँच का टेस्ट",
      },
      englishMeaning: "an official test of your knowledge or skill",
      examples: [
        {
          en: "The final exam is next month.",
          bn: "ফাইনাল পরীক্ষা আগামী মাসে।",
        },
        {
          en: "She passed the exam with good marks.",
          bn: "সে ভালো নম্বরে পরীক্ষা পাস করেছে।",
        },
      ],
      tip: {
        bn: "exam = examination এর ছোট রূপ। ব্রিটিশরা বলে 'sit an exam', আমেরিকানরা 'take an exam' — দুটোই পরীক্ষা দেওয়া। ফল: 'pass' বা 'fail'। শুভকামনা: 'Good luck with your exam!'",
        en: "Exam is short for examination. The British 'sit an exam' = the American 'take an exam' — both mean to do it. Result: pass or fail. Wish luck: 'Good luck with your exam!'",
        hi: "Exam = examination का छोटा रूप। British 'sit an exam' = American 'take an exam'। नतीजा: pass या fail। शुभकामना: 'Good luck with your exam!'",
      },
      synonyms: ["test", "examination", "quiz"],
      antonyms: [],
    },
  },
];
