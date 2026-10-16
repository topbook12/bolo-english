// ─── Learning-path grammar seeds v3: BEGINNER batch B2a (2 deep lessons) ───
// Task 9.3-W2. Owner mandate: every topic fully developed so ONE lesson can
// teach the whole topic — 8 sections per lesson (usage → formation → signal
// words → 3 topic-specific deep sections → common Bengali-speaker mistakes →
// mini story + recap), 4-5 wrong→right examples per section, 10 tips and a
// 10-question quiz. TriText = { bn, en, hi }: Bengali PRIMARY, en + hi are
// full faithful translations. English example sentences always stay English.
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV3Entry {
  topic: string;
  level: LibraryLevel;
  title: string;
  unit: number;
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V3_B2A: SeedGrammarV3Entry[] = [
  /* ── 1. Articles a/an/the (Beginner) ───────────────────────────────── */
  {
    topic: "Articles (a/an/the)",
    level: "beginner",
    title: "Articles a/an/the (Beginner)",
    unit: 5,
    data: {
      title: {
        bn: "আর্টিকেল a/an/the (বিগিনার)",
        en: "Articles a/an/the (Beginner)",
        hi: "आर्टिकल a/an/the (बिगिनर)",
      },
      intro: {
        bn: "এই পাঠ লার্নিং পথের পঞ্চম ব্যাকরণ পাঠ — আগের পাঠগুলোতে তিন কাল আর কর্তা-ক্রিয়ার মিল শিখে ফেললে এখানে আরাম লাগবে, কারণ উদাহরণে সেগুলোই ফিরে আসবে। এবার পরিচয় ইংরেজির সবচেয়ে ছোট কিন্তু সবচেয়ে কাজের শব্দগুলোর — a, an আর the। বাংলায় এই শব্দগুলোর কোনো অস্তিত্বই নেই: আমরা বলি 'আমি বই পড়ি', কিন্তু ইংরেজিতে বইটা কি একটা বই না কি ওই চেনা বইটা — তা বলতেই হয়: I read a book, নয়তো I read the book। দুই ভাষার এই ফারাক থেকেই জন্মায় বাঙালি শিক্ষার্থীদের সবচেয়ে চেনা ভুল — 'I read book', 'He is best player', 'She is MA'। এই পাঠে শিখব a/an/the কখন বসে, কোথায় বসে, a না an ঠিক করে কী, আর কখন একেবারেই কিছু বসে না।",
        en: "This is the fifth grammar lesson on the learning path — the earlier lessons on tenses and subject-verb agreement will make it comfortable, because they keep returning in the examples. Now meet the smallest but busiest words of English — a, an and the. Bengali has no such words at all: we say 'ami boi pori', but English must say whether the book is any one book or that known book — I read a book, or I read the book. That gap produces the most familiar Bengali-speaker mistakes: 'I read book', 'He is best player', 'She is MA'. In this lesson we learn, step by step, when a/an/the sit, where they sit, what decides a versus an, and when nothing sits at all.",
        hi: "यह लर्निंग पथ का पाँचवाँ व्याकरण पाठ है — पिछले पाठों में काल और कर्ता-क्रिया मिलान सीख लेने से यहाँ आराम होगा, क्योंकि वही उदाहरणों में लौटते रहेंगे। अब मिलिए अंग्रेज़ी के सबसे छोटे पर सबसे व्यस्त शब्दों से — a, an और the। बांग्ला में ऐसे शब्द हैं ही नहीं: हम कहते हैं 'আমি বই পড়ি', पर अंग्रेज़ी को बताना पड़ता है कोई एक किताब है या वही जानी-पहचानी किताब — I read a book, या I read the book। इसी फ़र्क़ से बांग्लाभाषी छात्रों की सबसे जानी-पहचानी गलतियाँ बनती हैं: 'I read book', 'He is best player', 'She is MA'। इस पाठ में हम कदम-दर-कदम सीखेंगे: a/an/the कब बैठते हैं, कहाँ बैठते हैं, a बनाम an कैसे तय होता है, और कब कुछ भी नहीं बैठता।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — বাংলায় নেই, ইংরেজিতে রোজ",
            en: "When to use them — absent in Bengali, daily in English",
            hi: "कब इस्तेमाल करें — बांग्ला में नहीं, अंग्रेज़ी में रोज़",
          },
          body: {
            bn: "Article মানে নামের আগে বসা ছোট্ট সংকেত, যেটা বলে দেয় আমরা কোন জিনিসটার কথা বলছি। তিনটা article আছে — a, an আর the — আর চতুর্থ একটা 'অদৃশ্য' article, মানে কিছুই না বসা (zero article)। a/an মানে 'একটা, কোনো একটা' — যেটা চেনা নয়, অনেকগুলোর মধ্যে একটা: I saw a bird, She has a car। the মানে 'ওই নির্দিষ্টটা' — যেটা শ্রোতা আগেই চেনে বা পৃথিবীতে একটাই: The bird was red, Close the door। বাংলায় এই ফারাক 'একটা বই দাও' বনাম 'বইটা দাও' — এই জোড়ায় বেঁচে আছে; ইংরেজি সেটা করে a book বনাম the book দিয়ে। এখন আসল কথা: বাংলায় 'আমি বই পড়ি' বললেই চলে, কিন্তু ইংরেজিতে একবচন গণনাযোগ্য নাম (book, pen, house) কখনো একা দাঁড়ায় না — তার আগে a/an/the কিংবা my/this-এর মতো কিছু একটা বসতেই হবে। তাই 'I read book' ইংরেজিতে অসম্পূর্ণ বাক্য — I read a book বলতে হবে। মূলমন্ত্র: একবচন গণনাযোগ্য নামের আগে সবসময় কিছু একটা।",
            en: "An article is a tiny signal before a noun that tells the listener which thing we mean. English has three articles — a, an and the — plus an invisible fourth, meaning nothing sits there (zero article). a/an means 'one, some one' — something not yet known, one of many: I saw a bird, She has a car. the means 'that particular one' — already known to the listener or unique in the world: The bird was red, Close the door. Bengali keeps this contrast alive in the pair 'ekta boi dao' versus 'boita dao'; English does it with a book versus the book. Now the real point: Bengali is happy with 'ami boi pori', but a singular countable noun (book, pen, house) never stands alone in English — something like a/an/the or my/this must sit before it. So 'I read book' is an incomplete English sentence — it must be I read a book. The mantra: before every singular countable noun there is always something.",
            hi: "Article का मतलब नाम से पहले बैठा छोटा संकेत है, जो बताता है हम किस चीज़ की बात कर रहे हैं। अंग्रेज़ी में तीन article हैं — a, an और the — और एक अदृश्य चौथा, यानी कुछ भी न बैठना (zero article)। a/an का मतलब 'एक, कोई एक' — जो पहचाना नहीं, बहुतों में एक: I saw a bird, She has a car। the का मतलब 'वही निश्चित वाला' — जिसे सुननेवाला पहले से जानता है या दुनिया में एक ही है: The bird was red, Close the door। बांग्ला यह फ़र्क़ 'एकটা बই দাও' बनाम 'বইটা দাও' जोड़ी में रखता है; अंग्रेज़ी वही करती है a book बनाम the book से। असल बात: बांग्ला में 'আমি বই পড়ি' चल जाता है, पर अंग्रेज़ी में एकवचन गिनने योग्य संज्ञा (book, pen, house) कभी अकेली नहीं खड़ी होती — उससे पहले a/an/the या my/this जैसा कुछ बैठना ही चाहिए। इसलिए 'I read book' अंग्रेज़ी में अधूरा वाक्य है — कहना होगा I read a book। मूल मंत्र: एकवचन गिनने योग्य संज्ञा से पहले हमेशा कुछ न कुछ।",
          },
          examples: [
            {
              wrong: "I read book every night.",
              right: "I read a book every night.",
              note: {
                bn: "'আমি বই পড়ি'-র সরাসরি অনুবাদ; ইংরেজিতে একবচন গণনাযোগ্য নাম একা থাকে না — কোনো একটা বই বোঝালে a।",
                en: "A straight translation of the Bengali sentence; a singular countable noun never stands alone — for any one book, use a.",
                hi: "'আমি বই পড়ি'-का सीधा अनुवाद; अंग्रेज़ी में एकवचन गिनने योग्य संज्ञा अकेली नहीं — कोई एक किताब हो तो a।",
              },
            },
            {
              wrong: "I have problem.",
              right: "I have a problem.",
              note: {
                bn: "বাংলায় 'আমার সমস্যা আছে' — 'একটা' লাগে না; ইংরেজি problem-ও একবচন, তাই a problem।",
                en: "Bengali needs no 'one' here, but problem is a singular countable noun in English — so a problem.",
                hi: "बांग्ला में 'একটা' नहीं लगता; पर अंग्रेज़ी में problem एकवचन है — इसलिए a problem।",
              },
            },
            {
              wrong: "She bought new dress yesterday.",
              right: "She bought a new dress yesterday.",
              note: {
                bn: "বিশেষণ থাকলেও নিয়ম এক — একবচন নামের আগে a; article বসে নাম-গোছার পুরো টুকরোর আগে।",
                en: "The rule holds even with an adjective — a sits before the whole noun phrase, not inside it.",
                hi: "विशेषण होने पर भी नियम वही — एकवचन संज्ञा से पहले a; article पूरे noun phrase से पहले बैठता है।",
              },
            },
            {
              wrong: "My father is doctor.",
              right: "My father is a doctor.",
              note: {
                bn: "পেশা বোঝাতে a/an বাধ্যতামূলক — বাংলা 'আমার বাবা ডাক্তার' একদম ঠিক, ইংরেজি a ছাড়া ভুল।",
                en: "Professions always take a/an — the Bengali sentence is perfect, the English one is wrong without a.",
                hi: "पेशा बताने के लिए a/an ज़रूरी — बांग्ला वाक्य बिल्कुल ठीक, अंग्रेज़ी a के बिना गलत।",
              },
            },
            {
              wrong: "He gave me orange.",
              right: "He gave me an orange.",
              note: {
                bn: "orange-এর প্রথম ধ্বনি 'অ' — vowel sound, তাই a নয়, an; ধ্বনির নিয়মটা পরের অংশে বিস্তারিত।",
                en: "Orange begins with a vowel sound, so it takes an, not a — the sound rule comes in detail soon.",
                hi: "orange की पहली ध्वनि स्वर है — इसलिए a नहीं, an; ध्वनि-नियम आगे विस्तार से।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন — article বসে নামের পুরো পরিবারের আগে",
            en: "Formation — the article sits before the whole noun family",
            hi: "बनावट — article बैठता है पूरे संज्ञा-परिवार से पहले",
          },
          body: {
            bn: "Article-এর বসার জায়গা নির্দিষ্ট: সে বসে নামের ঠিক আগে, কিন্তু নামের সঙ্গে বিশেষণ থাকলে বসে বিশেষণের আগে — a red car (a red car the নয়), an old house, the big tree। একাধিক বিশেষণ থাকলেও article সবার শুরুতে: a nice big red bag। বিশেষণের আগে very/really-জাতীয় adverb থাকলে সেটাও article-এর পরে: a very good boy, a really tall building। মনে রাখুন, a/an শুধু একবচনে বসে — বহুবচনে হয় কিছুই না, হয় the: I have a book, কিন্তু I have books / I have the books। প্রশ্ন-নেগেটিভেও article-এর জায়গা বদলায় না: Do you have a pen? I don't have a pen — do/does/don't ঢুকলেও a pen পেনের আগেই থাকে। আর একটা জিনিস — article-এর পরে ক্রিয়া আসে না: a go, an eat জাতীয় কিছু ইংরেজিতে নেই; article শুধু নামের সেবক।",
            en: "The article has a fixed seat: right before the noun — but when an adjective comes with the noun, the article sits before the adjective: a red car (never 'a red car the' inside out), an old house, the big tree. With several adjectives it still opens the line: a nice big red bag. If an adverb like very or really stands before the adjective, it also goes after the article: a very good boy, a really tall building. Remember, a/an exist only in the singular — plurals take either nothing or the: I have a book, but I have books / I have the books. Questions and negatives do not move the article: Do you have a pen? I don't have a pen — even when do/does/don't enters, a pen stays together before pen. One more thing — no verb ever follows an article: things like 'a go' or 'an eat' do not exist in English; articles serve nouns only.",
            hi: "Article की सीट तय है: संज्ञा के ठीक पहले — पर संज्ञा के साथ विशेषण हो तो विशेषण से पहले: a red car, an old house, the big tree। कई विशेषण हों तो भी article सबसे आगे: a nice big red bag। विशेषण से पहले very/really जैसा adverb हो तो वह भी article के बाद: a very good boy, a really tall building। याद रखें, a/an केवल एकवचन में बैठते हैं — बहुवचन में या तो कुछ नहीं, या the: I have a book, पर I have books / I have the books। प्रश्न-निषेध में article की जगह नहीं बदलती: Do you have a pen? I don't have a pen — do/does/don't आने पर भी a pen एक साथ रहता है। एक बात और — article के बाद क्रिया नहीं आती; article केवल संज्ञा का सेवक है।",
          },
          examples: [
            {
              wrong: "She has red a car.",
              right: "She has a red car.",
              note: {
                bn: "article বিশেষণের আগে — a red car; বিশেষণ আর article উল্টে গেলে বাক্য ভাঙে।",
                en: "The article goes before the adjective — a red car; swapping the two breaks the sentence.",
                hi: "article विशेषण से पहले — a red car; दोनों उलटने पर वाक्य टूट जाता है।",
              },
            },
            {
              wrong: "I saw very big elephant.",
              right: "I saw a very big elephant.",
              note: {
                bn: "very বিশেষণের আগে থাকলেও a বসবে পুরো জোড়ার আগে — a very big elephant।",
                en: "Even with very before the adjective, a opens the whole phrase — a very big elephant.",
                hi: "very विशेषण से पहले होने पर भी a पूरे phrase से पहले — a very big elephant।",
              },
            },
            {
              wrong: "Do you have pen?",
              right: "Do you have a pen?",
              note: {
                bn: "প্রশ্নে do ঢুকলেও একবচন নাম একা থাকে না — a pen জোড়াটা অটুট থাকে।",
                en: "Even in a question with do, the singular noun stays paired — a pen remains together.",
                hi: "प्रश्न में do आने पर भी एकवचन संज्ञा जोड़ी नहीं छोड़ती — a pen एक साथ।",
              },
            },
            {
              wrong: "We waited for long time.",
              right: "We waited for a long time.",
              note: {
                bn: "'অনেকক্ষণ' = a long time — বাংলায় 'একটা' না বললেও ইংরেজি এখানে a দাবি করে।",
                en: "'For a long time' is the fixed phrase — English demands a here even though Bengali says nothing.",
                hi: "'অनেকক্ষণ' = a long time — बांग्ला कुछ न कहने पर भी अंग्रेज़ी यहाँ a माँगती है।",
              },
            },
            {
              wrong: "They have the new bikes.",
              right: "They have new bikes.",
              note: {
                bn: "বহুবচনে a/an বসেই না; নির্দিষ্ট কিছু বাইক বোঝাচ্ছেন না হলে কিছুই না — new bikes।",
                en: "Plurals never take a/an; unless you mean particular bikes, nothing goes there — new bikes.",
                hi: "बहुवचन में a/an बैठता ही नहीं; निश्चित बाइकें न हों तो कुछ नहीं — new bikes।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস শব্দ — কখন a/an, কখন the, কখন কিছুই না",
            en: "Signal words — when a/an, when the, when nothing",
            hi: "संकेत-शब्द — कब a/an, कब the, कब कुछ नहीं",
          },
          body: {
            bn: "বাক্যের ভেতরের শব্দগুলোই বলে দেয় কোন article বসবে। a/an-এর আভাস: প্রথমবার কোনো জিনিসের কথা বলা (I saw a dog), পেশা (She is a nurse), এক ধরনের জিনিসের প্রতিনিধি হিসেবে একটা (A dog is loyal), 'প্রতি'-র হিসাব (once a week, twice a month, 500 taka a kilo)। the-এর আভাস: দ্বিতীয়বার একই জিনিস (The dog was black), দুজনের কাছেই চেনা জিনিস (the kitchen, the bus stop), পৃথিবীতে একটাই জিনিস (the sun, the moon, the sky), সর্বোচ্চ মান (the best, the tallest), of-যুক্ত নির্দিষ্টতা (the door of the room)। zero article-এর আভাস: খেলার নাম (play cricket), ভাষার নাম (speak Bengali), খাবারের নাম (have lunch), সাধারণ বহুবচন (Books are cheap), বেশিরভাগ দেশ আর মানুষের নাম (in Bangladesh, This is Rahim)। বাক্য বানানোর আগে ভেবে নিন — জিনিসটা কি নতুন নাকি চেনা? একটা না একটাই? খেলা-ভাষা-খাবার তো নয়? — উত্তরই article ঠিক করে দেবে।",
            en: "The words inside the sentence themselves announce the right article. Signals for a/an: mentioning something for the first time (I saw a dog), a profession (She is a nurse), one of a kind as a representative (A dog is loyal), the 'per' count (once a week, twice a month, 500 taka a kilo). Signals for the: the same thing mentioned again (The dog was black), something both sides know (the kitchen, the bus stop), one of a kind in the world (the sun, the moon, the sky), superlatives (the best, the tallest), of-phrases (the door of the room). Signals for zero article: sports (play cricket), languages (speak Bengali), meals (have lunch), general plurals (Books are cheap), most countries and people's names (in Bangladesh, This is Rahim). Before building a sentence ask — is the thing new or known? one of many or the only one? is it a game, a language, a meal? — the answers fix the article.",
            hi: "वाक्य के भीतर के शब्द ही सही article की घोषणा कर देते हैं। a/an के संकेत: किसी चीज़ का पहला ज़िक्र (I saw a dog), पेशा (She is a nurse), प्रतिनिधि एक (A dog is loyal), 'प्रति' का हिसाब (once a week, twice a month)। the के संकेत: उसी चीज़ का दूसरा ज़िक्र (The dog was black), दोनों को जानी चीज़ (the kitchen, the bus stop), दुनिया में एक ही (the sun, the moon, the sky), सर्वोच्च (the best, the tallest), of-वाक्यांश (the door of the room)। zero article के संकेत: खेल (play cricket), भाषा (speak Bengali), भोजन (have lunch), सामान्य बहुवचन (Books are cheap), अधिकांश देश और नाम (in Bangladesh, This is Rahim)। वाक्य बनाने से पहले पूछें — चीज़ नई है या जानी? एक में से या अकेली? खेल-भाषा-भोजन तो नहीं? — उत्तर ही article तय करेगा।",
          },
          examples: [
            {
              wrong: "Yesterday I saw dog in our street.",
              right: "Yesterday I saw a dog in our street.",
              note: {
                bn: "গল্পে প্রথমবার কুকুর — কোন কুকুর তা শ্রোতা এখনো জানে না, তাই a dog।",
                en: "The dog appears for the first time — the listener does not yet know which one, so a dog.",
                hi: "कहानी में कुत्ता पहली बार — सुननेवाला अभी जानता नहीं कौन-सा, इसलिए a dog।",
              },
            },
            {
              wrong: "She is nurse at the hospital.",
              right: "She is a nurse at the hospital.",
              note: {
                bn: "পেশা বোঝাতে a nurse; আর hospital এখানে দুজনেরই চেনা — তাই the hospital-ও ঠিকই আছে।",
                en: "Professions take a nurse; and the hospital is known to both sides — so the hospital is also right.",
                hi: "पेशा के लिए a nurse; और hospital दोनों को जाना है — इसलिए the hospital भी ठीक।",
              },
            },
            {
              wrong: "I go to the market once the week.",
              right: "I go to the market once a week.",
              note: {
                bn: "'প্রতি সপ্তাহে একবার' — হিসাব-বোঝাতে a = per: once a week, twice a day, 60 taka a dozen।",
                en: "'Once per week' — in counts a works as per: once a week, twice a day, 60 taka a dozen.",
                hi: "'हफ़्ते में एक बार' — हिसाब में a = per: once a week, twice a day।",
              },
            },
            {
              wrong: "We watched the football last night.",
              right: "We watched football last night.",
              note: {
                bn: "খেলার নাম সাধারণ অর্থে zero article — play/watch football; the football মানে হয়তো ওই বলটা!",
                en: "A sport in its general sense takes zero article — play/watch football; 'the football' would mean that particular ball!",
                hi: "खेल के सामान्य अर्थ में zero article — play/watch football; 'the football' मतलब वही विशेष गेंद!",
              },
            },
            {
              wrong: "I live in the Bangladesh.",
              right: "I live in Bangladesh.",
              note: {
                bn: "বেশিরভাগ দেশের নামে কিছু বসে না — in Bangladesh, in India; the United States-জাতীয় ব্যতিক্রম পরে শিখবেন।",
                en: "Most country names take nothing — in Bangladesh, in India; exceptions like the United States come later.",
                hi: "अधिकांश देशों के नाम से पहले कुछ नहीं — in Bangladesh, in India; the United States जैसे अपवाद बाद में।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "a না an — চোখে নয়, কানে সিদ্ধান্ত",
            en: "a or an — decided by the ear, not the eye",
            hi: "a या an — आँख से नहीं, कान से फ़ैसला",
          },
          body: {
            bn: "a না an — এই সিদ্ধান্তে বানানের কোনো ভূমিকা নেই, সিদ্ধান্ত হয় পরের শব্দের প্রথম ধ্বনি শুনে। ধ্বনি vowel (অ-আ-ই-ও-উ জাতীয়) দিয়ে শুরু হলে an: an apple, an egg, an umbrella, an old man, an interesting story। এখানেই ফাঁদ দুটো। ফাঁদ ১: নীরব h — hour, honest, honour-এ h উচ্চারিত হয় না, শব্দ শুরু হয় 'অ'-তে, তাই an hour, an honest man — কিন্তু h জাগ্রত থাকলে a hotel, a house। ফাঁদ ২: vowel বানান অথচ consonant ধ্বনি — university-র শুরু 'ইউ' (yu), European-এর শুরু 'ইউ', one-এর শুরু 'ওয়া' (wa), useful-এর শুরু 'ইউ' — সবগুলোই a নেয়: a university, a European trip, a one-eyed man, a useful book। সংক্ষিপ্ত রূপেও ধ্বনি শোনা যায়: an MP3 player (em), an MA (em-ei), কিন্তু a BA (বি-এই)। সহজ কৌশল: নামের আগে a আর an দুটোই জোরে বলে দেখুন — যেটা মুখে মসৃণ লাগে, সেটাই লিখুন।",
            en: "Spelling plays no part in choosing a or an — the choice is made by the first sound of the next word. If that sound is a vowel, use an: an apple, an egg, an umbrella, an old man, an interesting story. Here live the two traps. Trap 1: the silent h — in hour, honest and honour the h is not pronounced and the word starts with a vowel sound, so an hour, an honest man; but with a sounding h it is a hotel, a house. Trap 2: vowel spelling with a consonant sound — university begins with 'yu', European with 'yu', one with 'wa', useful with 'yu' — all of them take a: a university, a European trip, a one-eyed man, a useful book. Abbreviations are heard too: an MP3 player (em), an MA (em-ay), but a BA (bee-ay). Easy trick: say both a and an aloud before the noun — write whichever glides smoothly.",
            hi: "a या an चुनने में वर्तनी का कोई रोल नहीं — फ़ैसला होता है अगले शब्द की पहली ध्वनि सुनकर। ध्वनि स्वर हो तो an: an apple, an egg, an umbrella, an old man, an interesting story। यहीं दो जाल हैं। जाल 1: मौन h — hour, honest, honour में h बोला नहीं जाता, शब्द स्वर से शुरू होता है, इसलिए an hour, an honest man; पर h जाग्रत हो तो a hotel, a house। जाल 2: वर्तनी में स्वर पर ध्वनि में व्यंजन — university 'यू' (yu) से, European 'यू' से, one 'व' (wa) से, useful 'यू' से शुरू — सब a लेते हैं: a university, a European trip, a one-eyed man, a useful book। संक्षिप्त रूपों में भी ध्वनि सुनी जाती है: an MP3 player (em), an MA (em-ay), पर a BA (बी-ऐ)। आसान तरकीब: noun से पहले a और an दोनों ज़ोर से बोलें — जो मुँह में सहज लगे, वही लिखें।",
          },
          examples: [
            {
              wrong: "He is a honest man.",
              right: "He is an honest man.",
              note: {
                bn: "honest-এর h নীরব — শব্দ শুরু 'অ'-ধ্বনিতে, তাই an; কানের নিয়ম, চোখের নয়।",
                en: "The h in honest is silent — the word opens with a vowel sound, so an; it is an ear rule, not an eye rule.",
                hi: "honest का h मौन — शब्द स्वर-ध्वनि से खुलता है, इसलिए an; कान का नियम, आँख का नहीं।",
              },
            },
            {
              wrong: "I will come back in a hour.",
              right: "I will come back in an hour.",
              note: {
                bn: "hour-এ h উচ্চারিত হয় না — 'আওয়ার', vowel ধ্বনি, তাই an hour; 'এক ঘণ্টা' বলতেই এটা।",
                en: "The h of hour is never pronounced — 'our', a vowel sound, hence an hour.",
                hi: "hour का h कभी बोला नहीं जाता — 'আওয়ার', स्वर-ध्वनि, इसलिए an hour।",
              },
            },
            {
              wrong: "My sister studies at an university.",
              right: "My sister studies at a university.",
              note: {
                bn: "university-র শুরু 'ইউ' — yu ধ্বনি consonant, তাই a; u বানানে থাকলেও কান ভুল বলে না।",
                en: "University opens with 'yu' — a consonant sound, so a; the u in spelling cannot fool the ear.",
                hi: "university 'यू' से खुलता है — yu ध्वनि व्यंजन, इसलिए a; वर्तनी का u कान को धोखा नहीं देता।",
              },
            },
            {
              wrong: "He bought an one-way ticket.",
              right: "He bought a one-way ticket.",
              note: {
                bn: "one-এর শুরু 'ওয়া' (wa) — consonant ধ্বনি, তাই a; o অক্ষর দেখে an লেখা বড় ফাঁদ।",
                en: "One begins with 'wa' — a consonant sound, so a; writing an after seeing the letter o is the classic trap.",
                hi: "one 'व' (wa) से शुरू — व्यंजन ध्वनि, इसलिए a; o अक्षर देखकर an लिखना बड़ा जाल है।",
              },
            },
            {
              wrong: "It was an European trip.",
              right: "It was a European trip.",
              note: {
                bn: "European-এর শুরু 'ইউর' — yu ধ্বনি, তাই a European; বানানে E থাকলেও ধ্বনি consonant।",
                en: "European opens with 'yu' — so a European; the spelling E hides a consonant sound.",
                hi: "European 'यूर' से शुरू — yu ध्वनि, इसलिए a European; वर्तनी में E होने पर भी ध्वनि व्यंजन।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "the-এর বিশেষ পরিবার — একটাই জিনিস, সর্বোচ্চ, of-ফ্রেজ",
            en: "The special family of the — unique things, superlatives, of-phrases",
            hi: "the का विशेष परिवार — एकमात्र वस्तुएँ, सर्वाधिक, of-वाक्यांश",
          },
          body: {
            bn: "the তিনটা পরিবারে নিয়ম করে বসে। পরিবার ১: পৃথিবীতে একটাই জিনিস — the sun, the moon, the sky, the sea, the earth; সূর্য যত থাকুক, আমাদের জন্য একটাই, তাই the sun rises — 'Sun rises' ভুল। পরিবার ২: সর্বোচ্চ মান — the best, the tallest, the most beautiful; superlative মানে পুরো দলের-পুরো শ্রেণির মধ্যে একজন, নির্দিষ্ট মানেই the: He is the best player in the team। বাংলায় 'সে সেরা খেলোয়াড়' — the লাগে না; ইংরেজি লাগবেই। পরিবার ৩: of-ফ্রেজ নির্দিষ্টতা — the door of the room, the roof of the house, the capital of Bangladesh; of-এর পরের অংশ নামটাকে একটাই করে দেয়, তাই আগে the লাগে। সঙ্গে মনে রাখুন first/second/only-জাতীয় শব্দেরও the: the first day, the only child। ব্যবহারিক টেস্ট: জিনিসটা একটাই বা দুজনের জানা হলে the — এর বাইরে a/an বা zero।",
            en: "the keeps house in three families. Family 1: one of a kind in the world — the sun, the moon, the sky, the sea, the earth; whatever the number of stars, our sun is one, hence the sun rises — never 'Sun rises'. Family 2: the highest degree — the best, the tallest, the most beautiful; a superlative means one person out of the whole team or class, a definite one, so the: He is the best player in the team. Bengali says nothing there; English insists on the. Family 3: of-phrase definiteness — the door of the room, the roof of the house, the capital of Bangladesh; the part after of makes the noun one of a kind, so the goes in front. Keep the same rule for first/second/only: the first day, the only child. A quick test: if the thing is unique or already known to both sides — the; otherwise a/an or zero.",
            hi: "the तीन परिवारों में नियम से बैठता है। परिवार 1: दुनिया में एक ही वस्तु — the sun, the moon, the sky, the sea, the earth; तारे कितने भी हों, हमारा सूरज एक है, इसलिए the sun rises — कभी 'Sun rises' नहीं। परिवार 2: सर्वोच्च स्तर — the best, the tallest, the most beautiful; superlative का मतलब पूरी टीम-पूरी कक्षा में एक, निश्चित एक, इसलिए the: He is the best player in the team। बांग्ला यहाँ कुछ नहीं लगाता; अंग्रेज़ी the लगाती ही है। परिवार 3: of-वाक्यांश की निश्चितता — the door of the room, the roof of the house, the capital of Bangladesh; of के बाद का हिस्सा संज्ञा को अनोखा बना देता है, इसलिए आगे the। first/second/only के लिए भी वही नियम: the first day, the only child। छोटा टेस्ट: वस्तु अनोखी या दोनों को जानी हो तो the; नहीं तो a/an या zero।",
          },
          examples: [
            {
              wrong: "Sun rises in the east.",
              right: "The sun rises in the east.",
              note: {
                bn: "সূর্য পৃথিবীতে আমাদের জন্য একটাই — unique জিনিসের the বাধ্যতামূলক; east-এর আগের the-ও একই সূত্রে।",
                en: "Our sun is one of a kind — the is compulsory with unique things; the before east follows the same rule.",
                hi: "हमारे लिए सूरज एक ही है — अनोखी वस्तु पर the अनिवार्य; east से पहले का the भी वही सूत्र।",
              },
            },
            {
              wrong: "He is best player in the team.",
              right: "He is the best player in the team.",
              note: {
                bn: "'সেরা' মানে পুরো দলের মধ্যে একজন — নির্দিষ্ট, তাই the best; এটাই বাঙালিদের সবচেয়ে ঘনঘন ভুল।",
                en: "'Best' means one out of the whole team — definite, hence the best; this is the most frequent Bengali-speaker slip.",
                hi: "'সেরা' मतलब पूरी टीम में एक — निश्चित, इसलिए the best; यही बांग्लाभाषियों की सबसे बार-बार वाली गलती।",
              },
            },
            {
              wrong: "I saw a cat. Cat was sleeping on my bed.",
              right: "I saw a cat. The cat was sleeping on my bed.",
              note: {
                bn: "প্রথমবার a cat — পরেরবার আমরা জানি কোন বিড়াল, তাই the cat; গল্পের দুই-ধাপ নিয়ম।",
                en: "First mention a cat — by the second sentence we know which cat, so the cat; the two-step story rule.",
                hi: "पहली बार a cat — दूसरे वाक्य में हम जानते हैं कौन-सी बिल्ली, इसलिए the cat; कहानी का दो-कदम नियम।",
              },
            },
            {
              wrong: "Door of the room is open.",
              right: "The door of the room is open.",
              note: {
                bn: "of-ফ্রেজ (of the room) দরজাকে নির্দিষ্ট করে দিয়েছে — আগেই the বসবে: the door of the room।",
                en: "The of-phrase (of the room) pins down the door — the must open the phrase: the door of the room.",
                hi: "of-वाक्यांश (of the room) दरवाज़े को निश्चित कर देता है — आगे the ही बैठेगा: the door of the room।",
              },
            },
            {
              wrong: "Monday was first day of my new job.",
              right: "Monday was the first day of my new job.",
              note: {
                bn: "first/second/last/only-এর আগেও the — the first day; ক্রম নির্দিষ্ট জিনিস।",
                en: "first/second/last/only also take the — the first day; an order picks out a definite thing.",
                hi: "first/second/last/only के साथ भी the — the first day; क्रम निश्चित वस्तु चुनता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "কোনো article নয় — zero article-এর চার পরিবার",
            en: "No article at all — the four zero-article families",
            hi: "कोई article नहीं — zero article के चार परिवार",
          },
          body: {
            bn: "Article-এর আরেকটা নিয়ম শেখা যত জরুরি, কোথায় article বসে না তা শেখা তার চেয়েও জরুরি — কারণ বাঙালিরা এখানে উল্টো ভুল করেন, অযথা the বসিয়ে। পরিবার ১: খাবার — have breakfast / have lunch / have dinner; 'I had the breakfast' নয়, I had breakfast। পরিবার ২: খেলা — play cricket, play football, play chess; মনে রাখুন, বাদ্যযন্ত্রে উল্টো নিয়ম — play the guitar, play the piano। পরিবার ৩: ভাষা — speak Bengali, learn English; 'the English' মানে ইংরেজ জাতি, ভাষা নয়! পরিবার ৪: সাধারণ বহুবচন — Books are cheap, Children love stories; নির্দিষ্ট কোনো বই নয়, বই জাতিই বোঝাচ্ছেন, তাই কিছুই বসে না। এর সঙ্গে যোগ হবে বেশিরভাগ দেশ-নাম আর মানুষের নাম: in Dhaka, in Bangladesh, Rahim came। সুত্র মনে রাখুন: খেলা, ভাষা, খাবার, সাধারণ বহুবচন — এই চার পরিবারে article ঢুকলেই ভুল।",
            en: "Learning where the article goes is only half the lesson — the other half is learning where it must not go, because Bengali speakers err here in reverse, adding the without reason. Family 1: meals — have breakfast / have lunch / have dinner; never 'I had the breakfast', just I had breakfast. Family 2: sports — play cricket, play football, play chess; remember the opposite rule for instruments — play the guitar, play the piano. Family 3: languages — speak Bengali, learn English; 'the English' means the English people, not the language! Family 4: general plurals — Books are cheap, Children love stories; not any particular books but the whole race of books, so nothing sits in front. Add most country names and people's names: in Dhaka, in Bangladesh, Rahim came. Keep the formula: games, languages, meals, general plurals — any article entering these four families is a mistake.",
            hi: "Article कहाँ बैठता है सीखना आधा पाठ है — कहाँ नहीं बैठना चाहिए वह सीखना उससे भी आधा ज़्यादा, क्योंकि बांग्लाभाषी यहाँ उलटी गलती करते हैं, बिना कारण the बिठा देते हैं। परिवार 1: भोजन — have breakfast / have lunch / have dinner; 'I had the breakfast' नहीं, I had breakfast। परिवार 2: खेल — play cricket, play football, play chess; याद रखें, वाद्ययंत्रों में उलटा नियम — play the guitar, play the piano। परिवार 3: भाषा — speak Bengali, learn English; 'the English' मतलब अंग्रेज़ कौम, भाषा नहीं! परिवार 4: सामान्य बहुवचन — Books are cheap, Children love stories; कोई ख़ास किताबें नहीं, पूरी किताब-जाति, इसलिए आगे कुछ नहीं। इसमें जुड़ेंगे अधिकांश देशों और नामों से पहले: in Dhaka, in Bangladesh, Rahim came। सूत्र याद रखें: खेल, भाषा, भोजन, सामान्य बहुवचन — इन चार परिवारों में article घुसते ही गलती।",
          },
          examples: [
            {
              wrong: "I had the breakfast at eight.",
              right: "I had breakfast at eight.",
              note: {
                bn: "খাবারের নামে zero article — have breakfast/lunch/dinner; the breakfast মানে ওই নির্দিষ্ট খাবারটাই, রোজকার নয়।",
                en: "Meals take zero article — have breakfast/lunch/dinner; 'the breakfast' would mean that specific spread, not the daily one.",
                hi: "भोजन के नाम पर zero article — have breakfast/lunch/dinner; 'the breakfast' मतलब वही विशेष भोजन, रोज़ वाला नहीं।",
              },
            },
            {
              wrong: "They play the cricket in the field.",
              right: "They play cricket in the field.",
              note: {
                bn: "খেলার নামে কিছু বসে না — play cricket; field চেনা জায়গা, তাই the field ঠিক — দুই জায়গার ফারাক দেখুন।",
                en: "Sports take nothing — play cricket; the field is a known place, so the field is right — see the contrast in one sentence.",
                hi: "खेल के नाम पर कुछ नहीं — play cricket; field जाना-पहचाना स्थान, इसलिए the field ठीक — एक वाक्य में दोनों का फ़र्क़ देखें।",
              },
            },
            {
              wrong: "I am learning the English now.",
              right: "I am learning English now.",
              note: {
                bn: "ভাষার নামে zero — learn English, speak Bengali; 'the English' বললে মানে দাঁড়ায় ইংরেজ মানুষজন!",
                en: "Languages take zero — learn English, speak Bengali; 'the English' would mean the English people!",
                hi: "भाषा पर zero — learn English, speak Bengali; 'the English' कहा तो मतलब अंग्रेज़ लोग!",
              },
            },
            {
              wrong: "The books are expensive these days.",
              right: "Books are expensive these days.",
              note: {
                bn: "সব বই জাতিগত ভাবে বোঝালে সাধারণ বহুবচন — zero; the books বললে মানে আপনার তাকের নির্দিষ্ট ওই বইগুলো।",
                en: "Meaning books in general — a general plural takes zero; 'the books' points to particular ones on your shelf.",
                hi: "पूरी किताब-जाति का मतलब हो तो सामान्य बहुवचन — zero; 'the books' आपकी ताक़ की ख़ास किताबों की ओर इशारा करता है।",
              },
            },
            {
              wrong: "My mother cooks the dinner every day.",
              right: "My mother cooks dinner every day.",
              note: {
                bn: "every day-এর সঙ্গে রোজকার খাবার — সাধারণ অর্থ, তাই zero: cooks dinner; হাড্ডি-হিসেবে the নেই।",
                en: "With every day the meal is a routine, a general sense — so zero: cooks dinner; no the in the daily run.",
                hi: "every day के साथ रोज़ का खाना — सामान्य अर्थ, इसलिए zero: cooks dinner; रोज़ में the नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "Common mistakes by Bengali speakers",
            hi: "बांग्लाभाषी छात्रों की आम गलतियाँ",
          },
          body: {
            bn: "Article-এর ভুলগুলোর পেছনের কাহিনি একটাই — বাংলায় article নেই, তাই বাংলা বাক্যকে অক্ষরে অক্ষরে ইংরেজি করলে article হয় বাদ পড়ে যায়, হয় অযথা the চেপে বসে। নিচের ভুলগুলো ক্লাসরুমে, চ্যাটে, ইন্টারভিউতে রোজ দেখা যায়। দোষ আপনার নয়, দুই ভাষার গঠনের; তাই প্রতিটা ভুলের পেছনের বাংলা বাক্যটা চিনে নিন, তারপর ডানের ঠিক বাক্যটা জোরে তিনবার বলে নিন — কানে গেঁথে গেলেই বলার তাড়ায় আর ভুল বেরোয় না। বিশেষ করে খেয়াল করুন: একবচন নাম একা নয় (I read a book), সেরা-জাতীয় শব্দে the (the best), খেলা-ভাষা-খাবারে কিছুই না (play cricket, learn English, have lunch)।",
            en: "Every article mistake shares one backstory — Bengali has no articles, so a word-for-word English version either drops the article or plants an unnecessary the. The slips below show up daily in classrooms, chats and interviews. The fault is not yours; it belongs to the two structures. Catch the Bengali sentence hiding behind each error, then say the corrected sentence aloud three times — once rooted in the ear, it stops escaping under the pressure of speaking. Watch especially: a singular noun never alone (I read a book), the with superlatives (the best), nothing with games-languages-meals (play cricket, learn English, have lunch).",
            hi: "हर article-गलती के पीछे एक ही कहानी है — बांग्ला में article नहीं, इसलिए बांग्ला वाक्य को शब्द-दर-शब्द अंग्रेज़ी करने पर article या तो छूट जाता है या बिना मतलब the बिठा दिया जाता है। नीचे की गलतियाँ कक्षा, चैट और इंटरव्यू में रोज़ दिखती हैं। दोष आपका नहीं, दोनों ढाँचों का है; हर गलती के पीछे छिपा बांग्ला वाक्य पहचानें, फिर दाईं ओर का सही वाक्य तीन बार ज़ोर से बोलें — कान में बस गया तो बोलते वक़्त गलती नहीं निकलेगी। ख़ास ध्यान दें: एकवचन संज्ञा अकेली नहीं (I read a book), सर्वोच्च पर the (the best), खेल-भाषा-भोजन पर कुछ नहीं (play cricket, learn English, have lunch)।",
          },
          examples: [
            {
              wrong: "I read book in the evening.",
              right: "I read a book in the evening.",
              note: {
                bn: "বাংলা 'আমি বই পড়ি' — article-হীন প্যাটার্নের সবচেয়ে জনপ্রিয় ভুল; একবচন নামের আগে a বসাতেই বাক্য পূর্ণ।",
                en: "The Bengali article-free pattern at its most popular; adding a before the singular noun completes the sentence.",
                hi: "बांग्ला के article-रहित पैटर्न की सबसे लोकप्रिय गलती; एकवचन संज्ञा से पहले a बिठाने पर वाक्य पूरा।",
              },
            },
            {
              wrong: "He is a best player.",
              right: "He is the best player.",
              note: {
                bn: "আরেক দিকের ভুল — a বসিয়ে ফেলা; superlative-এর জুটি the, a নয়: the best, the tallest, the most।",
                en: "The mistake from the other side — planting a; the superlative partner is the, not a: the best, the tallest, the most.",
                hi: "उलटी दिशा की गलती — a बिठा देना; superlative का जोड़ीदार the है, a नहीं: the best, the tallest।",
              },
            },
            {
              wrong: "She is MA in English.",
              right: "She has an MA in English.",
              note: {
                bn: "সংক্ষিপ্ত ডিগ্রির নামও শব্দ হিসেবে পড়ে — MA = 'em-ei', vowel ধ্বনি, তাই an MA; আর ডিগ্রি 'পাওয়া' যায়, has MA।",
                en: "Abbreviations are read as words — MA = 'em-ay', a vowel sound, hence an MA; and the degree is something you have — has an MA.",
                hi: "संक्षिप्त डिग्री भी शब्द की तरह पढ़ी जाती है — MA = 'em-ay', स्वर-ध्वनि, इसलिए an MA; और डिग्री 'पाई' जाती है — has an MA।",
              },
            },
            {
              wrong: "Every morning I go to the school by bus.",
              right: "Every morning I go to school by bus.",
              note: {
                bn: "পড়াশোনার উদ্দেশ্যে যাওয়া = go to school (zero); the school মানে ভবনটা — বাবারা বলেন I went to the school, মানে মিটিং-এ গেছেন!",
                en: "Going to study = go to school (zero); the school means the building — a parent says I went to the school, meaning for a meeting!",
                hi: "पढ़ने जाना = go to school (zero); the school मतलब इमारत — अभिभावक कहते हैं I went to the school, यानी बैठक में!",
              },
            },
            {
              wrong: "What a beautiful a day!",
              right: "What a beautiful day!",
              note: {
                bn: "What + a + বিশেষণ + নাম — what a beautiful day; a একবারই বসে, দুবার নয়; আশ্চর্য বোঝাতে এই প্যাটার্ন খুব কাজের।",
                en: "What + a + adjective + noun — what a beautiful day; a sits once, not twice; the pattern is a handy exclamation.",
                hi: "What + a + विशेषण + संज्ञा — what a beautiful day; a एक ही बार बैठता है; आश्चर्य दिखाने का उपयोगी पैटर्न।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক",
            en: "See it in a mini story",
            hi: "एक छोटी कहानी में देखें",
          },
          body: {
            bn: "রাহিম কাল বাজারে গিয়েছিল জামা কিনতে। দোকানদার একটা ধরে দেখাল, 'This is a nice shirt, only five hundred taka.' রাহিম হাতে নিয়ে বলল, 'The shirt is good, but the collar is a bit tight.' খেয়াল করুন — প্রথমবার a shirt, তারপর the shirt, the collar: কোন জামার কথা তা এখন দুজনেই জানে। রাহিম বলল, 'I am a student, and my uncle is an engineer — he sent me the money.' পেশায় a student, an engineer; দুজনের চেনা টাকায় the money। দোকানদার পাশের দর্জির কথা বলল, 'The tailor next door is the best in this market — an honest man.' সর্বোচ্চ মানে the best, নীরব h-এ an honest। ফেরার পথে রাহিম বন্ধুকে ডাকল, 'Come, we will play football in the field.' খেলায় zero — play football; চেনা মাঠে the field। সন্ধ্যায় মা জিজ্ঞেস করলেন, 'Did you have lunch?' খাবারেও zero। এক নজরে — a/an = একটা, প্রথমবার, পেশা, প্রতি (once a week); the = আগেই চেনা, একটাই (the sun), সর্বোচ্চ (the best), of-ফ্রেজ; zero = খেলা, ভাষা, খাবার, সাধারণ বহুবচন; a না an ঠিক করে পরের শব্দের প্রথম ধ্বনি — an hour, a university, an honest man, a one-way ticket।",
            en: "Rahim went to the market yesterday to buy a shirt. The shopkeeper held one up, 'This is a nice shirt, only five hundred taka.' Taking it in hand, Rahim said, 'The shirt is good, but the collar is a bit tight.' Notice — first a shirt, then the shirt, the collar: now both sides know which shirt. Rahim added, 'I am a student, and my uncle is an engineer — he sent me the money.' Professions take a student, an engineer; money both know takes the money. The shopkeeper spoke of the tailor next door, 'The tailor next door is the best in this market — an honest man.' Superlative the best, silent h an honest. On the way home Rahim called a friend, 'Come, we will play football in the field.' Zero with the sport — play football; the known ground takes the field. In the evening his mother asked, 'Did you have lunch?' Zero with the meal too. In a nutshell — a/an = one, first mention, profession, per (once a week); the = already known, unique (the sun), superlative (the best), of-phrases; zero = sports, languages, meals, general plurals; the first sound of the next word decides a versus an — an hour, a university, an honest man, a one-way ticket.",
            hi: "राहिम कल बाज़ार गया था कमीज़ ख़रीदने। दुकानदार ने एक उठाकर दिखाया, 'This is a nice shirt, only five hundred taka.' हाथ में लेकर राहिम ने कहा, 'The shirt is good, but the collar is a bit tight.' ध्यान दें — पहले a shirt, फिर the shirt, the collar: अब दोनों जानते हैं कौन-सी कमीज़। राहिम ने कहा, 'I am a student, and my uncle is an engineer — he sent me the money.' पेशे में a student, an engineer; दोनों की जानी पैसे में the money। दुकानदार ने पड़ोस के दर्ज़े का ज़िक्र किया, 'The tailor next door is the best in this market — an honest man.' सर्वोच्च में the best, मौन h में an honest। लौटते वक़्त राहिम ने दोस्त को पुकारा, 'Come, we will play football in the field.' खेल पर zero — play football; जाने-पहचाने मैदान पर the field। शाम को माँ ने पूछा, 'Did you have lunch?' भोजन पर भी zero। एक नज़र में — a/an = एक, पहला ज़िक्र, पेशा, प्रति (once a week); the = पहले से जाना, अनोखा (the sun), सर्वोच्च (the best), of-वाक्यांश; zero = खेल, भाषा, भोजन, सामान्य बहुवचन; a बनाम an तय करती है अगले शब्द की पहली ध्वनि — an hour, a university, an honest man, a one-way ticket।",
          },
          examples: [
            {
              wrong: "This is the nice shirt.",
              right: "This is a nice shirt.",
              note: {
                bn: "দোকানে প্রথমবার জামাটার পরিচয় — কোন জামা তা এখনো ঠিক হয়নি, তাই a nice shirt।",
                en: "The shirt is being introduced for the first time — which shirt is not settled yet, so a nice shirt.",
                hi: "कमीज़ की पहली परिचय-घड़ी — कौन-सी कमीज़ अभी तय नहीं, इसलिए a nice shirt।",
              },
            },
            {
              wrong: "The collar is bit tight.",
              right: "The collar is a bit tight.",
              note: {
                bn: "a bit = একটু — এখানে a আলাদা শব্দ, বাদ দিলে 'একটু' হারায়: a bit tight, a little late।",
                en: "A bit = slightly — here a is a word of its own; drop it and 'slightly' is lost: a bit tight, a little late.",
                hi: "a bit = একটু — যहाँ a আলাদা শব্দ, ছেড়ে দিলে 'একটু' হারায়: a bit tight, a little late।",
              },
            },
            {
              wrong: "We will play the football.",
              right: "We will play football.",
              note: {
                bn: "গল্পের রাহিমও খেলায় zero বলেছে — play football; এটাই আসল নিয়ম, বলটা নয়।",
                en: "Even story-Rahim keeps zero with the sport — play football; that is the real rule, not the ball.",
                hi: "कहानी का राहिम भी खेल पर zero बोलता है — play football; यही असल नियम, गेंद नहीं।",
              },
            },
            {
              wrong: "Did you have the lunch?",
              right: "Did you have lunch?",
              note: {
                bn: "মার প্রশ্নেও খাবার zero — have lunch; the lunch বললে সাধারণ জিজ্ঞাসা নির্দিষ্ট ভোজে বদলে যায়।",
                en: "Even mother's question keeps the meal bare — have lunch; 'the lunch' turns a general question into one particular feast.",
                hi: "माँ के प्रश्न में भी भोजन खाली — have lunch; 'the lunch' सामान्य सवाल को एक विशेष भोज बना देता है।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "বাংলায় article নেই — তাই বাংলা ভেবে ইংরেজি বললে article হয় পড়ে থাকে, হয় the বসে যায়। একবচন গণনাযোগ্য নাম লিখলে থামুন, তার আগে কিছু আছে কি না দেখুন।",
          en: "Bengali has no articles — so thinking in Bengali either drops the article or plants the. Whenever you write a singular countable noun, pause and check what sits before it.",
          hi: "बांग्ला में article नहीं — इसलिए बांग्ला सोचकर बोलने पर article या तो छूट जाता है, या the बैठ जाता है। एकवचन गिनने योग्य संज्ञा लिखते ही रुकें, उससे पहले क्या है देखें।",
        },
        {
          bn: "a না an বানান দেখে নয়, ধ্বনি শুনে — an hour, an honest man (h নীরব), কিন্তু a university, a European, a one-way ticket (yu/wa ধ্বনি)।",
          en: "Choose a or an by sound, not spelling — an hour, an honest man (silent h), but a university, a European, a one-way ticket (yu/wa sounds).",
          hi: "a या an वर्तनी देखकर नहीं, ध्वनि सुनकर — an hour, an honest man (मौन h), पर a university, a European, a one-way ticket (yu/wa ध्वनि)।",
        },
        {
          bn: "পেশার আগে a/an সবসময় — He is a teacher, She is an engineer; 'He is teacher' ইংরেজিতে অসম্পূর্ণ।",
          en: "Professions always carry a/an — He is a teacher, She is an engineer; 'He is teacher' is incomplete English.",
          hi: "पेशे से पहले हमेशा a/an — He is a teacher, She is an engineer; 'He is teacher' अंग्रेज़ी में अधूरा है।",
        },
        {
          bn: "সূর্য-চাঁদ-আকাশের মতো একটাই জিনিস আর best/tallest-এর মতো সর্বোচ্চ — দুই পরিবারেই the বাধ্যতামূলক: the sun, the best player।",
          en: "Unique things like the sun-moon-sky and superlatives like best/tallest both demand the: the sun, the best player.",
          hi: "सूरज-चाँद-आकाश जैसी अनोखी चीज़ें और best/tallest जैसे सर्वोच्च — दोनों परिवारों में the अनिवार्य: the sun, the best player।",
        },
        {
          bn: "গল্পের দুই-ধাপ মনে রাখুন: প্রথমবার a/an (I saw a dog), তারপর the (The dog was black) — এটাই a আর the-এর সবচেয়ে স্বাভাবিক ব্যবহার।",
          en: "Remember the two-step story rule: first mention a/an (I saw a dog), later mention the (The dog was black) — the most natural use of a and the.",
          hi: "कहानी का दो-कदम नियम याद रखें: पहला ज़िक्र a/an (I saw a dog), बाद का the (The dog was black) — a और the का सबसे सहज उपयोग।",
        },
        {
          bn: "খেলা, ভাষা, খাবার — এই তিন পরিবারে কিছুই বসে না: play cricket, speak Bengali, have lunch; 'the cricket', 'the English', 'the lunch' বলে যেন না বেরোয়।",
          en: "Games, languages, meals — three families where nothing sits: play cricket, speak Bengali, have lunch; keep 'the cricket', 'the English', 'the lunch' from escaping.",
          hi: "खेल, भाषा, भोजन — तीन परिवार जहाँ कुछ नहीं बैठता: play cricket, speak Bengali, have lunch; 'the cricket', 'the English', 'the lunch' न निकले।",
        },
        {
          bn: "বাদ্যযন্ত্রে উল্টো — play the guitar, play the piano; খেলায় zero, বাদ্যযন্ত্রে the — জোড়া চেনে রাখলে আর গুলিয়ে যায় না।",
          en: "Instruments flip the rule — play the guitar, play the piano; zero with sports, the with instruments — the pair kept together stops the mixing.",
          hi: "वाद्ययंत्र पर उलटा — play the guitar, play the piano; खेल पर zero, वाद्ययंत्र पर the — जोड़ी याद रहे तो उलझन नहीं।",
        },
        {
          bn: "of-ফ্রেজ আর first/last/only আগে the ডেকে আনে: the door of the room, the first day, the only child।",
          en: "of-phrases and first/last/only summon the: the door of the room, the first day, the only child.",
          hi: "of-वाक्यांश और first/last/only the बुलाते हैं: the door of the room, the first day, the only child।",
        },
        {
          bn: "a/an শুধু একবচনে — বহুবচনে হয় কিছুই না, হয় the: I have books / I have the books; 'a books' বলে কিছু নেই।",
          en: "a/an live only in the singular — plurals take nothing or the: I have books / I have the books; there is no 'a books'.",
          hi: "a/an केवल एकवचन में — बहुवचन में कुछ नहीं या the: I have books / I have the books; 'a books' जैसा कुछ नहीं।",
        },
        {
          bn: "রোজ পাঁচটা জিনিস দেখে এক লাইনে বলুন: I saw a bird. The bird was blue. The bird sang in the tree. — a→the→the ধারা মুখস্থ হয়ে যাবে।",
          en: "Every day describe five things in one line each: I saw a bird. The bird was blue. The bird sang in the tree. — the a→the→the chain gets memorised.",
          hi: "रोज़ पाँच चीज़ें देखकर एक-एक लाइन बोलें: I saw a bird. The bird was blue. The bird sang in the tree. — a→the→the की श्रृंखला रट जाएगी।",
        },
      ],
      quiz: [
        {
          question: "I saw ___ elephant at the zoo.",
          options: ["a", "an", "the", "no article"],
          answer: 1,
          explanation: {
            bn: "elephant-এর প্রথম ধ্বনি 'এ' — vowel sound, তাই an; প্রথমবার দেখা, তাই the নয়।",
            en: "Elephant opens with a vowel sound — an; and it is a first mention, so not the.",
            hi: "elephant की पहली ध्वनि स्वर — इसलिए an; पहला ज़िक्र, इसलिए the नहीं।",
          },
        },
        {
          question: "He is ___ honest man.",
          options: ["a", "an", "the", "some"],
          answer: 1,
          explanation: {
            bn: "honest-এর h নীরব — শব্দ vowel ধ্বনিতে শুরু, তাই an honest man।",
            en: "The h of honest is silent — the word starts with a vowel sound, so an honest man.",
            hi: "honest का h मौन — शब्द स्वर-ध्वनि से शुरू, इसलिए an honest man।",
          },
        },
        {
          question: "My sister studies at ___ university in Dhaka.",
          options: ["an", "a", "the", "no article"],
          answer: 1,
          explanation: {
            bn: "university-র শুরু 'ইউ' (yu) — consonant ধ্বনি, তাই a university; বানানে u থাকলেও কান ঠিক।",
            en: "University begins with 'yu' — a consonant sound, so a university; the spelling u cannot fool the ear.",
            hi: "university 'यू' (yu) से शुरू — व्यंजन ध्वनि, इसलिए a university; वर्तनी का u धोखा नहीं देता।",
          },
        },
        {
          question: "___ sun rises in the east.",
          options: ["A", "An", "The", "No article"],
          answer: 2,
          explanation: {
            bn: "সূর্য পৃথিবীতে একটাই — unique জিনিসে the বাধ্যতামূলক: the sun।",
            en: "There is one sun in our world — unique things take the: the sun.",
            hi: "हमारी दुनिया में सूरज एक ही — अनोखी वस्तु पर the: the sun।",
          },
        },
        {
          question: "We had ___ breakfast at seven.",
          options: ["a", "an", "the", "no article"],
          answer: 3,
          explanation: {
            bn: "খাবারের নামে zero article — have breakfast; the breakfast নয়।",
            en: "Meals take zero article — have breakfast; not the breakfast.",
            hi: "भोजन पर zero article — have breakfast; 'the breakfast' नहीं।",
          },
        },
        {
          question: "They play ___ cricket every Friday.",
          options: ["a", "the", "some", "no article"],
          answer: 3,
          explanation: {
            bn: "খেলার নামে কিছু বসে না — play cricket; বাদ্যযন্ত্রে the, খেলায় zero।",
            en: "Sports take nothing — play cricket; the with instruments, zero with games.",
            hi: "खेल पर कुछ नहीं बैठता — play cricket; वाद्ययंत्र पर the, खेल पर zero।",
          },
        },
        {
          question: "She is ___ best singer in our class.",
          options: ["a", "an", "the", "some"],
          answer: 2,
          explanation: {
            bn: "superlative-এর জুটি the — the best; পুরো ক্লাসের মধ্যে একজন, নির্দিষ্ট।",
            en: "The superlative partner is the — the best; one singer out of the whole class, a definite one.",
            hi: "superlative का जोड़ीदार the — the best; पूरी कक्षा में एक, निश्चित।",
          },
        },
        {
          question: "I bought a shirt. ___ shirt is blue.",
          options: ["A", "An", "The", "No article"],
          answer: 2,
          explanation: {
            bn: "প্রথমবার a shirt, দ্বিতীয়বার সবাই জানে কোন শার্ট — তাই the shirt।",
            en: "First mention a shirt, second mention everyone knows which one — so the shirt.",
            hi: "पहली बार a shirt, दूसरी बार सब जानते हैं कौन-सी — इसलिए the shirt।",
          },
        },
        {
          question: "My father is ___ engineer.",
          options: ["a", "an", "the", "no article"],
          answer: 1,
          explanation: {
            bn: "engineer-এর শুরু 'এ' vowel ধ্বনি — তাই an engineer; পেশায় article বাধ্যতামূলক।",
            en: "Engineer opens with the vowel sound 'e' — so an engineer; professions always carry an article.",
            hi: "engineer स्वर-ध्वनि 'ए' से शुरू — इसलिए an engineer; पेशे पर article अनिवार्य।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: [
            "He is best player.",
            "He is a best player.",
            "He is the best player.",
            "He is an best player.",
          ],
          answer: 2,
          explanation: {
            bn: "superlative best-এর আগে the — the best player; best একা বা a best দুটোই ভুল।",
            en: "The superlative best takes the — the best player; bare best and a best are both wrong.",
            hi: "superlative best से पहले the — the best player; best अकेला या a best दोनों गलत।",
          },
        },
      ],
    },
  },
  /* ── 2. Present Perfect vs Past Simple (Beginner) ──────────────────── */
  {
    topic: "Present Perfect vs Past Simple",
    level: "beginner",
    title: "Present Perfect vs Past Simple (Beginner)",
    unit: 0,
    data: {
      title: {
        bn: "প্রেজেন্ট পারফেক্ট বনাম পাস্ট সিম্পল (বিগিনার)",
        en: "Present Perfect vs Past Simple (Beginner)",
        hi: "प्रेज़ेंट परफेक्ट बनाम पास्ट सिंपल (बिगिनर)",
      },
      intro: {
        bn: "এই পাঠ লার্নিং পথের বাড়তি (extra) ব্যাকরণ পাঠ — আগে 'Tense Basics' পাঠে past simple (V2: went, ate, saw) শিখে ফেলে তবেই শুরু করুন, কারণ এই পাঠের পুরো খেলাই V2 আর নতুন এক রূপ V3-এর মধ্যে। বাংলায় 'আমি খেয়েছি' আর 'আমি খেয়েছিলাম' — দুটোই অতীতের কথা, কিন্তু ভিন্ন স্বাদের: 'খেয়েছি' মানে কাজ শেষ, ফল এখনও সঙ্গে; 'খেয়েছিলাম' মানে গতকাল-গতসপ্তাহের শেষ হয়ে যাওয়া ঘটনা। ইংরেজিতে এই দুই স্বাদ দুই কালে থাকে — present perfect (have/has + V3) আর past simple (V2) — আর এই সূক্ষ্ম ফারাকই বাঙালি শিক্ষার্থীদের সবচেয়ে বিখ্যাত ভুলটা বানায়: 'I have gone to Dhaka yesterday'। এই পাঠে দুই কাল কখন কোথায়, কোন শব্দ কোনটার আভাস, just/already/yet/never কোথায় বসে — সব দেখব।",
        en: "This is an extra grammar lesson on the learning path — finish the earlier 'Tense Basics' lesson (past simple, V2: went, ate, saw) before starting, because the whole game here is between V2 and one new form, V3. Bengali has 'ami kheyechhi' and 'ami kheyechhilam' — both about the past, but with different flavours: 'kheyechhi' means the action is done and its result is still with us; 'kheyechhilam' means a finished event of yesterday or last week. In English those two flavours live in two tenses — present perfect (have/has + V3) and past simple (V2) — and this fine gap produces the most famous Bengali-speaker mistake: 'I have gone to Dhaka yesterday'. In this lesson we see when each tense is used, which words signal which one, and where just/already/yet/never sit.",
        hi: "यह लर्निंग पथ का अतिरिक्त (extra) व्याकरण पाठ है — पहले 'Tense Basics' पाठ में past simple (V2: went, ate, saw) सीख लें, तभी शुरू करें, क्योंकि पूरा खेल यहीं V2 और एक नए रूप V3 के बीच है। बांग्ला में 'আমি খেয়েছি' और 'আমি খেয়েছিলাম' — दोनों अतीत की बात, पर स्वाद अलग: 'খেয়েছি' का मतलब काम पूरा, परिणाम अब भी साथ; 'খেয়েছিলাম' का मतलब कल-पिछले हफ़्ते की ख़त्म हो चुकी घटना। अंग्रेज़ी में ये दो स्वाद दो कालों में रहते हैं — present perfect (have/has + V3) और past simple (V2) — और यही बारीक फ़र्क़ बांग्लाभाषी छात्रों की सबसे मशहूर गलती बनाता है: 'I have gone to Dhaka yesterday'। इस पाठ में देखेंगे दोनों काल कब-कहाँ चलते हैं, कौन-से शब्द किसका संकेत देते हैं, और just/already/yet/never कहाँ बैठते हैं।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — 'করেছি' বনাম 'করেছিলাম'",
            en: "When to use them — 'korechhi' versus 'korechhilam'",
            hi: "कब इस्तेमाल करें — 'করেছি' बनाम 'করেছিলাম'",
          },
          body: {
            bn: "Present perfect বলে: কাজ অতীতে ঘটেছে, কিন্তু সময়টা হয় বলা হয়নি, হয় এখনও শেষ হয়নি — আর কাজের ফল বর্তমানে অনুভূত হয়। I have lost my keys — চাবি হারিয়েছি, তাই এখন ঢুকতে পারছি না; ফলটা এখন। I have eaten — খেয়ে ফেলেছি, এখন আর ক্ষুধা নেই। বাংলার 'করেছি/করেছি নাই' পরিবার এখানেই বসে: করেছি, গেছি, দেখেছি, পড়েছি। Past simple বলে: কাজ একটা শেষ হয়ে যাওয়া সময়ে ঘটেছে — সময়টা বাক্যে বলা বা বোঝা যায়। I lost my keys yesterday — হারিয়েছিলাম, পরে খুঁজে পেয়েছি বা না, কথাটা গতকালেই শেষ। বাংলার 'করেছিলাম/করলাম/গেলাম' পরিবার এখানে। সবচেয়ে সহজ টেস্ট: বাক্যে শেষ হয়ে যাওয়া সময়ের নাম (yesterday, last year, two days ago) থাকলে past simple; সময় না বলা, বা আজও চলা সময় (today, this week) থাকলে present perfect।",
            en: "The present perfect says: the action happened in the past, but either the time is not stated or it has not finished yet — and the result is felt now. I have lost my keys — the keys are lost, so right now I cannot get in; the effect is now. I have eaten — the eating is done, no hunger now. The whole Bengali 'korechhi / korechhi nai' family lives here: korechhi, gechhi, dekhechhi, porechhi. The past simple says: the action happened at a finished time — stated in the sentence or understood. I lost my keys yesterday — lost, then maybe found, maybe not; the story belongs to yesterday and is closed. The Bengali 'korechhilam / korlam / gelam' family sits here. The simplest test: if a finished time appears in the sentence (yesterday, last year, two days ago), use past simple; if the time is unstated, or still running (today, this week), use present perfect.",
            hi: "Present perfect कहता है: काम अतीत में हुआ, पर समय या तो बताया नहीं गया या अभी ख़त्म नहीं हुआ — और काम का परिणाम वर्तमान में महसूस होता है। I have lost my keys — चाबी खो गई, इसलिए अभी अंदर नहीं जा सकता; असर अभी का है। I have eaten — खा लिया, अब भूख नहीं। बांग्ला का पूरा 'করেছি/করেছি নাই' परिवार यहीं बैठता है: করেছি, গেছি, দেখেছি, পড়েছি। Past simple कहता है: काम एक समाप्त समय में हुआ — समय वाक्य में बताया या समझा जाता है। I lost my keys yesterday — खो गया था, बाद में मिला या नहीं, बात कल ही में ख़त्म। बांग्ला का 'করেছিলাম/করলাম/গেলাম' परिवार यहीं। सबसे आसान टेस्ट: वाक्य में समाप्त समय का नाम (yesterday, last year, two days ago) हो तो past simple; समय अनकहा हो, या आज भी चल रहा हो (today, this week), तो present perfect।",
          },
          examples: [
            {
              wrong: "I have lost my keys yesterday.",
              right: "I lost my keys yesterday.",
              note: {
                bn: "yesterday = শেষ হয়ে যাওয়া সময় — present perfect এতে ঢোকে না; V2: lost; বাংলা 'হারিয়েছিলাম'।",
                en: "Yesterday is a finished time — no present perfect enters it; use V2: lost; Bengali 'horiyechchhilam'.",
                hi: "yesterday = समाप्त समय — present perfect वहाँ नहीं घुसता; V2: lost; बांग्ला 'হারিয়েছিলাম'।",
              },
            },
            {
              wrong: "I am tired because I run ten kilometres.",
              right: "I am tired because I have run ten kilometres.",
              note: {
                bn: "দৌড় শেষ, ফল (ক্লান্তি) এখন — সময় বলা নেই, তাই have + V3: have run; বাংলা 'দশ কিলোমিটার দৌড়েছি'।",
                en: "The running is done, the result (tiredness) is now — no stated time, so have + V3: have run; Bengali 'দৌড়েছি'.",
                hi: "दौड़ ख़त्म, परिणाम (थकान) अभी — समय अनकहा, इसलिए have + V3: have run; बांग्लা 'দৌড়েছি'।",
              },
            },
            {
              wrong: "I have seen that movie last night.",
              right: "I saw that movie last night.",
              note: {
                bn: "last night পুরোপুরি শেষ — past simple-এর একচেটিয়া জমি: saw; 'দেখেছি last night' জোড়াটা ইংরেজিতে মেলে না।",
                en: "Last night is fully over — exclusive past-simple land: saw; the pair 'have seen + last night' does not exist in English.",
                hi: "last night पूरी तरह बीत गया — past simple का अकेला इलाक़ा: saw; 'देखा था + last night' का जोड़ा अंग्रेज़ी में नहीं।",
              },
            },
            {
              wrong: "She is not hungry — she eats her lunch.",
              right: "She is not hungry — she has eaten her lunch.",
              note: {
                bn: "খাওয়া শেষ, ফল (ক্ষুধা নেই) এখন — have/has + V3: has eaten; বাংলা 'খেয়ে ফেলেছে'।",
                en: "The eating is finished and the result (no hunger) is now — have/has + V3: has eaten; Bengali 'খেয়ে ফেলেছে'.",
                hi: "खाना हो गया, परिणाम (भूख नहीं) अभी — have/has + V3: has eaten; बांग্লा 'খেয়ে ফেলেছে'।",
              },
            },
            {
              wrong: "Did you have your breakfast? — I have had it at eight.",
              right: "Did you have your breakfast? — I had it at eight.",
              note: {
                bn: "at eight নির্দিষ্ট শেষ সময় — উত্তরেও past simple: had; সময় বলা মানেই V2-ই নিয়ম।",
                en: "At eight is a stated finished time — the answer keeps past simple too: had; once time is stated, V2 is the rule.",
                hi: "at eight निश्चित समाप्त समय — जवाब में भी past simple: had; समय बताया है तो V2 ही नियम।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন — have/has + V3 বনাম V2",
            en: "Formation — have/has + V3 versus V2",
            hi: "बनावट — have/has + V3 बनाम V2",
          },
          body: {
            bn: "Present perfect-এর সূত্র: have/has + V3 — I/you/we/they have eaten; he/she/it has eaten। নেগেটিভ: haven't/hasn't + V3 — I haven't eaten, She hasn't eaten। প্রশ্ন: Have/Has + কর্তা + V3? — Have you eaten? Has he come? V3 মানে ক্রিয়ার তৃতীয় রূপ: নিয়মিত ক্রিয়ায় V2 আর V3 এক — play-played-played, watch-watched-watched; অনিয়মিত ক্রিয়ায় আলাদা মুখস্থ: go-went-gone, eat-ate-eaten, see-saw-seen, do-did-done, take-took-taken, give-gave-given, come-came-come, write-wrote-written। এখানেই বাঙালিদের দুটো ফাঁদ: ফাঁদ ১ — have-এর পরে V2 লেগে যাওয়া: 'I have went' ভুল, I have gone; ফাঁদ ২ — have ছাড়া একা V3 বসানো: 'I gone to school' ভুল, I went to school বা I have gone to school। মনে রাখুন: V3 একা দাঁড়ায় না, তার have/has লাগবেই।",
            en: "Present perfect formula: have/has + V3 — I/you/we/they have eaten; he/she/it has eaten. Negative: haven't/hasn't + V3 — I haven't eaten, She hasn't eaten. Question: Have/Has + subject + V3? — Have you eaten? Has he come? V3 is the third form of the verb: with regular verbs V2 and V3 look the same — play-played-played, watch-watched-watched; with irregular verbs each is memorised: go-went-gone, eat-ate-eaten, see-saw-seen, do-did-done, take-took-taken, give-gave-given, come-came-come, write-wrote-written. Here sit the two Bengali-speaker traps. Trap 1: V2 after have — 'I have went' is wrong, I have gone. Trap 2: bare V3 without have — 'I gone to school' is wrong; say I went to school or I have gone to school. Remember: V3 never stands alone — it must have have/has with it.",
            hi: "Present perfect का सूत्र: have/has + V3 — I/you/we/they have eaten; he/she/it has eaten। निषेध: haven't/hasn't + V3 — I haven't eaten, She hasn't eaten। प्रश्न: Have/Has + कर्ता + V3? — Have you eaten? Has he come? V3 क्रिया का तीसरा रूप है: नियमित क्रियाओं में V2 और V3 एक जैसे — play-played-played, watch-watched-watched; अनियमित क्रियाएँ अलग से रटनी होती हैं: go-went-gone, eat-ate-eaten, see-saw-seen, do-did-done, take-took-taken, give-gave-given, come-came-come, write-wrote-written। यहीं बांग्लाभाषियों के दो जाल: जाल 1 — have के बाद V2 बिठा देना: 'I have went' गलत, I have gone; जाल 2 — have के बिना अकेला V3: 'I gone to school' गलत; कहें I went to school या I have gone to school। याद रखें: V3 अकेला खड़ा नहीं होता, उसका have/has चाहिए ही।",
          },
          examples: [
            {
              wrong: "I have went to the market.",
              right: "I have gone to the market.",
              note: {
                bn: "have-এর পরে V3 — go-went-gone জোড়ায় V3 হলো gone; 'have went' জাতীয় রূপ ইংরেজিতে নেই।",
                en: "After have use V3 — in the go-went-gone set the V3 is gone; forms like 'have went' do not exist.",
                hi: "have के बाद V3 — go-went-gone में V3 है gone; 'have went' जैसा रूप अंग्रेज़ी में नहीं।",
              },
            },
            {
              wrong: "She has ate her dinner.",
              right: "She has eaten her dinner.",
              note: {
                bn: "eat-এর তিন রূপ eat-ate-eaten — has-এর সঙ্গে তৃতীয়টা: has eaten; ate শুধু V2-এর আসনে।",
                en: "The three forms of eat are eat-ate-eaten — the third sits with has: has eaten; ate belongs only to the V2 seat.",
                hi: "eat के तीन रूप eat-ate-eaten — has के साथ तीसरा: has eaten; ate केवल V2 की सीट में।",
              },
            },
            {
              wrong: "I gone to school yesterday.",
              right: "I went to school yesterday.",
              note: {
                bn: "V3 একা দাঁড়ায় না — হয় have/has জুড়ুন, হয় সোজা V2 নিন; yesterday-তে উত্তর V2: went।",
                en: "Bare V3 cannot stand — either attach have/has or take plain V2; with yesterday the answer is V2: went.",
                hi: "अकेला V3 खड़ा नहीं होता — या have/has जोड़ें, या सीधा V2 लें; yesterday के साथ उत्तर V2: went।",
              },
            },
            {
              wrong: "They has finished the work.",
              right: "They have finished the work.",
              note: {
                bn: "they = বহুবচন → have; has যায় শুধু he/she/it-এর সঙ্গে — কর্তা দেখে have/has বাছুন।",
                en: "They is plural — have; has goes only with he/she/it; pick have/has by looking at the subject.",
                hi: "they = बहुवचन → have; has केवल he/she/it के साथ; कर्ता देखकर have/has चुनें।",
              },
            },
            {
              wrong: "Have you ever saw the sea?",
              right: "Have you ever seen the sea?",
              note: {
                bn: "ever-যুক্ত অভিজ্ঞতার প্রশ্নেও have + V3 — see-saw-seen-এর V3 হলো seen।",
                en: "Even ever-questions of experience take have + V3 — the V3 of see-saw-seen is seen.",
                hi: "ever-वाले अनुभव प्रश्न में भी have + V3 — see-saw-seen का V3 है seen।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস শব্দ — সময়ের দুই পরিবার",
            en: "Signal words — the two families of time",
            hi: "संकेत-शब्द — समय के दो परिवार",
          },
          body: {
            bn: "এই পাঠের সবচেয়ে কাজের সারণি — সময় দুই পরিবারে ভাগ হয়। শেষ হয়ে যাওয়া সময়ের পরিবার: yesterday, last night, last week, last month, last year, in 2019, two days ago, five minutes ago, when I was a child — এই পরিবারের যেকোনো শব্দ বাক্যে থাকলে past simple-ই, কোনো ব্যতিক্রম নেই: I met him last week, We went to Cox's Bazar in 2019। এখনও চলা বা অনির্দিষ্ট সময়ের পরিবার: today, this morning, this week, this month, this year, ever, never, just, already, yet, recently, so far, up to now — এই পরিবারের শব্দ present perfect ডাকে: I have seen him today, We have solved ten problems this week। ফাঁদটা ধরুন: this morning এখনও সকাল হলে চলছে (have seen), কিন্তু দুপুর গড়িয়ে গেলে সকাল শেষ — I saw him this morning। আর বাক্যে শেষ সময়ের শব্দ একবারই থাকে — yesterday-র সঙ্গে have/has একসঙ্গে বাক্যে থাকতেই পারে না।",
            en: "Here is the most useful table of the lesson — time splits into two families. The finished-time family: yesterday, last night, last week, last month, last year, in 2019, two days ago, five minutes ago, when I was a child — any word from this family forces the past simple, no exceptions: I met him last week, We went to Cox's Bazar in 2019. The still-running or unstated family: today, this morning, this week, this month, this year, ever, never, just, already, yet, recently, so far, up to now — these words summon the present perfect: I have seen him today, We have solved ten problems this week. Catch the subtle one: this morning still belongs to the running day while morning lasts (have seen), but once noon passes the morning is closed — I saw him this morning. And a finished-time word appears once — have/has and yesterday can never share a sentence.",
            hi: "इस पाठ की सबसे काम की सारणी — समय दो परिवारों में बँटा है। समाप्त समय का परिवार: yesterday, last night, last week, last month, last year, in 2019, two days ago, five minutes ago, when I was a child — इस परिवार का कोई भी शब्द वाक्य में हो तो past simple ही, कोई अपवाद नहीं: I met him last week, We went to Cox's Bazar in 2019। अभी चल रहे या अनिर्दिष्ट समय का परिवार: today, this morning, this week, this month, this year, ever, never, just, already, yet, recently, so far, up to now — ये शब्द present perfect बुलाते हैं: I have seen him today, We have solved ten problems this week। बारीक जाल पकड़ें: this morning जब तक सुबह है, चल रहा है (have seen), पर दोपहर निकल गई तो सुबह ख़त्म — I saw him this morning। और समाप्त-समय शब्द एक ही बार आता है — have/has और yesterday कभी एक वाक्य में साथ नहीं।",
          },
          examples: [
            {
              wrong: "We have visited my grandmother last month.",
              right: "We visited my grandmother last month.",
              note: {
                bn: "last month শেষ সময়ের পরিবার — past simple-ই: visited; have-এর সঙ্গে last month পাশাপাশি বসতে পারে না।",
                en: "Last month belongs to the finished-time family — past simple only: visited; have and last month cannot sit side by side.",
                hi: "last month समाप्त-समय परिवार का — past simple ही: visited; have और last month साथ नहीं बैठ सकते।",
              },
            },
            {
              wrong: "I finished three chapters today.",
              right: "I have finished three chapters today.",
              note: {
                bn: "today এখনও চলছে — দিন শেষ হয়নি, তাই present perfect: have finished; 'আজ তিন অধ্যায় শেষ করেছি'।",
                en: "Today is still running — the day is not over, so present perfect: have finished; Bengali 'আজ তিন অধ্যায় শেষ করেছি'.",
                hi: "today अभी चल रहा है — दिन ख़त्म नहीं, इसलिए present perfect: have finished।",
              },
            },
            {
              wrong: "She has gone to Rajshahi in 2019.",
              right: "She went to Rajshahi in 2019.",
              note: {
                bn: "in 2019 বন্ধ হয়ে যাওয়া বছর — তারিখ বলা মানেই V2: went; have/has + তারিখ কখনো জুটি নয়।",
                en: "In 2019 is a closed year — a stated date means V2: went; have/has and a date are never a pair.",
                hi: "in 2019 बंद हो चुका साल है — तारीख़ बताई है तो V2: went; have/has और तारीख़ कभी जोड़ी नहीं।",
              },
            },
            {
              wrong: "Have you seen him yesterday?",
              right: "Did you see him yesterday?",
              note: {
                bn: "প্রশ্নেও নিয়ম এক — yesterday আছে মানে Did + V1: Did you see?; Have-টা বাদ।",
                en: "The rule holds in questions too — with yesterday it is Did + V1: Did you see?; the Have has to go.",
                hi: "प्रश्न में भी नियम वही — yesterday है तो Did + V1: Did you see?; Have को हटना पड़ेगा।",
              },
            },
            {
              wrong: "So far I read five books this year.",
              right: "So far I have read five books this year.",
              note: {
                bn: "so far আর this year দুটোই চলমান-সময়ের আভাস — present perfect: have read; 'এ পর্যন্ত পাঁচটা পড়েছি'।",
                en: "So far and this year both signal running time — present perfect: have read; Bengali 'এ পর্যন্ত পাঁচটা পড়েছি'.",
                hi: "so far और this year दोनों चल-रहे समय के संकेत — present perfect: have read।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "শেষ সময় বলা যাবে না — সবচেয়ে বিখ্যাত ভুল",
            en: "No finished time allowed — the most famous mistake",
            hi: "समाप्त समय मना है — सबसे मशहूर गलती",
          },
          body: {
            bn: "এই পাঠের এক নম্বর শত্রু এক বাক্যে বাস করে: 'I have gone to Dhaka yesterday'। ভুলটা দুই ভাগে ভাঙা যায়। ভাগ ১: yesterday-র মতো শেষ সময় আর have/has — দুটো এক বাক্যে কখনো থাকে না; present perfect এমন কাল যেটা সময়-নাম ছাড়া চলে, সময় বলা হয়ে গেলেই সে পদত্যাগ করে, V2 তখন মাঠে নামে: I went to Dhaka yesterday। ভাগ ২: বাংলার 'গেছি' শব্দটাই বিভ্রান্তি তৈরি করে — আমরা বলি 'আমি গতকাল ঢাকা গিয়েছি', অথচ ইংরেজি সেখানে V2 চায়। মনে রাখার সূত্র: বাংলায় 'গিয়েছি'-জাতীয় শব্দ থাকলে থামুন — বাক্যে কি শেষ সময় (yesterday, last week, in 2019) আছে? থাকলে বাংলা 'গিয়েছি' হলেও ইংরেজি V2: I went to Dhaka yesterday। শেষ সময় নেই? তবেই have gone: I have gone to Dhaka (এখনও সেখানে আছি বা সদ্য ফিরেছি — প্রসঙ্গ বলবে)। একই সূত্র নেগেটিভ-প্রশ্নে: Didn't you go yesterday? — Have you gone yesterday? নয়।",
            en: "This lesson's enemy number one lives in one sentence: 'I have gone to Dhaka yesterday'. The mistake splits in two. Part 1: a finished time like yesterday and have/has can never share a sentence; the present perfect is a tense that walks without naming time — the moment time is named, it resigns and V2 walks in: I went to Dhaka yesterday. Part 2: the Bengali word 'gechhi' itself creates the confusion — we say 'ami gotokal Dhaka giyechhi', yet English demands V2 there. A rule to remember: whenever you feel a '-chhi' word coming, pause — does the sentence carry a finished time (yesterday, last week, in 2019)? If yes, even though Bengali says 'gechhi', English takes V2: I went to Dhaka yesterday. No finished time? Only then have gone: I have gone to Dhaka (I am still there or just back — context decides). The same rule runs in negatives and questions: Didn't you go yesterday? — never 'Have you gone yesterday?'.",
            hi: "इस पाठ का नंबर-एक दुश्मन एक ही वाक्य में रहता है: 'I have gone to Dhaka yesterday'। गलती दो हिस्सों में टूटती है। हिस्सा 1: yesterday जैसा समाप्त समय और have/has कभी एक वाक्य में नहीं रहते; present perfect बिना समय के नाम चलनेवाला काल है — समय बताते ही वह इस्तीफ़ा दे देता है और V2 मैदान में आता है: I went to Dhaka yesterday। हिस्सा 2: बांग्ला शब्द 'গেছি' ही उलझन पैदा करता है — हम कहते हैं 'আমি গতকাল ঢাকা গিয়েছি', पर अंग्रेज़ी वहाँ V2 माँगती है। याद रखने का सूत्र: '-চ্ছি' वाला शब्द मन में आए तो रुकें — वाक्य में समाप्त समय (yesterday, last week, in 2019) है? है तो बांग्ला 'গিয়েছি' कहे भी अंग्रेज़ी V2 लेगी: I went to Dhaka yesterday। समाप्त समय नहीं? तभी have gone: I have gone to Dhaka (अभी वहीँ हूँ या अभी-अभी लौटा — संदर्भ बताएगा)। निषेध-प्रश्न में भी वही सूत्र: Didn't you go yesterday? — 'Have you gone yesterday?' नहीं।",
          },
          examples: [
            {
              wrong: "I have gone to Dhaka yesterday.",
              right: "I went to Dhaka yesterday.",
              note: {
                bn: "yesterday + have — এই জুটি ইংরেজির জগতে অস্তিত্বহীন; সময় বলা মানেই V2: went।",
                en: "yesterday + have — this pair does not exist in the English universe; once time is stated, V2: went.",
                hi: "yesterday + have — यह जोड़ी अंग्रेज़ी की दुनिया में अस्तित्वहीन; समय बताया है तो V2: went।",
              },
            },
            {
              wrong: "He has bought a new phone last week.",
              right: "He bought a new phone last week.",
              note: {
                bn: "last week বন্ধ সময় — have/has ঢোকার দরজা বন্ধ; সোজা V2: bought; 'কিনেছে last week' জোড়া ভাঙবেন।",
                en: "Last week is closed time — the door for have/has is shut; plain V2: bought; break the 'কিনেছে + last week' pair.",
                hi: "last week बंद समय है — have/has का दरवाज़ा बंद; सीधा V2: bought।",
              },
            },
            {
              wrong: "Did you go to the doctor yesterday? — No, I have not gone.",
              right: "Did you go to the doctor yesterday? — No, I did not go.",
              note: {
                bn: "প্রশ্ন যদি past simple-এ, উত্তরও সেই কালেই: I did not go; প্রসঙ্গে yesterday বেঁচে থাকলে have ঢুকে না।",
                en: "If the question is past simple, the answer stays in that tense too: I did not go; while yesterday hangs in the air, have cannot enter.",
                hi: "सवाल past simple में है तो जवाब भी उसी काल में: I did not go; yesterday हवा में लटका है तो have अंदर नहीं घुसेगा।",
              },
            },
            {
              wrong: "We have watched that movie two days ago.",
              right: "We watched that movie two days ago.",
              note: {
                bn: "two days ago = শেষ সময় — present perfect অচল; V2: watched; বাংলা 'দেখেছিলাম'।",
                en: "Two days ago is finished time — the present perfect is useless here; V2: watched; Bengali 'দেখেছিলাম'.",
                hi: "two days ago = समाप्त समय — present perfect यहाँ बेकार; V2: watched; बांग्ला 'देखेछিলাম'।",
              },
            },
            {
              wrong: "I have met him when I was in class eight.",
              right: "I met him when I was in class eight.",
              note: {
                bn: "when I was a child-জাতীয় অতীত-বাক্য শেষ সময়েরই ভাই — পুরো বাক্য past simple-এ: met... was।",
                en: "A when-I-was clause is the brother of finished time — the whole sentence stays past simple: met... was.",
                hi: "when I was वाला वाक्य समाप्त समय का भाई है — पूरा वाक्य past simple में: met... was।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "just / already / yet / never — চার সঙ্গীর বসার জায়গা",
            en: "just / already / yet / never — where the four friends sit",
            hi: "just / already / yet / never — चार साथियों की बैठक",
          },
          body: {
            bn: "এই চার শব্দ present perfect-এর ঘনিষ্ঠ সঙ্গী, আর তাদের বসার জায়গাও নির্দিষ্ট। just (এইমাত্র) আর already (ইতিমধ্যে) বসে have/has আর V3-এর মাঝখানে: I have just finished, She has already left। never (কখনোই না) একই আসনে: I have never eaten sushi। yet (এখনও) উল্টো পথে হাঁটে — বসে বাক্যের শেষে, আর শুধু নেগেটিভ আর প্রশ্নে: I haven't finished yet, Have you finished yet?; পজিটিভ বাক্যে yet ঢোকে না — পজিটিভে already। বাংলা মিল লক্ষ করুন: এইমাত্র শেষ করেছি (have just finished), ইতিমধ্যে চলে গেছে (has already left), এখনও শেষ করিনি (haven't finished yet), কখনো খাইনি (have never eaten)। আরেকটা সূক্ষ্মতা: just এখন ঘটে যাওয়া কাজে, already নিজের প্রত্যাশার আগেই শেষ হয়ে যাওয়া কাজে — দুজনের স্বাদ আলাদা, জায়গা এক।",
            en: "These four words are close friends of the present perfect, and their seats are fixed. just and already sit between have/has and V3: I have just finished, She has already left. never takes the same seat: I have never eaten sushi. yet walks the other way — it sits at the end of the sentence, and only in negatives and questions: I haven't finished yet, Have you finished yet?; yet never enters a positive sentence — positives take already. Notice the Bengali parallels: এইমাত্র শেষ করেছি (have just finished), ইতিমধ্যে চলে গেছে (has already left), এখনও শেষ করিনি (haven't finished yet), কখনো খাইনি (have never eaten). One nuance more: just marks an action that happened this very moment; already marks one finished sooner than expected — different flavours, same seat.",
            hi: "ये चार शब्द present perfect के घनिष्ठ साथी हैं, और उनकी सीटें भी तय हैं। just और already बैठते हैं have/has और V3 के बीच: I have just finished, She has already left। never वही सीट लेता है: I have never eaten sushi। yet उलटी दिशा में चलता है — वाक्य के अंत में बैठता है, और केवल निषेध और प्रश्न में: I haven't finished yet, Have you finished yet?; पॉज़िटिव वाक्य में yet नहीं घुसता — पॉज़िटिव में already। बांग्ला मिलान देखें: এইমাত্র শেষ করেছি (have just finished), ইতিমধ্যে চলে গেছে (has already left), এখনও শেষ করিনি (haven't finished yet), কখনো খাইনি (have never eaten)। एक बारीकी और: just इसी क्षण घटित काम के लिए, already अपेक्षा से पहले ही ख़त्म हुए काम के लिए — स्वाद अलग, सीट एक।",
          },
          examples: [
            {
              wrong: "I have finished my homework just.",
              right: "I have just finished my homework.",
              note: {
                bn: "just বসে have আর V3-এর মাঝে — have just finished; 'just' দিয়ে শেষ করা বাংলা প্যাটার্নের প্রভাব।",
                en: "just sits between have and V3 — have just finished; tucking just at the end is a Bengali-pattern habit.",
                hi: "just बैठता है have और V3 के बीच — have just finished; अंत में just रखना बांग्ला पैटर्न की आदत।",
              },
            },
            {
              wrong: "She has yet left the office.",
              right: "She has already left the office.",
              note: {
                bn: "পজিটিভ বাক্যে already, yet নয় — yet শুধু নেগেটিভ-প্রশ্নের শেষে: hasn't left yet।",
                en: "Positives take already, not yet — yet belongs only to the end of negatives and questions: hasn't left yet.",
                hi: "पॉज़िटिव में already, yet नहीं — yet केवल निषेध-प्रश्न के अंत में: hasn't left yet।",
              },
            },
            {
              wrong: "Have you finished the report already?",
              right: "Have you finished the report yet?",
              note: {
                bn: "প্রশ্নে 'এখনও?' বোঝাতে yet শেষে — Have you finished yet?; already প্রশ্নে চলে কেবল অবাক হয়ে 'ইতিমধ্যে?!' বোঝাতে, শিক্ষার্থী স্তরে yet-ই নিরাপদ।",
                en: "In a question meaning 'by now?' use yet at the end — Have you finished yet?; already in questions only shows surprise — for learners yet is the safe choice.",
                hi: "प्रश्न में 'अब तक?' के लिए yet अंत में — Have you finished yet?; already प्रश्न में केवल आश्चर्य दिखाता है — छात्र स्तर पर yet ही सुरक्षित।",
              },
            },
            {
              wrong: "I didn't finish the letter yet.",
              right: "I haven't finished the letter yet.",
              note: {
                bn: "yet-যুক্ত 'এখনও বাকি' — সময় চলছে, তাই present perfect: haven't finished; didn't yet-জুটি ভাঙা।",
                en: "Yet with 'still pending' means running time — present perfect: haven't finished; the didn't-yet pair is broken.",
                hi: "yet के साथ 'अभी बाक़ी' — समय चल रहा है, इसलिए present perfect: haven't finished; didn't-yet जोड़ी टूटी है।",
              },
            },
            {
              wrong: "I never have eaten biryani.",
              right: "I have never eaten biryani.",
              note: {
                bn: "never-ও just/already-র সেই আসনে — have never eaten; have-এর আগে never ঢোকা নয়।",
                en: "never takes the same seat as just/already — have never eaten; never never steps before have.",
                hi: "never भी just/already वाली सीट लेता है — have never eaten; never, have से पहले नहीं जाता।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "অভিজ্ঞতার প্রশ্ন — ever, never, আর been বনাম gone",
            en: "Questions of experience — ever, never, and been versus gone",
            hi: "अनुभव के प्रश्न — ever, never, और been बनाम gone",
          },
          body: {
            bn: "জীবনে কখনো করেছ কি না — এই অভিজ্ঞতার প্রশ্নে present perfect-ই রাজা, কারণ উত্তরটা এখনও প্রাসঙ্গিক। Have you ever been to Cox's Bazar? Have you ever eaten sushi? — ever বসে have আর কর্তার পরে, V3-এর আগে। উত্তর দুই ধাপে: প্রথমে অভিজ্ঞতা present perfect-এ — Yes, I have / No, I have never been; তারপর বিস্তারিত বললে সেখানে সময় আসবে, তাই past simple — I went there in 2019 with my family। মনে রাখুন: অভিজ্ঞতা perfect-এ, বিস্তারিত পাস্টে — এই জোড়া ইংরেজিতে খুব স্বাভাবিক। আর একটা দুর্দান্ত ফারাক: been বনাম gone। He has gone to Dhaka মানে সে ঢাকায় আছে এখনও, ফেরেনি; He has been to Dhaka মানে গিয়েছিল, ফিরেও এসেছে — অভিজ্ঞতা জমা আছে। বাংলায় দুটোই 'ঢাকা গেছে', কিন্তু ইংরেজি ফেরা-না-ফেরা পর্যন্ত দেখে।",
            en: "For questions of life experience — have you ever done it — the present perfect is king, because the answer is still relevant now. Have you ever been to Cox's Bazar? Have you ever eaten sushi? — ever sits after have/has and the subject, before V3. Answers come in two steps: the experience itself in present perfect — Yes, I have / No, I have never been; then the details, which bring a time, so past simple — I went there in 2019 with my family. Remember: experience in the perfect, details in the past — a very natural English pair. One more brilliant contrast: been versus gone. He has gone to Dhaka means he is in Dhaka now, not back; He has been to Dhaka means he went and returned — the experience is banked. Bengali says 'Dhaka gechhe' for both, but English watches the return trip.",
            hi: "ज़िंदगी में कभी किया है या नहीं — इस अनुभव के प्रश्न में present perfect ही राजा है, क्योंकि जवाब अब भी प्रासंगिक है। Have you ever been to Cox's Bazar? Have you ever eaten sushi? — ever बैठता है have/has और कर्ता के बाद, V3 से पहले। जवाब दो कदम में: अनुभव present perfect में — Yes, I have / No, I have never been; फिर विवरण, जिसमें समय आएगा, तो past simple — I went there in 2019 with my family। याद रखें: अनुभव perfect में, विवरण past में — यह जोड़ी अंग्रेज़ी में बहुत स्वाभाविक है। एक शानदार फ़र्क़ और: been बनाम gone। He has gone to Dhaka मतलब वह अभी ढाका में है, लौटा नहीं; He has been to Dhaka मतलब गया था, लौट भी आया — अनुभव जमा है। बांग्ला दोनों के लिए 'ঢাকা গেছে' कहता है, पर अंग्रेज़ी लौटना-न-लौटना तक देखती है।",
          },
          examples: [
            {
              wrong: "Did you ever eat sushi?",
              right: "Have you ever eaten sushi?",
              note: {
                bn: "জীবন-ব্যাপী অভিজ্ঞতার প্রশ্ন, সময় বলা নেই — present perfect: Have you ever eaten?; did মানে নির্দিষ্ট অতীত ঘড়ি।",
                en: "A life-wide experience question with no stated time — present perfect: Have you ever eaten?; did points to one past occasion.",
                hi: "ज़िंदगी-भर का अनुभव प्रश्न, समय अनकहा — present perfect: Have you ever eaten?; did का मतलब एक निश्चित पुराना मौक़ा।",
              },
            },
            {
              wrong: "Have you ever been to Darjeeling? — Yes, I have been there in 2018.",
              right: "Have you ever been to Darjeeling? — Yes, I have. I went there in 2018.",
              note: {
                bn: "অভিজ্ঞতার উত্তর short — Yes, I have; তারিখ ঢুকলেই দ্বিতীয় বাক্য past-এ: I went there in 2018।",
                en: "Keep the experience answer short — Yes, I have; the moment a date enters, the next sentence goes past: I went there in 2018.",
                hi: "अनुभव का जवाब छोटा — Yes, I have; तारीख़ घुसते ही अगला वाक्य past में: I went there in 2018।",
              },
            },
            {
              wrong: "Rahim has been to Dhaka — call him there now.",
              right: "Rahim has gone to Dhaka — call him there now.",
              note: {
                bn: "এখনও সেখানে, ফেরেনি — has gone; been বললে মানে ফিরে এসেছে, এখানেই আছে — প্রসঙ্গ বদলে যায়।",
                en: "Still there, not back — has gone; been would mean he returned and is here — the situation flips.",
                hi: "अभी वहीँ है, लौटा नहीं — has gone; been कहा तो मतलब लौट आया, यहीँ है — स्थिति पलट जाती है।",
              },
            },
            {
              wrong: "My uncle has gone to Mecca twice.",
              right: "My uncle has been to Mecca twice.",
              note: {
                bn: "twice = দুবার গিয়ে দুবারই ফেরা — অভিজ্ঞতার হিসাব been-এ: has been to; gone বললে এখনো ওখানে বসে থাকার মানে!",
                en: "Twice means two trips, two returns — experience counts with been: has been to; gone would mean he is still sitting there!",
                hi: "twice = दो बार गया, दो बार लौटा — अनुभव की गिनती been में: has been to; gone कहा तो अभी वहीँ बैठा है!",
              },
            },
            {
              wrong: "I have ever eaten biryani.",
              right: "I have never eaten biryani.",
              note: {
                bn: "statement-এ ever একা চলে না — 'কখনো না' বোঝাতে never: I have never eaten; প্রশ্নে-নেগেটিভে ever।",
                en: "ever does not walk alone in statements — for 'not once' use never: I have never eaten; ever lives in questions and negatives.",
                hi: "statement में ever अकेला नहीं चलता — 'कभी नहीं' के लिए never: I have never eaten; ever प्रश्न-निषेध में।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "Common mistakes by Bengali speakers",
            hi: "बांग्लाभाषी छात्रों की आम गलतियाँ",
          },
          body: {
            bn: "এই পাঠের ভুলগুলোর মূল একটাই বাংলা প্যাটার্ন — 'করেছি/করেছিলাম'-র ফারাক ইংরেজিতে অনুবাদ হয় না, তাই শিক্ষার্থীরা 'গেছি' দেখেছে বুঝে have/has + V3 লিখে ফেলেন, সঙ্গে ভুলে গেছেন যে বাক্যের ওপাশে yesterday-জাতীয় সময় বসে আছে। নিচের ভুলগুলো চ্যাটে, ক্লাসে, ইন্টারভিউতে রোজ দেখা যায়। প্রতিটার পেছনের বাংলা বাক্যটা চিনুন, তারপর ডানের ঠিক বাক্যটা তিনবার জোরে বলুন। মনে রাখার সবচেয়ে সহজ সূত্র: বাক্যে শেষ সময় দেখলেই হাত V2-তে, সময় না দেখলে বা আজও চলা সময়ে হাত have/has + V3-তে।",
            en: "All the mistakes of this lesson grow from one Bengali pattern — the gap between 'korechhi/korechhilam' does not survive translation, so learners see 'gechhi' and write have/has + V3, forgetting that a yesterday-type time is sitting over the sentence. The slips below appear daily in chats, classes and interviews. Catch the Bengali sentence behind each one, then say the corrected version aloud three times. The simplest memory formula: spot a finished time in the sentence and your hand goes to V2; no time, or time still running, and your hand goes to have/has + V3.",
            hi: "इस पाठ की गलतियों की जड़ एक ही बांग्ला पैटर्न है — 'করেছি/করেছিলাম' का फ़र्क़ अनुवाद में बचता नहीं, इसलिए छात्र 'गेछি' देखकर have/has + V3 लिख देते हैं, भूल जाते हैं कि वाक्य के ऊपर yesterday-जैसा समय बैठा है। नीचे की गलतियाँ चैट, कक्षा और इंटरव्यू में रोज़ दिखती हैं। हर एक के पीछे का बांग्ला वाक्य पहचानें, फिर सही वाक्य तीन बार ज़ोर से बोलें। सबसे आसान सूत्र: वाक्य में समाप्त समय दिखे तो हाथ V2 पर, समय न हो या अभी चल रहा हो तो हाथ have/has + V3 पर।",
          },
          examples: [
            {
              wrong: "I have seen him last Monday.",
              right: "I saw him last Monday.",
              note: {
                bn: "last Monday শেষ সময় — V2: saw; বাংলা 'দেখেছিলাম'; 'দেখেছি + last Monday' জোড়া ইংরেজিতে নেই।",
                en: "Last Monday is finished time — V2: saw; Bengali 'দেখেছিলাম'; the 'দেখেছি + last Monday' pair does not exist in English.",
                hi: "last Monday समाप्त समय — V2: saw; बांग्ला 'देखेछिलाम'।",
              },
            },
            {
              wrong: "He has came home.",
              right: "He has come home.",
              note: {
                bn: "come-came-come — V3 হলো come; has came-জাতীয় অর্ধেক-বদল ভুল, মুখস্থ তিন-রূপেই পথ।",
                en: "come-came-come — the V3 is come; half-changed forms like 'has came' are wrong, the memorised set is the only path.",
                hi: "come-came-come — V3 है come; 'has came' जैसा आधा-बदला रूप गलत, रटा हुआ तीन-रूप ही रास्ता।",
              },
            },
            {
              wrong: "I have finished my work an hour ago.",
              right: "I finished my work an hour ago.",
              note: {
                bn: "an hour ago = শেষ সময় — ago দেখলেই past simple: finished; 'শেষ করেছি এক ঘণ্টা আগে' বললেও ইংরেজি V2 চায়।",
                en: "An hour ago is finished time — spot ago and go past simple: finished; even Bengali 'শেষ করেছি এক ঘণ্টা আগে' takes V2 in English.",
                hi: "an hour ago = समाप्त समय — ago दिखते ही past simple: finished।",
              },
            },
            {
              wrong: "I didn't have gone to the class.",
              right: "I didn't go to the class.",
              note: {
                bn: "didn't নিজেই অতীত বহন করে — পরে V1: didn't go; have + V3-এর সঙ্গে didn't মেশানো দুই কালের দুর্ঘটনা।",
                en: "didn't already carries the past — the next verb is V1: didn't go; mixing didn't with have + V3 is a two-tense accident.",
                hi: "didn't अकेला ही अतीत ढोता है — अगली क्रिया V1: didn't go; didn't को have + V3 से मिलाना दो-काल दुर्घटना है।",
              },
            },
            {
              wrong: "We are living here since 2015.",
              right: "We have lived here since 2015.",
              note: {
                bn: "since 2015 = তখন থেকে এখন পর্যন্ত — চলমান সময়, তাই present perfect: have lived; 'থাকছি' মানেই এখনও থাকছি।",
                en: "Since 2015 = from then till now — running time, so present perfect: have lived; 'thakchhi' means still living here.",
                hi: "since 2015 = तब से अब तक — चलता समय, इसलिए present perfect: have lived; 'থাকছি' मतलब अभी भी रह रहे हैं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক",
            en: "See it in a mini story",
            hi: "एक छोटी कहानी में देखें",
          },
          body: {
            bn: "সকালে মা তানিয়াকে জিজ্ঞেস করলেন, 'Have you had breakfast?' — এই মুহূর্ত পর্যন্ত করেছ কি? তানিয়া বলল, 'Yes, I have just finished.' মা বললেন, 'Your cousin called this morning. He has gone to Dhaka with your uncle.' has gone = সেখানে আছে এখনও, ফেরেনি। তানিয়া অবাক, 'But I saw him last week!' — সময় বলা আছে (last week), তাই V2: saw। স্কুলে বন্ধু জিজ্ঞেস করল, 'Have you done the math homework yet?' তানিয়া, 'I have already done it, but I haven't started the essay yet.' already পজিটিভে, yet নেগেটিভের শেষে। তারপর বলল, 'Last year I failed in math, but this year I have never missed a class, and this week I have solved fifty problems!' last year শেষ — failed; this year/this week চলছে — have missed, have solved। এক নজরে — have/has + V3 = সময় না বলা বা এখনও চলা সময়, ফল এখন; V2 = শেষ সময় বলা আছে (yesterday, last year, ago); দুই কাল এক বাক্যে কখনো মেলে না; just/already/never মাঝে বসে, yet শেষে — নেগেটিভ-প্রশ্নে; অভিজ্ঞতায় ever/never, বিস্তারিতে V2; been = গিয়ে ফেরা, gone = এখনও ওখানে।",
            en: "In the morning mother asked Tania, 'Have you had breakfast?' — up to this moment? Tania said, 'Yes, I have just finished.' Mother said, 'Your cousin called this morning. He has gone to Dhaka with your uncle.' has gone = he is still there, not back. Tania was surprised, 'But I saw him last week!' — time is stated (last week), so V2: saw. At school a friend asked, 'Have you done the math homework yet?' Tania replied, 'I have already done it, but I haven't started the essay yet.' already in the positive, yet at the end of the negative. Then she added, 'Last year I failed in math, but this year I have never missed a class, and this week I have solved fifty problems!' Last year is closed — failed; this year and this week are running — have missed, have solved. In a nutshell — have/has + V3 = unstated or still-running time, result felt now; V2 = a stated finished time (yesterday, last year, ago); the two tenses never share one sentence; just/already/never sit in the middle, yet at the end of negatives and questions; experience with ever/never, details in V2; been = went and returned, gone = still there.",
            hi: "सुबह माँ ने तानिया से पूछा, 'Have you had breakfast?' — इस क्षण तक खाया? तानिया ने कहा, 'Yes, I have just finished.' माँ ने कहा, 'Your cousin called this morning. He has gone to Dhaka with your uncle.' has gone = वह अभी वहीँ है, लौटा नहीं। तानिया हैरान, 'But I saw him last week!' — समय बताया है (last week), इसलिए V2: saw। स्कूल में दोस्त ने पूछा, 'Have you done the math homework yet?' तानिया ने कहा, 'I have already done it, but I haven't started the essay yet.' already पॉज़िटिव में, yet निषेध के अंत में। फिर बोली, 'Last year I failed in math, but this year I have never missed a class, and this week I have solved fifty problems!' last year बंद — failed; this year/this week चल रहे — have missed, have solved। एक नज़र में — have/has + V3 = समय अनकहा या अभी चल रहा, परिणाम अभी; V2 = समाप्त समय बताया (yesterday, last year, ago); दोनों काल एक वाक्य में कभी नहीं मिलते; just/already/never बीच में, yet अंत में — निषेध-प्रश्न में; अनुभव ever/never में, विवरण V2 में; been = गया और लौटा, gone = अभी वहीँ।",
          },
          examples: [
            {
              wrong: "Have you had breakfast? — Yes, I have finished just.",
              right: "Have you had breakfast? — Yes, I have just finished.",
              note: {
                bn: "just-এর আসন have আর V3-এর মাঝে — have just finished; শেষে টেনে নেওয়া বাংলা প্যাটার্ন।",
                en: "just belongs between have and V3 — have just finished; dragging it to the end is the Bengali pattern.",
                hi: "just की सीट have और V3 के बीच — have just finished; अंत में खींचना बांग्ला पैटर्न।",
              },
            },
            {
              wrong: "He has gone to Dhaka last week.",
              right: "He went to Dhaka last week.",
              note: {
                bn: "গল্পে মা বলেছেন has gone (সময় নেই), কিন্তু last week জুড়লেই V2 — went; সময় সূত্রটা সব জায়গায়।",
                en: "Mother said has gone (no time stated), but attach last week and it must be V2 — went; the time rule rules everywhere.",
                hi: "माँ ने has gone कहा (समय नहीं), पर last week जोड़ते ही V2 — went; समय का सूत्र हर जगह।",
              },
            },
            {
              wrong: "This year I never missed a class.",
              right: "This year I have never missed a class.",
              note: {
                bn: "this year এখনও চলছে + never — present perfect: have never missed; 'এ বছর একটা ক্লাসও মিস করিনি'।",
                en: "This year is still running + never — present perfect: have never missed; Bengali 'এ বছর একটা ক্লাসও মিস করিনি'.",
                hi: "this year अभी चल रहा + never — present perfect: have never missed।",
              },
            },
            {
              wrong: "I have gone to Cox's Bazar twice.",
              right: "I have been to Cox's Bazar twice.",
              note: {
                bn: "twice = দুবার ফেরাসহ অভিজ্ঞতা — has been to; gone মানে এখনো সমুদ্রের ধারে বসে আছি!",
                en: "Twice means two completed trips — has been to; gone would mean I am still sitting by the sea!",
                hi: "twice = दो पूरे सफ़र — has been to; gone कहा तो अभी समुद्र किनारे बैठा हूँ!",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "বাক্য বানানোর আগে সময়ের শব্দ খুঁজুন: yesterday/last year/ago দেখলেই V2; today/this week/ever/just/already/yet দেখলেই have/has + V3।",
          en: "Hunt for the time word first: yesterday/last year/ago force V2; today/this week/ever/just/already/yet call for have/has + V3.",
          hi: "वाक्य बनाने से पहले समय-शब्द खोजें: yesterday/last year/ago देखा तो V2; today/this week/ever/just/already/yet देखा तो have/has + V3।",
        },
        {
          bn: "এক সূত্রে সব: বাংলা 'করেছি' + বাক্যে শেষ সময় নেই = have/has + V3; বাংলা 'করেছিলাম' বা বাক্যে yesterday-জাতীয় সময় = V2।",
          en: "One formula for everything: Bengali 'korechhi' with no finished time = have/has + V3; Bengali 'korechhilam' or a yesterday-type time in the sentence = V2.",
          hi: "एक सूत्र सब के लिए: बांग्ला 'করেছি' + कोई समाप्त समय नहीं = have/has + V3; बांग्ला 'করেছিলাম' या वाक्य में yesterday-जैसा समय = V2।",
        },
        {
          bn: "'I have gone to Dhaka yesterday' জাতীয় বাক্য দেখলে সাথে সাথে ধরুন — have/has আর yesterday কখনো এক বাক্যে থাকে না।",
          en: "Catch 'I have gone to Dhaka yesterday'-type sentences instantly — have/has and yesterday can never share a sentence.",
          hi: "'I have gone to Dhaka yesterday' जैसा वाक्य देखते ही पकड़ें — have/has और yesterday कभी एक वाक्य में नहीं।",
        },
        {
          bn: "have-এর পরে V3 — have went, has ate, has came জাতীয় অর্ধেক-বদল নয়; অনিয়মিত তিন-রূপ রোজ জোড়ে বলুন: go-went-gone, eat-ate-eaten, see-saw-seen।",
          en: "V3 after have — no half-changes like have went, has ate, has came; say irregular sets aloud in pairs daily: go-went-gone, eat-ate-eaten, see-saw-seen.",
          hi: "have के बाद V3 — have went, has ate, has came जैसे आधे-बदले रूप नहीं; अनियमित तीन-रूप रोज़ जोड़ में बोलें: go-went-gone, eat-ate-eaten, see-saw-seen।",
        },
        {
          bn: "just/already/never বসে have/has আর V3-এর ঠিক মাঝখানে — I have just eaten, She has already left, I have never tried।",
          en: "just/already/never sit exactly between have/has and V3 — I have just eaten, She has already left, I have never tried.",
          hi: "just/already/never ठीक have/has और V3 के बीच बैठते हैं — I have just eaten, She has already left, I have never tried।",
        },
        {
          bn: "yet শুধু নেগেটিভ আর প্রশ্নের শেষে — I haven't done it yet, Have you done it yet?; পজিটিভ বাক্যে already।",
          en: "yet lives only at the end of negatives and questions — I haven't done it yet, Have you done it yet?; positives take already.",
          hi: "yet केवल निषेध और प्रश्न के अंत में — I haven't done it yet, Have you done it yet?; पॉज़िटिव में already।",
        },
        {
          bn: "অভিজ্ঞতা জিজ্ঞেস করতে Have you ever + V3; উত্তরে তারিখ-বিস্তারিত এলেই পাস্টে যান — I went there in 2019।",
          en: "Ask experience with Have you ever + V3; the moment the answer brings dates or details, switch to the past — I went there in 2019.",
          hi: "अनुभव पूछने के लिए Have you ever + V3; जवाब में तारीख़-विवरण आते ही past में जाएँ — I went there in 2019।",
        },
        {
          bn: "been = গিয়ে ফিরেছে (He has been to Dhaka), gone = এখনও সেখানে (He has gone to Dhaka) — ফেরা-না-ফেরা ভেবে বাছুন।",
          en: "been = went and returned (He has been to Dhaka), gone = still there (He has gone to Dhaka) — choose by the return trip.",
          hi: "been = गया और लौटा (He has been to Dhaka), gone = अभी वहीँ (He has gone to Dhaka) — लौटने को सोचकर चुनें।",
        },
        {
          bn: "since 2015 / for five years-জাতীয় 'এখনো পর্যন্ত' ফ্রেজ present perfect-এর — I have lived here since 2015; পুরোনো পাঠ 'Since vs For' ঘুরে দেখুন।",
          en: "Phrases like since 2015 / for five years belong to the present perfect — I have lived here since 2015; revisit the earlier 'Since vs For' lesson.",
          hi: "since 2015 / for five years जैसे 'अब तक' वाक्यांश present perfect के — I have lived here since 2015; पिछला 'Since vs For' पाठ दोहराएँ।",
        },
        {
          bn: "রোজ রাতে দুই লাইনের দিনলিপি লিখুন: 'I have done...' (আজ এ পর্যন্ত) আর 'Yesterday I...' (গতকালের হিসাব) — দুই কালের হাত এভাবেই আলাদা হয়।",
          en: "Every night write a two-line diary: 'I have done...' (up to now today) and 'Yesterday I...' (yesterday's account) — this is how the two tenses learn to keep apart.",
          hi: "रोज़ रात दो लाइन की डायरी लिखें: 'I have done...' (आज अब तक) और 'Yesterday I...' (कल का हिसाब) — दोनों काल इसी तरह अलग होते हैं।",
        },
      ],
      quiz: [
        {
          question: "I ___ my homework two hours ago.",
          options: ["have finished", "finished", "have finish", "finish"],
          answer: 1,
          explanation: {
            bn: "two hours ago = শেষ সময় — শুধু past simple: finished; ago-র সঙ্গে have আসবে না।",
            en: "Two hours ago is finished time — past simple only: finished; no have with ago.",
            hi: "two hours ago = समाप्त समय — केवल past simple: finished; ago के साथ have नहीं।",
          },
        },
        {
          question: "I have ___ to Cox's Bazar twice.",
          options: ["go", "went", "gone", "going"],
          answer: 2,
          explanation: {
            bn: "have-এর পরে V3 — go-went-gone-এর V3 হলো gone; twice-যুক্ত অভিজ্ঞতায় present perfect।",
            en: "After have use V3 — the V3 of go-went-gone is gone; experience with twice takes the present perfect.",
            hi: "have के बाद V3 — go-went-gone का V3 है gone; twice वाले अनुभव में present perfect।",
          },
        },
        {
          question: "She ___ to London last year.",
          options: ["has gone", "has been", "went", "goes"],
          answer: 2,
          explanation: {
            bn: "last year শেষ সময় — past simple-ই একমাত্র: went; have/has + last year জুটি অসম্ভব।",
            en: "Last year is finished time — past simple is the only option: went; have/has + last year is an impossible pair.",
            hi: "last year समाप्त समय — past simple ही एकमात्र: went; have/has + last year असंभव जोड़ी।",
          },
        },
        {
          question: "I have ___ eaten biryani — what does it taste like?",
          options: ["ever", "never", "yet", "already"],
          answer: 1,
          explanation: {
            bn: "statement-এ 'কখনো না' বোঝাতে never — have never eaten; ever শুধু প্রশ্নে-নেগেটিভে।",
            en: "In a statement meaning 'not once' use never — have never eaten; ever belongs to questions and negatives.",
            hi: "statement में 'कभी नहीं' के लिए never — have never eaten; ever केवल प्रश्न-निषेध में।",
          },
        },
        {
          question: "Have you finished your homework ___?",
          options: ["already", "yet", "just", "never"],
          answer: 1,
          explanation: {
            bn: "প্রশ্নে 'এখনও?' — yet শেষে: Have you finished yet?; already পজিটিভের শব্দ।",
            en: "In a question meaning 'by now?' — yet at the end: Have you finished yet?; already is a positive-sentence word.",
            hi: "प्रश्न में 'अब तक?' — अंत में yet: Have you finished yet?; already पॉज़िटिव का शब्द।",
          },
        },
        {
          question: "Don't worry — I have ___ done it.",
          options: ["yet", "never", "already", "since"],
          answer: 2,
          explanation: {
            bn: "পজিটিভ বাক্যে 'ইতিমধ্যে' = already, বসে have আর V3-এর মাঝে: have already done।",
            en: "In a positive sentence 'before now' = already, sitting between have and V3: have already done.",
            hi: "पॉज़िटिव वाक्य में 'पहले ही' = already, have और V3 के बीच: have already done।",
          },
        },
        {
          question: "___ you ever been to Darjeeling?",
          options: ["Did", "Have", "Has", "Do"],
          answer: 1,
          explanation: {
            bn: "ever-যুক্ত অভিজ্ঞতার প্রশ্ন present perfect-এ — Have you ever been?; you-এর সঙ্গে have।",
            en: "An ever-question of experience takes the present perfect — Have you ever been?; with you the helper is have.",
            hi: "ever वाला अनुभव प्रश्न present perfect में — Have you ever been?; you के साथ have।",
          },
        },
        {
          question: "Rahim has ___ to Chittagong — he is not here now.",
          options: ["been", "gone", "went", "go"],
          answer: 1,
          explanation: {
            bn: "এখনও সেখানে, ফেরেনি — has gone; has been মানে গিয়ে ফিরে এসেছে, এখানে থাকত।",
            en: "Still there, not back — has gone; has been would mean he returned and should be here.",
            hi: "अभी वहीँ है, लौटा नहीं — has gone; has been का मतलब लौट आया, यहाँ होता।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: [
            "I have seen him yesterday.",
            "I saw him yesterday.",
            "I have saw him yesterday.",
            "I seen him yesterday.",
          ],
          answer: 1,
          explanation: {
            bn: "yesterday আছে মানে past simple — I saw him yesterday; have+yesterday ভুল, bare seen ভুল, have saw ভুল।",
            en: "With yesterday it is past simple — I saw him yesterday; have+yesterday is wrong, bare seen is wrong, have saw is wrong.",
            hi: "yesterday है तो past simple — I saw him yesterday; have+yesterday गलत, अकेला seen गलत, have saw गलत।",
          },
        },
        {
          question: "We ___ this movie three times this month.",
          options: ["watch", "watched", "have watched", "are watching"],
          answer: 2,
          explanation: {
            bn: "this month এখনও চলছে — চলমান সময়ের হিসাব present perfect-এ: have watched; বাংলা 'দেখেছি'।",
            en: "This month is still running — a count within running time takes the present perfect: have watched; Bengali 'দেখেছি'.",
            hi: "this month अभी चल रहा है — चल-रहे समय की गिनती present perfect में: have watched।",
          },
        },
      ],
    },
  },
];
