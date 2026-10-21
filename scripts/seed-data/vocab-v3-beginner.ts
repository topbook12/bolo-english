// ─── Vocabulary journey v3: BEGINNER (20 new entries, units 1–5) ───
// The third enrichment wave for the vocabulary library. Every word adds the
// new `collocations` + `wordFamily` fields (the "journey" upgrade) on top of
// the full trilingual v1/v2 shape. Words continue each unit's complexity arc
// AFTER the v1/v2 words — the seeder gives them the highest sortOrder so a
// unit reads simple → rich in order.
import type { LibraryVocabData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedVocabV3Entry {
  word: string;
  level: LibraryLevel;
  category: string;
  unit: number; // learning-path unit 1-5
  data: LibraryVocabData;
}

export const SEED_VOCAB_V3_BEGINNER: SeedVocabV3Entry[] = [
  // ── Unit 1: আমার অনুভূতি ও শরীর ──
  {
    word: "scared",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "স্কেয়ার্ড",
      partOfSpeech: "adjective",
      meaning: {
        bn: "ভীত — যখন মনে ভয় পাচ্ছে",
        en: "feeling afraid",
        hi: "डरा हुआ — जब मन में डर हो",
      },
      englishMeaning: "feeling afraid or frightened",
      examples: [
        { en: "I am scared of dogs.", bn: "আমি কুকুরে ভয় পাই।" },
        { en: "Don't be scared — the dark is not dangerous.", bn: "ভয় পেয়ো না — অন্ধকার বিপজ্জনক নয়।" },
      ],
      tip: {
        bn: "'scared of' + জিনিস — 'I am scared of heights' (আমি উঁচুতে ভয় পাই)। ভয় দেখানো কাউকে বললে 'Don't be scared'।",
        en: "Use 'scared of' + thing: 'I am scared of heights'. Comfort someone with 'Don't be scared'.",
        hi: "'scared of' + चीज़ — 'I am scared of heights'। साँत्वना के लिए 'Don't be scared' कहें।",
      },
      synonyms: ["afraid", "frightened"],
      antonyms: ["brave", "calm"],
      collocations: ["scared of dogs", "scared to speak", "feel scared"],
      wordFamily: ["scare (v)", "scared (adj)", "scary (adj)", "scarily (adv)"],
    },
  },
  {
    word: "excited",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "এক্সাইটেড",
      partOfSpeech: "adjective",
      meaning: {
        bn: "উত্তেজিত/আনন্দিত — যখন খুব ভালো কিছুর অপেক্ষায় থাকি",
        en: "very happy because something good is coming",
        hi: "उत्साहित — जब कुछ अच्छे होने की प्रतीक्षा हो",
      },
      englishMeaning: "very happy and enthusiastic about something that will happen",
      examples: [
        { en: "I am excited about the trip.", bn: "ভ্রমণ নিয়ে আমি আনন্দিত।" },
        { en: "The kids are excited to open their gifts.", bn: "উপহার খুলতে বাচ্চারা উত্তেজিত।" },
      ],
      tip: {
        bn: "কোনো জিনিস নিয়ে আনন্দিত হলে 'excited about', কিছু করতে আনন্দিত হলে 'excited to' — 'I'm excited to see you!'",
        en: "'excited about' + thing, 'excited to' + action — 'I'm excited to see you!'",
        hi: "'excited about' + चीज़, 'excited to' + क्रिया — 'I'm excited to see you!'",
      },
      synonyms: ["thrilled", "eager"],
      antonyms: ["bored", "calm"],
      collocations: ["excited about", "excited to go", "so excited"],
      wordFamily: ["excite (v)", "excited (adj)", "exciting (adj)", "excitement (n)"],
    },
  },
  {
    word: "lonely",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "লোনলি",
      partOfSpeech: "adjective",
      meaning: {
        bn: "একাকী — যখন মনে খারাপ লাগে কারণ কেউ পাশে নেই",
        en: "sad because you are alone",
        hi: "अकेला — जब कोई साथ न हो तो दुखी होना",
      },
      englishMeaning: "unhappy because you do not have friends or company",
      examples: [
        { en: "Grandma feels lonely in the big house.", bn: "বড় বাড়িতে দাদিমা একাকিত্ব অনুভব করেন।" },
        { en: "Call your friend — he may be lonely.", bn: "বন্ধুকে ফোন করো — সে একা অনুভব করতে পারে।" },
      ],
      tip: {
        bn: "'alone' মানে শুধু একা আছি (কোনো সমস্যা নেই), কিন্তু 'lonely' মানে একাকীত্বে কষ্ট পাচ্ছি — পার্থক্য বুঝে ব্যবহার করুন।",
        en: "'alone' = by yourself (neutral); 'lonely' = sad about being alone. Use them carefully.",
        hi: "'alone' = अकेला होना (सामान्य); 'lonely' = अकेलेपन का दुख। ध्यान से इस्तेमाल करें।",
      },
      synonyms: ["isolated", "friendless"],
      antonyms: ["accompanied", "surrounded"],
      collocations: ["feel lonely", "lonely night", "lonely place"],
      wordFamily: ["lone (adj)", "lonely (adj)", "loneliness (n)"],
    },
  },
  {
    word: "strong",
    level: "beginner",
    category: "daily",
    unit: 1,
    data: {
      pronunciation: "স্ট্রং",
      partOfSpeech: "adjective",
      meaning: {
        bn: "শক্তিশালী — যার শরীর বা মন বেশি শক্ত",
        en: "having much power",
        hi: "मजबूत — जिसमें अधिक शक्ति हो",
      },
      englishMeaning: "having physical power or strength",
      examples: [
        { en: "My father is very strong.", bn: "আমার বাবা খুব শক্তিশালী।" },
        { en: "Drink milk to make your bones strong.", bn: "হাড় শক্ত করতে দুধ খাও।" },
      ],
      tip: {
        bn: "শরীর শক্ত হলে 'strong', চায়ের রং বেশি হলেও 'strong tea' — ইংরেজিতে 'শক্ত চা' বলতে 'strong tea' ব্যবহার হয়!",
        en: "A person can be strong — and so can tea! 'Strong tea' means tea with lots of flavour.",
        hi: "शक्तिशाली व्यक्ति और चाय दोनों के लिए 'strong' — 'Strong tea' = गाढ़ी चाय।",
      },
      synonyms: ["powerful", "sturdy"],
      antonyms: ["weak", "fragile"],
      collocations: ["strong body", "strong tea", "strong wind"],
      wordFamily: ["strength (n)", "strong (adj)", "strongly (adv)", "strengthen (v)"],
    },
  },

  // ── Unit 2: পরিবার ও মানুষ ──
  {
    word: "daughter",
    level: "beginner",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "ডটার",
      partOfSpeech: "noun",
      meaning: {
        bn: "কন্যা/মেয়ে সন্তান",
        en: "a person's female child",
        hi: "बेटी — किसी की लड़की संतान",
      },
      englishMeaning: "someone's female child",
      examples: [
        { en: "My daughter is six years old.", bn: "আমার মেয়েটির বয়স ছয় বছর।" },
        { en: "They have one son and one daughter.", bn: "তাদের এক ছেলে ও এক মেয়ে আছে।" },
      ],
      tip: {
        bn: "মেয়ে সন্তান = daughter, ছেলে সন্তান = son। দুটোই মিলে 'children' — 'I have two children'।",
        en: "Female child = daughter, male child = son. Together they are 'children'.",
        hi: "लड़की = daughter, लड़का = son। दोनों मिलकर 'children' कहलाते हैं।",
      },
      synonyms: ["girl child"],
      antonyms: ["son"],
      collocations: ["my eldest daughter", "baby daughter", "daughter-in-law"],
      wordFamily: ["daughter (n)", "daughterly (adj)", "daughter-in-law (n)"],
    },
  },
  {
    word: "uncle",
    level: "beginner",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "আংকল",
      partOfSpeech: "noun",
      meaning: {
        bn: "চাচা/মামা — বাবা বা মায়ের ভাই",
        en: "your father's or mother's brother",
        hi: "चाचा या मामा — माता-पिता का भाई",
      },
      englishMeaning: "the brother of your mother or father",
      examples: [
        { en: "My uncle lives in the village.", bn: "আমার চাচা গ্রামে থাকেন।" },
        { en: "Uncle brought sweets for us.", bn: "চাচা আমাদের জন্য মিষ্টি এনেছিলেন।" },
      ],
      tip: {
        bn: "ইংরেজিতে চাচা-মামা সবাই 'uncle'; কাকা-ফুপা-মেসো-খালুকেও ভালোবাসা দেখাতে 'uncle' বলা হয়। মহিলা সংস্করণ 'aunt'।",
        en: "English has one word 'uncle' for all kinds of uncles (and even family friends). The female version is 'aunt'.",
        hi: "अंग्रेज़ी में चाचा/मामा सब 'uncle' हैं। महिला रूप 'aunt' है।",
      },
      synonyms: [],
      antonyms: ["aunt"],
      collocations: ["my uncle's house", "Uncle John", "uncle and aunt"],
      wordFamily: ["uncle (n)", "unclely (adj)", "aunt (n)"],
    },
  },
  {
    word: "cousin",
    level: "beginner",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "কাজিন",
      partOfSpeech: "noun",
      meaning: {
        bn: "কাজিন — চাচা/মামা/খালা/ফুফুর ছেলে বা মেয়ে",
        en: "the child of your uncle or aunt",
        hi: "चचेरा/ममेरा भाई-बहन — चाचा/मामा की संतान",
      },
      englishMeaning: "a child of your uncle or aunt",
      examples: [
        { en: "I play cricket with my cousins.", bn: "আমি কাজিনদের সাথে ক্রিকেট খেলি।" },
        { en: "My cousin is coming to stay with us.", bn: "আমার কাজিন আমাদের সাথে থাকতে আসছে।" },
      ],
      tip: {
        bn: "ইংরেজিতে চাচাতো-মামাতো সবাই একটাই শব্দ — cousin। ছেলে-মেয়ে আলাদা করতে হলে 'male cousin' / 'female cousin' বলুন।",
        en: "All cousins (boy or girl) are just 'cousin'. Say 'male cousin' or 'female cousin' if needed.",
        hi: "सभी चचेरे भाई-बहन 'cousin' ही कहलाते हैं। ज़रूरत हो तो 'male/female cousin' कहें।",
      },
      synonyms: [],
      antonyms: [],
      collocations: ["my favourite cousin", "close cousin", "cousin's wedding"],
      wordFamily: ["cousin (n)", "cousinly (adj)", "cousinhood (n)"],
    },
  },
  {
    word: "guest",
    level: "beginner",
    category: "general",
    unit: 2,
    data: {
      pronunciation: "গেস্ট",
      partOfSpeech: "noun",
      meaning: {
        bn: "অতিথি — যে বাড়িতে বেড়াতে আসে",
        en: "a person who visits your home",
        hi: "अतिथि — जो घर आता है",
      },
      englishMeaning: "someone who is visiting your home or a hotel",
      examples: [
        { en: "We have guests tonight.", bn: "আজ রাতে আমাদের অতিথি আসছে।" },
        { en: "Welcome the guests with a smile.", bn: "হাসিমুখে অতিথিদের স্বাগত জানাও।" },
      ],
      tip: {
        bn: "বাড়ির অতিথি = guest; হোটেলের গ্রাহককেও guest বলে। অতিথিপরায়ণতাকে বলে 'hospitality'।",
        en: "A visitor at home is a 'guest' — hotel customers are guests too. Warm welcoming is 'hospitality'.",
        hi: "घर का आगंतुक 'guest'; होटल के ग्राहक भी guest। सत्कार = 'hospitality'।",
      },
      synonyms: ["visitor"],
      antonyms: ["host"],
      collocations: ["welcome a guest", "guest room", "special guest"],
      wordFamily: ["guest (n)", "guesthouse (n)"],
    },
  },

  // ── Unit 3: ঘর, খাবার ও বাজার ──
  {
    word: "sell",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "সেল",
      partOfSpeech: "verb",
      meaning: {
        bn: "বিক্রি করা — টাকার বিনিময়ে কিছু দেওয়া",
        en: "to give something for money",
        hi: "बेचना — पैसे के बदले देना",
      },
      englishMeaning: "to give something to someone in exchange for money",
      examples: [
        { en: "The farmer sells vegetables in the market.", bn: "কৃষক বাজারে সবজি বিক্রি করেন।" },
        { en: "I want to sell my old bicycle.", bn: "আমি আমার পুরনো সাইকেলটি বিক্রি করতে চাই।" },
      ],
      tip: {
        bn: "buy = কেনা, sell = বেচা — বিপরীত জোড়া মনে রাখুন। বিক্রেতাকে বলে 'seller', দোকানকে 'shop'।",
        en: "buy (get) ↔ sell (give). The person is a 'seller', the place is a 'shop'.",
        hi: "buy (खरीदना) ↔ sell (बेचना) — विपरीत जोड़ी। बेचने वाला 'seller'।",
      },
      synonyms: ["trade", "vend"],
      antonyms: ["buy", "purchase"],
      collocations: ["sell fruits", "sell fast", "sell at a low price"],
      wordFamily: ["sell (v)", "sale (n)", "seller (n)", "sold (past)"],
    },
  },
  {
    word: "shop",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "শপ",
      partOfSpeech: "noun · verb",
      meaning: {
        bn: "দোকান / কেনাকাটা করা",
        en: "a place to buy things; to buy things",
        hi: "दुकान / खरीदारी करना",
      },
      englishMeaning: "a place where you buy things; also the act of buying things",
      examples: [
        { en: "Mother is going to the shop.", bn: "মা দোকানে যাচ্ছেন।" },
        { en: "We shop for food every Friday.", bn: "আমরা প্রতি শুক্রবার বাজার করি।" },
      ],
      tip: {
        bn: "একই শব্দ নাউন ও ভার্ব — 'a shop' (দোকান), 'to shop' (কেনাকাটা করা)। কেনাকাটাকর্তা 'shopper', বড় মলকে 'shopping mall'।",
        en: "Same word as noun and verb: 'a shop' (place), 'to shop' (do the buying). A buyer is a 'shopper'.",
        hi: "एक ही शब्द संज्ञा और क्रिया — 'a shop' (दुकान), 'to shop' (खरीदना)।",
      },
      synonyms: ["store", "boutique"],
      antonyms: [],
      collocations: ["go shopping", "corner shop", "shop assistant"],
      wordFamily: ["shop (n/v)", "shopper (n)", "shopping (n)"],
    },
  },
  {
    word: "sweet",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "সুইট",
      partOfSpeech: "adjective · noun",
      meaning: {
        bn: "মিষ্টি / মিষ্টান্ন",
        en: "tasting like sugar; a sugary food",
        hi: "मीठा / मिठाई",
      },
      englishMeaning: "having a taste like sugar; a small sugary food",
      examples: [
        { en: "This mango is very sweet.", bn: "এই আমটা খুব মিষ্টি।" },
        { en: "Children love sweets.", bn: "বাচ্চারা মিষ্টি ভালোবাসে।" },
      ],
      tip: {
        bn: "স্বাদে মিষ্টি = sweet; মানুষের মিষ্টি ব্যবহারও 'sweet' — 'She is so sweet!' মিষ্টির দোকানকে বলে 'sweet shop'।",
        en: "Sweet taste — and sweet people too ('She is so sweet!'). A candy store is a 'sweet shop'.",
        hi: "स्वाद में मीठा और व्यवहार में प्यारा दोनों 'sweet'। मिठाई की दुकान = 'sweet shop'।",
      },
      synonyms: ["sugary", "candy"],
      antonyms: ["bitter", "sour"],
      collocations: ["sweet mango", "sweet shop", "taste sweet"],
      wordFamily: ["sweet (adj/n)", "sweetness (n)", "sweeten (v)", "sweetly (adv)"],
    },
  },
  {
    word: "vegetables",
    level: "beginner",
    category: "daily",
    unit: 3,
    data: {
      pronunciation: "ভেজটেবলস",
      partOfSpeech: "noun",
      meaning: {
        bn: "সবজি — যেমন আলু, বেগুন, শিম",
        en: "plants we eat, like potato and beans",
        hi: "सब्ज़ियाँ — जैसे आलू, बीन्स",
      },
      englishMeaning: "plants that people eat as food, like potatoes and beans",
      examples: [
        { en: "Eat vegetables every day.", bn: "প্রতিদিন সবজি খাও।" },
        { en: "She bought fresh vegetables from the market.", bn: "সে বাজার থেকে টাটকা সবজি কিনেছে।" },
      ],
      tip: {
        bn: "একটি সবজি = a vegetable, সব মিলে vegetables। সবজি খাওয়া মানুষকে বলে 'vegetarian' — যে মাংস খায় না।",
        en: "One = 'a vegetable', many = 'vegetables'. A person who doesn't eat meat is a 'vegetarian'.",
        hi: "एक = 'a vegetable', बहुवचन = 'vegetables'। मांस न खाने वाला 'vegetarian'।",
      },
      synonyms: ["greens", "veggies"],
      antonyms: ["meat"],
      collocations: ["fresh vegetables", "eat vegetables", "vegetable soup"],
      wordFamily: ["vegetable (n)", "vegetarian (n)", "veggie (n)"],
    },
  },

  // ── Unit 4: প্রতিদিনের কাজ ──
  {
    word: "wash",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "ওয়াশ",
      partOfSpeech: "verb",
      meaning: {
        bn: "ধোয়া — পানি দিয়ে পরিষ্কার করা",
        en: "to clean with water",
        hi: "धोना — पानी से साफ़ करना",
      },
      englishMeaning: "to clean something using water and often soap",
      examples: [
        { en: "Wash your hands before eating.", bn: "খাওয়ার আগে হাত ধুয়ে নাও।" },
        { en: "Mother washes clothes in the morning.", bn: "মা সকালে কাপড় ধোয়েন।" },
      ],
      tip: {
        bn: "হাত ধোয়া 'wash your hands', গোসল করা 'take a shower/bath' — গোসলের জন্য 'wash yourself' বলা হয় না সাধারণত।",
        en: "'Wash your hands' — but taking a shower is 'take a shower/bath', not 'wash yourself'.",
        hi: "'Wash your hands' ठीक है; नहाना = 'take a shower/bath'।",
      },
      synonyms: ["clean", "rinse"],
      antonyms: ["dirty"],
      collocations: ["wash hands", "wash clothes", "wash dishes"],
      wordFamily: ["wash (v)", "washing (n)", "washer (n)"],
    },
  },
  {
    word: "rest",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "রেস্ট",
      partOfSpeech: "verb · noun",
      meaning: {
        bn: "বিশ্রাম নেওয়া / বিশ্রাম",
        en: "to relax after work; a time of relaxing",
        hi: "आराम करना / आराम",
      },
      englishMeaning: "to stop working or moving to relax and get energy back",
      examples: [
        { en: "Rest for ten minutes after lunch.", bn: "দুপুরের খাবারের পর দশ মিনিট বিশ্রাম নাও।" },
        { en: "The doctor told him to take rest.", bn: "ডাক্তার তাকে বিশ্রামে থাকতে বলেছেন।" },
      ],
      tip: {
        bn: "'take rest' বাঙালিদের প্রিয়, কিন্তু নেটিভরা বলে 'take a break' বা 'get some rest' — 'I need some rest'।",
        en: "South Asians say 'take rest', but native speakers say 'take a break' or 'get some rest'.",
        hi: "'Take rest' की जगह नेटिव बोलते हैं 'take a break' / 'get some rest'।",
      },
      synonyms: ["relax", "break"],
      antonyms: ["work", "effort"],
      collocations: ["take a break", "rest a little", "day of rest"],
      wordFamily: ["rest (v/n)", "restful (adj)", "restless (adj)"],
    },
  },
  {
    word: "open",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "ওপেন",
      partOfSpeech: "verb · adjective",
      meaning: {
        bn: "খোলা / খুলে দেওয়া",
        en: "not closed; to make something not closed",
        hi: "खुला / खोलना",
      },
      englishMeaning: "not closed; to move something so it is not closed",
      examples: [
        { en: "Open the window, please.", bn: "জানালাটা খুলে দাও, প্লিজ।" },
        { en: "The shop is open till 9 pm.", bn: "দোকানটি রাত ৯টা পর্যন্ত খোলা থাকে।" },
      ],
      tip: {
        bn: "দরজা খোলা, চোখ খোলা, দোকান খোলা — সবাই 'open'। বিপরীত 'close'। মন খোলা মানুষকেও বলে 'an open person'।",
        en: "Doors, eyes, shops — all can be 'open'. The opposite is 'close'. An honest person is 'open' too.",
        hi: "दरवाज़ा, आँख, दुकान — सब 'open'। विपरीत 'close'।",
      },
      synonyms: ["unlocked", "unclosed"],
      antonyms: ["close", "shut"],
      collocations: ["open the door", "open your book", "stay open"],
      wordFamily: ["open (v/adj)", "opening (n)", "opener (n)", "openly (adv)"],
    },
  },
  {
    word: "close",
    level: "beginner",
    category: "daily",
    unit: 4,
    data: {
      pronunciation: "ক্লোজ",
      partOfSpeech: "verb · adjective",
      meaning: {
        bn: "বন্ধ করা / কাছের — দুটি আলাদা অর্থ!",
        en: "to shut; near (two meanings!)",
        hi: "बंद करना / करीब — दो अलग अर्थ!",
      },
      englishMeaning: "to shut something; also means near in distance or friendship",
      examples: [
        { en: "Close the gate before you leave.", bn: "যাওয়ার আগে গেট বন্ধ করো।" },
        { en: "My school is close to my house.", bn: "আমার স্কুল বাড়ির কাছেই।" },
      ],
      tip: {
        bn: "শব্দটি দুই রকম উচ্চারিত হয়: verb 'ক্লোজ়' (বন্ধ করা), adjective 'ক্লোস' (কাছের/ঘনিষ্ঠ) — 'close friend' = ঘনিষ্ঠ বন্ধু।",
        en: "Two pronunciations: verb 'close' (cloze) = shut; adjective 'close' (clos) = near. 'Close friend' = best buddy.",
        hi: "दो उच्चारण: verb 'close' (cloze) = बंद; adjective 'close' (clos) = करीब।",
      },
      synonyms: ["shut", "near"],
      antonyms: ["open", "far"],
      collocations: ["close the door", "close friend", "close to home"],
      wordFamily: ["close (v/adj)", "closely (adv)", "closeness (n)", "closet (n)"],
    },
  },

  // ── Unit 5: আবহাওয়া, সময় ও বর্ণনা ──
  {
    word: "cloudy",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "ক্লাউডি",
      partOfSpeech: "adjective",
      meaning: {
        bn: "মেঘলা — আকাশে মেঘ ভরা",
        en: "full of clouds",
        hi: "बादलों वाला — आसमान में बादल",
      },
      englishMeaning: "when the sky is covered with clouds",
      examples: [
        { en: "It is cloudy today — it may rain.", bn: "আজ মেঘলা — বৃষ্টি হতে পারে।" },
        { en: "The morning was cold and cloudy.", bn: "সকালটা ছিল ঠান্ডা ও মেঘলা।" },
      ],
      tip: {
        bn: "sun → sunny, cloud → cloudy, rain → rainy, wind → windy — আবহাওয়ার শব্দের গোটা পরিবার! সবার শেষে 'y'।",
        en: "sun → sunny, cloud → cloudy, rain → rainy, wind → windy — the whole weather family ends in 'y'!",
        hi: "sun → sunny, cloud → cloudy, rain → rainy — मौसम शब्दों का परिवार 'y' पर खत्म होता है!",
      },
      synonyms: ["overcast", "grey"],
      antonyms: ["clear", "sunny"],
      collocations: ["cloudy sky", "cloudy day", "a bit cloudy"],
      wordFamily: ["cloud (n)", "cloudy (adj)", "cloudless (adj)"],
    },
  },
  {
    word: "storm",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "স্টর্ম",
      partOfSpeech: "noun",
      meaning: {
        bn: "ঝড় — প্রবল বাতাস ও বৃষ্টির সাথে আসা আবহাওয়া",
        en: "very bad weather with strong wind",
        hi: "तूफ़ान — तेज़ हवा के साथ बुरा मौसम",
      },
      englishMeaning: "very bad weather with strong wind and often rain",
      examples: [
        { en: "The storm broke many trees.", bn: "ঝড়ে অনেক গাছ ভেঙে গেছে।" },
        { en: "Stay inside during a storm.", bn: "ঝড়ের সময় ঘরের ভেতরে থাকো।" },
      ],
      tip: {
        bn: "ঝড় = storm; সাগরের ঝড় 'storm', শব হাওয়া 'breeze', বাতাস 'wind'। ঝড়ের আগে আসে 'clouds'।",
        en: "Storm = violent weather; 'breeze' is a soft wind, 'wind' is normal. Storms come after 'clouds'.",
        hi: "तूफ़ान = storm; हल्की हवा 'breeze'। तूफ़ान से पहले 'clouds' आते हैं।",
      },
      synonyms: ["tempest", "gale"],
      antonyms: ["breeze", "calm"],
      collocations: ["heavy storm", "storm warning", "storm hits"],
      wordFamily: ["storm (n)", "stormy (adj)", "stormily (adv)"],
    },
  },
  {
    word: "little",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "লিটল",
      partOfSpeech: "adjective · adverb",
      meaning: {
        bn: "ছোট / অল্প — দুটি ব্যবহার",
        en: "small; a small amount",
        hi: "छोटा / थोड़ा",
      },
      englishMeaning: "small in size; or a small amount of something",
      examples: [
        { en: "The little girl is singing.", bn: "ছোট মেয়েটি গান করছে।" },
        { en: "There is a little milk in the glass.", bn: "গ্লাসে একটু দুধ আছে।" },
      ],
      tip: {
        bn: "'a little' = একটু আছে (যথেষ্ট), 'little' = প্রায় নেই (অপ্রতুল) — 'a little water' vs 'little water' অর্থ আলাদা!",
        en: "'a little' = some (enough); 'little' = almost none. 'a little water' vs 'little water' — different meanings!",
        hi: "'a little' = कुछ है (काफ़ी); 'little' = लगभग नहीं। अर्थ अलग है!",
      },
      synonyms: ["small", "tiny"],
      antonyms: ["big", "much"],
      collocations: ["little brother", "a little time", "little house"],
      wordFamily: ["little (adj)", "littleness (n)"],
    },
  },
  {
    word: "long",
    level: "beginner",
    category: "daily",
    unit: 5,
    data: {
      pronunciation: "লং",
      partOfSpeech: "adjective · adverb",
      meaning: {
        bn: "লম্বা / দীর্ঘ — দৈর্ঘ্য বা সময় দুটোতেই",
        en: "not short; taking much time",
        hi: "लंबा / देर तक",
      },
      englishMeaning: "measuring much from end to end; lasting much time",
      examples: [
        { en: "The road is very long.", bn: "রাস্তাটি খুব লম্বা।" },
        { en: "How long is the movie?", bn: "সিনেমাটা কত দীর্ঘ (সময়)?" },
      ],
      tip: {
        bn: "দৈর্ঘ্যে লম্বা মানুষকেও 'tall' বলা হয় — 'long' বস্তু/সময়ের জন্য। 'How long?' = কতক্ষণ, 'How tall?' = কত লম্বা।",
        en: "People are 'tall', objects and time are 'long'. 'How long?' asks about time, 'How tall?' about height.",
        hi: "इंसान 'tall', वस्तु/समय 'long'। 'How long?' = समय, 'How tall?' = ऊँचाई।",
      },
      synonyms: ["lengthy", "extended"],
      antonyms: ["short"],
      collocations: ["long road", "long time", "all day long"],
      wordFamily: ["long (adj)", "length (n)", "lengthen (v)", "longly (adv)"],
    },
  },
];
