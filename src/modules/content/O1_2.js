export default {
  objectives: [
    'State and apply Boyle\'s Law to diving scenarios',
    'State and apply Dalton\'s Law to calculate partial pressures',
    'State and apply Henry\'s Law to explain gas dissolution and bubble formation',
    'Explain pressure-volume relationships in the context of barotrauma',
    'Calculate partial pressures of breathing gases at depth',
  ],
  prerequisites: [],
  preBrief: {
    haveReady: [
      'Calculator (phone calculator is fine)',
      'Pen and paper for worked examples',
    ],
    keyTerms: [
      { term: 'ATA (Atmospheres Absolute)', definition: 'Total pressure including atmospheric — at 30 msw, pressure is 4 ATA' },
      { term: 'Partial pressure', definition: 'The pressure exerted by a single gas in a mixture (fraction × absolute pressure)' },
      { term: 'msw', definition: 'Metres of sea water — pressure increases by 1 bar for every 10 msw' },
      { term: 'ppO₂', definition: 'Partial pressure of oxygen — determines toxicity risk at depth' },
    ],
    thinkAbout: [
      'Why do ears hurt on descent but not on ascent (usually)?',
      'If a gas is harmless at the surface, can it become dangerous at depth?',
    ],
  },
  sections: [
    { type: 'paragraph', text: 'Physics is not abstract for divers. It explains why ears hurt, why you get bent, and why oxygen becomes toxic at depth. Every equation in this module connects to a clinical condition you will manage as a DMT.' },

    { type: 'heading', level: 2, text: 'Pressure Fundamentals' },

    { type: 'heading', level: 3, text: 'Pressure at Depth' },
    { type: 'list', items: [
      'Atmospheric pressure at the surface: 1 bar (1 ATA)',
      'Pressure increases by 1 bar for every 10 metres of sea water (msw)',
      'Absolute pressure = gauge pressure + atmospheric pressure',
      'At 30 msw: absolute pressure = 4 bar (4 ATA)',
    ] },
    { type: 'paragraph', text: 'Units you will encounter: bar, ATA, msw, fsw (feet of sea water). Know the equivalences but use one system consistently. This course uses bar and msw.' },

    { type: 'heading', level: 2, text: 'Boyle\'s Law' },
    { type: 'keyPoint', title: 'Boyle\'s Law', text: 'At constant temperature: P₁ × V₁ = P₂ × V₂. Pressure up = volume down (and vice versa). This applies to every gas-filled space in the body and in diving equipment.' },

    { type: 'paragraph', text: 'Boyle\'s Law explains all barotrauma:' },
    { type: 'list', items: [
      'Ear squeeze on descent: middle ear volume shrinks as pressure increases',
      'Lung overexpansion on ascent: gas volume increases as pressure drops',
      'Pneumothorax worsens on ascent: trapped gas expands',
      'Mask squeeze: negative pressure develops in the mask space on descent',
    ] },

    { type: 'heading', level: 3, text: 'Worked Example: Pneumothorax' },
    { type: 'divingContext', title: 'Clinical Calculation', text: 'A diver develops a pneumothorax at 30 metres (4 ATA). The trapped gas volume is 500 ml. If the diver ascends to the surface (1 ATA) without treatment: P₁ × V₁ = P₂ × V₂ → 4 × 500 = 1 × V₂ → V₂ = 2000 ml. A 500 ml pneumothorax becomes 2 litres at the surface — life-threatening.' },

    { type: 'heading', level: 2, text: 'Dalton\'s Law and Partial Pressures' },
    { type: 'keyPoint', title: 'Dalton\'s Law', text: 'Total pressure = sum of partial pressures of each gas. Partial pressure = fraction of gas × absolute pressure. Toxicity depends on partial pressure, not percentage.' },

    { type: 'paragraph', text: 'Air is approximately 21% oxygen and 79% nitrogen (simplified). At the surface:' },
    { type: 'list', items: [
      'ppO₂ = 0.21 × 1 = 0.21 bar',
      'ppN₂ = 0.79 × 1 = 0.79 bar',
    ] },
    { type: 'paragraph', text: 'At 30 msw (4 ATA):' },
    { type: 'list', items: [
      'ppO₂ = 0.21 × 4 = 0.84 bar',
      'ppN₂ = 0.79 × 4 = 3.16 bar',
    ] },

    { type: 'heading', level: 3, text: 'Partial Pressure Thresholds' },
    { type: 'table', headers: ['Gas', 'Threshold', 'Effect'], rows: [
      ['Oxygen', 'ppO₂ > 1.6 bar', 'CNS toxicity risk (convulsions)'],
      ['Oxygen', 'Prolonged ppO₂ > 0.5 bar', 'Pulmonary toxicity'],
      ['Oxygen', 'Treatment tables: ppO₂ up to 2.8 bar', 'Controlled therapeutic exposure'],
      ['Oxygen', 'ppO₂ < 0.16 bar', 'Hypoxia'],
      ['Nitrogen', 'ppN₂ > ~3.2 bar', 'Narcosis (roughly from 30 msw on air)'],
      ['CO₂', 'ppCO₂ > 0.05 bar', 'CO₂ toxicity'],
      ['CO', 'Even very low fractions', 'Toxic at depth — small contamination, big problem'],
    ] },

    { type: 'heading', level: 3, text: 'Calculation Exercise' },
    { type: 'paragraph', text: 'A diver breathes air at 50 msw (6 ATA). Calculate the partial pressures:' },
    { type: 'list', items: [
      'ppO₂ = 0.21 × 6 = 1.26 bar — approaching CNS toxicity threshold',
      'ppN₂ = 0.79 × 6 = 4.74 bar — significant narcosis expected',
      'Both are clinically relevant at this depth',
    ] },
    { type: 'inPractice', text: 'If you cannot calculate ppO₂ at depth, you cannot assess whether a breathing gas is safe. This calculation underpins the gas toxicity module and the DCI module. Practise until it is automatic.' },

    { type: 'heading', level: 2, text: 'Henry\'s Law and Gas Solubility' },
    { type: 'keyPoint', title: 'Henry\'s Law', text: 'Gas dissolves in liquid in proportion to the partial pressure above it. Higher pressure (deeper depth) = more gas dissolved in tissues. On ascent, if pressure drops too fast, gas forms bubbles. This is the mechanism of decompression illness.' },

    { type: 'paragraph', text: 'On ascent, pressure drops and dissolved gas comes out of solution:' },
    { type: 'list', items: [
      'Controlled ascent: gas is eliminated safely through the lungs',
      'Too-fast ascent: gas forms bubbles in tissues and blood — decompression illness',
    ] },

    { type: 'heading', level: 3, text: 'Tissue Loading: A Simplified Model' },
    { type: 'list', items: [
      'Fast tissues (blood, brain): absorb and release gas quickly',
      'Slow tissues (fat, cartilage): absorb and release gas slowly',
      'Decompression schedules account for these different rates',
      'Saturation: all tissues are fully loaded after prolonged exposure at depth',
    ] },
    { type: 'divingContext', text: 'The DCI module on Thursday covers pathophysiology in full detail. Henry\'s Law is the foundation — understand the principle here and the clinical application comes later.' },

    { type: 'heading', level: 2, text: 'Thermal Physics and Gas Density' },

    { type: 'heading', level: 3, text: 'Heat Loss' },
    { type: 'list', items: [
      'Heat is lost by conduction, convection, radiation, and evaporation',
      'Water conducts heat 25 times faster than air',
      'Helium conducts heat 6 times faster than air',
      'Saturation divers lose heat rapidly without active heating systems (hot water suits)',
    ] },

    { type: 'heading', level: 3, text: 'Gas Density at Depth' },
    { type: 'paragraph', text: 'Gas becomes denser at higher pressure. Denser gas is harder to breathe, increasing the work of breathing. This is clinically relevant at deep depths on air or heavy gas mixtures. Helium is less dense than nitrogen, which is one reason it is used for deep diving.' },

    { type: 'heading', level: 2, text: 'Integration: Clinical Application' },
    { type: 'paragraph', text: 'Apply the physics to these clinical scenarios:' },
    { type: 'list', items: [
      'Why does a mask squeeze cause periorbital bruising? (Boyle\'s Law: negative pressure in the mask on descent)',
      'A diver breathes air at 50 msw — what is the ppO₂? (Dalton\'s Law: 0.21 × 6 = 1.26 bar)',
      'Why is a pneumothorax more dangerous during ascent? (Boyle\'s Law: trapped gas expands)',
    ] },
  ],
  takeaways: [
    'Boyle\'s Law: pressure and volume are inversely related — this explains all barotrauma',
    'Dalton\'s Law: partial pressure determines toxicity, not percentage — always calculate ppO₂ at depth',
    'Henry\'s Law: gas dissolves under pressure and forms bubbles if released too fast — this explains DCI',
    'Thermal physics: divers lose heat rapidly, especially in helium environments',
    'A small gas contamination at the surface becomes a significant problem under pressure',
    'Every gas law connects directly to a clinical condition you will assess and manage',
  ],
  selfCheck: [
    {
      question: 'A diver at 20 msw (3 ATA) has a 300 ml gas pocket in their middle ear. What volume will this become at the surface?',
      answer: '900 ml. P₁ × V₁ = P₂ × V₂ → 3 × 300 = 1 × V₂ → V₂ = 900 ml.',
      rationale: 'This is Boyle\'s Law. Gas-filled spaces expand on ascent. This is why barotrauma occurs and why pneumothorax worsens during ascent.',
    },
    {
      question: 'What is the ppO₂ when breathing air at 40 msw?',
      answer: '1.05 bar. At 40 msw, absolute pressure is 5 ATA. ppO₂ = 0.21 × 5 = 1.05 bar.',
      rationale: 'This is below the 1.6 bar CNS toxicity threshold but getting into the zone where individual susceptibility matters. Always calculate before diving.',
    },
    {
      question: 'Why does decompression illness occur?',
      answer: 'Gas dissolved in tissues under pressure (Henry\'s Law) forms bubbles when the diver ascends too quickly for the gas to be safely eliminated through the lungs.',
      rationale: 'Controlled ascent and decompression stops allow dissolved gas to come out of solution gradually and be exhaled. Too-fast ascent causes bubble formation.',
    },
    {
      question: 'Why is helium used instead of nitrogen for deep diving?',
      answer: 'Helium is less narcotic than nitrogen and is less dense, reducing the work of breathing at depth.',
      rationale: 'Nitrogen causes significant narcosis from approximately 30 msw on air. Helium does not have this effect, though it does conduct heat faster.',
    },
  ],
}
