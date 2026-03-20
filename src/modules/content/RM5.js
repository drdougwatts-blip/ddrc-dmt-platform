export default {
  objectives: [
    'Use the DMAC 01 aide-memoire to structure a medical report to a physician',
    'Demonstrate effective communication with medical personnel by radio or phone',
    'Explain the importance of contemporaneous medical record keeping',
    'Describe confidentiality requirements for medical records offshore',
    'Identify updates to communication systems or protocols since last certification',
  ],
  prerequisites: [],
  preBrief: {
    haveReady: [
      'DMAC 01 form (PDF or print) — you will practise completing it',
      'Pen for the completion exercise',
    ],
    keyTerms: [
      { term: 'DMAC 01', definition: 'Standardised aide-memoire for recording and transmitting medical data to the shore-based physician' },
      { term: 'SBAR', definition: 'Situation, Background, Assessment, Recommendation — structured handover format' },
      { term: 'ATMIST', definition: 'Age, Time, Mechanism, Injuries, Signs, Treatment — trauma handover format' },
      { term: 'Contemporaneous', definition: 'Recorded at the time of the event, not from memory later' },
    ],
    thinkAbout: [
      'When was the last time you completed a DMAC 01 under pressure? What did you miss?',
      'Who should have access to a diver\'s medical records offshore?',
    ],
  },
  sections: [
    { type: 'keyPoint', text: 'DMAC 01 is the physician\'s eyes and ears. An incomplete form leads to poor decisions. You will use DMAC 01 in every scenario during the in-person week. Get comfortable with it now.' },

    { type: 'heading', level: 2, text: 'DMAC 01 Aide-Memoire' },

    { type: 'heading', level: 3, text: 'What DMAC 01 Is and Why It Matters' },
    { type: 'list', items: [
      'A structured form for recording and transmitting medical data to shore',
      'Ensures the physician gets the information they need to make decisions',
      'Standardised format: both parties know what to expect',
      'Works when communication is difficult (poor radio, satellite delay, noise)',
      'Prevents the DMT from forgetting key information under pressure',
      'Updated periodically: check you are using the current version',
    ] },

    { type: 'heading', level: 3, text: 'DMAC 01: Section by Section' },
    { type: 'table', headers: ['Patient Information', 'Clinical Findings'], rows: [
      ['Name, age, weight, role on vessel', 'Vital signs: pulse, BP, RR, SpO₂, temp, BM'],
      ['Diving history: depth, time, gas, profile', 'Neurological examination results'],
      ['Symptoms: onset, progression, character', 'Physical examination findings'],
      ['Past medical history, allergies, medications', 'Treatment given so far and response'],
      ['', 'Specific questions for the physician'],
    ] },

    { type: 'heading', level: 3, text: 'Common Mistakes' },
    { type: 'list', items: [
      'Leaving sections blank: even if normal, write "normal" or "nil"',
      'Vague descriptions: "patient feels unwell" is not useful — be specific',
      'Missing the timeline: when did symptoms start? When were observations taken?',
      'Forgetting to record what treatment has already been given',
      'Not updating the form: if the patient\'s condition changes, update and re-transmit',
      'Illegible handwriting: print clearly or use a digital version',
    ] },

    { type: 'heading', level: 2, text: 'Structured Communication' },

    { type: 'heading', level: 3, text: 'Handover Formats' },
    { type: 'table', headers: ['SBAR', 'ATMIST'], rows: [
      ['S: Situation — who you are, who the patient is, what is happening', 'A: Age and gender'],
      ['B: Background — diving history, medical history, events', 'T: Time of incident'],
      ['A: Assessment — your findings, vital signs, neuro exam', 'M: Mechanism of injury'],
      ['R: Recommendation — what you think is needed, what you are asking for', 'I: Injuries found'],
      ['', 'S: Signs (vital signs)'],
      ['', 'T: Treatment given'],
    ] },
    { type: 'paragraph', text: 'Either format is acceptable. Consistency is what matters — use the same format every time.' },

    { type: 'heading', level: 3, text: 'Radio and Phone Communication' },
    { type: 'list', items: [
      'Clarity: speak slowly, enunciate, use simple language',
      'Repetition: repeat key information — ask the physician to read back instructions',
      'Confirmation: "I understand you want me to give 10 mg morphine IM. Is that correct?"',
      'Time zones: state times in UTC if the physician is in a different time zone',
      'Language barriers: keep sentences short, avoid jargon if English is not the first language for either party',
    ] },
    { type: 'inPractice', text: 'The physician may be woken at 3am. Be clear and concise from the start. Have your DMAC 01 completed and ready before you call. Do not phone to say "something is wrong" — phone to say exactly what is wrong, what you have found, and what you have done.' },

    { type: 'heading', level: 2, text: 'Medical Record Keeping' },

    { type: 'heading', level: 3, text: 'Documentation Requirements' },
    { type: 'list', items: [
      'Contemporaneous: record findings at the time, not from memory later',
      'Factual: what you saw, what you measured, what you did',
      'Date and time every entry',
      'Sign every entry with your name and role',
      'Changes in condition: document and communicate',
    ] },

    { type: 'heading', level: 3, text: 'Confidentiality' },
    { type: 'keyPoint', text: 'Medical records are confidential. Full stop. Who can see them? The DMT, the physician, the patient. NOT the OIM. NOT the client representative. NOT the diving superintendent. Unless the patient gives consent or there is a safety-critical reason.' },
    { type: 'list', items: [
      'Storage: secure, accessible only to medical personnel',
      'Crew change: handover medical records to the incoming DMT securely',
      'Digital vs paper: both acceptable — ensure backup copies',
      'Retention: minimum 4 years per D020 requirements',
    ] },

    { type: 'heading', level: 3, text: 'Legal Considerations' },
    { type: 'list', items: [
      'Medical records may be required as evidence in an investigation',
      'Accurate, contemporaneous records protect the patient and protect you',
      'Altered or incomplete records raise questions about the quality of care',
      'Drug errors: report immediately, contact physician, document — do not try to cover up a mistake',
    ] },

    { type: 'heading', level: 2, text: 'DMAC 01 Completion Exercise' },
    { type: 'paragraph', text: 'A surface-supplied diver at 25 msw on air reports right shoulder pain 30 minutes after surfacing. He is conscious, alert, and otherwise well. Vital signs: HR 78, BP 132/80, RR 14, SpO₂ 98%, Temp 36.6°C. No neurological deficit on rapid screening. Previous Type I DCI three years ago, treated and resolved. No allergies. No regular medication.' },
    { type: 'paragraph', text: 'Try completing a DMAC 01 from this information before the live session. What sections can you fill in? What information is missing? How would you present this to the physician using SBAR?' },
  ],
  takeaways: [
    'DMAC 01 is the backbone of DMT-to-physician communication — complete it properly every time',
    'Use a structured handover format (SBAR or ATMIST) — pick one and be consistent',
    'Contemporaneous records: document at the time, not from memory later',
    'Confidentiality: medical records are not for the OIM, the client rep, or the diving superintendent',
    'DMAC 01 will be used in every practical scenario during the in-person week',
  ],
  selfCheck: [
    {
      question: 'The diving superintendent asks to see a diver\'s medical notes. What do you do?',
      answer: 'Decline. Medical records are confidential and can only be shared with the physician and the patient, unless the patient consents or there is a safety-critical reason.',
      rationale: 'The superintendent is not entitled to see medical records regardless of their operational authority. This is a confidentiality boundary you must maintain.',
    },
    {
      question: 'What is wrong with phoning the physician and saying "the diver doesn\'t feel well, can you help"?',
      answer: 'It is vague and unhelpful. The physician needs specific information: vital signs, examination findings, diving history, and what treatment you have already given.',
      rationale: 'Complete DMAC 01 before calling. Use SBAR format. Be specific about what you have found and what you are asking for.',
    },
    {
      question: 'When should you update DMAC 01?',
      answer: 'Whenever the patient\'s condition changes. The form is a living document that should reflect the current situation.',
      rationale: 'A DMAC 01 completed once and never updated becomes inaccurate as the patient\'s condition evolves. The physician relies on current information.',
    },
    {
      question: 'What does "contemporaneous" mean in the context of medical records?',
      answer: 'Recorded at the time of the event, not from memory later.',
      rationale: 'Memory is unreliable under stress. Notes made at the time are more accurate and carry more weight in any subsequent investigation.',
    },
  ],
}
