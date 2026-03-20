export default [
  {
    question: 'At 30 metres of seawater (msw), the absolute pressure is:',
    options: [
      '2 bar',
      '3 bar',
      '4 bar',
      '5 bar',
    ],
    correct: 2,
    explanation: 'Pressure increases by 1 bar per 10 msw. At 30 msw: 3 bar (gauge) + 1 bar (atmospheric) = 4 bar absolute (4 ATA).',
  },
  {
    question: 'According to Boyle\'s Law, a 500 ml gas pocket at 30 msw will expand to what volume at the surface?',
    options: [
      '1000 ml',
      '1500 ml',
      '2000 ml',
      '2500 ml',
    ],
    correct: 2,
    explanation: 'At 30 msw the absolute pressure is 4 ATA. At the surface it is 1 ATA. By Boyle\'s Law (P1V1 = P2V2): 4 × 500 = 1 × V2, so V2 = 2000 ml.',
  },
  {
    question: 'Dalton\'s Law of partial pressures is most clinically relevant because it explains:',
    options: [
      'Why gas volumes change with depth',
      'Why gases become more toxic at depth',
      'Why divers feel cold at depth',
      'Why equalisation becomes harder at depth',
    ],
    correct: 1,
    explanation: 'Dalton\'s Law states that the partial pressure of each gas increases with depth. This means gases like oxygen and nitrogen reach toxic levels at depth, even though the percentage in the mix hasn\'t changed.',
  },
  {
    question: 'What is the partial pressure of oxygen (ppO₂) when breathing air at 50 msw?',
    options: [
      '0.63 bar',
      '1.05 bar',
      '1.26 bar',
      '1.68 bar',
    ],
    correct: 2,
    explanation: 'At 50 msw, absolute pressure is 6 ATA. Air is 21% oxygen. ppO₂ = 6 × 0.21 = 1.26 bar, approaching the CNS toxicity threshold of 1.6 bar.',
  },
  {
    question: 'Henry\'s Law explains the mechanism behind:',
    options: [
      'Oxygen toxicity',
      'Barotrauma',
      'Decompression illness',
      'Nitrogen narcosis',
    ],
    correct: 2,
    explanation: 'Henry\'s Law states that gas dissolves into liquid in proportion to pressure. At depth, nitrogen dissolves into tissues. On ascent, if decompression is too fast, nitrogen comes out of solution as bubbles — causing DCI.',
  },
  {
    question: 'Why is a pneumothorax particularly dangerous during ascent?',
    options: [
      'The diver cannot equalise',
      'The trapped air expands according to Boyle\'s Law',
      'Nitrogen narcosis worsens the condition',
      'Oxygen toxicity is more likely',
    ],
    correct: 1,
    explanation: 'A pneumothorax contains trapped gas. As the diver ascends, ambient pressure decreases and the trapped gas expands (Boyle\'s Law), potentially converting a simple pneumothorax into a life-threatening tension pneumothorax.',
  },
  {
    question: 'Helium is used instead of nitrogen in deep diving gas mixes primarily because:',
    options: [
      'It is cheaper than nitrogen',
      'It causes less narcosis and has lower gas density',
      'It prevents oxygen toxicity',
      'It dissolves faster in tissues',
    ],
    correct: 1,
    explanation: 'Helium causes significantly less narcosis than nitrogen and has much lower density, reducing work of breathing at depth. These properties make it essential for deep diving operations.',
  },
  {
    question: 'Carbon monoxide (CO) is dangerous because:',
    options: [
      'It reduces the oxygen percentage in the breathing mix',
      'It binds to haemoglobin 200-250 times more strongly than oxygen',
      'It causes nitrogen narcosis at lower depths',
      'It increases the partial pressure of nitrogen',
    ],
    correct: 1,
    explanation: 'CO binds to haemoglobin 200-250 times more strongly than oxygen, forming carboxyhaemoglobin. Even small concentrations prevent oxygen transport, and at depth the partial pressure of CO is further increased.',
  },
]
