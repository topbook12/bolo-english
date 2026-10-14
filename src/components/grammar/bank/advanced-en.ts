import type { BankLesson } from "./types";

// Static grammar bank — advanced topics, ADVANCED level (CEFR ~C1),
// English explanations (for users whose UI language is English).
const LESSONS: BankLesson[] = [
  {
    topic: "Inversion & Emphasis Structures",
    level: "advanced",
    locale: "en",
    title: "Inversion: When the Verb Comes First for Emphasis",
    intro:
      "English lets you flip the normal subject–verb order to make a point land with force. Mastering inversion signals polished, persuasive English in essays, speeches and formal correspondence.",
    sections: [
      {
        heading: "Inversion after negative and restrictive adverbials",
        explanation:
          "When a negative or restrictive adverbial (never, rarely, seldom, not only, under no circumstances, hardly, no sooner) is moved to the front of a sentence for emphasis, the subject and auxiliary invert, exactly as in a question. If the tense has no auxiliary, add do, does or did. The main verb itself never moves to the front.",
        examples: [
          {
            wrong: "I have never heard such a careless argument at a board meeting.",
            right: "Never have I heard such a careless argument at a board meeting.",
            note: "A front-placed 'never' forces the auxiliary 'have' before the subject 'I'.",
          },
          {
            wrong: "She had hardly sat down when the client started shouting.",
            right: "Hardly had she sat down when the client started shouting.",
            note: "'Hardly ... when' keeps the past perfect and fronts 'had' before the subject.",
          },
          {
            wrong: "Under no circumstances you should share the draft with the press.",
            right: "Under no circumstances should you share the draft with the press.",
            note: "Even with a modal verb, fronting the negative phrase requires subject–auxiliary inversion.",
          },
        ],
      },
      {
        heading: "'Only', 'so/such' and 'little did they know'",
        explanation:
          "Inversion also follows a front-placed 'only + time expression' (only then, only after the audit) and front-placed 'so + adjective' or 'such + noun phrase' in result clauses. These structures are staples of storytelling, rhetoric and editorial writing. 'Little did they know' works the same way and adds dramatic irony.",
        examples: [
          {
            wrong: "I realised the contract had expired only then.",
            right: "Only then did I realise the contract had expired.",
            note: "'Only then' triggers 'did', because 'realise' has no auxiliary of its own.",
          },
          {
            wrong: "The entrance fee was so steep that half the applicants withdrew.",
            right: "So steep was the entrance fee that half the applicants withdrew.",
            note: "Fronting 'so + adjective' inverts 'was' and the subject for dramatic effect.",
          },
          {
            wrong: "The demand for the concert tickets was such that the ticketing site crashed.",
            right: "Such was the demand for tickets that the ticketing site crashed.",
            note: "'Such + be + noun phrase' is the emphatic equivalent of 'the demand was so great that ...'.",
          },
        ],
      },
    ],
    tips: [
      "Invert only when a negative, restrictive or 'only' phrase genuinely opens the sentence; otherwise inversion sounds theatrical.",
      "In essays, save 'Not only ... but also' inversions for your strongest paired points — one per paragraph is plenty.",
      "Check the auxiliary: simple tenses need do/does/did ('Never did I imagine'), while perfect and modal tenses use have/will/can.",
      "For speaking, rehearse formulaic openers like 'Rarely have I seen ...' and 'Not until now have I understood ...' until they come out fluently.",
    ],
    quiz: [
      {
        question:
          "Complete with inversion: 'Not only ____ the deadline, but she also rewrote the entire report.'",
        options: ["she met", "did she meet", "she did meet", "met she"],
        answer: 1,
        explanation:
          "After front-placed 'Not only', the subject and auxiliary invert, giving 'did she meet'.",
      },
      {
        question:
          "Choose the phrase that completes the inversion correctly: '____ had the ceremony begun than the storm knocked out the lights.'",
        options: ["Hardly", "Rarely", "No sooner", "Seldom"],
        answer: 2,
        explanation:
          "'No sooner' pairs with 'than'; 'hardly' and 'seldom' would require 'when' instead.",
      },
      {
        question:
          "Which sentence correctly inverts 'I realised the truth only then' for emphasis?",
        options: [
          "Only then did I realise the truth.",
          "Only then I realised the truth.",
          "Only then realised I the truth.",
          "Only then I did realise the truth.",
        ],
        answer: 0,
        explanation:
          "'Only then' opens the sentence, so the auxiliary 'did' must come before the subject 'I'.",
      },
      {
        question:
          "Complete: '____ was the confusion at the polling centre that the vote had to be postponed.'",
        options: ["So", "That", "How", "Such"],
        answer: 3,
        explanation:
          "'Such + be + noun phrase' inverts to 'Such was the confusion that ...'; 'so' would need an adjective.",
      },
      {
        question: "Which formal warning is written with correct inversion?",
        options: [
          "Under no circumstances you should sign the contract.",
          "Under no circumstances should you sign the contract.",
          "Under no circumstances you mustn't sign the contract.",
          "Under no circumstances you should not sign the contract.",
        ],
        answer: 1,
        explanation:
          "The fronted negative phrase demands inversion: 'should you sign', with the modal before the subject.",
      },
    ],
  },
  {
    topic: "Mixed & Inverted Conditionals",
    level: "advanced",
    locale: "en",
    title: "Mixed and Inverted Conditionals: Hypotheticals Across Time",
    intro:
      "Real conversations rarely stay in one time frame, and formal English often drops 'if' altogether. This lesson teaches you to blend tenses accurately and to use elegant inverted forms like 'Had I known'.",
    sections: [
      {
        heading: "Mixed conditionals: past cause, present result — and back",
        explanation:
          "Use a past-perfect if-clause with a present 'would' clause when an unreal past still shapes now ('If I had accepted the offer, I would be in Berlin today'). Reverse the tenses when a standing condition explains a past outcome ('If she weren't so organised, she would have missed the flight'). The cardinal rule: never put 'would' inside the if-clause.",
        examples: [
          {
            wrong: "If I would have studied medicine, I would be a surgeon today.",
            right: "If I had studied medicine, I would be a surgeon today.",
            note: "The if-clause takes the past perfect; 'would have' belongs only in the result clause.",
          },
          {
            wrong: "If I took that job last year, I would be living in Dhaka now.",
            right: "If I had taken that job last year, I would be living in Dhaka now.",
            note: "'Last year' demands a past-perfect condition even though the result is present.",
          },
          {
            wrong: "If she is more patient, she wouldn't have lost the client.",
            right: "If she were more patient, she wouldn't have lost the client.",
            note: "A general present trait explains a past result, so the if-clause uses 'were', not 'is'.",
          },
        ],
      },
      {
        heading: "Dropping 'if': were, had and should in front position",
        explanation:
          "In formal English, replace 'if I were', 'if I had known' and 'if you should need' with 'Were I', 'Had I known' and 'Should you need'. Negatives keep 'not' after the subject: 'Had it not been for her warning'. Inversion is impossible when the if-clause states a real, open condition ('If it rains', never 'Does it rain').",
        examples: [
          {
            wrong: "If I had known you were in town, I would have called earlier.",
            right: "Had I known you were in town, I would have called earlier.",
            note: "Deleting 'if' and fronting 'had' is the elegant formal equivalent of the third conditional.",
          },
          {
            wrong: "If you should require assistance, please dial the front desk.",
            right: "Should you require assistance, please dial the front desk.",
            note: "'Should you ...' softens the condition and is standard in polite notices and emails.",
          },
          {
            wrong: "If it wasn't for the volunteers, the festival would have collapsed.",
            right: "Had it not been for the volunteers, the festival would have collapsed.",
            note: "The fixed negative inversion is 'had it not been for', never 'hadn't it been for'.",
          },
        ],
      },
    ],
    tips: [
      "Ask 'when is the result?' before choosing tenses — the result clause, not the if-clause, decides whether the sentence is mixed.",
      "Use inverted conditionals in emails and essays; keep plain 'if' in spoken storytelling so you do not sound stiff.",
      "Memorise 'Had it not been for ...' as one chunk; it instantly upgrades cause-and-effect writing.",
      "Ban 'if ... would have' from your writing; it is the single most common advanced conditional error.",
    ],
    quiz: [
      {
        question:
          "'Had I known about the strike, ____ a different route.' — choose the correct completion.",
        options: [
          "I would take",
          "I would have taken",
          "would I have taken",
          "I had taken",
        ],
        answer: 1,
        explanation:
          "Only the if-clause inverts; the result clause keeps normal order: 'I would have taken'.",
      },
      {
        question:
          "Which sentence is a correct mixed conditional (past cause, present result)?",
        options: [
          "If I had accepted the 2019 offer, I would be working in Berlin now.",
          "If I accepted the 2019 offer, I would be working in Berlin now.",
          "If I would have accepted the 2019 offer, I would be in Berlin now.",
          "If I had accepted the 2019 offer, I would have worked in Berlin now.",
        ],
        answer: 0,
        explanation:
          "Past perfect in the if-clause plus 'would be ... now' correctly links a past condition to a present result.",
      },
      {
        question:
          "Complete the formal notice: '____ you require a visa, please apply at least one month in advance.'",
        options: ["Would", "Had", "Should", "Were"],
        answer: 2,
        explanation:
          "'Should you require ...' is the inverted form of 'if you should require' used in polite conditions.",
      },
      {
        question: "'If she weren't so stubborn, ____ the disagreement weeks ago.'",
        options: [
          "they would resolve",
          "they would have resolved",
          "they resolved",
          "they will have resolved",
        ],
        answer: 1,
        explanation:
          "A present trait ('weren't') explaining a past outcome takes 'would have + participle' in the result clause.",
      },
      {
        question:
          "Complete the inversion: '____ for the volunteers, the festival would have been cancelled.'",
        options: [
          "Had it not been",
          "It had not been",
          "If it would not be",
          "Not had it been",
        ],
        answer: 0,
        explanation:
          "The fixed negative inversion is 'Had it not been for ...', the formal equivalent of 'If it hadn't been for ...'.",
      },
    ],
  },
  {
    topic: "Cleft Sentences",
    level: "advanced",
    locale: "en",
    title: "Cleft Sentences: Splitting the Sentence to Spotlight Meaning",
    intro:
      "Clefts let you emphasise exactly one piece of information without raising your voice. Writers and diplomats use them constantly to control what an audience notices first.",
    sections: [
      {
        heading: "It-clefts: it + be + focus + that/who",
        explanation:
          "An it-cleft copies the key information into an empty 'it was/is' frame: 'It was the pricing, not the design, that lost us the deal'. Use 'who' or 'that' for people and 'that' (or nothing) for things; avoid 'what' in this frame. The tense of 'be' follows the original sentence, and the cleft can highlight subjects, objects, times or adverbials.",
        examples: [
          {
            wrong: "The deadline stressed the team, not the workload.",
            right: "It was the deadline that stressed the team, not the workload.",
            note: "The it-cleft pins the cause down before the reader can misread the contrast.",
          },
          {
            wrong: "My mentor taught me to revise ruthlessly.",
            right: "It was my mentor who taught me to revise ruthlessly.",
            note: "Use 'who' — not 'that' or 'what' — when the spotlight falls on a person.",
          },
          {
            wrong: "I understood the true cost of the project in March, not in January.",
            right: "It was in March, not in January, that I understood the true cost of the project.",
            note: "Time adverbials sit comfortably inside an it-cleft for correction-style emphasis.",
          },
        ],
      },
      {
        heading: "Wh-clefts and reverse clefts: what, all, the reason, the thing",
        explanation:
          "A wh-cleft fronts a fused relative with 'what', 'all', 'the reason' or 'the thing' and saves the news for the end: 'What annoys me is the constant rescheduling'. The reverse cleft flips the order for suspense: 'The constant rescheduling is what annoys me'. These forms feel natural in speech yet are equally respected in academic prose.",
        examples: [
          {
            wrong: "I need a clear rubric, not more meetings.",
            right: "What I need is a clear rubric, not more meetings.",
            note: "'What ... is ...' is the workhorse cleft for wants, needs and complaints.",
          },
          {
            wrong: "We postponed the launch because demand collapsed in July.",
            right: "The reason we postponed the launch is that demand collapsed in July.",
            note: "'The reason ... is that ...' is the standard cleft for causes; 'is because' is avoided in formal style.",
          },
          {
            wrong: "Her calm under pressure distinguishes her from other candidates.",
            right: "What distinguishes her from other candidates is her calm under pressure.",
            note: "The wh-cleft lets the memorable quality arrive last, where emphasis is strongest.",
          },
        ],
      },
    ],
    tips: [
      "Reserve clefts for the one fact that really matters; overuse makes prose feel winded.",
      "In corrections, pair the cleft with a contrast: 'It was Tuesday, not Wednesday, that we agreed on.'",
      "In academic or exam writing, one 'What X reveals is ...' sentence per paragraph shows control without clutter.",
      "Read your cleft aloud — the focused phrase should sound naturally louder than the rest of the sentence.",
    ],
    quiz: [
      {
        question:
          "Which it-cleft correctly emphasises the cause in 'The budget impressed the board most'?",
        options: [
          "It was the budget what impressed the board most.",
          "It was the budget that impressed the board most.",
          "The budget it was that impressed most the board.",
          "It the budget that impressed the board most.",
        ],
        answer: 1,
        explanation:
          "The it-cleft frame is 'It was + focus + that-clause'; 'what' does not belong in an it-cleft.",
      },
      {
        question:
          "Complete the wh-cleft: '____ I admire most about her is her consistency under pressure.'",
        options: ["That", "Which", "What", "It"],
        answer: 2,
        explanation:
          "A wh-cleft opens with a fused relative; 'What I admire most about her' acts as the subject.",
      },
      {
        question:
          "Which sentence correctly clefts the cause of 'We postponed the launch because demand collapsed in July'?",
        options: [
          "The reason why we postponed the launch was because of demand collapsed.",
          "The reason why we postponed the launch was that demand had collapsed.",
          "The reason what we postponed the launch was demand collapsing.",
          "The reason we postponed the launch it was demand had collapsed.",
        ],
        answer: 1,
        explanation:
          "'The reason ... was that ...' is the formal cleft for causes; 'because of' needs a noun phrase.",
      },
      {
        question:
          "Complete the cleft: '____ bothered me was not the delay itself but the lack of communication.'",
        options: ["All what", "That", "Which", "What"],
        answer: 3,
        explanation:
          "'What bothered me' is a wh-cleft subject; 'all what' is never grammatical.",
      },
      {
        question: "Which reverse wh-cleft is correct?",
        options: [
          "Her attention to detail is what sets her apart.",
          "What sets her apart is what her attention to detail.",
          "Her attention to detail is that sets her apart.",
          "What her attention to detail is sets her apart.",
        ],
        answer: 0,
        explanation:
          "The reverse cleft puts the known information first and ends with 'what + verb', the newsworthy part.",
      },
    ],
  },
  {
    topic: "Subjunctive & Unreal Uses",
    level: "advanced",
    locale: "en",
    title: "The Subjunctive: Commands, Wishes and Fixed Phrases",
    intro:
      "The subjunctive is small but high-status: it appears in demands, recommendations, hypothetical wishes and frozen idioms. Getting it right separates confident formal English from near-misses.",
    sections: [
      {
        heading: "The mandative subjunctive: insist, demand, recommend",
        explanation:
          "After verbs of demanding, suggesting or recommending (insist, demand, request, recommend, propose, urge, require) plus 'that', the following clause uses the bare base form for every subject: 'The regulator insists that the report be published'. British English often adds 'should' ('that the report should be published'); American English prefers the bare form. Never use third-person '-s' or 'will' in these clauses.",
        examples: [
          {
            wrong: "The board recommended that the CFO signs the disclosure first.",
            right: "The board recommended that the CFO sign the disclosure first.",
            note: "The mandative subjunctive removes the third-person '-s' after 'recommended that'.",
          },
          {
            wrong: "It is essential that every candidate will bring a valid ID.",
            right: "It is essential that every candidate bring a valid ID.",
            note: "'Essential/crucial/vital that' takes the bare base form, not 'will'.",
          },
          {
            wrong: "The union demanded that the management apologises publicly.",
            right: "The union demanded that the management apologise publicly.",
            note: "Even a past reporting verb leaves the that-clause in the bare base form.",
          },
        ],
      },
      {
        heading: "Were-subjunctive, would rather and formulaic fossils",
        explanation:
          "Use 'were' for unreal present and future in formal style: 'If I were you', 'I wish she were here', 'He acts as if he were untouchable'. After 'would rather' with a different subject, English uses the past form for unreal present: 'I would rather you left earlier'. Formulaic subjunctives also survive in fixed phrases: 'Come what may', 'Be that as it may', 'God forbid', 'Suffice it to say', 'Far be it from me'.",
        examples: [
          {
            wrong: "I wish my manager was more direct in reviews.",
            right: "I wish my manager were more direct in reviews.",
            note: "Formal English keeps 'were' for unreal present wishes, though 'was' is common in casual speech.",
          },
          {
            wrong: "I would rather you don't mention the restructuring yet.",
            right: "I would rather you didn't mention the restructuring yet.",
            note: "'Would rather + another subject' pulls the clause into the past for unreal meaning.",
          },
          {
            wrong: "Come what comes, the team will deliver the audit by Friday.",
            right: "Come what may, the team will deliver the audit by Friday.",
            note: "The fossilised subjunctive 'come what may' is fixed; it never changes form.",
          },
        ],
      },
    ],
    tips: [
      "Spot the trigger words — insist, demand, request, essential, vital, imperative — and switch the next verb to the bare form.",
      "In British contexts, 'should + base form' after these verbs is an equally safe formal choice.",
      "Practise 'If I were ...' aloud until it is automatic; hesitation here is very audible in interviews.",
      "Collect formulaic subjunctives like 'be that as it may' from opinion columns — they add polish to argumentative writing.",
    ],
    quiz: [
      {
        question:
          "The committee insists that every member ____ the code of conduct before voting.",
        options: ["signs", "sign", "will sign", "would sign"],
        answer: 1,
        explanation:
          "After 'insist that', the mandative subjunctive uses the bare base form 'sign' for every subject.",
      },
      {
        question: "If I ____ in charge, the policy would look very different.",
        options: ["was", "am", "were", "would be"],
        answer: 2,
        explanation:
          "Formal unreal conditions use 'were' for all subjects — the classic were-subjunctive.",
      },
      {
        question: "'I would rather you ____ anyone about the merger until it is signed.'",
        options: ["don't tell", "won't tell", "not tell", "didn't tell"],
        answer: 3,
        explanation:
          "'Would rather + another subject' takes the past form for unreal present: 'you didn't tell'.",
      },
      {
        question: "Which sentence contains a correct formulaic subjunctive?",
        options: [
          "Come what may, the team will deliver the audit by Friday.",
          "Come what may comes, the team will deliver the audit.",
          "Comes what may, the team will deliver the audit by Friday.",
          "Come what may it be, the team will deliver the audit.",
        ],
        answer: 0,
        explanation:
          "'Come what may' is a fixed subjunctive phrase meaning 'whatever happens'; it never inflects.",
      },
      {
        question:
          "The board directed that the funds ____ reallocated until the audit ends.",
        options: ["are not", "will not be", "not be", "would not be"],
        answer: 2,
        explanation:
          "After 'direct that', the negative mandative subjunctive is 'not be', with no auxiliary.",
      },
    ],
  },
  {
    topic: "Participle Clauses",
    level: "advanced",
    locale: "en",
    title: "Participle Clauses: Compressing Two Sentences into One",
    intro:
      "Participle clauses fold time, reason and result into compact, elegant sentences. They are the engine of mature narrative and academic prose — and the source of famous dangling-participle blunders.",
    sections: [
      {
        heading: "-ing, -ed and having + participle",
        explanation:
          "A present participle (-ing) signals an action happening at the same time as, or explaining, the main verb: 'Smiling nervously, she began the viva'. A past participle (-ed) carries passive meaning: 'Written in haste, the memo confused everyone'. The perfect form 'having + past participle' shows the first action was completed before the second began: 'Having signed the contract, he finally exhaled'.",
        examples: [
          {
            wrong: "She finished the presentation. Then she invited questions.",
            right: "Having finished the presentation, she invited questions.",
            note: "'Having + past participle' sequences the two actions correctly inside one sentence.",
          },
          {
            wrong: "The building was designed by a local architect; it won a national award.",
            right: "Designed by a local architect, the building won a national award.",
            note: "The -ed participle compresses the passive information into a fronted clause.",
          },
          {
            wrong: "He held the microphone in one hand, he gestured with the other.",
            right: "Holding the microphone in one hand, he gestured with the other.",
            note: "The -ing clause keeps two simultaneous actions inside one fluent sentence.",
          },
        ],
      },
      {
        heading: "Dangling participles and attaching the clause safely",
        explanation:
          "A participle clause attaches to the subject of the main clause, so that subject must be the one performing (or suffering) the action. 'Walking home, the rain soaked me' is wrong — the rain was not walking. Fix danglers by giving the participle its true subject, or by rewriting as a full clause. Negative participle clauses put 'not' first: 'Not knowing the answer, he stayed silent'.",
        examples: [
          {
            wrong: "Walking through the old quarter, the minarets took my breath away.",
            right: "Walking through the old quarter, I was stopped in my tracks by the minarets.",
            note: "The walker, not the minarets, must be the subject attached to 'walking'.",
          },
          {
            wrong: "Not having understood the instructions, the supervisor repeated them slowly.",
            right: "Not having understood the instructions, the intern asked her supervisor to repeat them.",
            note: "The person who misunderstood — the intern — must own the participle clause.",
          },
          {
            wrong: "Having arrived late, the meeting had already started.",
            right: "Having arrived late, she found that the meeting had already started.",
            note: "Add the true subject ('she') so the participle no longer dangles.",
          },
        ],
      },
    ],
    tips: [
      "After writing a participle clause, underline the main-clause subject and ask: did it perform this action?",
      "Use -ing clauses for simultaneity, -ed for passive background and 'having + -ed' for earlier completed actions.",
      "Two or three participle clauses per page is plenty; strings of them make prose breathless.",
      "In speaking, participle clauses add polish to stories: 'Standing at the gate, I realised my passport was still at home.'",
    ],
    quiz: [
      {
        question:
          "____ the quarterly report, the analyst sent it to her manager for review.",
        options: ["Finishing", "Having finished", "Finished", "Have finished"],
        answer: 1,
        explanation:
          "'Having finished' shows the report was completed before she sent it — the perfect participle for earlier actions.",
      },
      {
        question: "Which sentence contains a dangling participle?",
        options: [
          "Walking through the old quarter, the minarets took my breath away.",
          "Walking through the old quarter, I was stopped in my tracks by the minarets.",
          "Built in 1673, the mosque still hosts daily prayers.",
          "Exhausted by the climb, we stopped for tea.",
        ],
        answer: 0,
        explanation:
          "The minarets were not walking; the participle has no correct subject to attach to.",
      },
      {
        question:
          "Complete with a participle clause: '____ from any rooftop, the old city looks like a maze of tin roofs.'",
        options: ["Seeing", "Having seen", "To see", "Seen"],
        answer: 3,
        explanation:
          "'Seen from any rooftop' is a passive participle clause — the city is seen, not seeing.",
      },
      {
        question:
          "Combine correctly: 'He switched off his phone. He began the viva.' Which version sequences the actions properly?",
        options: [
          "Switched off his phone, he began the viva.",
          "He having switched off his phone, began the viva.",
          "Having switched off his phone, he began the viva.",
          "Switching off his phone, the viva was begun by him.",
        ],
        answer: 2,
        explanation:
          "'Having + past participle' marks the completed first action and keeps 'he' as the subject of both clauses.",
      },
      {
        question:
          "Complete: '____ the instructions, the intern asked her supervisor to repeat them.'",
        options: [
          "Not understood",
          "Not understanding",
          "Understanding not",
          "Not have understood",
        ],
        answer: 1,
        explanation:
          "Negative participle clauses place 'not' before the -ing form: 'Not understanding ...'.",
      },
    ],
  },
  {
    topic: "Discourse Markers & Cohesion",
    level: "advanced",
    locale: "en",
    title: "Discourse Markers: Guiding the Reader Through Your Argument",
    intro:
      "Fluent writers signpost every turn: addition, contrast, cause, concession, reformulation. Choosing precise markers — and referencing back cleanly — is what makes C1 writing feel effortless.",
    sections: [
      {
        heading: "Precision connectors beyond 'and', 'but', 'so'",
        explanation:
          "Upgrade your logical toolkit: 'moreover' and 'furthermore' add weight, 'however', 'nevertheless' and 'nonetheless' signal contrast, 'consequently' and 'therefore' mark results, 'by contrast' compares two items, and 'albeit' concedes within one clause ('a strong result, albeit an expensive one'). Each marker carries precise logic — swapping them at random is a classic C1 error.",
        examples: [
          {
            wrong: "The pilot study was small but its results are promising so we should expand it.",
            right: "The pilot study was small; nevertheless, its results are promising and merit expansion.",
            note: "'Nevertheless' carries the concession precisely and lifts the register.",
          },
          {
            wrong: "The new plan is cheaper and it is also faster, but it is very popular.",
            right: "The new plan is cheaper and faster; moreover, it enjoys wide popular support.",
            note: "'Moreover' adds a genuinely supporting point, which 'but' would distort.",
          },
          {
            wrong: "Revenue fell in Dhaka; on the other hand, revenue grew in Chattogram.",
            right: "Revenue fell in Dhaka; by contrast, it grew in Chattogram.",
            note: "'By contrast' is the tight, academic way to oppose two facts about the same topic.",
          },
        ],
      },
      {
        heading: "Reference chains: this, such, the former, the latter",
        explanation:
          "Cohesion also comes from pointing back: 'this decision', 'such measures', 'the former ... the latter ...'. Use 'this + noun' rather than a bare 'this' in writing, so the reader never has to guess. 'The former' and 'the latter' refer to exactly two previously named items, in the order mentioned — never more.",
        examples: [
          {
            wrong: "The ministry cut subsidies. This was criticised.",
            right: "The ministry cut subsidies. This decision was criticised by both unions.",
            note: "'This + noun' names the referent and removes any ambiguity.",
          },
          {
            wrong: "Trains are greener and planes are faster; the first is cheaper.",
            right: "Trains are greener and planes are faster; the former is usually cheaper.",
            note: "'The former/the latter' is the formal pair for exactly two previously named options.",
          },
          {
            wrong: "They raised taxes and froze hiring. These made morale fall.",
            right: "They raised taxes and froze hiring. Such measures made morale fall.",
            note: "'Such + noun' summarises a group of preceding actions elegantly.",
          },
        ],
      },
    ],
    tips: [
      "Vary position: 'However' can open a sentence or follow a semicolon, while 'yet' can sit inside one.",
      "Never stack two markers of the same logic in one sentence ('Moreover, in addition ...').",
      "After every paragraph, check that each 'this' or 'that' has a visible noun partner.",
      "Learn 'albeit' and 'nonetheless' — two high-value markers that examiners and editors notice instantly.",
    ],
    quiz: [
      {
        question:
          "The pilot project succeeded; ____, scaling it nationally would require double the budget.",
        options: ["moreover", "nevertheless", "otherwise", "for instance"],
        answer: 1,
        explanation:
          "The second clause concedes a cost despite the success, so 'nevertheless' carries the contrast.",
      },
      {
        question: "Which marker signals concession within a single clause?",
        options: ["consequently", "in sum", "albeit", "likewise"],
        answer: 2,
        explanation:
          "'Albeit' means 'although' and concedes inside one clause: 'a strong result, albeit an expensive one'.",
      },
      {
        question:
          "The senior team favoured option A, the costlier one; the interns preferred option B. ____ supported the cheaper plan.",
        options: ["The latter", "The former", "The later", "The first"],
        answer: 0,
        explanation:
          "With exactly two items, 'the latter' refers to the second one mentioned — the interns' option B.",
      },
      {
        question:
          "Choose the marker that introduces a reformulation: 'The findings are, ____, a warning that reform will be slow.'",
        options: ["By contrast", "In addition", "Above all", "in other words"],
        answer: 3,
        explanation:
          "'In other words' signals that the speaker is restating the same idea more plainly.",
      },
      {
        question: "Which sentence uses a cohesive reference correctly?",
        options: [
          "The law was amended in 2019; these angered small traders.",
          "The law was amended in 2019; this angered small traders.",
          "The law was amended in 2019; those angered small traders.",
          "The law was amended in 2019; such angered small traders.",
        ],
        answer: 1,
        explanation:
          "'This' can refer to the whole preceding event; bare 'these', 'those' or 'such' cannot stand alone here.",
      },
    ],
  },
  {
    topic: "Hedging & Softening Language",
    level: "advanced",
    locale: "en",
    title: "Hedging and Softening: How Experts Sound Confident and Careful",
    intro:
      "Academic and professional English avoids absolute claims. Hedging shows intellectual honesty, protects relationships, and is an explicit scoring feature in IELTS and university writing.",
    sections: [
      {
        heading: "Academic hedges: verbs, adverbs and impersonal frames",
        explanation:
          "Hedge with tentative verbs ('may contribute to', 'appears to', 'suggests'), adverbs ('arguably', 'broadly', 'somewhat') and impersonal frames ('It is likely that ...', 'The data indicate that ...'). One well-chosen hedge per claim is right; stacking hedges drains all meaning. Compare unhedged 'Social media destroys attention' with hedged 'Social media may erode attention spans'.",
        examples: [
          {
            wrong: "Remote work kills company culture.",
            right: "Remote work appears to weaken aspects of company culture.",
            note: "'Appears to' plus a calibrated verb keeps the claim defensible.",
          },
          {
            wrong: "This proves the medicine is completely safe for everyone.",
            right: "These findings suggest the medicine is generally well tolerated.",
            note: "'Suggest' and 'generally' match the strength of the claim to the evidence.",
          },
          {
            wrong: "The results, which might possibly perhaps indicate something, are interesting.",
            right: "The results tentatively point to a link between sleep and recall.",
            note: "One precise hedge beats a pile of them; over-hedging erases the claim entirely.",
          },
        ],
      },
      {
        heading: "Softening feedback and requests with people",
        explanation:
          "With colleagues, soften through questions ('Could we look at ...?'), past forms ('I wanted to ask ...'), 'a bit' and 'perhaps' with adjectives ('a little unclear'), and blame-free wording ('this section could be strengthened' instead of 'you wrote this badly'). Keep one clear ask per message so the softness still gets results.",
        examples: [
          {
            wrong: "Your slides are confusing and too long.",
            right: "The slides might land better if the middle section were trimmed.",
            note: "'Might ... if' states the problem while offering a fix, not an accusation.",
          },
          {
            wrong: "Send me the report by tonight.",
            right: "Would you be able to send me the report by tonight?",
            note: "A tentative question form is the polite default for requests at work.",
          },
          {
            wrong: "You failed to cite any sources in this paragraph.",
            right: "This paragraph might be stronger with a few citations added.",
            note: "Naming the text, not the person, is the core move of diplomatic feedback.",
          },
        ],
      },
    ],
    tips: [
      "Match hedge strength to evidence: 'suggest' for weak data, 'indicate' for moderate, 'demonstrate' for strong.",
      "Softening is not vagueness — always keep one concrete request or finding on the table.",
      "In essays, hedge claims but not your structure: signposts like 'This essay argues ...' stay direct.",
      "When refuting a source, hedge the person, not the logic: 'The authors may overlook ...' rather than 'They are wrong'.",
    ],
    quiz: [
      {
        question: "Which claim is appropriately hedged for an academic essay?",
        options: [
          "Social media destroys attention spans.",
          "Social media may erode attention spans, particularly among adolescents.",
          "Social media obviously destroys everyone's attention.",
          "Social media will definitely destroy attention spans.",
        ],
        answer: 1,
        explanation:
          "'May erode' plus 'particularly' matches the claim to the available evidence — the essence of hedging.",
      },
      {
        question:
          "Complete with the most academic hedge: 'The methodology ____ flawed in two respects.'",
        options: [
          "appears to be",
          "is definitely",
          "is 100%",
          "was proven",
        ],
        answer: 0,
        explanation:
          "'Appears to be' signals a judgement from the evidence without overclaiming certainty.",
      },
      {
        question:
          "Which is the most diplomatically softened critique of a colleague's draft?",
        options: [
          "You might consider adding citations here to strengthen the section.",
          "This section is weak.",
          "You failed to cite your sources here.",
          "This section makes no sense.",
        ],
        answer: 0,
        explanation:
          "Tentative 'might' plus an action focus offers a fix without attacking the writer.",
      },
      {
        question:
          "Complete: '____ speaking, the data support a cautious optimism about the reform.'",
        options: ["Frankly", "Honestly", "Broadly", "Roughly"],
        answer: 2,
        explanation:
          "'Broadly speaking' hedges the scope; 'frankly' and 'honestly' intensify rather than soften.",
      },
      {
        question: "Which sentence hedges so heavily that the claim nearly disappears?",
        options: [
          "The results strongly prove the hypothesis.",
          "The results indicate a correlation.",
          "The results suggest a possible correlation.",
          "The results possibly might perhaps suggest some kind of correlation.",
        ],
        answer: 3,
        explanation:
          "Stacking 'possibly might perhaps' destroys precision — one well-chosen hedge is enough.",
      },
    ],
  },
  {
    topic: "Advanced Reported Speech",
    level: "advanced",
    locale: "en",
    title: "Reported Speech at C1: Verbs, Patterns and Journalistic Style",
    intro:
      "Advanced reporting goes far beyond 'he said': the verb you choose evaluates the speaker. News writing, minutes and meeting summaries all depend on these patterns.",
    sections: [
      {
        heading: "Reporting verbs and their grammar patterns",
        explanation:
          "Reporting verbs fall into pattern families: 'deny/admit/suggest + -ing' ('He denied leaking the memo'), 'urge/warn/tell/advise + object + to-infinitive' ('She urged the board to act'), and 'claim/maintain/concede/allege + that-clause'. Mixing up the patterns ('denied to leak', 'urged the board that act') instantly marks non-native writing, so learn each verb with its pattern.",
        examples: [
          {
            wrong: "The minister denied to have met the lobbyist.",
            right: "The minister denied having met the lobbyist.",
            note: "'Deny' takes an -ing form, never a to-infinitive.",
          },
          {
            wrong: "The ombudsman suggested the bank to refund the customers.",
            right: "The ombudsman urged the bank to refund the customers.",
            note: "'Suggest' cannot take object + to-infinitive; 'urge' can.",
          },
          {
            wrong: "The spokesperson maintained to that the data was accurate.",
            right: "The spokesperson maintained that the data were accurate.",
            note: "'Maintain' takes a that-clause with no preposition.",
          },
        ],
      },
      {
        heading: "Passive reporting and flexible backshift",
        explanation:
          "Journalism distances claims with passive frames: 'It is believed that ...' or 'The firm is said to be negotiating ...'. Backshift is the default after past reporting verbs, but it is optional when the statement is still true ('She said she lives/lived in Rajshahi'). Time and place words shift too: 'tomorrow' becomes 'the next day', 'here' becomes 'there'.",
        examples: [
          {
            wrong: "People say that the old palace is haunted.",
            right: "The old palace is said to be haunted.",
            note: "Passive reporting ('is said to') is the formal, news-style equivalent.",
          },
          {
            wrong: "The bank said yesterday that prices will rise next month.",
            right: "The bank said yesterday that prices would rise the following month.",
            note: "Past reporting pulls 'will' back to 'would' and 'next month' to 'the following month'.",
          },
          {
            wrong: "It reported that the company is selling its stake.",
            right: "The company is reported to be selling its stake.",
            note: "'Is reported to + be + -ing' keeps the ongoing action inside the passive frame.",
          },
        ],
      },
    ],
    tips: [
      "Build verb families in threes: deny/consider/imagine + -ing; persuade/remind/tell + object + to-infinitive; argue/claim/object + that.",
      "When the fact is still true, choose backshift or not — but stay consistent within one document.",
      "Use 'allege' and 'claim' only for unproven statements; 'confirm' and 'establish' commit you to the truth.",
      "In meeting minutes, prefer neutral verbs ('noted', 'agreed', 'requested') over colourful ones.",
    ],
    quiz: [
      {
        question:
          "Original: 'I am not responsible for the delay.' (said by the manager) — which report is correct?",
        options: [
          "The manager denied to be responsible for the delay.",
          "The manager denied that being responsible for the delay.",
          "The manager denied being responsible for the delay.",
          "The manager refused being responsible for the delay.",
        ],
        answer: 2,
        explanation:
          "'Deny' takes an -ing form (or a that-clause); 'denied to be' and 'refused being' break the pattern.",
      },
      {
        question:
          "'It is said that the old palace is haunted.' Which sentence reports the same idea in passive style?",
        options: [
          "The old palace says it is haunted.",
          "The old palace is said to be haunted.",
          "The old palace is said being haunted.",
          "The old palace said to be haunted.",
        ],
        answer: 1,
        explanation:
          "'X is said to be ...' is the standard passive reporting frame.",
      },
      {
        question:
          "Yesterday a bank official said: 'Prices will rise next month.' Which is the standard journalistic report today?",
        options: [
          "The bank said prices would rise the following month.",
          "The bank said prices will rise next month.",
          "The bank said prices rise next month.",
          "The bank says prices rose the following month.",
        ],
        answer: 0,
        explanation:
          "Past reporting backshifts 'will' to 'would' and 'next month' to 'the following month'.",
      },
      {
        question:
          "The ombudsman ____ the bank to compensate the affected customers.",
        options: ["suggested", "proposed", "urged", "demanded"],
        answer: 2,
        explanation:
          "Only 'urge' takes object + to-infinitive; suggest, propose and demand take that-clauses.",
      },
      {
        question:
          "Original: 'I broke the antenna,' the intern admitted. — which report is correct?",
        options: [
          "The intern admitted breaking the antenna.",
          "The intern admitted to break the antenna.",
          "The intern admitted that he breaks the antenna.",
          "The intern admitted for breaking the antenna.",
        ],
        answer: 0,
        explanation:
          "'Admit' takes an -ing form (or a past-tense that-clause), never 'to break' or 'for breaking'.",
      },
    ],
  },
  {
    topic: "Nominalisation & Academic Style",
    level: "advanced",
    locale: "en",
    title: "Nominalisation: Turning Actions into Concepts for Academic Weight",
    intro:
      "Academic writing prefers nouns that pack a whole event into one word: 'the implementation failed' rather than 'they failed to implement it'. Used well, nominalisation adds precision and density; overused, it turns prose to concrete.",
    sections: [
      {
        heading: "Verb and adjective to noun transformations",
        explanation:
          "Regular patterns make this systematic: decide becomes decision, analyse becomes analysis, implement becomes implementation, fail becomes failure, poor becomes poverty, stable becomes stability. The new noun then takes an 'of' phrase: 'an increase in unemployment', 'the analysis of the samples'. Nominalised nouns also pair with light verbs: 'reach a conclusion', 'conduct an analysis'.",
        examples: [
          {
            wrong: "Unemployment increased sharply, and this worried policymakers.",
            right: "The sharp increase in unemployment alarmed policymakers.",
            note: "'Increase' becomes a noun with an adjective partner and an 'in' phrase, fusing two clauses.",
          },
          {
            wrong: "Because the team implemented the system badly, users left.",
            right: "Poor implementation of the system drove users away.",
            note: "Adjective + noun ('poor implementation') is denser than a chain of clauses.",
          },
          {
            wrong: "After they had analysed the data, they reached a conclusion that was clear.",
            right: "Analysis of the data yielded a clear conclusion.",
            note: "Nominalisation shortens the sentence while keeping every fact.",
          },
        ],
      },
      {
        heading: "When to nominalise — and when to stay verbal",
        explanation:
          "Nominalise when the action itself is the topic ('The delay was caused by ...'), when linking sentence topics smoothly, or when an unimportant agent can be left out ('the approval of the scheme'). Keep plain verbs when you need energy, human agency or clarity: 'We tested the samples' beats 'Testing of the samples was undertaken'. Plain-English editors jokingly call excessive nominalisations 'zombie nouns'.",
        examples: [
          {
            wrong: "The undertaking of the testing of the samples was done by our lab.",
            right: "Our lab tested the samples.",
            note: "When the agent matters, a verb is clearer than a nominal chain.",
          },
          {
            wrong: "There was a decision by the committee to make a postponement of the vote.",
            right: "The committee decided to postpone the vote.",
            note: "One nominalisation per idea is enough; two force the reader to unpack.",
          },
          {
            wrong: "The rapid expansion of the city resulted in the destruction of wetlands, which caused the loss of habitat.",
            right: "Rapid urban expansion destroyed wetlands and the habitats they sheltered.",
            note: "Strong verbs ('destroyed') restore pace to a heavily nominalised draft.",
          },
        ],
      },
    ],
    tips: [
      "Learn light-verb collocations: conduct research, reach a conclusion, make an assumption, carry out an analysis.",
      "Nominalise at paragraph openings to link back: 'This failure ...', 'Such resistance ...'.",
      "If a nominalised sentence needs more than one 'of' phrase, try rewriting it with a verb.",
      "Match register to reader: journal articles welcome density, while emails and guides prefer verbs.",
    ],
    quiz: [
      {
        question: "'Prices rose sharply in March.' Which nominalised version suits a formal report?",
        options: [
          "There was a sharp increase in prices in March.",
          "Prices had a sharply increase in March.",
          "A sharply increasing happened to prices in March.",
          "Prices made a sharply increase in March.",
        ],
        answer: 0,
        explanation:
          "The verb 'rose' becomes the noun 'increase' with an adjective partner and an 'in' phrase.",
      },
      {
        question:
          "'The government decided to delay the election.' Which nominalisation is correct?",
        options: [
          "The government's deciding of the election delay surprised analysts.",
          "The government's decision to delay the election surprised analysts.",
          "The government's decide to delay the election surprised analysts.",
          "The government decisionly delayed the election, surprising analysts.",
        ],
        answer: 1,
        explanation:
          "'Decide' becomes 'decision', which then takes a to-infinitive: 'the decision to delay'.",
      },
      {
        question: "Which sentence is the LEAST nominalised (the plainest English)?",
        options: [
          "The implementation of the utilisation of resources was undertaken.",
          "Resource-utilisation implementation was undertaken by the team.",
          "The careful utilisation of resources was implemented by the team.",
          "The team used the resources carefully.",
        ],
        answer: 3,
        explanation:
          "It keeps a human subject and a strong verb instead of stacked abstract nouns.",
      },
      {
        question:
          "Complete: '____ of the new drug was approved after ____ of fresh safety data.'",
        options: [
          "Approving / reviewing",
          "Approve / review",
          "Approval / review",
          "Approval / reviewing of",
        ],
        answer: 2,
        explanation:
          "Both slots need nouns: 'Approval ... after review of ...' is the formal pattern.",
      },
      {
        question: "Which nominalised sentence keeps the agent (who acted)?",
        options: [
          "The postponement of the hearing was announced.",
          "The committee announced the postponement of the hearing.",
          "An announcement was made of the hearing's postponement.",
          "There was an announcement about a postponed hearing.",
        ],
        answer: 1,
        explanation:
          "Naming 'the committee' preserves agency; the other options hide who acted.",
      },
    ],
  },
  {
    topic: "Ellipsis & Substitution",
    level: "advanced",
    locale: "en",
    title: "Ellipsis and Substitution: Saying Less, Meaning More",
    intro:
      "Native speakers leave out repeated words and swap in tiny stand-ins like 'so', 'one' and 'do'. Handling these gaps smoothly is one of the clearest markers of natural, advanced fluency.",
    sections: [
      {
        heading: "Ellipsis: leaving words out gracefully",
        explanation:
          "English omits words that are recoverable from context: after auxiliaries ('She can drive, but he can't'), after 'to' in infinitives ('I meant to, honestly'), after wh-words ('Call when you can'), and in comparisons. In writing, keep enough words that no sentence has two possible readings — ambiguity is the one true sin of ellipsis.",
        examples: [
          {
            wrong: "'Will you join us?' 'Yes, I will join us.'",
            right: "'Will you join us?' 'I will.'",
            note: "The repeated words are deleted down to the auxiliary.",
          },
          {
            wrong: "I wanted to help, but I did not have time for to help.",
            right: "I wanted to help, but I didn't have time to.",
            note: "'To' carries the omitted infinitive ('to help').",
          },
          {
            wrong: "Some students submitted essays early; other students submitted essays late.",
            right: "Some students submitted early; others, late.",
            note: "Repeated nouns and verbs vanish once the context is fixed.",
          },
        ],
      },
      {
        heading: "Substitution: so, one, do and neither",
        explanation:
          "Use 'so' and 'not' to replace clauses after think, hope, believe, suppose and afraid ('I think so', 'I hope not'); use 'one' and 'ones' to replace count nouns ('this pen or the blue one'); and use 'do', 'does' or 'did' to replace verb phrases ('He reads more than she does'). Agree with 'So do I' and echo negatives with 'Neither do I'.",
        examples: [
          {
            wrong: "'Do you think the deal will close?' 'Yes, I think it.'",
            right: "'Do you think the deal will close?' 'Yes, I think so.'",
            note: "'So' substitutes the whole that-clause after think, believe and hope.",
          },
          {
            wrong: "These results are stronger than the results from last year.",
            right: "These results are stronger than the ones from last year.",
            note: "'The ones' substitutes a plural noun already known to the reader.",
          },
          {
            wrong: "'I have never missed a deadline.' 'I also have never.'",
            right: "'I have never missed a deadline.' 'Neither have I.'",
            note: "'Neither + inverted auxiliary' is the standard echo of a negative statement.",
          },
        ],
      },
    ],
    tips: [
      "In speaking, let the auxiliary do the work: 'I can't', 'She has', 'They won't'.",
      "Use 'so' after think/believe/hope/suppose, but check each verb's pattern — 'assure' and 'doubt' behave differently.",
      "In formal writing, expand any ambiguous ellipsis; clarity outranks brevity on the page.",
      "Drill responses — 'So do I', 'Neither did I', 'I hope not' — until they are reflexive in conversation.",
    ],
    quiz: [
      {
        question:
          "'Do you think the merger will be approved?' 'Yes, I think ____.'",
        options: ["it", "that", "this", "so"],
        answer: 3,
        explanation:
          "'So' substitutes the whole that-clause after think, believe, hope and suppose.",
      },
      {
        question: "'I have never trusted that supplier.' '____ have I.'",
        options: ["Neither", "Either", "So", "Also"],
        answer: 0,
        explanation:
          "'Neither have I' echoes a negative statement with inversion; 'so' would contradict it.",
      },
      {
        question:
          "This laptop is slow, but the ____ in the meeting room is even worse.",
        options: ["it", "one", "ones", "that one's"],
        answer: 1,
        explanation:
          "'One' substitutes the singular count noun 'laptop' already known from context.",
      },
      {
        question: "She analyses data faster than I ____.",
        options: ["do", "work", "am", "does"],
        answer: 0,
        explanation:
          "'Do' substitutes the verb phrase 'analyse data'; 'does' would wrongly copy her subject.",
      },
      {
        question:
          "'Why didn't you call the client?' 'I meant ____, but the network was down.'",
        options: ["calling", "call", "to", "so"],
        answer: 2,
        explanation:
          "Infinitive ellipsis keeps just 'to': 'I meant to (call)'.",
      },
    ],
  },
  {
    topic: "Collocations & Word Partnerships",
    level: "advanced",
    locale: "en",
    title: "Collocations: The Partnerships Native Speakers Never Break",
    intro:
      "Words travel in fixed pairs: we make decisions, conduct research and pay attention — never 'do' them all. Building strong collocations is the fastest route from correct English to natural English.",
    sections: [
      {
        heading: "Verb + noun and adjective + noun partnerships",
        explanation:
          "Learn chunks, not single words: 'reach a decision/conclusion/compromise', 'raise concerns/awareness', 'meet a deadline/requirement', 'conduct research/an investigation', plus adjective partners like 'a heated debate', 'a pressing matter' and 'substantial evidence'. The partner verb is the test: 'do research' is fine, but 'make research' is not.",
        examples: [
          {
            wrong: "We need to take a decision about the venue this week.",
            right: "We need to make a decision about the venue this week.",
            note: "'Make a decision' is the standard partnership in international English.",
          },
          {
            wrong: "The team made research on urban flooding for two years.",
            right: "The team conducted research on urban flooding for two years.",
            note: "'Conduct/carry out research' is the fixed partnership, not 'make'.",
          },
          {
            wrong: "The minister's speech raised a hot debate on the reforms.",
            right: "The minister's speech sparked a heated debate on the reforms.",
            note: "'Debate' collocates with 'heated' and with verbs like 'spark' or 'fuel'.",
          },
        ],
      },
      {
        heading: "Adverb + adjective pairs and fixed expressions",
        explanation:
          "Adverbs also partner selectively: 'fully aware', 'deeply concerned', 'bitterly disappointed', 'widely available', 'strictly forbidden'. Add high-frequency fixed expressions: 'to some extent', 'on balance', 'in the long run', 'safe and sound'. When in doubt, check a collocations dictionary rather than translating word by word.",
        examples: [
          {
            wrong: "Officials are strongly aware of the security risks.",
            right: "Officials are fully aware of the security risks.",
            note: "'Aware' partners with 'fully' or 'well', not 'strongly'.",
          },
          {
            wrong: "The investors were strongly disappointed by the quarterly figures.",
            right: "The investors were bitterly disappointed by the quarterly figures.",
            note: "'Bitterly disappointed' is the set phrase; 'strongly' clashes here.",
          },
          {
            wrong: "The medicine is very available in rural clinics.",
            right: "The medicine is widely available in rural clinics.",
            note: "'Available' takes 'widely' or 'freely', not 'very'.",
          },
        ],
      },
    ],
    tips: [
      "Record vocabulary in threes — word + partner + your own sentence — never as isolated translations.",
      "Group chunks by verb: make a decision/mistake/point; take responsibility/a risk/measure.",
      "Test new collocations in a corpus or collocations dictionary before using them in formal writing.",
      "Avoid word-for-word translation from Bangla or Hindi; the direct equivalent is usually a false collocation.",
    ],
    quiz: [
      {
        question:
          "The auditors will ____ a thorough review of the accounts next week.",
        options: ["make", "do", "conduct", "perform out"],
        answer: 2,
        explanation:
          "'Conduct/carry out a review' is the fixed partnership; 'perform out' does not exist.",
      },
      {
        question: "We must ____ a decision about the venue before the quarter ends.",
        options: ["take", "do", "give", "make"],
        answer: 3,
        explanation:
          "'Make a decision' is the standard collocation in international English.",
      },
      {
        question: "The minister's speech sparked a ____ debate in parliament.",
        options: ["heated", "hot-fire", "burning", "cooked"],
        answer: 0,
        explanation:
          "'A heated debate' is the set phrase; 'burning' partners with 'issue' or 'question'.",
      },
      {
        question: "Researchers are ____ aware of the study's limitations.",
        options: ["highly", "strongly", "fully", "greatly"],
        answer: 2,
        explanation:
          "'Aware' collocates with 'fully' (or 'well'); the other adverbs clash with it.",
      },
      {
        question: "Which verb naturally pairs with 'a conclusion'?",
        options: ["reach", "get", "arrive", "take"],
        answer: 0,
        explanation:
          "'Reach a conclusion' (or 'arrive at a conclusion') is standard; 'arrive' needs 'at'.",
      },
    ],
  },
  {
    topic: "Register: Formal vs Informal English",
    level: "advanced",
    locale: "en",
    title: "Register: Matching Formality to Audience and Purpose",
    intro:
      "The same message can be dressed for a boardroom or a group chat. Register is the skill of choosing contractions or Latinate verbs, phrasal verbs or single verbs — and never letting them collide.",
    sections: [
      {
        heading: "Formal choices: verbs, structure and impersonality",
        explanation:
          "Formal English prefers single Latinate verbs to phrasal ones (postpone rather than put off, establish rather than set up, cancel rather than call off), avoids contractions, and leans on impersonal frames ('It is recommended that ...') and precise nouns ('enquiries', 'assistance'). Hedged, reader-focused requests ('We would be grateful if ...') are its natural voice.",
        examples: [
          {
            wrong: "The meeting got put off till next Tuesday.",
            right: "The meeting has been postponed until next Tuesday.",
            note: "A single verb plus passive voice raises the register for written minutes.",
          },
          {
            wrong: "We wanna check if you can send the docs.",
            right: "We would be grateful if you could send the documents.",
            note: "No contractions, 'grateful if you could', full words — the formal email core.",
          },
          {
            wrong: "We need to set up a new system fast.",
            right: "It is proposed that a new system be established promptly.",
            note: "Impersonal 'It is proposed that' plus the subjunctive is peak formal register.",
          },
        ],
      },
      {
        heading: "Informal choices — and register collisions to avoid",
        explanation:
          "Informal English welcomes contractions, phrasal verbs, idioms and vague words ('stuff', 'things'). The C1 error is collision: idioms inside legal writing, 'kids' in a reference letter, or archaic formulas in international correspondence. When the audience is mixed, choose the neutral middle register and stay consistent.",
        examples: [
          {
            wrong: "Dear Sir, your team was awesome and sorted my issue in a jiffy.",
            right: "Dear Sir, your team resolved my issue efficiently and courteously.",
            note: "Idioms ('in a jiffy') and slang ('awesome') clash with a formal letter frame.",
          },
          {
            wrong: "The contract shall be terminated if payments are missed, which would be a total bummer.",
            right: "The contract shall be terminated if payments are missed.",
            note: "Legal register admits no colloquial tail comments, however harmless they seem.",
          },
          {
            wrong: "Respected Sir, I am writing this letter for getting a refund for the broken thing.",
            right: "I am writing to request a refund for the damaged item.",
            note: "Neutral formal phrasing replaces both archaic openers and vague nouns.",
          },
        ],
      },
    ],
    tips: [
      "Before writing, name your audience and purpose; let them fix the register before you type a word.",
      "Audit drafts for collisions: circle every idiom and every Latinate verb and check they are not neighbours.",
      "Formal email formula: context, purpose, request, courteous close — and keep sentences under about 25 words.",
      "In speech, mirror the interviewer's register; switching down slightly sounds warm, switching up sounds stiff.",
    ],
    quiz: [
      {
        question:
          "Which is the most formal way to report 'We got a lot of questions about the change'?",
        options: [
          "We got tons of questions about the change.",
          "We received numerous enquiries regarding the change.",
          "We had heaps of queries about the change.",
          "Lots of people asked us about the change.",
        ],
        answer: 1,
        explanation:
          "'Received numerous enquiries regarding' is fully formal; the others keep informal quantity words.",
      },
      {
        question: "Rewrite for a formal report: 'The board put off the vote.'",
        options: [
          "The board postponed the vote.",
          "The board put the vote off officially.",
          "The board cancelled off the vote.",
          "The board did away the vote.",
        ],
        answer: 0,
        explanation:
          "Formal writing replaces the phrasal verb 'put off' with the single verb 'postpone'.",
      },
      {
        question:
          "Which sentence mixes registers inappropriately in a formal complaint email?",
        options: [
          "I am writing to express my dissatisfaction with the service I received.",
          "I would be grateful if you could investigate this matter promptly.",
          "Your staff were super helpful and the refund thing was sorted fast.",
          "I look forward to your prompt response.",
        ],
        answer: 2,
        explanation:
          "Slang ('super', 'thing', 'sorted fast') collides with the formal letter frame around it.",
      },
      {
        question: "Which recommendation is in the most formal register?",
        options: [
          "You should really fix this bug.",
          "It is recommended that the bug be fixed before release.",
          "Someone ought to fix the bug, honestly.",
          "Fix the bug, please.",
        ],
        answer: 1,
        explanation:
          "The impersonal frame 'It is recommended that ...' plus the subjunctive 'be fixed' is formal to the core.",
      },
      {
        question:
          "In which context are contractions such as 'won't' and 'it's' fully acceptable?",
        options: [
          "A dissertation's conclusion",
          "A legal contract",
          "A casual team chat",
          "A formal reference letter",
        ],
        answer: 2,
        explanation:
          "Contractions suit informal spoken contexts like chat; formal documents spell them out.",
      },
    ],
  },
  {
    topic: "Advanced Tense & Aspect Nuances",
    level: "advanced",
    locale: "en",
    title: "Tense and Aspect Nuances: The Final Polish",
    intro:
      "At C1 the grammar of time is about attitude: future continuous for tact, past perfect for plans that died, present perfect for news that still matters. These fine distinctions mark truly advanced control.",
    sections: [
      {
        heading: "Futures with attitude: will, will be doing, future perfect",
        explanation:
          "The future continuous ('We will be arriving at six') presents an action as a settled, neutral arrangement — perfect for polite schedules. The future perfect ('By May, I will have completed the audit') looks back from a future point. Compare 'I will send it' (a promise) with 'I will be sending it' (a routine fact): the continuous softens the message.",
        examples: [
          {
            wrong: "By the time the auditor arrives, we will finish the reconciliation.",
            right: "By the time the auditor arrives, we will have finished the reconciliation.",
            note: "Completion before a future point requires the future perfect.",
          },
          {
            wrong: "This time tomorrow, we will present the findings to the panel.",
            right: "This time tomorrow, we will be presenting the findings to the panel.",
            note: "The future continuous paints an action in progress at a set future moment.",
          },
          {
            wrong: "Will you join us for dinner, or is it a problem?",
            right: "Will you be joining us for dinner?",
            note: "The continuous future sounds like routine information, so it is more tactful than plain 'will you'.",
          },
        ],
      },
      {
        heading: "Unrealised pasts and aspect distinctions",
        explanation:
          "Past perfect expresses intentions that never happened: 'I had intended to call, but the network failed' — and 'was/were to have + participle' does the same for cancelled arrangements. The present perfect continuous stresses ongoing duration ('I have been drafting the report all morning'), while the present perfect simple reports a finished result ('I have drafted the report'). Even state verbs gain nuance in the progressive ('I'm loving this course' — temporary, informal).",
        examples: [
          {
            wrong: "The minister is to visit the flood zone on Monday, but the trip was cancelled.",
            right: "The minister was to have visited the flood zone on Monday, but the trip was cancelled.",
            note: "'Was to have + participle' marks an arrangement that never happened.",
          },
          {
            wrong: "I am writing to her twice this week, but she never replies.",
            right: "I have written to her twice this week, but she hasn't replied.",
            note: "Counted, completed actions take the present perfect simple, not the continuous.",
          },
          {
            wrong: "I intended to call you, but I fell asleep.",
            right: "I had intended to call you, but I fell asleep.",
            note: "Past perfect shows the intention existed — and died — before the sleeping.",
          },
        ],
      },
    ],
    tips: [
      "Choose the future continuous whenever you describe logistics; it sounds organised without sounding bossy.",
      "Anchor the future perfect with a clear time stamp: 'by June', 'by the time you read this'.",
      "Use 'was to have done' for elegant disappointment in reports: 'The pilot was to have launched in March.'",
      "Ask 'finished result or ongoing process?' before choosing between the present perfect and its continuous.",
    ],
    quiz: [
      {
        question: "By the time you receive this letter, I ____ the country.",
        options: ["will leave", "will have left", "am leaving", "left"],
        answer: 1,
        explanation:
          "An action completed before a future point takes the future perfect.",
      },
      {
        question: "We ____ to launch in June, but the funding fell through.",
        options: ["had intended", "intend", "will intend", "are intending"],
        answer: 0,
        explanation:
          "The past perfect expresses an intention that never materialised.",
      },
      {
        question: "This time next week, we ____ through the Himalayas.",
        options: [
          "will drive",
          "will have driven",
          "will be driving",
          "are driving",
        ],
        answer: 2,
        explanation:
          "An action in progress at a specific future moment takes the future continuous.",
      },
      {
        question: "I ____ to her twice this week, but she still hasn't replied.",
        options: ["am writing", "have written", "had written", "write"],
        answer: 1,
        explanation:
          "Counted, completed actions connected to now take the present perfect simple.",
      },
      {
        question:
          "The prime minister ____ to visit the flood zone on Tuesday, but the trip was cancelled at the last minute.",
        options: [
          "is to travel",
          "was travelled",
          "has travelled",
          "was to have travelled",
        ],
        answer: 3,
        explanation:
          "'Was to have + participle' describes an arrangement that never happened.",
      },
    ],
  },
  {
    topic: "Precision Articles & Quantifiers",
    level: "advanced",
    locale: "en",
    title: "Articles and Quantifiers at C1: Small Words, Precise Meanings",
    intro:
      "At advanced level, article errors become subtle: 'in school' versus 'in the school', 'few' versus 'a few', 'the number of' versus 'a number of'. Precision here is what readers quietly register as true mastery.",
    sections: [
      {
        heading: "Zero article, institutions and 'a' with names",
        explanation:
          "Institution nouns take no article when they describe their purpose (at school, in hospital, go to university, in prison) but take 'the' for the physical building. Formal English also uses 'a/an + name' for an unknown or previously unmet person: 'A Ms Rahman called for you'. Abstract nouns usually stay bare ('information', 'advice'), so forms like 'advices' or 'the informations' are always wrong.",
        examples: [
          {
            wrong: "After the scandal, the minister spent three years in the prison.",
            right: "After the scandal, the minister spent three years in prison.",
            note: "'In prison' means serving a sentence; 'in the prison' would just locate a building.",
          },
          {
            wrong: "Her daughter is still at the school; she is only nine.",
            right: "Her daughter is still at school; she is only nine.",
            note: "As an institution or period of study, 'school' takes no article.",
          },
          {
            wrong: "Mr Ali came to see you this morning. (about a stranger)",
            right: "A Mr Ali came to see you this morning.",
            note: "'A + name' formally signals a person the speaker does not know.",
          },
        ],
      },
      {
        heading: "Few vs a few, the number of, each vs every",
        explanation:
          "'Few' and 'little' are negative ('not enough'), while 'a few' and 'a little' are positive ('some') — the article changes the whole attitude. 'The number of + plural noun' takes a singular verb and reports a figure; 'a number of' means 'several' and takes a plural verb. 'Each' views members one by one while 'every' views them as a group, and 'every' cannot follow 'of' — say 'each of the students', never 'every of the students'.",
        examples: [
          {
            wrong: "The number of complaints have risen sharply this year.",
            right: "The number of complaints has risen sharply this year.",
            note: "'The number of' is the singular subject, so the verb is 'has'.",
          },
          {
            wrong: "Little hospitals in the district have a paediatric ward.",
            right: "Few hospitals in the district have a paediatric ward.",
            note: "Countable plural nouns take 'few', not 'little'.",
          },
          {
            wrong: "Every of the applicants must submit two references.",
            right: "Each of the applicants must submit two references.",
            note: "'Every' never follows 'of'; use 'each of' or 'every one of'.",
          },
        ],
      },
    ],
    tips: [
      "Ask 'purpose or place?' before institution nouns: 'in prison' (serving time), 'in the prison' (visiting the building).",
      "Test the attitude: if you mean 'not enough', choose few/little; if you mean 'some', choose a few/a little.",
      "Memorise uncountable pairs: information, advice, furniture, news — no plural -s and no 'a'.",
      "With 'number of', check the head noun: 'the number ... has risen', 'a number ... have complained'.",
    ],
    quiz: [
      {
        question:
          "'____ students attended the seminar, so the room felt empty.' — choose the quantifier with the negative sense.",
        options: ["A few", "Much", "Few", "A little"],
        answer: 2,
        explanation:
          "'Few' means 'not enough' — negative; 'a few' would be positive and clash with the empty room.",
      },
      {
        question:
          "Choose the correct subject–verb form: '____ of complaints has risen sharply this year.'",
        options: ["A number", "The number", "Number", "Much number"],
        answer: 1,
        explanation:
          "'The number of + plural noun' is a singular subject reporting a figure, so 'has' follows.",
      },
      {
        question: "After the scandal, he was expelled ____ school.",
        options: ["from", "from the", "out of the", "from a"],
        answer: 0,
        explanation:
          "Institution nouns take no article when they describe their purpose: 'expelled from school'.",
      },
      {
        question:
          "'A Ms Rahman came to see you while you were out.' What does 'a + name' signal here?",
        options: [
          "It is wrong — names never take articles",
          "It marks affection for the person",
          "Formal use: a person unknown or previously unmet",
          "It signals that the person is famous",
        ],
        answer: 2,
        explanation:
          "Formal English uses 'a/an + name' for a stranger or a first, unverified mention.",
      },
      {
        question:
          "Complete for one-by-one distribution: '____ of the three finalists was given five minutes alone with the panel.'",
        options: ["Every", "All", "Whole", "Each"],
        answer: 3,
        explanation:
          "Only 'each' takes 'of' here, and the singular verb 'was' rules out 'all'.",
      },
    ],
  },
];

export default LESSONS;
