// ─── Owner-authored Library: Listening seed data ───
// 8 stories (2 beginner, 3 intermediate, 3 advanced) — array position = sort order 0-7.
// Story paragraphs are ALWAYS English (that is the listening skill); all learner-facing
// meta text (title / summary / vocabulary meanings / quiz) is TriText (bn primary).
import type { LibraryListeningEntry } from "../../src/lib/library-types";

export const SEED_LISTENING: LibraryListeningEntry[] = [
  /* ── 0 · beginner · daily ─────────────────────────────────────────── */
  {
    id: "",
    slug: "village-market-day",
    level: "beginner",
    category: "daily",
    minutes: 2,
    data: {
      title: {
        bn: "গ্রামের হাটের দিন",
        en: "Village Market Day",
        hi: "गाँव की मंडी का दिन",
      },
      summary: {
        bn: "রফিক প্রতি শুক্রবার তার বাবার সাথে হাটে যায়। সে টাটকা সবজি, মাছ আর মিষ্টি দেখে। হাট বড় রঙিন ও আনন্দে ভরা, তাই এটি তার প্রিয় দিন।",
        en: "Rafiq goes to the village market with his father every Friday. He sees fresh vegetables, fish, and sweets. The market is colourful and full of joy, so it is his favourite day.",
        hi: "रफ़ीक़ हर शुक्रवार अपने पिता के साथ गाँव की मंडी जाता है। वह ताज़ी सब्ज़ियाँ, मछली और मिठाइयाँ देखता है। मंडी रंग-बिरंगी और खुशियों से भरी होती है, इसलिए यह उसका पसंदीदा दिन है।",
      },
      paragraphs: [
        "Rafiq lives in a small village. Every Friday, he goes to the market with his father. They walk along the village road. The road is busy with people.",
        "At the market, there are many shops. Farmers sell fresh vegetables and rice. Rafiq sees red tomatoes and green leaves. He smells hot pithas from a small shop.",
        "Father buys fish for the family. Rafiq carries the bag. They meet the local doctor near the sweet shop. He smiles and says hello.",
        "Before going home, father buys two roshogollas. Rafiq eats one and keeps one for his little sister. He is very happy. Village market day is his favourite day.",
      ],
      vocabulary: [
        {
          word: "market",
          meaning: {
            bn: "বাজার বা হাট — যেখানে মানুষ জিনিস কেনে ও বিক্রি করে",
            en: "a place where people buy and sell things",
            hi: "बाज़ार — जहाँ लोग चीज़ें खरीदते और बेचते हैं",
          },
          example: "Mother buys vegetables from the market every Friday.",
        },
        {
          word: "farmer",
          meaning: {
            bn: "কৃষক — যিনি জমিতে ফসল ফলান",
            en: "a person who grows crops on land",
            hi: "किसान — जो खेत में फ़सल उगाता है",
          },
          example: "The farmer sells fresh rice in the market.",
        },
        {
          word: "fresh",
          meaning: {
            bn: "টাটকা — নতুন, একদম সদ্য পাওয়া",
            en: "newly picked or made, not old",
            hi: "ताज़ा — अभी का, पुराना नहीं",
          },
          example: "These tomatoes are fresh from the garden.",
        },
        {
          word: "favourite",
          meaning: {
            bn: "প্রিয় — যা সবচেয়ে বেশি ভালো লাগে",
            en: "the one you like the most",
            hi: "पसंदीदा — जो सबसे ज़्यादा पसंद है",
          },
          example: "Mango is my favourite fruit.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "রফিকের সাথে হাটে কে যায়?",
            en: "Who goes to the market with Rafiq?",
            hi: "रफ़ीक़ के साथ मंडी कौन जाता है?",
          },
          options: [
            { bn: "তার বোন", en: "His sister", hi: "उसकी बहन" },
            { bn: "তার বাবা", en: "His father", hi: "उसके पिता" },
            { bn: "তার শিক্ষক", en: "His teacher", hi: "उसके शिक्षक" },
            { bn: "তার বন্ধু", en: "His friend", hi: "उसका दोस्त" },
          ],
          answer: 1,
          explain: {
            bn: "গল্পে বলা হয়েছে, রফিক প্রতি শুক্রবার তার বাবার সাথে হাটে যায়।",
            en: "The story says Rafiq goes to the market with his father every Friday.",
            hi: "कहानी में कहा गया है कि रफ़ीक़ हर शुक्रवार अपने पिता के साथ मंडी जाता है।",
          },
        },
        {
          question: {
            bn: "বাবা পরিবারের জন্য কী কেনেন?",
            en: "What does father buy for the family?",
            hi: "पिता परिवार के लिए क्या खरीदते हैं?",
          },
          options: [
            { bn: "বই", en: "Books", hi: "किताबें" },
            { bn: "জুতো", en: "Shoes", hi: "जूते" },
            { bn: "মাছ", en: "Fish", hi: "मछली" },
            { bn: "দুধ", en: "Milk", hi: "दूध" },
          ],
          answer: 2,
          explain: {
            bn: "বাবা পরিবারের জন্য মাছ কেনেন, আর রফিক ব্যাগটি বহন করে।",
            en: "Father buys fish for the family, and Rafiq carries the bag.",
            hi: "पिता परिवार के लिए मछली खरीदते हैं और रफ़ीक़ थैला उठाता है।",
          },
        },
        {
          question: {
            bn: "রফিক তার ছোট বোনের জন্য কী রেখে দেয়?",
            en: "What does Rafiq keep for his little sister?",
            hi: "रफ़ीक़ अपनी छोटी बहन के लिए क्या रखता है?",
          },
          options: [
            { bn: "একটি কলা", en: "A banana", hi: "एक केला" },
            { bn: "একটি টমেটো", en: "A tomato", hi: "एक टमाटर" },
            { bn: "একটি পিঠা", en: "A pitha", hi: "एक पिठा" },
            { bn: "একটি রসগোল্লা", en: "A roshogolla", hi: "एक रसगुल्ला" },
          ],
          answer: 3,
          explain: {
            bn: "রফিক একটি রসগোল্লা খায় আর ছোট বোনের জন্য আরেকটি রেখে দেয়।",
            en: "Rafiq eats one roshogolla and keeps one for his little sister.",
            hi: "रफ़ीक़ एक रसगुल्ला खाता है और एक अपनी छोटी बहन के लिए रख देता है।",
          },
        },
      ],
    },
  },

  /* ── 1 · beginner · travel ────────────────────────────────────────── */
  {
    id: "",
    slug: "rinas-first-train-ride",
    level: "beginner",
    category: "travel",
    minutes: 2,
    data: {
      title: {
        bn: "রিনার প্রথম ট্রেন ভ্রমণ",
        en: "Rina's First Train Ride",
        hi: "रीना की पहली ट्रेन यात्रा",
      },
      summary: {
        bn: "রিনা প্রথমবার ট্রেনে করে চাচার বাড়ি যায়। ট্রেন দৌড়ায়, জানালায় সবুজ ক্ষেত আর নদী ভেসে যায়। সে খুবই আনন্দিত।",
        en: "Rina takes a train to her uncle's house for the first time. The train runs fast, and green fields pass by the window. She is very excited.",
        hi: "रीना पहली बार ट्रेन से अपने चाचा के घर जाती है। ट्रेन तेज़ चलती है और खिड़की से हरे खेत दिखते हैं। वह बहुत उत्साहित है।",
      },
      paragraphs: [
        "Today is a big day for Rina. She takes a train for the first time. Her mother holds her hand. They wait on the platform at Kamalapur station.",
        "The train comes with a loud horn. Rina gets in and finds a seat near the window. The train starts slowly. Then it runs fast.",
        "Rina sees green fields, small houses, and a wide river. A boy sells oranges in the train. Mother buys some for Rina. They are sweet and juicy.",
        "After two hours, the train stops. Rina sees her uncle near the gate. She waves and smiles. She says, 'I love train rides!'",
      ],
      vocabulary: [
        {
          word: "platform",
          meaning: {
            bn: "প্ল্যাটফর্ম — স্টেশনে ট্রেনের পাশের লম্বা ধাপ, যেখানে যাত্রীরা অপেক্ষা করে",
            en: "the long floor in a station where people wait for the train",
            hi: "प्लेटफ़ॉर्म — स्टेशन में वह लंबा फ़र्श जहाँ लोग ट्रेन का इंतज़ार करते हैं",
          },
          example: "We waited on platform two for the Dhaka train.",
        },
        {
          word: "horn",
          meaning: {
            bn: "হর্ন — ট্রেন বা গাড়ির শব্দ করার যন্ত্র",
            en: "the loud sound maker on a train or car",
            hi: "हॉर्न — ट्रेन या गाड़ी की तेज़ आवाज़ वाला यंत्र",
          },
          example: "The train horn was loud and long.",
        },
        {
          word: "wave",
          meaning: {
            bn: "হাত নাড়ানো — বিদায় বা সালাম দিতে হাত তুলে নাড়া",
            en: "to move your hand to say hello or bye",
            hi: "हाथ हिलाना — नमस्ते या अलविदा कहने के लिए हाथ हिलाना",
          },
          example: "I wave at my friend when I see her.",
        },
        {
          word: "juicy",
          meaning: {
            bn: "রসালো — যাতে প্রচুর রস আছে",
            en: "full of juice",
            hi: "रसीला — जिसमें भरपूर रस हो",
          },
          example: "The mangoes in summer are big and juicy.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "রিনা কোথায় ট্রেনের জন্য অপেক্ষা করে?",
            en: "Where does Rina wait for the train?",
            hi: "रीना ट्रेन का इंतज़ार कहाँ करती है?",
          },
          options: [
            { bn: "প্ল্যাটফর্মে", en: "On the platform", hi: "प्लेटफ़ॉर्म पर" },
            { bn: "বাসে", en: "In a bus", hi: "बस में" },
            { bn: "বাড়িতে", en: "At home", hi: "घर पर" },
            { bn: "নৌকায়", en: "In a boat", hi: "नाव में" },
          ],
          answer: 0,
          explain: {
            bn: "রিনা ও তার মা কমলাপুর স্টেশনের প্ল্যাটফর্মে অপেক্ষা করে।",
            en: "Rina and her mother wait on the platform at Kamalapur station.",
            hi: "रीना और उसकी माँ कमलापुर स्टेशन के प्लेटफ़ॉर्म पर इंतज़ार करते हैं।",
          },
        },
        {
          question: {
            bn: "রিনা জানালা থেকে কী দেখে?",
            en: "What does Rina see from the window?",
            hi: "रीना खिड़की से क्या देखती है?",
          },
          options: [
            { bn: "বড় বড় ভবন", en: "Tall buildings", hi: "ऊँची इमारतें" },
            { bn: "সবুজ ক্ষেত", en: "Green fields", hi: "हरे खेत" },
            { bn: "রেস্তোরাঁ", en: "Restaurants", hi: "रेस्तराँ" },
            { bn: "শপিং মল", en: "Shopping malls", hi: "शॉपिंग मॉल" },
          ],
          answer: 1,
          explain: {
            bn: "জানালার বাইরে সে সবুজ ক্ষেত, ছোট বাড়ি ও চওড়া নদী দেখে।",
            en: "From the window she sees green fields, small houses, and a wide river.",
            hi: "खिड़की से वह हरे खेत, छोटे घर और चौड़ी नदी देखती है।",
          },
        },
        {
          question: {
            bn: "ট্রেনে মা রিনার জন্য কী কেনেন?",
            en: "What does mother buy for Rina in the train?",
            hi: "ट्रेन में माँ रीना के लिए क्या खरीदती है?",
          },
          options: [
            { bn: "চিপস", en: "Chips", hi: "चिप्स" },
            { bn: "পানি", en: "Water", hi: "पानी" },
            { bn: "বই", en: "Books", hi: "किताबें" },
            { bn: "কমলা", en: "Oranges", hi: "संतरे" },
          ],
          answer: 3,
          explain: {
            bn: "কমলা বেচা ছেলের কাছ থেকে মা রিনার জন্য কমলা কেনেন।",
            en: "Mother buys oranges for Rina from the boy who sells them.",
            hi: "संतरे बेचने वाले लड़के से माँ रीना के लिए संतरे खरीदती है।",
          },
        },
      ],
    },
  },

  /* ── 2 · intermediate · work ──────────────────────────────────────── */
  {
    id: "",
    slug: "job-interview-dhaka",
    level: "intermediate",
    category: "work",
    minutes: 3,
    data: {
      title: {
        bn: "ঢাকায় চাকরির সাক্ষাৎকার",
        en: "A Job Interview in Dhaka",
        hi: "ढाका में नौकरी का साक्षात्कार",
      },
      summary: {
        bn: "সাদিয়া ঢাকার একটি মার্কেটিং প্রতিষ্ঠানে চাকরির সাক্ষাৎকার দিতে যায়। আগের রাতে সে উত্তরগুলো গুছিয়ে রাখে এবং আত্মবিশ্বাসের সাথে বলে। এক সপ্তাহ পরে কোম্পানি তাকে ভালো খবর দেয়।",
        en: "Sadia goes to a marketing company in Dhaka for a job interview. She prepares her answers the night before and speaks with confidence. A week later, the company calls her with good news.",
        hi: "सादिया ढाका की एक मार्केटिंग कंपनी में नौकरी के साक्षात्कार के लिए जाती है। वह एक दिन पहले अपने उत्तर तैयार करती है और आत्मविश्वास से बोलती है। एक हफ़्ते बाद कंपनी उसे अच्छी खबर देती है।",
      },
      paragraphs: [
        "Sadia finished her degree last year. Last Monday, she got an interview call from a marketing company in Gulshan. She was nervous, but she did not want to miss the chance.",
        "The night before, she read about the company and practised common questions in front of a mirror. She ironed her best saree and kept her CV ready. Her mother wished her luck at breakfast.",
        "The interview started at ten. The manager asked about her skills, her final-year project, and her plans. Sadia answered slowly and clearly. When she did not know something, she said so honestly.",
        "A week later, the company called. 'Welcome to the team, Sadia.' She shared the news with her family over dinner. Her first salary will help her pay for her younger brother's books.",
      ],
      vocabulary: [
        {
          word: "nervous",
          meaning: {
            bn: "ব্যাকুল বা অস্থির — ঘাবড়ে যাওয়া, উদ্বেগে ভরা মন",
            en: "worried or a little afraid about something",
            hi: "घबराया हुआ — किसी बात की चिंता से बेचैन",
          },
          example: "He felt nervous before the exam.",
        },
        {
          word: "honestly",
          meaning: {
            bn: "সততার সাথে — মিথ্যা না বলে, সোজাসাপ্টা ভাবে",
            en: "in a truthful way",
            hi: "ईमानदारी से — सच्चाई के साथ",
          },
          example: "She honestly said she did not know the answer.",
        },
        {
          word: "CV",
          meaning: {
            bn: "সিভি — শিক্ষা, দক্ষতা ও কাজের অভিজ্ঞতার সংক্ষিপ্ত বিবরণ",
            en: "a short document with your education and work experience",
            hi: "सीवी — आपकी पढ़ाई और काम के अनुभव का संक्षिप्त दस्तावेज़",
          },
          example: "Send your CV to the company by Friday.",
        },
        {
          word: "salary",
          meaning: {
            bn: "বেতন — কাজের বিনিময়ে প্রতি মাসে পাওয়া টাকা",
            en: "the money you get every month for your work",
            hi: "वेतन — काम के बदले हर महीने मिलने वाला पैसा",
          },
          example: "The company pays a good salary on time.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "মার্কেটিং প্রতিষ্ঠানটি কোথায়?",
            en: "Where is the marketing company?",
            hi: "मार्केटिंग कंपनी कहाँ है?",
          },
          options: [
            { bn: "চট্টগ্রামে", en: "In Chittagong", hi: "चट्टग्राम में" },
            { bn: "গুলশানে", en: "In Gulshan", hi: "गुलशान में" },
            { bn: "সিলেটে", en: "In Sylhet", hi: "सिलेट में" },
            { bn: "খুলনায়", en: "In Khulna", hi: "खुलना में" },
          ],
          answer: 1,
          explain: {
            bn: "প্রতিষ্ঠানটি গুলশানে, এবং গত সোমবার সাদিয়া সেখানে সাক্ষাৎকারের ডাক পায়।",
            en: "The company is in Gulshan, and Sadia got the interview call last Monday.",
            hi: "कंपनी गुलशान में है और सादिया को सोमवार को साक्षात्कार का कॉल आया।",
          },
        },
        {
          question: {
            bn: "সাদিয়া কীভাবে প্রস্তুতি নিয়েছিল?",
            en: "How did Sadia prepare?",
            hi: "सादिया ने तैयारी कैसे की?",
          },
          options: [
            { bn: "বন্ধুর কাছ থেকে উত্তর নকল করে", en: "She copied answers from a friend", hi: "उसने दोस्त से उत्तर नकल किए" },
            { bn: "সে সারারাত জেগে ছিল", en: "She stayed awake all night", hi: "वह रातभर जागती रही" },
            { bn: "আয়নার সামনে প্রশ্নের অভ্যাস করে", en: "She practised questions in front of a mirror", hi: "उसने आईने के सामने सवालों का अभ्यास किया" },
            { bn: "সে সাক্ষাৎকারে যায়নি", en: "She did not go to the interview", hi: "वह साक्षात्कार में नहीं गई" },
          ],
          answer: 2,
          explain: {
            bn: "আগের রাতে সে কোম্পানি সম্পর্কে পড়ে এবং আয়নার সামনে প্রশ্নের অভ্যাস করে।",
            en: "The night before, she read about the company and practised questions in front of a mirror.",
            hi: "रात में वह कंपनी के बारे में पढ़ती है और आईने के सामने सवालों का अभ्यास करती है।",
          },
        },
        {
          question: {
            bn: "তার প্রথম বেতন কোন খরচে সাহায্য করবে?",
            en: "What will her first salary help pay for?",
            hi: "उसका पहला वेतन किस खर्च में मदद करेगा?",
          },
          options: [
            { bn: "ছোট ভাইয়ের বইয়ের খরচ", en: "Her younger brother's books", hi: "उसके छोटे भाई की किताबें" },
            { bn: "নতুন ল্যাপটপ", en: "A new laptop", hi: "नया लैपटॉप" },
            { bn: "বাড়ির ভাড়া", en: "House rent", hi: "घर का किराया" },
            { bn: "বড় বোনের পড়া", en: "Her elder sister's tuition", hi: "उसकी बड़ी बहन की पढ़ाई" },
          ],
          answer: 0,
          explain: {
            bn: "সাদিয়ার প্রথম বেতন তার ছোট ভাইয়ের বই কেনার খরচ বহন করবে।",
            en: "Sadia's first salary will help pay for her younger brother's books.",
            hi: "सादिया का पहला वेतन उसके छोटे भाई की किताबें खरीदने में मदद करेगा।",
          },
        },
      ],
    },
  },

  /* ── 3 · intermediate · culture ───────────────────────────────────── */
  {
    id: "",
    slug: "cricket-match-weekend",
    level: "intermediate",
    category: "culture",
    minutes: 3,
    data: {
      title: {
        bn: "শুক্রবারের ক্রিকেট ম্যাচ",
        en: "Cricket Match on the Weekend",
        hi: "शुक्रवार शाम का क्रिकेट मैच",
      },
      summary: {
        bn: "শুক্রবার সন্ধ্যায় আরিফের পাড়ার ক্লাবে টেলিভিশনে বাংলাদেশের ম্যাচ দেখতে সবাই জড়ো হয়। শেষ ওভারে ম্যাচ ঘুরে যায় এবং পুরো পাড়া উল্লাসে ফেটে পড়ে।",
        en: "On Friday evening, everyone gathers at the neighbourhood club to watch Bangladesh's match on television. The game turns in the last over, and the whole street bursts into celebration.",
        hi: "शुक्रवार शाम को पड़ोस के क्लब में सब टीवी पर बांग्लादेश का मैच देखने जुटते हैं। आख़िरी ओवर में मैच पलट जाता है और पूरी गली जश्न में डूब जाती है।",
      },
      paragraphs: [
        "Friday is the big day. Bangladesh plays against Sri Lanka, and Arif invites his cousins to the neighbourhood club. A small television hangs in the corner, but everyone can see the screen.",
        "Tea, puri, and muri move around the room. Old Karim chacha predicts every ball before the bowler runs in. When Bangladesh loses two quick wickets, the room goes quiet.",
        "Then the young batter takes charge. He hits two sixes in one over. People stand up, clap, and shout with every run. Arif's little cousin watches with wide eyes.",
        "Bangladesh needs six from the last four balls. The batter swings hard — four! Then two more runs, and the match is over. Neighbours dance outside, and someone turns on loud music. Arif walks home late, still smiling.",
      ],
      vocabulary: [
        {
          word: "wicket",
          meaning: {
            bn: "উইকেট — ক্রিকেটে কাঠের স্টাম্প; 'উইকেট পড়া' মানে ব্যাটসম্যান আউট হওয়া",
            en: "in cricket, the set of stumps; losing a wicket means a batter is out",
            hi: "विकेट — क्रिकेट में स्टंप का समूह; विकेट गिरना यानी बल्लेबाज़ आउट",
          },
          example: "The team lost three wickets in the first ten overs.",
        },
        {
          word: "batter",
          meaning: {
            bn: "ব্যাটসম্যান — ক্রিকেটে ব্যাট হাতে রান করা খেলোয়াড়",
            en: "the cricket player who hits the ball",
            hi: "बल्लेबाज़ — क्रिकेट में जो गेंद को बल्ले से मारता है",
          },
          example: "Our best batter scored ninety runs.",
        },
        {
          word: "over",
          meaning: {
            bn: "ওভার — ক্রিকেটে টানা ছয় বলের সেট",
            en: "a set of six balls bowled in cricket",
            hi: "ओवर — क्रिकेट में लगातार छह गेंदों का सेट",
          },
          example: "The last over changed the whole game.",
        },
        {
          word: "predict",
          meaning: {
            bn: "পূর্বানুমান করা — আগে থেকে বলে রাখা কী ঘটতে চলেছে",
            en: "to say what you think will happen before it does",
            hi: "पूर्वानुमान लगाना — घटने से पहले ही बता देना",
          },
          example: "Karim chacha loves to predict every ball.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "তারা ম্যাচটি কোথায় দেখে?",
            en: "Where do they watch the match?",
            hi: "वे मैच कहाँ देखते हैं?",
          },
          options: [
            { bn: "স্টেডিয়ামে", en: "At the stadium", hi: "स्टेडियम में" },
            { bn: "আরিফের বাড়িতে", en: "At Arif's house", hi: "अरिफ़ के घर पर" },
            { bn: "পাড়ার ক্লাবে", en: "At the neighbourhood club", hi: "पड़ोस के क्लब में" },
            { bn: "রেস্তোরাঁয়", en: "At a restaurant", hi: "रेस्तराँ में" },
          ],
          answer: 2,
          explain: {
            bn: "আরিফ তার চাচাতো ভাই-বোনদের পাড়ার ক্লাবে ম্যাচ দেখতে ডাকে।",
            en: "Arif invites his cousins to watch the match at the neighbourhood club.",
            hi: "अरिफ़ अपने चचेरे भाई-बहनों को पड़ोस के क्लब में मैच देखने बुलाता है।",
          },
        },
        {
          question: {
            bn: "দ্রুত দুই উইকেট পড়লে কী হয়?",
            en: "What happens when Bangladesh loses two quick wickets?",
            hi: "दो जल्दी विकेट गिरने पर क्या होता है?",
          },
          options: [
            { bn: "ঘরটা চুপ হয়ে যায়", en: "The room goes quiet", hi: "कमरा शांत हो जाता है" },
            { bn: "সবাই বাড়ি ফিরে যায়", en: "Everyone leaves for home", hi: "सब घर चले जाते हैं" },
            { bn: "কেউ চিৎকার করে ওঠে", en: "Somebody starts shouting", hi: "कोई चिल्लाने लगता है" },
            { bn: "কোনো পরিবর্তন হয় না", en: "Nothing changes", hi: "कुछ नहीं बदलता" },
          ],
          answer: 0,
          explain: {
            bn: "দুই উইকেট পড়ে যাওয়ায় ঘরের ভেতরটা চুপ হয়ে যায়।",
            en: "After two quick wickets fall, the room goes quiet.",
            hi: "दो जल्दी विकेट गिरने के बाद कमरा शांत हो जाता है।",
          },
        },
        {
          question: {
            bn: "শেষ চার বলে বাংলাদেশের কত রান দরকার ছিল?",
            en: "How many runs did Bangladesh need from the last four balls?",
            hi: "आख़िरी चार गेंदों में बांग्लादेश को कितने रन चाहिए थे?",
          },
          options: [
            { bn: "চার রান", en: "Four runs", hi: "चार रन" },
            { bn: "ছয় রান", en: "Six runs", hi: "छह रन" },
            { bn: "দুই রান", en: "Two runs", hi: "दो रन" },
            { bn: "দশ রান", en: "Ten runs", hi: "दस रन" },
          ],
          answer: 1,
          explain: {
            bn: "শেষ চার বলে বাংলাদেশের দরকার ছিল ছয় রান।",
            en: "Bangladesh needed six runs from the last four balls.",
            hi: "आख़िरी चार गेंदों में बांग्लादेश को छह रन चाहिए थे।",
          },
        },
      ],
    },
  },

  /* ── 4 · intermediate · science ───────────────────────────────────── */
  {
    id: "",
    slug: "why-sundarbans-matter",
    level: "intermediate",
    category: "science",
    minutes: 3,
    data: {
      title: {
        bn: "সুন্দরবন কেন গুরুত্বপূর্ণ",
        en: "Why the Sundarbans Matter",
        hi: "सुंदरबन क्यों ज़रूरी है",
      },
      summary: {
        bn: "সুন্দরবন পৃথিবীর বৃহত্তম ম্যানগ্রোভ বন এবং রয়েল বেঙ্গল বাঘের আবাস। এই বন ঝড় থেকে উপকূলকে রক্ষা করে এবং লক্ষাধিক মানুষের জীবিকা জোগায়। তাই এর সংরক্ষণ আমাদের সবার দায়িত্ব।",
        en: "The Sundarbans is the largest mangrove forest on earth and the home of the Royal Bengal Tiger. It protects the coast from storms and supports millions of livelihoods. Protecting it is everyone's duty.",
        hi: "सुंदरबन धरती का सबसे बड़ा मैंग्रोव वन और रॉयल बंगाल टाइगर का घर है। यह तूफ़ानों से तट की रक्षा करता है और लाखों लोगों की आजीविका जोड़े रखता है। इसकी रक्षा सबका दायित्व है।",
      },
      paragraphs: [
        "In the south of Bangladesh, where rivers meet the sea, grows the Sundarbans. It is the largest mangrove forest in the world. Its tangled roots stand in salty water and hold the wet soil together.",
        "This forest is a natural shield. When cyclones like Sidr come from the Bay of Bengal, the trees slow down the wind and soak up the waves. Villages behind the forest often escape the worst damage.",
        "The Sundarbans is also a busy home for wildlife. Royal Bengal Tigers walk its dark paths, and deer, crocodiles, and rare birds live here too. Fishers and honey collectors earn their living from its rivers and trees.",
        "But the forest is under pressure. Rising seas, oil spills, and illegal cutting hurt it every year. Scientists say if we care for the Sundarbans, it will keep caring for us.",
      ],
      vocabulary: [
        {
          word: "mangrove",
          meaning: {
            bn: "ম্যানগ্রোভ — লোনা উপকূলীয় পানিতে জন্মানো গাছ ও বন, যেমন সুন্দরবন",
            en: "a tree that grows in salty coastal water",
            hi: "मैंग्रोव — नमकीन तटीय पानी में उगने वाला पेड़",
          },
          example: "Mangrove roots hold the soft coastal soil.",
        },
        {
          word: "cyclone",
          meaning: {
            bn: "ঘূর্ণিঝড় — সমুদ্র থেকে আসা প্রবল বাতাসের ঝড়",
            en: "a very powerful storm that forms over the sea",
            hi: "चक्रवात — समुद्र पर बनने वाला प्रचंड तूफ़ान",
          },
          example: "The cyclone hit the coast late at night.",
        },
        {
          word: "wildlife",
          meaning: {
            bn: "বন্যপ্রাণী — বনে স্বাধীনভাবে বসবাস করা পশুপাখি",
            en: "wild animals and birds that live in nature",
            hi: "वन्यजीव — प्रकृति में रहने वाले जंगली जानवर और पक्षी",
          },
          example: "The deep forest is full of wildlife.",
        },
        {
          word: "shield",
          meaning: {
            bn: "ঢাল বা রক্ষাকবচ — বিপদ থেকে রক্ষা করে এমন কিছু",
            en: "something that protects you from danger",
            hi: "कवच — ख़तरे से बचाने वाली चीज़",
          },
          example: "Trees work as a shield against strong wind.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "সুন্দরবন আসলে কী?",
            en: "What is the Sundarbans?",
            hi: "सुंदरबन वास्तव में क्या है?",
          },
          options: [
            { bn: "পৃথিবীর বৃহত্তম ম্যানগ্রোভ বন", en: "The largest mangrove forest in the world", hi: "दुनिया का सबसे बड़ा मैंग्रोव वन" },
            { bn: "বাংলাদেশের সবচেয়ে উঁচু পাহাড়", en: "The tallest hill in Bangladesh", hi: "बांग्लादेश की सबसे ऊँची पहाड़ी" },
            { bn: "একটি গভীর সমুদ্র উপসাগর", en: "A deep sea bay", hi: "एक गहरी समुद्री खाड़ी" },
            { bn: "একটি বড় মাছ ধরার বন্দর", en: "A large fishing port", hi: "एक बड़ा मछली पकड़ने का बंदरगाह" },
          ],
          answer: 0,
          explain: {
            bn: "সুন্দরবন পৃথিবীর বৃহত্তম ম্যানগ্রোভ বন, যেখানে নদী সাগরে মিশেছে।",
            en: "The Sundarbans is the largest mangrove forest in the world, where rivers meet the sea.",
            hi: "सुंदरबन दुनिया का सबसे बड़ा मैंग्रोव वन है, जहाँ नदियाँ समुद्र से मिलती हैं।",
          },
        },
        {
          question: {
            bn: "ঘূর্ণিঝড় থেকে বনটি গ্রামগুলোকে কীভাবে রক্ষা করে?",
            en: "How does the forest protect villages from cyclones?",
            hi: "चक्रवात से वन गाँवों की रक्षा कैसे करता है?",
          },
          options: [
            { bn: "ঝড়ের পানি জমাট বেঁধে ফেলে", en: "It freezes the storm water", hi: "यह तूफ़ान का पानी जमा कर देता है" },
            { bn: "বাতাস কমায় ও ঢেউ শুষে নেয়", en: "It slows the wind and soaks up waves", hi: "यह हवा धीमी कर देता है और लहरों को सोख लेता है" },
            { bn: "গ্রামবাসীদের উঁচু জায়গায় সরিয়ে দেয়", en: "It moves villagers to high ground", hi: "यह ग्रामीणों को ऊँची जगह ले जाता है" },
            { bn: "ঝড়ের আগাম খবর দেয়", en: "It sends early warnings", hi: "यह पहले से चेतावनी देता है" },
          ],
          answer: 1,
          explain: {
            bn: "ঝড়ের সময় গাছপালা বাতাস কমায় এবং ঢেউ শুষে নেয়, তাই পেছনের গ্রামগুলো কম ক্ষতিগ্রস্ত হয়।",
            en: "During storms the trees slow the wind and soak up the waves, so villages behind suffer less.",
            hi: "तूफ़ान में पेड़ हवा धीमी करते हैं और लहरों को सोख लेते हैं, इसलिए पीछे के गाँवों को कम नुक़सान होता है।",
          },
        },
        {
          question: {
            bn: "সুন্দরবনের সবচেয়ে বিখ্যাত বাসিন্দা কোন প্রাণী?",
            en: "Which animal is the famous resident of the Sundarbans?",
            hi: "सुंदरबन का प्रसिद्ध निवासी कौन-सा जानवर है?",
          },
          options: [
            { bn: "এশীয় হাতি", en: "The Asian elephant", hi: "एशियाई हाथी" },
            { bn: "ধূসর বানর", en: "The grey langur", hi: "ग्रे लंगूर" },
            { bn: "রয়েল বেঙ্গল বাঘ", en: "The Royal Bengal Tiger", hi: "रॉयल बंगाल टाइगर" },
            { bn: "চিতাবাঘ", en: "The leopard", hi: "तेंदुआ" },
          ],
          answer: 2,
          explain: {
            bn: "রয়েল বেঙ্গল বাঘ সুন্দরবনের অন্ধকার পথে হাঁটে — এটি এই বনের সবচেয়ে বিখ্যাত বাসিন্দা।",
            en: "Royal Bengal Tigers walk the dark paths of the Sundarbans — they are its most famous residents.",
            hi: "रॉयल बंगाल टाइगर सुंदरबन के अंधेरे रास्तों पर चलते हैं — यही इस वन का सबसे प्रसिद्ध निवासी है।",
          },
        },
      ],
    },
  },

  /* ── 5 · advanced · inspire ───────────────────────────────────────── */
  {
    id: "",
    slug: "engineer-never-stopped-learning",
    level: "advanced",
    category: "inspire",
    minutes: 4,
    data: {
      title: {
        bn: "যে প্রকৌশলী শেখা কখনো থামাননি",
        en: "The Engineer Who Never Stopped Learning",
        hi: "इंजीनियर जिसने कभी सीखना नहीं छोड़ा",
      },
      summary: {
        bn: "গ্রামের ছেলে হাসান দিনে কারখানায় কাজ করত, রাতে পড়ত। বছরের পর বছর ধৈর্য আর লেগে থাকার জেদে সে হয়ে ওঠে সফল প্রকৌশলী। এখন সে গ্রামের ছেলেমেয়েদের বিনা পয়সায় পড়ায়।",
        en: "Hasan, a boy from a small village, worked in a factory by day and studied by night. Years of patience and stubborn learning made him a successful engineer. Today he teaches village children for free.",
        hi: "छोटे गाँव का लड़का हसन दिन में फ़ैक्ट्री में काम करता और रात में पढ़ता। बरसों के धैर्य और सीखने की ज़िद ने उसे सफल इंजीनियर बना दिया। आज वह गाँव के बच्चों को मुफ़्त पढ़ाता है।",
      },
      paragraphs: [
        "Hasan grew up in a village near Mymensingh, where electricity came and went and books were rare treasures. His father repaired bicycles, and the family survived on very little. Yet whenever Hasan found a broken radio, he took it apart just to see how it worked.",
        "After class eight, money ran out, so he took a job at a garment factory in Gazipur. While other workers rested after long shifts, Hasan sat under a dim bulb with borrowed textbooks. He failed his first admission test, and the second, but he kept a handwritten wall chart of formulas above his bed.",
        "On his third attempt, he earned a seat at a polytechnic institute. The factory owner, impressed by his stubbornness, let him work fewer hours. Four years later, Hasan graduated at the top of his class and was hired to design machine maintenance systems.",
        "Now in his forties, Hasan returns to his village every Eid. In the school yard he runs a free evening class, telling students that talent means little without persistence. 'I was not the smartest boy in my village,' he says, 'but I simply refused to stop learning.'",
      ],
      vocabulary: [
        {
          word: "treasure",
          meaning: {
            bn: "ধনভাণ্ডার — খুব দামি বা বিরল সম্পদ",
            en: "something very valuable or rare",
            hi: "ख़ज़ाना — बहुत क़ीमती या दुर्लभ चीज़",
          },
          example: "In our house, books were treated like treasures.",
        },
        {
          word: "impressed",
          meaning: {
            bn: "মুগ্ধ — কারো কাজ বা গুণে ভালো লেগে যাওয়া",
            en: "feeling admiration for someone or something",
            hi: "प्रभावित — किसी के काम या गुण से अच्छा लगना",
          },
          example: "The manager was impressed by her report.",
        },
        {
          word: "maintenance",
          meaning: {
            bn: "রক্ষণাবেক্ষণ — কিছু ভালো চালু রাখতে নিয়মিত যত্ন বা মেরামত",
            en: "the regular care and repair that keeps something working",
            hi: "रखरखाव — किसी चीज़ को चालू रखने के लिए नियमित देखभाल",
          },
          example: "The factory pays him for machine maintenance.",
        },
        {
          word: "persistence",
          meaning: {
            bn: "অধ্যবসায় — বারবার ব্যর্থ হয়েও না ভেঙে পড়ে লেগে থাকা",
            en: "continuing to try even when it is hard",
            hi: "दृढ़ता — कठिनाई में भी लगातार प्रयास करते रहना",
          },
          example: "Through years of persistence, she finished her degree.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "হাসান পোশাক কারখানায় কাজ নিয়েছিল কেন?",
            en: "Why did Hasan take a job at the garment factory?",
            hi: "हसन ने गारमेंट फ़ैक्ट्री में काम क्यों लिया?",
          },
          options: [
            { bn: "কারখানার কাজ পছন্দ ছিল বলে", en: "Because he loved factory work", hi: "क्योंकि उसे फ़ैक्ट्री का काम पसंद था" },
            { bn: "পরিবারের টাকা ফুরিয়ে যাওয়ায়", en: "Because his family's money ran out", hi: "क्योंकि परिवार का पैसा ख़त्म हो गया था" },
            { bn: "গ্রাম ছাড়তে চেয়েছিল বলে", en: "Because he wanted to leave his village", hi: "क्योंकि वह गाँव छोड़ना चाहता था" },
            { bn: "তার বাবা জোর করেছিল বলে", en: "Because his father forced him", hi: "क्योंकि उसके पिता ने कहा था" },
          ],
          answer: 1,
          explain: {
            bn: "অষ্টম শ্রেণির পর টাকা ফুরিয়ে যাওয়ায় হাসান গাজীপুরের পোশাক কারখানায় কাজ নেয়।",
            en: "After class eight, money ran out, so Hasan took a job at a garment factory in Gazipur.",
            hi: "आठवीं के बाद पैसा ख़त्म हो गया, इसलिए हसन ने गाज़ीपुर की गारमेंट फ़ैक्ट्री में नौकरी ली।",
          },
        },
        {
          question: {
            bn: "হাসান তার বিছানার উপরে কী রেখেছিল?",
            en: "What did Hasan keep above his bed?",
            hi: "हसन बिस्तर के ऊपर क्या रखता था?",
          },
          options: [
            { bn: "তার প্রথম ডিগ্রির সার্টিফিকেট", en: "His first degree certificate", hi: "उसका पहला डिग्री प्रमाणपत्र" },
            { bn: "কারখানার ডিউটির তালিকা", en: "The factory's duty roster", hi: "फ़ैक्ट्री की ड्यूटी सूची" },
            { bn: "হাতে লেখা সূত্রের চার্ট", en: "A handwritten chart of formulas", hi: "हाथ से लिखा सूत्रों का चार्ट" },
            { bn: "ভাঙা রেডিওর যন্ত্রাংশ", en: "Parts of a broken radio", hi: "टूटे रेडियो के पुर्ज़े" },
          ],
          answer: 2,
          explain: {
            bn: "সে বিছানার উপরে সূত্রের একটি হাতে লেখা চার্ট লাগিয়ে রাখত।",
            en: "He kept a handwritten wall chart of formulas above his bed.",
            hi: "वह बिस्तर के ऊपर सूत्रों का हाथ से लिखा चार्ट रखता था।",
          },
        },
        {
          question: {
            bn: "প্রতি ঈদে গ্রামে ফিরে হাসান কী করে?",
            en: "What does Hasan do when he returns to his village every Eid?",
            hi: "हर ईद पर गाँव लौटकर हसन क्या करता है?",
          },
          options: [
            { bn: "শুধু পরিবারের সাথে সময় কাটায়", en: "He only spends time with his family", hi: "वह केवल परिवार के साथ समय बिताता है" },
            { bn: "বাড়ি ভাড়া দেয়", en: "He rents out his house", hi: "वह अपना घर किराए पर देता है" },
            { bn: "একটি কারখানা খোলে", en: "He opens a factory", hi: "वह एक फ़ैक्ट्री खोलता है" },
            { bn: "স্কুল চত্বরে বিনা পয়সায় পড়ায়", en: "He teaches for free in the school yard", hi: "वह स्कूल के आँगन में मुफ़्त पढ़ाता है" },
          ],
          answer: 3,
          explain: {
            bn: "প্রতি ঈদে ফিরে হাসান স্কুল চত্বরে বিনামূল্যে সন্ধ্যার ক্লাস নেয়।",
            en: "Every Eid, Hasan runs a free evening class in the school yard.",
            hi: "हर ईद पर हसन स्कूल के आँगन में मुफ़्त शाम की कक्षा चलाता है।",
          },
        },
      ],
    },
  },

  /* ── 6 · advanced · culture ───────────────────────────────────────── */
  {
    id: "",
    slug: "letter-from-student-abroad",
    level: "advanced",
    category: "culture",
    minutes: 4,
    data: {
      title: {
        bn: "বিদেশে পড়া ছাত্রীর চিঠি",
        en: "A Letter from a Student Abroad",
        hi: "विदेश में पढ़ रही छात्रा का पत्र",
      },
      summary: {
        bn: "মেলবোর্নে পড়তে থাকা তানিয়া ঈদের আগে বাড়িতে চিঠি লেখে। নতুন দেশের জীবন, একাকীত্ব আর নিজের শিকড়ের কথা সে খুলে বলে। চিঠিটি দূরত্বের মধ্যেও পরিবারের ভালোবাসা টেনে আনে।",
        en: "Tania, studying in Melbourne, writes home before Eid. She describes her new life, her loneliness, and what her roots mean to her. The letter pulls the family close across the distance.",
        hi: "मेलबर्न में पढ़ रही तानिया ईद से पहले घर पत्र लिखती है। वह अपनी नई ज़िंदगी, अकेलापन और अपनी जड़ों के अर्थ के बारे में बताती है। पत्र दूरी के बावजूद परिवार को क़रीब ले आता है।",
      },
      paragraphs: [
        "Dear Ma, the letter began. Tania sat by the window of her small flat in Melbourne, watching rain slide down the glass, and thought of the smell of her mother's kitchen on Eid morning.",
        "She wrote about her scholarship, her part-time job at a bookshop, and the classmates from eleven countries who shared her flat's tiny kitchen. There were days, she admitted, when homesickness arrived without warning — once in the middle of a lecture, when someone's phone played an old Bangla song.",
        "Yet she had learned to carry her culture lightly. She taught her friends to fold samosa wrappers, cooked biryani on her landlord's birthday, and hung a small rickshaw painting above her desk. 'Distance, Ma, has taught me exactly what home is,' she wrote.",
        "She ended the letter with a promise: next year she would come home not as a student, but as a researcher documenting river life in Barishal. Her mother read the letter three times, folded it carefully, and kept it inside the Quran cover with the others.",
      ],
      vocabulary: [
        {
          word: "scholarship",
          meaning: {
            bn: "বৃত্তি — পড়াশোনার খরচ বহন করার জন্য দেওয়া আর্থিক সহায়তা",
            en: "money given to a student to pay for their studies",
            hi: "छात्रवृत्ति — पढ़ाई के खर्च के लिए दी जाने वाली आर्थिक सहायता",
          },
          example: "She won a scholarship to study in Australia.",
        },
        {
          word: "homesickness",
          meaning: {
            bn: "দেশাতিবোধ — নিজের বাড়ি বা দেশের জন্য মন খারাপ হওয়া",
            en: "the sad feeling of missing your home",
            hi: "घर की याद — अपने घर की तड़प से होने वाला दुःख",
          },
          example: "Homesickness hit her hardest during the festival.",
        },
        {
          word: "lecture",
          meaning: {
            bn: "বক্তৃতা — বিশ্ববিদ্যালয়ে শিক্ষকের পাঠদান",
            en: "a talk given to teach students at a university",
            hi: "व्याख्यान — विश्वविद्यालय में शिक्षक की पढ़ाई",
          },
          example: "She arrived late to the morning lecture.",
        },
        {
          word: "researcher",
          meaning: {
            bn: "গবেষক — যিনি কোনো বিষয়ে গভীরভাবে অনুসন্ধান করেন",
            en: "a person who studies a subject deeply to find new facts",
            hi: "शोधकर्ता — जो किसी विषय पर गहराई से अध्ययन करता है",
          },
          example: "The researcher spent months recording folk songs.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "তানিয়া কোথায় পড়াশোনা করে?",
            en: "Where does Tania study?",
            hi: "तानिया कहाँ पढ़ती है?",
          },
          options: [
            { bn: "টরন্টোতে", en: "In Toronto", hi: "टोरंटो में" },
            { bn: "লন্ডনে", en: "In London", hi: "लंदन में" },
            { bn: "মেলবোর্নে", en: "In Melbourne", hi: "मेलबर्न में" },
            { bn: "কুয়ালালামপুরে", en: "In Kuala Lumpur", hi: "कुआलालंपुर में" },
          ],
          answer: 2,
          explain: {
            bn: "তানিয়া মেলবোর্নের ছোট ফ্ল্যাটে বসে বাড়ির উদ্দেশে চিঠি লেখে।",
            en: "Tania writes home from her small flat in Melbourne.",
            hi: "तानिया मेलबर्न के अपने छोटे फ़्लैट से घर पत्र लिखती है।",
          },
        },
        {
          question: {
            bn: "লেকচারের মাঝে তার দেশাতিবোধ জাগিয়েছিল কী?",
            en: "What made her homesick in the middle of a lecture?",
            hi: "व्याख्यान के बीच उसे घर की याद क्या दिलाई?",
          },
          options: [
            { bn: "কারো ফোনে পুরনো বাংলা গান বাজা", en: "An old Bangla song playing on someone's phone", hi: "किसी के फ़ोन पर बजा पुराना बांग्ला गाना" },
            { bn: "জানালার বাইরে ভারী বৃষ্টি", en: "Heavy rain outside the window", hi: "खिड़की के बाहर तेज़ बारिश" },
            { bn: "মায়ের পাঠানো ছবি", en: "A photo her mother sent", hi: "माँ की भेजी तस्वीर" },
            { bn: "বইয়ের দোকানের কাজ", en: "Her shift at the bookshop", hi: "बुकशॉप की उसकी शिफ़्ट" },
          ],
          answer: 0,
          explain: {
            bn: "লেকচারের মাঝে কারো ফোনে পুরনো বাংলা গান বাজলে দেশাতিবোধ হঠাৎ চাপে পড়ে।",
            en: "During a lecture, an old Bangla song on someone's phone brought her homesickness without warning.",
            hi: "व्याख्यान के बीच किसी के फ़ोन पर पुराना बांग्ला गाना बजा और घर की याद सता गई।",
          },
        },
        {
          question: {
            bn: "পরের বছরের জন্য সে কী প্রতিশ্রুতি দেয়?",
            en: "What does she promise for next year?",
            hi: "वह अगले साल के लिए क्या वादा करती है?",
          },
          options: [
            { bn: "চাকরি ছেড়ে স্থায়ীভাবে ফিরবে", en: "She will quit her job and return for good", hi: "वह नौकरी छोड़कर हमेशा के लिए लौटेगी" },
            { bn: "মাকে সাথে নিয়ে যাবে", en: "She will take her mother with her", hi: "वह अपनी माँ को साथ ले जाएगी" },
            { bn: "পরিবারের জন্য বড় বাড়ি কিনবে", en: "She will buy a big house for the family", hi: "वह परिवार के लिए बड़ा घर खरीदेगी" },
            { bn: "বরিশালে নদীর জীবন নিয়ে গবেষণা করবে", en: "She will research river life in Barishal", hi: "वह बरिशाल में नदी के जीवन पर शोध करेगी" },
          ],
          answer: 3,
          explain: {
            bn: "সে প্রতিশ্রুতি দেয়, পরের বছর ছাত্র হয়ে নয়, গবেষক হয়ে বরিশালে নদীর জীবন নিয়ে কাজ করতে ফিরবে।",
            en: "She promises to return next year not as a student, but as a researcher documenting river life in Barishal.",
            hi: "वह वादा करती है कि अगले साल छात्र नहीं, शोधकर्ता बनकर बरिशाल में नदी के जीवन पर काम करेगी।",
          },
        },
      ],
    },
  },

  /* ── 7 · advanced · science ───────────────────────────────────────── */
  {
    id: "",
    slug: "technology-changed-villages",
    level: "advanced",
    category: "science",
    minutes: 4,
    data: {
      title: {
        bn: "যেভাবে প্রযুক্তি গ্রাম বদলে দিয়েছে",
        en: "How Technology Changed Our Villages",
        hi: "तकनीक ने हमारे गाँव कैसे बदले",
      },
      summary: {
        bn: "মোবাইল ফোন থেকে মোবাইল ব্যাংকিং — প্রযুক্তি বাংলাদেশের গ্রামীণ জীবন বদলে দিয়েছে। কৃষক এখন বাজারদর জানে, রোগী দূর থেকে ডাক্তারের পরামর্শ পায়। তবু বিদ্যুৎ ও দক্ষতার ব্যবধান এখনো বড় চ্যালেঞ্জ।",
        en: "From mobile phones to mobile banking, technology has reshaped rural life in Bangladesh. Farmers now check prices, and patients reach doctors from far away. Still, gaps in electricity and skills remain real challenges.",
        hi: "मोबाइल फ़ोन से मोबाइल बैंकिंग तक, तकनीक ने बांग्लादेश के ग्रामीण जीवन को बदल दिया है। किसान अब दाम जाँचते हैं और मरीज़ दूर बैठे डॉक्टर तक पहुँचते हैं। फिर भी बिजली और कौशल का अंतर बड़ी चुनौती है।",
      },
      paragraphs: [
        "Twenty years ago, a single phone call from a village meant a long walk to the union bhaban. Today, farmers in Haor regions check market prices on cheap smartphones while their cattle graze beside them. The change arrived quietly, village by village.",
        "Mobile banking has perhaps brought the deepest shift. A garment worker in Dhaka can send money to her mother in Rangpur within seconds, without a bank branch or a bus ticket. Small shopkeepers who never had accounts now run their businesses through bKash and Nagad.",
        "Education and health have followed the same road. Students watch recorded physics lectures when the internet is cheap at night, and telemedicine lets an elderly patient in Kurigram talk to a specialist in Dhaka without travelling. Satellite data even warns fishing boats about dangerous weather.",
        "Yet the picture is not perfect. Load-shedding still interrupts online classes, older villagers often depend on their grandchildren to navigate apps, and fake news spreads faster than correction. Technology, it turns out, is only a tool — the wisdom to use it must grow in classrooms and homes alike.",
      ],
      vocabulary: [
        {
          word: "telemedicine",
          meaning: {
            bn: "টেলিমেডিসিন — দূর থেকে ফোন বা ইন্টারনেটে ডাক্তারের পরামর্শ নেওয়া",
            en: "getting a doctor's advice by phone or video from far away",
            hi: "टेलीमेडिसिन — दूर से फ़ोन या वीडियो के ज़रिए डॉक्टर की सलाह लेना",
          },
          example: "Telemedicine saved the long journey to the city hospital.",
        },
        {
          word: "specialist",
          meaning: {
            bn: "বিশেষজ্ঞ — কোনো নির্দিষ্ট বিষয়ে উচ্চ প্রশিক্ষিত ডাক্তার বা ব্যক্তি",
            en: "a doctor or expert trained in one particular field",
            hi: "विशेषज्ञ — किसी एक क्षेत्र में प्रशिक्षित डॉक्टर या माहिर व्यक्ति",
          },
          example: "The specialist examined the reports carefully.",
        },
        {
          word: "load-shedding",
          meaning: {
            bn: "লোডশেডিং — চাহিদা মেটাতে না পারায় সাময়িক বিদ্যুৎ বিভ্রাট",
            en: "a planned cut in electricity when supply falls short",
            hi: "लोडशेडिंग — बिजली की कमी पर जानबूझकर की गई कटौती",
          },
          example: "Load-shedding interrupted the online exam twice.",
        },
        {
          word: "navigate",
          meaning: {
            bn: "ব্যবহার করতে পারা — অ্যাপ বা ওয়েবসাইটের ভেতরে দিক খুঁজে চলা",
            en: "to find your way through an app or website",
            hi: "नेविगेट करना — ऐप या वेबसाइट में रास्ता खोजना",
          },
          example: "He helped his grandfather navigate the banking app.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "হাওর অঞ্চলের কৃষকরা আজ কী করতে পারে?",
            en: "What can farmers in Haor regions do today?",
            hi: "हाओर क्षेत्र के किसान आज क्या कर सकते हैं?",
          },
          options: [
            { bn: "মোবাইলে বাজারদর দেখতে পারে", en: "They can check market prices on smartphones", hi: "वे स्मार्टफ़ोन पर बाज़ार भाव देख सकते हैं" },
            { bn: "তাদের আর মোবাইল দরকার নেই", en: "They no longer need phones", hi: "उन्हें अब फ़ोन की ज़रूरत नहीं" },
            { bn: "তারা শুধু টেলিভিশন দেখে", en: "They only watch television", hi: "वे केवल टीवी देखते हैं" },
            { bn: "তারা শহরে যেতে বাধ্য হয়", en: "They must travel to the city", hi: "उन्हें शहर जाना पड़ता है" },
          ],
          answer: 0,
          explain: {
            bn: "হাওর অঞ্চলের কৃষকরা এখন সস্তা স্মার্টফোনে বাজারদর দেখতে পারে।",
            en: "Farmers in Haor regions can now check market prices on cheap smartphones.",
            hi: "हाओर क्षेत्र के किसान अब सस्ते स्मार्टफ़ोन पर बाज़ार भाव देख सकते हैं।",
          },
        },
        {
          question: {
            bn: "রংপুরে মায়ের কাছে টাকা কীভাবে পাঠায় পোশাক শ্রমিক?",
            en: "How does a garment worker send money to her mother in Rangpur?",
            hi: "गारमेंट कर्मचारी रंगपुर में अपनी माँ को पैसा कैसे भेजती है?",
          },
          options: [
            { bn: "বাসে করে নগদ টাকা পাঠিয়ে", en: "By sending cash on a bus", hi: "बस से नक़द पैसा भेजकर" },
            { bn: "ব্যাংক ব্রাঞ্চে গিয়ে", en: "By visiting a bank branch", hi: "बैंक शाखा जाकर" },
            { bn: "ডাকপিয়ের মাধ্যমে", en: "Through the postman", hi: "डाकिया के ज़रिए" },
            { bn: "মোবাইল ব্যাংকিংয়ে, কয়েক সেকেন্ডে", en: "Through mobile banking, within seconds", hi: "मोबाइल बैंकिंग से, कुछ सेकंड में" },
          ],
          answer: 3,
          explain: {
            bn: "মোবাইল ব্যাংকিংয়ে ঢাকার কর্মী কয়েক সেকেন্ডেই রংপুরে মায়ের কাছে টাকা পাঠাতে পারে।",
            en: "With mobile banking, a worker in Dhaka can send money to her mother in Rangpur within seconds.",
            hi: "मोबाइल बैंकिंग से ढाका की कर्मचारी कुछ सेकंड में रंगपुर में अपनी माँ को पैसा भेज सकती है।",
          },
        },
        {
          question: {
            bn: "শেষ অনুচ্ছেদ অনুযায়ী প্রযুক্তি সম্পর্কে লেখকের মন্তব্য কী?",
            en: "What does the passage say about technology at the end?",
            hi: "अंत में लेख तकनीक के बारे में क्या कहता है?",
          },
          options: [
            { bn: "প্রযুক্তি গ্রামের সব সমস্যা শেষ করে দিয়েছে", en: "Technology has ended every village problem", hi: "तकनीक ने गाँव की हर समस्या ख़त्म कर दी है" },
            { bn: "প্রযুক্তি কেবল হাতিয়ার; সঠিক ব্যবহারের বিবেকও দরকার", en: "Technology is only a tool; the wisdom to use it well is also needed", hi: "तकनीक केवल एक औज़ार है; इसे भली-भाँति चलाने का विवेक भी ज़रूरी है" },
            { bn: "গ্রামে প্রযুক্তির কোনো প্রয়োজন নেই", en: "Villages do not need technology", hi: "गाँवों को तकनीक की ज़रूरत नहीं" },
            { bn: "প্রযুক্তি কখনোই গ্রামে পৌঁছাবে না", en: "Technology will never reach villages", hi: "तकनीक गाँवों तक कभी नहीं पहुँचेगी" },
          ],
          answer: 1,
          explain: {
            bn: "শেষ অনুচ্ছেদে বলা হয়েছে, প্রযুক্তি কেবল একটি হাতিয়ার — এর সঠিক ব্যবহারের বিবেক শিক্ষা ও পরিবার থেকেই আসতে হবে।",
            en: "The last paragraph says technology is only a tool — the wisdom to use it must grow in classrooms and homes.",
            hi: "आख़िरी अंश कहता है कि तकनीक केवल एक औज़ार है — इसे ठीक से चलाने का विवेक स्कूल और घर से आना चाहिए।",
          },
        },
      ],
    },
  },
];
