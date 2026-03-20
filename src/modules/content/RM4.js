export default {
  objectives: [
    'Describe available telemedicine systems and their application offshore and inside a complex',
    'Explain developments in monitoring technology relevant to DMT practice',
    'Discuss advances in wound management, airway devices, and point-of-care testing',
    'Identify how new techniques apply in the hyperbaric environment',
    'Recognise limitations of new technology in remote/offshore settings',
  ],
  prerequisites: [],
  preBrief: {
    haveReady: [
      'DMAC 01 form (PDF or print)',
      'Pen and paper',
    ],
    keyTerms: [
      { term: 'Telemedicine', definition: 'Remote medical consultation using video, audio, or data transmission' },
      { term: 'SBAR', definition: 'Situation, Background, Assessment, Recommendation — structured handover format' },
      { term: 'Point-of-care testing', definition: 'Diagnostic tests performed at the patient\'s bedside (blood glucose, urinalysis, rapid antigen tests)' },
      { term: 'i-gel', definition: 'Supraglottic airway device now standard for non-intubation trained rescuers' },
    ],
    thinkAbout: [
      'How has telemedicine changed the DMT-physician relationship since your last certification?',
      'What equipment on your last job was chamber-rated, and what was not?',
    ],
  },
  sections: [
    { type: 'heading', level: 2, text: 'Telemedicine' },

    { type: 'heading', level: 3, text: 'Telemedicine Systems' },
    { type: 'list', items: [
      'Video consultation: real-time link between DMT and shore-based physician',
      'Store-and-forward: send images, ECGs, or data for later review',
      'Real-time vital sign transmission: automated data feed to physician',
      'Offshore challenges: bandwidth, satellite delay, connectivity gaps',
      'Inside a hyperbaric complex: camera placement, comms integration, image quality',
    ] },
    { type: 'keyPoint', text: 'Telemedicine supports but does not replace the voice link between DMT and physician. When the technology fails, you still need to be able to communicate effectively by radio or phone using DMAC 01.' },

    { type: 'heading', level: 3, text: 'Using Telemedicine Effectively' },
    { type: 'table', headers: ['Before the Consultation', 'During the Consultation'], rows: [
      ['Vital signs, history, examination documented', 'Show, do not just tell: point camera at patient/wound/equipment'],
      ['Check equipment: camera, lighting, connection', 'Use structured handover: SBAR or ATMIST format'],
      ['DMAC 01 completed and ready', 'Confirm instructions by reading them back'],
      ['Anticipate what the physician will want to see', 'Document physician\'s decisions and time of contact'],
    ] },

    { type: 'heading', level: 2, text: 'Point-of-Care Testing and Monitoring' },

    { type: 'heading', level: 3, text: 'Diagnostic Technology' },
    { type: 'table', headers: ['Point-of-Care Testing', 'Monitoring Equipment'], rows: [
      ['Blood glucose monitors: current devices, accuracy, limitations', 'Pulse oximetry: SpO₂ limitations in CO poisoning, cold, hyperbaric use'],
      ['Viral/antigen rapid tests: procedure, interpretation, false negative risk', 'Blood pressure: manual and automated cuffs'],
      ['Urinalysis: dipstick testing, what each result means', 'Capnography: CO₂ monitoring (if relevant to DMT scope)'],
      ['Hands-on testing practice is in-person', 'Temperature: low-reading thermometers for hypothermia'],
    ] },

    { type: 'heading', level: 2, text: 'ECG and Cardiac Monitoring' },
    { type: 'list', items: [
      'DMTs place ECG leads — DMTs do not interpret the ECG',
      'The physician reads and interprets the tracing remotely via telemedicine',
      '12-lead ECG: full assessment, used when equipment and time allow',
      '3-lead ECG: continuous monitoring during treatment or observation',
      'Correct lead placement is essential for a usable tracing',
      'Transmitting ECG data: photograph, digital transmission, or telemedicine link',
    ] },
    { type: 'inPractice', text: 'Practical ECG lead placement is taught in-person. Your role is to place the leads correctly and transmit the data — not to interpret the rhythm. That is the physician\'s job.' },

    { type: 'heading', level: 2, text: 'Equipment Advances and Hyperbaric Safety' },

    { type: 'heading', level: 3, text: 'Wound Management and Airway Advances' },
    { type: 'table', headers: ['Wound Management', 'Airway Developments'], rows: [
      ['Modern haemostatic agents: celox, quikclot', 'i-gel: standard supraglottic airway for non-intubation trained rescuers'],
      ['Chest seal devices: vented chest seals for open pneumothorax', 'Video laryngoscopy: if available (not standard DMT equipment)'],
      ['Tourniquet developments: CAT, SOFTT-W', 'New items added to DMAC 15 kit: check current publication'],
      ['Wound closure: tissue adhesive, steri-strips', 'Practical airway skills taught in-person Day 1'],
    ] },

    { type: 'heading', level: 3, text: 'Hyperbaric Environment: Equipment Safety' },
    { type: 'list', items: [
      'Not all equipment is safe under pressure or in oxygen-enriched atmospheres',
      'Electronic devices: sparking risk in high oxygen environments',
      'Battery-powered devices: check manufacturer guidance for hyperbaric use',
      'Monitoring equipment: ensure you know what is certified for hyperbaric use on your system',
      'Practical workarounds: if standard equipment cannot go in the chamber, what alternatives exist?',
    ] },
    { type: 'divingContext', title: 'Chamber Safety', text: 'Equipment failures, fires, and near-misses in hyperbaric environments are documented in IMCA Safety Flashes. Familiarise yourself with the approved equipment list for your specific chamber system before each job.' },
  ],
  takeaways: [
    'Telemedicine: prepare, show the physician what they need to see, confirm instructions by reading them back',
    'Point-of-care testing: blood glucose, viral tests, urinalysis — know how to run and interpret each test',
    'ECG: place the leads correctly, transmit the data, let the physician interpret the rhythm',
    'Hyperbaric safety: not all equipment is chamber-safe — know what is approved for your system',
    'Hands-on telemedicine, ECG, and testing practice happens in-person',
  ],
  selfCheck: [
    {
      question: 'A saturation diver develops chest pain. You need to get an ECG to the physician ashore. What is your approach?',
      answer: 'Place ECG leads correctly, obtain a 12-lead tracing, transmit via telemedicine (photograph or digital link), and communicate findings using SBAR format.',
      rationale: 'The DMT places leads and transmits data. The physician interprets the tracing and decides on management. Clear communication is essential.',
    },
    {
      question: 'What are the limitations of pulse oximetry that a DMT should know?',
      answer: 'Falsely high readings in CO poisoning, unreliable in cold extremities, may be affected by hyperbaric conditions.',
      rationale: 'SpO₂ is a useful tool but has specific limitations. In CO poisoning, clinical assessment overrides the oximeter reading.',
    },
    {
      question: 'What structured handover formats can you use during a telemedicine consultation?',
      answer: 'SBAR (Situation, Background, Assessment, Recommendation) or ATMIST (Age, Time, Mechanism, Injuries, Signs, Treatment).',
      rationale: 'Either format is acceptable. Consistency is what matters — use the same format every time so information is not missed.',
    },
  ],
}
