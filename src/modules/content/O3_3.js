export default {
  objectives: [
    'Identify all drugs in the current DMAC 15 kit and state their indications',
    'Describe correct routes of administration (SC, IM, IV, IO) for each drug',
    'Recognise key contraindications and side effects',
    'Explain safe storage, checking, and documentation requirements',
    'Describe changes to the DMAC 15 drug list since the last certification cycle',
  ],
  prerequisites: [],
  preBrief: {
    haveReady: [
      'DMAC 15 publication (if available) — or the drug list from your employer',
      'Pen and paper for the drug selection exercise',
    ],
    keyTerms: [
      { term: 'DMAC 15', definition: 'DMAC guidance on medical equipment to be held at the site of an offshore diving operation — includes the drug list' },
      { term: 'IM', definition: 'Intramuscular injection — into muscle (e.g. outer thigh for adrenaline)' },
      { term: 'IV', definition: 'Intravenous — directly into a vein' },
      { term: 'IO', definition: 'Intraosseous — into bone marrow, used when IV access is not possible' },
      { term: 'Controlled drug', definition: 'A medication subject to additional legal controls (e.g. morphine) — locked storage, register, two-person check' },
    ],
    thinkAbout: [
      'Can you name the drugs in the DMAC 15 kit from memory? Which ones are you least confident about?',
      'What are the three contraindications for Entonox?',
    ],
  },
  sections: [
    { type: 'heading', level: 2, text: 'DMAC 15 Drug List' },
    { type: 'paragraph', text: 'This section walks through the drug list systematically by clinical group. Full course candidates: this is your first exposure to the list. Refresher candidates: focus on what has changed.' },

    { type: 'heading', level: 3, text: 'Analgesics' },
    { type: 'table', headers: ['Drug', 'Route / Dose', 'Key Points'], rows: [
      ['Paracetamol', 'Oral, 1g 4-6 hourly (max 4g/24h)', 'First-line for mild-moderate pain'],
      ['Ibuprofen', 'Oral, 400mg 8 hourly with food', 'Anti-inflammatory. Avoid in renal impairment, GI bleeding.'],
      ['Paracetamol + Ibuprofen', 'Combination as above', 'Effective for moderate pain before stepping up to opioids'],
      ['Morphine', 'IM 10mg or IV titrated', 'Physician guidance required. Respiratory depression risk. Controlled drug.'],
      ['Entonox', '50% N₂O / 50% O₂, self-administered', 'Rapid onset/offset. Contraindicated in pneumothorax, head injury, and DCI.'],
    ] },

    { type: 'heading', level: 3, text: 'Cardiac, Resuscitation, and Emergency Drugs' },
    { type: 'table', headers: ['Drug', 'Route / Dose', 'Key Points'], rows: [
      ['Adrenaline', 'Anaphylaxis: IM 0.5mg. Cardiac arrest: IV 1mg per cycle.', 'Most important emergency drug. Know both doses.'],
      ['Atropine', 'IV for symptomatic bradycardia', 'Under physician direction.'],
      ['Aspirin', '300mg chewed', 'Suspected acute coronary syndrome.'],
      ['GTN spray', 'Sublingual', 'Chest pain, with physician guidance.'],
    ] },
    { type: 'keyPoint', text: 'All emergency drug doses should be memorised or immediately accessible. In cardiac arrest, follow the ALS algorithm under physician direction.' },

    { type: 'heading', level: 3, text: 'Antibiotics and Other Drugs' },
    { type: 'table', headers: ['Drug Category', 'Key Points'], rows: [
      ['Oral antibiotics', 'For wound infection, UTI, respiratory infection. Always with physician guidance. Allergy check before administration (especially penicillins).'],
      ['Antiemetics (ondansetron, cyclizine)', 'Seasickness, post-operative nausea. Know routes and doses.'],
      ['Antihistamines (chlorphenamine)', 'Allergic reactions (not first-line for anaphylaxis).'],
      ['Dexamethasone', 'Cerebral oedema, severe allergic reactions. Physician direction.'],
      ['Salbutamol', 'Bronchospasm. Inhaler or nebuliser.'],
      ['Diazepam', 'Status epilepticus. Physician direction only.'],
    ] },

    { type: 'heading', level: 2, text: 'IV Fluids and Entonox' },

    { type: 'heading', level: 3, text: 'IV Fluids' },
    { type: 'list', items: [
      'Normal saline (0.9%): standard resuscitation fluid',
      'Hartmann\'s solution: alternative crystalloid',
      'Indications: hypovolaemic shock, burns, dehydration',
      'Rate and volume: physician guidance',
      'Practical IV cannulation is taught in-person',
    ] },

    { type: 'heading', level: 3, text: 'Entonox: Special Coverage' },
    { type: 'paragraph', text: 'Entonox (50% nitrous oxide / 50% oxygen) is a self-administered analgesic gas with rapid onset and offset. D020 specifically requires Entonox coverage.' },
    { type: 'keyPoint', title: 'Entonox Contraindications', text: 'Pneumothorax: N₂O expands gas spaces (Boyle\'s Law applies). Head injury: raised ICP risk. DCI: N₂O worsens bubble expansion. If any of these are present or suspected, do NOT use Entonox.' },

    { type: 'heading', level: 2, text: 'Drug Changes and Safety' },

    { type: 'heading', level: 3, text: 'Drug Changes Since Last Cycle' },
    { type: 'paragraph', text: 'Check the current DMAC 15 publication before each course delivery for:' },
    { type: 'list', items: [
      'Any additions or removals from the drug list',
      'Changes to recommended doses or routes',
      'New evidence affecting practice (e.g. updated anaphylaxis guidance)',
    ] },

    { type: 'heading', level: 3, text: 'Drug Safety and Documentation' },
    { type: 'table', headers: ['Safe Handling', 'Documentation'], rows: [
      ['Check expiry dates: expired drugs must be replaced', 'Record every drug administered: drug, dose, route, time, who gave it'],
      ['Storage: temperature-sensitive and light-sensitive items', 'Record who authorised it (physician name and contact time)'],
      ['Controlled drugs: locked storage, register, two-person check', 'Record the patient\'s response to the drug'],
      ['Sharps safety: safe disposal of needles and ampoules', 'Drug errors: report immediately, contact physician, document'],
    ] },
    { type: 'keyPoint', text: 'Do not try to cover up a drug error. Honesty protects the patient. Report immediately, contact the physician, and document what happened.' },

    { type: 'heading', level: 2, text: 'Drug Selection Exercise' },
    { type: 'paragraph', text: 'For each scenario, identify the appropriate drug, route, and dose:' },
    { type: 'orderedList', items: [
      'Diver with confirmed anaphylaxis after a sting: facial swelling, wheeze, hypotension',
      'Crew member with suspected fractured femur, pain score 9/10, conscious and alert',
      'Saturation diver with persistent vomiting for 6 hours, unable to keep fluids down',
    ] },
    { type: 'inPractice', text: 'Hands-on injection technique, IV cannulation, and IO access are all covered in-person. This module gives you the pharmacological knowledge; the practical sessions give you the skills.' },
  ],
  takeaways: [
    'Know the DMAC 15 drug list: indications, routes, doses, and contraindications',
    'Adrenaline for anaphylaxis: IM 0.5 mg into the outer thigh — do not delay',
    'Entonox: effective analgesic but contraindicated in pneumothorax, head injury, and DCI',
    'Morphine: controlled drug, physician guidance required, monitor for respiratory depression',
    'Drug safety: check expiry dates, document everything, report errors honestly',
    'Hands-on injection technique, IV cannulation, and IO access are all covered in-person',
  ],
  selfCheck: [
    {
      question: 'What are the three absolute contraindications for Entonox?',
      answer: 'Pneumothorax, head injury, and DCI.',
      rationale: 'Nitrous oxide (N₂O) expands gas-filled spaces. In pneumothorax, it worsens the pneumothorax. In DCI, it worsens bubble expansion. In head injury, it can raise intracranial pressure.',
    },
    {
      question: 'A diver has anaphylaxis. What drug, dose, and route do you give first?',
      answer: 'Adrenaline 0.5 mg (0.5 ml of 1:1000) by IM injection into the outer thigh.',
      rationale: 'Adrenaline is the first-line treatment. IM into the outer thigh provides reliable absorption. Repeat at 5-minute intervals if no improvement.',
    },
    {
      question: 'A crew member needs morphine. What additional precautions apply?',
      answer: 'Morphine is a controlled drug: locked storage, register, two-person check. Requires physician guidance. Monitor respiratory rate and SpO₂ for respiratory depression.',
      rationale: 'Controlled drugs have additional legal and safety requirements. Documentation must include who authorised it, dose, route, time, and patient response.',
    },
    {
      question: 'You accidentally give the wrong dose of a drug. What do you do?',
      answer: 'Report immediately. Contact the physician. Document what was given, when, and what happened. Do not try to cover it up.',
      rationale: 'Honesty protects the patient. The physician needs to know what was actually given to manage any adverse effects. Concealment puts the patient at risk.',
    },
  ],
}
