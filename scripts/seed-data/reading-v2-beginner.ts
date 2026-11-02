// ─── Reading library seeds v2: BEGINNER (A1–A2) ───
// Roadmap D45 content-scale wave: 4 STANDALONE reading passages (unit 0 —
// extras on top of the v1 unit 1–5 series, so the learning path is untouched).
// English paragraphs are the learning content (simple present/past only,
// sentences ≤ 12 words, 5 paragraphs, ~180–230 words each); every paragraph
// carries a faithful bn + hi assist translation. Title/summary/vocab meanings/
// quiz are TriText with bn primary. 6 vocab + 5 quiz per passage.
//
// Entries: 1 Rima's first market (story · daily) · 2 train-station dialog
// (travel) · 3 email to the head teacher (letter · work) · 4 frogs article
// (science).
import type {
  LibraryReadingCategory,
  LibraryReadingData,
  LibraryReadingGenre,
  LibraryLevel,
} from "../../src/lib/library-types";

export interface SeedReadingEntry {
  slug: string;
  level: LibraryLevel;
  category: LibraryReadingCategory;
  minutes: number;
  unit: number; // 0 = standalone
  data: LibraryReadingData;
}

export const SEED_READING_V2_BEGINNER: SeedReadingEntry[] = [
  /* ── standalone · read-b2-market · story · daily ──────────────────── */
  {
    slug: "read-b2-market",
    level: "beginner",
    category: "daily",
    minutes: 2,
    unit: 0,
    data: {
      title: {
        bn: "রিমার প্রথম বাজার",
        en: "Rima's First Market",
        hi: "रिमा की पहली बाज़ार-यात्रा",
      },
      summary: {
        bn: "মা জ্বরে অসুস্থ, তাই ন'বছরের রিমাকে প্রথমবার একা বাজারে যেতে হয়। ভুলে যাওয়া কলা আর এক দয়ালু দোকানদারের হাসিমুখ — ছোট্ট রিমার বড় সাফল্যের গল্প।",
        en: "Mother is sick with fever, so nine-year-old Rima goes to the market alone for the first time. A forgotten bunch of bananas and a kind seller make it a small, sweet victory.",
        hi: "माँ बुख़ार से बीमार है, इसलिए नौ साल की रिमा को पहली बार अकेले बाज़ार जाना पड़ता है। भूली हुई केले की गुच्छी और एक दयालु दुकानदार — छोटी रिमा की बड़ी जीत की कहानी।",
      },
      genre: "story" as LibraryReadingGenre,
      paragraphs: [
        {
          en: "Rima is a student of class three. She lives in Rajbari with her parents. Today her mother has a fever and cannot cook. \"Rima, can you buy some vegetables?\" Mother asks. Rima takes a cloth bag and three hundred taka.",
          bn: "রিমা তৃতীয় শ্রেণির ছাত্রী। সে বাবা-মায়ের সঙ্গে থাকে রাজবাড়ীতে। আজ মায়ের জ্বর হয়েছে, রান্না করার শক্তি নেই। মা বললেন, 'রিমা, একটু সবজি কিনে আসবি?' রিমা একটা কাপড়ের ব্যাগ আর তিনশো টাকা নিয়ে নিল।",
          hi: "रिमा तीसरी कक्षा की छात्रा है। वह अपने माता-पिता के साथ राजबाड़ी में रहती है। आज माँ को बुख़ार है, खाना नहीं बना पाएँगी। माँ ने पूछा, 'रिमा, तुम कुछ सब्ज़ियाँ ले आओगी?' रिमा ने एक कपड़े का थैला और तीन सौ टका ले लिए।",
        },
        {
          en: "The market is only five minutes away. It is busy and noisy. Rima walks to Aunt Shefali's stall. Tomatoes, potatoes, beans, green bananas — everything looks fresh. \"Five hundred grams of tomatoes, please,\" she says. \"And two kilos of potatoes.\"",
          bn: "বাজারটা মাত্র পাঁচ মিনিটের পথ। সেখানে একটা ঝকঝকে ব্যস্ত ভিড়। রিমা হাঁটল শেফালি খালার ঠেলার দিকে। টমেটো, আলু, বরবটি, সবুজ কলা — সব এমন টাটকা। সে বলল, 'আধ কেজি টমেটো দিন, প্লিজ।' 'আর দুই কেজি আলু।'",
          hi: "बाज़ार सिर्फ़ पाँच मिनट की दूरी पर है। वहाँ भीड़ और शोर है। रिमा शेफ़ाली आंटी के स्टॉल पर गई। टमाटर, आलू, सेम, हरे केले — सब कुछ बहुत ताज़ा लग रहा था। उसने कहा, 'आधा किलो टमाटर दीजिए, प्लीज़।' 'और दो किलो आलू।'",
        },
        {
          en: "Aunt Shefali smiles at the small customer. She picks the best tomatoes and puts them in a paper bag. \"One hundred and ten taka, my dear,\" she says. Rima pays with careful fingers. Then she counts the change twice, like Father taught her.",
          bn: "ছোট্ট ক্রেতাটিকে দেখে শেফালি খালা হেসে ফেললেন। সবচেয়ে ভালো টমেটোগুলো বেছে কাগজের ব্যাগে ভরে দিলেন। তিনি বললেন, 'একশো দশ টাকা, সোনা।' রিমা সাবধানে আঙুলে টাকা গুনে দিল। তারপর বাবার শেখানো নিয়মে ভাংতি টাকা দুবার গুনল।",
          hi: "छोटी ग्राहक को देखकर शेफ़ाली आंटी मुस्कुरा दीं। उन्होंने सबसे अच्छे टमाटर चुनकर काग़ज़ के थैले में भर दिए। उन्होंने कहा, 'एक सौ दस टका, बेटा।' रिमा ने सावधानी से उँगलियों से पैसे गिनकर दिए। फिर पिता की सिखाई विधि से छुट्टे पैसे दो बार गिने।",
        },
        {
          en: "At home, Rima opens the bag. Oh no! She forgets the green bananas. For a moment, she wants to cry. Then she checks her money. There are one hundred and ninety taka left. That is enough. Rima runs back to the market.",
          bn: "বাড়ি ফিরে রিমা ব্যাগটা খুলল। কি মশক্কর! সবুজ কলাগুলো কিনতে ভুলেই গেছে। এক মুহূর্তের জন্য কান্না পেয়ে এল। তারপর সে টাকাগুলো দেখল — বুকের পকেটে এখনও একশো নব্বই টাকা বাকি। যথেষ্ট! রিমা ছুটে চলল আবার বাজারের দিকে।",
          hi: "घर आकर रिमा ने थैला खोला। अरे नहीं! वह हरे केले खरीदना भूल गई। एक पल को उसे रोना आ गया। फिर उसने अपने पैसे देखे — जेब में अब भी एक सौ नब्बे टका बचे थे। यह तो काफ़ी था! रिमा फिर से बाज़ार की ओर दौड़ी।",
        },
        {
          en: "The green bananas cost sixty taka. With the change, Rima buys two small sweets for Mother. At home, Mother opens the door and smiles. \"You did everything right,\" she says. Rima stands a little taller. Helping Mother feels wonderful.",
          bn: "সবুজ কলার দাম পড়ল ষাট টাকা। ভাংতি টাকা থেকে রিমা মায়ের জন্য দুটো ছোট্ট মিষ্টি কিনল। বাড়িতে মা দরজা খুলে হাসলেন। তিনি বললেন, 'তুই সব ঠিকঠাক করেছিস বুঝি।' রিমার মাথাটা একটু উঁচু হয়ে গেল নিজেই বুঝি। মায়ের কাজে লাগা কী আনন্দের!",
          hi: "हरे केले की क़ीमत लगी साठ टका। छुट्टे पैसों में रिमा ने माँ के लिए दो छोटी मिठाइयाँ खरीद लीं। घर पर माँ ने दरवाज़ा खोलकर मुस्कुराई। उन्होंने कहा, 'तुमने सब ठीक-ठाक किया है।' रिमा थोड़ा लंबा हो-सा गया। माँ के काम आने में कैसी मस्ती है!",
        },
      ],
      vocabulary: [
        {
          word: "fever",
          meaning: {
            bn: "জ্বর — শরীর গরম হয়ে যাওয়া, অসুস্থতার লক্ষণ",
            en: "a high body temperature when we are sick",
            hi: "बुख़ार — बीमारी में शरीर का गर्म हो जाना",
          },
          example: "The baby has a fever, so he stays in bed.",
        },
        {
          word: "stall",
          meaning: {
            bn: "ঠেলা/স্টল — বাজারের ছোট খোলা দোকান",
            en: "a small open shop in a market",
            hi: "स्टॉल — बाज़ार की छोटी खुली दुकान",
          },
          example: "We buy eggs from the first stall.",
        },
        {
          word: "fresh",
          meaning: {
            bn: "টাটকা — নতুন, এখনও ভালো অবস্থায় থাকা",
            en: "newly picked or made; not old",
            hi: "ताज़ा — नया या अभी तोड़ा हुआ",
          },
          example: "The fish at that stall is always fresh.",
        },
        {
          word: "customer",
          meaning: {
            bn: "ক্রেতা — দোকান থেকে জিনিস কেনা মানুষ",
            en: "a person who buys things from a shop",
            hi: "ग्राहक — दुकान से सामान ख़रीदने वाला व्यक्ति",
          },
          example: "The shopkeeper greets every customer with a smile.",
        },
        {
          word: "change",
          meaning: {
            bn: "ভাংতি টাকা — বেশি টাকা দিলে ফেরত পাওয়া টাকা",
            en: "the money a seller gives back after you pay",
            hi: "छुट्टे पैसे — ज़्यादा पैसे देने पर वापस मिलने वाला धन",
          },
          example: "Keep the change, it is only two taka.",
        },
        {
          word: "wonderful",
          meaning: {
            bn: "আশ্চর্য ভালো — ভীষণ সুন্দর বা আনন্দদায়ক",
            en: "very good or pleasing",
            hi: "बहुत अच्छा — अत्यंत सुंदर या सुखद",
          },
          example: "The mangoes taste wonderful today.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "রিমার মা আজ রান্না করতে পারছেন না কেন?",
            en: "Why can Rima's mother not cook today?",
            hi: "रिमा की माँ आज खाना क्यों नहीं बना पा रही हैं?",
          },
          options: [
            { bn: "সে বাজারে গেছেন", en: "She is at the market", hi: "वे बाज़ार गई हैं" },
            { bn: "তার জ্বর হয়েছে", en: "She has a fever", hi: "उन्हें बुख़ार है" },
            { bn: "রান্নাঘরে গ্যাস নেই", en: "There is no gas in the kitchen", hi: "रसोई में गैस नहीं है" },
            { bn: "সে আত্মীয়ের বাড়িতে", en: "She is at a relative's house", hi: "वे रिश्तेदार के घर पर हैं" },
          ],
          answer: 1,
          explain: {
            bn: "প্রথম অনুচ্ছেদে লেখা — 'আজ মায়ের জ্বর হয়েছে, রান্না করার শক্তি নেই।'",
            en: "The first paragraph says Mother has a fever and cannot cook.",
            hi: "पहला अनुच्छेद कहता है कि माँ को बुख़ार है, इसलिए वे खाना नहीं बना सकतीं।",
          },
        },
        {
          question: {
            bn: "রিমা কোথা থেকে সবজি কেনে?",
            en: "Where does Rima buy the vegetables?",
            hi: "रिमा सब्ज़ियाँ कहाँ से ख़रीदती है?",
          },
          options: [
            { bn: "শেফালি খালার ঠেলা থেকে", en: "From Aunt Shefali's stall", hi: "शेफ़ाली आंटी के स्टॉल से" },
            { bn: "একটা বড় দোকান থেকে", en: "From a big shop", hi: "एक बड़ी दुकान से" },
            { bn: "প্রতিবেশীর বাড়ি থেকে", en: "From a neighbour's house", hi: "पड़ोस के घर से" },
            { bn: "স্কুলের সামনে থেকে", en: "In front of the school", hi: "स्कूल के सामने से" },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে রিমা শেফালি খালার ঠেলায় গিয়ে টমেটো আর আলু কেনে।",
            en: "In the second paragraph, Rima walks to Aunt Shefali's stall to buy tomatoes and potatoes.",
            hi: "दूसरे अनुच्छेद में रिमा शेफ़ाली आंटी के स्टॉल पर जाकर टमाटर और आलू ख़रीदती है।",
          },
        },
        {
          question: {
            bn: "টমেটো আর আলুর মোট দাম কত?",
            en: "How much do the tomatoes and potatoes cost?",
            hi: "टमाटर और आलू की कुल क़ीमत कितनी है?",
          },
          options: [
            { bn: "একশো টাকা", en: "One hundred taka", hi: "एक सौ टका" },
            { bn: "একশো দশ টাকা", en: "One hundred and ten taka", hi: "एक सौ दस टका" },
            { bn: "একশো তিরাশ টাকা", en: "One hundred and thirty taka", hi: "एक सौ तीस टका" },
            { bn: "দুইশো টাকা", en: "Two hundred taka", hi: "दो सौ टका" },
          ],
          answer: 1,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে খালা বলেন — 'একশো দশ টাকা, সোনা।'",
            en: "In the third paragraph, Aunt Shefali says: 'One hundred and ten taka, my dear.'",
            hi: "तीसरे अनुच्छेद में आंटी कहती हैं, 'एक सौ दस टका, बेटा।'",
          },
        },
        {
          question: {
            bn: "রিমা প্রথমে কী কিনতে ভুলে যায়?",
            en: "What does Rima forget to buy at first?",
            hi: "रिमा पहले क्या ख़रीदना भूल जाती है?",
          },
          options: [
            { bn: "আলু", en: "Potatoes", hi: "आलू" },
            { bn: "টমেটো", en: "Tomatoes", hi: "टमाटर" },
            { bn: "সবুজ কলা", en: "Green bananas", hi: "हरे केले" },
            { bn: "মিষ্টি", en: "Sweets", hi: "मिठाई" },
          ],
          answer: 2,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে বাড়ি ফিরে সে দেখে — সবুজ কলাগুলো কিনতেই ভুলে গেছে।",
            en: "In the fourth paragraph, Rima opens the bag at home and remembers she forgot the green bananas.",
            hi: "चौथे अनुच्छेद में घर आकर रिमा को याद आता है कि वह हरे केले ख़रीदना भूल गई।",
          },
        },
        {
          question: {
            bn: "শেষে ভাংতি টাকা থেকে রিমা কী কেনে?",
            en: "What does Rima buy with the change at the end?",
            hi: "अंत में रिमा छुट्टे पैसों में क्या ख़रीदती है?",
          },
          options: [
            { bn: "মায়ের জন্য দুটো ছোট্ট মিষ্টি", en: "Two small sweets for Mother", hi: "माँ के लिए दो छोटी मिठाइयाँ" },
            { bn: "বাবার জন্য একটা কলম", en: "A pen for Father", hi: "पिता के लिए एक पेन" },
            { bn: "নিজের জন্য একটা বই", en: "A book for herself", hi: "अपने लिए एक किताब" },
            { bn: "আরেক কেজি টমেটো", en: "Another kilo of tomatoes", hi: "एक और किलो टमाटर" },
          ],
          answer: 0,
          explain: {
            bn: "শেষ অনুচ্ছেদে লেখা — ভাংতি টাকা থেকে রিমা মায়ের জন্য দুটো ছোট্ট মিষ্টি কেনে।",
            en: "The last paragraph says Rima buys two small sweets for Mother with the change.",
            hi: "अंतिम अनुच्छेद कहता है कि रिमा छुट्टे पैसों में माँ के लिए दो छोटी मिठाइयाँ ख़रीदती है।",
          },
        },
      ],
    },
  },

  /* ── standalone · read-b2-train · dialog · travel ─────────────────── */
  {
    slug: "read-b2-train",
    level: "beginner",
    category: "travel",
    minutes: 2,
    unit: 0,
    data: {
      title: {
        bn: "ট্রেন স্টেশনে",
        en: "At the Train Station",
        hi: "रेलवे स्टेशन पर",
      },
      summary: {
        bn: "আরিফ বাবার সঙ্গে শুক্রবারের সিলেট ট্রিপের টিকিট কিটে কমলাপুর কাউন্টারে সময়, ভাড়া, সিট আর প্ল্যাটফর্ম নিয়ে কথা বলে।",
        en: "Arif buys tickets for a Friday trip to Sylhet at the counter. He and the clerk talk about the time, the price, the seats, and the platform.",
        hi: "आरिफ काउंटर पर शुक्रवार की सिलहट यात्रा के टिकट ख़रीदता है। वह और क्लर्क समय, क़ीमत, सीट और प्लेटफ़ॉर्म के बारे में बात करते हैं।",
      },
      genre: "dialog" as LibraryReadingGenre,
      paragraphs: [
        {
          en: "Arif: Good morning. Two tickets to Sylhet, please. My father and I travel on Friday morning. Is there a good train in the morning?",
          bn: "আরিফ: শুভ সকাল। দুটো সিলেটের টিকিট দিন, প্লিজ। আমি আর আব্বা শুক্রবার সকালে যাব। সকালে কি ভালো কোনো ট্রেন আছে?",
          hi: "आरिफ: सुप्रभात। दो सिलहट के टिकट दीजिए, प्लीज़। मैं और अब्बा शुक्रवार की सुबह जाएँगे। सुबह कोई अच्छी ट्रेन है क्या?",
        },
        {
          en: "Clerk: Good morning. The Upaban Express leaves at six. It reaches Sylhet at two in the afternoon. It is a clean, fast intercity train.",
          bn: "কেরানি: শুভ সকাল। উপবন এক্সপ্রেস ছাড়ে সকাল ছয়টায়। দুপুর দুটোয় পৌঁছে যায় সিলেটে। খুব পরিচ্ছন্ন, দ্রুতগামী এক আন্তঃনগর ট্রেন।",
          hi: "क्लर्क: सुप्रभात। उपबन एक्सप्रेस छह बजे छूटती है। दोपहर दो बजे सिलहट पहुँच जाती है। यह साफ़-सुथरी, तेज़ इंटरसिटी ट्रेन है।",
        },
        {
          en: "Arif: What is the price, please? Clerk: One chair ticket is three hundred and twenty taka. So two tickets are six hundred and forty taka.",
          bn: "আরিফ: ভাড়া কত, প্লিজ? কেরানি: একটা চেয়ারের টিকিট তিনশো বিশ টাকা। তাহলে দুটো টিকিটে লাগবে ছয়শো চল্লিশ টাকা।",
          hi: "आरिफ: किराया कितना है, प्लीज़? क्लर्क: एक चेयर टिकट तीन सौ बीस टका है। तो दो टिकटों में लगेंगे छह सौ चालीस टका।",
        },
        {
          en: "Arif: Can we sit near a window? My father loves the tea gardens. Clerk: Yes. Seats E twelve and E thirteen are by the window.",
          bn: "আরিফ: জানালার পাশে বসা যাবে? আব্বা সিলেটের চা-বাগান দেখতে ভীষণ ভালোবাসেন। কেরানি: হ্যাঁ। ই টুয়েলভ আর ই থার্টিন নম্বর সিট জানালার ধারেই।",
          hi: "आरिफ: क्या हम खिड़की के पास बैठ सकते हैं? अब्बा को चाय के बाग़ान बहुत पसंद हैं। क्लर्क: हाँ। सीट ई ट्वेल्व और ई थर्टीन खिड़की के पास हैं।",
        },
        {
          en: "Arif: Here is six hundred and forty taka. Which platform is the train, please? Clerk: Platform two. Please come thirty minutes early. Have a good journey! Arif: Thank you very much!",
          bn: "আরিফ: এই নিন ছয়শো চল্লিশ টাকা। ট্রেনটা কোন প্ল্যাটফর্মে, প্লিজ? কেরানি: দুই নম্বর প্ল্যাটফর্মে। অনুগ্রহ করে ত্রিশ মিনিট আগে চলে আসবেন। ভালো যাত্রা হোক! আরিফ: অনেক অনেক ধন্যবাদ!",
          hi: "आरिफ: लीजिए, छह सौ चालीस टका। ट्रेन किस प्लेटफ़ॉर्म पर आएगी, प्लीज़? क्लर्क: प्लेटफ़ॉर्म नंबर दो। कृपया तीस मिनट पहले आ जाइए। अच्छी यात्रा हो! आरिफ: बहुत-बहुत धन्यवाद!",
        },
      ],
      vocabulary: [
        {
          word: "express",
          meaning: {
            bn: "এক্সপ্রেস — অল্প স্টেশনে দাঁড়ায় এমন দ্রুতগামী ট্রেন",
            en: "a fast train with few stops",
            hi: "एक्सप्रेस — कम स्टेशनों पर रुकने वाली तेज़ ट्रेन",
          },
          example: "The express reaches Dhaka in four hours.",
        },
        {
          word: "intercity",
          meaning: {
            bn: "আন্তঃনগর — এক শহর থেকে আরেক শহরের মধ্যে চলা",
            en: "travelling between two cities",
            hi: "इंटरसिटी — दो शहरों के बीच चलने वाला",
          },
          example: "We take an intercity bus to Khulna.",
        },
        {
          word: "reach",
          meaning: {
            bn: "পৌঁছানো — কোনো জায়গায় পৌঁছে যাওয়া",
            en: "to arrive at a place",
            hi: "पहुँचना — किसी जगह जा पहुँचना",
          },
          example: "The train reaches the station at six.",
        },
        {
          word: "platform",
          meaning: {
            bn: "প্ল্যাটফর্ম — স্টেশনে ট্রেনের পাশের লম্বা মাচা",
            en: "the long floor beside the train tracks",
            hi: "प्लेटफ़ॉर्म — पटरियों के पास का लंबा फ़र्श",
          },
          example: "Your train leaves from platform two.",
        },
        {
          word: "garden",
          meaning: {
            bn: "বাগান — গাছ লাগানো বড় জমি; এখানে চা-বাগান",
            en: "a piece of land for plants; here, a tea field",
            hi: "बाग़ान — पौधों के लिए बनी ज़मीन; यहाँ चाय का खेत",
          },
          example: "Green tea gardens cover the hills of Sylhet.",
        },
        {
          word: "journey",
          meaning: {
            bn: "যাত্রা — এক জায়গা থেকে আরেক জায়গায় যাওয়া",
            en: "a trip from one place to another",
            hi: "यात्रा — एक जगह से दूसरी जगह जाना",
          },
          example: "The journey takes eight hours by bus.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "আরিফ আর তার বাবা কোথায় যাচ্ছেন?",
            en: "Where do Arif and his father travel?",
            hi: "आरिफ और उसके अब्बा कहाँ जा रहे हैं?",
          },
          options: [
            { bn: "চট্টগ্রাম", en: "Chattogram", hi: "चट्टग्राम" },
            { bn: "রাজশাহী", en: "Rajshahi", hi: "राजशाही" },
            { bn: "সিলেট", en: "Sylhet", hi: "सिलहट" },
            { bn: "খুলনা", en: "Khulna", hi: "खुलना" },
          ],
          answer: 2,
          explain: {
            bn: "আরিফের প্রথম কথাই ছিল — 'দুটো সিলেটের টিকিট দিন, প্লিজ।'",
            en: "Arif's first line is: 'Two tickets to Sylhet, please.'",
            hi: "आरिफ की पहली बात ही थी — 'दो सिलहट के टिकट दीजिए, प्लीज़।'",
          },
        },
        {
          question: {
            bn: "উপবন এক্সপ্রেস কয়টায় ছাড়ে?",
            en: "When does the Upaban Express leave?",
            hi: "उपबन एक्सप्रेस कितने बजे छूटती है?",
          },
          options: [
            { bn: "সকাল ছয়টায়", en: "At six in the morning", hi: "सुबह छह बजे" },
            { bn: "সকাল ন'টায়", en: "At nine in the morning", hi: "सुबह नौ बजे" },
            { bn: "দুপুর দুটোয়", en: "At two in the afternoon", hi: "दोपहर दो बजे" },
            { bn: "রাত দশটায়", en: "At ten at night", hi: "रात दस बजे" },
          ],
          answer: 0,
          explain: {
            bn: "কেরানি বলেন — উপবন এক্সপ্রেস ছাড়ে সকাল ছয়টায়।",
            en: "The clerk says the Upaban Express leaves at six.",
            hi: "क्लर्क कहता है कि उपबन एक्सप्रेस छह बजे छूटती है।",
          },
        },
        {
          question: {
            bn: "দুটো টিকিটের মোট ভাড়া কত?",
            en: "How much are two tickets in total?",
            hi: "दो टिकटों की कुल क़ीमत कितनी है?",
          },
          options: [
            { bn: "তিনশো বিশ টাকা", en: "Three hundred and twenty taka", hi: "तीन सौ बीस टका" },
            { bn: "ছয়শো চল্লিশ টাকা", en: "Six hundred and forty taka", hi: "छह सौ चालीस टका" },
            { bn: "ছয়শো বিশ টাকা", en: "Six hundred and twenty taka", hi: "छह सौ बीस टका" },
            { bn: "সাতশো টাকা", en: "Seven hundred taka", hi: "सात सौ टका" },
          ],
          answer: 1,
          explain: {
            bn: "এক টিকিট তিনশো বিশ টাকা, তাই দুটো মানে ছয়শো চল্লিশ টাকা।",
            en: "One ticket is three hundred and twenty taka, so two tickets are six hundred and forty taka.",
            hi: "एक टिकट तीन सौ बीस टका है, इसलिए दो टिकट छह सौ चालीस टका हुए।",
          },
        },
        {
          question: {
            bn: "আরিফের বাবা জানালার পাশে কী দেখতে চান?",
            en: "What does Arif's father want to see from the window?",
            hi: "आरिफ के अब्बा खिड़की से क्या देखना चाहते हैं?",
          },
          options: [
            { bn: "নদী", en: "The river", hi: "नदी" },
            { bn: "চা-বাগান", en: "The tea gardens", hi: "चाय के बाग़ान" },
            { bn: "গ্রামগুলো", en: "The villages", hi: "गाँव" },
            { bn: "পাহাড়", en: "The hills", hi: "पहाड़ियाँ" },
          ],
          answer: 1,
          explain: {
            bn: "আরিফ বলে — আব্বা সিলেটের চা-বাগান দেখতে ভীষণ ভালোবাসেন।",
            en: "Arif says his father loves the tea gardens of Sylhet.",
            hi: "आरिफ कहता है कि अब्बा को सिलहट के चाय के बाग़ान बहुत पसंद हैं।",
          },
        },
        {
          question: {
            bn: "কেরানি কোন প্ল্যাটফর্মে আসতে বলেন?",
            en: "Which platform does the clerk name?",
            hi: "क्लर्क कौन-सा प्लेटफ़ॉर्म बताता है?",
          },
          options: [
            { bn: "এক নম্বর প্ল্যাটফর্ম", en: "Platform one", hi: "प्लेटफ़ॉर्म नंबर एक" },
            { bn: "দুই নম্বর প্ল্যাটফর্ম", en: "Platform two", hi: "प्लेटफ़ॉर्म नंबर दो" },
            { bn: "তিন নম্বর প্ল্যাটফর্ম", en: "Platform three", hi: "प्लेटफ़ॉर्म नंबर तीन" },
            { bn: "চার নম্বর প্ল্যাটফর্ম", en: "Platform four", hi: "प्लेटफ़ॉर्म नंबर चार" },
          ],
          answer: 1,
          explain: {
            bn: "শেষ অংশে কেরানি বলেন — 'দুই নম্বর প্ল্যাটফর্মে। ত্রিশ মিনিট আগে চলে আসবেন।'",
            en: "The clerk says: 'Platform two. Please come thirty minutes early.'",
            hi: "क्लर्क कहता है, 'प्लेटफ़ॉर्म नंबर दो। कृपया तीस मिनट पहले आ जाइए।'",
          },
        },
      ],
    },
  },

  /* ── standalone · read-b2-email · letter · work ───────────────────── */
  {
    slug: "read-b2-email",
    level: "beginner",
    category: "work",
    minutes: 3,
    unit: 0,
    data: {
      title: {
        bn: "ইংলিশ ক্লাবের চিঠি",
        en: "A Letter to the English Club",
        hi: "इंग्लिश क्लब के लिए चिट्ठी",
      },
      summary: {
        bn: "স্কুলে নতুন ইংলিশ ক্লাব শুরু হচ্ছে। লেখা চিঠির মাধ্যমে সুযোগ চাইল অষ্টম শ্রেণির তানভীর — আর প্রধান শিক্ষকের উত্তরে ভেসে এল খুশির খবর।",
        en: "The school opens a new English Club. Tanvir of class eight writes a letter to join — and the head teacher's reply brings wonderful news.",
        hi: "स्कूल में नया इंग्लिश क्लब शुरू हो रहा है। आठवीं कक्षा के तनवीर ने शामिल होने के लिए चिट्ठी लिखी — और प्रधानाध्यापक के जवाब में आई ख़ुशख़बरी।",
      },
      genre: "letter" as LibraryReadingGenre,
      paragraphs: [
        {
          en: "Tanvir is a student of class eight. His school starts an English Club next month. Every student must write a letter to join. Tanvir wants a place very much. He reads English stories for one hour every day.",
          bn: "তানভীর অষ্টম শ্রেণির ছাত্র। আগামী মাসে তাদের স্কুলে খুলছে নতুন এক ইংলিশ ক্লাব। ভর্তি হতে হলে সব ছাত্রকে একটা করে চিঠি লিখতে হবে। তানভীর ভীষণ চায় ক্লাবে একটা জায়গা। প্রতিদিন এক ঘণ্টা সে ইংরেজি গল্প পড়ে।",
          hi: "तनवीर आठवीं कक्षा का छात्र है। अगले महीने उनके स्कूल में खुलेगा एक नया इंग्लिश क्लब। शामिल होने के लिए हर छात्र को एक चिट्ठी लिखनी होगी। तनवीर क्लब में जगह चाहता है। वह रोज़ एक घंटा इंग्लिश कहानियाँ पढ़ता है।",
        },
        {
          en: "Dear Head Teacher, I am Tanvir Ahmed of class eight. I want to join our new English Club. I read English storybooks at home. I also watch English cartoons without subtitles. But I feel shy when I speak English. I want to practice speaking with my friends.",
          bn: "মাননীয় প্রধান শিক্ষক, আমি তানভীর আহমেদ, অষ্টম শ্রেণির ছাত্র। আমি আমাদের নতুন ইংলিশ ক্লাবে ভর্তি হতে চাই। বাড়িতে আমি ইংরেজি গল্পের বই পড়ি। সাবটাইটেল ছাড়া ইংরেজি কার্টুনও দেখি। কিন্তু ইংরেজিতে কথা বলতে গেলে লজ্জা পাই। বন্ধুদের সঙ্গে কথা বলার অনুশীলন করতে চাই।",
          hi: "माननीय प्रधानाध्यापक, मैं तनवीर अहमद, आठवीं कक्षा का छात्र। मैं हमारे नए इंग्लिश क्लब में शामिल होना चाहता हूँ। घर पर मैं इंग्लिश की कहानियों की किताबें पढ़ता हूँ। बिना सबटाइटल इंग्लिश कार्टून भी देखता हूँ। पर इंग्लिश में बोलते समय झिझक लगती है। मैं दोस्तों के साथ बोलने का अभ्यास करना चाहता हूँ।",
        },
        {
          en: "Please give me a chance in the club. I promise to come every Thursday after class. I will help to make the wall magazine too. Yours faithfully, Tanvir Ahmed, Class Eight, Roll Three.",
          bn: "ক্লাবে আমাকে একটা সুযোগ দিন, প্লিজ। প্রতি বৃহস্পতিবার ক্লাসের পরে আসার প্রতিশ্রুতি দিচ্ছি। দেয়াল-পত্রিকা বানাতেও সাহায্য করব। আপনার বিশ্বস্ত, তানভীর আহমেদ, অষ্টম শ্রেণি, রোল তিন।",
          hi: "कृपया क्लब में मुझे एक मौक़ा दीजिए। मैं वादा करता हूँ कि हर गुरुवार कक्षा के बाद आऊँगा। वॉल-मैगज़ीन बनाने में भी मदद करूँगा। आपका विश्वासभाजन, तनवीर अहमद, आठवीं कक्षा, रोल तीन।",
        },
        {
          en: "On Monday, Tanvir opens his email. There is a reply from the head teacher. \"Dear Tanvir, welcome to the English Club! Your letter is clear and honest. Please come to room five on Thursday at two o'clock. Bring your favourite storybook.\"",
          bn: "সোমবারে তানভীর তার ইমেইল খুলল। প্রধান শিক্ষকের উত্তর এসেই আছে। 'প্রিয় তানভীর, ইংলিশ ক্লাবে স্বাগতম! তোমার চিঠিটা পরিষ্কার আর সৎ। বৃহস্পতিবার দুটোয় পাঁচ নম্বর রুমে এসো। প্রিয় গল্পের বইটা সঙ্গে আনতে ভুলো না।'",
          hi: "सोमवार को तनवीर ने अपना ईमेल खोला। प्रधानाध्यापक का जवाब आ चुका था। 'प्रिय तनवीर, इंग्लिश क्लब में स्वागत है! तुम्हारी चिट्ठी साफ़ और ईमानदार है। गुरुवार को दो बजे पाँच नंबर कमरे में आना। अपनी पसंदीदा कहानी की किताब साथ लाना।'",
        },
        {
          en: "Tanvir reads the email three times. Then he runs to the kitchen. \"Ma, I am in the club!\" he shouts. His mother smiles at him. \"Small steps every day,\" she says. On Thursday, Tanvir walks into room five with a big smile.",
          bn: "তানভীর ইমেইলটা তিনবার পড়ল। তারপর দৌড়ে গেল রান্নাঘরে। 'মা, ক্লাবে আমি ঢুকেছি!' চিৎকার করে বলল সে। মা তাকিয়ে হাসলেন। 'প্রতিদিন একটু একটু করেই তো,' বললেন তিনি। আর বৃহস্পতিবার তানভীর বুকভরা হাসি নিয়েই ঢুকল পাঁচ নম্বর রুমে।",
          hi: "तनवीर ने ईमेल तीन बार पढ़ा। फिर वह रसोई की ओर दौड़ा। 'माँ, मैं क्लब में चुना गया!' वह चिल्लाया। माँ ने उसे देखकर मुस्कुराया। 'रोज़ थोड़ा-थोड़ा कदम ही तो,' उन्होंने कहा। और गुरुवार को तनवीर बड़ी मुस्कान के साथ पाँच नंबर कमरे में दाख़िल हुआ।",
        },
      ],
      vocabulary: [
        {
          word: "club",
          meaning: {
            bn: "ক্লাব — একই রুচির মানুষের দল বা সংগঠন",
            en: "a group of people with the same interest",
            hi: "क्लब — समान रुचि वाले लोगों का समूह",
          },
          example: "The debate club meets on Fridays.",
        },
        {
          word: "shy",
          meaning: {
            bn: "লাজুক — মানুষের সামনে কথা বলতে ইতস্তত করা",
            en: "nervous or afraid to talk to people",
            hi: "शर्मीला — लोगों के सामने बोलने में झिझकने वाला",
          },
          example: "Mina is shy, so she speaks softly.",
        },
        {
          word: "practice",
          meaning: {
            bn: "অনুশীলন — ভালো হতে বারবার করা",
            en: "doing something again and again to get better",
            hi: "अभ्यास — बेहतर होने के लिए बार-बार करना",
          },
          example: "Practice makes your English strong.",
        },
        {
          word: "promise",
          meaning: {
            bn: "প্রতিশ্রুতি — কিছু অবশ্যই করব বলে কথা দেওয়া",
            en: "saying that you will surely do something",
            hi: "वादा — कुछ ज़रूर करने की बात कहना",
          },
          example: "I promise to water the plants today.",
        },
        {
          word: "chance",
          meaning: {
            bn: "সুযোগ — কিছু করার সময় বা সুবিধা",
            en: "an opportunity to do something",
            hi: "मौक़ा — कुछ करने का अवसर",
          },
          example: "Thank you for giving me a chance.",
        },
        {
          word: "honest",
          meaning: {
            bn: "সৎ — সত্য বলে, যে মিথ্যা বলে না",
            en: "always telling the truth",
            hi: "ईमानदार — सच बोलने वाला",
          },
          example: "The honest boy returned the money.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "ক্লাবে ভর্তি হতে ছাত্রদের কী করতে হবে?",
            en: "What must students do to join the club?",
            hi: "क्लब में शामिल होने के लिए छात्रों को क्या करना होगा?",
          },
          options: [
            { bn: "একটা কবিতা আবৃত্তি করতে হবে", en: "Recite a poem", hi: "एक कविता सुनानी होगी" },
            { bn: "একটা চিঠি লিখতে হবে", en: "Write a letter", hi: "एक चिट्ठी लिखनी होगी" },
            { bn: "একটা পরীক্ষা দিতে হবে", en: "Take a test", hi: "एक परीक्षा देनी होगी" },
            { bn: "দেয়াল-পত্রিকা বানাতে হবে", en: "Make a wall magazine", hi: "वॉल-मैगज़ीन बनानी होगी" },
          ],
          answer: 1,
          explain: {
            bn: "প্রথম অনুচ্ছেদে লেখা — ভর্তি হতে সব ছাত্রকে একটা করে চিঠি লিখতে হবে।",
            en: "The first paragraph says every student must write a letter to join.",
            hi: "पहला अनुच्छेद कहता है कि शामिल होने के लिए हर छात्र को चिट्ठी लिखनी होगी।",
          },
        },
        {
          question: {
            bn: "তানভীর প্রতিদিন কী করে?",
            en: "What does Tanvir do every day?",
            hi: "तनवीर रोज़ क्या करता है?",
          },
          options: [
            { bn: "এক ঘণ্টা ইংরেজি গল্প পড়ে", en: "Reads English stories for one hour", hi: "एक घंटा इंग्लिश कहानियाँ पढ़ता है" },
            { bn: "ক্লাবের রুম পরিষ্কার করে", en: "Cleans the club room", hi: "क्लब का कमरा साफ़ करता है" },
            { bn: "শিক্ষকদের সাহায্য করে", en: "Helps the teachers", hi: "अध्यापकों की मदद करता है" },
            { bn: "ক্লাসের আগে আসে", en: "Comes before class", hi: "कक्षा से पहले आता है" },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম অনুচ্ছেদে লেখা — প্রতিদিন এক ঘণ্টা সে ইংরেজি গল্প পড়ে।",
            en: "The first paragraph says he reads English stories for one hour every day.",
            hi: "पहला अनुच्छेद कहता है कि वह रोज़ एक घंटा इंग्लिश कहानियाँ पढ़ता है।",
          },
        },
        {
          question: {
            bn: "তানভীর তার কোন দুর্বলতা স্বীকার করে?",
            en: "Which weakness does Tanvir admit?",
            hi: "तनवीर अपनी कौन-सी कमज़ोरी स्वीकार करता है?",
          },
          options: [
            { bn: "সে পড়তে পারে না", en: "He cannot read", hi: "वह पढ़ नहीं सकता" },
            { bn: "সে ইংরেজিতে কথা বলতে লজ্জা পায়", en: "He feels shy speaking English", hi: "वह इंग्लिश में बोलने में शर्माता है" },
            { bn: "সে দেরিতে আসে", en: "He comes late", hi: "वह देर से आता है" },
            { bn: "সে গল্প লিখতে জানে না", en: "He cannot write stories", hi: "वह कहानियाँ नहीं लिख सकता" },
          ],
          answer: 1,
          explain: {
            bn: "চিঠির প্রথম অংশে সে লেখে — ইংরেজিতে কথা বলতে গেলে লজ্জা পাই।",
            en: "In his letter he writes: 'But I feel shy when I speak English.'",
            hi: "अपनी चिट्ठी में वह लिखता है, 'पर इंग्लिश में बोलते समय झिझक लगती है।'",
          },
        },
        {
          question: {
            bn: "প্রধান শিক্ষকের চিঠিতে কী বলা ছিল?",
            en: "What did the head teacher's reply say?",
            hi: "प्रधानाध्यापक के जवाब में क्या लिखा था?",
          },
          options: [
            { bn: "এক মাস পরে আসতে বলা হয়", en: "Come back after one month", hi: "एक महीने बाद आने को कहा गया" },
            { bn: "অন্য স্কুলে খোঁজতে বলা হয়", en: "Try another school", hi: "दूसरे स्कूल में कोशिश करने को कहा गया" },
            { bn: "বৃহস্পতিবার পাঁচ নম্বর রুমে আসতে বলা হয়", en: "Come to room five on Thursday", hi: "गुरुवार को पाँच नंबर कमरे में आने को कहा गया" },
            { bn: "ইমেইল আর লিখতে বলা হয়", en: "Write another email", hi: "एक और ईमेल लिखने को कहा गया" },
          ],
          answer: 2,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে উত্তরে লেখা — 'বৃহস্পতিবার দুটোয় পাঁচ নম্বর রুমে এসো।'",
            en: "The reply in paragraph four says: 'Please come to room five on Thursday at two o'clock.'",
            hi: "चौथे अनुच्छेद के जवाब में लिखा है, 'गुरुवार को दो बजे पाँच नंबर कमरे में आना।'",
          },
        },
        {
          question: {
            bn: "বৃহস্পতিবার তানভীর কী নিয়ে রুমে ঢোকে?",
            en: "What does Tanvir bring to room five on Thursday?",
            hi: "गुरुवार को तनवीर कमरे में क्या लेकर आता है?",
          },
          options: [
            { bn: "একটা ওয়াল-ম্যাগাজিন", en: "A wall magazine", hi: "एक वॉल-मैगज़ीन" },
            { bn: "একটা নতুন ব্যাগ", en: "A new bag", hi: "एक नया बैग" },
            { bn: "প্রিয় গল্পের একটা বই", en: "His favourite storybook", hi: "अपनी पसंदीदा कहानी की किताब" },
            { bn: "কিছুই না", en: "Nothing", hi: "कुछ नहीं" },
          ],
          answer: 2,
          explain: {
            bn: "উত্তরে শিক্ষক বলেছিলেন প্রিয় গল্পের বইটা আনতে, আর তানভীর তাই করে।",
            en: "The teacher asked him to bring his favourite storybook, and he does.",
            hi: "अध्यापक ने पसंदीदा कहानी की किताब लाने को कहा था, और तनवीर वैसा ही करता है।",
          },
        },
      ],
    },
  },

  /* ── standalone · read-b2-frog · article · science ────────────────── */
  {
    slug: "read-b2-frog",
    level: "beginner",
    category: "science",
    minutes: 3,
    unit: 0,
    data: {
      title: {
        bn: "ব্যাঙ — মাঠের ছোট্ট বন্ধু",
        en: "Frogs: Small Friends of the Field",
        hi: "मेंढक: खेत के छोटे दोस्त",
      },
      summary: {
        bn: "বৃষ্টির পরের ডাকে যে ব্যাঙকে আমরা শুধু শোনে, সে আসলে ধানক্ষেতের রক্ষক — পোকা খায়, পানির স্বাস্থ্য বলে দেয়, আর নিজের মতোই মিষ্টি ভাবে বেড়ে ওঠে।",
        en: "The frog that sings after the rain is really a guard of our rice fields — it eats insects, tells us about clean water, and grows up in a magical way.",
        hi: "बारिश के बाद जो मेंढक गाता है, वही असल में धान के खेत का रक्षक है — वह कीड़े खाता है, पानी की सफ़ाई बताता है, और एक जादुई तरीक़े से बड़ा होता है।",
      },
      genre: "article" as LibraryReadingGenre,
      paragraphs: [
        {
          en: "Do you hear frogs after the first rain? Frogs sing in ponds, canals, and rice fields. In Bangladesh, frogs live almost everywhere. Many people think frogs are dirty animals. But the truth is different. Frogs are small friends of our fields.",
          bn: "প্রথম বৃষ্টির পরে ব্যাঙের ডাক শুনেছ? পুকুরে, খালে, ধানক্ষেতে ব্যাঙের কোলাহল বাজে। বাংলাদেশে ব্যাঙ বাস করে প্রায় সর্বত্র। অনেকে মনে করে, ব্যাঙ নোংরা প্রাণী। কিন্তু সত্যি কথা অন্যরকম। ব্যাঙ আমাদের মাঠের ছোট্ট বন্ধু।",
          hi: "पहली बारिश के बाद मेंढकों की आवाज़ सुनी? पोखरों, नालों और धान के खेतों में मेंढक गाते हैं। बांग्लादेश में मेंढक लगभग हर जगह रहते हैं। कई लोग सोचते हैं कि मेंढक गंदे जीव हैं। पर सच कुछ और है। मेंढक हमारे खेतों के छोटे दोस्त हैं।",
        },
        {
          en: "A frog eats many insects every night. It catches mosquitoes, flies, and worms with its long tongue. One frog can eat hundreds of insects in a night. So farmers love to see frogs in their rice fields. The frogs protect the rice plants.",
          bn: "প্রতি রাতে একটা ব্যাঙ খায় গুটিয়ে বহু পোকা। লম্বা জিভে ধরে ফেলে মশা, মাছি আর কেঁচো। এক রাতেই শত শত পোকা গায়েব করতে পারে ব্যাঙ। তাই ধানক্ষেতে ব্যাঙ দেখলে কৃষকের মন ভরে যায়। ধানগাছগুলোকে রক্ষা করে এই ছোট্ট বন্ধু।",
          hi: "हर रात एक मेंढक बहुत सारे कीड़े खाता है। अपनी लंबी जीभ से पकड़ लेता है मच्छर, मक्खी और केंचुए। एक ही रात में सैकड़ों कीड़े खा सकता है यह। इसलिए धान के खेत में मेंढक देखकर किसान ख़ुश होता है। धान की फ़सल की रक्षा करता है यह छोटा दोस्त।",
        },
        {
          en: "Frogs also tell us about clean water. A frog breathes partly through its skin. So it needs clean water and clean air. When many frogs live in a pond, the water is often clean. When frogs go away, we must think about the water.",
          bn: "পরিচ্ছন্ন পানির খবরও জানিয়ে দেয় ব্যাঙ। ব্যাঙ আংশিকভাবে ত্বক দিয়েই শ্বাস নেয়। তাই এর দরকার পরিষ্কার পানি, পরিষ্কার বাতাস। পুকুরে বহু ব্যাঙ থাকল বুঝবে — পানিটা প্রায়ই ভালো। আর ব্যাঙ চলে গেলে বুঝতে হবে, পানি নিয়ে ভাবতে হবে।",
          hi: "साफ़ पानी की ख़बर भी देता है मेंढक। मेंढक आंशिक रूप से अपनी त्वचा से भी साँस लेता है। इसलिए उसे चाहिए साफ़ पानी, साफ़ हवा। जब पोखर में बहुत सारे मेंढक रहते हैं, तो पानी अक्सर साफ़ होता है। और जब मेंढक चले जाएँ, तो समझना चाहिए कि पानी पर ध्यान देना है।",
        },
        {
          en: "Frogs grow in an interesting way. A mother frog lays her eggs in water. Small tadpoles come out of the eggs. They swim like little fish. After some weeks, they grow legs. Then they become small frogs and leave the water.",
          bn: "মজার নিয়মে বেড়ে ওঠে ব্যাঙ। মা ব্যাঙ পানিতে ছাড়ে ডিম। ডিম থেকে বেরোয় ছোট্ট ছোট্ট ব্যাঙের ছানা। তারা সাঁতার কাটে ছোট্ট মাছের মতো। কয়েক সপ্তাহ পরে গজায় তাদের পা। তারপর হয়ে ওঠে ছোট ব্যাঙ, আর ছেড়ে যায় পানির ঠিকানা।",
          hi: "एक रोचक तरीक़े से बढ़ता है मेंढक। मादा मेंढक पानी में अंडे देती है। अंडों से निकलते हैं छोटे-छोटे मेंढक के बच्चे। वे तैरते हैं छोटी मछलियों की तरह। कुछ हफ़्तों बाद उनके पैर निकल आते हैं। फिर वे छोटे मेंढक बन जाते हैं और पानी को अलविदा कह देते हैं।",
        },
        {
          en: "Sadly, frogs are in danger today. Some people catch too many frogs. Farmers also use strong poison on their fields. We can help these small friends. Keep ponds clean. Never buy wild frogs. Small friends like frogs make our world better.",
          bn: "দুঃখের বিষয়, আজ ব্যাঙেরা বিপদের মুখে। কেউ কেউ অতিরিক্ত ব্যাঙ ধরে। কৃষকেরা মাঠে ব্যবহার করেন প্রবল বিষ। আমরা পারি এই ছোট বন্ধুদের সাহায্য করতে। পুকুর পরিষ্কার রাখি। বুনো ব্যাঙ কেনা থেকে বিরত থাকি। ব্যাঙের মতো ছোট বন্ধুরাই দুনিয়াটাকে করে আরও ভালো।",
          hi: "दुख की बात है, आज मेंढक ख़तरे में हैं। कुछ लोग बहुत ज़्यादा मेंढक पकड़ते हैं। किसान खेतों में तेज़ ज़हर भी इस्तेमाल करते हैं। हम इन छोटे दोस्तों की मदद कर सकते हैं। पोखरों को साफ़ रखें। जंगली मेंढक कभी न ख़रीदें। मेंढक जैसे छोटे दोस्त ही दुनिया को बेहतर बनाते हैं।",
        },
      ],
      vocabulary: [
        {
          word: "frog",
          meaning: {
            bn: "ব্যাঙ — পুকুর আর মাঠে লাফানো ছোট প্রাণী",
            en: "a small jumping animal that lives near water",
            hi: "मेंढक — पानी के पास रहने वाला छोटा छलाँग मारने वाला जीव",
          },
          example: "The frog jumps into the pond.",
        },
        {
          word: "insect",
          meaning: {
            bn: "পোকামাকড় — ছয় পায়ের ছোট প্রাণী, যেমন মশা-মাছি",
            en: "a small animal with six legs, like a fly",
            hi: "कीड़ा — छह पैरों वाला छोटा जीव, जैसे मच्छर",
          },
          example: "The spider eats many insects at night.",
        },
        {
          word: "tongue",
          meaning: {
            bn: "জিভ — মুখের ভেতরের নড়াচড়া-করা অঙ্গ",
            en: "the moving part inside the mouth",
            hi: "जीभ — मुँह के अंदर हिलने वाला अंग",
          },
          example: "The frog catches flies with its tongue.",
        },
        {
          word: "tadpole",
          meaning: {
            bn: "ব্যাঙের ছানা — লেজ-ওয়ালা শিশু ব্যাঙ, পানিতে সাঁতারে",
            en: "a baby frog with a tail that swims",
            hi: "मेंढक का बच्चा — पूँछ वाला शिशु मेंढक जो तैरता है",
          },
          example: "We saw tadpoles in the small pond.",
        },
        {
          word: "pond",
          meaning: {
            bn: "পুকুর — ছোট, স্থির পানির জায়গা",
            en: "a small area of still water",
            hi: "पोखर — पानी का छोटा स्थिर जलाशय",
          },
          example: "Ducks swim in the village pond.",
        },
        {
          word: "poison",
          meaning: {
            bn: "বিষ — যা খেলে বা ছুঁয়ে অসুস্থ হয়ে পড়ে",
            en: "a substance that can make you very sick",
            hi: "ज़हर — वह पदार्थ जो छूने या खाने से बीमार कर दे",
          },
          example: "Keep the poison away from children.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "একটা ব্যাঙ এক রাতে কী খেতে পারে?",
            en: "What can a frog eat in one night?",
            hi: "एक मेंढक एक रात में क्या खा सकता है?",
          },
          options: [
            { bn: "একটা মাছ", en: "One fish", hi: "एक मछली" },
            { bn: "শত শত পোকা", en: "Hundreds of insects", hi: "सैकड़ों कीड़े" },
            { bn: "শুধু কেঁচো", en: "Only worms", hi: "सिर्फ़ केंचुए" },
            { bn: "ধানের দানা", en: "Rice grains", hi: "धान के दाने" },
          ],
          answer: 1,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে লেখা — এক রাতেই শত শত পোকা গায়েব করতে পারে ব্যাঙ।",
            en: "The second paragraph says one frog can eat hundreds of insects in a night.",
            hi: "दूसरा अनुच्छेद कहता है कि एक रात में मेंढक सैकड़ों कीड़े खा सकता है।",
          },
        },
        {
          question: {
            bn: "ব্যাঙ কী দিয়ে পোকা ধরে?",
            en: "How does a frog catch insects?",
            hi: "मेंढक कीड़े कैसे पकड़ता है?",
          },
          options: [
            { bn: "লম্বা জিভে", en: "With its long tongue", hi: "अपनी लंबी जीभ से" },
            { bn: "শক্ত দাঁতে", en: "With strong teeth", hi: "मज़बूत दाँतों से" },
            { bn: "পানির ঝাপটায়", en: "With splashes of water", hi: "पानी की फुहार से" },
            { bn: "রাতের অন্ধকারে পায়ে", en: "With its feet in the dark", hi: "अंधेरे में पैरों से" },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে লেখা — লম্বা জিভে ধরে ফেলে মশা, মাছি আর কেঁচো।",
            en: "The second paragraph says it catches insects with its long tongue.",
            hi: "दूसरा अनुच्छेद कहता है कि वह लंबी जीभ से कीड़े पकड़ता है।",
          },
        },
        {
          question: {
            bn: "কৃষকেরা কেন মাঠে ব্যাঙ দেখে খুশি হন?",
            en: "Why are farmers happy to see frogs in the fields?",
            hi: "किसान खेत में मेंढक देखकर क्यों ख़ुश होते हैं?",
          },
          options: [
            { bn: "ব্যাঙ ধানগাছ রক্ষা করে", en: "Frogs protect the rice plants", hi: "मेंढक धान की फ़सल की रक्षा करते हैं" },
            { bn: "ব্যাঙের ডাক বৃষ্টি আনে", en: "Frog songs bring rain", hi: "मेंढक की आवाज़ बारिश लाती है" },
            { bn: "ব্যাঙ ধান খেয়ে ফেলে", en: "Frogs eat the rice", hi: "मेंढक धान खा जाते हैं" },
            { bn: "ব্যাঙ জমি খোঁড়ে", en: "Frogs dig the soil", hi: "मेंढक ज़मीन खोदते हैं" },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদের শেষে লেখা — ধানগাছগুলোকে রক্ষা করে এই ছোট্ট বন্ধু।",
            en: "The end of the second paragraph says the frogs protect the rice plants.",
            hi: "दूसरे अनुच्छेद के अंत में कहा गया है कि मेंढक धान की फ़सल की रक्षा करते हैं।",
          },
        },
        {
          question: {
            bn: "ডিম থেকে বেরোয় কী?",
            en: "What comes out of the frog eggs?",
            hi: "मेंढक के अंडों से क्या निकलता है?",
          },
          options: [
            { bn: "ছোট্ট মাছ", en: "Small fish", hi: "छोटी मछलियाँ" },
            { bn: "সাপের বাচ্চা", en: "Baby snakes", hi: "साँप के बच्चे" },
            { bn: "ব্যাঙের ছানা", en: "Tadpoles", hi: "मेंढक के बच्चे" },
            { bn: "পাখির বাচ্চা", en: "Baby birds", hi: "पक्षी के बच्चे" },
          ],
          answer: 2,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে লেখা — ডিম থেকে বেরোয় ছোট্ট ছোট্ট ব্যাঙের ছানা।",
            en: "The fourth paragraph says small tadpoles come out of the eggs.",
            hi: "चौथा अनुच्छेद कहता है कि अंडों से छोटे-छोटे मेंढक के बच्चे निकलते हैं।",
          },
        },
        {
          question: {
            bn: "ব্যাঙের বন্ধুদের সাহায্যে আমরা কী করতে পারি?",
            en: "How can we help frogs?",
            hi: "हम मेंढकों की मदद कैसे कर सकते हैं?",
          },
          options: [
            { bn: "পুকুর পরিষ্কার রেখে", en: "By keeping ponds clean", hi: "पोखरों को साफ़ रखकर" },
            { bn: "ব্যাঙ ধরে বিক্রি করে", en: "By catching and selling them", hi: "उन्हें पकड़कर बेचकर" },
            { bn: "মাঠে আরও বিষ দিয়ে", en: "By using more poison on fields", hi: "खेतों में और ज़हर डालकर" },
            { bn: "ব্যাঙের ডাক বন্ধ করে", en: "By stopping their songs", hi: "उनकी आवाज़ रोककर" },
          ],
          answer: 0,
          explain: {
            bn: "শেষ অনুচ্ছেদে লেখা — পুকুর পরিষ্কার রাখি, বুনো ব্যাঙ কেনা থেকে বিরত থাকি।",
            en: "The last paragraph says: keep ponds clean and never buy wild frogs.",
            hi: "अंतिम अनुच्छेद कहता है: पोखरों को साफ़ रखें और जंगली मेंढक कभी न ख़रीदें।",
          },
        },
      ],
    },
  },
];

export default SEED_READING_V2_BEGINNER;
