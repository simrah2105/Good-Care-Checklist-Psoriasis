import {
  Stethoscope,
  HeartPulse,
  Pill,
  Users,
  Activity,
  Heart,
  Move,
  AlignCenter,
  Anchor,
  Hand,
  Layers,
  Fingerprint,
  Brain
} from 'lucide-react';

export interface ProtocolSection {
  title: string;
  description: string;
  patientTip: string;
  checkpoints: string[];
  integratedLinks?: { title: string; url: string; }[];
}

export interface Milestone {
  summary: string;
  expectation: string;
  emotionalGoal: string;
  keyQuestion: string;
  journeyAids?: { title: string; url: string; description: string; type: 'tool' | 'worksheet' | 'community' | 'video' }[];
  doctorDiscussionGuide?: {
    questionsToAsk: string[];
    whatToBring: string[];
    redFlagsToMention: string[];
  };
}

export interface ClinicalDomain {
  name: string;
  desc: string;
  icon: any;
  resourceTitle: string;
  resourceUrl: string;
  secondaryTitle?: string;
  secondaryUrl?: string;
}

export interface Protocol {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  color: string;
  textColor: string;
  icon: any;
  sections: ProtocolSection[];
  milestone: Milestone;
  whyItMatters: string;
  relatedDomainIds?: string[];
  equityResources?: {
    title: string;
    url: string;
    description: string;
  }[];
}

// "Words your doctor may use" — a plain-language glossary of the key terms and
// areas of the body that come up in psoriatic arthritis (PsA) care. Kept separate
// from the resource links below as a definitional reference.
export const clinicalDomains: ClinicalDomain[] = [
  {
    name: 'Peripheral Arthritis',
    desc: 'PsA in the joints of the arms and legs',
    icon: Move,
    resourceTitle: 'What is PsA?',
    resourceUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/',
    secondaryTitle: 'PsA Symptoms',
    secondaryUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/'
  },
  {
    name: 'Axial Disease',
    desc: 'PsA in the spine and sacroiliac joints',
    icon: AlignCenter,
    resourceTitle: 'What is PsA?',
    resourceUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/',
    secondaryTitle: 'PsA Symptoms',
    secondaryUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/'
  },
  {
    name: 'Enthesitis',
    desc: 'Inflammation where tendons & ligaments meet bone',
    icon: Anchor,
    resourceTitle: 'What is PsA?',
    resourceUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/',
    secondaryTitle: 'PsA Symptoms',
    secondaryUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/'
  },
  {
    name: 'Dactylitis',
    desc: 'Sausage-like swelling of a whole finger or toe',
    icon: Hand,
    resourceTitle: 'What is PsA?',
    resourceUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/',
    secondaryTitle: 'PsA Symptoms',
    secondaryUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/'
  },
  {
    name: 'Skin Psoriasis',
    desc: 'The skin condition that often accompanies PsA',
    icon: Layers,
    resourceTitle: 'Types of Psoriasis',
    resourceUrl: 'https://psoriasiscanada.ca/about-psoriasis/types-of-psoriasis/',
    secondaryTitle: 'Psoriasis Severity',
    secondaryUrl: 'https://psoriasiscanada.ca/about-psoriasis/severity/'
  },
  {
    name: 'Nail Disease',
    desc: 'Pitting, ridging, or separation of the nails',
    icon: Fingerprint,
    resourceTitle: 'Types of Psoriasis',
    resourceUrl: 'https://psoriasiscanada.ca/about-psoriasis/types-of-psoriasis/'
  },
  {
    name: 'Cardiovascular Health',
    desc: 'Heart & circulation — a key related condition in PsA',
    icon: HeartPulse,
    resourceTitle: 'Associated Conditions',
    resourceUrl: 'https://psoriasiscanada.ca/associated-conditions-overview/',
    secondaryTitle: 'What is PsA?',
    secondaryUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/'
  },
  {
    name: 'Mental Health',
    desc: 'Anxiety & depression linked to living with PsA',
    icon: Brain,
    resourceTitle: 'Living With Psoriatic Disease',
    resourceUrl: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/',
    secondaryTitle: 'PsA & Relationships',
    secondaryUrl: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/psoriasis-and-relationships/'
  }
];

// Every resource URL below appears exactly once across all integratedLinks,
// journeyAids, and equityResources (no link reappears), balanced evenly between
// the Canadian Arthritis Patient Alliance and Psoriasis Canada.
export const protocols: Protocol[] = [
  {
    id: 'diagnosis',
    title: 'Understanding Symptoms',
    shortDesc: 'Understand what you are experiencing.',
    fullDesc: 'Getting clarity on your symptoms is the first step toward a psoriatic arthritis (PsA) diagnosis. This guide helps you recognize the joint, skin, and nail changes linked to PsA so you can describe them clearly to your doctor.',
    color: 'bg-diagnosis',
    textColor: 'text-diagnosis-foreground',
    icon: Stethoscope,
    milestone: {
      summary: 'Finding clarity and a name for what you are feeling is an incredibly important first step.',
      expectation: 'Your doctor will likely examine your joints, skin, and nails and ask detailed questions about when and where you feel pain, stiffness, or swelling.',
      emotionalGoal: 'Moving from uncertainty to understanding.',
      keyQuestion: 'Could my symptoms be psoriatic arthritis?',
      doctorDiscussionGuide: {
        questionsToAsk: [
          "Could my joint pain and stiffness be psoriatic arthritis?",
          "Are there specific tests, imaging, or referrals we should do to check for PsA and joint damage?",
          "How can we tell PsA apart from other types of arthritis in my case?"
        ],
        whatToBring: [
          "Your completed Symptom Tracking Diary",
          "Photos of any skin or nail changes when they were at their worst",
          "A list of your current medications and supplements"
        ],
        redFlagsToMention: [
          "Dactylitis (sausage-like swelling in fingers or toes)",
          "Morning joint stiffness lasting longer than 30 minutes",
          "Nail pitting or separation alongside joint pain"
        ]
      },
      journeyAids: [
        { title: 'Symptom Tracking Diary', url: 'https://arthritispatient.ca/en/giving-patients-control-new-resource-know-your-numbers-trends/', description: 'A downloadable worksheet to log daily symptoms before your next visit.', type: 'worksheet' },
        { title: 'Getting a Diagnosis: Lived Experience', url: 'https://arthritispatient.ca/en/lived-experience-webinar/', description: 'A patient panel sharing how they navigated getting an arthritis diagnosis.', type: 'video' }
      ]
    },
    whyItMatters: 'Translating vague discomfort into specific terms helps your doctor reach an accurate psoriatic arthritis diagnosis much faster.',
    relatedDomainIds: ['Peripheral Arthritis', 'Nail Disease', 'Skin Psoriasis'],
    sections: [
      {
        title: 'Spotting Joint Involvement',
        description: 'Psoriatic arthritis often starts quietly. Learn the subtle signs that inflammation has reached your joints.',
        patientTip: 'Pay close attention to "morning stiffness." If it takes more than 30 minutes to get moving in the morning, definitely tell your doctor.',
        checkpoints: [
          'Notice if your joints feel unusually stiff after resting',
          'Check your fingernails and toenails for small dents or separation from the nail bed',
          'Note any deep, aching pain in your lower back or buttocks'
        ],
        integratedLinks: [
          { title: 'Symptoms & Diagnosis of PsA', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/' },
          { title: 'What is Psoriatic Arthritis?', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/' },
          { title: 'Difference Between PsA and RA', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/difference-between-psa-and-ra/' }
        ]
      },
      {
        title: 'Skin & Nail Clues',
        description: 'Skin and nail changes are important clues your doctor uses when assessing for PsA. Knowing how to describe them helps the conversation.',
        patientTip: 'A handy trick: the size of your palm represents roughly 1% of your body surface area. This helps you estimate how much of your skin is affected.',
        checkpoints: [
          'Note where you have psoriasis patches and how they change over time',
          'Check your nails for pitting, ridging, or lifting away from the nail bed',
          'Ask your doctor how your skin and nail findings factor into a PsA diagnosis'
        ],
        integratedLinks: [
          { title: 'Types of Psoriasis', url: 'https://psoriasiscanada.ca/about-psoriasis/types-of-psoriasis/' },
          { title: 'Understanding Psoriasis Severity', url: 'https://psoriasiscanada.ca/about-psoriasis/severity/' },
          { title: 'Talking With Your Healthcare Provider', url: 'https://arthritispatient.ca/en/talking-with-my-healthcare-provider/' }
        ]
      }
    ],
    equityResources: [
      { title: 'Lived Experience Infographic', url: 'https://arthritispatient.ca/wp-content/uploads/2025/12/Lived-Experience-Nov-2025-Infographic-Final-1.pdf', description: 'A plain-language infographic capturing what daily life with arthritis really looks like, told through real patient voices.' },
      { title: 'Arthritis Patient Charter', url: 'https://arthritispatient.ca/en/arthritis-patient-charter', description: 'A charter outlining the care, respect, and access every Canadian arthritis patient is entitled to.' }
    ]
  },
  {
    id: 'treatment',
    title: 'Treatment Options',
    shortDesc: 'Navigate your PsA medication options.',
    fullDesc: 'From anti-inflammatories and traditional medications like methotrexate to advanced biologics, understanding the psoriatic arthritis treatment ladder empowers you to have better conversations about what\'s next.',
    color: 'bg-treatment',
    textColor: 'text-treatment-foreground',
    icon: Pill,
    milestone: {
      summary: 'Choosing the right treatment is a partnership. Together with your doctor, you can find a plan that balances relief and lifestyle.',
      expectation: 'Your doctor should explain the PsA "treatment ladder" and discuss the trade-offs of moving from anti-inflammatories to DMARDs like methotrexate, or to biologics.',
      emotionalGoal: 'Gaining the confidence that your treatment choice is the best one for you.',
      keyQuestion: 'What are my treatment goals?',
      doctorDiscussionGuide: {
        questionsToAsk: [
          "What are the most common side effects of this proposed PsA treatment?",
          "How long generally does it take to see a noticeable improvement in my joints?",
          "If this doesn't work, what happens next in the step therapy plan?"
        ],
        whatToBring: [
          "A list of all previous treatments you've tried and how well they worked",
          "Your current insurance or benefits information",
          "Your completed Medication Trade-off Guide"
        ],
        redFlagsToMention: [
          "Any history of serious infections or liver problems",
          "If you are planning to become pregnant",
          "Severe needle phobia (if injections are suggested)"
        ]
      },
      journeyAids: [
        { title: 'Medications to Treat Inflammatory Arthritis', url: 'https://arthritispatient.ca/wp-content/uploads/2018/07/Medications_to_Treat_Inflammatory_Arthritis_Final.pdf', description: 'A patient-friendly booklet explaining the medications used for inflammatory arthritis.', type: 'worksheet' }
      ]
    },
    whyItMatters: 'Knowing what treatments are out there prevents you from giving up when a single medication stops working.',
    relatedDomainIds: ['Peripheral Arthritis', 'Axial Disease', 'Enthesitis'],
    sections: [
      {
        title: 'The PsA Treatment Ladder',
        description: 'Most people with PsA begin with anti-inflammatories and traditional medications like methotrexate before moving to advanced therapies if needed.',
        patientTip: 'Methotrexate is often one of the first medications tried for PsA. If it isn\'t controlling your joint symptoms, that\'s an important thing to raise with your doctor.',
        checkpoints: [
          'Honestly assess how well your current PsA medication is controlling joint pain and stiffness',
          'Ask your doctor about methotrexate and other traditional systemic options',
          'Discuss whether it\'s time to explore biologic or targeted therapies'
        ],
        integratedLinks: [
          { title: 'Treating Psoriatic Arthritis', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/' },
          { title: 'Methotrexate & Traditional Systemics', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/traditional-systemics/' }
        ]
      },
      {
        title: 'Advanced Therapies for PsA',
        description: 'When joint inflammation is more active, biologics and targeted therapies can help slow or stop joint damage.',
        patientTip: 'Biologics can seem intimidating at first, but they are designed to specifically target the immune response causing the damage in PsA.',
        checkpoints: [
          'Discuss your comfort level with injections or taking daily pills',
          'Ask exactly what PsA symptoms the suggested medication is meant to improve',
          'Make sure you understand what routine blood tests you will need while on a new drug'
        ],
        integratedLinks: [
          { title: 'Biologics & Biosimilars', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/biologics-and-biosimilars/' },
          { title: 'How Biologics & Biosimilars Work', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/how-biologics-and-biosimilars-work/' }
        ]
      }
    ],
    equityResources: [
      { title: 'Public Drug Plans by Province', url: 'https://arthritispatient.ca/en/public-drug-plan-information-by-province/', description: 'Province-by-province information on public drug plan coverage for arthritis medications.' },
      { title: 'Medication Access: Public Insurance', url: 'https://psoriasiscanada.ca/medication-access-overview/public-insurance/', description: 'A guide to navigating public drug insurance for psoriatic arthritis medications.' }
    ]
  },
  {
    id: 'decision',
    title: 'Shared Decision Making',
    shortDesc: 'Prepare for appointments and navigate insurance.',
    fullDesc: 'Medical appointments can be overwhelming. These tools help you arrive prepared, ask the right questions, and deal with insurance or financial roadblocks for your PsA care.',
    color: 'bg-decision',
    textColor: 'text-decision-foreground',
    icon: Users,
    milestone: {
      summary: 'You are the expert on your own life; your doctor is the expert on the medicine. Shared decision making brings both together.',
      expectation: 'Conversations with your doctor should treat your personal lifestyle preferences as seriously as your lab results.',
      emotionalGoal: 'Feeling truly empowered to advocate for the care that fits your life.',
      keyQuestion: "What if I can't afford or access my treatment?",
      doctorDiscussionGuide: {
        questionsToAsk: [
          "Can your clinic assist me with Patient Support Program enrollment?",
          "What happens if my insurance denies coverage for the biologic?",
          "Are there any bridging programs or compassionate care options available?"
        ],
        whatToBring: [
          "Your pharmacy's contact information",
          "Any letters of denial from your insurance company",
          "Tax forms or income verification (if applying for compassionate access)"
        ],
        redFlagsToMention: [
          "Inability to afford the co-pay for the prescribed medication",
          "Running out of medication before the next appointment",
          "Changes in your employment or insurance status"
        ]
      },
      journeyAids: [
        { title: 'Communicating with Your Healthcare Team', url: 'https://arthritispatient.ca/wp-content/uploads/2020/11/Communicating-with-Your-Healthcare-Team.2020.pdf', description: 'A worksheet to help you communicate clearly and confidently with your care team.', type: 'worksheet' },
        { title: 'Arthritis Resources in Canada', url: 'https://arthritispatient.ca/en/useful-resources/', description: 'A directory of tools and patient supports for people living with arthritis across Canada.', type: 'tool' }
      ]
    },
    whyItMatters: 'Coming prepared with your top concerns ensures that your most meaningful questions don\'t get swallowed up by routine clinic check-ups.',
    relatedDomainIds: ['Mental Health'],
    sections: [
      {
        title: 'Making the Most of Your Visit',
        description: 'Specialist appointments are usually brief. Proper preparation makes a huge difference in the care you receive for your PsA.',
        patientTip: 'Always prepare a "Top 3" list of concerns before walking into the clinic to ensure your biggest issues are addressed first.',
        checkpoints: [
          'Write down exactly what you hope to achieve during the visit',
          'Bring a printed or written log of your symptoms and recent flare-ups',
          'Never leave an appointment without knowing what the next steps are'
        ],
        integratedLinks: [
          { title: 'Making the Most Out of Your Appointment', url: 'https://arthritispatient.ca/en/how-to-make-the-most-out-of-your-appointment/' },
          { title: 'Setting Treatment Goals', url: 'https://psoriasiscanada.ca/treatment-decisions-overview/setting-your-goals/' }
        ]
      },
      {
        title: 'Navigating Coverage Barriers',
        description: 'Advanced PsA medications often require navigating insurance criteria or finding financial assistance to afford them.',
        patientTip: 'Many pharmaceutical companies offer Patient Support Programs (PSPs) which can guide you through insurance paperwork or help cover costs.',
        checkpoints: [
          'Check whether the therapy is covered by your private or public insurance',
          'You will be contacted by a Patient Support Program who can guide you on what insurance covers',
          'Keep copies of all your forms in case you need to appeal a coverage denial'
        ],
        integratedLinks: [
          { title: 'Medication Access Guide', url: 'https://psoriasiscanada.ca/medication-access-overview/' }
        ]
      }
    ],
    equityResources: [
      { title: 'Treatment Decisions Overview', url: 'https://psoriasiscanada.ca/treatment-decisions-overview/', description: 'A hub on making informed treatment decisions for psoriatic disease and PsA.' },
      { title: 'Assistive Devices for Home', url: 'https://arthritispatient.ca/en/assistive-devices-for-home/', description: 'An overview of assistive devices that make daily tasks at home more manageable.' }
    ]
  },
  {
    id: 'management',
    title: 'Long-term Management',
    shortDesc: 'Actively tracking and adjusting your routine.',
    fullDesc: 'Great PsA care doesn\'t just happen in the clinic. It happens at home when you learn to identify early signs of flares and adjust your routine to preserve your mobility.',
    color: 'bg-management',
    textColor: 'text-management-foreground',
    icon: Activity,
    milestone: {
      summary: 'Managing this condition is an ongoing, active process of monitoring, learning from your body, and adapting.',
      expectation: 'Your doctor will rely on you to report small changes between appointments to continuously fine-tune your treatment.',
      emotionalGoal: 'Developing resilience and taking back control of your day-to-day life.',
      keyQuestion: 'When should I contact my clinic?',
      doctorDiscussionGuide: {
        questionsToAsk: [
          "When I have a flare-up, should I adjust my medication dosage or wait?",
          "Are there specific lifestyle changes (e.g., movement, pacing) that might help reduce flares?",
          "What over-the-counter options are safe to use with my current prescriptions?"
        ],
        whatToBring: [
          "A log of your recent flare-ups and potential triggers",
          "A list of over-the-counter creams or painkillers you are using",
          "Any ergonomic concerns related to your work environment"
        ],
        redFlagsToMention: [
          "Flares that are becoming more frequent or severe",
          "New joints or areas of the body being affected",
          "Inability to perform daily activities due to pain or stiffness"
        ]
      },
      journeyAids: [
        { title: 'Managing Daily Life with Arthritis', url: 'https://arthritispatient.ca/managing-daily-life/', description: 'Practical support and tips for managing everyday tasks while living with arthritis.', type: 'tool' }
      ]
    },
    whyItMatters: 'Recognizing your own individual triggers helps you stay ahead of flares rather than constantly fighting them after they hit.',
    relatedDomainIds: ['Peripheral Arthritis', 'Enthesitis'],
    sections: [
      {
        title: 'Tracking Your Trends',
        description: 'Keeping track of your daily pain, mood, and triggers identifies patterns in your PsA you might otherwise miss.',
        patientTip: 'Consistent tracking is incredibly helpful for your rheumatologist to see if a medication is truly holding off your PsA symptoms.',
        checkpoints: [
          'Write down potential triggers (like stress or poor sleep) when a flare begins',
          'Take note of any unexplainable side effects you think your medication is causing',
          'Review your tracked symptoms a few days before your doctor\'s appointment'
        ],
        integratedLinks: [
          { title: 'Managing Pain and Fatigue', url: 'https://arthritispatient.ca/en/managing-pain-and-fatigue/' },
          { title: 'Working with Psoriatic Arthritis', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/living-with-psa-overview/working-with-psa/' }
        ]
      },
      {
        title: 'Protecting Your Joints',
        description: 'Simple adjustments to how you move and work can dramatically reduce daily PsA pain and exhaustion.',
        patientTip: 'An occupational therapist is an amazing resource. They can teach you clever joint protection techniques that make daily chores easier.',
        checkpoints: [
          'Ask your workplace for ergonomic tools (like specialized keyboards or chairs)',
          'Listen to your body and pace your energy; don\'t push through severe fatigue',
          'Try incorporating low-impact movement like swimming or stationary biking into your week'
        ],
        integratedLinks: [
          { title: 'The Role of an Occupational Therapist', url: 'https://arthritispatient.ca/en/the-role-of-an-occupational-therapist-ot-to-support-people-living-with-arthritis/' }
        ]
      }
    ],
    equityResources: [
      { title: 'Psoriatic Disease and Fatigue', url: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/psoriasis-and-fatigue', description: 'A guide to recognizing and managing fatigue as part of life with psoriatic disease.' }
    ]
  },
  {
    id: 'holistic',
    title: 'Holistic Care & Related Conditions',
    shortDesc: 'Looking beyond just the joints.',
    fullDesc: 'Because psoriatic arthritis is driven by the immune system, it can affect your whole body. This means paying attention to your heart, energy levels, and how PsA fits into your daily life.',
    color: 'bg-holistic',
    textColor: 'text-holistic-foreground',
    icon: HeartPulse,
    milestone: {
      summary: 'We must treat you as a whole person—not just a collection of aching joints.',
      expectation: 'Your care team should discuss broader health topics like fatigue, heart health, and how to manage stress alongside your main PsA symptoms.',
      emotionalGoal: 'Feeling truly seen and cared for as an entire person.',
      keyQuestion: 'How does PsA-related inflammation impact my long-term health?',
      doctorDiscussionGuide: {
        questionsToAsk: [
          "Based on my PsA, am I at higher risk for heart disease or diabetes?",
          "Should I be getting regular bloodwork to monitor my lipids and blood sugar?",
          "Can you refer me to a specialist (e.g., dietitian, cardiologist) for preventative care?"
        ],
        whatToBring: [
          "Recent lab results from your family doctor",
          "A log of your blood pressure readings if you track them",
          "Family history of cardiovascular or metabolic diseases"
        ],
        redFlagsToMention: [
          "Unexplained fatigue or energy crashes",
          "New symptoms like chest pain or shortness of breath",
          "Unexpected weight changes"
        ]
      },
      journeyAids: [
        { title: 'Reproductive & Sexual Health Report', url: 'https://arthritispatient.ca/wp-content/uploads/2021/09/Report_Final_English-1.pdf', description: 'A survey report on reproductive and sexual health for people with inflammatory, rheumatic, and psoriatic diseases.', type: 'worksheet' }
      ]
    },
    whyItMatters: 'Managing PsA inflammation holistically can lower your risk for related conditions like heart disease or diabetes.',
    relatedDomainIds: ['Cardiovascular Health', 'Mental Health'],
    sections: [
      {
        title: 'Heart and Energy Health',
        description: 'Persistent PsA inflammation takes a toll on your systemic health, particularly your cardiovascular system and energy reserves.',
        patientTip: 'Extreme, unexplainable tiredness is a genuine symptom of inflammation. Don\'t dismiss your fatigue as just "being busy."',
        checkpoints: [
          'Ask your doctor for routine blood pressure and cholesterol checks',
          'Talk to your doctor about your risk factors for heart disease',
          'Keep a diary tracking your energy crashes and fatigue levels'
        ],
        integratedLinks: [
          { title: 'Conditions Associated With Psoriatic Disease', url: 'https://psoriasiscanada.ca/associated-conditions-overview/' },
          { title: 'Living With Psoriatic Disease', url: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/' }
        ]
      },
      {
        title: 'Life Transitions',
        description: 'Your PsA care needs will change whether you are a young adult, navigating pregnancy, switching careers, or getting older.',
        patientTip: 'Your personal goals matter. Make sure your doctor knows if you are planning to have kids, starting a physical job, or retiring.',
        checkpoints: [
          'Discuss your family planning goals to ensure your medications are safe',
          'If you are a teen or young adult, ask about transitioning from pediatric to adult care',
          'Review how well your daily routine accommodates your mobility needs'
        ],
        integratedLinks: [
          { title: 'Youth & Young Adults with Rheumatic Disease', url: 'https://arthritispatient.ca/en/youth-and-young-adults-with-rheumatic-disease/' },
          { title: 'Pregnancy and Parenting with Arthritis', url: 'https://arthritispatient.ca/en/pregnancy-and-parenting-with-arthritis-a-resource-for-patients-by-patients/' }
        ]
      }
    ],
    equityResources: [
      { title: 'Children & Youth With Psoriasis', url: 'https://psoriasiscanada.ca/about-psoriasis/pediatirc-psoriasis/', description: 'Psoriasis Canada\'s guide for families navigating psoriatic disease in children and youth.' }
    ]
  },
  {
    id: 'psychosocial',
    title: 'Psychosocial Support',
    shortDesc: 'Protecting your mental health and identity.',
    fullDesc: 'Living with psoriatic arthritis can be exhausting emotionally. This domain focuses on your mental well-being, relationships, and protecting your sense of self while living with PsA.',
    color: 'bg-psychosocial',
    textColor: 'text-psychosocial-foreground',
    icon: Heart,
    milestone: {
      summary: 'Your psychological strength is just as foundational to your well-being as your physical treatments.',
      expectation: 'Your care plan should involve strategies for the emotional weight, the relationship impacts, and the career challenges PsA can bring.',
      emotionalGoal: 'Refocusing on your identity and nurturing deep connections with those who understand.',
      keyQuestion: 'What mental health resources can support me?',
      doctorDiscussionGuide: {
        questionsToAsk: [
          "Do you have a list of therapists or counselors who specialize in chronic illness?",
          "Could my PsA treatment be contributing to mood changes?",
          "Are there local or online support groups you recommend?"
        ],
        whatToBring: [
          "Notes on how your mood has affected your sleep or appetite",
          "Any self-assessment questionnaires for anxiety or depression you've completed",
          "Questions from your family members or caregivers"
        ],
        redFlagsToMention: [
          "Feeling overwhelmed or hopeless about your condition",
          "Social isolation or withdrawing from activities you enjoy",
          "Difficulty coping with the stress of managing your health"
        ]
      },
      journeyAids: [
        { title: 'CAPA Peer Support Network', url: 'https://arthritispatient.ca/en/', description: 'Connect with other patients navigating similar challenges.', type: 'community' }
      ]
    },
    whyItMatters: 'Acknowledging the emotional toll of PsA is the first step toward getting the right support and preventing burnout.',
    relatedDomainIds: ['Mental Health'],
    sections: [
      {
        title: 'Guarding Your Mental Health',
        description: 'There is a heavy invisible burden to carrying psoriatic arthritis. Anxiety and depression are common and treatable.',
        patientTip: 'Protecting your mental health is not a luxury—it is an essential, undeniable part of managing psoriatic arthritis safely.',
        checkpoints: [
          'Ask your clinic if they can refer you to a counselor familiar with chronic illness',
          'Seek out an online or local patient support group so you don\'t feel alone',
          'Practice how you want to talk about your condition with friends or family'
        ],
        integratedLinks: [
          { title: 'Coping with Your Arthritis', url: 'https://arthritispatient.ca/wp-content/uploads/2018/07/Coping_with_your_Arthritis_Final.pdf' },
          { title: 'PsA & Relationships', url: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/psoriasis-and-relationships/' }
        ]
      },
      {
        title: 'Thriving at Work and School',
        description: 'You should not have to sacrifice your goals because of PsA. Accommodations and community support can help you succeed.',
        patientTip: 'Connecting with others who understand can ease the isolation that often comes with a chronic condition.',
        checkpoints: [
          'Research your employer\'s policies on disability or medical leave accommodations',
          'If you are a student, connect with your school\'s accessibility services office',
          'Make dedicated time for hobbies and passions that remind you of who you are beyond PsA'
        ],
        integratedLinks: [
          { title: 'Pso Intimate', url: 'https://psoriasiscanada.ca/resources/pso-intimate/' }
        ]
      }
    ],
    equityResources: [
      { title: 'Arthritis in the Workplace', url: 'https://arthritispatient.ca/arthritis-in-the-workplace-resources-for-patients-by-patients/', description: 'A patient-built resource on navigating work and accommodations while living with arthritis.' }
    ]
  }
];
