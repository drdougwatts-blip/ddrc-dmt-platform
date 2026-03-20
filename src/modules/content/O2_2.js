export default {
  objectives: [
    'Explain the mechanism and prevention of squeeze (mask, suit, ear, sinus)',
    'Describe middle and inner ear barotrauma: mechanisms, signs, and management',
    'Identify ear infections and their management including saturation ear hygiene',
    'Explain lung overexpansion injuries: pneumothorax, pneumomediastinum, subcutaneous emphysema',
    'Describe first-line management of barotrauma under normal and hyperbaric conditions',
  ],
  prerequisites: [
    { id: 'O1_1', label: 'O1.1 Physiology Review' },
    { id: 'O1_2', label: 'O1.2 Diving Physics' },
  ],
  preBrief: {
    haveReady: [
      'Notes from O1.1 (ear anatomy) and O1.2 (Boyle\'s Law)',
      'Pen and paper for diagrams',
    ],
    keyTerms: [
      { term: 'Barotrauma', definition: 'Tissue injury caused by pressure change in a gas-filled space (Boyle\'s Law)' },
      { term: 'Teed classification', definition: 'Grading system for middle ear barotrauma: Grade I (injection) through Grade V (perforation)' },
      { term: 'Perilymph fistula', definition: 'Rupture of the round or oval window — inner ear barotrauma requiring urgent referral' },
      { term: 'Alternobaric vertigo', definition: 'Vertigo caused by asymmetric equalisation between the two ears' },
      { term: 'Subcutaneous emphysema', definition: 'Air trapped under the skin — crackling sensation on palpation' },
    ],
    thinkAbout: [
      'Why is inner ear barotrauma more serious than middle ear barotrauma?',
      'What happens to a pneumothorax during ascent?',
    ],
  },
  sections: [
    { type: 'keyPoint', text: 'Every barotrauma topic in this module is a consequence of Boyle\'s Law. Gas-filled spaces and pressure change — that is the entire mechanism.' },

    { type: 'heading', level: 2, text: 'Squeeze' },

    { type: 'heading', level: 3, text: 'Mask and Suit Squeeze' },
    { type: 'list', items: [
      'Mask squeeze: negative pressure develops in the mask on descent, causing periorbital bruising and subconjunctival haemorrhage',
      'Prevention: equalise the mask by exhaling through the nose on descent',
      'Suit squeeze: skin folds trapped under the suit, causing linear bruising',
      'Prevention: inflate the suit adequately on descent',
      'Both are usually self-limiting and resolve without treatment',
    ] },

    { type: 'heading', level: 3, text: 'Sinus Squeeze' },
    { type: 'list', items: [
      'Frontal and maxillary sinuses are air-filled cavities',
      'On descent: negative pressure causes pain and mucosal swelling',
      'Epistaxis (nosebleed) is common',
      'Referred pain can mimic toothache',
      'If symptoms persist: refer for specialist assessment',
      'Prevention: avoid diving with an upper respiratory tract infection',
    ] },

    { type: 'heading', level: 2, text: 'Ear Barotrauma' },

    { type: 'heading', level: 3, text: 'Middle Ear Barotrauma' },
    { type: 'paragraph', text: 'Middle ear barotrauma is the most common barotrauma in diving. The Eustachian tube fails to open on descent, creating a pressure differential across the eardrum.' },
    { type: 'paragraph', text: 'Progressive presentation: pain → hearing loss → tympanic membrane rupture. Vertigo may occur if cold water enters through a perforation.' },
    { type: 'paragraph', text: 'Teed classification:' },
    { type: 'table', headers: ['Grade', 'Finding'], rows: [
      ['I', 'Injection (redness) of the tympanic membrane'],
      ['II', 'Injection with slight haemorrhage'],
      ['III', 'Gross haemorrhage within the drum'],
      ['IV', 'Free blood in the middle ear (dark drum)'],
      ['V', 'Perforation of the tympanic membrane'],
    ] },
    { type: 'paragraph', text: 'Management: stop descent, ascend gently, no further diving until cleared. Otoscopic examination will be practised in-person.' },

    { type: 'heading', level: 3, text: 'Inner Ear Barotrauma' },
    { type: 'paragraph', text: 'Mechanism: forceful equalisation against a blocked Eustachian tube transmits a pressure wave to the round or oval window, potentially causing rupture (perilymph fistula). Can occur on descent or ascent.' },
    { type: 'paragraph', text: 'Recognition:' },
    { type: 'list', items: [
      'Sudden sensorineural hearing loss',
      'Vertigo (often severe and persistent)',
      'Tinnitus',
    ] },
    { type: 'keyPoint', title: 'Critical Distinction', text: 'Middle ear barotrauma is common and usually self-limiting. Inner ear barotrauma requires urgent specialist referral — same day. If in doubt, assume inner ear and refer.' },

    { type: 'heading', level: 3, text: 'Alternobaric Vertigo' },
    { type: 'list', items: [
      'Asymmetric equalisation between the two ears',
      'Unequal pressure stimulates the vestibular system: vertigo',
      'Can occur on ascent (reverse squeeze) or descent',
      'Usually brief and self-limiting once pressures equalise',
      'Risk: disorientation underwater, panic, loss of buoyancy control',
      'Management: stop, hold depth, wait for it to pass. Ascend slowly if it does not resolve.',
    ] },

    { type: 'heading', level: 2, text: 'Ear Infections and Saturation Hygiene' },

    { type: 'heading', level: 3, text: 'Otitis Externa' },
    { type: 'list', items: [
      'Very common in saturation: humidity, warmth, and earphone use create ideal conditions',
      'Signs: pain on ear tug, swelling of the canal, discharge',
      'First-line treatment: antibiotic/steroid ear drops',
      'Prevention: drying after washing, prophylactic drops, ear hygiene protocols',
    ] },

    { type: 'heading', level: 3, text: 'Otitis Media' },
    { type: 'list', items: [
      'Middle ear infection behind the drum — less common but more significant',
      'Pain, hearing loss, possibly fever',
      'May need oral antibiotics (physician decision)',
      'Diving fitness: cannot dive with active otitis media',
      'DMT advises the physician; the physician makes the fitness decision',
    ] },
    { type: 'divingContext', title: 'Saturation Ear Hygiene', text: 'Ear hygiene protocols should be in place for every saturation run from day one. Prevention is always better than treatment. Ear problems are the most common medical complaint in saturation.' },

    { type: 'heading', level: 2, text: 'Lung Overexpansion Injuries' },
    { type: 'paragraph', text: 'Gas trapped in the lungs expands on ascent (Boyle\'s Law). Causes include breath-holding on ascent and gas trapping from airway disease. This can occur with very small pressure changes — even in swimming pool depths.' },
    { type: 'paragraph', text: 'Expanding gas can rupture alveoli and track to different locations:' },
    { type: 'list', items: [
      'Pleural space → pneumothorax',
      'Mediastinum → pneumomediastinum',
      'Subcutaneous tissues → subcutaneous emphysema',
      'Pulmonary veins → arterial gas embolism (AGE)',
    ] },

    { type: 'heading', level: 3, text: 'Pneumothorax' },
    { type: 'table', headers: ['Simple Pneumothorax', 'Tension Pneumothorax'], rows: [
      ['Air in pleural space, lung partially collapsed', 'One-way valve: air enters but cannot escape'],
      ['Chest pain, dyspnoea, reduced breath sounds on affected side', 'Lung fully collapsed, mediastinal shift'],
      ['Management: oxygen, monitor, evacuate', 'Tracheal deviation, absent breath sounds, hypotension, distended neck veins'],
      ['', 'Life-threatening emergency: requires immediate decompression'],
    ] },
    { type: 'inPractice', text: 'Chest drain theory is covered today. Demonstration and practice are in-person. Remember: a pneumothorax worsens on ascent (Boyle\'s Law). Never ascend a patient with an untreated pneumothorax.' },

    { type: 'heading', level: 3, text: 'Pneumomediastinum, Emphysema, and AGE Introduction' },
    { type: 'list', items: [
      'Pneumomediastinum: air in the mediastinum — chest pain, voice change, subcutaneous crepitus in the neck',
      'Subcutaneous emphysema: air under the skin — crackling sensation on palpation, usually self-limiting',
      'Arterial gas embolism (AGE): air enters pulmonary veins and travels to the brain or coronary arteries',
      'AGE presentation: sudden neurological deficit immediately on surfacing',
      'AGE is covered in full detail in the DCI module (Thursday shared session)',
    ] },
    { type: 'keyPoint', text: 'Lung overpressure can cause both local injury (pneumothorax, emphysema) and systemic injury (arterial gas embolism). A diver who surfaces and immediately develops neurological symptoms may have AGE.' },

    { type: 'heading', level: 2, text: 'Skin and Eye Injuries' },
    { type: 'list', items: [
      'Suit squeeze injuries: linear bruising from skin folds under neoprene',
      'Marine life contact: coral cuts (infect easily), jellyfish stings',
      'Cuts and abrasions: common in the offshore working environment',
      'Eyes: mask squeeze (subconjunctival haemorrhage), chemical exposure, foreign bodies, welding flash',
      'Management: irrigate eyes with clean water, remove superficial foreign bodies',
      'Wound care under pressure: dressings in a confined, humid chamber environment',
      'When to refer: penetrating eye injury, chemical burns, infection not responding to first aid',
    ] },
  ],
  takeaways: [
    'All barotrauma is Boyle\'s Law: gas-filled spaces and pressure change',
    'Middle ear barotrauma is common and usually self-limiting; inner ear barotrauma requires urgent specialist referral',
    'Ear infections in saturation: prevention through hygiene protocols is always better than treatment',
    'Lung overexpansion: tension pneumothorax is a life-threatening emergency requiring immediate decompression',
    'AGE: sudden neurological deficit on surfacing — covered in full in the DCI module',
    'Ear examination and chest drain skills are practised in-person',
  ],
  selfCheck: [
    {
      question: 'What is the key difference between middle ear and inner ear barotrauma in terms of management urgency?',
      answer: 'Middle ear barotrauma is usually self-limiting and managed conservatively. Inner ear barotrauma requires urgent same-day specialist referral due to risk of permanent hearing loss.',
      rationale: 'The inner ear contains the cochlea and vestibular organs. Damage to the round or oval window (perilymph fistula) needs specialist assessment and may require surgery.',
    },
    {
      question: 'A diver surfaces and immediately collapses with left-sided weakness. What should you suspect?',
      answer: 'Arterial gas embolism (AGE) from lung overpressure injury. Gas has entered the pulmonary veins and travelled to the brain.',
      rationale: 'Sudden neurological deficit immediately on surfacing is the classic AGE presentation. Treat as DCI: high-flow oxygen, ABCDE, contact physician, prepare for recompression.',
    },
    {
      question: 'Why does a pneumothorax become more dangerous during ascent?',
      answer: 'Boyle\'s Law: the trapped gas in the pleural space expands as ambient pressure decreases, worsening lung compression.',
      rationale: 'A 500 ml pneumothorax at 30 msw becomes 2000 ml at the surface. Never ascend a patient with an untreated pneumothorax.',
    },
    {
      question: 'What is alternobaric vertigo and why is it dangerous?',
      answer: 'Vertigo caused by asymmetric equalisation between the two ears. Dangerous because it causes disorientation underwater, which can lead to panic and loss of buoyancy control.',
      rationale: 'Usually self-limiting once pressures equalise, but can be extremely alarming underwater. Stop, hold depth, and wait for it to resolve.',
    },
  ],
}
