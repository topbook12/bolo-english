// ─── Reading library seeds v1: BEGINNER (A1–A2) ───
// Part of Task 11 (library enrichment). 6 standalone-style reading passages.
// English paragraphs are the learning content (simple present/past only,
// sentences ≤ 12 words, 5 paragraphs, 180–230 words each); every paragraph
// carries a faithful bn + hi assist translation. Title/summary/vocab meanings/
// quiz are TriText with bn primary.
//
// Entries: 1 Rafi & the lost puppy (story · daily) · 2 bus counter dialog
// (travel) · 3 letter to uncle (work) · 4 Pohela Boishakh diary (culture) ·
// 5 why-does-it-rain article (science) · 6 grandfather's mango tree
// (story · inspire, standalone).
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

export const SEED_READING_V1_BEGINNER: SeedReadingEntry[] = [
  /* ── unit 1 · read-b1-puppy · story · daily ───────────────────────── */
  {
    slug: "read-b1-puppy",
    level: "beginner",
    category: "daily",
    minutes: 3,
    unit: 1,
    data: {
      title: {
        bn: "রাফি আর হারানো কুকুরছানা",
        en: "Rafi and the Lost Puppy",
        hi: "राफ़ी और खोया हुआ पिल्ला",
      },
      summary: {
        bn: "বৃষ্টির সন্ধ্যায় চট্টগ্রামের কিশোর রাফি রাস্তার পাশে একটা ভেজা কুকুরছানা খুঁজে পায়। সে তার যত্ন নেয় আর শেষমেশ কুকুরছানাটার আসল মালিককে খুঁজে দেয়।",
        en: "One rainy evening in Chattogram, a boy named Rafi finds a wet little puppy by the road. He takes care of it and finally finds its real owner.",
        hi: "चट्टग्राम में बरसात की एक शाम, राफ़ी नाम का एक लड़का सड़क किनारे एक भीगा हुआ पिल्ला ढूँढता है। वह उसका ख़याल रखता है और आख़िरकार उसका असली मालिक ढूँढ देता है।",
      },
      genre: "story" as LibraryReadingGenre,
      paragraphs: [
        {
          en: "Rafi is a young boy from Chattogram. One evening, he walks home after football practice. The sky is dark, and rain begins to fall. Rafi runs under a big tree near the road. He hears a small cry. It is a little puppy, wet and cold.",
          bn: "রাফি চট্টগ্রামের এক কিশোর ছেলে। এক সন্ধ্যায় ফুটবল খেলা শেষ করে সে বাড়ি ফিরছে। আকাশ কালো হয়ে এল, আর বৃষ্টি নামতে শুরু করল। রাফি রাস্তার পাশের একটা বড় গাছের নিচে দৌড়ে গেল। হঠাৎ সে ছোট্ট একটা কান্নার শব্দ শুনতে পেল। দেখে — একটা কুকুরছানা, ভেজা আর ঠান্ডা।",
          hi: "राफ़ी चट्टग्राम का एक छोटा लड़का है। एक शाम वह फुटबॉल की प्रैक्टिस के बाद घर लौट रहा है। आकाश काला हो आता है, और बारिश शुरू हो जाती है। राफ़ी सड़क किनारे एक बड़े पेड़ के नीचे भाग जाता है। उसे छोटी-सी एक आवाज़ सुनाई देती है। यह एक छोटा पिल्ला है — भीगा हुआ और ठंडा।",
        },
        {
          en: "Rafi takes off his shirt and covers the puppy. He carries it home very carefully. His mother opens the door and smiles. \"Keep it for one night,\" she says. Rafi dries the puppy with a soft towel. Then he gives it warm milk.",
          bn: "রাফি নিজের শার্টটা খুলে কুকুরছানাটাকে মুড়ে দিল। খুব সাবধানে সে একে কোলে করে বাড়ি নিয়ে এল। মা দরজা খুলে হাসলেন। তিনি বললেন, 'এক রাত একে রেখে দে।' রাফি নরম একটা তোয়ালে দিয়ে কুকুরছানাটাকে মুছিয়ে শুকিয়ে দিল। তারপর তাকে গরম দুধ খেতে দিল।",
          hi: "राफ़ी ने अपनी शर्ट उतारकर पिल्ले को ढक दिया। वह उसे बहुत सावधानी से उठाकर घर ले आया। माँ दरवाज़ा खोलकर मुस्कुराई। उन्होंने कहा, 'इसे एक रात के लिए रख लो।' राफ़ी ने एक मुलायम तौलिये से पिल्ले को सुखाया। फिर उसे गर्म दूध पिलाया।",
        },
        {
          en: "The puppy sleeps in a small basket that night. In the morning, it looks much better. Its tail moves up and down. Rafi makes a sign with black ink. He writes: \"Puppy found. Call this number.\" Then he puts the sign near the shop.",
          bn: "সেই রাতে কুকুরছানাটা ঘুমাল ছোট্ট একটা ঝুড়িতে। সকালে দেখে সে অনেকটা ভালো হয়ে গেছে। তার লেজটা নাচছে ওঠা-নামা করে। রাফি কালি দিয়ে একটা লেখা তৈরি করল। লিখল, 'কুকুরছানা পাওয়া গেছে। এই নম্বরে ফোন করুন।' তারপর লেখাটা দোকানের পাশে লাগিয়ে দিল।",
          hi: "उस रात पिल्ला एक छोटी टोकरी में सो गया। सुबह वह काफ़ी बेहतर दिखने लगा। उसकी पूँछ ऊपर-नीचे हिल रही थी। राफ़ी ने काली स्याही से एक पर्चा बनाया। उसने लिखा, 'पिल्ला मिल गया है। इस नंबर पर फ़ोन करें।' फिर वह पर्चा दुकान के पास लगा दिया।",
        },
        {
          en: "In the afternoon, a phone call comes. An old man speaks. \"Thank you, my boy. That puppy is my friend.\" Rafi and the man meet near the shop. The puppy jumps with joy. The man gives Rafi some chocolate as a gift.",
          bn: "বিকেলে একটা ফোন আসে। বয়স্ক এক লোক কথা বলে। তিনি বলেন, 'ধন্যবাদ, ছেলে। ওই কুকুরছানাটা আমার বন্ধু।' রাফি আর লোকটা দোকানের পাশে দেখা করল। কুকুরছানাটা খুশিতে লাফাতে লাগল। লোকটা উপহার হিসেবে রাফিকে কিছু চকলেট দিলেন।",
          hi: "दोपहर में एक फ़ोन आता है। एक बूढ़े आदमी बात करते हैं। वे कहते हैं, 'धन्यवाद, बेटा। वह पिल्ला मेरा दोस्त है।' राफ़ी और वह आदमी दुकान के पास मिले। पिल्ला ख़ुशी से उछलने लगा। उस आदमी ने राफ़ी को तोहफ़े में कुछ चॉकलेट दिया।",
        },
        {
          en: "Rafi feels a little sad, but also very happy. He walks home in the evening sun. His mother asks, \"Are you all right?\" Rafi smiles and says, \"Yes.\" \"I helped a small friend,\" he says. \"Now he is safe at home.\"",
          bn: "রাফির মনটা একটু খারাপ, তবু ভীষণ খুশি। সন্ধ্যার রোদে সে হাঁটতে হাঁটতে বাড়ি ফিরছে। মা জিজ্ঞেস করলেন, 'তুই ঠিক আছিস তো?' রাফি হেসে বলল, 'হ্যাঁ।' 'আমি ছোট্ট এক বন্ধুর সাহায্য করেছি,' সে বলল। 'এখন সে বাড়িতে নিরাপদে আছে।'",
          hi: "राफ़ी का मन थोड़ा उदास है, पर वह बहुत ख़ुश भी है। शाम की धूप में वह पैदल घर लौट रहा है। माँ ने पूछा, 'तुम ठीक हो?' राफ़ी मुस्कुराकर बोला, 'हाँ।' 'मैंने एक छोटे दोस्त की मदद की,' उसने कहा। 'अब वह घर पर सुरक्षित है।'",
        },
      ],
      vocabulary: [
        {
          word: "puppy",
          meaning: {
            bn: "কুকুরছানা — ছোট্ট, বাচ্চা কুকুর",
            en: "a baby dog",
            hi: "पिल्ला — कुत्ते का छोटा बच्चा",
          },
          example: "The little puppy sleeps in my lap.",
        },
        {
          word: "rain",
          meaning: {
            bn: "বৃষ্টি — আকাশ থেকে নামা পানি",
            en: "water that falls from the sky",
            hi: "बारिश — आकाश से गिरने वाला पानी",
          },
          example: "I take an umbrella when rain falls.",
        },
        {
          word: "towel",
          meaning: {
            bn: "তোয়ালে — শরীর বা চুল মোছার কাপড়",
            en: "a cloth for drying things",
            hi: "तौलिया — सुखाने के काम आने वाला कपड़ा",
          },
          example: "Please give me a clean towel.",
        },
        {
          word: "basket",
          meaning: {
            bn: "ঝুড়ি — বাঁশ বা প্লাস্টিকের বোনা বাক্স",
            en: "an open container for carrying things",
            hi: "टोकरी — सामान रखने का खुला डिब्बा",
          },
          example: "Mother keeps fruit in a basket.",
        },
        {
          word: "milk",
          meaning: {
            bn: "দুধ — গাভীর দেওয়া সাদা পানীয়",
            en: "the white drink from cows",
            hi: "दूध — गाय से मिलने वाला सफ़ेद पेय",
          },
          example: "I drink a glass of milk at night.",
        },
        {
          word: "joy",
          meaning: {
            bn: "আনন্দ — ভীষণ খুশির অনুভূতি",
            en: "a feeling of great happiness",
            hi: "ख़ुशी — बहुत बड़ी प्रसन्नता का भाव",
          },
          example: "The children jumped with joy.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "রাফি কোথায় কুকুরছানাটাকে খুঁজে পায়?",
            en: "Where does Rafi find the puppy?",
            hi: "राफ़ी को पिल्ला कहाँ मिलता है?",
          },
          options: [
            { bn: "স্কুলের মাঠে", en: "On the school field", hi: "स्कूल के मैदान पर" },
            { bn: "রাস্তার পাশের বড় গাছের নিচে", en: "Under a big tree near the road", hi: "सड़क किनारे बड़े पेड़ के नीचे" },
            { bn: "বাড়ির বারান্দায়", en: "On the veranda at home", hi: "घर की बरामदे में" },
            { bn: "দোকানের ভেতরে", en: "Inside the shop", hi: "दुकान के अंदर" },
          ],
          answer: 1,
          explain: {
            bn: "প্রথম অনুচ্ছেদে লেখা — রাফি রাস্তার পাশের বড় গাছের নিচে দৌড়ে গিয়ে ভেজা কুকুরছানাটাকে দেখে।",
            en: "The first paragraph says Rafi runs under a big tree near the road and finds the wet puppy there.",
            hi: "पहला अनुच्छेद कहता है कि राफ़ी सड़क किनारे बड़े पेड़ के नीचे भागता है और वहीं भीगा पिल्ला देखता है।",
          },
        },
        {
          question: {
            bn: "রাফি কুকুরছানাটাকে কী খেতে দেয়?",
            en: "What does Rafi give the puppy?",
            hi: "राफ़ी पिल्ले को क्या देता है?",
          },
          options: [
            { bn: "ঠান্ডা পানি", en: "Cold water", hi: "ठंडा पानी" },
            { bn: "বিস্কুট", en: "Biscuits", hi: "बिस्कुट" },
            { bn: "গরম দুধ", en: "Warm milk", hi: "गर्म दूध" },
            { bn: "চকলেট", en: "Chocolate", hi: "चॉकलेट" },
          ],
          answer: 2,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে রাফি তোয়ালে দিয়ে মুছিয়ে কুকুরছানাটাকে গরম দুধ খেতে দেয়।",
            en: "In the second paragraph, Rafi dries the puppy and gives it warm milk.",
            hi: "दूसरे अनुच्छेद में राफ़ी पिल्ले को तौलिये से सुखाकर गर्म दूध पिलाता है।",
          },
        },
        {
          question: {
            bn: "সেই রাতে কুকুরছানাটা কোথায় ঘুমায়?",
            en: "Where does the puppy sleep that night?",
            hi: "उस रात पिल्ला कहाँ सोता है?",
          },
          options: [
            { bn: "রাফির বিছানায়", en: "In Rafi's bed", hi: "राफ़ी के बिस्तर पर" },
            { bn: "ছোট্ট একটা ঝুড়িতে", en: "In a small basket", hi: "एक छोटी टोकरी में" },
            { bn: "বারান্দার মাদুরে", en: "On the veranda mat", hi: "बरामदे की चटाई पर" },
            { bn: "মায়ের কোলে", en: "In mother's lap", hi: "माँ की गोद में" },
          ],
          answer: 1,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদের প্রথম বাক্য — 'সেই রাতে কুকুরছানাটা ঘুমাল ছোট্ট একটা ঝুড়িতে।'",
            en: "The first sentence of paragraph three: 'The puppy sleeps in a small basket that night.'",
            hi: "तीसरे अनुच्छेद का पहला वाक्य — 'उस रात पिल्ला एक छोटी टोकरी में सो गया।'",
          },
        },
        {
          question: {
            bn: "রাফির লেখায় কী লেখা ছিল?",
            en: "What did Rafi write on the sign?",
            hi: "राफ़ी ने पर्चे पर क्या लिखा?",
          },
          options: [
            { bn: "'কুকুরছানা পাওয়া গেছে। এই নম্বরে ফোন করুন।'", en: "'Puppy found. Call this number.'", hi: "'पिल्ला मिल गया है। इस नंबर पर फ़ोन करें।'" },
            { bn: "'বিক্রির জন্য কুকুরছানা'", en: "'Puppy for sale'", hi: "'बिक्री के लिए पिल्ला'" },
            { bn: "'খোয়া গেছে — খোঁজার জন্য পুরস্কার'", en: "'Lost — reward for news'", hi: "'खो गया — ख़बर देने पर इनाम'" },
            { bn: "'কুকুরছানার জন্য একটা বাড়ি চাই'", en: "'A home wanted for a puppy'", hi: "'पिल्ले के लिए एक घर चाहिए'" },
          ],
          answer: 0,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে রাফি কালি দিয়ে লেখাটা লিখে দোকানের পাশে লাগিয়ে দেয়।",
            en: "In paragraph three, Rafi writes the sign in black ink and puts it near the shop.",
            hi: "तीसरे अनुच्छेद में राफ़ी काली स्याही से पर्चा लिखकर उसे दुकान के पास लगाता है।",
          },
        },
        {
          question: {
            bn: "বয়স্ক লোকটা উপহার হিসেবে রাফিকে কী দেন?",
            en: "What does the old man give Rafi as a gift?",
            hi: "बूढ़ा आदमी राफ़ी को तोहफ़े में क्या देता है?",
          },
          options: [
            { bn: "কিছু টাকা", en: "Some money", hi: "कुछ पैसे" },
            { bn: "একটা নতুন ফুটবল", en: "A new football", hi: "एक नया फुटबॉल" },
            { bn: "একটা গরম কোট", en: "A warm coat", hi: "एक गर्म कोट" },
            { bn: "কিছু চকলেট", en: "Some chocolate", hi: "कुछ चॉकलेट" },
          ],
          answer: 3,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে লেখা — লোকটা উপহার হিসেবে রাফিকে কিছু চকলেট দেন।",
            en: "Paragraph four says the man gives Rafi some chocolate as a gift.",
            hi: "चौथा अनुच्छेद कहता है कि वह आदमी राफ़ी को तोहफ़े में कुछ चॉकलेट देता है।",
          },
        },
      ],
    },
  },

  /* ── unit 2 · read-b1-bus · dialog · travel ───────────────────────── */
  {
    slug: "read-b1-bus",
    level: "beginner",
    category: "travel",
    minutes: 2,
    unit: 2,
    data: {
      title: {
        bn: "বাস কাউন্টারে",
        en: "At the Bus Counter",
        hi: "बस काउंटर पर",
      },
      summary: {
        bn: "নিনা কাল সকালে আপুর সঙ্গে কক্সবাজার যাওয়ার টিকিট কিটে কাউন্টারের কেরানির সঙ্গে সময়, ভাড়া আর সিট নিয়ে কথা বলে।",
        en: "Nina buys tickets for tomorrow's trip to Cox's Bazar. At the counter, she talks with the clerk about the time, the price, and the seats.",
        hi: "नीना कल कक्सबाज़ार की यात्रा के लिए टिकट खरीदती है। काउंटर पर वह क्लर्क से समय, क़ीमत और सीटों के बारे में बात करती है।",
      },
      genre: "dialog" as LibraryReadingGenre,
      paragraphs: [
        {
          en: "Nina: Good morning. I want two tickets to Cox's Bazar, please. My sister and I travel tomorrow morning. Can we sit near the window? We like to watch the road.",
          bn: "নিনা: শুভ সকাল। দুটো কক্সবাজারের টিকিট দিন, প্লিজ। আমি আর আমার আপু কাল সকালে যাচ্ছি। জানালার পাশে বসা যাবে তো? আমরা রাস্তার দিকে তাকিয়ে দেখতে ভালোবাসি।",
          hi: "नीना: सुप्रभात। दो कक्सबाज़ार के टिकट दीजिए, प्लीज़। मैं और मेरी बहन कल सुबह जाएँगी। क्या हम खिड़की के पास बैठ सकती हैं? हमें रास्ता देखना अच्छा लगता है।",
        },
        {
          en: "Clerk: Good morning, madam. Window seats are no problem. Which bus do you like? Our morning coach leaves at seven from gate five. Our night coach leaves at ten. Most people take the morning coach. You get snacks at gate five too.",
          bn: "কেরানি: শুভ সকাল, ম্যাডাম। জানালার পাশের সিটে কোনো সমস্যা নেই। কোন বাসটা নেবেন? সকালের কোচটা সাতটায় পাঁচ নম্বর গেট থেকে ছাড়ে। রাতের কোচটা ছাড়ে দশটায়। বেশিরভাগ মানুষ সকালের কোচটাই নেন। পাঁচ নম্বর গেটে নাস্তাও পাওয়া যায়।",
          hi: "क्लर्क: सुप्रभात, मैडम। खिड़की वाली सीटों में कोई दिक्कत नहीं। आप कौन-सी बस लेंगी? हमारी सुबह की कोच सात बजे गेट नंबर पाँच से छूटती है। रात की कोच दस बजे छूटती है। ज़्यादातर लोग सुबह की कोच ही लेते हैं। गेट पाँच पर नाश्ता भी मिल जाता है।",
        },
        {
          en: "Nina: The morning coach, please. How long is the journey? My sister and I want to see the beach in the afternoon. Does the bus stop for lunch on the way? My sister sleeps in moving buses!",
          bn: "নিনা: সকালের কোচটাই দিন। পুরো যাত্রায় কত সময় লাগে? বিকেলে আমরা আপুকে সমুদ্রসৈকতে নিয়ে যেতে চাই। পথে বাস কি দুপুরের খাবারের জন্য দাঁড়ায়? চলন্ত বাসে আমার আপু ঘুমিয়ে পড়েন!",
          hi: "नीना: सुबह की कोच दीजिए। पूरी यात्रा में कितना समय लगता है? दोपहर में हम बहन को समुद्र तट पर ले जाना चाहती हैं। क्या रास्ते में बस दोपहर के खाने के लिए रुकती है? चलती बस में मेरी बहन सो जाती है!",
        },
        {
          en: "Clerk: It takes about nine hours, madam. The coach reaches Cox's Bazar at four in the afternoon. Yes, it stops for one hour at a good hotel. One ticket is nine hundred and fifty taka. So two tickets are one thousand nine hundred taka. The price includes water for the road.",
          bn: "কেরানি: সময় লাগে প্রায় নয় ঘণ্টা, ম্যাডাম। কোচটা বিকেল চারটায় কক্সবাজারে পৌঁছে। হ্যাঁ, পথে ভালো একটা হোটেলে এক ঘণ্টা দাঁড়ায়। এক টিকিটের দাম নয়শো পঞ্চাশ টাকা। তাহলে দুটো টিকিটে লাগবে উনিশশো টাকা। ভাড়ার সঙ্গে পথের পানিও আছে।",
          hi: "क्लर्क: इसमें लगभग नौ घंटे लगते हैं, मैडम। कोच दोपहर चार बजे कक्सबाज़ार पहुँचती है। हाँ, रास्ते में वह एक अच्छे होटल पर एक घंटा रुकती है। एक टिकट की क़ीमत नौ सौ पचास टका है। तो दो टिकटों में लगेंगे उन्नीस सौ टका। किराए में रास्ते का पानी भी शामिल है।",
        },
        {
          en: "Nina: Here is the money. Thank you for your kind help. Please give us seats C two and C three. We come to gate five at half past six. Goodbye! Have a good day!",
          bn: "নিনা: টাকাটা নিন। আপনার এত ভালো সাহায্যের জন্য ধন্যবাদ। সি টু আর সি থ্রি নম্বর সিট দুটো দিন। আমরা পৌনে সাতটায় পাঁচ নম্বর গেটে চলে আসব। বিদায়! আপনার দিন ভালো যাক!",
          hi: "नीना: पैसे लीजिए। आपकी इतनी अच्छी मदद के लिए धन्यवाद। हमें सी टू और सी थ्री नंबर की सीटें दीजिए। हम साढ़े छह बजे गेट नंबर पाँच पर आ जाएँगी। अलविदा! आपका दिन अच्छा बीते!",
        },
      ],
      vocabulary: [
        {
          word: "window",
          meaning: {
            bn: "জানালা — দেয়াল বা বাসের কাচের ফাঁকা জায়গা, যেখান দিয়ে বাইরে দেখা যায়",
            en: "the glass opening in a wall or bus",
            hi: "खिड़की — दीवार या बस में शीशे वाला हिस्सा",
          },
          example: "I sit beside the window in class.",
        },
        {
          word: "coach",
          meaning: {
            bn: "কোচ — লম্বা, আরামদায়ক যাত্রীবাহী বাস",
            en: "a long, comfortable bus",
            hi: "कोच — एक लंबी, आरामदायक बस",
          },
          example: "Our coach has soft seats.",
        },
        {
          word: "journey",
          meaning: {
            bn: "যাত্রা — এক জায়গা থেকে আরেক জায়গায় যাওয়া",
            en: "a trip from one place to another",
            hi: "यात्रा — एक जगह से दूसरी जगह जाना",
          },
          example: "The journey from Dhaka takes nine hours.",
        },
        {
          word: "gate",
          meaning: {
            bn: "গেট — বড় ফটক বা প্রবেশপথ",
            en: "a big door or entrance",
            hi: "गेट — बड़ा दरवाज़ा या प्रवेश द्वार",
          },
          example: "Meet me at gate number two.",
        },
        {
          word: "beach",
          meaning: {
            bn: "সমুদ্রসৈকত — সমুদ্রের ধারের বালুকাময় জায়গা",
            en: "the sandy land beside the sea",
            hi: "समुद्र तट — समुद्र के किनारे की रेतीली ज़मीन",
          },
          example: "We make sandcastles on the beach.",
        },
        {
          word: "lunch",
          meaning: {
            bn: "দুপুরের খাবার — দুপুরে খাওয়া খানা",
            en: "the food we eat at midday",
            hi: "दोपहर का भोजन — दोपहर में खाया जाने वाला खाना",
          },
          example: "We eat rice and fish for lunch.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "নিনা কোথায় যেতে চায়?",
            en: "Where does Nina want to go?",
            hi: "नीना कहाँ जाना चाहती है?",
          },
          options: [
            { bn: "চট্টগ্রাম", en: "Chattogram", hi: "चट्टग्राम" },
            { bn: "সিলেট", en: "Sylhet", hi: "सिलेट" },
            { bn: "কক্সবাজার", en: "Cox's Bazar", hi: "कक्सबाज़ार" },
            { bn: "ঢাকা", en: "Dhaka", hi: "ढाका" },
          ],
          answer: 2,
          explain: {
            bn: "নিনার প্রথম কথাই ছিল — 'দুটো কক্সবাজারের টিকিট দিন, প্লিজ।'",
            en: "Nina's first line is: 'I want two tickets to Cox's Bazar, please.'",
            hi: "नीना की पहली बात ही थी — 'दो कक्सबाज़ार के टिकट दीजिए, प्लीज़।'",
          },
        },
        {
          question: {
            bn: "সকালের কোচ কয়টায় ছাড়ে?",
            en: "When does the morning coach leave?",
            hi: "सुबह की कोच कितने बजे छूटती है?",
          },
          options: [
            { bn: "সাতটায়", en: "At seven", hi: "सात बजे" },
            { bn: "ন'টায়", en: "At nine", hi: "नौ बजे" },
            { bn: "দশটায়", en: "At ten", hi: "दस बजे" },
            { bn: "চারটায়", en: "At four", hi: "चार बजे" },
          ],
          answer: 0,
          explain: {
            bn: "কেরানি বলেন — সকালের কোচ সাতটায় পাঁচ নম্বর গেট থেকে ছাড়ে।",
            en: "The clerk says the morning coach leaves at seven from gate five.",
            hi: "क्लर्क कहता है कि सुबह की कोच सात बजे गेट नंबर पाँच से छूटती है।",
          },
        },
        {
          question: {
            bn: "পুরো যাত্রায় কত সময় লাগে?",
            en: "How long does the journey take?",
            hi: "पूरी यात्रा में कितना समय लगता है?",
          },
          options: [
            { bn: "প্রায় তিন ঘণ্টা", en: "About three hours", hi: "लगभग तीन घंटे" },
            { bn: "প্রায় ছয় ঘণ্টা", en: "About six hours", hi: "लगभग छह घंटे" },
            { bn: "প্রায় নয় ঘণ্টা", en: "About nine hours", hi: "लगभग नौ घंटे" },
            { bn: "প্রায় বারো ঘণ্টা", en: "About twelve hours", hi: "लगभग बारह घंटे" },
          ],
          answer: 2,
          explain: {
            bn: "কেরানির উত্তর: 'সময় লাগে প্রায় নয় ঘণ্টা' — কোচ বিকেল চারটায় পৌঁছে।",
            en: "The clerk answers: 'It takes about nine hours' — the coach reaches at four in the afternoon.",
            hi: "क्लर्क का जवाब: 'इसमें लगभग नौ घंटे लगते हैं' — कोच दोपहर चार बजे पहुँचती है।",
          },
        },
        {
          question: {
            bn: "দুটো টিকিটের মোট ভাড়া কত?",
            en: "How much are two tickets in total?",
            hi: "दो टिकटों की कुल क़ीमत कितनी है?",
          },
          options: [
            { bn: "নয়শো পঞ্চাশ টাকা", en: "Nine hundred and fifty taka", hi: "नौ सौ पचास टका" },
            { bn: "এক হাজার টাকা", en: "One thousand taka", hi: "एक हज़ार टका" },
            { bn: "উনিশশো টাকা", en: "One thousand nine hundred taka", hi: "उन्नीस सौ टका" },
            { bn: "দুই হাজার টাকা", en: "Two thousand taka", hi: "दो हज़ार टका" },
          ],
          answer: 2,
          explain: {
            bn: "এক টিকিট নয়শো পঞ্চাশ টাকা, তাই দুটো টিকিটে লাগে উনিশশো টাকা।",
            en: "One ticket is nine hundred and fifty taka, so two tickets come to one thousand nine hundred taka.",
            hi: "एक टिकट नौ सौ पचास टका है, तो दो टिकटों में लगते हैं उन्नीस सौ टका।",
          },
        },
        {
          question: {
            bn: "পথে কোচটা এক ঘণ্টার জন্য কোথায় দাঁড়ায়?",
            en: "Where does the coach stop for one hour on the way?",
            hi: "रास्ते में कोच एक घंटा कहाँ रुकती है?",
          },
          options: [
            { bn: "একটা ধানক্ষেতের পাশে", en: "Beside a rice field", hi: "धान के खेत के पास" },
            { bn: "একটা ভালো হোটেলে", en: "At a good hotel", hi: "एक अच्छे होटल पर" },
            { bn: "একটা নদীর ধারে", en: "Beside a river", hi: "एक नदी किनारे" },
            { bn: "একটা গ্যারেজে", en: "At a garage", hi: "एक गैराज में" },
          ],
          answer: 1,
          explain: {
            bn: "কেরানির কথা — 'পথে ভালো একটা হোটেলে এক ঘণ্টা দাঁড়ায়।'",
            en: "The clerk says: 'It stops for one hour at a good hotel.'",
            hi: "क्लर्क कहता है — 'रास्ते में वह एक अच्छे होटल पर एक घंटा रुकती है।'",
          },
        },
      ],
    },
  },

  /* ── unit 3 · read-b1-letter · letter · work ──────────────────────── */
  {
    slug: "read-b1-letter",
    level: "beginner",
    category: "work",
    minutes: 3,
    unit: 3,
    data: {
      title: {
        bn: "চাচার নামে চিঠি",
        en: "A Letter to My Uncle",
        hi: "चाचा को एक चिट्ठी",
      },
      summary: {
        bn: "ছাত্রী তিশা চাচাকে চিঠি লেখে — স্কুলের পরে সে কীভাবে মায়ের দর্জির দোকানে কাজে সাহায্য করে, সেই গল্পই তার চিঠিতে।",
        en: "Tisha writes a letter to her uncle about her new work: she helps in her mother's tailoring shop after school.",
        hi: "तिशा अपने चाचा को चिट्ठी लिखती है अपने नए काम के बारे में: स्कूल के बाद वह माँ की सिलाई की दुकान में मदद करती है।",
      },
      genre: "letter" as LibraryReadingGenre,
      paragraphs: [
        {
          en: "Dear Uncle Rahman, How are you? I hope your village home is fine. Here in Dhaka, our family is well. I write about my new work. It is my big news this month.",
          bn: "প্রিয় চাচা রহমান, কেমন আছেন? আশা করি গ্রামের বাড়ি ভালো আছে। এই ঢাকায় আমাদের সবাই ভালো আছি। আজ লিখছি আমার নতুন কাজের কথা। এই মাসের আমার বড় খবর এটাই।",
          hi: "प्यारे चाचा रहमान, आप कैसे हैं? आशा है गाँव का घर ठीक होगा। यहाँ ढाका में हमारा परिवार अच्छा है। आज लिख रही हूँ अपने नए काम के बारे में। यही इस महीने की मेरी बड़ी ख़बर है।",
        },
        {
          en: "You know my mother has a tailoring shop. After school, I go there and help her. I give the cut cloth to the tailors. I also keep the small buttons in boxes. In the evening, I carry the finished dresses to the front table.",
          bn: "আপনি তো জানেন, আমার মায়ের একটা দর্জির দোকান আছে। স্কুল শেষ করে আমি সেখানে গিয়ে মায়ের কাজে হাত লাগাই। কাটা কাপড় দর্জিদের কাছে পৌঁছে দিই আমি। ছোট ছোট বাটনগুলো বাক্সে গুছিয়ে রাখি। সন্ধ্যায় সেলাই হয়ে যাওয়া জামাগুলো সামনের টেবিলে নিয়ে যাই।",
          hi: "आप तो जानते हैं, मेरी माँ की एक सिलाई की दुकान है। स्कूल के बाद मैं वहाँ जाकर माँ के काम में हाथ बँटाती हूँ। कटा हुआ कपड़ा दर्जियों तक पहुँचाती हूँ। छोटे-छोटे बटन डिब्बों में सजाकर रखती हूँ। शाम को सिले हुए कपड़े सामने की मेज़ पर ले जाती हूँ।",
        },
        {
          en: "At first, the work was hard. I made mistakes with the thread and the needles. Mother never got angry with me. She said, \"Learn slowly, my girl.\" Now my stitches are small and straight.",
          bn: "শুরুতে কাজটা ছিল কঠিন। সুতো আর ফ্রিতে আমি গাফিলতি করতাম। মা কখনো আমার ওপর রেগে যাননি। বলেছিলেন, 'আস্তে আস্তে শেখ, মা।' এখন আমার সেলাইয়ের ফোঁড়গুলো ছোট আর সোজা হয়।",
          hi: "शुरु में काम मुश्किल था। धागे और सुई में मुझसे ग़लतियाँ हो जाती थीं। माँ कभी मुझ पर नाराज़ नहीं हुईं। उन्होंने कहा था, 'धीरे-धीरे सीखो, बेटी।' अब मेरी सिलाई के टाँके छोटे और सीधे होते हैं।",
        },
        {
          en: "Last week, a customer wanted a new dress in two days. Mother and I worked late in the evening. On Friday, the customer smiled and paid us well. She said the dress was beautiful.",
          bn: "গত সপ্তাহে এক ক্রেতা দুই দিনের মধ্যে নতুন জামা চেয়েছিলেন। মা আর আমি রাত পর্যন্ত কাজ করলাম। শুক্রবারে ক্রেতা হাসলেন আর ভালো দামও দিলেন। তিনি বললেন, জামাটা খুব সুন্দর হয়েছে।",
          hi: "पिछले हफ़्ते एक ग्राहक दो दिन में नया कपड़ा चाहती थीं। माँ और मैं रात तक काम करते रहे। शुक्रवार को ग्राहक मुस्कुराईं और अच्छी क़ीमत भी दी। उन्होंने कहा कि कपड़ा बहुत सुंदर बना है।",
        },
        {
          en: "This work teaches me patience and care. I also save my money in a tin box. Next month, Mother wants to teach me cutting. Please visit us soon, Uncle. I want to show you my shop. With love, Tisha.",
          bn: "এই কাজ আমাকে ধৈর্য আর যত্ন শেখায়। উপার্জন করা টাকা টিনের বাক্সে জমাই আমি। আগামী মাসে মা কাটাকাটি শেখাতে চান। চাচা, তাড়াতাড়ি আমাদের কাছে এসো। আমার দোকানটা দেখাতে ইচ্ছে করছে। ভালোবাসা নিও, তিশা।",
          hi: "यह काम मुझे धैर्य और ख़याल रखना सिखाता है। कमाए हुए पैसे एक टीन के डिब्बे में जमा करती हूँ। अगले महीने माँ काटना सिखाना चाहती हैं। चाचा, जल्दी हमसे मिलने आइए। अपनी दुकान दिखाना चाहती हूँ। प्यार सहित, तिशा।",
        },
      ],
      vocabulary: [
        {
          word: "shop",
          meaning: {
            bn: "দোকান — জিনিস বিক্রি বা কাজ করার ছোট প্রতিষ্ঠান",
            en: "a small place that sells things or does work",
            hi: "दुकान — सामान बेचने या काम करने की छोटी जगह",
          },
          example: "The shop opens at nine in the morning.",
        },
        {
          word: "cloth",
          meaning: {
            bn: "কাপড় — জামা-কাপড় সেলাই করার উপাদান",
            en: "material for making clothes",
            hi: "कपड़ा — कपड़े बनाने की सामग्री",
          },
          example: "Mother buys cloth from the market.",
        },
        {
          word: "buttons",
          meaning: {
            bn: "বাটন — জামার সামনে লাগানো ছোট ছোট গোল বস্তু",
            en: "small round things that close a shirt",
            hi: "बटन — कमीज़ बंद करने की छोटी गोल चीज़ें",
          },
          example: "One button of my shirt is lost.",
        },
        {
          word: "thread",
          meaning: {
            bn: "সুতো — পাতলা দড়ি, যা দিয়ে সেলাই করা হয়",
            en: "thin string for sewing",
            hi: "धागा — सिलाई के लिए पतला सूत्र",
          },
          example: "The thread is too short for this needle.",
        },
        {
          word: "customer",
          meaning: {
            bn: "ক্রেতা — দোকান থেকে জিনিস কেনে যে মানুষ",
            en: "a person who buys from a shop",
            hi: "ग्राहक — जो दुकान से सामान ख़रीदता है",
          },
          example: "The customer wants a blue shirt.",
        },
        {
          word: "patience",
          meaning: {
            bn: "ধৈর্য — ধীরে ধীরে অপেক্ষা করার ক্ষমতা",
            en: "the power to wait calmly",
            hi: "धैर्य — शांति से इंतज़ार करने की ताक़त",
          },
          example: "Reading small words needs patience.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "তিশা কার দোকানে সাহায্য করে?",
            en: "Whose shop does Tisha help in?",
            hi: "तिशा किसकी दुकान में मदद करती है?",
          },
          options: [
            { bn: "তার মায়ের", en: "Her mother's", hi: "अपनी माँ की" },
            { bn: "তার চাচার", en: "Her uncle's", hi: "अपने चाचा की" },
            { bn: "তার বাবার", en: "Her father's", hi: "अपने पिता की" },
            { bn: "পাশের বাড়ির কাকার", en: "Their neighbour's", hi: "पड़ोसी की" },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে তিশা লেখে — তার মায়ের একটা দর্জির দোকান আছে।",
            en: "In paragraph two Tisha writes that her mother has a tailoring shop.",
            hi: "दूसरे अनुच्छेद में तिशा लिखती है कि उसकी माँ की एक सिलाई की दुकान है।",
          },
        },
        {
          question: {
            bn: "তিশা বাক্সে কী গুছিয়ে রাখে?",
            en: "What does Tisha keep in boxes?",
            hi: "तिशा डिब्बों में क्या रखती है?",
          },
          options: [
            { bn: "সুতো", en: "Thread", hi: "धागे" },
            { bn: "বাটন", en: "Buttons", hi: "बटन" },
            { bn: "কাঁচি", en: "Scissors", hi: "कैंची" },
            { bn: "কাপড়", en: "Cloth", hi: "कपड़े" },
          ],
          answer: 1,
          explain: {
            bn: "তিশার চিঠিতে লেখা — 'ছোট ছোট বাটনগুলো বাক্সে গুছিয়ে রাখি।'",
            en: "Tisha writes: 'I also keep the small buttons in boxes.'",
            hi: "तिशा लिखती है — 'छोटे-छोटे बटन डिब्बों में सजाकर रखती हूँ।'",
          },
        },
        {
          question: {
            bn: "গত সপ্তাহে ক্রেতা কী চেয়েছিলেন?",
            en: "What did the customer want last week?",
            hi: "पिछले हफ़्ते ग्राहक क्या चाहती थीं?",
          },
          options: [
            { bn: "দুই দিনের মধ্যে নতুন জামা", en: "A new dress in two days", hi: "दो दिन में नया कपड़ा" },
            { bn: "তিন দিনের মধ্যে নতুন প্যান্ট", en: "New trousers in three days", hi: "तीन दिन में नई पतलून" },
            { bn: "এক দিনের মধ্যে স্কুলড্রেস", en: "A school dress in one day", hi: "एक दिन में स्कूल की ड्रेस" },
            { bn: "এক সপ্তাহে শাড়ি", en: "A sari in a week", hi: "एक हफ़्ते में साड़ी" },
          ],
          answer: 0,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে লেখা — ক্রেতা দুই দিনের মধ্যে নতুন জামা চেয়েছিলেন।",
            en: "Paragraph four says the customer wanted a new dress in two days.",
            hi: "चौथा अनुच्छेद कहता है कि ग्राहक दो दिन में नया कपड़ा चाहती थीं।",
          },
        },
        {
          question: {
            bn: "আগামী মাসে তিশা কী শিখতে যাচ্ছে?",
            en: "What will Tisha learn next month?",
            hi: "अगले महीने तिशा क्या सीखेगी?",
          },
          options: [
            { bn: "হিসেব রাখা", en: "Keeping accounts", hi: "हिसाब रखना" },
            { bn: "ইস্তিরি করা", en: "Ironing", hi: "इस्तीरी करना" },
            { bn: "কাটাকাটি", en: "Cutting cloth", hi: "कपड़ा काटना" },
            { bn: "প্যাকেট করা", en: "Packing", hi: "पैकिंग करना" },
          ],
          answer: 2,
          explain: {
            bn: "শেষ অনুচ্ছেদে লেখা — আগামী মাসে মা তাকে কাটাকাটি শেখাতে চান।",
            en: "The last paragraph says Mother wants to teach her cutting next month.",
            hi: "आख़िरी अनुच्छेद कहता है कि अगले महीने माँ उसे काटना सिखाना चाहती हैं।",
          },
        },
        {
          question: {
            bn: "এই কাজ তিশাকে কী শেখায়?",
            en: "What does this work teach Tisha?",
            hi: "यह काम तिशा को क्या सिखाता है?",
          },
          options: [
            { bn: "ধৈর্য আর যত্ন", en: "Patience and care", hi: "धैर्य और ख़याल" },
            { bn: "দৌড়ঝাঁপ আর লাফ", en: "Running and jumping", hi: "दौड़ना और छलाँग" },
            { bn: "রান্না আর বাজারকরা", en: "Cooking and shopping", hi: "पकाना और ख़रीदारी" },
            { bn: "গান আর আবৃত্তি", en: "Singing and reciting", hi: "गाना और पाठ" },
          ],
          answer: 0,
          explain: {
            bn: "শেষ অনুচ্ছেদের প্রথম বাক্য — 'এই কাজ আমাকে ধৈর্য আর যত্ন শেখায়।'",
            en: "The first sentence of the last paragraph: 'This work teaches me patience and care.'",
            hi: "आख़िरी अनुच्छेद का पहला वाक्य — 'यह काम मुझे धैर्य और ख़याल रखना सिखाता है।'",
          },
        },
      ],
    },
  },

  /* ── unit 4 · read-b1-boishakh · diary · culture ──────────────────── */
  {
    slug: "read-b1-boishakh",
    level: "beginner",
    category: "culture",
    minutes: 3,
    unit: 4,
    data: {
      title: {
        bn: "আমার প্রথম বৈশাখ",
        en: "My First Boishakh",
        hi: "मेरा पहला बैशाख",
      },
      summary: {
        bn: "পহেলা বৈশাখের ডায়েরি — নতুন শাড়ি, সকালের পান্তা-ইলিশ, নদীর ধারের মেলা আর হাসির পুতুলনাচ।",
        en: "A diary page about Pohela Boishakh — a new sari, panta-ilish breakfast, the fair by the river, and a funny puppet show.",
        hi: "पोहेला बैशाख की डायरी — नई साड़ी, पान्ता-इलिश का नाश्ता, नदी किनारे मेला और मज़ेदार कठपुतलियों का खेल।",
      },
      genre: "diary" as LibraryReadingGenre,
      paragraphs: [
        {
          en: "14 April. Dear Diary, today is a very happy day. It is Pohela Boishakh, the first day of the Bengali year. Mother woke me up before the sun. I wore a new red and white sari.",
          bn: "১৪ এপ্রিল। প্রিয় ডায়েরি, আজ দিনটা খুবই আনন্দের। আজ পহেলা বৈশাখ — বাংলা বছরের প্রথম দিন। মা সূর্য ওঠার আগেই আমায় তুলে দিলেন। আমি গেঁথে নতুন এক লাল-সাদা শাড়ি।",
          hi: "१४ अप्रैल। प्यारी डायरी, आज का दिन बहुत ख़ुशी का है। आज पोहेला बैशाख है — बंगाली नए साल का पहला दिन। माँ ने सूरज निकलने से पहले ही मुझे जगा दिया। मैंने नई लाल-सफ़ेद साड़ी पहनी।",
        },
        {
          en: "We ate panta-ilish for breakfast. It is soaked rice with fried hilsa fish. Father loves this old dish. At first, I did not like the cold rice. But with the green chilli and onion, it was tasty.",
          bn: "সকালে খেলাম পান্তা-ইলিশ। ভেজা ভাতের সঙ্গে ভাজা ইলিশ — এটাই সেই খাবার। বাবা এই পুরনো খানাটা ভীষণ ভালোবাসেন। শুরুতে ঠান্ডা ভাত মোটেই ভালো লাগেনি আমার। কিন্তু কাঁচা মরিচ আর পেঁয়াজের সঙ্গে জমে গেল!",
          hi: "नाश्ते में हमने पान्ता-इलिश खाया। भीगे चावल के साथ तली हुई इलिश मछली — यही वह व्यंजन है। पिता इस पुराने व्यंजन को बहुत पसंद करते हैं। शुरू में ठंडा चावल मुझे बिल्कुल पसंद नहीं आया। पर हरी मिर्च और प्याज़ के साथ स्वाद आ गया!",
        },
        {
          en: "After breakfast, we went to the big Boishakhi fair near the river. There were hundreds of people in white and red. Sellers called out in loud, happy voices. I bought two small clay birds and a paper mask.",
          bn: "নাস্তা সেরে আমরা গেলাম নদীর ধারের বড় বৈশাখী মেলায়। লাল-সাদা পোশাকে শত শত মানুষ ঠাসা ছিল সেখানে। দোকানিরা উঁচু গলায় আনন্দে ডাকছিলেন। আমি কিনলাম দুটো ছোট মাটির পাখি আর একটা কাগজের মুখোশ।",
          hi: "नाश्ता होने के बाद हम गए नदी किनारे लगे बड़े बैशाखी मेले में। वहाँ लाल-सफ़ेद कपड़ों में सैकड़ों लोग थे। दुकानदार ऊँची, ख़ुश आवाज़ में पुकार रहे थे। मैंने दो छोटे मिट्टी के पक्षी और एक कागज़ का मुखौटा ख़रीदा।",
        },
        {
          en: "In the afternoon, we watched a puppet show under a banyan tree. A puppet looked just like our neighbour Karim chacha! Everybody laughed and clapped. The puppet man moved the strings with quick, clever hands.",
          bn: "বিকেলে বটগাছের নিচে দেখলাম পুতুলনাচ। এক পুতুলের চেহারা হুবহু আমাদের প্রতিবেশী করিম চাচার মতো! সবাই হেসে দু'হাতে তালি দিল। পুতুলওয়ালা ফুরফুরে চটপটে হাতে সুতোগুলো নাড়ছিল।",
          hi: "दोपहर में बरगद के पेड़ के नीचे कठपुतलियों का खेल देखा। एक कठपुतली बिल्कुल हमारे पड़ोसी करीम चाचा जैसी दिखती थी! सब हँसे और दोनों हाथों से तालियाँ बजाईं। कठपुतली वाले ने फुरती भरे चतुर हाथों से डोरियाँ हिलाईं।",
        },
        {
          en: "At night, I was very tired but very happy. Mother gave me sweet curd for good luck in the new year. I made one small wish before sleep. I want to learn swimming this year. Good night, dear Diary.",
          bn: "রাতে ছিলাম ভীষণ ক্লান্ত, তবু ভীষণ খুশি। নতুন বছরের মঙ্গলকামনায় মা আমায় মিষ্টি দই খেতে দিলেন। ঘুমানোর আগে ছোট্ট একটা কামনা করলাম। এ বছর সাঁতার শিখব আমি। শুভ রাত্রি, প্রিয় ডায়েরি।",
          hi: "रात में मैं बहुत थक गई थी, पर बहुत ख़ुश भी थी। नए साल की अच्छी क़िस्मत के लिए माँ ने मुझे मीठा दही खिलाया। सोने से पहले एक छोटी-सी कामना की। इस साल मैं तैरना सीखूँगी। शुभ रात्रि, प्यारी डायरी।",
        },
      ],
      vocabulary: [
        {
          word: "fair",
          meaning: {
            bn: "মেলা — উৎসবে জমায়েত হওয়া দোকানপাট ও খেলাধুলার ভিড়",
            en: "a big outdoor market with fun and shows",
            hi: "मेला — ख़ुशी-मनाई के लिए लगने वाला बाज़ार",
          },
          example: "The village fair starts at noon.",
        },
        {
          word: "sari",
          meaning: {
            bn: "শাড়ি — বাঙালি নারীদের ঐতিহ্যবাহী পোশাক",
            en: "the traditional dress of Bengali women",
            hi: "साड़ी — बंगाली महिलाओं की पारंपरिक पोशाक",
          },
          example: "Mother wears a cotton sari to work.",
        },
        {
          word: "puppet",
          meaning: {
            bn: "পুতুল — সুতো টেনে নাচানো কাঠ-কাপড়ের তৈরি মানুষ",
            en: "a doll that moves with strings",
            hi: "कठपुतली — डोरी से नचाई जाने वाली गुड़िया",
          },
          example: "The puppet dances to the drum beat.",
        },
        {
          word: "mask",
          meaning: {
            bn: "মুখোশ — মুখে পরার ছদ্মবেশ",
            en: "a cover for the face",
            hi: "मुखौटा — चेहरे पर पहनने का आवरण",
          },
          example: "The boy wears a tiger mask.",
        },
        {
          word: "wish",
          meaning: {
            bn: "কামনা — মনের ভেতরের চাওয়া",
            en: "a hope in your heart",
            hi: "कामना — मन की इच्छा",
          },
          example: "Close your eyes and make a wish.",
        },
        {
          word: "curd",
          meaning: {
            bn: "দই — দুধ থেকে তৈরি টক-মিষ্টি ঘোলাটে খাবার",
            en: "a soft, sour food made from milk",
            hi: "दही — दूध से बना मुलायम, खट्टा भोजन",
          },
          example: "We eat sweet curd in summer.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "লেখিকা কী পরেছিল?",
            en: "What did the writer wear?",
            hi: "लेखिका ने क्या पहना था?",
          },
          options: [
            { bn: "নতুন লাল-সাদা শাড়ি", en: "A new red and white sari", hi: "नई लाल-सफ़ेद साड़ी" },
            { bn: "সাদা পাঞ্জাবি", en: "A white punjabi", hi: "सफ़ेद पंजाबी" },
            { bn: "নীল সালোয়ার-কামিজ", en: "A blue salwar kameez", hi: "नीली सलवार-कमीज़" },
            { bn: "পুরনো ধুতি", en: "An old dhoti", hi: "पुराना धोती" },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম অনুচ্ছেদে লেখা — লেখিকা গেঁথেছিল নতুন এক লাল-সাদা শাড়ি।",
            en: "The first paragraph says she wore a new red and white sari.",
            hi: "पहला अनुच्छेद कहता है कि उसने नई लाल-सफ़ेद साड़ी पहनी थी।",
          },
        },
        {
          question: {
            bn: "পান্তা-ইলিশ কী?",
            en: "What is panta-ilish?",
            hi: "पान्ता-इलिश क्या है?",
          },
          options: [
            { bn: "মিষ্টি দই আর চিড়া", en: "Sweet curd and flattened rice", hi: "मीठा दही और चिवड़ा" },
            { bn: "ভেজা ভাত আর ভাজা ইলিশ", en: "Soaked rice and fried hilsa", hi: "भीगा चावल और तली इलिश" },
            { bn: "ভাজা ভর্তা আর ভাত", en: "Fried mash and rice", hi: "तला भरता और चावल" },
            { bn: "খিচুড়ি আর ডিম", en: "Khichuri and eggs", hi: "खिचड़ी और अंडे" },
          ],
          answer: 1,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে ব্যাখ্যা আছে — পান্তা-ইলিশ মানে ভেজা ভাতের সঙ্গে ভাজা ইলিশ।",
            en: "Paragraph two explains: panta-ilish is soaked rice with fried hilsa fish.",
            hi: "दूसरा अनुच्छेद समझाता है — पान्ता-इलिश यानी भीगा चावल और तली हुई इलिश।",
          },
        },
        {
          question: {
            bn: "বৈশাখী মেলাটা কোথায় বসেছিল?",
            en: "Where was the Boishakhi fair?",
            hi: "बैशाखी मेला कहाँ लगा था?",
          },
          options: [
            { bn: "স্কুল মাঠে", en: "On the school field", hi: "स्कूल के मैदान पर" },
            { bn: "নদীর ধারে", en: "By the river", hi: "नदी किनारे" },
            { bn: "শহরের বাজারে", en: "In the town market", hi: "कस्बे के बाज़ार में" },
            { bn: "বটগাছের নিচে", en: "Under a banyan tree", hi: "बरगद के पेड़ के नीचे" },
          ],
          answer: 1,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে লেখা — মেলা বসেছিল নদীর ধারে।",
            en: "Paragraph three says the fair was near the river.",
            hi: "तीसरा अनुच्छेद कहता है कि मेला नदी किनारे लगा था।",
          },
        },
        {
          question: {
            bn: "লেখিকা মেলা থেকে কী কিনেছিল?",
            en: "What did the writer buy at the fair?",
            hi: "लेखिका ने मेले से क्या ख़रीदा?",
          },
          options: [
            { bn: "একটা কাগজের মুখোশ", en: "A paper mask", hi: "एक कागज़ का मुखौटा" },
            { bn: "দুটো মাটির পাখি", en: "Two clay birds", hi: "दो मिट्टी के पक्षी" },
            { bn: "দুটো মাটির পাখি আর একটা কাগজের মুখোশ", en: "Two clay birds and a paper mask", hi: "दो मिट्टी के पक्षी और एक कागज़ का मुखौटा" },
            { bn: "কিছুই কেননি", en: "Nothing at all", hi: "कुछ भी नहीं" },
          ],
          answer: 2,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদের শেষ বাক্যে দুটো জিনিসেরই উল্লেখ আছে।",
            en: "The last sentence of paragraph three mentions both things.",
            hi: "तीसरे अनुच्छेद के आख़िरी वाक्य में दोनों चीज़ों का ज़िक्र है।",
          },
        },
        {
          question: {
            bn: "নতুন বছরে লেখিকার কামনা কী ছিল?",
            en: "What was the writer's wish for the new year?",
            hi: "नए साल में लेखिका की कामना क्या थी?",
          },
          options: [
            { bn: "সাঁতার শেখা", en: "To learn swimming", hi: "तैरना सीखना" },
            { bn: "নতুন সাইকেল কেনা", en: "To buy a new cycle", hi: "नया साइकिल ख़रीदना" },
            { bn: "আবার মেলায় যাওয়া", en: "To visit the fair again", hi: "फिर मेले जाना" },
            { bn: "পুতুলনাচ শেখা", en: "To learn puppetry", hi: "कठपुतली का खेल सीखना" },
          ],
          answer: 0,
          explain: {
            bn: "শেষ অনুচ্ছেদে সে কামনা করে — 'এ বছর সাঁতার শিখব আমি।'",
            en: "In the last paragraph she wishes: 'I want to learn swimming this year.'",
            hi: "आख़िरी अनुच्छेद में वह कामना करती है — 'इस साल मैं तैरना सीखूँगी।'",
          },
        },
      ],
    },
  },

  /* ── unit 5 · read-b1-rain · article · science ────────────────────── */
  {
    slug: "read-b1-rain",
    level: "beginner",
    category: "science",
    minutes: 2,
    unit: 5,
    data: {
      title: {
        bn: "বৃষ্টি কেন পড়ে?",
        en: "Why Does It Rain?",
        hi: "बारिश क्यों होती है?",
      },
      summary: {
        bn: "সূর্য থেকে জলীয় বাষ্প, বাষ্প থেকে মেঘ, আর মেঘ থেকে বৃষ্টি — খুব সহজ ভাষায় বৃষ্টির গল্প।",
        en: "From the sun to water vapour, from vapour to clouds, and from clouds to rain — the story of rain in very simple words.",
        hi: "सूरज से जलवाष्प, वाष्प से बादल, और बादल से बारिश — बहुत आसान शब्दों में बारिश की कहानी।",
      },
      genre: "article" as LibraryReadingGenre,
      paragraphs: [
        {
          en: "Where does rain come from? The answer starts with the sun. Every morning, the sun shines on rivers, lakes, and the sea. The water becomes warm. Warm water is ready for a long journey.",
          bn: "বৃষ্টি আসে কোথা থেকে? উত্তরের শুরু সূর্য দিয়ে। প্রতিদিন সকালে সূর্য উজ্জ্বল হয়ে ওঠে নদী, পুকুর আর সমুদ্রের ওপর। পানি গরম হয়ে ওঠে। গরম পানি তখন দীর্ঘ এক যাত্রার জন্য প্রস্তুত।",
          hi: "बारिश आती है कहाँ से? जवाब की शुरुआत सूरज से होती है। हर सुबह सूरज नदियों, तालाबों और समुद्र पर चमकता है। पानी गर्म हो जाता है। गर्म पानी एक लंबी यात्रा के लिए तैयार होता है।",
        },
        {
          en: "Then a strange thing happens. The warm water turns into an invisible gas. We call this gas water vapour. Your eyes never see it, but it is there. The vapour is light, so it goes up into the sky. This change is called evaporation.",
          bn: "তারপর ঘটে অদ্ভুত এক ঘটনা। গরম পানি রূপ নেয় অদৃশ্য এক গ্যাসে। এই গ্যাসের নাম জলীয় বাষ্প। চোখে ওটা কোনোদিন দেখা যায় না, কিন্তু ওটা সেখানেই থাকে। বাষ্প হালকা বলে উঠে যায় আকাশের দিকে। এই পরিবর্তনের নাম বাষ্পীভবন।",
          hi: "फिर एक अजीब बात होती है। गर्म पानी एक अदृश्य गैस में बदल जाता है। इस गैस को जलवाष्प कहते हैं। उसे आँखें कभी नहीं देखतीं, पर वह वहीं होती है। वाष्प हल्की होती है, इसलिए आकाश की ओर ऊपर उठ जाती है। इस बदलाव को वाष्पीकरण कहते हैं।",
        },
        {
          en: "High in the sky, the air is cold. The cold air changes the vapour into very small drops of water. These drops are smaller than a pin. Millions of drops come together and form a cloud.",
          bn: "আকাশের অনেক ওপরে বাতাস থাকে ঠান্ডা। ঠান্ডা বাতাস বাষ্পকে বদলে দেয় ভীষণ ছোট ছোট পানির ফোঁটায়। ফোঁটাগুলো একটা পিনের চেয়েও ছোট। কোটি কোটি ফোঁটা জমাট বেঁধে তৈরি করে মেঘ।",
          hi: "आकाश में बहुत ऊँचाई पर हवा ठंडी होती है। ठंडी हवा वाष्प को बदल देती है बहुत छोटी-छोटी पानी की बूँदों में। ये बूँदें एक पिन से भी छोटी होती हैं। करोड़ों बूँदें मिलकर बनाती हैं बादल।",
        },
        {
          en: "In the cloud, the small drops join and grow big. Soon the drops are too heavy for the air. They fall down to the earth. This falling water is rain. Sometimes we hear thunder before the rain.",
          bn: "মেঘের ভেতরে ছোট ফোঁটাগুলো জোড়া লেগে বড় হতে থাকে। একসময় ফোঁটাগুলো বাতাসের জন্য অনেক ভারী হয়ে যায়। তখন তারা ঝরে পড়ে পৃথিবীর দিকে। এই ঝরে পড়া পানিই বৃষ্টি। মাঝে মাঝে বৃষ্টির আগে শোনা যায় গর্জনের শব্দ।",
          hi: "बादल में छोटी बूँदें जुड़कर बड़ी होने लगती हैं। जल्दी ही बूँदें हवा के लिए बहुत भारी हो जाती हैं। तब वे गिर पड़ती हैं पृथ्वी की ओर। यही गिरता पानी है बारिश। कभी-कभी बारिश से पहले बिजली की गड़गड़ाहट सुनाई देती है।",
        },
        {
          en: "Rain is very important for us. It fills our rivers, ponds, and wells. Farmers wait for rain to grow their rice. So next time it rains, watch the clouds. You know their secret now!",
          bn: "আমাদের জীবনে বৃষ্টির ভূমিকা অপরিসীম। বৃষ্টি ভরে তোলে নদী, পুকুর আর কুয়ো। ধান ফলাতে কৃষকরা বসে থাকেন বৃষ্টির অপেক্ষায়। তাই পরেরবার বৃষ্টি নামলে মেঘের দিকে তাকাও। তাদের গোপন রহস্য এখন তোমার জানা!",
          hi: "हमारे लिए बारिश बहुत ज़रूरी है। वह भर देती है हमारी नदियाँ, तालाब और कुएँ। धान उगाने के लिए किसान बारिश का इंतज़ार करते हैं। तो अगली बार बारिश होते ही बादलों को देखो। उनका छुपा राज़ अब तुम्हें पता है!",
        },
      ],
      vocabulary: [
        {
          word: "vapour",
          meaning: {
            bn: "জলীয় বাষ্প — পানির অদৃশ্য গ্যাস রূপ",
            en: "the invisible gas form of water",
            hi: "जलवाष्प — पानी का अदृश्य गैस रूप",
          },
          example: "Tea gives out hot vapour.",
        },
        {
          word: "cloud",
          meaning: {
            bn: "মেঘ — আকাশে ভাসমান পানির ফোঁটার ভ্যাড়",
            en: "a big group of tiny water drops in the sky",
            hi: "बादल — आकाश में तैरती पानी की बूँदों का झुंड",
          },
          example: "A dark cloud covers the sun.",
        },
        {
          word: "heavy",
          meaning: {
            bn: "ভারী — যার ওজন বেশি",
            en: "with much weight",
            hi: "भारी — जिसका वज़न ज़्यादा है",
          },
          example: "This school bag is too heavy.",
        },
        {
          word: "thunder",
          meaning: {
            bn: "গর্জন — বজ্রপাতের সময় আকাশের বিকট শব্দ",
            en: "the loud sound in the sky during a storm",
            hi: "गर्जन — तूफ़ान में आकाश की ऊँची आवाज़",
          },
          example: "The thunder scared the little cat.",
        },
        {
          word: "invisible",
          meaning: {
            bn: "অদৃশ্য — যা চোখে দেখা যায় না",
            en: "something the eyes cannot see",
            hi: "अदृश्य — जो आँखों से नहीं दिखता",
          },
          example: "Air is invisible, but it is everywhere.",
        },
        {
          word: "evaporation",
          meaning: {
            bn: "বাষ্পীভবন — পানির বাষ্প হয়ে ওড়ার প্রক্রিয়া",
            en: "the change of water into vapour",
            hi: "वाष्पीकरण — पानी का वाष्प बनने की प्रक्रिया",
          },
          example: "Evaporation makes wet clothes dry.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "পানি গরম করে কে?",
            en: "What makes the water warm?",
            hi: "पानी को गर्म क्या करता है?",
          },
          options: [
            { bn: "সূর্য", en: "The sun", hi: "सूरज" },
            { bn: "বাতাস", en: "The wind", hi: "हवा" },
            { bn: "মেঘ", en: "The clouds", hi: "बादल" },
            { bn: "চাঁদ", en: "The moon", hi: "चाँद" },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম অনুচ্ছেদে লেখা — উত্তরের শুরু সূর্য দিয়ে, সূর্যের তাপেই পানি গরম হয়।",
            en: "Paragraph one: the answer starts with the sun, and its heat warms the water.",
            hi: "पहला अनुच्छेद: जवाब की शुरुआत सूरज से है, उसकी गर्मी ही पानी को गर्म करती है।",
          },
        },
        {
          question: {
            bn: "অদৃশ্য ওই গ্যাসের নাম কী?",
            en: "What is the name of the invisible gas?",
            hi: "उस अदृश्य गैस का नाम क्या है?",
          },
          options: [
            { bn: "মেঘ", en: "Cloud", hi: "बादल" },
            { bn: "জলীয় বাষ্প", en: "Water vapour", hi: "जलवाष्प" },
            { bn: "বাতাস", en: "Air", hi: "हवा" },
            { bn: "ধোঁয়া", en: "Smoke", hi: "धुआँ" },
          ],
          answer: 1,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে বলা হয়েছে — 'এই গ্যাসের নাম জলীয় বাষ্প।'",
            en: "Paragraph two says: 'We call this gas water vapour.'",
            hi: "दूसरा अनुच्छेद कहता है — 'इस गैस को जलवाष्प कहते हैं।'",
          },
        },
        {
          question: {
            bn: "কোটি কোটি ফোঁটা জমাট বেঁধে কী তৈরি হয়?",
            en: "What do millions of drops form together?",
            hi: "करोड़ों बूँदें मिलकर क्या बनाती हैं?",
          },
          options: [
            { bn: "একটা নদী", en: "A river", hi: "एक नदी" },
            { bn: "একটা সমুদ্র", en: "A sea", hi: "एक समुद्र" },
            { bn: "একটা মেঘ", en: "A cloud", hi: "एक बादल" },
            { bn: "একটা কুয়ো", en: "A well", hi: "एक कुआँ" },
          ],
          answer: 2,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদের শেষ বাক্য — 'কোটি কোটি ফোঁটা জমাট বেঁধে তৈরি করে মেঘ।'",
            en: "The last sentence of paragraph three: 'Millions of drops come together and form a cloud.'",
            hi: "तीसरे अनुच्छेद का आख़िरी वाक्य — 'करोड़ों बूँदें मिलकर बनाती हैं बादल।'",
          },
        },
        {
          question: {
            bn: "ফোঁটাগুলো নিচে ঝরে পড়ে কেন?",
            en: "Why do the drops fall down?",
            hi: "बूँदें नीचे क्यों गिरती हैं?",
          },
          options: [
            { bn: "কারণ সেগুলো বাতাসের জন্য খুব ভারী হয়ে যায়", en: "Because they become too heavy for the air", hi: "क्योंकि वे हवा के लिए बहुत भारी हो जाती हैं" },
            { bn: "কারণ সূর্য ওদের টানে", en: "Because the sun pulls them", hi: "क्योंकि सूरज उन्हें खींचता है" },
            { bn: "কারণ পাখিরা ওদের ধাক্কা দেয়", en: "Because birds push them", hi: "क्योंकि पक्षी उन्हें धक्का देते हैं" },
            { bn: "কারণ মেঘ ফেটে যায়", en: "Because the cloud bursts", hi: "क्योंकि बादल फट जाता है" },
          ],
          answer: 0,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে লেখা — একসময় ফোঁটাগুলো বাতাসের জন্য অনেক ভারী হয়ে যায়, তখন ঝরে পড়ে।",
            en: "Paragraph four says the drops soon become too heavy for the air, so they fall.",
            hi: "चौथा अनुच्छेद कहता है कि बूँदें जल्दी ही हवा के लिए बहुत भारी हो जाती हैं, तब गिरती हैं।",
          },
        },
        {
          question: {
            bn: "কৃষকরা বৃষ্টির জন্য কেন অপেক্ষা করেন?",
            en: "Why do farmers wait for rain?",
            hi: "किसान बारिश का इंतज़ार क्यों करते हैं?",
          },
          options: [
            { bn: "রাস্তা ভেজানোর জন্য", en: "To wet the roads", hi: "सड़कें भिगोने के लिए" },
            { bn: "ধান ফলানোর জন্য", en: "To grow their rice", hi: "धान उगाने के लिए" },
            { bn: "মেলা দেখার জন্য", en: "To see the fair", hi: "मेला देखने के लिए" },
            { bn: "মাছ ধরার জন্য", en: "To catch fish", hi: "मछली पकड़ने के लिए" },
          ],
          answer: 1,
          explain: {
            bn: "শেষ অনুচ্ছেদে লেখা — 'ধান ফলাতে কৃষকরা বসে থাকেন বৃষ্টির অপেক্ষায়।'",
            en: "The last paragraph: 'Farmers wait for rain to grow their rice.'",
            hi: "आख़िरी अनुच्छेद — 'धान उगाने के लिए किसान बारिश का इंतज़ार करते हैं।'",
          },
        },
      ],
    },
  },

  /* ── standalone · read-b1-mango · story · inspire ─────────────────── */
  {
    slug: "read-b1-mango",
    level: "beginner",
    category: "inspire",
    minutes: 3,
    unit: 0,
    data: {
      title: {
        bn: "দাদুর আমগাছ",
        en: "Grandfather's Mango Tree",
        hi: "दादाजी का आम का पेड़",
      },
      summary: {
        bn: "দাদু বৃষ্টির দিনে একটা আমগাছের চারা রোপণ করে ধৈর্য ধরে অপেক্ষা করেন। বছরের পর বছর পরে গাছটাই হয় পুরো পরিবারের আনন্দ — ধৈর্যের ফল মিষ্টি।",
        en: "Grandfather plants a small mango tree one rainy day and waits with patience. Years later, the tree gives joy to the whole family — patience pays.",
        hi: "दादाजी एक बरसाती दिन आम का छोटा पौधा लगाते हैं और धैर्य से इंतज़ार करते हैं। सालों बाद वही पेड़ पूरे परिवार को ख़ुशी देता है — धैर्य का फल मीठा होता है।",
      },
      genre: "story" as LibraryReadingGenre,
      paragraphs: [
        {
          en: "Many years ago, my grandfather was a young farmer. One rainy day, he planted a small mango tree near our house. His friends laughed at him. \"A mango tree needs ten years!\" they said. Grandfather only smiled.",
          bn: "অনেক বছর আগের কথা, দাদু তখন ছিলেন এক তরুণ কৃষক। বৃষ্টির এক দিনে তিনি আমাদের বাড়ির পাশে রোপণ করলেন ছোট্ট এক আমগাছের চারা। বন্ধুরা তাঁকে নিয়ে হাসাহাসি করল। তারা বলল, 'আমগাছে ফল পেতে দশ বছর লাগে!' দাদু শুধু হাসলেন।",
          hi: "बहुत साल पहले की बात है, दादाजी तब एक जवान किसान थे। एक बरसाती दिन उन्होंने हमारे घर के पास लगाया आम के पेड़ का छोटा पौधा। उनके दोस्तों ने उन पर हँसा। उन्होंने कहा, 'आम के पेड़ में दस साल लगते हैं!' दादाजी बस मुस्कुरा दिए।",
        },
        {
          en: "Grandfather watered the little tree every morning. He put cow dung and dry leaves around it. In the hot month of Baishakh, he gave it more water. He talked to it like a small child. Slowly, the small tree became a young tree.",
          bn: "প্রতিদিন সকালে দাদু ছোট্ট গাছটাতে পানি দিতেন। গাছের গোড়ায় দিতেন গোবর আর শুকনো পাতা। গরম বৈশাখ মাসে তিনি পানি দিতেন আরও বেশি। ছোট্ট এক বাচ্চার মতো করে সেই গাছের সঙ্গে কথাও বলতেন। ধীরে ধীরে ছোট গাছটা হয়ে উঠল এক তরুণ গাছ।",
          hi: "हर सुबह दादाजी छोटे पेड़ को पानी देते थे। पेड़ की जड़ के पास डालते थे गोबर और सूखे पत्ते। गर्म बैशाख महीने में उसे और ज़्यादा पानी देते थे। वे उससे छोटे बच्चे की तरह बातें भी करते थे। धीरे-धीरे छोटा पेड़ बन गया एक जवान पेड़।",
        },
        {
          en: "Year after year, the tree grew taller. In the fifth year, white flowers came. But there were no mangoes. Grandfather did not lose hope. \"Good things take time,\" he told us.",
          bn: "বছরের পর বছর গাছটা উঁচু হতে থাকল। পঞ্চম বছরে ফুটল সাদা ফুল। কিন্তু আম তখনও এল না। দাদু আশা ছাড়লেন না। আমাদের বললেন, 'ভালো জিনিস পেতে সময় লাগে।'",
          hi: "साल-दर-साल पेड़ लंबा होता गया। पाँचवें साल आए सफ़ेद फूल। पर आम अभी नहीं आए। दादाजी ने उम्मीद नहीं हारी। उन्होंने हमें कहा, 'अच्छी चीज़ों में समय लगता है।'",
        },
        {
          en: "Today the tree is taller than our roof. Every summer, it gives us hundreds of sweet mangoes. We sell some at the market and share some with neighbours. Even his old friends now come with plates! Grandfather sits under its cool shade every evening.",
          bn: "আজ গাছটা আমাদের চালের চেয়েও উঁচু। প্রতি গ্রীষ্মে সে আমাদের দেয় শত শত মিষ্টি আম। কিছু আম বাজারে বিক্রি করি, কিছু ভাগ করে দিই প্রতিবেশীদের সঙ্গে। দাদুর সেই পুরনো বন্ধুরাও এখন পাতে হাতে আসেন! প্রতি সন্ধ্যায় দাদু বসেন গাছের ঠান্ডা ছায়াতলে।",
          hi: "आज वह पेड़ हमारी छत से भी लंबा है। हर गर्मियों में वह हमें देता है सैकड़ों मीठे आम। कुछ आम बाज़ार में बेचते हैं, कुछ बाँट देते हैं पड़ोसियों को। दादाजी के वे पुराने दोस्त भी अब थाली लेकर आते हैं! हर शाम दादाजी बैठते हैं पेड़ की ठंडी छाँव में।",
        },
        {
          en: "Now I understand my grandfather's lesson. A patient man plants a tree today and eats its fruit tomorrow. Do you want something big? Then start small today. Wait, work, and never give up.",
          bn: "দাদুর শিক্ষাটা আজ আমি বুঝতে পারছি। ধৈর্যশীল মানুষ আজ গাছ রোপণ করে, আর কাল খায় তার ফল। তোমার কি বড় কিছু চাই? তাহলে আজই ছোট থেকে শুরু করো। অপেক্ষা করো, পরিশ্রম করো, আর কোনোদিন হাল ছেড়ো না।",
          hi: "दादाजी की सीख आज मैं समझ गई हूँ। धैर्यवान आदमी आज पेड़ लगाता है और कल खाता है उसका फल। तुम्हें क्या कुछ बड़ा चाहिए? तो आज ही छोटे से शुरुआत करो। इंतज़ार करो, मेहनत करो, और कभी हार मत मानो।",
        },
      ],
      vocabulary: [
        {
          word: "farmer",
          meaning: {
            bn: "কৃষক — যিনি জমিতে ফসল ফলান",
            en: "a person who grows food on land",
            hi: "किसान — जो खेत में फ़सल उगाता है",
          },
          example: "The farmer works in the field all day.",
        },
        {
          word: "mangoes",
          meaning: {
            bn: "আম — গ্রীষ্মের ফলের রাজা",
            en: "the sweet summer fruit of the mango tree",
            hi: "आम — गर्मियों का फलों का राजा",
          },
          example: "We pick ripe mangoes in May.",
        },
        {
          word: "flowers",
          meaning: {
            bn: "ফুল — গাছের সুন্দর, সুগন্ধি অংশ",
            en: "the pretty, sweet-smelling part of a plant",
            hi: "फूल — पौधे का सुंदर, सुगंधित हिस्सा",
          },
          example: "White flowers bloom in spring.",
        },
        {
          word: "shade",
          meaning: {
            bn: "ছায়া — গাছের নিচের ঠান্ডা আঁধার",
            en: "the cool dark spot under a tree",
            hi: "छाँव — पेड़ के नीचे की ठंडी जगह",
          },
          example: "We rest in the shade at noon.",
        },
        {
          word: "patient",
          meaning: {
            bn: "ধৈর্যশীল — যিনি রাগ না করে অপেক্ষা করতে পারেন",
            en: "able to wait calmly",
            hi: "धैर्यवान — शांति से इंतज़ार कर सकने वाला",
          },
          example: "Be patient with the little puppy.",
        },
        {
          word: "hope",
          meaning: {
            bn: "আশা — ভালো কিছু ঘটবে বলে মনের প্রত্যাশা",
            en: "the feeling that good things will come",
            hi: "उम्मीद — यह भाव कि अच्छा ज़रूर होगा",
          },
          example: "Never lose hope in hard days.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "দাদু কী রোপণ করেছিলেন?",
            en: "What did grandfather plant?",
            hi: "दादाजी ने क्या लगाया था?",
          },
          options: [
            { bn: "ছোট্ট এক আমগাছের চারা", en: "A small mango tree", hi: "आम के पेड़ का छोटा पौधा" },
            { bn: "একটা কলাগাছ", en: "A banana plant", hi: "एक केले का पौधा" },
            { bn: "একটা বটগাছের চারা", en: "A banyan sapling", hi: "बरगद का पौधा" },
            { bn: "কিছু সবজির বীজ", en: "Some vegetable seeds", hi: "कुछ सब्ज़ियों के बीज" },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম অনুচ্ছেদে লেখা — বৃষ্টির এক দিনে তিনি বাড়ির পাশে ছোট্ট আমগাছের চারা রোপণ করেন।",
            en: "Paragraph one says he planted a small mango tree near the house on a rainy day.",
            hi: "पहला अनुच्छेद कहता है कि बरसाती दिन उन्होंने घर के पास आम का छोटा पौधा लगाया।",
          },
        },
        {
          question: {
            bn: "প্রতিদিন সকালে দাদু কী করতেন?",
            en: "What did grandfather do every morning?",
            hi: "हर सुबह दादाजी क्या करते थे?",
          },
          options: [
            { bn: "বাজারে আম বিক্রি করতেন", en: "He sold mangoes at the market", hi: "वे बाज़ार में आम बेचते थे" },
            { bn: "ছোট্ট গাছটাতে পানি দিতেন", en: "He watered the little tree", hi: "वे छोटे पेड़ को पानी देते थे" },
            { bn: "গাছের ডাল কেটে ফেলতেন", en: "He cut the tree branches", hi: "वे पेड़ की डालियाँ काटते थे" },
            { bn: "মাঠে ধান রোপণ করতেন", en: "He planted rice in the field", hi: "वे खेत में धान लगाते थे" },
          ],
          answer: 1,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদের প্রথম বাক্য — 'প্রতিদিন সকালে দাদু ছোট্ট গাছটাতে পানি দিতেন।'",
            en: "The first sentence of paragraph two: 'Grandfather watered the little tree every morning.'",
            hi: "दूसरे अनुच्छेद का पहला वाक्य — 'हर सुबह दादाजी छोटे पेड़ को पानी देते थे।'",
          },
        },
        {
          question: {
            bn: "পঞ্চম বছরে কী ঘটল?",
            en: "What happened in the fifth year?",
            hi: "पाँचवें साल क्या हुआ?",
          },
          options: [
            { bn: "আম পাকল", en: "The mangoes ripened", hi: "आम पक गए" },
            { bn: "সাদা ফুল ফুটল", en: "White flowers came", hi: "सफ़ेद फूल आए" },
            { bn: "গাছটা শুকিয়ে গেল", en: "The tree dried up", hi: "पेड़ सूख गया" },
            { bn: "ঝড়ে গাছটা ভেঙে পড়ল", en: "A storm broke the tree", hi: "तूफ़ान ने पेड़ तोड़ दिया" },
          ],
          answer: 1,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে — 'পঞ্চম বছরে ফুটল সাদা ফুল। কিন্তু আম তখনও এল না।'",
            en: "Paragraph three: 'In the fifth year, white flowers came. But there were no mangoes.'",
            hi: "तीसरा अनुच्छेद — 'पाँचवें साल आए सफ़ेद फूल। पर आम अभी नहीं आए।'",
          },
        },
        {
          question: {
            bn: "পরিবার কিছু আম দিয়ে কী করে?",
            en: "What does the family do with some mangoes?",
            hi: "परिवार कुछ आमों का क्या करता है?",
          },
          options: [
            { bn: "ফেলে দেয়", en: "They throw them away", hi: "वे फेंक देते हैं" },
            { bn: "বাজারে বিক্রি করে, প্রতিবেশীদের ভাগ করে দেয়", en: "They sell some and share some with neighbours", hi: "कुछ बेचते हैं, कुछ पड़ोसियों में बाँटते हैं" },
            { bn: "জাহাজে করে পাঠায়", en: "They send them by ship", hi: "वे जहाज़ से भेजते हैं" },
            { bn: "সব ফ্রিজে জমায়", en: "They freeze all of them", hi: "वे सब फ्रीज़ में रखते हैं" },
          ],
          answer: 1,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে লেখা — কিছু আম বাজারে বিক্রি হয়, কিছু ভাগ হয় প্রতিবেশীদের সঙ্গে।",
            en: "Paragraph four says they sell some mangoes and share some with neighbours.",
            hi: "चौथा अनुच्छेद कहता है कि कुछ आम बाज़ार में बिकते हैं, कुछ पड़ोसियों में बाँटे जाते हैं।",
          },
        },
        {
          question: {
            bn: "দাদুর শিক্ষাটা কী?",
            en: "What is grandfather's lesson?",
            hi: "दादाजी की सीख क्या है?",
          },
          options: [
            { bn: "ভালো জিনিস পেতে সময় লাগে — ধৈর্য ধরো", en: "Good things take time — be patient", hi: "अच्छी चीज़ों में समय लगता है — धैर्य रखो" },
            { bn: "দ্রুত টাকা আয় করো", en: "Make money fast", hi: "जल्दी पैसे कमाओ" },
            { bn: "সবসময় বন্ধুর কথা শোনো", en: "Always listen to friends", hi: "हमेशा दोस्तों की सुनो" },
            { bn: "গাছ লাগানো সময়ের অপচয়", en: "Planting trees wastes time", hi: "पेड़ लगाना समय की बर्बादी है" },
          ],
          answer: 0,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে দাদু বলেন, 'ভালো জিনিস পেতে সময় লাগে' — শেষ অনুচ্ছেদে সেটাই পাঠ হয়ে ওঠে।",
            en: "In paragraph three Grandfather says, 'Good things take time' — the last paragraph turns it into the lesson.",
            hi: "तीसरे अनुच्छेद में दादाजी कहते हैं, 'अच्छी चीज़ों में समय लगता है' — आख़िरी अनुच्छेद में यही सीख बनती है।",
          },
        },
      ],
    },
  },
];

export default SEED_READING_V1_BEGINNER;
