export default {
  objectives: [
    'Recognise and describe initial management of head injuries and stroke',
    'Describe the causes, recognition, and management of seizures, epilepsy, and convulsions',
    'Identify common presentations of mental illness relevant to the diving environment',
    'Describe management of syncope, crush injuries, and common minor illnesses',
    'Recognise dangerous marine animal injuries and describe appropriate first aid',
    'Describe HPNS, compression arthralgia, and underwater blast injury',
  ],
  prerequisites: [],
  preBrief: {
    haveReady: [
      'ABCDE framework notes from O1.4',
      'Pen and paper',
    ],
    keyTerms: [
      { term: 'GCS', definition: 'Glasgow Coma Scale: Eyes (1-4) + Verbal (1-5) + Motor (1-6). GCS 15 = normal, GCS ≤ 8 = cannot protect airway' },
      { term: 'FAST', definition: 'Face drooping, Arm weakness, Speech slurred, Time to act — stroke recognition tool' },
      { term: 'Rhabdomyolysis', definition: 'Breakdown of muscle tissue releasing toxins into the blood — a complication of crush injury' },
      { term: 'HPNS', definition: 'High Pressure Nervous Syndrome — tremor and neurological symptoms at deep depths (>150 msw)' },
    ],
    thinkAbout: [
      'How would you distinguish between a stroke and DCI in a diver who has just surfaced?',
      'Why should you never immediately release a limb that has been trapped for a prolonged period?',
    ],
  },
  sections: [
    { type: 'paragraph', text: 'This module covers a wide range of topics at recognition and initial management level. The unifying theme: recognise the condition, stabilise with ABCDE, and get physician input. You do not need to diagnose — you need to recognise that something is wrong and act.' },

    { type: 'heading', level: 2, text: 'Head Injuries and Stroke' },

    { type: 'heading', level: 3, text: 'Head Injuries' },
    { type: 'table', headers: ['Recognition', 'Management'], rows: [
      ['Mechanism: fall, struck by object, blast', 'ABCDE: airway protection is the priority in low GCS'],
      ['Primary brain injury: at the moment of impact', 'Scalp wounds: profuse bleeding, control with direct pressure'],
      ['Secondary brain injury: swelling, bleeding, hypoxia afterwards', 'Position: head up 30 degrees if no spinal injury suspected'],
      ['GCS 15 = normal. GCS ≤ 8 = cannot protect own airway', 'Evacuate: all significant head injuries need hospital assessment'],
    ] },
    { type: 'paragraph', text: 'Skull fracture signs: Battle\'s sign (bruising behind the ear), racoon eyes (periorbital bruising), CSF leak from ear or nose. Raised intracranial pressure signs: Cushing response (hypertension combined with bradycardia).' },

    { type: 'heading', level: 3, text: 'Stroke and the DCI Differential' },
    { type: 'paragraph', text: 'FAST recognition: Face drooping, Arm weakness, Speech slurred, Time to act.' },
    { type: 'divingContext', title: 'Stroke vs DCI', text: 'Both stroke and DCI can present with sudden neurological deficit. A diver who surfaces with neuro symptoms could have either. The DMT does not need to make the diagnosis. Treat both urgently: oxygen, ABCDE, neurological examination, physician contact. Let the physician decide the treatment pathway.' },

    { type: 'heading', level: 2, text: 'Seizures, Epilepsy, and Convulsions' },
    { type: 'paragraph', text: 'Causes in diving context: O₂ toxicity, DCI, head injury, epilepsy, hypoglycaemia, febrile illness.' },
    { type: 'list', items: [
      'Tonic-clonic seizure: stiffening then rhythmic jerking, loss of consciousness',
      'Management: protect from injury, do not restrain, do not put anything in the mouth',
      'Time the seizure — most resolve spontaneously within 2-3 minutes',
      'After the seizure: recovery position, maintain airway, oxygen, assess for cause',
      'Status epilepticus: seizure lasting > 5 minutes — physician guidance for emergency medication',
      'All seizures in a diver require physician notification and investigation',
    ] },

    { type: 'heading', level: 2, text: 'Mental Illness in Diving' },
    { type: 'list', items: [
      'Stress and anxiety: common offshore — watch for withdrawal, irritability, sleep disruption',
      'Panic: acute onset, may occur during diving (dangerous underwater)',
      'Depression: low mood, loss of interest, fatigue, social withdrawal. Risk factors: isolation, shift patterns',
      'Psychosis: loss of contact with reality — rare but serious, safety is the priority',
      'Saturation factors: confined space, prolonged isolation, limited privacy, interpersonal friction',
    ] },
    { type: 'keyPoint', text: 'The DMT\'s role: recognise, support, and communicate with the physician. Do not attempt to diagnose. Do not dismiss or minimise. A colleague in distress deserves to be taken seriously.' },

    { type: 'heading', level: 2, text: 'Syncope and Crush Injuries' },

    { type: 'heading', level: 3, text: 'Syncope (Fainting)' },
    { type: 'list', items: [
      'Vasovagal: most common — standing, heat, pain, stress',
      'Postural: standing up too quickly after lying down',
      'Cardiac: arrhythmia, valvular disease (more sinister cause)',
      'Dehydration: common offshore in hot environments',
      'Management: lie flat, legs elevated, monitor, identify cause',
      'If not recovering or cardiac cause suspected: physician',
    ] },

    { type: 'heading', level: 3, text: 'Crush Injuries' },
    { type: 'list', items: [
      'Mechanism: limb trapped under heavy object for prolonged time',
      'Complications: rhabdomyolysis (muscle breakdown), hyperkalaemia (high potassium), renal failure',
      'Releasing a prolonged crush can cause cardiac arrest',
    ] },
    { type: 'keyPoint', title: 'Critical Warning', text: 'Do NOT release a crushed limb without preparation. Hyperkalaemia from muscle breakdown stops the heart. Get physician guidance BEFORE releasing the crush. IV fluids (large volumes) should be running before and during release.' },
    { type: 'paragraph', text: 'This is counterintuitive. Your instinct is to free the trapped person immediately. Resist that instinct and call the physician first.' },

    { type: 'heading', level: 2, text: 'Minor Illnesses, Dental, and Marine Animals' },

    { type: 'heading', level: 3, text: 'Common Minor Illnesses' },
    { type: 'table', headers: ['Presentation', 'The Saturation Challenge'], rows: [
      ['Seasickness: prevention and treatment', 'A minor illness on shore is a significant problem in saturation'],
      ['Skin conditions: dermatitis, fungal infections', 'Patient cannot be easily removed from the system'],
      ['GI problems: diarrhoea, constipation', 'Extended self-care under physician guidance may be needed'],
      ['Respiratory: common cold, fitness to dive implications', 'Prevention is better than treatment: hygiene protocols'],
      ['UTI: recognition, when to treat (physician guidance)', ''],
      ['Dental: pain relief, temp filling material, antibiotics', ''],
    ] },

    { type: 'heading', level: 3, text: 'Dangerous Marine Animals' },
    { type: 'list', items: [
      'Jellyfish stings: remove tentacles (do not rub), vinegar for box jellyfish, hot water for others',
      'Fish spine injuries (weeverfish, stonefish, lionfish): hot water immersion (as hot as bearable)',
      'Coral cuts: clean thoroughly — tend to become infected easily',
      'Severe envenomation: watch for anaphylaxis and treat as per the anaphylaxis algorithm if signs develop',
      'Management principles are more useful than species identification',
      'Prevention: awareness, protective clothing, local knowledge of hazards',
    ] },

    { type: 'heading', level: 2, text: 'HPNS, Compression Arthralgia, and Blast Injury' },
    { type: 'list', items: [
      'HPNS (High Pressure Nervous Syndrome): tremor, nausea, reduced performance at deep depths (>150 msw) — caused by helium effects on the nervous system, managed by slowing compression rate',
      'Compression arthralgia: joint pain during compression — usually self-limiting, simple analgesia',
      'Underwater blast injury: rare but serious — pressure wave travels through water',
      'Primary blast injuries affect: gut (most vulnerable), lungs, ears',
      'Management: ABCDE, suspect internal injuries even without external wounds',
    ] },

    { type: 'heading', level: 3, text: 'Diving Accidents: The DMT Role (Overview)' },
    { type: 'list', items: [
      'First response priorities: scene safety, casualty care, communication',
      'Communication chain: DMT → supervisor → physician → shore-based support',
      'Do not delay treatment while establishing communications',
      'Incident reporting: factual, contemporaneous, what happened and when',
      'Preservation of evidence: do not discard equipment, do not clean the scene',
    ] },
    { type: 'inPractice', text: 'The refresher module RM7 covers incident review in depth with case studies. Full course candidates will cover this material during the in-person practical sessions.' },
  ],
  takeaways: [
    'Head injuries and stroke: ABCDE, GCS, protect the airway, evacuate significant injuries',
    'Stroke vs DCI: both present with sudden neurological deficit in a diver — treat both urgently',
    'Seizures: protect, do not restrain, time it, recovery position after, find the cause',
    'Crush injuries: do NOT release without preparation — physician guidance and IV fluids first',
    'Mental health: recognise, support, communicate — do not dismiss or attempt to diagnose',
    'The unifying theme: recognise the condition, stabilise with ABCDE, get physician input',
  ],
  selfCheck: [
    {
      question: 'A diver surfaces and develops sudden right-sided weakness and slurred speech. Is this a stroke or DCI?',
      answer: 'It could be either. The DMT does not need to make this distinction. Treat both urgently: high-flow oxygen, ABCDE, neurological examination, contact the physician immediately.',
      rationale: 'The treatment pathway is the same initially. The physician will determine whether recompression or hospital transfer is appropriate.',
    },
    {
      question: 'Why should you NOT release a prolonged crush injury immediately?',
      answer: 'Releasing the crush allows potassium and other toxins from muscle breakdown to enter the circulation, which can cause cardiac arrest (hyperkalaemia).',
      rationale: 'IV fluids should be running before and during release to dilute the toxins. Get physician guidance before releasing.',
    },
    {
      question: 'What is the GCS score that indicates a patient cannot protect their own airway?',
      answer: 'GCS ≤ 8.',
      rationale: 'At GCS 8 or below, the patient has lost protective reflexes and is at risk of aspiration. Airway management is the priority.',
    },
    {
      question: 'A crew member in saturation becomes increasingly withdrawn and reports not sleeping. What should you do?',
      answer: 'Recognise this as a potential mental health concern, support the individual, and communicate with the physician. Do not dismiss it or attempt to diagnose.',
      rationale: 'Saturation environments create specific mental health risks: confinement, isolation, and interpersonal friction. Early recognition and support prevents escalation.',
    },
  ],
}
