export default {
  objectives: [
    'Classify shock by type: hypovolaemic, cardiogenic, neurogenic, septic, anaphylactic',
    'Recognise the signs and symptoms of each shock type',
    'Describe the management of anaphylaxis including adrenaline administration',
    'Describe the effects and management of electric shock',
    'Assess burn severity using appropriate methods',
    'Manage burns under normal and hyperbaric conditions',
  ],
  prerequisites: [
    { id: 'O1_4', label: 'O1.4 First Aid Principles' },
  ],
  preBrief: {
    haveReady: [
      'ABCDE framework notes from O1.4',
      'Pen and paper for the Rule of Nines diagram',
    ],
    keyTerms: [
      { term: 'Hypovolaemic shock', definition: 'Shock from volume loss — blood or fluid' },
      { term: 'Anaphylaxis', definition: 'Severe allergic reaction causing airway, breathing, and/or circulatory compromise' },
      { term: 'Rule of Nines', definition: 'Quick method to estimate burn surface area: head 9%, each arm 9%, anterior trunk 18%, each leg 18%' },
      { term: 'Parkland formula', definition: 'IV fluid calculation for major burns: 4 ml × body weight (kg) × %BSA burned' },
    ],
    thinkAbout: [
      'How would you distinguish between hypovolaemic and cardiogenic shock?',
      'What makes anaphylaxis different from a simple allergic reaction?',
    ],
  },
  sections: [
    { type: 'keyPoint', text: 'Shock is a failure of tissue perfusion. Every organ needs blood flow to survive. When that fails, the patient dies. Your job: recognise it, treat the cause where you can, support the circulation, and get physician input.' },

    { type: 'heading', level: 2, text: 'Shock' },

    { type: 'heading', level: 3, text: 'Hypovolaemic and Cardiogenic Shock' },
    { type: 'table', headers: ['Hypovolaemic (Volume Loss)', 'Cardiogenic (Pump Failure)'], rows: [
      ['Blood loss: trauma, internal bleeding', 'Heart cannot pump effectively'],
      ['Fluid loss: burns, vomiting, diarrhoea, dehydration', 'Causes: MI, arrhythmia, cardiac tamponade'],
      ['Signs: tachycardia, hypotension, pallor, cold peripheries', 'Signs: similar to hypovolaemic PLUS pulmonary oedema'],
      ['Compensated: body maintains BP through vasoconstriction', 'Breathlessness even when lying flat'],
      ['Decompensated: BP crashes, confusion, collapse', 'IV fluids may make this worse (unlike hypovolaemic)'],
      ['Treatment: stop the bleeding, replace the volume', 'Physician guidance essential for fluid management'],
    ] },

    { type: 'heading', level: 3, text: 'Neurogenic, Septic, and Anaphylactic Shock' },
    { type: 'list', items: [
      'Neurogenic: spinal cord injury causes vasodilation — hypotension WITH bradycardia (not tachycardia), warm flushed skin below injury level',
      'Septic: overwhelming infection, late presentation — fever (or hypothermia), tachycardia, confusion',
      'Anaphylactic: severe allergic reaction — rapid onset, airway swelling, bronchospasm, hypotension',
      'Causes offshore: marine stings, drugs, latex, food',
    ] },
    { type: 'inPractice', text: 'The key distinction: in hypovolaemic shock the patient is cold and clammy with tachycardia. In neurogenic shock, the patient is warm below the injury with bradycardia. In cardiogenic shock, there may be signs of pulmonary oedema. Getting the type right matters because IV fluids help hypovolaemic shock but can worsen cardiogenic shock.' },

    { type: 'heading', level: 2, text: 'Anaphylaxis' },

    { type: 'heading', level: 3, text: 'Recognising Anaphylaxis' },
    { type: 'paragraph', text: 'Rapid onset after exposure to a trigger (usually minutes):' },
    { type: 'list', items: [
      'Airway: swelling of tongue, lips, throat — stridor, hoarse voice',
      'Breathing: bronchospasm, wheeze, respiratory distress',
      'Circulation: tachycardia, hypotension, pallor, dizziness, collapse',
      'Skin: urticaria (hives), flushing, angioedema',
      'Gut: nausea, vomiting, abdominal pain',
    ] },
    { type: 'keyPoint', text: 'Anaphylaxis does not require all features to be present. Airway OR circulation compromise with a plausible trigger = treat as anaphylaxis.' },

    { type: 'heading', level: 3, text: 'Anaphylaxis Management Algorithm' },
    { type: 'orderedList', items: [
      'Remove the trigger if possible (stop the drug, remove the sting)',
      'IM adrenaline: 0.5 mg (0.5 ml of 1:1000) into the outer thigh',
      'Lie the patient flat with legs elevated (if breathing allows)',
      'High-flow oxygen via reservoir mask',
      'IV access and fluid challenge (under physician guidance)',
      'Repeat adrenaline at 5-minute intervals if no improvement',
      'Second-line: antihistamines and hydrocortisone (physician direction)',
      'Monitor for recurrence: biphasic reaction can occur hours later',
    ] },
    { type: 'divingContext', text: 'Practical IM injection technique is taught in-person on Day 2. Know the dose and route from memory: 0.5 mg IM into the outer thigh. This is the most important drug dose on the course.' },

    { type: 'heading', level: 2, text: 'Electric Shock' },
    { type: 'list', items: [
      'Offshore sources: welding equipment, power tools, damaged cables, switchboards',
      'Mechanisms of injury: electrical burn (entry and exit), cardiac arrhythmia, muscle spasm, falls',
      'Safety first: isolate the power source before touching the casualty',
      'Management: ABCDE approach, cardiac monitoring (arrhythmia risk persists for hours)',
      'Entry and exit wounds may look small but deep tissue damage can be extensive',
      'Compartment syndrome risk in affected limbs',
    ] },
    { type: 'inPractice', text: 'Hyperbaric considerations: electrical equipment in chambers must be certified safe. Chamber fire risk from electrical faults in oxygen-enriched atmosphere is a serious concern.' },

    { type: 'heading', level: 2, text: 'Burns' },

    { type: 'heading', level: 3, text: 'Burns Assessment' },
    { type: 'paragraph', text: 'Depth classification:' },
    { type: 'list', items: [
      'Superficial (epidermal): red, painful, no blisters — like sunburn',
      'Partial thickness (dermal): blisters, very painful, moist surface',
      'Full thickness: white or charred, painless (nerves destroyed), dry',
      'Mixed depth burns are common',
    ] },
    { type: 'paragraph', text: 'Extent estimation:' },
    { type: 'list', items: [
      'Rule of Nines: head 9%, each arm 9%, anterior trunk 18%, posterior trunk 18%, each leg 18%, perineum 1%',
      'Palm method: patient\'s palm (including fingers) ≈ 1% BSA — useful for small or scattered burns',
      'Special areas (face, hands, perineum, circumferential burns): always need physician involvement',
    ] },
    { type: 'image', alt: 'Rule of Nines diagram showing body surface area percentages for burn assessment' },

    { type: 'heading', level: 3, text: 'Burns Management' },
    { type: 'list', items: [
      'Cooling: cool running water for 20 minutes (within 3 hours of injury)',
      'Do not use ice. Do not overcool — hypothermia is a risk in extensive burns',
      'Covering: cling film (laid on, not wrapped circumferentially), non-adherent dressings',
      'Pain: paracetamol and ibuprofen for minor burns. Morphine may be needed (physician guidance)',
      'Fluid resuscitation: burns > 15% BSA in adults need IV fluids',
    ] },
    { type: 'keyPoint', title: 'Parkland Formula (Simplified)', text: '4 ml × body weight (kg) × %BSA burned. Half in the first 8 hours, half in the next 16 hours. The DMT does not need to calculate this precisely — understand the principle: big burns need big volumes of fluid.' },

    { type: 'heading', level: 3, text: 'Associated Injuries' },
    { type: 'list', items: [
      'Inhalation injury: singed facial hair, soot in airway, hoarse voice (cross-reference O2.1)',
      'Blast injury: burns plus blunt trauma, eardrums, blast lung',
      'Circumferential burns: limb or chest — risk of vascular compromise or respiratory restriction',
      'Chemical burns: specific decontamination protocols depending on the agent',
      'Flash fire on deck: common offshore scenario with potential for multiple casualties',
    ] },
  ],
  takeaways: [
    'Shock: recognise the signs (tachycardia, hypotension, confusion), treat the cause, support circulation',
    'Anaphylaxis: IM adrenaline 0.5 mg into the outer thigh — do not delay, repeat at 5 minutes if needed',
    'Electric shock: isolate power first, cardiac monitoring, look for entry and exit wounds',
    'Burns: cool for 20 minutes, cover with cling film, assess depth and extent, IV fluids for > 15% BSA',
    'Know the difference between shock types — IV fluids help hypovolaemic shock but can worsen cardiogenic',
    'For all emergencies: ABCDE, physician contact, documentation using DMAC 01',
  ],
  selfCheck: [
    {
      question: 'What is the dose, route, and site for adrenaline in anaphylaxis?',
      answer: '0.5 mg (0.5 ml of 1:1000) by IM injection into the outer thigh.',
      rationale: 'This is the single most important drug dose on the course. IM into the outer thigh provides reliable absorption. Repeat every 5 minutes if no improvement.',
    },
    {
      question: 'How do you distinguish neurogenic shock from hypovolaemic shock?',
      answer: 'Neurogenic shock: hypotension with bradycardia and warm, flushed skin below the injury level. Hypovolaemic shock: hypotension with tachycardia and cold, clammy skin.',
      rationale: 'In neurogenic shock, spinal cord injury causes loss of sympathetic tone, leading to vasodilation and bradycardia. In hypovolaemic shock, the body compensates with vasoconstriction and tachycardia.',
    },
    {
      question: 'A crew member has burns to both arms and the anterior chest. Using the Rule of Nines, estimate the burn area.',
      answer: 'Each arm = 9%, anterior chest = 9%. Total = approximately 27% BSA.',
      rationale: 'Burns > 15% BSA require IV fluid resuscitation. This patient needs IV access, fluids (Parkland formula), pain management, and physician involvement.',
    },
    {
      question: 'Why might giving IV fluids to a patient in cardiogenic shock make things worse?',
      answer: 'The heart is already failing to pump effectively. Adding more fluid increases the volume the heart cannot handle, worsening pulmonary oedema.',
      rationale: 'This is why identifying the type of shock matters. Hypovolaemic shock needs volume. Cardiogenic shock needs the heart to pump better, not more fluid.',
    },
  ],
}
