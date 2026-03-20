export default {
  objectives: [
    'Define the scope of practice of the DMT including limits of independent action',
    'Explain the relationship between the DMT and the supervising physician',
    'Describe the legal and regulatory framework for offshore diving medical provision',
    'Identify key DMAC and IMCA publications relevant to DMT practice',
    'Distinguish between the DMT role in surface diving operations and saturation operations',
  ],
  prerequisites: [],
  preBrief: {
    haveReady: [
      'Access to DMAC 01 document (PDF or print)',
      'Notepad for reference numbers',
    ],
    keyTerms: [
      { term: 'DMAC', definition: 'Diving Medical Advisory Committee — publishes guidance documents for diving medicine' },
      { term: 'IMCA', definition: 'International Marine Contractors Association — sets industry standards including D020 (this course)' },
      { term: 'Scope of practice', definition: 'The defined range of actions a DMT can perform independently vs under physician guidance' },
      { term: 'BIBS', definition: 'Built-In Breathing System — delivers oxygen in a hyperbaric chamber' },
    ],
    thinkAbout: [
      'Where does your authority as a DMT end and the physician\'s begin?',
      'If a supervisor tells you not to bother the doctor, what do you do?',
    ],
  },
  sections: [
    { type: 'keyPoint', text: 'The DMT is the physician\'s hands, not an independent practitioner. Your advanced skills are only used under physician guidance. This is not a limitation — it is the safety system that protects the patient and protects you.' },

    { type: 'heading', level: 2, text: 'Scope of Practice' },
    { type: 'paragraph', text: 'The DMT scope of practice has a clear boundary between independent actions and those requiring physician guidance.' },

    { type: 'heading', level: 3, text: 'Independent Actions' },
    { type: 'paragraph', text: 'The DMT acts independently for:' },
    { type: 'list', items: [
      'Basic first aid: wound care, splinting, dressings',
      'Initial assessment: ABCDE primary survey',
      'Vital signs monitoring: pulse, BP, SpO₂, temperature, blood glucose',
      'BLS and AED use in cardiac arrest',
      'Scene safety and casualty protection',
    ] },

    { type: 'heading', level: 3, text: 'Requires Physician Guidance' },
    { type: 'paragraph', text: 'The following actions require physician direction or authorisation:' },
    { type: 'list', items: [
      'Drug administration (all parenteral routes)',
      'IV/IO cannulation and fluid therapy',
      'Clinical decision-making beyond first aid',
      'Diagnosis and treatment planning',
      'Decisions about evacuation or return to diving',
    ] },

    { type: 'heading', level: 3, text: 'When to Call the Physician' },
    { type: 'keyPoint', title: 'The Answer Is Always: Early', text: 'Any condition beyond basic first aid. Any diving-related medical complaint (even if apparently minor). Any change in a patient\'s condition. Any uncertainty about what you are dealing with. Never wait until the situation deteriorates before making contact.' },
    { type: 'paragraph', text: 'The physician would rather hear about a minor problem early than a major one late.' },

    { type: 'heading', level: 3, text: 'Surface Operations vs Saturation' },
    { type: 'table', headers: ['Aspect', 'Surface Diving', 'Saturation Diving'], rows: [
      ['DMT location', 'On deck or in dive control', 'May lock into the chamber complex'],
      ['Patient access', 'Patient accessible for examination', 'Working in confined space under pressure'],
      ['Evacuation', 'To vessel medical facility relatively straightforward', 'Patient cannot be easily removed from the system'],
      ['Physician contact', 'Radio or phone to shore', 'Via comms or telemedicine link'],
      ['Extended care', 'Less likely needed', 'Extended patient care may be required in the chamber'],
    ] },

    { type: 'heading', level: 2, text: 'Legal and Regulatory Framework' },
    { type: 'paragraph', text: 'The DMT works within a defined legal and regulatory structure:' },
    { type: 'list', items: [
      'IMCA D014: International Code of Practice for Offshore Diving',
      'National regulations vary: UK (Diving at Work Regulations 1997), Norway, Brazil, and others',
      'Employer\'s responsibility: provide trained DMTs, proper equipment, and physician access',
      'DMT\'s responsibility: operate within training, maintain certification, call for help when needed',
      'First Aid at Work: the IMCA DMT certificate fulfils the UK FAW requirement for 3 years',
      'Insurance and liability: your employer should carry appropriate professional cover',
    ] },

    { type: 'heading', level: 2, text: 'Key Publications' },
    { type: 'paragraph', text: 'These are the documents you will use in practice. Know what they contain and how to access them.' },

    { type: 'heading', level: 3, text: 'DMAC Documents' },
    { type: 'list', items: [
      'DMAC 01: aide-memoire for recording and transmitting medical data to shore — you will use this in every scenario this week',
      'DMAC 15: medical equipment to be held at the site of an offshore diving operation — this is your working medical kit',
    ] },

    { type: 'heading', level: 3, text: 'IMCA Documents' },
    { type: 'list', items: [
      'IMCA D014: code of practice for offshore diving',
      'IMCA D020: requirements for DMT training courses (this course)',
      'IMCA Safety Flashes: incident reports and lessons learned — stay current between certifications',
    ] },
    { type: 'paragraph', text: 'How to access these documents: via your employer, the IMCA website, or the DDRC library.' },

    { type: 'heading', level: 2, text: 'Scenario Discussion' },
    { type: 'paragraph', text: 'Consider these three scenarios and think about where the scope of practice boundaries lie:' },
    { type: 'orderedList', items: [
      'A diver reports chest pain on deck. What do you do? When do you call the physician?',
      'A saturation diver has a nosebleed that stops after 10 minutes. Is this a physician call?',
      'The supervisor tells you not to bother the doctor over something minor. What do you do?',
    ] },
    { type: 'keyPoint', text: 'Your duty is to the patient, not to the supervisor\'s convenience. If you believe the physician needs to know, make the call. Document that you did. This is not optional.' },
  ],
  takeaways: [
    'The DMT scope is specifically defined: first aid independently, advanced skills under physician guidance',
    'Call the physician early, not late — they would rather be informed than surprised',
    'Know your key references: DMAC 01, DMAC 15, IMCA D014, IMCA D020',
    'Surface and saturation operations create different working conditions but the same principles apply',
    'Your duty is to the patient, regardless of operational pressure',
    'The rest of this course teaches the skills — this module taught you when and how to use them',
  ],
  selfCheck: [
    {
      question: 'Can a DMT administer morphine independently without physician contact?',
      answer: 'No. All parenteral drug administration requires physician guidance.',
      rationale: 'The DMT\'s independent scope covers basic first aid, assessment, and BLS. Drug administration, IV access, and clinical decision-making beyond first aid all require physician direction.',
    },
    {
      question: 'What is DMAC 01 and when will you use it?',
      answer: 'DMAC 01 is the aide-memoire for recording and transmitting medical data to the shore-based physician. You use it for every medical contact.',
      rationale: 'DMAC 01 ensures the physician receives structured, complete information to make treatment decisions. You will use it in every practical scenario during the in-person week.',
    },
    {
      question: 'A supervisor tells you a problem is minor and not to wake the doctor at 2am. What do you do?',
      answer: 'If you believe the physician needs to know, you make the call regardless of the supervisor\'s opinion. Document your actions.',
      rationale: 'Your duty is to the patient. The physician would rather be contacted about a minor problem than be surprised by a major one. The supervisor is not medically qualified to make that decision.',
    },
    {
      question: 'What is the key difference between the DMT role in surface diving vs saturation?',
      answer: 'In saturation, the DMT may need to provide extended patient care in a confined space under pressure, with the patient unable to be easily removed from the system.',
      rationale: 'Surface operations allow relatively straightforward patient access and evacuation. Saturation operations create confined-space, pressurised conditions requiring adapted techniques and potentially prolonged care.',
    },
  ],
}
