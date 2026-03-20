// Revision quiz questions drawn from across all modules
// Organised by topic area for optional filtering

export const revisionTopics = [
  { id: 'foundations', label: 'Foundations (Physics & Physiology)' },
  { id: 'diving-medicine', label: 'Diving Medicine (DCI, Barotrauma, Gas Toxicity)' },
  { id: 'emergencies', label: 'Medical Emergencies & Trauma' },
  { id: 'professional', label: 'Professional Practice & Communication' },
]

export const fullCourseRevision = [
  // --- Foundations ---
  {
    topic: 'foundations',
    question: 'A diver at 40 msw is breathing air. What is the approximate partial pressure of nitrogen?',
    options: ['2.37 bar', '3.16 bar', '3.95 bar', '4.74 bar'],
    correct: 2,
    explanation: 'At 40 msw, absolute pressure = 5 ATA. Air is ~79% nitrogen. ppN₂ = 5 × 0.79 = 3.95 bar. This level causes significant nitrogen narcosis.',
  },
  {
    topic: 'foundations',
    question: 'Which gas law explains why a diver must equalise their ears during descent?',
    options: ["Henry's Law", "Dalton's Law", "Boyle's Law", "Charles's Law"],
    correct: 2,
    explanation: "Boyle's Law: as pressure increases on descent, the gas volume in the middle ear decreases, creating a pressure differential across the eardrum. Equalisation restores the balance.",
  },
  {
    topic: 'foundations',
    question: 'An adult has approximately how many litres of blood?',
    options: ['2 litres', '3.5 litres', '5 litres', '7.5 litres'],
    correct: 2,
    explanation: 'Total adult blood volume is approximately 5 litres (70 ml/kg). This is relevant to estimating blood loss in trauma — losing 1 litre represents 20% of total volume.',
  },
  {
    topic: 'foundations',
    question: 'The autonomic nervous system controls:',
    options: [
      'Voluntary muscle movement',
      'Conscious thought and speech',
      'Involuntary functions including heart rate and blood pressure',
      'Skeletal muscle tone',
    ],
    correct: 2,
    explanation: 'The autonomic nervous system controls involuntary functions: heart rate, blood pressure, gut function, and pupil responses. The sympathetic response drives tachycardia and vasoconstriction in shock.',
  },
  {
    topic: 'foundations',
    question: 'Haemoglobin is responsible for:',
    options: [
      'Clotting at wound sites',
      'Fighting infection',
      'Transporting oxygen in the blood',
      'Maintaining blood pressure',
    ],
    correct: 2,
    explanation: 'Haemoglobin in red blood cells binds and transports oxygen from the lungs to the tissues. Carbon monoxide competes for the same binding sites, 200-250 times more strongly than oxygen.',
  },
  {
    topic: 'foundations',
    question: 'At the surface, atmospheric pressure is:',
    options: ['0.5 bar', '1 bar (1 ATA)', '2 bar', '10 bar'],
    correct: 1,
    explanation: 'Atmospheric pressure at sea level is 1 bar (1 ATA). This is the baseline from which all depth-pressure calculations start. Pressure increases by 1 bar per 10 msw of descent.',
  },
  {
    topic: 'foundations',
    question: 'The alveoli are the site of:',
    options: [
      'Mucus production',
      'Air warming and humidification',
      'Gas exchange between air and blood',
      'Cough reflex initiation',
    ],
    correct: 2,
    explanation: 'Alveoli are tiny air sacs where oxygen crosses into the blood and CO₂ crosses out, driven by partial pressure gradients. Conditions like pulmonary oedema or pneumothorax disrupt this exchange.',
  },
  // --- Diving Medicine ---
  {
    topic: 'diving-medicine',
    question: 'A diver surfaces from 45 msw and immediately develops right-sided weakness and confusion. The most likely diagnosis is:',
    options: ['Type I DCI', 'Heat stroke', 'Arterial gas embolism', 'Hypoglycaemia'],
    correct: 2,
    explanation: 'Sudden neurological symptoms within seconds to minutes of surfacing strongly suggest AGE. Gas enters the arterial circulation via damaged pulmonary vessels and embolises to the brain.',
  },
  {
    topic: 'diving-medicine',
    question: 'The "vestibular" form of Type II DCI presents with:',
    options: [
      'Joint pain in the shoulders',
      'Vertigo, nausea, and balance problems (the staggers)',
      'Chest pain and cough',
      'Skin rash and itching',
    ],
    correct: 1,
    explanation: 'Vestibular DCI ("the staggers") affects the inner ear and vestibular system, causing vertigo, nausea, vomiting, and severe balance problems. It requires urgent recompression.',
  },
  {
    topic: 'diving-medicine',
    question: 'Air breaks during recompression therapy serve to:',
    options: [
      'Allow the patient to eat and drink',
      'Reduce the risk of oxygen toxicity',
      'Save oxygen supplies',
      'Allow the tender to rest',
    ],
    correct: 1,
    explanation: 'Air breaks (periods breathing air instead of 100% O₂) during recompression reduce the cumulative oxygen exposure and lower the risk of both CNS and pulmonary oxygen toxicity.',
  },
  {
    topic: 'diving-medicine',
    question: 'Otitis externa in saturation is best prevented by:',
    options: [
      'Wearing earplugs at all times',
      'Ear hygiene protocols including drying and prophylactic drops',
      'Daily antibiotic ear drops for all divers',
      'Keeping the chamber temperature below 20°C',
    ],
    correct: 1,
    explanation: 'Prevention of otitis externa in saturation: established ear hygiene protocols (drying after washing, prophylactic acidifying drops, limiting earphone use). Prevention is always better than treatment.',
  },
  {
    topic: 'diving-medicine',
    question: 'The VENTID-C signs indicate impending:',
    options: [
      'Decompression illness',
      'Carbon monoxide poisoning',
      'CNS oxygen toxicity convulsion',
      'Nitrogen narcosis',
    ],
    correct: 2,
    explanation: 'VENTID-C (Vision, Ears, Nausea, Twitching, Irritability, Dizziness, Convulsions) are the warning signs preceding a CNS oxygen toxicity seizure. Not all signs appear, and convulsion may occur without warning.',
  },
  {
    topic: 'diving-medicine',
    question: 'A diver with Teed Grade III middle ear barotrauma has:',
    options: [
      'No visible signs, just symptoms',
      'Slight redness of the tympanic membrane',
      'Haemorrhage within the substance of the tympanic membrane',
      'Perforation of the tympanic membrane',
    ],
    correct: 2,
    explanation: 'Teed Grade III shows haemorrhage within the tympanic membrane itself. Grade 0 = symptoms only, I = injection/redness, II = slight haemorrhage, III = gross haemorrhage in TM, IV = free blood in middle ear, V = perforation.',
  },
  // --- Medical Emergencies ---
  {
    topic: 'emergencies',
    question: 'The Parkland formula for burns fluid resuscitation is:',
    options: [
      '2 ml × weight (kg) × %BSA',
      '4 ml × weight (kg) × %BSA',
      '10 ml × weight (kg) × %BSA',
      '1 litre per 10% BSA burned',
    ],
    correct: 1,
    explanation: 'Parkland formula: 4 ml × body weight (kg) × %BSA burned over 24 hours. Half is given in the first 8 hours from the time of burn (not from time of presentation).',
  },
  {
    topic: 'emergencies',
    question: 'Anaphylaxis that does not respond to the first dose of adrenaline should be managed by:',
    options: [
      'Switching to a different drug',
      'Repeating 0.5 mg IM adrenaline every 5 minutes',
      'Giving IV adrenaline immediately',
      'Waiting 30 minutes before reassessing',
    ],
    correct: 1,
    explanation: 'If there is no improvement after the first dose, repeat adrenaline 0.5 mg IM every 5 minutes. IV adrenaline is reserved for specialist use in cardiac arrest or refractory anaphylaxis with haemodynamic monitoring.',
  },
  {
    topic: 'emergencies',
    question: 'A patient in severe hypothermia (<28°C) who is in cardiac arrest should receive:',
    options: [
      'No resuscitation — they are beyond help',
      'CPR for a maximum of 20 minutes',
      'Continuous CPR with active rewarming; withhold or space drug doses',
      'Defibrillation only, no compressions',
    ],
    correct: 2,
    explanation: 'In severe hypothermia with cardiac arrest: continue CPR, actively rewarm, and withhold or space adrenaline doses (the cold heart is less responsive to drugs). Do not declare death until the patient is warm.',
  },
  {
    topic: 'emergencies',
    question: 'Heat stroke is differentiated from heat exhaustion by:',
    options: [
      'The presence of a headache',
      'Core temperature >40°C with altered consciousness and cessation of sweating',
      'The patient being outdoors',
      'Dehydration being present',
    ],
    correct: 1,
    explanation: 'Heat stroke = thermoregulatory failure: core temp >40°C, altered consciousness, and often cessation of sweating. This is a medical emergency requiring aggressive cooling. Heat exhaustion responds to rest and rehydration.',
  },
  {
    topic: 'emergencies',
    question: 'The Rule of Nines assigns what percentage to each lower limb?',
    options: ['9%', '14%', '18%', '27%'],
    correct: 2,
    explanation: 'Each lower limb = 18% (front 9%, back 9%). Head = 9%, each arm = 9%, anterior trunk = 18%, posterior trunk = 18%, perineum = 1%. Total = 100%.',
  },
  {
    topic: 'emergencies',
    question: 'Secondary drowning refers to:',
    options: [
      'Drowning that occurs in the second attempt to rescue',
      'Delayed pulmonary oedema developing hours after initial submersion',
      'Drowning in salt water versus fresh water',
      'A second cardiac arrest during resuscitation',
    ],
    correct: 1,
    explanation: 'Secondary drowning is delayed pulmonary oedema that can develop hours after the initial near-drowning event. Even apparently well patients need at least 6 hours of observation.',
  },
  {
    topic: 'emergencies',
    question: 'Jellyfish stings from box jellyfish should be treated with:',
    options: ['Ice water', 'Fresh water rinse', 'Vinegar', 'Alcohol'],
    correct: 2,
    explanation: 'Box jellyfish stings: apply vinegar (acetic acid) to inactivate remaining nematocysts. Do NOT rub the area, use fresh water, or apply ice directly as these can trigger further venom discharge.',
  },
  // --- Professional Practice ---
  {
    topic: 'professional',
    question: 'The DMT discovers they have given the wrong dose of a medication. The correct action is:',
    options: [
      'Document the correct dose and hope nobody notices',
      'Stop the drug, assess the patient, inform the physician, and document everything',
      'Give additional medication to counteract the error',
      'Wait to see if the patient shows any adverse effects',
    ],
    correct: 1,
    explanation: 'Drug error protocol: stop the drug immediately, assess the patient, inform the physician, and document everything honestly and contemporaneously. Concealing errors puts patients at risk.',
  },
  {
    topic: 'professional',
    question: 'Which document specifies the medical equipment and drugs for a diving operation?',
    options: ['IMCA D014', 'IMCA D020', 'DMAC 01', 'DMAC 15'],
    correct: 3,
    explanation: 'DMAC 15 specifies the medical equipment and drugs to be held at the diving operation. DMAC 01 is the medical data aide-memoire. IMCA D014 is the diving code of practice. IMCA D020 covers DMT training requirements.',
  },
  {
    topic: 'professional',
    question: 'The structured handover tool SBAR places "Recommendation" last because:',
    options: [
      'It is the least important element',
      'It gives the physician the context they need before you state what you think should happen',
      'Recommendations are optional in emergency situations',
      'Only senior staff should make recommendations',
    ],
    correct: 1,
    explanation: 'SBAR is structured so the physician receives Situation, Background, and your Assessment before the Recommendation. This provides the clinical context needed to evaluate your proposed action.',
  },
  {
    topic: 'professional',
    question: 'An ECG is transmitted to the physician via telemedicine. The DMT\'s role is to:',
    options: [
      'Interpret the ECG and initiate treatment',
      'Place the leads correctly and transmit; the physician interprets',
      'Only transmit if the ECG looks abnormal',
      'Wait for the physician to place the leads remotely',
    ],
    correct: 1,
    explanation: 'The DMT places ECG leads correctly and transmits the recording. ECG interpretation is the physician\'s role. Correct lead placement is essential for accurate interpretation.',
  },
  {
    topic: 'professional',
    question: 'Pulse oximetry is unreliable in all of the following EXCEPT:',
    options: [
      'Carbon monoxide poisoning',
      'Severe hypothermia with poor peripheral circulation',
      'A warm patient breathing supplemental oxygen',
      'Cold, vasoconstricted extremities',
    ],
    correct: 2,
    explanation: 'Pulse oximetry works well on warm, well-perfused patients. It is unreliable in CO poisoning (reads falsely high), hypothermia, and cold/vasoconstricted extremities (poor signal).',
  },
]

export const refresherRevision = [
  // Draw from shared modules plus refresher-specific content
  ...fullCourseRevision.filter(q =>
    q.topic === 'diving-medicine' || q.topic === 'professional'
  ),
  {
    topic: 'emergencies',
    question: 'When managing a patient in the recovery position, the priority is:',
    options: [
      'Keeping the patient comfortable',
      'Maintaining an open airway while allowing fluids to drain',
      'Preventing movement of the spine at all times',
      'Keeping the patient warm',
    ],
    correct: 1,
    explanation: 'The recovery position primarily maintains an open airway and allows vomit or fluids to drain from the mouth, preventing aspiration. It is used for unconscious, breathing patients without suspected spinal injury.',
  },
  {
    topic: 'emergencies',
    question: 'Compression quality during CPR is defined by:',
    options: [
      'Speed only — faster is always better',
      'Depth (5-6 cm), rate (100-120/min), full recoil, and minimal interruptions',
      'Depth only — deeper is always better',
      'Using the heel of one hand for all compressions',
    ],
    correct: 1,
    explanation: 'High-quality CPR requires the correct depth (5-6 cm), rate (100-120/min), full chest recoil between compressions, and minimal interruptions (<10 seconds). All four elements must be maintained.',
  },
  {
    topic: 'foundations',
    question: 'The Eustachian tube connects the middle ear to the:',
    options: ['Outer ear canal', 'Inner ear', 'Nasopharynx (back of the throat)', 'Sinus cavities'],
    correct: 2,
    explanation: 'The Eustachian tube connects the middle ear to the nasopharynx, allowing pressure equalisation. Failure to equalise on descent creates a pressure differential across the tympanic membrane, causing squeeze.',
  },
  {
    topic: 'foundations',
    question: 'Dermatomes are clinically relevant because they:',
    options: [
      'Determine where to place ECG leads',
      'Help localise the level of spinal cord injury by mapping sensation loss',
      'Indicate which muscles to test in the neuro exam',
      'Predict which organs are affected by barotrauma',
    ],
    correct: 1,
    explanation: 'Dermatomes map areas of skin sensation to specific spinal nerve levels. If a diver loses sensation below a certain level, the dermatome map helps identify the approximate level of spinal cord involvement.',
  },
]
