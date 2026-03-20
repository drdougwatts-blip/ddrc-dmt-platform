export default {
  objectives: [
    'Describe the pathophysiology of DCI, distinguishing Type I from Type II presentations',
    'Explain arterial gas embolism following pulmonary barotrauma',
    'Differentiate DCI from conditions with similar presentations (stroke, head injury)',
    'Describe therapeutic recompression principles and commonly used treatment tables',
    'State current guidance on return to diving and air travel following DCI',
    'Describe recent developments in DCI understanding, diagnosis, or treatment',
    'Explain management of oxygen toxicity including CNS and pulmonary manifestations',
    'Describe recognition and management of thermal stress in divers',
  ],
  prerequisites: [
    { id: 'O1_1', label: 'O1.1 Physiology Review' },
    { id: 'O1_2', label: 'O1.2 Diving Physics' },
  ],
  preBrief: {
    haveReady: [
      'Notes from O1.2 (Henry\'s Law) and O2.1 (Gas Toxicity)',
      'DMAC 01 form — you will need it for the case discussions',
    ],
    keyTerms: [
      { term: 'DCI', definition: 'Decompression Illness — umbrella term covering decompression sickness and arterial gas embolism' },
      { term: 'Type I DCI', definition: 'Musculoskeletal or cutaneous — joint pain, skin rash, lymphatic swelling' },
      { term: 'Type II DCI', definition: 'Neurological or cardiopulmonary — medical emergency requiring urgent recompression' },
      { term: 'AGE', definition: 'Arterial Gas Embolism — gas enters arterial circulation after pulmonary barotrauma' },
      { term: 'RN62 (USN Table 6)', definition: 'Most commonly used treatment table for DCI — 18 msw on 100% O₂ with air breaks' },
    ],
    thinkAbout: [
      'What is the difference between DCI that affects joints and DCI that affects the spinal cord?',
      'If a diver surfaces with sudden neurological symptoms, does it matter whether it is stroke or DCI for your initial management?',
    ],
  },
  sections: [
    { type: 'heading', level: 2, text: 'Decompression Illness: Pathophysiology' },
    { type: 'paragraph', text: 'Inert gas (usually nitrogen) dissolves in tissues under pressure (Henry\'s Law). On decompression, dissolved gas comes out of solution. If decompression is too fast, gas forms bubbles in tissues and blood.' },
    { type: 'list', items: [
      'Bubbles cause mechanical obstruction, endothelial damage, and inflammatory response',
      'Location of bubbles determines the clinical presentation',
      'Individual susceptibility varies: same dive profile, different outcomes between divers',
    ] },

    { type: 'heading', level: 3, text: 'Type I vs Type II DCI' },
    { type: 'table', headers: ['Type I (Musculoskeletal / Cutaneous)', 'Type II (Neurological / Cardiopulmonary)'], rows: [
      ['Joint pain (the bends): most common presentation', 'Spinal cord: weakness, numbness, paraplegia, bladder dysfunction'],
      ['Usually shoulders, elbows, knees', 'Cerebral: confusion, visual disturbance, speech problems, hemiplegia'],
      ['Skin: itching, rash, marbling (cutis marmorata)', 'Vestibular: vertigo, nausea, hearing loss (the staggers)'],
      ['Lymphatic: localised swelling', 'Cardiopulmonary: the chokes (cough, chest pain, dyspnoea)'],
      ['Not immediately life-threatening but needs treatment', 'Medical emergency: requires urgent recompression'],
    ] },

    { type: 'heading', level: 3, text: 'Arterial Gas Embolism (AGE)' },
    { type: 'list', items: [
      'Mechanism: pulmonary barotrauma on ascent — gas enters pulmonary veins',
      'Gas travels to cerebral or coronary circulation',
      'Presentation: sudden onset, usually within minutes of surfacing',
      'Neurological: sudden loss of consciousness, seizure, focal deficit',
      'Cardiac: arrhythmia, chest pain, cardiac arrest',
    ] },
    { type: 'keyPoint', text: 'Distinguishing AGE from neurological DCI can be difficult and is often academic. Treatment is the same: urgent recompression.' },

    { type: 'heading', level: 2, text: 'Differential Diagnosis and Treatment' },

    { type: 'heading', level: 3, text: 'DCI vs Other Conditions' },
    { type: 'table', headers: ['Similar Presentations', 'Practical Approach'], rows: [
      ['Stroke: sudden neuro deficit (no diving history needed)', 'Any neurological symptom after diving: assume DCI until proven otherwise'],
      ['Head injury: may co-exist with a diving incident', 'High-flow oxygen immediately (100%, non-rebreather mask)'],
      ['Inner ear barotrauma: vertigo, hearing loss (no bubbles)', 'Full neurological examination and documentation'],
      ['Musculoskeletal injury: joint pain from physical strain', 'Contact physician / diving medicine specialist'],
      ['', 'Let the expert decide the treatment pathway'],
    ] },

    { type: 'heading', level: 3, text: 'Therapeutic Recompression' },
    { type: 'paragraph', text: 'Principle: recompress the patient to reduce bubble size and drive gas back into solution.' },
    { type: 'list', items: [
      'RN62 (USN Table 6): most commonly used treatment table for DCI',
      'Initial compression to 18 msw (2.8 ATA) on 100% O₂ with air breaks',
      'Extensions possible if symptoms are not resolving',
      'RN67 (USN Table 6A): deeper table (50 msw) for severe or non-responsive cases',
      'Comex tables: used in some saturation scenarios',
    ] },
    { type: 'keyPoint', text: 'Table selection is a physician decision, not a DMT decision. The DMT\'s role: recognise DCI, start high-flow O₂, communicate findings clearly, and prepare for recompression.' },

    { type: 'heading', level: 2, text: 'Return to Diving and Travel After DCI' },
    { type: 'list', items: [
      'Return to diving: physician decision based on severity and resolution',
      'Type I DCI: typically minimum 2-4 weeks with medical clearance',
      'Type II DCI: typically minimum 4-6 weeks, may require specialist assessment',
      'Residual symptoms may permanently disqualify from diving',
      'Flying after diving: current DAN/UHMS guidance (typically 12-24 hours minimum)',
      'Flying after treatment for DCI: much longer delay required (typically 72 hours minimum)',
    ] },
    { type: 'inPractice', text: 'The DMT advises divers on these guidelines and ensures physician involvement in all return-to-diving decisions. Never clear a diver to return without physician authorisation.' },

    { type: 'heading', level: 2, text: 'O₂ Toxicity Updates' },
    { type: 'table', headers: ['CNS Toxicity', 'Pulmonary Toxicity'], rows: [
      ['ppO₂ threshold: approximately 1.6 bar (variable)', 'Prolonged ppO₂ > 0.5 bar'],
      ['VENTID-C: Vision, Ears, Nausea, Twitching, Irritability, Dizziness, Convulsions', 'Chest tightness, cough, reduced vital capacity'],
      ['Convulsion management: protect, do not restrain, reduce ppO₂', 'Managed with air breaks during treatment tables'],
      ['In-chamber seizure: switch off BIBS O₂, maintain depth', 'UPTD tracking for cumulative exposure'],
    ] },

    { type: 'heading', level: 2, text: 'Thermal Stress Updates' },
    { type: 'list', items: [
      'Barotrauma principles unchanged: Boyle\'s Law, gas-filled spaces, pressure change',
      'Tension pneumothorax: immediate decompression remains the priority',
      'Hypothermia and hyperthermia: management per current guidelines',
      'Hot water suit failures in saturation: rapid heat loss, core temperature monitoring',
      'Hyperthermia in tropical operations: deck work, inadequate hydration',
    ] },

    { type: 'heading', level: 2, text: 'Case-Based Discussion' },
    { type: 'paragraph', text: 'Case 1: A saturation diver at 90 msw storage depth develops bilateral leg weakness and tingling over 20 minutes during a treatment table at 18 msw. He was being treated for Type I DCI (shoulder pain) that had resolved.' },
    { type: 'list', items: [
      'What type of DCI is this now? (Type II — neurological)',
      'What is the significance of symptom progression during treatment?',
      'What examination findings would you expect?',
      'What should the DMT communicate to the physician?',
    ] },
    { type: 'paragraph', text: 'Case 2: A surface-supplied diver surfaces normally from 35 msw on air. Fifteen minutes later on deck he develops sudden right-sided weakness and slurred speech. His colleagues initially think he is joking.' },
    { type: 'list', items: [
      'DCI or stroke? Does it matter for initial management? (No — treat both urgently)',
      'What are your first three actions? (High-flow O₂, ABCDE, contact physician)',
      'How quickly does this need recompression?',
      'What information does the physician need from you?',
    ] },
  ],
  takeaways: [
    'DCI: recognise the presentation, start high-flow O₂, full neurological exam, contact physician immediately',
    'Type I vs Type II: the distinction guides treatment urgency — Type II is a medical emergency',
    'AGE: sudden onset on surfacing — same treatment pathway as neurological DCI',
    'Recompression: RN62 (USN Table 6) is the workhorse — table selection is a physician decision',
    'Return to diving and flying after DCI: follow current guidance, physician involvement is mandatory',
    'Any neurological symptom after diving: assume DCI until proven otherwise',
    'Everything in this session feeds into the in-person neurological exam and assessed DCI scenario',
  ],
  selfCheck: [
    {
      question: 'A diver surfaces and 20 minutes later develops right shoulder pain with no other symptoms. What type of DCI is this?',
      answer: 'Type I DCI (musculoskeletal). Joint pain without neurological or cardiopulmonary features.',
      rationale: 'Type I DCI is not immediately life-threatening but still requires treatment and physician notification. Always perform a neurological examination to exclude Type II involvement.',
    },
    {
      question: 'What is the DMT\'s role in therapeutic recompression?',
      answer: 'Recognise DCI, start high-flow oxygen, perform and document a neurological examination, communicate findings to the physician, and prepare the chamber. Table selection is the physician\'s decision.',
      rationale: 'The DMT is the first responder and the physician\'s hands during treatment. Clear communication of clinical findings guides the physician\'s treatment decisions.',
    },
    {
      question: 'A diver treated for Type II DCI asks when he can fly home. What do you advise?',
      answer: 'Typically a minimum of 72 hours after treatment for DCI. This is a physician decision.',
      rationale: 'Flying reduces ambient pressure, which could cause residual bubbles to expand. The delay is longer after DCI treatment than after normal diving.',
    },
    {
      question: 'What does "assume DCI until proven otherwise" mean in practice?',
      answer: 'Any neurological symptom following a dive should be treated as DCI: high-flow oxygen, ABCDE, full neurological exam, and immediate physician contact.',
      rationale: 'Missing DCI is more dangerous than over-treating it. The default position is to start the DCI management pathway and let the physician make the final diagnosis.',
    },
  ],
}
