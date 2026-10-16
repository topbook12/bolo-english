// ─── Learning-path grammar seeds v3: BEGINNER batch B1 (4 deep lessons) ───
// Task 9.3-B1. Owner mandate: every topic fully developed so ONE lesson can
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

export const SEED_GRAMMAR_V3_B1: SeedGrammarV3Entry[] = [
  /* ── 1. Tense Basics (Beginner) ────────────────────────────────────── */
  {
    topic: "Tense basics",
    level: "beginner",
    title: "Tense Basics (Beginner)",
    unit: 1,
    data: {
      title: {
        bn: "টেন্সের বেসিক (বিগিনার)",
        en: "Tense Basics (Beginner)",
        hi: "टेंस के बेसिक (बिगिनर)",
      },
      intro: {
        bn: "এই পাঠ লার্নিং পথের প্রথম ব্যাকরণ পাঠ — এর আগের কোনো ব্যাকরণ পাঠ লাগে না; রোজকার শব্দ (eat, go, school, market) আর am/is/are-এর সঙ্গে হালকা পরিচয় থাকলেই শুরু করা যাবে। বাংলায় ক্রিয়া কর্তা ও কাল অনুযায়ী রূপ বদলায়: আমি খাই, সে খায়, কাল খাব, গতকাল খেয়েছিলাম। ইংরেজিতেও ক্রিয়া বদলায়, কিন্তু বদলানোর নিয়ম আলাদা — আর সেই ফারাক থেকেই জন্মায় বাঙালি শিক্ষার্থীদের চেনা ভুলগুলো: 'He go', 'Yesterday I go', 'I did not went'। এই পাঠে তিনটে মূল কাল — present, past, future — কখন বসে, কীভাবে গঠিত হয়, কোন শব্দ কোন কালের আভাস দেয়, আর গল্প বলার সময় কাল কীভাবে ধরে রাখতে হয় — সব ধাপে ধাপে শিখব।",
        en: "This is the first grammar lesson on the learning path — no earlier grammar lesson is required; everyday words (eat, go, school, market) and a light acquaintance with am/is/are are enough to start. In Bengali the verb changes its form with the subject and the time: ami khai, she khay, kal khab, gotokal kheyechhilam. English verbs change too, but by different rules — and that gap produces the familiar Bengali-speaker mistakes: 'He go', 'Yesterday I go', 'I did not went'. In this lesson we learn, step by step, when the three basic tenses — present, past and future — are used, how each one is built, which words signal which tense, and how to keep the tense steady while telling a story.",
        hi: "यह लर्निंग पथ का पहला व्याकरण पाठ है — पहले कोई व्याकरण पाठ ज़रूरी नहीं; रोज़मर्रा के शब्द (eat, go, school, market) और am/is/are से हल्की पहचान ही काफ़ी है। बांग्ला में क्रिया का रूप कर्ता और समय के साथ बदलता है (आमি खाइ, से खाय)। अंग्रेज़ी में भी क्रिया बदलती है, पर नियम अलग हैं — और इसी फ़र्क़ से बांग्लाभाषी छात्रों की जानी-पहचानी गलतियाँ बनती हैं: 'He go', 'Yesterday I go', 'I did not went'। इस पाठ में हम कदम-दर-कदम सीखेंगे: तीन मूल काल — present, past, future — कब आते हैं, कैसे बनते हैं, कौन-से शब्द किस काल का संकेत देते हैं, और कहानी सुनाते समय काल को कैसे स्थिर रखा जाता है।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — তিন কাল, তিন কাজ",
            en: "When to use them — three tenses, three jobs",
            hi: "कब इस्तेमाल करें — तीन काल, तीन काम",
          },
          body: {
            bn: "Present simple তিন ধরনের কাজে বসে: (১) প্রতিদিনের অভ্যাস বা রুটিন — I drink tea every morning, He goes to office by bus; (২) চিরন্তন সত্য বা স্থায়ী অবস্থা — The sun rises in the east, Water boils at 100 degrees, She lives in Sylhet; (৩) সময়সূচি — The class starts at ten. বাংলায় যেসব বাক্য 'খাই, যাই, করি, থাকি' দিয়ে শেষ হয়, ইংরেজিতে তাদের ঘর present simple। Past simple বসে শেষ হয়ে যাওয়া কাজে — শুরুও অতীতে, শেষও অতীতে: I watched a movie last night, We went to Cox's Bazar in December, He called me yesterday. বাংলার 'খেলাম, গেলাম, করলাম' পরিবারের জায়গা ইংরেজিতে এটাই। Future বসে এখনো ঘটেনি এমন কাজে — পরিকল্পনা, প্রতিশ্রুতি, ভবিষ্যদ্বাণী: I will call you tomorrow, We will meet next week, Don't worry, I will help you. বাংলার 'খাব, যাব, করব' পরিবারের জায়গা এটা। মূল নিয়ম: বাংলায় সময় বোঝাতে সময়ের শব্দ আর ক্রিয়ার রূপ দুটোই কাজ করে, কিন্তু ইংরেজিতে সময়ের শব্দ বদলালে ক্রিয়াকেও সঙ্গে নিতেই হয় — yesterday থাকলে ক্রিয়া past রূপে, tomorrow থাকলে will-এর সঙ্গে। এক বাক্যে একটাই কাল — one time, one tense — আজকের পাঠের মূলমন্ত্র এটাই।",
            en: "The present simple does three jobs: (1) daily habits or routines — I drink tea every morning, He goes to office by bus; (2) timeless truths or permanent states — The sun rises in the east, Water boils at 100 degrees, She lives in Sylhet; (3) schedules — The class starts at ten. Whatever Bengali finishes with 'khai, jai, kori, thaki' belongs to the present simple in English. The past simple is for finished actions — started and ended in the past: I watched a movie last night, We went to Cox's Bazar in December, He called me yesterday. It covers the whole Bengali 'khelam, gelam, korlam' family. The future is for actions that have not happened yet — plans, promises, predictions: I will call you tomorrow, We will meet next week, Don't worry, I will help you. This is the Bengali 'khab, jabo, korbo' family. The core rule: in Bengali both the time word and the verb form carry the time, but in English a change of time word forces a change of verb — with yesterday the verb goes past, with tomorrow it goes with will. One sentence, one tense — one time, one tense — that is the mantra of this lesson.",
            hi: "Present simple तीन काम करता है: (1) रोज़ की आदत या रूटीन — I drink tea every morning, He goes to office by bus; (2) अनंत सत्य या स्थायी अवस्था — The sun rises in the east, Water boils at 100 degrees, She lives in Sylhet; (3) समय-सारणी — The class starts at ten. जो बात बांग्ला में 'খাই, যাই, করি' से खत्म होती है, उसका घर अंग्रेज़ी में present simple है। Past simple समाप्त हो चुके कामों के लिए — शुरुआत भी अतीत में, अंत भी अतीत में: I watched a movie last night, We went to Cox's Bazar in December, He called me yesterday। Future अभी घटित न हुए कामों के लिए — योजना, वादा, भविष्यवाणी: I will call you tomorrow, We will meet next week, Don't worry, I will help you। मूल नियम: बांग्ला में समय-शब्द और क्रिया-रूप दोनों समय बताते हैं, पर अंग्रेज़ी में समय-शब्द बदलने पर क्रिया भी बदलनी ही पड़ती है — yesterday हो तो क्रिया past रूप में, tomorrow हो तो will के साथ। एक वाक्य में एक ही काल — one time, one tense — यही इस पाठ का मूल मंत्र है।",
          },
          examples: [
            {
              wrong: "I go to the market yesterday.",
              right: "I went to the market yesterday.",
              note: {
                bn: "yesterday আছে মানে কাজটা অতীতে শেষ — ক্রিয়াও past হবে: go→went। বাংলা 'গেলাম'-এর মতোই ইংরেজি ক্রিয়া নিজেই বদলায়।",
                en: "'Yesterday' means the action is finished, so the verb must go past: go becomes went — just as Bengali changes the verb itself.",
                hi: "'yesterday' है तो काम अतीत में खत्म — क्रिया भी past होगी: go→went।",
              },
            },
            {
              wrong: "Every day he is going to school by bus.",
              right: "Every day he goes to school by bus.",
              note: {
                bn: "every day = প্রতিদিনের অভ্যাস → present simple। 'এখন চলছে' এমন কাজ নয়, তাই is going নয়।",
                en: "'Every day' marks a daily habit, so the present simple is right — this is not an action happening right now, so no 'is going'.",
                hi: "'every day' = रोज़ की आदत → present simple; अभी चल रहा काम नहीं, इसलिए 'is going' नहीं।",
              },
            },
            {
              wrong: "Tomorrow I buy a new phone.",
              right: "Tomorrow I will buy a new phone.",
              note: {
                bn: "tomorrow = ভবিষ্যতের সংকেত; ইংরেজিতে শুধু tomorrow লিখলেই হয় না — ক্রিয়ার সঙ্গে will লাগবেই।",
                en: "'Tomorrow' is a future signal; in English the word alone is not enough — the verb needs 'will' with it.",
                hi: "'tomorrow' = भविष्य का संकेत; केवल tomorrow काफ़ी नहीं — क्रिया के साथ will ज़रूरी है।",
              },
            },
            {
              wrong: "The sun rose in the east.",
              right: "The sun rises in the east.",
              note: {
                bn: "চিরন্তন সত্য সবসময় present-এ থাকে — শব্দটা অতীতের মতো শোনালেও সূর্য আজও পূর্বে ওঠে।",
                en: "Timeless truths always stay in the present — even if the verb sounds 'past', the sun still rises in the east today.",
                hi: "अनंत सत्य हमेशा present में रहते हैं — सूरज आज भी पूर्व से उगता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন — তিন কাল, সব পুরুষ",
            en: "Formation — three tenses, every person",
            hi: "बनावट — तीन काल, हर पुरुष",
          },
          body: {
            bn: "Present simple-এর সূত্র: I/you/we/they + ক্রিয়ার মূল রূপ (I play, they play); কিন্তু he/she/it-এ ক্রিয়ার শেষে s (he plays, she plays)। নেগেটিভ: don't/doesn't + মূল ক্রিয়া — I don't play, He doesn't play। প্রশ্ন: Do/Does + কর্তা + মূল ক্রিয়া — Do you play? Does he play? Past simple-এর সূত্র সব পুরুষে এক: ক্রিয়ার past রূপ (V2) — I played, you played, he played, we played, they played; অনিয়মিত হলে I went, she ate। নেগেটিভ: didn't + মূল ক্রিয়া — I didn't play (didn't played কখনো নয়)। প্রশ্ন: Did + কর্তা + মূল ক্রিয়া — Did you play? Future-এর সূত্রও সব পুরুষে এক: will + মূল ক্রিয়া — I/you/he/she/it/we/they will go। নেগেটিভ: won't + মূল ক্রিয়া — I won't go। প্রশ্ন: Will + কর্তা + মূল ক্রিয়া? — Will you come? লক্ষ করুন: নেগেটিভ আর প্রশ্নে কালের বোঝা বহন করে do/does/did/will — তাই মূল ক্রিয়া সবসময় একদম সাধারণ রূপে (V1) ফিরে আসে। He doesn't plays ভুল, He doesn't play ঠিক; Did you went ভুল, Did you go ঠিক।",
            en: "Present simple formula: I/you/we/they + base verb (I play, they play); but he/she/it takes verb + s (he plays, she plays). Negative: don't/doesn't + base verb — I don't play, He doesn't play. Question: Do/Does + subject + base verb — Do you play? Does he play? Past simple formula is the same for every person: the past form (V2) — I played, you played, he played, we played, they played; irregular verbs give I went, she ate. Negative: didn't + base verb — I didn't play (never 'didn't played'). Question: Did + subject + base verb — Did you play? Future formula is also the same for everyone: will + base verb — I/you/he/she/it/we/they will go. Negative: won't + base verb — I won't go. Question: Will + subject + base verb? — Will you come? Notice: in negatives and questions the tense is carried by do/does/did/will, so the main verb always returns to its plain form (V1). 'He doesn't plays' is wrong, 'He doesn't play' is right; 'Did you went' is wrong, 'Did you go' is right.",
            hi: "Present simple का सूत्र: I/you/we/they + मूल क्रिया (I play, they play); पर he/she/it के साथ क्रिया + s (he plays, she plays)। निषेध: don't/doesn't + मूल क्रिया — I don't play, He doesn't play। प्रश्न: Do/Does + कर्ता + मूल क्रिया — Do you play? Does he play? Past simple का सूत्र सब पुरुषों में एक: क्रिया का past रूप (V2) — I played, he played, they played; अनियमित हो तो I went, she ate। निषेध: didn't + मूल क्रिया — I didn't play ('didn't played' कभी नहीं)। प्रश्न: Did + कर्ता + मूल क्रिया — Did you play? Future का सूत्र भी सबके लिए एक: will + मूल क्रिया — I/you/he/they will go। निषेध: won't + मूल क्रिया — I won't go। प्रश्न: Will + कर्ता + मूल क्रिया? — Will you come? ध्यान दें: निषेध और प्रश्न में काल का बोझ do/does/did/will ढोते हैं, इसलिए मूल क्रिया हमेशा साधारण रूप (V1) में लौटती है।",
          },
          examples: [
            {
              wrong: "He don't like fish.",
              right: "He doesn't like fish.",
              note: {
                bn: "don't যায় শুধু I/you/we/they-এর সঙ্গে; he/she/it-এর জুটি doesn't — বাংলা 'পছন্দ করে না' সবার জন্য এক হওয়ায় এই ভাগ চোখে পড়ে না।",
                en: "'Don't' goes only with I/you/we/they; the partner for he/she/it is 'doesn't' — Bengali uses one form for everyone, so the split is easy to miss.",
                hi: "'don't' केवल I/you/we/they के साथ; he/she/it का जोड़ीदार 'doesn't' है।",
              },
            },
            {
              wrong: "Did you went to class?",
              right: "Did you go to class?",
              note: {
                bn: "did নিজেই past বহন করে, তাই পরের ক্রিয়া V1 — অতীতের চিহ্ন বাক্যে একবারই আসে।",
                en: "'Did' already carries the past, so the next verb stays V1 — the past marker appears only once in the sentence.",
                hi: "'did' स्वयं past ले जाता है, इसलिए अगली क्रिया V1 रहती है।",
              },
            },
            {
              wrong: "She will comes tomorrow.",
              right: "She will come tomorrow.",
              note: {
                bn: "will-এর পরে সবার জন্য V1 — কোনো s নেই, কোনো past রূপ নেই; will নিজেই ভবিষ্যৎ বোঝায়।",
                en: "After 'will' every subject takes V1 — no s, no past form; 'will' alone shows the future.",
                hi: "'will' के बाद सबके लिए V1 — कोई s नहीं; भविष्य 'will' ही दिखाता है।",
              },
            },
            {
              wrong: "I not like coffee.",
              right: "I don't like coffee.",
              note: {
                bn: "বাংলায় 'পছন্দ করি না' — শুধু না জুড়ে দিলেই হয়; ইংরেজিতে সাধারণ ক্রিয়ার নেগেটিভে do/does/did-এর ভেতরে not ঢোকে: don't/doesn't/didn't।",
                en: "Bengali just adds 'na' to negate; English negatives of ordinary verbs wrap 'not' inside do/does/did — don't/doesn't/didn't.",
                hi: "बांग्ला में केवल 'नहीं' जोड़ते हैं; अंग्रेज़ी में साधारण क्रिया का निषेध do/does/did के भीतर not लेकर बनता है।",
              },
            },
            {
              wrong: "Does he plays cricket?",
              right: "Does he play cricket?",
              note: {
                bn: "does-এ s আছে মানে তৃতীয় পুরুষের চিহ্ন ইঞ্জিনেই চলে গেছে — মূল ক্রিয়া সাধারণ রূপে (play) থাকবে; s একবারে এক জায়গায়।",
                en: "'Does' already carries the third-person s, so the main verb stays plain (play) — the s can only sit in one place.",
                hi: "'does' में s है, इसलिए मूल क्रिया साधारण रूप (play) में रहेगी — s एक ही जगह बैठता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস শব্দ — কাল চেনার সংকেত",
            en: "Signal words — clues that pick the tense",
            hi: "संकेत शब्द — काल पहचानने के सुराग",
          },
          body: {
            bn: "Present-এর সংকেত: every day, every week, always, usually, often, sometimes, never, on Fridays — I always get up at six, She never eats fast food. এই শব্দগুলো দেখলেই বুঝবেন কাজটা অভ্যাস — present simple। Past-এর সংকেত: yesterday, last night, last week, last month, last year, ago (two days ago, long ago), in 2015 — She called me two days ago, We shifted to Dhaka in 2015। Future-এর সংকেত: tomorrow, next week, next month, next Friday, soon, tonight, in ten minutes — We will start next Monday, The bus will leave in ten minutes। কৌশল: বাক্য বানানোর আগে সংকেত শব্দটা খুঁজুন — সংকেত পেলে কাল ঠিক, কাল ঠিক হলে ক্রিয়ার রূপ ঠিক। সংকেত না থাকলে প্রেক্ষিত দেখুন: গল্প আগে থেকে past-এ চলছিল? তাহলে past-এই থাকুন।",
            en: "Present signals: every day, every week, always, usually, often, sometimes, never, on Fridays — I always get up at six, She never eats fast food. When you see these words, the action is a habit — present simple. Past signals: yesterday, last night, last week, last month, last year, ago (two days ago, long ago), in 2015 — She called me two days ago, We shifted to Dhaka in 2015. Future signals: tomorrow, next week, next month, next Friday, soon, tonight, in ten minutes — We will start next Monday, The bus will leave in ten minutes. The technique: before building a sentence, hunt for the signal word — the signal fixes the tense, and the tense fixes the verb form. No signal? Read the context: if the story has been running in the past, stay in the past.",
            hi: "Present के संकेत: every day, every week, always, usually, often, sometimes, never, on Fridays — I always get up at six, She never eats fast food। ये शब्द दिखें तो काम आदत का है — present simple। Past के संकेत: yesterday, last night, last week, last month, last year, ago (two days ago), in 2015 — She called me two days ago। Future के संकेत: tomorrow, next week, next month, next Friday, soon, tonight, in ten minutes — We will start next Monday, The bus will leave in ten minutes। तकनीक: वाक्य बनाने से पहले संकेत-शब्द खोजें — संकेत काल तय करता है, काल क्रिया-रूप तय करता है। संकेत न हो तो संदर्भ देखें: कहानी पहले से past में चल रही है? तो past में ही रहें।",
          },
          examples: [
            {
              wrong: "My father always go to the mosque.",
              right: "My father always goes to the mosque.",
              note: {
                bn: "always → অভ্যাস → present simple; আর my father = he → ক্রিয়ায় s: goes।",
                en: "'Always' marks a habit — present simple; and 'my father' = he, so the verb takes s: goes.",
                hi: "'always' → आदत → present simple; और 'my father' = he → क्रिया में s: goes।",
              },
            },
            {
              wrong: "We visit our village last Eid.",
              right: "We visited our village last Eid.",
              note: {
                bn: "last Eid = নির্দিষ্ট অতীত সময় → past simple: visit→visited।",
                en: "'Last Eid' is a finished past time — past simple: visit becomes visited.",
                hi: "'last Eid' = निश्चित अतीत समय → past simple: visit→visited।",
              },
            },
            {
              wrong: "I tell you everything tomorrow.",
              right: "I will tell you everything tomorrow.",
              note: {
                bn: "tomorrow → future; ইংরেজিতে ভবিষ্যতের বাক্যে will ছাড়া সাধারণ ক্রিয়া চলে না।",
                en: "'Tomorrow' points to the future; an ordinary verb cannot carry a future sentence in English without 'will'.",
                hi: "'tomorrow' → भविष्य; भविष्य के वाक्य में साधारण क्रिया will के बिना नहीं चलती।",
              },
            },
            {
              wrong: "Two days ago I meet my old friend.",
              right: "Two days ago I met my old friend.",
              note: {
                bn: "ago = অতীতের সংকেত → past simple; meet-এর past met — meeted নয়।",
                en: "'Ago' signals the past — past simple; the past of meet is met, never 'meeted'.",
                hi: "'ago' = अतीत का संकेत → past simple; meet का past met है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "তৃতীয় পুরুষের -s — ছোট চিহ্ন, বড় দায়িত্ব",
            en: "The third-person -s — a tiny mark with a big job",
            hi: "तृतीय पुरुष की -s — छोटा चिह्न, बड़ा दायित्व",
          },
          body: {
            bn: "বাংলায় 'সে যায়' বললে 'যায়'-এর ভেতরেই কর্তার খবর মেশানো থাকে। ইংরেজি present simple-এ সেই খবর পৌঁছে দেয় শুধু একটা চিহ্ন: he/she/it (বা যেকোনো একবচন নাম — Rahim, the dog, my mother) হলে ক্রিয়ার শেষে s বসে — he goes, she eats, Rahim plays, the dog barks। I/you/we/they-তে s নেই। এই s ছোট, শোনাও যায় না মাঝে মাঝে, কিন্তু বাদ গেলে বাক্য ভুল। বানানের নিয়ম: বেশিরভাগ ক্রিয়ায় শুধু +s (plays, eats); -ch/-sh/-ss/-x/-o শেষে +es (watches, washes, misses, fixes, goes); ব্যঞ্জনধ্বনি + y শেষে y উড়ে ies হয় (study→studies, carry→carries); ব্যতিক্রম have→has, do→does। আরেকটা গুরুত্বপূর্ণ ব্যাপার: নেগেটিভ-প্রশ্নে s মূল ক্রিয়া ছেড়ে does-এর গায়ে চলে যায় — He doesn't play (play-তে s নেই), Does she work? মনে রাখুন: s একবারে একটাই শব্দের হয়।",
            en: "In Bengali 'se jay' packs the subject's identity inside the verb ending. In the English present simple that job belongs to one tiny mark: with he/she/it (or any singular name — Rahim, the dog, my mother) the verb takes s — he goes, she eats, Rahim plays, the dog barks. I/you/we/they take no s. The mark is small and sometimes silent, but the sentence is wrong without it. Spelling rules: most verbs just add s (plays, eats); verbs ending in -ch/-sh/-ss/-x/-o add es (watches, washes, misses, fixes, goes); consonant + y changes to ies (study→studies, carry→carries); the odd ones are have→has and do→does. One more important point: in negatives and questions the s leaves the main verb and moves onto does — He doesn't play (no s on play), Does she work? Remember: the s belongs to only one word at a time.",
            hi: "बांग्ला में 'সে যায়' कहने पर कर्ता की खबर क्रिया के अंत में ही मिश्रित होती है। अंग्रेज़ी present simple में वह काम एक छोटे चिह्न का है: he/she/it (या कोई एकवचन नाम — Rahim, the dog, my mother) हो तो क्रिया के अंत में s आता है — he goes, she eats, Rahim plays, the dog barks। I/you/we/they पर s नहीं आता। बनावट के नियम: अधिकांश क्रियाओं में केवल +s (plays, eats); -ch/-sh/-ss/-x/-o अंत में +es (watches, washes, misses, fixes, goes); व्यंजन + y हो तो ies (study→studies, carry→carries); अपवाद have→has, do→does। एक और ज़रूरी बात: निषेध-प्रश्न में s मूल क्रिया छोड़कर does पर चला जाता है — He doesn't play, Does she work? याद रखें: s एक समय में केवल एक शब्द का होता है।",
          },
          examples: [
            {
              wrong: "My sister study in class nine.",
              right: "My sister studies in class nine.",
              note: {
                bn: "my sister = she → ক্রিয়ায় s; study শেষে consonant+y, তাই studies — studys নয়।",
                en: "'My sister' = she, so the verb takes s; study ends in consonant + y, so it becomes studies, not 'studys'.",
                hi: "'my sister' = she → क्रिया में s; study के अंत में व्यंजन+y, इसलिए studies।",
              },
            },
            {
              wrong: "Rahim watch TV after dinner.",
              right: "Rahim watches TV after dinner.",
              note: {
                bn: "Rahim = he → s; watch-এর শেষে -ch, তাই +es: watches।",
                en: "'Rahim' = he, so add s; watch ends in -ch, so it takes es: watches.",
                hi: "'Rahim' = he → s; watch का अंत -ch, इसलिए +es: watches।",
              },
            },
            {
              wrong: "The baby cry at night.",
              right: "The baby cries at night.",
              note: {
                bn: "the baby = it → ক্রিয়ায় s; cry→cries। বাংলা 'শিশুটি কাঁদে' — 'কাঁদে'-র মতোই এখানে s-ই কর্তা বোঝায়।",
                en: "'The baby' = it, so the verb takes s: cry becomes cries — this s does the same job as the Bengali ending 'kande'.",
                hi: "'the baby' = it → क्रिया में s: cry→cries।",
              },
            },
            {
              wrong: "He doesn't likes tea.",
              right: "He doesn't like tea.",
              note: {
                bn: "s-এর দায়িত্ব does নিয়ে নিয়েছে — মূল ক্রিয়া সাধারণ রূপে (like); দুই জায়গায় s আসা ভুল।",
                en: "'Does' has taken over the s, so the main verb stays plain (like) — the s must not appear twice.",
                hi: "s की ज़िम्मेदारी does ने ले ली — मूल क्रिया साधारण रूप (like) में; s दो जगह गलत।",
              },
            },
            {
              wrong: "It rain a lot in Sylhet.",
              right: "It rains a lot in Sylhet.",
              note: {
                bn: "আবহাওয়া বোঝাতে it-ও তৃতীয় পুরুষ — তাই rains। 'সিলেটে বৃষ্টি হয়'-র 'হয়' এখানে s-এ অনুবাদ হয়।",
                en: "Weather sentences use 'it', which is third person too — so rains; the Bengali 'hoy' is carried by that little s.",
                hi: "मौसम के लिए 'it' भी तृतीय पुरुष है — इसलिए rains।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "go/went/gone — past মানেই ক্রিয়ার নতুন রূপ",
            en: "go/went/gone — past means a new verb form",
            hi: "go/went/gone — past का मतलब क्रिया का नया रूप",
          },
          body: {
            bn: "বাংলায় past বানাতে ক্রিয়ার শেষটা বদলায় (যাই→গেলাম, খাই→খেলাম) — ইংরেজিতেও ক্রিয়া নিজেই রূপ বদলায়: go→went, eat→ate, see→saw, come→came, take→took। এই নতুন রূপকে বলে V2। সমস্যা হলো, অনেক শিক্ষার্থী জানেনও, কিন্তু বলার তাড়ায় পুরনো রূপ বেরিয়ে আসে — 'Yesterday I go'। দুটো ফাঁদ খেয়াল রাখুন। ফাঁদ ১: didn't-এর পরে V2 নয় — did কাল বহন করে, তাই I didn't go (I didn't went নয়)। ফাঁদ ২: অর্ধেক বদল — I goed, eated — ইংরেজিতে নেই; অনিয়মিত ক্রিয়ার V2 আলাদা করে মুখস্থই একমাত্র পথ: go-went, eat-ate, see-saw, come-came, buy-bought, take-took, give-gave, do-did, have-had, make-made। ভালো খবর: শুরুর দিকে লাগবে যেগুলো, তার বড় অংশ নিয়মিত — শুধু +ed: play→played, watch→watched, call→called, visit→visited, study→studied।",
            en: "In Bengali the past is made by changing the verb ending (jai→gelam, khai→khelam); English verbs also change themselves: go→went, eat→ate, see→saw, come→came, take→took. This new form is called V2. The problem is that many learners know it but, in the rush of speaking, the old form slips out — 'Yesterday I go'. Two traps to watch. Trap 1: no V2 after didn't — 'did' carries the tense, so it is I didn't go, never 'I didn't went'. Trap 2: no half-changes — 'goed' and 'eated' do not exist; the only route is memorising each irregular V2: go-went, eat-ate, see-saw, come-came, buy-bought, take-took, give-gave, do-did, have-had, make-made. Good news: most of the verbs you need early are regular — just add ed: play→played, watch→watched, call→called, visit→visited, study→studied.",
            hi: "बांग्ला में past बनाने के लिए क्रिया का अंत बदलता है (যাই→গেলাম); अंग्रेज़ी में भी क्रिया स्वयं रूप बदलती है: go→went, eat→ate, see→saw, come→came, take→took। यह नया रूप V2 कहलाता है। दो जाल ध्यान रखें। जाल 1: didn't के बाद V2 नहीं — did काल ढोता है, इसलिए I didn't go, कभी 'I didn't went' नहीं। जाल 2: आधा-बदला रूप — 'goed', 'eated' अंग्रेज़ी में नहीं; अनियमित V2 का एकमात्र रास्ता रटना है: go-went, eat-ate, see-saw, come-came, buy-bought, take-took, give-gave, do-did, have-had, make-made। अच्छी खबर: शुरुआत में ज़रूरी अधिकांश क्रियाएँ नियमित हैं — केवल +ed: play→played, watch→watched, call→called, visit→visited, study→studied।",
          },
          examples: [
            {
              wrong: "Yesterday I go to my uncle's house.",
              right: "Yesterday I went to my uncle's house.",
              note: {
                bn: "yesterday-তে কাজ শেষ — go-র past রূপ went; বাংলা 'গেলাম'-এর মতোই ক্রিয়া নিজেই বদলায়।",
                en: "With 'yesterday' the action is finished — 'go' takes its past form 'went', just as Bengali changes the verb itself.",
                hi: "'yesterday' के साथ काम खत्म — go का past रूप went।",
              },
            },
            {
              wrong: "I didn't went to school.",
              right: "I didn't go to school.",
              note: {
                bn: "didn't-এর পরে V1 — অতীতের চিহ্ন বাক্যে একবারই; went বসালে দুইবার অতীত হয়ে যায়।",
                en: "After 'didn't' use V1 — the past marker appears only once; adding 'went' doubles the past.",
                hi: "'didn't' के बाद V1 — past का चिह्न एक ही बार आता है।",
              },
            },
            {
              wrong: "She eated rice with fish curry.",
              right: "She ate rice with fish curry.",
              note: {
                bn: "eat-এর past 'ate' — eated-জাতীয় রূপ ইংরেজিতে অস্তিত্বই নেই।",
                en: "The past of eat is 'ate' — forms like 'eated' simply do not exist in English.",
                hi: "eat का past 'ate' — 'eated' जैसा रूप अंग्रेज़ी में नहीं होता।",
              },
            },
            {
              wrong: "He buyed a shirt last Friday.",
              right: "He bought a shirt last Friday.",
              note: {
                bn: "buy→bought অনিয়মিত — মুখস্থই একমাত্র পথ; কেনাকাটার গল্পে bought-ই বারবার আসবে।",
                en: "buy→bought is irregular — memorising is the only way; 'bought' will keep returning in shopping stories.",
                hi: "buy→bought अनियमित — रटना ही एकमात्र रास्ता है।",
              },
            },
            {
              wrong: "We didn't saw the movie.",
              right: "We didn't see the movie.",
              note: {
                bn: "did/didn't-এর পরে V1 (see); saw চলে শুধু নিজের বাক্যে — We saw the movie।",
                en: "After did/didn't use V1 (see); 'saw' only works in its own sentence — We saw the movie.",
                hi: "did/didn't के बाद V1 (see); 'saw' केवल अपने वाक्य में चलता है — We saw the movie।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "এক সময় — এক কাল: গল্পে কাল ধরে রাখা",
            en: "One time — one tense: keeping the tense steady in a story",
            hi: "एक समय — एक काल: कहानी में काल स्थिर रखना",
          },
          body: {
            bn: "বাংলায় গল্প বললে আমরা স্বাভাবিকভাবেই এক কালে থাকি, কিন্তু ইংরেজিতে স্পিকিং-এর তাড়ায় অনেকে এক বাক্যেই কাল মিশিয়ে ফেলেন: Yesterday I go to the market and buy fish — ভুল; সময় যদি এক (গতকাল), দুই ক্রিয়াই past-এ যাবে: went... bought। এটাই one time, one tense — এক বাক্যে বা গল্পের এক টুকরোয় সময় এক হলে সব ক্রিয়া একই কালে থাকবে। আরেকটা জায়গা: ভবিষ্যৎ বাক্যের ভেতরের when/if clause — ইংরেজিতে ওখানে future ঢোকে না, present বসে: When he comes, I will tell him (When he will come নয়), If you study, you will pass। বাংলা 'যখন সে আসবে তখন আমি বলব'-এর প্রতিটা অংশ future-এ গেলে ভুল হয়। অনুশীলনের কৌশল: গতকালের দিনটা ৫টা বাক্যে লিখুন — সব past-এ; আজকের রুটিন ৫টা বাক্যে — সব present-এ; কালকের প্ল্যান ৫টা বাক্যে — সব will-এ। তিন কাল আলাদা আলাদা চর্চা হলে মিশে যাওয়া বন্ধ হয়।",
            en: "In Bengali we naturally stay in one tense while narrating, but under the pressure of speaking in English many learners mix tenses inside one sentence: 'Yesterday I go to the market and buy fish' — wrong; if the time is one (yesterday), both verbs go past: went... bought. That is one time, one tense — when the time span is the same, every verb in the sentence or story stretch stays in that tense. Another spot: the when/if clause inside a future sentence — in English no future enters there; the present sits instead: When he comes, I will tell him (not 'When he will come'), If you study, you will pass. Pushing every part of Bengali 'যখন সে আসবে তখন আমি বলব' into the future creates the error. Practice trick: write yesterday's day in five sentences — all past; today's routine in five sentences — all present; tomorrow's plan in five sentences — all with will. Practising the three tenses separately stops the mixing.",
            hi: "बांग्ला में कहानी सुनाते समय हम स्वाभाविक रूप से एक काल में रहते हैं, पर अंग्रेज़ी बोलते समय कई लोग एक वाक्य में ही काल मिला देते हैं: 'Yesterday I go to the market and buy fish' — गलत; समय एक (कल) है तो दोनों क्रियाएँ past में जाएँगी: went... bought। यही one time, one tense है — समय-अवधि एक हो तो हर क्रिया उसी काल में रहेगी। एक और जगह: भविष्य के वाक्य के भीतर when/if clause — अंग्रेज़ी में वहाँ future नहीं घुसता, present बैठता है: When he comes, I will tell him ('When he will come' नहीं), If you study, you will pass। अभ्यास-तरकीब: बीता दिन पाँच वाक्यों में लिखें — सब past में; आज की रूटीन पाँच वाक्यों में — सब present में; कल की योजना पाँच वाक्यों में — सब will के साथ। तीनों काल अलग-अलग अभ्यास करने से मिश्रण बंद होता है।",
          },
          examples: [
            {
              wrong: "Yesterday I go to the market and buy some fish.",
              right: "Yesterday I went to the market and bought some fish.",
              note: {
                bn: "সময় এক (গতকাল) — দুই ক্রিয়াই past: went... bought; একটা present থাকলেই বাক্য ভেঙে পড়ে।",
                en: "One time (yesterday) — both verbs go past: went... bought; leaving one in the present breaks the sentence.",
                hi: "समय एक (कल) — दोनों क्रियाएँ past: went... bought।",
              },
            },
            {
              wrong: "Last night we watch TV and eat popcorn.",
              right: "Last night we watched TV and ate popcorn.",
              note: {
                bn: "watch→watched, eat→ate — একই অতীত সময়ের ধারায় সব ক্রিয়া V2-তে।",
                en: "watch→watched, eat→ate — in one past time-line every verb takes V2.",
                hi: "watch→watched, eat→ate — एक ही अतीत समय-रेखा में सब क्रियाएँ V2 में।",
              },
            },
            {
              wrong: "When he will come, I will give him the book.",
              right: "When he comes, I will give him the book.",
              note: {
                bn: "when clause-এ future আসে না — সময় বোঝাতে present (comes), ফলাফলে will; বাংলার 'আসবে... বলব' জোড়া ইংরেজিতে present + will হয়।",
                en: "No future inside the when-clause — the present (comes) marks the time, 'will' marks the result; the Bengali pair 'ashbe... bolbo' becomes present + will in English.",
                hi: "when clause में future नहीं आता — समय के लिए present (comes), परिणाम के लिए will।",
              },
            },
            {
              wrong: "If it will rain, we will stay home.",
              right: "If it rains, we will stay home.",
              note: {
                bn: "if clause-ও একই নিয়মে — শর্ত present-এ (rains), ফল will-এ (will stay); 'বৃষ্টি হবে... থাকব' জোড়া এখানে rains + will stay।",
                en: "Same rule for the if-clause — condition in the present (rains), result with will (will stay); the Bengali pair becomes rains + will stay.",
                hi: "if clause का भी वही नियम — शर्त present में (rains), परिणाम will में (will stay)।",
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
            bn: "নিচের ভুলগুলো আমাদের ক্লাসরুমে, চ্যাটে, ইন্টারভিউতে সবচেয়ে বেশি দেখা যায় — আর প্রতিটার পেছনে একটা বাংলা বাক্য-প্যাটার্ন কাজ করছে। দোষ আপনার নয়, দুই ভাষার প্যাটার্নের ফারাকের; তাই ভুলটা বাংলা বাক্যটা চিনে ধরুন, তারপর ডানের ঠিক বাক্যটা জোরে তিনবার বলে নিন — কানে গেঁথে গেলেই বলার সময় আর ভুল বেরোয় না।",
            en: "The mistakes below are the most common in our classrooms, chats and interviews — and behind every one sits a Bengali sentence pattern. The fault is not yours; it is the gap between two languages' patterns. Catch the Bengali sentence behind each error, then say the correct sentence on the right aloud three times — once it is rooted in the ear, it stops coming out wrong.",
            hi: "नीचे की गलतियाँ हमारे क्लासरूम, चैट और इंटरव्यू में सबसे ज़्यादा दिखती हैं — और हर एक के पीछे एक बांग्ला वाक्य-पैटर्न काम करता है। दोष आपका नहीं, दोनों भाषाओं के पैटर्न का फ़र्क़ है; हर गलती के पीछे का बांग्ला वाक्य पकड़ें, फिर दाईं ओर का सही वाक्य तीन बार ज़ोर से बोलें।",
          },
          examples: [
            {
              wrong: "He go to office every day.",
              right: "He goes to office every day.",
              note: {
                bn: "বাংলা 'সে প্রতিদিন অফিসে যায়' — 'যায়' শব্দেই কর্তা বোঝায়; ইংরেজিতে goes-এর s-ই সেই কাজ করে, s বাদ দিলে কর্তার চিহ্নই মিলিয়ে যায়।",
                en: "Bengali 'se protiwdin office-e jay' — the ending 'jay' already shows the subject; in English only the s of 'goes' does that job, so dropping it erases the subject's mark.",
                hi: "बांग्ला 'সে প্রতিদিন অফিসে যায়' — 'যায়' शब्द में ही कर्ता है; अंग्रेज़ी में goes का s वही काम करता है।",
              },
            },
            {
              wrong: "I am go to school.",
              right: "I go to school.",
              note: {
                bn: "বাংলায় 'আমি স্কুলে যাই' — কোনো 'হওয়া' নেই; be-verb (am/is/are) আর মূল ক্রিয়া একসঙ্গে বসে না — হয় I go (অভ্যাস), নয় I am going (এখন চলছে)।",
                en: "Bengali 'ami school-e jai' has no 'to be' in it; a be-verb (am/is/are) and a main verb never sit together — either I go (habit) or I am going (happening now).",
                hi: "बांग्ला 'आমি স্কুলে যাই' में कोई 'होना' नहीं; be-verb (am/is/are) और मूल क्रिया साथ नहीं बैठते — या I go, या I am going।",
              },
            },
            {
              wrong: "Yesterday I have gone to the bank.",
              right: "Yesterday I went to the bank.",
              note: {
                bn: "নির্দিষ্ট অতীত সময় (yesterday) বলা থাকলে শুধুই past simple — went; have gone সাথে আসে না। বাংলার 'গিয়েছি' শুনে have gone লেখাটা আপাত স্বাভাবিক লাগে, কিন্তু ভুল।",
                en: "With a stated past time (yesterday) only the past simple fits — went; 'have gone' cannot join it. Translating Bengali 'giyechhi' as 'have gone' looks natural but is wrong here.",
                hi: "निश्चित अतीत समय (yesterday) बताया हो तो केवल past simple — went; 'have gone' साथ नहीं आता।",
              },
            },
            {
              wrong: "He don't know the answer.",
              right: "He doesn't know the answer.",
              note: {
                bn: "don't/doesn't-এর ভাগ মনে রাখুন: I/you/we/they → don't, he/she/it → doesn't; বাংলায় 'জানে না' সবার জন্য এক, তাই এই ভাগ মাথায় রাখতে হয়।",
                en: "Keep the don't/doesn't split in mind: I/you/we/they → don't, he/she/it → doesn't; Bengali 'jane na' is one form for all, so the split needs conscious effort.",
                hi: "don't/doesn't का विभाजन याद रखें: I/you/we/they → don't, he/she/it → doesn't।",
              },
            },
            {
              wrong: "I will went to the market tomorrow.",
              right: "I will go to the market tomorrow.",
              note: {
                bn: "will-এর সঙ্গে ক্রিয়ার past রূপ আসে না; will ভবিষ্যৎ বহন করে, ক্রিয়া থাকে V1-এ — will went-এর মতো 'ডাবল কাল' ইংরেজিতে নেই।",
                en: "No past form can follow 'will'; will carries the future while the verb stays V1 — there is no 'double tense' like 'will went' in English.",
                hi: "'will' के साथ क्रिया का past रूप नहीं आता; will भविष्य ढोता है, क्रिया V1 में रहती है — 'will went' जैसा दोहरा काल नहीं होता।",
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
            bn: "রিমা প্রতিদিন বলে, 'I get up at six and walk in the park.' কাল সকালে সে বন্ধু তানিয়াকে ফোন করে বলল, 'I went to the doctor yesterday. I didn't sleep well last night.' তানিয়া জিজ্ঞেস করল, 'Oh no! Did you take medicine?' রিমা হেসে বলল, 'Yes, I took it after dinner and slept like a baby.' আজ সন্ধ্যায় সুস্থ রিমা বলবে, 'Tomorrow I will join my class again.' খেয়াল করুন — প্রতিদিনের কথায় get up (present), গতকালের কথায় went, didn't, did...take, took (past), আগামীর কথায় will join (future)। এক নজরে — তিন কাল: (১) present simple = অভ্যাস/সত্য, he/she/it-এ ক্রিয়ায় s; (২) past simple = শেষ হওয়া কাজ, ক্রিয়া V2-তে, নেগেটিভ-প্রশ্নে didn't/did + V1; (৩) future = will + V1। সংকেত শব্দ (yesterday, every day, tomorrow) কাল ঠিক করে, আর এক গল্পে এক কাল।",
            en: "Rima says every day, 'I get up at six and walk in the park.' Yesterday morning she phoned her friend Tania and said, 'I went to the doctor yesterday. I didn't sleep well last night.' Tania asked, 'Oh no! Did you take medicine?' Rima smiled, 'Yes, I took it after dinner and slept like a baby.' This evening, fully recovered, Rima will say, 'Tomorrow I will join my class again.' Notice — the everyday part uses get up (present), the yesterday part uses went, didn't, did...take, took (past), and the tomorrow part uses will join (future). In a nutshell — three tenses: (1) present simple = habits/facts, with s on he/she/it verbs; (2) past simple = finished actions, verbs in V2, negatives and questions with didn't/did + V1; (3) future = will + V1. Signal words (yesterday, every day, tomorrow) fix the tense, and one story keeps one tense.",
            hi: "রিমা প্রতিদিন বলে, 'I get up at six and walk in the park.' কাল সকালে সে বন্ধু তানিয়াকে ফোন করে বলল, 'I went to the doctor yesterday. I didn't sleep well last night.' তানিয়া জিজ্ঞেস করল, 'Oh no! Did you take medicine?' রিমা হেসে বলল, 'Yes, I took it after dinner and slept like a baby.' আজ সন্ধ্যায় সুস্থ রিমা বলবে, 'Tomorrow I will join my class again।' ধ্যान দেं — রोজ़ की बात में get up (present), বीতे कल की बात में went, didn't, did...take, took (past), আने वाले कल में will join (future)। এक नज़र में — तीन काल: (1) present simple = আদত/सत्य, he/she/it-এ ক্রিয়ায় s; (2) past simple = সমাপ্ত কাম, ক্রিয়া V2-তে, নিষেধ-প্রশ্নে didn't/did + V1; (3) future = will + V1। সংকেত শব্দ (yesterday, every day, tomorrow) কাল ঠিক করে, আর এক কহানিতে এক কাল।",
          },
          examples: [
            {
              wrong: "Rima get up at six.",
              right: "Rima gets up at six.",
              note: {
                bn: "Rima = she → gets; প্রতিদিনের অভ্যাস, তাই present simple-ই।",
                en: "'Rima' = she, so gets; a daily habit, so the present simple it is.",
                hi: "'Rima' = she → gets; রোজ़ की আদত, ইসলিএ present simple।",
              },
            },
            {
              wrong: "Did you took medicine?",
              right: "Did you take medicine?",
              note: {
                bn: "did-এর পরে V1 — তানিয়ার প্রশ্নে take বসে, took নয়।",
                en: "After 'did' use V1 — Tania's question takes take, not took.",
                hi: "'did' के बाद V1 — তানিয়ার प्रश्न में take।",
              },
            },
            {
              wrong: "Tomorrow I will joined my class.",
              right: "Tomorrow I will join my class.",
              note: {
                bn: "will + V1 — will joined-এ দুই কাল চেপে বসে আছে, এমন কিছু ইংরেজিতে হয় না।",
                en: "will + V1 — 'will joined' squeezes two tenses together, which English never allows.",
                hi: "will + V1 — 'will joined' মে দো কাল সাথ-সাথ নহীं।",
              },
            },
            {
              wrong: "Last night I don't sleep well.",
              right: "Last night I didn't sleep well.",
              note: {
                bn: "অতীতের নেগেটিভ didn't — don't শুধু বর্তমানে I/you/we/they-এর; গতকাল রাতের কথা, তাই didn't।",
                en: "Past negative takes didn't — 'don't' only serves the present with I/you/we/they; last night demands didn't.",
                hi: "অতীতের निषेध didn't — 'don't' কেবল ঵র্তমানে I/you/we/they-এর; বীত রাতের বাত didn't মাংগে।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "বাক্য বানানোর আগে সংকেত শব্দ খুঁজুন — yesterday/ago মানে past, every day/always মানে present, tomorrow/next week মানে future। সংকেতই কাল ঠিক করে।",
          en: "Hunt for the signal word before building a sentence — yesterday/ago mean past, every day/always mean present, tomorrow/next week mean future. The signal fixes the tense.",
          hi: "বাক্য বানানের আগে সংকেত-শব্দ খোঁজেন — yesterday/ago মানে past, every day/always মানে present, tomorrow/next week মানে future।",
        },
        {
          bn: "Present-এ কর্তা he/she/it বা একবচন নাম (Rahim, the cat, my father) দেখলেই ক্রিয়ায় s — ছোট চিহ্ন, ভুল হলে বড় দাগ।",
          en: "In the present, whenever the subject is he/she/it or a singular name (Rahim, the cat, my father), the verb takes s — a tiny mark, but a glaring error when missed.",
          hi: "Present-এ কর্তা he/she/it বা একবচন নাম দেখলেই ক্রিয়ায় s — ছোট চিহ্ন, ভুল হলে বড় দাগ।",
        },
        {
          bn: "did দেখলেই পরের ক্রিয়া V1: didn't go, Did you eat? — didn't went, Did you ate কখনো নয়।",
          en: "Whenever 'did' appears, the next verb is V1: didn't go, Did you eat? — never 'didn't went' or 'Did you ate'.",
          hi: "'did' দেখলেই পরের ক্রিয়া V1: didn't go, Did you eat? — 'didn't went' কভি নয়।",
        },
        {
          bn: "নেগেটিভ-প্রশ্নে কালের দায়িত্ব do/does/did/will-এর — মূল ক্রিয়া সবসময় সাধারণ রূপে (V1) থাকে।",
          en: "In negatives and questions the tense is carried by do/does/did/will — the main verb always stays in its plain form (V1).",
          hi: "নিষেধ-প্রশ্নে কালের দায়িত্ব do/does/did/will-এর — মূল ক্রিয়া সবসময় V1-এ।",
        },
        {
          bn: "will-এর পরে সব পুরুষে একই V1 — will goes, will went, will coming কিছুই নয়, শুধু will go।",
          en: "After 'will' every subject takes the same V1 — not will goes, not will went, not will coming; only will go.",
          hi: "'will'-এর পরে সব পুরুষে একই V1 — 'will go' ছাড়া কিছুই নয়।",
        },
        {
          bn: "am/is/are আর মূল ক্রিয়া একসঙ্গে বসে না — হয় I go, নয়তো I am going (continuous পরের স্তরে); বাংলা 'আমি যাই'-তে কোনো be-verb নেই।",
          en: "A be-verb (am/is/are) and a main verb never sit together — either I go, or I am going (continuous comes later); Bengali 'ami jai' has no be-verb inside it.",
          hi: "am/is/are আর মূল ক্রিয়া একসঙ্গে বসে না — হয় I go, নয়তো I am going; বাংলা 'আমি যাই'-তে কোনো be-verb নেই।",
        },
        {
          bn: "১০টা অনিয়মিত ক্রিয়া রোজ জোরে জোড়ায় বলুন: go-went, eat-ate, see-saw, come-came, buy-bought, take-took, give-gave, do-did, have-had, make-made।",
          en: "Say ten irregular verbs aloud in pairs every day: go-went, eat-ate, see-saw, come-came, buy-bought, take-took, give-gave, do-did, have-had, make-made.",
          hi: "১০টা অনিয়মিত ক্রিয়া রোজ জোরে জোড়ায় বলেন: go-went, eat-ate, see-saw, come-came, buy-bought, take-took, give-gave, do-did, have-had, make-made।",
        },
        {
          bn: "গল্প বলা শুরুর আগে কাল একবার ঠিক করুন, তারপর সব ক্রিয়া সেই কালেই রাখুন — মাঝপথে বদলে ফেলবেন না।",
          en: "Decide the tense once before you start telling a story, then keep every verb in it — do not switch mid-way.",
          hi: "গল্প শুরুর আগে কাল একবার ঠিক করেন, তারপর সব ক্রিয়া সেই কালেই — মাঝপথে বদলাবেন না।",
        },
        {
          bn: "when/if clause-এ future ঢোকে না: When he comes, I will call you / If it rains, we will stay home — প্রথম অংশে present, দ্বিতীয় অংশে will।",
          en: "No future enters a when/if clause: When he comes, I will call you / If it rains, we will stay home — present in the first part, will in the second.",
          hi: "when/if clause-এ future ঢোকে না: When he comes... / If it rains... — প্রথম ভাগে present, দ্বিতীয় ভাগে will।",
        },
        {
          bn: "রোজ ১০ মিনিটের দিনলিপি: সকালে আজকের প্ল্যান will-এ, রাতে সারাদিনের হিসাব past-এ — দুই কালের হাত এভাবেই পাকা হয়।",
          en: "A ten-minute daily diary: in the morning write today's plan with will, at night write the day's account in the past — this is how the hand gets steady in both tenses.",
          hi: "রোজ ১০ মিনিটের দিনলিপি: সকালে আজকের প্ল্যান will-এ, রাতে দিনের হিসাব past-এ — দুই কালের হাত এভাবেই পাকা হয়।",
        },
      ],
      quiz: [
        {
          question: "My sister ___ to college every morning.",
          options: ["go", "goes", "going", "went"],
          answer: 1,
          explanation: {
            bn: "every morning = প্রতিদিনের অভ্যাস → present simple; আর sister = she → ক্রিয়ায় s: goes।",
            en: "'Every morning' marks a habit — present simple; and 'sister' = she, so the verb takes s: goes.",
            hi: "'every morning' = রোজ़ের আদত → present simple; আর sister = she → ক্রিয়ায় s: goes।",
          },
        },
        {
          question: "I ___ my homework two hours ago.",
          options: ["do", "does", "did", "doing"],
          answer: 2,
          explanation: {
            bn: "ago = past-এর সংকেত → past simple: did; আর do-এর past রূপও did।",
            en: "'Ago' signals the past — past simple: did; and did happens to be the past of 'do' itself.",
            hi: "'ago' = past-এর সংকেত → past simple: did।",
          },
        },
        {
          question: "He ___ like spicy food.",
          options: ["don't", "doesn't", "isn't", "didn't"],
          answer: 1,
          explanation: {
            bn: "he → doesn't; don't শুধু I/you/we/they-এর। বর্তমান অভ্যাসের কথা, তাই didn't নয়।",
            en: "'He' takes doesn't; don't is only for I/you/we/they. It is a present habit, so not didn't.",
            hi: "he → doesn't; 'don't' কেবল I/you/we/they-এর। বর্তমান আদত, ইসলিএ didn't নয়।",
          },
        },
        {
          question: "Did you ___ the match last night?",
          options: ["see", "saw", "seen", "sees"],
          answer: 0,
          explanation: {
            bn: "Did-এর পরে সবসময় V1 — see; অতীতের চিহ্ন did-এর পকেটে আছে।",
            en: "After 'Did' always use V1 — see; the past marker is already in did's pocket.",
            hi: "'Did'-এর পরে সবসময় V1 — see।",
          },
        },
        {
          question: "We ___ visit our grandparents next Friday.",
          options: ["do", "will", "does", "did"],
          answer: 1,
          explanation: {
            bn: "next Friday = ভবিষ্যতের সংকেত → will + V1 (will visit)।",
            en: "'Next Friday' signals the future — will + V1 (will visit).",
            hi: "'next Friday' = ভবিষ্যতের সংকেত → will + V1।",
          },
        },
        {
          question: "Two days ago Rahim ___ a new cricket bat.",
          options: ["buy", "bought", "buys", "buying"],
          answer: 1,
          explanation: {
            bn: "ago → past; buy-এর past bought — buyed বলে কিছু নেই।",
            en: "'Ago' puts us in the past; the past of buy is bought — there is no 'buyed'.",
            hi: "'ago' → past; buy-এর past bought — 'buyed' নেই।",
          },
        },
        {
          question: "___ your father work in a bank?",
          options: ["Is", "Do", "Does", "Did"],
          answer: 2,
          explanation: {
            bn: "your father = he → প্রশ্নে Does; Is হলে পরে ক্রিয়া চলে না।",
            en: "'Your father' = he, so the question takes Does; with Is no main verb can follow.",
            hi: "'your father' = he → প্রশ্নে Does।",
          },
        },
        {
          question: "Every morning my mother ___ breakfast at eight.",
          options: ["has", "have", "had", "having"],
          answer: 0,
          explanation: {
            bn: "my mother = she → has; প্রতিদিনের রুটিন, তাই বর্তমান কালেই has।",
            en: "'My mother' = she, so has; a daily routine stays in the present — has.",
            hi: "'my mother' = she → has; রোজ়ের রুটিন, ইসলিএ has।",
          },
        },
        {
          question: "When it ___, we will play indoors.",
          options: ["will rain", "rained", "rains", "raining"],
          answer: 2,
          explanation: {
            bn: "when clause-এ future আসে না — সময় বোঝাতে present: rains; ফলাফলে will (will play)।",
            en: "No future inside a when-clause — the present (rains) marks the time; 'will play' carries the result.",
            hi: "when clause-এ future নয় — সময়ের জন্য present: rains; ফলে will (will play)।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: [
            "I didn't went to school.",
            "I didn't go to school.",
            "I don't went to school.",
            "I not went to school.",
          ],
          answer: 1,
          explanation: {
            bn: "didn't-এর পরে V1 (go); 'didn't went'-এ অতীত দুইবার, 'not went'-এ অতীত ঠিক আছে কিন্তু didn't/do-র সাহায্য নেই।",
            en: "After didn't use V1 (go); 'didn't went' doubles the past, and 'not went' has no helping did at all.",
            hi: "didn't-এর পরে V1 (go); 'didn't went'-এ অতীত দুইবার।",
          },
        },
      ],
    },
  },
  /* ── 2. Subject-Verb Agreement (Beginner) ──────────────────────────── */
  {
    topic: "Subject-Verb Agreement",
    level: "beginner",
    title: "Subject-Verb Agreement (Beginner)",
    unit: 2,
    data: {
      title: {
        bn: "কর্তা-ক্রিয়ার মিল (বিগিনার)",
        en: "Subject-Verb Agreement (Beginner)",
        hi: "कर्ता-क्रिया की सहमति (बिगिनर)",
      },
      intro: {
        bn: "এই পাঠ লার্নিং পথের দ্বিতীয় ব্যাকরণ পাঠ — আগের পাঠ 'Tense Basics' শেষ করে তবেই শুরু করুন, কারণ এখানে present simple-এর -s, have/has আর was/were বারবার ফিরে আসবে। বাংলায়ও ক্রিয়া কর্তা অনুযায়ী বদলায় — আমি যাই, তুমি যাও, সে যায় — কিন্তু বদলানোর প্যাটার্ন দুই ভাষায় আলাদা, তাই বাঙালি শিক্ষার্থীরা লিখে ফেলেন 'He go', 'They was', 'I has'। এই পাঠে শিখব কোন কর্তার সঙ্গে কোন ক্রিয়া-রূপ বসে: am/is/are, was/were, have/has, do/does/don't/doesn't, আর সেই ছোট্ট কিন্তু প্রাণের -s।",
        en: "This is the second grammar lesson on the learning path — finish the previous lesson 'Tense Basics' first, because the present-simple -s, have/has and was/were will return again and again here. Bengali verbs also change with the subject — ami jai, tumi jao, she jay — but the pattern of change is different in the two languages, so Bengali speakers write 'He go', 'They was', 'I has'. In this lesson we learn which verb form goes with which subject: am/is/are, was/were, have/has, do/does/don't/doesn't, and that tiny but vital -s.",
        hi: "यह लर्निंग पथ का दूसरा व्याकरण पाठ है — पिछला पाठ 'Tense Basics' पहले पूरा करें, क्योंकि present simple का -s, have/has और was/were यहाँ बार-बार लौटेंगे। बांग्ला में भी क्रिया कर्ता के अनुसार बदलती है, पर बदलने का पैटर्न दोनों भाषाओं में अलग है, इसलिए बांग्लाभाषी छात्र लिख देते हैं: 'He go', 'They was', 'I has'। इस पाठ में हम सीखेंगे किस कर्ता के साथ कौन-सा क्रिया-रूप बैठता है: am/is/are, was/were, have/has, do/does/don't/doesn't, और वह छोटा पर प्राण देने वाला -s।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — ক্রিয়া কর্তার ছায়া অনুসরণ করে",
            en: "When it applies — the verb follows its subject",
            hi: "कब लागू होता है — क्रिया कर्ता का अनुसरण करती है",
          },
          body: {
            bn: "Subject-verb agreement মানে মিল: কর্তা একবচন না বহুবচন, কোন পুরুষ — তার হিসেব মিলিয়েই ক্রিয়ার রূপ বসে। শুরুর স্তরে এই মিল কাজ করে চার জায়গায়: (১) present simple-এর -s — He plays, They play; (২) be-verb — I am, He is, They are; (৩) have/has — She has, They have; (৪) অতীতের be — I was, They were। বাংলার সঙ্গে তুলনা করলে ছবিটা পরিষ্কার হয়। বাংলায় ক্রিয়া কর্তা অনুযায়ী বদলায় ঠিকই (যাই/যাও/যায়), কিন্তু প্যাটার্ন আলাদা: বাংলায় তৃতীয় পুরুষ একবচন 'যায়', বহুবচনেও 'তারা যায়' — রূপ প্রায় একই থেকে যায়। ইংরেজিতে উল্টো: তৃতীয় পুরুষ একবচনে s জোড়ে (he goes), বহুবচনে s খোলে (they go)। আরেকটা বড় ফারাক: বাংলায় অতীতে ক্রিয়া সব কর্তায় প্রায় এক রকম — আমি ছিলাম, সে ছিল, তারা ছিল। ইংরেজিতে অতীতের be-verb দুই ভাগে: I/he/she/it → was, আর you/we/they → were। এই দুটো জায়গাতেই বাঙালি শিক্ষার্থীদের হাত সবচেয়ে বেশি পা ছোঁয়। মনে রাখার সূত্র: ক্রিয়া কর্তার ছায়া অনুসরণ করে — কর্তা বদলালে ক্রিয়ার রূপও মিলিয়ে নিতে হবে, বাক্য যত লম্বাই হোক।",
            en: "Subject-verb agreement means matching: singular or plural, which person — the verb's form is chosen to match the subject. At the beginner stage this matching works in four places: (1) the present-simple -s — He plays, They play; (2) the be-verb — I am, He is, They are; (3) have/has — She has, They have; (4) past be — I was, They were. The Bengali comparison makes the picture clear. Bengali verbs do change with the subject (jai/jao/jay), but the pattern differs: third person singular is 'jay' and plural is also 'tara jay' — the form stays almost the same. English is the reverse: third person singular adds s (he goes), plural drops it (they go). Another big difference: in the Bengali past the verb looks nearly the same for every subject — ami chhilam, she chhilo, tara chhilo. English splits the past be-verb in two: I/he/she/it → was, and you/we/they → were. These two spots trip Bengali speakers the most. Remember: the verb follows its subject's shadow — if the subject changes, the verb's form must match, however long the sentence is.",
            hi: "Subject-verb agreement का अर्थ है मेल: कर्ता एकवचन है या बहुवचन, कौन-सा पुरुष — उसके हिसाब से क्रिया-रूप बैठता है। शुरुआती स्तर पर यह मेल चार जगह काम करता है: (1) present simple का -s — He plays, They play; (2) be-verb — I am, He is, They are; (3) have/has — She has, They have; (4) अतीत का be — I was, They were। बांग्ला से तुलना करने पर तस्वीर साफ़ होती है। बांग्ला में क्रिया कर्ता के अनुसार बदलती है ठीक है, पर पैटर्न अलग है: तृतीय पुरुष एकवचन 'যায়', बहुवचन में भी 'তারা যায়' — रूप लगभग वही रहता है। अंग्रेज़ी में उलटा है: तृतीय पुरुष एकवचन में s जोड़ती है (he goes), बहुवचन में हटाती है (they go)। एक बड़ा फ़र्क़: बांग्ला के अतीत में क्रिया हर कर्ता के साथ लगभग एक जैसी — আমি ছিলাম, সে ছিল, তারা ছিল। अंग्रेज़ी अतीत के be-verb को दो भागों में बाँटती है: I/he/she/it → was, और you/we/they → were। इन्हीं दो जगहों पर बांग्लाभाषी छात्रों का हाथ सबसे ज़्यादा लड़खड़ाता है। याद रखने का सूत्र: क्रिया कर्ता की छाया का अनुसरण करती है — कर्ता बदले तो क्रिया-रूप भी मिलाइए, वाक्य चाहे कितना भी लंबा हो।",
          },
          examples: [
            {
              wrong: "They goes to the same college.",
              right: "They go to the same college.",
              note: {
                bn: "they = বহুবচন → s বাদ; বাংলায় 'তারা যায়' আর 'সে যায়' কানে প্রায় এক শোনায়, কিন্তু ইংরেজিতে go/goes আলাদা পথ।",
                en: "'They' is plural — drop the s; in Bengali 'tara jay' and 'se jay' sound almost alike to the ear, but English keeps go/goes apart.",
                hi: "'they' = বহুবচন → s হটাও; বাংগলা 'তারা যায়' আর 'সে যায়' কানে এক জাইসা, পর অंগ्रেজ़ीতে go/goes আলাদা।",
              },
            },
            {
              wrong: "My mother make the best pithas.",
              right: "My mother makes the best pithas.",
              note: {
                bn: "my mother = she → ক্রিয়ায় s: makes; বাংলা 'মা বানান' — একবচন কর্তা, তাই ইংরেজিতে s লাগবেই।",
                en: "'My mother' = she, so the verb takes s: makes; Bengali 'ma banan' is one singular subject, so English demands the s.",
                hi: "'my mother' = she → ক্রিয়ায় s: makes।",
              },
            },
            {
              wrong: "The boys is in the field.",
              right: "The boys are in the field.",
              note: {
                bn: "boys = বহুবচন → are; be-verb-ও কর্তার সঙ্গে মিলবে — is শুধু একবচনের।",
                en: "'Boys' is plural — so are; the be-verb must match the subject too — is belongs only to singulars.",
                hi: "'boys' = বহুবচন → are; be-verb-ও কর্তার সাথে মিলবে — is কেবল একবচনের।",
              },
            },
            {
              wrong: "I were at home last night.",
              right: "I was at home last night.",
              note: {
                bn: "অতীতে I-এর জুটি was — I were নয়; were যায় you/we/they-এর সঙ্গে।",
                en: "In the past, I's partner is was — never 'I were'; were goes with you/we/they.",
                hi: "অতীতে I-এর জুটি was — 'I were' নয়; were জাতা হয় you/we/they-এর সাথে।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন — কে কী নেয়: পূর্ণ ছক",
            en: "Formation — who takes what: the full chart",
            hi: "बनावट — কে ক্যা লেতা হৈ: পূরা চার্ট",
          },
          body: {
            bn: "Present-এর ছক তিন সারিতে মুখস্থ করে ফেলুন। সারি ১ — I: am / have / do / মূল ক্রিয়া — I am ready, I have two brothers, I go. সারি ২ — he/she/it (বা একবচন নাম): is / has / does / ক্রিয়া+s — He is ready, She has two brothers, He goes. সারি ৩ — you/we/they (বা বহুবচন নাম): are / have / do / মূল ক্রিয়া — You are ready, They have two brothers, They go. অতীতের ছক শুধু be-verb-এ ভাগ হয়: I/he/she/it → was (I was tired, The film was good); you/we/they → were (You were late, The mangoes were sweet)। বাকি ক্রিয়া অতীতে সব কর্তায় একই রূপ নেয়: I/he/they played, had, went। নেগেটিভ-এ ভাগ: I/you/we/they → don't have, don't go; he/she/it → doesn't have, doesn't go। প্রশ্নে: Do I/you/we/they...? Does he/she/it...? — do/does বাক্যের সামনে এসে প্রশ্নের সংকেত হয়। এক লাইনে পুরো পাঠ: I-এর সঙ্গী am/do/have; তৃতীয় পুরুষ একবচনের সঙ্গী is/does/has/s; বাকি সবার সঙ্গী are/do/have।",
            en: "Memorise the present chart in three rows. Row 1 — I: am / have / do / base verb — I am ready, I have two brothers, I go. Row 2 — he/she/it (or a singular name): is / has / does / verb+s — He is ready, She has two brothers, He goes. Row 3 — you/we/they (or a plural name): are / have / do / base verb — You are ready, They have two brothers, They go. In the past only the be-verb splits: I/he/she/it → was (I was tired, The film was good); you/we/they → were (You were late, The mangoes were sweet). All other verbs take one past form for every subject: I/he/they played, had, went. The negative split: I/you/we/they → don't have, don't go; he/she/it → doesn't have, doesn't go. In questions: Do I/you/we/they...? Does he/she/it...? — do/does move to the front and become the question signal. The whole lesson in one line: I partners with am/do/have; third-person singular partners with is/does/has/s; everyone else partners with are/do/have.",
            hi: "Present-এর চার্ট তিন সারিতে রটাও। সারি 1 — I: am / have / do / মূল ক্রিয়া — I am ready, I have two brothers, I go। সারি 2 — he/she/it (বা একবচন নাম): is / has / does / ক্রিয়া+s — He is ready, She has two brothers, He goes। সারি 3 — you/we/they (বা বহুবচন নাম): are / have / do / মূল ক্রিয়া — You are ready, They have two brothers, They go। অতীতে কেবল be-verb বিভক্ত হয়: I/he/she/it → was; you/we/they → were। বাকি সব ক্রিয়া অতীতে সব কর্তায় এক রূপ: I/he/they played, had, went। নিষেধে বিভাজন: I/you/we/they → don't; he/she/it → doesn't। প্রশ্নে: Do I/you/we/they...? Does he/she/it...? — do/does সামনে এসে প্রশ্নের সংকেত হয়। এক লাইনে পুরা পাঠ: I-এর সাথী am/do/have; তৃতীয় পুরুষ একবচনের সাথী is/does/has/s; বাকি সবার সাথী are/do/have।",
          },
          examples: [
            {
              wrong: "He have a red bicycle.",
              right: "He has a red bicycle.",
              note: {
                bn: "he/she/it-এর জুটি has; have যায় I/you/we/they-এর সঙ্গে। বাংলায় 'তার আছে' নিরপেক্ষ, তাই has ভুলে যেতে হয়।",
                en: "The partner of he/she/it is has; have goes with I/you/we/they. Bengali 'tar ache' is neutral for everyone, so has is easy to forget.",
                hi: "he/she/it-এর জুটি has; have জাতা হয় I/you/we/they-এর সাথে।",
              },
            },
            {
              wrong: "I is hungry.",
              right: "I am hungry.",
              note: {
                bn: "I সবসময় am — বাংলা 'আমি ক্ষুধার্ত'-তে 'হওয়া' না থাকলেও ইংরেজি অনুবাদে am বাধ্যতামূলক।",
                en: "I always takes am — even though Bengali 'ami khudharto' has no 'to be' in it, the English translation must keep am.",
                hi: "I সবসময় am — বাংগলা 'আমি ক্ষুধার্ত'-এ 'হোনা' না থাকলেও অंগ्रেজ़ी অনুবাদে am অনিবার্য।",
              },
            },
            {
              wrong: "You was absent yesterday.",
              right: "You were absent yesterday.",
              note: {
                bn: "অতীতে you-এর জুটি were — একজনকে বললেও you were; you-এর সঙ্গে was কখনো নয়।",
                en: "In the past, you's partner is were — even for one person you were; was never follows you.",
                hi: "অতীতে you-এর জুটি were — একজনের জন্যও you were; you-এর সাথে was কভি নয়।",
              },
            },
            {
              wrong: "My parents doesn't live here.",
              right: "My parents don't live here.",
              note: {
                bn: "parents = they → don't; doesn't শুধু একবচন তৃতীয় পুরুষের।",
                en: "'Parents' = they, so don't; doesn't belongs only to third-person singular.",
                hi: "'parents' = they → don't; 'doesn't' কেবল তৃতীয় পুরুষ একবচনের।",
              },
            },
            {
              wrong: "Does they play in the evening?",
              right: "Do they play in the evening?",
              note: {
                bn: "they-এর প্রশ্ন Do দিয়ে; Does একবচন তৃতীয় পুরুষের সংকেত — মিলটা ইঞ্জিনেও ধরে রাখতে হয়।",
                en: "Questions with they take Do; Does is the third-person singular signal — the agreement must be kept in the helper verb too.",
                hi: "they-এর প্রশ্ন Do দিয়ে; Does একবচন তৃতীয় পুরুষের সংকেত — মেল সহায়ক ক্রিয়াতেও ধরে রাখতে হবে।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস শব্দ — কোন কর্তা একবচন, কোন কর্তা বহুবচন",
            en: "Signal words — which subjects are singular, which are plural",
            hi: "সংকেত শব্দ — কোন কর্তা একবচন, কোন কর্তা বহুবচন",
          },
          body: {
            bn: "একবচন সংকেত: he, she, it, this, that, everyone, everybody, someone, somebody, anyone, nobody, each, আর প্রতিটা একবচন নাম (Rahim, the baby, my teacher, Dhaka)। এদের পেছনে বসে is/has/does বা -s-যুক্ত ক্রিয়া — Everyone is ready, Nobody knows the answer, This smells good। বহুবচন সংকেত: we, you (একাধিক), they, these, those, আর -s/-es যুক্ত নাম (my friends, the boys, two books)। এদের সঙ্গে are/have/do বা s ছাড়া ক্রিয়া — These are mine, My friends play cricket, Those look expensive। দুটো বিশেষ নিয়ম: (১) 'A and B' একসঙ্গে বললে বহুবচন — My father and mother are coming (দুইজন মানুষ, তাই are)। (২) পরিমাণবাচক অংশ এক ভর হিসেবে ব্যবহার হলে প্রায়ই একবচন ক্রিয়া নেয় — Five kilometres is a long walk, Two cups of tea is not enough for him। শুরুতে এই নিয়মটা দেখে জেনে চলুন, ভুল হলে দোষ নেই। সাবধান: কর্তা আর ক্রিয়ার মাঝে আরও শব্দ এলে (The boy in the red shirt...) মাঝের শব্দ নয় — আসল কর্তাটাই (the boy) ক্রিয়া ঠিক করে।",
            en: "Singular signals: he, she, it, this, that, everyone, everybody, someone, somebody, anyone, nobody, each, and every singular name (Rahim, the baby, my teacher, Dhaka). After them sit is/has/does or a verb with -s — Everyone is ready, Nobody knows the answer, This smells good. Plural signals: we, you (several people), they, these, those, and names ending in -s/-es (my friends, the boys, two books). With them come are/have/do or a verb without s — These are mine, My friends play cricket, Those look expensive. Two special rules: (1) 'A and B' together make a plural — My father and mother are coming (two people, so are). (2) A quantity treated as one portion often takes a singular verb — Five kilometres is a long walk, Two cups of tea is not enough for him. Take this rule on notice at first; a mistake is fine. Caution: when extra words slip between subject and verb (The boy in the red shirt...), the middle words do not decide — the real subject (the boy) controls the verb.",
            hi: "একবচন সংকেত: he, she, it, this, that, everyone, everybody, someone, somebody, anyone, nobody, each, আর প্রতিটা একবচন নাম (Rahim, the baby, my teacher, Dhaka)। ইনকে পিছে বৈঠতা হৈ is/has/does বা -s-যুক্ত ক্রিয়া — Everyone is ready, Nobody knows the answer। বহুবচন সংকেত: we, you (একাধিক), they, these, those, আর -s/-es যুক্ত নাম। ইনকে সাথে আতা হৈ are/have/do বা s ছাড়া ক্রিয়া — These are mine, My friends play cricket। দো বিশেষ নিয়ম: (1) 'A and B' একসাথে বোললে বহুবচন — My father and mother are coming। (2) পরিমাণ এক ভাগের মতো ব্যবহার হলে প্রায়ই একবচন ক্রিয়া — Five kilometres is a long walk। সাবধান: কর্তা আর ক্রিয়ার বিচে আরও শব্দ আসলে (The boy in the red shirt...) মাঝের শব্দ নয় — আসল কর্তাই (the boy) ক্রিয়া ঠিক করে।",
          },
          examples: [
            {
              wrong: "Everyone are ready for the photo.",
              right: "Everyone is ready for the photo.",
              note: {
                bn: "everyone দেখতে বহুবচনের মতো, কিন্তু অর্থে একবচন (প্রত্যেক একজন, এক এক করে গোনা) → is।",
                en: "'Everyone' looks plural but is singular in meaning (each single person, counted one by one) — so is.",
                hi: "'everyone' দেখতে বহুবচনের মতো, পর অর্থে একবচন (হর এক ব্যক্তি) → is।",
              },
            },
            {
              wrong: "My father and my uncle is waiting outside.",
              right: "My father and my uncle are waiting outside.",
              note: {
                bn: "দুই কর্তা যুক্ত হলে বহুবচন → are; বাংলা 'বাবা আর চাচা অপেক্ষা করছেন'-এও কার্যত দুইজন।",
                en: "Two subjects joined by and make a plural — are; in Bengali too it is effectively two people waiting.",
                hi: "দো কর্তা 'and' দিয়ে জুড়লে বহুবচন → are।",
              },
            },
            {
              wrong: "These book is very interesting.",
              right: "These books are very interesting.",
              note: {
                bn: "these-এর সঙ্গে বহুবচন নাম (books) আর বহুবচন ক্রিয়া (are) — দুটোই মিলবে; বাংলা 'এই বইটা'-র একবচন ভাব টেনে আনলে ভুল।",
                en: "With these use a plural noun (books) and a plural verb (are) — both must agree; dragging the Bengali singular feel of 'ei boita' in creates the error.",
                hi: "'these'-এর সাথে বহুবচন নাম (books) আর বহুবচন ক্রিয়া (are) — দোনো মিলবে।",
              },
            },
            {
              wrong: "Nobody know his phone number.",
              right: "Nobody knows his phone number.",
              note: {
                bn: "nobody/somebody/everybody/anyone — সবই একবচন → knows; বাংলা 'কেউ জানে না' নিরপেক্ষ শোনায় বলে এই s সহজে বাদ যায়।",
                en: "Nobody/somebody/everybody/anyone — all are singular, so knows; Bengali 'keu jane na' sounds neutral, which is why this s slips away.",
                hi: "nobody/somebody/everybody/anyone — সবই একবচন → knows।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "am / is / are — আর অতীতে was / were",
            en: "am / is / are — and was / were in the past",
            hi: "am / is / are — আর অতীতে was / were",
          },
          body: {
            bn: "বর্তমানে তিন রূপ: I am, you are, he/she/it is, we are, they are। সংক্ষেপ: I'm, you're, he's, we're, they're — কথায় সংক্ষেপই বেশি শোনা যায়। নেগেটিভ: I'm not, he isn't, they aren't। প্রশ্নে রূপটা সামনে এসে যায় — Are you ready? Is she your sister? Am I late? অতীতে দুই রূপ: was (I/he/she/it) আর were (you/we/they)। নেগেটিভ: wasn't, weren't। প্রশ্ন: Was he at home? Were they happy? সবচেয়ে কমন ভুল তৃতীয় পুরুষে: 'He is go' ধরনের বাক্য — be-verb আর মূল ক্রিয়া একসঙ্গে বসতে পারে না; হয় He goes (অভ্যাস), নয় He is going (এখন চলছে — continuous পরের স্তরে শিখবেন)। আরেকটা: 'They was' — বাংলায় 'তারা ছিল' এক শব্দে বোঝায় বলে were-এর দরকারটা চোখে পড়ে না। ছোট্ট কৌশল: আয়নার সামনে নিজের সম্পর্কে পাঁচটা বাক্য বলুন — I am..., I have..., I like..., I was... yesterday, I was not... — পাঁচ রূপ একসঙ্গে জুড়ে যাবে।",
            en: "Three present forms: I am, you are, he/she/it is, we are, they are. Contractions: I'm, you're, he's, we're, they're — speech prefers the contracted ones. Negatives: I'm not, he isn't, they aren't. In questions the form moves to the front — Are you ready? Is she your sister? Am I late? Two past forms: was (I/he/she/it) and were (you/we/they). Negatives: wasn't, weren't. Questions: Was he at home? Were they happy? The most common error appears with the third person: sentences like 'He is go' — a be-verb and a main verb cannot sit together; either He goes (habit) or He is going (happening now — continuous comes at a later stage). Another one: 'They was' — because Bengali 'tara chhilo' says it in one word, the need for were stays invisible. A small trick: in front of a mirror say five sentences about yourself — I am..., I have..., I like..., I was... yesterday, I was not... — and all five forms will link up together.",
            hi: "বর্তমানে তিন রূপ: I am, you are, he/she/it is, we are, they are। সংক্ষেপ: I'm, you're, he's — বোলচালে সংক্ষেপই বেশি। নিষেধ: I'm not, he isn't, they aren't। প্রশ্নে রূপটা সামনে আসে — Are you ready? Is she your sister? Am I late? অতীতে দো রূপ: was (I/he/she/it) আর were (you/we/they)। নিষেধ: wasn't, weren't। প্রশ্ন: Was he at home? Were they happy? সবচেয়ে আম ভুল তৃতীয় পুরুষে: 'He is go' জাতীয় বাক্য — be-verb আর মূল ক্রিয়া একসাথে বৈঠতে পারে না; হয় He goes (আদত), নয় He is going (এখন চলছে)। আরেকটা: 'They was' — বাংগলা 'তারা ছিল' এক শব্দে বুঝায় বোলে were-এর দরকার চোখে পড়ে না। ছোট তরকীব: আয়নার সামনে নিজের বারে পাঁচ বাক্য বোলেন — I am..., I have..., I like..., I was... yesterday — পাঁচ রূপ একসাথে জুড়ে যাবে।",
          },
          examples: [
            {
              wrong: "They was at the stadium last Friday.",
              right: "They were at the stadium last Friday.",
              note: {
                bn: "they → were; অতীতেও মিল লাগেই — বাংলা 'তারা ছিল' এক রূপে চললেও ইংরেজি দুই রূপে চলে।",
                en: "'They' takes were; agreement applies in the past too — where Bengali runs on one form 'chhilo', English runs on two.",
                hi: "they → were; অতীতেও মেল লাগেই।",
              },
            },
            {
              wrong: "You is my best friend.",
              right: "You are my best friend.",
              note: {
                bn: "you একজন হলেও are — I am / you are / he is ত্রয়ী মুখস্থ রাখুন; you-এর সঙ্গে is/am দুটোই ভুল।",
                en: "Even one 'you' takes are — keep the trio I am / you are / he is memorised; both is and am are wrong after you.",
                hi: "'you' একজন হলেও are — I am / you are / he is ত্রয়ী রটাও।",
              },
            },
            {
              wrong: "I am in the right classroom?",
              right: "Am I in the right classroom?",
              note: {
                bn: "প্রশ্নে be-verb সামনে আসে — বাংলার মতো শুধু শেষে '?' বসিয়ে বাক্য প্রশ্ন হয় না।",
                en: "In questions the be-verb moves to the front — a sentence does not become a question just by tacking '?' at the end the Bengali way.",
                hi: "প্রশ্নে be-verb সামনে আসে — শুধু শেষে '?' বসিয়ে প্রশ্ন হয় না।",
              },
            },
            {
              wrong: "We wasn't at home in the morning.",
              right: "We weren't at home in the morning.",
              note: {
                bn: "we → weren't; wasn't শুধু I/he/she/it-এর। বাংলা 'আমরা ছিলাম না' — রূপ এক, ইংরেজি ভাগ দুই।",
                en: "'We' takes weren't; wasn't belongs to I/he/she/it only. Bengali 'amra chhilam na' has one form — English splits it in two.",
                hi: "we → weren't; 'wasn't' কেবল I/he/she/it-এর।",
              },
            },
            {
              wrong: "He is go to the gym daily.",
              right: "He goes to the gym daily.",
              note: {
                bn: "be-verb + মূল ক্রিয়া একসঙ্গে আসে না; অভ্যাস বোঝাতে শুধুই goes — 'প্রতিদিন যায়'।",
                en: "A be-verb and a main verb never come together; for a daily habit it is simply goes — 'goes daily'.",
                hi: "be-verb + মূল ক্রিয়া একসাথে আসে না; আদত বুঝাতে কেবল goes।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "have / has আর do / does — জোড়া মিলিয়ে চেনা",
            en: "have / has and do / does — knowing the pairs",
            hi: "have / has আর do / does — জোড়া পেহচাননা",
          },
          body: {
            bn: "মালিকানা বোঝাতে have; তৃতীয় পুরুষ একবচনে রূপ বদলে has: I have, you have, we have, they have, কিন্তু he has, she has, it has, Rahim has। বাংলায় 'আছে' সব কর্তায় এক (আমার আছে, তার আছে), তাই 'He have' লেখার প্রবণতা জন্মায় — মনে রাখুন: has একবচন তৃতীয় পুরুষের ব্যক্তিগত সম্পত্তি। do/does-এর দুটো কাজ: প্রশ্ন আর নেগেটিভ। প্রশ্ন: Do you play chess? Does she play chess? নেগেটিভ: I don't play, He doesn't play। ভাগ একই: does/doesn't যায় he/she/it-এর সঙ্গে, do/don't যায় I/you/we/they-এর সঙ্গে। দুটো লুকানো নিয়ম: (১) does বসলে মূল ক্রিয়া থেকে s চলে যায় — Does she work? (Does she works ভুল); (২) has-ও একই ভাগ্য — Does he have a car? (Does he has ভুল), He doesn't have time (doesn't has ভুল)। কারণ সহজ: s-এর দায়িত্ব একবারে একজনের — হয় does নেবে, নয় মূল ক্রিয়া। শেষ কথা: মালিকানায় have got-ও চলে (He has got a car), কিন্তু শুরুর স্তরে have/has-ই যথেষ্ট আর সব জায়গায় চলে।",
            en: "For ownership use have; third-person singular changes it to has: I have, you have, we have, they have, but he has, she has, it has, Rahim has. Bengali 'ache' stays the same for every subject (amar ache, tar ache), which breeds the habit of writing 'He have' — remember: has is the personal property of third-person singular. do/does have two jobs: questions and negatives. Questions: Do you play chess? Does she play chess? Negatives: I don't play, He doesn't play. The split is the same: does/doesn't go with he/she/it, do/don't go with I/you/we/they. Two hidden rules: (1) when does appears, the main verb loses its s — Does she work? ('Does she works' is wrong); (2) has meets the same fate — Does he have a car? ('Does he has' is wrong), He doesn't have time ('doesn't has' is wrong). The reason is simple: the s belongs to one word at a time — either does takes it, or the main verb. Last word: have got also works for ownership (He has got a car), but at the beginner stage have/has is enough and travels everywhere.",
            hi: "মালিকানা বুঝাতে have; তৃতীয় পুরুষ একবচনে রূপ হয়ে যায় has: I have, they have, পর he has, she has, Rahim has। বাংগলায় 'আছে' সব কর্তায় এক (আমার আছে, তার আছে), ইসলিএ 'He have' লেখার আদত জন্মায় — মনে রাখেন: has একবচন তৃতীয় পুরুষের নিজের সম্পত্তি। do/does-এর দো কাম: প্রশ্ন আর নিষেধ। প্রশ্ন: Do you play chess? Does she play chess? নিষেধ: I don't play, He doesn't play। বিভাজন একই: does/doesn't জাতা হয় he/she/it-এর সাথে, do/don't যায় I/you/we/they-এর সাথে। দো লুকানো নিয়ম: (1) does বৈঠলে মূল ক্রিয়া থেকে s চলে যায় — Does she work? (2) has-ও একই কিসমত — Does he have a car? (Does he has ভুল), He doesn't have time। কারন সহজ: s-এর দায়িত্ব একবারে একজনের।",
          },
          examples: [
            {
              wrong: "She have two mobile phones.",
              right: "She has two mobile phones.",
              note: {
                bn: "she → has; বাংলা 'তার দুটো মোবাইল আছে' — 'আছে' নিরপেক্ষ, ইংরেজি নিরপেক্ষ নয়।",
                en: "'She' takes has; Bengali 'tar duto mobile ache' uses a neutral 'ache', but English is not neutral here.",
                hi: "she → has; বাংগলা 'আছে' নিরপেক্ষ, পর অংগ্রেজি নিরপেক্ষ নহীं।",
              },
            },
            {
              wrong: "Does he has a driving licence?",
              right: "Does he have a driving licence?",
              note: {
                bn: "does s-এর দায়িত্ব নিলে পেছনের ক্রিয়া সাধারণ রূপে (have); s দুই জায়গায় বসে না।",
                en: "Once does has taken the s, the following verb returns to its plain form (have); the s never sits in two places.",
                hi: "does s-এর দায়িত্ব নিলে পিছের ক্রিয়া সাধারণ রূপে (have)।",
              },
            },
            {
              wrong: "My brother don't have any homework.",
              right: "My brother doesn't have any homework.",
              note: {
                bn: "my brother = he → doesn't; পরের have সাধারণ রূপেই থাকবে — doesn't have।",
                en: "'My brother' = he, so doesn't; the following have stays plain — doesn't have.",
                hi: "'my brother' = he → doesn't; পিছের have সাধারণ রূপেই।",
              },
            },
            {
              wrong: "I has a headache.",
              right: "I have a headache.",
              note: {
                bn: "I → have; ব্যথা, বাড়ি, সমস্যা, ভাইবোন — যা-ই হোক, I-এর জুটি have।",
                en: "I takes have — pain, house, problem, siblings, whatever it is, I's partner is have.",
                hi: "I → have; দর্দ, ঘর, মুশকিল — ক্যা ভি হো, I-এর জুটি have।",
              },
            },
            {
              wrong: "The teachers has a meeting at four.",
              right: "The teachers have a meeting at four.",
              note: {
                bn: "teachers = বহুবচন → have; -s যুক্ত নাম দেখলেই বহুবচন ক্রিয়া ভাবুন।",
                en: "'Teachers' is plural, so have; when you see a noun ending in -s, think plural verb.",
                hi: "'teachers' = বহুবচন → have।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "লম্বা বাক্যে মিল ধরে রাখা — আসল কর্তাকে চেনা",
            en: "Keeping agreement in long sentences — find the real subject",
            hi: "লম্বে বাক্যে মেল — অসলি কর্তা পেহচাননা",
          },
          body: {
            bn: "ছোট বাক্যে মিল করা সহজ (He plays), কিন্তু কর্তা আর ক্রিয়ার মাঝে আরও কয়েকটা শব্দ ঢুকে গেলে চোখ ভুল খায়: The boy in the red shirt plays football — এখানে ক্রিয়ার কাছে 'shirt' আছে, কিন্তু কাজটা করে the boy; তাই plays (play নয়)। মাঝের শব্দগুলো (in the red shirt) বাদ দিয়ে আসল কর্তাটা আঙুল দিয়ে ধরুন, তারপর মিল মেলান। আরও কিছু চেনা ফাঁদ: The books on the table are mine — books বহুবচন, table শুধু ঠিকানা; তাই are। The list of items is long — list একবচন (items শুধু list-এর ভেতরের); তাই is। One of my friends plays cricket — one একবচন, friends শুধু গোছা; তাই plays। যাচাইয়ের প্রশ্ন একটাই: কে/কী কাজটা করছে? ওই শব্দটা একবচন না বহুবচন? উত্তর একবচন হলে is/has/does/-s, বহুবচন হলে are/have/do/খালি ক্রিয়া। পাঁচ সেকেন্ডের এই প্রশ্নই লম্বা বাক্যের ভুলের ৯০ শতাংশ ধরে ফেলে।",
            en: "Matching is easy in a short sentence (He plays), but when a few extra words squeeze between subject and verb, the eye errs: The boy in the red shirt plays football — 'shirt' sits near the verb, but the doer is the boy; so plays, not play. Set the middle words (in the red shirt) aside, put a finger on the real subject, then match. More familiar traps: The books on the table are mine — books is plural, the table is only the address; so are. The list of items is long — list is singular (items merely live inside the list); so is. One of my friends plays cricket — one is singular, friends is just the pack; so plays. One checking question does it all: who or what is doing the action? Is that word singular or plural? Singular → is/has/does/-s; plural → are/have/do/plain verb. This five-second question catches ninety per cent of long-sentence errors.",
            hi: "ছোট বাক্যে মেল করা সহজ (He plays), পর কর্তা আর ক্রিয়ার বিচে ক'টা শব্দ ঢুকে গেলে চোখ ভুল খায়: The boy in the red shirt plays football — ইয়াকাদা 'shirt' আছে, পর কামটা করে the boy; ইসলিএ plays (play নয়)। মাঝের শব্দ (in the red shirt) বাদ দিয়ে আসল কর্তা আঙুল দিয়ে ধরেন, তারপর মেল মেলান। আরো ক'টা পরিচিত জাল: The books on the table are mine — books বহুবচন, তাই are। The list of items is long — list একবচন, তাই is। One of my friends plays cricket — one একবচন, তাই plays। জাঁচের প্রশ্ন একটাই: কে/ক্যা কামটা করছে? ওই শব্দটা একবচন না বহুবচন? একবচন হলে is/has/does/-s, বহুবচন হলে are/have/do/খালি ক্রিয়া।",
          },
          examples: [
            {
              wrong: "The colour of these walls are blue.",
              right: "The colour of these walls is blue.",
              note: {
                bn: "কাজটা করে the colour (একবচন); of these walls শুধু বর্ণনা → is। 'walls'-এর -s চোখে পড়লেও কর্তা নয়।",
                en: "The doer is the colour (singular); 'of these walls' is only description — so is; the -s on walls may catch the eye but it is not the subject.",
                hi: "কামটা করে the colour (একবচন); 'of these walls' কেবল বর্ণনা → is।",
              },
            },
            {
              wrong: "One of my cousins live in Toronto.",
              right: "One of my cousins lives in Toronto.",
              note: {
                bn: "one একবচন → lives; cousins শুধু তালিকা — 'একজন... থাকেন' বাংলায়ও এক, ইংরেজিতেও এক।",
                en: "'One' is singular — lives; cousins is only the list. 'One of them lives' is singular in Bengali too, and in English as well.",
                hi: "'one' একবচন → lives; 'cousins' কেবল তালিকা।",
              },
            },
            {
              wrong: "The students in this class works very hard.",
              right: "The students in this class work very hard.",
              note: {
                bn: "আসল কর্তা the students (বহুবচন) → work; in this class মাঝের শব্দ — 'class' নয়, শিক্ষার্থীরাই পরিশ্রম করে।",
                en: "The real subject is the students (plural) — work; 'in this class' is just middle furniture — it is the students who work hard, not the class.",
                hi: "আসলি কর্তা the students (বহুবচন) → work; 'in this class' কেবল বিচের শব্দ।",
              },
            },
            {
              wrong: "My shoes is under the bed.",
              right: "My shoes are under the bed.",
              note: {
                bn: "shoes জোড়া → বহুবচন → are; বাংলায় 'জুতা বিছানার নিচে' একবচনে ভাবতেই ভুল জন্মায় — ইংরেজি জুটিকে দুই গুনে।",
                en: "Shoes come in a pair — plural — so are; thinking of Bengali 'juta bichanar niche' in the singular is exactly what breeds the error — English counts the pair as two.",
                hi: "'shoes' জোড়া → বহুবচন → are; বাংগলা একবচন ভাবে ভুল জন্মায়।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "Common mistakes by Bengali speakers",
            hi: "বাংগলাভাষী ছাত্রোঁ কি আম গলতিযাঁ",
          },
          body: {
            bn: "এই পাঁচটা ভুল বাংলা প্যাটার্ন থেকেই জন্মায় — বাংলায় ক্রিয়া কর্তা অনুযায়ী বদলায় ঠিকই, কিন্তু কোথায় বদলায় আর কোন আকারে বদলায়, সেটা দুই ভাষায় মেলে না। প্রতিটা ভুলের পেছনের বাংলা বাক্যটা বের করুন, তারপর ইংরেজি রূপটা জোরে তিনবার বলুন — মুখে ঘুরতে শুরু করলেই লেখায় ভুল আসা বন্ধ হয়।",
            en: "These five mistakes are born straight from Bengali patterns — Bengali verbs do change with the subject, but where and in what shape they change does not line up across the two languages. Dig out the Bengali sentence behind each error, then say the English form aloud three times — once it starts rolling off the tongue, the written mistakes stop.",
            hi: "এই পাঁচটা ভুল বাংগলা প্যাটার্ন থেকেই জন্মায় — বাংগলায় ক্রিয়া কর্তা অনুসারে বদলায় ঠিকই, পর কোথায় আর কিস আকারে বদলায় তা দো ভাষায় মেলে না। হর ভুলের পিছের বাংগলা বাক্য নিকালেন, তারপর অংগ্রেজি রূপ তিন বার জোরে বোলেন।",
          },
          examples: [
            {
              wrong: "He go to office by bus.",
              right: "He goes to office by bus.",
              note: {
                bn: "'সে বাসে অফিসে যায়' — বাংলা ক্রিয়া 'যায়' নিজেই তৃতীয় পুরুষ; ইংরেজির তৃতীয় পুরুষের চিহ্ন ক্রিয়ার শেষের s — বাদ দিলে মিলই নেই।",
                en: "'Se buse office-e jay' — the Bengali verb ending 'jay' is already third person; in English that mark is the final s on the verb, and dropping it removes the agreement altogether.",
                hi: "'যায়' নিজেই তৃতীয় পুরুষ; অংগ্রেজির তৃতীয় পুরুষের চিহ্ন ক্রিয়ার অন্তের s।",
              },
            },
            {
              wrong: "They was very happy.",
              right: "They were very happy.",
              note: {
                bn: "'তারা খুব খুশি ছিল' — বাংলায় 'ছিল' সবার জন্য কাছাকাছি; ইংরেজিতে they-এর জুটি were।",
                en: "'Tara khub khushi chhilo' — Bengali 'chhilo' nearly suits everyone; in English they's partner is were.",
                hi: "'ছিল' সবার জন্য কাছাকাছি; অংগ্রেজিতে they-এর জুটি were।",
              },
            },
            {
              wrong: "I has two sisters.",
              right: "I have two sisters.",
              note: {
                bn: "'আমার দুই বোন আছে' — 'আছে' বাংলায় নিরপেক্ষ; ইংরেজিতে I → have, একমাত্র।",
                en: "'Amar dui bon ache' — Bengali 'ache' is neutral; in English I takes have, only and always.",
                hi: "'আছে' বাংগলায় নিরপেক্ষ; অংগ্রেজিতে I → have।",
              },
            },
            {
              wrong: "My friends is coming tonight.",
              right: "My friends are coming tonight.",
              note: {
                bn: "'বন্ধুরা আজ রাতে আসছে' — friends বহুবচন, তাই are; বাংলা 'বন্ধুরা'-কে একগোছা মনে হলেও ইংরেজি গুনে দেখে।",
                en: "'Bandhura aj rate aschhe' — friends is plural, so are; even though 'bandhura' feels like one bunch in Bengali, English counts heads.",
                hi: "'friends' বহুবচন, ইসলিএ are; অংগ্রেজি গিনতি করে দেখে।",
              },
            },
            {
              wrong: "Everyone are present today.",
              right: "Everyone is present today.",
              note: {
                bn: "'সবাই আজ উপস্থিত' — 'সবাই' বহুবচন মনে হলেও everyone-এর গণনা এক এক করে → is; every-body/any-body-ও একই।",
                en: "'Shobai aj uposthit' — though 'shobai' feels plural, everyone is counted one by one — so is; everybody/anybody behave the same way.",
                hi: "'সবাই' বহুবচন লাগে, পর everyone-এর গিনতি এক-এক করে → is।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক",
            en: "See it in a mini story",
            hi: "এক ছোটি কহানি মে দেখেং",
          },
          body: {
            bn: "আজ স্কুলে নতুন ছাত্র আরিফকে সবার সঙ্গে পরিচয় করিয়ে দিচ্ছেন শিক্ষক। শিক্ষক বলেন, 'This is Arif. He is from Rajshahi.' আরিফ বলে, 'I am twelve years old. I have two sisters.' তার বন্ধু নীলা যোগ করে, 'His sisters are in our school too. They are in class eight.' শিক্ষক জিজ্ঞেস করেন, 'Does your father work here in Dhaka?' আরিফ বলে, 'Yes, he does. He has a shop in Mirpur. My mother and my uncle run it together.' নীলা হেসে বলে, 'Everyone in his family is hardworking!' খেয়াল করুন — This is, He is, I am, I have, sisters are, Does...work, he has, mother and uncle run, Everyone is — প্রতিটা ক্রিয়া নিজের কর্তার সঙ্গে মিলে আছে। এক নজরে — I → am/have/do; he/she/it → is/has/does/-s; we/you/they → are/have/do; অতীতে I/he/she/it → was, বাকি সব → were; everyone/nobody একবচন; A and B → বহুবচন; মাঝের শব্দ নয়, আসল কর্তাই ক্রিয়া ঠিক করে।",
            en: "Today a teacher is introducing the new student Arif to the class. The teacher says, 'This is Arif. He is from Rajshahi.' Arif says, 'I am twelve years old. I have two sisters.' His friend Nila adds, 'His sisters are in our school too. They are in class eight.' The teacher asks, 'Does your father work here in Dhaka?' Arif answers, 'Yes, he does. He has a shop in Mirpur. My mother and my uncle run it together.' Nila laughs, 'Everyone in his family is hardworking!' Notice — This is, He is, I am, I have, sisters are, Does...work, he has, mother and uncle run, Everyone is — every verb matches its subject. In a nutshell — I → am/have/do; he/she/it → is/has/does/-s; we/you/they → are/have/do; in the past I/he/she/it → was, everyone else → were; everyone/nobody are singular; A and B make a plural; it is the real subject, not the middle words, that decides the verb.",
            hi: "আজ স্কুলে নযা ছাত্র আরিফকে সবকে সাথে পরিচয় করা রহি হৈ শিক্ষক। শিক্ষক বোলেন, 'This is Arif. He is from Rajshahi.' আরিফ বোলে, 'I am twelve years old. I have two sisters.' তার দোস্ত নীলা জোগাড় করে, 'His sisters are in our school too. They are in class eight.' শিক্ষক পুছেন, 'Does your father work here in Dhaka?' আরিফ বোলে, 'Yes, he does. He has a shop in Mirpur. My mother and my uncle run it together.' নীলা হাসি দিয়ে বোলে, 'Everyone in his family is hardworking!' ধ্যান দেं — হর ক্রিয়া অপনে কর্তার সাথে মিলে হৈ। এক নজর মে — I → am/have/do; he/she/it → is/has/does/-s; we/you/they → are/have/do; অতীতে I/he/she/it → was, বাকি সব → were; everyone/nobody একবচন; A and B → বহুবচন।",
          },
          examples: [
            {
              wrong: "This is Arif. He are from Rajshahi.",
              right: "This is Arif. He is from Rajshahi.",
              note: {
                bn: "he → is; পরিচয়ের প্রথম বাক্যই be-verb-এর মিল শেখার সেরা জায়গা।",
                en: "'He' takes is; the very first sentence of an introduction is the best place to practise be-verb agreement.",
                hi: "he → is; পরিচয়ের প্রথম বাক্যই মেল শেখার সেরা জায়গা।",
              },
            },
            {
              wrong: "Does your father works here?",
              right: "Does your father work here?",
              note: {
                bn: "does-এর পরে মূল ক্রিয়া s ছাড়া — work; s-এর দায়িত্ব does-এর।",
                en: "After does the main verb loses its s — work; does is the s-holder.",
                hi: "does-এর পিছে মূল ক্রিয়া s ছাড়া — work।",
              },
            },
            {
              wrong: "My mother and my uncle runs the shop.",
              right: "My mother and my uncle run the shop.",
              note: {
                bn: "দুই কর্তা → বহুবচন → run; 'A and B' দেখলেই ক্রিয়ার s খুলে যাবে।",
                en: "Two subjects make a plural — run; whenever you see 'A and B', the s comes off the verb.",
                hi: "দো কর্তা → বহুবচন → run।",
              },
            },
            {
              wrong: "Everyone in his family are hardworking.",
              right: "Everyone in his family is hardworking.",
              note: {
                bn: "everyone একবচন — of/in-এর পরের অংশ নয়, everyone-ই কর্তা → is।",
                en: "'Everyone' is singular — the of/in part is not the subject, everyone is — so is.",
                hi: "'everyone' একবচন — of/in-এর ভাগ নয়, everyone-ই কর্তা → is।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "তিন সারির ছক মুখস্থ করুন: I → am/do/have; he/she/it → is/does/has; we/you/they → are/do/have — ক্রিয়া বসানোর আগে কর্তার সারি চিনে নিন।",
          en: "Memorise the three-row chart: I → am/do/have; he/she/it → is/does/has; we/you/they → are/do/have — before placing a verb, recognise the subject's row.",
          hi: "তিন সারির চার্ট রটাও: I → am/do/have; he/she/it → is/does/has; we/you/they → are/do/have।",
        },
        {
          bn: "তৃতীয় পুরুষ একবচন = s-এর দেশ: is, has, does, plays — একবারে এক শব্দের সম্পত্তি।",
          en: "Third-person singular is the land of s: is, has, does, plays — and the s belongs to one word at a time.",
          hi: "তৃতীয় পুরুষ একবচন = s-এর দেশ: is, has, does, plays — একবারে এক শব্দের সম্পত্তি।",
        },
        {
          bn: "বহুবচন কর্তার সঙ্গে s নেই — they go, my friends play; বাংলার 'তারা যায়'-এর মোহে they goes লিখবেন না।",
          en: "Plural subjects take no s — they go, my friends play; do not let the Bengali echo of 'tara jay' tempt you into 'they goes'.",
          hi: "বহুবচন কর্তার সাথে s নেই — they go, my friends play; 'they goes' লিখবেন না।",
        },
        {
          bn: "অতীতের be-verb মাত্র দুই রূপ: I/he/she/it → was; you/we/they → were।",
          en: "The past be-verb has only two forms: I/he/she/it → was; you/we/they → were.",
          hi: "অতীতের be-verb কেবল দো রূপ: I/he/she/it → was; you/we/they → were।",
        },
        {
          bn: "you একজন হলেও you are / you were — বাংলা 'তুমি' না 'আপনারা' দেখে ক্রিয়া বদলাবেন না।",
          en: "Even one 'you' takes you are / you were — never change the verb based on the Bengali choice between 'tumi' and 'apnara'.",
          hi: "'you' একজন হলেও you are / you were — বাংগলা 'তুমি' না 'আপনারা' দেখে ক্রিয়া বদলাবেন না।",
        },
        {
          bn: "everyone, everybody, someone, nobody, each — সবই একবচন: Everyone is, Nobody knows।",
          en: "everyone, everybody, someone, nobody, each — all are singular: Everyone is, Nobody knows.",
          hi: "everyone, everybody, someone, nobody, each — সবই একবচন: Everyone is, Nobody knows।",
        },
        {
          bn: "দুই কর্তা and দিয়ে জুড়লে বহুবচন: My father and mother are... — ক্রিয়ার s খুলে যাবে।",
          en: "Two subjects joined by and make a plural: My father and mother are... — the s comes off the verb.",
          hi: "দো কর্তা and দিয়ে জুড়লে বহুবচন: My father and mother are...",
        },
        {
          bn: "does বসলে পেছনের ক্রিয়া থেকে s ছেড়ে দিন: Does he play? He doesn't have... — s একবারে এক জায়গায়।",
          en: "When does appears, release the s from the following verb: Does he play? He doesn't have... — the s sits in one place at a time.",
          hi: "does বৈঠলে পিছের ক্রিয়া থেকে s ছেড়ে দেন: Does he play? He doesn't have...",
        },
        {
          bn: "লম্বা বাক্যে আগে আসল কর্তা খুঁজুন (of/in দিয়ে শুরু হওয়া মাঝের অংশ বাদ দিন), তারপর ক্রিয়া মেলান।",
          en: "In long sentences find the real subject first (set aside the middle part starting with of/in), then match the verb.",
          hi: "লম্বা বাক্যে আগে আসলি কর্তা খোঁজেন (of/in দিয়ে শুরু মাঝের ভাগ বাদ দেন), তারপর ক্রিয়া মেলান।",
        },
        {
          bn: "রোজ নিজের সম্পর্কে ৫টা বাক্য বলুন — I am..., I have..., He is..., She has..., They are... — ছকটা মুখস্থ হয়ে যাবে।",
          en: "Say five sentences about yourself every day — I am..., I have..., He is..., She has..., They are... — and the chart becomes memory.",
          hi: "রোজ নিজের বারে ৫টা বাক্য বোলেন — I am..., I have..., He is..., She has..., They are...",
        },
      ],
      quiz: [
        {
          question: "My father ___ a small shop near the station.",
          options: ["has", "have", "is", "are"],
          answer: 0,
          explanation: {
            bn: "my father = he → has; মালিকানা বোঝাতে তৃতীয় পুরুষ একবচনের জুটি has।",
            en: "'My father' = he, so has; for ownership the third-person singular partner is has.",
            hi: "'my father' = he → has।",
          },
        },
        {
          question: "The children ___ in the garden now.",
          options: ["is", "am", "are", "was"],
          answer: 2,
          explanation: {
            bn: "children = বহুবচন → are; is/was একবচনের।",
            en: "'Children' is plural — are; is/was belong to singulars.",
            hi: "'children' = বহুবচন → are।",
          },
        },
        {
          question: "She ___ eat breakfast before eight.",
          options: ["don't", "doesn't", "isn't", "not"],
          answer: 1,
          explanation: {
            bn: "she → doesn't; নেগেটিভেও মিল ধরে রাখতে হয় — doesn't eat।",
            en: "'She' takes doesn't; the agreement holds in negatives too — doesn't eat.",
            hi: "she → doesn't; নিষেধেও মেল ধরে রাখতে হয়।",
          },
        },
        {
          question: "I ___ at my uncle's house last night.",
          options: ["am", "is", "was", "were"],
          answer: 2,
          explanation: {
            bn: "last night = অতীত; I-এর অতীত জুটি was — I was।",
            en: "'Last night' is the past; I's past partner is was — I was.",
            hi: "'last night' = অতীত; I-এর অতীত জুটি was।",
          },
        },
        {
          question: "They ___ very tired after the journey.",
          options: ["were", "was", "is", "has"],
          answer: 0,
          explanation: {
            bn: "they → were; অতীতের ঘটনা, তাই were — বাংলা 'তারা খুব ক্লান্ত ছিল'।",
            en: "'They' takes were; a past event, so were — 'they were very tired'.",
            hi: "they → were; অতীতের ঘটনা।",
          },
        },
        {
          question: "Everyone ___ ready for the exam.",
          options: ["are", "is", "have", "do"],
          answer: 1,
          explanation: {
            bn: "everyone একবচন → is; বহুবচনের মতো দেখালেও গণনা এক এক করে।",
            en: "'Everyone' is singular — is; though it looks plural, it is counted one by one.",
            hi: "'everyone' একবচন → is।",
          },
        },
        {
          question: "My brother and my sister ___ teachers.",
          options: ["is", "are", "has", "was"],
          answer: 1,
          explanation: {
            bn: "দুই কর্তা and-যুক্ত → বহুবচন → are; 'A and B' দেখলেই are ভাবুন।",
            en: "Two subjects joined by and make a plural — are; on seeing 'A and B', think are.",
            hi: "দো কর্তা and-যুক্ত → বহুবচন → are।",
          },
        },
        {
          question: "___ your friends play football on Fridays?",
          options: ["Does", "Do", "Is", "Are"],
          answer: 1,
          explanation: {
            bn: "your friends = they → প্রশ্নে Do; Does একবচন তৃতীয় পুরুষের।",
            en: "'Your friends' = they, so Do in questions; Does is for third-person singular.",
            hi: "'your friends' = they → প্রশ্নে Do।",
          },
        },
        {
          question: "The colour of these doors ___ green.",
          options: ["is", "are", "have", "were"],
          answer: 0,
          explanation: {
            bn: "আসল কর্তা the colour (একবচন) → is; of these doors শুধু বর্ণনা।",
            en: "The real subject is the colour (singular) — is; 'of these doors' is only description.",
            hi: "আসলি কর্তা the colour (একবচন) → is।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: [
            "He have a new laptop.",
            "He has a new laptop.",
            "He haves a new laptop.",
            "He is have a new laptop.",
          ],
          answer: 1,
          explanation: {
            bn: "he/she/it-এর জুটি has — He has a new laptop; have যায় I/you/we/they-এর সঙ্গে, haves বলে কিছু নেই, be-verb + have একসঙ্গে আসে না।",
            en: "The partner of he/she/it is has — He has a new laptop; have goes with I/you/we/they, 'haves' does not exist, and a be-verb never pairs with have.",
            hi: "he/she/it-এর জুটি has — He has a new laptop।",
          },
        },
      ],
    },
  },
  /* ── 3. Question Formation (Beginner) ─────────────────────────────── */
  {
    topic: "Question Formation",
    level: "beginner",
    title: "Question Formation (Beginner)",
    unit: 3,
    data: {
      title: {
        bn: "প্রশ্ন করার নিয়ম (বিগিনার)",
        en: "Question Formation (Beginner)",
        hi: "प्रश्न बनाने के नियम (बिगिनर)",
      },
      intro: {
        bn: "এই পাঠ লার্নিং পথের তৃতীয় ব্যাকরণ পাঠ — আগের দুই পাঠ 'Tense Basics' আর 'Subject-Verb Agreement' শেষ করে তবেই শুরু করুন, কারণ প্রশ্ন বানাতে do/does/did আর কর্তা-ক্রিয়ার মিল বারবার ফিরে আসবে। বাংলায় প্রশ্ন করা প্রায় বিনা খরচে: সাধারণ বাক্যের শেষে 'কি?' বসিয়ে দিন — 'তুমি ভাত খাও।' → 'তুমি কি ভাত খাও?' — নয়তো শুধু গলার স্বর ওপরে তুলুন; শব্দের ক্রম একটুও বদলায় না। কিন্তু ইংরেজিতে প্রশ্ন মানেই শব্দের ক্রম বদল: You eat rice. → Do you eat rice? এই ফারাক না বুঝলেই জন্মায় 'What you doing?', 'Where you went?', 'You are coming?'-এর মতো চেনা ভুলগুলো। এই পাঠে শিখব — yes/no আর wh-প্রশ্নের দুই পরিবার, do/does/did দিয়ে প্রশ্ন বানানো, wh-শব্দের পরে স্থির ক্রম, be-verb আর modal-এর আলাদা নিয়ম, আর 'Yes, I do'-জাতীয় ছোট উত্তর।",
        en: "This is the third grammar lesson on the learning path — finish the previous two lessons, 'Tense Basics' and 'Subject-Verb Agreement', before you start, because building questions will bring back do/does/did and subject-verb agreement again and again. In Bengali asking a question costs almost nothing: put 'ki?' at the end of a plain sentence — 'tumi bhat khao.' becomes 'tumi ki bhat khao?' — or simply raise the tone of your voice; the order of the words does not change at all. In English, however, a question means the word order changes: You eat rice. becomes Do you eat rice? When this gap is not understood, the familiar mistakes are born: 'What you doing?', 'Where you went?', 'You are coming?'. In this lesson we learn — the two families of yes/no and wh-questions, making questions with do/does/did, the fixed order after wh-words, the separate rules for be-verbs and modals, and short answers like 'Yes, I do'.",
        hi: "यह लर्निंग पथ का तीसरा व्याकरण पाठ है — पिछले दो पाठ 'Tense Basics' और 'Subject-Verb Agreement' पूरे करके ही शुरू करें, क्योंकि प्रश्न बनाने में do/does/did और कर्ता-क्रिया सहमति बार-बार लौटेंगे। बांग्ला में प्रश्न पूछना लगभग मुफ़्त है: साधारण वाक्य के अंत में 'कि?' जोड़ दें — 'तुमি ভাত খাও।' → 'তুমি কি ভাত খাও?' — या बस आवाज़ ऊपर उठा दें; शब्द-क्रम बिल्कुल नहीं बदलता। अंग्रेज़ी में प्रश्न का मतलब ही है क्रम बदलना: You eat rice. → Do you eat rice? यह फ़र्क़ न समझने से जानी-पहचानी गलतियाँ बनती हैं: 'What you doing?', 'Where you went?', 'You are coming?'। इस पाठ में हम सीखेंगे — yes/no और wh-प्रश्न के दो परिवार, do/does/did से प्रश्न बनाना, wh-शब्द के बाद स्थिर क्रम, be-verb और modal के अलग नियम, और 'Yes, I do' जैसे छोटे उत्तर।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — প্রশ্নের দুই পরিবার",
            en: "When to use it — the two families of questions",
            hi: "कब इस्तेमाल होता है — प्रश्न के दो परिवार",
          },
          body: {
            bn: "প্রশ্নের কাজ একটাই — উত্তর পাওয়া; কিন্তু ইংরেজি প্রশ্ন দুই পরিবারে ভাগ হয়। Yes/No প্রশ্ন: উত্তর শুধু হ্যাঁ বা না — Do you like tea? Are you ready? Did he call you? Wh-প্রশ্ন: উত্তরে তথ্য লাগবে — What do you want? Where do you live? Why did she cry? বাংলায় প্রশ্ন বানানো প্রায় বিনা খরচে: সাধারণ বাক্যের শেষে 'কি?' বসিয়ে দিন — 'তুমি চা খাও।' → 'তুমি কি চা খাও?' — নয়তো শুধু গলার স্বর ওপরে তুলুন; শব্দের ক্রম একটুও বদলায় না। কিন্তু ইংরেজিতে প্রশ্ন মানেই শব্দের ক্রম বদল: You like tea. → Do you like tea? You are ready. → Are you ready? কর্তার জায়গায় সামনে একটা auxiliary (do/does/did, be-verb, modal) এসে দাঁড়ায়, আর কর্তা তার পেছনে সরে যায় — এটাই inversion। আজকের পাঠের মূলমন্ত্র: বাংলায় 'কি' প্রশ্ন বানায়, ইংরেজিতে ক্রম বদলই প্রশ্ন বানায়।",
            en: "A question has one job — to get an answer; but English questions come in two families. Yes/No questions: the answer is just yes or no — Do you like tea? Are you ready? Did he call you? Wh-questions: the answer needs information — What do you want? Where do you live? Why did she cry? In Bengali, making a question costs almost nothing: add 'ki?' at the end of a plain sentence — 'tumi cha khao.' becomes 'tumi ki cha khao?' — or just raise the tone at the end; the order of the words does not change at all. In English, however, a question means the word order changes: You like tea. becomes Do you like tea? You are ready. becomes Are you ready? An auxiliary (do/does/did, a be-verb, a modal) stands at the front where the subject used to be, and the subject steps back behind it — that is inversion. Today's mantra: in Bengali 'ki' makes the question, in English the changed order makes the question.",
            hi: "प्रश्न का काम एक ही है — उत्तर पाना; पर अंग्रेज़ी प्रश्न दो परिवारों में बँटते हैं। Yes/No प्रश्न: उत्तर केवल हाँ या ना — Do you like tea? Are you ready? Did he call you? Wh-प्रश्न: उत्तर में जानकारी चाहिए — What do you want? Where do you live? Why did she cry? बांग्ला में प्रश्न बनाना लगभग मुफ़्त है: साधारण वाक्य के अंत में 'कि?' जोड़ दें — 'तुमি চা খাও।' → 'তুমি কি চা খাও?' — या बस आवाज़ ऊपर उठा दें; शब्द-क्रम बिल्कुल नहीं बदलता। अंग्रेज़ी में प्रश्न का मतलब ही क्रम बदलना है: You like tea. → Do you like tea? You are ready. → Are you ready? सामने एक auxiliary (do/does/did, be-verb, modal) खड़ा हो जाता है और कर्ता उसके पीछे सरक जाता है — यही inversion है। आज का मूल मंत्र: बांग्ला में 'कि' प्रश्न बनाता है, अंग्रेज़ी में बदला हुआ क्रम प्रश्न बनाता है।",
          },
          examples: [
            {
              wrong: "You are coming to the party?",
              right: "Are you coming to the party?",
              note: {
                bn: "বাংলায় 'তুমি কি পার্টিতে আসছ?'-এ শুধু 'কি' বা গলার স্বর প্রশ্ন বানায়; ইংরেজিতে be-verb are-কে কর্তার সামনে তুলতেই হয় — ক্রম বদলাতেই প্রশ্ন হয়।",
                en: "In Bengali just 'ki' or a rising tone turns the sentence into a question; in English the be-verb are must jump in front of the subject — the changed order is what makes it a question.",
                hi: "बांग्ला में केवल 'कि' या उठी हुई आवाज़ प्रश्न बना देती है; अंग्रेज़ी में be-verb are को कर्ता के सामने लाना ही पड़ता है।",
              },
            },
            {
              wrong: "She knows the new teacher?",
              right: "Does she know the new teacher?",
              note: {
                bn: "সাধারণ ক্রিয়ার প্রশ্নে do/does/did লাগবেই — she-র জুটি does, আর knows ফিরে যায় know-এ।",
                en: "Questions with ordinary verbs need do/does/did — 'she' pairs with does, and knows returns to know.",
                hi: "साधारण क्रिया के प्रश्न में do/does/did ज़रूरी है — she के साथ does, और knows वापस know हो जाता है।",
              },
            },
            {
              wrong: "What you want for lunch?",
              right: "What do you want for lunch?",
              note: {
                bn: "wh-শব্দের পরে সরাসরি কর্তা নয় — আগে do, তারপর কর্তা, তারপর V1।",
                en: "After a wh-word the subject does not come directly — first do, then the subject, then V1.",
                hi: "wh-शब्द के बाद सीधे कर्ता नहीं — पहले do, फिर कर्ता, फिर V1।",
              },
            },
            {
              wrong: "Where he is going?",
              right: "Where is he going?",
              note: {
                bn: "be-verb থাকলে do লাগে না — is-ই কর্তার সামনে ওঠে: wh + is + he।",
                en: "When a be-verb is present, do never joins — is itself jumps in front of the subject: wh + is + he.",
                hi: "be-verb होने पर do नहीं आता — is स्वयं कर्ता के सामने जाता है: wh + is + he।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন — do/does/did + কর্তা + V1 (সব পুরুষ)",
            en: "Formation — do/does/did + subject + V1 (every person)",
            hi: "बनावट — do/does/did + कर्ता + V1 (हर पुरुष)",
          },
          body: {
            bn: "সাধারণ ক্রিয়ার yes/no প্রশ্নের সূত্র: Do/Does/Did + কর্তা + ক্রিয়ার মূল রূপ (V1)। বর্তমান কালে I/you/we/they-এর সঙ্গে Do — Do I know you? Do you play chess? Do they live here? he/she/it-এর সঙ্গে Does — Does she sing? Does he know the way? অতীত কালে সব কর্তার সঙ্গে Did — Did you go? Did she call? Did they come? খেয়াল করুন, do/does/did নিজেই কালের বোঝা বহন করে, তাই পরের ক্রিয়া সবসময় V1: Did you went ভুল, Did you go ঠিক; Does she likes ভুল, Does she like ঠিক। বাংলার 'তুমি কি...?'-এর 'কি' বাক্যের শেষে বা মাঝে বসতে পারে, কিন্তু do/does/did সবসময় বাক্যের একদম শুরুতে (wh-শব্দের ঠিক পরে) বসে। আর কর্তা বদলালে do আর does-এর ভাগও বদলায়: I do, he does — ঠিক যেমন বাংলায় 'কি করো/কি করে' কর্তা অনুযায়ী বদলায়।",
            en: "The formula for yes/no questions with ordinary verbs: Do/Does/Did + subject + base verb (V1). In the present, I/you/we/they take Do — Do I know you? Do you play chess? Do they live here? he/she/it takes Does — Does she sing? Does he know the way? In the past, every subject takes Did — Did you go? Did she call? Did they come? Notice that do/does/did carries the tense by itself, so the verb after it always returns to V1: 'Did you went' is wrong, 'Did you go' is right; 'Does she likes' is wrong, 'Does she like' is right. Bengali 'ki' can sit at the end or in the middle of a sentence, but do/does/did always stands at the very front (right after a wh-word). And when the subject changes, the do/does split changes with it: I do, he does — just as Bengali changes 'ki koro/ki kore' with the subject.",
            hi: "साधारण क्रिया के yes/no प्रश्नों का सूत्र: Do/Does/Did + कर्ता + मूल क्रिया (V1)। वर्तमान में I/you/we/they के साथ Do — Do I know you? Do you play chess? Do they live here? he/she/it के साथ Does — Does she sing? Does he know the way? अतीत में सब कर्ताओं के साथ Did — Did you go? Did she call? Did they come? ध्यान दें, do/does/did स्वयं काल ढोते हैं, इसलिए बाद की क्रिया हमेशा V1 में: 'Did you went' गलत, 'Did you go' सही; 'Does she likes' गलत, 'Does she like' सही। बांग्ला का 'कि' वाक्य के अंत या बीच में बैठ सकता है, पर do/does/did हमेशा वाक्य की एकदम शुरुआत में (wh-शब्द के ठीक बाद) बैठता है। और कर्ता बदलने पर do/does का विभाजन भी बदलता है: I do, he does — जैसे बांग्ला में 'कि कরো/कि करे' कर्ता के साथ बदलता है।",
          },
          examples: [
            {
              wrong: "Does she likes sweets?",
              right: "Does she like sweets?",
              note: {
                bn: "does-এর ভেতরেই s আছে — মূল ক্রিয়া সাধারণ রূপে ফিরবে: like; s একবারে এক শব্দের সম্পত্তি।",
                en: "'Does' already carries the s, so the main verb returns to its plain form: like — the s belongs to one word at a time.",
                hi: "'does' में s पहले से है — मूल क्रिया साधारण रूप में लौटेगी: like।",
              },
            },
            {
              wrong: "Did they came yesterday?",
              right: "Did they come yesterday?",
              note: {
                bn: "did নিজেই অতীত বহন করে — পরের ক্রিয়া V1: come; অতীতের চিহ্ন বাক্যে একবারই আসে।",
                en: "'Did' carries the past by itself, so the next verb is V1: come — the past marker appears only once in the sentence.",
                hi: "'did' स्वयं अतीत ले जाता है — अगली क्रिया V1: come।",
              },
            },
            {
              wrong: "Do he play cricket?",
              right: "Does he play cricket?",
              note: {
                bn: "he/she/it-এর জুটি does — বাংলায় 'কি খেলে' সবার জন্য এক মনে হলেও ইংরেজিতে ভাগ আছে।",
                en: "The partner of he/she/it is does — Bengali uses one 'ki khelle' for everyone, but English keeps the split.",
                hi: "he/she/it का जोड़ीदार does है — बांग्ला में सबके लिए एक ही रूप, पर अंग्रेज़ी में विभाजन है।",
              },
            },
            {
              wrong: "Does your parents live here?",
              right: "Do your parents live here?",
              note: {
                bn: "your parents = বহুবচন → do; does শুধু একবচন তৃতীয় পুরুষের।",
                en: "'Your parents' is plural — do; does serves only the third-person singular.",
                hi: "'your parents' बहुवचन है → do; does केवल तृतीय पुरुष एकवचन के लिए।",
              },
            },
            {
              wrong: "You did finish the homework?",
              right: "Did you finish the homework?",
              note: {
                bn: "বাংলার 'কি' বাক্যের শেষে বসে, কিন্তু did সবসময় শুরুতে — did + কর্তা + V1।",
                en: "Bengali 'ki' sits at the end, but did always stands at the front — did + subject + V1.",
                hi: "बांग्ला का 'कि' अंत में बैठता है, पर did हमेशा शुरू में — did + कर्ता + V1।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস শব্দ — wh-পরিবার ও তাদের আসন",
            en: "Signal words — the wh-family and their seat",
            hi: "संकेत शब्द — wh-परिवार और उनकी सीट",
          },
          body: {
            bn: "wh-শব্দের পরিবার মুখস্থ করুন: what = কী (What do you want?), where = কোথায় (Where do you live?), when = কখন (When does the shop open?), who = কে (Who called you?), why = কেন (Why are you late?), how = কীভাবে (How do you go to office?), whose = কার (Whose bag is this?), which = কোনটা (Which one do you like?)। how-এর সঙ্গে জুড়ে আরও যন্ত্র তৈরি হয়: how much (কত — অগণনযোগ্য/দাম), how many (কয়টা — গণনাযোগ্য), how old (বয়স কত), how long (কত দিন/সময়), how often (কতবার)। বাংলায় প্রশ্নবোধক শব্দ বাক্যের যেকোনো জায়গায় ঘুরতে পারে — 'তুমি কী খাচ্ছ', 'কী খাচ্ছ তুমি', 'খাচ্ছ তুমি কী' — সবই চলে। কিন্তু ইংরেজি wh-শব্দের আসন একটাই: বাক্যের একদম প্রথম পদ। তারপর আসে auxiliary, তারপর কর্তা — সঠিক ক্রমটা পরের অংশে শিখব।",
            en: "Memorise the wh-family: what = ki (What do you want?), where = kothay (Where do you live?), when = kokhon (When does the shop open?), who = ke (Who called you?), why = keno (Why are you late?), how = kibhabe (How do you go to office?), whose = kar (Whose bag is this?), which = konta (Which one do you like?). With how more tools are built: how much (for uncountables and prices), how many (for countables), how old (age), how long (duration), how often (frequency). In Bengali the question word can roam anywhere in the sentence — 'tumi ki khachcho', 'ki khachcho tumi', 'khachcho tumi ki' — all are fine. But the seat of the English wh-word is fixed: the very first word of the sentence. After it comes the auxiliary, then the subject — the exact order is what the next section teaches.",
            hi: "wh-परिवार रट लें: what = क्या (What do you want?), where = कहाँ (Where do you live?), when = कब (When does the shop open?), who = कौन (Who called you?), why = क्यों (Why are you late?), how = कैसे (How do you go to office?), whose = किसका (Whose bag is this?), which = कौन-सा (Which one do you like?)। how के साथ और औज़ार बनते हैं: how much (अगणनीय/क़ीमत), how many (गिनने योग्य), how old (उम्र), how long (अवधि), how often (कितनी बार)। बांग्ला में प्रश्न-शब्द वाक्य में कहीं भी घूम सकता है — सभी रूप चलते हैं। पर अंग्रेज़ी wh-शब्द की सीट तय है: वाक्य का पहला पद। उसके बाद auxiliary, फिर कर्ता — सही क्रम अगले भाग में।",
          },
          examples: [
            {
              wrong: "Why you are late today?",
              right: "Why are you late today?",
              note: {
                bn: "wh-এর পরে ক্রম — be-verb + কর্তা: Why are you...?",
                en: "After the wh-word the order is — be-verb + subject: Why are you...?",
                hi: "wh-शब्द के बाद क्रम — be-verb + कर्ता: Why are you...?",
              },
            },
            {
              wrong: "What means this word?",
              right: "What does this word mean?",
              note: {
                bn: "ক্লাসরুমের সবচেয়ে চেনা ভুল — 'এই শব্দের মানে কী?' ইংরেজিতে does + this word + mean; this word-ই কর্তা, তাই do-পরিবার লাগবেই।",
                en: "The most familiar classroom mistake — English takes does + this word + mean; this word is itself the subject, so the do-family is compulsory.",
                hi: "कक्षा की सबसे जानी-पहचानी गलती — अंग्रेज़ी लेती है does + this word + mean।",
              },
            },
            {
              wrong: "When you will come?",
              right: "When will you come?",
              note: {
                bn: "will কর্তার আগে ওঠে — wh + will + কর্তা + V1।",
                en: "'Will' steps in front of the subject — wh + will + subject + V1.",
                hi: "will कर्ता से पहले — wh + will + कर्ता + V1।",
              },
            },
            {
              wrong: "How much costs this shirt?",
              right: "How much does this shirt cost?",
              note: {
                bn: "'দাম কত?' ভেবে অনুবাদ করলে ক্রম ভাঙে; নিয়ম: how much + does + কর্তা + V1।",
                en: "Translating the Bengali thought 'dam koto?' breaks the order; the rule is how much + does + subject + V1.",
                hi: "'दाम कितना?' सोचकर अनुवाद करने पर क्रम टूटता है; नियम: how much + does + कर्ता + V1।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "wh-প্রশ্নের স্থির ক্রম — চার ধাপ",
            en: "The fixed order of wh-questions — four steps",
            hi: "wh-प्रश्न का स्थिर क्रम — चार कदम",
          },
          body: {
            bn: "wh-প্রশ্নের স্থির ক্রম চার ধাপের: wh-শব্দ → auxiliary (do/does/did বা be/modal) → কর্তা → মূল ক্রিয়া। Where did you go? — where (১) + did (২) + you (৩) + go (৪)। What do you want? Why is she crying? When will they arrive? এই ক্রম কখনো ভাঙে না। বাংলা ভাষার অভ্যাস প্রশ্ন-শব্দের পরেই কর্তাকে বসিয়ে দিতে চায় ('What you want?'-এর মতো), আর সেটাই সবচেয়ে পরিচিত ভুল। ছোট করে মনে রাখুন: wh-এর পরে কর্তা নয়, আগে auxiliary। আরেকটা ফাঁদ: অতীতের প্রশ্নে did বসলে মূল ক্রিয়া V1-এ ফিরে যায় — 'Where you went?' ভুল দুই জায়গায় (কোনো did নেই, আবার V2 আছে); ঠিক হবে Where did you go? did-এর ভেতরেই অতীত আছে, went-এর দরকার নেই।",
            en: "The fixed order of a wh-question has four steps: wh-word → auxiliary (do/does/did or be/modal) → subject → main verb. Where did you go? — where (1) + did (2) + you (3) + go (4). What do you want? Why is she crying? When will they arrive? This order never breaks. The Bengali habit pushes the subject right after the question word ('What you want?'), and that is exactly the most common mistake. Remember it in short: after the wh-word comes the auxiliary, not the subject. One more trap: in a past question did makes the main verb return to V1 — 'Where you went?' is wrong twice (no did, and a V2 form); the right form is Where did you go? The past is already inside did; went is not needed.",
            hi: "wh-प्रश्न का नियत क्रम चार कदम का है: wh-शब्द → auxiliary (do/does/did या be/modal) → कर्ता → मूल क्रिया। Where did you go? — where (1) + did (2) + you (3) + go (4)। यह क्रम कभी नहीं टूटता। बांग्ला की आदत प्रश्न-शब्द के ठीक बाद कर्ता बिठा देती है ('What you want?'), और यही सबसे कॉमन गलती है। छोटा सूत्र: wh-शब्द के बाद कर्ता नहीं, पहले auxiliary। एक और जाल: अतीत के प्रश्न में did के साथ मूल क्रिया V1 में लौटेगी — 'Where you went?' दो जगह गलत (did नहीं, और V2 है); सही रूप Where did you go? अतीत did के भीतर ही है, went की ज़रूरत नहीं।",
          },
          examples: [
            {
              wrong: "What you are doing?",
              right: "What are you doing?",
              note: {
                bn: "wh-এর পরে কর্তা নয়, আগে auxiliary — are কর্তার সামনে উঠবে।",
                en: "After the wh-word comes the auxiliary, not the subject — are steps in front of you.",
                hi: "wh-शब्द के बाद कर्ता नहीं, पहले auxiliary — are कर्ता के आगे।",
              },
            },
            {
              wrong: "Where you went last night?",
              right: "Where did you go last night?",
              note: {
                bn: "অতীতের wh-প্রশ্ন: did যোগ করুন, কর্তা পেছনে সরান, ক্রিয়া V1 — did + you + go।",
                en: "For a past wh-question: add did, move the subject back, keep the verb V1 — did + you + go.",
                hi: "अतीत के wh-प्रश्न में: did जोड़ें, कर्ता पीछे सरकाएँ, क्रिया V1 — did + you + go।",
              },
            },
            {
              wrong: "Why she is crying?",
              right: "Why is she crying?",
              note: {
                bn: "is কর্তার সামনে — wh + is + she + crying।",
                en: "'Is' comes before the subject — wh + is + she + crying.",
                hi: "is कर्ता से पहले — wh + is + she + crying।",
              },
            },
            {
              wrong: "How you did this?",
              right: "How did you do this?",
              note: {
                bn: "did কর্তার আগে, আর মূল ক্রিয়া do V1-এ — How did you do...?",
                en: "'Did' comes before the subject and the main verb do stays V1 — How did you do...?",
                hi: "did कर्ता से पहले, मूल क्रिया do V1 में — How did you do...?",
              },
            },
            {
              wrong: "Who did call you last night?",
              right: "Who called you last night?",
              note: {
                bn: "'কে ফোন করেছিল?'-এ who নিজেই কর্তা — কর্তা-who-এর সঙ্গে do লাগে না; কিন্তু 'তুমি কাকে ফোন করেছ?' হলে Whom did you call? — do ফেরত আসবে।",
                en: "In 'Who called you?' the word who is itself the subject, so no do joins a subject-who; but for 'Whom did you call?' (you called whom) do comes back.",
                hi: "'Who called you?' में who स्वयं कर्ता है, इसलिए do नहीं आता; पर 'Whom did you call?' में do वापस आता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "যেখানে do লাগে না — be-verb, modal, auxiliary",
            en: "Where do is not needed — be-verbs, modals, auxiliaries",
            hi: "जहाँ do नहीं लगता — be-verb, modal, auxiliary",
          },
          body: {
            bn: "সব প্রশ্নে do/does/did লাগে না। বাক্যে আগে থেকে be-verb (am/is/are/was/were), modal (can/will/shall/should/must) বা auxiliary (have/has) থাকলে ওই শব্দটাই কর্তার সামনে উল্টে আসে, do-এর জায়গাই থাকে না: You are ready. → Are you ready? He is your brother. → Is he your brother? She can swim. → Can she swim? They will come. → Will they come? wh-প্রশ্নেও একই নিয়ম — wh + be/modal + কর্তা: What are you doing? Where is the bus? Why is he angry? When will you call? এখানেই আসে সবচেয়ে চেনা ভুলটা: 'What you doing?' — বাক্যে be-verb-ই নেই! ঠিক হবে What are you doing? মনে রাখুন: doing শুনলেই মনে করুন, doing-এর সামনে am/is/are বাধ্যতামূলক। আর do-এর সঙ্গে modal কখনো জোড়া দেবেন না — Do you can swim? ভুল; Can you swim? ঠিক।",
            en: "Not every question needs do/does/did. If the sentence already has a be-verb (am/is/are/was/were), a modal (can/will/shall/should/must) or an auxiliary (have/has), that word itself flips in front of the subject and do has no seat: You are ready. → Are you ready? He is your brother. → Is he your brother? She can swim. → Can she swim? They will come. → Will they come? The same rule holds in wh-questions — wh + be/modal + subject: What are you doing? Where is the bus? Why is he angry? When will you call? This is where the most familiar mistake lives: 'What you doing?' — the sentence has no be-verb at all! The right form is What are you doing? Remember: the moment you hear doing, an am/is/are before it is compulsory. And never pair do with a modal — 'Do you can swim?' is wrong; Can you swim? is right.",
            hi: "हर प्रश्न में do/does/did नहीं लगता। वाक्य में पहले से be-verb (am/is/are/was/were), modal (can/will/shall/should/must) या auxiliary (have/has) हो तो वही शब्द कर्ता के सामने पलट जाता है और do की कोई जगह नहीं रहती: You are ready. → Are you ready? She can swim. → Can she swim? They will come. → Will they come? wh-प्रश्नों में भी वही नियम — wh + be/modal + कर्ता: What are you doing? Where is the bus? यहीं सबसे जानी-पहचानी गलती रहती है: 'What you doing?' — वाक्य में be-verb ही नहीं! सही रूप What are you doing? याद रखें: doing सुनते ही उसके पहले am/is/are अनिवार्य। और do को modal से कभी न जोड़ें — 'Do you can swim?' गलत; Can you swim? सही।",
          },
          examples: [
            {
              wrong: "What you doing?",
              right: "What are you doing?",
              note: {
                bn: "চ্যাটে সবচেয়ে ঘন ঘন দেখা ভুল — doing-এর আগে am/is/are ছাড়া বাক্য ইংরেজিতে দাঁড়ায় না।",
                en: "The most frequent chat mistake — English cannot stand a 'doing' without am/is/are before it.",
                hi: "चैट की सबसे आम गलती — doing से पहले am/is/are के बिना वाक्य खड़ा नहीं होता।",
              },
            },
            {
              wrong: "Do you can swim?",
              right: "Can you swim?",
              note: {
                bn: "can-ই প্রশ্ন বানানোর যন্ত্র — do-এর সঙ্গে modal জোড়া দেওয়া যায় না।",
                en: "'Can' is itself the question-maker — a modal never pairs with do.",
                hi: "can स्वयं प्रश्न-निर्माता है — modal के साथ do नहीं जुड़ता।",
              },
            },
            {
              wrong: "Does he is angry?",
              right: "Is he angry?",
              note: {
                bn: "be-verb থাকলে do ঢোকার জায়গাই নেই — is-ই উল্টে সামনে।",
                en: "When a be-verb is there, do has no seat — is itself flips to the front.",
                hi: "be-verb होने पर do की कोई जगह नहीं — is स्वयं पलटकर आगे।",
              },
            },
            {
              wrong: "When the train will arrive?",
              right: "When will the train arrive?",
              note: {
                bn: "will কর্তা (the train)-এর আগে ওঠবে — wh + will + কর্তা + V1।",
                en: "'Will' steps in front of the subject (the train) — wh + will + subject + V1.",
                hi: "will कर्ता (the train) से पहले जाएगा — wh + will + कर्ता + V1।",
              },
            },
            {
              wrong: "Where you are going now?",
              right: "Where are you going now?",
              note: {
                bn: "একই ভুলের আরেক চেহারা — wh-এর পরে কর্তা নয়, be-verb।",
                en: "Another face of the same mistake — after the wh-word comes the be-verb, not the subject.",
                hi: "उसी गलती का एक और चेहरा — wh के बाद कर्ता नहीं, be-verb।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট উত্তর — Yes, I do / No, I don't",
            en: "Short answers — Yes, I do / No, I don't",
            hi: "छोटे उत्तर — Yes, I do / No, I don't",
          },
          body: {
            bn: "প্রশ্নের উত্তরে পুরো বাক্য বলা লাগে না — ছোট উত্তরই স্বাভাবিক: Yes, I do. / No, I don't. / Yes, she is. / No, he didn't. / Yes, I can. সূত্র: Yes/No + কর্তা + প্রশ্নের auxiliary-টাই ফেরত। Do you like tea? → Yes, I do (like নয়!)। Is Rahim your friend? → Yes, he is। Did you watch the match? → Yes, I did। Can she drive? → No, she can't। বাংলায় আমরা বলি 'হ্যাঁ, খেয়েছি' — মূল ক্রিয়া ফিরে আসে; ইংরেজিতে auxiliary-ই ফেরে, মূল ক্রিয়া থাকে না: 'Yes, I ate' বললেও হয়, কিন্তু Yes, I did সবচেয়ে স্বাভাবিক। দুটো ফাঁদ: (১) ছোট হ্যাঁ-উত্তরে contraction নয় — 'Yes, he's' ভুল, Yes, he is ঠিক; (২) auxiliary মিলাতে হবে — Are they at home? প্রশ্নের উত্তর Yes, they are, Yes, they do নয়।",
            en: "A full sentence is not needed to answer — the short answer is natural: Yes, I do. / No, I don't. / Yes, she is. / No, he didn't. / Yes, I can. The formula: Yes/No + subject + the very auxiliary the question used. Do you like tea? → Yes, I do (not 'like'). Is Rahim your friend? → Yes, he is. Did you watch the match? → Yes, I did. Can she drive? → No, she can't. In Bengali we answer 'hyan, kheyechhi' — the main verb comes back; in English the auxiliary comes back, the main verb stays out: 'Yes, I ate' is possible, but Yes, I did is the most natural. Two traps: (1) no contraction in a short yes-answer — 'Yes, he's' is wrong, Yes, he is is right; (2) the auxiliary must match — for Are they at home? the answer is Yes, they are, never Yes, they do.",
            hi: "उत्तर देने के लिए पूरा वाक्य नहीं चाहिए — छोटा उत्तर ही स्वाभाविक है: Yes, I do. / No, I don't. / Yes, she is. / Yes, I can. सूत्र: Yes/No + कर्ता + प्रश्न वाला वही auxiliary। Do you like tea? → Yes, I do ('like' नहीं)। Is Rahim your friend? → Yes, he is। Did you watch the match? → Yes, I did। Can she drive? → No, she can't। बांग्ला में हम कहते हैं 'हाँ, খেয়েছি' — मूल क्रिया लौटती है; अंग्रेज़ी में auxiliary लौटता है, मूल क्रिया नहीं: 'Yes, I ate' संभव है, पर Yes, I did सबसे स्वाभाविक। दो जाल: (1) छोटे हाँ-उत्तर में contraction नहीं — 'Yes, he's' गलत, Yes, he is सही; (2) auxiliary मिलाना होगा — Are they at home? का उत्तर Yes, they are, कभी Yes, they do नहीं।",
          },
          examples: [
            {
              wrong: "Do you like tea? — Yes, I like.",
              right: "Do you like tea? — Yes, I do.",
              note: {
                bn: "ছোট উত্তরে auxiliary-ই ফেরে — Do-প্রশ্নের উত্তর Yes, I do; 'হ্যাঁ, পছন্দ করি'-র অনুবাদ হিসেবে Yes, I like বলা হয় না।",
                en: "In short answers the auxiliary returns — a Do-question takes Yes, I do; 'Yes, I like' is a Bengali translation, not English.",
                hi: "छोटे उत्तर में auxiliary ही लौटता है — Do-प्रश्न का उत्तर Yes, I do।",
              },
            },
            {
              wrong: "Is Rahim your cousin? — Yes, he's.",
              right: "Is Rahim your cousin? — Yes, he is.",
              note: {
                bn: "ছোট হ্যাঁ-উত্তরে contraction চলে না — Yes, he's ভুল, Yes, he is ঠিক; contraction শুধু লম্বা বাক্যে চলে।",
                en: "A short yes-answer takes no contraction — 'Yes, he's' is wrong, Yes, he is is right; contractions belong to longer sentences.",
                hi: "छोटे हाँ-उत्तर में contraction नहीं — 'Yes, he's' गलत, Yes, he is सही।",
              },
            },
            {
              wrong: "Did you watch the match? — Yes, I watched.",
              right: "Did you watch the match? — Yes, I did.",
              note: {
                bn: "did-প্রশ্নের উত্তর did — অতীতের প্রশ্ন অতীতের auxiliary-তেই উত্তর পায়; মূল ক্রিয়া দোহরাতে হয় না।",
                en: "A did-question is answered with did — a past question takes the past auxiliary; no need to repeat the main verb.",
                hi: "did-प्रश्न का उत्तर did ही है — मूल क्रिया दोहराने की ज़रूरत नहीं।",
              },
            },
            {
              wrong: "Are they at home? — Yes, they do.",
              right: "Are they at home? — Yes, they are.",
              note: {
                bn: "প্রশ্নের auxiliary আর উত্তরের auxiliary মিলবে — Are-প্রশ্নে do নয়, are।",
                en: "The auxiliary of the question and the answer must match — an Are-question takes are, not do.",
                hi: "प्रश्न और उत्तर का auxiliary मिलेगा — Are-प्रश्न में do नहीं, are।",
              },
            },
            {
              wrong: "Can she drive a car? — No, she don't.",
              right: "Can she drive a car? — No, she can't.",
              note: {
                bn: "can-প্রশ্নের নেগেটিভ উত্তর can't — don't এখানে অচেনা; উত্তরও প্রশ্নের auxiliary-ই ধারণ করে।",
                en: "The negative answer to a can-question is can't — 'don't' is a stranger here; the answer borrows the question's auxiliary.",
                hi: "can-प्रश्न का नकारात्मक उत्तर can't है — 'don't' यहाँ अनजान है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল — প্রশ্নের জগতে",
            en: "Common mistakes by Bengali speakers — in the world of questions",
            hi: "बांग्लाभाषी छात्रों की कॉमन गलतियाँ — प्रश्नों की दुनिया में",
          },
          body: {
            bn: "এই পাঠের ভুলগুলোর শিকড় এক — বাংলায় 'কি' আর গলার স্বর প্রশ্ন বানায়, শব্দের ক্রম নয়। ফলে পাঁচটা পরিচিত ভুল পরিবার: (১) wh-এর পরে কর্তা বসিয়ে দেওয়া — What you want? Where you went? What she is doing?; (২) did/does-এর পরে V2 বা s রেখে দেওয়া — Where did she went? Does he plays?; (৩) সাধারণ বাক্য লিখে শুধু গলার স্বর ওঠার কল্পনা করা — You are coming? She knows you?; (৪) do-এর সঙ্গে be-verb বা modal জোড়া — Do you can swim? Does he is angry?; (৫) ছোট উত্তরে মূল ক্রিয়া বা ভুল auxiliary — Yes, I like / Yes, they do (প্রশ্ন যেখানে Are they...?)। চিকিৎসা একটাই: প্রশ্ন লেখার আগে তিনটা প্রশ্ন করুন — বাক্যে be-verb বা modal আছে? থাকলে ওটাই সামনে; না থাকলে do/does/did আনুন; তারপর কর্তা, তারপর V1।",
            en: "The roots of these mistakes are the same — in Bengali 'ki' and the rising tone make the question, not the word order. Hence five familiar error families: (1) putting the subject right after the wh-word — What you want? Where you went? What she is doing?; (2) keeping V2 or s after did/does — Where did she went? Does he plays?; (3) writing a plain statement and only imagining the rising tone — You are coming? She knows you?; (4) pairing do with a be-verb or modal — Do you can swim? Does he is angry?; (5) repeating the main verb or using a wrong auxiliary in short answers — Yes, I like / Yes, they do (for an Are they...? question). The cure is one: before writing a question, ask three things — does the sentence have a be-verb or modal? If yes, that word goes first; if not, take do/does/did; then the subject, then V1.",
            hi: "इन गलतियों की जड़ एक है — बांग्ला में 'कि' और उठती आवाज़ प्रश्न बनाती है, शब्द-क्रम नहीं। इसलिए पाँच परिचित गलती-परिवार: (1) wh-शब्द के ठीक बाद कर्ता बिठाना — What you want? Where you went?; (2) did/does के बाद V2 या s रखना — Where did she went? Does he plays?; (3) साधारण वाक्य लिखकर केवल उठती आवाज़ की कल्पना करना — You are coming?; (4) do को be-verb या modal से जोड़ना — Do you can swim?; (5) छोटे उत्तर में मूल क्रिया या गलत auxiliary — Yes, I like / Yes, they do। इलाज एक ही: प्रश्न लिखने से पहले तीन सवाल — वाक्य में be-verb या modal है? तो वही आगे; नहीं तो do/does/did; फिर कर्ता, फिर V1।",
          },
          examples: [
            {
              wrong: "What you want?",
              right: "What do you want?",
              note: {
                bn: "wh-এর পরে do — কর্তা তারপর; পুরনো অভ্যাসের বাঁধ ভাঙুন।",
                en: "After the wh-word comes do — the subject follows; break the old habit.",
                hi: "wh-शब्द के बाद do — कर्ता बाद में; पुरानी आदत तोड़ें।",
              },
            },
            {
              wrong: "Where did she went?",
              right: "Where did she go?",
              note: {
                bn: "did-এর ভেতরে অতীত আছে — went বাড়তি; ক্রিয়া V1-এ থাকবে।",
                en: "The past is already inside did — went is extra; the verb stays V1.",
                hi: "अतीत did के भीतर है — went अतिरिक्त; क्रिया V1।",
              },
            },
            {
              wrong: "You are hungry?",
              right: "Are you hungry?",
              note: {
                bn: "লেখায় গলার স্বর শোনা যায় না — ক্রমই প্রশ্নের একমাত্র চিহ্ন।",
                en: "Writing cannot show a rising tone — the order is the only question-mark.",
                hi: "लिखत समय आवाज़ सुनाई नहीं देती — क्रम ही प्रश्न की एकमात्र निशानी।",
              },
            },
            {
              wrong: "Does he plays football?",
              right: "Does he play football?",
              note: {
                bn: "s একবারে এক শব্দের — does-এর গায়ে চলে গেছে, plays-এ আর নেই।",
                en: "The s belongs to one word at a time — it has moved onto does, so not on plays.",
                hi: "s एक समय में एक ही शब्द का — does पर चला गया, plays पर नहीं।",
              },
            },
            {
              wrong: "Why he didn't came?",
              right: "Why didn't he come?",
              note: {
                bn: "নেগেটিভ wh-প্রশ্ন: wh + didn't + কর্তা + V1 — didn't কর্তার আগে, আর came নয় come।",
                en: "Negative wh-question: wh + didn't + subject + V1 — didn't before the subject, and come, not came.",
                hi: "नकारात्मक wh-प्रश्न: wh + didn't + कर्ता + V1 — didn't कर्ता से पहले, came नहीं come।",
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
            bn: "সকালবেলা নাদিয়া বন্ধু রাকিবকে ফোন করে। 'Where are you? Are you still at home?' রাকিব ঘুম ভাঙা গলায় বলে, 'Yes, I am. Why are you calling so early?' নাদিয়া হতভম্ব, 'Did you forget? Today is our class trip!' রাকিব লাফিয়ে ওঠে, 'Oh no! What time does the bus leave?' 'At eight. Can you reach the school by half past seven?' 'Yes, I can. Wait for me at the gate!' খেয়াল করুন — Where are you? (be-verb উল্টেছে), Yes, I am (ছোট উত্তরে be-verb ফেরে), Why are you calling? (wh + be + কর্তা), Did you forget? (did + V1), What time does the bus leave? (wh + does + কর্তা + V1), Can you reach...? Yes, I can (modal প্রশ্ন, modal উত্তর)। এক নজরে — yes/no প্রশ্ন: Do/Does/Did + কর্তা + V1; be-verb বা modal থাকলে ওটাই কর্তার সামনে; wh-প্রশ্ন: wh + auxiliary + কর্তা + V1; ছোট উত্তর: Yes/No + কর্তা + সেই auxiliary। 'কি' লাগবে না — ক্রমই প্রশ্ন।",
            en: "Early in the morning Nadia phones her friend Rakib. 'Where are you? Are you still at home?' Rakib answers in a sleepy voice, 'Yes, I am. Why are you calling so early?' Nadia is stunned, 'Did you forget? Today is our class trip!' Rakib jumps up, 'Oh no! What time does the bus leave?' 'At eight. Can you reach the school by half past seven?' 'Yes, I can. Wait for me at the gate!' Notice — Where are you? (the be-verb has flipped), Yes, I am (the be-verb returns in the short answer), Why are you calling? (wh + be + subject), Did you forget? (did + V1), What time does the bus leave? (wh + does + subject + V1), Can you reach...? Yes, I can (a modal question, a modal answer). In a nutshell — yes/no questions: Do/Does/Did + subject + V1; with a be-verb or modal, that word goes in front of the subject; wh-questions: wh + auxiliary + subject + V1; short answers: Yes/No + subject + that same auxiliary. No 'ki' is needed — the order itself is the question.",
            hi: "सुबह-सुबह नादिया अपने दोस्त राकिब को फ़ोन करती है। 'Where are you? Are you still at home?' राकिब नींद भरी आवाज़ में कहता है, 'Yes, I am. Why are you calling so early?' नादिया चौंकती है, 'Did you forget? Today is our class trip!' राकिब छलाँग मारता है, 'Oh no! What time does the bus leave?' 'At eight. Can you reach the school by half past seven?' 'Yes, I can. Wait for me at the gate!' ध्यान दें — Where are you? (be-verb पलटा), Yes, I am (छोटे उत्तर में be-verb लौटा), Did you forget? (did + V1), What time does the bus leave? (wh + does + कर्ता + V1), Can you reach...? Yes, I can (modal प्रश्न, modal उत्तर)। एक नज़र में — yes/no प्रश्न: Do/Does/Did + कर्ता + V1; be-verb या modal हो तो वही कर्ता के सामने; wh-प्रश्न: wh + auxiliary + कर्ता + V1; छोटा उत्तर: Yes/No + कर्ता + वही auxiliary। 'कि' की ज़रूरत नहीं — क्रम ही प्रश्न है।",
          },
          examples: [
            {
              wrong: "Where you are?",
              right: "Where are you?",
              note: {
                bn: "প্রশ্নে be-verb কর্তার সামনে — are + you।",
                en: "In questions the be-verb stands before the subject — are + you.",
                hi: "प्रश्न में be-verb कर्ता से पहले — are + you।",
              },
            },
            {
              wrong: "What time the bus leaves?",
              right: "What time does the bus leave?",
              note: {
                bn: "What time-ও wh-পরিবারের — does + কর্তা + V1 লাগবেই।",
                en: "'What time' belongs to the wh-family — it still takes does + subject + V1.",
                hi: "What time भी wh-परिवार में है — does + कर्ता + V1 लगेगा।",
              },
            },
            {
              wrong: "Can you to come with us?",
              right: "Can you come with us?",
              note: {
                bn: "modal-এর পরে to নয় — বাংলা 'পারবে কি আসতে?'-র ছায়া।",
                en: "No to after a modal — the shadow of Bengali 'parbe ki aaste?'",
                hi: "modal के बाद to नहीं — बांग्ला 'পারবे কি আসতে?' की छाया।",
              },
            },
            {
              wrong: "Did you forgot the trip?",
              right: "Did you forget the trip?",
              note: {
                bn: "did + V1 — forgot নয়, forget; অতীতের চিহ্ন একবারই।",
                en: "did + V1 — not forgot, forget; the past marker appears only once.",
                hi: "did + V1 — forgot नहीं, forget।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "প্রশ্ন লেখার আগে বাক্যে be-verb বা modal আছে কি না দেখুন — থাকলে ওটাই কর্তার সামনে ওঠে; না থাকলে do/does/did আনুন।",
          en: "Before writing a question, check for a be-verb or modal — if there is one, it goes in front of the subject; if not, bring in do/does/did.",
          hi: "प्रश्न लिखने से पहले वाक्य में be-verb या modal देखें — हो तो वही कर्ता के सामने; नहीं तो do/does/did लाएँ।",
        },
        {
          bn: "wh-শব্দ সবসময় প্রথম পদ — wh + auxiliary + কর্তা + V1, চার ধাপ মনে রাখুন।",
          en: "The wh-word is always the first word — wh + auxiliary + subject + V1; remember the four steps.",
          hi: "wh-शब्द हमेशा पहला पद — wh + auxiliary + कर्ता + V1, चार कदम रटें।",
        },
        {
          bn: "did/does বসলে মূল ক্রিয়া V1 — অতীতের চিহ্ন বা s একবারে এক শব্দের সম্পত্তি।",
          en: "When did/does is there, the main verb stays V1 — the past marker or the s belongs to one word at a time.",
          hi: "did/does बैठते ही मूल क्रिया V1 — अतीत या s एक समय में एक शब्द का।",
        },
        {
          bn: "'What you doing?' চ্যাটে চলে যায়, কিন্তু ভুল — doing শুনলেই am/is/are বসান।",
          en: "'What you doing?' passes in chat, but it is wrong — the moment you hear doing, place am/is/are before it.",
          hi: "'What you doing?' चैट में चल जाता है, पर गलत है — doing सुनते ही am/is/are बिठाएँ।",
        },
        {
          bn: "ছোট উত্তরে auxiliary-ই ফেরে — Yes, I do / Yes, I am / Yes, I did; মূল ক্রিয়া নয়।",
          en: "In short answers the auxiliary returns — Yes, I do / Yes, I am / Yes, I did; not the main verb.",
          hi: "छोटे उत्तर में auxiliary ही लौटता है — Yes, I do / Yes, I am / Yes, I did; मूल क्रिया नहीं।",
        },
        {
          bn: "ছোট হ্যাঁ-উত্তরে contraction নয় — Yes, he is ঠিক, Yes, he's ভুল।",
          en: "No contraction in a short yes-answer — Yes, he is is right, 'Yes, he's' is wrong.",
          hi: "छोटे हाँ-उत्तर में contraction नहीं — Yes, he is सही, 'Yes, he's' गलत।",
        },
        {
          bn: "প্রশ্নের auxiliary আর উত্তরের auxiliary মিলবে — Are they...? → Yes, they are।",
          en: "The auxiliary of the question and of the answer must match — Are they...? takes Yes, they are.",
          hi: "प्रश्न और उत्तर का auxiliary मिलेगा — Are they...? → Yes, they are।",
        },
        {
          bn: "নেগেটিভ প্রশ্ন: Why didn't you come? — didn't + কর্তা + V1; didn't came কখনো নয়।",
          en: "Negative question: Why didn't you come? — didn't + subject + V1; never 'didn't came'.",
          hi: "नकारात्मक प्रश्न: Why didn't you come? — didn't + कर्ता + V1; 'didn't came' कभी नहीं।",
        },
        {
          bn: "What time / What colour-জাতীয় প্রশ্নেও do/does লাগে — What time does the shop open?",
          en: "Questions like What time / What colour still take do/does — What time does the shop open?",
          hi: "What time / What colour जैसे प्रश्नों में भी do/does लगता है — What time does the shop open?",
        },
        {
          bn: "রোজ নিজেকে ৫টা প্রশ্ন করুন — What am I doing? Where do I keep my keys? — ক্রমটা মুখে বসে যাবে।",
          en: "Ask yourself five questions every day — What am I doing? Where do I keep my keys? — and the order settles on your tongue.",
          hi: "रोज़ खुद से 5 प्रश्न पूछें — What am I doing? Where do I keep my keys? — क्रम ज़ुबान पर बैठ जाएगा।",
        },
      ],
      quiz: [
        {
          question: "___ you like mangoes?",
          options: ["Do", "Does", "Are", "Is"],
          answer: 0,
          explanation: {
            bn: "you = I/you/we/they শ্রেণির কর্তা, like সাধারণ ক্রিয়া → প্রশ্নে Do।",
            en: "'You' belongs to the I/you/we/they group and like is an ordinary verb, so Do in the question.",
            hi: "'you' I/you/we/they वर्ग का कर्ता है, like साधारण क्रिया → प्रश्न में Do।",
          },
        },
        {
          question: "Where ___ you go last week?",
          options: ["do", "did", "does", "were"],
          answer: 1,
          explanation: {
            bn: "last week = অতীত → did; did-এর পরে V1: go।",
            en: "'Last week' is the past — did; after did the verb stays go.",
            hi: "'last week' = अतीत → did; did के बाद V1: go।",
          },
        },
        {
          question: "What ___ she doing now?",
          options: ["is", "does", "do", "are"],
          answer: 0,
          explanation: {
            bn: "doing-এর আগে be-verb বাধ্যতামূলক — she → is: What is she doing?",
            en: "A be-verb must stand before doing — she takes is: What is she doing?",
            hi: "doing से पहले be-verb अनिवार्य — she → is: What is she doing?",
          },
        },
        {
          question: "___ your father work in a bank?",
          options: ["Do", "Does", "Is", "Has"],
          answer: 1,
          explanation: {
            bn: "your father = he → Does; work সাধারণ ক্রিয়া → do-পরিবার।",
            en: "'Your father' = he, so Does; work is an ordinary verb — the do-family.",
            hi: "'your father' = he → Does; work साधारण क्रिया → do-परिवार।",
          },
        },
        {
          question: "Why ___ the baby crying?",
          options: ["is", "are", "does", "do"],
          answer: 0,
          explanation: {
            bn: "the baby = একবচন → is crying; wh + is + কর্তা।",
            en: "'The baby' is singular — is crying; wh + is + subject.",
            hi: "'the baby' एकवचन → is crying; wh + is + कर्ता।",
          },
        },
        {
          question: "Which question is correct?",
          options: [
            "Where you went?",
            "Where did you go?",
            "Where you did go?",
            "Where went you?",
          ],
          answer: 1,
          explanation: {
            bn: "wh + did + কর্তা + V1 — Where did you go?; বাকিগুলো ক্রম ভাঙা।",
            en: "wh + did + subject + V1 — Where did you go?; the others break the order.",
            hi: "wh + did + कर्ता + V1 — Where did you go?; बाकी क्रम तोड़ते हैं।",
          },
        },
        {
          question: "\"Do you play chess?\" — which short answer is correct?",
          options: ["Yes, I play.", "Yes, I do.", "Yes, I am.", "Yes, I like."],
          answer: 1,
          explanation: {
            bn: "Do-প্রশ্নের ছোট উত্তর Yes, I do — মূল ক্রিয়া ফেরে না।",
            en: "The short answer to a Do-question is Yes, I do — the main verb does not return.",
            hi: "Do-प्रश्न का छोटा उत्तर Yes, I do — मूल क्रिया नहीं लौटती।",
          },
        },
        {
          question: "Which question is correct?",
          options: [
            "She can drive?",
            "Can she drive?",
            "Does she can drive?",
            "Can she drives?",
          ],
          answer: 1,
          explanation: {
            bn: "modal প্রশ্নে modal-ই সামনে — Can she drive?; do বা V2 এখানে আসে না।",
            en: "In a modal question the modal itself comes first — Can she drive?; neither do nor V2 fits here.",
            hi: "modal प्रश्न में modal स्वयं सामने — Can she drive?; do या V2 यहाँ नहीं आता।",
          },
        },
        {
          question: "___ they at home now?",
          options: ["Is", "Are", "Do", "Does"],
          answer: 1,
          explanation: {
            bn: "they + be-verb → Are; প্রশ্নে are কর্তার সামনে উল্টে যায়।",
            en: "'They' takes the be-verb are; in the question are flips in front of the subject.",
            hi: "'they' के साथ be-verb are; प्रश्न में are कर्ता के सामने पलटता है।",
          },
        },
        {
          question: "He went to Dhaka yesterday. — which question asks about the place?",
          options: [
            "Where he went yesterday?",
            "Where did he went yesterday?",
            "Where did he go yesterday?",
            "Where he did go yesterday?",
          ],
          answer: 2,
          explanation: {
            bn: "অতীতের wh-প্রশ্ন: Where did he go? — did + he + go; went বাদ।",
            en: "Past wh-question: Where did he go? — did + he + go; went drops out.",
            hi: "अतीत का wh-प्रश्न: Where did he go? — did + he + go; went हटता है।",
          },
        },
      ],
    },
  },
  /* ── 4. Prepositions in/on/at (Beginner) ───────────────────────────── */
  {
    topic: "Prepositions (in/on/at)",
    level: "beginner",
    title: "Prepositions in/on/at (Beginner)",
    unit: 4,
    data: {
      title: {
        bn: "প্রিপজিশন in/on/at (বিগিনার)",
        en: "Prepositions in/on/at (Beginner)",
        hi: "प्रेपोज़िशन in/on/at (बिगिनर)",
      },
      intro: {
        bn: "এই পাঠ লার্নিং পথের চতুর্থ ব্যাকরণ পাঠ — আগের পাঠগুলো, বিশেষ করে 'Question Formation', শেষ করে তবেই শুরু করুন। বাংলায় জায়গা আর সময় বোঝাতে একটাই জাদুকরী সাফল্য '-ে/-তে': ঘরে, টেবিলে, ঢাকায়, সকালে, সোমবারে — সব এক সূত্রে। কিন্তু ইংরেজিতে সেই এক সূত্র তিনটা শব্দে ভাগ হয়ে গেছে: in, on, at — আর সরাসরি অনুবাদ করলেই ভুল হয়। তাই বাঙালি শিক্ষার্থীরা লিখে ফেলেন 'I am in home', 'I will come in Monday', 'at the morning'। এই পাঠে শিখব — in মানে ভেতরে ঘেরা জায়গা ও মাস-বছর, on মানে ওপরের তল ও দিন-তারিখ, at মানে নির্দিষ্ট বিন্দু ও ঘড়ার সময় — আর যেসব জুটি (at home, in Dhaka, on Monday, at night) মুখস্থ করতেই হবে।",
        en: "This is the fourth grammar lesson on the learning path — finish the earlier lessons, especially 'Question Formation', before you start. In Bengali one magical suffix '-e/-te' does every job of place and time: ghore (in the house), tebile (on the table), Dhakay (in Dhaka), sokale (in the morning), Som bare (on Monday) — all by one rule. In English that single suffix has split into three words: in, on, at — and translating it directly produces mistakes. So Bengali speakers write 'I am in home', 'I will come in Monday', 'at the morning'. In this lesson we learn — in for enclosed spaces and months/years, on for surfaces and days/dates, at for points and clock times — and the fixed pairs (at home, in Dhaka, on Monday, at night) that simply have to be memorised.",
        hi: "यह लर्निंग पथ का चौथा व्याकरण पाठ है — पहले के पाठ, विशेषकर 'Question Formation', पूरे करके ही शुरू करें। बांग्ला में स्थान और समय का हर काम एक ही जादुई प्रत्यय '-এ/-তে' करता है: घरे, टेबिले, ढाकाय, सोकाले, सोमबारे — सब एक ही नियम से। अंग्रेज़ी में वही एक प्रत्यय तीन शब्दों में बँट गया: in, on, at — और सीधा अनुवाद करने पर गलतियाँ बनती हैं। इसलिए बांग्लाभाषी छात्र लिख देते हैं: 'I am in home', 'I will come in Monday', 'at the morning'। इस पाठ में हम सीखेंगे — in घिरे हुए स्थान और महीने-साल के लिए, on सतह और दिन-तारीख के लिए, at बिन्दु और घड़ी के समय के लिए — और वे स्थिर जोड़े (at home, in Dhaka, on Monday, at night) जो रटने ही होते हैं।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — তিন শব্দ, তিন ভূমি",
            en: "When to use them — three words, three grounds",
            hi: "कब इस्तेमाल करें — तीन शब्द, तीन भूमि",
          },
          body: {
            bn: "in, on, at — তিনটা ছোট শব্দ, কিন্তু কাজের ভূমি তিন রকম। স্থানে: in মানে ভেতরে — চার দিক থেকে ঘেরা জায়গা (in the room, in the box, in Dhaka); on মানে ওপরের তল — কোনো কিছুর পৃষ্ঠে ছোঁয়া (on the table, on the wall); at মানে নির্দিষ্ট বিন্দু — ভেতরে-ওপরে না ভেবে ম্যাপে একটা দাগ (at the door, at the bus stop)। সময়েও একই তিন স্তর: in = বড় সময়ের ঘের (in March, in 2024, in the morning), on = নির্দিষ্ট দিন-তারিখ (on Sunday, on 16 December), at = ঘড়ার বিন্দু (at 6 o'clock)। বাংলায় আমরা একটাই সাফল্য '-ে/-তে' তিন কাজে চালাই — ঘরে, টেবিলে, সকালে, সোমবারে, দশটায়। তাই ইংরেজিতে অনুবাদ করতে গিয়ে সবখানে in চেপে বসে যায়। মনে রাখুন: বাংলার '-ে' অনুবাদ করবেন না; আগে ভাবুন — ভেতরে? ওপরের তল? নির্দিষ্ট বিন্দু?",
            en: "in, on, at — three small words, but they stand on three different grounds. In place: in means inside — a space closed on all sides (in the room, in the box, in Dhaka); on means the upper surface — touching the face of something (on the table, on the wall); at means a fixed point — not inside or on top, just a mark on the map (at the door, at the bus stop). Time works on the same three levels: in = a large wrap of time (in March, in 2024, in the morning), on = a specific day or date (on Sunday, on 16 December), at = a point on the clock (at 6 o'clock). In Bengali we run one magical suffix '-e/-te' through all these jobs — ghore, tebile, sokale, Som bare, dosh-tay. So while translating, in presses itself down everywhere. Remember: do not translate the Bengali suffix; first ask — inside? a surface? a fixed point?",
            hi: "in, on, at — तीन छोटे शब्द, पर तीन अलग भूमि पर खड़े हैं। स्थान में: in का मतलब भीतर — चारों ओर से घिरी जगह (in the room, in the box, in Dhaka); on का मतलब ऊपरी सतह — किसी चीज़ के पृष्ठ पर (on the table, on the wall); at का मतलब निश्चित बिन्दु — भीतर-ऊपर नहीं सोचना, बस नक़्शे पर एक निशान (at the door, at the bus stop)। समय में भी वही तीन स्तर: in = समय का बड़ा घेरा (in March, in 2024, in the morning), on = निश्चित दिन-तारीख (on Sunday, on 16 December), at = घड़ी का बिन्दु (at 6 o'clock)। बांग्ला में हम एक ही जादुई प्रत्यय '-এ/-তे' इन सब कामों में चलाते हैं — घरे, टेबिले, सोकाले। इसलिए अनुवाद में in हर जगह छा जाता है। याद रखें: बांग्ला प्रत्यय का अनुवाद न करें; पहले पूछें — भीतर? सतह? बिन्दु?",
          },
          examples: [
            {
              wrong: "The book is in the table.",
              right: "The book is on the table.",
              note: {
                bn: "টেবিলের ওপরের তল → on; বাংলা 'টেবিলে' শুনলে in মনে হলেও পৃষ্ঠে ছোঁয়া জিনিস on নেয়।",
                en: "The upper surface of the table takes on — although Bengali 'tebile' tempts in, a thing touching the surface takes on.",
                hi: "टेबल की ऊपरी सतह → on; 'টেবিলে' सुनकर in का मोह न करें।",
              },
            },
            {
              wrong: "I live at Dhaka.",
              right: "I live in Dhaka.",
              note: {
                bn: "শহর = বড় ঘেরা এলাকা → in; at শুধু নির্দিষ্ট বিন্দুর জন্য।",
                en: "A city is a large enclosed area — in; at is only for fixed points.",
                hi: "शहर = बड़ा घिरा क्षेत्र → in; at केवल बिन्दु के लिए।",
              },
            },
            {
              wrong: "I will come in Monday.",
              right: "I will come on Monday.",
              note: {
                bn: "বারের নাম → on; 'সোমবারে'-র '-ে' অনুবাদ করবেন না।",
                en: "Names of days take on — do not translate the '-e' of 'Som bare'.",
                hi: "बार का नाम → on; 'सोमবারे' का '-ए' अनुवाद न करें।",
              },
            },
            {
              wrong: "The class starts in 10 a.m.",
              right: "The class starts at 10 a.m.",
              note: {
                bn: "ঘড়ার বিন্দু → at; ক্লাস কখন শুরু — ঠিক ওই সময়টায়।",
                en: "A clock time takes at — the class starts at that exact point of the clock.",
                hi: "घड़ी का बिन्दु → at; कक्षा ठीक उसी समय शुरू होती है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন — বাক্যে in/on/at বসার নিয়ম",
            en: "Formation — how in/on/at sit in a sentence",
            hi: "बनावट — वाक्य में in/on/at कैसे बैठते हैं",
          },
          body: {
            bn: "in/on/at বসে স্থানের নামের ঠিক আগে, আর স্থানের নাম বসে সাধারণত ক্রিয়ার পরে: I live in Khulna. She sits on the bench. He waits at the gate. কর্তা বদলালে ক্রিয়া মিল অনুযায়ী বদলায়, কিন্তু preposition কখনো বদলায় না — I live in Sylhet, He lives in Sylhet, They lived in Sylhet। জায়গার ধরন ধরে ভাগ করুন: ঘেরা জায়গা ও বড় এলাকা → in — in the kitchen, in the box, in Dhaka, in Bangladesh, in the world; তল/পৃষ্ঠ → on — on the table, on the floor, on the wall, on the roof; বিন্দু → at — at the door, at the gate, at the bus stop, at the corner। লম্বা বাক্যেও নিয়ম এক: preposition + স্থান — বাংলার মতো স্থান-শব্দ বাক্যের শেষে '-এ' নিয়ে ঘোরানোর দরকার নেই।",
            en: "in/on/at sit right before the name of the place, and the place usually stands after the verb: I live in Khulna. She sits on the bench. He waits at the gate. When the subject changes, the verb changes with it, but the preposition never does — I live in Sylhet, He lives in Sylhet, They lived in Sylhet. Sort places by their kind: enclosed spaces and large areas take in — in the kitchen, in the box, in Dhaka, in Bangladesh, in the world; surfaces take on — on the table, on the floor, on the wall, on the roof; points take at — at the door, at the gate, at the bus stop, at the corner. The rule holds in long sentences too: preposition + place — no need to drag the place-noun around the way Bengali does with '-e'.",
            hi: "in/on/at स्थान के नाम के ठीक पहले बैठते हैं, और स्थान साधारणतः क्रिया के बाद आता है: I live in Khulna. She sits on the bench. He waits at the gate। कर्ता बदलने पर क्रिया मिलान के अनुसार बदलती है, पर preposition कभी नहीं बदलता — I live in Sylhet, He lives in Sylhet, They lived in Sylhet। स्थान को उसकी किस्म से पहचानें: घिरी जगह और बड़ा क्षेत्र → in — in the kitchen, in Dhaka, in Bangladesh; सतह → on — on the table, on the floor, on the wall; बिन्दु → at — at the door, at the gate, at the bus stop। लंबे वाक्यों में भी नियम वही: preposition + स्थान।",
          },
          examples: [
            {
              wrong: "My shoes are in the bed.",
              right: "My shoes are on the bed.",
              note: {
                bn: "বিছানার ওপরের তল → on; 'বিছানায়' শুনলে in মনে হয়, কিন্তু জিনিস বিছানার পৃষ্ঠে ছোঁয়া।",
                en: "The surface of the bed takes on — 'bichanay' tempts in, but the thing touches the surface.",
                hi: "बिस्तर की सतह → on; 'बिछानाय' सुनकर in मत सोचें।",
              },
            },
            {
              wrong: "There is a picture in the wall.",
              right: "There is a picture on the wall.",
              note: {
                bn: "দেয়ালের পৃষ্ঠে ছোঁয়া → on; 'দেয়ালে' শুনলেও ছবিটা দেয়ালের ভেতরে নয়, তলে।",
                en: "The picture touches the face of the wall — on; it is not inside the wall.",
                hi: "तस्वीर दीवार की सतह पर है → on; दीवार के भीतर नहीं।",
              },
            },
            {
              wrong: "I met her in the bus stop.",
              right: "I met her at the bus stop.",
              note: {
                bn: "বাস স্টপ = রাস্তার একটা নির্দিষ্ট বিন্দু → at।",
                en: "A bus stop is a fixed point on the road — at.",
                hi: "बस स्टॉप = सड़क का एक निश्चित बिन्दु → at।",
              },
            },
            {
              wrong: "Our school is at Mirpur.",
              right: "Our school is in Mirpur.",
              note: {
                bn: "মহল্লা/এলাকা/শহর = ঘেরা জায়গা → in; at এখানে বসে না।",
                en: "A neighbourhood, area or city is an enclosed space — in; at does not sit here.",
                hi: "मुहल्ला/क्षेत्र/शहर = घिरी जगह → in।",
              },
            },
            {
              wrong: "The keys are at the drawer.",
              right: "The keys are in the drawer.",
              note: {
                bn: "ড্রয়ারের ভেতরে ঢোকা যায় → in; চাবি ড্রয়ারের তলে ছোঁয়া নয়, ভেতরে।",
                en: "A drawer has an inside you can enter — in; the keys are not touching a surface, they are inside.",
                hi: "ड्रॉवर के भीतर जा सकते हैं → in; चाबियाँ भीतर हैं, सतह पर नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস শব্দ — সময়ে in/on/at চেনার সংকেত",
            en: "Signal words — clues for in/on/at in time",
            hi: "संकेत शब्द — समय में in/on/at पहचानने के सुराग",
          },
          body: {
            bn: "সময়ের আভাস শব্দ দেখে preposition বাছুন। in-এর পরিবার: মাস (in January, in April), বছর (in 2024), ঋতু (in winter, in summer), দিনের বড় অংশ (in the morning, in the afternoon, in the evening)। on-এর পরিবার: বারের নাম (on Monday, on Friday), তারিখ (on 16 December), বিশেষ দিন (on Eid day, on my birthday)। at-এর পরিবার: ঘড়ার সময় (at 6 o'clock, at half past nine, at 10 p.m.), সঙ্গে at night, at noon, at midnight, at lunchtime। মনে রাখার সিঁড়ি: যত বড় সময়ের ঘের তত in, যত ছোট নির্দিষ্ট বিন্দু তত at — in 2024 → in March → on 16 March → on Monday → at 8 a.m. — সিঁড়ি নামলেই in থেকে on, on থেকে at।",
            en: "Pick the preposition by looking at the time signal. The in-family: months (in January, in April), years (in 2024), seasons (in winter, in summer), large parts of the day (in the morning, in the afternoon, in the evening). The on-family: names of days (on Monday, on Friday), dates (on 16 December), special days (on Eid day, on my birthday). The at-family: clock times (at 6 o'clock, at half past nine, at 10 p.m.), plus at night, at noon, at midnight, at lunchtime. Memorise the staircase: the larger the wrap of time, the more in; the smaller and more specific the point, the more at — in 2024 → in March → on 16 March → on Monday → at 8 a.m. — going down the stairs, in becomes on, and on becomes at.",
            hi: "समय का संकेत देखकर preposition चुनें। in-परिवार: महीने (in January), साल (in 2024), ऋतु (in winter), दिन का बड़ा भाग (in the morning)। on-परिवार: बार के नाम (on Monday), तारीख (on 16 December), विशेष दिन (on Eid day)। at-परिवार: घड़ी का समय (at 6 o'clock, at 10 p.m.), साथ में at night, at noon, at midnight, at lunchtime। सीढ़ी रटें: जितना बड़ा घेरा उतना in, जितना छोटा बिन्दु उतना at — in 2024 → in March → on 16 March → on Monday → at 8 a.m.।",
          },
          examples: [
            {
              wrong: "I was born at 1999.",
              right: "I was born in 1999.",
              note: {
                bn: "বছর = বড় সময়ের ঘের → in; '১৯৯৯ সালে'র অনুবাদ in 1999।",
                en: "A year is a large wrap of time — in; the Bengali '1999 sale' translates to in 1999.",
                hi: "साल = समय का बड़ा घेरा → in।",
              },
            },
            {
              wrong: "We have a holiday in Friday.",
              right: "We have a holiday on Friday.",
              note: {
                bn: "বারের নাম → on; ছুটি সারা শুক্রবার — নির্দিষ্ট দিন।",
                en: "A day of the week takes on; the holiday covers the whole of Friday — a specific day.",
                hi: "बार के नाम पर on; छुट्टी पूरे शुक्रवार को — निश्चित दिन।",
              },
            },
            {
              wrong: "He sleeps at the morning.",
              right: "He sleeps in the morning.",
              note: {
                bn: "দিনের বড় অংশ → in — in the morning; at শুধু ঘড়ার বিন্দুর জন্য।",
                en: "A large part of the day takes in — in the morning; at is only for clock points.",
                hi: "दिन का बड़ा भाग → in — in the morning।",
              },
            },
            {
              wrong: "The train leaves in 7 o'clock.",
              right: "The train leaves at 7 o'clock.",
              note: {
                bn: "ঘড়ার নির্দিষ্ট বিন্দু → at — at 7 o'clock।",
                en: "A specific clock point takes at — at 7 o'clock.",
                hi: "घड़ी का निश्चित बिन्दु → at — at 7 o'clock।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "স্থানের মানচিত্র — ঘেরা জায়গা, তল, বিন্দু",
            en: "The map of place — enclosed spaces, surfaces, points",
            hi: "स्थान का नक़्शा — घिरे स्थान, सतह, बिन्दु",
          },
          body: {
            bn: "স্থানের মানচিত্র আরেকটু গভীরে দেখা যাক। in: ভেতরে ঢোকা যায় বা যা চারদিক থেকে ঘেরে — in the room, in the kitchen, in the drawer, in the pocket, in the water, in a car (ছোট যানবাহনের ভেতরে), আর শহর-দেশ-মহাদেশ — in Dhaka, in Bangladesh, in Asia। on: ওপরের তলে ছোঁয়া — on the table, on the bed, on the wall, on the shelf, on the floor; আর বড় যানবাহন যেখানে উঠে চলা-বসা যায় — on the bus, on the train, on the plane, on a ship। at: বিন্দু বা স্টেশন-মতো জায়গা — at the door, at the gate, at the bus stop, at the traffic light, at the airport, at the station; আর কর্মস্থল — at school, at work, at the office। একই জায়গা অর্থভেদে ভিন্ন preposition নিতে পারে: in the station মানে স্টেশনের ভেতরে, at the station মানে ওই বিন্দুতে — শুরুর স্তরে গেট-স্টপ-স্টেশন at-এর সঙ্গে মনে রাখুন।",
            en: "Let us go one level deeper into the map of place. in: somewhere you can enter, or something that surrounds — in the room, in the kitchen, in the drawer, in the pocket, in the water, in a car (the inside of a small vehicle), and cities-countries-continents — in Dhaka, in Bangladesh, in Asia. on: touching the upper surface — on the table, on the bed, on the wall, on the shelf, on the floor; and large vehicles you can walk inside — on the bus, on the train, on the plane, on a ship. at: a point or a station-like place — at the door, at the gate, at the bus stop, at the traffic light, at the airport, at the station; and workplaces — at school, at work, at the office. The same place can take different prepositions by meaning: in the station means inside the building, at the station means at that point — at the beginner stage, keep gate-stop-station with at.",
            hi: "स्थान के नक़्शे में एक कदम और गहरे चलें। in: जहाँ भीतर जा सकते हैं, या जो चारों ओर से घेरे — in the room, in the drawer, in the pocket, in a car (छोटे वाहन का भीतर), और शहर-देश-महाद्वीप — in Dhaka, in Bangladesh, in Asia। on: ऊपरी सतह से छूना — on the table, on the bed, on the wall, on the shelf; और बड़े वाहन जहाँ भीतर चल-बैठ सकते हैं — on the bus, on the train, on the plane। at: बिन्दु या स्टेशन-जैसी जगह — at the door, at the gate, at the bus stop, at the airport, at the station; और कार्यस्थल — at school, at work, at the office। एक ही जगह अर्थ-भेद से अलग preposition ले सकती है: in the station = भवन के भीतर, at the station = उस बिन्दु पर — शुरुआती स्तर में gate-stop-station को at के साथ रखें।",
          },
          examples: [
            {
              wrong: "I left my phone on the car.",
              right: "I left my phone in the car.",
              note: {
                bn: "ছোট যানবাহনের ভেতরে → in; বড় যানবাহনে ওঠা-চলা যায় বলে on — in a car, on the bus।",
                en: "The inside of a small vehicle takes in; a large vehicle you walk into takes on — in a car, on the bus.",
                hi: "छोटे वाहन के भीतर → in; बड़े वाहन में on — in a car, on the bus।",
              },
            },
            {
              wrong: "I read newspapers in the bus.",
              right: "I read newspapers on the bus.",
              note: {
                bn: "বাস = বড় যানবাহন → on the bus; 'বাসে' শুনলে in লিখবেন না।",
                en: "A bus is a large vehicle — on the bus; do not write in just because Bengali says 'base'.",
                hi: "बस = बड़ा वाहन → on the bus।",
              },
            },
            {
              wrong: "She is standing in the bus stop.",
              right: "She is standing at the bus stop.",
              note: {
                bn: "স্টপ মানে সেখানে ভেতরে না থেকে ওই বিন্দুতে দাঁড়ানো → at।",
                en: "Standing at a stop means at that point, not inside anything — at.",
                hi: "स्टॉप पर खड़े होना = उस बिन्दु पर → at।",
              },
            },
            {
              wrong: "My uncle lives on Sylhet.",
              right: "My uncle lives in Sylhet.",
              note: {
                bn: "শহর/এলাকা → in; on শুধু তল বা বড় যানবাহনের।",
                en: "A city or area takes in; on belongs to surfaces or large vehicles.",
                hi: "शहर/क्षेत्र → in; on केवल सतह या बड़े वाहन के लिए।",
              },
            },
            {
              wrong: "The baby is crawling in the floor.",
              right: "The baby is crawling on the floor.",
              note: {
                bn: "মেঝের ওপরের তল → on; 'মেঝেতে' শুনলেও বাচ্চা মেঝের পৃষ্ঠে হামাগুড়ি দেয়।",
                en: "The upper surface of the floor takes on — the baby crawls on the surface, not inside it.",
                hi: "फ़र्श की सतह → on।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "সময়ের ব্যতিক্রম — at night কিন্তু in the morning",
            en: "The exceptions of time — at night but in the morning",
            hi: "समय के अपवाद — at night पर in the morning",
          },
          body: {
            bn: "সময়ের নিয়মে কয়েকটা ব্যতিক্রম আছে, আর সেগুলোতেই বাঙালি শিক্ষার্থীরা পা পড়ে। এক: দিনের অংশ in নেয় — in the morning, in the afternoon, in the evening — কিন্তু night-এর সঙ্গে at: at night, at midnight, at noon, at lunchtime। যুক্তি খুঁজবেন না, এটা ভাষার প্রথা — জুটি মুখস্থ করুন: in the morning, at night। দুই: বারের নামের সঙ্গে দিনের অংশ জুড়লে on জেতে — on Monday morning, on Friday evening, on Saturday night। তিন: উৎসব-বিশেষ দিন — on Eid day, on my birthday, কিন্তু উৎসব-বিন্দু হিসেবে at Eid, at Christmas। চার: ব্রিটিশ ইংরেজিতে at the weekend, আমেরিকানে on the weekend — শুরুর স্তরে একটা বেছে নিয়মিত সেটাই ব্যবহার করুন।",
            en: "The rules of time have a few exceptions, and those are exactly where Bengali speakers stumble. One: parts of the day take in — in the morning, in the afternoon, in the evening — but night goes with at: at night, at midnight, at noon, at lunchtime. Do not hunt for logic; it is a habit of the language — memorise the pair: in the morning, at night. Two: when a day joins a part of the day, on wins — on Monday morning, on Friday evening, on Saturday night. Three: festivals and special days — on Eid day, on my birthday, but the festival as a point takes at Eid, at Christmas. Four: British English says at the weekend, American English says on the weekend — at the beginner stage pick one and use it steadily.",
            hi: "समय के नियमों में कुछ अपवाद हैं, और वहीं बांग्लाभाषी फिसलते हैं। एक: दिन के भाग in लेते हैं — in the morning, in the evening — पर night के साथ at: at night, at midnight, at noon, at lunchtime। तर्क ढूँढें नहीं; यह भाषा की आदत है — जोड़ी रटें: in the morning, at night। दो: बार + दिन का भाग जुड़े तो on जीतता है — on Monday morning, on Saturday night। तीन: पर्व-विशेष दिन — on Eid day, on my birthday, पर पर्व-बिन्दु के रूप में at Eid, at Christmas। चार: ब्रिटिश अंग्रेज़ी में at the weekend, अमेरिकी में on the weekend — शुरुआत में एक चुनकर लगातार वही लिखें।",
          },
          examples: [
            {
              wrong: "I read at the morning.",
              right: "I read in the morning.",
              note: {
                bn: "দিনের বড় অংশ in — in the morning; at the morning ইংরেজিতে নেই।",
                en: "A large part of the day takes in — in the morning; 'at the morning' does not exist in English.",
                hi: "दिन का बड़ा भाग in — in the morning; 'at the morning' अंग्रेज़ी में नहीं है।",
              },
            },
            {
              wrong: "We watch TV in the night.",
              right: "We watch TV at night.",
              note: {
                bn: "night-এর ব্যতিক্রম — at night; in the night নয় (in the night মাঝে মাঝে লম্বা বর্ণনায় চলে, কিন্তু দৈনন্দিন বাক্যে at night-ই স্বাভাবিক)।",
                en: "Night is the exception — at night; 'in the night' only appears in longer descriptions, but everyday sentences take at night.",
                hi: "night अपवाद है — at night; रोज़मर्रा के वाक्यों में at night ही।",
              },
            },
            {
              wrong: "I wake up at 6 in Friday.",
              right: "I wake up at 6 on Friday.",
              note: {
                bn: "ঘড়া at + বার on — দুটো আলাদা নিয়মে, একসঙ্গে মিশে না।",
                en: "Clock time takes at and the day takes on — two separate rules that never merge.",
                hi: "घड़ी at + बार on — दो अलग नियम, एक नहीं मिलते।",
              },
            },
            {
              wrong: "On midnight the shop closes.",
              right: "At midnight the shop closes.",
              note: {
                bn: "midnight/noon সবসময় at — at midnight, at noon; এরা ঘড়ার বিন্দুর পরিবার।",
                en: "Midnight and noon always take at — at midnight, at noon; they belong to the clock-point family.",
                hi: "midnight/noon सदा at — at midnight, at noon।",
              },
            },
            {
              wrong: "In Monday morning I have a class.",
              right: "On Monday morning I have a class.",
              note: {
                bn: "বার + দিনের অংশ জুড়লে on জেতে — on Monday morning; একা থাকলে in the morning, কিন্তু বার জুড়লে on।",
                en: "Day + part of day takes on — on Monday morning; alone it is in the morning, but with the day on wins.",
                hi: "बार + दिन का भाग → on — on Monday morning।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "স্থির জুটি — যুক্তি নয়, অভ্যাস",
            en: "Fixed pairs — not logic, habit",
            hi: "स्थिर जोड़े — तर्क नहीं, आदत",
          },
          body: {
            bn: "অনেক জুটি যুক্তিতে মেলে না, প্রথায় মেলে — এগুলো জোড়ায় জোড়ায় মুখস্থ করতেই হবে। at home (কখনো in home নয়), at school, at work, at the moment (এই মুহূর্তে), at first (শুরুতে); in bed (বিছানায় শুয়ে — ঘুমানোর উদ্দেশ্যে), in hospital (ভর্তি হয়ে থাকছে), in a hurry (তাড়াহুড়োয়), in time; on time (ঠিক সময়ে — বাস বা ফ্লাইটের মতো), on holiday, on the phone (ফোনে কথা বলছে); কারো বাড়িতে = at my friend's house, at their place। বাংলার '-এ' সাফল্য প্রতিটা ক্ষেত্রে in চাপবে — 'ঘরে' শুনলে in, 'সময়ে' শুনলে in — কিন্তু ইংরেজি প্রথা অন্য কথা বলে। রোজ এই জুটিগুলো জোরে জোরে বলুন — at home, in bed, on time — জিহ্বাতেই নিয়ম বসে যাবে।",
            en: "Many pairs do not match by logic; they match by custom — these must be memorised in pairs. at home (never in home), at school, at work, at the moment (right now), at first (in the beginning); in bed (lying down to sleep), in hospital (admitted as a patient), in a hurry (in a rush), in time; on time (exactly at the agreed time — like a bus or flight), on holiday, on the phone (talking by phone); at someone's place = at my friend's house, at their place. The Bengali suffix '-e' will push in into every one of these — 'ghore' tempts in, 'shomoye' tempts in — but English custom speaks differently. Say these pairs aloud every day — at home, in bed, on time — and the rule settles on the tongue.",
            hi: "बहुत से जोड़े तर्क से नहीं, रिवायत से मिलते हैं — इन्हें जोड़ी में ही रटना होगा। at home (कभी in home नहीं), at school, at work, at the moment (इस समय), at first; in bed (सोने के लिए लेटा), in hospital (मरीज़ के रूप में भर्ती), in a hurry, in time; on time (तय समय पर — बस या फ्लाइट की तरह), on holiday, on the phone; किसी के घर = at my friend's house, at their place। बांग्ला का '-ए' प्रत्यय इनमें हर जगह in थोपेगा — पर अंग्रेज़ी रिवायत कुछ और कहती है। रोज़ ये जोड़े ज़ोर से बोलें — at home, in bed, on time — नियम ज़ुबान पर बैठ जाएगा।",
          },
          examples: [
            {
              wrong: "I am in home now.",
              right: "I am at home now.",
              note: {
                bn: "স্থির জুটি at home — বাড়ি মানে ঘেরা জায়গা ভেবে in home লেখা যায় না।",
                en: "The fixed pair is at home — home is not treated as a generic enclosed space here.",
                hi: "स्थिर जोड़ी at home — 'in home' गलत।",
              },
            },
            {
              wrong: "I will meet you in my friend's house.",
              right: "I will meet you at my friend's house.",
              note: {
                bn: "কারো বাড়ি মানে ওই বিন্দুতে হাজির হওয়া → at; বাড়ির ভেতরের কক্ষ নিয়ে কথা নয়।",
                en: "Meeting at someone's house means arriving at that point — at; it is not about a room inside.",
                hi: "किसी के घर मिलना = उस बिन्दु पर → at।",
              },
            },
            {
              wrong: "She always comes in time.",
              right: "She always comes on time.",
              note: {
                bn: "ঠিক সময়ে = on time; in time মানে কাজে দেরির আগে, ঠিক মুহূর্তে পৌঁছানো — দুই অর্থ।",
                en: "Punctual means on time; in time means reaching before it is too late — two different ideas.",
                hi: "समय पर = on time; in time का अर्थ अलग है — देर होने से पहले पहुँचना।",
              },
            },
            {
              wrong: "He is in work now.",
              right: "He is at work now.",
              note: {
                bn: "কাজের জায়গা → at — at work, at school, at the office; সেখানে 'কাজে' গেছে, ঘেরে ঢোকার কথা নয়।",
                en: "A workplace takes at — at work, at school, at the office; he has gone to work, not entered an enclosure.",
                hi: "कार्यस्थल → at — at work, at school, at the office।",
              },
            },
            {
              wrong: "My mother is cooking at the kitchen.",
              right: "My mother is cooking in the kitchen.",
              note: {
                bn: "রান্নাঘর ঘেরা জায়গা, ভেতরে আছে → in; স্টপ-গেট-স্টেশনের মতো বিন্দু নয়।",
                en: "A kitchen is an enclosed space you are inside — in; it is not a point like a stop, gate or station.",
                hi: "रसोई घिरी जगह है, भीतर है → in।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল — in-এর ছায়া",
            en: "Common mistakes by Bengali speakers — the shadow of in",
            hi: "बांग्लाभाषी छात्रों की कॉमन गलतियाँ — in की छाया",
          },
          body: {
            bn: "বাঙালি শিক্ষার্থীদের ভুলের শিকড় একটাই — '-ে/-তে' সাফল্য তিন কাজে চলে বলে অনুবাদে সবখানে in ছায়া ফেলে। পাঁচটা পরিচিত ভুল পরিবার: (১) তলের জায়গায় in — টেবিলে, দেয়ালে, বিছানায় → in the table/wall/bed (ঠিক: on); (২) বিন্দুর জায়গায় in — বাসস্ট্যান্ডে, দরজায় → in the bus stop/door (ঠিক: at); (৩) স্থির জুটি ভাঙা — in home (ঠিক: at home), in my friend's house (ঠিক: at); (৪) সময়ের ভাগ ভুল — at the morning (ঠিক: in), in the night (ঠিক: at night), in Monday (ঠিক: on); (৫) যানবাহনে in the bus (ঠিক: on the bus)। চিকিৎসা: অনুবাদ শুরুর আগে তিনটা প্রশ্ন — ভেতরে ঢোকা যায়? ওপরের তল? নির্দিষ্ট বিন্দু বা ঘড়ার সময়? — উত্তরই preposition বেছে দেবে।",
            en: "The root of the Bengali speaker's mistakes is one — the suffix '-e/-te' does three jobs, so in casts its shadow everywhere in translation. Five familiar error families: (1) in on a surface — tebile, deyale, bichanay → in the table/wall/bed (right: on); (2) in on a point — bas-stande, dorjay → in the bus stop/door (right: at); (3) broken fixed pairs — in home (right: at home), in my friend's house (right: at); (4) mixed-up time — at the morning (right: in), in the night (right: at night), in Monday (right: on); (5) in on vehicles — in the bus (right: on the bus). The cure: before translating, ask three questions — can you enter it? is it a surface? is it a point or a clock time? — the answer itself picks the preposition.",
            hi: "बांग्लाभाषी की गलतियों की जड़ एक है — '-এ/-তे' प्रत्यय तीन काम करता है, इसलिए अनुवाद में in हर जगह छाया डालता है। पाँच परिचित गलती-परिवार: (1) सतह पर in — in the table/wall/bed (सही: on); (2) बिन्दु पर in — in the bus stop/door (सही: at); (3) स्थिर जोड़े टूटना — in home (सही: at home), in my friend's house (सही: at); (4) समय का मिलावट — at the morning (सही: in), in the night (सही: at night), in Monday (सही: on); (5) वाहन पर in the bus (सही: on the bus)। इलाज: अनुवाद से पहले तीन सवाल — भीतर जा सकते हैं? सतह है? बिन्दु या घड़ी का समय है? — उत्तर ही preposition चुन देगा।",
          },
          examples: [
            {
              wrong: "The rice is on the pot.",
              right: "The rice is in the pot.",
              note: {
                bn: "হাঁড়ির ভেতরে → in; 'হাঁড়িতে' শুনলে on চাপার উল্টো ভুলও হয় — আগে ভাবুন ভেতরে না তলে।",
                en: "Inside the pot — in; the opposite mistake happens too when 'hantite' tempts on — first ask inside or surface.",
                hi: "हांड़ी के भीतर → in; उल्टी गलती भी होती है — पहले भीतर या सतह सोचें।",
              },
            },
            {
              wrong: "I live in home with my parents.",
              right: "I live at home with my parents.",
              note: {
                bn: "স্থির জুটি at home; 'ঘরে থাকি'-র '-ে' ইংরেজিতে in হবে না।",
                en: "The fixed pair is at home; the '-e' of Bengali 'ghore thaki' does not become in.",
                hi: "स्थिर जोड़ी at home; 'घरे থাকি' का '-ए' in नहीं बनेगा।",
              },
            },
            {
              wrong: "I go to office in 9 a.m.",
              right: "I go to office at 9 a.m.",
              note: {
                bn: "ঘড়ার বিন্দু → at; অফিসের জায়গায় at the office, ঘড়ার জায়গায় at 9 a.m. — দুটো আলাদা at।",
                en: "A clock time takes at; the workplace also takes at (at the office), the clock too (at 9 a.m.) — two different ats.",
                hi: "घड़ी का बिन्दु → at; कार्यस्थल भी at the office।",
              },
            },
            {
              wrong: "We will meet in Sunday.",
              right: "We will meet on Sunday.",
              note: {
                bn: "বার → on; 'রবিবারে/সোমবারে' শুনলেই in নয়।",
                en: "A day of the week takes on; hearing 'Som bare' should not bring in.",
                hi: "बार → on; 'सोमবারे' सुनकर in नहीं।",
              },
            },
            {
              wrong: "She was born on March.",
              right: "She was born in March.",
              note: {
                bn: "মাস → in; on আসবে তারিখ জুড়লে — on 16 March, একা মাসে in March।",
                en: "A month takes in; on arrives with a date — on 16 March, but the month alone is in March.",
                hi: "महीना → in; तारीख जुड़े तब on — on 16 March।",
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
            bn: "সোমবার সকালে সাবিনার দিন শুরু হয় ছয়টায় — 'I get up at six.' সে মিরপুরের এক হোস্টেলে থাকে: 'I live in a hostel in Mirpur.' আটটায় বাস স্টপে দাঁড়িয়ে বলে, 'I am at the bus stop.' বাসে উঠে জানালার পাশে বসে: 'I am on the bus now.' ন'টায় অফিসে টিফিন বক্সের ভেতরে তাকের ওপরে রাখে: 'The box is on the shelf; the tiffin is in the box.' রাতে মাকে ফোনে বলে, 'I will visit you in December, on the 20th, at ten at night.' মা হাসেন, 'We will all be at home.' খেয়াল করুন — at six (ঘড়া), in a hostel (ঘেরা জায়গা), in Mirpur (এলাকা), at the bus stop (বিন্দু), on the bus (বড় যানবাহন), on the shelf (তল), in the box (ভেতরে), in December (মাস), on the 20th (তারিখ), at ten at night (ঘড়া + at night ব্যতিক্রম), at home (স্থির জুটি)। এক নজরে — স্থান: in = ঘেরা জায়গা, শহর-দেশ; on = তল, বড় যানবাহন; at = বিন্দু, কর্মস্থল; সময়: in = মাস-বছর-দিনের অংশ, on = বার-তারিখ, at = ঘড়া ও at night; স্থির জুটি মুখস্থ — at home, on the bus, on time।",
            en: "Sabina's Monday starts at six — 'I get up at six.' She lives in a hostel in Mirpur: 'I live in a hostel in Mirpur.' At eight she stands at the bus stop and says, 'I am at the bus stop.' She boards the bus and sits by the window: 'I am on the bus now.' At nine, in the office, she puts the tiffin inside the box on the shelf: 'The box is on the shelf; the tiffin is in the box.' At night she tells her mother on the phone, 'I will visit you in December, on the 20th, at ten at night.' Mother smiles, 'We will all be at home.' Notice — at six (clock time), in a hostel (enclosed space), in Mirpur (area), at the bus stop (point), on the bus (large vehicle), on the shelf (surface), in the box (inside), in December (month), on the 20th (date), at ten at night (clock time + the at-night exception), at home (fixed pair). In a nutshell — place: in = enclosed spaces, cities and countries; on = surfaces, large vehicles; at = points, workplaces; time: in = months, years, parts of the day; on = days, dates; at = clock times and at night; memorise the fixed pairs — at home, on the bus, on time.",
            hi: "सोमवार सुबह साबिना का दिन छह बजे शुरू होता है — 'I get up at six.' वह मीरपुर के एक हॉस्टल में रहती है: 'I live in a hostel in Mirpur.' आठ बजे बस स्टॉप पर खड़ी होकर कहती है, 'I am at the bus stop.' बस में चढ़कर खिड़की के पास बैठती है: 'I am on the bus now.' नौ बजे दफ़्तर में टिफ़िन डिब्बे में और शेल्फ़ पर रखती है: 'The box is on the shelf; the tiffin is in the box.' रात में माँ को फ़ोन पर कहती है, 'I will visit you in December, on the 20th, at ten at night.' माँ हँसती हैं, 'We will all be at home.' ध्यान दें — at six (घड़ी), in a hostel (घिरा स्थान), in Mirpur (क्षेत्र), at the bus stop (बिन्दु), on the bus (बड़ा वाहन), on the shelf (सतह), in the box (भीतर), in December (महीना), on the 20th (तारीख), at ten at night (घड़ी + at night अपवाद), at home (स्थिर जोड़ी)। एक नज़र में — स्थान: in = घिरे स्थान, शहर-देश; on = सतह, बड़े वाहन; at = बिन्दु, कार्यस्थल; समय: in = महीना-साल-दिन का भाग, on = बार-तारीख, at = घड़ी और at night; स्थिर जोड़े रटें — at home, on the bus, on time।",
          },
          examples: [
            {
              wrong: "She gets up in six o'clock.",
              right: "She gets up at six o'clock.",
              note: {
                bn: "ঘড়ার বিন্দু → at; ছয়টায় = at six।",
                en: "A clock point takes at — at six.",
                hi: "घड़ी का बिन्दु → at — at six।",
              },
            },
            {
              wrong: "She sits in the bus.",
              right: "She sits on the bus.",
              note: {
                bn: "বড় যানবাহন → on the bus।",
                en: "A large vehicle takes on — on the bus.",
                hi: "बड़ा वाहन → on the bus।",
              },
            },
            {
              wrong: "I will visit you at December.",
              right: "I will visit you in December.",
              note: {
                bn: "মাস → in; at আসবে শুধু ঘড়ায় — at ten।",
                en: "A month takes in; at arrives only with the clock — at ten.",
                hi: "महीना → in; at केवल घड़ी के साथ — at ten।",
              },
            },
            {
              wrong: "I will come at the 20th.",
              right: "I will come on the 20th.",
              note: {
                bn: "তারিখ → on; '২০ তারিখে'-র '-ে' অনুবাদ on।",
                en: "A date takes on — the '-e' of 'bish tarikhe' translates to on.",
                hi: "तारीख → on।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "তিনটা ছবি মনে রাখুন — in = বাক্সের ভেতর, on = টেবিলের ওপরের তল, at = ম্যাপে একটা বিন্দু।",
          en: "Keep three pictures in mind — in = inside a box, on = the top surface of a table, at = a point on the map.",
          hi: "तीन चित्र याद रखें — in = डिब्बे के भीतर, on = टेबल की सतह, at = नक़्शे का बिन्दु।",
        },
        {
          bn: "সময়ের সিঁড়ি — in (মাস, বছর) → on (বার, তারিখ) → at (ঘড়া); যত ছোট বিন্দু, তত at।",
          en: "The staircase of time — in (months, years) → on (days, dates) → at (clock times); the smaller the point, the more at.",
          hi: "समय की सीढ़ी — in (महीना, साल) → on (बार, तारीख) → at (घड़ी)।",
        },
        {
          bn: "at home, at school, at work — থাকা বা কাজের উদ্দেশ্যে সেই জায়গা হলে at; in home কখনো নয়।",
          en: "at home, at school, at work — when the place is for living or working, use at; never in home.",
          hi: "at home, at school, at work — रहने या काम की जगह हो तो at; in home कभी नहीं।",
        },
        {
          bn: "কারো বাড়িতে মানে at — at my friend's house; নিজের বাড়ি at home।",
          en: "At someone's house takes at — at my friend's house; your own is at home.",
          hi: "किसी के घर = at — at my friend's house; अपना घर at home।",
        },
        {
          bn: "বড় যানবাহনে on (on the bus/train/plane), ছোট যানবাহনে in (in a car/taxi); যাতায়াতের মোড়ে by — by bus, by car।",
          en: "Large vehicles take on (on the bus/train/plane), small vehicles take in (in a car/taxi); for the mode of travel use by — by bus, by car.",
          hi: "बड़े वाहन में on, छोटे में in (in a car/taxi); यात्रा के मोड़ पर by — by bus, by car।",
        },
        {
          bn: "in the morning/afternoon/evening কিন্তু at night, at midnight, at noon — ব্যতিক্রম জুটি জোরে জোরে বলুন।",
          en: "in the morning/afternoon/evening but at night, at midnight, at noon — say the exception pairs aloud.",
          hi: "in the morning पर at night, at midnight, at noon — अपवाद की जोड़ियाँ ज़ोर से बोलें।",
        },
        {
          bn: "বার + দিনের অংশ জুড়লে on জেতে — on Monday morning, on Friday night।",
          en: "Day + part of day takes on — on Monday morning, on Friday night.",
          hi: "बार + दिन का भाग → on — on Monday morning, on Friday night।",
        },
        {
          bn: "তারিখ আর ঘড়া একসঙ্গে এলে আলাদা করে ধরুন — on 16 December at 5 p.m.।",
          en: "When a date and a clock time come together, handle them separately — on 16 December at 5 p.m.",
          hi: "तारीख और घड़ी साथ आएँ तो अलग-अलग — on 16 December at 5 p.m.।",
        },
        {
          bn: "অনুবাদে ঢুকবেন না — 'ঘরে/টেবিলে/সকালে' শুনলেই in লিখবেন না; আগে ভাবুন: ভেতরে? তল? বিন্দু?",
          en: "Do not dive into translation — hearing 'ghore/tebile/sokale' should not automatically mean in; first ask: inside? surface? point?",
          hi: "अनुवाद में मत उतरें — 'घरे/टेबिले/सोकाले' सुनकर हर जगह in न लिखें; पहले पूछें: भीतर? सतह? बिन्दु?",
        },
        {
          bn: "রোজ একটা বাক্যে তিনটাই ফেলুন — At seven on Friday morning I sat on the bus — জুটিগুলো অভ্যাস হয়ে যাবে।",
          en: "Use all three in one sentence every day — At seven on Friday morning I sat on the bus — and the pairs become habit.",
          hi: "रोज़ एक वाक्य में तीनों डालें — At seven on Friday morning I sat on the bus — जोड़े आदत बन जाएँगे।",
        },
      ],
      quiz: [
        {
          question: "The cat is sleeping ___ the sofa.",
          options: ["in", "on", "at", "by"],
          answer: 1,
          explanation: {
            bn: "sofa-র ওপরের তল → on; বিড়াল সোফার পৃষ্ঠে, ভেতরে নয়।",
            en: "The upper surface of the sofa takes on — the cat is on the surface, not inside.",
            hi: "सोफ़ा की सतह → on; बिल्ली सतह पर है, भीतर नहीं।",
          },
        },
        {
          question: "My birthday is ___ 5 March.",
          options: ["in", "on", "at", "from"],
          answer: 1,
          explanation: {
            bn: "তারিখ → on — on 5 March; একা মাস হলে in March।",
            en: "A date takes on — on 5 March; the month alone would be in March.",
            hi: "तारीख → on — on 5 March।",
          },
        },
        {
          question: "We have an English class ___ Monday.",
          options: ["in", "on", "at", "by"],
          answer: 1,
          explanation: {
            bn: "বারের নাম → on — on Monday।",
            en: "A day of the week takes on — on Monday.",
            hi: "बार का नाम → on — on Monday।",
          },
        },
        {
          question: "I usually go to bed ___ 11 o'clock.",
          options: ["in", "on", "at", "to"],
          answer: 2,
          explanation: {
            bn: "ঘড়ার বিন্দু → at — at 11 o'clock।",
            en: "A clock time takes at — at 11 o'clock.",
            hi: "घड़ी का समय → at — at 11 o'clock।",
          },
        },
        {
          question: "She was born ___ 2003.",
          options: ["on", "in", "at", "of"],
          answer: 1,
          explanation: {
            bn: "বছর → in — in 2003।",
            en: "A year takes in — in 2003.",
            hi: "साल → in — in 2003।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: [
            "I am in home.",
            "I am at home.",
            "I am on home.",
            "I am to home.",
          ],
          answer: 1,
          explanation: {
            bn: "স্থির জুটি at home — in home ভুল, on/to home অস্তিত্বই নেই।",
            en: "The fixed pair is at home — 'in home' is wrong and on/to home do not exist.",
            hi: "स्थिर जोड़ी at home — 'in home' गलत।",
          },
        },
        {
          question: "He sleeps ___ the afternoon.",
          options: ["at", "in", "on", "by"],
          answer: 1,
          explanation: {
            bn: "দিনের বড় অংশ → in — in the afternoon; ব্যতিক্রম শুধু night-এ (at night)।",
            en: "A large part of the day takes in — in the afternoon; the exception is only night (at night).",
            hi: "दिन का बड़ा भाग → in — in the afternoon; अपवाद केवल night (at night)।",
          },
        },
        {
          question: "I read a magazine ___ the train.",
          options: ["in", "on", "at", "over"],
          answer: 1,
          explanation: {
            bn: "বড় যানবাহন → on — on the train।",
            en: "A large vehicle takes on — on the train.",
            hi: "बड़ा वाहन → on — on the train।",
          },
        },
        {
          question: "___ night the streets are quiet.",
          options: ["In", "On", "At", "By"],
          answer: 2,
          explanation: {
            bn: "night-এর ব্যতিক্রম — At night; In night নয়।",
            en: "Night is the exception — At night, never 'In night'.",
            hi: "night अपवाद है — At night, 'In night' नहीं।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: [
            "The meeting is at 4 p.m. on Wednesday.",
            "The meeting is on 4 p.m. at Wednesday.",
            "The meeting is in 4 p.m. on Wednesday.",
            "The meeting is at 4 p.m. in Wednesday.",
          ],
          answer: 0,
          explanation: {
            bn: "ঘড়া at + বার on — at 4 p.m. on Wednesday; সিঁড়ির নিয়ম দুই জায়গায়ই খাটে।",
            en: "Clock time takes at and the day takes on — at 4 p.m. on Wednesday; the staircase rule applies in both slots.",
            hi: "घड़ी at + बार on — at 4 p.m. on Wednesday।",
          },
        },
      ],
    },
  },
];
