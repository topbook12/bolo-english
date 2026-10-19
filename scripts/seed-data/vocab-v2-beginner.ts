// ─── Learning-path vocab seeds: BEGINNER (48 new entries, units 1–5) ───
// Part of Task 9 (library enrichment). Existing beginner words (hungry, tired,
// happy, friend, buy, cheap, help, walk, early, rain, beautiful, easy) live in
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

export const SEED_VOCAB_V2_BEGINNER: SeedVocabV2Entry[] = [
  // ── Unit 1: Feelings & body ──
  {
    word: "sad",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "স্যাড",
      partOfSpeech: "adjective",
      meaning: {
        bn: "মন খারাপ — দুঃখে ভরা অনুভব",
        en: "feeling unhappy",
        hi: "दुखी — मन उदास होना",
      },
      englishMeaning: "feeling unhappy or down",
      examples: [
        { en: "Why are you sad today?", bn: "তুমি আজ মন খারাপ কেন?" },
        { en: "She was sad when her friend moved away.", bn: "বন্ধুটি অন্য জায়গায় চলে গেলে সে মন খারাপ করেছিল।" },
      ],
      tip: {
        bn: "মন খারাপ বোঝাতে বন্ধুকে বলুন 'I feel sad' — আর কাউকে সান্ত্বনা দিতে বলুন 'Don't be sad'।",
        en: "Tell a friend 'I feel sad' to share your feelings; comfort someone with 'Don't be sad'.",
        hi: "अपनी भावना बताने के लिए 'I feel sad' और साँत्वना देने के लिए 'Don't be sad' कहें।",
      },
      synonyms: ["unhappy", "upset"],
      antonyms: ["happy", "glad"],
    },
  },
  {
    word: "angry",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "অ্যাংগ্রি",
      partOfSpeech: "adjective",
      meaning: {
        bn: "রেগে যাওয়া — যখন মনে রাগ হচ্ছে",
        en: "feeling anger",
        hi: "गुस्से में — जब मन में क्रोध हो",
      },
      englishMeaning: "feeling strong anger",
      examples: [
        { en: "Don't be angry with me, please.", bn: "আমার সাথে রাগ করবে না, প্লিজ।" },
        { en: "Father was angry because I came home late.", bn: "আমি দেরিতে বাড়ি ফিরেছিলাম বলে বাবা রেগে গিয়েছিলেন।" },
      ],
      tip: {
        bn: "মানুষের সাথে রাগ হলে 'angry with', কোনো ব্যাপারে রাগ হলে 'angry about' — 'Don't be angry with me.'",
        en: "Use 'angry with' for people and 'angry about' for things — 'Don't be angry with me.'",
        hi: "लोगों के लिए 'angry with' और बातों के लिए 'angry about' — 'Don't be angry with me.'",
      },
      synonyms: ["mad", "cross"],
      antonyms: ["calm", "happy"],
    },
  },
  {
    word: "sleepy",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "স্লিপি",
      partOfSpeech: "adjective",
      meaning: {
        bn: "ঘুম ঘুম ভাব — যখন ঘুম আসছে",
        en: "feeling that you want to sleep",
        hi: "उनींदा — जब नींद आ रही हो",
      },
      englishMeaning: "feeling that you want to sleep",
      examples: [
        { en: "I feel sleepy in the afternoon.", bn: "দুপুরে আমার ঘুম পেয়ে যায়।" },
        { en: "The baby is sleepy — it's time for bed.", bn: "বাচ্চাটার ঘুম আসছে, শোবার সময় হয়েছে।" },
      ],
      tip: {
        bn: "'I'm feeling sleepy' মানে ঘুম আসছে; ঘুমিয়ে পড়াকে বলে 'fall asleep'।",
        en: "'I'm feeling sleepy' means you want to sleep; falling asleep is 'fall asleep'.",
        hi: "'I'm feeling sleepy' का मतलब है नींद आ रही है; सो जाने को 'fall asleep' कहते हैं।",
      },
      synonyms: ["drowsy", "tired"],
      antonyms: ["awake", "alert"],
    },
  },
  {
    word: "thirsty",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "থার্স্টি",
      partOfSpeech: "adjective",
      meaning: {
        bn: "তৃষ্ণার্ত — যখন পানি খেতে ইচ্ছে করে",
        en: "feeling that you want to drink",
        hi: "प्यासा — जब बहुत प्यास लगे",
      },
      englishMeaning: "feeling that you want or need a drink",
      examples: [
        { en: "I am thirsty. Can I have some water?", bn: "আমার তৃষ্ণা পেয়েছে। একটু পানি পাব?" },
        { en: "After the football match we were all thirsty.", bn: "ফুটবল খেলা শেষে আমরা সবার প্রাণে পানি লেগেছিল।" },
      ],
      tip: {
        bn: "রেস্টুরেন্টে পানি চাইতে বলুন — 'I'm thirsty. Can I have some water, please?'",
        en: "Ask for water politely: 'I'm thirsty. Can I have some water, please?'",
        hi: "पानी माँगने के लिए कहें: 'I'm thirsty. Can I have some water, please?'",
      },
      synonyms: ["parched", "dry"],
      antonyms: ["hydrated"],
    },
  },
  {
    word: "sick",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "সিক",
      partOfSpeech: "adjective",
      meaning: {
        bn: "অসুস্থ — শরীর ভালো নেই এমন",
        en: "not feeling well; ill",
        hi: "बीमार — तबीयत ठीक न होना",
      },
      englishMeaning: "not well; ill",
      examples: [
        { en: "My mother is sick, so I stayed home.", bn: "আম্মু অসুস্থ, তাই আমি বাড়িতে ছিলাম।" },
        { en: "He felt sick after eating too many sweets.", bn: "বেশি মিষ্টি খেয়ে তার শরীরটা ভালো লাগছিল না।" },
      ],
      tip: {
        bn: "শরীর ভালো না থাকলে স্কুলে বলুন 'I'm feeling sick today' — ছুটির ভালো কারণ।",
        en: "If you feel ill, tell your teacher 'I'm feeling sick today' — a good reason to stay home.",
        hi: "तबीयत ठीक न हो तो कहें 'I'm feeling sick today' — छुट्टी का अच्छा कारण।",
      },
      synonyms: ["ill", "unwell"],
      antonyms: ["healthy", "well"],
    },
  },
  {
    word: "hot",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "হট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "গরম — যখন বেশি গরম লাগে",
        en: "having a high temperature",
        hi: "गर्म — जिसमें बहुत गर्मी हो",
      },
      englishMeaning: "having a high temperature; feeling warm",
      examples: [
        { en: "It's very hot today. Turn on the fan, please.", bn: "আজ খুব গরম। ফ্যানটা চালিয়ে দাও তো।" },
        { en: "Be careful, the tea is hot.", bn: "সাবধান, চা গরম।" },
      ],
      tip: {
        bn: "আবহাওয়া আর খাবার — দুটোর জন্যই 'hot' চলে: 'hot weather', 'hot soup'।",
        en: "'Hot' works for weather and food: 'hot weather', 'hot soup'.",
        hi: "मौसम और खाना दोनों के लिए 'hot' चलता है: 'hot weather', 'hot soup'।",
      },
      synonyms: ["warm", "boiling"],
      antonyms: ["cold", "cool"],
    },
  },
  {
    word: "cold",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "কোল্ড",
      partOfSpeech: "adjective",
      meaning: {
        bn: "ঠান্ডা — যখন ঠান্ডা লাগে",
        en: "having a low temperature",
        hi: "ठंडा — जिसमें ठंडक हो",
      },
      englishMeaning: "having a low temperature; not warm",
      examples: [
        { en: "The water is too cold for a bath.", bn: "গোসলের পানিটা অনেক ঠান্ডা।" },
        { en: "In January it gets cold in Dhaka.", bn: "জানুয়ারিতে ঢাকায় ঠান্ডা পড়ে।" },
      ],
      tip: {
        bn: "ঠান্ডা লেগে সর্দি-কাশি হলে বলুন 'I caught a cold' — আর 'cold weather' মানে শীতের আবহাওয়া।",
        en: "For a runny nose from winter say 'I caught a cold'; 'cold weather' means winter weather.",
        hi: "सर्दी जुकाम होने पर 'I caught a cold' कहें; 'cold weather' मतलब सर्दी का मौसम।",
      },
      synonyms: ["chilly", "cool"],
      antonyms: ["hot", "warm"],
    },
  },
  {
    word: "fine",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "ফাইন",
      partOfSpeech: "adjective",
      meaning: {
        bn: "ভালো — কোনো সমস্যা ছাড়াই ঠিকঠাক",
        en: "good; not having any problems",
        hi: "ठीक — कोई दिक्कत नहीं",
      },
      englishMeaning: "okay; well; without problems",
      examples: [
        { en: "How are you? — I'm fine, thank you.", bn: "কেমন আছো? — ভালো আছি, ধন্যবাদ।" },
        { en: "Don't worry, everything is fine.", bn: "চিন্তা করো না, সব ঠিক আছে।" },
      ],
      tip: {
        bn: "নতুন কারো সাথে পরিচয়ের পর 'How are you? — I'm fine, thanks.' — ইংরেজির সবচেয়ে জনপ্রিয় কথোপকথন।",
        en: "'How are you? — I'm fine, thanks.' is the most popular exchange in English.",
        hi: "'How are you? — I'm fine, thanks.' अंग्रेज़ी की सबसे लोकप्रिय बातचीत है।",
      },
      synonyms: ["okay", "well"],
      antonyms: ["bad", "unwell"],
    },
  },
  {
    word: "weak",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "উইক",
      partOfSpeech: "adjective",
      meaning: {
        bn: "দুর্বল — যার শরীরে শক্তি কম",
        en: "not strong; having little energy",
        hi: "कमज़ोर — जिसमें ताकत कम हो",
      },
      englishMeaning: "not strong; having little power or energy",
      examples: [
        { en: "After his fever, he felt weak for a week.", bn: "জ্বরের পর এক সপ্তাহ তার শরীরটা দুর্বল লাগছিল।" },
        { en: "Grandmother's legs have become weak with age.", bn: "বয়সের কারণে দাদির পা দুর্বল হয়ে গেছে।" },
      ],
      tip: {
        bn: "শরীর দুর্বল লাগলে 'I feel weak', আর কোনো বিষয়ে দুর্বল হলে 'I'm weak in maths' বলুন।",
        en: "Say 'I feel weak' for your body; for a subject say 'I'm weak in maths'.",
        hi: "शरीर के लिए 'I feel weak', किसी विषय के लिए 'I'm weak in maths' कहें।",
      },
      synonyms: ["feeble", "frail"],
      antonyms: ["strong", "powerful"],
    },
  },

  // ── Unit 2: Family & people ──
  {
    word: "mother",
    level: "beginner",
    category: "daily",
    unit: 2,
    data: {
      pronunciation: "মাদার",
      partOfSpeech: "noun",
      meaning: {
        bn: "মা — যিনি আমাদের জন্ম দেন",
        en: "a female parent",
        hi: "माँ — जो हमें जन्म देती है",
      },
      englishMeaning: "a person's female parent; mom",
      examples: [
        { en: "My mother cooks delicious food.", bn: "আমার মা খুব মজার রান্না করেন।" },
        { en: "Mother wakes up early to make breakfast.", bn: "সকালের নাশতা বানাতে মা তাড়াতাড়ি উঠে পড়েন।" },
      ],
      tip: {
        bn: "কথায় কথায় 'mom' (আমেরিকান) বা 'mum' (ব্রিটিশ) বলা হয় — 'I love you, Mom.'",
        en: "In everyday talk say 'mom' (US) or 'mum' (UK) — 'I love you, Mom.'",
        hi: "रोज़ की बात में 'mom' (US) या 'mum' (UK) कहें — 'I love you, Mom.'",
      },
      synonyms: ["mom", "mum"],
      antonyms: ["father"],
    },
  },
  {
    word: "father",
    level: "beginner",
    category: "daily",
    unit: 2,
    data: {
      pronunciation: "ফাদার",
      partOfSpeech: "noun",
      meaning: {
        bn: "বাবা — সন্তানের পিতা, পরিবারের ভরসা",
        en: "a male parent",
        hi: "पिता — पुरुष अभिभावक",
      },
      englishMeaning: "a person's male parent; dad",
      examples: [
        { en: "My father works at a bank in Dhaka.", bn: "আমার বাবা ঢাকার একটা ব্যাংকে কাজ করেন।" },
        { en: "Father reads the newspaper every morning.", bn: "বাবা রোজ সকালে পত্রিকা পড়েন।" },
      ],
      tip: {
        bn: "'father'-এর আন্তরিক রূপ 'dad' — 'My dad is my hero.' চমৎকার একটা বাক্য।",
        en: "The warm word for father is 'dad' — 'My dad is my hero.' is a lovely sentence.",
        hi: "पिता के लिए प्यारा शब्द 'dad' है — 'My dad is my hero.' एक प्यारा वाक्य है।",
      },
      synonyms: ["dad", "papa"],
      antonyms: ["mother"],
    },
  },
  {
    word: "brother",
    level: "beginner",
    category: "daily",
    unit: 2,
    data: {
      pronunciation: "ব্রাদার",
      partOfSpeech: "noun",
      meaning: {
        bn: "ভাই — একই বাবা-মায়ের ছেলে",
        en: "a boy or man with the same parents as you",
        hi: "भाई — साझे माता-पिता का बेटा",
      },
      englishMeaning: "a boy or man who has the same parents as you",
      examples: [
        { en: "My little brother is in class three.", bn: "আমার ছোট ভাই তৃতীয় শ্রেণিতে পড়ে।" },
        { en: "My brother helps me with my homework.", bn: "আমার ভাই হোমওয়ার্কে আমাকে সাহায্য করে।" },
      ],
      tip: {
        bn: "ছোট ভাই 'little brother', বড় ভাই 'big brother' — বাংলার ছোট ভাই-বড় ভাইয়ের মতোই।",
        en: "Say 'little brother' for the younger one and 'big brother' for the older one.",
        hi: "छोटे भाई के लिए 'little brother', बड़े भाई के लिए 'big brother' कहें।",
      },
      synonyms: ["sibling", "bro"],
      antonyms: ["sister"],
    },
  },
  {
    word: "sister",
    level: "beginner",
    category: "daily",
    unit: 2,
    data: {
      pronunciation: "সিস্টার",
      partOfSpeech: "noun",
      meaning: {
        bn: "বোন — একই বাবা-মায়ের মেয়ে",
        en: "a girl or woman with the same parents as you",
        hi: "बहन — साझे माता-पिता की बेटी",
      },
      englishMeaning: "a girl or woman who has the same parents as you",
      examples: [
        { en: "My elder sister is a nurse.", bn: "আমার বড় বোন একজন নার্স।" },
        { en: "I share my room with my little sister.", bn: "ছোট বোনের সাথে আমি ঘর ভাগ করে নিই।" },
      ],
      tip: {
        bn: "বড় বোন 'elder sister', ছোট বোন 'little sister' — ব্রিটিশ ইংরেজিতে 'elder' বেশি চলে।",
        en: "Older sister is 'elder sister', younger is 'little sister' — 'elder' is common in British English.",
        hi: "बड़ी बहन 'elder sister', छोटी बहन 'little sister' — ब्रिटिश अंग्रेज़ी में 'elder' ज़्यादा चलता है।",
      },
      synonyms: ["sibling", "sis"],
      antonyms: ["brother"],
    },
  },
  {
    word: "family",
    level: "beginner",
    category: "daily",
    unit: 2,
    data: {
      pronunciation: "ফ্যামিলি",
      partOfSpeech: "noun",
      meaning: {
        bn: "পরিবার — বাবা-মা আর ভাইবোনেরা মিলে যে সংসার",
        en: "parents and children living together",
        hi: "परिवार — साथ रहने वाले माता-पिता और बच्चे",
      },
      englishMeaning: "a group of parents and children living together",
      examples: [
        { en: "There are five people in my family.", bn: "আমাদের পরিবারে পাঁচজন সদস্য আছে।" },
        { en: "My family eats dinner together every night.", bn: "আমাদের পরিবারের সবাই রোজ রাতে একসাথে খাই।" },
      ],
      tip: {
        bn: "পরিবারে কতজন আছে জানতে চাইলে বলুন 'How many people are there in your family?'",
        en: "Ask about someone's family: 'How many people are there in your family?'",
        hi: "किसी के परिवार के बारे में पूछें: 'How many people are there in your family?'",
      },
      synonyms: ["household", "relatives"],
      antonyms: ["stranger"],
    },
  },
  {
    word: "baby",
    level: "beginner",
    category: "daily",
    unit: 2,
    data: {
      pronunciation: "বেবি",
      partOfSpeech: "noun",
      meaning: {
        bn: "শিশু — একদম ছোট বাচ্চা",
        en: "a very young child",
        hi: "शिशु — बहुत छोटा बच्चा",
      },
      englishMeaning: "a very young child who cannot yet talk or walk",
      examples: [
        { en: "The baby is sleeping in the cradle.", bn: "শিশুটা দোলনায় ঘুমাচ্ছে।" },
        { en: "My aunt has a six-month-old baby.", bn: "আমার খালার ছয় মাসের একটা বাচ্চা আছে।" },
      ],
      tip: {
        bn: "ছেলে-মেয়ে দুটো বাচ্চার জন্যই 'baby' চলে; আদর করে 'little one'-ও বলা যায়।",
        en: "'Baby' works for boys and girls; you can lovingly say 'little one' too.",
        hi: "'baby' लड़का-लड़की दोनों के लिए चलता है; प्यार से 'little one' भी कह सकते हैं।",
      },
      synonyms: ["infant", "child"],
      antonyms: ["adult"],
    },
  },
  {
    word: "teacher",
    level: "beginner",
    category: "daily",
    unit: 2,
    data: {
      pronunciation: "টিচার",
      partOfSpeech: "noun",
      meaning: {
        bn: "শিক্ষক — যিনি ছাত্রছাত্রীদের পড়ান",
        en: "a person who teaches students",
        hi: "शिक्षक — जो बच्चों को पढ़ाते हैं",
      },
      englishMeaning: "a person whose job is to teach students",
      examples: [
        { en: "Our English teacher is very kind.", bn: "আমাদের ইংরেজি টিচার খুবই ভালো মানুষ।" },
        { en: "The teacher writes the lesson on the board.", bn: "টিচার বোর্ডে পড়া লিখে দেন।" },
      ],
      tip: {
        bn: "শিক্ষককে ডাকতে নামের আগে 'Mr.'/'Ms.' বসান — 'Good morning, Ms. Rahman!'",
        en: "Address teachers as 'Mr.' or 'Ms.' with their name — 'Good morning, Ms. Rahman!'",
        hi: "शिक्षक को नाम के साथ 'Mr.' या 'Ms.' कहकर बुलाएँ — 'Good morning, Ms. Rahman!'",
      },
      synonyms: ["tutor", "instructor"],
      antonyms: ["student", "pupil"],
    },
  },
  {
    word: "student",
    level: "beginner",
    category: "daily",
    unit: 2,
    data: {
      pronunciation: "স্টুডেন্ট",
      partOfSpeech: "noun",
      meaning: {
        bn: "ছাত্র — যে স্কুলে বা কলেজে পড়ে",
        en: "a person who studies at a school",
        hi: "छात्र — जो स्कूल में पढ़ता है",
      },
      englishMeaning: "a person who is studying at a school or college",
      examples: [
        { en: "I am a student of class eight.", bn: "আমি অষ্টম শ্রেণির ছাত্র।" },
        { en: "There are forty students in our class.", bn: "আমাদের ক্লাসে চল্লিশজন ছাত্রছাত্রী আছে।" },
      ],
      tip: {
        bn: "স্কুলে 'pupil'-ও শোনা যায়, তবে 'student' স্কুল-কলেজ-বিশ্ববিদ্যালয় সব জায়গায় নিরাপদ।",
        en: "'Pupil' is heard in schools, but 'student' is safe for school, college, and university.",
        hi: "'pupil' स्कूलों में सुनाई देता है, पर 'student' स्कूल-कॉलेज-यूनिवर्सिटी हर जगह ठीक है।",
      },
      synonyms: ["pupil", "learner"],
      antonyms: ["teacher"],
    },
  },
  {
    word: "doctor",
    level: "beginner",
    category: "daily",
    unit: 2,
    data: {
      pronunciation: "ডক্টর",
      partOfSpeech: "noun",
      meaning: {
        bn: "ডাক্তার — যিনি অসুস্থ মানুষের চিকিৎসা করেন",
        en: "a person who treats sick people",
        hi: "डॉक्टर — जो मरीज़ों का इलाज करता है",
      },
      englishMeaning: "a person trained to treat sick people",
      examples: [
        { en: "The doctor gave me some medicine.", bn: "ডাক্তার আমাকে কিছু ওষুধ দিলেন।" },
        { en: "I want to be a doctor when I grow up.", bn: "বড় হয়ে আমি ডাক্তার হতে চাই।" },
      ],
      tip: {
        bn: "ডাক্তারের কাছে সমস্যাটা সরাসরি বলুন — 'I have a fever', 'My head hurts'.",
        en: "Tell the doctor your problem directly — 'I have a fever', 'My head hurts'.",
        hi: "डॉक्टर को दिक्कत सीधे बताएँ — 'I have a fever', 'My head hurts'।",
      },
      synonyms: ["physician", "medic"],
      antonyms: ["patient"],
    },
  },
  {
    word: "neighbour",
    level: "beginner",
    category: "daily",
    unit: 2,
    data: {
      pronunciation: "নেইবার",
      partOfSpeech: "noun",
      meaning: {
        bn: "প্রতিবেশী — পাশের বাড়িতে যে থাকে",
        en: "a person living next to you",
        hi: "पड़ोसी — बगल में रहने वाला व्यक्ति",
      },
      englishMeaning: "a person who lives next door or nearby",
      examples: [
        { en: "Our neighbour always helps us when we need anything.", bn: "কিছু দরকার হলেই আমাদের প্রতিবেশী সাহায্য করে।" },
        { en: "The neighbour's dog barks all night.", bn: "প্রতিবেশীর কুকুরটা সারা রাত ঘেউ ঘেউ করে।" },
      ],
      tip: {
        bn: "ব্রিটিশ বানান 'neighbour', আমেরিকান 'neighbor' — দুটোই ঠিক, একটা বেছে নিয়ে একই রাখুন।",
        en: "British spelling is 'neighbour', American is 'neighbor' — both are correct; just stay consistent.",
        hi: "ब्रिटिश वर्तनी 'neighbour', अमेरिकी 'neighbor' — दोनों सही हैं, बस एक का इस्तेमाल करें।",
      },
      synonyms: ["neighbor", "local"],
      antonyms: ["stranger"],
    },
  },
  {
    word: "child",
    level: "beginner",
    category: "daily",
    unit: 2,
    data: {
      pronunciation: "চাইল্ড",
      partOfSpeech: "noun",
      meaning: {
        bn: "বাচ্চা — যে মানুষ এখনো ছোট, বড় হয়নি",
        en: "a young person",
        hi: "बच्चा — जो अभी छोटा है",
      },
      englishMeaning: "a young person; a boy or girl",
      examples: [
        { en: "Every child loves to play.", bn: "প্রতিটা বাচ্চাই খেলতে ভালোবাসে।" },
        { en: "The children are going to school together.", bn: "বাচ্চারা একসাথে স্কুলে যাচ্ছে।" },
      ],
      tip: {
        bn: "'child'-এর বহুবচন অনিয়মিত 'children' — 'childs' বলবেন না, ভুল।",
        en: "The plural of 'child' is the irregular 'children' — never say 'childs'.",
        hi: "'child' का बहुवचन अनियमित 'children' है — 'childs' कभी न कहें।",
      },
      synonyms: ["kid", "youngster"],
      antonyms: ["adult", "grown-up"],
    },
  },

  // ── Unit 3: Home, food & market ──
  {
    word: "rice",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "রাইস",
      partOfSpeech: "noun",
      meaning: {
        bn: "চাল/ভাত — বাঙালির প্রধান খাবার",
        en: "a grain we eat as food",
        hi: "चावल — हमारा मुख्य भोजन",
      },
      englishMeaning: "small white or brown grains cooked and eaten as food",
      examples: [
        { en: "We eat rice for lunch every day.", bn: "আমরা রোজ দুপুরে ভাত খাই।" },
        { en: "Please buy two kilos of rice from the shop.", bn: "দোকান থেকে দুই কেজি চাল কিনে আও।" },
      ],
      tip: {
        bn: "কাঁচা চাল আর রান্না করা ভাত — দুটোকেই ইংরেজিতে 'rice' বলে।",
        en: "Uncooked rice and cooked rice are both called 'rice' in English.",
        hi: "कच्चे चावल और पके चावल दोनों को ही अंग्रेज़ी में 'rice' कहते हैं।",
      },
      synonyms: ["grain", "paddy"],
      antonyms: ["bread"],
    },
  },
  {
    word: "water",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "ওয়াটার",
      partOfSpeech: "noun",
      meaning: {
        bn: "পানি — যা আমরা পান করি, জীবনের জন্য দরকার",
        en: "the liquid we drink",
        hi: "पानी — जो हम पीते हैं",
      },
      englishMeaning: "the clear liquid that we drink",
      examples: [
        { en: "Please give me a glass of water.", bn: "আমাকে এক গ্লাস পানি দিন।" },
        { en: "Drink plenty of water in summer.", bn: "গরমের দিনে প্রচুর পানি খাও।" },
      ],
      tip: {
        bn: "কারো কাছে পানি চাইতে সবচেয়ে কাজের বাক্য — 'Can I have some water, please?'",
        en: "The most useful line to ask for water: 'Can I have some water, please?'",
        hi: "पानी माँगने की सबसे काम की लाइन: 'Can I have some water, please?'",
      },
      synonyms: ["drinking water", "H2O"],
      antonyms: ["fire"],
    },
  },
  {
    word: "tea",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "টি",
      partOfSpeech: "noun",
      meaning: {
        bn: "চা — চা-পাতা থেকে তৈরি গরম পানীয়",
        en: "a hot drink made from tea leaves",
        hi: "चाय — पत्तियों से बना गर्म पेय",
      },
      englishMeaning: "a hot drink made from dried leaves",
      examples: [
        { en: "Would you like a cup of tea?", bn: "এক কাপ চা খাবেন?" },
        { en: "Father drinks tea every morning.", bn: "বাবা প্রতি সকালে চা খান।" },
      ],
      tip: {
        bn: "চা খাওয়াকে বলে 'have tea' — 'Let's have tea' মানে চা খেতে বসা।",
        en: "Say 'have tea' — 'Let's have tea' means let's sit down for tea.",
        hi: "'have tea' कहें — 'Let's have tea' का मतलब है चाय पीने बैठना।",
      },
      synonyms: ["chai", "cuppa"],
      antonyms: ["coffee"],
    },
  },
  {
    word: "fish",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "ফিশ",
      partOfSpeech: "noun",
      meaning: {
        bn: "মাছ — পানিতে যে প্রাণী থাকে; খাবার হিসেবেও চলে",
        en: "an animal that lives in water",
        hi: "मछली — पानी में रहने वाला जीव",
      },
      englishMeaning: "an animal that lives in water; also its meat as food",
      examples: [
        { en: "We eat fish almost every day.", bn: "আমরা প্রায় প্রতিদিনই মাছ খাই।" },
        { en: "There are many fish in our pond.", bn: "আমাদের পুকুরে অনেক মাছ আছে।" },
      ],
      tip: {
        bn: "বহুবচনেও সাধারণত 'fish' থাকে — 'three fish'; 'fishes' মানে বিভিন্ন জাতের মাছ।",
        en: "The plural is usually 'fish' — 'three fish'; 'fishes' means many kinds of fish.",
        hi: "बहुवचन आमतौर पर 'fish' ही रहता है — 'three fish'; 'fishes' का मतलब कई किस्म की मछलियाँ।",
      },
      synonyms: ["seafood", "catch"],
      antonyms: ["meat"],
    },
  },
  {
    word: "market",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "মার্কেট",
      partOfSpeech: "noun",
      meaning: {
        bn: "বাজার — যেখানে দোকানপাট আর কেনাকাটা হয়",
        en: "a place where people buy and sell things",
        hi: "बाज़ार — जहाँ सामान खरीदा-बेचा जाता है",
      },
      englishMeaning: "a place where people buy and sell goods",
      examples: [
        { en: "Mother goes to the market every Friday.", bn: "আম্মু প্রতি শুক্রবার বাজারে যান।" },
        { en: "Vegetables are cheaper at the local market.", bn: "এলাকার বাজারে সবজির দাম কম।" },
      ],
      tip: {
        bn: "'go to the market' মানে কেনাকাটায় যাওয়া — আমাদের 'বাজারে যাওয়া'-র মতোই ব্যবহার হয়।",
        en: "'Go to the market' means going shopping — used just like going to the bazaar.",
        hi: "'go to the market' का मतलब है खरीदारी करने जाना — हमारे बाज़ार जाने जैसा ही।",
      },
      synonyms: ["bazaar", "shop"],
      antonyms: ["farm"],
    },
  },
  {
    word: "money",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "মানি",
      partOfSpeech: "noun",
      meaning: {
        bn: "টাকা — যা দিয়ে জিনিস কেনা-বেচা হয়",
        en: "coins and notes used for buying",
        hi: "पैसा — जिससे सामान खरीदा जाता है",
      },
      englishMeaning: "coins and notes we use to buy things",
      examples: [
        { en: "I don't have enough money to buy a new phone.", bn: "নতুন ফোন কেনার মতো টাকা আমার নেই।" },
        { en: "He saves money every month.", bn: "সে প্রতি মাসে টাকা জমায়।" },
      ],
      tip: {
        bn: "দোকানে দাম জানতে 'How much does it cost?' — আর টাকা দিতে 'Here you go'।",
        en: "Ask the price with 'How much does it cost?' — hand over money saying 'Here you go'.",
        hi: "दाम पूछने के लिए 'How much does it cost?' — पैसे देते समय 'Here you go' कहें।",
      },
      synonyms: ["cash", "currency"],
      antonyms: ["poverty"],
    },
  },
  {
    word: "house",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "হাউস",
      partOfSpeech: "noun",
      meaning: {
        bn: "বাড়ি — যে ইমারতে পরিবার থাকে",
        en: "a building where people live",
        hi: "घर — जिस इमारत में लोग रहते हैं",
      },
      englishMeaning: "a building where a family lives",
      examples: [
        { en: "Their new house has three rooms.", bn: "তাদের নতুন বাড়িতে তিনটা ঘর আছে।" },
        { en: "We are painting our house before Eid.", bn: "ঈদের আগে আমরা বাড়ি রং করাচ্ছি।" },
      ],
      tip: {
        bn: "'house' মানে ইমারত, 'home' মানে সেই আবেগঘন ঠিকানা — 'East or west, home is best.'",
        en: "'House' is the building; 'home' is the feeling — 'East or west, home is best.'",
        hi: "'house' मतलब इमारत, 'home' मतलब वह एहसास — 'East or west, home is best.'",
      },
      synonyms: ["home", "residence"],
      antonyms: ["tent"],
    },
  },
  {
    word: "room",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "রুম",
      partOfSpeech: "noun",
      meaning: {
        bn: "ঘর/কক্ষ — বাড়ির ভেতরের আলাদা অংশ",
        en: "a part of a house with walls and a door",
        hi: "कमरा — घर के अंदर का एक हिस्सा",
      },
      englishMeaning: "a separate part inside a house or building",
      examples: [
        { en: "My room is small but tidy.", bn: "আমার ঘরটা ছোট, তবে গোছানো।" },
        { en: "The hotel has two rooms free.", bn: "হোটেলে দুটো ঘর খালি আছে।" },
      ],
      tip: {
        bn: "সাবধান: পুরো বাড়ি মানে 'house', ভেতরের একটা ঘর মানে 'room' — বাংলা 'ঘর' দুটোতেই চলে, ইংরেজিতে নয়।",
        en: "Careful: the whole building is a 'house'; one 'room' is inside it. In Bengali 'ghor' covers both — in English it doesn't.",
        hi: "ध्यान दें: पूरी इमारत 'house', अंदर का एक हिस्सा 'room' — हिंदी में 'घर' दोनों के लिए चलता है, अंग्रेज़ी में नहीं।",
      },
      synonyms: ["chamber", "space"],
      antonyms: ["hallway"],
    },
  },
  {
    word: "kitchen",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "কিচেন",
      partOfSpeech: "noun",
      meaning: {
        bn: "রান্নাঘর — যেখানে খাবার রান্না করা হয়",
        en: "the room where food is cooked",
        hi: "रसोई — जहाँ खाना पकाया जाता है",
      },
      englishMeaning: "the room where we cook food",
      examples: [
        { en: "Mother is cooking in the kitchen.", bn: "মা রান্নাঘরে রান্না করছেন।" },
        { en: "We keep the fridge in the kitchen.", bn: "ফ্রিজটা রান্নাঘরে রাখা আছে।" },
      ],
      tip: {
        bn: "ঘরের ভেতরে আছি বোঝাতে 'in' — 'in the kitchen', 'in the room'।",
        en: "Use 'in' for being inside rooms — 'in the kitchen', 'in the room'.",
        hi: "कमरे के अंदर होने के लिए 'in' लगाएँ — 'in the kitchen', 'in the room'।",
      },
      synonyms: ["cookhouse", "galley"],
      antonyms: ["dining room"],
    },
  },
  {
    word: "expensive",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "এক্সপেনসিভ",
      partOfSpeech: "adjective",
      meaning: {
        bn: "দামি — যেটা কিনতে বেশি টাকা লাগে",
        en: "costing a lot of money",
        hi: "महँगा — जिसकी कीमत बहुत हो",
      },
      englishMeaning: "costing a lot of money",
      examples: [
        { en: "This watch is too expensive for me.", bn: "এই ঘড়িটা আমার জন্য অনেক দামি।" },
        { en: "Everything is getting expensive these days.", bn: "এখনকার দিনে সব জিনিসেরই দাম বাড়ছে।" },
      ],
      tip: {
        bn: "'expensive'-র বিপরীত 'cheap' — দামের ধরন জানতে জিজ্ঞেস করুন 'Is it expensive?'",
        en: "The opposite of 'expensive' is 'cheap' — ask 'Is it expensive?' to know the price range.",
        hi: "'expensive' का विलोम 'cheap' है — दाम का अंदाज़ा पाने के लिए पूछें 'Is it expensive?'",
      },
      synonyms: ["costly", "dear"],
      antonyms: ["cheap", "inexpensive"],
    },
  },

  // ── Unit 4: Everyday actions ──
  {
    word: "eat",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "ইট",
      partOfSpeech: "verb",
      meaning: {
        bn: "খাওয়া — খাবার মুখে দিয়ে গিলে ফেলা",
        en: "to put food in your mouth",
        hi: "खाना — भोजन मुँह में लेना",
      },
      englishMeaning: "to put food in your mouth and swallow it",
      examples: [
        { en: "We eat dinner at eight o'clock.", bn: "রাত আটটায় আমরা রাতের খাবার খাই।" },
        { en: "Eat more vegetables — they are good for you.", bn: "বেশি বেশি সবজি খাও, শরীরের জন্য ভালো।" },
      ],
      tip: {
        bn: "বন্ধুকে যত্ন দেখাতে জিজ্ঞেস করুন — 'Have you eaten yet?'",
        en: "Show a friend you care by asking — 'Have you eaten yet?'",
        hi: "दोस्त की फ़िक्र ज़ाहिर करने के लिए पूछें — 'Have you eaten yet?'",
      },
      synonyms: ["have", "consume"],
      antonyms: ["starve"],
    },
  },
  {
    word: "drink",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "ড্রিংক",
      partOfSpeech: "verb",
      meaning: {
        bn: "পান করা — পানি বা অন্য তরল মুখে নিয়ে গেলা",
        en: "to take liquid into your mouth",
        hi: "पीना — तरल चीज़ मुँह में लेना",
      },
      englishMeaning: "to take liquid into your mouth and swallow it",
      examples: [
        { en: "Drink lots of water when it is hot.", bn: "গরম হলে অনেক পানি পান করো।" },
        { en: "Do you want to drink tea or coffee?", bn: "চা খাবে নাকি কফি?" },
      ],
      tip: {
        bn: "চা-কফি 'drink' বা 'have' — দুটোই চলে: 'drink tea', 'have tea'।",
        en: "For tea and coffee use 'drink' or 'have' — both are correct: 'drink tea', 'have tea'.",
        hi: "चाय-कॉफ़ी के लिए 'drink' या 'have' — दोनों ठीक हैं: 'drink tea', 'have tea'।",
      },
      synonyms: ["sip", "gulp"],
      antonyms: ["eat"],
    },
  },
  {
    word: "sleep",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "স্লিপ",
      partOfSpeech: "verb",
      meaning: {
        bn: "ঘুমানো — চোখ বুজে বিশ্রাম নেওয়া",
        en: "to rest with your eyes closed",
        hi: "सोना — आँखें बंद करके आराम करना",
      },
      englishMeaning: "to rest with your eyes closed",
      examples: [
        { en: "Children should sleep at least eight hours.", bn: "বাচ্চাদের কমপক্ষে আট ঘণ্টা ঘুমানো উচিত।" },
        { en: "I sleep early every night.", bn: "আমি প্রতি রাতে তাড়াতাড়ি ঘুমিয়ে পড়ি।" },
      ],
      tip: {
        bn: "'go to bed' মানে শুতে যাওয়া, 'sleep' মানে সত্যিকারের ঘুম — 'I go to bed at ten and sleep at eleven.'",
        en: "'Go to bed' means lying down to sleep; 'sleep' is actually sleeping — 'I go to bed at ten and sleep at eleven.'",
        hi: "'go to bed' मतलब सोने जाना, 'sleep' मतलब असल में सो जाना — 'I go to bed at ten and sleep at eleven.'",
      },
      synonyms: ["nap", "doze"],
      antonyms: ["wake", "awake"],
    },
  },
  {
    word: "go",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "গো",
      partOfSpeech: "verb",
      meaning: {
        bn: "যাওয়া — এক জায়গা থেকে আরেক জায়গায় যাওয়া",
        en: "to move to another place",
        hi: "जाना — एक जगह से दूसरी जगह जाना",
      },
      englishMeaning: "to move or travel to another place",
      examples: [
        { en: "I go to school by bus.", bn: "আমি বাসে স্কুলে যাই।" },
        { en: "Let's go to the market together.", bn: "চলো একসাথে বাজারে যাই।" },
      ],
      tip: {
        bn: "'go to school' ঠিক, কিন্তু 'home'-এর আগে 'to' লাগে না — 'go home'।",
        en: "Say 'go to school' but 'go home' — no 'to' before 'home'.",
        hi: "'go to school' कहें पर 'go home' — 'home' से पहले 'to' नहीं लगता।",
      },
      synonyms: ["move", "travel"],
      antonyms: ["come", "return"],
    },
  },
  {
    word: "come",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "কাম",
      partOfSpeech: "verb",
      meaning: {
        bn: "আসা — কারো কাছে বা এখানে চলে আসা",
        en: "to move towards the speaker or here",
        hi: "आना — यहाँ की ओर आना",
      },
      englishMeaning: "to move towards the speaker or a place",
      examples: [
        { en: "Come here — I need your help.", bn: "একটু এসো তো, তোমার সাহায্য লাগবে।" },
        { en: "Come to our house for dinner.", bn: "রাতের খাবার খেতে আমাদের বাড়িতে চলে আও।" },
      ],
      tip: {
        bn: "নিজের দিকে আসলে 'come', দূরে গেলে 'go' — 'Come with me' বনাম 'Go with him'।",
        en: "'Come' is towards you, 'go' is away from you — 'Come with me' vs 'Go with him'.",
        hi: "'come' मतलब अपनी ओर आना, 'go' मतलब दूर जाना — 'Come with me' बनाम 'Go with him'।",
      },
      synonyms: ["arrive", "approach"],
      antonyms: ["go", "leave"],
    },
  },
  {
    word: "work",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "ওয়ার্ক",
      partOfSpeech: "verb",
      meaning: {
        bn: "কাজ করা — চাকরি বা কোনো কাজে ব্যস্ত থাকা",
        en: "to do a job or task",
        hi: "काम करना — नौकरी या कोई कार्य करना",
      },
      englishMeaning: "to do a job, usually for money",
      examples: [
        { en: "I work in a garment factory in Gazipur.", bn: "আমি গাজীপুরের একটা গার্মেন্টসে কাজ করি।" },
        { en: "I work hard every day.", bn: "আমি প্রতিদিন কঠোর পরিশ্রম করি।" },
      ],
      tip: {
        bn: "'work' বিশেষ্যও ক্রিয়াও — 'I have a lot of work' (বিশেষ্য), 'I work from home' (ক্রিয়া)।",
        en: "'Work' is both a noun and a verb — 'I have a lot of work' (noun), 'I work from home' (verb).",
        hi: "'work' संज्ञा भी है और क्रिया भी — 'I have a lot of work' (संज्ञा), 'I work from home' (क्रिया)।",
      },
      synonyms: ["labor", "toil"],
      antonyms: ["rest", "relax"],
    },
  },
  {
    word: "study",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "স্টাডি",
      partOfSpeech: "verb",
      meaning: {
        bn: "পড়াশোনা করা — কিছু শেখার জন্য সময় দেওয়া",
        en: "to spend time learning",
        hi: "पढ़ाई करना — कुछ सीखने के लिए समय देना",
      },
      englishMeaning: "to spend time learning about something",
      examples: [
        { en: "I study English every evening.", bn: "প্রতি সন্ধ্যায় আমি ইংরেজি পড়ি।" },
        { en: "She studies medicine at university.", bn: "সে বিশ্ববিদ্যালয়ে মেডিসিন পড়ছে।" },
      ],
      tip: {
        bn: "'study' মানে গুরুত্বসহ পড়াশোনা, 'read' মানে বই-পত্র পড়া — 'I study at night and read novels for fun.'",
        en: "'Study' is serious learning; 'read' is going through books — 'I study at night and read novels for fun.'",
        hi: "'study' मतलब गंभीर पढ़ाई, 'read' मतलब किताबें पढ़ना — 'I study at night and read novels for fun.'",
      },
      synonyms: ["learn", "review"],
      antonyms: ["play"],
    },
  },
  {
    word: "read",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "রিড",
      partOfSpeech: "verb",
      meaning: {
        bn: "পড়া — লেখা দেখে সেটা বুঝে নেওয়া",
        en: "to look at words and understand them",
        hi: "पढ़ना — लिखित शब्द देखकर समझना",
      },
      englishMeaning: "to look at written words and understand them",
      examples: [
        { en: "I read a story before bed.", bn: "ঘুমানোর আগে আমি একটা গল্প পড়ি।" },
        { en: "Can you read this English sign?", bn: "এই ইংরেজি সাইনটা কি তুমি পড়তে পারবে?" },
      ],
      tip: {
        bn: "read/read/read — বানান এক, কিন্তু অতীতে উচ্চারণ 'রেড': 'I read a book yesterday.'",
        en: "Spelling stays 'read' in the past too, but it sounds like 'red': 'I read a book yesterday.'",
        hi: "भूतकाल में भी वर्तनी 'read' रहती है, पर उच्चारण 'red' जैसा: 'I read a book yesterday.'",
      },
      synonyms: ["peruse", "scan"],
      antonyms: ["write"],
    },
  },
  {
    word: "write",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "রাইট",
      partOfSpeech: "verb",
      meaning: {
        bn: "লেখা — কাগজে বা ফোনে অক্ষর বা শব্দ লেখা",
        en: "to make words on paper or screen",
        hi: "लिखना — अक्षर या शब्द लिखना",
      },
      englishMeaning: "to make letters or words on paper or a screen",
      examples: [
        { en: "Write your name at the top of the page.", bn: "পাতার উপরে নিজের নাম লেখো।" },
        { en: "I write a diary in English every day.", bn: "প্রতিদিন আমি ইংরেজিতে ডায়েরি লেখি।" },
      ],
      tip: {
        bn: "'write'-এর 'w' চুপচাপ — উচ্চারণ হুবহু 'right'-এর মতো, তাই বানান গুলিয়ে ফেলবেন না।",
        en: "The 'w' in 'write' is silent — it sounds exactly like 'right', so don't mix up the spellings.",
        hi: "'write' का 'w' मौन है — उच्चारण 'right' जैसा ही है, वर्तनी न मिलाइए।",
      },
      synonyms: ["compose", "note down"],
      antonyms: ["erase", "delete"],
    },
  },

  // ── Unit 5: Weather, time & describing ──
  {
    word: "sun",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "সান",
      partOfSpeech: "noun",
      meaning: {
        bn: "সূর্য — যে তারা আমাদের আলো আর তাপ দেয়",
        en: "the star that gives us light and heat",
        hi: "सूरज — जो हमें रोशनी और गर्मी देता है",
      },
      englishMeaning: "the bright star that gives the earth light and heat",
      examples: [
        { en: "The sun rises in the east.", bn: "সূর্য পূর্ব দিকে উঠে।" },
        { en: "Don't go out in the hot sun.", bn: "তীব্র রোদে বাইরে যেয়ো না।" },
      ],
      tip: {
        bn: "রোদকে বলে 'sunshine' বা 'sunlight' — শীতের রোদে বলুন 'The sunshine feels nice.'",
        en: "The sun's light is 'sunshine' or 'sunlight' — say 'The sunshine feels nice.' in winter.",
        hi: "सूरज की रोशनी को 'sunshine' या 'sunlight' कहते हैं — सर्दियों में कहें 'The sunshine feels nice.'",
      },
      synonyms: ["sunshine", "sunlight"],
      antonyms: ["moon"],
    },
  },
  {
    word: "wind",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "উইন্ড",
      partOfSpeech: "noun",
      meaning: {
        bn: "বাতাস/হাওয়া — যা নিজে থেকেই বয়ে যায়",
        en: "moving air",
        hi: "हवा — बहती हुई वायु",
      },
      englishMeaning: "air that moves and blows",
      examples: [
        { en: "A cool wind is blowing from the river.", bn: "নদী থেকে ঠান্ডা হাওয়া বইছে।" },
        { en: "The strong wind knocked down the tree.", bn: "দমকা হাওয়ায় গাছটা পড়ে গেল।" },
      ],
      tip: {
        bn: "নরম হাওয়া 'breeze', প্রবল হাওয়া 'strong wind' — 'What a lovely breeze!'",
        en: "A soft wind is a 'breeze'; a powerful one is a 'strong wind' — 'What a lovely breeze!'",
        hi: "हल्की हवा 'breeze', तेज़ हवा 'strong wind' — 'What a lovely breeze!'",
      },
      synonyms: ["breeze", "gust"],
      antonyms: ["calm"],
    },
  },
  {
    word: "night",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "নাইট",
      partOfSpeech: "noun",
      meaning: {
        bn: "রাত — সূর্য ডোবার পর থেকে ভোর পর্যন্ত সময়",
        en: "the dark time between evening and morning",
        hi: "रात — सूरज डूबने से सुबह तक का समय",
      },
      englishMeaning: "the dark hours between sunset and sunrise",
      examples: [
        { en: "I go to bed at ten at night.", bn: "রাত দশটায় আমি ঘুমাতে যাই।" },
        { en: "The streets stay quiet at night.", bn: "রাতে রাস্তাঘাট শান্ত থাকে।" },
      ],
      tip: {
        bn: "রাতে বিদায় নিতে 'Good night', সন্ধ্যায় দেখা হলে 'Good evening' — গুলিয়ে ফেলবেন না।",
        en: "Say 'Good night' when leaving or going to bed, 'Good evening' when you meet after dark.",
        hi: "विदा लेते या सोते समय 'Good night', रात में मिलते समय 'Good evening' कहें।",
      },
      synonyms: ["nighttime", "evening"],
      antonyms: ["day"],
    },
  },
  {
    word: "morning",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "মর্নিং",
      partOfSpeech: "noun",
      meaning: {
        bn: "সকাল — ভোর থেকে দুপুর পর্যন্ত সময়",
        en: "the time from sunrise to noon",
        hi: "सुबह — सूरज निकलने से दोपहर तक का समय",
      },
      englishMeaning: "the early part of the day, from sunrise to noon",
      examples: [
        { en: "I wake up at six in the morning.", bn: "সকাল ছয়টায় আমি ঘুম থেকে উঠি।" },
        { en: "Every morning I take a walk in the park.", bn: "প্রতি সকালে আমি পার্কে হাঁটতে যাই।" },
      ],
      tip: {
        bn: "দুপুর ১২টার আগে পর্যন্ত 'Good morning' — এরপর বলুন 'Good afternoon'।",
        en: "Say 'Good morning' until 12 noon — after that switch to 'Good afternoon'.",
        hi: "दोपहर 12 बजे तक 'Good morning' कहें — उसके बाद 'Good afternoon'।",
      },
      synonyms: ["dawn", "sunrise"],
      antonyms: ["evening", "night"],
    },
  },
  {
    word: "big",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "বিগ",
      partOfSpeech: "adjective",
      meaning: {
        bn: "বড় — যেটা আকারে অনেকখানি বড়",
        en: "large in size",
        hi: "बड़ा — आकार में बड़ा",
      },
      englishMeaning: "large in size or amount",
      examples: [
        { en: "Dhaka is a very big city.", bn: "ঢাকা খুব বড় একটা শহর।" },
        { en: "They have a big house in the village.", bn: "গ্রামে তাদের একটা বড় বাড়ি আছে।" },
      ],
      tip: {
        bn: "'big' সবচেয়ে সহজ শব্দ; আরও জোর দিতে 'huge' — 'a huge bridge'।",
        en: "'Big' is the simplest word; add force with 'huge' — 'a huge bridge'.",
        hi: "'big' सबसे आसान शब्द है; ज़्यादा ज़ोर के लिए 'huge' — 'a huge bridge'।",
      },
      synonyms: ["large", "huge"],
      antonyms: ["small", "little"],
    },
  },
  {
    word: "small",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "স্মল",
      partOfSpeech: "adjective",
      meaning: {
        bn: "ছোট — যেটা আকারে কম",
        en: "little in size",
        hi: "छोटा — आकार में छोटा",
      },
      englishMeaning: "little; not big",
      examples: [
        { en: "Our flat is small but comfortable.", bn: "আমাদের ফ্ল্যাটটা ছোট, তবে আরামদায়ক।" },
        { en: "A small cup of tea for me, please.", bn: "আমার জন্য ছোট এক কাপ চা দিন।" },
      ],
      tip: {
        bn: "আকারে ছোট 'small'; ছোট ভাই-বোন বোঝাতে 'little brother/sister' বলুন, 'small brother' নয়।",
        en: "'Small' is about size; for a younger brother or sister say 'little brother/sister', not 'small brother'.",
        hi: "'small' आकार के लिए है; छोटे भाई-बहन के लिए 'little brother/sister' कहें, 'small brother' नहीं।",
      },
      synonyms: ["little", "tiny"],
      antonyms: ["big", "large"],
    },
  },
  {
    word: "new",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "নিউ",
      partOfSpeech: "adjective",
      meaning: {
        bn: "নতুন — যেটা সবে তৈরি বা কেনা",
        en: "recently made or bought",
        hi: "नया — जो अभी-अभी बना या खरीदा हो",
      },
      englishMeaning: "recently made, bought, or started",
      examples: [
        { en: "I bought a new school bag.", bn: "নতুন একটা স্কুল ব্যাগ কিনেছি।" },
        { en: "We moved to a new house last month.", bn: "গত মাসে আমরা নতুন বাড়িতে উঠেছি।" },
      ],
      tip: {
        bn: "'new' আর 'knew' (জানতাম)-এর উচ্চারণ একই — বানান দেখে ভুল করবেন না।",
        en: "'New' and 'knew' (past of 'know') sound exactly the same — don't let the spelling trick you.",
        hi: "'new' और 'knew' ('know' का भूतकाल) का उच्चारण बिल्कुल एक जैसा है — वर्तनी से धोखा न खाएँ।",
      },
      synonyms: ["fresh", "modern"],
      antonyms: ["old", "used"],
    },
  },
  {
    word: "old",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "ওল্ড",
      partOfSpeech: "adjective",
      meaning: {
        bn: "পুরনো/বয়স্ক — জিনিস হলে পুরনো, মানুষ হলে বয়স্ক",
        en: "not new; having lived many years",
        hi: "पुराना या बूढ़ा — चीज़ हो तो पुरानी, इंसान हो तो बूढ़ा",
      },
      englishMeaning: "not new; having existed for a long time",
      examples: [
        { en: "He is my old school friend.", bn: "সে আমার স্কুল-জীবনের পুরনো বন্ধু।" },
        { en: "My grandfather is seventy years old.", bn: "আমার দাদুর বয়স সত্তর।" },
      ],
      tip: {
        bn: "বয়স বোঝাতে 'years old' — 'How old are you? — I am ten years old.'",
        en: "Use 'years old' for age — 'How old are you? — I am ten years old.'",
        hi: "उम्र बताने के लिए 'years old' — 'How old are you? — I am ten years old.'",
      },
      synonyms: ["aged", "ancient"],
      antonyms: ["new", "young"],
    },
  },
  {
    word: "fast",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "ফাস্ট",
      partOfSpeech: "adjective",
      meaning: {
        bn: "দ্রুত — যেটা খুব তাড়াতাড়ি চলে বা হয়",
        en: "moving with high speed",
        hi: "तेज़ — जो बहुत रफ़्तार से चले",
      },
      englishMeaning: "moving or happening quickly",
      examples: [
        { en: "This train is very fast.", bn: "এই ট্রেনটা খুব দ্রুত।" },
        { en: "Don't drive so fast!", bn: "এত তাড়াতাড়ি গাড়ি চালাবে না!" },
      ],
      tip: {
        bn: "'fast' বিশেষণও ক্রিয়াবিশেষণও — 'a fast car', 'He runs fast'।",
        en: "'Fast' is both an adjective and an adverb — 'a fast car', 'He runs fast'.",
        hi: "'fast' विशेषण भी है और क्रिया-विशेषण भी — 'a fast car', 'He runs fast'।",
      },
      synonyms: ["quick", "rapid"],
      antonyms: ["slow"],
    },
  },
];
