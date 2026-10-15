// ─── Learning-path vocab seeds: ADVANCED (48 new entries, units 1–5) ───
// Part of Task 9 (library enrichment). Existing advanced words live in
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

export const SEED_VOCAB_V2_ADVANCED: SeedVocabV2Entry[] = [
  /* ─────────── Unit 1 · academic · Ideas & argument (10) ─────────── */

  {
    word: "advocate",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "অ্যাডভোকেট",
      partOfSpeech: "verb",
      meaning: {
        bn: "জোরালোভাবে পক্ষে কথা বলা বা সমর্থন করা — যেমন কেউ ক্লাসে মোবাইল নিষেধের পক্ষে যুক্তি দেয়",
        en: "to publicly support or recommend an idea, policy or way of doing something",
        hi: "किसी विचार या नीति के पक्ष में खुलकर बोलना या समर्थन करना",
      },
      englishMeaning: "to publicly support or recommend an idea or way of doing something",
      examples: [
        {
          en: "Many doctors advocate walking for thirty minutes every day.",
          bn: "অনেক চিকিৎসক প্রতিদিন ত্রিশ মিনিট হাঁটার পক্ষে পরামর্শ দেন।",
        },
        {
          en: "The report advocates a sugar tax to fight obesity.",
          bn: "স্থূলতা কমাতে চিনিতে কর বসানোর পক্ষে সুপারিশ করেছে রিপোর্টটি।",
        },
      ],
      tip: {
        bn: "ক্রিয়া হিসেবে advocate-এর পরে সরাসরি বিষয়বস্তু বসে: 'advocate reform', 'advocate walking' — 'advocate to reform' নয়। ব্যক্তি বোঝাতে এটা nounও: an advocate = একজন সমর্থক বা উকিল।",
        en: "As a verb, 'advocate' takes a direct object: 'advocate reform', not 'advocate to reform'. As a noun, an advocate is a person who supports a cause (or a lawyer).",
        hi: "क्रिया में 'advocate' के बाद सीधे विषय आता है: 'advocate reform'। संज्ञा में advocate = समर्थक या वकील।",
      },
      synonyms: ["support", "champion", "back"],
      antonyms: ["oppose", "denounce"],
    },
  },
  {
    word: "contradict",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "কন্ট্রাডিক্ট",
      partOfSpeech: "verb",
      meaning: {
        bn: "সরাসরি উল্টো কথা বলা — কেউ যা বলল বা দাবি করল, তার ঠিক বিপরীতটা বলা বা প্রমাণ করা",
        en: "to say the opposite of what someone has said, or of facts to be in conflict",
        hi: "किसी की बात के विपरीत कहना; बयानों का आपस में टकराना",
      },
      englishMeaning: "to say the opposite of something someone has said",
      examples: [
        {
          en: "The witness's statement contradicts the CCTV footage.",
          bn: "সাক্ষীর বয়ান সিসি ফুটেজের সঙ্গে সরাসরি সাংঘর্ষিক।",
        },
        {
          en: "Don't contradict your manager in front of the client — discuss it privately later.",
          bn: "ক্লায়েন্টের সামনে বসের কথা খণ্ডন করবেন না — পরে একান্তে আলোচনা করুন।",
        },
      ],
      tip: {
        bn: "noun রূপ contradiction, adjective contradictory — 'The two reports are contradictory।' নিজের কথার ভেতরেই উল্টো থাকলে বলে self-contradictory।",
        en: "Noun: contradiction; adjective: contradictory. A sentence that disagrees with itself is self-contradictory.",
        hi: "संज्ञा: contradiction, विशेषण: contradictory।",
      },
      synonyms: ["dispute", "counter", "oppose"],
      antonyms: ["agree", "confirm"],
    },
  },
  {
    word: "imply",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "ইমপ্লাই",
      partOfSpeech: "verb",
      meaning: {
        bn: "সরাসরি না বলেও বোঝানো — কথার আড়ালে ইঙ্গিত লুকিয়ে থাকা; যেমন 'আজ অনেক ঠান্ডা' বলা মানেই জানালা বন্ধের ইঙ্গিত",
        en: "to suggest something without saying it directly",
        hi: "सीधे कहे बिना संकेत में बात समझाना",
      },
      englishMeaning: "to suggest something is true without saying it directly",
      examples: [
        {
          en: "The report implies that the original deadline was unrealistic.",
          bn: "রিপোর্টটি পরোক্ষভাবে বোঝায় যে শুরুর সময়সীমাটা বাস্তবসম্মত ছিল না।",
        },
        {
          en: "Are you implying that I copied the design?",
          bn: "আপনি কি ইঙ্গিত করছেন যে আমি ডিজাইনটা কপি করেছি?",
        },
      ],
      tip: {
        bn: "বক্তা imply করে, শ্রোতা infer করে — 'He implied I was late; I inferred he was annoyed' মানে তিনি ইঙ্গিতে দেরির কথা বললেন, আমি বুঝলাম তিনি বিরক্ত। এই জোড়া পরীক্ষায় প্রায়ই আসে।",
        en: "The speaker implies; the listener infers. 'He implied I was late; I inferred he was annoyed.'",
        hi: "बोलने वाला imply करता है, सुनने वाला infer।",
      },
      synonyms: ["suggest", "hint", "indicate"],
      antonyms: ["state", "declare", "spell out"],
    },
  },
  {
    word: "justify",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "জাস্টিফাই",
      partOfSpeech: "verb",
      meaning: {
        bn: "যুক্তি দিয়ে সমর্থন করা — কোনো সিদ্ধান্ত বা খরচ কেন ঠিক বা দরকারি ছিল, তার কারণ দেখানো",
        en: "to show good reasons why a decision or action was right or necessary",
        hi: "किसी फ़ैसले के लिए उचित कारण देना",
      },
      englishMeaning: "to give good reasons for something so it seems right or necessary",
      examples: [
        {
          en: "How do you justify spending half the budget on one campaign?",
          bn: "পুরো বাজেটের অর্ধেক একটা প্রচারণায় খরচ করার যুক্তি কীভাবে দেবেন?",
        },
        {
          en: "The exam results justify the extra hours we put in.",
          bn: "পরীক্ষার ফল দেখে বোঝা যায়, আমাদের অতিরিক্ত পরিশ্রম সার্থক হয়েছিল।",
        },
      ],
      tip: {
        bn: "justify-এর পরে noun বা -ing বসে: 'justify the cost', 'justify spending'। প্রবাদ: the end justifies the means — উদ্দেশ্য ভালো হলে পথ খারাপ হলেও চলে, এই ভাবনা।",
        en: "'Justify' takes a noun or -ing: 'justify the cost'. Proverb: the end justifies the means.",
        hi: "'Justify' के बाद noun या -ing आता है: 'justify the cost'।",
      },
      synonyms: ["defend", "warrant", "rationalize"],
      antonyms: ["condemn", "criticize"],
    },
  },
  {
    word: "refute",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "রিফিউট",
      partOfSpeech: "verb",
      meaning: {
        bn: "যুক্তি বা প্রমাণ দিয়ে খণ্ডন করা — কারও দাবি শুধু 'না' বলে না ফেলা, ভুল প্রমাণ করে দেখানো",
        en: "to prove that a claim or argument is wrong with evidence or logic",
        hi: "प्रमाण या तर्क से किसी दावे को ग़लत साबित करना",
      },
      englishMeaning: "to prove that a claim or argument is wrong",
      examples: [
        {
          en: "The scientist refuted the claim with data from three independent labs.",
          bn: "তিনটি স্বাধীন ল্যাবের তথ্য দিয়ে বিজ্ঞানী দাবিটা খণ্ডন করেন।",
        },
        {
          en: "In the debate she refuted every point her opponent raised.",
          bn: "বিতর্কে প্রতিপক্ষের তোলা প্রতিটি যুক্তি তিনি খণ্ডন করে দেন।",
        },
      ],
      tip: {
        bn: "refute = ভুল প্রমাণ করা; deny = শুধু অস্বীকার। প্রমাণ হাতে না থাকলে deny ব্যবহার করুন — refute একটা বলিষ্ঠ শব্দ।",
        en: "'Refute' means prove wrong; 'deny' only means say it is not true. Use 'deny' when you have no evidence yet.",
        hi: "Refute = ग़लत साबित करना; deny = बस इनकार करना।",
      },
      synonyms: ["disprove", "rebut", "debunk"],
      antonyms: ["confirm", "prove", "support"],
    },
  },
  {
    word: "assert",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "অ্যাসার্ট",
      partOfSpeech: "verb",
      meaning: {
        bn: "দৃঢ়কণ্ঠে দাবি করা — আত্মবিশ্বাসের সঙ্গে জোর দিয়ে বলা; প্রমাণ তো পরে",
        en: "to state something firmly and confidently",
        hi: "दृढ़ स्वर से कहना या दावा करना",
      },
      englishMeaning: "to state an opinion or fact firmly and confidently",
      examples: [
        {
          en: "The CEO asserted that the company would recover by March.",
          bn: "প্রধান নির্বাহী দৃঢ়ভাবে দাবি করেন, মার্চের মধ্যেই কোম্পানি ঘুরে দাঁড়াবে।",
        },
        {
          en: "Assert your point calmly in the meeting, then listen to the reply.",
          bn: "মিটিংয়ে শান্তভাবে নিজের অবস্থান জাহির করুন, তারপর উত্তর শুনুন।",
        },
      ],
      tip: {
        bn: "noun: assertion ('a bold assertion')। 'assert yourself' মানে নিজের অধিকার ও মত স্পষ্টভাবে জানানো — assertive মানুষ বকাবকি করে না, আবার নিজেকে মুছিয়েও যায় না।",
        en: "Noun: assertion. 'Assert yourself' means state your needs clearly without being rude — the adjective is assertive.",
        hi: "संज्ञा: assertion; 'assert yourself' = अपनी बात स्पष्ट रूप से कहना।",
      },
      synonyms: ["declare", "claim", "affirm"],
      antonyms: ["doubt", "deny", "question"],
    },
  },
  {
    word: "concede",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "কনসিড",
      partOfSpeech: "verb",
      meaning: {
        bn: "যুক্তি বা প্রমাণের মুখে অনিচ্ছা সত্ত্বেও মেনে নেওয়া — 'ঠিক, এটা সত্যি' বলতে বাধ্য হওয়া",
        en: "to admit that something is true after first resisting or denying it",
        hi: "प्रमाण के सामने अनिच्छा से बात मान लेना",
      },
      englishMeaning: "to admit, often unwillingly, that something is true",
      examples: [
        {
          en: "He conceded that the first version of the app was too slow.",
          bn: "তিনি স্বীকার করেন, অ্যাপের প্রথম সংস্করণ সত্যিই ধীর ছিল।",
        },
        {
          en: "Even her rivals concede that the new policy works.",
          bn: "প্রতিদ্বন্দ্বীরাও মানতে বাধ্য হয়, নতুন নীতিটা কার্যকর।",
        },
      ],
      tip: {
        bn: "প্যাটার্ন: 'concede that + বাক্য'। বিতর্কে concede করা দুর্বলতা নয় — দেখায় আপনি ন্যায্য; বিজ্ঞানেও প্রমাণের মুখে মেনে নেওয়া ভালো অভ্যাস।",
        en: "Pattern: 'concede that + clause'. Conceding a fair point in a debate shows honesty, not weakness.",
        hi: "पैटर्न: 'concede that + clause'। बहस में सही बात मानना ईमानदारी दिखाता है।",
      },
      synonyms: ["admit", "acknowledge", "grant"],
      antonyms: ["deny", "refuse", "dispute"],
    },
  },
  {
    word: "hypothetical",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "হাইপোথেটিক্যাল",
      partOfSpeech: "adjective",
      meaning: {
        bn: "কল্পনানির্ভর — এখনো সত্যি নয়, শুধু 'যদি এমন হয়' ধরে নেওয়া পরিস্থিতি; যেমন 'যদি মাছেরা উড়ত'",
        en: "based on an imagined situation, not on things that have really happened",
        hi: "काल्पनिक — यथार्थ नहीं, मान ली गई स्थिति पर आधारित",
      },
      englishMeaning: "based on an imagined situation rather than real facts",
      examples: [
        {
          en: "In a hypothetical world where fuel is free, how would cities change?",
          bn: "জ্বালানি একেবারে বিনামূল্যে হলে — এমন কল্পিত পৃথিবীতে শহরগুলোর কী হতো?",
        },
        {
          en: "The interview panel asked a hypothetical: what if two clients clash on the same day?",
          bn: "ইন্টারভিউ বোর্ড কাল্পনিক প্রশ্ন করে: একই দিনে দুই ক্লায়েন্ট সাংঘর্ষিক হলে কী করবেন?",
        },
      ],
      tip: {
        bn: "hypothetical হলো adjective (কাল্পনিক); আর hypothesis হলো noun (গবেষণার অনুমান) — দুটো আলাদা শব্দ; hypothesis ইউনিট ৪-এ আবার আসবে।",
        en: "'Hypothetical' is the adjective (an imagined case); 'hypothesis' is a noun (a testable guess in research). They are different words.",
        hi: "Hypothetical = काल्पनिक (विशेषण); hypothesis = परिकल्पना (संज्ञा)।",
      },
      synonyms: ["theoretical", "imagined", "speculative"],
      antonyms: ["real", "actual", "factual"],
    },
  },
  {
    word: "rationale",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "র‍্যাশনাল",
      partOfSpeech: "noun",
      meaning: {
        bn: "মূল যুক্তি বা কারণ — কোনো পরিকল্পনার পেছনে 'আমরা কেন ঠিক এটা করছি' তার সারসংক্ষেপ",
        en: "the set of reasons behind a decision, plan or belief",
        hi: "किसी निर्णय या योजना के पीछे का मूल तर्क",
      },
      englishMeaning: "the reasons and thinking behind a decision or plan",
      examples: [
        {
          en: "Before the meeting, read the rationale behind the new pricing plan.",
          bn: "মিটিংয়ের আগে নতুন মূল্যনীতির পেছনের যুক্তিটা পড়ে নিন।",
        },
        {
          en: "The essay must open with the rationale for your research.",
          bn: "রচনার শুরুতেই গবেষণার যুক্তিভিত্তি লিখতে হবে।",
        },
      ],
      tip: {
        bn: "rationale (noun) মানে যুক্তি-ভিত্তি, rational (adjective) মানে যুক্তিসম্মত — উচ্চারণ প্রায় এক, অর্থ আলাদা; বানানে খেয়াল করুন rationale-এ 'e' আছে।",
        en: "'Rationale' is a noun (the reasoning); 'rational' is an adjective (reasonable). They sound alike but mean different things.",
        hi: "Rationale = तर्क (संज्ञा); rational = युक्तियुक्त (विशेषण)।",
      },
      synonyms: ["reasoning", "justification", "basis"],
      antonyms: ["guesswork", "impulse"],
    },
  },
  {
    word: "perspective",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "পারস্পেক্টিভ",
      partOfSpeech: "noun",
      meaning: {
        bn: "দৃষ্টিভঙ্গি — কোনো বিষয় দেখার নির্দিষ্ট কোণ; একই শহর পাহাড়ের চূড়া থেকে আর রাস্তা থেকে ভিন্ন দেখায়, ব্যাপারটা তেমনই",
        en: "a particular way of thinking about or looking at something",
        hi: "किसी विषय को देखने का नज़रिया",
      },
      englishMeaning: "a particular way of thinking about or looking at something",
      examples: [
        {
          en: "Try to see the delay from the customer's perspective.",
          bn: "দেরিটা গ্রাহকের চোখে দেখার চেষ্টা করুন।",
        },
        {
          en: "Her time abroad gave her a fresh perspective on education.",
          bn: "বিদেশে কাটানো দিনগুলো শিক্ষা নিয়ে তার দৃষ্টিভঙ্গিই বদলে দিয়েছে।",
        },
      ],
      tip: {
        bn: "কলকেশন: 'from my perspective', 'a fresh/new perspective on something'। 'point of view'-এর একটু আনুষ্ঠানিক রূপ; রচনায় বিকল্প দৃষ্টিভঙ্গি তুলে ধরলে নম্বর বাড়ে।",
        en: "Common phrases: 'from my perspective', 'a fresh perspective on something'. A slightly formal version of 'point of view'.",
        hi: "सामान्य वाक्यांश: 'from my perspective', 'a fresh perspective'।",
      },
      synonyms: ["viewpoint", "outlook", "angle"],
      antonyms: [],
    },
  },

  /* ─────────── Unit 2 · general · Society & policy (11) ─────────── */

  {
    word: "inequality",
    level: "advanced",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "ইনইকুয়ালিটি",
      partOfSpeech: "noun",
      meaning: {
        bn: "বৈষম্য বা অসমতা — টাকা, সুযোগ বা অধিকারে মানুষের মধ্যে অন্যায্য ফারাক; একই কাজে দুজনের ভিন্ন বেতন পাওয়ার মতো",
        en: "an unfair difference between groups of people in money, power or opportunities",
        hi: "असमानता — धन, अधिकार या अवसरों में अन्यायपूर्ण अंतर",
      },
      englishMeaning: "an unfair difference in money, power or opportunities between groups",
      examples: [
        {
          en: "The report measures income inequality across the district.",
          bn: "রিপোর্টে জেলাভরে আয়বৈষম্য মাপা হয়েছে।",
        },
        {
          en: "Gender inequality in promotion is now a board-level issue.",
          bn: "পদোন্নতিতে লিঙ্গবৈষম্য এখন পরিচালনা পর্যায়ের আলোচ্যসূচিতে।",
        },
      ],
      tip: {
        bn: "জোড়ায় মনে রাখুন: income inequality (আয়বৈষম্য), gender inequality (লিঙ্গবৈষম্য)। প্যাটার্ন: 'inequality in something'। উল্টো শব্দ equality = সমতা।",
        en: "Common pairs: income inequality, gender inequality. Pattern: 'inequality in something'. Opposite: equality.",
        hi: "'Income inequality' (आय असमानता) और 'gender inequality' (लिंग असमानता) आम हैं।",
      },
      synonyms: ["disparity", "imbalance", "unfairness"],
      antonyms: ["equality", "fairness", "parity"],
    },
  },
  {
    word: "poverty",
    level: "advanced",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "পভার্টি",
      partOfSpeech: "noun",
      meaning: {
        bn: "দারিদ্র্য — খাওয়া, বাসা, শিক্ষা চালানোর মতো মৌলিক চাহিদার টাকা না থাকা; শুধু দরিদ্র হওয়া নয়, সুযোগ থেকে বঞ্চিত হওয়াও",
        en: "the state of being extremely poor, without enough for basic needs",
        hi: "ग़रीबी — ज़रूरी चीज़ों के लिए पैसा न होना",
      },
      englishMeaning: "the state of being extremely poor",
      examples: [
        {
          en: "Microloans helped many families move out of poverty.",
          bn: "ক্ষুদ্র ঋণ অনেক পরিবারকে দারিদ্র্য থেকে বেরিয়ে আসতে সাহায্য করেছে।",
        },
        {
          en: "Poverty forces thousands of children to leave school early.",
          bn: "দারিদ্র্যের চাপে হাজারো শিশু স্কুল আগে ছেড়ে দেয়।",
        },
      ],
      tip: {
        bn: "সংবাদে হরহামেশা দেখবেন: poverty line (দারিদ্র্যসীমা), poverty rate (দারিদ্র্যের হার), extreme poverty (চরম দারিদ্র্য)।",
        en: "News phrases: poverty line, poverty rate, extreme poverty.",
        hi: "समाचारों में: poverty line (ग़रीबी रेखा), poverty rate।",
      },
      synonyms: ["hardship", "destitution", "need"],
      antonyms: ["wealth", "prosperity", "affluence"],
    },
  },
  {
    word: "infrastructure",
    level: "advanced",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "ইনফ্রাস্ট্রাকচার",
      partOfSpeech: "noun",
      meaning: {
        bn: "অবকাঠামো — দেশ-শহর চলার মূল কাঠামো: রাস্তা, সেতু, বিদ্যুৎ, পানি, ইন্টারনেট; শরীরের হাড়ের মতো — দেখা যায় না, ভাঙলে সব থমকে যায়",
        en: "the basic systems a country needs — roads, bridges, power, water and internet",
        hi: "अवसंरचना — सड़क, बिजली, पानी जैसी बुनियादी व्यवस्था",
      },
      englishMeaning: "the basic systems and structures a country or city needs to work",
      examples: [
        {
          en: "The budget prioritises digital infrastructure in rural areas.",
          bn: "বাজেটে গ্রামাঞ্চলের ডিজিটাল অবকাঠামোকে অগ্রাধিকার দেওয়া হয়েছে।",
        },
        {
          en: "Weak port infrastructure slows down exports.",
          bn: "দুর্বল বন্দর-অবকাঠামো রপ্তানিকে মন্থর করে দেয়।",
        },
      ],
      tip: {
        bn: "uncountable — 'an infrastructure' লেখা হয় না; লিখুন infrastructure investment, infrastructure spending। 'digital/green infrastructure' আজকাল খুব চলে।",
        en: "It is uncountable: say 'infrastructure investment', never 'an infrastructure'.",
        hi: "यह uncountable है — 'infrastructure investment' कहें, 'an infrastructure' नहीं।",
      },
      synonyms: ["facilities", "framework", "network"],
      antonyms: [],
    },
  },
  {
    word: "welfare",
    level: "advanced",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "ওয়েলফেয়ার",
      partOfSpeech: "noun",
      meaning: {
        bn: "কল্যাণ — মানুষের সুখ-স্বাস্থ্য-জীবনমানের ভালো অবস্থা; সরকারি প্রসঙ্গে 'কল্যাণমূলক ভাতা বা প্রকল্প'-ও বোঝায়",
        en: "people's health, comfort and happiness; also government help for those in need",
        hi: "कल्याण — लोगों की भलाई; सरकारी सहायता योजना",
      },
      englishMeaning: "the health and happiness of people; government support for the needy",
      examples: [
        {
          en: "The new budget raises welfare spending for elderly citizens.",
          bn: "নতুন বাজেটে প্রবীণ নাগরিকদের জন্য কল্যাণমূলক ব্যয় বাড়ানো হয়েছে।",
        },
        {
          en: "The company funds a welfare programme for workers' children.",
          bn: "কোম্পানি কর্মীদের সন্তানদের জন্য কল্যাণ প্রকল্প চালায়।",
        },
      ],
      tip: {
        bn: "welfare state = কল্যাণরাষ্ট্র (যে রাষ্ট্র নাগরিকের স্বাস্থ্য-শিক্ষার দায় নেয়); social welfare = সমাজকল্যাণ। কর্মক্ষেত্রে 'team welfare' মানে সদস্যদের ভালো থাকা।",
        en: "'Welfare state' = a country that funds health and education; at work, 'team welfare' means your members' well-being.",
        hi: "'Welfare state' = कल्याणकारी राज्य; काम की जगह 'team welfare' = सदस्यों की भलाई।",
      },
      synonyms: ["well-being", "benefit", "aid"],
      antonyms: ["hardship", "neglect"],
    },
  },
  {
    word: "discrimination",
    level: "advanced",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "ডিসক্রিমিনেশন",
      partOfSpeech: "noun",
      meaning: {
        bn: "বৈষম্যমূলক আচরণ — জাতি, ধর্ম, লিঙ্গ বা রঙের কারণে কাউকে অন্যায়ভাবে আলাদা করে আচরণ করা",
        en: "unfair treatment of people because of their race, gender, religion or similar",
        hi: "भेदभाव — जाति, धर्म या लिंग के आधार पर अन्यायपूर्ण व्यवहार",
      },
      englishMeaning: "unfair treatment of a person or group, especially because of who they are",
      examples: [
        {
          en: "The company was fined for discrimination in hiring.",
          bn: "নিয়োগে বৈষম্যের দায়ে কোম্পানিটিকে জরিমানা করা হয়।",
        },
        {
          en: "Discrimination at work often goes unreported.",
          bn: "কর্মক্ষেত্রের বৈষম্যের কথা অনেক সময় কেউ জানায়ই না।",
        },
      ],
      tip: {
        bn: "ক্রিয়া: 'discriminate against someone' — against বাধ্যতামূলক। 'face discrimination', 'fight discrimination' সংবাদের জনপ্রিয় কলকেশন।",
        en: "Verb pattern: 'discriminate against someone'. Common phrases: 'face discrimination', 'fight discrimination'.",
        hi: "क्रिया: 'discriminate against someone'; आम वाक्यांश: 'face discrimination'।",
      },
      synonyms: ["bias", "prejudice", "unfairness"],
      antonyms: ["fairness", "equality", "tolerance"],
    },
  },
  {
    word: "sustainability",
    level: "advanced",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "সাসটেইনেবিলিটি",
      partOfSpeech: "noun",
      meaning: {
        bn: "টেকসইতা — এমনভাবে চলা বা ব্যবহার করা যাতে জিনিসটা ভবিষ্যতেও বেঁচে থাকে; যেমন মাছ ধরার সময় ডিমওয়ালা মাছ ছেড়ে দেওয়া, যাতে নদীতে মাছ ফুরোয় না",
        en: "the ability to keep something going long-term without destroying resources or the future",
        hi: "सततता — भविष्य के संसाधन बचाते हुए चलने की क्षमता",
      },
      englishMeaning: "the quality of continuing long-term without harming people, resources or the planet",
      examples: [
        {
          en: "The hotel cut single-use plastic to improve its sustainability.",
          bn: "টেকসইতা বাড়াতে হোটেলটি একবার-ব্যবহারের প্লাস্টিক বাদ দিয়েছে।",
        },
        {
          en: "Sustainability now appears in every big company's yearly report.",
          bn: "এখন প্রতিটি বড় কোম্পানির বার্ষিক রিপোর্টে টেকসইতার কথা থাকে।",
        },
      ],
      tip: {
        bn: "adjective রূপ sustainable (টেকসই): 'sustainable growth', 'sustainable development goals (SDG)'। পরিবেশ-সংবাদে শব্দটা প্রায় প্রতিদিন আসে।",
        en: "Adjective: sustainable — 'sustainable growth', 'sustainable development goals (SDGs)'.",
        hi: "विशेषण: sustainable — 'sustainable growth' आदि।",
      },
      synonyms: ["viability", "durability", "renewability"],
      antonyms: ["wastefulness", "depletion"],
    },
  },
  {
    word: "urbanization",
    level: "advanced",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "আরবানাইজেশন",
      partOfSpeech: "noun",
      meaning: {
        bn: "নগরায়ণ — মানুষের ঢল গ্রাম থেকে শহরে, আর শহরের সীমানা দিনদিন ফুলেফেঁপে বিস্তার; গ্রাম ধীরে ধীরে শহর হয়ে যাওয়া",
        en: "the process of more people living in cities and towns growing bigger",
        hi: "नगरीकरण — गाँवों से शहरों की ओर बढ़ती आबादी और शहरों का विस्तार",
      },
      englishMeaning: "the growth of cities as more people move to live in them",
      examples: [
        {
          en: "Rapid urbanization is straining Dhaka's roads and drains.",
          bn: "দ্রুত নগরায়ণ ঢাকার রাস্তা-নর্দমার ওপর চাপ বাড়িয়ে দিয়েছে।",
        },
        {
          en: "Urbanization creates jobs, but also housing crises.",
          bn: "নগরায়ণ কর্মসংস্থান তৈরি করে, আবার বাসস্থান সংকটও আনে।",
        },
      ],
      tip: {
        bn: "সম্পর্কিত শব্দ: urbanize (ক্রিয়া), urban (বিশেষণ), urban sprawl (শহরের এলোমেলো বিস্তার)। অগণনযোগ্য বিমূর্ত ধারণা — বহুবচন নেই।",
        en: "Related: urbanize (verb), urban (adjective), urban sprawl (unplanned city spread). Uncountable noun.",
        hi: "संबंधित: urbanize, urban, urban sprawl। यह अगणनीय संज्ञा है।",
      },
      synonyms: ["city growth", "metropolitan expansion"],
      antonyms: ["counter-urbanization"],
    },
  },
  {
    word: "bureaucracy",
    level: "advanced",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "ব্যুরোক্রেসি",
      partOfSpeech: "noun",
      meaning: {
        bn: "আমলাতন্ত্র — নিয়ম, ফর্ম আর ছাড়পত্রের স্তরে স্তরে আটকে থাকা ব্যবস্থা; এক টুকরো সই করাতে পাঁচ টেবিল ঘোরার মতো",
        en: "a system with many complicated rules and officials that makes work slow",
        hi: "नौकरशाही — नियमों और फ़ाइलों की जटिल व्यवस्था जो काम धीमा कर देती है",
      },
      englishMeaning: "a complicated system of official rules and processes that works slowly",
      examples: [
        {
          en: "Startups suffer far less bureaucracy than old corporations.",
          bn: "পুরনো কর্পোরেশনের তুলনায় স্টার্টআপে আমলাতান্ত্রিক জটিলতা বহু কম।",
        },
        {
          en: "Citizens complained about the bureaucracy at the permit office.",
          bn: "অনুমতি দফতরের আমলাতন্ত্র নিয়ে নাগরিকরা অভিযোগ তোলেন।",
        },
      ],
      tip: {
        bn: "প্রায় সবসময় নেতিবাচক রঙে ব্যবহৃত; নিরপেক্ষ অর্থে 'civil service' লিখুন। একজন আমলা = bureaucrat, বিশেষণ = bureaucratic।",
        en: "Usually negative; for a neutral meaning say 'civil service'. One official = a bureaucrat; adjective = bureaucratic.",
        hi: "प्रायः नकारात्मक अर्थ में; तटस्थ शब्द 'civil service'। व्यक्ति = bureaucrat।",
      },
      synonyms: ["red tape", "officialdom"],
      antonyms: ["efficiency", "informality"],
    },
  },
  {
    word: "grassroots",
    level: "advanced",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "গ্রাসরুটস",
      partOfSpeech: "adjective",
      meaning: {
        bn: "তৃণমূল-পর্যায়ের — ওপর থেকে চাপিয়ে দেওয়া নয়, সাধারণ মানুষ বা মহল্লা-এলাকার নিচু স্তর থেকে জন্ম নেওয়া",
        en: "involving ordinary people at a local level, not leaders at the top",
        hi: "तृणमूल स्तर का — आम लोगों या स्थानीय स्तर से शुरू हुआ",
      },
      englishMeaning: "started and run by ordinary local people rather than top leaders",
      examples: [
        {
          en: "The campaign grew from grassroots support in small towns.",
          bn: "ছোট শহরগুলোর তৃণমূল সমর্থন থেকেই প্রচারণাটা বড় হয়ে ওঠে।",
        },
        {
          en: "A grassroots group cleans the river every weekend.",
          bn: "একটা তৃণমূল দল প্রতি সপ্তাহান্তে নদী পরিষ্কার করে।",
        },
      ],
      tip: {
        bn: "সাধারণত বিশেষণ হিসেবে চলে: grassroots movement, grassroots level, grassroots support। বাংলার 'তৃণমূল' শব্দটাই এর সবচেয়ে ঘনিষ্ঠ রূপ।",
        en: "Usually an adjective: grassroots movement, grassroots level, grassroots support. Bengali 'তৃণমূল' is the closest word.",
        hi: "प्रायः विशेषण: grassroots movement, grassroots level। हिंदी 'तृणमूल' समान है।",
      },
      synonyms: ["local", "community-based", "bottom-up"],
      antonyms: ["top-down"],
    },
  },
  {
    word: "reform",
    level: "advanced",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "রিফর্ম",
      partOfSpeech: "noun",
      meaning: {
        bn: "সংস্কার — পুরনো ব্যবস্থার ত্রুটি বসিয়ে সেটাকে আরও ন্যায্য ও কার্যকর করা; ধ্বংস নয়, মেরামত আর উন্নতি",
        en: "a change that improves a law, system or organization by fixing its faults",
        hi: "सुधार — व्यवस्था या क़ानून की कमियाँ ठीक करना",
      },
      englishMeaning: "a change made to improve a law, system or institution",
      examples: [
        {
          en: "Parliament passed education reform last night.",
          bn: "গতরাতে সংসদে শিক্ষা-সংস্কার পাস হয়েছে।",
        },
        {
          en: "Students demanded exam reform after the leaked papers.",
          bn: "প্রশ্নফাঁসের পর শিক্ষার্থীরা পরীক্ষা-ব্যবস্থার সংস্কার দাবি করে।",
        },
      ],
      tip: {
        bn: "noun ও verb দুটোই: 'tax reform' (বিশেষ্য), 'They reformed the tax system' (ক্রিয়া)। সংস্কারক = reformer।",
        en: "Both noun and verb: 'tax reform' / 'They reformed the system'. A person who pushes reform is a reformer.",
        hi: "संज्ञा और क्रिया दोनों: 'tax reform' / 'They reformed the system'।",
      },
      synonyms: ["overhaul", "improvement", "restructuring"],
      antonyms: ["stagnation", "status quo"],
    },
  },
  {
    word: "census",
    level: "advanced",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "সেনসাস",
      partOfSpeech: "noun",
      meaning: {
        bn: "আদমশুমারি — পুরো দেশের মানুষ একবারে গুনে নেওয়া; কে কোথায় থাকেন, কী করেন — সরকার সব হিসাব রাখে",
        en: "an official count of a country's people and their living conditions, done every few years",
        hi: "जनगणना — देश की जनसंख्या और उनकी स्थिति की सरकारी गिनती",
      },
      englishMeaning: "an official count of the population of a country",
      examples: [
        {
          en: "The census shows the town's population doubled in ten years.",
          bn: "আদমশুমারি বলছে, দশ বছরে শহরের জনসংখ্যা দ্বিগুণ হয়েছে।",
        },
        {
          en: "Census data decides where the new schools and hospitals go.",
          bn: "আদমশুমারির তথ্য দেখেই ঠিক হয় নতুন স্কুল-হাসপাতাল কোথায় হবে।",
        },
      ],
      tip: {
        bn: "বহুবচন: censuses। কলকেশন: conduct/carry out a census (আদমশুমারি চালানো)। সাবধান: census ≠ consensus (সবার সম্মতি) — বানান কাছাকাছি!",
        en: "Plural: censuses. Verb phrase: conduct a census. Careful: census (population count) ≠ consensus (agreement).",
        hi: "बहुवचन: censuses; 'conduct a census'। census (जनगणना) और consensus (सहमति) अलग हैं।",
      },
      synonyms: ["population count", "headcount"],
      antonyms: [],
    },
  },

  /* ─────────── Unit 3 · work · Business & negotiation (10) ─────────── */

  {
    word: "stakeholder",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "স্টেকহোল্ডার",
      partOfSpeech: "noun",
      meaning: {
        bn: "অংশীজন — যে ব্যক্তি বা দলের স্বার্থ কোনো প্রকল্প, প্রতিষ্ঠান বা সিদ্ধান্তে জড়িয়ে আছে; মালিক, কর্মী, গ্রাহক, অভিভাবক — সবাই অংশীজন",
        en: "a person or group with an interest in a project, company or decision",
        hi: "हितधारक — जिसका किसी परियोजना या निर्णय में हित जुड़ा है",
      },
      englishMeaning: "anyone who has an interest in a project, company or decision",
      examples: [
        {
          en: "Before launching, we asked every stakeholder for feedback.",
          bn: "লঞ্চের আগে প্রতিটি অংশীজনের কাছ থেকে মতামত নিয়েছিলাম।",
        },
        {
          en: "Teachers are key stakeholders in the new curriculum.",
          bn: "নতুন পাঠক্রমে শিক্ষকরাই মূল অংশীজন।",
        },
      ],
      tip: {
        bn: "stakeholder ≠ shareholder: shareholder কোম্পানির শেয়ারের মালিক, stakeholder-এর শুধু স্বার্থ আছে — shareholder নিজেই একজন stakeholder। মিটিং-ইংরেজিতে প্রায় প্রতিদিনের শব্দ।",
        en: "Stakeholder ≠ shareholder: a shareholder owns shares, a stakeholder has an interest — every shareholder is also a stakeholder.",
        hi: "Stakeholder ≠ shareholder: shareholder शेयर रखता है, stakeholder का हित है।",
      },
      synonyms: ["interested party", "participant", "player"],
      antonyms: [],
    },
  },
  {
    word: "liability",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "লায়াবিলিটি",
      partOfSpeech: "noun",
      meaning: {
        bn: "দায় — আইন বা টাকার জগতে যে দায়িত্বের জন্য ক্ষতিপূরণ দিতে হতে পারে; রোজকার ভাষায় 'বোঝা' অর্থেও — যে সদস্য টিমের ক্ষতি করে",
        en: "a legal or financial debt or duty you are responsible for; informally, a burden",
        hi: "दायित्व — क़ानूनी या आर्थिक ज़िम्मेदारी; बोझ",
      },
      englishMeaning: "something you are legally or financially responsible for; a burden",
      examples: [
        {
          en: "The company accepted full liability for the data breach.",
          bn: "তথ্য ফাঁসের পূর্ণ দায় কোম্পানি নিয়ে নিয়েছে।",
        },
        {
          en: "Without proper training, that old machine is a liability, not an asset.",
          bn: "যথাযথ প্রশিক্ষণ ছাড়া ওই পুরনো যন্ত্র সম্পদ নয়, বোঝা।",
        },
      ],
      tip: {
        bn: "হিসাবের খাতায় asset (সম্পদ) ↔ liability (দায়) বিপরীত স্তম্ভ। 'limited liability company' মানে মালিক ব্যক্তিগতভাবে কোম্পানির সব ঋণের জবাবদিহি দেবেন না।",
        en: "In accounting, assets and liabilities are opposite columns. A 'limited liability company' protects owners from personal responsibility for company debts.",
        hi: "लेखे में asset (संपत्ति) ↔ liability (दायित्व) विपरीत हैं।",
      },
      synonyms: ["debt", "obligation", "burden"],
      antonyms: ["asset", "advantage"],
    },
  },
  {
    word: "merger",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "মার্জার",
      partOfSpeech: "noun",
      meaning: {
        bn: "একীভূতকরণ — দুটি কোম্পানি মিলেমিশে এক হয়ে যাওয়া; দুই নদী মিলে এক স্রোত হওয়ার মতো",
        en: "when two companies join together to form one company",
        hi: "विलय — दो कंपनियों का मिलकर एक हो जाना",
      },
      englishMeaning: "the joining of two companies into one",
      examples: [
        {
          en: "The merger created the country's largest airline.",
          bn: "একীভূতকরণের ফলে দেশের বৃহত্তম এয়ারলাইন গড়ে উঠল।",
        },
        {
          en: "Staff are worried that the merger will cut jobs.",
          bn: "একীভূতকরণে চাকরি কমবে বলে কর্মীদের মধ্যে শঙ্কা।",
        },
      ],
      tip: {
        bn: "ক্রিয়া রূপ merge: 'The two banks merged last year'। প্যাটার্ন: 'merger of A and B', 'merger between A and B'। উল্টো ঘটনা হলো demerger বা split।",
        en: "Verb: merge — 'The two banks merged'. Patterns: 'merger of A and B'. The opposite event is a split or demerger.",
        hi: "क्रिया: merge — 'The two banks merged'। विपरीत: split/demerger।",
      },
      synonyms: ["combination", "consolidation", "amalgamation"],
      antonyms: ["split", "demerger"],
    },
  },
  {
    word: "leverage",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "লেভারেজ",
      partOfSpeech: "noun",
      meaning: {
        bn: "চাপ সৃষ্টির জোগাড় করা সুবিধা — কোনো অবস্থান বা সম্পদ কাজে লাগিয়ে বড় ফল পাওয়া; লাঠি দিয়ে বড় পাথর তোলার মতো। আর্থিক অর্থে: ধারের টাকায় লগ্নি বাড়ানো",
        en: "the power or advantage you use to get what you want; in finance, using borrowed money to increase returns",
        hi: "प्रभाव की शक्ति; वित्त में उधार लेकर निवेश बढ़ाना",
      },
      englishMeaning: "influence or advantage used to get a better result; borrowed money used in investing",
      examples: [
        {
          en: "The union used the strike threat as leverage in the talks.",
          bn: "আলোচনায় ধর্মঘটের হুমকিকে ইউনিয়ন চাপ সৃষ্টির জোর হিসেবে কাজে লাগায়।",
        },
        {
          en: "The negotiator had leverage — she already knew the rival's price.",
          bn: "মধ্যস্থতাকারীর হাতে জোর ছিল — প্রতিপক্ষের দাম তিনি আগেই জানতেন।",
        },
      ],
      tip: {
        bn: "আধুনিক ব্যবহারে ক্রিয়াও চলে, মানে 'ভালোভাবে কাজে লাগানো': 'leverage your skills', 'leverage your network'। উচ্চারণে শেষ ভাগ 'রেজ'।",
        en: "Modern use includes the verb 'to leverage' = use well: 'leverage your skills', 'leverage your network'.",
        hi: "आधुनिक प्रयोग में क्रिया भी: 'leverage your skills' = अपनी ताक़त का भरपूर इस्तेमाल।",
      },
      synonyms: ["influence", "advantage", "clout"],
      antonyms: ["weakness", "disadvantage"],
    },
  },
  {
    word: "incentive",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "ইনসেনটিভ",
      partOfSpeech: "noun",
      meaning: {
        bn: "প্রণোদনা — যে সুবিধা, পুরস্কার বা ছাড় কাউকে কিছু করতে উদ্বুদ্ধ করে; ভালো ফলের জন্য বোনাস পাওয়ার মতো",
        en: "something that encourages a person to do something — a reward or benefit",
        hi: "प्रोत्साहन — काम करने के लिए दिया जाने वाला लाभ या इनाम",
      },
      englishMeaning: "a reward or benefit that makes someone want to do something",
      examples: [
        {
          en: "The sales team gets a quarterly bonus as an incentive.",
          bn: "প্রণোদনা হিসেবে বিক্রির দল প্রতি তিন মাসে বোনাস পায়।",
        },
        {
          en: "Tax incentives attracted new factories to the region.",
          bn: "কর-ছাড়ের প্রণোদনায় অঞ্চলটিতে নতুন কারখানা এসেছে।",
        },
      ],
      tip: {
        bn: "প্যাটার্ন: 'an incentive to do something', 'financial incentives'। incentive বাইরে থেকে দেওয়া সুবিধা; motivation ভেতরের চাহিদা থেকেও হতে পারে।",
        en: "Pattern: 'an incentive to do something'. An incentive is given from outside; motivation can also come from within.",
        hi: "पैटर्न: 'an incentive to do something'। incentive बाहरी, motivation भीतरी भी हो सकती है।",
      },
      synonyms: ["reward", "inducement", "motivation"],
      antonyms: ["disincentive", "deterrent"],
    },
  },
  {
    word: "contingency",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "কনটিনজেন্সি",
      partOfSpeech: "noun",
      meaning: {
        bn: "আপতকালীন অনিশ্চিত ঘটনা ও তার জন্য বিকল্প প্রস্তুতি — 'যদি পরিকল্পনা ভেঙে যায়?' সেই 'যদি'-র জবাব আগেই গুছিয়ে রাখা",
        en: "a possible future event, especially a problem, and a plan prepared for it",
        hi: "आकस्मिकता — भविष्य की संभावित समस्या और उसकी तैयारी",
      },
      englishMeaning: "a possible future problem, and a plan kept ready for it",
      examples: [
        {
          en: "The project keeps a contingency fund for delays.",
          bn: "প্রকল্পে বিলম্বের জন্য আপতকালীন তহবিল রাখা হয়েছে।",
        },
        {
          en: "Bad weather is a contingency every outdoor event plans for.",
          bn: "খোলা মাঠের অনুষ্ঠান বৃষ্টি-বিপর্যয়ের জন্য আগেই বিকল্প ঠিক করে রাখে।",
        },
      ],
      tip: {
        bn: "সবচেয়ে কাজের কলকেশন: contingency plan (বিকল্প পরিকল্পনা), contingency fund (জরুরি তহবিল)। 'for every contingency' = যে-কোনো আপতকালের জন্য।",
        en: "Key phrases: contingency plan, contingency fund. 'Cover every contingency' = be ready for anything.",
        hi: "मुख्य वाक्यांश: contingency plan, contingency fund।",
      },
      synonyms: ["emergency", "eventuality", "possibility"],
      antonyms: ["certainty"],
    },
  },
  {
    word: "monopoly",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "মনোপলি",
      partOfSpeech: "noun",
      meaning: {
        bn: "একচেটিয়া আধিপত্য — পুরো বাজার বা সেবা শুধু এক দলের হাতে; প্রতিযোগী না থাকায় দাম আর নিয়ম সেটাই চালায়",
        en: "complete control of a market or service by one company, with no real competitors",
        hi: "एकाधिकार — पूरे बाज़ार पर एक कंपनी का नियंत्रण",
      },
      englishMeaning: "when one company controls a whole market with no real competition",
      examples: [
        {
          en: "Regulators accused the platform of building a monopoly.",
          bn: "নিয়ন্ত্রকেরা অভিযোগ করে, প্ল্যাটফর্মটি একচেটিয়া আধিপত্য গড়েছে।",
        },
        {
          en: "The state railway has a monopoly on freight transport.",
          bn: "মালবাহী পরিবহনে রাষ্ট্রীয় রেলের একচেটিয়া দখল।",
        },
      ],
      tip: {
        bn: "প্যাটার্ন: 'a monopoly on/in something'। বহুবচন: monopolies। জনপ্রিয় বোর্ড গেম Monopoly-র নামও এখান থেকে — সব সম্পত্তি একজনের!",
        en: "Pattern: 'a monopoly on/in something'. Plural: monopolies. The board game Monopoly is named after this idea.",
        hi: "पैटर्न: 'a monopoly on/in something'; बहुवचन: monopolies।",
      },
      synonyms: ["exclusive control", "domination"],
      antonyms: ["competition", "open market"],
    },
  },
  {
    word: "audit",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "অডিট",
      partOfSpeech: "noun",
      meaning: {
        bn: "নিরীক্ষা — হিসাব, নথি বা পদ্ধতি জাঁতাকলে তুলে পরীক্ষা করা; প্রতিটি সারি মিলিয়ে দেখা যে সবকিছু ঠিকঠাক আছে কি না",
        en: "an official check of accounts, records or processes to make sure they are correct",
        hi: "लेखापरीक्षा — हिसाब-किताब की आधिकारिक जाँच",
      },
      englishMeaning: "an official examination of accounts or records",
      examples: [
        {
          en: "The accounts passed the annual audit without a single error.",
          bn: "বার্ষিক নিরীক্ষায় হিসাবে একটি ভুলও ধরা পড়েনি।",
        },
        {
          en: "An energy audit cut the office's power bill by 20%.",
          bn: "একটা শক্তি নিরীক্ষায় অফিসের বিদ্যুৎ বিল ২০% কমে যায়।",
        },
      ],
      tip: {
        bn: "noun ও verb দুটোই: 'a tax audit', 'They audited the file'। শুধু হিসাব নয় — energy audit, security audit বা নিজের দিনের 'life audit' পর্যন্ত চলে।",
        en: "Both noun and verb: 'a tax audit', 'They audited the file'. Used far beyond money — energy audit, security audit.",
        hi: "संज्ञा और क्रिया दोनों: 'a tax audit', 'They audited the file'।",
      },
      synonyms: ["inspection", "review", "examination"],
      antonyms: [],
    },
  },
  {
    word: "benchmark",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "বেঞ্চমার্ক",
      partOfSpeech: "noun",
      meaning: {
        bn: "তুলনার মানদণ্ড — যে স্তরের সঙ্গে মিলিয়ে দেখা হয় নিজের কাজ ঠিক আছে কি না; সেরা পরীক্ষার্থীর নম্বরের রেখা টেনে বাকিদের মাপার মতো",
        en: "a standard or reference point used to compare and judge quality",
        hi: "मानक — तुलना और गुणवत्ता मापने का आधार",
      },
      englishMeaning: "a standard against which things can be measured or compared",
      examples: [
        {
          en: "This entrance exam is the benchmark for the whole industry.",
          bn: "এই ভর্তি পরীক্ষাই পুরো শিল্পের মানদণ্ড।",
        },
        {
          en: "Set a benchmark: answer forty questions in thirty minutes.",
          bn: "মানদণ্ড ঠিক করুন: ত্রিশ মিনিটে চল্লিশটা প্রশ্নের উত্তর।",
        },
      ],
      tip: {
        bn: "noun ও verb: 'benchmark your process against rivals'। 'set a benchmark' (মানদণ্ড গড়া) আর 'meet a benchmark' (মানদণ্ড পূরণ করা) — দুটোই কাজে লাগে।",
        en: "Noun and verb: 'benchmark your process against rivals'. Also 'set a benchmark' and 'meet a benchmark'.",
        hi: "संज्ञा व क्रिया दोनों: 'benchmark your process against rivals'।",
      },
      synonyms: ["standard", "yardstick", "reference point"],
      antonyms: [],
    },
  },
  {
    word: "arbitrate",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "আরবিট্রেট",
      partOfSpeech: "verb",
      meaning: {
        bn: "মধ্যস্থতা করে রায় দেওয়া — দুই পক্ষের বিরোধে নিরপেক্ষ হয়ে চূড়ান্ত সিদ্ধান্ত শোনানো; মুরুব্বির ভূমিকা, তবে আনুষ্ঠানিক",
        en: "to officially settle a disagreement between two sides by making a decision",
        hi: "मध्यस्थता करना — दो पक्षों के विवाद का आधिकारिक फ़ैसला सुनाना",
      },
      englishMeaning: "to settle a dispute between two sides by making an official decision",
      examples: [
        {
          en: "An independent expert arbitrated the contract dispute.",
          bn: "চুক্তির বিরোধে স্বাধীন এক বিশেষজ্ঞ মধ্যস্থতা করেন।",
        },
        {
          en: "The coach arbitrated the row between the two players.",
          bn: "দুই খেলোয়াড়ের ঝগড়ায় কোচ মুরুব্বিয়ানা করেন।",
        },
      ],
      tip: {
        bn: "arbitrate (পক্ষের হয়ে সিদ্ধান্ত দেন) আর mediate (পক্ষদুটিকে মিলিয়ে দেন, রায় দেন না) — ফারাকটা ইন্টারভিউতে কাজে লাগে। noun: arbitration।",
        en: "Arbitrate = decide for the two sides; mediate = help them agree without deciding. Noun: arbitration.",
        hi: "Arbitrate = फ़ैसला सुनाना; mediate = समझौता करवाना। संज्ञा: arbitration।",
      },
      synonyms: ["mediate", "adjudicate", "referee"],
      antonyms: [],
    },
  },

  /* ─────────── Unit 4 · academic · Research & evidence (10) ─────────── */

  {
    word: "hypothesis",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "হাইপোথেসিস",
      partOfSpeech: "noun",
      meaning: {
        bn: "গবেষণার অনুমান — পরীক্ষার আগে দাঁড় করানো সম্ভাব্য ব্যাখ্যা; 'যদি এমন হয়, তাহলে অমুক ঘটবে' — যাচাই করে তবেই বিশ্বাস করা",
        en: "a testable idea or explanation proposed before it is proved",
        hi: "परिकल्पना — प्रमाण से पहले दी गई जाँच-योग्य व्याख्या",
      },
      englishMeaning: "an idea that you test with experiments before accepting it",
      examples: [
        {
          en: "Our hypothesis failed — the drug showed no effect.",
          bn: "আমাদের অনুমান গলে গেল — ওষুধে কোনো প্রভাব দেখা গেল না।",
        },
        {
          en: "Test one hypothesis at a time for clean results.",
          bn: "পরিষ্কার ফলের জন্য একবারে একটা অনুমানই যাচাই করুন।",
        },
      ],
      tip: {
        bn: "বহুবচন: hypotheses। স্তরটা মনে রাখুন: hypothesis (যাচাই-বাকি অনুমান) → theory (প্রচুর প্রমাণ-সমর্থিত); বিজ্ঞানে কিছুই চিরকাল 'চূড়ান্ত' নয়।",
        en: "Plural: hypotheses. Ladder to remember: hypothesis (untested guess) → theory (backed by lots of evidence).",
        hi: "बहुवचन: hypotheses। hypothesis (अनुमान) → theory (प्रमाणसिद्ध व्याख्या)।",
      },
      synonyms: ["assumption", "conjecture", "proposition"],
      antonyms: ["proof"],
    },
  },
  {
    word: "empirical",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "এমপিরিক্যাল",
      partOfSpeech: "adjective",
      meaning: {
        bn: "পর্যবেক্ষণ-পরীক্ষানির্ভর — শুধু তত্ত্ব বা ধারণায় নয়, হাতে-কলমে তথ্যে দাঁড়ানো; রান্না না চেখে স্বাদ বিশ্বাস না করার মতো",
        en: "based on observation, experiments and real data, not just theory",
        hi: "अनुभवसिद्ध — अवलोकन और प्रयोग के आधार पर",
      },
      englishMeaning: "based on real observations and data, not only on ideas",
      examples: [
        {
          en: "The claim needs empirical evidence, not opinions.",
          bn: "দাবিটার দরকার পর্যবেক্ষণের প্রমাণ, মতামত নয়।",
        },
        {
          en: "Empirical studies show the method works in most classrooms.",
          bn: "পরীক্ষানির্ভর গবেষণায় দেখা যায়, পদ্ধতিটা বেশিরভাগ ক্লাসরুমেই কাজ করে।",
        },
      ],
      tip: {
        bn: "empirical ↔ theoretical জোড়া মনে রাখুন। গবেষণায় হরহামেশা আসে: empirical data, empirical evidence, empirical study।",
        en: "Empirical ↔ theoretical is a classic pair. Common phrases: empirical data, empirical evidence, empirical study.",
        hi: "Empirical ↔ theoretical एक जोड़ी है; 'empirical evidence' आम वाक्यांश।",
      },
      synonyms: ["evidence-based", "observational"],
      antonyms: ["theoretical", "speculative"],
    },
  },
  {
    word: "correlation",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "কোরিলেশন",
      partOfSpeech: "noun",
      meaning: {
        bn: "সহসম্পর্ক — দুটি জিনিস একসঙ্গে বাড়ে বা কমে, অর্থাৎ ওঠানামায় মিল আছে; কিন্তু একটা আরেকটার কারণ — এমন নিশ্চয়তা এখনো নয়",
        en: "a link where two things rise or fall together, without proving one causes the other",
        hi: "सहसंबंध — दो चीज़ों का साथ-साथ बदलना",
      },
      englishMeaning: "a connection where two things change together",
      examples: [
        {
          en: "The study found a correlation between sleep and exam scores.",
          bn: "গবেষণায় ঘুম আর পরীক্ষার নম্বরের মধ্যে সহসম্পর্ক পাওয়া গেছে।",
        },
        {
          en: "The chart shows a strong correlation between ice-cream sales and heat.",
          bn: "চার্টে দেখা যায়, বরফকুচির বিক্রি আর গরমের মধ্যে জোরালো সহসম্পর্ক।",
        },
      ],
      tip: {
        bn: "ডেটার আলোচনায় সোনার বাক্য: correlation ≠ causation — সহসম্পর্ক মানেই কার্যকারণ নয়। জোরালো প্রকাশ: 'a strong/weak correlation between A and B'।",
        en: "Golden phrase in data talk: correlation ≠ causation. Say 'a strong/weak correlation between A and B'.",
        hi: "डेटा-चर्चा का सुनहरा नियम: correlation ≠ causation।",
      },
      synonyms: ["association", "link", "relationship"],
      antonyms: [],
    },
  },
  {
    word: "methodology",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "মেথডলোজি",
      partOfSpeech: "noun",
      meaning: {
        bn: "গবেষণাপদ্ধতি — কোন ধাপে, কোন যন্ত্রে, কোন নিয়মে তথ্য জোগাড় ও বিশ্লেষণ হলো, তার পূর্ণ নকশা; রেসিপির মতো ধাপে ধাপে লেখা",
        en: "the planned system of methods a researcher uses to gather and analyse data",
        hi: "कार्यप्रणाली — शोध में तरीक़ों की योजना",
      },
      englishMeaning: "the planned set of methods used in a piece of research",
      examples: [
        {
          en: "The thesis describes its methodology in chapter three.",
          bn: "থিসিসের তৃতীয় অধ্যায়ে গবেষণাপদ্ধতির বর্ণনা আছে।",
        },
        {
          en: "Critics questioned the methodology of the survey.",
          bn: "জরিপের পদ্ধতি নিয়ে সমালোচকেরা প্রশ্ন তোলেন।",
        },
      ],
      tip: {
        bn: "methodology (পুরো নকশা) ≠ method (একটা টুল) — 'survey' একটা method, 'কেন-কীভাবে-কোন ক্রমে' তা-ই methodology। রিভিউয়াররা প্রায়ই এই অধ্যায়টা আগে পড়েন।",
        en: "Methodology (the whole design) ≠ method (one tool). Reviewers often read the methodology chapter first.",
        hi: "Methodology = पूरी योजना; method = एक तरीक़ा।",
      },
      synonyms: ["approach", "framework", "procedure"],
      antonyms: [],
    },
  },
  {
    word: "synthesis",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "সিনথেসিস",
      partOfSpeech: "noun",
      meaning: {
        bn: "সংশ্লেষণ — অনেক সূত্রের ভাব বা তথ্য মিশিয়ে নতুন এক সামগ্রিক চিত্র গড়া; আলাদা উপকরণে এক খিচুড়ি রান্নার মতো, ফলটা কোনো উপকরণেরই চেয়ে আলাদা",
        en: "combining ideas or findings from many sources into one new whole",
        hi: "संश्लेषण — कई स्रोतों को मिलाकर नया निष्कर्ष बनाना",
      },
      englishMeaning: "the combining of separate ideas or findings into a new whole",
      examples: [
        {
          en: "Her essay is a synthesis of twenty field reports.",
          bn: "তার রচনাটা বিশটা মাঠ-রিপোর্টের সংশ্লেষণ।",
        },
        {
          en: "The breakthrough came from a synthesis of two old theories.",
          bn: "দুই পুরনো তত্ত্বের মেলবন্ধন থেকেই এল বিরাট সাফল্য।",
        },
      ],
      tip: {
        bn: "analysis (ভাঙা) ↔ synthesis (গড়া) — এই জোড়া পরীক্ষা ও থিসিসে বারবার আসে। রসায়নে অর্থ আলাদা: নতুন যৌগ তৈরি করা।",
        en: "Analysis (breaking down) ↔ synthesis (building up) — a classic exam pair. In chemistry it means making a new compound.",
        hi: "Analysis (तोड़ना) ↔ synthesis (जोड़ना) — परीक्षा की जोड़ी। रसायन में इसका अर्थ अलग है।",
      },
      synonyms: ["combination", "integration", "amalgamation"],
      antonyms: ["analysis", "separation"],
    },
  },
  {
    word: "paradigm",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "প্যারাডাইম",
      partOfSpeech: "noun",
      meaning: {
        bn: "চিন্তার কাঠামো বা প্রতিমান — কোনো ক্ষেত্রে যুগে যুগে চলে আসা প্রচলিত ভাবনার নকশা; 'সূর্য ঘুরে যায়' থেকে 'পৃথিবী ঘোরে' — নকশাটাই বদলে গেল",
        en: "the accepted model or way of thinking in a field, which can later be replaced",
        hi: "प्रतिमान — किसी क्षेत्र की स्वीकृत सोच का ढाँचा",
      },
      englishMeaning: "a typical model or pattern of thinking shared by a field",
      examples: [
        {
          en: "Remote work changed the paradigm of the nine-to-five office.",
          bn: "রিমোট কাজ নয়টা-পাঁচটা অফিসের চিন্তার কাঠামোই বদলে দিয়েছে।",
        },
        {
          en: "The discovery created a new paradigm in physics.",
          bn: "আবিষ্কারটি পদার্থবিজ্ঞানে নতুন প্রতিমানের জন্ম দিল।",
        },
      ],
      tip: {
        bn: "সবচেয়ে জনপ্রিয় কলকেশন 'paradigm shift' — যুগান্তকারী বদল বোঝাতে। উচ্চারণ 'প্যারাডাইম' — মাঝে জি নয়; বহুবচন paradigms।",
        en: "The famous phrase is 'paradigm shift' — a major change in how a field thinks. Say pa-ra-DIME.",
        hi: "प्रसिद्ध वाक्यांश 'paradigm shift' — क्षेत्र की सोच में बड़ा बदलाव।",
      },
      synonyms: ["model", "framework", "worldview"],
      antonyms: [],
    },
  },
  {
    word: "criterion",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "ক্রাইটিরিয়ন",
      partOfSpeech: "noun",
      meaning: {
        bn: "নির্ণায়ক — রায় দেওয়ার একক মাপকাঠি; 'ভালো উত্তর' মানে ঠিক কী, তার সংজ্ঞা — যার ওপর নম্বর তোলা হয়",
        en: "a single standard or rule used to judge or choose something",
        hi: "मापदंड — निर्णय या चयन का आधार",
      },
      englishMeaning: "a standard by which something is judged or decided",
      examples: [
        {
          en: "The only criterion for the prize is originality.",
          bn: "পুরস্কারের একমাত্র নির্ণায়ক মৌলিকতা।",
        },
        {
          en: "Cost is one criterion, but safety matters more.",
          bn: "খরচ একটা মাপকাঠি মাত্র; নিরাপত্তা তার চেয়ে জরুরি।",
        },
      ],
      tip: {
        bn: "এক criterion, বহু criteria — তাই 'the criteria is' ভুল, লিখুন 'the criteria are'। মিলিয়ে দেখা: 'meets the criteria' = যোগ্য হওয়া।",
        en: "One criterion, many criteria — so say 'the criteria are', not 'the criteria is'. 'Meet the criteria' = qualify.",
        hi: "एक criterion, अनेक criteria — 'the criteria are' कहें।",
      },
      synonyms: ["standard", "measure", "yardstick"],
      antonyms: [],
    },
  },
  {
    word: "anomaly",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "অ্যানোমালি",
      partOfSpeech: "noun",
      meaning: {
        bn: "ব্যতিক্রম — প্যাটার্নের বাইরে চোখে পড়া তথ্য বা ঘটনা; শ্রেণিতে বাকিরা সমান লম্বা, একজন পাহাড়সমান — সে-ই ব্যতিক্রম",
        en: "something unusual that does not fit the normal pattern or expectation",
        hi: "असंगति — सामान्य ढाँचे से अलग असामान्य चीज़",
      },
      englishMeaning: "a thing that is different from what is normal or expected",
      examples: [
        {
          en: "One surprisingly high score stood out as an anomaly in the results.",
          bn: "ফলে হঠাৎ একটা অস্বাভাবিক উঁচু নম্বর ব্যতিক্রম হয়ে চোখে পড়ল।",
        },
        {
          en: "Every missing receipt was treated as an anomaly to investigate.",
          bn: "হারানো প্রতিটি রশিদকে অনুসন্ধানযোগ্য ব্যতিক্রম ধরা হলো।",
        },
      ],
      tip: {
        bn: "বিশেষণ: anomalous। মনে রাখুন — ডেটায় anomaly মানেই ভুল নয়; অনেক আবিষ্কার ঠিক এই ব্যতিক্রম থেকেই জন্মেছে।",
        en: "Adjective: anomalous. An anomaly is not always a mistake — many discoveries began as anomalies.",
        hi: "विशेषण: anomalous। Anomaly हमेशा ग़लती नहीं होती।",
      },
      synonyms: ["irregularity", "outlier", "exception"],
      antonyms: ["norm", "regularity"],
    },
  },
  {
    word: "prevalent",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "প্রেভালেন্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "বহুল প্রচলিত — কোনো জায়গা, সময় বা দলে খুব বেশি দেখা যায় এমন; বর্ষায় ডেঙ্গুর মতো চারদিকে ছড়িয়ে থাকা",
        en: "common and widespread in a particular place, time or group",
        hi: "प्रचलित — किसी जगह, समय या समूह में बहुत आम",
      },
      englishMeaning: "very common in a particular place or among a group",
      examples: [
        {
          en: "Cashless payment is increasingly prevalent in the cities.",
          bn: "শহরগুলোতে নগদবিহীন পেমেন্ট ক্রমেই প্রচলিত হচ্ছে।",
        },
        {
          en: "Sleep loss is prevalent among final-year students.",
          bn: "শেষ বর্ষের শিক্ষার্থীদের মধ্যে ঘুমের অভাব বহুল।",
        },
      ],
      tip: {
        bn: "প্যাটার্ন: 'prevalent in/among'। noun রূপ prevalence — জনস্বাস্থ্যে 'prevalence rate' (রোগের বিস্তারের হার) প্রতিদিনের শব্দ।",
        en: "Pattern: 'prevalent in/among'. Noun: prevalence — 'the prevalence rate' is a daily term in public health.",
        hi: "पैटर्न: 'prevalent in/among'; संज्ञा: prevalence।",
      },
      synonyms: ["widespread", "common", "ubiquitous"],
      antonyms: ["rare", "uncommon", "scarce"],
    },
  },
  {
    word: "substantiate",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "সাবস্ট্যানশিয়েট",
      partOfSpeech: "verb",
      meaning: {
        bn: "প্রমাণে মজবুত করা — কথা বা দাবিকে হাড্ডিসার তথ্য দিয়ে সমর্থন করা; খালি দাবি নয়, সার্টিফিকেটসহ পেশ করার মতো",
        en: "to support a claim with solid evidence so people believe it",
        hi: "प्रमाण देकर दावा सिद्ध करना",
      },
      englishMeaning: "to give real evidence that a claim is true",
      examples: [
        {
          en: "She substantiated her claim with three years of sales data.",
          bn: "তিন বছরের বিক্রির তথ্য দিয়ে দাবিটা প্রমাণ করে দেখান।",
        },
        {
          en: "The newspaper apologised — it could not substantiate the story.",
          bn: "পত্রিকা ক্ষমা চাইল — খবরের পক্ষে প্রমাণ দেখাতে পারেনি।",
        },
      ],
      tip: {
        bn: "কলকেশন: substantiate a claim/charge/allegation। refute-এর ঠিক উল্টো — একজন substantiate করেন, অন্যজন refute করার চেষ্টা করেন; গবেষণাপত্রে দুটোই হরহামেশা আসে।",
        en: "Phrases: substantiate a claim / a charge / an allegation. It is the opposite of refute.",
        hi: "वाक्यांश: substantiate a claim/allegation; यह refute का विपरीत है।",
      },
      synonyms: ["verify", "prove", "corroborate"],
      antonyms: ["refute", "disprove"],
    },
  },

  /* ─────────── Unit 5 · general · Personality & nuance (7) ─────────── */

  {
    word: "resilient",
    level: "advanced",
    category: "general",
    unit: 5,
    data: {
      pronunciation: "রেজিলিয়েন্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "টেকসই মনোবলের — ধাক্কা খেয়েও দ্রুত ফিরে দাঁড়ানো; রাবার বলের মতো — চাপে নেমে যায়, ছেড়ে দিলেই লাফিয়ে ওঠে",
        en: "able to stay strong and recover quickly after problems or shocks",
        hi: "मज़बूत-दिल — मुश्किल के बाद जल्दी संभल जाने वाला",
      },
      englishMeaning: "able to recover quickly from difficulties",
      examples: [
        {
          en: "Resilient students treat a failed test as feedback, not defeat.",
          bn: "স্থিতিস্থাপক শিক্ষার্থীরা ফেল করা পরীক্ষাকে পরাজয় নয়, মতামত মনে করে।",
        },
        {
          en: "The local shops proved resilient after the flood.",
          bn: "বন্যার পর স্থানীয় দোকানগুলো ঘুরে দাঁড়ানোর প্রমাণ দিয়েছে।",
        },
      ],
      tip: {
        bn: "noun রূপ resilience। চাকরির ইন্টারভিউতে নিজের বেলায় বললে ভালো লাগে: 'I stay resilient under pressure' — ছোট একটা নিজের গল্পসহ বলুন।",
        en: "Noun: resilience. In job interviews, say 'I stay resilient under pressure' — and add a short story.",
        hi: "संज्ञा: resilience। इंटरव्यू में 'I stay resilient under pressure' बोलें।",
      },
      synonyms: ["tough", "adaptable", "hardy"],
      antonyms: ["fragile", "vulnerable"],
    },
  },
  {
    word: "indifferent",
    level: "advanced",
    category: "general",
    unit: 5,
    data: {
      pronunciation: "ইনডিফারেন্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "উদাসীন — যে ব্যাপারে আগ্রহ বা যত্ন দুটোই নেই; 'হোক বা না-হোক' ভাব চোখের ভঙ্গিতে স্পষ্ট",
        en: "not interested in or caring about something",
        hi: "उदासीन — जिसमें रुचि या चिंता नहीं",
      },
      englishMeaning: "showing no interest or care about something",
      examples: [
        {
          en: "He stayed indifferent to the office gossip.",
          bn: "অফিসের গুজব নিয়ে সে একেবারে উদাসীন ছিল।",
        },
        {
          en: "Many customers seem indifferent to eco-friendly packaging.",
          bn: "অনেক গ্রাহক পরিবেশবান্ধব প্যাকেজিং নিয়ে নিরাসক্ত বলে মনে হয়।",
        },
      ],
      tip: {
        bn: "প্যাটার্ন: 'indifferent to/towards something'। খেয়াল রাখুন — indifferent মানে 'মিশ্র মত' নয়, মানে নিরাসক্ত। noun: indifference।",
        en: "Pattern: 'indifferent to/towards something'. Careful: indifferent does not mean 'mixed feelings' — it means no interest. Noun: indifference.",
        hi: "पैटर्न: 'indifferent to/towards'। इसका अर्थ 'मिश्रित राय' नहीं, 'उदासीन' है।",
      },
      synonyms: ["unconcerned", "apathetic", "detached"],
      antonyms: ["interested", "caring", "concerned"],
    },
  },
  {
    word: "apprehensive",
    level: "advanced",
    category: "general",
    unit: 5,
    data: {
      pronunciation: "অ্যাপ্রিহেনসিভ",
      partOfSpeech: "adjective",
      meaning: {
        bn: "আশঙ্কায় অস্থির — সামনে কিছু ঘটবে ভেবে বুকের ভেতর হালকা ভয়-দুশ্চিন্তা; পরীক্ষার হলে ঢোকার আগের অনুভূতি",
        en: "worried and slightly afraid that something bad may happen",
        hi: "आशंकित — भविष्य की चिंता में हल्का डर",
      },
      englishMeaning: "slightly worried or afraid about something in the future",
      examples: [
        {
          en: "First-day interns are often apprehensive about speaking up.",
          bn: "প্রথম দিনের ইন্টার্নরা কথা বলতে গিয়ে প্রায়ই আশঙ্কায় থাকে।",
        },
        {
          en: "She felt apprehensive before the final interview.",
          bn: "শেষ ইন্টারভিউয়ের আগে তার বুক দুশ্চিন্তায় কাঁপছিল।",
        },
      ],
      tip: {
        bn: "প্যাটার্ন: 'apprehensive about something'। ভয়ের সিঁড়ি মনে রাখুন: uneasy < apprehensive < terrified। apprehend (গ্রেপ্তার করা) শব্দটা একই পরিবারের, তবে অর্থ আলাদা।",
        en: "Pattern: 'apprehensive about something'. Fear ladder: uneasy < apprehensive < terrified. Not the same as 'apprehend' (to arrest).",
        hi: "पैटर्न: 'apprehensive about something'। डर की सीढ़ी: uneasy < apprehensive < terrified।",
      },
      synonyms: ["anxious", "nervous", "uneasy"],
      antonyms: ["calm", "confident", "reassured"],
    },
  },
  {
    word: "elated",
    level: "advanced",
    category: "general",
    unit: 5,
    data: {
      pronunciation: "ইলেটেড",
      partOfSpeech: "adjective",
      meaning: {
        bn: "উল্লসিত — সাফল্য বা সুখবরে সাতসমুদ্র পার হওয়া আনন্দ; শেষ মুহূর্তের গোলে গ্যালারি যা হয়, তেমন",
        en: "extremely happy and excited, usually after good news",
        hi: "उल्लसित — अच्छी ख़बर से ख़ुशी से भरा हुआ",
      },
      englishMeaning: "feeling extremely happy and excited",
      examples: [
        {
          en: "She was elated when her research paper got accepted.",
          bn: "গবেষণাপত্র গৃহীত হলে সে আনন্দে উল্লসিত হয়ে ওঠে।",
        },
        {
          en: "The whole family was elated by the exam results.",
          bn: "পরীক্ষার ফল শুনে গোটা পরিবার উল্লসিত।",
        },
      ],
      tip: {
        bn: "মাত্রার সিঁড়ি: happy < delighted < elated। কলকেশন: 'absolutely elated', 'elated by/at something'। উল্টো দিক: dejected মানে ভেঙে-পড়া।",
        en: "Ladder: happy < delighted < elated. Phrases: 'absolutely elated', 'elated by/at something'. Opposite: dejected.",
        hi: "सीढ़ी: happy < delighted < elated; विपरीत: dejected।",
      },
      synonyms: ["overjoyed", "thrilled", "euphoric"],
      antonyms: ["dejected", "miserable", "crestfallen"],
    },
  },
  {
    word: "complacent",
    level: "advanced",
    category: "general",
    unit: 5,
    data: {
      pronunciation: "কমপ্লেসেন্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "আত্মতৃপ্তির ঘুমে ঢিলেঢালা — বিপদ আসতে পারে ভেবেও না ভেবে 'সব ঠিক আছে' ভাবা; সহজ সিরিজ জিতে অনুশীলন ছেড়ে দেওয়া দলের মতো",
        en: "too relaxed and sure of yourself because you see no danger or need for effort",
        hi: "आत्मसंतुष्ट — बिना किसी ख़तरे के सहज हो जाना",
      },
      englishMeaning: "feeling too safe and satisfied, so you stop trying or being careful",
      examples: [
        {
          en: "Complacent teams lose to hungry newcomers.",
          bn: "আত্মতৃপ্ত দল হারে ক্ষুধার্ত নতুন প্রতিযোগীদের কাছে।",
        },
        {
          en: "Don't get complacent after one good review.",
          bn: "একটা ভালো রিভিউ পেলেই ঢিলে হয়ে যাবেন না।",
        },
      ],
      tip: {
        bn: "প্রায় সবসময় সমালোচনামূলক শব্দ — প্রশংসা নয়। complacent ≠ confident: একজন ঘুমন্ত-তৃপ্ত, আরেকজন প্রস্তুত-সজাগ। প্যাটার্ন: 'complacent about something'।",
        en: "Almost always a criticism, never praise. Complacent ≠ confident: one is dozing, the other is prepared. Pattern: 'complacent about something'.",
        hi: "प्रायः आलोचना में; complacent ≠ confident। पैटर्न: 'complacent about something'।",
      },
      synonyms: ["smug", "self-satisfied"],
      antonyms: ["vigilant", "careful", "alert"],
    },
  },
  {
    word: "pragmatic",
    level: "advanced",
    category: "general",
    unit: 5,
    data: {
      pronunciation: "প্র্যাগম্যাটিক",
      partOfSpeech: "adjective",
      meaning: {
        bn: "বাস্তবমুখী — আদর্শের আকাশ নয়, যেটা এখন কাজে দেয় সেটাই করা; 'গাড়ি চলবে না হলে বাসে যাও' — এই পণ্ডিতি",
        en: "dealing with problems in a practical, sensible way rather than a perfect one",
        hi: "व्यावहारिक — आदर्श नहीं, काम की बात सोचने वाला",
      },
      englishMeaning: "practical and sensible about what can actually be done",
      examples: [
        {
          en: "We took a pragmatic call: patch the bug today, redesign next quarter.",
          bn: "আমরা বাস্তবমুখী সিদ্ধান্ত নিলাম: আজ বাগ ঠিক করা, নতুন ডিজাইন পরের কোয়ার্টারে।",
        },
        {
          en: "She is pragmatic about budgets — no fancy tools until truly needed.",
          bn: "বাজেটে সে বাস্তববাদী — সত্যিই দরকার না হলে দামি টুল নয়।",
        },
      ],
      tip: {
        bn: "প্রশংসাসূচক শব্দ: 'a pragmatic approach/solution/person'। idealist-এর বিপরীত চরিত্র — দুজন একসঙ্গে দুর্দান্ত টিম বানায়।",
        en: "A praising word: 'a pragmatic approach/solution/person'. The opposite character is an idealist — together they make a great team.",
        hi: "प्रशंसासूचक: 'a pragmatic approach'। विपरीत: idealist।",
      },
      synonyms: ["practical", "realistic", "sensible"],
      antonyms: ["idealistic", "impractical"],
    },
  },
  {
    word: "tenacious",
    level: "advanced",
    category: "general",
    unit: 5,
    data: {
      pronunciation: "টেনেশিয়াস",
      partOfSpeech: "adjective",
      meaning: {
        bn: "অনড় জেদি-অধ্যবসায়ী — একবার হাতে নিলে ছাড়ে না; বাঁশের মতো — ঝড়ে নুয়ে যায়, ভাঙে না",
        en: "holding on firmly and refusing to give up despite difficulties",
        hi: "अडिग — मुश्किल में भी हार न मानने वाला",
      },
      englishMeaning: "determined to keep going and not give up",
      examples: [
        {
          en: "His tenacious study routine turned a weak subject into his best score.",
          bn: "অনড় পড়ার রুটিনে তার দুর্বলতম বিষয়ই সেরা নম্বর এনে দিল।",
        },
        {
          en: "Tenacious journalists kept asking until the file was opened.",
          bn: "অনড় সাংবাদিকরা ফাইল খোলা পর্যন্ত প্রশ্ন করে গেল।",
        },
      ],
      tip: {
        bn: "noun রূপ tenacity। সকারাত্মক শব্দ — stubborn-এর নেগেটিভ রঙ এখানে নেই: tenacious মানুষ সঠিক লক্ষ্যে অনড়, stubborn মানুষ ভুলেও অনড়।",
        en: "Noun: tenacity. Positive word — unlike 'stubborn': a tenacious person holds the right goal, a stubborn one holds onto everything.",
        hi: "संज्ञा: tenacity। यह positive शब्द है — stubborn से अलग।",
      },
      synonyms: ["persistent", "determined", "dogged"],
      antonyms: ["irresolute", "wavering", "weak"],
    },
  },
];
