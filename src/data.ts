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
  whyItMatters: string; // Replaced keyImplication
  relatedDomainIds?: string[];
  resources?: {
    id: string;
    title: string;
    url: string;
  }[];
  equityResources?: {
    title: string;
    url: string;
    description: string;
  }[];
}

export const clinicalDomains: ClinicalDomain[] = [
  {
    name: 'Peripheral Arthritis',
    desc: 'Joints in arms/legs',
    icon: Move,
    resourceTitle: 'PsA Symptoms',
    resourceUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/',
    secondaryTitle: 'Psoriasis vs PsA',
    secondaryUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/difference-between-psa-and-ra/'
  },
  {
    name: 'Axial Disease',
    desc: 'Spine and sacroiliac joints',
    icon: AlignCenter,
    resourceTitle: 'PsA Symptoms',
    resourceUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/',
    secondaryTitle: 'Psoriasis vs PsA',
    secondaryUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/difference-between-psa-and-ra/'
  },
  {
    name: 'Enthesitis',
    desc: 'Tendon & ligament inflammation',
    icon: Anchor,
    resourceTitle: 'PsA Symptoms',
    resourceUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/'
  },
  {
    name: 'Dactylitis',
    desc: 'Sausage-like digit swelling',
    icon: Hand,
    resourceTitle: 'PsA Symptoms',
    resourceUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/'
  },
  {
    name: 'Skin Psoriasis',
    desc: 'Plaques and itch',
    icon: Layers,
    resourceTitle: 'Psoriasis Severity',
    resourceUrl: 'https://psoriasiscanada.ca/about-psoriasis/severity/',
    secondaryTitle: 'Common Triggers',
    secondaryUrl: 'https://psoriasiscanada.ca/about-psoriasis/risk-factors-and-triggers/'
  },
  {
    name: 'Nail Disease',
    desc: 'Pitting and nail separation',
    icon: Fingerprint,
    resourceTitle: 'PsA Symptoms',
    resourceUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/'
  },
  {
    name: 'Cardiovascular Health',
    desc: 'Heart and circulation',
    icon: HeartPulse,
    resourceTitle: 'Associated Conditions',
    resourceUrl: 'https://psoriasiscanada.ca/associated-conditions-overview/',
    secondaryTitle: 'PsA Comorbidities',
    secondaryUrl: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/'
  },
  {
    name: 'Mental Health',
    desc: 'Anxiety and depression',
    icon: Brain,
    resourceTitle: 'Psoriasis & Emotions',
    resourceUrl: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/',
    secondaryTitle: 'Psoriasis & Relationships',
    secondaryUrl: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/psoriasis-and-relationships/'
  }
];

export const protocols: Protocol[] = [
  {
    id: 'diagnosis',
    title: 'Diagnosis & Assessment',
    shortDesc: 'Understand what you are experiencing.',
    fullDesc: 'Getting clarity on your symptoms is the first step. This guide helps you identify your specific skin and joint symptoms so you can clearly communicate them to your doctor.',
    color: 'bg-diagnosis',
    textColor: 'text-diagnosis-foreground',
    icon: Stethoscope,
    milestone: {
      summary: 'Finding clarity and a name for what you are feeling is an incredibly important first step.',
      expectation: 'Your doctor will likely examine your skin and joints and ask detailed questions about when and where you feel pain or notice changes.',
      emotionalGoal: 'Moving from uncertainty to understanding.',
      keyQuestion: 'How does psoriasis affect my joints?',
      doctorDiscussionGuide: {
        questionsToAsk: [
          "Could my joint pain/stiffness be related to my psoriasis?",
          "Are there specific tests or X-rays we should do to check for joint damage?",
          "How can we differentiate between osteoarthritis and psoriatic arthritis in my case?"
        ],
        whatToBring: [
          "Your completed Symptom Tracking Diary",
          "Photos of your skin/nail changes when they were at their worst",
          "A list of your current medications and supplements"
        ],
        redFlagsToMention: [
          "Dactylitis (sausage-like swelling in fingers or toes)",
          "Morning stiffness lasting longer than 30 minutes",
          "Nail pitting or separation"
        ]
      },
      journeyAids: [{ title: 'Symptom Tracking Diary', url: 'https://arthritispatient.ca/en/giving-patients-control-new-resource-know-your-numbers-trends/', description: 'Downloadable worksheet to log daily symptoms before your next visit.', type: 'worksheet' }, { title: 'PsA Symptom Guide', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/', description: 'Plain-language overview of the symptoms that point to early PsA.', type: 'tool' }]
    },
    whyItMatters: 'Translating vague discomfort into specific terms helps your doctor reach an accurate diagnosis much faster.',
    relatedDomainIds: ['Skin Psoriasis', 'Nail Disease', 'Peripheral Arthritis'],
    sections: [
      {
        title: 'Spotting Joint Involvement',
        description: 'Psoriatic arthritis often starts quietly. Learn the subtle signs that inflammation has reached your joints.',
        patientTip: 'Pay close attention to "morning stiffness." If it takes more than 30 minutes to get moving in the morning, definitely tell your doctor.',
        checkpoints: [
          'Notice if your joints feel unusually stiff after resting',
          'Check your fingernails and toenails for small dents or separating from the nail bed',
          'Note any deep, aching pain in your lower back or buttocks'
        ],
        integratedLinks: [
          { title: 'Symptoms of Psoriatic Arthritis', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/' },
          { title: 'Difference Between Psoriasis and PsA', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/difference-between-psa-and-ra/' }
        ]
      },
      {
        title: 'Measuring Skin Impact',
        description: 'Doctors use specific scales to measure how much of your body is affected by psoriasis.',
        patientTip: 'A handy trick: the size of your palm represents roughly 1% of your body surface area. This helps you estimate the spread.',
        checkpoints: [
          'Estimate your Body Surface Area (BSA) using the "palm method"',
          'Reflect on how your skin symptoms limit your daily activities or clothing choices',
          'Ask your doctor about your PASI score, a standard measurement they use'
        ],
        integratedLinks: [
          { title: 'Understanding Psoriasis Severity', url: 'https://psoriasiscanada.ca/about-psoriasis/severity/' },
          { title: 'Learn About the PASI Score', url: 'https://psoriasiscanada.ca/about-psoriasis/pasi-score/' }
        ]
      }
    ],
    resources: [
      { id: 'R-028', title: 'Symptoms of Psoriatic Arthritis', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/symptoms-diagnosis/' },
      { id: 'R-033', title: 'Difference Between Psoriasis and PsA', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/difference-between-psa-and-ra/' },
      { id: 'R-003', title: 'Understanding Psoriasis Severity', url: 'https://psoriasiscanada.ca/about-psoriasis/severity/' },
      { id: 'R-004', title: 'Learn About the PASI Score', url: 'https://psoriasiscanada.ca/about-psoriasis/pasi-score/' }
    ],
    equityResources: [
      { title: 'Lived Experience Infographic', url: 'https://arthritispatient.ca/wp-content/uploads/2025/12/Lived-Experience-Nov-2025-Infographic-Final-1.pdf', description: 'Plain-language infographic capturing what daily life with arthritis actually looks like, told through real patient voices.' },
      { title: 'Arthritis Patient Charter', url: 'https://arthritispatient.ca/en/arthritis-patient-charter', description: 'Know your rights as a patient — a charter outlining the care, respect, and access every Canadian arthritis patient is entitled to.' }
    ]
  },
  {
    id: 'holistic',
    title: 'Holistic Care & Comorbidities',
    shortDesc: 'Looking beyond just the skin and joints.',
    fullDesc: 'Because psoriatic disease is deeply tied to the immune system, it affects your entire body. This means paying attention to your heart, energy levels, and how the condition fits into your daily life.',
    color: 'bg-holistic',
    textColor: 'text-holistic-foreground',
    icon: HeartPulse,
    milestone: {
      summary: 'We must treat you as a whole person—not just a collection of skin plaques and aching joints.',
      expectation: 'Your care team should discuss broader health topics like fatigue, heart health, and how to manage stress alongside your main symptoms.',
      emotionalGoal: 'Feeling truly seen and cared for as an entire person.',
      keyQuestion: 'How does inflammation impact my long-term health?',
      doctorDiscussionGuide: {
        questionsToAsk: [
          "Based on my psoriasis, am I at higher risk for heart disease or diabetes?",
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
      journeyAids: [{ title: 'Conditions Associated With Psoriasis', url: 'https://psoriasiscanada.ca/associated-conditions-overview/', description: 'Overview of related health conditions to watch for.', type: 'tool' }, { title: 'PsA Comorbidities', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/', description: 'Guide on cardiovascular, metabolic, and inflammatory overlap.', type: 'video' }]
    },
    whyItMatters: 'Managing inflammation holistically can drastically lower your risk for other health conditions like heart disease or diabetes.',
    relatedDomainIds: ['Cardiovascular Health', 'Mental Health'],
    sections: [
      {
        title: 'Heart and Energy Health',
        description: 'Persistent inflammation takes a toll on your systemic health, particularly your cardiovascular system and energy reserves.',
        patientTip: 'Extreme, unexplainable tiredness is a genuine symptom of inflammation. Don\'t dismiss your fatigue as just "being busy."',
        checkpoints: [
          'Ask your doctor for routine blood pressure and cholesterol checks',
          'Talk to your doctor about your risk factors for heart disease',
          'Keep a diary tracking your energy crashes and fatigue levels'
        ],
        integratedLinks: [
          { title: 'Conditions Associated With Psoriasis', url: 'https://psoriasiscanada.ca/associated-conditions-overview/' },
          { title: 'Comorbidities of Psoriatic Arthritis', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/' }
        ]
      },
      {
        title: 'Life Transitions',
        description: 'Your care needs will change whether you are navigating pregnancy, switching careers, or simply getting older.',
        patientTip: 'Your personal goals matter. Make sure your doctor knows if you are planning to have kids, starting a physical job, or retiring.',
        checkpoints: [
          'Discuss your family planning goals to ensure your medications are safe',
          'Talk to your care team if you are transitioning from pediatric to adult care',
          'Review how well your daily routine accommodates your mobility needs'
        ],
        integratedLinks: [
          { title: 'Children and Youth With Psoriasis', url: 'https://psoriasiscanada.ca/about-psoriasis/pediatirc-psoriasis/' },
          { title: 'Pregnancy and Parenting with Arthritis', url: 'https://arthritispatient.ca/en/pregnancy-and-parenting-with-arthritis-a-resource-for-patients-by-patients/' }
        ]
      }
    ],
    resources: [
      { id: 'R-086', title: 'Conditions Associated With Psoriasis', url: 'https://psoriasiscanada.ca/associated-conditions-overview/' },
      { id: 'R-039', title: 'Comorbidities of Psoriatic Arthritis', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/' },
      { id: 'R-087', title: 'Children and Youth With Psoriasis', url: 'https://psoriasiscanada.ca/about-psoriasis/pediatirc-psoriasis/' },
      { id: 'R-126', title: 'Pregnancy and Parenting with Arthritis', url: 'https://arthritispatient.ca/en/pregnancy-and-parenting-with-arthritis-a-resource-for-patients-by-patients/' }
    ],
    equityResources: [
      { title: 'Reproductive & Sexual Health Survey Report', url: 'https://arthritispatient.ca/wp-content/uploads/2021/09/Report_Final_English-1.pdf', description: 'Final report from a survey on reproductive and sexual health in women+ with inflammatory arthritis, rheumatic, and psoriatic diseases.' },
      { title: 'Pregnancy & Parenting with Arthritis', url: 'https://arthritispatient.ca/en/pregnancy-and-parenting-with-arthritis-a-resource-for-patients-by-patients/', description: 'A patient-built guide for navigating pregnancy, postpartum, and parenting while managing arthritis — written by people who\'ve lived it.' }
    ]
  },
  {
    id: 'treatment',
    title: 'Treatment Options',
    shortDesc: 'Navigate your medication options.',
    fullDesc: 'From creams and light therapy to advanced biologics, understanding the treatment ladder empowers you to have better conversations about what\'s next.',
    color: 'bg-treatment',
    textColor: 'text-treatment-foreground',
    icon: Pill,
    milestone: {
      summary: 'Choosing the right treatment is a partnership. Together with your doctor, you can find a plan that balances relief and lifestyle.',
      expectation: 'Your doctor should explain the "treatment ladder" and discuss the trade-offs of switching from creams to pills or injections.',
      emotionalGoal: 'Gaining the confidence that your treatment choice is the best one for you.',
      keyQuestion: 'What are my treatment goals?',
      doctorDiscussionGuide: {
        questionsToAsk: [
          "What are the most common side effects of this proposed treatment?",
          "How long generally does it take to see a noticeable improvement?",
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
      journeyAids: [{ title: 'Treating Psoriatic Arthritis', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/', description: 'Overview of PsA treatment paths and trade-offs.', type: 'tool' }, { title: 'PsA Oral Therapies', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/biologics-and-biosimilars/', description: 'What to expect from oral systemic medications.', type: 'worksheet' }]
    },
    whyItMatters: 'Knowing what treatments are out there prevents you from giving up when a single medication stops working.',
    relatedDomainIds: ['Peripheral Arthritis', 'Axial Disease', 'Skin Psoriasis'],
    sections: [
      {
        title: 'The Psoriasis Care Ladder',
        description: 'Most patients begin with topical treatments before moving to more advanced therapies if needed.',
        patientTip: 'If your current creams are no longer keeping the itch and redness at bay, it may be time to ask about systemic oral medications.',
        checkpoints: [
          'Honestly assess how well your current creams or ointments are working',
          'Ask your doctor if phototherapy (light therapy) is a viable option for you',
          'Discuss with your doctor if it\'s time to explore oral or biologic treatments'
        ],
        integratedLinks: [
          { title: 'Treating Psoriasis: Topical Therapies', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/topicals/' },
          { title: 'Treating Psoriasis: Systemic Therapies', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/traditional-systemics/' }
        ]
      },
      {
        title: 'Advanced Therapies for PsA',
        description: 'When joint pain is severe, biologics and targeted therapies can help stop joint damage in its tracks.',
        patientTip: 'Biologics can seem intimidating at first, but they are designed to specifically target the immune response causing the damage.',
        checkpoints: [
          'Discuss your comfort level with injections or taking daily pills',
          'Ask exactly what symptoms the suggested medication is supposed to improve',
          'Make sure you understand what routine blood tests you will need while on a new drug'
        ],
        integratedLinks: [
          { title: 'Treating Psoriatic Arthritis', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/' },
          { title: 'PsA Oral Therapies', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/biologics-and-biosimilars/' }
        ]
      }
    ],
    resources: [
      { id: 'R-048', title: 'Treating Psoriasis: Topical Therapies', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/topicals/' },
      { id: 'R-049', title: 'Treating Psoriasis: Systemic Therapies', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/traditional-systemics/' },
      { id: 'R-051', title: 'Treating Psoriatic Arthritis', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/' },
      { id: 'R-052', title: 'PsA Oral Therapies', url: 'https://psoriasiscanada.ca/treatments-treating-pso-and-psa-overview/biologics-and-biosimilars/' }
    ],
    equityResources: [
      { title: 'Public Drug Plans by Province', url: 'https://arthritispatient.ca/en/public-drug-plan-information-by-province/', description: 'Province-by-province information on public drug plan coverage for arthritis medications.' },
      { title: 'Medication Access: Public Insurance', url: 'https://psoriasiscanada.ca/medication-access-overview/public-insurance/', description: 'Psoriasis Canada\'s guide to navigating public drug insurance for psoriasis and PsA medications.' }
    ]
  },
  {
    id: 'decision',
    title: 'Shared Decision Making',
    shortDesc: 'Prepare for appointments and navigate insurance.',
    fullDesc: 'Medical appointments can be overwhelming. These tools help you arrive prepared, ask the right questions, and deal with insurance or financial roadblocks.',
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
      journeyAids: [{ title: 'Appointment Prep Checklist', url: 'https://arthritispatient.ca/en/how-to-make-the-most-out-of-your-appointment/', description: 'A 1-page guide on top questions to ask your doctor.', type: 'worksheet' }, { title: 'Medication Access Guide', url: 'https://psoriasiscanada.ca/medication-access-overview/', description: 'Step-by-step guide on securing drug coverage.', type: 'tool' }]
    },
    whyItMatters: 'Coming prepared with your top concerns ensures that your most meaningful questions don\'t get swallowed up by routine clinic check-ups.',
    relatedDomainIds: ['Mental Health'],
    sections: [
      {
        title: 'Making the Most of Your Visit',
        description: 'Specialist appointments are usually brief. Proper preparation makes a huge difference in the care you receive.',
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
        description: 'Advanced medications often require navigating insurance criteria or finding financial assistance to afford them.',
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
    resources: [
      { id: 'R-110', title: 'Making the Most Out of Your Appointment', url: 'https://arthritispatient.ca/en/how-to-make-the-most-out-of-your-appointment/' },
      { id: 'R-096', title: 'Setting Treatment Goals', url: 'https://psoriasiscanada.ca/treatment-decisions-overview/setting-your-goals/' },
      { id: 'R-055', title: 'Medication Access Guide', url: 'https://psoriasiscanada.ca/medication-access-overview/' }
    ],
    equityResources: [
      { title: 'Treatment Decisions Overview', url: 'https://psoriasiscanada.ca/treatment-decisions-overview/', description: 'Psoriasis Canada\'s hub on making informed treatment decisions for psoriasis and PsA.' },
      { title: 'Communicating with Your Healthcare Team', url: 'https://arthritispatient.ca/wp-content/uploads/2020/11/Communicating-with-Your-Healthcare-Team.2020.pdf', description: 'CAPA guide on how to communicate effectively with your healthcare team.' }
    ]
  },
  {
    id: 'management',
    title: 'Long-term Management',
    shortDesc: 'Actively tracking and adjusting your routine.',
    fullDesc: 'Great care doesn\'t just happen in the clinic. It happens at home when you learn to identify early signs of flares and adjust your routine to preserve your mobility.',
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
          "Are there specific lifestyle changes (e.g., diet, exercise) that might help reduce flares?",
          "What over-the-counter options are safe to use with my current prescriptions?"
        ],
        whatToBring: [
          "A log of your recent flare-ups and potential triggers",
          "A list of over-the-counter creams or painkillers you are using",
          "Any ergonomic concerns related to your work environment"
        ],
        redFlagsToMention: [
          "Flares that are becoming more frequent or severe",
          "New areas of the body being affected",
          "Inability to perform daily activities due to pain or stiffness"
        ]
      },
      journeyAids: [{ title: 'Flare Action Plan Template', url: 'https://arthritispatient.ca/en/giving-patients-control-new-resource-know-your-numbers-trends/', description: 'Template to fill out with your doctor on what to do during a flare.', type: 'worksheet' }]
    },
    whyItMatters: 'Recognizing your own individual triggers helps you stay ahead of flares rather than constantly fighting them after they hit.',
    relatedDomainIds: ['Peripheral Arthritis', 'Nail Disease'],
    sections: [
      {
        title: 'Tracking Your Trends',
        description: 'Keeping track of your daily pain, mood, and triggers identifies patterns you might otherwise miss.',
        patientTip: 'Consistent tracking is incredibly helpful for your rheumatologist to see if a medication is truly holding off your symptoms.',
        checkpoints: [
          'Write down potential triggers (like stress or diet) when a flare begins',
          'Take note of any unexplainable side effects you think your medication is causing',
          'Review your tracked symptoms a few days before your doctor\'s appointment'
        ],
        integratedLinks: [
          { title: 'Know Your Numbers & Trends Tracker', url: 'https://arthritispatient.ca/en/giving-patients-control-new-resource-know-your-numbers-trends/' },
          { title: 'Common Psoriasis Triggers', url: 'https://psoriasiscanada.ca/about-psoriasis/risk-factors-and-triggers/' }
        ]
      },
      {
        title: 'Protecting Your Joints',
        description: 'Simple adjustments to how you move and work can dramatically reduce daily pain and exhaustion.',
        patientTip: 'An occupational therapist is an amazing resource. They can teach you clever joint protection techniques that make daily chores easier.',
        checkpoints: [
          'Ask your workplace for ergonomic tools (like specialized keyboards or chairs)',
          'Listen to your body and pace your energy; don\'t push through severe fatigue',
          'Try incorporating low-impact movement like swimming or stationary biking into your week'
        ],
        integratedLinks: [
          { title: 'Managing Pain and Fatigue', url: 'https://arthritispatient.ca/en/managing-pain-and-fatigue/' },
          { title: 'The Role of an Occupational Therapist', url: 'https://arthritispatient.ca/en/the-role-of-an-occupational-therapist-ot-to-support-people-living-with-arthritis/' }
        ]
      }
    ],
    resources: [
      { id: 'R-111', title: 'Know Your Numbers & Trends Tracker', url: 'https://arthritispatient.ca/en/giving-patients-control-new-resource-know-your-numbers-trends/' },
      { id: 'R-002', title: 'Common Psoriasis Triggers', url: 'https://psoriasiscanada.ca/about-psoriasis/risk-factors-and-triggers/' },
      { id: 'R-135', title: 'Managing Pain and Fatigue', url: 'https://arthritispatient.ca/en/managing-pain-and-fatigue/' },
      { id: 'R-139', title: 'The Role of an Occupational Therapist', url: 'https://arthritispatient.ca/en/the-role-of-an-occupational-therapist-ot-to-support-people-living-with-arthritis/' }
    ],
    equityResources: [
      { title: 'Working with Psoriatic Arthritis', url: 'https://psoriasiscanada.ca/psoriatic-arthritis-what-is-psa-overview/living-with-psa-overview/working-with-psa/', description: 'Psoriasis Canada\'s guide to managing PsA in the workplace and navigating accommodations.' },
      { title: 'Assistive Devices for Home', url: 'https://arthritispatient.ca/en/assistive-devices-for-home/', description: 'CAPA overview of assistive devices that make daily tasks at home more manageable.' }
    ]
  },
  {
    id: 'psychosocial',
    title: 'Psychosocial Support',
    shortDesc: 'Protecting your mental health and identity.',
    fullDesc: 'Living with a chronic condition can be exhausting emotionally. This domain focuses on your mental well-being, relationships, and protecting your sense of self.',
    color: 'bg-psychosocial',
    textColor: 'text-psychosocial-foreground',
    icon: Heart,
    milestone: {
      summary: 'Your psychological strength is just as foundational to your well-being as your physical treatments.',
      expectation: 'Your care plan should involve strategies for the emotional weight, the relationship impacts, and the career challenges you face.',
      emotionalGoal: 'Refocusing on your identity and nurturing deep connections with those who understand.',
      keyQuestion: 'What mental health resources can support me?',
      doctorDiscussionGuide: {
        questionsToAsk: [
          "Do you have a list of therapists or counselors who specialize in chronic illness?",
          "Could my medical treatment be contributing to mood changes?",
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
      journeyAids: [{ title: 'CAPA Peer Support Network', url: 'https://arthritispatient.ca/en/', description: 'Connect with other patients navigating similar challenges.', type: 'community' }, { title: 'Mental Health in Chronic Illness', url: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/psoriasis-and-relationships/', description: 'Tools and seminars focusing on emotional well-being.', type: 'video' }]
    },
    whyItMatters: 'Acknowledging the emotional toll of chronic disease is the first step toward getting the right support and preventing burnout.',
    relatedDomainIds: ['Mental Health'],
    sections: [
      {
        title: 'Guarding Your Mental Health',
        description: 'There is a heavy invisible burden to carrying a chronic disease. Anxiety and depression are common and treatable.',
        patientTip: 'Protecting your mental health is not a luxury—it is an essential, undeniable part of managing psoriatic disease safely.',
        checkpoints: [
          'Ask your clinic if they can refer you to a counselor familiar with chronic illness',
          'Seek out an online or local patient support group so you don\'t feel alone',
          'Practice how you want to talk about your condition with friends or family'
        ],
        integratedLinks: [
          { title: 'Psoriasis and Your Emotions', url: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/' },
          { title: 'Psoriasis and Relationships', url: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/psoriasis-and-relationships/' }
        ]
      },
      {
        title: 'Thriving at Work and School',
        description: 'You should not have to sacrifice your professional goals. Accommodations exist to help you succeed.',
        patientTip: 'You are legally entitled to reasonable accommodations, like standing desks or flexible hours during severe flare-ups.',
        checkpoints: [
          'Research your employer\'s policies on disability or medical leave accommodations',
          'If you are a student, connect with your school\'s accessibility services office',
          'Make dedicated time for hobbies and passions that remind you of who you are beyond the disease'
        ],
        integratedLinks: [
          { title: 'Youth and Young Adults with Rheumatic Disease', url: 'https://arthritispatient.ca/en/youth-and-young-adults-with-rheumatic-disease/' }
        ]
      }
    ],
    resources: [
      { id: 'R-016', title: 'Psoriasis and Your Emotions', url: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/' },
      { id: 'R-024', title: 'Psoriasis and Relationships', url: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/psoriasis-and-relationships/' },
      { id: 'R-123', title: 'Youth and Young Adults with Rheumatic Disease', url: 'https://arthritispatient.ca/en/youth-and-young-adults-with-rheumatic-disease/' }
    ],
    equityResources: [
      { title: 'Pso Intimate', url: 'https://psoriasiscanada.ca/resources/pso-intimate/', description: 'Psoriasis Canada\'s resource on intimacy, relationships, and sexual health while living with psoriatic disease.' },
      { title: 'Psoriasis and Fatigue', url: 'https://psoriasiscanada.ca/living-with-psoriatic-disease/psoriasis-and-fatigue', description: 'Psoriasis Canada\'s guide to recognizing and managing fatigue as part of life with psoriatic disease.' }
    ]
  }
];

