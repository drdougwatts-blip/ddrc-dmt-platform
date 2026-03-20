export default {
  objectives: [
    'Describe the causes, signs, symptoms, and management of oxygen toxicity (CNS and pulmonary)',
    'Explain CO₂ retention and poisoning: causes, recognition, management',
    'Describe carbon monoxide poisoning: sources, signs, treatment',
    'Identify other breathing gas contaminants and their effects',
    'Explain anoxia and hypoxia: causes and emergency management',
    'Describe nitrogen narcosis: mechanism, recognition, management',
    'Describe effects and management of inhalation of hot, toxic gases, or smoke',
  ],
  prerequisites: [
    { id: 'O1_1', label: 'O1.1 Physiology Review' },
    { id: 'O1_2', label: 'O1.2 Diving Physics' },
  ],
  preBrief: {
    haveReady: [
      'Calculator for partial pressure calculations',
      'Notes from O1.2 Diving Physics (Dalton\'s Law)',
    ],
    keyTerms: [
      { term: 'VENTID-C', definition: 'Recognition mnemonic for CNS oxygen toxicity: Vision, Ears, Nausea, Twitching, Irritability, Dizziness, Convulsions' },
      { term: 'ppO₂', definition: 'Partial pressure of oxygen — determines toxicity risk' },
      { term: 'UPTD', definition: 'Unit Pulmonary Toxicity Dose — tracks cumulative pulmonary oxygen exposure' },
      { term: 'Carboxyhaemoglobin (COHb)', definition: 'CO bound to haemoglobin — displaces oxygen and causes tissue hypoxia' },
    ],
    thinkAbout: [
      'If a gas is safe to breathe at the surface, can it become lethal at depth?',
      'Why might a headache in saturation be a sign of something serious?',
    ],
  },
  sections: [
    { type: 'heading', level: 2, text: 'Quick Revision: Partial Pressure' },
    { type: 'paragraph', text: 'Partial pressure = fraction of gas × absolute pressure. Toxicity depends on partial pressure, not percentage. A gas that is harmless at the surface can be lethal at depth. A small contamination in the gas supply becomes a significant problem under pressure.' },
    { type: 'keyPoint', text: 'If you cannot calculate ppO₂ at depth, the rest of this module will not make sense. Revise Dalton\'s Law from O1.2 if needed.' },

    { type: 'heading', level: 2, text: 'Oxygen Toxicity' },

    { type: 'heading', level: 3, text: 'CNS Oxygen Toxicity (Paul Bert Effect)' },
    { type: 'paragraph', text: 'CNS oxygen toxicity occurs at ppO₂ above approximately 1.6 bar. During treatment tables, ppO₂ may reach up to 2.8 bar under controlled conditions. Individual susceptibility varies considerably, and onset may be sudden with no reliable warning signs.' },
    { type: 'paragraph', text: 'The VENTID-C mnemonic for recognition:' },
    { type: 'table', headers: ['Letter', 'Sign/Symptom'], rows: [
      ['V', 'Vision disturbance (tunnel vision, blurring)'],
      ['E', 'Ears (tinnitus, ringing)'],
      ['N', 'Nausea'],
      ['T', 'Twitching (facial muscles, lips, fingers)'],
      ['I', 'Irritability, anxiety'],
      ['D', 'Dizziness'],
      ['C', 'Convulsions — may be the first and only sign'],
    ] },

    { type: 'heading', level: 3, text: 'Managing an O₂ Toxicity Convulsion' },
    { type: 'keyPoint', title: 'Critical Actions', text: 'Protect the patient from injury — do not restrain. Remove from high ppO₂ (switch to air, reduce depth). In a chamber: switch off BIBS oxygen, maintain chamber depth. Do NOT attempt to ascend a convulsing diver. Maintain the airway once the seizure stops. Recovery position after it subsides. Contact the physician immediately.' },

    { type: 'heading', level: 3, text: 'Pulmonary Oxygen Toxicity (Lorrain Smith Effect)' },
    { type: 'list', items: [
      'Occurs with prolonged exposure to ppO₂ above 0.5 bar',
      'Develops over hours to days, not minutes',
      'Symptoms: chest tightness, cough, substernal pain, reduced vital capacity',
      'Relevant during extended therapeutic recompression',
      'UPTD (Unit Pulmonary Toxicity Dose) tracks cumulative exposure',
      'Managed by air breaks during treatment table oxygen breathing',
    ] },

    { type: 'heading', level: 2, text: 'Carbon Dioxide Problems' },
    { type: 'heading', level: 3, text: 'CO₂ in Diving' },
    { type: 'table', headers: ['Causes', 'Recognition'], rows: [
      ['Skip breathing (deliberate breath-holding to conserve gas)', 'Headache (often the first symptom)'],
      ['Inadequate ventilation with increased work rate', 'Confusion, impaired judgement'],
      ['Dead space in breathing apparatus', 'Dyspnoea, increased respiratory rate'],
      ['Scrubber failure in rebreather or saturation system', 'Unconsciousness at high levels'],
      ['High CO₂ in chamber atmosphere', ''],
    ] },
    { type: 'paragraph', text: 'Management: improve ventilation, remove from exposure. In saturation: check the scrubber, ventilate the chamber.' },
    { type: 'divingContext', title: 'CO₂ Interaction', text: 'CO₂ increases the risk of both nitrogen narcosis and oxygen toxicity. A diver with elevated CO₂ is more vulnerable to narcosis at depth and to an O₂ seizure on a treatment table. Always consider CO₂ as a compounding factor.' },

    { type: 'heading', level: 2, text: 'Carbon Monoxide Poisoning' },
    { type: 'list', items: [
      'Sources: compressor intake contamination, exhaust fumes, fire',
      'CO binds to haemoglobin 200-250× more strongly than oxygen',
      'Causes tissue hypoxia despite apparently adequate oxygen delivery',
      'Pulse oximetry reads falsely high — cannot distinguish COHb from O₂Hb',
      'Cherry red skin is classically taught but unreliable and often absent',
    ] },
    { type: 'paragraph', text: 'Signs: headache, nausea, confusion, collapse, cardiac arrest.' },
    { type: 'keyPoint', text: 'Treatment: high-flow 100% oxygen. Hyperbaric oxygen if available. Prevention: gas testing and proper compressor intake placement away from exhaust sources.' },

    { type: 'heading', level: 2, text: 'Other Contaminants, Hypoxia, and Narcosis' },

    { type: 'heading', level: 3, text: 'Other Breathing Gas Contaminants' },
    { type: 'list', items: [
      'Hydrocarbons: oil mist from compressor, diesel fumes from engine exhaust',
      'Effects: headache, nausea, respiratory irritation, narcotic effect',
      'Other contaminants: solvents, cleaning chemicals near gas intakes',
      'Key message: vague symptoms (headache, nausea) may be gas contamination — maintain a high index of suspicion, especially if multiple people are affected',
      'Management: remove from exposure, fresh air or oxygen, supportive care',
    ] },

    { type: 'heading', level: 3, text: 'Anoxia and Hypoxia' },
    { type: 'list', items: [
      'Causes: gas supply failure, wrong gas mix, hypoxic mix breathed at the surface',
      'Onset can be instant: unconsciousness with no warning',
      'No time for the diver to help themselves',
      'Management: immediate oxygen, rescue',
    ] },
    { type: 'keyPoint', title: 'Bottom Mix Hazard', text: 'A deep breathing mix designed for use at depth may be hypoxic at the surface. Breathing the wrong mix on the surface, in a bell, or during gas switches can cause instant unconsciousness.' },

    { type: 'heading', level: 3, text: 'Nitrogen Narcosis' },
    { type: 'list', items: [
      'Mechanism: lipid solubility of nitrogen at high partial pressure',
      'Onset roughly from 30 msw on air (ppN₂ > 3.2 bar)',
      'Signs: impaired judgement, euphoria, anxiety, poor coordination',
      'Individual variation is significant',
      'Management: ascend to reduce ppN₂',
    ] },
    { type: 'inPractice', text: 'As a DMT, your task is to recognise narcosis in someone else, not just in yourself. A narcosed diver may not realise they are impaired. Look for behavioural changes, slow responses, and poor decision-making.' },

    { type: 'heading', level: 2, text: 'Inhalation Injuries' },
    { type: 'list', items: [
      'Airway burns: heat damage to the upper airway, swelling may develop over hours',
      'Warning signs: singed facial hair, soot in nostrils or mouth, hoarse voice',
      'Late deterioration: patient may initially seem well then develop airway obstruction',
      'Smoke inhalation: carbon particles cause chemical irritation deep in the lungs',
      'Toxic fumes in confined spaces: common on vessels (cargo holds, tanks)',
      'Chamber fire: extremely hazardous in oxygen-enriched atmosphere',
    ] },
    { type: 'keyPoint', text: 'Management: early airway assessment, high-flow oxygen, and prepare for delayed deterioration. A patient who seems fine after smoke inhalation can develop life-threatening airway swelling hours later.' },

    { type: 'heading', level: 2, text: 'Integration: Pattern Recognition' },
    { type: 'paragraph', text: 'Identify the likely gas toxicity and immediate management for each scenario:' },
    { type: 'list', items: [
      'Diver at 60 msw develops facial twitching and confusion → O₂ toxicity: switch to air, do not ascend during seizure',
      'Saturation diver complains of persistent headache over several hours → CO₂ retention: check atmosphere, improve ventilation',
      'Surface diver collapses on deck immediately after surfacing from deep bounce dive → Hypoxia or AGE: immediate O₂, consider DCI pathway',
    ] },
  ],
  takeaways: [
    'Oxygen toxicity: VENTID-C recognition; convulsion management — do not ascend during a seizure',
    'CO₂: headache is the early warning sign — check scrubbers and ventilation',
    'CO: pulse oximetry lies in CO poisoning — treat with high-flow O₂ regardless of SpO₂ reading',
    'Hypoxia: instant unconsciousness with no warning — immediate rescue and oxygen',
    'Narcosis: recognise it in others — impaired judgement at depth on air',
    'Inhalation injury: watch for late deterioration — airway assessment first',
    'CO₂ increases the risk of both narcosis and oxygen toxicity — always consider it as a compounding factor',
  ],
  selfCheck: [
    {
      question: 'A diver at 50 msw on a treatment table begins to convulse. What are your immediate actions?',
      answer: 'Switch off BIBS oxygen, protect from injury (do not restrain), maintain chamber depth — do NOT ascend. Maintain airway once seizure stops, recovery position, contact physician.',
      rationale: 'Ascending a convulsing diver risks pulmonary barotrauma (they cannot control their airway). Reducing ppO₂ by switching to air is the priority.',
    },
    {
      question: 'Why does pulse oximetry give a falsely reassuring reading in CO poisoning?',
      answer: 'Pulse oximetry cannot distinguish carboxyhaemoglobin (COHb) from oxyhaemoglobin (O₂Hb). It reads COHb as if it were carrying oxygen.',
      rationale: 'This means SpO₂ may read 98-99% even in severe CO poisoning. Treat based on clinical signs and exposure history, not the oximeter.',
    },
    {
      question: 'At what approximate depth on air does nitrogen narcosis typically become noticeable?',
      answer: 'Approximately 30 msw (ppN₂ > 3.2 bar), though individual susceptibility varies.',
      rationale: 'Narcosis affects judgement before the diver recognises it. The DMT role is to recognise narcotic symptoms in others, particularly during surface-supplied operations.',
    },
    {
      question: 'A saturation diver has a persistent headache. Several of his bell partners also report headaches. What should you suspect?',
      answer: 'Gas contamination — most likely elevated CO₂ or another contaminant in the chamber atmosphere.',
      rationale: 'Multiple people with similar symptoms suggests an environmental cause. Check chamber atmosphere composition, scrubber function, and ventilation.',
    },
  ],
}
