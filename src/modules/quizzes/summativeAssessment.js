/**
 * Summative Assessment Question Bank
 *
 * Cross-module questions covering all major topic areas of the DMT course.
 * The exam randomly selects a subset and requires 70% to pass.
 */

export const PASS_MARK = 70
export const EXAM_QUESTION_COUNT = 30

const summativeQuestions = [
  // --- Physiology (O1.1) ---
  {
    question: 'Which cranial nerve is responsible for pupillary constriction (the light reflex)?',
    options: [
      'Cranial nerve II (optic)',
      'Cranial nerve III (oculomotor)',
      'Cranial nerve V (trigeminal)',
      'Cranial nerve VII (facial)',
    ],
    correct: 1,
    explanation: 'The oculomotor nerve (CN III) carries parasympathetic fibres that cause pupillary constriction. Unequal pupils can indicate raised intracranial pressure compressing CN III.',
    topic: 'Physiology',
  },
  {
    question: 'What is the normal resting cardiac output in a healthy adult?',
    options: [
      '2 litres per minute',
      '5 litres per minute',
      '8 litres per minute',
      '12 litres per minute',
    ],
    correct: 1,
    explanation: 'Cardiac output = heart rate x stroke volume. At rest this is approximately 70 bpm x 70 ml = ~5 litres per minute.',
    topic: 'Physiology',
  },
  {
    question: 'The peripheral chemoreceptors that detect hypoxia are located in the:',
    options: [
      'Medulla oblongata',
      'Carotid bodies and aortic arch',
      'Lung parenchyma',
      'Diaphragm',
    ],
    correct: 1,
    explanation: 'The carotid bodies (at the bifurcation of the common carotid) and aortic arch chemoreceptors detect low PaO₂ and stimulate increased ventilation.',
    topic: 'Physiology',
  },

  // --- Diving Physics (O1.2) ---
  {
    question: 'A diver at 40 msw breathing air has a ppN₂ of approximately:',
    options: [
      '2.37 bar',
      '3.16 bar',
      '3.95 bar',
      '4.74 bar',
    ],
    correct: 2,
    explanation: 'At 40 msw the absolute pressure is 5 ATA. Nitrogen fraction in air is ~0.79. ppN₂ = 5 × 0.79 = 3.95 bar.',
    topic: 'Diving Physics',
  },
  {
    question: 'Which gas law explains why a diver must equalise their ears on descent?',
    options: [
      'Dalton\'s Law',
      'Henry\'s Law',
      'Boyle\'s Law',
      'Charles\'s Law',
    ],
    correct: 2,
    explanation: 'Boyle\'s Law (P₁V₁ = P₂V₂): as pressure increases on descent, the volume of gas in the middle ear decreases, creating negative pressure. Equalisation adds gas to restore the volume.',
    topic: 'Diving Physics',
  },
  {
    question: 'At what depth does the greatest proportional volume change occur?',
    options: [
      '0-10 msw (surface to 10 metres)',
      '10-20 msw',
      '20-30 msw',
      '30-40 msw',
    ],
    correct: 0,
    explanation: 'The greatest proportional volume change is in the first 10 metres (from 1 ATA to 2 ATA = 50% volume reduction). This is why barotrauma most commonly occurs in shallow water.',
    topic: 'Diving Physics',
  },

  // --- DMT Role (O1.3) ---
  {
    question: 'The DMAC 01 form is used to:',
    options: [
      'Record dive planning calculations',
      'Document the neurological examination and clinical findings of a diving casualty',
      'Log controlled drug usage',
      'Schedule dive team rotations',
    ],
    correct: 1,
    explanation: 'The DMAC 01 form is the standard diving medicine assessment form used to document the neurological examination and clinical findings, providing a structured record for the physician.',
    topic: 'DMT Role',
  },
  {
    question: 'Under what framework does a DMT administer prescription medications?',
    options: [
      'Independent prescribing authority',
      'Patient Group Directions (PGDs)',
      'Physician-directed administration under standing orders or direct communication',
      'Self-authorisation in emergencies',
    ],
    correct: 2,
    explanation: 'The DMT administers medications under the direction of the duty physician, either through pre-agreed standing orders or by direct communication. The DMT does not independently prescribe.',
    topic: 'DMT Role',
  },

  // --- First Aid (O1.4) ---
  {
    question: 'In the primary survey (ABCDE), what does "D" stand for and what is assessed?',
    options: [
      'Diagnosis — determining what caused the injury',
      'Disability — level of consciousness (AVPU/GCS) and pupil response',
      'Decompression — assessing for DCI',
      'Drugs — what medications to give',
    ],
    correct: 1,
    explanation: 'D = Disability. Assess the level of consciousness using AVPU (Alert, Voice, Pain, Unresponsive) or GCS, check pupil size and reactivity, and note blood glucose.',
    topic: 'First Aid',
  },
  {
    question: 'The recovery position is used when a casualty is:',
    options: [
      'Conscious and breathing normally',
      'Unconscious but breathing normally',
      'Not breathing — to prepare for CPR',
      'Complaining of chest pain',
    ],
    correct: 1,
    explanation: 'The recovery position is used for an unconscious but breathing casualty to maintain an open airway and allow fluids to drain. It should NOT be used if spinal injury is suspected (unless airway cannot otherwise be maintained).',
    topic: 'First Aid',
  },
  {
    question: 'The correct ratio of chest compressions to rescue breaths in adult CPR is:',
    options: [
      '15:1',
      '15:2',
      '30:2',
      '30:1',
    ],
    correct: 2,
    explanation: 'Adult CPR uses a 30:2 ratio (30 compressions to 2 breaths). Compressions should be at a rate of 100-120 per minute, at a depth of 5-6 cm, allowing full chest recoil between compressions.',
    topic: 'First Aid',
  },

  // --- Gas Toxicity (O2.1) ---
  {
    question: 'VENTID-C is a mnemonic for the warning signs of:',
    options: [
      'Decompression illness',
      'Carbon monoxide poisoning',
      'CNS oxygen toxicity',
      'Nitrogen narcosis',
    ],
    correct: 2,
    explanation: 'VENTID-C: Vision disturbance, Ears (tinnitus), Nausea, Twitching (especially facial), Irritability, Dizziness, Convulsions. These are the warning signs of CNS oxygen toxicity.',
    topic: 'Gas Toxicity',
  },
  {
    question: 'If a diver convulses from oxygen toxicity in a chamber, the immediate action is:',
    options: [
      'Immediately decompress to the surface',
      'Switch to air, protect the patient, do NOT decompress during the active convulsion',
      'Increase oxygen flow',
      'Administer anti-convulsant medication intravenously',
    ],
    correct: 1,
    explanation: 'Switch off oxygen, protect the patient from injury, and do NOT decompress during the active convulsion. Ascending with a closed glottis risks pulmonary barotrauma.',
    topic: 'Gas Toxicity',
  },
  {
    question: 'Pulse oximetry reads falsely normal in which type of poisoning?',
    options: [
      'Carbon dioxide retention',
      'Nitrogen narcosis',
      'Carbon monoxide poisoning',
      'Hydrogen sulphide poisoning',
    ],
    correct: 2,
    explanation: 'Pulse oximeters cannot distinguish carboxyhaemoglobin from oxyhaemoglobin, so SpO₂ appears falsely normal even though the patient is severely hypoxic.',
    topic: 'Gas Toxicity',
  },

  // --- Barotrauma (O2.2) ---
  {
    question: 'Pulmonary barotrauma is most likely to occur during:',
    options: [
      'Descent, due to lung squeeze',
      'At constant depth, due to gas toxicity',
      'Ascent, especially if the diver holds their breath',
      'On the surface, immediately after exit',
    ],
    correct: 2,
    explanation: 'Pulmonary barotrauma occurs on ascent when expanding gas in the lungs cannot escape (breath-holding, bronchospasm, mucus plug). The expanding gas can rupture alveoli, potentially causing pneumothorax, pneumomediastinum, or AGE.',
    topic: 'Barotrauma',
  },
  {
    question: 'Inner ear barotrauma differs from middle ear barotrauma in that it:',
    options: [
      'Is less serious and resolves spontaneously',
      'Only occurs on ascent',
      'Can cause permanent sensorineural hearing loss and requires urgent specialist referral',
      'Only affects commercial divers',
    ],
    correct: 2,
    explanation: 'Inner ear barotrauma can damage the cochlea and vestibular organs, causing permanent hearing loss. It requires same-day specialist referral. Do NOT attempt further equalisation.',
    topic: 'Barotrauma',
  },

  // --- DCI (O2.3) ---
  {
    question: 'Type I DCI most commonly presents as:',
    options: [
      'Sudden neurological deficit',
      'Joint pain (the bends)',
      'Chest pain with dyspnoea',
      'Vestibular disturbance',
    ],
    correct: 1,
    explanation: 'Type I DCI most commonly presents as joint pain (the bends), typically in the shoulders or knees. It is described as a deep, dull ache that worsens with movement.',
    topic: 'DCI',
  },
  {
    question: 'RN62 (USN Table 6) treatment involves compression to:',
    options: [
      '10 msw on air',
      '18 msw on 100% oxygen with air breaks',
      '30 msw on heliox',
      '50 msw on trimix',
    ],
    correct: 1,
    explanation: 'RN62 is the standard treatment table: compression to 18 msw breathing 100% oxygen with regular air breaks to manage oxygen toxicity. Total treatment time is approximately 4 hours 45 minutes.',
    topic: 'DCI',
  },
  {
    question: 'Arterial gas embolism (AGE) characteristically presents with:',
    options: [
      'Gradual onset of joint pain over hours',
      'Skin mottling developing overnight',
      'Sudden neurological symptoms within seconds to minutes of surfacing',
      'Progressive fatigue over several days',
    ],
    correct: 2,
    explanation: 'AGE presents with sudden, dramatic neurological symptoms (often stroke-like) within seconds to minutes of reaching the surface. The rapid onset distinguishes it from other forms of DCI.',
    topic: 'DCI',
  },
  {
    question: 'The minimum recommended time before flying after treatment for Type II DCI is:',
    options: [
      '12 hours',
      '24 hours',
      '72 hours',
      '7 days',
    ],
    correct: 2,
    explanation: 'After treatment for Type II DCI, a minimum of 72 hours is recommended before flying. Reduced cabin pressure at altitude could cause residual bubbles to expand.',
    topic: 'DCI',
  },

  // --- Shock, Burns, Blast (O3.1) ---
  {
    question: 'Hypovolaemic shock is characterised by:',
    options: [
      'Hypotension, bradycardia, and warm skin',
      'Hypotension, tachycardia, and cold clammy skin',
      'Hypertension, tachycardia, and flushed skin',
      'Normal blood pressure with confusion',
    ],
    correct: 1,
    explanation: 'Hypovolaemic shock presents with hypotension, tachycardia (compensatory), and cold, clammy, pale skin due to peripheral vasoconstriction.',
    topic: 'Shock and Trauma',
  },
  {
    question: 'The Parkland formula for fluid resuscitation in burns calculates:',
    options: [
      '2 ml × weight (kg) × %BSA in 24 hours',
      '4 ml × weight (kg) × %BSA in 24 hours, half in the first 8 hours',
      '10 ml × weight (kg) in the first hour',
      '500 ml bolus every 2 hours',
    ],
    correct: 1,
    explanation: 'Parkland formula: 4 ml × body weight (kg) × %BSA burned over 24 hours, with half given in the first 8 hours from the time of injury (not from hospital arrival).',
    topic: 'Shock and Trauma',
  },
  {
    question: 'Neurogenic shock differs from hypovolaemic shock because it presents with:',
    options: [
      'Tachycardia and cold skin',
      'Hypotension, BRADYCARDIA, and warm dry skin',
      'Hypertension and dilated pupils',
      'Normal vital signs with altered consciousness',
    ],
    correct: 1,
    explanation: 'Neurogenic shock (spinal cord injury) causes loss of sympathetic tone: hypotension with BRADYCARDIA and warm, dry skin below the injury. This contrasts with the tachycardia and cold skin of hypovolaemic shock.',
    topic: 'Shock and Trauma',
  },

  // --- Thermal / Drowning (O3.2) ---
  {
    question: 'In hypothermia, core temperature below which threshold is classified as severe?',
    options: [
      '36°C',
      '35°C',
      '32°C',
      '30°C',
    ],
    correct: 3,
    explanation: 'Severe hypothermia is defined as core temperature below 30°C. Below this threshold the myocardium is increasingly susceptible to ventricular fibrillation, and the patient may appear clinically dead.',
    topic: 'Environmental',
  },
  {
    question: 'The correct initial management of a near-drowning casualty who is not breathing is:',
    options: [
      'Heimlich manoeuvre to clear water from lungs',
      'Five initial rescue breaths, then standard CPR if no signs of life',
      'Chest compressions only — water will drain naturally',
      'Log roll to drain water before starting CPR',
    ],
    correct: 1,
    explanation: 'Near-drowning is a respiratory emergency. Give 5 initial rescue breaths (the primary problem is hypoxia), then proceed with standard CPR if there are no signs of life. Do NOT attempt to drain water from the lungs.',
    topic: 'Environmental',
  },

  // --- Pharmacology (O3.3) ---
  {
    question: 'The adrenaline dose for adult anaphylaxis is:',
    options: [
      '0.1 mg IV',
      '0.5 mg (0.5 ml of 1:1000) IM into the outer mid-thigh',
      '1 mg IV as for cardiac arrest',
      '0.3 mg sublingual',
    ],
    correct: 1,
    explanation: 'Adult anaphylaxis: adrenaline 0.5 mg (0.5 ml of 1:1000) IM into the outer mid-thigh. Can be repeated every 5 minutes. The IM route is used — IV adrenaline in anaphylaxis is specialist-only.',
    topic: 'Pharmacology',
  },
  {
    question: 'Which three conditions are absolute contraindications for Entonox?',
    options: [
      'Headache, nausea, and rib fractures',
      'Pneumothorax, head injury with impaired consciousness, and DCI',
      'Hypertension, diabetes, and asthma',
      'Pregnancy, elderly patients, and aspirin allergy',
    ],
    correct: 1,
    explanation: 'Entonox (50% N₂O / 50% O₂) is contraindicated in pneumothorax (N₂O expands trapped gas), head injury with impaired consciousness (masks neurological signs), and DCI (N₂O worsens bubble formation).',
    topic: 'Pharmacology',
  },
  {
    question: 'The maximum adult dose of paracetamol in 24 hours is:',
    options: [
      '2 g',
      '3 g',
      '4 g',
      '6 g',
    ],
    correct: 2,
    explanation: 'Maximum paracetamol is 4 g in 24 hours (1 g four times daily). Overdose causes delayed hepatotoxicity, which may not be apparent for 24-48 hours.',
    topic: 'Pharmacology',
  },
  {
    question: 'Controlled drugs in the DMAC 15 kit require:',
    options: [
      'No special storage requirements',
      'Locked storage, a controlled drug register, and two-person check for administration',
      'Storage in the dive supervisor\'s office',
      'Refrigeration at all times',
    ],
    correct: 1,
    explanation: 'Controlled drugs must be stored in a locked container, recorded in a dedicated register, and checked by two people when administered. This is a legal requirement.',
    topic: 'Pharmacology',
  },

  // --- Remaining Medical (O3.4) ---
  {
    question: 'Which finding on a fitness-to-dive medical would be an absolute disqualification?',
    options: [
      'Controlled type 2 diabetes',
      'Spontaneous pneumothorax with no surgical treatment',
      'Mild asthma with normal spirometry',
      'Previous fractured wrist, fully healed',
    ],
    correct: 1,
    explanation: 'Untreated spontaneous pneumothorax is an absolute contraindication to diving due to the risk of recurrence at depth and tension pneumothorax on ascent.',
    topic: 'Fitness to Dive',
  },

  // --- Cross-cutting: Integration ---
  {
    question: 'SBAR stands for:',
    options: [
      'Signs, Baseline, Assessment, Response',
      'Situation, Background, Assessment, Recommendation',
      'Symptoms, Blood pressure, Airway, Resuscitation',
      'Scene, Breathing, Alertness, Recovery',
    ],
    correct: 1,
    explanation: 'SBAR (Situation, Background, Assessment, Recommendation) is a structured communication tool used for handover and telemedicine calls with the duty physician.',
    topic: 'Communication',
  },
  {
    question: 'ATMIST is used for:',
    options: [
      'Recording dive profiles',
      'Handover of a patient to receiving medical services',
      'Calculating decompression stops',
      'Documenting controlled drug administration',
    ],
    correct: 1,
    explanation: 'ATMIST (Age, Time of incident, Mechanism of injury, Injuries found, Signs/vital signs, Treatment given) is a structured handover tool for transferring patient care.',
    topic: 'Communication',
  },
  {
    question: 'A diver surfaces from 35 msw and develops sudden right-sided weakness and speech difficulties. The most likely diagnosis is:',
    options: [
      'Type I DCI (musculoskeletal)',
      'Arterial gas embolism (AGE)',
      'Carbon monoxide poisoning',
      'Inner ear barotrauma',
    ],
    correct: 1,
    explanation: 'Sudden neurological deficit (hemiparesis, dysphasia) immediately on surfacing from depth is the classic presentation of arterial gas embolism. The gas has passed through the pulmonary filter into the arterial circulation.',
    topic: 'Integration',
  },
  {
    question: 'A saturation diver develops bilateral leg weakness and difficulty urinating 2 hours after a depth reduction. This pattern is most consistent with:',
    options: [
      'Tension pneumothorax',
      'Type II spinal cord DCI',
      'Nitrogen narcosis',
      'Vestibular barotrauma',
    ],
    correct: 1,
    explanation: 'Bilateral lower limb weakness with urinary retention developing after a pressure reduction is classic spinal cord DCI. The thoracolumbar cord is particularly vulnerable due to its watershed blood supply.',
    topic: 'Integration',
  },
  {
    question: 'When providing telemedicine to a physician, the DMT should report in which order?',
    options: [
      'Treatment given first, then symptoms',
      'Dive profile, then symptoms, examination findings, vital signs, and treatment given',
      'Only vital signs — the physician will ask follow-up questions',
      'Diagnosis first, then supporting evidence',
    ],
    correct: 1,
    explanation: 'A structured handover includes the dive profile (essential context), then the clinical picture: symptoms, examination findings (especially neuro exam), vital signs, and any treatment already given.',
    topic: 'Integration',
  },
  {
    question: 'A diver treated with RN62 for Type II DCI shows incomplete resolution. The physician may extend treatment by:',
    options: [
      'Increasing the depth to 30 msw',
      'Adding extra oxygen cycles at 18 msw and/or 9 msw',
      'Switching entirely to air for the remainder',
      'Immediately surfacing and starting a new table',
    ],
    correct: 1,
    explanation: 'RN62 can be extended by adding extra 25-minute oxygen cycles at 18 msw (up to 2 extensions) and/or at 9 msw, increasing total treatment time while managing oxygen toxicity with air breaks.',
    topic: 'Integration',
  },
  {
    question: 'A closed femoral fracture can result in blood loss of approximately:',
    options: [
      '100-200 ml',
      '250-500 ml',
      '1-2 litres',
      '3-4 litres',
    ],
    correct: 2,
    explanation: 'A closed femoral fracture can lose 1-2 litres into the thigh compartment, causing hypovolaemic shock even without visible external bleeding. Bilateral femoral fractures can be life-threatening.',
    topic: 'Shock and Trauma',
  },
  {
    question: 'The Glasgow Coma Scale assesses:',
    options: [
      'Pain intensity on a scale of 1-15',
      'Eye opening, verbal response, and motor response (score 3-15)',
      'Pupil size, blood pressure, and respiratory rate',
      'Orientation to time, place, and person only',
    ],
    correct: 1,
    explanation: 'GCS assesses three components: Eye opening (1-4), Verbal response (1-5), and Motor response (1-6). Total score ranges from 3 (deep coma) to 15 (fully alert). A score of 8 or less indicates the need for airway protection.',
    topic: 'First Aid',
  },
  {
    question: 'Air breaks during oxygen therapy in a recompression chamber are used to:',
    options: [
      'Allow the patient to eat and drink',
      'Reduce the risk of pulmonary and CNS oxygen toxicity',
      'Save oxygen supplies',
      'Allow the chamber operator to adjust pressure',
    ],
    correct: 1,
    explanation: 'Air breaks (periods of breathing air instead of oxygen) reduce cumulative oxygen exposure, lowering the risk of both pulmonary oxygen toxicity and CNS oxygen toxicity during prolonged treatment.',
    topic: 'DCI',
  },
  {
    question: 'The purpose of the secondary survey is to:',
    options: [
      'Replace the primary survey in non-urgent cases',
      'Perform a systematic head-to-toe examination to find all injuries after life threats are addressed',
      'Take a detailed medical history only',
      'Prepare the patient for transport',
    ],
    correct: 1,
    explanation: 'The secondary survey is a systematic head-to-toe examination performed AFTER the primary survey (ABCDE) has identified and treated all immediate life threats. It aims to find all injuries and guide ongoing management.',
    topic: 'First Aid',
  },
]

export default summativeQuestions
