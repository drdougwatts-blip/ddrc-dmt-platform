export default {
  objectives: [
    'Perform a structured primary survey using the ABCDE approach',
    'Identify and prioritise life-threatening conditions',
    'Conduct a secondary survey including SAMPLE/AMPLE history taking',
    'Describe the systematic method of examining injured or ill patients including divers',
    'Explain principles of casualty management on site before transfer',
  ],
  prerequisites: [],
  preBrief: {
    haveReady: [
      'DMAC 01 form (PDF or print)',
      'Pen and paper for noting the ABCDE framework',
    ],
    keyTerms: [
      { term: 'ABCDE', definition: 'Airway, Breathing, Circulation, Disability, Exposure — the structured primary survey framework' },
      { term: 'AVPU', definition: 'Alert, responds to Voice, responds to Pain, Unresponsive — quick consciousness assessment' },
      { term: 'GCS', definition: 'Glasgow Coma Scale — detailed consciousness scoring: Eyes (1-4) + Verbal (1-5) + Motor (1-6)' },
      { term: 'SAMPLE', definition: 'Signs/Symptoms, Allergies, Medications, Past history, Last oral intake, Events — history-taking structure' },
      { term: 'Capillary refill time', definition: 'Press the nail bed for 5 seconds, release, and count seconds to colour return (normal < 2 seconds)' },
    ],
    thinkAbout: [
      'Why does the order of ABCDE matter?',
      'What makes examining a diver different from examining any other patient?',
    ],
  },
  sections: [
    { type: 'keyPoint', text: 'ABCDE is the thread running through the entire course. Every practical session, every scenario, every assessment uses this framework. Get it locked in today.' },

    { type: 'heading', level: 2, text: 'Primary Survey: ABCDE' },
    { type: 'paragraph', text: 'The primary survey identifies and treats life-threatening conditions in a strict order. Fix each problem before moving to the next letter.' },

    { type: 'heading', level: 3, text: 'A: Airway' },
    { type: 'list', items: [
      'Is the airway open? Is the patient talking? (If they are talking, the airway is open for now)',
      'Causes of obstruction: tongue (most common), blood, vomit, foreign body, swelling',
      'Interventions: head tilt chin lift, jaw thrust (if spinal injury suspected), suction',
      'Adjuncts: oropharyngeal airway (OPA), nasopharyngeal airway (NPA)',
      'Advanced: i-gel supraglottic airway, bag-valve-mask (BVM)',
      'Fix airway problems before moving to B',
    ] },

    { type: 'heading', level: 3, text: 'B: Breathing' },
    { type: 'list', items: [
      'Look: chest movement, symmetry, rate, depth, effort',
      'Listen: air entry both sides, added sounds',
      'Feel: tracheal position (deviation suggests tension pneumothorax), subcutaneous emphysema',
      'Life threats: tension pneumothorax, flail chest, open chest wound',
      'Count the respiratory rate — normal is 12-20 breaths per minute',
      'Oxygen: give it early if there is any breathing concern',
    ] },

    { type: 'heading', level: 3, text: 'C: Circulation' },
    { type: 'list', items: [
      'Feel a pulse: present? Rate? Rhythm? Strength?',
      'Skin: colour, temperature, capillary refill time (normal < 2 seconds)',
      'Bleeding: is there major external haemorrhage? Control it now.',
      'Control catastrophic bleeding: direct pressure, tourniquet, haemostatic agents',
      'Signs of shock: tachycardia, hypotension, pallor, confusion, cold peripheries',
      'IV access and fluids: under physician guidance',
    ] },

    { type: 'heading', level: 3, text: 'D: Disability' },
    { type: 'list', items: [
      'AVPU: Alert, responds to Voice, responds to Pain, Unresponsive',
      'Pupils: size, equality, reactivity to light',
      'Blood glucose: check in any patient with altered consciousness',
      'Lateralising signs: is one side weaker than the other?',
      'GCS: more detailed scoring (covered in later modules)',
      'Think: DCI, stroke, head injury, hypoglycaemia, drug effects',
    ] },

    { type: 'heading', level: 3, text: 'E: Exposure' },
    { type: 'list', items: [
      'Fully examine the patient: front and back, head to toe',
      'Remove clothing as needed (maintain dignity and body temperature)',
      'Temperature: use a thermometer — hypothermia is easily missed',
      'Log roll if spinal injury suspected: examine the back',
      'Look for injuries you might otherwise miss',
      'Then cover the patient: prevent further heat loss',
    ] },

    { type: 'keyPoint', text: 'Fix each life threat before moving to the next letter. Do not jump ahead. Do not skip steps. A patient with an obstructed airway will die before you get to check their blood pressure.' },

    { type: 'heading', level: 2, text: 'Secondary Survey' },
    { type: 'paragraph', text: 'The secondary survey only begins after all life threats are managed in the primary survey. It is a systematic head-to-toe examination combined with a structured history.' },

    { type: 'heading', level: 3, text: 'Head-to-Toe Examination' },
    { type: 'list', items: [
      'Systematic order: scalp, face, neck, chest, abdomen, pelvis, limbs, back',
      'Look, feel, move (where appropriate and not contraindicated)',
      'Document everything you find',
      'Takes 5-10 minutes if done properly — do not rush it',
    ] },

    { type: 'heading', level: 3, text: 'SAMPLE History' },
    { type: 'table', headers: ['Letter', 'Meaning', 'What to Ask'], rows: [
      ['S', 'Signs and symptoms', 'What happened? What are you feeling?'],
      ['A', 'Allergies', 'Are you allergic to anything? (drugs, latex, marine stings)'],
      ['M', 'Medications', 'Do you take any regular medication?'],
      ['P', 'Past medical history', 'Any medical conditions? Previous DCI?'],
      ['L', 'Last oral intake', 'When did you last eat or drink?'],
      ['E', 'Events', 'What were you doing? What happened leading up to this?'],
    ] },

    { type: 'heading', level: 2, text: 'Examining a Diver: What\'s Different' },
    { type: 'divingContext', title: 'Diver-Specific Assessment', text: 'A diving casualty needs everything a standard casualty needs, plus a neurological examination and a detailed diving history. These two additions are critical for detecting DCI and guiding treatment.' },

    { type: 'paragraph', text: 'Additional assessments for a diving casualty:' },
    { type: 'list', items: [
      'Neurological examination: both rapid screening and full versions — critical for DCI detection',
      'Diving history: depth, time, gas mix, decompression profile, time of symptoms onset',
      'Previous diving incidents: any history of DCI?',
      'Baseline observations: pulse, RR, BP, SpO₂, temperature, blood glucose, urinalysis',
      'Examination in confined spaces: what is possible in a bell or chamber?',
      'Repeat assessments: detect deterioration or improvement over time',
    ] },

    { type: 'heading', level: 3, text: 'Vital Signs: What to Measure and Record' },
    { type: 'table', headers: ['Core Observations', 'Additional Observations'], rows: [
      ['Pulse: rate, rhythm, strength', 'Pupil size and reactivity'],
      ['Blood pressure: systolic and diastolic', 'Skin colour and temperature'],
      ['Respiratory rate: count for 60 seconds', 'Level of consciousness: GCS or AVPU'],
      ['SpO₂: pulse oximetry', 'Urinalysis: dipstick testing'],
      ['Temperature: low-reading thermometer for hypothermia', ''],
      ['Blood glucose: in any altered consciousness', ''],
    ] },
    { type: 'inPractice', text: 'Pulse oximetry has a critical limitation: it cannot distinguish carboxyhaemoglobin from oxyhaemoglobin. In carbon monoxide poisoning, SpO₂ reads falsely high. If CO exposure is suspected, treat based on clinical signs, not the SpO₂ reading.' },

    { type: 'heading', level: 2, text: 'On-Site Casualty Management' },
    { type: 'list', items: [
      'Safety first: scene safety, PPE — do not become a second casualty',
      'Positioning: recovery position (unconscious, breathing), sitting upright (breathing difficulty), legs elevated (shock)',
      'Oxygen: give it when in doubt — high flow, reservoir mask',
      'Warmth: prevent further heat loss with blankets, shelter, warm environment',
      'Reassurance: talk to the conscious patient, explain what you are doing',
      'Spinal precautions: immobilise if mechanism suggests spinal injury',
      'When not to move: unless the scene is unsafe or access requires it',
    ] },

    { type: 'heading', level: 3, text: 'Patient Movement in Diving Operations' },
    { type: 'table', headers: ['Within the Dive System', 'External Transfer'], rows: [
      ['Bell to chamber: through small hatches, limited space', 'Helicopter: altitude restrictions for DCI, noise, vibration'],
      ['Chamber to vessel medical facility: may require decompression first', 'The DMT may or may not escort the patient'],
      ['Patient packaging under pressure: what equipment fits?', 'Handover to receiving team: use DMAC 01 structure'],
      ['Stretchers and boards: know what is available', 'Coordinate with supervisor for vessel operations'],
    ] },

    { type: 'heading', level: 3, text: 'Choking and Airway Obstruction' },
    { type: 'list', items: [
      'Partial obstruction: patient can cough, speak, breathe — encourage coughing',
      'Complete obstruction: silent, cannot cough or speak, clutching throat',
      'Conscious patient: up to 5 back blows, then up to 5 abdominal thrusts, alternate',
      'Unconscious patient: start CPR (chest compressions may dislodge the obstruction)',
    ] },

    { type: 'heading', level: 2, text: 'Case Exercises' },
    { type: 'paragraph', text: 'Case 1: A diver collapses on deck 15 minutes after surfacing from a bounce dive to 45 metres on air. He is lying face down and appears unconscious. His dive buddy is standing over him shouting for help. Other crew members are gathering around.' },
    { type: 'list', items: [
      'What is your first action? (Scene safety, then approach)',
      'Walk through ABCDE: what do you do at each stage?',
      'What diver-specific history do you need?',
    ] },
    { type: 'paragraph', text: 'Case 2: A saturation diver at 90 msw storage depth reports worsening headache and weakness in his left arm over the past 30 minutes. He is conscious, talking, but anxious.' },
    { type: 'list', items: [
      'Primary survey: what are you looking for at each ABCDE stage?',
      'What secondary survey findings are most important here?',
      'What diving history is critical?',
      'When do you call the physician? (Answer: immediately)',
    ] },
  ],
  takeaways: [
    'ABCDE is non-negotiable: use it for every patient, every time, in order',
    'Fix life threats before moving to the next letter — do not jump ahead',
    'Secondary survey only after the primary survey is clear',
    'SAMPLE gives you the history structure when your brain is under pressure',
    'Diver-specific assessment adds the neurological exam and diving history',
    'Pulse oximetry reads falsely high in CO poisoning — know this limitation',
    'All of this will be practised hands-on during the in-person week',
  ],
  selfCheck: [
    {
      question: 'In what order should you address findings in a primary survey?',
      answer: 'A-B-C-D-E, in strict order. Fix each life threat before moving to the next letter.',
      rationale: 'An airway obstruction kills faster than a tension pneumothorax, which kills faster than uncontrolled bleeding. The order reflects the speed at which each condition can kill.',
    },
    {
      question: 'What two assessments are unique to examining a diving casualty (compared to a standard trauma patient)?',
      answer: 'A neurological examination (to detect DCI) and a detailed diving history (depth, time, gas, profile, symptom onset).',
      rationale: 'These additions allow the physician to determine whether the presentation is consistent with DCI and guide treatment decisions.',
    },
    {
      question: 'What does SAMPLE stand for?',
      answer: 'Signs/Symptoms, Allergies, Medications, Past medical history, Last oral intake, Events leading to illness/injury.',
      rationale: 'SAMPLE provides a structured approach to history-taking that ensures you capture the key information even under stress.',
    },
    {
      question: 'A patient has an SpO₂ of 99% but you suspect carbon monoxide poisoning. Should you trust the reading?',
      answer: 'No. Pulse oximetry cannot distinguish carboxyhaemoglobin from oxyhaemoglobin. The reading is falsely reassuring.',
      rationale: 'In suspected CO poisoning, treat based on clinical signs and history, not the SpO₂. Administer high-flow 100% oxygen regardless of the reading.',
    },
  ],
}
