// ─── Reading library seeds v1: ADVANCED (C1) ───
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

export const SEED_READING_V1_ADVANCED: SeedReadingEntry[] = [
  {
    slug: "read-a1-lastboat",
    level: "advanced",
    category: "culture",
    minutes: 5,
    unit: 1,
    data: {
      title: { bn: "শেষ নৌকা", en: "The Last Boat", hi: "आख़िरी नाव" },
      summary: {
        bn: "ঘূর্ণিঝড় ঘিরে আসছে, আর বুড়ো এক জেলেকে শেষ ফেরিতে মালপত্র আর একটা প্রাণের মধ্যে বেছে নিতে হচ্ছে।",
        en: "As a cyclone closes in, an old fisherman must choose between cargo and a life on the last ferry across the rising river.",
        hi: "चक्रवात अंदर आ रहा है, और एक बूढ़े मछुआरे को उठती नदी की आख़िरी नाव पर माल और एक जान के बीच चुनाव करना पड़ता है।",
      },
      genre: "story",
      paragraphs: [
        {
          en: "The warning came at dawn, painted in the flat grey tones of a sky that had lost its temper. Over the mosque's cracked loudspeaker, an official voice repeated the cyclone's name as if chanting it could keep it at bay. In Kholpetua, a fishing village strung along the river like beads on a fraying thread, people had learned to read the water long before they could read the newspapers.",
          bn: "সতর্কবার্তাটি এল ভোরের বেলা, রাগ হারিয়ে ফেলা আকাশের সমতল ধূসর রঙে আঁকা। মসজিদের ফাটা লাউডস্পিকারে একটি সরকারি কণ্ঠ ঘূর্ণিঝড়ের নাম বারবার দোহার করে যাচ্ছিল, যেন নামটি জপ করলেই ঝড় আটকে যাবে। খোলপেটুয়ায় — নদীর ধারে ফটকির সুতোয় গাঁথা মুক্তোর মতো ছড়িয়ে থাকা এক জেলেপল্লিতে — মানুষ সংবাদপত্র পড়তে শেখার অনেক আগেই পানি পড়তে শিখেছিল।",
          hi: "चेतावनी भोर में आई, गुस्से से भरे आसमान के धुंधले स्लेटी रंगों में लिखी हुई। मस्जिद के फटे लाउडस्पीकर पर एक सरकारी आवाज़ चक्रवात का नाम बार-बार दोहरा रही थी, जैसे उस नाम का जाप करने से तूफ़ान रुक जाएगा। खोलपेतुआ में — नदी के किनारे बिखरे एक मछुआरा गाँव में — लोग अख़बार पढ़ना सीखने से बहुत पहले पानी पढ़ना सीख चुके थे।",
        },
        {
          en: "By seven, the ferry ghat was chaos. Sacks of rice, cages of hens, grandchildren carried like precious cargo — everything that could not be left behind was being shoved aboard the last boat of the day. Karim Mia, sixty-eight years old and carved out of the same salt and wind as the river itself, stood at the tiller and counted heads with the patience of a man who had outlived three cyclones.",
          bn: "সাতটার মধ্যে ফেরিঘাট হয়ে উঠল উথাল-পাথাল। চালের বস্তা, মুরগির খাঁচা, আদরের নাতি-নাতনি — পেছনে ফেলে আসা যায় না এমন সবকিছু দিনের শেষ নৌকায় তুলে দেওয়া হচ্ছিল। ছিয়াট্টর বছর বয়সী করিম মিয়া — যেন এই নদীরই লবণ আর বাতাস দিয়ে গড়া মানুষ — তল্লার ধারে দাঁড়িয়ে ধৈর্য ধরে মানুষ গুনছিলেন, এমন ধৈর্যে, যা তিনটি ঘূর্ণিঝড় পেরিয়ে বেঁচে থাকা মানুষেরই হয়।",
          hi: "सात बजे तक फेरी घाट अफ़रा-तफ़री हो चुका था। चावल की बोरियाँ, मुर्गियों के पिंजरे, सेहते हुए पोते-पोतियाँ — जो कुछ भी पीछे छोड़ा नहीं जा सकता था, दिन की आख़िरी नाव में धकेला जा रहा था। अड़सठ बरस का करीम मियाँ — जैसे इसी नदी के नमक और हवा से गढ़ा हुआ आदमी — पतवार पकड़े धैर्य से सिर गिन रहा था, वैसे धैर्य से जो तीन चक्रवातों को पीछे छोड़कर जीवित रहा हो।",
        },
        {
          en: "Then came the shout. On the far bank, an old schoolteacher was waving her sari above her head, one arm around a child. The boat was already overloaded; the water was already restless. \"She'll sink with one more soul,\" muttered a young man. Karim Mia looked at the climbing clouds, then at the teacher, and made the arithmetic of his life.",
          bn: "তারপর এল চিৎকার। ওপারের ডোবায় বৃদ্ধা এক স্কুলশিক্ষিকা মাথার ওপর শাড়ি নেড়ে যাচ্ছিলেন, এক হাতে ছোট্ট একটি শিশু। নৌকা ইতিমধ্যেই অতিরিক্ত বোঝায় ভরা; পানিও ইতিমধ্যেই অস্থির। \"আর একটা মানুষ উঠলেই ডুবে যাবে,\" ফিসফিস করে বলল এক যুবক। করিম মিয়া একবার দিগন্তে উঠছে মেঘের দিকে তাকালেন, একবার শিক্ষিকার দিকে, তারপর করলেন তাঁর জীবনের হিসাব-নিকাশ।",
          hi: "फिर आई चीख़। उस पार के घाट पर एक बुज़ुर्ग स्कूल-अध्यापिका सिर के ऊपर साड़ी लहरा रही थीं, एक हाथ में छोटा-सा बच्चा। नाव पहले ही ओवरलोड हो चुकी थी; पानी भी पहले ही बेचैन था। \"एक और जान चढ़ी, तो डूब जाएगी,\" कानाफूसी में बोला एक जवान। करीम मियाँ ने एक बार ऊपर उठते बादलों को देखा, एक बार अध्यापिका को, और फिर कर लिया अपने जीवन का हिसाब।",
        },
        {
          en: "\"Untie the sacks,\" he said quietly. \"Throw the rice overboard. Weight is a luxury now.\" The passengers stared at him as though he had suggested burning money, but the rice went into the brown, churned water in a series of soft, expensive sighs. The boat rose an inch, maybe two. He turned the tiller towards the far bank while the first rain arrived like a rumour.",
          bn: "\"বস্তার বাঁধন খুলো,\" শান্ত গলায় বললেন তিনি। \"চাল পানিতে ফেলে দাও। ওজন এখন আর আয়োজন নয়।\" যাত্রীরা অবাক হয়ে তাকিয়ে রইল, যেন তিনি টাকা পুড়িয়ে মারার পরামর্শ দিয়েছেন; তবু চাল ঝরে পড়ল মেলাবাদামি, ঘোলাটে পানিতে — একে একে কিছু নরম, দামি দীর্ঘশ্বাসের মতো। নৌকা এক ইঞ্চি, বোধহয় দুই ইঞ্চি, হালকা হয়ে উঠল। প্রথম বৃষ্টি যেন গুজবের মতো নেমে আসছিল, আর তিনি ঘুরিয়ে দিলেন তল্লা, ওপারের দিকে।",
          hi: "\"बोरियों की गाँठें खोलो,\" उन्होंने धीमे स्वर में कहा। \"चावल पानी में फेंक दो। अब वज़न ही सबसे बड़ी लग्ज़री है।\" यात्रियों ने घूरकर देखा, जैसे उन्होंने पैसे जलाने की सलाह दे दी हो; फिर भी चावल गिरता रहा भूरे, बलौर पानी में — एक के बाद एक कुछ नरम, अनमोल दीर्घश्वासों की तरह। नाव एक इंच, शायद दो इंच, ऊपर उठ गई। पहली बारिश जैसे अफ़वाह की तरह उतर रही थी, और उन्होंने पतवार घुमा दी उस पार की ओर।",
        },
        {
          en: "The crossing was fifteen minutes of pure argument between a wooden boat and a river that had decided to be the sea. Hail stung their necks. Twice the engine coughed and died, and twice the old man coaxed it back to life, shouting instructions into the wind with a voice that carried forty years of storms in it. The child slept against the teacher's shoulder, mercifully unaware.",
          bn: "ওপারে পৌঁছানোর পনেরো মিনিট ছিল কেবল এক তর্ক — কাঠের নৌকা বনাম সেই নদী, যে ঠিক করেই ফেলেছিল সমুদ্র হতে। শিলাবৃষ্টি গা ঘেঁষে কাঁটার মতো লাগল। দু'বার ইঞ্জিন কাশে দিয়ে নিভে গেল, আর দু'বারই বুড়ো মানুষটি তাকে ফিরিয়ে এনল জীবনে — বাতাসের মুখে চিৎকার করে নির্দেশ দিতে দিতে, এমন এক কণ্ঠে, যার ভেতরে চল্লিশ বছরের ঝড় জমা ছিল। শিশুটি শিক্ষিকার কাঁধে মাথা রেখে ঘুমিয়ে ছিল — ভাগ্যিস, কিছুই টের পায়নি।",
          hi: "उस पार पहुँचने के पंद्रह मिनट थे केवल एक बहस — लकड़ी की नाव बनाम उस नदी की, जिसने था तय कर लिया कि वह समुद्र होगी। ओलों ने गर्दन में चुभ कर दर्द दिया। दो बार इंजन खाँसते हुए बुझ गया, और दो बार बूढ़े ने उसे जीवन में वापस लाया — हवा में चिल्ला-चिल्लाकर हुक्म देते हुए, एक ऐसी आवाज़ से जिसमें चालीस साल के तूफ़ान समेटे थे। बच्चा अध्यापिका के कँधे पर सिर रखे सो रहा था — भला हो कि उसे कुछ ख़बर तक न थी।",
        },
        {
          en: "When they reached the shelter on the other side, the sky broke open completely. Nobody thanked him with speeches; gratitude in the village had always been a nod, a plate of food, a hand on the shoulder. Karim Mia tied his boat with hands that would not stop trembling, then sat under the tin roof and watched the world disappear into water.",
          bn: "ওপারের আশ্রয়কেন্দ্রে পৌঁছাতেই আকাশ পুরো খুলে গেল। কেউ ভাষণ দিয়ে ধন্যবাদ জানাল না; এই গাঁয়ে কৃতজ্ঞতা মানে চিরকালই ছিল একটা মাথা নাড়া, এক থালা ভাত, কাঁধে এক হাত রাখা। করিম মিয়া নৌকা বাঁধলেন এমন দু'হাতে, যা কাঁপা থামাতেই পারছিল না; তারপর টিনের চালের নিচে বসে দেখলেন, দুনিয়াটা পানিতে মিলিয়ে যাচ্ছে।",
          hi: "उस पार के आश्रय तक पहुँचते ही आसमान पूरी तरह फट पड़ा। किसी ने भाषण देकर धन्यवाद नहीं कहा; इस गाँव में कृतज्ञता हमेशा एक सिर हिलाना, एक थाली खाना, कँधे पर हाथ रखना रही थी। करीम मियाँ ने अपनी नाव उन हाथों से बाँधी जो काँपना बंद ही नहीं कर रहे थे; फिर टिन की छत के नीचे बैठकर देखते रहे, दुनिया पानी में घुलती हुई।",
        },
        {
          en: "The cyclone took the roof of his house and half of his nets, and he shrugged at the loss the way other men shrug at the weather in the forecast. \"Boats can be rebuilt,\" he said afterwards, when a reporter's question had made him a brief local legend. \"Lives cannot.\" He said it as if he had done nothing at all — which is, perhaps, what quiet heroism sounds like.",
          bn: "ঘূর্ণিঝড় নিয়ে গেল তাঁর ঘরের চাল আর অর্ধেক জাল; আর তিনি ক্ষতির কথা গায়ে মানছিলেন এভাবে, যেভাবে অন্য মানুষ পূর্বাভাসের আবহাওয়াকে গায়ে মানে। \"নৌকা আবার বানানো যায়,\" পরে বললেন তিনি, যখন এক সংবাদদাতার প্রশ্ন তাঁকে ক্ষণস্থায়ী গাঁয়ের কিংবদন্তি বানিয়েছিল। \"প্রাণ ফেরানো যায় না।\" এমনভাবে বললেন, যেন তিনি আসলে কিছুই করেননি — আর সম্ভবত নীরব বীরত্বের শব্দটা ঠিক এমনই হয়।",
          hi: "चक्रवात उनके घर की छत और आधे जाल ले गया; और उन्होंने नुक़सान को इतनी सहजता से लिया, जैसे और लोग पूर्वानुमान के मौसम को लेते हैं। \"नाव फिर बन जाएगी,\" बाद में उन्होंने कहा, जब एक रिपोर्टर के सवाल ने उन्हें कुछ दिनों के लिए इलाक़े की किंवदंती बना दिया था। \"जिंदगियाँ नहीं।\" यह उन्होंने ऐसे कहा, जैसे उन्होंने असल में कुछ किया ही नहीं — और शायद ख़ामोश वीरता की आवाज़ ठीक यही होती है।",
        },
      ],
      vocabulary: [
        {
          word: "tiller",
          meaning: {
            bn: "তল্লা — নৌকা বাঁকিয়ে চালানোর লম্বা হাতল",
            en: "the long handle used to steer a boat",
            hi: "पतवार — नाव मोड़कर चलाने का लंबा हैंडल",
          },
          example: "The old fisherman held the tiller steady as the waves rose.",
        },
        {
          word: "overloaded",
          meaning: {
            bn: "অতিরিক্ত বোঝাবড়েন — ধারণক্ষমতার চেয়ে বেশি ভারাক্রান্ত",
            en: "carrying more weight than is safe or allowed",
            hi: "सुरक्षित सीमा से ज़्यादा वज़न लदा हुआ",
          },
          example: "The bus was so overloaded that passengers stood on the footboard.",
        },
        {
          word: "churned",
          meaning: {
            bn: "ঘোলাটে, উত্তাল — প্রবল বেগে নেড়েচেড়ে ফেনা তোলা",
            en: "stirred or whirled violently so that it looks foamy and muddy",
            hi: "तेज़ी से हिलकर फेनिल और कीचड़युक्त दिखने वाला",
          },
          example: "The churned water splashed over the side of the boat.",
        },
        {
          word: "coaxed",
          meaning: {
            bn: "মিষ্টি কথায়, আদর-সোহাগে রাজি করানো",
            en: "gently persuaded or encouraged someone or something",
            hi: "नरमी से मनाकर या प्रोत्साहित करना",
          },
          example: "She coaxed the frightened kitten out of the box.",
        },
        {
          word: "gratitude",
          meaning: {
            bn: "কৃতজ্ঞতা — উপকারের স্বীকৃতি",
            en: "the feeling of being thankful",
            hi: "कृतज्ञता — आभार का भाव",
          },
          example: "He bowed his head in quiet gratitude.",
        },
        {
          word: "arithmetic",
          meaning: {
            bn: "অঙ্কশাস্ত্র; এখানে লাভ-ক্ষতির হিসাব-নিকাশ",
            en: "the mathematics of numbers; here, weighing costs against benefits",
            hi: "अंकगणित; यहाँ लाभ-हानि का हिसाब",
          },
          example: "The family did some painful arithmetic before selling the land.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "করিম মিয়া কেন চাল নদীতে ফেলে দিতে বললেন?",
            en: "Why did Karim Mia order the rice to be thrown into the river?",
            hi: "करीम मियाँ ने चावल नदी में क्यों फेंकने का आदेश दिया?",
          },
          options: [
            { bn: "বৃষ্টিতে চাল নষ্ট হয়ে গিয়েছিল", en: "The rice had been spoiled by the rain", hi: "बारिश में चावल ख़राब हो गया था" },
            { bn: "নৌকা হালকা করে শিক্ষিকা ও শিশুটিকে নিরাপদে তোলার জন্য", en: "To lighten the boat so it could safely carry the teacher and the child", hi: "नाव को हल्का बनाकर अध्यापिका और बच्चे को सुरक्षित लेने के लिए" },
            { bn: "বস্তাগুলো আসলে অন্য কারও ছিল", en: "The sacks actually belonged to someone else", hi: "बोरियाँ असल में किसी और की थीं" },
            { bn: "তিনি ধনী ব্যবসায়ীদের শাস্তি দিতে চেয়েছিলেন", en: "He wanted to punish the wealthy traders", hi: "वे अमीर व्यापारियों को सज़ा देना चाहते थे" },
          ],
          answer: 1,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে তিনি বলেন, 'ওজন এখন আর আয়োজন নয়' — অতিরিক্ত বোঝার নৌকায় একটা প্রাণ তুলতে ওজন কমানোই ছিল উদ্দেশ্য।",
            en: "In paragraph 4 he says 'Weight is a luxury now' — with the boat overloaded and one more life to take aboard, reducing weight was the whole point.",
            hi: "अनुच्छेद 4 में वे कहते हैं, 'अब वज़न ही सबसे बड़ी लग्ज़री है' — ओवरलोड नाव पर एक और जान लेने के लिए वज़न घटाना ज़रूरी था।",
          },
        },
        {
          question: {
            bn: "'তাঁর জীবনের হিসাব-নিকাশ করল' (তৃতীয় অনুচ্ছেদ) বাক্যটি কী বোঝায়?",
            en: "'Made the arithmetic of his life' (paragraph 3) suggests that Karim Mia…",
            hi: "'अपने जीवन का हिसाब किया' (अनुच्छेद 3) का आशय है कि करीम मियाँ…",
          },
          options: [
            { bn: "ফেরির দৈনিক লাভ-ক্ষতি গুনছিলেন", en: "was calculating the ferry's daily profit", hi: "फेरी का रोज़ का मुनाफ़ा गिन रहे थे" },
            { bn: "হিসাবরক্ষক হিসেবে প্রশিক্ষণ পেয়েছিলেন", en: "had once trained as an accountant", hi: "कभी लेखाकार की पढ़ाई की थी" },
            { bn: "মালপত্রের বিপরীতে একটা প্রাণের মূল্য মাপছিলেন", en: "was weighing goods against a human life", hi: "माल के मुक़ाबले इंसानी जान का वज़न कर रहे थे" },
            { bn: "যাত্রীদের গুনতে কষ্ট হচ্ছিল", en: "was struggling to count the passengers", hi: "यात्रियों को गिनने में दिक़्क़त हो रही थी" },
          ],
          answer: 2,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে এই প্রতিবাদটি বোঝায়, তিনি চালের বস্তার দাম আর একটা জীবনের মধ্যে তুলনা করে সিদ্ধান্ত নিচ্ছিলেন।",
            en: "Paragraph 3: the idiom means he was comparing the value of sacks of rice with the value of a human life.",
            hi: "अनुच्छेद 3: मुहावरे का अर्थ है कि वे चावल की बोरियों की क़ीमत और इंसानी जान की तुलना कर रहे थे।",
          },
        },
        {
          question: {
            bn: "শেষ অনুচ্ছেদের সুরটি কোনটি সবচেয়ে ভালো বোঝায়?",
            en: "Which words best describe the tone of the final paragraph?",
            hi: "अंतिम अनुच्छेद का स्वर सबसे अच्छा कौन व्यक्त करता है?",
          },
          options: [
            { bn: "কর্তৃপক্ষের প্রতি প্রকাশ্য ক্রোধ", en: "open anger at the authorities", hi: "अधिकारियों पर खुला ग़ुस्सा" },
            { bn: "হালকা রসিকতা", en: "light comedy", hi: "हल्की हास्य-रस" },
            { bn: "নীরব বীরত্বের প্রতি অতিরঞ্জনহীন শ্রদ্ধা", en: "understated admiration for quiet heroism", hi: "ख़ामोश वीरता के लिए संयत प्रशंसा" },
            { bn: "নির্লিপ্ত, শুষ্ক প্রতিবেদন-ভঙ্গি", en: "cold, detached neutrality", hi: "ठंडी, भावशून्य तटस्थता" },
          ],
          answer: 2,
          explain: {
            bn: "শেষ অনুচ্ছেদে তিনি 'প্রাণ ফেরানো যায় না' বলে এমনভাবে শেষ করেন যেন কিছুই করেননি — লেখক এই অতিরঞ্জনহীন বর্ণনাতেই শ্রদ্ধা জানান।",
            en: "Paragraph 7: he speaks as if he had done nothing at all, and the narrator's admiration is deliberately understated.",
            hi: "अनुच्छेद 7: वे ऐसे बोलते हैं जैसे कुछ किया ही नहीं, और कथावाचक की प्रशंसा जानबूझकर संयत है।",
          },
        },
        {
          question: {
            bn: "গ্রামবাসীরা কীভাবে কৃতজ্ঞতা প্রকাশ করে?",
            en: "How do the villagers express their thanks?",
            hi: "गाँव वाले अपना धन्यवाद कैसे व्यक्त करते हैं?",
          },
          options: [
            { bn: "ভাষণ দিয়ে", en: "with formal speeches", hi: "औपचारिक भाषणों से" },
            { bn: "টাকা এনে দিয়ে", en: "with gifts of money", hi: "पैसे के उपहार देकर" },
            { bn: "একেবারেই ধন্যবাদ জানায় না", en: "they never thank anyone at all", hi: "वे कभी किसी को धन्यवाद नहीं देते" },
            { bn: "ছোট ছোট ভঙ্গিতে — মাথা নেড়ে, থালাভরা খাবার, কাঁধে হাত", en: "with small gestures — a nod, a plate of food, a hand on the shoulder", hi: "छोटे इशारों से — सिर हिलाना, खाने की थाली, कँधे पर हाथ" },
          ],
          answer: 3,
          explain: {
            bn: "ষষ্ঠ অনুচ্ছেদে স্পষ্ট: 'এই গাঁয়ে কৃতজ্ঞতা মানে চিরকালই ছিল একটা মাথা নাড়া, এক থালা ভাত, কাঁধে এক হাত রাখা।'",
            en: "Paragraph 6 states it directly: gratitude in the village 'had always been a nod, a plate of food, a hand on the shoulder'.",
            hi: "अनुच्छेद 6 सीधा कहता है: गाँव में कृतज्ञता 'हमेशा सिर हिलाना, खाने की थाली, कँधे पर हाथ रखना' रही थी।",
          },
        },
        {
          question: {
            bn: "'নৌকা আবার বানানো যায়। প্রাণ ফেরানো যায় না' — করিম মিয়ার এ কথার অর্থ কী?",
            en: "'Boats can be rebuilt. Lives cannot.' What did Karim Mia mean?",
            hi: "'नाव फिर बन जाएगी। जिंदगियाँ नहीं।' करीम मियाँ का यह क्या मतलब था?",
          },
          options: [
            { bn: "মালপত্র ফের অর্জন করা যায়, কিন্তু প্রাণ হারালে ফেরানো যায় না", en: "Material things can be replaced; a lost human life cannot", hi: "माल फिर बन जाता है, पर खोई जान लौटती नहीं" },
            { bn: "তিনি নতুন নৌকা কিনতে চেয়েছিলেন", en: "he wanted to buy a new boat", hi: "वह नई नाव ख़रीदना चाहते थे" },
            { bn: "চালের চেয়ে নৌকা বেশি দামি", en: "boats are worth more than rice", hi: "चावल से नाव ज़्यादा क़ीमती होती है" },
            { bn: "তিনি সিদ্ধান্তে অনুতপ্ত ছিলেন", en: "he regretted his decision", hi: "वह अपने फ़ैसले पर पछता रहे थे" },
          ],
          answer: 0,
          explain: {
            bn: "সপ্তম অনুচ্ছেদে ক্ষতির কথা গায়ে মানা করিম মিয়া ব্যাখ্যা করেন, তাঁর জন্য সবচেয়ে দামি ছিল সেদিন রক্ষা পাওয়া প্রাণগুলো।",
            en: "Paragraph 7: shrugging off his losses, he explains that what mattered was the lives saved, not the property.",
            hi: "अनुच्छेद 7: अपना नुक़सान सहजता से लेते हुए वे समझाते हैं कि मायने रखती थी बची हुई जानें, संपत्ति नहीं।",
          },
        },
      ],
    },
  },
  {
    slug: "read-a1-salary",
    level: "advanced",
    category: "work",
    minutes: 5,
    unit: 2,
    data: {
      title: { bn: "বেতন-আলোচনা", en: "The Salary Negotiation", hi: "वेतन-समझौता" },
      summary: {
        bn: "নাদিয়া আর ভাড়া নিয়োগ-পরিচালকের মধ্যে শিষ্টাচারী দর-কষাকষি — শর্তবাচক বাক্য, সৌজন্য আর সুস্পষ্ট যুক্তির পাঠ।",
        en: "Nadia and a hiring director negotiate an offer diplomatically — conditionals, courtesy and clear reasoning.",
        hi: "नादिया और एक नियुक्ति निदेशक के बीच नम्र वेतन-समझौता — शर्तें, शिष्टता और स्पष्ट तर्क।",
      },
      genre: "dialog",
      paragraphs: [
        {
          en: "NADIA: Thank you for making the time this afternoon, Ms Rahman. Before anything else, I'd like to say how genuinely impressed I was by the team when I toured the office. MS RAHMAN: That's good to hear, and the feeling is mutual — your case study was the strongest we received this cycle. Which brings us to why we're here. We'd like to offer you the senior analyst position, at a starting salary of ninety thousand taka a month.",
          bn: "নাদিয়া: এত দুপুরে সময় করে দেওয়ার জন্য ধন্যবাদ, মিসেস রহমান। কিছু বলার আগেই বলি — অফিস ঘুরে দেখে টিমটার প্রতি আমি সত্যিকার অর্থেই মুগ্ধ হয়েছি। মিসেস রহমান: শুনে ভালো লাগল, আর কথাটা উল্টো দিকেও ঠিক — এবারের আবেদনগুলোর মধ্যে আপনার কেস স্টাডিই সবচেয়ে ভালো ছিল। এবং তার জন্যই আমরা আজ বসেছি। আমরা আপনাকে সিনিয়র অ্যানালিস্ট পদটা দিতে চাই, মাসে নব্বই হাজার টাকা শুরুর বেতনে।",
          hi: "नादिया: आज दोपहर समय निकालने के लिए धन्यवाद, मिसेज़ रहमान। कुछ कहने से पहले कह दूँ — ऑफिस देखकर मैं टीम से सचमुच प्रभावित हुई हूँ। मिसेज़ रहमान: सुनकर अच्छा लगा, और यह एहसास दोनों तरफ़ है — इस बार मिली आवेदनों में आपका केस स्टडी सबसे मज़बूत था। और हम यहीं बैठे हैं इसी लिए। हम आपको सीनियर एनालिस्ट पद देना चाहते हैं, महीने के नब्बे हज़ार टका शुरुआती वेतन पर।",
        },
        {
          en: "NADIA: I'm grateful for the offer, and I want you to know how much I'd like to contribute here. May I be candid about the figure? MS RAHMAN: Please. Candour is the only currency worth anything in this room. NADIA: Given that the role involves leading a team of four from day one and owning the quarterly forecasting model, I was expecting something closer to one hundred and five.",
          bn: "নাদিয়া: অফারের জন্য কৃতজ্ঞ, আর জানুন — এখানে কাজ করতে আমার কতটা ইচ্ছা। টাকার অংকটা নিয়ে কি খোলাখুলি বলা যায়? মিসেস রহমান: বলুন। এই ঘরে একমাত্র কাজের মুদ্রা হলো সরলতা। নাদিয়া: যেহেতু পদটাতে প্রথম দিন থেকেই চারজনের একটা টিম সামলাতে হবে আর ত্রৈমাসিক পূর্বাভাসের মডেলের দায়ভার থাকবে আমার ওপরেই, আমি মনে করেছিলাম এক লাখ পাঁচের কাছাকাছি কিছু।",
          hi: "नादिया: ऑफ़र के लिए आभारी हूँ, और जान लीजिए — यहाँ योगदान देने की मुझे कितनी इच्छा है। अंक के बारे में क्या मैं खुलकर बोल सकती हूँ? मिसेज़ रहमान: बिलकुल। इस कमरे में एकमात्र काम की मुद्रा स्पष्टवादिता है। नादिया: जबकि इस पद में पहले दिन से चार लोगों की टीम की अगुवाई और त्रैमासिक पूर्वानुमान मॉडल की ज़िम्मेदारी शामिल है, मुझे एक लाख पाँच के आसपास कुछ उम्मीद थी।",
        },
        {
          en: "MS RAHMAN: That's a meaningful gap. Walk me through your reasoning — if we met you halfway, what would change on your side? NADIA: Fair question. If the base reached one hundred, I would commit to a two-year horizon and take ownership of the data-quality audit nobody currently has time for. If, on the other hand, one hundred and five were possible, I'd waive the relocation allowance entirely.",
          bn: "মিসেস রহমান: অঙ্কটা তাহলে মোটেই ছোট নয়। আপনার যুক্তিটা খুলে বলুন — আমরা যদি মাঝামাঝি একটা জায়গায় আসি, আপনার দিকে কী বদলাবে? নাদিয়া: সঙ্গত প্রশ্ন। বেতন যদি এক লাখে পৌঁছায়, আমি দু'বছরের জন্য থাকার প্রতিশ্রুতি দেব এবং ডেটা-কোয়ালিটি অডিটের দায়িত্ব নেব — যার জন্য এখন কারও কাছেই সময় নেই। আর যদি এক লাখ পাঁচ সম্ভব হয়, তবে আমি স্থানান্তর ভাতা পুরোটাই ছেড়ে দেব।",
          hi: "मिसेज़ रहमान: फ़र्क़ छोटा नहीं है। अपनी सोच खोलकर समझाइए — अगर हम बीच के रास्ते पर आएँ, तो आपकी तरफ़ से क्या बदलेगा? नादिया: वाजिब सवाल। अगर बेस एक लाख तक पहुँचे, तो मैं दो साल के लिए रुकने का वादा करूँगी और डेटा-क्वालिटी ऑडिट की ज़िम्मेदारी लूँगी, जिसके लिए अभी किसी के पास समय ही नहीं है। और अगर एक लाख पाँच संभव हो, तो स्थानांतरण भत्ता मैं पूरा छोड़ दूँगी।",
        },
        {
          en: "MS RAHMAN: Let me be transparent about our constraints. The band for this grade caps at ninety-five; above that, I'd need the regional director's sign-off, which typically takes a fortnight and is rarely granted in the first year of a new team. NADIA: I appreciate you being straight with me. If the band is fixed, could we look at the review cycle instead? For instance, if I delivered the audit plan within my first ninety days, would you consider bringing the salary review forward from twelve months to six?",
          bn: "মিসেস রহমান: আমাদের সীমাবদ্ধতার কথা খোলাখুলি বলি। এই গ্রেডের বেতন-কাঠামোর সর্বোচ্চ সীমা পঁচানব্বই; তার বেশি দিতে গেলে আঞ্চলিক পরিচালকের অনুমোদন লাগবে, যেটাতে সাধারণত পনেরো দিন লেগে যায় এবং নতুন টিমের প্রথম বছরে তা পাওয়া বিরল। নাদিয়া: আপনি সোজাসাপ্টা কথা বলেছেন, ভালো লাগল। বেতন-কাঠামো যদি ঠিক থাকে, তাহলে কি রিভিউ-চক্রের দিকে তাকানো যায়? যেমন ধরুন, প্রথম নব্বই দিনের মধ্যে অডিটের পরিকল্পনা জমা দিলে — বেতন রিভিউ কি বারো মাস থেকে ছয় মাসে এগিয়ে আনার কথা ভাববেন?",
          hi: "मिसेज़ रहमान: अपनी सीमाओं के बारे में खुलकर बता दूँ। इस ग्रेड के वेतन-बैंड की ऊपरी सीमा पचानवे है; उससे ज़्यादा देने के लिए क्षेत्रीय निदेशक की मंज़ूरी चाहिए, जिसमें आमतौर पर पखवाड़ा लगता है और नई टीम के पहले साल में वह मिलना दुर्लभ है। नादिया: आपने सीधी बात कही, अच्छा लगा। बैंड अगर तय है, तो क्या हम रिव्यू-चक्र की ओर देख सकते हैं? मान लीजिए, पहले नब्बे दिन में मैं ऑडिट की योजना दे दूँ — क्या वेतन समीक्षा बारह महीने से घटाकर छह महीने पर लाने पर विचार करेंगी?",
        },
        {
          en: "MS RAHMAN: An accelerated review isn't something I can promise today. What I can put in writing is a formal review at six months, with the explicit understanding that a positive outcome would be acted on, not merely noted. NADIA: One more thing, if I may — would that review be written into my contract, or into a side letter? MS RAHMAN: Into the contract. I dislike promises that evaporate when people change desks. NADIA: Then that feels like a workable foundation. If we add the training budget we discussed, I'm prepared to accept at ninety-five today.",
          bn: "মিসেস রহমান: রিভিউ তাড়াতাড়ি এগিয়ে আনার প্রতিশ্রুতি আজ দিতে পারব না। লিখিতভাবে দিতে পারছি এটুকুই — ছয় মাসে একটা আনুষ্ঠানিক রিভিউ হবে, আর এটাও স্পষ্ট যে ফল ইতিবাচক হলে সেটা কাজে লাগানো হবে, শুধু খাতায় লিখে রাখা হবে না। নাদিয়া: আর একটা কথা, যদি অনুমতি থাকে — রিভিউটা কি আমার চুক্তিতেই লেখা হবে, নাকি আলাদা চিঠিতে? মিসেস রহমান: চুক্তিতেই। আমার পছন্দ নয় সেসব প্রতিশ্রুতি, যেগুলো মানুষ চেয়ার বদলালেই বাষ্প হয়ে মিলিয়ে যায়। নাদিয়া: তাহলে ভিত্তিটা কাজের বলেই মনে হচ্ছে। আলোচনা করা প্রশিক্ষণ-বাজেটটাও যুক্ত করলে, আজই আমি পঁচানব্বইয়ে রাজি।",
          hi: "मिसेज़ रहमान: रिव्यू जल्दी कराने का वादा आज मैं नहीं कर सकती। लिखित रूप में इतना दे सकती हूँ — छह महीने में एक औपचारिक रिव्यू होगा, और यह भी साफ़ है कि नतीजा सकारात्मक रहा तो उस पर अमल होगा, सिर्फ़ लिखकर रखा नहीं जाएगा। नादिया: एक बात और, अगर इजाज़त हो — रिव्यू मेरे ठेके (कॉन्ट्रैक्ट) में लिखा जाएगा, या अलग पत्र में? मिसेज़ रहमान: ठेके में। मुझे वे वादे पसंद नहीं जो लोग कुर्सी बदलते ही भाप बनकर उड़ जाते हैं। नादिया: तो नींव काम की लगती है। चर्चा किया गया प्रशिक्षण-बजट भी जोड़ दीजिए, तो आज ही मैं पचानवे पर तैयार हूँ।",
        },
        {
          en: "MS RAHMAN: Then we have a deal, pending the standard reference checks. For what it's worth, you negotiated this the way I wish more people did: firmly, with reasons rather than demands. NADIA: Thank you. I learned early that a negotiation isn't a battle you win; it's an agreement you build. MS RAHMAN: Well then — welcome to the team you'll be rebuilding from the inside. The papers will reach you by Thursday.",
          bn: "মিসেস রহমান: তাহলে কথা পাকা — অবশ্য প্রচলিত রেফারেন্স-যাচাই বাকি রইল। কথা না হলেও বলি, আপনি যেভাবে দর কষেছেন, আর সবাই যেন সেভাবেই করত: দৃঢ়ভাবে, দাবি নয়, যুক্তি দিয়ে। নাদিয়া: ধন্যবাদ। আমি বেশ আগেই শিখেছি, দর-কষাকষি এমন লড়াই নয় যা জেতে; এটা এমন চুক্তি যা গড়ে তুলতে হয়। মিসেস রহমান: তাহলে — স্বাগতম সেই টিমে, যেটাকে আপনি ভেতর থেকে নতুন করে সাজাবেন। কাগজপত্র পৌঁছে যাবে বৃহস্পতিবারের মধ্যে।",
          hi: "मिसेज़ रहमान: तो सौदा तय — बशर्ते रिफ़रेंस जाँच पूरी हो। कहने के लिए कह रही हूँ, आपने बातचीत वैसे की है, जैसे मैं और लोगों से चाहती हूँ: दृढ़ता से, माँगों से नहीं, तर्कों से। नादिया: धन्यवाद। मैं बहुत पहले सीख चुकी हूँ कि मोल-भाव कोई लड़ाई नहीं जिसे जीतना है; यह एक समझौता है जिसे गढ़ना है। मिसेज़ रहमान: तो — स्वागत है उस टीम में जिसे आप भीतर से नया रूप देंगी। काग़ज़ गुरुवार तक आप तक पहुँच जाएँगे।",
        },
      ],
      vocabulary: [
        {
          word: "candid",
          meaning: {
            bn: "খোলাখুলি, সরল — লুকোছাপা ছাড়া মত প্রকাশ করা",
            en: "honest and direct, even when the truth is uncomfortable",
            hi: "स्पष्टवादी — सच बोलने में झिझक न करने वाला",
          },
          example: "Let me be candid: the first draft was not good enough.",
        },
        {
          word: "constraints",
          meaning: {
            bn: "সীমাবদ্ধতা — যা করা সম্ভব তার সীমা নির্ধারণকারী বাধা",
            en: "limits that restrict what can be done",
            hi: "सीमाएँ जो किसी चीज़ को रोकती हैं",
          },
          example: "We completed the project despite severe budget constraints.",
        },
        {
          word: "waive",
          meaning: {
            bn: "ছেড়ে দেওয়া — পাওনা বা অধিকার স্বেচ্ছায় বাদ দেওয়া",
            en: "to give up a right or requirement voluntarily",
            hi: "स्वेच्छा से किसी अधिकार या शर्त को छोड़ देना",
          },
          example: "The university waived the application fee for poor students.",
        },
        {
          word: "cap",
          meaning: {
            bn: "সর্বোচ্চ সীমা; সীমা বেঁধে দেওয়া",
            en: "an upper limit; to set an upper limit",
            hi: "ऊपरी सीमा; सीमा तय करना",
          },
          example: "The city capped the rent increase at five per cent.",
        },
        {
          word: "sign-off",
          meaning: {
            bn: "চূড়ান্ত অনুমোদন — দায়িত্বশীল কর্তার সই",
            en: "official final approval from someone in authority",
            hi: "अधिकारी की अंतिम लिखित मंज़ूरी",
          },
          example: "The budget needs the finance director's sign-off before Monday.",
        },
        {
          word: "accelerated",
          meaning: {
            bn: "ত্বরান্বিত — স্বাভাবিকের চেয়ে দ্রুত করা",
            en: "made to happen faster than usual",
            hi: "सामान्य से तेज़ किया गया",
          },
          example: "The company offered an accelerated promotion path for engineers.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "নাদিয়া কীভাবে দর-কষাকষি শুরু করেন?",
            en: "How does Nadia open the negotiation?",
            hi: "नादिया मोल-भाव कैसे शुरू करती है?",
          },
          options: [
            { bn: "টিমের প্রশংসা করে, তারপর অঙ্কটা নিয়ে খোলাখুলি বলার অনুমতি চেয়ে", en: "By praising the team and asking permission to be candid about the figure", hi: "टीम की प्रशंसा करके, और फिर अंक पर स्पष्ट बोलने की इजाज़त माँगकर" },
            { bn: "অফার সরাসরি প্রত্যাখ্যান করে", en: "By rejecting the offer outright", hi: "ऑफ़र को सीधे-सीधे ठुकराकर" },
            { bn: "অন্য কোম্পানির অফারের হুমকি দিয়ে", en: "By threatening to accept a competitor's offer", hi: "प्रतिद्वंद्वी की ऑफ़र स्वीकारने की धमकी देकर" },
            { bn: "ভিন্ন পদবি চেয়ে", en: "By asking for a different job title", hi: "अलग पद की माँग करके" },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম-দ্বিতীয় অনুচ্ছেদে নাদিয়া আগে টিমের প্রশংসা করেন, তারপর জিজ্ঞেস করেন, 'টাকার অংকটা নিয়ে কি খোলাখুলি বলা যায়?'",
            en: "Paragraphs 1-2: Nadia first compliments the team, then asks 'May I be candid about the figure?'",
            hi: "अनुच्छेद 1-2: नादिया पहले टीम की तारीफ़ करती है, फिर पूछती है, 'क्या मैं अंक के बारे में खुलकर बोल सकती हूँ?'",
          },
        },
        {
          question: {
            bn: "'এই ঘরে একমাত্র কাজের মুদ্রা হলো সরলতা' — মিসেস রহমানের এ কথার অর্থ কী?",
            en: "'Candour is the only currency worth anything in this room' — what does Ms Rahman mean?",
            hi: "'इस कमरे में एकमात्र काम की मुद्रा स्पष्टवादिता है' — मिसेज़ रहमान का यह क्या अर्थ है?",
          },
          options: [
            { bn: "তিনি নগদ টাকায় ফি নিতে চান", en: "She wants to be paid in cash", hi: "वह नक़द पैसे में शुल्क लेना चाहती हैं" },
            { bn: "দর-কষাকষিতে শুধু টাকাই মুখ্য", en: "Only money matters in a negotiation", hi: "मोल-भाव में सिर्फ़ पैसा मायने रखता है" },
            { bn: "তিলকষার চেয়ে তিনি সৎ, সরাসরি উত্তরকে বেশি মূল্য দেন", en: "She values honest, direct answers more than flattery", hi: "वह चापलूसी से ज़्यादा ईमानदार, सीधे जवाबों को क़ीमत देती हैं" },
            { bn: "তিনি নাদিয়াকে ঘর ছাড়তে বলছেন", en: "She is asking Nadia to leave the room", hi: "वह नादिया को कमरा छोड़ने को कह रही हैं" },
          ],
          answer: 2,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে 'প্লিজ, বলুন' বলে তিনি খোলামেলা সততাকেই আলোচনার ভিত্তি করেন।",
            en: "Paragraph 2: by answering 'Please' she makes honest directness the ground rule of the talk.",
            hi: "अनुच्छेद 2: 'बिलकुल' कहकर वह ईमानदार सीधी बात को बातचीत का नियम बना देती हैं।",
          },
        },
        {
          question: {
            bn: "এক লাখ পাঁচ দিলে নাদিয়া কী ছেড়ে দেওয়ার প্রস্তাব দেন?",
            en: "What does Nadia offer to give up if one hundred and five is possible?",
            hi: "एक लाख पाँच संभव होने पर नादिया क्या छोड़ने का प्रस्ताव देती है?",
          },
          options: [
            { bn: "ডেটা-কোয়ালিটি অডিট", en: "the data-quality audit", hi: "डेटा-क्वालिटी ऑडिट" },
            { bn: "স্থানান্তর ভাতা, পুরোটাই", en: "the relocation allowance, entirely", hi: "स्थानांतरण भत्ता, पूरा ही" },
            { bn: "দু'বছরের প্রতিশ্রুতি", en: "her two-year commitment", hi: "दो साल का वादा" },
            { bn: "প্রশিক্ষণ বাজেট", en: "the training budget", hi: "प्रशिक्षण बजट" },
          ],
          answer: 1,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে স্পষ্ট: 'এক লাখ পাঁচ সম্ভব হলে স্থানান্তর ভাতা পুরোটাই ছেড়ে দেব।'",
            en: "Paragraph 3 states it clearly: 'If, on the other hand, one hundred and five were possible, I'd waive the relocation allowance entirely.'",
            hi: "अनुच्छेद 3 साफ़ कहता है: 'अगर एक लाख पाँच संभव हो, तो स्थानांतरण भत्ता पूरा छोड़ दूँगी।'",
          },
        },
        {
          question: {
            bn: "পঁচানব্বইয়ের বেশি মিসেস রহমান একেবারে অনুমোদন করতে পারেন না কেন?",
            en: "Why can't Ms Rahman simply approve more than ninety-five?",
            hi: "मिसेज़ रहमान पचानवे से ज़्यादा ख़ुद मंज़ूर क्यों नहीं कर सकतीं?",
          },
          options: [
            { bn: "কোম্পানি আর্থিক সংকটে", en: "The company is in financial trouble", hi: "कंपनी आर्थिक संकट में है" },
            { bn: "নাদিয়ার অভিজ্ঞতা কম", en: "Nadia lacks the experience", hi: "नादिया का अनुभव कम है" },
            { bn: "অফারটি এই সপ্তাহেই শেষ", en: "The offer expires this week", hi: "ऑफ़र इसी हफ़्ते समाप्त हो रहा है" },
            { bn: "ওই গ্রেডের সর্বোচ্চ সীমা পঁচানব্বই; বেশি হলে আঞ্চলিক পরিচালকের অনুমোদন লাগে", en: "The grade's band caps at ninety-five; higher needs the regional director's sign-off", hi: "ग्रेड के बैंड की सीमा पचानवे है; इससे ऊपर क्षेत्रीय निदेशक की मंज़ूरी चाहिए" },
          ],
          answer: 3,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে তিনি নিজেই সীমাবদ্ধতা বলেন — বেতন-কাঠামোর উপরিসীমা ও আঞ্চলিক পরিচালকের সইয়ের প্রক্রিয়া।",
            en: "Paragraph 4: she is transparent about her constraints — the band's cap and the regional director's sign-off process.",
            hi: "अनुच्छेद 4: वे अपनी सीमाएँ खुलकर बताती हैं — बैंड की ऊपरी सीमा और क्षेत्रीय निदेशक की मंज़ूरी की प्रक्रिया।",
          },
        },
        {
          question: {
            bn: "শেষ পর্যন্ত চুক্তি কী হলো?",
            en: "What is finally agreed?",
            hi: "अंत में क्या तय हुआ?",
          },
          options: [
            { bn: "এক লাখ পাঁচ, কোনো শর্ত ছাড়াই", en: "One hundred and five, with no conditions", hi: "एक लाख पाँच, बिना किसी शर्त" },
            { bn: "পঁচানব্বই, চুক্তিতে লিখিত ছয় মাসের রিভিউ, আর প্রশিক্ষণ বাজেট", en: "Ninety-five, a written six-month review in the contract, and the training budget", hi: "पचानवे, ठेके में लिखित छह-महीने का रिव्यू, और प्रशिक्षण बजट" },
            { bn: "বারো মাস পিছিয়ে যাওয়া একটা রিভিউ", en: "A review delayed to after twelve months", hi: "बारह महीने टाला गया रिव्यू" },
            { bn: "কিছুই নয় — নাদিয়া অফার ফিরিয়ে দেন", en: "Nothing — Nadia declines the offer", hi: "कुछ नहीं — नादिया ऑफ़र ठुकरा देती है" },
          ],
          answer: 1,
          explain: {
            bn: "পঞ্চম-ষষ্ঠ অনুচ্ছেদে সমঝোতা: পঁচানব্বই, চুক্তিতে ছয় মাসের আনুষ্ঠানিক রিভিউ এবং প্রশিক্ষণ বাজেট — আর নাদিয়ার 'আজই রাজি'।",
            en: "Paragraphs 5-6: the compromise is ninety-five, a formal six-month review written into the contract and the training budget — and Nadia accepts today.",
            hi: "अनुच्छेद 5-6: समझौता — पचानवे, ठेके में लिखा छह-महीने का औपचारिक रिव्यू और प्रशिक्षण बजट, और नादिया आज ही स्वीकार करती है।",
          },
        },
      ],
    },
  },
  {
    slug: "read-a1-landlord",
    level: "advanced",
    category: "daily",
    minutes: 5,
    unit: 3,
    data: {
      title: { bn: "প্রিয় বাড়িওয়ালা", en: "Dear Landlord", hi: "प्रिय मकान मालिक" },
      summary: {
        bn: "ভাড়াটে করিম তাঁর বাড়িওয়ালাকে নষ্ট পানির পাম্প আর দু'সপ্তাহের টালমাটালের জন্য ভদ্র কিন্তু দৃঢ় এক অভিযোগ-চিঠি লেখেন — সাত দিনের সময়সীমা আর লিখিত উত্তরের অনুরোধ নিয়ে।",
        en: "A tenant writes his landlord a courteous but firm complaint about a broken water pump and two weeks of broken promises, politely setting a seven-day deadline and asking for a written reply.",
        hi: "एक किरायेदार अपने मकान मालिक को ख़राब पानी के पंप और दो हफ़्तों की टालमटोल पर विनम्र लेकिन दृढ़ शिकायती पत्र लिखता है — सात दिन की समय-सीमा और लिखित जवाब के अनुरोध के साथ।",
      },
      genre: "letter",
      paragraphs: [
        {
          en: "Dear Mr. Chowdhury, I am writing to you with respect, but also with genuine concern, about the water pump that serves our four-storey building on Station Road. I have been a tenant in Flat 3/B for three years, and in all that time you have found me reasonable. It is precisely because I would like that relationship to continue that I am putting this matter in writing rather than waiting at your door.",
          bn: "জনাব চৌধুরী, আপনাকে লিখছি সম্মান জানিয়ে, তবে একটা সত্যিকারের উদ্বেগ নিয়েও — স্টেশন রোডের আমাদের চারতলা ভবনের পানির পাম্পটা নিয়ে। তিন বছর ধরে আমি ৩/বি ফ্ল্যাটের ভাড়াটে, আর এই পুরো সময়ে আমাকে আপনি সবসময়ই বোঝাপড়ার মানুষ মনে করেছেন। ঠিক এজন্যই, কারণ আমি চাই সেই সম্পর্কটা চলতে থাকুক, আপনার দরজায় অপেক্ষা করে বসার বদলে বিষয়টা লিখিতভাবে তুলে ধরছি।",
          hi: "आदरणीय चौधरी जी, मैं आपको सम्मान के साथ लिख रहा हूँ, पर एक सच्ची चिंता भी साथ लेकर — स्टेशन रोड की हमारी चार मंज़िला इमारत के पानी के पंप को लेकर। तीन साल से मैं फ्लैट 3/बी का किरायेदार हूँ, और इतने वक़्त में आपने मुझे हमेशा समझौते वाला इंसान पाया है। ठीक इसीलिए, क्योंकि मैं चाहता हूँ कि वह रिश्ता बना रहे, आपके दरवाज़े पर बैठे रहने की बजाय मामले को लिखित रूप में आपके सामने रख रहा हूँ।",
        },
        {
          en: "The pump failed on the first of this month, and the building has been without a steady water supply ever since. What began as an inconvenience has steadily deteriorated: for the past two weeks my family has carried buckets up three flights of stairs, morning and night. I reported the fault on the third and again on the ninth; on each occasion I was told, politely enough, that a mechanic would be sent. No mechanic has yet appeared at our gate.",
          bn: "এই মাসের এক তারিখে পাম্পটা নষ্ট হয়েছে, আর তার পর থেকে ভবনে স্থির কোনো পানি সরবরাহ নেই। যা শুরুতে খানিক ভোগান্তি ছিল, তা ধীরে ধীরে আরও বেড়েছে: গত দু'সপ্তাহ ধরে সকাল-সন্ধ্যা আমার পরিবার তিন সিঁড়ি উপরে বালতি বয়ে উঠছে। তিন তারিখে একবার, নয় তারিখে আরেকবার ত্রুটির কথা জানিয়েছি; প্রতিবারই যথেষ্ট ভদ্রভাবে বলা হয়েছে, মেকানিক পাঠানো হবে বলে। কিন্তু আজ পর্যন্ত আমাদের ফটকে কোনো মেকানিক দেখা যায়নি।",
          hi: "इस महीने की एक तारीख़ को पंप ख़राब हो गया, और तब से इमारत में निरंतर पानी की आपूर्ति नहीं है। जो शुरुआत में बस एक असुविधा थी, वह धीरे-धीरे बिगड़ता गया: पिछले दो हफ़्तों से सुबह-शाम मेरा परिवार तीन मंज़िल ऊपर बाल्टियाँ ढो रहा है। तीसरी तारीख़ को एक बार, फिर नौवीं को दूसरी बार ख़राबी की सूचना दी; हर बार मुझे काफ़ी विनम्रता से कहा गया कि मैकेनिक भेजा जाएगा। लेकिन आज तक हमारे गेट पर कोई मैकेनिक नहीं दिखा।",
        },
        {
          en: "When I spoke to you by phone last Tuesday, you assured me that the matter would be seen to within the week, and I accepted that assurance in good faith. Since then the strain has only deepened: my wife has missed shifts at the hospital because mornings are spent hauling water, and my daughter, who sits her examinations in June, loses an hour of study each evening to the bucket queue. I do not believe this is what you intend; I write so that it cannot continue.",
          bn: "গত মঙ্গলবার ফোনে কথা বলেছিলাম — তখন আপনি আশ্বস্ত করেছিলেন যে সপ্তাহ শেষ হওয়ার মধ্যেই বিষয়টার দেখভাল হবে, আর আমি সেই আশ্বাস সৎ বিশ্বাসেই গ্রহণ করেছিলাম। তার পর থেকে কষ্টটা কেবল বাড়ছে: সকালগুলো পানি টানতেই কেটে যায় বলে হাসপাতালে আমার স্ত্রীর কয়েকটা ডিউটি মিস হয়েছে, আর জুনে পরীক্ষা দেবে যে মেয়েটি, সে প্রতি সন্ধ্যায় বালতির লাইনে দাঁড়িয়ে পড়ার এক ঘণ্টা হারায়। বিশ্বাস করি, এটা আপনার উদ্দেশ্য নয়; লিখছি যেন এই অবস্থা আর চলতে না পারে।",
          hi: "पिछले मंगलवार फ़ोन पर बात हुई थी — तब आपने मुझे आश्वस्त किया था कि सप्ताह पूरा होने से पहले ही मामले पर ध्यान दिया जाएगा, और मैंने वह आश्वासन निष्कपट भरोसे से स्वीकार किया था। तब से दबाव केवल बढ़ा है: सुबहें पानी ढोने में बीतती हैं, इसलिए अस्पताल में मेरी पत्नी के कुछ ड्यूटी-शिफ़्ट छूट गए, और जून में परीक्षा देने वाली मेरी बेटी हर शाम बाल्टी की क़तार में पढ़ाई का एक घंटा खो देती है। मानता हूँ, यह आपकी मंशा नहीं है; इसलिए लिख रहा हूँ कि यह स्थिति और न चले।",
        },
        {
          en: "You will permit me to remind you, without heat, that my rent has been paid punctually on the first of every month for three years, and that the lease we both signed obliges you to keep the building's basic services in working order. A landlord's promise, like a tenant's payment, is part of the same agreement. I have never asked for a reduction, a repair I caused, or an extension of any deadline; today I ask only for the service we already pay for.",
          bn: "আপনি অনুমতি দেবেন, উত্তেজনা ছাড়াই মনে করিয়ে দিতে — তিন বছর ধরে প্রতি মাসের এক তারিখে আমার ভাড়া যথাসময়ে জমা হয়েছে, আর আমরা দু'জনে যে চুক্তিতে সই করেছি, সেই চুক্তি আপনাকে ভবনের নিত্যপ্রয়োজনীয় সেবাগুলো ঠিক রাখতে বাধ্য করে। বাড়িওয়ালার প্রতিশ্রুতি যেমন, ভাড়াটের টাকা পরিশোধ তেমন — দুটোই একই চুক্তির অংশ। আমি কখনো ভাড়া কমানো, নিজে ঘটানো কোনো মেরামত, বা কোনো সময়সীমা বাড়িয়ে দিতে বলিনি; আজ চাইছি কেবল সেই সেবাটাই, যার জন্য আমরা ইতিমধ্যেই টাকা দিই।",
          hi: "आप मुझे अनुमति दें, बिना गुस्से के याद दिलाने की — तीन साल से हर महीने की एक तारीख़ को मेरा किराया समय पर जमा होता रहा है, और जिस ठेके पर हम दोनों ने दस्तख़त किए हैं, वह आपको इमारत की बुनियादी सेवाएँ काम करती रखने के लिए बाध्य करता है। मकान मालिक का वादा हो या किरायेदार का भुगतान — दोनों उसी समझौते का हिस्सा हैं। मैंने कभी न किराया कम करने को कहा, न अपने किए किसी मरम्मत के लिए, न किसी समय-सीमा बढ़ाने के लिए; आज माँग रहा हूँ बस उसी सेवा की, जिसके लिए हम पहले से ही पैसा देते हैं।",
        },
        {
          en: "Accordingly, I respectfully request two things. First, that the pump be repaired — or replaced, if the mechanic judges that wiser — within seven days of this letter reaching you. Second, that you reply to me in writing, so that both of us hold a clear record. I would sincerely rather not withhold rent, and I hope never to involve the tenants' association, but I am sure you will agree that some reply is owed to eleven households, not only to mine.",
          bn: "তাই আমি শ্রদ্ধার সঙ্গে দুটি অনুরোধ জানাচ্ছি। প্রথমত, এই চিঠি আপনার হাতে পৌঁছানোর সাত দিনের মধ্যে পাম্পটা মেরামত করা হোক — মেকানিকের চোখে বদলে ফেলাই বুদ্ধিমানের কাজ হলে, সেটাও হোক। দ্বিতীয়ত, আপনি লিখিতভাবে উত্তর দিন, যেন দু'জনের হাতেই একটা পরিষ্কার নথি থাকে। ভাড়া আটকে রাখব না — সত্যিই সে-পথে যেতে চাই না, আর ভাড়াটেদের সমিতিকে এতে জড়াতেও কোনোদিন চাই না; তবু নিশ্চিত, আপনিও মানবেন — একটা উত্তর কেবল আমার পরিবারের নয়, পুরো এগারোটা পরিবারের পাওনা।",
          hi: "इसलिए मैं आदरपूर्वक दो अनुरोध करता हूँ। पहला, यह पत्र आप तक पहुँचने के सात दिन के भीतर पंप की मरम्मत हो जाए — या अगर मैकेनिक को उसे बदल देना अधिक समझदारी लगे, तो वह बदल दिया जाए। दूसरा, आप मुझे लिखित रूप में उत्तर दें, ताकि दोनों के पास एक साफ़ रिकॉर्ड रहे। किराया रोकना — मैं सचमुच उस रास्ते पर जाना नहीं चाहता, और किरायेदारों की संस्था को भी इसमें कभी घसीटना नहीं चाहता; फिर भी पक्का हूँ कि आप भी मानेंगे — एक जवाब केवल मेरे परिवार का नहीं, पूरे ग्यारह घरानों का बकाया है।",
        },
        {
          en: "I remain, as ever, at your disposal to meet at a time that suits you, and I thank you for reading this letter to its end. Water is a small thing to ask for, yet a hard thing to live without; I trust that within a week this chapter will be closed and our good terms restored. Yours faithfully, Karim Ahmed, Flat 3/B.",
          bn: "আপনার সুবিধামতো সময়ে দেখা করতে আমি, আগের মতোই, প্রস্তুত আছি; আর এই চিঠিটা শেষ পর্যন্ত পড়ার জন্য ধন্যবাদ। পানি চাওয়ার মতো ছোট্ট একটা বিষয়, অথচ ওটা ছাড়া বাঁচা কঠিন; আস্থা রাখি, এক সপ্তাহের মধ্যে এই অধ্যায়টা বন্ধ হবে আর আমাদের ভালো সম্পর্ক ফিরে আসবে। আপনার বিশ্বস্ত, করিম আহমেদ, ৩/বি ফ্ল্যাট।",
          hi: "आपकी सुविधा के समय पर मिलने के लिए मैं, हमेशा की तरह, तैयार हूँ; और यह पत्र अंत तक पढ़ने के लिए धन्यवाद। पानी माँगने को छोटी चीज़ है, फिर भी उसके बिना जीना कठिन है; भरोसा है कि एक सप्ताह के भीतर यह अध्याय बंद होगा और हमारे अच्छे संबंध लौट आएँगे। आपका विश्वासपात्र, करीम अहमद, फ्लैट 3/बी।",
        },
      ],
      vocabulary: [
        {
          word: "inconvenience",
          meaning: {
            bn: "ভোগান্তি, অসুবিধা — দৈনন্দিন জীবনের ছোটখাটো ঝামেলা",
            en: "trouble or difficulty in daily life",
            hi: "असुविधा — रोज़मर्रा की छोटी-मोटी परेशानी",
          },
          example: "A one-hour power cut is an inconvenience; a fortnight without water is a crisis.",
        },
        {
          word: "deteriorated",
          meaning: {
            bn: "অবনতি হয়েছে — পরিস্থিতি ধীরে ধীরে খারাপ হয়েছে",
            en: "became gradually worse",
            hi: "बिगड़ गया — हालत धीरे-धीरे ख़राब हुई",
          },
          example: "The patient's condition deteriorated overnight.",
        },
        {
          word: "assured",
          meaning: {
            bn: "আশ্বস্ত করেছে — নিশ্চয়তা দিয়েছে",
            en: "told someone confidently that something will be done",
            hi: "आश्वस्त किया — भरोसा दिलाया",
          },
          example: "The manager assured us that the delivery would arrive on Friday.",
        },
        {
          word: "in good faith",
          meaning: {
            bn: "সৎ বিশ্বাসে — কোনো সন্দেহ বা সংশয় ছাড়া",
            en: "sincerely and without suspicion",
            hi: "निष्कपट भरोसे से, बिना किसी शक के",
          },
          example: "She signed the agreement in good faith, never suspecting a trick.",
        },
        {
          word: "punctually",
          meaning: {
            bn: "যথাসময়ে — ঠিক নির্দিষ্ট সময়ে",
            en: "exactly at the agreed time",
            hi: "ठीक तय समय पर",
          },
          example: "The ferry leaves punctually at seven, so do not be late.",
        },
        {
          word: "withhold",
          meaning: {
            bn: "আটকে রাখা — দেওয়ার কথা থাকা সত্ত্বেও না দেওয়া",
            en: "to refuse to give or pay something",
            hi: "रोककर रखना — देने योग्य चीज़ न देना",
          },
          example: "An employee cannot legally withhold information from the auditor.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "দরজায় এসে কথা না বলে করিম কেন লিখিতভাবে চিঠিটা পাঠাচ্ছেন?",
            en: "Why does Karim put the matter in writing rather than waiting at the landlord's door?",
            hi: "मकान मालिक के दरवाज़े पर इंतज़ार करने की बजाय करीम मामला लिखित रूप में क्यों रख रहा है?",
          },
          options: [
            { bn: "সম্পর্কটা বাঁচিয়ে দৃঢ়ভাবে দাবি জানাতে, এবং দু'জনের হাতে পরিষ্কার নথি রাখতে", en: "To be firm while preserving the relationship, and to leave both parties a clear record", hi: "रिश्ता बचाते हुए दृढ़ता से माँग रखने, और दोनों के पास साफ़ रिकॉर्ड रखने के लिए" },
            { bn: "কারণ তিনি ভাড়াটে-চুক্তি ভেঙে দিতে চান", en: "Because he intends to end the tenancy", hi: "क्योंकि वे किराये का ठेका तोड़ना चाहते हैं" },
            { bn: "কারণ বাড়িওয়ালা ফোন ধরেন না", en: "Because the landlord never answers the phone", hi: "क्योंकि मकान मालिक फ़ोन कभी नहीं उठाता" },
            { bn: "কারণ তিনি ভাড়া আটকে রাখার ঘোষণা দিতে চান", en: "Because he wants to announce that he is withholding rent", hi: "क्योंकि वे घोषणा करना चाहते हैं कि किराया रोक रहे हैं" },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম অনুচ্ছেদে বলা — সম্পর্কটা চালিয়ে যেতে চাওয়ায় দরজায় অপেক্ষার বদলে লিখছেন; পঞ্চম অনুচ্ছেদে লিখিত উত্তর চাওয়া হয়েছে 'পরিষ্কার নথি' রাখার জন্য।",
            en: "Paragraph 1: he writes precisely because he wants the relationship to continue; paragraph 5 asks for a written reply so that both parties hold a clear record.",
            hi: "अनुच्छेद 1: वे इसलिए लिखते हैं कि रिश्ता बना रहे; अनुच्छेद 5 में लिखित जवाब की माँग है, ताकि दोनों के पास साफ़ रिकॉर्ड रहे।",
          },
        },
        {
          question: {
            bn: "চতুর্থ অনুচ্ছেদে 'উত্তেজনা ছাড়াই' (without heat) কথাটির অর্থ কী?",
            en: "In paragraph 4, what does the phrase 'without heat' mean?",
            hi: "अनुच्छेद 4 में 'without heat' पदबंध का क्या अर्थ है?",
          },
          options: [
            { bn: "চিঠিটা গরম করার ব্যবস্থা নেই এমন ঘরে লেখা", en: "the letter was written in an unheated room", hi: "पत्र बिना गरम कमरे में लिखा गया" },
            { bn: "রাগ বা কটাক্ট ছাড়া — শান্ত, নিয়ন্ত্রিত সুরে", en: "calmly, without anger or sarcasm", hi: "बिना ग़ुस्से या व्यंग्य के — शांत, संयत स्वर में" },
            { bn: "পাম্পে গরম পানি নেই বলে", en: "because the pump supplies no hot water", hi: "क्योंकि पंप गरम पानी नहीं देता" },
            { bn: "খুব দ্রুত, উত্তেজনায় লেখা", en: "hurriedly, in great excitement", hi: "बहुत जल्दबाज़ी में, बेचैनी से" },
          ],
          answer: 1,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদ: 'without heat' বাগধারাটা রাগ না-করে ভদ্রভাবে মনে করিয়ে দেওয়াকে বোঝায় — চিঠির সুর সারাটা দৃঢ় কিন্তু আক্রমণাত্মক নয়।",
            en: "Paragraph 4: 'without heat' is an idiom meaning calmly, politely — the letter stays firm yet never aggressive.",
            hi: "अनुच्छेद 4: 'without heat' मुहावरे का अर्थ है शांत, विनम्र भाव से — पत्र दृढ़ है पर आक्रामक नहीं।",
          },
        },
        {
          question: {
            bn: "করিম ঠিক কী দুটি জিনিস চান, কোন সময়সীমায়?",
            en: "What exactly are the two things Karim asks for, and by when?",
            hi: "करीम ठीक क्या दो चीज़ें माँगता है, और कब तक?",
          },
          options: [
            { bn: "ভাড়া কমানো আর তিন দিনের মধ্যে মেকানিক", en: "A rent reduction and a mechanic within three days", hi: "किराया कटौती और तीन दिन में मैकेनिक" },
            { bn: "নতুন চুক্তি আর বার্ষিক বোনাস", en: "A new lease and an annual bonus", hi: "नया ठेका और सालाना बोनस" },
            { bn: "সাত দিনের মধ্যে পাম্প ঠিক বা বদলি, আর লিখিত উত্তর", en: "The pump repaired or replaced within seven days, and a reply in writing", hi: "सात दिन के भीतर पंप की मरम्मत या बदलाव, और लिखित जवाब" },
            { bn: "কোনো কিছু নয় — তিনি শুধু হুঁশিয়ারি দিচ্ছেন", en: "Nothing — he merely issues a warning", hi: "कुछ नहीं — वे केवल चेतावनी देते हैं" },
          ],
          answer: 2,
          explain: {
            bn: "পঞ্চম অনুচ্ছেদে দুটি অনুরোধ স্পষ্ট: সাত দিনের মধ্যে পাম্প মেরামত (বা বদলি), আর লিখিতভাবে উত্তর।",
            en: "Paragraph 5 states both requests: repair or replacement 'within seven days', and a reply 'in writing'.",
            hi: "अनुच्छेद 5 दोनों अनुरोध बताता है: 'सात दिन के भीतर' मरम्मत या बदलाव, और 'लिखित' जवाब।",
          },
        },
        {
          question: {
            bn: "তিন বছরের যথাসময়ের ভাড়ার কথা করিম কেন টেনে তুলেছেন?",
            en: "Why does Karim mention three years of punctual rent payments?",
            hi: "करीम तीन साल का समय पर किराया चुकाने का ज़िक्र क्यों करता है?",
          },
          options: [
            { bn: "ভাড়া বাড়ানোর আবেদন করতে", en: "To request a rent increase", hi: "किराया बढ़ाने का अनुरोध करने के लिए" },
            { bn: "দেখাতে যে তাঁর দিক থেকে চুক্তি পূরণ হয়েছে, তাই এখন বাড়িওয়ালার পালা", en: "To show he has honoured his side of the agreement, so the duty now falls on the landlord", hi: "दिखाने के लिए कि उन्होंने अपना ठेका निभाया, अब ज़िम्मेदारी मकान मालिक की है" },
            { bn: "বাড়িওয়ালাকে অপমান করতে", en: "To humiliate the landlord", hi: "मकान मालिक को अपमानित करने के लिए" },
            { bn: "ভাড়া আটকে রাখার ভয় দেখাতে", en: "To threaten to stop paying rent", hi: "किराया रोकने की धमकी देने के लिए" },
          ],
          answer: 1,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদ: যথাসময়ে ভাড়ার রেকর্ডটা একই চুক্তির দুই পাশ মেলায় — 'বাড়িওয়ালার প্রতিশ্রুতি যেমন, ভাড়াটের টাকা পরিশোধ তেমন'।",
            en: "Paragraph 4: the rent record pairs both halves of one agreement — a landlord's promise, like a tenant's payment.",
            hi: "अनुच्छेद 4: किराये का रिकॉर्ड उसी समझौते के दोनों पक्ष जोड़ता है — मकान मालिक का वादा, किरायेदार का भुगतान।",
          },
        },
        {
          question: {
            bn: "চিঠিটার সুরটিকে সবচেয়ে ভালো কোন জোড়া বোঝায়?",
            en: "Which pair of words best describes the tone of the letter?",
            hi: "पत्र का स्वर सबसे अच्छा कौन-सा युग्म व्यक्त करता है?",
          },
          options: [
            { bn: "আক্রমণাত্মক ও হুমকিধর্মী", en: "hostile and threatening", hi: "शत्रुतापूर्ण और धमकी भरा" },
            { bn: "রসিক ও উপেক্ষামূলক", en: "playful and indifferent", hi: "मज़ाकिया और उदासीन" },
            { bn: "বিনম্ন অথচ দৃঢ় — ভদ্র ভাষায় স্পষ্ট দাবি ও সময়সীমা", en: "courteous but firm — clear demands and deadlines in polite language", hi: "विनम्र पर दृढ़ — शिष्ट भाषा में स्पष्ट माँगें और समय-सीमा" },
            { bn: "আবেগে ভরা অনুনয়", en: "an emotional plea for pity", hi: "करुणा की भावुक विनती" },
          ],
          answer: 2,
          explain: {
            bn: "সারা চিঠিতে 'সম্মান জানিয়ে', 'উত্তেজনা ছাড়াই' জাতীয় ভদ্র ভাষা আছে, অথচ সাত দিনের সময়সীমা ও লিখিত উত্তরের দাবি দৃঢ় — তাই 'ভদ্র কিন্তু দৃঢ়'।",
            en: "Throughout, the language is polite (with respect, without heat), yet the seven-day deadline and the demand for a written reply are firm — courteous but firm.",
            hi: "भर में भाषा विनम्र है (सम्मान के साथ, बिना गुस्से), पर सात दिन की सीमा और लिखित जवाब की माँग दृढ़ है — विनम्र पर दृढ़।",
          },
        },
      ],
    },
  },
  {
    slug: "read-a1-himalaya",
    level: "advanced",
    category: "travel",
    minutes: 5,
    unit: 4,
    data: {
      title: { bn: "হিমালয়ের চিঠি", en: "Himalayan Letters", hi: "हिमालय की चिट्ठियाँ" },
      summary: {
        bn: "চার হাজার মিটারের ওপরে রাখা এক ট্রেকিং-ডায়েরি: পাতলা বাতাস, ঘন নীরবতা, তৃতীয় দিনে নিজের ওপর সংশয় — আর চতুর্থ দিনে ফিরে আসা সংকল্প।",
        en: "A trek diary kept above four thousand metres: thin air, deep silence, self-doubt on day three — and the resolve that answers it by day four.",
        hi: "चार हज़ार मीटर से ऊपर लिखा गया एक ट्रेक-डायरी: पतली हवा, गहरा सन्नाटा, तीसरे दिन आत्म-संदेह — और चौथे दिन उसी को जवाब देता संकल्प।",
      },
      genre: "diary",
      paragraphs: [
        {
          en: "Day 1. We left the road at Namche Bazaar before the mist had lifted, and by noon the world had narrowed to the width of a boot-print. At this height the thin air spends its kindness sparingly: every hundred steps asks a question, and my body has not yet acclimatised to the reply. I carried a notebook because my grandfather, who crossed these passes with mule trains, believed that what is not written down is easily lost.",
          bn: "দিন ১। কুয়াশা ওঠার আগেই নামচে বাজারে পিচের রাস্তা আমাদের পেছনে পড়ে গেল, আর দুপুরের মধ্যে দুনিয়াটা এক বুটের ছাপের সমান চওড়া পথে সেঁটে এল। এই উচ্চতায় পাতলা বাতাস তার দয়াটুকুও মেপে মেপে বিলিয়ে দেয়: প্রতি শো ধাপে একটা প্রশ্ন এগিয়ে আসে, আর আমার শরীর সেই উত্তরের সঙ্গে এখনো মানিয়ে নিতে পারেনি। খাতাটা সঙ্গে এনেছি কারণ দাদু — যিনি খচ্চরের কাফেলা নিয়ে এই গিরিগুলো পেরিয়েছেন — বিশ্বাস করতেন, যা লেখা হয় না, তা সহজেই হারিয়ে যায়।",
          hi: "दिन 1। कोहरे के उठने से पहले ही नामचे बाज़ार में पक्की सड़क हमारे पीछे छूट गई, और दोपहर होते-होते दुनिया सिमटकर एक बूट के निशान जितनी चौड़ी पगडंडी रह गई। इस ऊँचाई पर विरल हवा अपनी दया भी नापकर देती है: हर सौ क़दम एक सवाल पूछता है, और मेरा शरीर उस जवाब के अनुकूल अभी ढला नहीं है। खाता इसलिए साथ लाया हूँ कि दादा जी — जिन्होंने खच्चरों के क़ाफ़िलों के साथ ये दर्रे पार किए थे — मानते थे, जो लिखा नहीं जाता, वह आसानी से खो जाता है।",
        },
        {
          en: "Day 2. We crossed four thousand metres in the early afternoon, and the forest gave up its last juniper below us like a debtor surrendering his coat. Above the treeline nothing remains to soften the wind; the silence up here is not empty but listening. Sleep, however, remained elusive — the altitude kept tapping my ribs like an impatient creditor, and I lay awake counting the rhythm of my own heart, unsure whether it was courage or fear.",
          bn: "দিন ২। সকাল শেষ হতে না হতেই চার হাজার মিটার পেরিয়েছি, আর নিচে বন তার শেষ জুনিপারগাছটাও ছেড়ে দিল — যেন দেউলিয়া মানুষ তার জামাটাও দিয়ে দেয়। গাছের সারির ওপরে বাতাসকে নরম করার কেউ আর নেই; ওপরে এই নীরবতা খালি নয়, এ যেন সব শুনে যাচ্ছে। ঘুম তবে নাগালের বাইরেই রইল — উচ্চতা অধৈর্য ধারদেবতার মতো পাঁজরে টোকা দিয়েই চলল, আর আমি জেগে জেগে নিজের হৃদস্পন্দনের তাল গুনছিলাম, বুঝতে পারছিলাম না এটা সাহস, না ভয়।",
          hi: "दिन 2। दोपहर होने से पहले ही हम चार हज़ार मीटर पार कर चुके थे, और नीचे जंगल ने अपनी आख़िरी जुनिपर तक हमारे नीचे छोड़ दी — जैसे दिवालिया आदमी अपनी कोट भी उधार दे दे। पेड़ों की सीमा के ऊपर हवा को नरम करने वाला कुछ नहीं बचता; यहाँ का सन्नाटा ख़ाली नहीं, वह सुन रहा है। नींद तो मगर हाथ से निकल गई — ऊँचाई बेसब्र लेनदार की तरह पसलियों पर थपथपाती रही, और मैं जागते-जागते अपनी ही धड़कन का ताल गिनता रहा, तय न कर पाया कि वह हिम्मत थी या डर।",
        },
        {
          en: "Day 3. I nearly turned back. A headache clamped my skull at dawn, the trail ran out of patience and into switchbacks, and somewhere below the moraine I lost the simple, wordless joy with which I had begun. Every rational voice I own advised retreat: the summit is not obliged to love you, it seemed to say, and pride is expensive luggage. I sat on a cold stone, wrote half a page of excuses, and could not finish it.",
          bn: "দিন ৩। প্রায় ফিরে যাই। ভোরেই মাথাব্যথা শিকঞ্জির মতো কপালে চেপে বসল, পথটা ধৈর্য হারিয়ে ঘুরপাক-খাওয়া বাঁকে বাঁকে উঠতে লাগল, আর মোরেনের কোথাও নিচে এসে আমি হারিয়ে ফেললাম সেই সরল, নীরব আনন্দ, যার সঙ্গে যাত্রা শুরু করেছিলাম। ভেতরের প্রতিটা যুক্তিবাদী কণ্ঠ ফিরে যাওয়ার পরামর্শ দিল: চূড়ার তোমাকে ভালোবাসতে বাধ্য থাকতে হবে না — যেন বলছিল সে — আর অহংকার খুব দামি লাগেজ। ঠান্ডা পাথরের ওপর বসে আধপাতা বাহানা লিখলাম, শেষ করতে পারলাম না।",
          hi: "दिन 3। मैं लगभग लौट गया था। भोर में सिरदर्द ने खोपड़ी पर शिकंजे की तरह कस दिया, रास्ता धैर्य खोकर घुमावदार मोड़ों में उलझने लगा, और मोरेन के कहीं नीचे मैं वह सरल, बिन-बोला आनंद खो बैठा जिसके साथ सफ़र शुरू किया था। मेरे भीतर की हर तर्कसंगत आवाज़ पीछे हटने की सलाह देने लगी: चोटी को तुमसे प्यार करने की ज़रूरत नहीं — ऐसा लगा उसे — और अहंकार बहुत महँगा सामान है। ठंडे पत्थर पर बैठकर आधे पन्ने के बहाने लिखे, पर पूरे न कर पाया।",
        },
        {
          en: "Day 3, evening. What saved the day was small. Tsering, our guide, handed me tea without a word, and in the steam I recognised the same stubbornness my grandfather once described — resolve, he called it, the kind that borrows its strength from the mountain rather than from applause. The headache eased. I tore the half-page of excuses out of this notebook and fed it to the stove, which received my doubts with more grace than they deserved.",
          bn: "দিন ৩, সন্ধ্যা। দিনটাকে বাঁচিয়েছিল কিছু ক্ষুদ্র জিনিস। ত্সেরিং গাইড এক কথা না বলে আমার হাতে চা তুলে দিল, আর সেই ভাপেই চিনে নিলাম দাদুর বর্ণনা করা সেই একগুঁয়েমি — তিনি বলতেন, সংকল্প, যার শক্তি সে ধার নেয় পাহাড়ের কাছ থেকে, হাততালির কাছ থেকে নয়। মাথাব্যথা কমে এল। খাতা থেকে বাহানার আধপাতাটা ছিঁড়ে চুল্লিতে পুড়িয়ে দিলাম — চুল্লি আমার সংশয়গুলোকে তাদের প্রাপ্যের চেয়ে বেশি অনুগ্রহ দেখিয়ে গ্রহণ করল।",
          hi: "दिन 3, शाम। दिन को बचाया कुछ छोटी-सी चीज़ों ने। त्सेरिंग, हमारे गाइड, ने बिना एक शब्द बोले मेरे हाथ में चाय थमा दी, और उसी भाप में मैं पहचान गया दादा जी के बयान की वही ज़िद — वे कहते थे, संकल्प, जो ताक़त धार कर लेता है पहाड़ से, तालियों से नहीं। सिरदर्द हल्का हुआ। खाते से बहानों का वह आधा पन्ना फाड़कर चूल्हे में झोंक दिया — चूल्हे ने मेरे संदेहों को उनके योग्य से भी ज़्यादा अनुग्रह से स्वीकार किया।",
        },
        {
          en: "Day 4. We reached the high pass at ten minutes past ten, exactly when the prayer flags were loudest in the wind. From the top, the range unfolded like a letter that had been writing itself for a million years — slow, patient, addressed to whoever cared to read it. I understood then that the Himalaya was replying to my doubt: not with thunder, but with a silence so complete that my small fears had nowhere to hide.",
          bn: "দিন ৪। সকাল দশটা দশে আমরা উঁচু গিরিটায় পৌঁছালাম — ঠিক তখনই, যখন বাতাসে প্রার্থনার পতাকাগুলো সবচেয়ে জোরে ফেটপাট করছিল। চূড়া থেকে পাহাড়ের সারিটা খুলে গেল এক চিঠির মতো, যা নিজেকে নিজে দশ লক্ষ বছর ধরে লিখে চলেছে — ধীর, ধৈর্যশীল, যে-কেউ পড়তে চায় তার উদ্দেশ্যে লেখা। তখনই বুঝলাম, আমার সংশয়ের উত্তর দিচ্ছিল হিমালয়: গর্জন দিয়ে নয় — এমন এক নীরবতা দিয়ে, যার সম্পূর্ণতায় আমার ছোট্ট ভয়গুলোর লুকোনোর জায়গাই রইল না।",
          hi: "दिन 4। सुबह दस बजकर दस मिनट पर हम ऊँचे दर्रे पर पहुँचे — ठीक उसी समय, जब हवा में प्रार्थना के झंडे सबसे ज़ोर से फड़फड़ा रहे थे। ऊपर से पर्वत-शृंखला खुलती चली गई एक चिट्ठी की तरह, जो दस लाख सालों से अपने-आप को लिख रही है — धीमी, धैर्यवान, उसे पढ़ना चाहे उसी के नाम लिखी। तब समझ आया, हिमालय मेरे संदेह का जवाब दे रहा था: गरज के साथ नहीं, बल्कि ऐसे सन्नाटे से, जिसकी पूर्णता में मेरे छोटे-मोटे डरों के छिपने की जगह ही न रही।",
        },
        {
          en: "Day 4, evening. Descending, I keep thinking that the diary my grandfather demanded is less a record of distance than of weather inside a person. The thin air has thinned me as well: it has burned away excuses, complaints, the habit of hurry. Whatever I bring home will be lighter than what I carried up, and the blank half-page I left in this notebook will stay blank — a small, deliberate silence, like the one the mountain keeps.",
          bn: "দিন ৪, সন্ধ্যা। নেমে চলতে চলতে একটাই ভাবনা ফিরে ফিরে আসে — দাদু যে ডায়েরির শর্ত দিয়েছিলেন, তা দূরত্বের হিসেব কম, মানুষের ভেতরের আবহাওয়ার হিসেব বেশি। পাতলা বাতাস আমাকেও পাতলা করে দিয়েছে: জ্বেলে পুরেছে বাহানা, অভিযোগ, তাড়াহুড়োর অভ্যাস। বাড়ি যা ফিরাব, তা ওপরে যা বয়ে এনেছিলাম তার চেয়ে হালকা হবে; আর এই খাতায় ফাঁকা রেখে আসা আধপাতাটা ফাঁকাই থাকবে — ছোট্ট, ইচ্ছেকৃত এক নীরবতা, যেমন পাহাড় রাখে।",
          hi: "दिन 4, शाम। उतरते हुए एक ही ख़याल बार-बार लौटता है — दादा जी ने जो डायरी माँगी थी, वह दूरी का कम, इंसान के भीतर के मौसम का ज़्यादा हिसाब रखती है। विरल हवा ने मुझे भी पतला कर दिया है: जला दिया है बहाने, शिकायतें, जल्दबाज़ी की आदत। घर जो लौटाऊँगा, वह ऊपर तक लाए बोझ से हल्का होगा; और इस खाते में ख़ाली छोड़ा वह आधा पन्ना ख़ाली ही रहेगा — एक छोटा, जानबूझकर किया सन्नाटा, जैसा पहाड़ रखता है।",
        },
      ],
      vocabulary: [
        {
          word: "acclimatised",
          meaning: {
            bn: "উচ্চতা বা পরিবেশের সঙ্গে মানিয়ে নেওয়া",
            en: "become used to a new climate, height or condition",
            hi: "ऊँचाई या मौसम के अनुकूल ढल जाना",
          },
          example: "It takes several days to become acclimatised to the desert heat.",
        },
        {
          word: "sparingly",
          meaning: {
            bn: "কম-বেশি করে, মেপে মেপে — হাতছাড়া করে দেয় না",
            en: "in small, careful amounts",
            hi: "कम-कम करके, बचाकर",
          },
          example: "Use salt sparingly in this dish; the stock is already salty.",
        },
        {
          word: "elusive",
          meaning: {
            bn: "ধরা দেয় না এমন, নাগালের বাইরে",
            en: "difficult to find, catch or achieve",
            hi: "हाथ न आने वाला, पकड़ में न आने वाला",
          },
          example: "A good night's sleep proved elusive before the interview.",
        },
        {
          word: "switchbacks",
          meaning: {
            bn: "ঘুরপাক-খাওয়া বাঁকে বাঁকে ওঠা পাহাড়ি পথ",
            en: "a path that zigzags up a steep slope",
            hi: "पहाड़ पर टेढ़े-मेढ़े मोड़ों वाला रास्ता",
          },
          example: "The bus groaned up the switchbacks to the hill station.",
        },
        {
          word: "moraine",
          meaning: {
            bn: "মোরেন — হিমবাহ টেনে রেখে যাওয়া পাথর-কাঁকরের ঢিবি",
            en: "rocks and gravel left behind by a glacier",
            hi: "हिमनदी द्वारा छोड़ी गई चट्टान-कंकड़ की परत",
          },
          example: "We pitched the tent on a flat patch of moraine.",
        },
        {
          word: "resolve",
          meaning: {
            bn: "দৃঢ় সংকল্প — পিছিয়ে না-যাওয়া মনের জোর",
            en: "firm determination to keep going",
            hi: "दृढ़ संकल्प — टस से मस न होने वाला मनोबल",
          },
          example: "Her resolve to finish the marathon never wavered.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "'পাতলা বাতাস তার দয়া মেপে মেপে বিলিয়ে দেয়' — প্রথম দিনের এই বাক্যের অর্থ কী?",
            en: "'The thin air spends its kindness sparingly' (Day 1) — what does this sentence mean?",
            hi: "'विरल हवा अपनी दया नापकर देती है' (दिन 1) — इस वाक्य का क्या अर्थ है?",
          },
          options: [
            { bn: "বাতাস পাতলা — প্রতিটা শ্বাস, প্রতিটা ধাপ কঠিন; শরীরকে ধীরে ধীরে মানিয়ে নিতে হয়", en: "the air is thin — every breath and step is hard until the body slowly adjusts", hi: "हवा विरल है — शरीर धीरे-धीरे ढलने तक हर साँस और क़दम कठिन है" },
            { bn: "এই উচ্চতায় মানুষের বসতি কম", en: "few people live at this altitude", hi: "इतनी ऊँचाई पर लोग कम रहते हैं" },
            { bn: "পর্বতের আবহাওয়া দয়ালু", en: "the mountain weather is generous", hi: "पहाड़ का मौसम दयालु है" },
            { bn: "পথে খরচ মেপে করতে হবে", en: "spending money on the trail should be limited", hi: "रास्ते में ख़र्च सीमित रखना चाहिए" },
          ],
          answer: 0,
          explain: {
            bn: "দিন ১-এর অনুচ্ছেদেই ব্যাখ্যা আছে: 'প্রতি শো ধাপে একটা প্রশ্ন, আর শরীর উত্তরের সঙ্গে এখনো মানিয়ে নেয়নি' — অর্থাৎ উচ্চতায় অক্সিজেন কম।",
            en: "The Day 1 entry explains it: every hundred steps asks a question, and the body has not yet acclimatised — oxygen is scarce at altitude.",
            hi: "दिन 1 की प्रविष्टि इसे समझाती है: 'हर सौ क़दम एक सवाल पूछता है, और शरीर अभी ढला नहीं' — ऊँचाई पर ऑक्सीजन कम है।",
          },
        },
        {
          question: {
            bn: "তৃতীয় দিনে লেখককে প্রায় ফিরিয়ে নিয়েছিল কী?",
            en: "What nearly made the writer turn back on Day 3?",
            hi: "तीसरे दिन लेखक को लगभग लौटा दिया क्या?",
          },
          options: [
            { bn: "খাবার আর চায়ের মজুদ শেষ", en: "running out of food and tea", hi: "खाना और चाय ख़त्म हो जाना" },
            { bn: "গাইড ত্সেরিংয়ের অস্বস্তিকর নীরবতা", en: "the guide Tsering's uncomfortable silence", hi: "गाइड त्सेरिंग का असहज सन्नाटा" },
            { bn: "মাথাব্যথা, ঘুরপাক-খাওয়া বাঁকে বাঁকে কঠিন পথ, আর ভেতরের যুক্তিবাদী কণ্ঠের পরামর্শ", en: "a clamping headache, punishing switchbacks and his own rational voices urging retreat", hi: "कसने वाला सिरदर्द, कठिन घुमावदार रास्ते, और भीतर की तर्कसंगत आवाज़ों की सलाह" },
            { bn: "ঘর থেকে খারাপ কোনো খবর", en: "bad news from home", hi: "घर से बुरी ख़बर" },
          ],
          answer: 2,
          explain: {
            bn: "দিন ৩: ভোরের মাথাব্যথা, ঘুরপাক-খাওয়া বাঁক, আর 'ভেতরের প্রতিটা যুক্তিবাদী কণ্ঠ ফিরে যেতে বলল'।",
            en: "Day 3: the dawn headache, the switchbacks, and every rational voice advising retreat.",
            hi: "दिन 3: भोर का सिरदर्द, घुमावदार रास्ते, और भीतर की हर तर्कसंगत आवाज़ की पीछे हटने की सलाह।",
          },
        },
        {
          question: {
            bn: "'অহংকার খুব দামি লাগেজ' — এর অর্থ কী?",
            en: "'Pride is expensive luggage' — what does this mean?",
            hi: "'अहंकार बहुत महँगा सामान है' — इसका क्या अर्थ है?",
          },
          options: [
            { bn: "পাহাড়ে জিনিসপত্র কেনা দামি", en: "goods are costly in the mountains", hi: "पहाड़ों में सामान महँगा है" },
            { bn: "অহংকার নিয়ে পর্বতে ওঠা ব্যয়বহুল — সে-ই ব্যর্থতা ডেকে আনে", en: "climbing out of pride is costly — it invites failure", hi: "अहंकार से चढ़ना महँगा है — वह असफलता बुलाता है" },
            { bn: "কুলি-বাহক ভারী বোঝার জন্য বেশি টাকা নেয়", en: "porters charge a lot for heavy bags", hi: "कुली भारी बोरियों के लिए ज़्यादा पैसा लेते हैं" },
            { bn: "চূড়ায় পৌঁছলেই প্রশংসা মেলে", en: "reaching the summit earns applause", hi: "चोटी पर पहुँचने पर तालियाँ मिलती हैं" },
          ],
          answer: 1,
          explain: {
            bn: "দিন ৩: 'চূড়ার তোমাকে ভালোবাসতে বাধ্য থাকতে হবে না' — অর্থাৎ অহংকারকে ওজন হিসেবে বয়ে ওঠার দাম দিতে হয়।",
            en: "Day 3: the summit is not obliged to love you — carrying pride up the mountain exacts its price.",
            hi: "दिन 3: चोटी को तुमसे प्यार करने की ज़रूरत नहीं — अहंकार उठाकर चढ़ने की क़ीमत चुकानी पड़ती है।",
          },
        },
        {
          question: {
            bn: "তৃতীয় দিনের সন্ধ্যায় কোন ছোট ঘটনা দিনটাকে বদলে দিল?",
            en: "Which small event turned Day 3 around for the writer?",
            hi: "तीसरे दिन की शाम कौन-सी छोटी घटना ने दिन बदल दिया?",
          },
          options: [
            { bn: "মাথাব্যথার ওষুধ", en: "medicine for the headache", hi: "सिरदर्द की दवा" },
            { bn: "পরিবারের ফোনকল", en: "a phone call from his family", hi: "परिवार का फ़ोन कॉल" },
            { bn: "চূড়ায় ওঠার পথ খুলে যাওয়ার খবর", en: "news that the summit route had opened", hi: "चोटी का रास्ता खुलने की ख़बर" },
            { bn: "গাইডের নীরব চা — দাদুর বর্ণনা করা সংকল্পের কথা মনে পড়ে বাহানার পাতাটা পুড়িয়ে ফেলা", en: "the guide's silent tea — remembering his grandfather's resolve, then burning the page of excuses", hi: "गाइड की चुपचाप दी चाय — दादा के संकल्प की याद, फिर बहानों का पन्ना जला देना" },
          ],
          answer: 3,
          explain: {
            bn: "দিন ৩, সন্ধ্যার অনুচ্ছেদ: 'দিনটাকে বাঁচিয়েছিল কিছু ক্ষুদ্র জিনিস' — ত্সেরিংয়ের চা, সংকল্পের স্মৃতি, আর বাহানার আধপাতা চুল্লিতে পুড়ে যাওয়া।",
            en: "Day 3, evening: 'What saved the day was small' — Tsering's tea, the remembered resolve, and the half-page of excuses fed to the stove.",
            hi: "दिन 3, शाम: 'दिन को बचाया कुछ छोटी-सी चीज़ों ने' — त्सेरिंग की चाय, याद आया संकल्प, और बहानों का आधा पन्ना चूल्हे में झोंक दिया गया।",
          },
        },
        {
          question: {
            bn: "শেষ প্রবিষ্টির (দিন ৪, সন্ধ্যা) সুরটি কোনটি সবচেয়ে ভালো বোঝায়?",
            en: "Which words best describe the tone of the final entry (Day 4, evening)?",
            hi: "अंतिम प्रविष्टि (दिन 4, शाम) का स्वर सबसे अच्छा क्या व्यक्त करता है?",
          },
          options: [
            { bn: "জয়ের উল্লাস — পর্বত জয়ের ধিক্কার", en: "triumphant boasting about conquering the mountain", hi: "पहाड़ जीतने का घमंड" },
            { bn: "নিরাশা ও পশ্চাতাপ", en: "despair and regret", hi: "निराशा और पछतावा" },
            { bn: "শান্ত, প্রতিফলিত মনন — হালকা হয়ে ফেরা, নীরবতার প্রতি শ্রদ্ধা", en: "quiet, reflective calm — returning lighter, honouring the silence", hi: "शांत, चिंतनशील स्थिरता — हल्का होकर लौटना, सन्नाटे का सम्मान" },
            { bn: "ভয় — নামতে ইচ্ছুক নয়", en: "fear — an unwillingness to descend", hi: "डर — उतरने को तैयार नहीं" },
          ],
          answer: 2,
          explain: {
            bn: "শেষ অনুচ্ছেদে কোনো উল্লাস নেই; লেখক বলেন, বাড়ি যা ফিরাব তা 'হালকা' হবে, আর ফাঁকা আধপাতাটা 'ইচ্ছেকৃত নীরবতা' থাকবে — পর্বতের নীরবতার মতোই।",
            en: "The last entry holds no boasting; the writer says whatever he brings home will be lighter, and the blank half-page stays a small, deliberate silence, like the one the mountain keeps.",
            hi: "आख़िरी प्रविष्टि में कोई शेख़ी नहीं; लेखक कहता है, घर जो लौटेगा वह हल्का होगा, और ख़ाली आधा पन्ना एक छोटा, जानबूझा सन्नाटा रहेगा — जैसा पहाड़ रखता है।",
          },
        },
      ],
    },
  },
  {
    slug: "read-a1-salinity",
    level: "advanced",
    category: "science",
    minutes: 6,
    unit: 5,
    data: {
      title: { bn: "নীরব লবণ", en: "The Silent Salt", hi: "मौन नमक" },
      summary: {
        bn: "উপকূলীয় বাংলাদেশের জমিতে লবণাক্ততা ঢুকে পড়ার নীরব সংকট — কারণ, প্রভাব আর মানিয়ে নেওয়ার লড়াই।",
        en: "How salinity is quietly invading coastal farmland in Bangladesh — its causes, its costs, and the fight to adapt.",
        hi: "बांग्लादेश के तटीय खेतों में घुसता लवणता का मौन संकट — कारण, असर और अनुकूलन की लड़ाई।",
      },
      genre: "article",
      paragraphs: [
        {
          en: "In the villages of Khulna and Satkhira, the change did not arrive like a flood. It came quietly, in the taste of the water. Farmers who had grown rice for generations began to notice that their wells turned salty every winter, and each year the salt crept a little further inland.",
          bn: "খুলনা আর সাতক্ষীরার গ্রামগুলোতে পরিবর্তনটা বন্যার মতো এসেছিল না। এসেছিল নিঃশব্দে, পানির স্বাদে। প্রজন্মের পর প্রজন্ম ধান চাষ করা কৃষকরা লক্ষ করলেন, প্রতি শীতে তাঁদের কুয়ার পানি নোনতা হয়ে যাচ্ছে, আর প্রতি বছর লবণ আরও একটু ভেতরের দিকে এগিয়ে আসছে।",
          hi: "खुलना और सातक्षीरा के गाँवों में बदलाव बाढ़ की तरह नहीं आया। वह चुपचाप आया, पानी के स्वाद में। पीढ़ी-दर-पीढ़ी धान उगाने वाले किसानों ने देखा कि हर सर्दियों में उनके कुओं का पानी नमकीन होने लगा, और हर साल नमक थोड़ा और भीतर की ओर बढ़ गया।",
        },
        {
          en: "Scientists call the process salinity intrusion. Two forces drive it. The first is the slow rise of the sea: as oceans expand and ice melts, saline water pushes into the delta's rivers and groundwater. The second is human engineering far upstream — dams and barrages in neighbouring countries hold back the dry-season flow that once flushed the delta clean.",
          bn: "বিজ্ঞানীরা এই প্রক্রিয়ার নাম দিয়েছেন লবণাক্ততা অনুপ্রবেশ। এটাকে ঠেলে আনে দুটি শক্তি। প্রথমটি সমুদ্রের ধীর উত্থান: মহাসাগর প্রসারিত হওয়া আর বরফ গলার সঙ্গে সামুদ্রিক লবণাক্ত পানি ডেল্টার নদী ও ভূগর্ভস্থ স্রোতে ঢুকে পড়ে। দ্বিতীয়টি অনেক ঊর্ধ্বপ্রবাহে মানুষের তৈরি প্রকৌশল — প্রতিবেশী দেশের বাঁধ ও ব্যারাজ শুষ্ক মৌসুমের সেই স্রোত আটকে রাখে, যা একসময় গোটা ডেল্টা ধুয়ে-মুছে পরিষ্কার রাখত।",
          hi: "वैज्ञानिक इस प्रक्रिया को लवणता अनुप्रवेश कहते हैं। इसे दो ताक़तें धकेलती हैं। पहली समुद्र का धीमा उत्थान है: महासागरों के फैलने और बर्फ पिघलने से खारा पानी डेल्टा की नदियों और भूजल में घुसने लगता है। दूसरी है ऊपर की ओर मानव-निर्मित इंजीनियरिंग — पड़ोसी देशों के बाँध उस सूखे मौसम के बहाव को रोक लेते हैं जो कभी पूरे डेल्टा को धोकर साफ़ रखता था।",
        },
        {
          en: "The consequences reach far beyond the fields. Rice — the backbone of every meal — withers where salt settles, and many families now farm shrimp instead, a change that brings cash but fewer jobs. Drinking ponds turn brackish, and doctors report rising numbers of pregnant women and children whose health suffers because of the salty water they drink.",
          bn: "এর পরিণতি ক্ষেতের বাইরেও ছড়িয়ে পড়েছে। লবণ জেঁকে বসলে ধান — প্রতিটি খাবারের মেরুদণ্ড — শুকিয়ে যায়, আর অনেক পরিবার এখন বদলে চিংড়ি চাষ করে; বদলটা টাকা আনে, কিন্তু কাজ কমায়। পানির পুকুরগুলো ক্ষারীয় হয়ে যায়, আর চিকিৎসকরা জানান, নোনতা পানি পানের কারণে গর্ভবতী নারী ও শিশুদের স্বাস্থ্য-সমস্যা বাড়ছে।",
          hi: "इसके परिणाम खेतों से कहीं आगे तक फैले हैं। नमक जहाँ बैठ जाता है, धान — हर भोजन की रीढ़ — मुरझा जाता है, और अब कई परिवार बदले में झींगा पालन करते हैं; यह बदलाव पैसा लाता है, पर रोज़गार कम देता है। पीने के तालाब खारे हो जाते हैं, और डॉक्टर बताते हैं कि नमकीन पानी पीने के कारण गर्भवती महिलाओं और बच्चों की सेहत पर असर बढ़ रहा है।",
        },
        {
          en: "Adaptation, however, is already under way. Agricultural scientists have released salt-tolerant rice varieties that survive where older seeds drowned, and NGOs help villagers build rainwater-harvesting tanks so that the monsoon can serve them in winter too.",
          bn: "তবে মানিয়ে নেওয়ার কাজ ইতিমধ্যেই শুরু হয়েছে। কৃষি বিজ্ঞানীরা লবণসহিষ্ণু ধানের জাত এনেছেন, যেখানে পুরোনো বীজ ডুবে যেত সেখানেও সেগুলো টিকে থাকে; আর এনজিওগুলো গ্রামবাসীকে বৃষ্টির পানি সংগ্রহের ট্যাংক বানাতে সাহায্য করছে, যাতে বর্ষার জল শীতেও তাদের কাজে লাগে।",
          hi: "हालाँकि, अनुकूलन का काम पहले ही शुरू हो चुका है। कृषि वैज्ञानिकों ने नमक-सहनशील धान की किस्में विकसित की हैं जो वहाँ भी टिकती हैं जहाँ पुराने बीज डूब जाते थे, और एनजीओ ग्रामीणों को वर्षा-जल संचयन टैंक बनाने में मदद कर रहे हैं ताकि मानसून का पानी सर्दियों में भी काम आए।",
        },
        {
          en: "Yet the deeper question is one of justice. The people of the delta contributed almost nothing to the emissions warming the planet, yet they stand on its front line. Whether the \"silent salt\" stays manageable, researchers say, depends less on the villages than on what the wider world decides about its own carbon.",
          bn: "তবু আসল প্রশ্নটি ন্যায়বিচারের। ডেল্টার মানুষ পৃথিবীকে উষ্ণ করা কার্বন নির্গমনে প্রায় কিছুই যোগ করেনি, অথচ তাঁরাই দাঁড়িয়ে আছেন সবচেয়ে সামনের সারিতে। \"নীরব লবণ\" সহনীয় থাকবে কি না, গবেষকদের ভাষায় তা গ্রামের মানুষের চেয়ে বেশি নির্ভর করে বাকি পৃথিবী নিজের কার্বন নিয়ে কী সিদ্ধান্ত নেয়, তার ওপর।",
          hi: "फिर भी गहरा सवाल न्याय का है। डेल्टा के लोगों ने धरती को गर्म करने वाले उत्सर्जन में कुछ भी नहीं जोड़ा, फिर भी वे इसकी सबसे आगे की पंक्ति में खड़े हैं। \"मौन नमक\" नियंत्रण में रहेगा या नहीं, शोधकर्ताओं के अनुसार यह गाँवों से कम और बाक़ी दुनिया अपने कार्बन पर क्या फ़ैसला लेती है, उससे ज़्यादा तय होगा।",
        },
        {
          en: "The delta has survived rivers changing course for centuries. Its people are proving, harvest by harvest, that survival is possible — but patience, like the sea, has limits.",
          bn: "শতাব্দীর পর শতাব্দী ধরে নদীর গতিপথ বদলেও এই ডেল্টা টিকে আছে। ফসলের পর ফসল মানুষ প্রমাণ করছেন, টিকে থাকা সম্ভব — কিন্তু ধৈর্যেরও, সমুদ্রের মতোই, একটা সীমা আছে।",
          hi: "सदियों से नदियों का रास्ता बदलते रहने पर भी यह डेल्टा टिका हुआ है। फ़सल-दर-फ़सल उसके लोग साबित कर रहे हैं कि टिकना संभव है — पर धैर्य की भी, समुद्र की तरह, एक सीमा होती है।",
        },
      ],
      vocabulary: [
        {
          word: "salinity",
          meaning: { bn: "লবণাক্ততা — পানি বা মাটিতে লবণের পরিমাণ", en: "the amount of salt in water or soil", hi: "लवणता — पानी या मिट्टी में नमक की मात्रा" },
          example: "High salinity makes it hard to grow rice.",
        },
        {
          word: "intrusion",
          meaning: { bn: "অনুপ্রবেশ — যেখানে থাকার কথা নয় সেখানে ঢুকে পড়া", en: "the act of entering a place where it is not welcome", hi: "अनुप्रवेश — जहाँ नहीं होना चाहिए वहाँ घुस जाना" },
          example: "The intrusion of seawater damaged the wells.",
        },
        {
          word: "delta",
          meaning: { bn: "ডেল্টা — সাগরে পড়ার আগে নদীর শাখা-প্রশাখায় বিভক্ত ভূমি", en: "low land where a river splits before reaching the sea", hi: "डेल्टा — समुद्र से मिलने से पहले नदी के बँटने वाली निचली भूमि" },
          example: "The Ganges delta is extremely fertile.",
        },
        {
          word: "brackish",
          meaning: { bn: "ক্ষারীয় — নোনতা ও মিষ্টি পানির মেশানো স্বাদ", en: "slightly salty", hi: "खारा — थोड़ा नमकीन पानी" },
          example: "The pond water turned brackish after the storm.",
        },
        {
          word: "tolerant",
          meaning: { bn: "সহিষ্ণু — কঠিন অবস্থাতেও টিকে থাকতে পারে এমন", en: "able to survive difficult conditions", hi: "सहनशील — कठिन परिस्थिति में भी टिक सकने वाला" },
          example: "Salt-tolerant rice gives hope to coastal farmers.",
        },
        {
          word: "emissions",
          meaning: { bn: "নির্গমন — বাতাসে ছড়ানো গ্যাস", en: "gases released into the air", hi: "उत्सर्जन — हवा में छोड़ी गई गैसें" },
          example: "Carbon emissions warm the whole planet.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "লেখায় বলা হয়েছে, কৃষকরা প্রথম কী দেখে বুঝলেন জিনিসটা বদলে গেছে?",
            en: "According to the article, what first told farmers that things had changed?",
            hi: "लेख के अनुसार, किसानों को सबसे पहले किस बात से बदलाव का पता चला?",
          },
          options: [
            { bn: "তাদের ধান রাতারাতি হলুদ হয়ে গেল", en: "their rice turned yellow overnight", hi: "उनका धान रातोंरात पीला हो गया" },
            { bn: "প্রতি শীতে কুয়ার পানির স্বাদ নোনতা হয়ে যাচ্ছিল", en: "their well water turned salty every winter", hi: "हर सर्दियों में कुएँ का पानी नमकीन हो गया" },
            { bn: "নদী গতিপথ বদলে ফেলল", en: "the river changed its course", hi: "नदी ने रास्ता बदल दिया" },
            { bn: "পুকুরের চিংড়ি মরে গেল", en: "the shrimp in their ponds died", hi: "तालाबों के झींगे मर गए" },
          ],
          answer: 1,
          explain: {
            bn: "প্রথম অনুচ্ছেদ: 'wells turned salty every winter' — পানির স্বাদই প্রথম সংকেত ছিল।",
            en: "Paragraph 1: the wells 'turned salty every winter' — the taste of the water was the first signal.",
            hi: "पहला अनुच्छेद: कुएँ 'हर सर्दियों में नमकीन हो गए' — पानी का स्वाद ही पहला संकेत था।",
          },
        },
        {
          question: {
            bn: "লবণাক্ততা অনুপ্রবেশের ঊর্ধ্বপ্রবাহের মানবসৃষ্ট কারণ হিসেবে কোনটিকে দায়ী করা হয়েছে?",
            en: "Which upstream human cause of salinity intrusion does the article name?",
            hi: "लवणता अनुप्रवेश के ऊपरी मानव-कारण के रूप में लेख क्या बताता है?",
          },
          options: [
            { bn: "মাছ ধরার নৌকা", en: "fishing boats", hi: "मछली पकड़ने की नावें" },
            { bn: "শুষ্ক মৌসুমের স্রোত আটকে রাখা বাঁধ ও ব্যারাজ", en: "dams and barrages holding back the dry-season flow", hi: "सूखे मौसम के बहाव रोकने वाले बाँध" },
            { bn: "চিংড়ি চাষের খামার", en: "shrimp farms", hi: "झींगा फ़ार्म" },
            { bn: "বৃষ্টির পানির ট্যাংক", en: "rainwater tanks", hi: "वर्षा-जल टैंक" },
          ],
          answer: 1,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদ: 'dams and barrages in neighbouring countries hold back the dry-season flow'।",
            en: "Paragraph 2: 'dams and barrages in neighbouring countries hold back the dry-season flow.'",
            hi: "दूसरा अनुच्छेद: 'पड़ोसी देशों के बाँध सूखे मौसम का बहाव रोक लेते हैं।'",
          },
        },
        {
          question: {
            bn: "চিংড়ি চাষে বদলে যাওয়ার ফলে কী লাভ-ক্ষতি হয় বলে লেখায় বলা হয়েছে?",
            en: "What trade-off does the shift to shrimp farming bring, according to the article?",
            hi: "लेख के अनुसार, झींगा पालन की ओर बदलाव क्या लाभ-हानि लाता है?",
          },
          options: [
            { bn: "বেশি ধান কিন্তু কম লবণ", en: "more rice but less salt", hi: "अधिक धान, कम नमक" },
            { bn: "নতুন চাকরি কিন্তু কম টাকা", en: "new jobs but less cash", hi: "नए रोज़गार, कम पैसा" },
            { bn: "টাকা আসে কিন্তু কাজ কমে যায়", en: "cash arrives but jobs shrink", hi: "पैसा आता है पर रोज़गार घटता है" },
            { bn: "পুকুর ভরে যায় কিন্তু নদী শুকিয়ে যায়", en: "ponds fill but rivers dry", hi: "तालाब भर जाते हैं पर नदियाँ सूखती हैं" },
          ],
          answer: 2,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদ: 'brings cash but fewer jobs' — টাকা আসে, কাজ কমে।",
            en: "Paragraph 3: it 'brings cash but fewer jobs.'",
            hi: "तीसरा अनुच्छेद: 'पैसा लाता है, पर रोज़गार कम देता है।'",
          },
        },
        {
          question: {
            bn: "লবণসহিষ্ণু ধানের জাতগুলোর বিশেষত্ব কী?",
            en: "What is special about the salt-tolerant rice varieties?",
            hi: "नमक-सहनशील धान की किस्मों की ख़ासियत क्या है?",
          },
          options: [
            { bn: "সেগুলো এমন জায়গাতেও টিকে থাকে যেখানে পুরোনো বীজ ডুবে যেত", en: "they survive where older seeds drowned", hi: "वे वहाँ भी टिकती हैं जहाँ पुराने बीज डूब जाते थे" },
            { bn: "সেগুলো লবণ মুছে ফেলে", en: "they remove the salt", hi: "वे नमक हटा देती हैं" },
            { bn: "সেগুলো বর্ষা ছাড়া পানি দরকার করে না", en: "they need no water outside the monsoon", hi: "मानसून के अलावा उन्हें पानी नहीं चाहिए" },
            { bn: "সেগুলো সমুদ্রকে পিছিয়ে দেয়", en: "they push the sea back", hi: "वे समुद्र को पीछे धकेल देती हैं" },
          ],
          answer: 0,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদ: 'varieties that survive where older seeds drowned'।",
            en: "Paragraph 4: 'varieties that survive where older seeds drowned.'",
            hi: "चौथा अनुच्छेद: 'किस्में जो वहाँ भी टिकती हैं जहाँ पुराने बीज डूब जाते थे।'",
          },
        },
        {
          question: {
            bn: "ন্যায়বিচার নিয়ে লেখার মূল বক্তব্যটি কোনটি?",
            en: "What is the article's main point about justice?",
            hi: "न्याय के बारे में लेख का मुख्य बिंदु क्या है?",
          },
          options: [
            { bn: "ডেল্টাবাসী নির্গমনে প্রায় অবদান রাখেনি, তবু সবচেয়ে সামনের সারিতে দাঁড়িয়ে", en: "delta people contributed almost nothing to emissions yet stand on the front line", hi: "डेल्टा के लोगों ने उत्सर्जन में कुछ नहीं जोड़ा, फिर भी सबसे आगे खड़े हैं" },
            { bn: "গ্রামবাসী নিজেরাই সবচেয়ে বেশি দূষণ ঘটায়", en: "villagers themselves pollute the most", hi: "ग्रामीण सबसे ज़्यादा प्रदूषण करते हैं" },
            { bn: "শোধকারীরা সমস্যাটি অতিরঞ্জিত করছে", en: "researchers are exaggerating the problem", hi: "शोधकर्ता समस्या को बढ़ा-चढ़ाकर बता रहे हैं" },
            { bn: "চিংড়ি চাষ সব সমস্যার সমাধান", en: "shrimp farming solves everything", hi: "झींगा पालन सब समस्याएँ हल कर देता है" },
          ],
          answer: 0,
          explain: {
            bn: "পঞ্চম অনুচ্ছেদ: 'contributed almost nothing... yet they stand on its front line'।",
            en: "Paragraph 5: 'contributed almost nothing... yet they stand on its front line.'",
            hi: "पाँचवाँ अनुच्छेद: 'कुछ भी नहीं जोड़ा... फिर भी सबसे आगे खड़े हैं।'",
          },
        },
      ],
    },
  },
  {
    slug: "read-a1-streetlight",
    level: "advanced",
    category: "inspire",
    minutes: 6,
    unit: 0,
    data: {
      title: { bn: "রাস্তাঘাট থেকে সার্ভার রুম", en: "From the Streets to the Server Room", hi: "गलियों से सर्वर रूम तक" },
      summary: {
        bn: "স্টেশনে ঘুমানো এক রাস্তার সন্তান কীভাবে সফটওয়্যার ইঞ্জিনিয়ার হলেন — রবিন হালদারের গল্প।",
        en: "The story of Robin Haldar, a former street child who slept on a railway platform and became a software engineer.",
        hi: "रॉबिन हालदार की कहानी — रेलवे प्लेटफ़ॉर्म पर सोने वाला एक बच्चा जो सॉफ़्टवेयर इंजीनियर बना।",
      },
      genre: "news",
      paragraphs: [
        {
          en: "When Robin Haldar speaks to students now, he begins with a number: eleven. That was his age when he first slept alone on a Dhaka railway platform, clutching a plastic bag that held everything he owned — two shirts, a comb, and a school book he could not yet read.",
          bn: "রবিন হালদার এখন ছাত্রছাত্রীদের উদ্দেশে কথা বললে শুরু করেন একটা সংখ্যা দিয়ে: এগারো। এই বয়সেই প্রথম তিনি ঢাকার রেলস্টেশনের প্ল্যাটফর্মে একা ঘুমালেন, বুকে চেপে ধরে একটা প্লাস্টিকের ব্যাগ — যাতে ছিল তার সবকিছু: দুটো শার্ট, একটা চিরুনি, আর একটা স্কুলের বই, যেটা তিনি তখনো পড়তে পারতেন না।",
          hi: "रॉबिन हालदार आज जब छात्रों से बात करते हैं, तो शुरुआत एक संख्या से करते हैं: ग्यारह। इतनी उम्र में वे पहली बार ढाका के रेलवे प्लेटफ़ॉर्म पर अकेले सोए, एक प्लास्टिक की थैली से चिपके हुए — जिसमें उनका सब कुछ था: दो कमीज़ें, एक कंघी, और स्कूल की वह किताब जिसे वे तब पढ़ नहीं सकते थे।",
        },
        {
          en: "For three years the streets taught him skills no classroom offered — reading crowds, guarding a corner, negotiating for leftover fruit. What the streets could not teach him was English. \"I understood that people who spoke English got the better jobs, even the better tips,\" he told this reporter, laughing at the memory.",
          bn: "তিন বছর রাস্তা তাকে এমন সব শিক্ষা দিয়েছে, যা কোনো ক্লাসরুম দিতে পারেনি — ভিড় পড়া, একটা কোণা পাহারা দেওয়া, ফেলে রাখা ফল নিয়ে দরদাম করা। কিন্তু রাস্তা শেখাতে পারেনি ইংরেজি। \"বুঝেছিলাম, যারা ইংরেজি বলে, তারাই ভালো কাজ পায়, এমনকি ভালো বকশিশও,\" সেই স্মৃতি মনে করে হেসেই বললেন তিনি এই প্রতিবেদককে।",
          hi: "तीन साल तक गलियों ने उन्हें वह सीख दी जो कोई कक्षा नहीं दे सकती थी — भीड़ पढ़ना, एक कोना संभालना, बचे-खुचे फल पर मोल-भाव करना। पर गलियाँ उसे अंग्रेज़ी नहीं सिखा सकीं। \"मैंने समझ गया था, जो अंग्रेज़ी बोलते थे, उन्हें बेहतर नौकरी मिलती थी, यहाँ तक कि बेहतर बख़्शीश भी,\" वह याद करके हँसते हुए इस रिपोर्टर से कहा।",
        },
        {
          en: "The turn came through a night shelter run by a small charity. A volunteer, Shirin Akter, noticed that the boy who swept the floor fastest was also the one teaching himself the alphabet by torchlight. \"He did not need pity; he needed books,\" she recalls. The shelter enrolled him in an open school; he passed his exams two years ahead of schedule.",
          bn: "মোড় ঘুরল এক ছোট দাতব্য সংস্থার চালানো রাত্রির আশ্রয়কেন্দ্রে। স্বেচ্ছাসেবক শিরিন আক্তার খেয়াল করলেন, যে ছেলেটা সবচেয়ে দ্রুত মেঝে মুছে ফেলে, সে-ই টর্চের আলোয় নিজে নিজে বর্ণমালা শিখছে। \"ওর দরকার ছিল সহানুভূতি নয়, বই,\" স্মৃতিচারণ করেন তিনি। আশ্রয়কেন্দ্র তাকে ভর্তি করাল এক ওপেন স্কুলে; নির্দিষ্ট সময়ের দুই বছর আগেই পরীক্ষা পাস করে ফেলল সে।",
          hi: "मोड़ एक छोटी धर्मार्थ संस्था के चलाए रात्रि आश्रय से आया। स्वयंसेविक शिरीन आक्तार ने ग़ौर किया कि जो लड़का सबसे तेज़ फ़र्श साफ़ करता था, वही टॉर्च की रोशनी में अपने-आप वर्णमाला सीख रहा था। \"उसे तरस नहीं, किताबें चाहिए थीं,\" वे याद करती हैं। आश्रय ने उसे एक ओपन स्कूल में नामांकित कराया; वह तय समय से दो साल पहले परीक्षा पास कर गया।",
        },
        {
          en: "A scholarship covered his diploma in computer engineering. Former donors became mentors; one lent him a battered laptop that still sits on his desk \"as a reminder,\" he says. In 2023 he joined a Dhaka software firm as a junior support engineer — the first person in his family with a salary, a contract, and a desk with a nameplate.",
          bn: "কম্পিউটার ইঞ্জিনিয়ারিং-এ ডিপ্লোমার খরচ মেটাল এক বৃত্তি। পুরোনো দাতারাই হয়ে উঠলেন মেন্টর; একজন ধার দিলেন ছেঁড়াখানা এক ল্যাপটপ, যেটা আজও তাঁর টেবিলে রাখা — \"মনে রাখার জন্য,\" বলেন তিনি। ২০২৩ সালে ঢাকার এক সফটওয়্যার ফার্মে জুনিয়র সাপোর্ট ইঞ্জিনিয়ার হিসেবে যোগ দেন তিনি — পরিবারের প্রথম মানুষ, যাঁর বেতন আছে, চুক্তি আছে, আর নাম-ফলক লাগানো একটা টেবিল আছে।",
          hi: "कंप्यूटर इंजीनियरिंग में डिप्लोमा का खर्च एक छात्रवृत्ति ने उठाया। पुराने दानदाता ही गुरु बन गए; एक ने उन्हें अपना जर्जर लैपटॉप उधार दिया, जो आज भी उनकी मेज़ पर रखा है — \"याद रखने के लिए,\" वे कहते हैं। 2023 में वे ढाका की एक सॉफ़्टवेयर कंपनी में जूनियर सपोर्ट इंजीनियर के रूप में शामिल हुए — परिवार में पहले इंसान, जिनकी सैलरी है, अनुबंध है, और नाम की प्लेट लगी एक मेज़ है।",
        },
        {
          en: "His team lead, Farhan Chowdhury, admits that colleagues initially worried the junior engineer would struggle with client calls in English. \"Within months he was drafting our clearest incident reports. He treats English the way he treats a broken server — something you patiently take apart and fix,\" he said.",
          bn: "তাঁর টিম লিড ফারহান চৌধুরী স্বীকার করেন, শুরুতে সহকর্মীরা ভাবতেন, ইংরেজিতে ক্লায়েন্ট কলে এই জুনিয়র ইঞ্জিনিয়ার হিমশিম খাবেন। \"কয়েক মাসের মধ্যেই তিনি আমাদের সবচেয়ে পরিষ্কার ইনসিডেন্ট রিপোর্ট লিখতে শুরু করলেন। তিনি ইংরেজিকে সামলান ভাঙা সার্ভারের মতো — ধৈর্য ধরে খুলে দেখেন, ঠিক করে ফেলেন,\" বললেন তিনি।",
          hi: "उनकी टीम लीड फ़रहान चौधरी मानते हैं कि शुरू में सहकर्मी चिंतित थे कि अंग्रेज़ी में क्लाइंट कॉल पर यह जूनियर इंजीनियर लड़खड़ाएगा। \"कुछ ही महीनों में वे हमारी सबसे साफ़ इंसिडेंट रिपोर्ट लिखने लगे। वे अंग्रेज़ी से वैसा ही व्यवहार करते हैं जैसा बंद पड़े सर्वर से — धैर्य से खोलकर देखते हैं और ठीक कर देते हैं,\" उन्होंने कहा।",
        },
        {
          en: "Robin now funds a shelf of books at the shelter that once funded him, and he ends every talk with the line his teammates know best: \"The street was my first school. It taught me never to waste a single lesson.\"",
          bn: "রবিন এখন সেই আশ্রয়কেন্দ্রেই বইয়ের এক তাক চালু রাখেন, যে আশ্রয়কেন্দ্র একসময় তাঁকে টেনে তুলেছিল; আর প্রতিটা আলাপ শেষ করেন সেই লাইন দিয়ে, যেটা সহকর্মীদের সবচেয়ে চেনা: \"রাস্তাই ছিল আমার প্রথম স্কুল। সে শিখিয়েছে, একটা পাঠও নষ্ট করতে নেই।\"",
          hi: "रॉबिन अब उसी आश्रय में किताबों की एक शैल्फ़ चलाते हैं जिसने कभी उन्हें सहारा दिया था, और हर भाषण उस पंक्ति पर ख़त्म करते हैं जो उनकी टीम को सबसे अच्छी तरह याद है: \"गली मेरा पहला स्कूल थी। उसने सिखाया कि एक पाठ भी बर्बाद मत करो।\"",
        },
      ],
      vocabulary: [
        {
          word: "clutching",
          meaning: { bn: "বুকে চেপে ধরে / শক্ত করে আঁকড়ে", en: "holding something tightly", hi: "कसकर पकड़े हुए" },
          example: "She walked home clutching her certificate.",
        },
        {
          word: "negotiating",
          meaning: { bn: "দরদাম / আলোচনা করে সমঝোতা করা", en: "discussing to reach an agreement", hi: "मोल-भाव करना / समझौते के लिए बातचीत" },
          example: "He is good at negotiating prices in the market.",
        },
        {
          word: "charity",
          meaning: { bn: "দাতব্য সংস্থা — অসহায়দের সাহায্যকারী প্রতিষ্ঠান", en: "an organisation that helps people in need", hi: "धर्मार्थ संस्था — ज़रूरतमंदों की मदद करने वाला संगठन" },
          example: "The charity runs five night shelters in the city.",
        },
        {
          word: "enrolled",
          meaning: { bn: "ভর্তি / নাম নথিভুক্ত করা", en: "officially registered in a school or course", hi: "नामांकित — स्कूल या कोर्स में दाख़िल किया गया" },
          example: "She enrolled her son in the village school.",
        },
        {
          word: "mentor",
          meaning: { bn: "মেন্টর — পথ দেখানো অভিজ্ঞ পরামর্শদাতা", en: "an experienced person who guides you", hi: "गुरु / मार्गदर्शक — अनुभवी सलाहकार" },
          example: "A good mentor changes a career.",
        },
        {
          word: "battered",
          meaning: { bn: "ছেঁড়াখানা / পুরোনো ও ক্ষতিগ্রস্ত", en: "old and damaged", hi: "जर्जर — पुरानी और टूटी-फूटी" },
          example: "He still writes code on his battered old laptop.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "প্ল্যাটফর্মে রবিনের প্লাস্টিকের ব্যাগে কী কী ছিল?",
            en: "What did Robin's plastic bag hold on the platform?",
            hi: "प्लेटफ़ॉर्म पर रॉबिन की प्लास्टिक थैली में क्या था?",
          },
          options: [
            { bn: "টাকা আর একটা টিকিট", en: "money and a ticket", hi: "पैसे और एक टिकट" },
            { bn: "দুটো শার্ট, একটা চিরুনি আর একটা পড়ার বই", en: "two shirts, a comb and a school book", hi: "दो कमीज़ें, एक कंघी और स्कूल की किताब" },
            { bn: "তিন দিনের খাবার", en: "food for three days", hi: "तीन दिन का खाना" },
            { bn: "ওর পাওয়া একটা ল্যাপটপ", en: "a laptop he had found", hi: "उसे मिला एक लैपटॉप" },
          ],
          answer: 1,
          explain: {
            bn: "প্রথম অনুচ্ছেদ: 'two shirts, a comb, and a school book he could not yet read'।",
            en: "Paragraph 1: 'two shirts, a comb, and a school book he could not yet read.'",
            hi: "पहला अनुच्छेद: 'दो कमीज़ें, एक कंघी, और जिसे वे पढ़ नहीं सकते थे ऐसी किताब।'",
          },
        },
        {
          question: {
            bn: "রবিন ইংরেজি শেখার সিদ্ধান্ত নিয়েছিল কেন?",
            en: "Why did Robin decide to learn English?",
            hi: "रॉबिन ने अंग्रेज़ी सीखने का फ़ैसला क्यों किया?",
          },
          options: [
            { bn: "ইংরেজি বলা মানুষরা ভালো কাজ ও ভালো বকশিশ পেত", en: "people who spoke English got better jobs and better tips", hi: "अंग्रेज़ी बोलने वालों को बेहतर नौकरी और बख़्शीश मिलती थी" },
            { bn: "স্কুলে অনিবার্য ছিল", en: "it was compulsory at school", hi: "स्कूल में यह अनिवार्य था" },
            { bn: "সে বিদেশ যেতে চেয়েছিল", en: "he wanted to go abroad", hi: "वे विदेश जाना चाहते थे" },
            { bn: "মেঝে মোছার চেয়ে সহজ ছিল", en: "it was easier than sweeping floors", hi: "फ़र्श साफ़ करने से आसान थी" },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে রবিনের উদ্ধৃতি: 'people who spoke English got the better jobs, even the better tips'।",
            en: "Paragraph 2 quotes Robin: 'people who spoke English got the better jobs, even the better tips.'",
            hi: "दूसरे अनुच्छेद में रॉबिन का कथन: 'अंग्रेज़ी बोलने वालों को बेहतर नौकरी, यहाँ तक कि बेहतर बख़्शीश भी मिलती थी।'",
          },
        },
        {
          question: {
            bn: "শিরিন আক্তার রবিন সম্পর্কে কী খেয়াল করেছিলেন?",
            en: "What did Shirin Akter notice about Robin?",
            hi: "शिरीन आक्तार ने रॉबिन के बारे में क्या देखा?",
          },
          options: [
            { bn: "সে সবচেয়ে দ্রুত মেঝে মুছত, আর টর্চের আলোয় নিজে বর্ণমালা শিখছিল", en: "he swept fastest and was teaching himself the alphabet by torchlight", hi: "वह सबसे तेज़ झाड़ू लगाता था और टॉर्च की रोशनी में ख़ुद वर्णमाला सीख रहा था" },
            { bn: "সে অন্য বাচ্চাদের খাবার চুরি করত", en: "he stole food from the other children", hi: "वह दूसरे बच्चों का खाना चुराता था" },
            { bn: "সে স্কুলে যেতে অস্বীকার করেছিল", en: "he refused to go to school", hi: "वह स्कूल जाने से मना कर देता था" },
            { bn: "সে দারুণ গান গাইত", en: "he sang beautifully", hi: "वह ख़ूबसूरत गाना गाता था" },
          ],
          answer: 0,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদ: 'swept the floor fastest... teaching himself the alphabet by torchlight'।",
            en: "Paragraph 3: 'swept the floor fastest... teaching himself the alphabet by torchlight.'",
            hi: "तीसरा अनुच्छेद: 'सबसे तेज़ झाड़ू लगाता था... टॉर्च की रोशनी में ख़ुद वर्णमाला सीख रहा था।'",
          },
        },
        {
          question: {
            bn: "রবিনের টেবিলে রাখা ছেঁড়াখানা ল্যাপটপটা তাঁকে কী মনে করিয়ে দেয়?",
            en: "What does the battered laptop on Robin's desk serve as?",
            hi: "रॉबिन की मेज़ पर रखी जर्जर लैपटॉप क्या याद दिलाती है?",
          },
          options: [
            { bn: "একটা অতিরিক্ত মেশিন", en: "a spare machine", hi: "एक अतिरिक्त मशीन" },
            { bn: "একটা ভাঙা সার্ভার", en: "a broken server", hi: "एक टूटा सर्वर" },
            { bn: "একটা উপহার — সে এটা পুরোনো দাতাকে ফেরত দেবে", en: "a gift he must return to the donor", hi: "एक उपहार जो वे दानदाता को लौटाएँगे" },
            { bn: "একটা স্মারক — তাঁর আসা-যাওয়ার পথের", en: "a reminder of where he came from", hi: "उनके सफ़र की एक याद" },
          ],
          answer: 3,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদ: ল্যাপটপটা রাখা আছে '\"as a reminder\"' — যাত্রার স্মারক হিসেবে।",
            en: "Paragraph 4: the laptop sits on his desk '\"as a reminder\"' — of his journey.",
            hi: "चौथा अनुच्छेद: लैपटॉप रखी है '\"याद रखने के लिए\"' — उनके सफ़र की याद के रूप में।",
          },
        },
        {
          question: {
            bn: "ফারহান চৌধুরী রবিনের ইংরেজির সঙ্গে কীসের তুলনা করেছেন?",
            en: "What does Farhan Chowdhury compare Robin's approach to English with?",
            hi: "फ़रहान चौधरी अंग्रेज़ी के साथ रॉबिन के व्यवहार की तुलना किससे करते हैं?",
          },
          options: [
            { bn: "একটা ভাঙা সার্ভার — ধৈর্য ধরে খুলে ঠিক করা", en: "a broken server you patiently take apart and fix", hi: "बंद पड़े सर्वर — धैर्य से खोलकर ठीक करना" },
            { bn: "একটা দ্রুতগামী ট্রেন", en: "a fast train", hi: "एक तेज़ ट्रेन" },
            { bn: "রাস্তার ভিড়", en: "a street crowd", hi: "गली की भीड़" },
            { bn: "একটা স্কুলব্যাগ", en: "a school bag", hi: "एक स्कूल बैग" },
          ],
          answer: 0,
          explain: {
            bn: "পঞ্চম অনুচ্ছেদ: 'He treats English the way he treats a broken server — something you patiently take apart and fix'।",
            en: "Paragraph 5: 'He treats English the way he treats a broken server — something you patiently take apart and fix.'",
            hi: "पाँचवाँ अनुच्छेद: 'वे अंग्रेज़ी से वैसा ही व्यवहार करते हैं जैसा बंद सर्वर से — धैर्य से खोलकर ठीक करते हैं।'",
          },
        },
      ],
    },
  },
];

export default SEED_READING_V1_ADVANCED;
