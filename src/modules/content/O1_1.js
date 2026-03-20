export default {
  objectives: [
    'Identify major structures and functions of the musculoskeletal system relevant to injury assessment',
    'Describe the nervous system in sufficient detail for neurological examination',
    'Explain the cardiovascular system as it relates to shock, bleeding, and resuscitation',
    'Describe respiratory anatomy relevant to airway management and gas exchange',
    'Explain the ears, sinuses, and vestibular organs relevant to barotrauma',
  ],
  prerequisites: [],
  preBrief: {
    haveReady: [
      'Pen and paper for sketching anatomical diagrams',
      'DMAC 01 guidance note (if available) — you will see how anatomy links to the clinical form',
    ],
    keyTerms: [
      { term: 'Dermatome', definition: 'An area of skin supplied by a single spinal nerve — used to localise spinal cord injury' },
      { term: 'Cardiac output', definition: 'Volume of blood pumped by the heart per minute (heart rate × stroke volume)' },
      { term: 'Eustachian tube', definition: 'The pressure equalisation pathway between the middle ear and the throat' },
      { term: 'Crepitus', definition: 'A crackling or grinding sensation, often felt over a fracture site' },
      { term: 'Glasgow Coma Scale (GCS)', definition: 'A standardised scoring system for consciousness level: Eyes + Verbal + Motor' },
    ],
    thinkAbout: [
      'Which body systems would you need to assess if a diver collapsed on deck after surfacing?',
      'Why is anatomy taught differently on a DMT course compared to a nursing degree?',
    ],
  },
  sections: [
    { type: 'paragraph', text: 'This module covers anatomy at the level relevant to clinical practice — not as an academic exercise. Every structure you learn here connects to a clinical skill you will practise during the in-person week. The guiding principle from D020: teach anatomy in appropriate detail relevant only to practical management of conditions.' },

    { type: 'heading', level: 2, text: 'Musculoskeletal System' },
    { type: 'paragraph', text: 'The musculoskeletal system provides the framework you will assess when dealing with fractures, dislocations, and soft tissue injuries. As a DMT, knowing which bones and joints are where allows you to assess injuries, apply splints correctly, and anticipate complications such as blood loss.' },

    { type: 'heading', level: 3, text: 'Bones and Fracture Relevance' },
    { type: 'paragraph', text: 'Bones are grouped into three main categories relevant to injury assessment:' },
    { type: 'list', items: [
      'Long bones: femur, tibia, humerus, radius/ulna — fractures here can cause significant blood loss',
      'Flat bones: ribs, pelvis, skull — protect vital organs, fractures suggest high-energy mechanism',
      'Irregular bones: vertebrae, facial bones — complex shapes with specific injury patterns',
    ] },
    { type: 'paragraph', text: 'Fracture types you need to recognise:' },
    { type: 'list', items: [
      'Closed vs open (compound): open fractures have a wound communicating with the fracture site and carry high infection risk',
      'Complicated fractures: associated nerve or vessel injury alongside the break',
      'Pathological fractures: fracture through weakened bone (underlying disease)',
    ] },
    { type: 'keyPoint', title: 'Blood Loss by Location', text: 'Fracture location matters because blood loss varies dramatically. A closed femoral fracture can lose 1-2 litres into the thigh. A pelvic fracture can be life-threatening. Know the signs: deformity, swelling, crepitus, and loss of function.' },

    { type: 'heading', level: 3, text: 'Joints, Muscles, and Spine' },
    { type: 'paragraph', text: 'Synovial joints (shoulder, knee, ankle, wrist) are the most commonly injured in the diving and offshore environment. You need to distinguish between a sprain (ligament injury, joint still in place) and a dislocation (joint surfaces no longer aligned).' },
    { type: 'list', items: [
      'Muscle strains: from overexertion or sudden movement',
      'Compartment syndrome: swelling within a muscle compartment compresses blood vessels and nerves — a surgical emergency',
      'Crush injury: prolonged compression of muscle tissue causes rhabdomyolysis (muscle breakdown releasing toxins into the blood)',
    ] },
    { type: 'paragraph', text: 'The spinal column consists of cervical, thoracic, lumbar, and sacral vertebrae. The spinal cord runs within the vertebral canal. Damage to the cord results in permanent deficit below the level of injury. C-spine injury and immobilisation is covered in the first aid module.' },
    { type: 'divingContext', title: 'Diving Relevance', text: 'DCI commonly affects the spinal cord (particularly the thoracic and lumbar regions). Understanding the spinal column anatomy helps you interpret neurological examination findings and communicate them to the physician.' },

    { type: 'heading', level: 2, text: 'Nervous System' },
    { type: 'paragraph', text: 'The nervous system is divided into the central nervous system (brain and spinal cord) and the peripheral nervous system (motor and sensory nerves). The autonomic nervous system controls involuntary functions including heart rate, blood pressure, and gut function.' },

    { type: 'heading', level: 3, text: 'Central and Peripheral Nervous System' },
    { type: 'list', items: [
      'Brain: controls consciousness, motor function, sensation, speech, and pupil responses',
      'Spinal cord: carries signals between the brain and the body',
      'Peripheral nerves: motor nerves (movement) and sensory nerves (feeling)',
      'Autonomic nervous system: the sympathetic response drives tachycardia and vasoconstriction in shock',
    ] },

    { type: 'heading', level: 3, text: 'Neurological Examination: Why It Matters' },
    { type: 'paragraph', text: 'The neurological examination is the tool that detects DCI. A normal baseline examination makes any subsequent changes immediately obvious. During the in-person week, you will practise the full neuro exam on each other. This session covers the "why" behind each test.' },
    { type: 'paragraph', text: 'What you are testing in the neuro exam:' },
    { type: 'list', items: [
      'Consciousness level: GCS (Glasgow Coma Scale) or AVPU (Alert, Voice, Pain, Unresponsive)',
      'Motor power: can the patient move their limbs against resistance?',
      'Sensation: can they feel light touch? Where is it normal and where is it reduced?',
      'Reflexes: are normal responses present?',
      'Pupils: size, equality, and reactivity to light',
    ] },
    { type: 'paragraph', text: 'Dermatomes are simplified for DMT purposes: upper limb levels are roughly C5-T1, trunk levels follow the rib lines, and lower limb levels are L2-S1. You do not need to memorise a complete dermatome map. The goal is to detect change from one examination to the next.' },
    { type: 'keyPoint', text: 'The neurological examination detects DCI. A normal baseline makes changes obvious. You will practise the full neuro exam on each other during the in-person week.' },

    { type: 'heading', level: 2, text: 'Cardiovascular System' },
    { type: 'paragraph', text: 'The cardiovascular system is the foundation for understanding shock, bleeding, and CPR. Every practical skill in the in-person week connects back to this system.' },

    { type: 'heading', level: 3, text: 'Heart and Circulation' },
    { type: 'list', items: [
      'Four chambers: right atrium and ventricle (pump blood to lungs), left atrium and ventricle (pump blood to body)',
      'Coronary arteries: supply the heart muscle itself — blocked coronary = heart attack',
      'Cardiac output = heart rate × stroke volume (approximately 5 litres/minute at rest)',
    ] },

    { type: 'heading', level: 3, text: 'Blood Vessels and Blood' },
    { type: 'table', headers: ['Component', 'Key Features', 'Clinical Relevance'], rows: [
      ['Arteries', 'High pressure, pulsatile, bright red', 'Arterial bleeding is rapid and life-threatening'],
      ['Veins', 'Lower pressure, steady flow, darker', 'Venous access for IV fluids and drugs'],
      ['Capillaries', 'Tiny vessels at tissue level', 'Gas and nutrient exchange occurs here'],
    ] },
    { type: 'paragraph', text: 'Blood consists of red cells (oxygen transport via haemoglobin), white cells (infection response), platelets (clotting initiation), and plasma (fluid component carrying proteins). Total blood volume in an adult is approximately 5 litres. Major pressure points for haemorrhage control include the femoral, brachial, and radial arteries.' },
    { type: 'inPractice', text: 'You will control bleeding from arteries, start IV lines in veins, and do chest compressions to maintain circulation. Knowing the difference between arterial and venous bleeding — and where to apply pressure — is a fundamental DMT skill.' },

    { type: 'heading', level: 2, text: 'Respiratory System' },

    { type: 'heading', level: 3, text: 'Airway and Lungs' },
    { type: 'list', items: [
      'Upper airway: nose, mouth, pharynx, larynx',
      'Lower airway: trachea, bronchi, bronchioles',
      'Alveoli: the gas exchange surface (oxygen in, CO₂ out)',
      'Diaphragm and intercostal muscles: the mechanics of breathing',
    ] },
    { type: 'keyPoint', text: 'The tongue is the commonest cause of airway obstruction in an unconscious patient. Relevant skills you will practise: OPA, NPA, i-gel, bag-valve-mask, and oxygen delivery.' },

    { type: 'heading', level: 3, text: 'Gas Exchange and Clinical Links' },
    { type: 'paragraph', text: 'Oxygen crosses from the alveolus into the blood and CO₂ crosses from the blood into the alveolus, driven by partial pressure gradients. This process is disrupted by fluid in the alveoli, lung collapse, or airway obstruction.' },
    { type: 'paragraph', text: 'Clinical conditions linked to gas exchange failure:' },
    { type: 'list', items: [
      'Pneumothorax: air in the pleural space, lung collapse',
      'Pulmonary barotrauma: lung overexpansion on ascent',
      'Pulmonary oedema: fluid flooding the alveoli',
      'Oxygen therapy works by increasing the driving pressure of oxygen across the membrane',
    ] },

    { type: 'heading', level: 2, text: 'Ears, Sinuses, and Vestibular Organs' },
    { type: 'paragraph', text: 'Ear problems are the most common medical complaint in diving, particularly in saturation. Understanding ear anatomy is essential for recognising barotrauma and managing ear infections.' },

    { type: 'heading', level: 3, text: 'Ear Anatomy and Function' },
    { type: 'table', headers: ['Structure', 'Components', 'Clinical Relevance'], rows: [
      ['Outer ear', 'External canal to tympanic membrane (eardrum)', 'Otitis externa, especially in saturation'],
      ['Middle ear', 'Ossicles, Eustachian tube', 'Squeeze, barotrauma, middle ear infection'],
      ['Inner ear', 'Cochlea (hearing), semicircular canals (balance)', 'Inner ear barotrauma = urgent referral'],
    ] },
    { type: 'paragraph', text: 'The Eustachian tube is the pressure equalisation pathway. When it fails to open on descent, pressure builds across the eardrum causing squeeze and potentially rupture. The round and oval windows of the inner ear are vulnerable to barotrauma from forceful equalisation. Alternobaric vertigo occurs when the two ears equalise at different rates.' },

    { type: 'heading', level: 3, text: 'Sinuses and Saturation Ear Hygiene' },
    { type: 'list', items: [
      'Paranasal sinuses (frontal, maxillary, ethmoid, sphenoid): air-filled cavities subject to squeeze',
      'Sinus barotrauma: pain, epistaxis (nosebleed), referred toothache',
      'Saturation ear hygiene: humidity, warmth, and earphone use create infection risk',
      'Prevention: drying protocols, prophylactic drops, regular checks',
    ] },
    { type: 'divingContext', title: 'Ear Hygiene in Saturation', text: 'Ear problems are the most common medical complaint in saturation. Prevention through established hygiene protocols is always better than treatment. Every saturation run should have ear hygiene procedures in place from day one.' },

    { type: 'heading', level: 2, text: 'Integration Exercise' },
    { type: 'paragraph', text: 'A diver surfaces after a bounce dive to 50 metres. On reaching the surface, he collapses on deck and is unresponsive. His breathing is shallow and irregular. There is no obvious external injury.' },
    { type: 'paragraph', text: 'Consider:' },
    { type: 'list', items: [
      'Which body systems could be involved?',
      'What might have gone wrong? (Think about all five systems covered today)',
      'What would you assess first and why?',
    ] },
    { type: 'inPractice', text: 'This scenario will recur throughout the course in increasing detail. Today you are building the anatomical foundation. By the end of the in-person week, you will be able to manage this patient through a structured ABCDE approach with full neurological examination.' },
  ],
  takeaways: [
    'Anatomy is taught to support clinical skills, not as an academic exercise',
    'Musculoskeletal: know where major structures are to assess and splint injuries correctly',
    'Nervous system: understand what you are testing in the neuro exam and why — this detects DCI',
    'Cardiovascular: the foundation for understanding shock, bleeding, and CPR',
    'Respiratory: know the airway anatomy to manage it effectively under pressure',
    'Ears and sinuses: the most common diving medical problems you will deal with',
    'Every structure covered today connects to a practical skill in the in-person week',
  ],
  selfCheck: [
    {
      question: 'What is the most common cause of airway obstruction in an unconscious patient?',
      answer: 'The tongue.',
      rationale: 'The tongue falls back and occludes the pharynx. Simple positioning (head tilt chin lift or jaw thrust) can relieve this.',
    },
    {
      question: 'Why is a closed femoral fracture potentially life-threatening even without external bleeding?',
      answer: 'A closed femoral fracture can lose 1-2 litres of blood into the thigh, causing hypovolaemic shock.',
      rationale: 'The thigh has a large muscle compartment that can accommodate significant blood loss without visible external haemorrhage.',
    },
    {
      question: 'What is the primary purpose of the neurological examination for a DMT?',
      answer: 'To establish a baseline and detect changes — particularly to identify DCI.',
      rationale: 'A normal baseline examination makes any subsequent neurological changes immediately obvious. You do not need to diagnose; you need to detect change.',
    },
    {
      question: 'What is cardiac output and what is the approximate resting value?',
      answer: 'Cardiac output = heart rate × stroke volume. Approximately 5 litres per minute at rest.',
      rationale: 'Understanding cardiac output is essential for recognising shock: when the heart cannot maintain adequate output, tissues are not perfused.',
    },
    {
      question: 'Why is inner ear barotrauma more serious than middle ear barotrauma?',
      answer: 'Inner ear barotrauma can cause permanent sensorineural hearing loss and requires urgent specialist referral. Middle ear barotrauma is usually self-limiting.',
      rationale: 'The inner ear contains the cochlea and vestibular organs. Damage to the round or oval windows (perilymph fistula) needs same-day specialist assessment.',
    },
  ],
}
