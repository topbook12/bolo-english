// ─── Listening library v3 · INTERMEDIATE — 5 standalone graded stories (D45) ───
// Story paragraphs are ALWAYS English (that is the listening skill); all
// learner-facing meta (title/summary/vocabulary meanings/quiz) is TriText
// (bn primary). Standalone (unit 0) extra practice stories.
import type {
  LibraryListeningData,
  LibraryLevel,
  LibraryListeningCategory,
} from "../../src/lib/library-types";

export interface SeedListeningV3Entry {
  slug: string;
  level: LibraryLevel;
  category: LibraryListeningCategory;
  minutes: number;
  unit: number; // 0 = standalone
  data: LibraryListeningData;
}

export const SEED_LISTENING_V3_INTERMEDIATE: SeedListeningV3Entry[] = [
  {
    slug: "story3-b2-01",
    level: "intermediate",
    category: "work",
    minutes: 4,
    unit: 0, // standalone
    data: {
      title: {
        bn: "প্রথম অফিস-দিনের হার্টবিট",
        en: "The Heartbeat of a First Office Day",
        hi: "पहले ऑफिस-दिन की धड़कन",
      },
      summary: {
        bn: "ঢাকার একটি ছোট স্টুডিওতে জুনিয়র ডিজাইনার হিসেবে নুসরাতের প্রথম দিন — দ্রুত হার্টবিট, কাঁপতে থাকা হাত আর ভেতরে ভেতরে একটাই প্রশ্ন, 'আমি কি আসলেই পারব?' রেহানার সদয় কথা তাকে সাহস দেয়, আর প্রথম প্রেজেন্টেশনেই ক্লায়েন্ট তার দ্বিতীয় কনসেপ্ট অনুমোদন করে। দিন শেষে নুসরাত বোঝে — সাহস চুপচাপ বেড়ে যায়।",
        en: "Nusrat's first day as a junior designer at a small Dhaka studio: a fast heartbeat, shaking hands and a loud imposter feeling. Kind Rehana shares her own first-presentation disaster, and on Thursday the client approves Nusrat's second concept. She ends the day learning that courage grows quietly.",
        hi: "ढाका के एक छोटे स्टूडियो में जूनियर डिज़ाइनर के रूप में नुसरत का पहला दिन: तेज़ धड़कन, काँपते हाथ और गहरी घबराहट। प्यारी रेहाना अपनी पहली प्रेज़ेंटेशन की कहानी सुनाती है, और गुरुवार को क्लाइंट नुसरत का दूसरा कॉन्सेप्ट मंज़ूर कर लेता है। दिन के अंत में वह सीखती है कि हिम्मत चुपचाप बढ़ती है।",
      },
      paragraphs: [
        "Nusrat stepped out of the metro rail at Agargaon and checked the time on her phone. She had prepared for this morning for months, and now it had finally arrived. Today was her first day as a junior designer at a small studio in Dhaka. 'If my hands stop shaking, everything will be fine,' she whispered.",
        "Her new team lead, Mr. Alam, was waiting near the lift with a warm smile. 'You must be Nusrat. Don't worry — everyone here was a beginner once,' he said kindly. She followed him to a desk beside a large window. The studio was smaller than she had imagined, but the walls were full of colourful posters.",
        "By noon, the imposter feeling had grown louder than the office sounds. Everyone is so talented, she thought, while I am only pretending. Her sketches felt weak, and her software shortcuts were slow. While she was revising a logo draft quietly, an older designer named Rehana noticed her worried face. She pulled a chair closer.",
        "'I still remember my first presentation,' Rehana said gently. 'I forgot every word, and my voice was shaking like a leaf. You will grow faster than you think — I have watched many juniors become lead designers here.' Nusrat looked up, surprised. For the first time that day, the office felt like a place where she could belong.",
        "On Thursday afternoon, Mr. Alam called the whole team together for her first presentation. Nusrat showed three concepts for a tea brand and explained her choices in careful English. Her voice trembled at the beginning, but it grew steadier with every slide. 'The client has already approved the second one,' Mr. Alam announced with a proud smile. The room clapped, and Rehana winked at her.",
        "That evening, Nusrat called her mother from the metro. 'Ma, today I was a real designer. My idea won!' she said, laughing through happy tears. Her mother's proud voice filled the whole coach. The imposter feeling had not disappeared completely, but it had become much quieter. Tomorrow, she decided, she would arrive ten minutes early — ready to learn again.",
      ],
      vocabulary: [
        {
          word: "junior",
          meaning: {
            bn: "জুনিয়র — কোনো পেশায় নতুন বা নিম্ন পদের ব্যক্তি",
            en: "someone new or lower in position in a job",
            hi: "जूनियर — नौकरी में नया या निचले पद वाला व्यक्ति",
          },
          example: "She is a junior designer at a small studio.",
        },
        {
          word: "sketch",
          meaning: {
            bn: "স্কেচ — দ্রুত আঁকা ছবি বা নকশার খসড়া",
            en: "a quick, simple drawing",
            hi: "स्केच — जल्दी बनाया गया साधारण चित्र",
          },
          example: "The designer showed three sketches to the client.",
        },
        {
          word: "revise",
          meaning: {
            bn: "সংশোধন করা — দুর্বল জায়গা ঠিক করে নতুন করে লেখা বা আঁকা",
            en: "to change something in order to improve it",
            hi: "सुधारना — बेहतर बनाने के लिए बदलाव करना",
          },
          example: "I will revise my essay before submitting it.",
        },
        {
          word: "tremble",
          meaning: {
            bn: "কাঁপা — ভয় বা উত্তেজনায় শরীর কেঁপে ওঠা",
            en: "to shake slightly because of fear or excitement",
            hi: "काँपना — डर या उत्साह से हल्का काँपना",
          },
          example: "Her voice trembled during the first speech.",
        },
        {
          word: "approve",
          meaning: {
            bn: "অনুমোদন দেওয়া — পছন্দ করে সম্মতি দেওয়া",
            en: "to officially agree that something is good",
            hi: "स्वीकृति देना — किसी चीज़ को सही मानकर हाँ कहना",
          },
          example: "The manager approved the new design yesterday.",
        },
        {
          word: "belong",
          meaning: {
            bn: "নিজের জায়গা পাওয়া — কোনো স্থানে মানিয়ে যাওয়া, স্বস্তি লাভ করা",
            en: "to feel comfortable and accepted in a place",
            hi: "अपना लगना — किसी जगह सहज और स्वीकृत महसूस करना",
          },
          example: "After one month, she finally felt she belonged there.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "নুসরাতের নতুন চাকরি কোথায়?",
            en: "Where is Nusrat's new job?",
            hi: "नुसरत की नई नौकरी कहाँ है?",
          },
          options: [
            { bn: "চট্টগ্রামের একটি স্টুডিওতে", en: "In a studio in Chattogram", hi: "चट्टग्राम के एक स्टूडियो में" },
            { bn: "খুলনার একটি সংবাদপত্রে", en: "At a newspaper in Khulna", hi: "खुलना के एक अखबार में" },
            { bn: "ঢাকার একটি ছোট ডিজাইন স্টুডিওতে", en: "At a small design studio in Dhaka", hi: "ढाका के एक छोटे डिज़ाइन स्टूडियो में" },
            { bn: "আগারগাঁওয়ের একটি স্কুলে", en: "At a school in Agargaon", hi: "अगरगाँव के एक स्कूल में" },
          ],
          answer: 2,
          explain: {
            bn: "গল্পের শুরুতেই বলা আছে — এটা ছিল ঢাকার একটি ছোট স্টুডিওতে জুনিয়র ডিজাইনার হিসেবে নুসরাতের প্রথম দিন।",
            en: "The opening sentence says it was Nusrat's first day as a junior designer at a small studio in Dhaka.",
            hi: "शुरुआती वाक्य में कहा गया है कि यह ढाका के एक छोटे स्टूडियो में जूनियर डिज़ाइनर के रूप में नुसरत का पहला दिन था।",
          },
        },
        {
          question: {
            bn: "নুসরাত নিজের কাজ নিয়ে সন্দেহ করছিল, সেই সময় কে তাকে সাহস দিয়েছিল?",
            en: "Who encouraged Nusrat when she felt like an imposter?",
            hi: "जब नुसरत को अपने आप पर संदेह हुआ, तो उसे किसने हिम्मत दी?",
          },
          options: [
            { bn: "রেহানা, একজন সিনিয়র ডিজাইনার", en: "Rehana, an older designer", hi: "रेहाना, एक बड़ी डिज़ाइनर" },
            { bn: "টিম লিড মিস্টার আলম", en: "Mr. Alam, the team lead", hi: "मिस्टर आलम, टीम लीड" },
            { bn: "চা-ব্র্যান্ডের ক্লায়েন্ট", en: "The tea-brand client", hi: "चाय-ब्रांड का क्लाइंट" },
            { bn: "তার মা, ফোনে", en: "Her mother, on the phone", hi: "उसकी माँ, फ़ोन पर" },
          ],
          answer: 0,
          explain: {
            bn: "রেহানা নিজের প্রথম প্রেজেন্টেশনের ব্যর্থতার কথা বলে সান্ত্বনা দেন এবং বলেন, অনেক জুনিয়র এখানে বড় হয়েছে।",
            en: "Rehana comforted her with her own first-presentation disaster and said many juniors had grown into lead designers.",
            hi: "रेहाना ने अपनी पहली प्रेज़ेंटेशन की असफलता बताकर उसे सांत्वना दी और कहा कि कई जूनियर यहाँ बड़े डिज़ाइनर बने।",
          },
        },
        {
          question: {
            bn: "নুসরাতের প্রেজেন্টেশনের পর ক্লায়েন্ট কী করেছিল?",
            en: "What did the client do after Nusrat's presentation?",
            hi: "नुसरत की प्रेज़ेंटेशन के बाद क्लाइंट ने क्या किया?",
          },
          options: [
            { bn: "সিদ্ধান্ত পরে নেওয়ার কথা বলেছিল", en: "They said they would decide later", hi: "उन्होंने कहा कि वे बाद में तय करेंगे" },
            { bn: "সব কনসেপ্ট নাকচ করেছিল", en: "They rejected all the concepts", hi: "उन्होंने सारे कॉन्सेप्ट अस्वीकार कर दिए" },
            { bn: "আরও তিনটি কনসেপ্ট চেয়েছিল", en: "They asked for three more concepts", hi: "उन्होंने तीन और कॉन्सेप्ट माँगे" },
            { bn: "দ্বিতীয় কনসেপ্টটি অনুমোদন করেছিল", en: "They approved the second concept", hi: "उन्होंने दूसरा कॉन्सेप्ट मंज़ूर कर लिया" },
          ],
          answer: 3,
          explain: {
            bn: "মিস্টার আলম ঘোষণা করেন — 'The client has already approved the second one' — অর্থাৎ দ্বিতীয় কনসেপ্টটি অনুমোদিত হয়েছে।",
            en: "Mr. Alam announced that the client had already approved the second concept.",
            hi: "मिस्टर आलम ने घोषणा की कि क्लाइंट ने पहले ही दूसरा कॉन्सेप्ट मंज़ूर कर लिया था।",
          },
        },
        {
          question: {
            bn: "দিন শেষে নুসরাত কী সিদ্ধান্ত নিল?",
            en: "What did Nusrat decide at the end of the day?",
            hi: "दिन के अंत में नुसरत ने क्या तय किया?",
          },
          options: [
            { bn: "প্রথম সপ্তাহেই চাকরি ছেড়ে দেবে", en: "To leave the job in the first week", hi: "पहले ही हफ़्ते में नौकरी छोड़ देने का" },
            { bn: "প্রতিদিন দশ মিনিট আগে পৌঁছাবে", en: "To arrive ten minutes early every day", hi: "हर दिन दस मिनट पहले पहुँचने का" },
            { bn: "রেহানাকে উপহার দেবে", en: "To give Rehana a gift", hi: "रेहाना को उपहार देने का" },
            { bn: "অন্য টিমে বদলি হওয়ার আবেদন করবে", en: "To apply for a different team", hi: "दूसरी टीम में बदली के लिए अर्ज़ी देने का" },
          ],
          answer: 1,
          explain: {
            bn: "শেষ অনুচ্ছেদে নুসরাত ঠিক করে — 'Tomorrow, she decided, she would arrive ten minutes early — ready to learn again.'",
            en: "In the last paragraph, Nusrat decides to arrive ten minutes early tomorrow, ready to learn again.",
            hi: "अंतिम अनुच्छेद में नुसरत तय करती है कि कल वह दस मिनट पहले पहुँचेगी, फिर से सीखने को तैयार।",
          },
        },
      ],
    },
  },
  {
    slug: "story3-b2-02",
    level: "intermediate",
    category: "travel",
    minutes: 4,
    unit: 0, // standalone
    data: {
      title: {
        bn: "ভুল বাসে সঠিক ভ্রমণ",
        en: "The Right Journey on the Wrong Bus",
        hi: "गलत बस में सही सफ़र",
      },
      summary: {
        bn: "কক্সবাজার থেকে ইনানি যাওয়ার নামে সমীর আর ইরফান ভুল বাসে উঠে বসে। নাম-না-জানা এক জেলে গ্রামে তারা চা খায়, নৌকা টানে, জাল গোঁজার হাত শেখে — আর করিম চাচার মুখে শোনে, সমুদ্র দেয় আর নেয়, কিন্তু ভাত ভাগ করে খাওয়া মানুষ কোনোদিন ক্ষুধার্ত থাকে না। ভুল বাসেই হয়তো তাদের সবচেয়ে সঠিক ভ্রমণ।",
        en: "Samir and Irfan board the wrong bus from Cox's Bazar towards Inani Beach and land in an unnamed fishing village. They drink tea with Karim chacha, pull boats, learn to fold nets and discover that travel is not about places but about people. The wrong bus gives them the truest journey of the trip.",
        hi: "समीर और इरफ़ान कॉक्स बाज़ार से इनानी बीच की ओर गलत बस चढ़ जाते हैं और एक छोटे मछुआरे गाँव में पहुँच जाते हैं। वे करीम चाचा के साथ चाय पीते हैं, नाव खींचते हैं और जाल मोड़ना सीखते हैं — और समझते हैं कि सफ़र जगहों के लिए नहीं, लोगों के लिए होता है।",
      },
      paragraphs: [
        "Last winter, two friends from Rajshahi, Samir and Irfan, boarded a bus in Cox's Bazar towards Inani Beach. They had been planning this sea trip since their final exams ended. The bus was crowded, the driver kept honking, and the friends were still laughing about their cheap hotel. After forty minutes, Samir looked up and frowned. 'Brother, I think we have taken the wrong bus.'",
        "They got off at a small stop surrounded by coconut trees and salt farms. The map showed nothing famous nearby, only a narrow sandy road leading towards the sea. Irfan felt annoyed, but Samir was already breathing the salty air happily. 'We are here now,' he said. 'If we only chase famous places, we will never really see anything.'",
        "They followed the sandy road and reached a quiet fishing village. Old boats were resting on the golden sand, and women were spreading fish to dry in the sun. Children ran beside the two strangers, shouting 'Hello! How are you?' They had learned these English words at the little village school. Irfan laughed and answered every single question.",
        "An old fisherman named Karim chacha invited them for tea in his bamboo house. While the kettle was boiling, he told stories about the cyclones he had survived. He had repaired the same fishing nets for thirty years. 'The sea gives and the sea takes,' he said calmly. 'But people who share their rice never go hungry.' The friends listened like careful students.",
        "By sunset, they had helped pull a boat up the beach and learned to fold a fishing net. They ate fresh fish with plain rice under an open sky. The famous beach was still waiting somewhere far away, but neither friend cared anymore. 'This wrong bus gave us the best day of our trip,' Irfan admitted quietly.",
        "On the way back, Samir wrote one line in his notebook. 'Travel is not about places; it is about people.' They promised Karim chacha to return next year with printed photos. The bus back to town was late, but nobody complained. Sometimes losing your way is the honest way of finding it. That night, both friends finally understood this old saying.",
      ],
      vocabulary: [
        {
          word: "board",
          meaning: {
            bn: "ওঠা — বাস, ট্রেন বা লঞ্চে উঠে যাত্রা শুরু করা",
            en: "to get on a bus, train or ship",
            hi: "चढ़ना — बस, ट्रेन या जहाज़ में सवार होना",
          },
          example: "We boarded the wrong bus in the dark.",
        },
        {
          word: "crowded",
          meaning: {
            bn: "ভিড়ারোড় — অনেক মানুষে ঠাসা ভরা",
            en: "full of people",
            hi: "भीड़भाड़ वाला — लोगों से भरा हुआ",
          },
          example: "The market was too crowded on Friday evening.",
        },
        {
          word: "annoyed",
          meaning: {
            bn: "বিরক্ত — হালকা রাগ বা অসুবিধায় অস্থির",
            en: "slightly angry or irritated",
            hi: "नाराज़ — हल्का गुस्सा या चिढ़",
          },
          example: "He was annoyed when the train arrived late.",
        },
        {
          word: "cyclone",
          meaning: {
            bn: "ঘূর্ণিঝড় — সমুদ্র থেকে আসা প্রবল ধ্বংসাত্মক ঝড়",
            en: "a very powerful storm that comes from the sea",
            hi: "चक्रवात — समुद्र से आने वाला तेज़ तूफ़ान",
          },
          example: "The cyclone damaged many houses near the coast.",
        },
        {
          word: "net",
          meaning: {
            bn: "জাল — মাছ ধরার দড়ি-সুতার জাল",
            en: "open material made of ropes, used for catching fish",
            hi: "जाल — मछली पकड़ने का रस्सी का जाल",
          },
          example: "The fisherman mended his net every evening.",
        },
        {
          word: "admit",
          meaning: {
            bn: "স্বীকার করা — সত্যি কথাটা মেনে নেওয়া",
            en: "to agree that something is true",
            hi: "स्वीकार करना — सच मान लेना",
          },
          example: "She admitted that she had made a mistake.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "যাত্রার মাঝপথে সমীর কেন ভ্রু কুঁচকাল?",
            en: "Why did Samir frown during the ride?",
            hi: "सफ़र के बीच में समीर ने तेवर क्यों चढ़ाया?",
          },
          options: [
            { bn: "ড্রাইভার অতিরিক্ত ভাড়া চেয়েছিল", en: "The driver asked for extra fare", hi: "ड्राइवर ने अतिरिक्त किराया माँगा" },
            { bn: "সে বুঝতে পারল তারা ভুল বাসে উঠেছে", en: "He realised they had taken the wrong bus", hi: "उसे समझ आया कि वे गलत बस में चढ़ गए" },
            { bn: "তার ফোনের চার্জ শেষ হয়ে গিয়েছিল", en: "His phone battery had died", hi: "उसके फ़ोन की बैटरी खत्म हो गई थी" },
            { bn: "সস্তা হোটেলের কথা মনে পড়েছিল", en: "He remembered their cheap hotel", hi: "उसे सस्ते होटल की याद आ गई" },
          ],
          answer: 1,
          explain: {
            bn: "চল্লিশ মিনিট পর সমীর বলে — 'Brother, I think we have taken the wrong bus.' অর্থাৎ সে বুঝে ফেলে ভুল বাসে উঠেছে তারা।",
            en: "After forty minutes, Samir said, 'Brother, I think we have taken the wrong bus.'",
            hi: "चालीस मिनट बाद समीर ने कहा, 'भाई, मुझे लगता है हम गलत बस में चढ़ गए हैं।'",
          },
        },
        {
          question: {
            bn: "বাঁশের ঘরে চা খেতে কে তাদের ডেকেছিল?",
            en: "Who invited them for tea in the bamboo house?",
            hi: "बाँस के घर में चाय पीने उन्हें किसने बुलाया?",
          },
          options: [
            { bn: "একজন স্কুলশিক্ষক", en: "A school teacher", hi: "एक स्कूल शिक्षक" },
            { bn: "গ্রামের চেয়ারম্যান", en: "The village chairman", hi: "गाँव का चेयरमैन" },
            { bn: "জেলে ছেলেদের একটি দল", en: "A group of young fishermen", hi: "युवा मछुआरों का एक समूह" },
            { bn: "করিম চাচা, এক বৃদ্ধ জেলে", en: "Karim chacha, an old fisherman", hi: "करीम चाचा, एक बूढ़े मछुआरे" },
          ],
          answer: 3,
          explain: {
            bn: "পুরনো জেলে করিম চাচা নিজের বাঁশের ঘরে তাদের চা খেতে ডাকেন, আর কেতলি চড়তেই তাঁর ঝড়-কাহিনি শুরু হয়।",
            en: "The old fisherman Karim chacha invited them for tea in his bamboo house and told stories while the kettle boiled.",
            hi: "बूढ़े मछुआरे करीम चाचा ने अपने बाँस के घर में चाय के लिए बुलाया और कीटली उबलते ही अपनी कहानियाँ सुनाईं।",
          },
        },
        {
          question: {
            bn: "ফেরার পথে সমীর তার খাতায় কী লিখেছিল?",
            en: "What did Samir write in his notebook on the way back?",
            hi: "लौटते समय समीर ने अपनी कॉपी में क्या लिखा?",
          },
          options: [
            { bn: "ভ্রমণ মানে জায়গা নয়, মানুষ", en: "Travel is not about places; it is about people", hi: "सफ़र जगहों के लिए नहीं, लोगों के लिए होता है" },
            { bn: "বিখ্যাত সৈকতে ফেরার পরিকল্পনা", en: "A plan to return to the famous beach", hi: "प्रसिद्ध समुद्र तट लौटने की योजना" },
            { bn: "পুরো ট্রিপের খরচের হিসাব", en: "The cost of the whole trip", hi: "पूरे ट्रिप का खर्च" },
            { bn: "বাস পরিষেবার একটি অভিযোগ", en: "A complaint about the bus service", hi: "बस सेवा की एक शिकायत" },
          ],
          answer: 0,
          explain: {
            bn: "শেষ অনুচ্ছেদে সমীর খাতায় লেখে — 'Travel is not about places; it is about people.'",
            en: "In the last paragraph, Samir writes one line: 'Travel is not about places; it is about people.'",
            hi: "अंतिम अनुच्छेद में समीर एक पंक्ति लिखता है: 'सफ़र जगहों के लिए नहीं, लोगों के लिए होता है।'",
          },
        },
        {
          question: {
            bn: "দুই বন্ধু করিম চাচাকে কী কথা দিল?",
            en: "What promise did the friends make to Karim chacha?",
            hi: "दोनों दोस्तों ने करीम चाचा से क्या वादा किया?",
          },
          options: [
            { bn: "তাঁর জন্য নতুন জাল কিনে আনবে", en: "To buy him a new fishing net", hi: "उनके लिए नया जाल खरीदकर लाने का" },
            { bn: "তাঁর বাড়িটা রং করে দেবে", en: "To paint his house", hi: "उनका घर रंग देने का" },
            { bn: "পরের বছর ছবি নিয়ে ফিরে আসবে", en: "To come back next year with photos", hi: "अगले साल तस्वीरें लेकर लौटने का" },
            { bn: "তাঁকে বিখ্যাত সৈকতে নিয়ে যাবে", en: "To take him to the famous beach", hi: "उन्हें प्रसिद्ध समुद्र तट ले जाने का" },
          ],
          answer: 2,
          explain: {
            bn: "গল্পে স্পষ্ট লেখা — তারা করিম চাচাকে কথা দেয় পরের বছর ছাপা ছবি নিয়ে ফিরে আসবে।",
            en: "The story clearly says they promised Karim chacha to return next year with printed photos.",
            hi: "कहानी में साफ़ लिखा है कि उन्होंने करीम चाचा से वादा किया कि वे अगले साल छपी तस्वीरें लेकर लौटेंगे।",
          },
        },
      ],
    },
  },
  {
    slug: "story3-b2-03",
    level: "intermediate",
    category: "science",
    minutes: 4,
    unit: 0, // standalone
    data: {
      title: {
        bn: "যে বন ভাঙা তটকে ধরে রাখে",
        en: "The Forest That Holds the Broken Coast",
        hi: "वह जंगल जो टूटे तट को थामे रखता है",
      },
      summary: {
        bn: "খুলনার একটি স্কুলের সায়েন্স ট্রিপ পৌঁছায় সুন্দরবনের সরু খালে। শিকড় দিয়ে মাটি আগলে রাখা ম্যানগ্রোভ, ধীরে ধীরে ডুবছে বঙ্গ ডেল্টা, আর উপরে উঠছে সমুদ্র — সব প্রশ্ন একসঙ্গে। রাহাত আর তার ক্লাস কাদা-মাখা হয়ে দুইশো চারা রোপণ করে; বাড়ি ফেরে উত্তর নয়, একটা প্রতিশ্রুতি নিয়ে।",
        en: "A school science trip takes a Khulna class deep into the narrow channels of the Sundarbans. Tangled mangrove roots hold the soil together while the Bengal delta slowly sinks and the sea keeps rising. The students plant two hundred muddy saplings and return home with a promise, not just an answer.",
        hi: "एक स्कूल की साइंस ट्रिप खुलना की कक्षा को सुंदरबन की सँकरी नहरों तक ले जाती है। उलझी मैंग्रोव जड़ें मिट्टी को थामे रखती हैं, जबकि बंगाल डेल्टा धीरे-धीरे डूब रहा है और समुद्र बढ़ रहा है। छात्र दो सौ पौधे लगाते हैं और घर सिर्फ़ जवाब नहीं, एक वादा लेकर लौटते हैं।",
      },
      paragraphs: [
        "The class eleven students of a Khulna school were sleeping on the night bus towards the Sundarbans. Their science teacher, Ms. Farhana, had organised a two-day field trip about rivers. 'You have read about the delta in books,' she had told them before the journey. 'Now you will touch it, smell it and question it with your own eyes.'",
        "Early in the morning, a wooden boat carried them through narrow green channels. The guide pointed at the tangled mangrove roots rising above the mud like thousands of brown fingers. 'These roots hold the soil together,' he explained. 'Without this forest, our coastline would break apart during every big storm.' The students were writing notes quickly, but their eyes kept wandering to the trees.",
        "On the boat's roof, Ms. Farhana explained the big problem. 'The Bengal delta is slowly sinking while the sea level is rising,' she said. 'Rivers carry less new soil now, so the land cannot grow fast enough. If the mangroves disappear, millions of people will lose their protection against floods and cyclones.'",
        "A student named Rahat raised his hand. 'Miss, then why are people cutting these forests?' The guide answered sadly that some families still depend on the forest for fish, honey and firewood. 'So the solution is not only planting trees,' Ms. Farhana added. 'It is also giving coastal families better ways to earn a living.'",
        "In the afternoon, the class planted two hundred mangrove saplings on a soft muddy bank. Their shoes disappeared in the mud, and everybody fell at least once. Rahat laughed loudest when he fell, though mud covered him completely. 'You have planted a small forest today,' Ms. Farhana said proudly. 'Remember this feeling when you grow up.'",
        "The night bus returned home under the stars. Most students were sleeping, but Rahat was still awake, watching the dark rivers pass. He had come to see famous tigers, but he had found something more important. It was a living wall that quietly guards his home. Next year, he decided, he would bring his younger brother to plant more saplings.",
      ],
      vocabulary: [
        {
          word: "delta",
          meaning: {
            bn: "ডেল্টা — নদী সাগরে পড়ার আগে পলি জমে তৈরি ত্রিভুজাকার সমভূমি",
            en: "flat land shaped like a triangle where a river meets the sea",
            hi: "डेल्टा — नदी के समुद्र से मिलने पर पॉली से बनी त्रिभुजाकार मैदानी भूमि",
          },
          example: "The Bengal delta is one of the largest in the world.",
        },
        {
          word: "mangrove",
          meaning: {
            bn: "ম্যানগ্রোভ — লোনা পানি ও কাদায় জন্মানো বিশেষ উপকূলীয় গাছ",
            en: "a tree that grows in salty coastal water and mud",
            hi: "मैंग्रोव — खारे तटीय पानी और कीचड़ में उगने वाला विशेष पेड़",
          },
          example: "Mangrove trees protect many coastal villages.",
        },
        {
          word: "coastline",
          meaning: {
            bn: "উপকূলরেখা — স্থল ও সমুদ্রের মিলিত সীমানা",
            en: "the land along the edge of the sea",
            hi: "तटरेखा — समुद्र के किनारे की भूमि",
          },
          example: "Bangladesh has a very long coastline.",
        },
        {
          word: "sapling",
          meaning: {
            bn: "চারা — গাছের নবজাতক, ছোট কচি গাছ",
            en: "a young small tree",
            hi: "पौधा — छोटा नन्हा पेड़",
          },
          example: "We planted fifty saplings behind the school.",
        },
        {
          word: "flood",
          meaning: {
            bn: "বন্যা — উপচে পড়া পানিতে শুকনো জমি ডুবে যাওয়া",
            en: "too much water covering dry land",
            hi: "बाढ़ — सूखी ज़मीन को ढकने वाला अतिरिक्त पानी",
          },
          example: "The flood washed away the muddy road.",
        },
        {
          word: "earn",
          meaning: {
            bn: "উপার্জন করা — কাজ করে টাকা আয় করা",
            en: "to get money by working",
            hi: "कमाना — काम करके पैसा पाना",
          },
          example: "Her mother earns a living by tailoring.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "ম্যানগ্রোভ গাছের শিকড় কী কাজ করে?",
            en: "What do the roots of mangrove trees do?",
            hi: "मैंग्रोव पेड़ों की जड़ें क्या करती हैं?",
          },
          options: [
            { bn: "লোনা পানিকে মিঠা করে ফেলে", en: "They turn salty water fresh", hi: "वे खारे पानी को मीठा बना देती हैं" },
            { bn: "নদীর স্রোত আরও দ্রুত করে", en: "They make the river flow faster", hi: "वे नदी का बहाव तेज़ कर देती हैं" },
            { bn: "মাছের সংখ্যা কমিয়ে দেয়", en: "They reduce the number of fish", hi: "वे मछलियों की संख्या घटा देती हैं" },
            { bn: "মাটি আগলে রাখে, উপকূল ভাঙা থেকে বাঁচায়", en: "They hold the soil and stop the coast from breaking", hi: "वे मिट्टी को थामती हैं और तट को टूटने से बचाती हैं" },
          ],
          answer: 3,
          explain: {
            bn: "গাইড ব্যাখ্যা করেন — 'These roots hold the soil together' — এই বন ছাড়া প্রতিটি বড় ঝড়ে উপকূল ভেঙে পড়বে।",
            en: "The guide explains, 'These roots hold the soil together,' and without the forest the coast would break in every big storm.",
            hi: "गाइड समझाता है, 'ये जड़ें मिट्टी को थामे रखती हैं', और इस जंगल के बिना हर बड़े तूफ़ान में तट टूट जाएगा।",
          },
        },
        {
          question: {
            bn: "বঙ্গ ডেল্টা ধীরে ধীরে ডুবছে কেন?",
            en: "Why is the Bengal delta slowly sinking?",
            hi: "बंगाल डेल्टा धीरे-धीरे क्यों डूब रहा है?",
          },
          options: [
            { bn: "মানুষ অনেক বেশি মাছ ধরছে", en: "People are catching too many fish", hi: "लोग बहुत ज़्यादा मछलियाँ पकड़ रहे हैं" },
            { bn: "নদী কম পলি আনছে, আর সমুদ্রের পানি বাড়ছে", en: "Rivers bring less new soil while the sea level is rising", hi: "नदियाँ कम मिट्टी लाती हैं और समुद्र का स्तर बढ़ रहा है" },
            { bn: "বনগুলো অনেক বড় হয়ে যাচ্ছে", en: "The forests are growing too big", hi: "जंगल बहुत बड़े होते जा रहे हैं" },
            { bn: "প্রতি শীতে জমি শুকিয়ে যায়", en: "The land dries up every winter", hi: "हर सर्दी में ज़मीन सूख जाती है" },
          ],
          answer: 1,
          explain: {
            bn: "মিস ফারহানা বলেন — ডেল্টা ডুবছে, সমুদ্র বাড়ছে, আর নদী এখন কম নতুন পলি আনে, তাই জমি যথেষ্ট দ্রুত বড় হতে পারছে না।",
            en: "Ms. Farhana says the delta is sinking, the sea is rising, and rivers now carry less new soil, so the land cannot grow fast enough.",
            hi: "मिस फ़रहाना कहती हैं — डेल्टा डूब रहा है, समुद्र बढ़ रहा है, और नदियाँ अब कम मिट्टी लाती हैं, इसलिए ज़मीन पर्याप्त तेज़ी से नहीं बढ़ पाती।",
          },
        },
        {
          question: {
            bn: "দুপুরের পরে ক্লাসটি কী করেছিল?",
            en: "What did the class do in the afternoon?",
            hi: "दोपहर में कक्षा ने क्या किया?",
          },
          options: [
            { bn: "রয়েল বেঙ্গল টাইগার দেখেছিল", en: "They saw a Royal Bengal tiger", hi: "उन्होंने एक रॉयल बंगाल टाइगर देखा" },
            { bn: "নদীর খালে সাঁতার কাটেছিল", en: "They swam in the river channel", hi: "उन्होंने नदी की नहर में तैराकी की" },
            { bn: "দুইশো ম্যানগ্রোভ চারা রোপণ করেছিল", en: "They planted two hundred mangrove saplings", hi: "उन्होंने दो सौ मैंग्रोव पौधे लगाए" },
            { bn: "জেলেদের পুরনো জাল সেলাই করেছিল", en: "They repaired the fishermen's old nets", hi: "उन्होंने मछुआरों के पुराने जाल सीले" },
          ],
          answer: 2,
          explain: {
            bn: "বিকেলে পুরো ক্লাস কাদা-মাখা হয়ে নরম কাদার ঢিবিতে দুইশো ম্যানগ্রোভ চারা রোপণ করে — সবাই অন্তত একবার পড়ে যায়।",
            en: "In the afternoon, the whole class, covered in mud, planted two hundred mangrove saplings on a soft muddy bank — everyone fell at least once.",
            hi: "दोपहर में पूरी कक्षा, कीचड़ से लथपथ, नरम कीचड़ पर दो सौ मैंग्रोव पौधे लगाती है — सब कम से कम एक बार गिरते हैं।",
          },
        },
        {
          question: {
            bn: "বাড়ি ফেরার বাসে রাহাত কী সিদ্ধান্ত নিল?",
            en: "What decision did Rahat make on the bus home?",
            hi: "घर लौटती बस में राहत ने क्या तय किया?",
          },
          options: [
            { bn: "পরের বছর ছোট ভাইকে নিয়ে এসে আরও চারা রোপণ করবে", en: "To bring his younger brother next year and plant more saplings", hi: "अगले साल छोटे भाई को लेकर आकर और पौधे लगाने का" },
            { bn: "সে বড় হয়ে জেলে হবে", en: "To become a fisherman when he grows up", hi: "बड़े होकर मछुआरा बनने का" },
            { bn: "আর কখনো ফিল্ড ট্রিপে যাবে না", en: "Never to join a field trip again", hi: "फिर कभी फ़ील्ड ट्रिप पर न जाने का" },
            { bn: "সে অন্য স্কুলে ভর্তি হবে", en: "To change his school", hi: "अपना स्कूल बदलने का" },
          ],
          answer: 0,
          explain: {
            bn: "শেষ অনুচ্ছেদে রাহাত ঠিক করে — পরের বছর সে ছোট ভাইকে নিয়ে এসে আরও চারা রোপণ করবে।",
            en: "In the last paragraph, Rahat decides to bring his younger brother next year to plant more saplings.",
            hi: "अंतिम अनुच्छेद में राहत तय करता है कि अगले साल वह अपने छोटे भाई को लेकर आएगा और और पौधे लगाएगा।",
          },
        },
      ],
    },
  },
  {
    slug: "story3-b2-04",
    level: "intermediate",
    category: "daily",
    minutes: 3,
    unit: 0, // standalone
    data: {
      title: {
        bn: "লোডশেডিংয়ের সোনালি সন্ধ্যা",
        en: "The Golden Evening of Load-Shedding",
        hi: "लोडशेडिंग की सुनहरी शाम",
      },
      summary: {
        bn: "রাতের খাওয়ার ঠিক আগে লোডশেডিং! মিথিলার প্রিয় শো মাঝপথে থেমে যায়, কিন্তু মোমবাতির আলোয় জেগে ওঠে দাদির পুরনো গ্রামের গল্প — চুরি হওয়া আমবাগান, রাগী প্রতিবেশী। পেয়ারার প্লেট হাতে প্রতিবেশীও যোগ দেন। বিদ্যুৎ ফিরলেও কেউ টিভি ছোঁয় না — কিছু সোনালি সন্ধ্যা গ্যাজেট চায় না, চায় কাছে বসা মানুষ।",
        en: "Load-shedding hits right before dinner, and Mithila's favourite show dies mid-scene. But in candlelight, grandmother's old village story comes alive — a stolen mango orchard, an angry neighbour. Even the neighbour joins with a plate of guavas. When the lights return, nobody reaches for the TV — some evenings need people, not gadgets.",
        hi: "रात के खाने से ठीक पहले लोडशेडिंग! मिथिला का पसंदीदा शो बीच में रुक जाता है, लेकिन मोमबत्ती की रोशनी में दादी की पुरानी कहानी जी उठती है — चुराया गया आम का बाग, गुस्सैल पड़ोसी। पड़ोसी भी अमरूद की थाली लेकर जुड़ जाता है। बिजली लौटने पर कोई टीवी नहीं छूता — कुछ शामों को गैजेट्स नहीं, लोग चाहिए।",
      },
      paragraphs: [
        "It was a hot July evening in a small Chattogram neighbourhood. The whole street had just gone dark. Load-shedding had arrived right before dinner, and the ceiling fans stopped with a tired sigh. 'Half an hour again,' groaned thirteen-year-old Mithila, whose favourite show had just frozen on her dark phone.",
        "Her father lit three wax candles and placed them in the middle of the dining table. Her grandmother brought her old brass lamp down from the shelf. The warm yellow light changed the whole room completely. Suddenly the familiar house looked soft and mysterious, like a scene from an old storybook.",
        "'Without your mobile, you will survive one evening,' Mithila's mother teased gently. Then grandmother cleared her throat and began the story everyone had heard a hundred times. It was the tale of her childhood village, a stolen mango orchard and a very angry neighbour. This time, however, Mithila discovered new details she had never noticed before.",
        "Soon her little brother was adding silly endings, and her father was imitating the angry neighbour's walk. Everyone was laughing so loudly that the neighbour himself knocked on the door. He was holding a candle and a plate of guavas. 'If there is no electricity, there must be more company,' he said, joining the circle.",
        "When the lights finally returned, nobody moved at all. The television stayed off, the phones stayed silent, and the candles kept burning. 'The stories are better than the show,' Mithila admitted, resting her head on her grandmother's shoulder. Her brother nodded with his mouth full of guava.",
        "Later, Mithila wrote one line in her diary: 'Tonight the electricity failed, but our home did not.' She thought about how much noise her screens made every single day. Some golden evenings do not need power at all. They only need people who are willing to sit together, talk and listen until the candles melt.",
      ],
      vocabulary: [
        {
          word: "load-shedding",
          meaning: {
            bn: "লোডশেডিং — বিদ্যুতের চাহিদা মেটাতে না পারায় সাময়িকভাবে কারেন্ট বন্ধ",
            en: "a planned stop of electricity when supply is short",
            hi: "लोडशेडिंग — बिजली की कमी पर थोड़ी देर के लिए करंट बंद करना",
          },
          example: "Load-shedding usually starts here after six in the evening.",
        },
        {
          word: "candle",
          meaning: {
            bn: "মোমবাতি — কাঠির চারপাশে মোম জড়ানো, জ্বলে আলো দেয়",
            en: "a stick of wax that gives light when it burns",
            hi: "मोमबत्ती — जलने पर रोशनी देने वाली मोम की छड़ी",
          },
          example: "We lit two candles during the power cut.",
        },
        {
          word: "tease",
          meaning: {
            bn: "ঠাট্টা করা — ভালোবেসে মজা করে হালকা বিরক্ত করা",
            en: "to laugh at someone in a playful, kind way",
            hi: "चिढ़ाना — प्यार से हँसी में परेशान करना",
          },
          example: "Her brother always teases her about her singing.",
        },
        {
          word: "orchard",
          meaning: {
            bn: "বাগান — ফলের গাছে ভরা জমি, যেমন আমবাগান",
            en: "a field where fruit trees grow",
            hi: "बाग — फल के पेड़ों वाला खेत",
          },
          example: "The mango orchard belonged to my grandfather.",
        },
        {
          word: "imitate",
          meaning: {
            bn: "নকল করা — অন্যের কথা বা চলাফেরা হুবহু করার চেষ্টা করা",
            en: "to copy the way someone speaks or acts",
            hi: "नकल करना — किसी के बोलने या चलने की नकल करना",
          },
          example: "The comedian imitated the teacher's voice perfectly.",
        },
        {
          word: "gratitude",
          meaning: {
            bn: "কৃতজ্ঞতা — পাওয়া ভালোবাসা ও সুযোগের জন্য মনের ভিতর কৃতজ্ঞ ভাব",
            en: "the feeling of being thankful",
            hi: "कृतज्ञता — आभारी होने का भाव",
          },
          example: "She thanked the teacher with tears of gratitude.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "রাতের খাওয়ার ঠিক আগে কী ঘটেছিল?",
            en: "What happened right before dinner?",
            hi: "रात के खाने से ठीक पहले क्या हुआ?",
          },
          options: [
            { bn: "ঝড়ে একটি গাছ পড়ে গিয়েছিল", en: "A tree fell in a storm", hi: "तूफ़ान में एक पेड़ गिर गया" },
            { bn: "মিথিলার ফোন হারিয়ে গিয়েছিল", en: "Mithila lost her phone", hi: "मिथिला का फ़ोन खो गया" },
            { bn: "লোডশেডিং শুরু হয়ে গিয়েছিল", en: "Load-shedding started", hi: "लोडशेडिंग शुरू हो गई" },
            { bn: "প্রতিবেশীরা শহর ছেড়ে চলে গিয়েছিলেন", en: "The neighbours left for the city", hi: "पड़ोसी शहर जा चुके थे" },
          ],
          answer: 2,
          explain: {
            bn: "গল্পের শুরুতেই বলা আছে — রাতের খাওয়ার ঠিক আগে লোডশেডিং এসেছিল, পাখির ঘরকানা থেমে গিয়েছিল।",
            en: "The opening paragraph says load-shedding arrived right before dinner, and the ceiling fans stopped.",
            hi: "पहले अनुच्छेद में कहा गया है कि रात के खाने से ठीक पहले लोडशेडिंग हुई और पंखे बंद हो गए।",
          },
        },
        {
          question: {
            bn: "পুরনো গ্রামের গল্পটা কে শুরু করেছিল?",
            en: "Who began the old village story?",
            hi: "पुरानी गाँव वाली कहानी किसने शुरू की?",
          },
          options: [
            { bn: "দাদি/নানি", en: "The grandmother", hi: "दादी/नानी" },
            { bn: "মিথিলার বাবা", en: "Mithila's father", hi: "मिथिला के पिता" },
            { bn: "পাশের বাড়ির প্রতিবেশী", en: "The next-door neighbour", hi: "बगल का पड़ोसी" },
            { bn: "মিথিলার ছোট ভাই", en: "Mithila's little brother", hi: "मिथिला का छोटा भाई" },
          ],
          answer: 0,
          explain: {
            bn: "দাদি গলা পরিষ্কার করে সেই গল্প শুরু করেন — শৈশবের গ্রাম, চুরি হওয়া আমবাগান আর রাগী প্রতিবেশীর কাহিনি।",
            en: "Grandmother cleared her throat and began the old story of her childhood village, a stolen mango orchard and an angry neighbour.",
            hi: "दादी ने गला साफ़ करके पुरानी कहानी शुरू की — बचपन का गाँव, चुराया हुआ आम का बाग और गुस्सैल पड़ोसी।",
          },
        },
        {
          question: {
            bn: "প্রতিবেশী দরজায় কী নিয়ে এসেছিলেন?",
            en: "What did the neighbour bring to the door?",
            hi: "पड़ोसी दरवाज़े पर क्या लाए?",
          },
          options: [
            { bn: "গরম চায়ের এক কাপ", en: "A cup of hot tea", hi: "गरम चाय का एक कप" },
            { bn: "একটি টর্চলাইট", en: "A torch", hi: "एक टॉर्च" },
            { bn: "ব্যাটারির একটি প্যাকেট", en: "A packet of batteries", hi: "बैटरी का एक पैकेट" },
            { bn: "একটি মোমবাতি আর পেয়ারার প্লেট", en: "A candle and a plate of guavas", hi: "एक मोमबत्ती और अमरूद की थाली" },
          ],
          answer: 3,
          explain: {
            bn: "হাসির শব্দ শুনে প্রতিবেশী নিজেই দরজায় কড়া নাড়েন — হাতে একটি মোমবাতি আর পেয়ারার একটি প্লেট।",
            en: "Hearing the laughter, the neighbour himself knocked — he was holding a candle and a plate of guavas.",
            hi: "हँसी सुनकर पड़ोसी स्वयं दरवाज़े पर दस्तक देते हैं — उनके हाथ में एक मोमबत्ती और अमरूद की थाली थी।",
          },
        },
        {
          question: {
            bn: "বিদ্যুৎ ফিরে আসার পর মিথিলা কী স্বীকার করল?",
            en: "After the lights returned, what did Mithila admit?",
            hi: "बिजली लौटने के बाद मिथिला ने क्या स्वीकार किया?",
          },
          options: [
            { bn: "সে একদম ক্লান্ত হয়ে গেছে", en: "That she was completely tired", hi: "कि वह बिल्कुल थक गई है" },
            { bn: "গল্পগুলো টিভির শোয়ের চেয়েও ভালো", en: "That the stories were better than the show", hi: "कि कहानियाँ टीवी के शो से भी अच्छी हैं" },
            { bn: "সে আবার ফোনে গেম খেলতে চায়", en: "That she wanted to play games on her phone again", hi: "कि वह फिर फ़ोन पर गेम खेलना चाहती है" },
            { bn: "সে এখনই ঘুমাতে যেতে চায়", en: "That she wanted to go to sleep right away", hi: "कि वह तुरंत सोना चाहती है" },
          ],
          answer: 1,
          explain: {
            bn: "আলো ফিরলেও মিথিলা স্বীকার করে — 'The stories are better than the show' — দাদির কাঁধে মাথা রেখে।",
            en: "Even after the lights returned, Mithila admitted, 'The stories are better than the show,' resting on her grandmother's shoulder.",
            hi: "बिजली लौटने पर भी मिथिला ने स्वीकार किया, 'कहानियाँ शो से बेहतर हैं', दादी के कंधे पर सिर रखकर।",
          },
        },
      ],
    },
  },
  {
    slug: "story3-b2-05",
    level: "intermediate",
    category: "inspire",
    minutes: 4,
    unit: 0, // standalone
    data: {
      title: {
        bn: "রিকশাওয়ালার ছেলেটির গিটার",
        en: "The Rickshaw-Puller's Son and His Guitar",
        hi: "रिक्शा चालक के बेटे की गिटार",
      },
      summary: {
        bn: "পুরনো ঢাকার ভাড়া ঘরে জব্বার চাচার ছেলে রাফির চোখ আটকে আছে পাশের ছাদের ভাঙা গিটারে। আট শত টাকার জন্য সাত মাস — বোতল বিক্রি, লঞ্চঘাটে ব্যাগ বহন, জন্মদিনেও বিরিয়ানি বাদ। ঈদের কমিউনিটি কনসার্টে পুরো গলি যখন হাততালি দিচ্ছে, সামনের সারির বাবা গামছায়া চোখ মুছছেন — 'আমার ছেলে ভাড়া নয়, স্বপ্ন তাড়াবে।'",
        en: "In a rented room of Old Dhaka, Rafi, a rickshaw-puller's son, cannot stop dreaming about a broken guitar on the next roof. Seven months of selling bottles, carrying bags and skipping biryani raise eight hundred taka. At the Eid community concert, the whole lane claps while his father quietly wipes his eyes.",
        hi: "पुराने ढाका के किराए के कमरे में रिक्शा चालक का बेटा राफ़ि बगल की छत की टूटी गिटार के सपने देखता है। बोतलें बेचकर, बैग उठाकर और बिरयानी छोड़कर वह सात महीने में आठ सौ टका जुटाता है। ईद के कम्युनिटी कंसर्ट में पूरा गली ताली बजाता है, और बाबा चुपचाप आँखें पोंछते हैं।",
      },
      paragraphs: [
        "Every morning, Jabbar chacha pulled his rickshaw through the narrow streets of Old Dhaka. His son Rafi watched him from the window of their one rented room. They had been living in that single room for ten years. On the roof next door, someone had left an old broken guitar. Rafi could not stop dreaming about it.",
        "The guitar belonged to a music teacher who had moved away years ago. 'If you really want it, bring me eight hundred taka,' the landlord laughed, thinking the boy was joking. Rafi was not laughing at all. His father earned barely five hundred taka a day, so eight hundred felt impossible.",
        "Rafi started collecting empty plastic bottles after school and selling them to a recycling shop. On Fridays, he carried passengers' bags at the busy launch ghat. He even skipped his favourite biryani on his own birthdays. Slowly, coin by coin, the small tin box under his bed was filling up.",
        "Some days were cruel. Once, heavy rain destroyed half of his collected bottles, and he cried quietly on the stairs. But Jabbar chacha said nothing. He only started leaving one extra ten-taka coin in the box whenever he had a good day. Neither of them ever mentioned this small kindness aloud.",
        "After seven months, Rafi finally had enough money. The old teacher smiled and handed over the dusty guitar. Rafi learned chords from a free mobile app and late-night videos. He practised on the roof while the city was sleeping. His fingers hurt every night, but he never missed a single day.",
        "Last month, the community club organised a small concert for Eid. Rafi played two songs on his old guitar, and the whole lane clapped until their hands were red. Jabbar chacha was sitting in the front row, wiping his eyes with his towel. 'My son will chase dreams, not fares,' he told the neighbours proudly.",
      ],
      vocabulary: [
        {
          word: "rent",
          meaning: {
            bn: "ভাড়া — বাসা বা জিনিস ব্যবহারের জন্য নিয়মিত দেওয়া টাকা",
            en: "money paid regularly to use a room or house",
            hi: "किराया — कमरा या घर इस्तेमाल के लिए नियमित दिया जाने वाला पैसा",
          },
          example: "They pay the room rent in the first week of every month.",
        },
        {
          word: "recycle",
          meaning: {
            bn: "পুনর্ব্যবহার করা — পুরনো জিনিস থেকে নতুন জিনিস তৈরি করা",
            en: "to turn old things into new useful things",
            hi: "रिसाइकल करना — पुरानी चीज़ों से नई उपयोगी चीज़ बनाना",
          },
          example: "Our school collects old paper to recycle it.",
        },
        {
          word: "skip",
          meaning: {
            bn: "বাদ দেওয়া — ইচ্ছা করে কিছু না করা বা না খাওয়া",
            en: "to choose not to do or eat something",
            hi: "छोड़ देना — कोई चीज़ जानबूझकर न करना",
          },
          example: "He never skips breakfast before school.",
        },
        {
          word: "chord",
          meaning: {
            bn: "কর্ড — গিটারে একসঙ্গে বাজানো কয়েকটি সুরেলা নোটের সমষ্টি",
            en: "two or more musical notes played together on a guitar",
            hi: "कॉर्ड — गिटार पर एक साथ बजाए जाने वाले स्वर",
          },
          example: "She learned three guitar chords in one week.",
        },
        {
          word: "kindness",
          meaning: {
            bn: "দয়া — অন্যের প্রতি মন দিয়ে ভালোবাসা ও সাহায্যের মনোভাব",
            en: "the quality of being kind and helpful to others",
            hi: "दयालुता — दूसरों की मदद करने वाला व्यवहार",
          },
          example: "A small kindness can change someone's whole day.",
        },
        {
          word: "concert",
          meaning: {
            bn: "কনসার্ট — দর্শকের সামনে গান বা সুরের অনুষ্ঠান",
            en: "a public musical performance",
            hi: "संगीत कार्यक्रम — दर्शकों के सामने गाने का शो",
          },
          example: "The community concert started at seven in the evening.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "রাফি কী নিয়ে স্বপ্ন দেখত?",
            en: "What did Rafi dream about?",
            hi: "राफ़ि किसके बारे में सपने देखता था?",
          },
          options: [
            { bn: "তার বাবার জন্য একটি নতুন রিকশা", en: "A new rickshaw for his father", hi: "अपने पिता के लिए एक नया रिक्शा" },
            { bn: "পাশের ছাদে রাখা ভাঙা পুরনো গিটার", en: "The old broken guitar on the next roof", hi: "बगल की छत पर रखी टूटी पुरानी गिटार" },
            { bn: "একটি বড় ইটের বাড়ি", en: "A big brick house", hi: "एक बड़ा ईंट का घर" },
            { bn: "নিজের একটি মোবাইল ফোন", en: "His own mobile phone", hi: "अपना एक मोबाइल फ़ोन" },
          ],
          answer: 1,
          explain: {
            bn: "শুরুর অনুচ্ছেদেই — পাশের ছাদে ফেলে রাখা ভাঙা গিটারের স্বপ্ন থেকে রাফির মন চলে যেত বারবার।",
            en: "The first paragraph says Rafi could not stop dreaming about the old broken guitar left on the next roof.",
            hi: "पहला अनुच्छेद कहता है कि राफ़ि बगल की छत पर रखी टूटी गिटार के सपने से बाहर नहीं आ पाता था।",
          },
        },
        {
          question: {
            bn: "রাফি কীভাবে আট শত টাকা জমাল?",
            en: "How did Rafi collect the eight hundred taka?",
            hi: "राफ़ि ने आठ सौ टका कैसे जुटाए?",
          },
          options: [
            { bn: "বাবার রিকশা চালিয়ে ভাড়া করে", en: "By driving his father's rickshaw", hi: "अपने पिता का रिक्शा चलाकर" },
            { bn: "বন্ধুদের কাছ থেকে ধার নিয়ে", en: "By borrowing from his friends", hi: "दोस्तों से उधार लेकर" },
            { bn: "স্কুলের পুরস্কারের টাকায়", en: "With his school prize money", hi: "स्कूल के इनाम के पैसों से" },
            { bn: "বোতল বিক্রি, ব্যাগ বহন আর বিরিয়ানি বাদ দিয়ে", en: "By selling bottles, carrying bags and skipping biryani", hi: "बोतलें बेचकर, बैग उठाकर और बिरयानी छोड़कर" },
          ],
          answer: 3,
          explain: {
            bn: "রাফি পড়াশোনার পরে খালি বোতল বিক্রি করত, শুক্রবারে লঞ্চঘাটে ব্যাগ বহন করত, জন্মদিনেও বিরিয়ানি বাদ দিত।",
            en: "Rafi sold empty bottles after school, carried bags at the launch ghat on Fridays and even skipped biryani on his birthdays.",
            hi: "राफ़ि स्कूल के बाद खाली बोतलें बेचता, शुक्रवार को लॉन्च घाट पर बैग उठाता और जन्मदिन में भी बिरयानी छोड़ देता।",
          },
        },
        {
          question: {
            bn: "জব্বার চাচা গোপনে কী করতেন?",
            en: "What did Jabbar chacha do secretly?",
            hi: "जब्बार चाचा चुपके से क्या करते थे?",
          },
          options: [
            { bn: "ভালো দিনে বাক্সে একটা অতিরিক্ত দশ-টাকার কয়েন রেখে যেতেন", en: "He left an extra ten-taka coin in the box on good days", hi: "अच्छे दिनों में वे डिब्बे में एक अतिरिक्त दस-टका का सिक्का रख जाते थे" },
            { bn: "রাফির জন্য আগেই গিটার কিনে রেখেছিলেন", en: "He had already bought a guitar for Rafi", hi: "वे राफ़ि के लिए पहले से गिटार खरीद चुके थे" },
            { bn: "বৃষ্টিতে ভেজা বোতলগুলো রোদে শুকিয়ে দিতেন", en: "He dried the rain-soaked bottles in the sun", hi: "वे बारिश में भीगी बोतलें धूप में सुखाते थे" },
            { bn: "রাফির স্কুলের খরচ চুপচাপ দিতেন", en: "He quietly paid Rafi's school fees", hi: "वे चुपचाप राफ़ि की स्कूल फ़ीस देते थे" },
          ],
          answer: 0,
          explain: {
            bn: "ভালো দিনে জব্বার চাচা টিনের বাক্সে একটা অতিরিক্ত দশ-টাকার কয়েন রেখে যেতেন — দুজনেই এই দয়ার কথা মুখে আনতেন না।",
            en: "On good days, Jabbar chacha left one extra ten-taka coin in the tin box — neither of them ever spoke about this kindness.",
            hi: "अच्छे दिनों में जब्बार चाचा टिन के डिब्बे में एक अतिरिक्त दस-टका का सिक्का रख जाते थे — दोनों में से कोई इस दयालुता की बात ज़ुबान पर नहीं लाता था।",
          },
        },
        {
          question: {
            bn: "রাফি শেষ পর্যন্ত কোথায় গান বাজাল?",
            en: "Where did Rafi finally play his songs?",
            hi: "राफ़ि ने आख़िर में अपने गाने कहाँ बजाए?",
          },
          options: [
            { bn: "স্কুলের বার্ষিক অনুষ্ঠানে", en: "At the school annual function", hi: "स्कूल के वार्षिक समारोह में" },
            { bn: "ব্যস্ত লঞ্চঘাটে", en: "At the busy launch ghat", hi: "व्यस्त लॉन्च घाट पर" },
            { bn: "ঈদ উপলক্ষে কমিউনিটি ক্লাবের কনসার্টে", en: "At the community club's Eid concert", hi: "ईद पर कम्युनिटी क्लब के कंसर्ट में" },
            { bn: "একটি টিভি প্রতিযোগিতায়", en: "On a TV competition", hi: "एक टीवी प्रतियोगिता में" },
          ],
          answer: 2,
          explain: {
            bn: "গত মাসে কমিউনিটি ক্লাব ঈদে ছোট একটি কনসার্টের আয়োজন করে, আর রাফি সেখানে তার পুরনো গিটারে দুটি গান বাজায়।",
            en: "Last month, the community club organised a small Eid concert, and Rafi played two songs there on his old guitar.",
            hi: "पिछले महीने कम्युनिटी क्लब ने ईद पर एक छोटा कंसर्ट आयोजित किया, और राफ़ि ने वहाँ अपनी पुरानी गिटार पर दो गाने बजाए।",
          },
        },
      ],
    },
  },
];
