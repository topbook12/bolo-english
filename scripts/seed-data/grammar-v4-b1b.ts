// ─── Grammar seeds v4: Beginner B1 — Agreement + Questions (2 lessons) ───
// Task 10 — point-form roadmap upgrade. Source: grammar-v3-b1.ts.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_B1B: SeedGrammarV4Entry[] = [
  /* ── 1. Subject-Verb Agreement ────── */
  {
    topic: "Subject-Verb Agreement",
    level: "beginner",
    title: "Subject-Verb Agreement (Beginner)",
    unit: 2,
    sortOrder: 1,
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
      roadmap: [
        {
          bn: "🧭 মিলের চার মাঠ: -s, be-verb, have/has, was/were",
          en: "🧭 The four grounds of matching: -s, be-verb, have/has, was/were",
          hi: "🧭 मेल के चार मैदान: -s, be-verb, have/has, was/were",
        },
        {
          bn: "📊 তিন সারির ছক — কে am/is/are, কে has/does, কে -s পায়",
          en: "📊 The three-row chart — who takes am/is/are, who has/does, who -s",
          hi: "📊 तीन पंक्तियों का चार्ट — कौन am/is/are, कौन has/does, कौन -s",
        },
        {
          bn: "🚦 একবচন-বহুবচনের সংকেত তালিকা আর দুটো বিশেষ নিয়ম",
          en: "🚦 The singular-plural signal list and two special rules",
          hi: "🚦 एकवचन-बहुवचन संकेत सूची और दो विशेष नियम",
        },
        {
          bn: "🔁 am/is/are আর was/were — প্রশ্ন, নেগেটিভ, সংক্ষেপসহ",
          en: "🔁 am/is/are and was/were — with questions, negatives, contractions",
          hi: "🔁 am/is/are और was/were — प्रश्न, नेगेटिव, संक्षेप सहित",
        },
        {
          bn: "🤝 has আর does-এর জুটি — আর does-এর পরে s বাদ দেওয়ার নিয়ম",
          en: "🤝 The has and does pairs — and dropping s after does",
          hi: "🤝 has और does की जोड़ी — और does के बाद s हटाने का नियम",
        },
        {
          bn: "🎯 লম্বা বাক্যে আসল কর্তা খুঁজে ৫ সেকেন্ডে মিল মেলানো",
          en: "🎯 Find the real subject in a long sentence and match in five seconds",
          hi: "🎯 लंबे वाक्य में असली कर्ता ढूँढकर 5 सेकंड में मेल मिलाना",
        },
        {
          bn: "⚠️ 'He go', 'They was' জাতীয় পাঁচ ভুল আর সারানোর কৌশল",
          en: "⚠️ Five mistakes like 'He go', 'They was' — and how to fix them",
          hi: "⚠️ 'He go', 'They was' जैसी पाँच गलतियाँ और उनका इलाज",
        },
        {
          bn: "📖 আরিফের পরিচয়-গল্পে সব নিয়ম একসঙ্গে, শেষে এক নজরে",
          en: "📖 All rules together in Arif's introduction story, then a recap",
          hi: "📖 आरिफ की परिचय-कहानी में सारे नियम, अंत में एक नज़र में",
        },
      ],
      sections: [
        {
          heading: {
            bn: "🧭 কখন ব্যবহার হয় — ক্রিয়া কর্তার ছায়া অনুসরণ করে",
            en: "🧭 When it applies — the verb follows its subject",
            hi: "🧭 कब लागू होता है — क्रिया कर्ता का अनुसरण करती है",
          },
          lead: {
            bn: "কর্তা বদলালে ক্রিয়াও বদলায় — কোথায় কোথায় এই মিল কাজ করে, সেটাই প্রথম ধাপ।",
            en: "Change the subject and the verb changes too — first, where exactly this matching works.",
            hi: "कर्ता बदले तो क्रिया भी बदलती है — पहले देखें यह मेल कहाँ-कहाँ काम करता है।",
          },
          points: [
            {
              bn: "**Subject-verb agreement** — মানে মিল: কর্তা একবচন না বহুবচন, কোন পুরুষ — তার হিসেব মিলিয়েই ক্রিয়ার রূপ বসে।",
              en: "**Subject-verb agreement** means matching: singular or plural, which person — the verb's form is chosen to match the subject.",
              hi: "**Subject-verb agreement** का अर्थ है मेल: कर्ता एकवचन या बहुवचन, कौन-सा पुरुष — उसी हिसाब से क्रिया-रूप बैठता है।",
            },
            {
              bn: "মিলের প্রথম দুই মাঠ: present simple-এর **-s** (He plays, They play) আর **be-verb** (I am, He is, They are)।",
              en: "The first two grounds of matching: the present-simple **-s** (He plays, They play) and the **be-verb** (I am, He is, They are).",
              hi: "मेल के पहले दो मैदान: present simple का **-s** (He plays, They play) और **be-verb** (I am, He is, They are)।",
            },
            {
              bn: "বাকি দুই মাঠ: **have/has** (She has, They have) আর অতীতের be-verb **was/were** (I was, They were)।",
              en: "The other two: **have/has** (She has, They have) and the past be-verb **was/were** (I was, They were).",
              hi: "बाकी दो मैदान: **have/has** (She has, They have) और अतीत का be-verb **was/were** (I was, They were)।",
            },
            {
              bn: "বাংলায়ও ক্রিয়া কর্তা অনুযায়ী বদলায় (আমি যাই, তুমি যাও, সে যায়) — কিন্তু বদলানোর প্যাটার্ন দুই ভাষায় আলাদা।",
              en: "Bengali verbs also change with the subject (ami jai, tumi jao, she jay) — but the pattern of change differs in the two languages.",
              hi: "बांग्ला में भी क्रिया कर्ता के अनुसार बदलती है (আমি যাই, তুমি যাও, সে যায়) — पर बदलने का पैटर्न दोनों भाषाओं में अलग।",
            },
            {
              bn: "বাংলায় 'সে যায়' আর 'তারা যায়' প্রায় একই রূপ — ইংরেজি উল্টো: he goes-এ s জোড়ে, they go-তে s খোলে।",
              en: "In Bengali 'she jay' and 'tara jay' keep nearly one form — English is the reverse: he goes adds s, they go drops it.",
              hi: "बांग्ला में 'से যায়' और 'তারা যায়' लगभग एक रूप — अंग्रेज़ी उलटा: he goes में s जुड़ता है, they go में s हटता है।",
            },
            {
              bn: "বাংলা অতীতে সব কর্তায় ক্রিয়া প্রায় এক রকম (আমি ছিলাম, সে ছিল, তারা ছিল) — ইংরেজি ভাগ করে: I/he/she/it → was, you/we/they → were।",
              en: "In the Bengali past the verb looks nearly the same for every subject (ami chhilam, she chhilo, tara chhilo) — English splits it: I/he/she/it → was, you/we/they → were.",
              hi: "बांग्ला अतीत में सब कर्ताओं में क्रिया लगभग एक जैसी (আমি ছিলাম, সে ছিল, তারা ছিল) — अंग्रेज़ी बाँटती है: I/he/she/it → was, you/we/they → were।",
            },
            {
              bn: "এই দুই জায়গাতেই (-s আর was/were) বাঙালি শিক্ষার্থীদের হাত সবচেয়ে বেশি পা ছোঁয়।",
              en: "These two spots — the -s and was/were — trip Bengali speakers the most.",
              hi: "इन्हीं दो जगहों पर (-s और was/were) बांग्लाभाषी छात्रों का हाथ सबसे ज़्यादा लड़खड़ाता है।",
            },
            {
              bn: "মনে রাখার সূত্র: ক্রিয়া কর্তার ছায়া অনুসরণ করে — বাক্য যত লম্বাই হোক, কর্তা বদলালে ক্রিয়ার রূপও মিলবে।",
              en: "Remember: the verb follows its subject's shadow — however long the sentence, if the subject changes the verb form matches.",
              hi: "याद रखने का सूत्र: क्रिया कर्ता की छाया का अनुसरण करती है — वाक्य कितना भी लंबा हो, कर्ता बदले तो क्रिया-रूप भी मिलेगा।",
            },
          ],
          examples: [
            {
              wrong: "They goes to the same college.",
              right: "They go to the same college.",
              note: {
                bn: "they = বহুবচন → s বাদ; বাংলায় 'তারা যায়' আর 'সে যায়' কানে প্রায় এক শোনায়, কিন্তু ইংরেজিতে go/goes আলাদা পথ।",
                en: "'They' is plural — drop the s; in Bengali 'tara jay' and 'se jay' sound almost alike to the ear, but English keeps go/goes apart.",
                hi: "'they' = বহুবচন → s হটাও; বাংগলা 'তারা যায়' আর 'সে যায়' কানে এক জাইসা, পর অংগ্রেজ़ীতে go/goes আলাদা।",
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
            bn: "📊 গঠন — কে কী নেয়: পূর্ণ ছক",
            en: "📊 Formation — who takes what: the full chart",
            hi: "📊 বনাবট — কে ক্যা লেতা হৈ: পূরা চার্ট",
          },
          lead: {
            bn: "এই তিন সারির ছক আঙুলে ধরে মুখস্থ করুন — পুরো পাঠ এর ওপরেই দাঁড়িয়ে।",
            en: "Memorise this three-row chart finger-on-the-line — the whole lesson stands on it.",
            hi: "इस तीन पंक्ति के चार्ट को रट लें — पूरा पाठ इसी पर टिका है।",
          },
          formula: {
            bn: "এক লাইনে পুরো পাঠ — I: am/do/have · he/she/it: is/does/has/s · বাকি সব: are/do/have",
            en: "The whole lesson in one line — I: am/do/have · he/she/it: is/does/has/s · everyone else: are/do/have",
            hi: "एक लाइन में पूरा पाठ — I: am/do/have · he/she/it: is/does/has/s · बाकी सब: are/do/have",
          },
          table: {
            head: [
              { bn: "কর্তা", en: "Subject", hi: "कर्ता" },
              { bn: "be / have / do", en: "be / have / do", hi: "be / have / do" },
              { bn: "ক্রিয়া", en: "Verb", hi: "क्रिया" },
            ],
            rows: [
              [
                { bn: "I", en: "I", hi: "I" },
                { bn: "am / have / do", en: "am / have / do", hi: "am / have / do" },
                { bn: "মূল ক্রিয়া — I go", en: "base verb — I go", hi: "मूল क्रिया — I go" },
              ],
              [
                { bn: "he/she/it", en: "he/she/it", hi: "he/she/it" },
                { bn: "is / has / does", en: "is / has / does", hi: "is / has / does" },
                { bn: "ক্রিয়া + s — he goes", en: "verb + s — he goes", hi: "क्रिया + s — he goes" },
              ],
              [
                { bn: "we/you/they", en: "we/you/they", hi: "we/you/they" },
                { bn: "are / have / do", en: "are / have / do", hi: "are / have / do" },
                { bn: "মূল ক্রিয়া — they go", en: "base verb — they go", hi: "मूल क्रिया — they go" },
              ],
            ],
          },
          points: [
            {
              bn: "ছক তিন সারিতে: I → am/have/do, he/she/it (একবচন নাম) → is/has/does, you/we/they (বহুবচন নাম) → are/have/do।",
              en: "The chart has three rows: I → am/have/do, he/she/it (a singular name) → is/has/does, you/we/they (a plural name) → are/have/do.",
              hi: "चार्ट तीन पंक्तियों में: I → am/have/do, he/she/it (एकवचन नाम) → is/has/does, you/we/they (बहुवचन नाम) → are/have/do।",
            },
            {
              bn: "উদাহরণ: I am ready, She has two brothers, He goes, You are ready, They have two brothers, They go।",
              en: "Samples: I am ready, She has two brothers, He goes, You are ready, They have two brothers, They go.",
              hi: "उदाहरण: I am ready, She has two brothers, He goes, You are ready, They have two brothers, They go।",
            },
            {
              bn: "অতীতে শুধু be-verb ভাগ হয়: I/he/she/it → was (The film was good), you/we/they → were (The mangoes were sweet)।",
              en: "In the past only the be-verb splits: I/he/she/it → was (The film was good), you/we/they → were (The mangoes were sweet).",
              hi: "अतीत में केवल be-verb बँटता है: I/he/she/it → was (The film was good), you/we/they → were (The mangoes were sweet)।",
            },
            {
              bn: "বাকি সব ক্রিয়া অতীতে সব কর্তায় একই রূপ নেয়: I/he/they played, had, went।",
              en: "All other verbs take one past form for every subject: I/he/they played, had, went.",
              hi: "बाकी सब क्रियाएँ अतीत में सब कर्ताओं में एक ही रूप लेती हैं: I/he/they played, had, went।",
            },
            {
              bn: "নেগেটিভে ভাগ: I/you/we/they → **don't** have, don't go; he/she/it → **doesn't** have, doesn't go।",
              en: "The negative split: I/you/we/they → **don't** have, don't go; he/she/it → **doesn't** have, doesn't go.",
              hi: "नेगेटिव में बँटवारा: I/you/we/they → **don't** have, don't go; he/she/it → **doesn't** have, doesn't go।",
            },
            {
              bn: "প্রশ্নে do/does বাক্যের সামনে এসে প্রশ্নের সংকেত হয়: Do they live here? Does she sing?",
              en: "In questions do/does move to the front as the question signal: Do they live here? Does she sing?",
              hi: "प्रश्न में do/does वाक्य के सामने आकर प्रश्न का संकेत बनते हैं: Do they live here? Does she sing?",
            },
          ],
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
                hi: "I সবসময় am — বাংগলা 'আমি ক্ষুধার্ত'-এ 'হোনা' না থাকলেও অংग্রেজ़ी অনুবাদে am অনিবার্য।",
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
                hi: "they-এর প্রশ্ন Do দিয়ে; Does একবচন তৃতীয় পুরুষের সংকেত — মेल সহায়ক ক্রিয়াতেও ধরে রাখতে হবে।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস শব্দ — কোন কর্তা একবচন, কোন কর্তা বহুবচন",
            en: "🚦 Signal words — which subjects are singular, which are plural",
            hi: "🚦 সংকেত শব্দ — কোন কর্তা একবচন, কোন কর্তা বহুবচন",
          },
          lead: {
            bn: "কর্তাকে দেখেই ক্রিয়া অনুমান করা যায় — চেনা সংকেতগুলো চিনে ফেলুন।",
            en: "The subject itself hints at the verb — learn to recognise the familiar signals.",
            hi: "कर्ता देखकर ही क्रिया का अंदाज़ा होता है — जाने-पहचाने संकेत पहचान लें।",
          },
          table: {
            head: [
              { bn: "একবচন সংকেত", en: "Singular signals", hi: "एकवचन संकेत" },
              { bn: "বহুবচন সংকেত", en: "Plural signals", hi: "बहुवचन संकेत" },
            ],
            rows: [
              [
                { bn: "he, she, it, this, that", en: "he, she, it, this, that", hi: "he, she, it, this, that" },
                { bn: "we, they, these, those", en: "we, they, these, those", hi: "we, they, these, those" },
              ],
              [
                { bn: "everyone, somebody, anyone, nobody, each", en: "everyone, somebody, anyone, nobody, each", hi: "everyone, somebody, anyone, nobody, each" },
                { bn: "you (একাধিক), two books", en: "you (several people), two books", hi: "you (कई लोग), two books" },
              ],
              [
                { bn: "একবচন নাম: Rahim, the baby, Dhaka", en: "singular names: Rahim, the baby, Dhaka", hi: "एकवचन नाम: Rahim, the baby, Dhaka" },
                { bn: "-s/-es নাম: my friends, the boys", en: "-s/-es names: my friends, the boys", hi: "-s/-es नाम: my friends, the boys" },
              ],
            ],
          },
          points: [
            {
              bn: "একবচন সংকেতের পেছনে বসে is/has/does বা -s-যুক্ত ক্রিয়া: Everyone is ready, Nobody knows the answer, This smells good।",
              en: "After singular signals sit is/has/does or a verb with -s: Everyone is ready, Nobody knows the answer, This smells good.",
              hi: "एकवचन संकेतों के पीछे बैठता है is/has/does या -s वाली क्रिया: Everyone is ready, Nobody knows the answer, This smells good।",
            },
            {
              bn: "বহুবচন সংকেতের সঙ্গে আসে are/have/do বা s ছাড়া ক্রিয়া: These are mine, My friends play cricket, Those look expensive।",
              en: "Plural signals bring are/have/do or a verb without s: These are mine, My friends play cricket, Those look expensive.",
              hi: "बहुवचन संकेतों के साथ आता है are/have/do या s रहित क्रिया: These are mine, My friends play cricket, Those look expensive।",
            },
            {
              bn: "**'A and B'** একসঙ্গে বললে বহুবচন — My father and mother are coming (দুইজন মানুষ, তাই are)।",
              en: "**'A and B'** together make a plural — My father and mother are coming (two people, so are).",
              hi: "**'A and B'** एक साथ बोलने पर बहुवचन — My father and mother are coming (दो लोग, इसलिए are)।",
            },
            {
              bn: "পরিমাণ এক ভর হিসেবে ব্যবহার হলে প্রায়ই একবচন ক্রিয়া: Five kilometres is a long walk, Two cups of tea is not enough for him।",
              en: "A quantity treated as one portion often takes a singular verb: Five kilometres is a long walk, Two cups of tea is not enough for him.",
              hi: "मात्रा एक भाग की तरह इस्तेमाल होने पर प्रायः एकवचन क्रिया: Five kilometres is a long walk, Two cups of tea is not enough for him।",
            },
            {
              bn: "এই পরিমাণের নিয়মটা শুরুতে দেখে জেনে চলুন — ভুল হলে দোষ নেই।",
              en: "Take this quantity rule on notice at first — a mistake is fine.",
              hi: "यह मात्रा वाला नियम शुरुआत में देखते-सुनते चलें — गलती हो तो दोष नहीं।",
            },
            {
              bn: "সাবধান: কর্তা-ক্রিয়ার মাঝের শব্দ নয় (The boy in the red shirt...), আসল কর্তাই (the boy) ক্রিয়া ঠিক করে।",
              en: "Caution: the middle words do not decide (The boy in the red shirt...) — the real subject (the boy) controls the verb.",
              hi: "सावधान: कर्ता-क्रिया के बीच के शब्द नहीं (The boy in the red shirt...), असली कर्ता ही (the boy) क्रिया तय करता है।",
            },
          ],
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
            bn: "🔁 am / is / are — আর অতীতে was / were",
            en: "🔁 am / is / are — and was / were in the past",
            hi: "🔁 am / is / are — আর অতীতে was / were",
          },
          lead: {
            bn: "be-verb-ই ইংরেজি বাক্যের মেরুদণ্ড — এর মিল একবার গেলে পুরো বাক্য ভেঙে পড়ে।",
            en: "The be-verb is the backbone of an English sentence — one slip here breaks the whole line.",
            hi: "be-verb अंग्रेज़ी वाक्य की रीढ़ है — यहाँ एक फिसलन पूरा वाक्य तोड़ देती है।",
          },
          table: {
            head: [
              { bn: "কর্তা", en: "Subject", hi: "कर्ता" },
              { bn: "বর্তমানে", en: "Present", hi: "वर्तमान में" },
              { bn: "অতীতে", en: "Past", hi: "अतीत में" },
            ],
            rows: [
              [
                { bn: "I", en: "I", hi: "I" },
                { bn: "am — I'm", en: "am — I'm", hi: "am — I'm" },
                { bn: "was", en: "was", hi: "was" },
              ],
              [
                { bn: "he/she/it", en: "he/she/it", hi: "he/she/it" },
                { bn: "is — he's", en: "is — he's", hi: "is — he's" },
                { bn: "was", en: "was", hi: "was" },
              ],
              [
                { bn: "we/you/they", en: "we/you/they", hi: "we/you/they" },
                { bn: "are — you're", en: "are — you're", hi: "are — you're" },
                { bn: "were", en: "were", hi: "were" },
              ],
            ],
          },
          points: [
            {
              bn: "সংক্ষেপ: I'm, you're, he's, we're, they're — কথায় সংক্ষেপই বেশি শোনা যায়।",
              en: "Contractions: I'm, you're, he's, we're, they're — speech prefers the contracted forms.",
              hi: "संक्षेप: I'm, you're, he's, we're, they're — बोलचाल में संक्षेप ही ज़्यादा सुनाई देते हैं।",
            },
            {
              bn: "নেগেটিভ: I'm not, he isn't, they aren't; অতীতে wasn't, weren't।",
              en: "Negatives: I'm not, he isn't, they aren't; in the past wasn't, weren't.",
              hi: "नेगेटिव: I'm not, he isn't, they aren't; अतीत में wasn't, weren't।",
            },
            {
              bn: "প্রশ্নে রূপটা সামনে এসে যায়: Are you ready? Is she your sister? Am I late?",
              en: "In questions the form moves to the front: Are you ready? Is she your sister? Am I late?",
              hi: "प्रश्न में रूप सामने आ जाता है: Are you ready? Is she your sister? Am I late?",
            },
            {
              bn: "অতীতের প্রশ্ন: Was he at home? Were they happy?",
              en: "Past questions: Was he at home? Were they happy?",
              hi: "अतीत के प्रश्न: Was he at home? Were they happy?",
            },
            {
              bn: "সবচেয়ে কমন ভুল তৃতীয় পুরুষে: **'He is go'** — be-verb আর মূল ক্রিয়া একসঙ্গে বসতে পারে না।",
              en: "The most common error appears with the third person: **'He is go'** — a be-verb and a main verb cannot sit together.",
              hi: "सबसे कॉमन गलती तृतीय पुरुष में: **'He is go'** — be-verb और मूल क्रिया एक साथ नहीं बैठ सकते।",
            },
            {
              bn: "হয় He goes (অভ্যাস), নয় He is going (এখন চলছে — continuous পরের স্তরে শিখবেন)।",
              en: "Either He goes (habit) or He is going (happening now — continuous comes at a later stage).",
              hi: "या तो He goes (आदत), या He is going (अभी चल रहा है — continuous बाद के स्तर में)।",
            },
            {
              bn: "'They was' কেন হয়? বাংলা 'তারা ছিল' এক শব্দে বোঝায় — were-এর দরকারটা চোখে পড়ে না।",
              en: "Why does 'They was' happen? Bengali 'tara chhilo' says it in one word — the need for were stays invisible.",
              hi: "'They was' क्यों होता है? बांग्ला 'তারা ছিল' एक शब्द में बोलता है — were की ज़रूरत नज़र नहीं आती।",
            },
            {
              bn: "কৌশল: আয়নার সামনে পাঁচ বাক্য — I am..., I have..., I like..., I was... yesterday, I was not... — পাঁচ রূপ একসঙ্গে জুড়ে যাবে।",
              en: "Trick: five sentences in front of a mirror — I am..., I have..., I like..., I was... yesterday, I was not... — and all five forms link up.",
              hi: "तरकीब: आईने के सामने पाँच वाक्य — I am..., I have..., I like..., I was... yesterday, I was not... — पाँच रूप एक साथ जुड़ जाएँगे।",
            },
          ],
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
            bn: "🤝 have / has আর do / does — জোড়া মিলিয়ে চেনা",
            en: "🤝 have / has and do / does — knowing the pairs",
            hi: "🤝 have / has আর do / does — জোড়া পেহচাননা",
          },
          lead: {
            bn: "মালিকানার has আর প্রশ্ন-নেগেটিভের does — দুটোই তৃতীয় পুরুষে রূপ বদলায়।",
            en: "Ownership's has and the question-negative does — both change shape for the third person.",
            hi: "मालिकियत का has और प्रश्न-नेगेटिव का does — दोनों तृतीय पुरुष में रूप बदलते हैं।",
          },
          formula: {
            bn: "Does + কর্তা + V1 (s ছাড়া) — s একবারে এক শব্দের সম্পত্তি",
            en: "Does + subject + V1 (no s) — the s belongs to one word at a time",
            hi: "Does + कर्ता + V1 (s के बिना) — s एक समय में एक शब्द का",
          },
          table: {
            head: [
              { bn: "কর্তা", en: "Subject", hi: "कर्ता" },
              { bn: "মালিকানা", en: "Ownership", hi: "मालिकियत" },
              { bn: "প্রশ্ন / নেগেটিভ", en: "Question / negative", hi: "प्रश्न / नेगेटिव" },
            ],
            rows: [
              [
                { bn: "he/she/it", en: "he/she/it", hi: "he/she/it" },
                { bn: "has", en: "has", hi: "has" },
                { bn: "does / doesn't", en: "does / doesn't", hi: "does / doesn't" },
              ],
              [
                { bn: "I/you/we/they", en: "I/you/we/they", hi: "I/you/we/they" },
                { bn: "have", en: "have", hi: "have" },
                { bn: "do / don't", en: "do / don't", hi: "do / don't" },
              ],
            ],
          },
          points: [
            {
              bn: "মালিকানা বোঝাতে have; তৃতীয় পুরুষ একবচনে রূপ বদলে **has**: he has, she has, it has, Rahim has।",
              en: "For ownership use have; third-person singular changes it to **has**: he has, she has, it has, Rahim has.",
              hi: "मालिकियत के लिए have; तृतीय पुरुष एकवचन में रूप बदलकर **has**: he has, she has, it has, Rahim has।",
            },
            {
              bn: "বাংলার 'আছে' সব কর্তায় এক (আমার আছে, তার আছে) — তাই 'He have' লেখার প্রবণতা জন্মায়।",
              en: "Bengali 'ache' stays the same for every subject (amar ache, tar ache) — which breeds the habit of writing 'He have'.",
              hi: "বাংগলার 'আছে' सब कर्ताओं में एक (আমার আছে, তার আছে) — इसलिए 'He have' लिखने की आदत जन्म लेती है।",
            },
            {
              bn: "মনে রাখুন: has একবচন তৃতীয় পুরুষের ব্যক্তিগত সম্পত্তি।",
              en: "Remember: has is the personal property of third-person singular.",
              hi: "याद रखें: has एकवचन तृतीय पुरुष की निजी संपत्ति है।",
            },
            {
              bn: "do/does-এর দুটো কাজ — প্রশ্ন (Do you play chess? Does she play chess?) আর নেগেটিভ (I don't play, He doesn't play)।",
              en: "do/does have two jobs — questions (Do you play chess? Does she play chess?) and negatives (I don't play, He doesn't play).",
              hi: "do/does के दो काम — प्रश्न (Do you play chess? Does she play chess?) और नेगेटिव (I don't play, He doesn't play)।",
            },
            {
              bn: "লুকানো নিয়ম ১: **does বসলে মূল ক্রিয়া থেকে s চলে যায়** — Does she work? (Does she works ভুল)।",
              en: "Hidden rule 1: **when does appears, the main verb loses its s** — Does she work? ('Does she works' is wrong).",
              hi: "छिपा नियम 1: **does बैठते ही मूल क्रिया से s चला जाता है** — Does she work? ('Does she works' गलत)।",
            },
            {
              bn: "লুকানো নিয়ম ২: has-ও একই ভাগ্য — Does he have a car? (Does he has ভুল), He doesn't have time (doesn't has ভুল)।",
              en: "Hidden rule 2: has meets the same fate — Does he have a car? ('Does he has' is wrong), He doesn't have time ('doesn't has' is wrong).",
              hi: "छिपा नियम 2: has का भी वही हश्र — Does he have a car? ('Does he has' गलत), He doesn't have time ('doesn't has' गलत)।",
            },
            {
              bn: "কারণ সহজ: s-এর দায়িত্ব একবারে একজনের — হয় does নেবে, নয় মূল ক্রিয়া।",
              en: "The reason is simple: the s belongs to one word at a time — either does takes it, or the main verb.",
              hi: "कारण आसान है: s की ज़िम्मेदारी एक बार में एक ही शब्द की — या तो does ले, या मूल क्रिया।",
            },
            {
              bn: "মালিকানায় have got-ও চলে (He has got a car), কিন্তু শুরুর স্তরে have/has-ই যথেষ্ট আর সব জায়গায় চলে।",
              en: "have got also works for ownership (He has got a car), but at the beginner stage have/has is enough and travels everywhere.",
              hi: "मालिकियत में have got भी चलता है (He has got a car), पर शुरुआती स्तर में have/has ही काफ़ी है और हर जगह चलता है।",
            },
          ],
          examples: [
            {
              wrong: "She have two mobile phones.",
              right: "She has two mobile phones.",
              note: {
                bn: "she → has; বাংলা 'তার দুটো মোবাইল আছে' — 'আছে' নিরপেক্ষ, ইংরেজি নিরপেক্ষ নয়।",
                en: "'She' takes has; Bengali 'tar duto mobile ache' uses a neutral 'ache', but English is not neutral here.",
                hi: "she → has; বাংগলা 'আছে' নিরপেক্ষ, পর অংগ্রেজি নিরপেক্ষ নহীং।",
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
            bn: "🎯 লম্বা বাক্যে মিল ধরে রাখা — আসল কর্তাকে চেনা",
            en: "🎯 Keeping agreement in long sentences — find the real subject",
            hi: "🎯 লম্বে বাক্যে মেল — অসলি কর্তা পেহচাননা",
          },
          lead: {
            bn: "লম্বা বাক্যে চোখকে ফাঁকি দেওয়ার শত উপায় — আসল কর্তা ধরলেই মিল আর ভাঙে না।",
            en: "Long sentences fool the eye a hundred ways — catch the real subject and the match never breaks.",
            hi: "लंबे वाक्य में आँख को धोखा देने के सौ तरीके — असली कर्ता पकड़ो, मेल फिर नहीं टूटेगा।",
          },
          formula: {
            bn: "মাঝের অংশ বাদ → আসল কর্তা → একবচন: is/has/does/-s · বহুবচন: are/have/do",
            en: "Drop the middle part → real subject → singular: is/has/does/-s · plural: are/have/do",
            hi: "मध्य भाग हटाएँ → असली कर्ता → एकवचन: is/has/does/-s · बहुवचन: are/have/do",
          },
          points: [
            {
              bn: "ছোট বাক্যে মিল সহজ (He plays) — কিন্তু কর্তা-ক্রিয়ার মাঝে আরও শব্দ ঢুকলে চোখ ভুল খায়।",
              en: "Matching is easy in a short sentence (He plays) — but when extra words squeeze between subject and verb, the eye errs.",
              hi: "छोटे वाक्य में मेल आसान (He plays) — पर कर्ता-क्रिया के बीच शब्द घुस जाएँ तो आँख गलती करती है।",
            },
            {
              bn: "The boy in the red shirt plays football — ক্রিয়ার কাছে 'shirt' থাকলেও কাজটা করে the boy, তাই plays (play নয়)।",
              en: "The boy in the red shirt plays football — 'shirt' sits near the verb, but the doer is the boy; so plays, not play.",
              hi: "The boy in the red shirt plays football — क्रिया के पास 'shirt' है, पर काम करता है the boy; इसलिए plays (play नहीं)।",
            },
            {
              bn: "মাঝের শব্দগুলো (in the red shirt) বাদ দিয়ে আসল কর্তাটা আঙুল দিয়ে ধরুন, তারপর মিল মেলান।",
              en: "Set the middle words (in the red shirt) aside, put a finger on the real subject, then match.",
              hi: "बीच के शब्द (in the red shirt) हटाकर असली कर्ता पर उँगली रखें, फिर मेल मिलाएँ।",
            },
            {
              bn: "The books on the table are mine — books বহুবচন, table শুধু ঠিকানা; তাই are।",
              en: "The books on the table are mine — books is plural, the table is only the address; so are.",
              hi: "The books on the table are mine — books बहुवचन, table केवल पता; इसलिए are।",
            },
            {
              bn: "The list of items is long — list একবচন (items শুধু list-এর ভেতরের); তাই is।",
              en: "The list of items is long — list is singular (items merely live inside the list); so is.",
              hi: "The list of items is long — list एकवचन (items अंदर की चीज़ें); इसलिए is।",
            },
            {
              bn: "One of my friends plays cricket — one একবচন, friends শুধু গোছা; তাই plays।",
              en: "One of my friends plays cricket — one is singular, friends is just the pack; so plays.",
              hi: "One of my friends plays cricket — one एकवचन, friends केवल गुच्छा; इसलिए plays।",
            },
            {
              bn: "যাচাইয়ের প্রশ্ন একটাই: কে/কী কাজটা করছে? ওই শব্দটা একবচন না বহুবচন?",
              en: "One checking question: who or what is doing the action? Is that word singular or plural?",
              hi: "जाँच का सवाल एक ही: कौन/क्या काम कर रहा है? वह शब्द एकवचन है या बहुवचन?",
            },
            {
              bn: "একবচন → is/has/does/-s, বহুবচন → are/have/do/খালি ক্রিয়া — পাঁচ সেকেন্ডের প্রশ্নেই ৯০ শতাংশ ভুল ধরা পড়ে।",
              en: "Singular → is/has/does/-s, plural → are/have/do/plain verb — this five-second question catches ninety per cent of errors.",
              hi: "एकवचन → is/has/does/-s, बहुवचन → are/have/do/सादी क्रिया — पाँच सेकंड का सवाल 90% गलतियाँ पकड़ लेता है।",
            },
          ],
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
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "⚠️ Common mistakes by Bengali speakers",
            hi: "⚠️ বাংগলাভাষী ছাত্রোঁ কি আম গলতিযাঁ",
          },
          lead: {
            bn: "ভুলের বংশতালিকা চিনলে সারানো সহজ — পাঁচটা চেনা ফাঁদ আর তাদের বাংলা উৎস।",
            en: "Knowing an error's family tree makes it easy to fix — five familiar traps and their Bengali roots.",
            hi: "गलती की जड़ पहचानना ही इलाज है — पाँच जाने-पहचाने जाल और उनकी बांग्ला जड़ें।",
          },
          points: [
            {
              bn: "পাঁচ পরিচিত ভুল: 'He go', 'They was', 'I has', 'My friends is', 'Everyone are' — সবগুলোর শিকড় বাংলা প্যাটার্নে।",
              en: "Five familiar mistakes: 'He go', 'They was', 'I has', 'My friends is', 'Everyone are' — all rooted in Bengali patterns.",
              hi: "पाँच जाने-पहचानी गलती: 'He go', 'They was', 'I has', 'My friends is', 'Everyone are' — सबकी जड़ बांग्ला पैटर्न में।",
            },
            {
              bn: "বাংলায় ক্রিয়া কর্তা অনুযায়ী বদলায় ঠিকই — কিন্তু কোথায় আর কোন আকারে বদলায়, সেটা দুই ভাষায় মেলে না।",
              en: "Bengali verbs do change with the subject — but where and in what shape they change does not line up across the two languages.",
              hi: "बांग्ला में क्रिया कर्ता के अनुसार बदलती है ठीक है — पर कहाँ और किस रूप में बदलती है, वह दोनों भाषाओं में मेल नहीं खाता।",
            },
            {
              bn: "প্রতিটা ভুলের পেছনের বাংলা বাক্যটা বের করুন — ভুলের উৎস সেখানেই।",
              en: "Dig out the Bengali sentence behind each error — that is where the mistake is born.",
              hi: "हर गलती के पीछे का बांग्ला वाक्य निकालें — गलती की जड़ वहीं है।",
            },
            {
              bn: "তারপর ইংরেজি রূপটা জোরে তিনবার বলুন।",
              en: "Then say the English form aloud three times.",
              hi: "फिर अंग्रेज़ी रूप ज़ोर से तीन बार बोलें।",
            },
            {
              bn: "মুখে ঘুরতে শুরু করলেই লেখায় ভুল আসা বন্ধ হয়।",
              en: "Once it rolls off the tongue, the written mistakes stop.",
              hi: "ज़ुबान पर चलने लगे तो लिखते समय गलती रुक जाती है।",
            },
          ],
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
                hi: "'friends' বহুবচন, ইসলিএ are; অংग্রেজি গিনতি করে দেখে।",
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
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 See it in a mini story",
            hi: "📖 এক ছোটি কহানি মে দেখেং",
          },
          lead: {
            bn: "আরিফের পরিচয়-গল্পে পাঠের প্রতিটা নিয়ম একসঙ্গে কাজ করতে দেখুন।",
            en: "Watch every rule of this lesson work together in Arif's introduction story.",
            hi: "आरिफ की परिचय-कहानी में पाठ का हर नियम एक साथ काम करते देखें।",
          },
          points: [
            {
              bn: "শিক্ষক বলেন, 'This is Arif. He is from Rajshahi.' — পরিচয়ের প্রথম বাক্যেই he → is।",
              en: "The teacher says, 'This is Arif. He is from Rajshahi.' — the very first line shows he → is.",
              hi: "शिक्षक কহতे হৈ, 'This is Arif. He is from Rajshahi.' — পহলे হি বাক্যে he → is।",
            },
            {
              bn: "আরিফ বলে, 'I am twelve years old. I have two sisters.' — I → am/have।",
              en: "Arif says, 'I am twelve years old. I have two sisters.' — I → am/have.",
              hi: "আরিফ কহতা হৈ, 'I am twelve years old. I have two sisters.' — I → am/have।",
            },
            {
              bn: "নীলা যোগ করে, 'His sisters are in our school too. They are in class eight.' — they → are।",
              en: "Nila adds, 'His sisters are in our school too. They are in class eight.' — they → are.",
              hi: "নীলা জোগাড় করে, 'His sisters are in our school too. They are in class eight.' — they → are।",
            },
            {
              bn: "শিক্ষক জিজ্ঞেস করেন, 'Does your father work here in Dhaka?' আরিফ: 'Yes, he does. He has a shop in Mirpur.'",
              en: "The teacher asks, 'Does your father work here in Dhaka?' Arif: 'Yes, he does. He has a shop in Mirpur.'",
              hi: "শিক্ষক পুছেন, 'Does your father work here in Dhaka?' আরিফ: 'Yes, he does. He has a shop in Mirpur.'",
            },
            {
              bn: "'My mother and my uncle run it together.' — 'A and B' দেখলেই ক্রিয়ার s খুলে যায় → run।",
              en: "'My mother and my uncle run it together.' — on seeing 'A and B', the s comes off the verb → run.",
              hi: "'My mother and my uncle run it together.' — 'A and B' দেখতে হি क्रिया का s হট জাতা হৈ → run।",
            },
            {
              bn: "নীলা হেসে বলে, 'Everyone in his family is hardworking!' — everyone একবচন → is।",
              en: "Nila laughs, 'Everyone in his family is hardworking!' — everyone is singular → is.",
              hi: "নীলা হাসি দিয়ে কহে, 'Everyone in his family is hardworking!' — everyone একবচন → is।",
            },
            {
              bn: "এক নজরে: I → am/have/do; he/she/it → is/has/does/-s; we/you/they → are/have/do; অতীতে I/he/she/it → was, বাকি সব → were।",
              en: "In a nutshell: I → am/have/do; he/she/it → is/has/does/-s; we/you/they → are/have/do; in the past I/he/she/it → was, everyone else → were.",
              hi: "এক নজর মে: I → am/have/do; he/she/it → is/has/does/-s; we/you/they → are/have/do; অতীতে I/he/she/it → was, বাকি सब → were।",
            },
            {
              bn: "আরও: everyone/nobody একবচন; 'A and B' বহুবচন; মাঝের শব্দ নয় — আসল কর্তাই ক্রিয়া ঠিক করে।",
              en: "And: everyone/nobody are singular; 'A and B' make a plural; not the middle words — the real subject decides the verb.",
              hi: "और: everyone/nobody एकवचन; 'A and B' बहुवचन; बीच के शब्द नहीं — असली कर्ता ही क्रिया तय करता है।",
            },
          ],
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
          hi: "तिन সারির চার্ট রটাও: I → am/do/have; he/she/it → is/does/has; we/you/they → are/do/have।",
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
  /* ── 2. Question Formation ────── */
  {
    topic: "Question Formation",
    level: "beginner",
    title: "Question Formation (Beginner)",
    unit: 3,
    sortOrder: 2,
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
      roadmap: [
        {
          bn: "🧭 প্রশ্নের দুই পরিবার — yes/no আর wh, আর inversion-এর মূলমন্ত্র",
          en: "🧭 The two question families — yes/no and wh, and the inversion mantra",
          hi: "🧭 प्रश्न के दो परिवार — yes/no और wh, और inversion का मूल मंत्र",
        },
        {
          bn: "🏗️ Do/Does/Did + কর্তা + V1 — কোন কর্তায় কোন helper",
          en: "🏗️ Do/Does/Did + subject + V1 — which helper for which subject",
          hi: "🏗️ Do/Does/Did + कर्ता + V1 — कौन-सा helper किस कर्ता के साथ",
        },
        {
          bn: "🚦 wh-পরিবারের সব শব্দ, অর্থ আর তাদের একমাত্র আসন",
          en: "🚦 The whole wh-family — words, meanings and their single seat",
          hi: "🚦 wh-परिवार के सारे शब्द, अर्थ और एकमात्र आसन",
        },
        {
          bn: "🧩 wh-প্রশ্নের স্থির চার ধাপ — ক্রম কখনো ভাঙে না",
          en: "🧩 The fixed four steps of a wh-question — the order never breaks",
          hi: "🧩 wh-प्रश्न के स्थिर चार कदम — क्रम कभी नहीं टूटता",
        },
        {
          bn: "🔀 do লাগে না যেখানে — be-verb, modal, auxiliary-র নিজস্ব নিয়ম",
          en: "🔀 Where do is not needed — be-verbs, modals and auxiliaries flip themselves",
          hi: "🔀 जहाँ do नहीं लगता — be-verb, modal, auxiliary का अपना नियम",
        },
        {
          bn: "💬 ছোট উত্তর — Yes, I do / No, I don't; auxiliary-ই ফেরে",
          en: "💬 Short answers — Yes, I do / No, I don't; the auxiliary returns",
          hi: "💬 छोटे उत्तर — Yes, I do / No, I don't; auxiliary ही लौटता है",
        },
        {
          bn: "⚠️ 'What you doing?'-জাতীয় পাঁচ ভুল পরিবার আর তিন প্রশ্নের সারানো",
          en: "⚠️ Five error families like 'What you doing?' — and the three-question cure",
          hi: "⚠️ 'What you doing?' जैसे पाँच गलती-परिवार और तीन सवालों का इलाज",
        },
        {
          bn: "📖 নাদিয়া-রাকিবের ফোন-কথায় সব নিয়ম জীবন্ত",
          en: "📖 All rules come alive in Nadia and Rakib's phone call",
          hi: "📖 नादिया-राकिब की फ़ोन-बातचीत में सारे नियम जीवंत",
        },
      ],
      sections: [
        {
          heading: {
            bn: "🧭 কখন ব্যবহার হয় — প্রশ্নের দুই পরিবার",
            en: "🧭 When to use it — the two families of questions",
            hi: "🧭 कब ইस্তেমাল हোতা হৈ — प्रश्न के দो परिवार",
          },
          lead: {
            bn: "বাংলায় 'কি' প্রশ্ন বানায়, ইংরেজিতে ক্রম বদল — এই ফারাকই আজকের পাঠের মূলমন্ত্র।",
            en: "In Bengali 'ki' makes the question, in English the changed order does — that gap is today's mantra.",
            hi: "बांग्ला में 'कि' प्रश्न बनाता है, अंग्रेज़ी में बदला क्रम — यही फ़र्क़ आज का मूल मंत्र है।",
          },
          points: [
            {
              bn: "প্রশ্নের কাজ একটাই — উত্তর পাওয়া; কিন্তু ইংরেজি প্রশ্ন দুই পরিবারে ভাগ হয়।",
              en: "A question has one job — to get an answer; but English questions come in two families.",
              hi: "प्रश्न का काम एक ही है — उत्तर पाना; पर अंग्रेज़ी प्रश्न दो परिवारों में बँटते हैं।",
            },
            {
              bn: "**Yes/No প্রশ্ন** — উত্তর শুধু হ্যাঁ বা না: Do you like tea? Are you ready? Did he call you?",
              en: "**Yes/No questions** — the answer is just yes or no: Do you like tea? Are you ready? Did he call you?",
              hi: "**Yes/No प्रश्न** — उत्तर केवल हाँ या ना: Do you like tea? Are you ready? Did he call you?",
            },
            {
              bn: "**Wh-প্রশ্ন** — উত্তরে তথ্য লাগবে: What do you want? Where do you live? Why did she cry?",
              en: "**Wh-questions** — the answer needs information: What do you want? Where do you live? Why did she cry?",
              hi: "**Wh-प्रश्न** — उत्तर में जानकारी चाहिए: What do you want? Where do you live? Why did she cry?",
            },
            {
              bn: "বাংলায় প্রশ্ন প্রায় বিনা খরচে: বাক্যের শেষে 'কি?' বসান বা গলার স্বর ওপরে তুলুন — শব্দের ক্রম বদলায় না।",
              en: "In Bengali a question costs almost nothing: add 'ki?' at the end or raise your tone — the word order never changes.",
              hi: "बांग्ला में प्रश्न लगभग मुफ़्त: वाक्य के अंत में 'कि?' लगाएँ या आवाज़ ऊपर उठाएँ — शब्द-क्रम नहीं बदलता।",
            },
            {
              bn: "ইংরেজিতে প্রশ্ন মানেই ক্রম বদল: You like tea. → Do you like tea? You are ready. → Are you ready?",
              en: "In English a question means the order changes: You like tea. → Do you like tea? You are ready. → Are you ready?",
              hi: "अंग्रेज़ी में प्रश्न का मतलब ही क्रम बदलना: You like tea. → Do you like tea? You are ready. → Are you ready?",
            },
            {
              bn: "কর্তার জায়গায় সামনে auxiliary (do/does/did, be-verb, modal) দাঁড়ায়, কর্তা পেছনে সরে যায় — এটাই **inversion**।",
              en: "An auxiliary (do/does/did, a be-verb, a modal) stands at the front in the subject's place, and the subject steps back — that is **inversion**.",
              hi: "कर्ता की जगह सामने auxiliary (do/does/did, be-verb, modal) खड़ा होता है, कर्ता पीछे सरक जाता है — यही **inversion** है।",
            },
            {
              bn: "মূলমন্ত্র এক লাইনে: বাংলায় 'কি' প্রশ্ন বানায়, ইংরেজিতে ক্রম বদলই প্রশ্ন বানায়।",
              en: "The mantra in one line: Bengali 'ki' makes the question, in English the changed order makes it.",
              hi: "मूल मंत्र एक पंक्ति में: बांग्ला में 'कि' प्रश्न बनाता है, अंग्रेज़ी में बदला हुआ क्रम।",
            },
          ],
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
            bn: "🏗️ গঠন — do/does/did + কর্তা + V1 (সব পুরুষ)",
            en: "🏗️ Formation — do/does/did + subject + V1 (every person)",
            hi: "🏗️ বনাবট — do/does/did + कर्ता + V1 (हर পুরুষ)",
          },
          lead: {
            bn: "সাধারণ ক্রিয়ার প্রশ্নের একটাই সূত্র — আর helper নিজেই কাল আর s-এর বোঝা বহন করে।",
            en: "Ordinary-verb questions have one formula — and the helper itself carries the tense and the s.",
            hi: "साधारण क्रिया के प्रश्न का एक ही सूत्र — और helper स्वयं काल और s का बोझ उठाता है।",
          },
          formula: {
            bn: "Do/Does/Did + কর্তা + ক্রিয়ার মূল রূপ (V1)",
            en: "Do/Does/Did + subject + base verb (V1)",
            hi: "Do/Does/Did + कर्ता + मूल क्रिया (V1)",
          },
          table: {
            head: [
              { bn: "helper", en: "helper", hi: "helper" },
              { bn: "কর্তা", en: "subject", hi: "कर्ता" },
              { bn: "উদাহরণ", en: "example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "Do", en: "Do", hi: "Do" },
                { bn: "I/you/we/they", en: "I/you/we/they", hi: "I/you/we/they" },
                { bn: "Do you play chess?", en: "Do you play chess?", hi: "Do you play chess?" },
              ],
              [
                { bn: "Does", en: "Does", hi: "Does" },
                { bn: "he/she/it", en: "he/she/it", hi: "he/she/it" },
                { bn: "Does she sing?", en: "Does she sing?", hi: "Does she sing?" },
              ],
              [
                { bn: "Did", en: "Did", hi: "Did" },
                { bn: "সব কর্তা (অতীতে)", en: "every subject (past)", hi: "सब कर्ता (अतीत में)" },
                { bn: "Did you go?", en: "Did you go?", hi: "Did you go?" },
              ],
            ],
          },
          points: [
            {
              bn: "বর্তমানে I/you/we/they-এর সঙ্গে **Do**: Do I know you? Do you play chess? Do they live here?",
              en: "In the present, I/you/we/they take **Do**: Do I know you? Do you play chess? Do they live here?",
              hi: "वर्तमान में I/you/we/they के साथ **Do**: Do I know you? Do you play chess? Do they live here?",
            },
            {
              bn: "he/she/it-এর সঙ্গে **Does**: Does she sing? Does he know the way?",
              en: "he/she/it takes **Does**: Does she sing? Does he know the way?",
              hi: "he/she/it के साथ **Does**: Does she sing? Does he know the way?",
            },
            {
              bn: "অতীতে সব কর্তার সঙ্গে **Did**: Did you go? Did she call? Did they come?",
              en: "In the past every subject takes **Did**: Did you go? Did she call? Did they come?",
              hi: "अतीत में सब कर्ताओं के साथ **Did**: Did you go? Did she call? Did they come?",
            },
            {
              bn: "do/does/did নিজেই কালের বোঝা বহন করে — তাই পরের ক্রিয়া সবসময় V1।",
              en: "do/does/did carries the tense by itself — so the verb after it always stays V1.",
              hi: "do/does/did स्वयं काल ढोता है — इसलिए बाद की क्रिया सदा V1।",
            },
            {
              bn: "Did you went ভুল, Did you go ঠিক; Does she likes ভুল, Does she like ঠিক।",
              en: "'Did you went' is wrong, 'Did you go' is right; 'Does she likes' is wrong, 'Does she like' is right.",
              hi: "'Did you went' गलत, 'Did you go' सही; 'Does she likes' गलत, 'Does she like' सही।",
            },
            {
              bn: "বাংলার 'কি' শেষে বা মাঝে বসতে পারে; do/does/did সবসময় বাক্যের একদম শুরুতে (wh-শব্দের ঠিক পরে)।",
              en: "Bengali 'ki' can sit at the end or in the middle; do/does/did always stands at the very front (right after a wh-word).",
              hi: "बांग्ला का 'कि' अंत या बीच में बैठ सकता है; do/does/did हमेशा वाक्य की शुरुआत में (wh-शब्द के ठीक बाद)।",
            },
            {
              bn: "কর্তা বদলালে do/does-এর ভাগও বদলায়: I do, he does — ঠিক যেমন বাংলায় 'কি করো/কি করে'।",
              en: "When the subject changes, the do/does split changes too: I do, he does — just as Bengali changes 'ki koro/ki kore'.",
              hi: "कर्ता बदलने पर do/does का बँटवारा भी बदलता है: I do, he does — जैसे बांग्ला में 'कি করো/কি করে'।",
            },
          ],
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
            bn: "🚦 আভাস শব্দ — wh-পরিবার ও তাদের আসন",
            en: "🚦 Signal words — the wh-family and their seat",
            hi: "🚦 সংকেত শব্দ — wh-परिवार और উনকি सीट",
          },
          lead: {
            bn: "wh-পরিবারের শব্দগুলো মুখস্থ — আর মনে রাখুন, তাদের আসন বাক্যের একদম প্রথম পদ।",
            en: "Memorise the wh-family words — and remember, their seat is the very first word of the sentence.",
            hi: "wh-परिवार के शब्द रटें — और याद रखें, उनका आसन वाक्य का पहला पद है।",
          },
          table: {
            head: [
              { bn: "wh-শব্দ", en: "wh-word", hi: "wh-शब्द" },
              { bn: "অর্থ", en: "meaning", hi: "अर्थ" },
              { bn: "উদাহরণ", en: "example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "what", en: "what", hi: "what" },
                { bn: "কী", en: "what", hi: "क्या" },
                { bn: "What do you want?", en: "What do you want?", hi: "What do you want?" },
              ],
              [
                { bn: "where", en: "where", hi: "where" },
                { bn: "কোথায়", en: "where", hi: "कहाँ" },
                { bn: "Where do you live?", en: "Where do you live?", hi: "Where do you live?" },
              ],
              [
                { bn: "when", en: "when", hi: "when" },
                { bn: "কখন", en: "when", hi: "कब" },
                { bn: "When does the shop open?", en: "When does the shop open?", hi: "When does the shop open?" },
              ],
              [
                { bn: "who", en: "who", hi: "who" },
                { bn: "কে", en: "who", hi: "कौन" },
                { bn: "Who called you?", en: "Who called you?", hi: "Who called you?" },
              ],
              [
                { bn: "why", en: "why", hi: "why" },
                { bn: "কেন", en: "why", hi: "क्यों" },
                { bn: "Why are you late?", en: "Why are you late?", hi: "Why are you late?" },
              ],
              [
                { bn: "how", en: "how", hi: "how" },
                { bn: "কীভাবে", en: "how", hi: "कैसे" },
                { bn: "How do you go to office?", en: "How do you go to office?", hi: "How do you go to office?" },
              ],
              [
                { bn: "whose", en: "whose", hi: "whose" },
                { bn: "কার", en: "whose", hi: "किसका" },
                { bn: "Whose bag is this?", en: "Whose bag is this?", hi: "Whose bag is this?" },
              ],
              [
                { bn: "which", en: "which", hi: "which" },
                { bn: "কোনটা", en: "which", hi: "कौन-सा" },
                { bn: "Which one do you like?", en: "Which one do you like?", hi: "Which one do you like?" },
              ],
            ],
          },
          points: [
            {
              bn: "how-এর সঙ্গে জুড়ে আরও যন্ত্র: how much (কত — অগণনযোগ্য/দাম), how many (কয়টা — গণনাযোগ্য)।",
              en: "With how more tools are built: how much (quantity — uncountables and prices), how many (countables).",
              hi: "how के साथ और औज़ार: how much (कितना — अगणनीय/क़ीमत), how many (कितने — गिनने योग्य)।",
            },
            {
              bn: "আরও: how old (বয়স কত), how long (কত দিন/সময়), how often (কতবার)।",
              en: "More: how old (age), how long (duration), how often (frequency).",
              hi: "और भी: how old (उम्र), how long (कितना समय), how often (कितनी बार)।",
            },
            {
              bn: "বাংলায় প্রশ্নবোধক শব্দ যেকোনো জায়গায় ঘুরতে পারে — 'তুমি কী খাচ্ছ', 'কী খাচ্ছ তুমি', 'খাচ্ছ তুমি কী'।",
              en: "In Bengali the question word can roam anywhere — 'tumi ki khachcho', 'ki khachcho tumi', 'khachcho tumi ki' all work.",
              hi: "बांग्ला में प्रश्न-शब्द कहीं भी घूम सकता है — 'তুমি কী খাচ্ছ', 'কী খাচ্ছ তুমি', 'খাচ্ছ তুমি কী' — सभी चलते हैं।",
            },
            {
              bn: "কিন্তু ইংরেজি wh-শব্দের আসন একটাই: বাক্যের একদম প্রথম পদ।",
              en: "But the seat of the English wh-word is fixed: the very first word of the sentence.",
              hi: "पर अंग्रेज़ी wh-शब्द का आसन एक ही: वाक्य का पहला पद।",
            },
            {
              bn: "তারপর আসে auxiliary, তারপর কর্তা — সঠিক ক্রমটা পরের অংশে শিখব।",
              en: "After it comes the auxiliary, then the subject — the exact order is what the next section teaches.",
              hi: "उसके बाद auxiliary, फिर कर्ता — सही क्रम अगले भाग में सीखेंगे।",
            },
          ],
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
                hi: "कक्षा की सबसे जानी-पहचानी गलती — अंग्रेज़ी লেতी হৈ does + this word + mean।",
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
                hi: "'दाम कितना?' सोचকर अनुवाद करने पर क्रम टूटता है; नियम: how much + does + कर्ता + V1।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🧩 wh-প্রশ্নের স্থির ক্রম — চার ধাপ",
            en: "🧩 The fixed order of wh-questions — four steps",
            hi: "🧩 wh-प्रश्न का स्थिर क्रम — चार কদম",
          },
          lead: {
            bn: "এই চার ধাপের ক্রম কখনো ভাঙে না — মুখস্থ করলে wh-প্রশ্ন আর ভুল হবে না।",
            en: "This four-step order never breaks — memorise it and wh-questions stop going wrong.",
            hi: "यह चार-कदम का क्रम कभी नहीं टूटता — रट लें, wh-प्रश्न गलत नहीं होगा।",
          },
          formula: {
            bn: "wh-শব্দ → auxiliary (do/does/did বা be/modal) → কর্তা → মূল ক্রিয়া (V1)",
            en: "wh-word → auxiliary (do/does/did or be/modal) → subject → main verb (V1)",
            hi: "wh-शब्द → auxiliary (do/does/did या be/modal) → कर्ता → मूल क्रिया (V1)",
          },
          points: [
            {
              bn: "Where did you go? — where (১) + did (২) + you (৩) + go (৪)।",
              en: "Where did you go? — where (1) + did (2) + you (3) + go (4).",
              hi: "Where did you go? — where (1) + did (2) + you (3) + go (4)।",
            },
            {
              bn: "আরও দেখুন: What do you want? Why is she crying? When will they arrive?",
              en: "More: What do you want? Why is she crying? When will they arrive?",
              hi: "औর दেखें: What do you want? Why is she crying? When will they arrive?",
            },
            {
              bn: "বাংলা অভ্যাস প্রশ্ন-শব্দের পরেই কর্তা বসিয়ে দেয় ('What you want?') — এটাই সবচেয়ে পরিচিত ভুল।",
              en: "The Bengali habit pushes the subject right after the question word ('What you want?') — the most familiar mistake.",
              hi: "बांग्ला की आदत प्रश्न-शब्द के ठीক बाद कर्ता बिठा देती है ('What you want?') — यही सबसे कॉमन गलती है।",
            },
            {
              bn: "ছোট করে মনে রাখুন: wh-এর পরে কর্তা নয়, আগে auxiliary।",
              en: "Remember it short: after the wh-word comes the auxiliary, not the subject.",
              hi: "छोटा सूत्र: wh-शब्द के बाद कर्ता नहीं, पहले auxiliary।",
            },
            {
              bn: "ফাঁদ: অতীতের প্রশ্নে did বসলে মূল ক্রিয়া V1-এ ফিরে যায় — 'Where you went?' ভুল দুই জায়গায় (did নেই, V2 আছে)।",
              en: "Trap: in a past question did sends the main verb back to V1 — 'Where you went?' is wrong twice (no did, and a V2).",
              hi: "जाल: अतीत के प्रश्न में did के साथ मूल क्रिया V1 में लौटती है — 'Where you went?' दो जगह गलत (did नहीं, V2 है)।",
            },
            {
              bn: "ঠিক হবে Where did you go? — did-এর ভেতরেই অতীত আছে, went-এর দরকার নেই।",
              en: "The right form is Where did you go? — the past is already inside did; went is not needed.",
              hi: "सही রূप Where did you go? — अतीত did के ভीতर ही है, went की ज़रूरत নहीं।",
            },
          ],
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
                hi: "did कर्ता से पहले, मूल क्रियা do V1 में — How did you do...?",
              },
            },
            {
              wrong: "Who did call you last night?",
              right: "Who called you last night?",
              note: {
                bn: "'কে ফোন করেছিল?'-এ who নিজেই কর্তা — কর্তা-who-এর সঙ্গে do লাগে না; কিন্তু 'তুমি কাকে ফোন করেছ?' হলে Whom did you call? — do ফেরত আসবে।",
                en: "In 'Who called you?' the word who is itself the subject, so no do joins a subject-who; but for 'Whom did you call?' (you called whom) do comes back.",
                hi: "'Who called you?' में who स्वयं कर्ता है, इसलिए do নহীं আতা; पर 'Whom did you call?' মে do ঵ापস আতा है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🔀 যেখানে do লাগে না — be-verb, modal, auxiliary",
            en: "🔀 Where do is not needed — be-verbs, modals, auxiliaries",
            hi: "🔀 জহাঁ do নহীং লগতা — be-verb, modal, auxiliary",
          },
          lead: {
            bn: "সব প্রশ্নে do লাগে না — বাক্যে থাকা শব্দটাই নিজে কর্তার সামনে উল্টে আসে।",
            en: "Not every question needs do — a word already in the sentence flips in front of the subject by itself.",
            hi: "हर प्रश्न में do नहीं लगता — वाक्य में मौजूद शब्द स्वयं कर्ता के सामने पलट आता है।",
          },
          formula: {
            bn: "be-verb বা modal থাকলে → ওটাই কর্তার সামনে উল্টে যায়, do লাগে না",
            en: "With a be-verb or modal → that word itself flips in front of the subject; no do",
            hi: "be-verb या modal हो तो → वही कर्ता के सामने पलट जाता है; do नहीं लगता",
          },
          points: [
            {
              bn: "বাক্যে আগে থেকে **be-verb** থাকলে (am/is/are/was/were) ওটাই কর্তার সামনে উল্টে আসে।",
              en: "If the sentence already has a **be-verb** (am/is/are/was/were), that word itself flips in front of the subject.",
              hi: "वाक्य में पहले से **be-verb** हो (am/is/are/was/were) तो वही कर्ता के सामने पलटता है।",
            },
            {
              bn: "**modal**-এর ক্ষেত্রেও একই (can/will/shall/should/must), আর auxiliary-ও (have/has) — do-এর জায়গাই থাকে না।",
              en: "The same with **modals** (can/will/shall/should/must) and auxiliaries (have/has) — do has no seat.",
              hi: "**modal** के साथ भी ঵হী (can/will/shall/should/must), ঔর auxiliary ভी (have/has) — do की জगह ही नहीं रहती।",
            },
            {
              bn: "You are ready. → Are you ready? He is your brother. → Is he your brother?",
              en: "You are ready. → Are you ready? He is your brother. → Is he your brother?",
              hi: "You are ready. → Are you ready? He is your brother. → Is he your brother?",
            },
            {
              bn: "She can swim. → Can she swim? They will come. → Will they come?",
              en: "She can swim. → Can she swim? They will come. → Will they come?",
              hi: "She can swim. → Can she swim? They will come. → Will they come?",
            },
            {
              bn: "wh-প্রশ্নেও একই নিয়ম — wh + be/modal + কর্তা: What are you doing? Where is the bus? Why is he angry?",
              en: "The same rule in wh-questions — wh + be/modal + subject: What are you doing? Where is the bus? Why is he angry?",
              hi: "wh-प्रश्नों में भी ঵হी নিয়ম — wh + be/modal + कर्ता: What are you doing? Where is the bus? Why is he angry?",
            },
            {
              bn: "সবচেয়ে চেনা ভুল: **'What you doing?'** — বাক্যে be-verb-ই নেই! ঠিক হবে What are you doing?",
              en: "The most familiar mistake: **'What you doing?'** — the sentence has no be-verb at all! The right form is What are you doing?",
              hi: "सবसे जानी-पहचानी গলতি: **'What you doing?'** — বাক্যে be-verb হি নহীং! সহী রূপ What are you doing?",
            },
            {
              bn: "doing শুনলেই মনে করুন — doing-এর সামনে am/is/are বাধ্যতামূলক।",
              en: "The moment you hear doing, remember — an am/is/are before it is compulsory.",
              hi: "doing सुনते হি याद रखें — doing से पहले am/is/are अनिवार्य।",
            },
            {
              bn: "আর do-এর সঙ্গে modal কখনো জোড়া দেবেন না — Do you can swim? ভুল; Can you swim? ঠিক।",
              en: "And never pair do with a modal — 'Do you can swim?' is wrong; Can you swim? is right.",
              hi: "और do को modal से कभी ন জোড়েं — 'Do you can swim?' গলত; Can you swim? ঠিক।",
            },
          ],
          examples: [
            {
              wrong: "What you doing?",
              right: "What are you doing?",
              note: {
                bn: "চ্যাটে সবচেয়ে ঘন ঘন দেখা ভুল — doing-এর আগে am/is/are ছাড়া বাক্য ইংরেজিতে দাঁড়ায় না।",
                en: "The most frequent chat mistake — English cannot stand a 'doing' without am/is/are before it.",
                hi: "चैट की सबसे আম গলতি — doing সে পহলে am/is/are কে বিন বাক্য খড়া নহীং হোতা।",
              },
            },
            {
              wrong: "Do you can swim?",
              right: "Can you swim?",
              note: {
                bn: "can-ই প্রশ্ন বানানোর যন্ত্র — do-এর সঙ্গে modal জোড়া দেওয়া যায় না।",
                en: "'Can' is itself the question-maker — a modal never pairs with do.",
                hi: "can स्वयं प्रश्न-निर्माता হৈ — modal কে সাথ do নহীং জুড়তা।",
              },
            },
            {
              wrong: "Does he is angry?",
              right: "Is he angry?",
              note: {
                bn: "be-verb থাকলে do ঢোকার জায়গাই নেই — is-ই উল্টে সামনে।",
                en: "When a be-verb is there, do has no seat — is itself flips to the front.",
                hi: "be-verb হোনে পর do কি কোই জগহ নহীং — is स্বয়ं পলটকর আগে।",
              },
            },
            {
              wrong: "When the train will arrive?",
              right: "When will the train arrive?",
              note: {
                bn: "will কর্তা (the train)-এর আগে ওঠবে — wh + will + কর্তা + V1।",
                en: "'Will' steps in front of the subject (the train) — wh + will + subject + V1.",
                hi: "will कर्ता (the train) से पहলे জাএগা — wh + will + कर्ता + V1।",
              },
            },
            {
              wrong: "Where you are going now?",
              right: "Where are you going now?",
              note: {
                bn: "একই ভুলের আরেক চেহারা — wh-এর পরে কর্তা নয়, be-verb।",
                en: "Another face of the same mistake — after the wh-word comes the be-verb, not the subject.",
                hi: "উসী গলতी কা এক ঔর চেহরা — wh কে বাদ কর্তা নহীং, be-verb।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "💬 ছোট উত্তর — Yes, I do / No, I don't",
            en: "💬 Short answers — Yes, I do / No, I don't",
            hi: "💬 ছোটে উত্তর — Yes, I do / No, I don't",
          },
          lead: {
            bn: "উত্তরে পুরো বাক্য লাগে না — প্রশ্ন যে auxiliary নিয়েছিল, উত্তরে সেটাই ফেরে।",
            en: "A full sentence is not needed to answer — the auxiliary the question used is the one that returns.",
            hi: "उत्तर में पूरा वाक्य नहीं चाहिए — प्रश्न जो auxiliary লाया থা, বহी লৌটতা হৈ।",
          },
          formula: {
            bn: "Yes/No + কর্তা + প্রশ্নের auxiliary-ই ফেরত",
            en: "Yes/No + subject + the very auxiliary the question used",
            hi: "Yes/No + कर्ता + प्रश्न वाला বহी auxiliary",
          },
          points: [
            {
              bn: "ছোট উত্তরই স্বাভাবিক: Yes, I do. / No, I don't. / Yes, she is. / No, he didn't. / Yes, I can।",
              en: "The short answer is natural: Yes, I do. / No, I don't. / Yes, she is. / No, he didn't. / Yes, I can.",
              hi: "ছোটা উত্তর হी স্বাভাবিক: Yes, I do. / No, I don't. / Yes, she is. / No, he didn't. / Yes, I can।",
            },
            {
              bn: "Do you like tea? → Yes, I do (like নয়!)। Is Rahim your friend? → Yes, he is।",
              en: "Do you like tea? → Yes, I do (not 'like'). Is Rahim your friend? → Yes, he is.",
              hi: "Do you like tea? → Yes, I do ('like' নহীং)। Is Rahim your friend? → Yes, he is।",
            },
            {
              bn: "Did you watch the match? → Yes, I did। Can she drive? → No, she can't।",
              en: "Did you watch the match? → Yes, I did. Can she drive? → No, she can't.",
              hi: "Did you watch the match? → Yes, I did। Can she drive? → No, she can't।",
            },
            {
              bn: "বাংলায় বলি 'হ্যাঁ, খেয়েছি' — মূল ক্রিয়া ফিরে আসে; ইংরেজিতে auxiliary-ই ফেরে, মূল ক্রিয়া থাকে না।",
              en: "In Bengali we answer 'hyan, kheyechhi' — the main verb comes back; in English the auxiliary returns, the main verb stays out.",
              hi: "बांग्लা মে কহতে হৈ 'হাঁ, খেয়েছি' — मूल क्रियা লৌটতी হৈ; অंग্রेज़ी মে auxiliary লৌটতা হৈ, मूल क्रिया নহীং।",
            },
            {
              bn: "'Yes, I ate' বললেও হয়, কিন্তু Yes, I did সবচেয়ে স্বাভাবিক।",
              en: "'Yes, I ate' is possible, but Yes, I did is the most natural.",
              hi: "'Yes, I ate' সম্ভব হৈ, পর Yes, I did সবসে স্বাভাবিক।",
            },
            {
              bn: "ফাঁদ ১: ছোট হ্যাঁ-উত্তরে contraction নয় — 'Yes, he's' ভুল, Yes, he is ঠিক।",
              en: "Trap 1: no contraction in a short yes-answer — 'Yes, he's' is wrong, Yes, he is is right.",
              hi: "জাল 1: ছোটে হাঁ-উত্তর মে contraction নহীং — 'Yes, he's' গলত, Yes, he is সহী।",
            },
            {
              bn: "ফাঁদ ২: auxiliary মিলাতে হবে — Are they at home? প্রশ্নের উত্তর Yes, they are; Yes, they do নয়।",
              en: "Trap 2: the auxiliary must match — for Are they at home? the answer is Yes, they are, never Yes, they do.",
              hi: "जाल 2: auxiliary মিলানা হোগা — Are they at home? কা উত্তর Yes, they are; Yes, they do নহীং।",
            },
          ],
          examples: [
            {
              wrong: "Do you like tea? — Yes, I like.",
              right: "Do you like tea? — Yes, I do.",
              note: {
                bn: "ছোট উত্তরে auxiliary-ই ফেরে — Do-প্রশ্নের উত্তর Yes, I do; 'হ্যাঁ, পছন্দ করি'-র অনুবাদ হিসেবে Yes, I like বলা হয় না।",
                en: "In short answers the auxiliary returns — a Do-question takes Yes, I do; 'Yes, I like' is a Bengali translation, not English.",
                hi: "ছোটে উত্তর মে auxiliary হी লৌটতা হৈ — Do-प्रश्न কा উত্তর Yes, I do।",
              },
            },
            {
              wrong: "Is Rahim your cousin? — Yes, he's.",
              right: "Is Rahim your cousin? — Yes, he is.",
              note: {
                bn: "ছোট হ্যাঁ-উত্তরে contraction চলে না — Yes, he's ভুল, Yes, he is ঠিক; contraction শুধু লম্বা বাক্যে চলে।",
                en: "A short yes-answer takes no contraction — 'Yes, he's' is wrong, Yes, he is is right; contractions belong to longer sentences.",
                hi: "ছোটে হাঁ-উত্তর মে contraction নহীং — 'Yes, he's' গলত, Yes, he is সহী।",
              },
            },
            {
              wrong: "Did you watch the match? — Yes, I watched.",
              right: "Did you watch the match? — Yes, I did.",
              note: {
                bn: "did-প্রশ্নের উত্তর did — অতীতের প্রশ্ন অতীতের auxiliary-তেই উত্তর পায়; মূল ক্রিয়া দোহরাতে হয় না।",
                en: "A did-question is answered with did — a past question takes the past auxiliary; no need to repeat the main verb.",
                hi: "did-प्रश्न का উত্তর did হি হৈ — मूল क्रिया দোহরানে কি জ़রूরत নহীং।",
              },
            },
            {
              wrong: "Are they at home? — Yes, they do.",
              right: "Are they at home? — Yes, they are.",
              note: {
                bn: "প্রশ্নের auxiliary আর উত্তরের auxiliary মিলবে — Are-প্রশ্নে do নয়, are।",
                en: "The auxiliary of the question and the answer must match — an Are-question takes are, not do.",
                hi: "প्रশ্ন ঔর উত্তর কा auxiliary মিলেগা — Are-प्रश्न মে do নহীং, are।",
              },
            },
            {
              wrong: "Can she drive a car? — No, she don't.",
              right: "Can she drive a car? — No, she can't.",
              note: {
                bn: "can-প্রশ্নের নেগেটিভ উত্তর can't — don't এখানে অচেনা; উত্তরও প্রশ্নের auxiliary-ই ধারণ করে।",
                en: "The negative answer to a can-question is can't — 'don't' is a stranger here; the answer borrows the question's auxiliary.",
                hi: "can-प्रश्न का নকারাত্মক উত্তর can't হৈ — 'don't' যহাঁ অনজান হৈ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল — প্রশ্নের জগতে",
            en: "⚠️ Common mistakes by Bengali speakers — in the world of questions",
            hi: "⚠️ বাংগলাভাষী ছাত্রোঁ কি আম গলতিযাঁ — প্রশ্নের জগতে",
          },
          lead: {
            bn: "সব ভুলের শিকড় এক — বাংলায় 'কি' আর গলার স্বর প্রশ্ন বানায়, শব্দের ক্রম নয়।",
            en: "All these mistakes share one root — in Bengali 'ki' and the rising tone make the question, not the word order.",
            hi: "सब गलतियों की জড় এক — বাংগ্লা মে 'কি' ঔর উঠती আবাজ़ প्रশ্ন বনাতী হৈ, শব্দ-ক্রম নহীং।",
          },
          table: {
            head: [
              { bn: "ভুল পরিবার", en: "Error family", hi: "गलती-परिवार" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
              { bn: "সঠিক রূপ", en: "Correct form", hi: "सही রূপ" },
            ],
            rows: [
              [
                { bn: "wh-এর পরে কর্তা", en: "subject right after the wh-word", hi: "wh-শব্দ কे বাদ কর্তা" },
                { bn: "What you want?", en: "What you want?", hi: "What you want?" },
                { bn: "What do you want?", en: "What do you want?", hi: "What do you want?" },
              ],
              [
                { bn: "did/does-এর পরে V2 বা s", en: "V2 or s after did/does", hi: "did/does কे বাদ V2 বা s" },
                { bn: "Where did she went?", en: "Where did she went?", hi: "Where did she went?" },
                { bn: "Where did she go?", en: "Where did she go?", hi: "Where did she go?" },
              ],
              [
                { bn: "গলার স্বরেই প্রশ্ন ভাবা", en: "question by rising tone alone", hi: "উठती আবাজ़ সে হি প्रশ্ন" },
                { bn: "You are coming?", en: "You are coming?", hi: "You are coming?" },
                { bn: "Are you coming?", en: "Are you coming?", hi: "Are you coming?" },
              ],
              [
                { bn: "do + be/modal জোড়া", en: "pairing do with a be/modal", hi: "do + be/modal কি জোড়ी" },
                { bn: "Do you can swim?", en: "Do you can swim?", hi: "Do you can swim?" },
                { bn: "Can you swim?", en: "Can you swim?", hi: "Can you swim?" },
              ],
              [
                { bn: "ছোট উত্তরে ভুল auxiliary", en: "wrong auxiliary in short answers", hi: "ছোটে উত্তর মে গলত auxiliary" },
                { bn: "Yes, they do (Are they...?)", en: "Yes, they do (Are they...?)", hi: "Yes, they do (Are they...?)" },
                { bn: "Yes, they are", en: "Yes, they are", hi: "Yes, they are" },
              ],
            ],
          },
          points: [
            {
              bn: "পাশের ছকের পাঁচ পরিবারই এই পাঠের প্রায় সব ভুল ঢেকে দেয় — প্রতিটার সঙ্গে সঠিক রূপও আছে।",
              en: "The five families in the table cover nearly every mistake of this lesson — each with its correct form.",
              hi: "पास কे चार्ट के পাঁচ পरिवার ইস পাঠ কি লগভগ সब গলতিযাঁ ঢक দেতে হৈ — হর এক কে সহী রূপ ভী।",
            },
            {
              bn: "প্রশ্ন লেখার আগে তিনটা প্রশ্ন করুন: বাক্যে be-verb বা modal আছে?",
              en: "Before writing a question, ask three things: does the sentence have a be-verb or modal?",
              hi: "प्रश्न লিখনে সে পহলে তিন সবাল: বাক্য মে be-verb বা modal হৈ?",
            },
            {
              bn: "থাকলে ওটাই সামনে; না থাকলে do/does/did আনুন — তারপর কর্তা, তারপর V1।",
              en: "If yes, that word goes first; if not, take do/does/did — then the subject, then V1.",
              hi: "হো তো বহী আগে; নহীং তো do/does/did — ফির कर्तা, ফির V1।",
            },
            {
              bn: "এই তিন প্রশ্নের অভ্যাসই পাঁচ ভুল পরিবারের দরজা বন্ধ রাখে।",
              en: "This three-question habit keeps the doors of all five error families shut.",
              hi: "तিন सवालোं কি আদত হি পাঁচো গলতी-পरিবার কা দরবাজ़া বন্দ রাখতা হৈ।",
            },
          ],
          examples: [
            {
              wrong: "What you want?",
              right: "What do you want?",
              note: {
                bn: "wh-এর পরে do — কর্তা তারপর; পুরনো অভ্যাসের বাঁধ ভাঙুন।",
                en: "After the wh-word comes do — the subject follows; break the old habit.",
                hi: "wh-শব্দ কে বাদ do — कर्तা বাদ মে; পুরানী আদত তোড়েং।",
              },
            },
            {
              wrong: "Where did she went?",
              right: "Where did she go?",
              note: {
                bn: "did-এর ভেতরে অতীত আছে — went বাড়তি; ক্রিয়া V1-এ থাকবে।",
                en: "The past is already inside did — went is extra; the verb stays V1.",
                hi: "अतीত did কে ভীতর হৈ — went অতিরিক্ত; क्रিযा V1।",
              },
            },
            {
              wrong: "You are hungry?",
              right: "Are you hungry?",
              note: {
                bn: "লেখায় গলার স্বর শোনা যায় না — ক্রমই প্রশ্নের একমাত্র চিহ্ন।",
                en: "Writing cannot show a rising tone — the order is the only question-mark.",
                hi: "লিখত সময় আবাজ़ সুনাঈ নহীং দেতী — क्रম হी প्रশ্ন কি এकমাত্র নিশানী।",
              },
            },
            {
              wrong: "Does he plays football?",
              right: "Does he play football?",
              note: {
                bn: "s একবারে এক শব্দের — does-এর গায়ে চলে গেছে, plays-এ আর নেই।",
                en: "The s belongs to one word at a time — it has moved onto does, so not on plays.",
                hi: "s এক সময় মে এক হী শব্দ কা — does পর চলা গ্যা, plays পর নহীং।",
              },
            },
            {
              wrong: "Why he didn't came?",
              right: "Why didn't he come?",
              note: {
                bn: "নেগেটিভ wh-প্রশ্ন: wh + didn't + কর্তা + V1 — didn't কর্তার আগে, আর came নয় come।",
                en: "Negative wh-question: wh + didn't + subject + V1 — didn't before the subject, and come, not came.",
                hi: "नकारात्मक wh-प्रश्न: wh + didn't + कर्तা + V1 — didn't कर्तা সে পहলে, came নহীং come।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 See it in a mini story",
            hi: "📖 এক ছোটী কহানী মে দেখেং",
          },
          lead: {
            bn: "নাদিয়া-রাকিবের ফোন-কথায় পাঠের প্রতিটা নিয়ম একসঙ্গে কাজ করতে দেখুন।",
            en: "Watch every rule of this lesson work together in Nadia and Rakib's phone call.",
            hi: "नादिया-राकিব কি ফ़ोন-বातচीত মें পাঠ কा হর নিয়ম এক সাথ কাম করতে দেখেং।",
          },
          points: [
            {
              bn: "নাদিয়া ফোনে জিজ্ঞেস করে, 'Where are you? Are you still at home?' — প্রশ্নে be-verb কর্তার সামনে।",
              en: "Nadia asks on the phone, 'Where are you? Are you still at home?' — in questions the be-verb stands before the subject.",
              hi: "নাদিয়া ফ़ोন পর পুছতী হৈ, 'Where are you? Are you still at home?' — প्रश্ন মে be-verb कर्ता সে পহলে।",
            },
            {
              bn: "রাকিব ঘুম ভাঙা গলায় বলে, 'Yes, I am. Why are you calling so early?' — ছোট উত্তরে be-verb ফেরে; wh + be + কর্তা।",
              en: "Rakib answers in a sleepy voice, 'Yes, I am. Why are you calling so early?' — the be-verb returns in the short answer; wh + be + subject.",
              hi: "राकিব নীংদ ভরী আবাজ় মে কহতা হৈ, 'Yes, I am. Why are you calling so early?' — ছোটে উত্তর মে be-verb লৌটা; wh + be + কর্তা।",
            },
            {
              bn: "নাদিয়া হতভম্ব, 'Did you forget? Today is our class trip!' — did + V1।",
              en: "Nadia is stunned, 'Did you forget? Today is our class trip!' — did + V1.",
              hi: "নাদিয়া চৌংকতী হৈ, 'Did you forget? Today is our class trip!' — did + V1।",
            },
            {
              bn: "রাকিব লাফিয়ে ওঠে, 'Oh no! What time does the bus leave?' — wh + does + কর্তা + V1।",
              en: "Rakib jumps up, 'Oh no! What time does the bus leave?' — wh + does + subject + V1.",
              hi: "राकিব ছলাঁগ মারতা হৈ, 'Oh no! What time does the bus leave?' — wh + does + কর্তা + V1।",
            },
            {
              bn: "'At eight. Can you reach the school by half past seven?' 'Yes, I can. Wait for me at the gate!' — modal প্রশ্ন, modal উত্তর।",
              en: "'At eight. Can you reach the school by half past seven?' 'Yes, I can. Wait for me at the gate!' — a modal question, a modal answer.",
              hi: "'At eight. Can you reach the school by half past seven?' 'Yes, I can. Wait for me at the gate!' — modal প্রশ্ন, modal উত্তর।",
            },
            {
              bn: "এক নজরে — yes/no প্রশ্ন: Do/Does/Did + কর্তা + V1; be-verb বা modal থাকলে ওটাই কর্তার সামনে।",
              en: "In a nutshell — yes/no questions: Do/Does/Did + subject + V1; with a be-verb or modal, that word goes in front of the subject.",
              hi: "एক নজ़র মে — yes/no প्रश্ন: Do/Does/Did + कर्तা + V1; be-verb বा modal হো তো বহী कर্তা কে সামনে।",
            },
            {
              bn: "wh-প্রশ্ন: wh + auxiliary + কর্তা + V1; ছোট উত্তর: Yes/No + কর্তা + সেই auxiliary। 'কি' লাগবে না — ক্রমই প্রশ্ন।",
              en: "wh-questions: wh + auxiliary + subject + V1; short answers: Yes/No + subject + that same auxiliary. No 'ki' is needed — the order itself is the question.",
              hi: "wh-प्रश्न: wh + auxiliary + कर्तা + V1; ছোটा উত্তর: Yes/No + कर्ता + বহী auxiliary। 'কি' কি জ़রूরত নহীং — क्रम হী প्रश্ন হৈ।",
            },
          ],
          examples: [
            {
              wrong: "Where you are?",
              right: "Where are you?",
              note: {
                bn: "প্রশ্নে be-verb কর্তার সামনে — are + you।",
                en: "In questions the be-verb stands before the subject — are + you.",
                hi: "প्रश্ন মে be-verb कर्तা সে পহলে — are + you।",
              },
            },
            {
              wrong: "What time the bus leaves?",
              right: "What time does the bus leave?",
              note: {
                bn: "What time-ও wh-পরিবারের — does + কর্তা + V1 লাগবেই।",
                en: "'What time' belongs to the wh-family — it still takes does + subject + V1.",
                hi: "What time ভী wh-परिबार মে হৈ — does + कर्तা + V1 লगেগা।",
              },
            },
            {
              wrong: "Can you to come with us?",
              right: "Can you come with us?",
              note: {
                bn: "modal-এর পরে to নয় — বাংলা 'পারবে কি আসতে?'-র ছায়া।",
                en: "No to after a modal — the shadow of Bengali 'parbe ki aaste?'",
                hi: "modal কে বাদ to নহীং — বাংগ্লা 'পারবে কি আসতে?' কি ছায়া।",
              },
            },
            {
              wrong: "Did you forgot the trip?",
              right: "Did you forget the trip?",
              note: {
                bn: "did + V1 — forgot নয়, forget; অতীতের চিহ্ন একবারই।",
                en: "did + V1 — not forgot, forget; the past marker appears only once.",
                hi: "did + V1 — forgot নহীং, forget।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "প্রশ্ন লেখার আগে বাক্যে be-verb বা modal আছে কি না দেখুন — থাকলে ওটাই কর্তার সামনে ওঠে; না থাকলে do/does/did আনুন।",
          en: "Before writing a question, check for a be-verb or modal — if there is one, it goes in front of the subject; if not, bring in do/does/did.",
          hi: "प्रश্ন লিখনে সে পহলে বাক্য মে be-verb বा modal দেখেং — হো তো বহী कर्तা কে সামনে; নহীং তো do/does/did লাএँ।",
        },
        {
          bn: "wh-শব্দ সবসময় প্রথম পদ — wh + auxiliary + কর্তা + V1, চার ধাপ মনে রাখুন।",
          en: "The wh-word is always the first word — wh + auxiliary + subject + V1; remember the four steps.",
          hi: "wh-শব্দ হমেশা পহলা পদ — wh + auxiliary + कर्ता + V1, চার কদম রটেं।",
        },
        {
          bn: "did/does বসলে মূল ক্রিয়া V1 — অতীতের চিহ্ন বা s একবারে এক শব্দের সম্পত্তি।",
          en: "When did/does is there, the main verb stays V1 — the past marker or the s belongs to one word at a time.",
          hi: "did/does বৈठতে হি मूল क्रिया V1 — অতीत বা s এক সময় মে এক শব্দ কা।",
        },
        {
          bn: "'What you doing?' চ্যাটে চলে যায়, কিন্তু ভুল — doing শুনলেই am/is/are বসান।",
          en: "'What you doing?' passes in chat, but it is wrong — the moment you hear doing, place am/is/are before it.",
          hi: "'What you doing?' চैট মে চল জাতা হৈ, পর গলত হৈ — doing সুনতে হি am/is/are বিঠাএं।",
        },
        {
          bn: "ছোট উত্তরে auxiliary-ই ফেরে — Yes, I do / Yes, I am / Yes, I did; মূল ক্রিয়া নয়।",
          en: "In short answers the auxiliary returns — Yes, I do / Yes, I am / Yes, I did; not the main verb.",
          hi: "ছোটে উত্তর মে auxiliary হী লৌটতা হৈ — Yes, I do / Yes, I am / Yes, I did; मूल क्रिया নহীং।",
        },
        {
          bn: "ছোট হ্যাঁ-উত্তরে contraction নয় — Yes, he is ঠিক, Yes, he's ভুল।",
          en: "No contraction in a short yes-answer — Yes, he is is right, 'Yes, he's' is wrong.",
          hi: "ছোটে হাঁ-উত্তর মে contraction নহীং — Yes, he is সহী, 'Yes, he's' গলত।",
        },
        {
          bn: "প্রশ্নের auxiliary আর উত্তরের auxiliary মিলবে — Are they...? → Yes, they are।",
          en: "The auxiliary of the question and of the answer must match — Are they...? takes Yes, they are.",
          hi: "প्रশ্ন ঔর উত্তর কা auxiliary মিলেগা — Are they...? → Yes, they are।",
        },
        {
          bn: "নেগেটিভ প্রশ্ন: Why didn't you come? — didn't + কর্তা + V1; didn't came কখনো নয়।",
          en: "Negative question: Why didn't you come? — didn't + subject + V1; never 'didn't came'.",
          hi: "नकारात्मক প्रश্ন: Why didn't you come? — didn't + कर्ता + V1; 'didn't came' কভি নহীং।",
        },
        {
          bn: "What time / What colour-জাতীয় প্রশ্নেও do/does লাগে — What time does the shop open?",
          en: "Questions like What time / What colour still take do/does — What time does the shop open?",
          hi: "What time / What colour জৈसে প्रश্নোং মে ভী do/does লগতা হৈ — What time does the shop open?",
        },
        {
          bn: "রোজ নিজেকে ৫টা প্রশ্ন করুন — What am I doing? Where do I keep my keys? — ক্রমটা মুখে বসে যাবে।",
          en: "Ask yourself five questions every day — What am I doing? Where do I keep my keys? — and the order settles on your tongue.",
          hi: "রোজ़ খুদ সে 5 প्रश্ন পুছেं — What am I doing? Where do I keep my keys? — क्रম জ़ুবান পর বৈঠ জাএগা।",
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
            hi: "'you' I/you/we/they বর্গ কা कर्तা হৈ, like साधारণ क्रिया → প्रশ্ন মে Do।",
          },
        },
        {
          question: "Where ___ you go last week?",
          options: ["do", "did", "does", "were"],
          answer: 1,
          explanation: {
            bn: "last week = অতীত → did; did-এর পরে V1: go।",
            en: "'Last week' is the past — did; after did the verb stays go.",
            hi: "'last week' = অতীত → did; did কे বাদ V1: go।",
          },
        },
        {
          question: "What ___ she doing now?",
          options: ["is", "does", "do", "are"],
          answer: 0,
          explanation: {
            bn: "doing-এর আগে be-verb বাধ্যতামূলক — she → is: What is she doing?",
            en: "A be-verb must stand before doing — she takes is: What is she doing?",
            hi: "doing সে পহলে be-verb অনিবার্য — she → is: What is she doing?",
          },
        },
        {
          question: "___ your father work in a bank?",
          options: ["Do", "Does", "Is", "Has"],
          answer: 1,
          explanation: {
            bn: "your father = he → Does; work সাধারণ ক্রিয়া → do-পরিবার।",
            en: "'Your father' = he, so Does; work is an ordinary verb — the do-family.",
            hi: "'your father' = he → Does; work साधारণ क्रिया → do-परिबार।",
          },
        },
        {
          question: "Why ___ the baby crying?",
          options: ["is", "are", "does", "do"],
          answer: 0,
          explanation: {
            bn: "the baby = একবচন → is crying; wh + is + কর্তা।",
            en: "'The baby' is singular — is crying; wh + is + subject.",
            hi: "'the baby' একবচন → is crying; wh + is + कर्ता।",
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
            hi: "wh + did + कर्तা + V1 — Where did you go?; বাকी क्रম তোड়তে হৈ।",
          },
        },
        {
          question: "\"Do you play chess?\" — which short answer is correct?",
          options: ["Yes, I play.", "Yes, I do.", "Yes, I am.", "Yes, I like."],
          answer: 1,
          explanation: {
            bn: "Do-প্রশ্নের ছোট উত্তর Yes, I do — মূল ক্রিয়া ফেরে না।",
            en: "The short answer to a Do-question is Yes, I do — the main verb does not return.",
            hi: "Do-प्रश्न কा ছोটা উত্তর Yes, I do — मूल क्रियা নহীং লৌটতী।",
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
            hi: "modal প्रश্ন মে modal স্বয়ং সামনে — Can she drive?; do বा V2 যহাঁ নহীং আতা।",
          },
        },
        {
          question: "___ they at home now?",
          options: ["Is", "Are", "Do", "Does"],
          answer: 1,
          explanation: {
            bn: "they + be-verb → Are; প্রশ্নে are কর্তার সামনে উল্টে যায়।",
            en: "'They' takes the be-verb are; in the question are flips in front of the subject.",
            hi: "'they' কে সাথ be-verb are; প्रশ্ন মে are कर्तা কे সামনে পলটতা হৈ।",
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
            hi: "अतीत কा wh-प्रश्न: Where did he go? — did + he + go; went হটতা হৈ।",
          },
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_B1B;
