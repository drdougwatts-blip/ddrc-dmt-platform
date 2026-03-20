export default {
  objectives: [
    'Perform a structured primary survey (ABCDE) and identify life threats',
    'Conduct a secondary survey including history taking',
    'Explain the principles of casualty management on site and during transfer',
    'Describe patient packaging and movement within a dive system',
    'Identify considerations for helicopter transfer of a diving casualty',
  ],
  prerequisites: [],
  preBrief: {
    haveReady: [
      'ABCDE framework notes (refresh before the session)',
      'DMAC 01 form',
    ],
    keyTerms: [
      { term: 'ABCDE', definition: 'Airway, Breathing, Circulation, Disability, Exposure — structured primary survey' },
      { term: 'AMPLE', definition: 'Allergies, Medications, Past medical history, Last oral intake, Events — history-taking framework' },
      { term: 'HRU', definition: 'Hyperbaric Rescue Unit — for emergency transfer of personnel under pressure' },
      { term: 'Log roll', definition: 'Technique to turn a patient while maintaining spinal alignment' },
    ],
    thinkAbout: [
      'When was the last time you used ABCDE in a real situation? What went well? What was hard?',
      'How would you package and move a patient through a chamber hatch?',
    ],
  },
  sections: [
    { type: 'paragraph', text: 'This is a review session for refresher candidates. The framework should be familiar. We are sharpening it, not re-teaching it. Practical ABCDE will be drilled extensively during in-person sessions.' },

    { type: 'heading', level: 2, text: 'Primary Survey: ABCDE Review' },

    { type: 'heading', level: 3, text: 'Airway and Breathing' },
    { type: 'table', headers: ['A: Airway', 'B: Breathing'], rows: [
      ['Is the patient talking? If yes, airway is open (for now)', 'Look: chest movement, symmetry, rate, effort'],
      ['Causes: tongue, blood, vomit, swelling', 'Listen: air entry, added sounds'],
      ['Interventions: positioning, suction, adjuncts (OPA, NPA, i-gel)', 'Feel: tracheal position, subcutaneous emphysema'],
      ['Fix before moving to B', 'Life threats: tension pneumothorax, flail chest'],
      ['', 'Count the respiratory rate. Give oxygen early.'],
    ] },

    { type: 'heading', level: 3, text: 'Circulation, Disability, and Exposure' },
    { type: 'list', items: [
      'C: Pulse, skin colour, capillary refill, bleeding control — tourniquet for limb catastrophic haemorrhage, direct pressure for trunk',
      'D: AVPU or GCS, pupils, blood glucose — lateralising signs (one side different from the other)',
      'E: Fully examine front and back, head to toe — remove clothing as needed (maintain dignity), temperature (measure it, do not guess), log roll if spinal injury suspected, then cover the patient to prevent heat loss',
    ] },
    { type: 'keyPoint', text: 'Fix life threats in order. Do not skip steps. Return to the start of ABCDE if the patient deteriorates at any point.' },

    { type: 'heading', level: 2, text: 'Secondary Survey and History' },
    { type: 'list', items: [
      'Only after all life threats are managed in the primary survey',
      'Head-to-toe systematic examination: scalp, face, neck, chest, abdomen, pelvis, limbs, back',
      'Look, feel, move (where appropriate and not contraindicated)',
      'AMPLE history: Allergies, Medications, Past medical history, Last oral intake, Events',
      'Document all findings: this feeds into the DMAC 01 report',
      'Re-assessment: return to primary survey if the patient deteriorates',
    ] },

    { type: 'heading', level: 2, text: 'On-Site Casualty Management' },
    { type: 'list', items: [
      'Safety: scene safety, PPE — you are no use as a second casualty',
      'Positioning: recovery position (unconscious, breathing), sitting upright (breathing difficulty), legs elevated (shock)',
      'Oxygen: give it when there is any clinical concern — high flow via reservoir mask',
      'Warmth: offshore patients lose heat rapidly — blankets, shelter, warm IV fluids',
      'Spinal precautions: selective approach based on mechanism and symptoms (current evidence has shifted away from routine immobilisation for all trauma)',
      'Reassurance: a conscious patient is frightened — talk to them, explain what you are doing',
    ] },

    { type: 'heading', level: 2, text: 'Patient Movement in Diving Operations' },

    { type: 'heading', level: 3, text: 'Within the Dive System' },
    { type: 'list', items: [
      'Bell to chamber: small hatches, limited space, difficult manoeuvring',
      'Patient may be on a stretcher or spinal board',
      'Requires teamwork and planning before starting the move',
      'Maintain monitoring throughout the transfer',
      'May require decompression first (cannot move a pressurised patient to the surface)',
      'If DCI: the patient stays under pressure — treatment in the chamber',
      'Equipment restrictions: what fits through the hatch?',
      'Hyperbaric rescue unit (HRU): for emergency transfer under pressure',
    ] },

    { type: 'heading', level: 3, text: 'Helicopter Transfer Considerations' },
    { type: 'list', items: [
      'Altitude: even low-altitude flights reduce ambient pressure — relevant for DCI and pneumothorax',
      'Many helicopter services will fly at sea level or minimal altitude for diving casualties',
      'Noise and vibration: monitoring is difficult — secure all equipment',
      'Limited space: the DMT may or may not escort the patient',
      'If escorting: prepare a written handover in case the situation changes',
      'Handover to receiving medical team: use DMAC 01 structure, be concise',
      'Coordinate timing with supervisor and vessel operations',
    ] },
    { type: 'divingContext', title: 'Altitude After Diving', text: 'Even low-altitude helicopter flights reduce ambient pressure. For a DCI patient, this is equivalent to ascending further — worsening bubble expansion. Communicate altitude restrictions clearly to the helicopter crew.' },
  ],
  takeaways: [
    'ABCDE: the framework for every patient — fix life threats in order, do not skip steps',
    'Secondary survey only after the primary survey is clear',
    'Positioning, oxygen, warmth, reassurance: the fundamentals of on-site care',
    'Moving patients in a dive system requires planning, teamwork, and maintained monitoring',
    'Helicopter transfer: altitude matters for diving casualties — communicate restrictions clearly',
    'All of this will be practised hands-on during the in-person week',
  ],
  selfCheck: [
    {
      question: 'You are performing ABCDE on a casualty. At "C" you find significant bleeding. At "D" you notice the pupils are unequal. Which do you address first?',
      answer: 'Address C (bleeding control) first. Fix each life threat in order before moving to the next letter.',
      rationale: 'The bleeding will kill the patient faster. Once haemorrhage is controlled and circulation is supported, then assess and address the neurological finding at D.',
    },
    {
      question: 'Why might a helicopter flight worsen a DCI patient\'s condition?',
      answer: 'Reduced ambient pressure at altitude causes gas bubbles to expand further (Boyle\'s Law), worsening symptoms.',
      rationale: 'Request sea-level or minimal-altitude flight for all diving casualties with suspected DCI or pneumothorax.',
    },
    {
      question: 'What is the current approach to spinal immobilisation in trauma?',
      answer: 'Selective approach based on mechanism and symptoms. Current evidence has shifted away from routine immobilisation for all trauma patients.',
      rationale: 'Unnecessary immobilisation causes discomfort and can mask other injuries. Assess the mechanism and clinical findings to guide your decision.',
    },
  ],
}
