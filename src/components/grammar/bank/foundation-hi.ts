import type { BankLesson } from "./types";

// Static grammar bank — foundation topics, BEGINNER level (CEFR ~A2),
// Hindi explanations. English sentences stay English (that's what is
// being learned); every explanation/intro/tip/note is natural Hindi.
const LESSONS: BankLesson[] = [
  {
    topic: "Tense basics",
    level: "beginner",
    locale: "hi",
    title: "टेंस की नींव: वर्तमान, भूत और भविष्य",
    intro:
      "हर वाक्य में tense ही बताती है कि काम कब हुआ — इसलिए यही English की सबसे पहली और सबसे ज़रूरी सीढ़ी है। यहीं का कॉन्सेप्ट साफ़ हो गया तो आधी grammar अपने आप आसान लगने लगेगी।",
    sections: [
      {
        heading: "तीन मुख्य समय, तीन रूप",
        explanation:
          "English में हर काम का समय वर्ब के रूप से दिखता है: go (आदत/वर्तमान), went (भूत), will go (भविष्य)। हिंदी में कई बार वाक्य के संदर्भ से समय समझ आ जाता है, पर English में वर्ब को ही समय दिखाना पड़ता है। इसलिए बोलते वक़्त वर्ब का रूप समय के हिसाब से बदलना ज़रूरी है। यही एक आदत पकड़ लें, तो आधी मेहनत यहीं ख़त्म।",
        examples: [
          {
            wrong: "Yesterday I go to the market.",
            right: "Yesterday I went to the market.",
            note: "'yesterday' भूतकाल है, इसलिए go का भूत रूप went आएगा।",
          },
          {
            wrong: "She will comes tomorrow.",
            right: "She will come tomorrow.",
            note: "will के बाद वर्ब हमेशा base form में रहता है — s नहीं लगता।",
          },
          {
            wrong: "I am go to school daily.",
            right: "I go to school daily.",
            note: "रोज़ की आदत बताने के लिए simple present ही काफ़ी है; am नहीं लगता।",
          },
        ],
      },
      {
        heading: "समय-संकेत शब्द और वर्ब की जोड़ी",
        explanation:
          "हर समय के साथ कुछ संकेत शब्दों की जोड़ी बन जाती है: yesterday, last week, ago → वर्ब का भूत रूप; now, every day → वर्तमान रूप; tomorrow, next week → will + base form। वाक्य में ऐसा संकेत दिखे तो वर्ब का रूप उसी के हिसाब से रखें। थोड़ी सी रोज़ाना प्रैक्टिस से यह मैचिंग अपने आप होने लगती है।",
        examples: [
          {
            wrong: "I will went home.",
            right: "I will go home.",
            note: "भविष्य के लिए will + base form होता है, भूत रूप नहीं।",
          },
          {
            wrong: "They watches TV now.",
            right: "They are watching TV now.",
            note: "'now' का मतलब काम अभी चल रहा है, इसलिए are + watching आएगा।",
          },
          {
            wrong: "Last night she cry.",
            right: "Last night she cried.",
            note: "भूतकाल में वर्ब का दूसरा रूप ज़रूरी है — cry से cried बनता है।",
          },
        ],
      },
    ],
    tips: [
      "हर वाक्य बोलने से पहले ख़ुद से पूछें: काम कब हुआ — अब, पहले या आगे?",
      "रोज़ 5 आम वाक्यों को तीनों समयों में बोलकर देखें: I eat / I ate / I will eat.",
      "yesterday, last, ago दिखे तो वर्ब past में; tomorrow, next दिखे तो will + वर्ब।",
      "will के बाद कभी s या went जैसा भूत रूप नहीं आता — बोलते हुए इस पर कान देकर सुधारें।",
    ],
    quiz: [
      {
        question: "I ___ my homework yesterday.",
        options: ["do", "did", "will do", "doing"],
        answer: 1,
        explanation: "'yesterday' भूतकाल है, इसलिए वर्ब का past form 'did' चाहिए।",
      },
      {
        question: "She ___ to college tomorrow.",
        options: ["goes", "go", "went", "will go"],
        answer: 3,
        explanation: "'tomorrow' भविष्य दिखाता है, इसलिए will + go सही है।",
      },
      {
        question: "They ___ cricket every Sunday.",
        options: ["plays", "play", "playing", "will play"],
        answer: 1,
        explanation:
          "हफ़्ते की आदत के लिए simple present लगता है, और they के साथ play बिना s आता है।",
      },
      {
        question: "He ___ a book right now.",
        options: ["reads", "read", "is reading", "will read"],
        answer: 2,
        explanation: "'right now' का मतलब काम अभी चल रहा है, इसलिए is reading सही है।",
      },
      {
        question: "We ___ our village last year.",
        options: ["visit", "will visit", "are visiting", "visited"],
        answer: 3,
        explanation: "'last year' बीता वक़्त है, इसलिए past form 'visited' आएगा।",
      },
    ],
  },
  {
    topic: "Present Perfect vs Past Simple",
    level: "beginner",
    locale: "hi",
    title: "Present Perfect vs Past Simple: कब कौन?",
    intro:
      "'I ate' और 'I have eaten' में बस एक शब्द का फ़र्क़ है, पर मतलब पूरा बदल जाता है। दोनों का सही इस्तेमाल आपकी English को तुरंत natural बना देगा।",
    sections: [
      {
        heading: "Past Simple: बीता हुआ, बंद हुआ किस्सा",
        explanation:
          "Past simple तब इस्तेमाल होता है जब काम भूतकाल में एक तय वक़्त पर हुआ और अब वह पूरी तरह बीत चुका है। वाक्य में yesterday, last week, in 2020, two days ago जैसे समय-संकेत हों तो लगभग हमेशा past simple आता है। यहाँ काम का वक़्त बताना ज़रूरी होता है, इसलिए वर्ब अपने दूसरे रूप में चला जाता है।",
        examples: [
          {
            wrong: "I have seen him yesterday.",
            right: "I saw him yesterday.",
            note: "'yesterday' बीता हुआ तय वक़्त है, इसलिए past simple आएगा।",
          },
          {
            wrong: "She has visited Delhi in 2019.",
            right: "She visited Delhi in 2019.",
            note: "साल पहले से बता दिया गया है, तो वर्ब past form में जाएगा।",
          },
          {
            wrong: "We have gone to the fair last week.",
            right: "We went to the fair last week.",
            note: "'last week' के साथ have gone ग़लत है — went बोलें।",
          },
        ],
      },
      {
        heading: "Present Perfect: असर अब भी ज़िंदा है",
        explanation:
          "Present perfect (have/has + वर्ब का तीसरा रूप) तब आता है जब काम अभी-अभी पूरा हुआ हो, बीते काम का असर अब महसूस हो, या वक़्त अभी अधूरा हो। 'I have eaten' का मतलब है — मैं अब तृप्त हूँ। इसके साथ yesterday जैसा बीता वक़्त नहीं लगाया जाता; just, already, yet, ever, since, for जैसे शब्द आते हैं।",
        examples: [
          {
            wrong: "I have finished my work two hours ago.",
            right: "I finished my work two hours ago.",
            note: "'ago' बीता वक़्त बताता है — present perfect के साथ यह नहीं आता।",
          },
          {
            wrong: "I have eat lunch.",
            right: "I have eaten lunch.",
            note: "have के बाद वर्ब का तीसरा रूप (eaten) आता है, eat नहीं।",
          },
          {
            wrong: "She has came just now.",
            right: "She has just come.",
            note: "'just' के साथ present perfect आता है और come का तीसरा रूप ही लगेगा।",
          },
        ],
      },
    ],
    tips: [
      "वाक्य में yesterday, ago, last या कोई साल दिखे तो past simple ही सोचें।",
      "just, already, yet, ever दिखे तो have/has + तीसरा रूप रखें।",
      "रोज़ के वर्बों के तीनों रूप रटें — eat/ate/eaten, go/went/gone, see/saw/seen — यही 80% काम करते हैं।",
      "ख़ुद से पूछें: काम का असर अब भी है? हाँ → present perfect; सिर्फ़ बीता किस्सा → past simple।",
    ],
    quiz: [
      {
        question: "I ___ this movie last night.",
        options: ["have seen", "saw", "see", "am seeing"],
        answer: 1,
        explanation: "'last night' बीता तय वक़्त है, इसलिए past simple 'saw' आएगा।",
      },
      {
        question: "She ___ just finished her homework.",
        options: ["have", "was", "has", "is"],
        answer: 2,
        explanation: "'just' के साथ present perfect आता है, और she के साथ has लगता है।",
      },
      {
        question: "They ___ to Mumbai in 2018.",
        options: ["have moved", "move", "has moved", "moved"],
        answer: 3,
        explanation: "साल (2018) बता दिया गया है, इसलिए past simple 'moved' सही है।",
      },
      {
        question: "Have you ___ been to Goa?",
        options: ["ever", "yesterday", "last year", "ago"],
        answer: 0,
        explanation:
          "present perfect के साथ 'ever' आता है; बाकी सब बीते तय वक़्त दिखाते हैं।",
      },
      {
        question: "I ___ my keys, so I cannot open the door.",
        options: ["lose", "will lose", "have lost", "lost"],
        answer: 2,
        explanation:
          "काम बीते में हुआ और उसका असर (चाबी न मिलना) अब भी है — present perfect सही है।",
      },
    ],
  },
  {
    topic: "Articles (a/an/the)",
    level: "beginner",
    locale: "hi",
    title: "Articles: a, an और the का सही इस्तेमाल",
    intro:
      "a, an, the — ये तीन छोटे शब्द English की हर दूसरी लाइन में आते हैं। इनका नियम सीख लेंगे तो बोलते वक़्त बार-बार रुकना नहीं पड़ेगा।",
    sections: [
      {
        heading: "a और an: पहली बार या सामान्य चीज़",
        explanation:
          "जब कोई चीज़ पहली बार ज़िक्र में आए या एक सामान्य चीज़ हो, तो a/an लगता है। a उन शब्दों से पहले आता है जिनकी आवाज़ consonant से शुरू होती है (a book, a university), और an जिनकी आवाज़ vowel से (an apple, an hour)। ध्यान दें — अक्षर नहीं, आवाज़ देखनी होती है।",
        examples: [
          {
            wrong: "I saw elephant in zoo.",
            right: "I saw an elephant in a zoo.",
            note: "elephant की आवाज़ vowel से शुरू होती है, इसलिए an लगेगा।",
          },
          {
            wrong: "She is a honest girl.",
            right: "She is an honest girl.",
            note: "'honest' में h silent है, आवाज़ vowel से शुरू होती है इसलिए an आता है।",
          },
          {
            wrong: "He is an university student.",
            right: "He is a university student.",
            note: "'university' की आवाज़ 'यू' से शुरू होती है, जो consonant आवाज़ है।",
          },
        ],
      },
      {
        heading: "the: जब बात ख़ास और पहचानी हुई हो",
        explanation:
          "the तब लगता है जब सामने वाला जानता हो कि हम किस चीज़ की बात कर रहे हैं — पहले ज़िक्र के बाद दूसरी बार, या जब चीज़ अपनी तरह की अकेली हो (the sun, the Taj Mahal)। आम तौर पर दोबारा ज़िक्र पर a/an की जगह the आ जाता है। नाम लेते ही पहचान बन जाए, वहाँ the सोचें।",
        examples: [
          {
            wrong: "I bought a book. A book was interesting.",
            right: "I bought a book. The book was interesting.",
            note: "दूसरी बार वही किताब आई, इसलिए अब the लगेगा।",
          },
          {
            wrong: "Sun rises in east.",
            right: "The sun rises in the east.",
            note: "अपनी तरह की अकेली चीज़ों (sun, moon) के साथ the ज़रूरी है।",
          },
          {
            wrong: "Open an window, please.",
            right: "Open the window, please.",
            note: "कमरे की window पहले से पहचानी हुई है, तो the आएगा।",
          },
        ],
      },
    ],
    tips: [
      "पहली बार चीज़ का ज़िक्र → a/an; दूसरी बार वही चीज़ → the।",
      "अक्षर नहीं, आवाज़ देखें — an hour, an honest man, पर a university, a one-rupee coin।",
      "sun, moon, sky, earth जैसी अकेली चीज़ों के साथ हमेशा the लगाएँ।",
      "जल्दी बोलते वक़्त a/an छोड़ देना सबसे आम ग़लती है — बोलने से पहले एक पल रुककर सोचें।",
    ],
    quiz: [
      {
        question: "She is ___ engineer.",
        options: ["a", "an", "the", "some"],
        answer: 1,
        explanation: "'engineer' की आवाज़ vowel से शुरू होती है, इसलिए an आएगा।",
      },
      {
        question: "He bought ___ umbrella yesterday.",
        options: ["an", "a", "some", "the"],
        answer: 0,
        explanation: "'umbrella' vowel आवाज़ से शुरू होता है, इसलिए an लगेगा।",
      },
      {
        question: "___ sun gives us light.",
        options: ["A", "An", "The", "Some"],
        answer: 2,
        explanation: "अपनी तरह की अकेली चीज़ के साथ the लगता है।",
      },
      {
        question: "I met ___ honest man today.",
        options: ["a", "the", "some", "an"],
        answer: 3,
        explanation: "'honest' की आवाज़ vowel से शुरू होती है, इसलिए an लगता है।",
      },
      {
        question: "This is ___ best movie I have seen.",
        options: ["a", "the", "an", "some"],
        answer: 1,
        explanation: "superlative (best) के साथ हमेशा the आता है।",
      },
    ],
  },
  {
    topic: "Prepositions (in/on/at)",
    level: "beginner",
    locale: "hi",
    title: "Prepositions: in, on, at कब लगाएँ",
    intro:
      "in, on, at — ये तीन छोटे शब्द समय और जगह दोनों बताते हैं, और हिंदी-भाषियों की सबसे आम ग़लती भी यहीं होती है। नियम याद हो गए तो बोलते हुए कॉन्फ़िडेंस दोगुना हो जाएगा।",
    sections: [
      {
        heading: "जगह के लिए: बड़ा इलाक़ा in, सतह on, बिंदु at",
        explanation:
          "सोचें कि जगह एक डिब्बे की तरह है: बड़े इलाक़े (देश, शहर, कमरे के अंदर) के लिए in, सतह या लाइन (table, floor, road, island) के लिए on, और एक सटीक बिंदु (door, station, bus stop, address) के लिए at। जगह जितनी बड़ी हो, in; जितनी छोटी और सटीक हो, at। यह तस्वीर दिमाग़ में रखें, नियम अपने आप याद रहेंगे।",
        examples: [
          {
            wrong: "I live at Mumbai.",
            right: "I live in Mumbai.",
            note: "शहर एक बड़ा इलाक़ा है, इसलिए in आता है।",
          },
          {
            wrong: "The keys are at the table.",
            right: "The keys are on the table.",
            note: "चीज़ टेबल की सतह पर है, इसलिए on आएगा।",
          },
          {
            wrong: "She is waiting in the bus stop.",
            right: "She is waiting at the bus stop.",
            note: "bus stop एक सटीक बिंदु है, इसलिए at लगेगा।",
          },
        ],
      },
      {
        heading: "समय के लिए: at घंटे, on दिन, in लंबे समय",
        explanation:
          "समय का नियम याद रखना आसान है: घंटे या exact वक़्त के लिए at (at 5 pm, at night), दिनों और तारीख़ों के लिए on (on Monday, on 15 August), और लंबे समय के लिए in (in July, in winter, in 2024, in the morning)। दिन और वक़्त साथ आएँ तो भी on रहता है: on Monday morning।",
        examples: [
          {
            wrong: "I will meet you in 5 pm.",
            right: "I will meet you at 5 pm.",
            note: "exact घंटे के साथ at लगता है, in नहीं।",
          },
          {
            wrong: "My birthday is in Monday.",
            right: "My birthday is on Monday.",
            note: "दिनों (Monday, Sunday) के साथ on आता है।",
          },
          {
            wrong: "We travel on winter every year.",
            right: "We travel in winter every year.",
            note: "मौसम और महीने लंबा समय-खंड हैं, इसलिए in आता है।",
          },
        ],
      },
    ],
    tips: [
      "जगह का शॉर्टकट याद रखें: बड़ा डिब्बा in, सतह on, बिंदु at।",
      "समय के लिए गाने की तरह याद रखें: at 5, on Monday, in July, in 2024।",
      "दिन के साथ morning/evening जुड़ जाए तो भी on रहेगा — on Monday morning।",
      "रोज़ अपने काम के वाक्य बनाएँ — मैं 6 बजे उठता हूँ → I wake up at 6 — और preposition बोलकर जाँचें।",
    ],
    quiz: [
      {
        question: "I was born ___ 2005.",
        options: ["at", "on", "to", "in"],
        answer: 3,
        explanation: "साल एक लंबा समय-खंड है, इसलिए in 2005 सही है।",
      },
      {
        question: "The meeting is ___ Monday.",
        options: ["in", "on", "at", "by"],
        answer: 1,
        explanation: "दिनों के साथ on लगता है।",
      },
      {
        question: "She arrived ___ 9 o'clock.",
        options: ["on", "in", "at", "by"],
        answer: 2,
        explanation: "exact घंटे के साथ at आता है।",
      },
      {
        question: "Your shoes are ___ the floor.",
        options: ["on", "at", "in", "to"],
        answer: 0,
        explanation: "फ़र्श की सतह पर कुछ हो तो on लगता है।",
      },
      {
        question: "We will meet ___ the bus stop.",
        options: ["in", "on", "at", "to"],
        answer: 2,
        explanation: "bus stop एक सटीक जगह/बिंदु है, इसलिए at आता है।",
      },
    ],
  },
  {
    topic: "Subject-Verb Agreement",
    level: "beginner",
    locale: "hi",
    title: "Subject-Verb Agreement: वर्ब को subject से मिलाना",
    intro:
      "'He go' या 'They goes' सुनते ही पता चल जाता है कि बोलने वाला beginner है। Subject और वर्ब की जोड़ी सही कर लेंगे तो English तुरंत polished लगेगी।",
    sections: [
      {
        heading: "he/she/it के साथ वर्ब में s",
        explanation:
          "Simple present का नियम सीधा है: he, she, it या कोई एक इंसान/चीज़ (एकवचन) हो तो वर्ब के आगे s/es लगता है — he plays, she goes, Ravi writes। I, we, you, they और बहुवचन subjects के साथ वर्ब बिना s रहता है — they play, we go। हिंदी में वर्ब लिंग बदलता है (जाता है/जाती है), English में यह बदलाव s से ही दिखता है।",
        examples: [
          {
            wrong: "She go to school by bus.",
            right: "She goes to school by bus.",
            note: "she के साथ go में es जुड़कर goes बनता है।",
          },
          {
            wrong: "They plays football after school.",
            right: "They play football after school.",
            note: "they बहुवचन है, इसलिए वर्ब में s नहीं आएगा।",
          },
          {
            wrong: "My brother and my sister works in Pune.",
            right: "My brother and my sister work in Pune.",
            note: "and से जुड़े दो लोग बहुवचन हैं, इसलिए work बिना s।",
          },
        ],
      },
      {
        heading: "उलझाने वाले छोटे मामले",
        explanation:
          "कुछ वाक्य देखने में उलझाते हैं: 'My sister with her friends' में मुख्य subject अकेली sister है, तो वर्ब एकवचन रहेगा। वर्ब हमेशा असली main subject से मिलता है, बीच के शब्दों से नहीं — 'The list of names is long' में subject list है, names नहीं। every, each, everyone, nobody जैसे शब्द हमेशा एकवचन लिए जाते हैं।",
        examples: [
          {
            wrong: "The list of items are on the desk.",
            right: "The list of items is on the desk.",
            note: "असली subject 'list' है (एक), इसलिए is आएगा।",
          },
          {
            wrong: "My sister with her friends come here daily.",
            right: "My sister with her friends comes here daily.",
            note: "मुख्य subject अकेली sister है; 'with her friends' सिर्फ़ अतिरिक्त जानकारी है।",
          },
          {
            wrong: "Every student in my class have a notebook.",
            right: "Every student in my class has a notebook.",
            note: "'every + एकवचन' के साथ हमेशा एकवचन वर्ब आता है।",
          },
        ],
      },
    ],
    tips: [
      "वर्ब बनाते समय सिर्फ़ मुख्य subject को देखें, बीच के शब्दों को नज़रअंदाज़ करें।",
      "he/she/it/नाम → s वाला वर्ब; I/you/we/they → बिना s।",
      "every, each, everyone, nobody के साथ हमेशा एकवचन वर्ब — everyone is, not everyone are।",
      "रोज़ 5 वाक्य बोलते समय सिर्फ़ s का ध्यान रखें — एक हफ़्ते में यह आदत बन जाएगी।",
    ],
    quiz: [
      {
        question: "She ___ tea every morning.",
        options: ["drink", "drinks", "drinking", "is drink"],
        answer: 1,
        explanation: "she के साथ simple present में वर्ब में s जुड़ता है।",
      },
      {
        question: "They ___ to the market on Sundays.",
        options: ["goes", "going", "go", "is going"],
        answer: 2,
        explanation: "they के साथ वर्ब बिना s आता है।",
      },
      {
        question: "The colour of these flowers ___ beautiful.",
        options: ["are", "is", "were", "have been"],
        answer: 1,
        explanation: "असली subject 'colour' (एकवचन) है, इसलिए is सही है।",
      },
      {
        question: "My father and my uncle ___ a shop.",
        options: ["runs", "running", "is running", "run"],
        answer: 3,
        explanation: "and से जुड़े दो subjects बहुवचन होते हैं, इसलिए run बिना s आएगा।",
      },
      {
        question: "Everyone ___ here today.",
        options: ["are", "were", "is", "have been"],
        answer: 2,
        explanation: "everyone हमेशा एकवचन लिया जाता है, इसलिए is आता है।",
      },
    ],
  },
  {
    topic: "Question Formation",
    level: "beginner",
    locale: "hi",
    title: "सवाल पूछना: Do, Does, Is, Are का सही क्रम",
    intro:
      "English में सवाल पूछने के लिए शब्दों का क्रम बदलना पड़ता है — यही एक बार सीख लेंगे तो बातचीत अपने आप शुरू हो जाएगी।",
    sections: [
      {
        heading: "हाँ/ना वाले सवाल: Do/Does/Is आगे लाएँ",
        explanation:
          "Simple present में सवाल पूछने के लिए वाक्य के आगे Do/Does जोड़ें: 'You like tea' → 'Do you like tea?'। he/she/it के साथ Does आता है और तब वर्ब से s हट जाता है — 'Does she play?' (play, plays नहीं)। am/is/are वाले वाक्यों में कुछ जोड़ने की ज़रूरत नहीं, बस वर्ब को subject से पहले ले आएँ: 'She is happy' → 'Is she happy?'।",
        examples: [
          {
            wrong: "Does she likes tea?",
            right: "Does she like tea?",
            note: "Does आते ही वर्ब से s हट जाता है।",
          },
          {
            wrong: "She is your sister?",
            right: "Is she your sister?",
            note: "सवाल के लिए is को subject से पहले ले जाएँ।",
          },
          {
            wrong: "Do he play cricket?",
            right: "Does he play cricket?",
            note: "he/she/it के साथ Do नहीं, Does आता है।",
          },
        ],
      },
      {
        heading: "Wh- सवाल: What, Where, When, Why, How",
        explanation:
          "जानकारी वाले सवाल Wh- शब्द से शुरू होते हैं, उसके बाद helping verb (do/does/is/are), फिर subject और फिर वर्ब: 'Where do you live?', 'What does he want?'। आम ग़लती यह है कि लोग subject को वर्ब से पहले रख देते हैं, जैसे 'What you are doing?' — सही क्रम है 'What are you doing?'।",
        examples: [
          {
            wrong: "Where you live?",
            right: "Where do you live?",
            note: "सामान्य वर्ब वाले सवाल में do/does ज़रूरी है।",
          },
          {
            wrong: "What you are doing?",
            right: "What are you doing?",
            note: "Wh- शब्द के बाद पहले are आएगा, फिर you।",
          },
          {
            wrong: "Where does he works?",
            right: "Where does he work?",
            note: "does के बाद वर्ब base form में रहता है।",
          },
        ],
      },
    ],
    tips: [
      "सवाल बनाने का क्रम याद रखें: Wh- शब्द → do/does/is/are → subject → वर्ब।",
      "Does सुनते ही वर्ब से s हटा दें — Does she knows? ग़लत, Does she know? सही।",
      "am/is/are वाले वाक्य में सिर्फ़ उन्हें आगे ले जाएँ; Do/Does जोड़ने की ज़रूरत नहीं।",
      "रोज़ किसी दोस्त से 3 सवाल English में पूछें — Where are you? What are you doing?",
    ],
    quiz: [
      {
        question: "___ she work here?",
        options: ["Do", "Does", "Is", "Has"],
        answer: 1,
        explanation: "he/she/it के साथ simple present के सवाल में Does आता है।",
      },
      {
        question: "___ you coming to the party?",
        options: ["Do", "Does", "Are", "Have"],
        answer: 2,
        explanation: "coming (-ing) के साथ are आता है — are you coming?",
      },
      {
        question: "Where ___ your brother live?",
        options: ["is", "does", "do", "are"],
        answer: 1,
        explanation: "live सामान्य वर्ब है और brother (he) के लिए does आता है।",
      },
      {
        question: "What ___ she doing now?",
        options: ["is", "does", "do", "are"],
        answer: 0,
        explanation: "doing के साथ she के लिए is आता है।",
      },
      {
        question: "Which question is correct?",
        options: [
          "Why you are late?",
          "Why are you late?",
          "Why late are you?",
          "Why you late are?",
        ],
        answer: 1,
        explanation: "सवाल में are, subject (you) से पहले आता है।",
      },
    ],
  },
  {
    topic: "Conditionals",
    level: "beginner",
    locale: "hi",
    title: "Conditionals: अगर-तो वाले वाक्य",
    intro:
      "'अगर पढ़ोगे तो पास होगे' — यही सोच English में if वाले वाक्य से बनती है। दो-तीन पैटर्न पकड़ लेंगे तो संभावना, सपना और चेतावनी — सब कह पाएँगे।",
    sections: [
      {
        heading: "असली संभावना: If + present, will + वर्ब",
        explanation:
          "जब बात हमेशा सच रहने वाली हो तो दोनों हिस्सों में simple present आता है: 'If you heat ice, it melts'। जब भविष्य की असली संभावना हो तो if वाले हिस्से में simple present और दूसरे हिस्से में will + वर्ब: 'If it rains, we will stay home'। सबसे ज़रूरी बात — if के बाद will कभी नहीं आता।",
        examples: [
          {
            wrong: "If it will rain, we will stay home.",
            right: "If it rains, we will stay home.",
            note: "if वाले हिस्से में simple present आता है, will नहीं।",
          },
          {
            wrong: "If you study hard, you pass the exam.",
            right: "If you study hard, you will pass the exam.",
            note: "भविष्य का नतीजा बताते समय will + वर्ब ज़रूरी है।",
          },
          {
            wrong: "If she come, I will tell her.",
            right: "If she comes, I will tell her.",
            note: "she के साथ present में वर्ब comes होगा।",
          },
        ],
      },
      {
        heading: "सपनों वाली शर्त: If + past, would + वर्ब",
        explanation:
          "जब बात कल्पना या असंभव चीज़ की हो, तो if वाले हिस्से में past form और दूसरे हिस्से में would + base form आता है: 'If I had a car, I would drive to Goa' (सच में गाड़ी नहीं है)। समझें — यहाँ past form का मतलब भूतकाल नहीं, सिर्फ़ 'काल्पनिक' बताना है। 'If I were you' ऐसे ही कहा जाता है।",
        examples: [
          {
            wrong: "If I had a bike, I will ride it.",
            right: "If I had a bike, I would ride it.",
            note: "काल्पनिक शर्त में will नहीं, would आता है।",
          },
          {
            wrong: "If I was you, I would apologize.",
            right: "If I were you, I would apologize.",
            note: "'अगर मैं तुम होता' के लिए I were ही कहा जाता है।",
          },
          {
            wrong: "If he studied more, he would passed.",
            right: "If he studied more, he would pass.",
            note: "would के बाद हमेशा base form आता है।",
          },
        ],
      },
    ],
    tips: [
      "if वाले हिस्से में will लिखना सबसे आम ग़लती है — वहाँ present या past form आएगी।",
      "असली मौक़ा = If + present, will + वर्ब; काल्पनिक बात = If + past form, would + वर्ब।",
      "तीन वाक्य रटें: If it rains... / If I had... / If I were you... — ज़्यादातर बातचीत इन्हीं रूपों में होती है।",
      "वाक्य If से शुरू हो तो दोनों हिस्सों के बीच comma लगाएँ।",
    ],
    quiz: [
      {
        question: "If it ___, we will cancel the picnic.",
        options: ["will rain", "rained", "rains", "rain"],
        answer: 2,
        explanation: "first conditional में if के बाद simple present आता है।",
      },
      {
        question: "If I ___ you, I would study more.",
        options: ["am", "were", "was", "will be"],
        answer: 1,
        explanation: "'अगर मैं तुम होता' के लिए were कहा जाता है।",
      },
      {
        question: "If she ___ time, she would help us.",
        options: ["has", "have", "will have", "had"],
        answer: 3,
        explanation: "second conditional में if वाले हिस्से में past form (had) आती है।",
      },
      {
        question: "If you heat ice, it ___.",
        options: ["melts", "will melt", "would melt", "melted"],
        answer: 0,
        explanation: "हमेशा सच बात (zero conditional) दोनों हिस्सों में simple present लेती है।",
      },
      {
        question: "If you ___ now, you will catch the bus.",
        options: ["left", "leave", "will leave", "would leave"],
        answer: 1,
        explanation: "will वाले नतीजे के साथ if हिस्सा simple present रहता है।",
      },
    ],
  },
  {
    topic: "Passive Voice",
    level: "beginner",
    locale: "hi",
    title: "Passive Voice: काम को मुख्य बनाना",
    intro:
      "जब करने वाला ज़रूरी नहीं हो और सिर्फ़ काम ज़रूरी हो, तो English में passive बोला जाता है। न्यूज़, निर्देश और ऑफ़िस की भाषा में यह बहुत आम है।",
    sections: [
      {
        heading: "Active से Passive: तीन कदम",
        explanation:
          "Passive बनाने का फ़ॉर्मूला: be (is/am/are/was/were) + वर्ब का तीसरा रूप। पहले object को आगे लाएँ, फिर be + तीसरा रूप लगाएँ, और करने वाला ज़रूरी हो तो आख़िर में by लगाएँ: 'Ravi wrote the letter' → 'The letter was written by Ravi'। करने वाला मालूम नहीं या ज़रूरी नहीं, तो by वाला हिस्सा छोड़ दें।",
        examples: [
          {
            wrong: "The match is win by our team.",
            right: "The match is won by our team.",
            note: "passive में वर्ब का तीसरा रूप (won) चाहिए।",
          },
          {
            wrong: "The letter was wrote by Ravi.",
            right: "The letter was written by Ravi.",
            note: "was के साथ तीसरा रूप written आता है, wrote नहीं।",
          },
          {
            wrong: "English speaks all over the world.",
            right: "English is spoken all over the world.",
            note: "करने वाला छिपा हो तो is/am/are + तीसरा रूप आता है।",
          },
        ],
      },
      {
        heading: "कब passive बोलें",
        explanation:
          "Passive तब काम आता है जब करने वाले का पता न हो: 'My phone was stolen'। जब काम पर ध्यान देना हो तो भी passive natural लगता है: 'This bridge was built in 2010'। रोज़ की बातचीत में active ज़्यादा आम है, इसलिए पहले passive को पहचानना और बनाना सीखें, इस्तेमाल धीरे-धीरे बढ़ाएँ।",
        examples: [
          {
            wrong: "This temple built in 1500.",
            right: "This temple was built in 1500.",
            note: "काम किसी और से हुआ, इसलिए मंदिर subject बनेगा और was built आएगा।",
          },
          {
            wrong: "The room is clean every day.",
            right: "The room is cleaned every day.",
            note: "सफ़ाई का काम हो रहा है, इसलिए तीसरा रूप 'cleaned' चाहिए।",
          },
          {
            wrong: "The thief was catch by police.",
            right: "The thief was caught by the police.",
            note: "catch का तीसरा रूप caught है।",
          },
        ],
      },
    ],
    tips: [
      "फ़ॉर्मूला याद रखें: be + तीसरा रूप; by + करने वाला तभी जब वह ज़रूरी हो।",
      "go/went/gone जैसे तीन रूप रटें — passive में हमेशा तीसरा रूप लगता है।",
      "न्यूज़ हेडलाइन में passive ढूँढें — 'The road was closed', 'Three players were selected'।",
      "अपना वाक्य active में बोलकर उसे passive में बदलने की रोज़ प्रैक्टिस करें।",
    ],
    quiz: [
      {
        question: "The cake ___ by my mother every Sunday.",
        options: ["bakes", "is baked", "baked", "was bake"],
        answer: 1,
        explanation: "करने वाली (mother) by से आई है, इसलिए passive: is + baked।",
      },
      {
        question: "My wallet ___ yesterday.",
        options: ["was stolen", "stole", "was stole", "is stealing"],
        answer: 0,
        explanation: "भूतकाल के passive में was + तीसरा रूप (stolen) आता है।",
      },
      {
        question: "This song ___ by millions of people.",
        options: ["loves", "is loved", "loved", "is loving"],
        answer: 1,
        explanation: "गाना ख़ुद कुछ नहीं करता, उसे प्यार किया जाता है — is loved सही है।",
      },
      {
        question: "The letters ___ tomorrow.",
        options: ["will send", "are send", "will be sent", "sent"],
        answer: 2,
        explanation: "भविष्य का passive: will be + तीसरा रूप (sent)।",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "The window was broken.",
          "The window was break.",
          "The window is broke.",
          "The window breaked.",
        ],
        answer: 0,
        explanation: "passive में be + तीसरा रूप (was broken) सही रूप है।",
      },
    ],
  },
  {
    topic: "Modals (can/should/must)",
    level: "beginner",
    locale: "hi",
    title: "Modals: can, should, must की ताक़त",
    intro:
      "इन तीन छोटे शब्दों से आप क्षमता, सलाह और ज़रूरत — तीनों कह सकते हैं। रोज़ की बातचीत में यही तीन मॉडल सबसे ज़्यादा काम आते हैं।",
    sections: [
      {
        heading: "can और should: क्षमता और सलाह",
        explanation:
          "can का मतलब है 'कर सकता हूँ' — क्षमता या इजाज़त: 'I can swim', 'Can I sit here?'। should सलाह देता है — 'करना चाहिए': 'You should sleep early'। याद रखें — can/should/must के बाद वर्ब हमेशा base form में रहता है; न to लगता है, न s।",
        examples: [
          {
            wrong: "She can to sing very well.",
            right: "She can sing very well.",
            note: "can के बाद to नहीं आता — सीधा base form।",
          },
          {
            wrong: "You should to exercise daily.",
            right: "You should exercise daily.",
            note: "should के साथ भी to नहीं लगता।",
          },
          {
            wrong: "He can swims fast.",
            right: "He can swim fast.",
            note: "can के बाद वर्ब में s नहीं जुड़ता।",
          },
        ],
      },
      {
        heading: "must और मुलायम अंदाज़",
        explanation:
          "must दिखाता है कि काम करना ही होगा — सख़्त ज़रूरत या नियम: 'You must wear a helmet'। नकारात्मक must not का मतलब है मना: 'You must not smoke here'। नरम सलाह देनी हो तो should चुनें, और बहुत विनम्र अनुरोध के लिए 'Could you...' बोलें — यह और भी polite लगता है।",
        examples: [
          {
            wrong: "You must wearing a seatbelt.",
            right: "You must wear a seatbelt.",
            note: "must के बाद base form आता है, -ing नहीं।",
          },
          {
            wrong: "You don't must shout here.",
            right: "You must not shout here.",
            note: "must का नकारात्मक रूप ख़ुद 'must not' होता है, don't से नहीं बनता।",
          },
          {
            wrong: "Can you helping me?",
            right: "Can you help me?",
            note: "सवाल में भी can के बाद base form ही आती है।",
          },
        ],
      },
    ],
    tips: [
      "can/should/must के बाद कभी to, s या -ing नहीं — सिर्फ़ base form।",
      "मज़बूत सलाह = should, सख़्त नियम = must, विनम्र अनुरोध = could।",
      "मदद माँगते समय 'Can you help me?' से शुरू करें — यह सबसे आम और सही तरीक़ा है।",
      "must not = मना है; 'don't have to' = ज़रूरी नहीं — दोनों का मतलब अलग है।",
    ],
    quiz: [
      {
        question: "She ___ speak three languages.",
        options: ["can to", "cans", "is can", "can"],
        answer: 3,
        explanation: "can के साथ वर्ब base form में रहता है और can कभी नहीं बदलता।",
      },
      {
        question: "You ___ drink more water; it is good for you.",
        options: ["should", "should to", "must not", "can to"],
        answer: 0,
        explanation: "अच्छी सलाह के लिए should आता है।",
      },
      {
        question: "You ___ park here; it is forbidden.",
        options: ["can", "must not", "should", "could"],
        answer: 1,
        explanation: "मना बताने के लिए must not आता है।",
      },
      {
        question: "___ you please open the window?",
        options: ["Must", "Should", "Am", "Could"],
        answer: 3,
        explanation: "विनम्र अनुरोध के लिए Could आता है।",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "You should to sleep early.",
          "You should sleep early.",
          "You should sleeping early.",
          "You should sleeps early.",
        ],
        answer: 1,
        explanation: "should के बाद सीधा base form (sleep) आता है।",
      },
    ],
  },
  {
    topic: "Phrasal Verbs",
    level: "beginner",
    locale: "hi",
    title: "Phrasal Verbs: वर्ब + छोटे शब्द की जादुई जोड़ी",
    intro:
      "Native speakers 'get up', 'give up', 'look for' जैसे छोटे phrasal verbs से ही बातें करते हैं। ये याद हो गए तो आपकी English किताबी से असली जैसी लगने लगेगी।",
    sections: [
      {
        heading: "रोज़ के ज़रूरी phrasal verbs",
        explanation:
          "Phrasal verb यानी वर्ब + छोटे शब्द (up, on, off, for) की जोड़ी, जिसका मतलब अक्सर अलग होता है — 'give up' का मतलब है हार मान लेना; up का वहाँ ऊपर वाला मतलब नहीं होता। इन्हें पूरी जोड़ी की तरह याद करें, टुकड़ों में तोड़कर नहीं। रोज़ की जोड़ियाँ: wake up (नींद से उठना), turn on/off (चालू/बंद करना), look for (ढूँढना), put on (पहनना)।",
        examples: [
          {
            wrong: "Please on the light.",
            right: "Please turn on the light.",
            note: "चालू करने के लिए turn on एक साथ बोला जाता है, अकेला on नहीं।",
          },
          {
            wrong: "I am looking my glasses.",
            right: "I am looking for my glasses.",
            note: "किसी चीज़ को ढूँढने के लिए look के बाद for ज़रूरी है।",
          },
          {
            wrong: "He gave up smoke last year.",
            right: "He gave up smoking last year.",
            note: "give up के बाद verb-ing या noun आता है।",
          },
        ],
      },
      {
        heading: "Pronoun कहाँ बैठेगा? (word order)",
        explanation:
          "कई phrasal verbs में object बीच में आ सकता है: 'turn off the TV' = 'turn the TV off'। पर जब object की जगह pronoun (it, him, them) हो, तो pronoun हमेशा बीच में आता है — 'turn it off' सही, 'turn off it' ग़लत। यह छोटा नियम आपकी बोली जाने वाली English को बहुत natural बनाता है।",
        examples: [
          {
            wrong: "Put on it quickly.",
            right: "Put it on quickly.",
            note: "pronoun (it) को phrasal verb के दो हिस्सों के बीच रखें।",
          },
          {
            wrong: "I will pick up you at 8.",
            right: "I will pick you up at 8.",
            note: "'लेने जाना' के लिए pick you up कहा जाता है — you बीच में।",
          },
          {
            wrong: "She turned off it and went to sleep.",
            right: "She turned it off and went to sleep.",
            note: "it/them जैसे छोटे pronouns हमेशा बीच में आते हैं।",
          },
        ],
      },
    ],
    tips: [
      "हर हफ़्ते 3 नए phrasal verbs चुनें और उनसे अपनी ज़िंदगी के वाक्य बनाएँ।",
      "इन्हें मतलब के साथ पूरी जोड़ी की तरह याद करें, अलग-अलग शब्द तोड़कर नहीं।",
      "pronoun वाला नियम अभी से अभ्यास में डालें: turn it on, pick her up, put them on।",
      "बातचीत में आसान जोड़े बोलें: पता लगाना = find out, उठना = get up, पहनना = put on।",
    ],
    quiz: [
      {
        question: "Every morning I ___ at 6 a.m.",
        options: ["get on", "get up", "put up", "give up"],
        answer: 1,
        explanation: "सो कर उठने के लिए 'get up' कहा जाता है।",
      },
      {
        question: "Please ___ the fan; it is hot.",
        options: ["turn on", "put on", "give on", "look on"],
        answer: 0,
        explanation: "बिजली की चीज़ चालू करने के लिए turn on आता है।",
      },
      {
        question: "She is ___ her glasses; she cannot find them.",
        options: ["looking at", "looking for", "looking after", "looking up"],
        answer: 1,
        explanation: "खोई हुई चीज़ ढूँढने के लिए look for आता है।",
      },
      {
        question: "Which is correct?",
        options: ["Turn off it.", "It turn off.", "Turn it off.", "Turn of it."],
        answer: 2,
        explanation: "pronoun (it) phrasal verb के दो हिस्सों के बीच आता है।",
      },
      {
        question: "He ___ smoking last year.",
        options: ["gave up", "gave on", "gave away", "gave in"],
        answer: 0,
        explanation: "कोई आदत छोड़ने के लिए give up आता है।",
      },
    ],
  },
  {
    topic: "Common Mistakes by Bengali Speakers",
    level: "beginner",
    locale: "hi",
    title: "बंगाली वक्ताओं की आम अंग्रेज़ी ग़लतियाँ",
    intro:
      "मातृभाषा का असर English पर भी पड़ता है — बंगाली बोलने वालों की कुछ ग़लतियाँ बार-बार दोहराई जाती हैं। अगर आप या आपके दोस्त बंगाली से English सीख रहे हैं, तो ये ग़लतियाँ पहचानना ही आधा इलाज है।",
    sections: [
      {
        heading: "ग़ायब articles और 'I am agree'",
        explanation:
          "बंगाली में article (a/an/the) का इस्तेमाल English जितना नहीं होता, इसलिए 'I have pen' जैसे वाक्य आम हैं — सही है 'I have a pen'। दूसरी मशहूर ग़लती 'I am agree' कहना है; अंग्रेज़ी में agree अकेला वर्ब है, इसलिए 'I agree' ही सही है। 'I am understanding' भी इसी तरह की ग़लती है — ऐसे वर्ब continuous में नहीं आते, इसलिए 'I understand' बोलें।",
        examples: [
          {
            wrong: "I am agree with you.",
            right: "I agree with you.",
            note: "agree ख़ुद एक वर्ब है, इसके आगे am/is/are नहीं लगता।",
          },
          {
            wrong: "He is honest man.",
            right: "He is an honest man.",
            note: "बंगाली में article नहीं होता, पर English में a/an/the ज़रूरी है।",
          },
          {
            wrong: "I am understanding the lesson.",
            right: "I understand the lesson.",
            note: "understand जैसे मानसिक अवस्था वाले वर्ब continuous में नहीं आते।",
          },
        ],
      },
      {
        heading: "Preposition transfer और 'good name'",
        explanation:
          "मातृभाषा के पूर्वसर्ग सीधे English में घुस जाते हैं: 'discuss about the plan' ग़लत है — सही है 'discuss the plan', क्योंकि discuss में 'about' पहले से शामिल है। इसी तरह 'married with' नहीं, 'married to' कहा जाता है। दूसरी बहुचर्चित ग़लती 'What is your good name?' है — यह विनम्र पूछने के तरीक़े का सीधा अनुवाद है; अंग्रेज़ी में बस 'What is your name?' या 'May I know your name?' कहें।",
        examples: [
          {
            wrong: "We discussed about the plan.",
            right: "We discussed the plan.",
            note: "discuss में 'about' पहले से शामिल है, अलग से नहीं लगता।",
          },
          {
            wrong: "What is your good name?",
            right: "What is your name?",
            note: "'good name' सीधा अनुवाद है; English में सिर्फ़ 'your name' कहा जाता है।",
          },
          {
            wrong: "He is married with a doctor.",
            right: "He is married to a doctor.",
            note: "married के साथ with नहीं, to आता है।",
          },
        ],
      },
    ],
    tips: [
      "अपनी भाषा से शब्द-शब्द अनुवाद करने की बजाय English वाक्य को पूरे pattern की तरह याद करें।",
      "agree, discuss, understand — इन तीन वर्बों पर विशेष ध्यान दें; यहीं सबसे ज़्यादा फिसलन होती है।",
      "हर वाक्य बोलने से पहले जाँचें कि कहीं a/an/the छूट तो नहीं गया।",
      "'What is your good name?' जैसे सीधे अनुवादों की जगह simple English कहें — 'May I know your name?'।",
    ],
    quiz: [
      {
        question: "Which sentence is correct?",
        options: [
          "I am agree with you.",
          "I agree with you.",
          "I am agreeing you.",
          "I agrees with you.",
        ],
        answer: 1,
        explanation: "agree अकेला वर्ब है; इसके साथ am/is/are नहीं लगता।",
      },
      {
        question: "We ___ the matter for two hours.",
        options: ["discussed about", "were discussed", "discussed", "discuss about"],
        answer: 2,
        explanation: "discuss के बाद कोई preposition नहीं आता — सीधे object आता है।",
      },
      {
        question: "She bought ___ umbrella.",
        options: ["a", "the", "no word", "an"],
        answer: 3,
        explanation: "मातृभाषा में article नहीं होता, पर English में an umbrella ज़रूरी है।",
      },
      {
        question: "He ___ a good idea.",
        options: ["is having", "has", "have", "having"],
        answer: 1,
        explanation: "मालकियत दिखाने वाला have continuous में नहीं आता; he के साथ has आता है।",
      },
      {
        question: "Which question sounds natural in English?",
        options: [
          "What is your good name?",
          "Which is your good name?",
          "What is your name?",
          "How is your name?",
        ],
        answer: 2,
        explanation: "English में सीधे 'What is your name?' पूछा जाता है।",
      },
    ],
  },
  {
    topic: "Since vs For",
    level: "beginner",
    locale: "hi",
    title: "Since vs For: कब से और कितने समय से",
    intro:
      "'3 साल से' या 'सुबह से' — दोनों में 'से' ही लगता है, पर English में एक के लिए since और दूसरे के लिए for। यह फ़र्क़ समझ लेंगे तो present perfect की आधी लड़ाई जीत ली।",
    sections: [
      {
        heading: "since: शुरुआत का बिंदु",
        explanation:
          "since तब लगता है जब शुरुआत का सटीक समय बताया जाए — किसी समय-बिंदु से: since Monday, since 2020, since morning, since my birthday। यानी जवाब मिले 'कब से?' — वहाँ since। since वाले वाक्य अक्सर present perfect (have/has + तीसरा रूप) के साथ आते हैं: 'I have lived here since 2019'।",
        examples: [
          {
            wrong: "I have lived here since five years.",
            right: "I have lived here for five years.",
            note: "'पाँच साल' समय की लंबाई है, शुरुआत का बिंदु नहीं — इसलिए for।",
          },
          {
            wrong: "She has been here for Monday.",
            right: "She has been here since Monday.",
            note: "Monday एक तय दिन/बिंदु है, इसलिए since आएगा।",
          },
          {
            wrong: "It is raining since morning.",
            right: "It has been raining since morning.",
            note: "बीते वक़्त से अब तक चल रहे काम के लिए present perfect चाहिए।",
          },
        ],
      },
      {
        heading: "for: समय की लंबाई",
        explanation:
          "for तब लगता है जब सिर्फ़ समय की मात्रा बताई जाए — कितने घंटे, दिन, साल: for two hours, for three days, for a long time। यानी जवाब मिले 'कितने समय से?' — वहाँ for। आसान ट्रिक: समय के आगे संख्या या a/an हो (two hours, a week), तो for आएगा; तारीख़ या दिन हो, तो since।",
        examples: [
          {
            wrong: "I have known him since ten years.",
            right: "I have known him for ten years.",
            note: "दस साल = समय की लंबाई, इसलिए for सही है।",
          },
          {
            wrong: "We waited at the station since two hours.",
            right: "We waited at the station for two hours.",
            note: "'दो घंटे' कितने समय तक, यह बताता है — since नहीं।",
          },
          {
            wrong: "I have studied English since three months.",
            right: "I have studied English for three months.",
            note: "तीन महीने = समय की मात्रा, इसलिए for।",
          },
        ],
      },
    ],
    tips: [
      "एक लाइन याद रखें: since = कब से (बिंदु), for = कितने समय से (लंबाई)।",
      "संख्या दिखे (two hours, five years) तो तुरंत for; तारीख़ या दिन दिखे (2020, Monday) तो since।",
      "since/for वाले वाक्य में वर्ब present perfect में रखें — have/has + तीसरा रूप।",
      "अपने बारे में एक वाक्य रोज़ बोलें: 'I have lived in ___ for ___ years.' — interview में भी काम आएगा।",
    ],
    quiz: [
      {
        question: "I have lived in Delhi ___ 2020.",
        options: ["for", "from", "since", "at"],
        answer: 2,
        explanation: "2020 शुरुआत का साल (बिंदु) है, इसलिए since आएगा।",
      },
      {
        question: "She has worked here ___ five years.",
        options: ["for", "since", "from", "during"],
        answer: 0,
        explanation: "'पाँच साल' समय की लंबाई है, इसलिए for सही है।",
      },
      {
        question: "It has been raining ___ morning.",
        options: ["for", "since", "at", "in"],
        answer: 1,
        explanation: "'morning' से शुरुआत का बिंदु बताया गया है, इसलिए since।",
      },
      {
        question: "We have been waiting ___ two hours.",
        options: ["since", "from", "during", "for"],
        answer: 3,
        explanation: "'दो घंटे' एक अवधि है, इसलिए for आता है।",
      },
      {
        question: "He has known her ___ they were children.",
        options: ["for", "during", "since", "from"],
        answer: 2,
        explanation: "'they were children' शुरुआत का समय-बिंदु बताता है, इसलिए since।",
      },
    ],
  },
];

export default LESSONS;
