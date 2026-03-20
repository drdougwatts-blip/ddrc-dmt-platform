export default {
  objectives: [
    'Analyse recent significant diving incidents and identify lessons for DMT practice',
    'Discuss the DMT role in incident response, including actions in the first critical minutes',
    'Describe the interaction between DMT, supervisor, and physician during a diving emergency',
    'Identify common errors in incident management and how to avoid them',
    'Discuss the importance of post-incident reporting and psychological support',
  ],
  prerequisites: [],
  preBrief: {
    haveReady: [
      'Your own experience of diving incidents (anonymised) — you may be asked to share',
      'DMAC 01 form for the case exercise',
    ],
    keyTerms: [
      { term: 'Normalisation of deviance', definition: 'Gradually accepting small risks as routine until a serious incident occurs' },
      { term: 'Authority gradient', definition: 'Reluctance to challenge someone of higher rank or authority — a barrier to safety' },
      { term: 'Human factors', definition: 'The study of how people interact with systems, including fatigue, stress, and communication errors' },
      { term: 'Contemporaneous notes', definition: 'Records made at the time of the event — essential for investigations' },
    ],
    thinkAbout: [
      'Think of an incident you witnessed or were involved in. What went well? What would you do differently?',
      'Have you ever felt pressure not to escalate a concern? What happened?',
    ],
  },
  sections: [
    { type: 'paragraph', text: 'This module is discussion-heavy and relies on your experience. Ground rules: no blame, no naming of individuals or companies. Focus on learning. What happened, what was done, what would you do differently?' },
    { type: 'paragraph', text: 'The session uses three anonymised incident case studies with recorded DMP case commentaries. The SI facilitates live discussion around the recordings. Your experience is the most valuable resource in the room.' },

    { type: 'heading', level: 2, text: 'Case Study 1: DCI Incident' },
    { type: 'paragraph', text: 'Key discussion areas for the DCI case:' },
    { type: 'list', items: [
      'How quickly was DCI recognised? What were the early signs?',
      'What did the DMT do in the first 10 minutes?',
      'How was the physician contacted? What information was provided?',
      'Was recompression initiated promptly? Were there delays, and why?',
      'What was the outcome for the patient?',
    ] },
    { type: 'table', headers: ['What Went Well', 'What Could Improve'], rows: [
      ['Early recognition of symptoms', 'Delays in recognition or escalation'],
      ['Prompt oxygen administration', 'Incomplete neurological examination'],
      ['Structured communication with physician', 'Poor DMAC 01 completion'],
      ['Timely initiation of treatment', 'Pressure from operations to delay treatment'],
      ['Good documentation throughout', 'Gaps in monitoring during treatment'],
    ] },

    { type: 'heading', level: 2, text: 'Case Study 2: Trauma / Medical Emergency' },
    { type: 'paragraph', text: 'Focus: the first 10 minutes on deck after a serious incident.' },

    { type: 'heading', level: 3, text: 'The First 10 Minutes: What Matters' },
    { type: 'orderedList', items: [
      'Scene safety: do not become a second casualty',
      'ABCDE: primary survey, fix life threats',
      'Call for help: do not try to manage alone — get the physician on the line',
      'Delegate: someone fetches the DMAC 15 kit, someone contacts the bridge, someone assists you',
      'DMAC 01: start completing it as soon as the immediate threats are managed',
      'Handover: if another medically trained person arrives, use a structured handover',
      'Document: times, observations, interventions — you will not remember later',
    ] },
    { type: 'inPractice', text: 'The reality of managing a casualty while the dive operation continues around you is chaotic. Delegation is essential. You cannot do everything yourself. Identify your helpers, give them clear tasks, and focus on the patient.' },

    { type: 'heading', level: 2, text: 'Case Study 3: Chamber Emergency' },
    { type: 'paragraph', text: 'Discussion areas: what happens when standard procedures fail? Problem-solving under pressure in a confined space. The DMT\'s role when locked in with the patient. Communication with dive control when systems have failed.' },

    { type: 'heading', level: 2, text: 'Common Themes and Human Factors' },

    { type: 'heading', level: 3, text: 'Recurring Errors Across Incidents' },
    { type: 'table', headers: ['Common Errors', 'Human Factors'], rows: [
      ['Delayed recognition of symptoms (normalisation)', 'Fatigue: long shifts, night work, disrupted sleep'],
      ['Poor or incomplete communication', 'Normalisation of deviance: accepting small risks as routine'],
      ['Inadequate documentation', 'Authority gradient: reluctance to challenge the supervisor'],
      ['Failure to escalate when situation worsens', 'Tunnel vision: focusing on one problem and missing another'],
      ['Pressure from operations to continue rather than stop', 'The DMT as a safety barrier in the system'],
    ] },
    { type: 'keyPoint', text: 'The DMT is a safety barrier. When you raise a concern, you are doing your job, not causing a problem. If the supervisor tells you not to bother the doctor, and you think the doctor needs to know — make the call. Every time.' },

    { type: 'heading', level: 3, text: 'Staying Current Between Certifications' },
    { type: 'list', items: [
      'IMCA Safety Flashes: published incident reports with lessons learned',
      'DMAC publications: updated guidance on medical equipment and procedures',
      'CPD: maintain your clinical skills through practice and reading',
      'Peer discussion: talk to other DMTs about their experiences',
      'The biennial refresher is not enough on its own — stay engaged between courses',
    ] },

    { type: 'heading', level: 2, text: 'Post-Incident Considerations' },

    { type: 'heading', level: 3, text: 'After the Incident' },
    { type: 'list', items: [
      'Incident reporting: factual, contemporaneous — what happened and when',
      'Report to: supervisor, company, relevant national authority as required',
      'Preservation of evidence: do not discard equipment, do not clean the scene prematurely',
      'Medical records: secure, complete, handed over appropriately',
      'Investigation: you may be asked to provide a statement — refer to your contemporaneous notes',
      'Cooperation: with company investigation, regulatory bodies, or legal processes',
    ] },

    { type: 'heading', level: 3, text: 'Psychological Impact' },
    { type: 'list', items: [
      'The DMT may be the first responder to a seriously injured colleague',
      'This has a psychological impact — it is normal to be affected',
      'Common reactions: replaying the event, sleep disturbance, self-doubt, irritability',
      'Talk about it: to a colleague, to a line manager, to a professional if needed',
      'Support resources: company welfare, occupational health, peer support networks',
      'Do not ignore it. Do not self-medicate. Do not assume you should just cope.',
      'Return to work: ensure you are fit before going back offshore',
    ] },
    { type: 'divingContext', title: 'Looking After Yourself', text: 'The DMT role puts you at the front line of diving emergencies. Taking care of your own mental health is not weakness — it is professional responsibility. If a colleague seems affected, check in with them.' },
  ],
  takeaways: [
    'Diving incidents are managed by people under pressure — a structured approach saves lives',
    'ABCDE, early physician contact, DMAC 01, and clear documentation are non-negotiable',
    'Human factors: fatigue, normalisation of deviance, authority gradient — recognise them in yourself and others',
    'The DMT is a safety barrier — raising concerns is your job, not a nuisance',
    'Post-incident: report factually, preserve evidence, look after yourself and your team',
    'This is the capstone of the online phase — you should now feel ready for the in-person practical week',
  ],
  selfCheck: [
    {
      question: 'What is "normalisation of deviance" and why is it dangerous?',
      answer: 'Gradually accepting small risks or deviations from procedure as routine. Dangerous because it erodes safety margins until a serious incident occurs.',
      rationale: 'Each small deviation seems harmless on its own, but the cumulative effect creates conditions for a major incident. Recognise it in yourself and your team.',
    },
    {
      question: 'The supervisor tells you to focus on the dive operation and that the diver\'s complaint is probably nothing. What do you do?',
      answer: 'If you believe the complaint needs medical attention, you contact the physician regardless of the supervisor\'s opinion. Document your actions.',
      rationale: 'The DMT\'s duty is to the patient. The supervisor is not medically qualified to assess the significance of a medical complaint.',
    },
    {
      question: 'After a serious incident, a colleague seems withdrawn and is not sleeping well. What should you do?',
      answer: 'Check in with them. Acknowledge that psychological impact is normal after a serious incident. Encourage them to talk to someone — colleague, line manager, or professional support.',
      rationale: 'Post-incident psychological impact is common and real. Ignoring it does not make it go away. Early support prevents longer-term problems.',
    },
    {
      question: 'Why is contemporaneous documentation important after an incident?',
      answer: 'Records made at the time are more accurate than memory. They may be required as evidence in investigations and protect both the patient and the DMT.',
      rationale: 'Memory degrades rapidly under stress. Contemporaneous notes carry significantly more weight in any subsequent investigation or legal process.',
    },
  ],
}
