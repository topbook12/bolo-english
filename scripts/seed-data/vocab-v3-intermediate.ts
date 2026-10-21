// ─── Vocabulary journey v3: INTERMEDIATE (20 new entries, units 1–5) ───
// Continues each unit's complexity arc with the new `collocations` +
// `wordFamily` fields. Seeded after v2 (sortOrder 60+) so a unit still reads
// simple → rich in order.
import type { LibraryVocabData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedVocabV3Entry {
  word: string;
  level: LibraryLevel;
  category: string;
  unit: number;
  data: LibraryVocabData;
}

export const SEED_VOCAB_V3_INTERMEDIATE: SeedVocabV3Entry[] = [
  // ── Unit 1: কথা বলা ও মতামত ──
  {
    word: "persuade",
    level: "intermediate",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "পারসুয়েড",
      partOfSpeech: "verb",
      meaning: {
        bn: "রাজি করানো — যুক্তি দিয়ে কাউকে কিছু করানো",
        en: "to make someone agree by giving reasons",
        hi: "मनाना — तर्क देकर सहमत करना",
      },
      englishMeaning: "to make someone decide to do something by giving them reasons",
      examples: [
        { en: "I persuaded my father to buy a new phone.", bn: "আমি বাবাকে নতুন ফোন কিনতে রাজি করিয়েছি।" },
        { en: "She persuaded us to join the club.", bn: "সে আমাদের ক্লাবে যোগ দিতে রাজি করিয়েছে।" },
      ],
      tip: {
        bn: "'persuade somebody to do something' — যুক্তি দিয়ে রাজি করানো। কঠোরভাবে জোর করাকে বলে 'force', আকুলি-বিকুলি অনুরোধ 'beg'।",
        en: "Pattern: 'persuade somebody to do something'. Forcing is 'force', pleading is 'beg'.",
        hi: "पैटर्न: 'persuade somebody to do something'। ज़बरदस्ती = 'force'।",
      },
      synonyms: ["convince", "win over"],
      antonyms: ["discourage", "dissuade"],
      collocations: ["persuade someone to help", "hard to persuade", "persuade with words"],
      wordFamily: ["persuade (v)", "persuasion (n)", "persuasive (adj)", "persuasively (adv)"],
    },
  },
  {
    word: "interrupt",
    level: "intermediate",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "ইন্টারাপ্ট",
      partOfSpeech: "verb",
      meaning: {
        bn: "কথার মাঝে ভাঙা — কারো কথা বলার মাঝপথে ঢুকে পড়া",
        en: "to stop someone while they are speaking",
        hi: "बीच में टोकना",
      },
      englishMeaning: "to stop a person who is speaking or an activity that is going on",
      examples: [
        { en: "Please don't interrupt me while I speak.", bn: "আমি কথা বলার সময় অনুগ্রহ করে টোকা দিয়ো না।" },
        { en: "Sorry to interrupt, but I have a question.", bn: "টোকা দেওয়ার জন্য দুঃখিত, কিন্তু একটা প্রশ্ন আছে।" },
      ],
      tip: {
        bn: "মার্জিতভাবে কথা ঢোকাতে বলুন 'Sorry to interrupt…' — এটা meeting-এর সবচেয়ে কাজের বাক্যগুলোর একটা।",
        en: "To join politely, say 'Sorry to interrupt…' — one of the most useful meeting phrases.",
        hi: "शिष्टता से बोलने के लिए 'Sorry to interrupt…' कहें।",
      },
      synonyms: ["break in", "cut in"],
      antonyms: ["continue", "listen"],
      collocations: ["interrupt a conversation", "sorry to interrupt", "don't interrupt"],
      wordFamily: ["interrupt (v)", "interruption (n)", "uninterrupted (adj)"],
    },
  },
  {
    word: "encourage",
    level: "intermediate",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "ইনকারিজ",
      partOfSpeech: "verb",
      meaning: {
        bn: "উৎসাহ দেওয়া — কাউকে ভালো কাজে আগাতে সাহায্য করা",
        en: "to give someone hope to do something",
        hi: "प्रोत्साहित करना",
      },
      englishMeaning: "to give someone confidence or hope to do something",
      examples: [
        { en: "Teachers encourage students to ask questions.", bn: "শিক্ষকরা শিক্ষার্থীদের প্রশ্ন করতে উৎসাহ দেন।" },
        { en: "My mother encouraged me to keep practising.", bn: "মা আমাকে অনুশীলন চালিয়ে যেতে উৎসাহ দিয়েছেন।" },
      ],
      tip: {
        bn: "encourage = উৎসাহ দেওয়া; discourage = হতাশ করা — বিপরীত জোড়া। 'You're doing great!' — এমন বাক্যই সবচেয়ে বড় encouragement।",
        en: "encourage ↔ discourage. 'You're doing great!' — simple sentences give the best encouragement.",
        hi: "encourage ↔ discourage — विपरीत जोड़ी। 'You're doing great!' कहना सबसे अच्छा प्रोत्साहन।",
      },
      synonyms: ["motivate", "inspire", "support"],
      antonyms: ["discourage", "deter"],
      collocations: ["encourage someone to learn", "highly encourage", "words of encouragement"],
      wordFamily: ["encourage (v)", "encouragement (n)", "encouraging (adj)", "encouragingly (adv)"],
    },
  },
  {
    word: "request",
    level: "intermediate",
    category: "work",
    unit: 1,
    data: {
      pronunciation: "রিকোয়েস্ট",
      partOfSpeech: "noun · verb",
      meaning: {
        bn: "অনুরোধ — ভদ্রভাবে কিছু চাওয়া",
        en: "asking politely for something",
        hi: "अनुरोध — विनम्रता से माँगना",
      },
      englishMeaning: "a polite or formal ask for something; to ask politely",
      examples: [
        { en: "I sent a request for one day leave.", bn: "একদিনের ছুটির জন্য আবেদন পাঠিয়েছি।" },
        { en: "We request you to arrive on time.", bn: "আমরা আপনাকে সময়মতো আসার অনুরোধ করছি।" },
      ],
      tip: {
        bn: "রোজকার কথায় 'ask', আনুষ্ঠানিক লেখায় (ইমেইল/আবেদন) 'request' — 'This is to request a leave of absence…'",
        en: "Everyday speech uses 'ask'; formal emails and applications use 'request'.",
        hi: "रोज़मर्रा में 'ask', औपचारिक ईमेल में 'request'।",
      },
      synonyms: ["appeal", "petition"],
      antonyms: ["command", "demand"],
      collocations: ["make a request", "special request", "at your request"],
      wordFamily: ["request (n/v)", "requested (adj)"],
    },
  },

  // ── Unit 2: চাকরি ও অর্থ ──
  {
    word: "promote",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "প্রমোট",
      partOfSpeech: "verb",
      meaning: {
        bn: "পদোন্নতি দেওয়া / প্রচার করা — দুটি ব্যবহার",
        en: "to give a higher job position; to advertise",
        hi: "पदोन्नति देना / प्रचार करना",
      },
      englishMeaning: "to move someone to a higher position at work; also to advertise something",
      examples: [
        { en: "She was promoted to manager.", bn: "সে ম্যানেজার পদে উন্নীত হয়েছে।" },
        { en: "The company promotes its products on social media.", bn: "কোম্পানি সোশ্যাল মিডিয়ায় পণ্য প্রচার করে।" },
      ],
      tip: {
        bn: "পদোন্নতি পেলে 'get promoted'। নিচে নামানো = 'demote'। পদোন্নতির নাম 'promotion' — পণ্যের প্রচারও 'promotion'!",
        en: "'Get promoted' = receive a higher post. The opposite is 'demote'. Both job growth and product ads are 'promotion'.",
        hi: "'Get promoted' = ऊँचे पद पर जाना। विपरीत 'demote'। पदोन्नति और प्रचार दोनों 'promotion'।",
      },
      synonyms: ["elevate", "advance", "advertise"],
      antonyms: ["demote", "downgrade"],
      collocations: ["get promoted", "promote a product", "promote from within"],
      wordFamily: ["promote (v)", "promotion (n)", "promotional (adj)"],
    },
  },
  {
    word: "retire",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "রিটায়ার",
      partOfSpeech: "verb",
      meaning: {
        bn: "অবসর নেওয়া — কাজ শেষে চাকরি থেকে বিদায় নেওয়া",
        en: "to stop working at the end of a career",
        hi: "सेवानिवृत्त होना",
      },
      englishMeaning: "to leave your job at the end of your working life, usually when older",
      examples: [
        { en: "My grandfather retired at sixty.", bn: "আমার দাদা ষাট বছরে অবসর নিয়েছিলেন।" },
        { en: "She plans to retire next year.", bn: "সে আগামী বছর অবসর নেওয়ার পরিকল্পনা করছে।" },
      ],
      tip: {
        bn: "অবসর জীবন = retirement। 'retire from' + চাকরি — 'He retired from teaching'। খেলোয়াড়ও 'retire' করে (খেলা থেকে সরে যায়)।",
        en: "Retirement life = 'retirement'. Pattern: 'retire from' + job. Athletes 'retire' from sport too.",
        hi: "अवसर जीवन = 'retirement'। पैटर्न: 'retire from' + नौकरी।",
      },
      synonyms: ["step down", "withdraw"],
      antonyms: ["join", "start"],
      collocations: ["retire at 60", "retire from service", "early retirement"],
      wordFamily: ["retire (v)", "retirement (n)", "retired (adj)"],
    },
  },
  {
    word: "budget",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "বাজেট",
      partOfSpeech: "noun · verb",
      meaning: {
        bn: "বাজেট — খরচের পরিকল্পনা / খরচের হিসাব রাখা",
        en: "a plan for spending money",
        hi: "बजट — खर्च की योजना",
      },
      englishMeaning: "the amount of money planned for a purpose; to plan spending",
      examples: [
        { en: "Our monthly budget is small.", bn: "আমাদের মাসিক বাজেট ছোট।" },
        { en: "Learn to budget your salary.", bn: "বেতনের হিসাব-নিকাশ করতে শেখো।" },
      ],
      tip: {
        bn: "'on a budget' = সীমিত টাকায় — 'Travel on a budget'। 'within budget' = হিসাবের মধ্যে, 'over budget' = হিসাব ছাড়িয়ে খরচ।",
        en: "'on a budget' = with limited money. 'within budget' = as planned; 'over budget' = spent too much.",
        hi: "'on a budget' = सीमित पैसे में। 'within/over budget' = योजना के अंदर/बाहर।",
      },
      synonyms: ["funds", "allowance"],
      antonyms: ["debt", "overspend"],
      collocations: ["monthly budget", "on a tight budget", "budget for travel"],
      wordFamily: ["budget (n/v)", "budgeting (n)", "budgetary (adj)"],
    },
  },
  {
    word: "debt",
    level: "intermediate",
    category: "work",
    unit: 2,
    data: {
      pronunciation: "ডেট",
      partOfSpeech: "noun",
      meaning: {
        bn: "ঋণ/দেনা — যে টাকা ফেরত দিতে হবে",
        en: "money that you must pay back",
        hi: "कर्ज़ — जो पैसा वापस करना है",
      },
      englishMeaning: "money that you owe to another person, bank or company",
      examples: [
        { en: "He is working hard to pay off his debt.", bn: "ঋণ শোধ করতে সে কঠোর পরিশ্রম করছে।" },
        { en: "They took a loan and fell into debt.", bn: "তারা ঋণ নিয়ে দেনার ভারে জর্জরিত হয়েছে।" },
      ],
      tip: {
        bn: "বানান ফাঁদ: 'debt'-এর b উচ্চারিত হয় না — উচ্চারণ 'ডেট' (date-এর মতো)। ঋণ শোধ করা = 'pay off debt'।",
        en: "Spelling trap: the 'b' in 'debt' is silent — it sounds like 'det'. Clearing it = 'pay off debt'.",
        hi: "स्पेलिंग जाल: 'debt' का 'b' मौन है — उच्चारण 'डेट'। चुकाना = 'pay off debt'।",
      },
      synonyms: ["loan", "owing"],
      antonyms: ["credit", "savings"],
      collocations: ["pay off debt", "in debt", "deep in debt"],
      wordFamily: ["debt (n)", "indebted (adj)", "indebtedness (n)"],
    },
  },

  // ── Unit 3: ভ্রমণ ও চলাচল ──
  {
    word: "explore",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "এক্সপ্লোর",
      partOfSpeech: "verb",
      meaning: {
        bn: "ঘুরে দেখা / আবিষ্কার করা — নতুন জায়গা বা বিষয় সম্পর্কে জানা",
        en: "to travel around a place to learn about it",
        hi: "अन्वेषण करना — नई जगह घूमकर जानना",
      },
      englishMeaning: "to travel through a place to discover what is there",
      examples: [
        { en: "We explored the old city on foot.", bn: "আমরা পায়ে হেঁটে পুরনো শহর ঘুরে দেখেছি।" },
        { en: "Use your free time to explore new hobbies.", bn: "অবসর সময়ে নতুন শখ খুঁজে দেখো।" },
      ],
      tip: {
        bn: "শুধু জায়গা নয় — আইডিয়াও explore করা যায়: 'explore options' (সম্ভাবনা খোঁজা)। অভিযাত্রীকে বলে 'explorer'।",
        en: "Not just places — you can 'explore options' too. A person who explores is an 'explorer'.",
        hi: "सिर्फ़ जगह नहीं — 'explore options' भी। खोजी व्यक्ति = 'explorer'।",
      },
      synonyms: ["discover", "roam", "investigate"],
      antonyms: ["ignore", "avoid"],
      collocations: ["explore the city", "explore options", "explore a cave"],
      wordFamily: ["explore (v)", "exploration (n)", "explorer (n)"],
    },
  },
  {
    word: "souvenir",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "সুভেনির",
      partOfSpeech: "noun",
      meaning: {
        bn: "স্মৃতিচিহ্ন — ভ্রমণ থেকে সেই জায়গার স্মরণে আনা জিনিস",
        en: "a thing you buy to remember a place",
        hi: "स्मृति चिह्न — याद रखने के लिए खरीदी चीज़",
      },
      englishMeaning: "something you buy or keep to help you remember a place or trip",
      examples: [
        { en: "I brought a key chain as a souvenir from Cox's Bazar.", bn: "কক্সবাজার থেকে স্মৃতিচিহ্ন হিসেবে একটা চাবির গোছা এনেছি।" },
        { en: "The shop sells handmade souvenirs.", bn: "দোকানটিতে হাতে-বানানো স্মৃতিচিহ্ন বিক্রি হয়।" },
      ],
      tip: {
        bn: "উচ্চারণ খেয়াল করুন: 'সু-ভে-নির' (ফরাসি শব্দ)। 'Souvenir shop' = যে দোকানে এসব কেনা যায়।",
        en: "Pronunciation: 'soo-ven-eer' (from French). 'Souvenir shop' = the store that sells them.",
        hi: "उच्चारण: 'soo-ven-eer' (फ्रेंच शब्द)। 'Souvenir shop' = जहाँ ये मिलते हैं।",
      },
      synonyms: ["memento", "keepsake"],
      antonyms: [],
      collocations: ["buy a souvenir", "souvenir shop", "holiday souvenir"],
      wordFamily: ["souvenir (n)"],
    },
  },
  {
    word: "departure",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "ডিপারচার",
      partOfSpeech: "noun",
      meaning: {
        bn: "যাত্রা শুরু/ছেড়ে যাওয়া — ট্রেন-বিমান ছাড়ার সময়",
        en: "the time when a train or plane leaves",
        hi: "प्रस्थान — गाड़ी/विमान के छूटने का समय",
      },
      englishMeaning: "the act of leaving, especially the leaving of a plane or train",
      examples: [
        { en: "The flight's departure is at 6 am.", bn: "বিমানটি ভোর ৬টায় ছাড়বে।" },
        { en: "Arrive at the departure gate 40 minutes early.", bn: "বিমান ছাড়ার গেটে ৪০ মিনিট আগে পৌঁছাও।" },
      ],
      tip: {
        bn: "এয়ারপোর্টে 'Departures' = যাত্রী ছাড়ার লাউঞ্জ, 'Arrivals' = আসার লাউঞ্জ — দুটো বিপরীত। দেরি = 'departure delay'।",
        en: "At airports: 'Departures' (leaving area) vs 'Arrivals' (landing area). A late flight has a 'departure delay'.",
        hi: "एयरपोर्ट पर 'Departures' vs 'Arrivals'। देरी = 'departure delay'।",
      },
      synonyms: ["exit", "leaving"],
      antonyms: ["arrival", "return"],
      collocations: ["departure time", "departure gate", "departure lounge"],
      wordFamily: ["depart (v)", "departure (n)"],
    },
  },
  {
    word: "schedule",
    level: "intermediate",
    category: "travel",
    unit: 3,
    data: {
      pronunciation: "স্কেজুল (ব্রিটিশ) / স্কেডিউল (আমেরিকান)",
      partOfSpeech: "noun · verb",
      meaning: {
        bn: "সময়সূচি / নির্দিষ্ট সময় ঠিক করা",
        en: "a plan of times; to plan a time",
        hi: "समय-सारणी / समय तय करना",
      },
      englishMeaning: "a list showing times of events; to fix a time for something",
      examples: [
        { en: "Check the train schedule before you go.", bn: "যাওয়ার আগে ট্রেনের সময়সূচি দেখে নাও।" },
        { en: "The meeting is scheduled for Monday.", bn: "সভা সোমবারের জন্য নির্ধারিত।" },
      ],
      tip: {
        bn: "উচ্চারণ দুই রকম: ব্রিটিশ 'শেডিউল', আমেরিকান 'স্কেজুল' — দুটোই ঠিক। 'on schedule' = সময়মতো, 'behind schedule' = দেরিতে।",
        en: "Two pronunciations: British 'SHED-yool', American 'SKEE-jool' — both correct. 'on schedule' = on time.",
        hi: "दो उच्चारण: British 'शेड्यूल', American 'स्केजूल' — दोनों सही। 'on schedule' = समय पर।",
      },
      synonyms: ["timetable", "agenda", "calendar"],
      antonyms: ["postpone", "cancel"],
      collocations: ["busy schedule", "on schedule", "ahead of schedule"],
      wordFamily: ["schedule (n/v)", "scheduled (adj)", "reschedule (v)"],
    },
  },

  // ── Unit 4: চরিত্র ও আবেগ ──
  {
    word: "humble",
    level: "intermediate",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "হাম্বল",
      partOfSpeech: "adjective",
      meaning: {
        bn: "বিনয়ী — যে নিজেকে বড় করে দেখায় না",
        en: "not thinking you are better than others",
        hi: "विनम्र — जो खुद को बड़ा नहीं समझता",
      },
      englishMeaning: "not proud and not thinking that you are better than other people",
      examples: [
        { en: "He is rich but very humble.", bn: "সে ধনী কিন্তু খুব বিনয়ী।" },
        { en: "She stayed humble after winning the award.", bn: "পুরস্কার জেতার পরও সে বিনয়ী রইল।" },
      ],
      tip: {
        bn: "বিনয়কে মানুষ ভালোবাসে: 'Stay humble!' আরrogant-এর বিপরীত। 'In my humble opinion' = আমার সামান্য মতে (বিনয়ের ছাঁদ)।",
        en: "'Stay humble!' is beloved advice. Opposite of arrogant. 'In my humble opinion' = politely giving your view.",
        hi: "'Stay humble!' प्रिय सलाह है। arrogant का विपरीत। 'In my humble opinion' = विनम्रता से राय।",
      },
      synonyms: ["modest", "down-to-earth"],
      antonyms: ["arrogant", "proud"],
      collocations: ["stay humble", "humble beginnings", "humble person"],
      wordFamily: ["humble (adj)", "humility (n)", "humbly (adv)", "humbleness (n)"],
    },
  },
  {
    word: "arrogant",
    level: "intermediate",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "অ্যারোগ্যান্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "অহংকারী — যে নিজেকে সবার চেয়ে বড় মনে করে",
        en: "thinking you are better than everyone",
        hi: "अहंकारी — खुद को सबसे बड़ा समझना",
      },
      englishMeaning: "behaving as if you are better or more important than others",
      examples: [
        { en: "Nobody likes an arrogant player.", bn: "কেউই অহংকারী খেলোয়াড়কে পছন্দ করে না।" },
        { en: "His arrogant answer shocked everyone.", bn: "তার অহংকারী উত্তরে সবাই হতবাক।" },
      ],
      tip: {
        bn: "humble-এর সরাসরি বিপরীত। 'He's so arrogant' — এমন সমালোচনা প্রতিদিন শোনা যায়। অহংকারকে বলে 'arrogance'।",
        en: "The direct opposite of 'humble'. 'He's so arrogant' is a very common complaint. The noun is 'arrogance'.",
        hi: "'humble' का सीधा विपरीत। संज्ञा = 'arrogance'।",
      },
      synonyms: ["proud", "conceited", "bossy"],
      antonyms: ["humble", "modest"],
      collocations: ["arrogant behaviour", "sound arrogant", "arrogant tone"],
      wordFamily: ["arrogant (adj)", "arrogance (n)", "arrogantly (adv)"],
    },
  },
  {
    word: "sympathy",
    level: "intermediate",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "সিম্পাথি",
      partOfSpeech: "noun",
      meaning: {
        bn: "সহানুভূতি — অন্যের দুঃখে মন খারাপ করা",
        en: "feeling sad for someone's pain",
        hi: "सहानुभूति — दूसरे के दुख में सहभागी होना",
      },
      englishMeaning: "the feeling of being sorry for someone who is having a hard time",
      examples: [
        { en: "I expressed sympathy for the family.", bn: "পরিবারটির প্রতি সহানুভূতি জানালাম।" },
        { en: "She has sympathy for stray animals.", bn: "পথের পশুদের প্রতি তার সহানুভূতি আছে।" },
      ],
      tip: {
        bn: "শোকের সময় লেখা হয় 'Deepest sympathy'। আরও গভীর যে সহানুভূতি নিজের মতো অনুভব করে তা 'empathy' — দুটো আলাদা শব্দ!",
        en: "Condolence cards say 'Deepest sympathy'. Feeling WITH someone (as if it were yours) is 'empathy' — a different word!",
        hi: "शोक संदेश में 'Deepest sympathy'। गहरा भाव = 'empathy' — दोनों अलग शब्द!",
      },
      synonyms: ["compassion", "pity", "empathy"],
      antonyms: ["cruelty", "indifference"],
      collocations: ["express sympathy", "deepest sympathy", "have sympathy for"],
      wordFamily: ["sympathy (n)", "sympathize (v)", "sympathetic (adj)", "sympathetically (adv)"],
    },
  },
  {
    word: "anxious",
    level: "intermediate",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "অ্যাংকশাস",
      partOfSpeech: "adjective",
      meaning: {
        bn: "দুশ্চিন্তাগ্রস্ত — মনে অস্থির উদ্বেগ",
        en: "worried that something bad may happen",
        hi: "चिंतित — बुरा होने की चिंता में",
      },
      englishMeaning: "nervous and worried about something that may happen",
      examples: [
        { en: "I feel anxious before exams.", bn: "পরীক্ষার আগে আমার দুশ্চিন্তা হয়।" },
        { en: "Parents were anxious about the storm.", bn: "ঝড় নিয়ে বাবা-মা উদ্বিগ্ন ছিলেন।" },
      ],
      tip: {
        bn: "'anxious about' + বিষয় — 'anxious about results'। দুটি রূপ: উদ্বিগ্ন (worried) বা আগ্রহী ('anxious to meet you' = eager) — context বলে দেবে।",
        en: "'anxious about' + thing. Two senses: worried ('anxious about results') or eager ('anxious to meet you') — context decides.",
        hi: "'anxious about' + विषय। दो अर्थ: चिंतित या उत्सुक — context बताता है।",
      },
      synonyms: ["worried", "nervous", "uneasy"],
      antonyms: ["calm", "relaxed"],
      collocations: ["feel anxious", "anxious about exams", "deeply anxious"],
      wordFamily: ["anxious (adj)", "anxiety (n)", "anxiously (adv)"],
    },
  },

  // ── Unit 5: পড়াশোনা ও লক্ষ্য ──
  {
    word: "concentrate",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "কনসেনট্রেট",
      partOfSpeech: "verb",
      meaning: {
        bn: "মনোযোগ দেওয়া — সব চিন্তা এক জায়গায় ফোকাস করা",
        en: "to put all your attention on one thing",
        hi: "एकाग्र होना — पूरा ध्यान एक पर",
      },
      englishMeaning: "to give all your attention to something",
      examples: [
        { en: "I can't concentrate with the TV on.", bn: "টিভি চালু থাকলে আমি মনোযোগ দিতে পারি না।" },
        { en: "Concentrate on one task at a time.", bn: "একবারে একটা কাজেই মনোযোগ দাও।" },
      ],
      tip: {
        bn: "'concentrate on' + বিষয়। মনোযোগ ভাঙা = 'distract' — 'Don't distract me'। মনোযোগের নাউন 'concentration'।",
        en: "'concentrate on' + thing. Breaking attention = 'distract' ('Don't distract me'). The noun is 'concentration'.",
        hi: "'concentrate on' + विषय। ध्यान भटकाना = 'distract'। संज्ञा = 'concentration'।",
      },
      synonyms: ["focus", "pay attention"],
      antonyms: ["distract", "scatter"],
      collocations: ["concentrate on study", "hard to concentrate", "full concentration"],
      wordFamily: ["concentrate (v)", "concentration (n)"],
    },
  },
  {
    word: "motivate",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "মোটিভেট",
      partOfSpeech: "verb",
      meaning: {
        bn: "প্রেরণা দেওয়া — কাজে এগোতে উদ্বুদ্ধ করা",
        en: "to make someone want to do something",
        hi: "प्रेरित करना",
      },
      englishMeaning: "to give someone a reason or desire to do something well",
      examples: [
        { en: "Good marks motivate students to study more.", bn: "ভালো নম্বর শিক্ষার্থীদের বেশি পড়তে উদ্বুদ্ধ করে।" },
        { en: "Our coach motivates the team before every match.", bn: "কোচ প্রতি ম্যাচের আগে দলকে প্রেরণা দেন।" },
      ],
      tip: {
        bn: "নিজেকে প্রেরণা দেওয়াই 'self-motivation' — চাকরির ইন্টারভিউয়ের প্রিয় শব্দ! encourage-এর সাথে খুব ঘনিষ্ঠ।",
        en: "Pushing yourself is 'self-motivation' — a favourite interview word! Very close to 'encourage'.",
        hi: "खुद को प्रेरणा = 'self-motivation' — इंटरव्यू का प्रिय शब्द! 'encourage' के बहुत करीब।",
      },
      synonyms: ["inspire", "encourage", "drive"],
      antonyms: ["demotivate", "discourage"],
      collocations: ["motivate yourself", "motivate the team", "highly motivated"],
      wordFamily: ["motivate (v)", "motivation (n)", "motivated (adj)", "motive (n)"],
    },
  },
  {
    word: "deadline",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "ডেডলাইন",
      partOfSpeech: "noun",
      meaning: {
        bn: "শেষ সময়সীমা — যে তারিখের মধ্যে কাজ শেষ করতে হবে",
        en: "the last date to finish a task",
        hi: "अंतिम समय-सीमा",
      },
      englishMeaning: "the latest time or date by which something must be finished",
      examples: [
        { en: "The deadline for the assignment is Friday.", bn: "অ্যাসাইনমেন্টের শেষ তারিখ শুক্রবার।" },
        { en: "We met the deadline just in time.", bn: "ঠিক সময়ের মধ্যেই আমরা শেষ সময়সীমা পূরণ করেছি।" },
      ],
      tip: {
        bn: "'meet the deadline' = সময়মতো শেষ করা, 'miss the deadline' = সময় পার হয়ে যাওয়া, 'tight deadline' = খুব কম সময়। ইমেইলে প্রতিদিন দেখা যায়!",
        en: "'meet the deadline' = finish on time; 'miss it' = too late; 'tight deadline' = very little time. Seen in emails daily!",
        hi: "'meet the deadline' = समय पर पूरा; 'miss' = छूट जाना; 'tight deadline' = बहुत कम समय।",
      },
      synonyms: ["due date", "cut-off"],
      antonyms: ["extension"],
      collocations: ["meet the deadline", "miss the deadline", "tight deadline"],
      wordFamily: ["deadline (n)"],
    },
  },
  {
    word: "revise",
    level: "intermediate",
    category: "academic",
    unit: 5,
    data: {
      pronunciation: "রিভাইজ",
      partOfSpeech: "verb",
      meaning: {
        bn: "পুনরালোচনা করা — পড়া আবার ঝালিয়ে নেওয়া বা সংশোধন করা",
        en: "to study again; to correct and improve",
        hi: "पुनरावृत्ति करना / सुधारना",
      },
      englishMeaning: "to read your notes again before an exam; also to change and improve a text",
      examples: [
        { en: "Revise the whole chapter before the test.", bn: "পরীক্ষার আগে পুরো অধ্যায়টা ঝালিয়ে নাও।" },
        { en: "He revised the essay after the teacher's feedback.", bn: "শিক্ষকের মতামতের পর সে রচনাটি সংশোধন করেছে।" },
      ],
      tip: {
        bn: "ব্রিটিশ ইংরেজিতে পরীক্ষার আগে পড়াকে 'revise' বলে; আমেরিকানরা বলে 'review'। লেখা সংশোধনও revise — 'revise your CV'।",
        en: "British English: revise = study again before a test; Americans say 'review'. Editing a text is 'revise' too ('revise your CV').",
        hi: "British: परीक्षा से पहले दोहराना = 'revise'; American: 'review'। लेख सुधारना भी 'revise'।",
      },
      synonyms: ["review", "recheck", "edit"],
      antonyms: ["ignore"],
      collocations: ["revise for exams", "revise a draft", "revise the plan"],
      wordFamily: ["revise (v)", "revision (n)"],
    },
  },
];
