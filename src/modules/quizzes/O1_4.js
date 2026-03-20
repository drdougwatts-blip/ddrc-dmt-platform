export default [
  {
    question: 'In the ABCDE primary survey, what does the correct order ensure?',
    options: [
      'The most painful injuries are treated first',
      'Life-threatening problems are found and treated in order of priority',
      'All injuries are documented before treatment begins',
      'The physician can be contacted before any intervention',
    ],
    correct: 1,
    explanation: 'ABCDE ensures life threats are identified and treated in priority order: Airway first (most immediately fatal if compromised), then Breathing, Circulation, Disability, and Exposure. Fix each before moving on.',
  },
  {
    question: 'What does SAMPLE stand for in the secondary survey?',
    options: [
      'Signs, Allergies, Medications, Past history, Last meal, Events',
      'Symptoms, Assessment, Medications, Procedures, Location, Examination',
      'Signs, Airway, Medications, Pulse, Lungs, Exposure',
      'Symptoms, Allergies, Medical history, Previous injuries, Last dive, Equipment',
    ],
    correct: 0,
    explanation: 'SAMPLE: Signs/Symptoms, Allergies, Medications, Past medical history, Last meal/oral intake, Events leading to the incident. This structured history ensures nothing important is missed.',
  },
  {
    question: 'A GCS score of 8 or below indicates:',
    options: [
      'The patient is mildly confused',
      'The patient cannot protect their own airway',
      'The patient has a spinal injury',
      'The patient needs oral fluids',
    ],
    correct: 1,
    explanation: 'GCS ≤ 8 means the patient cannot reliably protect their own airway. This is a critical threshold — these patients need airway management and close monitoring.',
  },
  {
    question: 'Which two assessments are unique to diving casualties compared to standard first aid?',
    options: [
      'Blood pressure and temperature',
      'Neurological examination and detailed diving history',
      'Pulse rate and respiratory rate',
      'Pain assessment and wound inspection',
    ],
    correct: 1,
    explanation: 'Diving casualties require a full neurological examination (to detect DCI) and a detailed diving history (depth, time, gas, profile, symptoms timeline). These are not part of standard first aid.',
  },
  {
    question: 'Why does pulse oximetry read falsely high in carbon monoxide poisoning?',
    options: [
      'CO increases oxygen levels in the blood',
      'The oximeter cannot distinguish carboxyhaemoglobin from oxyhaemoglobin',
      'CO causes vasoconstriction that improves the signal',
      'The patient hyperventilates, raising actual oxygen levels',
    ],
    correct: 1,
    explanation: 'Standard pulse oximeters measure light absorption and cannot distinguish between oxyhaemoglobin (HbO₂) and carboxyhaemoglobin (HbCO). Both absorb light similarly, so the reading appears normal despite inadequate oxygen transport.',
  },
  {
    question: 'The normal adult respiratory rate at rest is:',
    options: [
      '6-10 breaths per minute',
      '12-20 breaths per minute',
      '22-30 breaths per minute',
      '30-40 breaths per minute',
    ],
    correct: 1,
    explanation: 'Normal adult respiratory rate is 12-20 breaths per minute. Below 12 suggests CNS depression or exhaustion; above 20 suggests respiratory distress, pain, or metabolic acidosis.',
  },
  {
    question: 'Normal capillary refill time is:',
    options: [
      'Less than 1 second',
      'Less than 2 seconds',
      'Less than 5 seconds',
      'Less than 10 seconds',
    ],
    correct: 1,
    explanation: 'Normal capillary refill time (CRT) is less than 2 seconds. Prolonged CRT suggests poor peripheral perfusion, which can indicate shock, hypothermia, or dehydration.',
  },
  {
    question: 'AVPU stands for:',
    options: [
      'Airway, Ventilation, Pulse, Urine output',
      'Alert, Voice, Pain, Unresponsive',
      'Assessment, Vital signs, Pupils, Unconscious',
      'Awake, Verbal, Painful, Unable to respond',
    ],
    correct: 1,
    explanation: 'AVPU is a rapid consciousness assessment: Alert (fully aware), responds to Voice, responds to Pain, Unresponsive. It is quicker than GCS for initial assessment.',
  },
]
