export default {
  objectives: [
    'Describe the causes, recognition, and management of hypothermia including low-reading thermometer use',
    'Explain hyperthermia and dehydration: causes, signs, and management',
    'Describe the effect of cold on divers\' performance and thermal stress in saturation',
    'Explain the pathophysiology and management of drowning and secondary drowning',
    'Describe asphyxia, pulmonary oedema, and vomiting under water',
  ],
  prerequisites: [
    { id: 'O1_4', label: 'O1.4 First Aid Principles' },
  ],
  preBrief: {
    haveReady: [
      'ABCDE framework notes',
      'Pen and paper',
    ],
    keyTerms: [
      { term: 'Afterdrop', definition: 'Core temperature continues to fall during rewarming as cold blood returns from the peripheries' },
      { term: 'Heat stroke', definition: 'Core temperature > 40°C with failure of thermoregulation — a medical emergency' },
      { term: 'Secondary drowning', definition: 'Delayed deterioration after submersion — pulmonary oedema develops hours later' },
      { term: 'Immersion pulmonary oedema', definition: 'Fluid in the lungs caused by hydrostatic effects of immersion and high work of breathing' },
    ],
    thinkAbout: [
      'Why is hypothermia particularly dangerous in saturation diving?',
      'A near-drowning casualty seems fine 30 minutes later. Is it safe to send them back to work?',
    ],
  },
  sections: [
    { type: 'heading', level: 2, text: 'Hypothermia' },

    { type: 'heading', level: 3, text: 'Hypothermia Staging' },
    { type: 'table', headers: ['Stage', 'Core Temp', 'Signs'], rows: [
      ['Mild', '32-35°C', 'Shivering, confusion, poor coordination'],
      ['Moderate', '28-32°C', 'Shivering stops, drowsy, muscle rigidity'],
      ['Severe', '< 28°C', 'Unconscious, very slow pulse, risk of VF'],
      ['Profound', '< 24°C', 'May appear dead'],
    ] },
    { type: 'keyPoint', text: 'Shivering is protective. When it stops, the patient is getting worse, not better. Core temperature must be measured with a low-reading thermometer — standard thermometers do not read below 35°C.' },
    { type: 'paragraph', text: 'Rectal or oesophageal temperature is most accurate. Tympanic thermometers may be unreliable in cold conditions.' },

    { type: 'heading', level: 3, text: 'Hypothermia Management' },
    { type: 'list', items: [
      'Prevent further heat loss: remove wet clothing, insulate, shelter from wind',
      'Handle gently: rough handling can precipitate cardiac arrest (VF)',
      'Passive rewarming (mild): warm environment, blankets, warm drinks if conscious',
      'Active external rewarming (moderate): warm packs to axillae, groin, neck',
      'Active core rewarming (severe): warm IV fluids, warm humidified oxygen',
      'Cardiac arrest in hypothermia: continue CPR, limit drug doses, do not pronounce until rewarmed',
    ] },
    { type: 'paragraph', text: 'Two critical concepts:' },
    { type: 'list', items: [
      'Afterdrop: core temperature continues to fall initially during rewarming as cold blood returns from peripheries',
      'Rewarming collapse: vasodilation during rewarming causes hypotension — handle with care',
    ] },
    { type: 'keyPoint', title: 'The Golden Rule', text: 'Nobody is dead until they are warm and dead. Continue resuscitation in hypothermic cardiac arrest. Rewarming may restore a viable rhythm.' },

    { type: 'heading', level: 2, text: 'Hyperthermia and Dehydration' },

    { type: 'heading', level: 3, text: 'Heat Illness' },
    { type: 'table', headers: ['Heat Exhaustion', 'Heat Stroke'], rows: [
      ['Core temp mildly elevated (37.5-40°C)', 'Core temp > 40°C — a medical emergency'],
      ['Heavy sweating, fatigue, headache, nausea', 'Sweating stops (thermoregulation fails)'],
      ['Still sweating (thermoregulation intact)', 'Confusion, seizures, collapse, organ damage'],
      ['Management: rest, shade, cool fluids, cooling', 'Management: aggressive cooling, IV fluids, evacuate'],
      ['Usually recovers with appropriate treatment', 'This can kill if not treated rapidly'],
    ] },
    { type: 'divingContext', text: 'Offshore context: deck work in tropical climates and hot suits in saturation both create heat illness risk. Heat stroke is a life-threatening emergency that requires aggressive cooling.' },

    { type: 'heading', level: 3, text: 'Dehydration' },
    { type: 'list', items: [
      'Chronic and common in saturation: warm environment, insensible losses, inadequate intake',
      'Also a risk during deck work in hot climates',
      'Signs: thirst, dark urine, reduced urine output, tachycardia, headache',
      'Severe: confusion, hypotension, renal impairment',
      'Management: oral rehydration if conscious, IV fluids if severe or vomiting',
      'Prevention: hydration protocols in saturation, scheduled fluid intake during hot work',
    ] },

    { type: 'heading', level: 3, text: 'Thermal Stress and Cold on Diver Performance' },
    { type: 'list', items: [
      'Cold reduces manual dexterity, reaction time, and cognitive function',
      'A cold diver makes more mistakes and is slower to respond to emergencies',
      'Hot water suit failures in saturation: rapid heat loss at depth',
      'Core temperature monitoring: the DMT advises the supervisor on thermal fitness',
      'When to recommend recovery: progressive cooling, shivering, reduced performance',
    ] },
    { type: 'inPractice', text: 'The DMT may need to advocate for diver safety against operational pressure to continue. If a diver is cold and performance is degraded, the safe decision is to recover them — regardless of operational schedule.' },

    { type: 'heading', level: 2, text: 'Drowning and Related Conditions' },

    { type: 'heading', level: 3, text: 'Drowning: Pathophysiology and Management' },
    { type: 'paragraph', text: 'Drowning is respiratory impairment from submersion or immersion in liquid. The mechanism involves aspiration of water, laryngospasm, and hypoxia. The salt water vs fresh water distinction has limited clinical relevance in first aid.' },
    { type: 'list', items: [
      'Rescue from water safely — do not become a second casualty',
      'ABCDE approach with 5 initial rescue breaths before starting compressions (drowning-specific modification)',
      'Oxygenation is the priority (respiratory cause of arrest)',
      'Hypothermia is often concurrent: manage both simultaneously',
      'Vomiting during resuscitation is common: be prepared to clear the airway',
    ] },
    { type: 'keyPoint', title: 'Secondary Drowning', text: 'The patient may appear well initially then deteriorate hours later. Pulmonary oedema develops gradually after aspiration. Any near-drowning event requires an observation period with monitoring, even if the patient seems fine.' },

    { type: 'heading', level: 3, text: 'Asphyxia and Pulmonary Oedema' },
    { type: 'table', headers: ['Asphyxia', 'Pulmonary Oedema'], rows: [
      ['Causes: gas supply failure, entrapment, confined space', 'Fluid in the alveoli impairs gas exchange'],
      ['Rapid unconsciousness if complete', 'Causes: immersion, cardiac failure, near-drowning'],
      ['Management: remove cause, provide oxygen, BLS if needed', 'Negative pressure breathing at depth'],
      ['', 'Signs: dyspnoea, frothy sputum, crackles on auscultation'],
      ['', 'Management: sit upright, oxygen, evacuate, physician guidance'],
    ] },

    { type: 'heading', level: 3, text: 'Vomiting Under Water' },
    { type: 'list', items: [
      'Aspiration risk: vomit inhaled into the lungs',
      'Can occur from seasickness, gas toxicity, panic, or illness',
      'Diver with a regulator: keep the regulator in the mouth, purge after vomiting',
      'Full-face mask: vomit can obstruct the breathing circuit',
      'If the diver is unconscious with vomiting: immediate recovery to the surface',
      'Post-event: treat as a near-drowning — observe for secondary deterioration',
    ] },
  ],
  takeaways: [
    'Hypothermia: stage it, rewarm gently, continue CPR until rewarmed — nobody is dead until they are warm and dead',
    'Heat stroke is a life-threatening emergency: aggressive cooling, not just shade and fluids',
    'Cold divers make mistakes: the DMT advises on thermal fitness and may need to advocate for recovery',
    'Drowning: 5 rescue breaths first, then standard CPR — hypothermia is often concurrent',
    'Secondary drowning: observation period is essential even if the patient seems well initially',
    'Practical temperature measurement and vital signs monitoring are covered in-person',
  ],
  selfCheck: [
    {
      question: 'At what stage of hypothermia does shivering stop, and what does this indicate?',
      answer: 'Shivering stops at moderate hypothermia (28-32°C). This indicates thermoregulation is failing and the patient is getting worse.',
      rationale: 'Shivering is a protective mechanism. Its cessation means the body can no longer generate heat effectively. Active rewarming is now needed.',
    },
    {
      question: 'What is the key difference between heat exhaustion and heat stroke?',
      answer: 'In heat exhaustion, the patient is still sweating (thermoregulation intact). In heat stroke, sweating stops (thermoregulation has failed) and core temperature exceeds 40°C.',
      rationale: 'Heat stroke is a medical emergency with risk of organ damage and death. Heat exhaustion usually recovers with rest, shade, and cooling.',
    },
    {
      question: 'Why do drowning resuscitation guidelines recommend 5 rescue breaths before starting compressions?',
      answer: 'Drowning is a respiratory cause of cardiac arrest. Oxygenation is the priority, so initial rescue breaths address the primary problem.',
      rationale: 'This differs from standard BLS (30:2 starting with compressions) because the heart has stopped due to hypoxia, not a primary cardiac problem.',
    },
    {
      question: 'A near-drowning casualty is conscious and seems fine 30 minutes later. Can they return to work?',
      answer: 'No. Any near-drowning event requires an observation period with monitoring due to the risk of secondary drowning (delayed pulmonary oedema).',
      rationale: 'Secondary drowning can develop hours after the event. The patient may deteriorate unexpectedly. Physician involvement is required.',
    },
  ],
}
