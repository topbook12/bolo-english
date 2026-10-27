import type { BankLesson } from "./types";

// Static grammar bank — foundation topics, INTERMEDIATE level (CEFR ~B1),
// Hindi explanations (for users whose UI language is Hindi).
const LESSONS: BankLesson[] = [
  {
    topic: "Tense basics",
    level: "intermediate",
    locale: "hi",
    title: "टेंस की गहराई: perfect और continuous रूप",
    intro:
      "तीनों simple टेंस अब आपकी पकड़ में हैं; अब बारी है गहराई की। Perfect और continuous रूप सिखाते हैं कि काम सिर्फ़ कब हुआ नहीं, कितनी देर से चल रहा है और दो घटनाओं में कौन पहले हुआ।",
    sections: [
      {
        heading: "Perfect रूप: एक पल से दूसरे पल की कहानी",
        explanation:
          "Present perfect (have/has + participle) भूत के काम को वर्तमान से जोड़ता है: I have lost my keys. Past perfect (had + participle) एक क़दम और पीछे जाता है — दो भूतकालीन घटनाओं में पहली वाली को चिह्नित करता है: When I reached the station, the train had left. हिंदी में हम 'पहले...बाद में' शब्दों से क्रम समझा देते हैं, लेकिन इंग्लिश वही क्रम had से दिखाती है — इसलिए had + participle को 'भूत का भूत' समझें।",
        examples: [
          {
            wrong: "When the train left, I reached the station.",
            right: "When I reached the station, the train had left.",
            note: "पहले हुई घटना past perfect में जाती है — had left से ही साफ़ है कि ट्रेन पहले निकल गई थी।",
          },
          {
            wrong: "She is working at this school since 2019.",
            right: "She has been working at this school since 2019.",
            note: "हिंदी में '2019 से काम कर रही है' एक ही रूप चलता है, पर English में since के साथ have been + -ing ज़रूरी है।",
          },
          {
            wrong: "I had went to bed before the phone rang.",
            right: "I had gone to bed before the phone rang.",
            note: "had के बाद participle आता है — went नहीं, gone।",
          },
        ],
      },
      {
        heading: "Continuous रूप: भूत और भविष्य में चलता काम",
        explanation:
          "Past continuous (was/were + -ing) कहानी का बैकग्राउंड बनाता है: I was cooking when the lights went out. भविष्य के किसी तय पल पर काम चल रहा होगा, तो future continuous (will be + -ing) आता है: This time tomorrow I will be sitting on the train to Rajshahi. दोनों रूप आपकी टाइमलाइन को धुंधले से निखारकर सटीक बना देते हैं।",
        examples: [
          {
            wrong: "While I cooked dinner, the lights went out.",
            right: "While I was cooking dinner, the lights went out.",
            note: "लंबा बैकग्राउंड काम past continuous में, अचानक वाली घटना simple past में।",
          },
          {
            wrong: "This time tomorrow I will travel to Rajshahi.",
            right: "This time tomorrow I will be travelling to Rajshahi.",
            note: "भविष्य के तय पल पर काम चल रहा होगा = will be + -ing।",
          },
          {
            wrong: "At ten o'clock he will wait for you at the gate.",
            right: "At ten o'clock he will be waiting for you at the gate.",
            note: "तय समय + चलता काम = future continuous।",
          },
        ],
      },
      {
        heading: "कहानी में टेंस को बाँधे रखना",
        explanation:
          "किस्से का एक मुख्य टेंस होना चाहिए। भूतकाल से शुरू किया तो पूरी कहानी भूतकाल में ही रहे, और उससे भी पुरानी बात बतानी हो तभी past perfect आए: I reached home late. My mother had already eaten. बिना वजह टेंस उछालना B1 लर्नर की सबसे पहचानी निशानी है — और थोड़ी आदत से सबसे आसानी से ठीक भी हो जाती है।",
        examples: [
          {
            wrong: "Yesterday I go to the market and meet my old teacher.",
            right: "Yesterday I went to the market and met my old teacher.",
            note: "yesterday पूरी कहानी को भूतकाल में बाँध देता है।",
          },
          {
            wrong: "When I got home, my mother already cooks dinner.",
            right: "When I got home, my mother had already cooked dinner.",
            note: "खाना घर पहुँचने से पहले ही बन चुका था, इसलिए had cooked।",
          },
          {
            wrong: "Last week we are visiting our village and it rained heavily.",
            right: "Last week we visited our village and it rained heavily.",
            note: "बीती हुई घटना के बीच में present रूप नहीं घुस सकता।",
          },
        ],
      },
    ],
    tips: [
      "बोलने से पहले समय का लंगर चुनें — अब, इससे पहले, या इसके बाद; फिर हर वर्ब को उसी लंगर से बाँधे रखें।",
      "दो भूतकालीन काम? पहला past perfect में, दूसरा simple past में।",
      "for + समय की लंबाई perfect continuous की जोड़ी है: I have been waiting for three hours.",
      "हर रात डायरी की एक लाइन तीन रूपों में लिखें — simple, continuous, perfect; फ़र्क़ ख़ुद नज़र आएगा।",
    ],
    quiz: [
      {
        question: "By the time we reached the hall, the seminar ___.",
        options: ["already started", "has already started", "had already started", "was already starting"],
        answer: 2,
        explanation: "हमारा पहुँचना बाद में हुआ, शुरुआत पहले — इसलिए पहली घटना past perfect में जाएगी।",
      },
      {
        question: "I ___ for my exam results since Monday morning.",
        options: ["wait", "am waiting", "have been waiting", "waited"],
        answer: 2,
        explanation: "since Monday अतीत से अब तक खिंचता है, इसलिए present perfect continuous सबसे सही है।",
      },
      {
        question: "This time next Sunday we ___ our grandparents in the village.",
        options: ["will visit", "will be visiting", "visit", "have visited"],
        answer: 1,
        explanation: "This time next Sunday एक पल तय करता है, और उस पल पर मुलाक़ात चल रही होगी — will be visiting।",
      },
      {
        question: "While I ___ the dishes, my brother was watching TV.",
        options: ["did", "was doing", "have done", "had done"],
        answer: 1,
        explanation: "भूतकाल के दो साथ-साथ कामों में लंबा बैकग्राउंड वाला past continuous लेता है: was doing।",
      },
      {
        question: "Last night I ___ my homework and then helped my mother.",
        options: ["finish", "have finished", "had finished", "finished"],
        answer: 3,
        explanation: "then शब्द क्रम साफ़ कर देता है, इसलिए दोनों काम simple past में रहते हैं: finished।",
      },
    ],
  },
  {
    topic: "Subject-Verb Agreement",
    level: "intermediate",
    locale: "hi",
    title: "Subject-Verb Agreement: चालाक कर्ता और उनकी चालें",
    intro:
      "आम agreement के नियम आसान हैं — लेकिन जैसे ही everyone, neither nor और ten kilometres वाक्य में घुसते हैं, जाल बिछ जाता है। इस पाठ में ठीक उही जाल सुलझाए गए हैं।",
    sections: [
      {
        heading: "Each, every और -body/-one परिवार हमेशा एकवचन",
        explanation:
          "Each, every, everyone, everybody, somebody, nobody, either — इनके पास बहुवचन संज्ञा खड़ी हो तो भी ये हमेशा एकवचन क्रिया लेते हैं: Every one of the students has a roll number. पास का बहुवचन धोखा न दे — पहले असली कर्ता ढूँढें, फिर क्रिया रखें। अच्छी बात यह है कि English में लिंग का झंझट नहीं; सिर्फ़ एकवचन-बहुवचन का हिसाब रखना है।",
        examples: [
          {
            wrong: "Everyone in our class have submitted the form.",
            right: "Everyone in our class has submitted the form.",
            note: "everyone एकवचन है, इसलिए has।",
          },
          {
            wrong: "Each of the players were given a new jersey.",
            right: "Each of the players was given a new jersey.",
            note: "असली कर्ता each है, players नहीं — of-वाला हिस्सा काटकर जाँचें।",
          },
          {
            wrong: "Neither of my two cousins live in Chattogram.",
            right: "Neither of my two cousins lives in Chattogram.",
            note: "neither of + बहुवचन होने पर भी सही इंग्लिश में एकवचन क्रिया लगती है।",
          },
        ],
      },
      {
        heading: "Either/or, neither/nor: क़रीब का कर्ता क्रिया तय करता है",
        explanation:
          "either...or और neither...nor में क्रिया अपने सबसे क़रीब बैठे कर्ता से मेल खाती है: Neither the players nor the coach was happy. Either the coach or the players are responsible. एक हिस्सा बहुवचन हो तो उसे क्रिया के पास रखने से वाक्य ज़्यादा मुलायम सुनाई देता है।",
        examples: [
          {
            wrong: "Neither the manager nor the workers was satisfied.",
            right: "Neither the manager nor the workers were satisfied.",
            note: "workers क्रिया के क़रीब है, इसलिए क्रिया बहुवचन — were।",
          },
          {
            wrong: "Either Rina or her sisters is coming today.",
            right: "Either Rina or her sisters are coming today.",
            note: "her sisters क्रिया के ठीक पास है, इसलिए are।",
          },
          {
            wrong: "Not only the teacher but also the students was praised.",
            right: "Not only the teacher but also the students were praised.",
            note: "not only...but also में भी वही क़रीबी-कर्ता नियम चलता है।",
          },
        ],
      },
      {
        heading: "समूहवाचक, अगणनीय और नापा हुआ परिमाण",
        explanation:
          "Team, family, committee जैसे समूहवाचक शब्द पूरा दल एक इकाई की तरह काम करे तो एकवचन क्रिया लेते हैं। News, information, furniture, advice, luggage — ये अगणनीय शब्द हमेशा एकवचन रहते हैं। और पैसे, समय या दूरी की मात्रा एक ही अखंड चीज़ गिनी जाती है: Ten thousand taka is a big sum।",
        examples: [
          {
            wrong: "The news are very sad today.",
            right: "The news is very sad today.",
            note: "news के अंत में s होकर भी शब्द अगणनीय और एकवचन है।",
          },
          {
            wrong: "Our team have won all five matches this season.",
            right: "Our team has won all five matches this season.",
            note: "टीम एक इकाई की तरह जीती है, इसलिए has।",
          },
          {
            wrong: "Five kilometres are too far to walk in this heat.",
            right: "Five kilometres is too far to walk in this heat.",
            note: "नापी गई दूरी एक ही मात्रा है — इसलिए is।",
          },
        ],
      },
    ],
    tips: [
      "क्रिया चुनने से पहले 'of the players' जैसे वाक्यांश काट दें — असली कर्ता उसके पीछे छिपा होता है।",
      "एकवचन-टोली रट लें: everyone, each, every, everybody, nobody, neither of, either of।",
      "neither...nor या either...or में क्रिया के सबसे पास वाले संज्ञा की ओर देखें — वही फ़ैसला करता है।",
      "News, physics, mathematics, information — s पर ख़त्म होकर भी ये एकवचन हैं; इन्हें एकवचन क्रिया ही भाती है।",
    ],
    quiz: [
      {
        question: "Everyone in the queue ___ waiting patiently for the counter to open.",
        options: ["is", "are", "were", "have been"],
        answer: 0,
        explanation: "everyone हमेशा एकवचन होता है, इसलिए क्रिया is।",
      },
      {
        question: "Neither the students nor the teacher ___ informed about the change.",
        options: ["were", "have been", "was", "are"],
        answer: 2,
        explanation: "क़रीब का कर्ता teacher एकवचन है, इसलिए was।",
      },
      {
        question: "The list of selected candidates ___ on the notice board.",
        options: ["are", "is", "were", "have been"],
        answer: 1,
        explanation: "असली कर्ता list है, candidates नहीं — एक list का मतलब is।",
      },
      {
        question: "Ten thousand taka ___ enough for the semester's books.",
        options: ["are", "were", "is", "have been"],
        answer: 2,
        explanation: "पैसों की रक़म एक ही मात्रा गिनी जाती है, इसलिए एकवचन is।",
      },
      {
        question: "Each of the participants ___ a certificate at the closing ceremony.",
        options: ["were given", "have been given", "was given", "are given"],
        answer: 2,
        explanation: "असली कर्ता each है और वह एकवचन है — इसलिए was given।",
      },
    ],
  },
  {
    topic: "Question Formation",
    level: "intermediate",
    locale: "hi",
    title: "सवाल गढ़ना: indirect question, tag और subject question",
    intro:
      "B1 स्तर पर दो तरह के सवाल चाहिए — दरवाज़े खोलने वाले विनम्र सवाल, और बातचीत बहाते हुए स्वाभाविक सवाल। इस पाठ में दोनों पॉलिश होंगे — मशहूर universal 'isn't it' वाली समस्या भी।",
    sections: [
      {
        heading: "Indirect question: विनम्र और ग़लती-रहित",
        explanation:
          "विनम्र लगने के लिए सवाल को एक वाक्यांश के अंदर लपेट दें: Could you tell me...?, Do you know...?, I wonder...। वाक्यांश के बाद साधारण वाक्य का क्रम रहता है — do/does/did नहीं, और क्रिया कर्ता के बाद आती है: Could you tell me where the station is? हिंदी में सवाल पूछने के लिए कोई सहायक क्रिया पलटती नहीं, इसलिए याद रखने का सबसे आसान तरीक़ा है — भीतर के हिस्से को साधारण वाक्य की तरह ही सजाओ।",
        examples: [
          {
            wrong: "Could you tell me where is the station?",
            right: "Could you tell me where the station is?",
            note: "indirect question के अंदर कर्ता पहले, क्रिया बाद में।",
          },
          {
            wrong: "Do you know what means this word?",
            right: "Do you know what this word means?",
            note: "भीतर के प्रश्न में दूसरी बार do/does नहीं घुसता।",
          },
          {
            wrong: "Can you tell me how much does this book cost?",
            right: "Can you tell me how much this book costs?",
            note: "does हटाइए, costs कर्ता के ठीक बाद बैठेगा।",
          },
        ],
      },
      {
        heading: "Tag question: सही टैग की जोड़ी",
        explanation:
          "टैग मुख्य वाक्य की auxiliary की हूबहू प्रतिलिपि लेकर उसे पलट देता है: हाँ-वाले वाक्य पर ना-वाला टैग — You are coming, aren't you? ना-वाले वाक्य पर हाँ-वाला टैग — He can drive, can't he? ख़ास रूप रट लें: I am → aren't I, और Let's → shall we। हर सवाल पर isn't it? लगाने की आदत हमारी क्लास में चलती है, पर अंतरराष्ट्रीय अंग्रेज़ी में यह जानी-पहचानी ग़लती है।",
        examples: [
          {
            wrong: "You are coming to the wedding, isn't it?",
            right: "You are coming to the wedding, aren't you?",
            note: "टैग कर्ता और auxiliary दोनों का प्रतिध्वनि होता है: are → aren't you।",
          },
          {
            wrong: "They didn't reach home late, didn't they?",
            right: "They didn't reach home late, did they?",
            note: "ना-वाले वाक्य पर हाँ-वाला टैग लगता है।",
          },
          {
            wrong: "Let's start the revision, will we?",
            right: "Let's start the revision, shall we?",
            note: "let's से शुरू सुझाव का टैग हमेशा shall we होता है।",
          },
        ],
      },
      {
        heading: "Subject question, negative question और आख़िर में preposition",
        explanation:
          "जब who या what ख़ुद प्रश्न का कर्ता हो, तो do आता ही नहीं: Who broke the window? — Who did break the window? नहीं। Didn't you get my message? जैसा negative question आश्चर्य या पक्का करने का भाव देता है। और रोज़मर्रा की अंग्रेज़ी में preposition वाक्य के अंत में रह जा सकता है: Which college are you applying to?",
        examples: [
          {
            wrong: "Who did call you last night?",
            right: "Who called you last night?",
            note: "who जब कर्ता हो, तो साधारण वाक्य का क्रम ही रहता है।",
          },
          {
            wrong: "Didn't you finished the assignment?",
            right: "Didn't you finish the assignment?",
            note: "didn't के बाद क्रिया का मूल रूप finish वापस आ जाता है।",
          },
          {
            wrong: "About which topic are you talking?",
            right: "Which topic are you talking about?",
            note: "रोज़मर्रा की अंग्रेज़ी preposition को वाक्य के अंत में ही छोड़ देती है।",
          },
        ],
      },
    ],
    tips: [
      "indirect question का फ़ॉर्मूला: विनम्र शुरुआत + साधारण वाक्य का क्रम। पहले सीधा सवाल बोलें, फिर do/does/did हटा दें।",
      "टैग क्रिया का ही प्रतिबिंब है: is → isn't, can → can't, did → didn't — और I am बनता है aren't I।",
      "who/what अगर कर्ता की जगह ले, तो do/does/did फ़ौरन मिटा दें।",
      "किसी अनुरोध को नरम करने के लिए can को could या may में बदलें: Could I leave a little early today?",
    ],
    quiz: [
      {
        question: "Could you tell me ___?",
        options: ["where is the exam hall", "where the exam hall is", "where is exam hall", "the exam hall is where"],
        answer: 1,
        explanation: "indirect question साधारण वाक्य का क्रम रखता है: the exam hall is।",
      },
      {
        question: "You have finished the whole chapter, ___?",
        options: ["isn't it", "haven't you", "didn't you", "have you"],
        answer: 1,
        explanation: "have के साथ हाँ-वाले वाक्य पर ना-वाला टैग haven't you लगता है।",
      },
      {
        question: "___ the lights when the storm started?",
        options: ["Who switched off", "Who did switch off", "Who switches off", "Whom switched off"],
        answer: 0,
        explanation: "who यहाँ कर्ता है, इसलिए did की ज़रूरत नहीं: who switched off।",
      },
      {
        question: "I am on the list of finalists, ___?",
        options: ["amn't I", "am not I", "aren't I", "isn't I"],
        answer: 2,
        explanation: "I am का मानक टैग aren't I होता है।",
      },
      {
        question: "Do you know ___?",
        options: ["when does the shop open", "when the shop opens", "when opens the shop", "when shop opens"],
        answer: 1,
        explanation: "do you know के बाद भीतरी हिस्से में साधारण क्रम रहता है, does नहीं आता।",
      },
    ],
  },
  {
    topic: "Prepositions (in/on/at)",
    level: "intermediate",
    locale: "hi",
    title: "Preposition की गहराई: in time, on time और पक्के जोड़े",
    intro:
      "B1 स्तर पर छोटे शब्द बड़ा काम करते हैं। in time और on time पाँच अक्षरों के फ़ासले पर बिल्कुल अलग मायने रखते हैं — और दर्जनों adjective + preposition जोड़े किसी तर्क को नहीं मानते, सिर्फ़ याद करने को।",
    sections: [
      {
        heading: "in time बनाम on time — और समय के दूसरे जोड़े",
        explanation:
          "On time का मतलब है समय पर, ठीक तय समय पर: The 8 a.m. train left on time. और in time का मतलब है काफ़ी पहले, देर होने से पहले: We reached the platform in time to catch the train. इसी तरह at the end किसी चीज़ का आख़िरी हिस्सा बताता है, जबकि in the end का मतलब है आख़िरकार, सब कुछ होने के बाद। हिंदी में दोनों 'समय पर' और 'आख़िरकार' में उतर जाते हैं, इसलिए यह फ़र्क़ अलग से याद करना पड़ता है।",
        examples: [
          {
            wrong: "The rickshaw arrived exactly in time.",
            right: "The rickshaw arrived exactly on time.",
            note: "ठीक समय पर पहुँचना = on time।",
          },
          {
            wrong: "We reached the stadium on time to see the first goal.",
            right: "We reached the stadium in time to see the first goal.",
            note: "कुछ करने के लिए काफ़ी पहले पहुँचना = in time to...",
          },
          {
            wrong: "At the end, we decided to share the bill.",
            right: "In the end, we decided to share the bill.",
            note: "आख़िरकार, सब कुछ होने के बाद = in the end।",
          },
        ],
      },
      {
        heading: "Adjective/verb + preposition: पक्की जोड़ियाँ",
        explanation:
          "ये जोड़ियाँ पक्की हैं — कोई तर्क नहीं, सिर्फ़ स्मृति: interested in, good at, afraid of, depend on, married to, angry with। इन्हें शब्दावली की तरह एक-एक टुकड़े की तरह सीखें, और अपनी भाषा से शब्द-दर-शब्द अनुवाद कभी न करें — हिंदी के 'में/पर' और English के in/on/of एक-एक में नहीं मिलते।",
        examples: [
          {
            wrong: "I am interested on photography.",
            right: "I am interested in photography.",
            note: "interested हमेशा in का साथी है।",
          },
          {
            wrong: "She is very good in mental maths.",
            right: "She is very good at mental maths.",
            note: "किसी हुनर में माहिर = good at।",
          },
          {
            wrong: "Whether we play depends of the weather.",
            right: "Whether we play depends on the weather.",
            note: "depend हमेशा on लेता है, of कभी नहीं।",
          },
        ],
      },
      {
        heading: "तीन शब्दों के चंक: in a hurry, on purpose, at risk",
        explanation:
          "रोज़मर्रा की अंग्रेज़ी भावनाओं और हालात को तीन-शब्दों के चंकों में सँभालती है: in a hurry (जल्दी में), on purpose (जान-बूझकर), at risk (ख़तरे में), in a good mood, on duty, at ease। पूरे चंक की तरह बोलें — एक शब्द बदलते ही वाक्य तुरंत परदेसी सुनाई देने लगता है।",
        examples: [
          {
            wrong: "Sorry I can't talk — I am on a hurry.",
            right: "Sorry I can't talk — I am in a hurry.",
            note: "जल्दी में होना = in a hurry।",
          },
          {
            wrong: "I didn't switch off the alarm with purpose.",
            right: "I didn't switch off the alarm on purpose.",
            note: "जान-बूझकर = on purpose; इसका उलटा by accident।",
          },
          {
            wrong: "Families near the river are on risk of flooding.",
            right: "Families near the river are at risk of flooding.",
            note: "ख़तरे में होना = at risk।",
          },
        ],
      },
    ],
    tips: [
      "Preposition का अनुवाद बंद करें; पूरा चंक रटें — interested IN, good AT, depend ON।",
      "On time = समय पर; in time = काफ़ी पहले। ट्रेन के समय-सारणी से ख़ुद को परखें।",
      "ड्रामा-फ़िल्मों से तीन-शब्दों के वाक्यांश पूरे के पूरे नोट करें: in a hurry, at risk, on duty।",
      "ज़्यादातर ग़लतियाँ of/on अदला-बदली से आती हैं — मुँह से निकले हर 'of' पर एक पल रुकें।",
    ],
    quiz: [
      {
        question: "The flight left exactly ___ 7:30 — beautifully punctual.",
        options: ["in time", "on time", "at time", "by time"],
        answer: 1,
        explanation: "तय समय पर, पंक्चुअल = on time।",
      },
      {
        question: "Luckily the doctor arrived ___ to save the patient.",
        options: ["on time", "in time", "at time", "for time"],
        answer: 1,
        explanation: "कुछ करने के लिए काफ़ी पहले पहुँचना = in time to do it।",
      },
      {
        question: "My younger sister is very good ___ drawing mehendi patterns.",
        options: ["at", "in", "on", "with"],
        answer: 0,
        explanation: "हुनर के लिए पक्की जोड़ी good at है।",
      },
      {
        question: "The whole village depends ___ the river for fish and farming.",
        options: ["of", "in", "on", "from"],
        answer: 2,
        explanation: "depend on ही पक्की जोड़ी है।",
      },
      {
        question: "He broke my favourite cup, but it wasn't ___ — it slipped.",
        options: ["with purpose", "on purpose", "in purpose", "for purpose"],
        answer: 1,
        explanation: "जान-बूझकर = on purpose; इसका उलटा by accident है।",
      },
    ],
  },
  {
    topic: "Articles (a/an/the)",
    level: "intermediate",
    locale: "hi",
    title: "B1 पर Article: zero article, सामान्य अर्थ और दूसरा ज़िक्र",
    intro:
      "हिंदी a, an, the के बिना बख़ूबी चलती है — English मानती नहीं। इस स्तर पर ख़तरा अब missing article नहीं; असली जाल यह जानना है कि कब बिल्कुल कुछ नहीं लगाना होता।",
    sections: [
      {
        heading: "Zero article: सामान्य अर्थ में भाववाचक और अगणनीय संज्ञा",
        explanation:
          "कोई विचार सामान्य अर्थ में हो — honesty, education, happiness, information — तो कोई article नहीं लगता: Honesty is the best policy। पर the लगते ही अर्थ सँकरा होकर एक ख़ास उदाहरण में उतर जाता है: The honesty of that shopkeeper impressed everyone। एक छोटा शब्द, पूरे अर्थ का बदलाव — और चूँकि हिंदी में article ही नहीं, यही ख़ाली जगह सबसे अदृश्य ग़लतियों का सोता है।",
        examples: [
          {
            wrong: "The honesty is the best policy.",
            right: "Honesty is the best policy.",
            note: "सामान्य अर्थ में भाववाचक विचार पर कोई article नहीं लगता।",
          },
          {
            wrong: "She gave me an useful advice before the exam.",
            right: "She gave me useful advice before the exam.",
            note: "advice अगणनीय है — a/an नहीं, plural -s भी नहीं।",
          },
          {
            wrong: "The life in a village is simple.",
            right: "Life in a village is simple.",
            note: "सामान्य अर्थ में life से पहले कुछ नहीं बैठता।",
          },
        ],
      },
      {
        heading: "सामान्य बहुवचन बनाम the + ख़ास समूह",
        explanation:
          "बिना article के बहुवचन संज्ञा सबके बारे में सामान्य बात करती है: Rickshaws are part of Dhaka's charm। और the + बहुवचन पहचाने गए किसी ख़ास समूह की बात करता है: The rickshaws near the station charge double। वही शब्द, दो अलग दुनिया। और श्रृंखला याद रखें — पहले ज़िक्र पर a shawl, दूसरे ज़िक्र पर the shawl।",
        examples: [
          {
            wrong: "The tigers are beautiful animals.",
            right: "Tigers are beautiful animals.",
            note: "बाघों के बारे में आम बात? the हटा दें।",
          },
          {
            wrong: "Tigers of the Sundarbans are endangered.",
            right: "The tigers of the Sundarbans are endangered.",
            note: "पहचाना हुआ ख़ास समूह the माँगता है।",
          },
          {
            wrong: "I bought a shawl. Shawl was woven in Tangail.",
            right: "I bought a shawl. The shawl was woven in Tangail.",
            note: "दूसरे ज़िक्र पर a की जगह the बैठता है।",
          },
        ],
      },
      {
        heading: "Superlative, अनोखी चीज़ें और इकलौते नाम",
        explanation:
          "Superlative के साथ हमेशा the चलता है: the best, the tallest, the most delicious। अनोखी चीज़ों पर भी the बैठता है — the sun, the moon, the sky, the internet। पर अकेले पहाड़ के नाम ख़ाली रहते हैं: the Himalayas कहते हैं, पर Mount Everest। ये छोटी-छोटी परंपराएँ नियम से नहीं, एक-एक करके सीखी जाती हैं।",
        examples: [
          {
            wrong: "She is most talented singer in our club.",
            right: "She is the most talented singer in our club.",
            note: "superlative से पहले the हमेशा लगता है।",
          },
          {
            wrong: "We found the answer on Internet.",
            right: "We found the answer on the Internet.",
            note: "the internet अनोखी चीज़ों में गिनती की the लेती है।",
          },
          {
            wrong: "The Mount Everest lies between Nepal and Tibet.",
            right: "Mount Everest lies between Nepal and Tibet.",
            note: "अकेले पहाड़ के नाम बिना the के रहते हैं: Mount Everest, पर the Himalayas।",
          },
        ],
      },
    ],
    tips: [
      "सामान्य भाववाचक विचार → कोई article नहीं। वही विचार वाक्यांश में बँधा → the: education, पर the education system of our district।",
      "पहला ज़िक्र a, दूसरा ज़िक्र the — अपनी कहानी में शॉल को साथ लेकर चलें।",
      "superlative दिखे? उसके आगे the लगाएँ, बिना किसी अपवाद के।",
      "अगणनीय शब्द कभी a नहीं लेते: advice, information, furniture, luggage, homework।",
    ],
    quiz: [
      {
        question: "Choose the correct sentence.",
        options: [
          "The patience is a virtue.",
          "Patience is a virtue.",
          "A patience is a virtue.",
          "Patience is virtue the.",
        ],
        answer: 1,
        explanation: "सामान्य अर्थ में patience भाववाचक विचार है — कोई article नहीं लगेगा।",
      },
      {
        question: "I saw a stray dog near the gate. ___ dog was limping.",
        options: ["A", "The", "One", "Some"],
        answer: 1,
        explanation: "उसी कुत्ते के दूसरे ज़िक्र पर the बैठता है।",
      },
      {
        question: "Choose the correct sentence.",
        options: [
          "Rickshaw is cheapest transport in Dhaka.",
          "The rickshaws are cheapest transport in Dhaka.",
          "Rickshaws are the cheapest transport in Dhaka.",
          "A rickshaws are cheapest transport in Dhaka.",
        ],
        answer: 2,
        explanation: "सामान्य बहुवचन (rickshaws) + superlative का the — यही जोड़ी स्वाभाविक है।",
      },
      {
        question: "She won ___ prize for the best essay in the competition.",
        options: ["a", "the", "an", "no article"],
        answer: 0,
        explanation: "कई इनामों में से एक का मतलब a prize; और the best essay the वाला superlative है।",
      },
      {
        question: "My grandfather listens to ___ news on the radio every evening.",
        options: ["a", "the", "an", "no article"],
        answer: 1,
        explanation: "the news एक पक्का वाक्यांश है — the ही लगता है।",
      },
    ],
  },
  {
    topic: "Present Perfect vs Past Simple",
    level: "intermediate",
    locale: "hi",
    title: "Present Perfect बनाम Past Simple: B1 की असली सीमा",
    intro:
      "शुरुआत में आपने इस जोड़ी से परिचय किया था; अब असली सीमा पार करते हैं — still, yet, already, और न्यूज़-रीडर का नियम। ये सही बैठ जाएँ तो परीक्षक की भौंहें भी ढीली पड़ जाती हैं।",
    sections: [
      {
        heading: "बंद समय बनाम अब भी खुला समय",
        explanation:
          "Past simple बंद हो चुके समय के शब्दों के साथ रहता है: yesterday, last week, in 2021, two years ago। Present perfect अब भी खुली समयावधि के साथ: today, this week, so far, ever, since 2021। एक ही सवाल पूछें — समय की खिड़की अब भी खुली है? हिंदी में 'किया था' और 'कर चुका/रहा हूँ' दोनों रूप हैं, पर 'अभी तक' की ज़िम्मेदारी इंग्लिश में perfect की है।",
        examples: [
          {
            wrong: "I have watched two films last night.",
            right: "I watched two films last night.",
            note: "last night बंद समय है — इसलिए past simple।",
          },
          {
            wrong: "I saw three films this week so far.",
            right: "I have seen three films this week so far.",
            note: "so far हफ़्ते को खुला रखता है — present perfect।",
          },
          {
            wrong: "She has visited her village in 2022.",
            right: "She visited her village in 2022.",
            note: "in 2022 एक बीत चुका साल है।",
          },
        ],
      },
      {
        heading: "yet, already, just, still — चार नन्हे संकेत",
        explanation:
          "Yet ना-वाले वाक्यों और सवालों में रहता है: I haven't finished yet। Already हाँ-वाले वाक्यों में, अक्सर उम्मीद से पहले हो जाने के भाव में: He has already left। Just इसी पल पूरा हुए काम की निशानी है: The shop has just closed। और still, आमतौर पर ना-वाले perfect के साथ, लंबी देरी की शिकायत करता है: She still hasn't replied।",
        examples: [
          {
            wrong: "I have finished my revision yet.",
            right: "I haven't finished my revision yet.",
            note: "yet के लिए ना-वाला वाक्य या सवाल चाहिए।",
          },
          {
            wrong: "He didn't arrive still.",
            right: "He still hasn't arrived.",
            note: "still + hasn't/haven't दिखाता है कि देरी अब भी जारी है।",
          },
          {
            wrong: "The rickshaw has come just.",
            right: "The rickshaw has just come.",
            note: "just have और participle के ठीक बीच में बैठता है।",
          },
        ],
      },
      {
        heading: "पहले ख़बर, बाद में ब्योरा",
        explanation:
          "ताज़ा ख़बर present perfect में सुनाएँ, फिर ब्योरे past simple में दें: Bangladesh has won the series! They beat Ireland by four wickets last night। Perfect विषय खोलता है, past simple बताता है कब, कहाँ, कैसे। न्यूज़-एंकर और कमेंटेटर ठीक इसी लय में बोलते हैं।",
        examples: [
          {
            wrong: "Our team has beaten them in the final last Friday.",
            right: "Our team beat them in the final last Friday.",
            note: "ख़बर के भीतर भी last Friday बंद समय है।",
          },
          {
            wrong: "Have you seen Rahim? — Yes, I have seen him at ten o'clock.",
            right: "Have you seen Rahim? — Yes, I saw him at ten o'clock.",
            note: "तय समय बता देने पर जवाब past simple में उतर आता है।",
          },
          {
            wrong: "The minister announced a new stipend — she has made the speech an hour ago.",
            right: "The minister has announced a new stipend. She made the speech an hour ago.",
            note: "ख़बर perfect में; तारीख़-समय वाला ब्योरा past simple में।",
          },
        ],
      },
    ],
    tips: [
      "एक सवाल पूछें: समय की खिड़की खुली है या बंद? खुली → perfect; बंद → past simple।",
      "yet = ना-वाक्य/सवाल; already = हाँ-वाक्य में हैरानी; just = अभी-अभी; still = अब भी इंतज़ार।",
      "ख़बर में हेडलाइन perfect से खोलें, समय की मुहर past simple से लगाएँ।",
      "Ever और never लगभग हमेशा present perfect खींच लाते हैं: Have you ever eaten Thai food?",
    ],
    quiz: [
      {
        question: "I ___ my glasses — I can't find them anywhere.",
        options: ["lost", "have lost", "was losing", "had lost"],
        answer: 1,
        explanation: "नतीजा अभी दिख रहा है (कहीं नहीं मिल रहा), इसलिए present perfect बैठता है।",
      },
      {
        question: "She ___ her cousins in Chattogram last Eid.",
        options: ["has visited", "visits", "visited", "has been visiting"],
        answer: 2,
        explanation: "last Eid बीता हुआ समय है, इसलिए past simple visited।",
      },
      {
        question: "We ___ for the bus for forty minutes and it still isn't here.",
        options: ["wait", "waited", "have been waiting", "are waiting"],
        answer: 2,
        explanation: "इंतज़ार अतीत में शुरू हुआ और अब भी चल रहा है — have been waiting।",
      },
      {
        question: "He is the most honest shopkeeper I ___ ever ___.",
        options: ["did / met", "have / met", "had / met", "am / meeting"],
        answer: 1,
        explanation: "ever + ज़िंदगी भर का तजुर्बा present perfect माँगता है: have met।",
      },
      {
        question: "I ___ him at the market yesterday, but I ___ him since.",
        options: ["met / have not seen", "have met / did not see", "met / did not see", "have met / have not seen"],
        answer: 0,
        explanation: "yesterday बंद समय है (met), और since खिड़की खुली रखता है (have not seen)।",
      },
    ],
  },
  {
    topic: "Conditionals",
    level: "intermediate",
    locale: "hi",
    title: "Conditional: If, Unless और Wish",
    intro:
      "Type 1 भविष्य की योजना बनाता है; type 2 असंभव वर्तमान के सपने देखता है। और बीच में unless चुपचाप सब उलट देता है। ये जीत लें तो आपकी अंग्रेज़ी एक साथ सतर्क भी होगी, रचनात्मक भी।",
    sections: [
      {
        heading: "Type 1 बनाम Type 2: असली संभावना बनाम कल्पना",
        explanation:
          "Type 1 (if + present, will + verb) असली संभावनाओं की बात करता है: If it rains tomorrow, the match will be cancelled। Type 2 (if + past, would + verb) असंभव या काल्पनिक वर्तमान की: If I were the captain, I would change the batting order। सुनहरा नियम — will या would if-वाले हिस्से में कभी नहीं घुसता। हिंदी में 'अगर कल बारिश होगी तो...' बिल्कुल स्वाभाविक है, पर इंग्लिश में if-हिस्से में will रखना ग़लती है।",
        examples: [
          {
            wrong: "If it will rain tomorrow, we will cancel the picnic.",
            right: "If it rains tomorrow, we will cancel the picnic.",
            note: "if-हिस्सा simple present में ही रहता है।",
          },
          {
            wrong: "If I was a bird, I will fly to Saint Martin's.",
            right: "If I were a bird, I would fly to Saint Martin's.",
            note: "असंभव सपने के लिए past रूप + would।",
          },
          {
            wrong: "If she studies harder, she would top the class.",
            right: "If she studied harder, she would top the class.",
            note: "नतीजे में would हो तो if-हिस्सा past रूप में जाता है।",
          },
        ],
      },
      {
        heading: "unless, as long as, provided that",
        explanation:
          "Unless का मतलब है if...not: Unless you hurry, you will miss the rickshaw। दूसरा not जोड़ेंगे तो अर्थ पलट जाएगा — एक ही नकारात्मकता काफ़ी है। As long as और provided that शर्त के भीतर एक वादा भी सिल देते हैं: You can borrow my notes as long as you return them on Sunday। सादे if से ये ज़्यादा आत्मविश्वासी सुनाई देते हैं।",
        examples: [
          {
            wrong: "Unless you don't book early, you won't get a seat.",
            right: "Unless you book early, you won't get a seat.",
            note: "unless के भीतर ही not छिपा है — फ़ालतू don't हटाएँ।",
          },
          {
            wrong: "You can join the trip as long you share the fuel cost.",
            right: "You can join the trip as long as you share the fuel cost.",
            note: "चंक as long as है — तीन शब्द, हमेशा साथ।",
          },
          {
            wrong: "We will reach Sylhet by noon, provided the traffic will stay light.",
            right: "We will reach Sylhet by noon, provided that the traffic stays light.",
            note: "शर्त वाले हिस्से में simple present बैठता है, will नहीं।",
          },
        ],
      },
      {
        heading: "wish + past: वर्तमान पर पछतावा",
        explanation:
          "बदला हुआ वर्तमान चाहिए तो क्रिया को एक क़दम पीछे ले जाएँ: I wish I had a motorcycle (असल में नहीं है)। सँभली हुई अंग्रेज़ी हर कर्ता के साथ were पसंद करती है: I wish I were taller। और याद रखें — wish + would दूसरों या मौसम की शिकायत के लिए है, अपने ही काम के लिए नहीं।",
        examples: [
          {
            wrong: "I wish I have more free time.",
            right: "I wish I had more free time.",
            note: "काल्पनिक वर्तमान के लिए past रूप had चाहिए।",
          },
          {
            wrong: "I wish my exam comes next month.",
            right: "I wish my exam came next month.",
            note: "बदला हुआ वर्तमान चाहें तो क्रिया पीछे खिसके: came।",
          },
          {
            wrong: "I wish I am taller so I could play in the front row.",
            right: "I wish I were taller so I could play in the front row.",
            note: "wish में हर कर्ता के साथ were को तरजीह मिलती है।",
          },
        ],
      },
    ],
    tips: [
      "if-हिस्से में सिर्फ़ present या past; will और would वाक्य के दूसरे हिस्से में रहते हैं।",
      "unless सुनते ही कोई दूसरा not ढूँढ़कर मिटा दें — unless you don't दोहरा नकारात्मक बन जाता है।",
      "Type 2 की जाँच: बात असली है या सपना? सपना है तो would जोड़ें और क्रिया को past में ले जाएँ।",
      "वर्तमान पर wish के लिए एक क़दम पीछे: have → had, am → were, comes → came।",
    ],
    quiz: [
      {
        question: "If the rickshaw puller ___ fast, we will catch the six o'clock train.",
        options: ["will go", "goes", "would go", "went"],
        answer: 1,
        explanation: "Type 1 में if-हिस्सा simple present में रहता है: goes।",
      },
      {
        question: "If I ___ the manager, I would give everyone a festival bonus.",
        options: ["am", "was", "were", "will be"],
        answer: 2,
        explanation: "काल्पनिक वर्तमान के लिए past रूप चाहिए — और were ही क्लासिक पसंद है।",
      },
      {
        question: "___ you leave now, you will miss the last launch to Barishal.",
        options: ["Unless", "If", "As long as", "Provided that"],
        answer: 0,
        explanation: "नकारात्मक अर्थ सिर्फ़ unless देता है: if you do not leave...",
      },
      {
        question: "You may borrow my cycle ___ you bring it back by evening.",
        options: ["unless", "as long as", "in case", "otherwise"],
        answer: 1,
        explanation: "इजाज़त के साथ बँधी शर्त = as long as (या provided that)।",
      },
      {
        question: "I wish our exams ___ next week instead of tomorrow.",
        options: ["will start", "start", "started", "would starting"],
        answer: 2,
        explanation: "वर्तमान पर wish का मतलब क्रिया एक क़दम पीछे: started।",
      },
    ],
  },
  {
    topic: "Passive Voice",
    level: "intermediate",
    locale: "hi",
    title: "Passive Voice: हर टेंस में नया रूप",
    intro:
      "Passive सिर्फ़ 'be + participle' नहीं है — B1 पर यह हर टेंस में पोशाक बदलता है। साथ में एक फ़ैसला भी करना होता है: वाक्य की रोशनी काम पर पड़ेगी या कर्ता पर।",
    sections: [
      {
        heading: "एक passive, अनेक टेंस",
        explanation:
          "ढाँचा है be + past participle, और बदलता सिर्फ़ be है: The bridge is repaired every year (वर्तमान), is being repaired right now (present continuous), was repaired last month, has been repaired, had been repaired before the rains, will be repaired soon। नोटिस, ख़बरें और परीक्षा के प्रश्न इन सारे रूपों को घुमाते हैं। हिंदी के 'किया जाता है / किया जा रहा है' ढाँचे से मिलान करें — पहचान आसान हो जाएगी।",
        examples: [
          {
            wrong: "The new flyover is building right now.",
            right: "The new flyover is being built right now.",
            note: "इसी पल चल रहा काम = is being + built।",
          },
          {
            wrong: "Your parcel has been send to the wrong branch.",
            right: "Your parcel has been sent to the wrong branch.",
            note: "has been के बाद participle आता है — sent।",
          },
          {
            wrong: "The results will announce next Sunday.",
            right: "The results will be announced next Sunday.",
            note: "will के बाद participle से पहले be चाहिए: will be announced।",
          },
        ],
      },
      {
        heading: "by-वाक्यांश: ज़रूरत हो तभी रखें",
        explanation:
          "by + कर्ता तभी जोड़ें जब कर्ता ही नई, दिलचस्प जानकारी हो: The National Anthem was written by Rabindranath Tagore। कर्ता अनजान, साफ़-साफ़ समझ आने वाला या मायने रखने वाला न हो तो छोड़ दें: My phone was stolen, The road is cleaned every morning। कुछ भी न जोड़ने वाला by somebody सिर्फ़ बोझ है।",
        examples: [
          {
            wrong: "My wallet was stolen by somebody on the crowded bus.",
            right: "My wallet was stolen on the crowded bus.",
            note: "by somebody कोई जानकारी नहीं जोड़ता — काट दें।",
          },
          {
            wrong: "English is spoken by people all over the world.",
            right: "English is spoken all over the world.",
            note: "कर्ता सामान्य है, इसलिए by-वाक्यांश घुल जाता है।",
          },
          {
            wrong: "The thief arrested by the police yesterday.",
            right: "The thief was arrested by the police yesterday.",
            note: "passive में भी be लाज़मी है: was arrested।",
          },
        ],
      },
      {
        heading: "जान-बूझकर passive चुनना",
        explanation:
          "जब कर्ता से ज़्यादा ज़रूरी काम का पाने वाला हो — प्रक्रिया, नियम, सुर्ख़ियाँ — तब passive ही भरोसेमंद है: First the tea leaves are picked, then they are dried in the sun। ख़बरें भी इससे प्यार करती हैं: Three students were rescued from the river। Passive आपकी कहानी के मुख्य विषय को हर वाक्य में कर्ता की कुर्सी पर बिठाए रखता है।",
        examples: [
          {
            wrong: "First somebody picks the leaves, then somebody dries them, and finally somebody packs them.",
            right: "First the leaves are picked, then they are dried, and finally they are packed.",
            note: "प्रक्रिया सुनाते वक़्त उत्पाद को कर्ता रखना बेहतर बहाव देता है।",
          },
          {
            wrong: "Mobile phones must not use during the exam.",
            right: "Mobile phones must not be used during the exam.",
            note: "must के बाद passive में be + used चाहिए।",
          },
          {
            wrong: "The new library will opening next month.",
            right: "The new library will be opened next month.",
            note: "भविष्य का passive = will be + participle।",
          },
        ],
      },
    ],
    tips: [
      "हर passive दो क़दमों में बनाएँ: सही टेंस में be रखें, फिर past participle जोड़ें।",
      "कर्ता का नाम तभी लें जब सुनने वाला पूछे — आख़िर किसने किया? वरना by-वाक्यांश को घर भेज दें।",
      "Past participle यहाँ ईंधन है: send-sent, build-built, write-written, steal-stolen — अनियमित सूची दोहराएँ।",
      "चाय, नमक, काग़ज़, जूट — कोई भी प्रक्रिया सुनाते हुए passive आपको एक पल में प्रोफेशनल बना देगा।",
    ],
    quiz: [
      {
        question: "The classroom ___ whitewashed every winter.",
        options: ["is", "is being", "was", "has been"],
        answer: 0,
        explanation: "every winter नियमित आदत बताता है — simple present passive is।",
      },
      {
        question: "Look! The old theatre ___ into a museum.",
        options: ["is converting", "is being converted", "has converted", "converts"],
        answer: 1,
        explanation: "अभी घट रहा है और theatre काम का पाने वाला है — is being converted।",
      },
      {
        question: "The notice ___ before we reached the office.",
        options: ["has been taken down", "had been taken down", "was taking down", "is taken down"],
        answer: 1,
        explanation: "before we reached दो भूतकालीन घटनाओं में पहली की निशानी है — had been taken down।",
      },
      {
        question: "This song ___ by Kazi Nazrul Islam.",
        options: ["wrote", "was written", "is writing", "has written"],
        answer: 1,
        explanation: "यहाँ कर्ता ही दिलचस्प जानकारी है, इसलिए passive by-वाक्यांश रखता है: was written।",
      },
      {
        question: "Applications ___ accepted after Friday.",
        options: ["will not", "will be not", "will not been", "will not be"],
        answer: 3,
        explanation: "भविष्य का नकारात्मक passive = will not be + participle।",
      },
    ],
  },
  {
    topic: "Modals (can/should/must)",
    level: "intermediate",
    locale: "hi",
    title: "B1 पर Modal: अनुमान, ज़िम्मेदारी और विनम्र इजाज़त",
    intro:
      "can, should, must तो दहलीज़ ही हैं; असली ताक़त must be, can't be, have to और may में छिपी है। यह पाठ सिखाएगा चतुराई से अंदाज़ा लगाना, शालीनता से मानना और विनम्रता से इजाज़त माँगना।",
    sections: [
      {
        heading: "अनुमान: must be, might be, can't be",
        explanation:
          "सबूत देखकर पक्का निष्कर्ष निकालने के लिए must be: The lights are on — they must be home। खुला अंदाज़ा might या could be: She might be at the library। और असंभव निष्कर्ष के लिए can't be: That can't be Rahim — he flew to Dubai yesterday। याद रखें — अनुमान वाले must be का उलटा can't be होता है, mustn't नहीं। हिंदी के 'ज़रूर/शायद/मुमकिन नहीं' इन्हीं तीन सीढ़ियों पर बैठते हैं।",
        examples: [
          {
            wrong: "The shop is closed, so he mustn't be at the market.",
            right: "The shop is closed, so he can't be at the market.",
            note: "असंभव निष्कर्ष = can't be; mustn't का मतलब है मना है।",
          },
          {
            wrong: "She must to be tired after the night shift.",
            right: "She must be tired after the night shift.",
            note: "modal के बाद कभी to नहीं आता।",
          },
          {
            wrong: "He might to know the answer.",
            right: "He might know the answer.",
            note: "might के बाद क्रिया का मूल रूप सीधा बैठता है।",
          },
        ],
      },
      {
        heading: "ज़िम्मेदारी बनाम सलाह: must, have to, should",
        explanation:
          "Must अक्सर बोलने वाले के अपने भाव या अधिकार से निकलता है: I must call my mother tonight। Have to बाहरी नियमों से आता है: Students have to wear the uniform। Should सलाह है, क़ानून नहीं: You should drink more water। रोज़मर्रा की बात में have to ही मुख्य हथियार है; must कभी-कभी नाटकीय या ज़रूरी-अलार्म जैसा सुनाई देता है।",
        examples: [
          {
            wrong: "At our college you should wear the ID card — it is a strict rule.",
            right: "At our college you have to wear the ID card — it is a strict rule.",
            note: "बाहरी सख़्त नियम = have to, नरम should नहीं।",
          },
          {
            wrong: "You must seeing a doctor about that cough.",
            right: "You should see a doctor about that cough.",
            note: "दोस्ताना सलाह = should; और modal के बाद मूल रूप।",
          },
          {
            wrong: "I don't must work on Friday.",
            right: "I don't have to work on Friday.",
            note: "नकारात्मक ज़िम्मेदारी = don't have to; must के साथ don't नहीं चलता।",
          },
        ],
      },
      {
        heading: "विनम्र इजाज़त और semi-modal",
        explanation:
          "Can I open the window? सही है पर ख़ुरदुरा। May I...? और Could I...? विनम्रता का स्तर बढ़ा देते हैं: May I come in, sir? Semi-modal परिवार सीमाएँ फैलाता है: be able to (किसी भी टेंस में योग्यता), have to (ज़िम्मेदारी), used to (अतीत की आदत) — I used to play in this field as a boy।",
        examples: [
          {
            wrong: "Sir, can I leaving five minutes early today?",
            right: "Sir, may I leave five minutes early today?",
            note: "क्लास और दफ़्तर में विनम्र मानक May I है।",
          },
          {
            wrong: "I am used to get up at dawn.",
            right: "I am used to getting up at dawn.",
            note: "be used to + -ing का मतलब है आदी होना।",
          },
          {
            wrong: "After the surgery she will can walk again.",
            right: "After the surgery she will be able to walk again.",
            note: "will can असंभव है; लिखिए will be able to।",
          },
        ],
      },
    ],
    tips: [
      "अनुमान की सीढ़ी: must be (पक्का) → might/could be (शायद) → can't be (असंभव)।",
      "mustn't = करना मना है; don't have to = करने की ज़रूरत नहीं। दो बिल्कुल अलग दरवाज़े।",
      "हर modal क्रिया का खालिस मूल रूप लेता है: can go, must go, should go — न to, न -s, न -ing।",
      "दुकान-दफ़्तर में can को could में बढ़ा दें: Could I see the price list, please?",
    ],
    quiz: [
      {
        question: "Anis isn't answering his phone. He ___ in the exam hall.",
        options: ["mustn't be", "must be", "can't to be", "should be"],
        answer: 1,
        explanation: "सबूत से पक्का अंदाज़ा = must be; mustn't का मतलब होता मनाही है।",
      },
      {
        question: "That ___ be the postman at this hour — the postman always comes after lunch.",
        options: ["should", "would", "can't", "must"],
        answer: 2,
        explanation: "जो चीज़ बेवजह असंभव लगे उसके लिए can't be आता है।",
      },
      {
        question: "Passengers ___ show their tickets before boarding the launch.",
        options: ["must to", "have to", "would rather", "am used to"],
        answer: 1,
        explanation: "बाहरी नियम बताने के लिए have to — और सूची में व्याकरण के हिसाब से सही भी यही है।",
      },
      {
        question: "You ___ eat so much junk food — it is bad for your stomach.",
        options: ["shouldn't", "don't have to", "mustn't to", "haven't to"],
        answer: 0,
        explanation: "किसी चीज़ के ख़िलाफ़ सलाह = shouldn't; don't have to सिर्फ़ ज़िम्मेदारी हटाता है।",
      },
      {
        question: "Ma'am, ___ I use your charger for a minute?",
        options: ["May", "Must", "Should", "Would"],
        answer: 0,
        explanation: "विनम्र इजाज़त माँगने का सबसे सुरक्षित रूप May I है।",
      },
    ],
  },
  {
    topic: "Phrasal Verbs",
    level: "intermediate",
    locale: "hi",
    title: "Phrasal Verb: pronoun की कुर्सी और रोज़ का सेट",
    intro:
      "बोलचाल की अंग्रेज़ी की धड़कन phrasal verb है — और ग़लतियों का ठिकाना अक्सर pronoun होता है। Pick it up बनता है, pick up it नहीं। चलिए separable और inseparable का हिसाब एक बार में तय करें।",
    sections: [
      {
        heading: "Separable verb: pronoun बैठता है बीच में",
        explanation:
          "Separable phrasal verb — turn on, pick up, put off, give up, turn down — के साथ it, them, him जैसी छोटी कर्म की वस्तु क्रिया और particle के बीच ही बैठती है: turn it on। लंबा noun वाक्यांश दोनों तरफ़ जा सकता है: turn the fan on या turn on the fan। पर turn on it हमेशा ग़लत है। हिंदी में अर्थ अलग क्रिया में होता है (उठाना, बंद करना), इसलिए यह टूटने-जुड़ने का हिसाब अभ्यास माँगता है।",
        examples: [
          {
            wrong: "It is too loud — please turn down it.",
            right: "It is too loud — please turn it down.",
            note: "pronoun वाली कर्म-वस्तु separable verb को दो टुकड़ों में तोड़ देती है।",
          },
          {
            wrong: "She picked up it from the floor and gave it back.",
            right: "She picked it up from the floor and gave it back.",
            note: "pick it up बनता है, pick up it कभी नहीं।",
          },
          {
            wrong: "We put off it until after the exams.",
            right: "We put it off until after the exams.",
            note: "pronoun की कुर्सी बीच में है: put it off।",
          },
        ],
      },
      {
        heading: "Inseparable और तीन-शब्दों के verb: तोड़ना मना",
        explanation:
          "Inseparable verb में क्रिया और particle एक धागे में बँधे रहते हैं: look after, run into, come across। तीन-शब्दों के verb के अंत में ऐसा preposition होता है जो कभी अलग नहीं होता: run out of, come up with, look forward to, catch up with। और एक चौंकाने वाली बात — look forward to + -ing, क्योंकि यहाँ to एक preposition है, infinitive वाला to नहीं।",
        examples: [
          {
            wrong: "We ran out the cooking gas in the middle of dinner.",
            right: "We ran out of the cooking gas in the middle of dinner.",
            note: "run out of अपना of कभी नहीं छोड़ता।",
          },
          {
            wrong: "How did you come up this brilliant plan?",
            right: "How did you come up with this brilliant plan?",
            note: "come up with अखंड रहता है; with क्रिया का ही हिस्सा है।",
          },
          {
            wrong: "I look forward to hear from you soon.",
            right: "I look forward to hearing from you soon.",
            note: "यहाँ to एक preposition है, इसलिए -ing रूप बैठता है।",
          },
        ],
      },
      {
        heading: "वह सेट जो सच में हर दिन काम आएगा",
        explanation:
          "Get up (बिस्तर से उठना), look after (देखभाल करना), look for (ढूँढना), give up (हार मानना), find out (पता लगाना), turn up (अचानक आ जाना), put off (टालना), turn down (इनकार करना)। सूची रट लेने के सौ से बातचीत में सहज इस्तेमाल होने वाले दस बेहतर हैं।",
        examples: [
          {
            wrong: "I was looking after my keys all morning.",
            right: "I was looking for my keys all morning.",
            note: "look for = ढूँढना; look after = देखभाल करना।",
          },
          {
            wrong: "My uncle gave up to smoke last Ramadan.",
            right: "My uncle gave up smoking last Ramadan.",
            note: "give up के बाद gerund बैठता है: smoking।",
          },
          {
            wrong: "Please put off the fan before you sleep.",
            right: "Please turn off the fan before you sleep.",
            note: "put off का मतलब है टालना; पंखा-बत्ती बुझाने के लिए turn off।",
          },
        ],
      },
    ],
    tips: [
      "Pronoun-नियम: it, them, him separable verb के भीतर बैठते हैं — pick it up, put them on, turn it down।",
      "तीन-शब्दों के verb को अखंड चंक समझें: run out OF, come up WITH, look forward TO + -ing।",
      "हर दिन अपनी ज़िंदगी पर एक वाक्य बनाएँ: I need to look after my health, I ran out of data।",
      "एक क्रिया, अलग particle, अलग दुनिया: look after / look for / look up / look into।",
    ],
    quiz: [
      {
        question: "Your music is very loud — could you ___?",
        options: ["turn down it", "turn it down", "turn down them", "it turn down"],
        answer: 1,
        explanation: "pronoun वाली कर्म-वस्तु होने पर separable verb टूट जाता है: turn it down।",
      },
      {
        question: "We have ___ sugar — could you buy some on your way home?",
        options: ["run out of", "run out", "ran out of", "running out"],
        answer: 0,
        explanation: "run out of अपना of रखता है, और present perfect में participle run चाहिए।",
      },
      {
        question: "I really look forward to ___ you at the reunion.",
        options: ["meet", "met", "meeting", "have met"],
        answer: 2,
        explanation: "look forward to में to एक preposition है, इसलिए -ing रूप आता है।",
      },
      {
        question: "Can you ___ my plants while I visit my village?",
        options: ["look for", "look after", "look up", "look into"],
        answer: 1,
        explanation: "देखभाल करना = look after; look for का मतलब है ढूँढना।",
      },
      {
        question: "The principal ___ our proposal at yesterday's meeting.",
        options: ["turned down it", "turn it down", "turned it down", "turning it down"],
        answer: 2,
        explanation: "turn down (इनकार) pronoun से पहले टूटता है, और yesterday के लिए past रूप turned चाहिए।",
      },
    ],
  },
];

export default LESSONS;
