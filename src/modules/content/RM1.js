export default {
  objectives: [
    'Describe the current BLS algorithm for adult resuscitation, identifying recent changes',
    'Explain correct technique for high-quality chest compressions',
    'Describe AED integration into the BLS algorithm including pad placement and safety',
    'Describe management of choking in conscious and unconscious patients',
    'Explain challenges of resuscitation in confined spaces (bell, chamber)',
    'Describe drowning-specific resuscitation modifications',
    'Identify when to start and stop resuscitation in a remote/offshore environment',
  ],
  prerequisites: [],
  preBrief: {
    haveReady: [
      'Your previous BLS certification notes (if available)',
      'Pen and paper',
    ],
    keyTerms: [
      { term: 'BLS', definition: 'Basic Life Support — the foundational resuscitation algorithm' },
      { term: 'AED', definition: 'Automated External Defibrillator — analyses rhythm and delivers shock if indicated' },
      { term: 'Agonal breathing', definition: 'Gasping, irregular breathing in cardiac arrest — this is NOT normal breathing' },
      { term: 'i-gel', definition: 'Supraglottic airway device — standard for non-intubation trained rescuers' },
    ],
    thinkAbout: [
      'What has changed in resuscitation guidance since your last certification?',
      'How would you perform CPR in a diving bell or chamber?',
    ],
  },
  sections: [
    { type: 'paragraph', text: 'This is an update session, not a from-scratch teach. You have done this before. The focus is on what has changed and why. Practical skills are drilled in-person on Day 1.' },

    { type: 'heading', level: 2, text: 'Current BLS Algorithm' },
    { type: 'paragraph', text: 'Unresponsive and not breathing normally: call for help and start CPR.' },
    { type: 'list', items: [
      '30 compressions : 2 ventilations (ratio unchanged)',
      'Compression rate: 100-120 per minute',
      'Compression depth: 5-6 cm in an adult',
      'Full chest recoil between compressions',
      'Minimise interruptions: aim for < 10 seconds between last compression and first post-pause compression',
      'Hands-only CPR is acceptable if the rescuer is unable or unwilling to ventilate',
    ] },

    { type: 'heading', level: 3, text: 'Compression Quality: What Matters' },
    { type: 'keyPoint', text: 'Compression quality is the single most important factor in survival. Push hard (5-6 cm), push fast (100-120/min), allow full recoil, and minimise interruptions. Switch compressor every 2 minutes to prevent fatigue degrading quality.' },
    { type: 'paragraph', text: 'Recent emphasis areas:' },
    { type: 'list', items: [
      'Compression quality over all other interventions',
      'Early defibrillation emphasis (AED within 3-5 minutes)',
      'Recognition of cardiac arrest: agonal breathing is not normal breathing — start CPR',
    ] },

    { type: 'heading', level: 2, text: 'AED Use' },
    { type: 'list', items: [
      'Switch on the AED. Follow voice prompts. Attach pads.',
      'Pad placement: right clavicle and left mid-axillary line',
      'Ensure nobody is touching the patient during analysis and shock delivery',
      'Resume CPR immediately after shock (or if no shock advised)',
      'Continue following AED prompts every 2 minutes',
      'Wet environments: dry the chest around the pad sites — AEDs are safe in rain and on wet decks',
      'Hyperbaric AED use: confirm equipment is chamber-rated for your specific system',
    ] },

    { type: 'heading', level: 2, text: 'Airway and Choking Updates' },

    { type: 'heading', level: 3, text: 'Airway Management Overview' },
    { type: 'table', headers: ['Basic Interventions', 'Supraglottic Developments'], rows: [
      ['Head tilt chin lift (no spinal concern)', 'i-gel: standard for non-intubation trained rescuers'],
      ['Jaw thrust (if spinal injury suspected)', 'No inflation required (unlike classic LMA)'],
      ['Suction for blood, vomit, secretions', 'Correct sizing is important for an effective seal'],
      ['OPA and NPA sizing and insertion', 'All practical airway skills taught in-person Day 1'],
    ] },

    { type: 'heading', level: 3, text: 'Choking Management' },
    { type: 'list', items: [
      'Partial obstruction: encourage coughing — do not intervene if patient can cough effectively',
      'Complete obstruction (conscious): up to 5 back blows, then up to 5 abdominal thrusts, alternate',
      'Complete obstruction (unconscious): start CPR — compressions may dislodge the object',
      'Check the mouth before each ventilation attempt',
      'Large patients or pregnant patients: chest thrusts instead of abdominal thrusts',
    ] },

    { type: 'heading', level: 2, text: 'Special Circumstances' },

    { type: 'heading', level: 3, text: 'Drowning Modifications' },
    { type: 'list', items: [
      '5 initial rescue breaths before starting compressions',
      'Oxygenation is the priority (respiratory cause of arrest)',
      'Vomiting is common: be prepared to manage the airway',
      'Hypothermia often concurrent: see hypothermia protocol',
    ] },

    { type: 'heading', level: 3, text: 'Hypothermic Arrest' },
    { type: 'list', items: [
      'Continue CPR regardless of apparent signs of death',
      'Limit drug doses (drugs accumulate in a cold patient)',
      'Defibrillation may be ineffective below 30°C',
      'Rewarm before making decisions about cessation',
    ] },
    { type: 'keyPoint', text: 'Nobody is dead until they are warm and dead. Continue resuscitation in hypothermic cardiac arrest.' },

    { type: 'heading', level: 3, text: 'Resuscitation in Confined Spaces' },
    { type: 'list', items: [
      'Bell or chamber: extremely limited space for CPR',
      'External cardiac massage may need modified hand position or technique',
      'Two-person CPR is difficult or impossible in some configurations',
      'Prioritise compression quality even if you cannot achieve ideal positioning',
      'AED use inside a chamber: confirm equipment is chamber-rated',
    ] },
    { type: 'divingContext', text: 'Day 4 covers confined-space resuscitation in detail with specialist instruction and actual chamber access. This is a unique challenge of the DMT role.' },

    { type: 'heading', level: 2, text: 'When to Start and When to Stop' },
    { type: 'list', items: [
      'Start: any patient in cardiac arrest unless injuries are clearly incompatible with life',
      'Offshore: help is not coming quickly — you may resuscitate for a prolonged period',
      'Stopping: physician guidance — do not stop unilaterally',
      'Factors: duration of arrest, response to treatment, whether reversible causes have been addressed',
      'Futility: a difficult judgement — always involve the physician in the decision',
    ] },
    { type: 'inPractice', text: 'Emotional impact on the rescuer is real. A prolonged unsuccessful resuscitation affects everyone involved. Support is available. Talk about it afterwards. Do not ignore the psychological impact.' },
  ],
  takeaways: [
    'Compression quality is the single most important factor in survival',
    'AED: switch on, follow prompts, shock early — within 3-5 minutes if possible',
    'Drowning: 5 rescue breaths first, then standard CPR',
    'Hypothermia: do not give up — continue CPR until rewarmed',
    'Confined spaces: prioritise compression quality with adapted technique',
    'Stopping resuscitation: always with physician guidance, never alone',
    'Practical BLS skills are drilled extensively in-person on Day 1',
  ],
  selfCheck: [
    {
      question: 'What are the key parameters for high-quality chest compressions?',
      answer: 'Rate 100-120/min, depth 5-6 cm, full recoil between compressions, minimal interruptions, switch compressor every 2 minutes.',
      rationale: 'Compression quality determines survival. All other interventions are secondary to effective chest compressions.',
    },
    {
      question: 'How does the drowning resuscitation algorithm differ from standard BLS?',
      answer: 'Give 5 initial rescue breaths before starting compressions.',
      rationale: 'Drowning is a respiratory cause of arrest. Oxygenation is the priority, so rescue breaths are given first to address the primary problem.',
    },
    {
      question: 'A patient in hypothermic cardiac arrest has been receiving CPR for 45 minutes with no response. Should you stop?',
      answer: 'No. Continue CPR and rewarm. Do not stop without physician guidance. Nobody is dead until they are warm and dead.',
      rationale: 'Hypothermia is protective. Rewarming may restore a viable cardiac rhythm. Cessation decisions are made by the physician after rewarming.',
    },
    {
      question: 'What is agonal breathing and why is it important to recognise?',
      answer: 'Agonal breathing is gasping, irregular breathing that occurs in cardiac arrest. It is NOT normal breathing — CPR should be started.',
      rationale: 'Agonal breathing is commonly mistaken for normal breathing, leading to delayed CPR. If in doubt, start compressions.',
    },
  ],
}
