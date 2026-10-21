// ─── Vocabulary journey v3: ADVANCED (20 new entries, units 1–5) ───
// Sophisticated C1-band words completing each unit's complexity arc, with the
// new `collocations` + `wordFamily` fields. Seeded last (sortOrder 100+) so a
// unit still reads simple → rich in order.
import type { LibraryVocabData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedVocabV3Entry {
  word: string;
  level: LibraryLevel;
  category: string;
  unit: number;
  data: LibraryVocabData;
}

export const SEED_VOCAB_V3_ADVANCED: SeedVocabV3Entry[] = [
  // ── Unit 1: ধারণা ও যুক্তি ──
  {
    word: "coherent",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "কোহিরেন্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "সুসংহত/সুগঠিত — যুক্তি ও কথায় যার সরাসরি সংযোগ আছে",
        en: "logical and well connected",
        hi: "सुसंगत — तर्कसंगत और जुड़ा हुआ",
      },
      englishMeaning: "(of an argument or speech) logical, clear and consistently connected",
      examples: [
        { en: "The essay presents a coherent argument.", bn: "রচনাটিতে একটি সুসংহত যুক্তি তুলে ধরা হয়েছে।" },
        { en: "She gave a coherent explanation of the policy.", bn: "নীতিটির একটি সুগঠিত ব্যাখ্যা সে দিয়েছে।" },
      ],
      tip: {
        bn: "IELTS Writing-এর মূল্যায়নের স্তম্ভই 'Coherence and Cohesion' — বাক্যগুলো পরস্পর যুক্ত থাকা। 'incoherent' = এলোমেলো, যুক্তিহীন।",
        en: "IELTS Writing grades 'Coherence and Cohesion' — ideas logically linked. 'incoherent' = jumbled, illogical.",
        hi: "IELTS Writing का स्तंभ 'Coherence and Cohesion' — विचार आपस में जुड़े हों। 'incoherent' = अव्यवस्थित।",
      },
      synonyms: ["logical", "consistent", "articulate"],
      antonyms: ["incoherent", "jumbled"],
      collocations: ["coherent argument", "coherent explanation", "remain coherent"],
      wordFamily: ["coherent (adj)", "coherence (n)", "coherently (adv)", "cohere (v)"],
    },
  },
  {
    word: "compelling",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "কম্পেলিং",
      partOfSpeech: "adjective",
      meaning: {
        bn: "অত্যন্ত জোরালো/আকর্ষণীয় — যে যুক্তি বা গল্পকে এড়ানো কঠিন",
        en: "powerful and impossible to ignore",
        hi: "प्रबल — जिसे अनदेखा करना कठिन",
      },
      englishMeaning: "so strong or interesting that it holds your attention or forces agreement",
      examples: [
        { en: "There is compelling evidence for climate change.", bn: "জলবায়ু পরিবর্তনের পক্ষে প্রবল প্রমাণ আছে।" },
        { en: "He made a compelling case for remote work.", bn: "রিমোট কাজের পক্ষে সে একটি জোরালো যুক্তি দাঁড় করিয়েছে।" },
      ],
      tip: {
        bn: "'compelling evidence/argument/reason' — গবেষণা ও বিতর্কের সবচেয়ে প্রিয় সংযোগ। গল্পকেও বলে 'a compelling story' (মুগ্ধ করা)।",
        en: "'compelling evidence/argument/reason' — a favourite in research and debate. A gripping story is 'compelling' too.",
        hi: "'compelling evidence/argument/reason' — शोध और बहस का प्रिय शब्द। मोहक कहानी भी 'compelling'।",
      },
      synonyms: ["persuasive", "gripping", "irresistible"],
      antonyms: ["weak", "boring", "unconvincing"],
      collocations: ["compelling evidence", "compelling reason", "compelling story"],
      wordFamily: ["compel (v)", "compelling (adj)", "compellingly (adv)"],
    },
  },
  {
    word: "undermine",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "আন্ডারমাইন",
      partOfSpeech: "verb",
      meaning: {
        bn: "গোপনে দুর্বল করা — ভিত খুঁড়ে ভাঙার মতো",
        en: "to secretly weaken something",
        hi: "गुप्त रूप से कमज़ोर करना",
      },
      englishMeaning: "to make something weaker little by little, often secretly or indirectly",
      examples: [
        { en: "Spreading rumours undermines trust in a team.", bn: "গুজব ছড়ালে দলের আস্থা নষ্ট হয়।" },
        { en: "Lack of sleep undermines your memory.", bn: "ঘুমের অভাব স্মৃতিশক্তি দুর্বল করে।" },
      ],
      tip: {
        bn: "'under' + 'mine' — খনির মতো নিচ থেকে খুঁড়ে ভাঙা। সরাসরি আক্রমণ নয়, ধীরে-ধীরে ভিত ক্ষয় করাই undermine।",
        en: "'under' + 'mine' — digging beneath until it falls. Not a direct attack: a slow, hidden weakening.",
        hi: "'under' + 'mine' — नीचे से खोदकर गिराना। सीधा हमला नहीं, धीरे-धीरे कमज़ोर करना।",
      },
      synonyms: ["weaken", "sabotage", "erode"],
      antonyms: ["strengthen", "bolster", "support"],
      collocations: ["undermine confidence", "undermine authority", "undermine efforts"],
      wordFamily: ["undermine (v)", "undermining (n)"],
    },
  },
  {
    word: "notion",
    level: "advanced",
    category: "academic",
    unit: 1,
    data: {
      pronunciation: "নোশন",
      partOfSpeech: "noun",
      meaning: {
        bn: "ধারণা/কল্পনা — মনে জন্মানো কোনো চিন্তা বা বিশ্বাস",
        en: "an idea or belief",
        hi: "धारणा — मन में बना विचार",
      },
      englishMeaning: "an idea, belief or understanding of something, often not exact",
      examples: [
        { en: "He rejected the notion that money brings happiness.", bn: "টাকাই সুখ আনে — এই ধারণাই তিনি প্রত্যাখ্যান করেছেন।" },
        { en: "The notion of freedom means different things to different people.", bn: "স্বাধীনতার ধারণা ভিন্ন মানুষের কাছে ভিন্ন অর্থ বহন করে।" },
      ],
      tip: {
        bn: "'the notion that…' — যে ধারণা বহন করে তা দিয়ে that-বাক্য বসে। concept = শাস্ত্রীয় ধারণা, notion = মনে জন্মানো হালকা ধারণা।",
        en: "Pattern: 'the notion that…'. A 'concept' is a structured idea; a 'notion' is a lighter, personal belief.",
        hi: "पैटर्न: 'the notion that…'। 'concept' = संरचित विचार; 'notion' = हल्की धारणा।",
      },
      synonyms: ["idea", "concept", "belief"],
      antonyms: ["fact", "reality"],
      collocations: ["the notion that", "accept a notion", "dismiss the notion"],
      wordFamily: ["notion (n)", "notional (adj)", "notionally (adv)"],
    },
  },

  // ── Unit 2: সমাজ ও নীতি ──
  {
    word: "disparity",
    level: "advanced",
    category: "academic",
    unit: 2,
    data: {
      pronunciation: "ডিস্প্যারিটি",
      partOfSpeech: "noun",
      meaning: {
        bn: "বৈষম্য/অসমতা — দুই পক্ষের মধ্যে বিরাট ফারাক",
        en: "a big gap between two things",
        hi: "असमानता — दो पक्षों के बीच बड़ा अंतर",
      },
      englishMeaning: "a large difference between two things, especially money or treatment",
      examples: [
        { en: "The wage disparity between men and women persists.", bn: "নারী-পুরুষের মজুরির বৈষম্য এখনো রয়ে গেছে।" },
        { en: "There is a sharp disparity between rural and urban schools.", bn: "গ্রামীণ ও শহুরে স্কুলের মধ্যে তীব্র অসমতা আছে।" },
      ],
      tip: {
        bn: "'disparity in/between' — 'disparity in income' (আয়ে বৈষম্য)। inequality-র সাথে ঘনিষ্ঠ; পরিসংখ্যান-নীতি আলোচনার প্রিয় শব্দ।",
        en: "'disparity in/between' — 'disparity in income'. Close to 'inequality'; loved in statistics and policy talk.",
        hi: "'disparity in/between' — 'disparity in income'। 'inequality' के करीब।",
      },
      synonyms: ["inequality", "gap", "imbalance"],
      antonyms: ["equality", "parity", "balance"],
      collocations: ["income disparity", "health disparity", "grow in disparity"],
      wordFamily: ["disparity (n)", "disparate (adj)", "disparately (adv)"],
    },
  },
  {
    word: "affluent",
    level: "advanced",
    category: "academic",
    unit: 2,
    data: {
      pronunciation: "অ্যাফ্লুয়েন্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "সমৃদ্ধ/ধনী — প্রচুর সম্পদের অধিকারী",
        en: "having a lot of money",
        hi: "धनी, समृद्ध",
      },
      englishMeaning: "having plenty of money; wealthy",
      examples: [
        { en: "They live in an affluent neighbourhood.", bn: "তারা একটি সমৃদ্ধ পাড়ায় বাস করে।" },
        { en: "Affluent countries must lead climate action.", bn: "সমৃদ্ধ দেশগুলোকেই জলবায়ু কর্মসূচির নেতৃত্ব দিতে হবে।" },
      ],
      tip: {
        bn: "মানুষ, এলাকা, দেশ — সব 'affluent' হতে পারে। 'the affluent' = ধনীশ্রেণি (সমষ্টিগত)। rich-এর চেয়ে আরও লিখিত-প্রাঞ্জল শব্দ।",
        en: "People, areas and countries can all be 'affluent'. 'the affluent' = rich people as a group. A more polished word than 'rich'.",
        hi: "व्यक्ति, इलाक़ा, देश — सब 'affluent'। 'the affluent' = धनी वर्ग। 'rich' से अधिक शिष्ट शब्द।",
      },
      synonyms: ["wealthy", "prosperous", "well-off"],
      antonyms: ["impoverished", "poor", "needy"],
      collocations: ["affluent society", "affluent family", "affluent neighbourhood"],
      wordFamily: ["affluent (adj)", "affluence (n)", "affluently (adv)"],
    },
  },
  {
    word: "alleviate",
    level: "advanced",
    category: "academic",
    unit: 2,
    data: {
      pronunciation: "আলিভিয়েট",
      partOfSpeech: "verb",
      meaning: {
        bn: "উপশম করা — কষ্ট বা সমস্যা কমিয়ে আনা",
        en: "to make pain or a problem less severe",
        hi: "कम करना — दर्द या समस्या घटाना",
      },
      englishMeaning: "to make suffering, pain or a problem less bad",
      examples: [
        { en: "The new bridge will alleviate traffic jams.", bn: "নতুন সেতুটি যানজট কমাবে।" },
        { en: "Donations alleviate immediate suffering but don't end poverty.", bn: "দান তাৎক্ষণিক কষ্ট উপশম করে, দারিদ্র্য মেটায় না।" },
      ],
      tip: {
        bn: "সমস্যা পুরোপুরি 'solve' না করে চাপ কমানোই alleviate — 'alleviate poverty/pain/pressure'। 'sustainable development'-এর আলোচনায় ঘনঘন আসে।",
        en: "Not fully 'solving' — just easing: 'alleviate poverty/pain/pressure'. Frequent in development-speak.",
        hi: "पूरी तरह हल नहीं — बस कम करना: 'alleviate poverty/pain/pressure'।",
      },
      synonyms: ["ease", "relieve", "mitigate"],
      antonyms: ["aggravate", "worsen", "intensify"],
      collocations: ["alleviate pain", "alleviate poverty", "alleviate pressure"],
      wordFamily: ["alleviate (v)", "alleviation (n)"],
    },
  },
  {
    word: "empower",
    level: "advanced",
    category: "academic",
    unit: 2,
    data: {
      pronunciation: "এমপাওয়ার",
      partOfSpeech: "verb",
      meaning: {
        bn: "ক্ষমতায়ন করা — কাউকে নিজের পায়ে দাঁড়ানোর শক্তি দেওয়া",
        en: "to give someone the power to act",
        hi: "सशक्त बनाना — क्षमता और अधिकार देना",
      },
      englishMeaning: "to give someone the confidence, skill or authority to control their own life",
      examples: [
        { en: "Education empowers women.", bn: "শিক্ষা নারীদের ক্ষমতায়ন করে।" },
        { en: "Good tools empower small teams to do big work.", bn: "সঠিক টুল ছোট দলকে বড় কাজে সক্ষম করে।" },
      ],
      tip: {
        bn: "উন্নয়ন-ভাষায় 'empowerment' প্রায় স্লোগান! 'empower someone to do something' — শুধু অনুমতি নয়, সক্ষমতাও জোটে।",
        en: "In development talk, 'empowerment' is almost a slogan! Pattern: 'empower someone to do something' — ability, not just permission.",
        hi: "विकास-भाषा में 'empowerment' लगभग नारा है! 'empower someone to do something'।",
      },
      synonyms: ["enable", "strengthen", "equip"],
      antonyms: ["oppress", "disable", "weaken"],
      collocations: ["empower women", "empower communities", "empower to decide"],
      wordFamily: ["empower (v)", "empowerment (n)", "empowering (adj)", "empowered (adj)"],
    },
  },

  // ── Unit 3: ব্যবসা ও আলোচনা ──
  {
    word: "revenue",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "রেভিনিউ",
      partOfSpeech: "noun",
      meaning: {
        bn: "আয়/রাজস্ব — ব্যবসা বা সরকারের মোট আয়",
        en: "the total income of a business or government",
        hi: "राजस्व — कुल आय",
      },
      englishMeaning: "the money that a business or government receives in total",
      examples: [
        { en: "Ad revenue keeps the app free.", bn: "বিজ্ঞাপনের আয়েই অ্যাপটি ফ্রি থাকে।" },
        { en: "The company's revenue doubled last year.", bn: "গত বছর কোম্পানির রাজস্ব দ্বিগুণ হয়েছে।" },
      ],
      tip: {
        bn: "revenue = মোট আয়; profit = খরচ বাদ দিয়ে যা থাকে। 'revenue stream' = আয়ের উৎস — স্টার্টআপ-পিচে প্রতিদিনের শব্দ।",
        en: "revenue = total income; profit = what remains after costs. 'revenue stream' = a source of income — daily startup vocabulary.",
        hi: "revenue = कुल आय; profit = खर्च बाद बचा। 'revenue stream' = आय का स्रोत।",
      },
      synonyms: ["income", "earnings", "turnover"],
      antonyms: ["expense", "loss"],
      collocations: ["annual revenue", "revenue growth", "tax revenue"],
      wordFamily: ["revenue (n)"],
    },
  },
  {
    word: "acquire",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "আকোয়াইয়ার",
      partOfSpeech: "verb",
      meaning: {
        bn: "অর্জন করা / কিনে নেওয়া — দক্ষতা বা কোম্পানি",
        en: "to gain or buy something",
        hi: "अर्जित करना / ख़रीदना",
      },
      englishMeaning: "to obtain or buy something, especially a skill or a company",
      examples: [
        { en: "Children acquire languages effortlessly.", bn: "শিশুরা অল্প চেষ্টায় ভাষা শিখে নেয়।" },
        { en: "The giant tech firm acquired a smaller startup.", bn: "প্রযুক্তির দৈত্যটি একটি ছোট স্টার্টআপ কিনে নিয়েছে।" },
      ],
      tip: {
        bn: "'acquire a skill/language' = দক্ষতা অর্জন, 'acquire a company' = কোম্পানি কেনা (M&A)। নাউন 'acquisition' — ইন্টারভিউ ও বিজনেস নিউজের জনপ্রিয় জোড়া।",
        en: "'acquire a skill/language' = gain ability; 'acquire a company' = buy it (M&A). The noun 'acquisition' pairs with both.",
        hi: "'acquire a skill/language' = क्षमता पाना; 'acquire a company' = ख़रीदना। संज्ञा = 'acquisition'।",
      },
      synonyms: ["obtain", "gain", "purchase"],
      antonyms: ["lose", "forfeit"],
      collocations: ["acquire skills", "acquire a company", "acquire knowledge"],
      wordFamily: ["acquire (v)", "acquisition (n)", "acquired (adj)"],
    },
  },
  {
    word: "recession",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "রিসেশন",
      partOfSpeech: "noun",
      meaning: {
        bn: "মন্দা — অর্থনীতি টানা কয়েক মাস দুর্বল হওয়ার সময়",
        en: "a period when the economy weakens",
        hi: "मंदी — जब अर्थव्यवस्था कमज़ोर पड़ती है",
      },
      englishMeaning: "a time of several months when a country's economy shrinks and jobs become scarce",
      examples: [
        { en: "Many companies froze hiring during the recession.", bn: "মন্দার সময় অনেক কোম্পানি নিয়োগ স্থগিত রেখেছিল।" },
        { en: "The recession pushed prices down but jobs vanished.", bn: "মন্দায় দাম কমল, কিন্তু কাজ হারিয়ে গেল।" },
      ],
      tip: {
        bn: "টানা দুই ত্রৈমাসিক অর্থনীতি সংকুচিত হলেই সাধারণত recession ঘোষিত হয়। আরও গভীর-দীর্ঘ মন্দা = 'depression'। চাকরির বাজারের খবরে প্রায়ই আসে।",
        en: "A recession is usually declared after two quarters of shrinking. A deeper, longer one is a 'depression'. Common in job-market news.",
        hi: "दो तिमाही सिकुड़न पर recession घोषित होती है। गहरी और लंबी = 'depression'।",
      },
      synonyms: ["downturn", "slump", "depression"],
      antonyms: ["boom", "growth", "prosperity"],
      collocations: ["economic recession", "during a recession", "recession hits"],
      wordFamily: ["recession (n)", "recessional (adj)"],
    },
  },
  {
    word: "compliance",
    level: "advanced",
    category: "work",
    unit: 3,
    data: {
      pronunciation: "কমপ্লায়েন্স",
      partOfSpeech: "noun",
      meaning: {
        bn: "নিয়ম-মেনে চলা — আইন বা নিয়মাবলির প্রতি পালনীয়তা",
        en: "following rules and laws",
        hi: "नियमों का पालन",
      },
      englishMeaning: "the practice of obeying a law, rule or standard",
      examples: [
        { en: "The bank is in full compliance with the new rules.", bn: "ব্যাংকটি নতুন নিয়মের সম্পূর্ণ পরিপালনে রয়েছে।" },
        { en: "Compliance costs are rising for small firms.", bn: "ছোট ফার্মগুলোর জন্য নিয়ম-মেনে চলার খরচ বাড়ছে।" },
      ],
      tip: {
        bn: "'in compliance with' = নিয়ম অনুযায়ী; 'compliance officer' = যে নিয়ম-পালন তদারকি করেন। ব্যাংক-ফার্মাসি-আইটি-র নিয়মিত শব্দ।",
        en: "'in compliance with' = according to the rule; 'compliance officer' = the person checking it. Routine in banking, pharma and IT.",
        hi: "'in compliance with' = नियम अनुसार; 'compliance officer' = पालन देखने वाला।",
      },
      synonyms: ["obedience", "adherence", "conformity"],
      antonyms: ["violation", "defiance", "noncompliance"],
      collocations: ["in compliance with", "compliance officer", "strict compliance"],
      wordFamily: ["comply (v)", "compliance (n)", "compliant (adj)"],
    },
  },

  // ── Unit 4: গবেষণা ও প্রমাণ ──
  {
    word: "inference",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "ইনফারেন্স",
      partOfSpeech: "noun",
      meaning: {
        bn: "অনুমান/অনুমীয়া — প্রমাণ থেকে সিদ্ধান্তে পৌঁছানো",
        en: "a conclusion reached from evidence",
        hi: "अनुमान — सबूत से निकाला निष्कर्ष",
      },
      englishMeaning: "a conclusion you draw from facts or clues rather than direct statements",
      examples: [
        { en: "The researchers made an inference from the survey data.", bn: "গবেষকরা জরিপের তথ্য থেকে অনুমান করেছেন।" },
        { en: "Reading comprehension often asks you to draw inferences.", bn: "পড়া-বোঝার অনুশীলনে প্রায়ই অনুমান আঁকতে বলা হয়।" },
      ],
      tip: {
        bn: "verb হলো 'infer' — 'From the silence, I infer agreement'। IELTS Reading-এর 'inference questions' এই শব্দটাই মাপে।",
        en: "The verb is 'infer' — 'From the silence, I infer agreement'. IELTS Reading 'inference questions' test exactly this.",
        hi: "क्रिया = 'infer' — 'From the silence, I infer agreement'। IELTS Reading के 'inference questions'।",
      },
      synonyms: ["conclusion", "deduction", "judgement"],
      antonyms: ["guess", "assumption"],
      collocations: ["draw an inference", "make inferences", "valid inference"],
      wordFamily: ["infer (v)", "inference (n)", "inferential (adj)"],
    },
  },
  {
    word: "variable",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "ভেরিয়েবল",
      partOfSpeech: "noun · adjective",
      meaning: {
        bn: "চলক/পরিবর্তনশীল — বদলাতে পারে এমন উপাদান",
        en: "something that can change; changeable",
        hi: "चर — बदल सकने वाला",
      },
      englishMeaning: "a factor that can change and affect results; also able to change",
      examples: [
        { en: "Weather is the main variable in crop research.", bn: "ফসলের গবেষণায় আবহাওয়াই প্রধান চলক।" },
        { en: "The results are variable across age groups.", bn: "বয়সভেদে ফলাফল পরিবর্তনশীল।" },
      ],
      tip: {
        bn: "গবেষণায় 'independent variable' = যাকে পরিবর্তন করা হয়, 'dependent variable' = যার ফল মাপা হয় — এই জোড়া মুখস্থ করে রাখুন।",
        en: "In research: 'independent variable' = what you change; 'dependent variable' = what you measure. Memorise this pair.",
        hi: "शोध में: 'independent variable' = जो बदला जाता है; 'dependent variable' = जो मापा जाता है।",
      },
      synonyms: ["factor", "element", "changeable"],
      antonyms: ["constant", "fixed"],
      collocations: ["key variable", "independent variable", "variable results"],
      wordFamily: ["vary (v)", "variable (n/adj)", "variability (n)", "variably (adv)"],
    },
  },
  {
    word: "rigorous",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "রিগরাস",
      partOfSpeech: "adjective",
      meaning: {
        bn: "কঠোর/সুপরিশীল — যেখানে কোনো ত্রুটি ছাড়ে না",
        en: "extremely careful and strict",
        hi: "कठोर, सुपरिशोधित",
      },
      englishMeaning: "very strict, careful and thorough, leaving no room for error",
      examples: [
        { en: "The medicine passed rigorous testing.", bn: "ওষুধটি কঠোর পরীক্ষা পার হয়েছে।" },
        { en: "Her argument is rigorous — every claim has a source.", bn: "তার যুক্তি সুপরিশীল — প্রতিটি দাবির উৎস আছে।" },
      ],
      tip: {
        bn: "'rigorous testing/analysis/training' — গবেষণার মান নির্দেশ করতে সবচেয়ে জনপ্রিয় বিশেষণ। সংশ্লিষ্ট নাউন 'rigour' (ব্রিটিশ) / 'rigor' (আমেরিকান)।",
        en: "'rigorous testing/analysis/training' — the go-to adjective for research quality. The noun is 'rigour' (UK) / 'rigor' (US).",
        hi: "'rigorous testing/analysis/training' — शोध गुणवत्ता का प्रिय विशेषण। संज्ञा = 'rigour/rigor'।",
      },
      synonyms: ["thorough", "strict", "exacting"],
      antonyms: ["loose", "careless", "casual"],
      collocations: ["rigorous testing", "rigorous analysis", "rigorous standards"],
      wordFamily: ["rigorous (adj)", "rigour/rigor (n)", "rigorously (adv)"],
    },
  },
  {
    word: "plausible",
    level: "advanced",
    category: "academic",
    unit: 4,
    data: {
      pronunciation: "প্লোজিবল",
      partOfSpeech: "adjective",
      meaning: {
        bn: "বিশ্বাসযোগ্য/সম্ভাব্য — শুনতে যা সত্য মনে হয়",
        en: "seeming likely to be true",
        hi: "संभाव्य — जो सच लगता हो",
      },
      englishMeaning: "seeming reasonable or probable, even if not proven",
      examples: [
        { en: "That is a plausible explanation for the delay.", bn: "বিলম্বের জন্য এটা একটা বিশ্বাসযোগ্য ব্যাখ্যা।" },
        { en: "The story sounded plausible, but it was fake.", bn: "গল্পটা সত্য মনে হলেও তা ভুয়া ছিল।" },
      ],
      tip: {
        bn: "সতর্কতা: plausible মানে 'শুনে সত্য লাগছে' — প্রমাণিত নয়! 'a plausible excuse' মানে কানে সোজা ঢোকে এমন বাহানা। বিপরীত 'implausible'।",
        en: "Careful: 'plausible' means 'sounds true' — not proven! 'a plausible excuse' slips into the ear easily. Opposite: 'implausible'.",
        hi: "ध्यान दें: 'plausible' = सुनने में सच — सिद्ध नहीं! विपरीत 'implausible'।",
      },
      synonyms: ["believable", "credible", "likely"],
      antonyms: ["implausible", "unlikely", "absurd"],
      collocations: ["plausible explanation", "plausible deniability", "highly plausible"],
      wordFamily: ["plausible (adj)", "plausibility (n)", "plausibly (adv)"],
    },
  },

  // ── Unit 5: ব্যক্তিত্ব ও সূক্ষ্মতা ──
  {
    word: "diligent",
    level: "advanced",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "ডিলিজেন্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "পরিশ্রমী ও সতর্ক — যে মনোযোগ দিয়ে নিরলস কাজ করে",
        en: "careful and hard-working",
        hi: "परिश्रमी और सतर्क",
      },
      englishMeaning: "working with steady, careful effort and never giving up on detail",
      examples: [
        { en: "Her diligent practice finally paid off.", bn: "তার অক্লান্ত অনুশীলন অবশেষে ফল দিয়েছে।" },
        { en: "Diligent students review their notes daily.", bn: "পরিশ্রমী শিক্ষার্থীরা প্রতিদিন নোট ঝালিয়ে নেয়।" },
      ],
      tip: {
        bn: "hard-working = শুধু মেহনতি; diligent = মেহনতি + যত্ন। চাকরির রেফারেন্স-লেখায় 'diligent' সোনার শব্দ। নাউন 'diligence'।",
        en: "'hard-working' = mere effort; 'diligent' = effort + care. A golden word in job references. The noun is 'diligence'.",
        hi: "'hard-working' = केवल मेहनत; 'diligent' = मेहनत + सतर्कता। संज्ञा = 'diligence'।",
      },
      synonyms: ["industrious", "assiduous", "conscientious"],
      antonyms: ["lazy", "negligent", "careless"],
      collocations: ["diligent student", "diligent work", "with diligence"],
      wordFamily: ["diligent (adj)", "diligence (n)", "diligently (adv)"],
    },
  },
  {
    word: "enigmatic",
    level: "advanced",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "এনিগম্যাটিক",
      partOfSpeech: "adjective",
      meaning: {
        bn: "রহস্যময় — যাকে সহজে বোঝা যায় না",
        en: "mysterious and hard to understand",
        hi: "रहस्यमयी — जिसे समझना कठिन",
      },
      englishMeaning: "strange and mysterious, difficult to explain or understand",
      examples: [
        { en: "The Mona Lisa has an enigmatic smile.", bn: "মোনালিসার হাসিতে রহস্যের আবরণ।" },
        { en: "He is an enigmatic figure in the company.", bn: "কোম্পানিতে তিনি এক রহস্যময় ব্যক্তিত্ব।" },
      ],
      tip: {
        bn: "নাউন 'enigma' — 'an enigma wrapped in a mystery' বাক্যটি ব্রিটিশ রাজনীতির বিখ্যাত উক্তি। সাহিত্য ও ফিল্ম-রিভিউয়ের প্রিয় বিশেষণ।",
        en: "The noun is 'enigma' — 'an enigma wrapped in a mystery' is Churchill's famous line. Loved in literature and film reviews.",
        hi: "संज्ञा = 'enigma'। साहित्य और फ़िल्म-समीक्षा का प्रिय विशेषण।",
      },
      synonyms: ["mysterious", "puzzling", "cryptic"],
      antonyms: ["obvious", "clear", "transparent"],
      collocations: ["enigmatic smile", "enigmatic figure", "enigmatic personality"],
      wordFamily: ["enigma (n)", "enigmatic (adj)", "enigmatically (adv)"],
    },
  },
  {
    word: "vindictive",
    level: "advanced",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "ভিনডিকটিভ",
      partOfSpeech: "adjective",
      meaning: {
        bn: "প্রতিহিংসাপরায়ণ — যে বদলা নিতে চায়",
        en: "wanting to get revenge",
        hi: "प्रतिशासक्त — बदला लेना चाहने वाला",
      },
      englishMeaning: "always trying to harm someone who has hurt you; full of revenge",
      examples: [
        { en: "A vindictive review can destroy a small business.", bn: "প্রতিহিংসাপরায়ণ রিভিউ ছোট ব্যবসা ডুবিয়ে দিতে পারে।" },
        { en: "Don't be vindictive — disagree and move on.", bn: "প্রতিহিংসায় জড়িয়ো না — মত গোলমাল করে এগিয়ে যাও।" },
      ],
      tip: {
        bn: "'vengeful' = প্রতিশোধস্পৃহা, 'vindictive' = স্বভাবগত প্রতিহিংসা। মুক্তিপণ চাওয়ার ইংরেজি 'vendetta' — একই পরিবারের শব্দ।",
        en: "'vengeful' = seeking revenge once; 'vindictive' = a revenge-seeking nature. The related word 'vendetta' means a long feud.",
        hi: "'vengeful' = एक बार बदला; 'vindictive' = स्वभाव। 'vendetta' = लंबी दुश्मनी।",
      },
      synonyms: ["vengeful", "spiteful", "resentful"],
      antonyms: ["forgiving", "merciful", "gracious"],
      collocations: ["vindictive attack", "vindictive behaviour", "petty and vindictive"],
      wordFamily: ["vindictive (adj)", "vindictiveness (n)", "vindictively (adv)"],
    },
  },
  {
    word: "stoic",
    level: "advanced",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "স্টোইক",
      partOfSpeech: "adjective · noun",
      meaning: {
        bn: "স্থির-সহনশীল — যে কষ্টেও ভেঙে পড়ে না",
        en: "calm under pain, without complaint",
        hi: "सहनशील, संयमी — दुख में भी टस-मस न होना",
      },
      englishMeaning: "enduring pain or hardship without showing feelings or complaining",
      examples: [
        { en: "She remained stoic during the whole ordeal.", bn: "পুরো দুর্দিনে তিনি স্থির সহনশীল রয়ে গিয়েছিলেন।" },
        { en: "Farmers are stoic about bad weather.", bn: "কৃষকরা খারাপ আবহাওয়া নিয়ে স্থির থাকেন।" },
      ],
      tip: {
        bn: "গ্রিক দার্শনিক 'Stoics' থেকে এসেছে — ভাগ্য যা দেয় তা শান্তভাবে গ্রহণ করাই তাদের শিক্ষা। আজকের self-help বইয়ে 'stoic mindset' জনপ্রিয়!",
        en: "From the Greek philosophers, the 'Stoics' — accept what fate gives with calm. Today's self-help books love a 'stoic mindset'!",
        hi: "ग्रीक दार्शनिकों 'Stoics' से आया — नियति जो दे, शांति से स्वीकार करो। आज 'stoic mindset' लोकप्रिय है!",
      },
      synonyms: ["uncomplaining", "patient", "resolute"],
      antonyms: ["emotional", "dramatic", "fragile"],
      collocations: ["stoic calm", "stoic acceptance", "remain stoic"],
      wordFamily: ["stoic (adj/n)", "stoicism (n)", "stoically (adv)"],
    },
  },
];
