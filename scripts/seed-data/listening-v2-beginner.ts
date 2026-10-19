// ─── Learning-path listening seeds: BEGINNER serial "Sadia Moves to Dhaka" ───
// Part of Task 9 (library enrichment). 5 episodes = 5 path units.
// Story paragraphs are ALWAYS English (that is the listening skill); all
// learner-facing meta text (title/summary/vocabulary meanings/quiz) is
// TriText (bn primary).
//
// Serial: Sadia (22) moves from a village near Rajshahi to Dhaka for college.
// Recurring characters: Aunt Nasrin (খালা), neighbour Mrs. Haque, classmate Joy.
// Level: CEFR A2 — present simple + past simple only, sentences ≤ ~12 words.
// Unit themes: 1 feelings · 2 family & people · 3 home, food & market ·
//              4 everyday actions · 5 weather & describing.
// Each episode ends with a small hook into the next one.
import type {
  LibraryListeningData,
  LibraryLevel,
  LibraryListeningCategory,
} from "../../src/lib/library-types";

export interface SeedListeningV2Entry {
  slug: string;
  level: LibraryLevel;
  category: LibraryListeningCategory;
  minutes: number;
  unit: number; // episode number = path unit (1-5)
  data: LibraryListeningData;
}

export const SEED_LISTENING_V2_BEGINNER: SeedListeningV2Entry[] = [
  /* ── unit 1 · episode 1 · theme: feelings · travel ────────────────── */
  {
    slug: "sadia-dhaka-ep1",
    level: "beginner",
    category: "travel",
    minutes: 2,
    unit: 1,
    data: {
      title: {
        bn: "সাদিয়া ঢাকায় — পর্ব ১: নতুন শহর",
        en: "Sadia in Dhaka — Episode 1: A New City",
        hi: "सादिया ढाका में — एपिसोड १: नया शहर",
      },
      summary: {
        bn: "সাদিয়া রাজশাহীর কাছের গ্রাম থেকে সকালের ট্রেনে ঢাকায় আসে। পথে সে ক্লান্ত ও ক্ষুধার্ত, তবু মনটা আনন্দে ভরা — আর মনে মনে একটু ভয়ও কাজ করে। স্টেশনে তাকে উষ্ণ হাসিতে অপেক্ষা করছে খালা নাসরিন।",
        en: "Sadia leaves her village near Rajshahi on the morning train. On the way she is tired and hungry, but happy — and a little afraid. Her aunt Nasrin waits at the busy station with a warm smile.",
        hi: "सादिया राजशाही के पास के गाँव से सुबह की ट्रेन में ढाका आती है। रास्ते में वह थकी और भूखी है, फिर भी खुश है — और थोड़ी घबराई भी है। स्टेशन पर मौसी नसरीन गर्मजोशी से उसका इंतज़ार कर रही हैं।",
      },
      paragraphs: [
        "Sadia is twenty-two years old. Her village is near Rajshahi. Today she takes the morning train to Dhaka. She sits near the window and looks at the green fields. The train runs fast. Sadia feels happy, but she also feels a little afraid. Dhaka is very big, and she is alone.",
        "The train stops at many stations. At twelve o'clock, Sadia feels tired and hungry. She eats one banana and drinks water. She thinks about her mother and her father. Then she thinks about her aunt Nasrin. Aunt Nasrin lives in Dhaka. Sadia wants to see her aunt very much.",
        "After four hours, the train arrives at Dhaka station. Sadia takes her big bag and walks out. The station is very crowded. People run everywhere, and the noise is loud. Sadia stands still for one minute. Then she hears a warm voice. \"Sadia! Here!\" Aunt Nasrin smiles and opens her arms.",
        "Sadia feels happy now. Her fear goes away. \"Aunt Nasrin, I am hungry,\" she says with a smile. Her aunt laughs. \"We eat at home. It is not far.\" They take a rickshaw through the big city. Sadia looks at the tall buildings. \"Tomorrow is a new day,\" Aunt Nasrin says.",
      ],
      vocabulary: [
        {
          word: "station",
          meaning: {
            bn: "স্টেশন — ট্রেন ওঠা-নামার জায়গা",
            en: "the place where trains stop",
            hi: "स्टेशन — जहाँ ट्रेन रुकती और छूटती है",
          },
          example: "My father waits for me at the station.",
        },
        {
          word: "tired",
          meaning: {
            bn: "ক্লান্ত — শরীরে আর শক্তি নেই",
            en: "with no energy, needing rest",
            hi: "थका हुआ — जिसमें ऊर्जा नहीं बची",
          },
          example: "After the long walk, I feel tired.",
        },
        {
          word: "hungry",
          meaning: {
            bn: "ক্ষুধার্ত — খাওয়ার ইচ্ছা করছে",
            en: "wanting to eat",
            hi: "भूखी — खाने का मन कर रहा है",
          },
          example: "I am hungry. Let's eat lunch.",
        },
        {
          word: "afraid",
          meaning: {
            bn: "ভীত — মনে ভয় বা অনিশ্চয়তা কাজ করছে",
            en: "feeling fear about something",
            hi: "डरी हुई — डर का एहसास होना",
          },
          example: "The little boy is afraid of the dark.",
        },
        {
          word: "crowded",
          meaning: {
            bn: "ভিড়ে ভরা — অনেক মানুষ একসাথে",
            en: "full of many people",
            hi: "भीड़भाड़ वाला — बहुत सारे लोगों से भरा",
          },
          example: "The bus is crowded this morning.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "ট্রেনে থাকতে সাদিয়ার অনুভূতি কেমন?",
            en: "How does Sadia feel on the train?",
            hi: "ट्रेन में सादिया को कैसा महसूस होता है?",
          },
          options: [
            { bn: "শুধু ক্লান্ত", en: "Only tired", hi: "सिर्फ़ थकी हुई" },
            {
              bn: "খুশি, কিন্তু একটু ভীত",
              en: "Happy, but a little afraid",
              hi: "खुश, पर थोड़ी घबराई हुई",
            },
            { bn: "রাগান্বিত", en: "Angry", hi: "गुस्से में" },
            { bn: "অসুস্থ", en: "Sick", hi: "बीमार" },
          ],
          answer: 1,
          explain: {
            bn: "প্রথম অনুচ্ছেদে সাদিয়া খুশি বোধ করে, তবে একটু ভয়ও পায় — ঢাকা খুব বড়, আর সে একা।",
            en: "In the first paragraph, Sadia feels happy but also a little afraid — Dhaka is very big and she is alone.",
            hi: "कहानी के पहले अनुच्छेद में सादिया खुश है, पर थोड़ी घबराई भी है — ढाका बहुत बड़ा है और वह अकेली है।",
          },
        },
        {
          question: {
            bn: "ঢাকা স্টেশনে সাদিয়াকে কে দেখা করে?",
            en: "Who meets Sadia at Dhaka station?",
            hi: "ढाका स्टेशन पर सादिया से कौन मिलता है?",
          },
          options: [
            { bn: "তার মা", en: "Her mother", hi: "उसकी मम्मी" },
            { bn: "খালা নাসরিন", en: "Aunt Nasrin", hi: "मौसी नसरीन" },
            { bn: "জয়", en: "Joy", hi: "जॉय" },
            { bn: "মিসেস হক", en: "Mrs. Haque", hi: "मिसेज़ हक़" },
          ],
          answer: 1,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে স্টেশনে এক উষ্ণ কণ্ঠ ডাকে — খালা নাসরিন হাসিমুখে দুই হাত মেলে দাঁড়িয়ে আছেন।",
            en: "In the third paragraph, a warm voice calls at the station — Aunt Nasrin stands there smiling with open arms.",
            hi: "तीसरे अनुच्छेद में स्टेशन पर एक गर्म आवाज़ पुकारती है — मौसी नसरीन मुस्कुराते हुए खड़ी हैं।",
          },
        },
        {
          question: {
            bn: "গল্পের শেষে সাদিয়ার কেমন লাগছে?",
            en: "How does Sadia feel at the end of the story?",
            hi: "कहानी के अंत में सादिया को कैसा लगता है?",
          },
          options: [
            { bn: "ভীত", en: "Afraid", hi: "डरी हुई" },
            { bn: "ক্লান্ত", en: "Tired", hi: "थकी हुई" },
            { bn: "খুশি", en: "Happy", hi: "खुश" },
            { bn: "একাকী", en: "Alone", hi: "अकेली" },
          ],
          answer: 2,
          explain: {
            bn: "শেষ অনুচ্ছেদে খালাকে দেখেই সাদিয়া খুশি হয় — বলা আছে, 'তার ভয় দূর হয়ে যায়'।",
            en: "In the last paragraph, Sadia feels happy — the story says 'Her fear goes away.'",
            hi: "आख़िरी अनुच्छेद में सादिया खुश होती है — लिखा है, 'उसका डर दूर हो जाता है'।",
          },
        },
      ],
    },
  },

  /* ── unit 2 · episode 2 · theme: family & people · daily ──────────── */
  {
    slug: "sadia-dhaka-ep2",
    level: "beginner",
    category: "daily",
    minutes: 2,
    unit: 2,
    data: {
      title: {
        bn: "সাদিয়া ঢাকায় — পর্ব ২: নতুন মানুষ",
        en: "Sadia in Dhaka — Episode 2: New People",
        hi: "सादिया ढाका में — एपिसोड २: नए लोग",
      },
      summary: {
        bn: "সাদিয়া খালার ফ্ল্যাটে থাকা শুরু করে। পাশের ফ্ল্যাটের প্রতিবেশী মিসেস হক আর তার কোলের ছোট্ট বাচ্চার সঙ্গে বন্ধুত্ব হয়ে যায়। রাতে সে গ্রামের বাড়িতে — মা, বাবা আর ছোট ভাইয়ের জন্য — চিঠি লেখে।",
        en: "Sadia settles into her aunt's flat and makes her first friend: Mrs. Haque from the next flat and her little baby. At night, she writes a letter home to her mother, father and little brother.",
        hi: "सादिया अपनी मौसी के फ्लैट में रहना शुरू करती है। पड़ोस वाली मिसेज़ हक़ और उनके छोटे बच्चे से उसकी दोस्ती हो जाती है। रात में वह अपने मम्मी-पापा और छोटे भाई को चिट्ठी लिखती है।",
      },
      paragraphs: [
        "Today Sadia moves into Aunt Nasrin's flat. The flat is on the third floor. It is small, but clean and bright. Sadia has a little room near the window. She puts her clothes in a box and her books on the small table. The flat feels warm.",
        "In the afternoon, someone knocks on the door. It is Mrs. Haque from the next flat. She has a small baby in her arms. \"Welcome, sister!\" she says. \"Come to my home any time.\" The baby looks at Sadia and laughs. Sadia smiles back. Now she knows one neighbour in this big city.",
        "At night, Sadia writes a letter to her family. She writes to her mother, her father and her little brother. \"Dhaka is big, but my aunt is kind,\" she writes. \"I have a nice room and a good neighbour here. Do not worry about me. I am happy in Dhaka.\"",
        "Aunt Nasrin makes hot tea and sits with her. They talk about the family in the village. Sadia remembers her grandmother's stories. Then her aunt says, \"This flat is your home too, Sadia.\" Sadia feels tears in her eyes, but she smiles. \"Tomorrow I cook with you,\" she says. Aunt Nasrin laughs happily.",
      ],
      vocabulary: [
        {
          word: "flat",
          meaning: {
            bn: "ফ্ল্যাট — একটি ভবনে পরিবারের থাকার জায়গা",
            en: "a home inside a big building",
            hi: "फ्लैट — बड़ी इमारत में रहने का घर",
          },
          example: "We live in a small flat on the third floor.",
        },
        {
          word: "neighbour",
          meaning: {
            bn: "প্রতিবেশী — পাশের বাড়ির মানুষ",
            en: "a person who lives next to you",
            hi: "पड़ोसी — आपके पास में रहने वाला व्यक्ति",
          },
          example: "Our neighbour brings us sweets on Eid.",
        },
        {
          word: "baby",
          meaning: {
            bn: "শিশু — খুব ছোট বাচ্চা",
            en: "a very young child",
            hi: "शिशु — बहुत छोटा बच्चा",
          },
          example: "The baby sleeps in her mother's arms.",
        },
        {
          word: "letter",
          meaning: {
            bn: "চিঠি — লিখে পাঠানো বার্তা",
            en: "a message you write and send",
            hi: "चिट्ठी — लिखकर भेजा संदेश",
          },
          example: "Grandmother writes a letter to us every month.",
        },
        {
          word: "family",
          meaning: {
            bn: "পরিবার — বাবা-মা, ভাই-বোন সবাই মিলে",
            en: "parents, brothers and sisters together",
            hi: "परिवार — मम्मी-पापा, भाई-बहन सब मिलकर",
          },
          example: "My family lives in a small village.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "মিসেস হক কোথায় থাকেন?",
            en: "Where does Mrs. Haque live?",
            hi: "मिसेज़ हक़ कहाँ रहती हैं?",
          },
          options: [
            { bn: "গ্রামে", en: "In the village", hi: "गाँव में" },
            { bn: "পাশের ফ্ল্যাটে", en: "In the next flat", hi: "पड़ोस वाले फ्लैट में" },
            { bn: "স্টেশনে", en: "At the station", hi: "स्टेशन पर" },
            { bn: "কলেজে", en: "At the college", hi: "कॉलेज में" },
          ],
          answer: 1,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে দরজায় কড়া নাড়ে পাশের ফ্ল্যাটের মিসেস হক — কোলে তার ছোট্ট বাচ্চা।",
            en: "In the second paragraph, Mrs. Haque from the next flat knocks on the door with her small baby in her arms.",
            hi: "दूसरे अनुच्छेद में पड़ोस वाले फ्लैट की मिसेज़ हक़ दरवाज़ा खटखटाती हैं — गोद में उनका छोटा बच्चा है।",
          },
        },
        {
          question: {
            bn: "সাদিয়া চিঠি কাদের জন্য লেখে?",
            en: "Who does Sadia write the letter to?",
            hi: "सादिया चिट्ठी किसके लिए लिखती है?",
          },
          options: [
            { bn: "তার শিক্ষক", en: "Her teacher", hi: "उसकी टीचर" },
            { bn: "তার বন্ধু জয়", en: "Her friend Joy", hi: "उसका दोस्त जॉय" },
            {
              bn: "মা, বাবা ও ছোট ভাই",
              en: "Her mother, father and little brother",
              hi: "मम्मी, पापा और छोटा भाई",
            },
            { bn: "মিসেস হক", en: "Mrs. Haque", hi: "मिसेज़ हक़" },
          ],
          answer: 2,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে রাতে সাদিয়া চিঠি লেখে — মা, বাবা আর ছোট ভাইয়ের জন্য।",
            en: "In the third paragraph, Sadia writes a letter at night to her mother, father and little brother.",
            hi: "तीसरे अनुच्छेद में सादिया रात में मम्मी, पापा और छोटे भाई को चिट्ठी लिखती है।",
          },
        },
        {
          question: {
            bn: "সাদিয়া কাল কী করবে বলে জানায়?",
            en: "What does Sadia say she will do tomorrow?",
            hi: "सादिया कहती है कि वह कल क्या करेगी?",
          },
          options: [
            { bn: "বাজারে যাওয়া", en: "Going to the market", hi: "मंडी जाना" },
            {
              bn: "গ্রামে ফিরে যাওয়া",
              en: "Going back to her village",
              hi: "गाँव लौट जाना",
            },
            {
              bn: "খালার সঙ্গে রান্না করা",
              en: "Cooking with her aunt",
              hi: "मौसी के साथ खाना बनाना",
            },
            { bn: "আবার চিঠি লেখা", en: "Writing another letter", hi: "दोबारा चिट्ठी लिखना" },
          ],
          answer: 2,
          explain: {
            bn: "গল্পের শেষ অনুচ্ছেদে সাদিয়া বলে, 'কাল আমি তোমার সঙ্গে রান্না করব।'",
            en: "In the last paragraph, Sadia says, \"Tomorrow I cook with you.\"",
            hi: "कहानी के आख़िरी अनुच्छेद में सादिया कहती है, 'कल मैं तुम्हारे साथ खाना बनाऊँगी।'",
          },
        },
      ],
    },
  },

  /* ── unit 3 · episode 3 · theme: home, food & market · daily ──────── */
  {
    slug: "sadia-dhaka-ep3",
    level: "beginner",
    category: "daily",
    minutes: 2,
    unit: 3,
    data: {
      title: {
        bn: "সাদিয়া ঢাকায় — পর্ব ৩: রান্নাঘর ও বাজার",
        en: "Sadia in Dhaka — Episode 3: Kitchen and Market",
        hi: "सादिया ढाका में — एपिसोड ३: रसोई और बाज़ार",
      },
      summary: {
        bn: "সাদিয়া প্রথমবার নিজের হাতে ভাত রান্না করে, আর খালার সঙ্গে যায় ব্যস্ত বাজারে। ঢাকায় মাছ দামি, তবে চা সস্তা। আর রবিবারেই শুরু হতে যাচ্ছে কলেজের প্রথম দিন।",
        en: "Sadia cooks rice for the first time and visits the busy market with her aunt. Fish is expensive in Dhaka, but tea is cheap — and Sunday brings her first day at college.",
        hi: "सादिया पहली बार खुद चावल पकाती है और मौसी के साथ भीड़-भाड़ वाली मंडी में जाती है। ढाका में मछली महँगी है, पर चाय सस्ती — और रविवार को कॉलेज का पहला दिन शुरू होने वाला है।",
      },
      paragraphs: [
        "In the morning, Sadia cooks rice for the first time. The kitchen is small, but it has everything. Aunt Nasrin helps her. \"More water, less fire,\" she says with a smile. At first, the rice is too soft. Sadia's face is red. But the second pot is very good.",
        "After breakfast, they go to the market near the flat. The market is busy and noisy. Sellers call out, \"Come, come!\" There are tomatoes, eggs, rice and fish everywhere. Aunt Nasrin talks with the sellers like old friends. Sadia carries the big bag and looks at everything. The colours are beautiful.",
        "Aunt Nasrin buys fish for Friday. Sadia asks about the price. \"Fish is expensive in Dhaka,\" her aunt says. \"But look — tea is cheap here.\" They drink hot tea at a small shop. It costs ten taka. Sadia likes the busy market very much. It is not like her quiet village.",
        "At home, they cook the fish together. The fish smells wonderful, and the rice is perfect this time. After lunch, Aunt Nasrin says, \"Sunday is your first day at college.\" Sadia feels happy and afraid again. She tidies her bag and puts her books inside. She wants to sleep early tonight.",
      ],
      vocabulary: [
        {
          word: "kitchen",
          meaning: {
            bn: "রান্নাঘর — যেখানে খাবার রান্না হয়",
            en: "the room where you cook food",
            hi: "रसोई — जहाँ खाना पकाया जाता है",
          },
          example: "Mother cooks dinner in the kitchen.",
        },
        {
          word: "rice",
          meaning: {
            bn: "ভাত — সিদ্ধ করা চাল, আমাদের প্রধান খাবার",
            en: "cooked grain, the main food in Bangladesh",
            hi: "चावल — पका हुआ अनाज, हमारा मुख्य भोजन",
          },
          example: "We eat rice and fish every day.",
        },
        {
          word: "market",
          meaning: {
            bn: "বাজার — যেখানে মানুষ জিনিস কেনে ও বিক্রি করে",
            en: "a place where people buy and sell things",
            hi: "बाज़ार — जहाँ लोग चीज़ें खरीदते और बेचते हैं",
          },
          example: "Aunt buys fresh fish from the market.",
        },
        {
          word: "expensive",
          meaning: {
            bn: "দামি — বেশি দামের জিনিস",
            en: "costing a lot of money",
            hi: "महँगा — ज़्यादा पैसे वाली चीज़",
          },
          example: "This shirt is beautiful but expensive.",
        },
        {
          word: "cheap",
          meaning: {
            bn: "সস্তা — কম দামের জিনিস",
            en: "costing little money",
            hi: "सस्ता — कम पैसे वाली चीज़",
          },
          example: "Tea is cheap at this shop.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "সাদিয়া প্রথমবার কী রান্না করে?",
            en: "What does Sadia cook for the first time?",
            hi: "सादिया पहली बार क्या पकाती है?",
          },
          options: [
            { bn: "মাছ", en: "Fish", hi: "मछली" },
            { bn: "ভাত", en: "Rice", hi: "चावल" },
            { bn: "ডিম", en: "Eggs", hi: "अंडे" },
            { bn: "চা", en: "Tea", hi: "चाय" },
          ],
          answer: 1,
          explain: {
            bn: "প্রথম অনুচ্ছেদে সাদিয়া প্রথমবার ভাত রান্না করে; প্রথম হাঁড়ির ভাত বেশি নরম হয়ে যায়।",
            en: "In the first paragraph, Sadia cooks rice for the first time; the rice from the first pot is too soft.",
            hi: "पहले अनुच्छेद में सादिया पहली बार चावल पकाती है; पहली हांडी का चावल ज़्यादा नरम हो जाता है।",
          },
        },
        {
          question: {
            bn: "ঢাকায় কোনটির দাম বেশি?",
            en: "What is expensive in Dhaka?",
            hi: "ढाका में किस चीज़ का दाम ज़्यादा है?",
          },
          options: [
            { bn: "চা", en: "Tea", hi: "चाय" },
            { bn: "পানি", en: "Water", hi: "पानी" },
            { bn: "মাছ", en: "Fish", hi: "मछली" },
            { bn: "ডিম", en: "Eggs", hi: "अंडे" },
          ],
          answer: 2,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে খালা বলেন, 'ঢাকায় মাছ দামি। কিন্তু দেখো — চা এখানে সস্তা।'",
            en: "In the third paragraph Aunt Nasrin says, \"Fish is expensive in Dhaka. But look — tea is cheap here.\"",
            hi: "तीसरे अनुच्छेद में मौसी कहती हैं, 'ढाका में मछली महँगी है। पर देखो — यहाँ चाय सस्ती है।'",
          },
        },
        {
          question: {
            bn: "রবিবার কী হয়?",
            en: "What happens on Sunday?",
            hi: "रविवार को क्या होता है?",
          },
          options: [
            {
              bn: "সাদিয়া গ্রামে ফেরে",
              en: "Sadia goes back to her village",
              hi: "सादिया गाँव लौटती है",
            },
            {
              bn: "সাদিয়ার কলেজের প্রথম দিন",
              en: "Sadia's first day at college",
              hi: "सादिया का कॉलेज का पहला दिन",
            },
            {
              bn: "মিসেস হক বেড়াতে আসে",
              en: "Mrs. Haque visits",
              hi: "मिसेज़ हक़ आती हैं",
            },
            {
              bn: "সারা দিন বৃষ্টি হয়",
              en: "It rains all day",
              hi: "सारा दिन बारिश होती है",
            },
          ],
          answer: 1,
          explain: {
            bn: "শেষ অনুচ্ছেদে দুপুরের পর খালা বলেন, 'রবিবার তোমার কলেজের প্রথম দিন।'",
            en: "In the last paragraph, after lunch, Aunt Nasrin says, \"Sunday is your first day at college.\"",
            hi: "आख़िरी अनुच्छेद में दोपहर के बाद मौसी कहती हैं, 'रविवार तुम्हारा कॉलेज का पहला दिन है।'",
          },
        },
      ],
    },
  },

  /* ── unit 4 · episode 4 · theme: everyday actions · daily ─────────── */
  {
    slug: "sadia-dhaka-ep4",
    level: "beginner",
    category: "daily",
    minutes: 2,
    unit: 4,
    data: {
      title: {
        bn: "সাদিয়া ঢাকায় — পর্ব ৪: প্রতিদিনের কাজ",
        en: "Sadia in Dhaka — Episode 4: Every Day",
        hi: "सादिया ढाका में — एपिसोड ४: रोज़ का काम",
      },
      summary: {
        bn: "সাদিয়ার জীবনে এখন একটা নিয়ম — ভোরে ওঠা, হেঁটে কলেজে যাওয়া, রাতে পড়া। ক্লাসে জয় তার পাশেই বসে। আর শুক্রবারে সে খালাকে ঘর গোছাতে সাহায্য করে।",
        en: "Sadia has a new routine: up at six, a walk to college, study at night. In class, Joy sits beside her. On Friday, she helps her aunt clean the flat.",
        hi: "अब सादिया की ज़िंदगी में एक दिनचर्या है — सुबह जल्दी उठना, पैदल कॉलेज जाना, रात को पढ़ना। क्लास में जॉय उसके पास बैठता है। शुक्रवार को वह मौसी के घर की सफ़ाई में मदद करती है।",
      },
      paragraphs: [
        "Now Sadia has a routine. Every day, she gets up at six. She says her prayers and drinks tea with her aunt. Then she puts on her clothes and takes her bag. She walks to college with the other students. The walk takes fifteen minutes. She sees the same shops every day.",
        "At college, Sadia meets Joy. Joy sits next to her in class. He is a friendly boy from Chittagong. The teacher talks, and they take notes. In the break, they eat puri and drink tea. Joy helps Sadia with hard words. Sadia helps him with maths. They laugh a lot.",
        "In the evening, Sadia studies at her table. She reads her notes and writes new words in a small book. At nine o'clock, she eats dinner with Aunt Nasrin. They talk about the day. Then Sadia helps her aunt wash the dishes. She is tired, but she is happy.",
        "Friday is a holiday. On Friday, Sadia helps her aunt clean the flat. Mrs. Haque comes with her baby, and they talk for a long time. In the afternoon, she meets Joy near the flat. He looks at the dark sky. \"Rain comes to Dhaka soon,\" he says. Sadia loves her new life.",
      ],
      vocabulary: [
        {
          word: "routine",
          meaning: {
            bn: "নিয়ম বা দিনচর্যা — প্রতিদিন একই কাজের ধারা",
            en: "the things you do every day in the same order",
            hi: "दिनचर्या — रोज़ एक ही क्रम में होने वाले काम",
          },
          example: "Reading at night is part of my routine.",
        },
        {
          word: "walk",
          meaning: {
            bn: "হাঁটা — পায়ে হেঁটে যাওয়া",
            en: "to move on your feet",
            hi: "पैदल चलना — अपने पैरों से चलना",
          },
          example: "I walk to school with my friends.",
        },
        {
          word: "study",
          meaning: {
            bn: "পড়াশোনা করা — শেখার জন্য পড়া ও লেখা",
            en: "to read and learn for class",
            hi: "पढ़ाई करना — कक्षा के लिए पढ़ना-सीखना",
          },
          example: "Sadia studies her notes every evening.",
        },
        {
          word: "help",
          meaning: {
            bn: "সাহায্য করা — কারও কাজে হাত লাগানো",
            en: "to do something useful for someone",
            hi: "मदद करना — किसी के काम में हाथ बटाना",
          },
          example: "I help my mother wash the dishes.",
        },
        {
          word: "holiday",
          meaning: {
            bn: "ছুটির দিন — যেদিন কাজ বা ক্লাস থাকে না",
            en: "a day with no work or class",
            hi: "छुट्टी का दिन — जब कोई काम या क्लास नहीं होती",
          },
          example: "Friday is a holiday in Bangladesh.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "সাদিয়া প্রতিদিন কয়টায় ওঠে?",
            en: "What time does Sadia get up?",
            hi: "सादिया रोज़ कितने बजे उठती है?",
          },
          options: [
            { bn: "সাতটায়", en: "At seven", hi: "सात बजे" },
            { bn: "নয়টায়", en: "At nine", hi: "नौ बजे" },
            { bn: "ছয়টায়", en: "At six", hi: "छह बजे" },
            { bn: "বারোটায়", en: "At twelve", hi: "बारह बजे" },
          ],
          answer: 2,
          explain: {
            bn: "প্রথম অনুচ্ছেদে বলা আছে, সাদিয়া প্রতিদিন ছয়টায় ওঠে।",
            en: "The first paragraph says Sadia gets up at six every day.",
            hi: "पहले अनुच्छेद में लिखा है कि सादिया रोज़ छह बजे उठती है।",
          },
        },
        {
          question: {
            bn: "কঠিন শব্দে সাদিয়াকে কে সাহায্য করে?",
            en: "Who helps Sadia with hard words?",
            hi: "मुश्किल शब्दों में सादिया की मदद कौन करता है?",
          },
          options: [
            { bn: "খালা নাসরিন", en: "Aunt Nasrin", hi: "मौसी नसरीन" },
            { bn: "মিসেস হক", en: "Mrs. Haque", hi: "मिसेज़ हक़" },
            { bn: "তার ছোট ভাই", en: "Her little brother", hi: "उसका छोटा भाई" },
            { bn: "জয়", en: "Joy", hi: "जॉय" },
          ],
          answer: 3,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে জয় সাদিয়াকে কঠিন শব্দে সাহায্য করে, আর সাদিয়া তাকে অংকে সাহায্য করে।",
            en: "In the second paragraph, Joy helps Sadia with hard words, and Sadia helps him with maths.",
            hi: "दूसरे अनुच्छेद में जॉय सादिया को मुश्किल शब्दों में मदद करता है, और सादिया उसे गणित में मदद करती है।",
          },
        },
        {
          question: {
            bn: "শুক্রবারে সাদিয়া কী করে?",
            en: "What does Sadia do on Friday?",
            hi: "शुक्रवार को सादिया क्या करती है?",
          },
          options: [
            {
              bn: "সারা দিন পড়ে",
              en: "She studies all day",
              hi: "सारा दिन पढ़ती है",
            },
            {
              bn: "খালাকে ফ্ল্যাট পরিষ্কার করতে সাহায্য করে",
              en: "She helps her aunt clean the flat",
              hi: "मौसी को फ्लैट साफ़ करने में मदद करती है",
            },
            {
              bn: "গ্রামে ফিরে যায়",
              en: "She goes back to her village",
              hi: "गाँव लौट जाती है",
            },
            { bn: "টিভি দেখে", en: "She watches TV", hi: "टीवी देखती है" },
          ],
          answer: 1,
          explain: {
            bn: "শেষ অনুচ্ছেদে শুক্রবারে সাদিয়া খালাকে ফ্ল্যাট পরিষ্কার করতে সাহায্য করে।",
            en: "In the last paragraph, on Friday Sadia helps her aunt clean the flat.",
            hi: "आख़िरी अनुच्छेद में शुक्रवार को सादिया मौसी को फ्लैट साफ़ करने में मदद करती है।",
          },
        },
      ],
    },
  },

  /* ── unit 5 · episode 5 · theme: weather & describing · culture ───── */
  {
    slug: "sadia-dhaka-ep5",
    level: "beginner",
    category: "culture",
    minutes: 2,
    unit: 5,
    data: {
      title: {
        bn: "সাদিয়া ঢাকায় — পর্ব ৫: ছাদে বৃষ্টি",
        en: "Sadia in Dhaka — Episode 5: Rain on the Roof",
        hi: "सादिया ढाका में — एपिसोड ५: छत पर बारिश",
      },
      summary: {
        bn: "ঢাকায় নামে বড় বৃষ্টি, আর শহরটা বদলে যায় — নতুন, সবুজ, সুন্দর। ছাদে জয়ের সঙ্গে দুই কাপ চা খেতে খেতে সাদিয়া বুঝতে পারে: এই শহরই এখন তার ঘর।",
        en: "A big rain changes Dhaka — everything looks new, green and beautiful. On the roof, over two cups of tea with Joy, Sadia understands: this city is her home now.",
        hi: "ढाका में तेज़ बारिश आती है और शहर बदल जाता है — नया, हरा, खूबसूरत। छत पर जॉय के साथ चाय पीते-पीते सादिया समझ जाती है: अब यही शहर उसका घर है।",
      },
      paragraphs: [
        "One afternoon, big clouds cover the sky. Then the rain comes. It falls hard on the streets of Dhaka. The hot city cools down. The air smells new and clean. Sadia stands at the window and looks out. People run with bags over their heads. Children laugh and play in the water.",
        "After the rain, Sadia goes up to the roof. The city looks new and beautiful. The trees are green, and the sky is soft and grey. Water drops shine on the roof. Joy comes up with two cups of tea. \"Rain is good for Dhaka,\" he says. Sadia agrees with a big smile.",
        "They drink their tea and watch the city. The streets shine like a river. A cool wind touches her face. A kite flies far away. Sadia and Joy talk about the college, the market and the big rain. They laugh a lot. The tea is sweet and hot. This simple evening feels very special.",
        "At night, Sadia writes in her small book: \"I was afraid of Dhaka at first. But today, in the rain, this city is my home.\" She thinks about her village, her family and her new friends. More days and more stories wait for her here. Sadia sleeps with a smile.",
      ],
      vocabulary: [
        {
          word: "cloud",
          meaning: {
            bn: "মেঘ — আকাশে ভাসা সাদা বা কালো জলীয় স্তর",
            en: "white or grey water-shapes in the sky",
            hi: "बादल — आकाश में तैरती सफ़ेद या काली परत",
          },
          example: "Big black clouds come before the rain.",
        },
        {
          word: "rain",
          meaning: {
            bn: "বৃষ্টি — আকাশ থেকে পানি নামা",
            en: "water that falls from the sky",
            hi: "बारिश — आकाश से गिरता पानी",
          },
          example: "The rain falls hard on the roof.",
        },
        {
          word: "roof",
          meaning: {
            bn: "ছাদ — বাড়ির একদম ওপরের অংশ",
            en: "the top of a building",
            hi: "छत — इमारत का सबसे ऊपरी हिस्सा",
          },
          example: "We sit on the roof in the evening.",
        },
        {
          word: "beautiful",
          meaning: {
            bn: "সুন্দর — দেখে মন ভালো হয় এমন",
            en: "very nice to look at",
            hi: "सुंदर — देखने में बहुत अच्छा",
          },
          example: "The green trees look beautiful in the rain.",
        },
        {
          word: "sky",
          meaning: {
            bn: "আকাশ — মাথার ওপরের বিস্তৃত স্থান",
            en: "the space above the earth",
            hi: "आकाश — ज़मीन के ऊपर का विशाल स्थान",
          },
          example: "The sky is grey after the rain.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "বৃষ্টির পর সাদিয়া কোথায় যায়?",
            en: "Where does Sadia go after the rain?",
            hi: "बारिश के बाद सादिया कहाँ जाती है?",
          },
          options: [
            { bn: "বাজারে", en: "To the market", hi: "मंडी में" },
            { bn: "ছাদে", en: "To the roof", hi: "छत पर" },
            { bn: "স্টেশনে", en: "To the station", hi: "स्टेशन पर" },
            { bn: "গ্রামে", en: "To her village", hi: "गाँव में" },
          ],
          answer: 1,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে বৃষ্টির পর সাদিয়া ছাদে ওঠে, আর শহরকে তার নতুন ও সুন্দর লাগে।",
            en: "In the second paragraph, after the rain Sadia goes up to the roof, and the city looks new and beautiful.",
            hi: "दूसरे अनुच्छेद में बारिश के बाद सादिया छत पर जाती है, और शहर उसे नया और खूबसूरत लगता है।",
          },
        },
        {
          question: {
            bn: "ছাদে চা নিয়ে কে ওঠে?",
            en: "Who comes up to the roof with tea?",
            hi: "छत पर चाय लेकर कौन आता है?",
          },
          options: [
            { bn: "খালা নাসরিন", en: "Aunt Nasrin", hi: "मौसी नसरीन" },
            { bn: "মিসেস হক", en: "Mrs. Haque", hi: "मिसेज़ हक़" },
            { bn: "তার ছোট ভাই", en: "Her little brother", hi: "उसका छोटा भाई" },
            { bn: "জয়", en: "Joy", hi: "जॉय" },
          ],
          answer: 3,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে জয় দুই কাপ চা নিয়ে ছাদে ওঠে।",
            en: "In the second paragraph, Joy comes up with two cups of tea.",
            hi: "दूसरे अनुच्छेद में जॉय चाय के दो कप लेकर छत पर आता है।",
          },
        },
        {
          question: {
            bn: "রাতে সাদিয়া তার খাতায় কী লেখে?",
            en: "What does Sadia write in her book at night?",
            hi: "रात में सादिया अपनी कॉपी में क्या लिखती है?",
          },
          options: [
            {
              bn: "'আমি বৃষ্টি পছন্দ করি না'",
              en: "\"I do not like rain\"",
              hi: "'मुझे बारिश पसंद नहीं'",
            },
            {
              bn: "'এই শহরই এখন আমার ঘর'",
              en: "\"This city is my home\"",
              hi: "'यह शहर अब मेरा घर है'",
            },
            {
              bn: "'ঢাকা একটা খারাপ শহর'",
              en: "\"Dhaka is a bad city\"",
              hi: "'ढाका एक बुरा शहर है'",
            },
            {
              bn: "'আমি গ্রামে ফিরে যেতে চাই'",
              en: "\"I want to go back to my village\"",
              hi: "'मैं गाँव लौटना चाहती हूँ'",
            },
          ],
          answer: 1,
          explain: {
            bn: "শেষ অনুচ্ছেদে সাদিয়া লেখে, 'প্রথমে আমি ঢাকাকে ভয় পেয়েছিলাম। কিন্তু আজ, বৃষ্টির মধ্যে, এই শহরই আমার ঘর।'",
            en: "In the last paragraph, Sadia writes, \"I was afraid of Dhaka at first. But today, in the rain, this city is my home.\"",
            hi: "आख़िरी अनुच्छेद में सादिया लिखती है, 'पहले मुझे ढाका से डर लगता था। पर आज, बारिश में, यह शहर मेरा घर है।'",
          },
        },
      ],
    },
  },
];
