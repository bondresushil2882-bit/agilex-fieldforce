export interface EngagementPersona {
  evidenceOrientation: 'High' | 'Medium' | 'Low';
  communicationPreference: string;
  scientificDepth: 'High' | 'Medium' | 'Low';
  interactionStyle: string;
  preferredChannel: string;
  typicalWindow: string;
  contentPreference: string;
  observedObjectionPattern: string;
  responsePropensity: 'High' | 'Medium' | 'Low';
  accessProbability: number;
  radarScores: {
    evidence: number;
    conciseness: number;
    depth: number;
    interactive: number;
    access: number;
  };
}

export interface EngagementTimelineItem {
  date: string;
  title: string;
  outcome: string;
  signalType: 'positive' | 'objection' | 'competitor' | 'content' | 'followup';
  description: string;
}

export interface EngagementStrategy {
  startWith: string;
  thenDiscuss: string;
  askQuestion: string;
  avoid: string;
  recommendedLength: string;
  closeWith: string;
  whyRecommended: string[];
}

export interface PrepPlan {
  title: string;
  subtitle: string;
  objective: string;
  expectedHcpBehaviour: string;
  expectedObjection: string;
  developmentPriority: string;
  aiRecommendation: string;
  threeThingsToRemember: string[];
}

export interface ScoreFactors {
  hcpPotential: number;
  responsePropensity: number;
  coverageGap: number;
  timing: number;
  accessProbability: number;
  travelEfficiency: number;
}

export interface HCP {
  id: string;
  name: string;
  specialty: string;
  hospital: string;
  location: string;
  territory: string;
  avatar: string;
  opportunityScore: number;
  potential: 'High' | 'Medium' | 'Low';
  engagement: 'High' | 'Medium' | 'Low';
  coverage: 'High' | 'Medium' | 'Low';
  responsiveness: 'High' | 'Medium' | 'Low';
  scoreFactors: ScoreFactors;
  opportunitySummary: string;
  recommendedAction: string;
  recommendedObjective: string;
  recommendedTiming: string;
  recommendedBrand: string;
  recommendedChannel: string;
  recentActivity: string[];
  bio: string;
  prescriptionTrend: string;
  scheduledTime?: string;
  estimatedTravelTime: string;
  estimatedDuration: string;
  isRecommendedToday: boolean;
  mapCoords: { x: number; y: number };
  engagementPersona: EngagementPersona;
  engagementTimeline: EngagementTimelineItem[];
  engagementStrategy: EngagementStrategy;
  prepPlan: PrepPlan;
}

export interface Brand {
  id: string;
  name: string;
  therapeuticArea: string;
  indication: string;
  keyDifferentiator: string;
  safetyProfileNote: string;
}

export interface RepPerformance {
  name: string;
  title: string;
  territory: string;
  overallReadiness: number;
  skills: {
    scientificCommunication: number;
    objectionHandling: number;
    hcpEngagement: number;
    closing: number;
    listening: number;
  };
  priorityGap: string;
  learningProgress: number;
  completedSimulations: number;
  fieldHoursLogged: number;
  targetFieldHours: number;
  badges: { name: string; icon: string; earnedDate: string }[];
}

export const MOCK_BRANDS: Brand[] = [
  {
    id: 'b1',
    name: 'AgileX OncoCare™',
    therapeuticArea: 'Medical Oncology',
    indication: 'Targeted second-line solid tumour therapy',
    keyDifferentiator: 'Superior progression-free survival (PFS) with oral once-daily dosing',
    safetyProfileNote: 'Manageable toxicity profile with proven renal tolerance in comorbid patients'
  },
  {
    id: 'b2',
    name: 'AgileX CardioPlus™',
    therapeuticArea: 'Interventional Cardiology',
    indication: 'Heart failure with reduced ejection fraction (HFrEF)',
    keyDifferentiator: '31% reduction in secondary hospital readmissions at 12 months',
    safetyProfileNote: 'Minimal blood pressure fluctuation, suitable for borderline hypotensive cohorts'
  },
  {
    id: 'b3',
    name: 'AgileX Respira™',
    therapeuticArea: 'Pulmonology',
    indication: 'Severe eosinophilic asthma',
    keyDifferentiator: 'Rapid onset within 48h and steroid-sparing benefit',
    safetyProfileNote: 'Well tolerated with negligible injection site reactions'
  }
];

export const MOCK_HCPS: HCP[] = [
  {
    id: 'hcp-1',
    name: 'Dr. Ananya Mehta',
    specialty: 'Medical Oncology',
    hospital: 'Apollo Comprehensive Cancer Center',
    location: 'Mumbai South',
    territory: 'Mumbai South',
    avatar: '👩‍⚕️',
    opportunityScore: 94,
    potential: 'High',
    engagement: 'Medium',
    coverage: 'Low',
    responsiveness: 'High',
    scheduledTime: '09:30',
    estimatedTravelTime: '15 min',
    estimatedDuration: '10 min',
    isRecommendedToday: true,
    mapCoords: { x: 32, y: 28 },
    scoreFactors: {
      hcpPotential: 32,
      responsePropensity: 21,
      coverageGap: 17,
      timing: 14,
      accessProbability: 10,
      travelEfficiency: 8
    },
    opportunitySummary: 'High potential + recent competitor engagement + under-covered HCP',
    recommendedAction: 'Face-to-face interaction',
    recommendedObjective: 'Safety & treatment discussion',
    recommendedTiming: 'Today (09:30)',
    recommendedBrand: 'AgileX OncoCare™',
    recommendedChannel: 'Face-to-face',
    recentActivity: [
      'Competitor interaction recorded 12 days ago',
      'No AgileX representative contact in 18 days',
      'High-value patient segment: elderly comorbid oncology cohort',
      'Historical high receptivity to peer-reviewed Phase III sub-analyses'
    ],
    bio: 'Senior consultant medical oncologist specializing in thoracic and GI malignancies. High patient throughput with emphasis on evidence-based protocols.',
    prescriptionTrend: '+14% category volume, currently 65% competitor standard-of-care',
    engagementPersona: {
      evidenceOrientation: 'High',
      communicationPreference: 'Concise + evidence-led',
      scientificDepth: 'High',
      interactionStyle: 'Question-driven',
      preferredChannel: 'Face-to-face',
      typicalWindow: '7–10 minutes',
      contentPreference: 'Clinical evidence / real-world evidence',
      observedObjectionPattern: 'Safety + elderly population',
      responsePropensity: 'High',
      accessProbability: 87,
      radarScores: {
        evidence: 95,
        conciseness: 85,
        depth: 90,
        interactive: 88,
        access: 87
      }
    },
    engagementTimeline: [
      {
        date: 'May 04',
        title: 'Clinical evidence discussion',
        outcome: 'Positive engagement with trial data',
        signalType: 'positive',
        description: 'Reviewed primary Phase III survival curves; expressed keen interest in 2-year OS numbers.'
      },
      {
        date: 'May 16',
        title: 'Safety discussion',
        outcome: 'Raised elderly patient concern',
        signalType: 'objection',
        description: 'Questioned renal clearance thresholds in patients over 65 with concomitant hypertension.'
      },
      {
        date: 'May 29',
        title: 'Competitor interaction detected',
        outcome: 'Illustrative demo commercial signal',
        signalType: 'competitor',
        description: 'Competitor rep detailed competitor monotherapy; doctor noted gastrointestinal side effects.'
      },
      {
        date: 'June 07',
        title: 'Real-world evidence content viewed',
        outcome: 'High digital content engagement',
        signalType: 'content',
        description: 'Doctor accessed 18-month real-world registry digital reprint for 4.5 minutes.'
      },
      {
        date: 'June 19',
        title: 'AgileX in-clinic touchpoint',
        outcome: 'Follow-up requested on subgroup analysis',
        signalType: 'followup',
        description: 'Agreed to in-person review once comorbid patient sub-analysis reprint is available.'
      }
    ],
    engagementStrategy: {
      startWith: 'Relevant clinical evidence (Phase III landmark trial)',
      thenDiscuss: 'Safety / tolerability in comorbid cohorts',
      askQuestion: 'Which elderly patient profiles are most challenging in your clinic?',
      avoid: 'Generic promotional statements and unsupported claims',
      recommendedLength: '7–10 minutes',
      closeWith: 'Agree on initial patient review in 2 weeks',
      whyRecommended: [
        'Previous evidence engagement (+32 pts)',
        'Safety objection history in elderly cohorts (+24 pts)',
        'High scientific-content engagement (+21 pts)',
        'Strong response to question-led consultative conversations (+17 pts)'
      ]
    },
    prepPlan: {
      title: 'Prepare for Dr. Ananya Mehta',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Initiate treatment discussion',
      expectedHcpBehaviour: 'Evidence-focused & Safety-conscious',
      expectedObjection: 'Elderly patients with multiple comorbidities',
      developmentPriority: 'Objection Handling & Closing',
      aiRecommendation: 'Practice one safety-objection scenario before the call.',
      threeThingsToRemember: [
        'Lead with evidence — present trial data before recommending initiation.',
        'Connect evidence to the relevant patient population (focus on 65+ comorbid cohort).',
        'Do not over-explain before understanding the HCP’s specific clinical concern.'
      ]
    }
  },
  {
    id: 'hcp-2',
    name: 'Dr. Rahul Rao',
    specialty: 'Medical Oncology',
    hospital: 'Tata Memorial Associated Network',
    location: 'Mumbai South',
    territory: 'Mumbai South',
    avatar: '👨‍⚕️',
    opportunityScore: 91,
    potential: 'High',
    engagement: 'Medium',
    coverage: 'Medium',
    responsiveness: 'High',
    scheduledTime: '10:45',
    estimatedTravelTime: '12 min',
    estimatedDuration: '8 min',
    isRecommendedToday: true,
    mapCoords: { x: 48, y: 36 },
    scoreFactors: {
      hcpPotential: 30,
      responsePropensity: 22,
      coverageGap: 16,
      timing: 15,
      accessProbability: 8,
      travelEfficiency: 9
    },
    opportunitySummary: 'Time-constrained leader; needs bottom-line efficacy summary',
    recommendedAction: 'Face-to-face interaction',
    recommendedObjective: 'Evidence summary & initiation criteria',
    recommendedTiming: 'Today (10:45)',
    recommendedBrand: 'AgileX OncoCare™',
    recommendedChannel: 'Face-to-face',
    recentActivity: [
      'Very high OPD volume (45+ patients daily)',
      'Last interaction 21 days ago; requested 1-page visual summary',
      'Strongly prefers bottom-line clinical data without preamble'
    ],
    bio: 'Associate Professor of Oncology. High clinical throughput. Appreciates brevity, precision, and quick clinical data points.',
    prescriptionTrend: '+18% volume; quick adopter when convinced by key takeaways',
    engagementPersona: {
      evidenceOrientation: 'High',
      communicationPreference: 'Concise + key takeaway first',
      scientificDepth: 'Medium',
      interactionStyle: 'Time-constrained direct',
      preferredChannel: 'Face-to-face',
      typicalWindow: '5–8 minutes',
      contentPreference: 'Visual executive summary / bottom-line PFS data',
      observedObjectionPattern: 'Time to response and dosing simplicity',
      responsePropensity: 'High',
      accessProbability: 82,
      radarScores: {
        evidence: 90,
        conciseness: 98,
        depth: 70,
        interactive: 65,
        access: 82
      }
    },
    engagementTimeline: [
      {
        date: 'May 11',
        title: 'Quick in-clinic exchange',
        outcome: 'Cut meeting short due to emergency OPD',
        signalType: 'objection',
        description: 'Rep gave lengthy slide deck; doctor asked for executive summary next time.'
      },
      {
        date: 'June 02',
        title: '1-page efficacy card delivered',
        outcome: 'High receptivity to condensed summary',
        signalType: 'positive',
        description: 'Reviewed PFS headline numbers and praised 1-minute visual clarity.'
      }
    ],
    engagementStrategy: {
      startWith: 'Key takeaway first: 4.2-month median PFS advantage',
      thenDiscuss: 'Simple once-daily oral dosing schedule',
      askQuestion: 'How many second-line patients are you treating this week?',
      avoid: 'Lengthy background context or unsolicited conversational small-talk',
      recommendedLength: '5–8 minutes',
      closeWith: 'Provide single-page dosing guideline and exit promptly',
      whyRecommended: [
        'Time constraint signal from 4 previous calls',
        'Strong positive reaction to concise bulleted evidence',
        'High prescription throughput makes 5-minute interaction high ROI'
      ]
    },
    prepPlan: {
      title: 'Prepare for Dr. Rahul Rao',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Evidence summary & trial initiation',
      expectedHcpBehaviour: 'Highly time-constrained, direct, impatient with preamble',
      expectedObjection: 'Why change my current protocol when time is tight?',
      developmentPriority: 'Conciseness & Value Articulation',
      aiRecommendation: 'State the primary clinical benefit within the first 30 seconds.',
      threeThingsToRemember: [
        'Give the bottom-line clinical number first — no long introductory slides.',
        'Keep total pitch strictly under 6 minutes.',
        'Have dosing quick-reference card in hand ready for sign-off.'
      ]
    }
  },
  {
    id: 'hcp-3',
    name: 'Dr. Neha Kapoor',
    specialty: 'Medical Oncology & Hematology',
    hospital: 'Sir H.N. Reliance Foundation Hospital',
    location: 'Mumbai South',
    territory: 'Mumbai South',
    avatar: '👩‍⚕️',
    opportunityScore: 86,
    potential: 'High',
    engagement: 'Medium',
    coverage: 'Medium',
    responsiveness: 'High',
    scheduledTime: '12:00',
    estimatedTravelTime: '0 min (Virtual)',
    estimatedDuration: '12 min',
    isRecommendedToday: true,
    mapCoords: { x: 25, y: 50 },
    scoreFactors: {
      hcpPotential: 28,
      responsePropensity: 22,
      coverageGap: 14,
      timing: 12,
      accessProbability: 11,
      travelEfficiency: 10
    },
    opportunitySummary: 'Highly interactive; responsive to discovery questions & patient cases',
    recommendedAction: 'Virtual Clinical Brief',
    recommendedObjective: 'Patient case discovery & follow-up',
    recommendedTiming: 'Today (12:00 Virtual)',
    recommendedBrand: 'AgileX OncoCare™',
    recommendedChannel: 'Virtual / Video Consult',
    recentActivity: [
      'Attended virtual advisory webinar 10 days ago',
      'Submitted clinical inquiry regarding patient biomarker selection',
      'Prefers midday virtual discussions during lunch clinic break'
    ],
    bio: 'Lead hematologist-oncologist interested in personalized genomics and biomarker-stratified treatment options.',
    prescriptionTrend: '+24% adoption of targeted oral regimens',
    engagementPersona: {
      evidenceOrientation: 'High',
      communicationPreference: 'Interactive + patient-case led',
      scientificDepth: 'High',
      interactionStyle: 'Collaborative exploration',
      preferredChannel: 'Virtual / Video Brief',
      typicalWindow: '10–15 minutes',
      contentPreference: 'Biomarker stratification & patient case studies',
      observedObjectionPattern: 'Biomarker testing turnaround time',
      responsePropensity: 'High',
      accessProbability: 91,
      radarScores: {
        evidence: 92,
        conciseness: 75,
        depth: 92,
        interactive: 96,
        access: 91
      }
    },
    engagementTimeline: [
      {
        date: 'May 20',
        title: 'Virtual case review',
        outcome: 'Deep dialogue on EGFR/KRAS co-mutations',
        signalType: 'positive',
        description: 'Discussed patient with comorbid diabetes and demonstrated enthusiastic interest.'
      }
    ],
    engagementStrategy: {
      startWith: 'Inquire about her recent challenging biomarker case',
      thenDiscuss: 'AgileX OncoCare mutation cohort efficacy data',
      askQuestion: 'What biomarker testing panels do your institutional labs run?',
      avoid: 'One-way monologue or generic product claims',
      recommendedLength: '10–12 minutes',
      closeWith: 'Schedule dedicated MSL case-share review session',
      whyRecommended: [
        'Responds exceptionally well to discovery questions (+24 pts)',
        'Virtual channel provides highest access efficiency at noon (+20 pts)'
      ]
    },
    prepPlan: {
      title: 'Prepare for Dr. Neha Kapoor',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Interactive patient case exploration',
      expectedHcpBehaviour: 'Highly inquisitive, collaborative, exploratory',
      expectedObjection: 'Testing hurdles for patient selection',
      developmentPriority: 'Consultative Listening & Probing',
      aiRecommendation: 'Ask open-ended discovery questions before talking product.',
      threeThingsToRemember: [
        'Ask about her current biomarker cases before presenting solutions.',
        'Validate her institutional testing protocol.',
        'Collaborate on candidate patient profile matching.'
      ]
    }
  },
  {
    id: 'hcp-4',
    name: 'Dr. Arjun Shah',
    specialty: 'Medical Oncology',
    hospital: 'Saifee Hospital',
    location: 'Mumbai South',
    territory: 'Mumbai South',
    avatar: '👨‍⚕️',
    opportunityScore: 83,
    potential: 'High',
    engagement: 'Medium',
    coverage: 'Low',
    responsiveness: 'Medium',
    scheduledTime: '14:00',
    estimatedTravelTime: '14 min',
    estimatedDuration: '10 min',
    isRecommendedToday: true,
    mapCoords: { x: 55, y: 60 },
    scoreFactors: {
      hcpPotential: 29,
      responsePropensity: 18,
      coverageGap: 18,
      timing: 11,
      accessProbability: 8,
      travelEfficiency: 7
    },
    opportunitySummary: 'Formulary influencer; competitor contract renewal coming up',
    recommendedAction: 'Face-to-face interaction',
    recommendedObjective: 'Institutional treatment consideration',
    recommendedTiming: 'Today (14:00)',
    recommendedBrand: 'AgileX OncoCare™',
    recommendedChannel: 'Face-to-face',
    recentActivity: [
      'Committee meeting scheduled for institutional formulary next week',
      'No contact in 26 days due to previous route omission'
    ],
    bio: 'Senior consultant oncologist with strong administrative influence on regional hospital procurement.',
    prescriptionTrend: 'High volume institutional prescriber',
    engagementPersona: {
      evidenceOrientation: 'Medium',
      communicationPreference: 'Health economics + clinical balance',
      scientificDepth: 'Medium',
      interactionStyle: 'Strategic pragmatic',
      preferredChannel: 'Face-to-face',
      typicalWindow: '8–12 minutes',
      contentPreference: 'Comparative value dossier and patient affordability',
      observedObjectionPattern: 'Total cost of therapy vs standard of care',
      responsePropensity: 'Medium',
      accessProbability: 79,
      radarScores: {
        evidence: 80,
        conciseness: 82,
        depth: 78,
        interactive: 80,
        access: 79
      }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Hospital procurement economics and length-of-stay reduction',
      thenDiscuss: 'Patient co-pay assistance and Phase III efficacy',
      askQuestion: 'What are the main criteria for your hospital committee review next week?',
      avoid: 'Over-indexing on basic biology when cost impact is top of mind',
      recommendedLength: '8–10 minutes',
      closeWith: 'Deliver institutional formulary executive briefing packet',
      whyRecommended: [
        'High leverage formulary decision window (+28 pts)',
        'Significant coverage gap makes visit overdue (+18 pts)'
      ]
    },
    prepPlan: {
      title: 'Prepare for Dr. Arjun Shah',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Formulary positioning & clinical value presentation',
      expectedHcpBehaviour: 'Economically conscious and committee-focused',
      expectedObjection: 'Hospital cost differentials compared to older therapies',
      developmentPriority: 'Value Articulation',
      aiRecommendation: 'Highlight reduced secondary hospitalization and oral dosing savings.',
      threeThingsToRemember: [
        'Anchor on total systemic value, not just acquisition cost.',
        'Provide the hospital formulary one-pager.',
        'Offer medical team support for committee evaluation.'
      ]
    }
  },
  {
    id: 'hcp-5',
    name: 'Dr. Priya Sen',
    specialty: 'Medical Oncology',
    hospital: 'Bombay Hospital & Medical Research Centre',
    location: 'Mumbai South',
    territory: 'Mumbai South',
    avatar: '👩‍⚕️',
    opportunityScore: 79,
    potential: 'Medium',
    engagement: 'High',
    coverage: 'Medium',
    responsiveness: 'High',
    scheduledTime: '15:30',
    estimatedTravelTime: '10 min',
    estimatedDuration: '8 min',
    isRecommendedToday: true,
    mapCoords: { x: 40, y: 72 },
    scoreFactors: {
      hcpPotential: 24,
      responsePropensity: 22,
      coverageGap: 12,
      timing: 10,
      accessProbability: 12,
      travelEfficiency: 9
    },
    opportunitySummary: 'Loyal prescriber; follow-up on recent patient tolerability',
    recommendedAction: 'Face-to-face interaction',
    recommendedObjective: 'Relationship / Patient progress check',
    recommendedTiming: 'Today (15:30)',
    recommendedBrand: 'AgileX OncoCare™',
    recommendedChannel: 'Face-to-face',
    recentActivity: [
      'Initiated 2 patients on AgileX OncoCare last month',
      'Reported positive feedback on treatment adherence'
    ],
    bio: 'Dedicated clinician focused on patient quality of life and continuity of care.',
    prescriptionTrend: 'Steady champion prescriber',
    engagementPersona: {
      evidenceOrientation: 'Medium',
      communicationPreference: 'Warm, consultative, patient outcome focused',
      scientificDepth: 'Medium',
      interactionStyle: 'Relationship-led',
      preferredChannel: 'Face-to-face',
      typicalWindow: '7–10 minutes',
      contentPreference: 'Patient support materials and management tips',
      observedObjectionPattern: 'Support for low-income patients',
      responsePropensity: 'High',
      accessProbability: 94,
      radarScores: {
        evidence: 78,
        conciseness: 80,
        depth: 76,
        interactive: 90,
        access: 94
      }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Inquire on the progress of her two recent initiated patients',
      thenDiscuss: 'Patient support starter kits and adherence monitoring',
      askQuestion: 'How are patients managing the oral once-daily schedule at home?',
      avoid: 'Over-selling a product she already trusts',
      recommendedLength: '7–8 minutes',
      closeWith: 'Confirm refill schedules and provide patient educational brochures',
      whyRecommended: ['Strengthen advocacy and protect existing patients (+25 pts)']
    },
    prepPlan: {
      title: 'Prepare for Dr. Priya Sen',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Reinforce advocacy & review existing patient outcomes',
      expectedHcpBehaviour: 'Warm, supportive, interested in patient well-being',
      expectedObjection: 'Support schemes for out-of-pocket costs',
      developmentPriority: 'Relationship Management',
      aiRecommendation: 'Review adherence resources and gather real-world testimonials.',
      threeThingsToRemember: [
        'Acknowledge her successful patient initiations first.',
        'Provide patient support care packs.',
        'Ask if she has additional candidates suitable for treatment.'
      ]
    }
  },
  {
    id: 'hcp-6',
    name: 'Dr. Vikram Das',
    specialty: 'Medical Oncology',
    hospital: 'Jaslok Hospital & Research Centre',
    location: 'Mumbai South',
    territory: 'Mumbai South',
    avatar: '👨‍⚕️',
    opportunityScore: 74,
    potential: 'Medium',
    engagement: 'Medium',
    coverage: 'Medium',
    responsiveness: 'Medium',
    scheduledTime: '16:45',
    estimatedTravelTime: '0 min (Virtual)',
    estimatedDuration: '8 min',
    isRecommendedToday: true,
    mapCoords: { x: 20, y: 78 },
    scoreFactors: {
      hcpPotential: 23,
      responsePropensity: 17,
      coverageGap: 14,
      timing: 9,
      accessProbability: 11,
      travelEfficiency: 10
    },
    opportunitySummary: 'Virtual evidence follow-up on renal clearance dataset',
    recommendedAction: 'Virtual Evidence Follow-up',
    recommendedObjective: 'Evidence review & close out call plan',
    recommendedTiming: 'Today (16:45 Virtual)',
    recommendedBrand: 'AgileX OncoCare™',
    recommendedChannel: 'Virtual',
    recentActivity: ['Requested digital PDF of Phase III elderly renal subgroup analysis'],
    bio: 'Academic researcher interested in clinical pharmacology.',
    prescriptionTrend: 'Moderate volume; selective prescriber',
    engagementPersona: {
      evidenceOrientation: 'High',
      communicationPreference: 'Pharmacokinetic data led',
      scientificDepth: 'High',
      interactionStyle: 'Analytical',
      preferredChannel: 'Virtual',
      typicalWindow: '6–9 minutes',
      contentPreference: 'PK/PD curves and metabolism pathways',
      observedObjectionPattern: 'CYP3A4 interactions',
      responsePropensity: 'Medium',
      accessProbability: 80,
      radarScores: {
        evidence: 95,
        conciseness: 80,
        depth: 92,
        interactive: 75,
        access: 80
      }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Deliver requested pharmacokinetic data review',
      thenDiscuss: 'Minimal CYP3A4 pathway interference',
      askQuestion: 'Do co-prescribed statins cause clinical hesitation in your patients?',
      avoid: 'Superficial marketing statements without citation',
      recommendedLength: '6–8 minutes',
      closeWith: 'Email link to full clinical pharmacological monograph',
      whyRecommended: ['Answers direct medical inquiry while optimizing end-of-day travel (+21 pts)']
    },
    prepPlan: {
      title: 'Prepare for Dr. Vikram Das',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Virtual pharmacokinetic data briefing',
      expectedHcpBehaviour: 'Analytical and detail-oriented',
      expectedObjection: 'Drug-drug interactions with common cardiovascular agents',
      developmentPriority: 'Scientific Depth',
      aiRecommendation: 'Have the metabolism pathway slide ready on screen share.',
      threeThingsToRemember: [
        'Share the exact renal clearance clearance curve.',
        'Address drug-drug interaction safety directly.',
        'Respect strict end-of-day virtual schedule.'
      ]
    }
  },
  {
    id: 'hcp-7',
    name: 'Dr. Sunita Kulkarni',
    specialty: 'Cardiology',
    hospital: 'Lilavati Hospital & Research Centre',
    location: 'Mumbai Suburban',
    territory: 'Mumbai North',
    avatar: '👩‍⚕️',
    opportunityScore: 78,
    potential: 'Medium',
    engagement: 'Low',
    coverage: 'Low',
    responsiveness: 'Medium',
    estimatedTravelTime: '35 min',
    estimatedDuration: '10 min',
    isRecommendedToday: false,
    mapCoords: { x: 70, y: 20 },
    scoreFactors: { hcpPotential: 25, responsePropensity: 14, coverageGap: 17, timing: 10, accessProbability: 7, travelEfficiency: 5 },
    opportunitySummary: 'High elderly outpatient load; competitor safety alert creates window',
    recommendedAction: 'Face-to-face clinical dialogue',
    recommendedObjective: 'Highlight renal safety in elderly HFrEF patients',
    recommendedTiming: 'Tomorrow',
    recommendedBrand: 'AgileX CardioPlus™',
    recommendedChannel: 'Face-to-face',
    recentActivity: ['Competitor reported adverse interaction alert in comorbid patients'],
    bio: 'High OPD volume practitioner treating geriatric heart failure patients.',
    prescriptionTrend: 'High volume prescriber, open to safety-differentiated therapy',
    engagementPersona: {
      evidenceOrientation: 'Medium',
      communicationPreference: 'Safety-first practical',
      scientificDepth: 'Medium',
      interactionStyle: 'Direct inquiry',
      preferredChannel: 'Face-to-face',
      typicalWindow: '8–10 minutes',
      contentPreference: 'Elderly patient tolerability data',
      observedObjectionPattern: 'Blood pressure hypotension concerns',
      responsePropensity: 'Medium',
      accessProbability: 76,
      radarScores: { evidence: 80, conciseness: 85, depth: 75, interactive: 78, access: 76 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Blood pressure stability data',
      thenDiscuss: 'Reduction in secondary readmissions',
      askQuestion: 'How often do you manage borderline hypotensive patients?',
      avoid: 'Complex biochemical pathways',
      recommendedLength: '8–10 minutes',
      closeWith: 'Schedule morning follow-up review',
      whyRecommended: ['Competitor alert creates immediate differentiation opportunity']
    },
    prepPlan: {
      title: 'Prepare for Dr. Sunita Kulkarni',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Present cardiovascular safety dataset',
      expectedHcpBehaviour: 'Safety-conscious',
      expectedObjection: 'Hypotension risks',
      developmentPriority: 'Objection Handling',
      aiRecommendation: 'Prepare the blood pressure safety profile graphic.',
      threeThingsToRemember: ['Lead with hemodynamic stability.', 'Highlight readmission reduction.', 'Close with candidate profile identification.']
    }
  },
  {
    id: 'hcp-8',
    name: 'Dr. Vikram Malhotra',
    specialty: 'Interventional Cardiology',
    hospital: 'Max Super Speciality Hospital',
    location: 'Delhi NCR',
    territory: 'Delhi North',
    avatar: '👨‍⚕️',
    opportunityScore: 89,
    potential: 'High',
    engagement: 'Low',
    coverage: 'Low',
    responsiveness: 'Medium',
    estimatedTravelTime: 'N/A (Delhi)',
    estimatedDuration: '12 min',
    isRecommendedToday: false,
    mapCoords: { x: 80, y: 15 },
    scoreFactors: { hcpPotential: 34, responsePropensity: 18, coverageGap: 18, timing: 12, accessProbability: 7, travelEfficiency: 0 },
    opportunitySummary: 'Unmet HF readmission challenge; competitor supply bottleneck',
    recommendedAction: 'Face-to-face clinical brief',
    recommendedObjective: 'Present 12-month hospital readmission dataset',
    recommendedTiming: 'Assigned to Delhi Team',
    recommendedBrand: 'AgileX CardioPlus™',
    recommendedChannel: 'Face-to-face',
    recentActivity: ['Attended Asian Pacific Cardiology Forum last week'],
    bio: 'Director of Heart Failure clinic, publishes on guideline-directed medical therapy.',
    prescriptionTrend: 'High volume initiator; seeks robust safety data',
    engagementPersona: {
      evidenceOrientation: 'High',
      communicationPreference: 'Guideline-directed evidence',
      scientificDepth: 'High',
      interactionStyle: 'Evidence-led discussion',
      preferredChannel: 'Face-to-face',
      typicalWindow: '10–12 minutes',
      contentPreference: '30-day and 12-month hospital readmission studies',
      observedObjectionPattern: 'Formulary tier placement',
      responsePropensity: 'Medium',
      accessProbability: 82,
      radarScores: { evidence: 94, conciseness: 80, depth: 90, interactive: 85, access: 82 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: '31% reduction in secondary readmissions',
      thenDiscuss: 'Guideline inclusion recommendations',
      askQuestion: 'What drives your 30-day bounce-back rate in HFrEF?',
      avoid: 'Non-clinical claims',
      recommendedLength: '10–12 minutes',
      closeWith: 'Formulary dossier presentation',
      whyRecommended: ['High volume potential with acute supply opening']
    },
    prepPlan: {
      title: 'Prepare for Dr. Vikram Malhotra',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Present readmission data to secure guideline adoption',
      expectedHcpBehaviour: 'Academic, evidence-focused',
      expectedObjection: 'Clinical trial vs real-world performance',
      developmentPriority: 'Scientific Fluency',
      aiRecommendation: 'Bring the 12-month readmission Kaplan-Meier curves.',
      threeThingsToRemember: ['Emphasize secondary readmission drop.', 'Detail renal safety.', 'Offer institutional registry participation.']
    }
  },
  {
    id: 'hcp-9',
    name: 'Dr. Priya Nambiar',
    specialty: 'Pulmonology',
    hospital: 'Fortis Memorial Research Institute',
    location: 'Bengaluru',
    territory: 'Bengaluru South',
    avatar: '👩‍⚕️',
    opportunityScore: 86,
    potential: 'High',
    engagement: 'Medium',
    coverage: 'Medium',
    responsiveness: 'High',
    estimatedTravelTime: 'N/A (Bengaluru)',
    estimatedDuration: '10 min',
    isRecommendedToday: false,
    mapCoords: { x: 75, y: 70 },
    scoreFactors: { hcpPotential: 30, responsePropensity: 22, coverageGap: 14, timing: 11, accessProbability: 9, travelEfficiency: 0 },
    opportunitySummary: 'Expanding biologic treatment cohort; responsive to digital medical inquiry',
    recommendedAction: 'Digital MSL follow-up',
    recommendedObjective: 'Review rapid 48-hour symptom control data',
    recommendedTiming: 'Assigned to South Team',
    recommendedBrand: 'AgileX Respira™',
    recommendedChannel: 'Hybrid',
    recentActivity: ['Opened AgileX Respira clinical monograph email yesterday'],
    bio: 'Pioneering asthma center lead with strict patient inclusion protocols.',
    prescriptionTrend: '+22% growth in severe asthma biologic adoption',
    engagementPersona: {
      evidenceOrientation: 'High',
      communicationPreference: 'Biomarker-led precision',
      scientificDepth: 'High',
      interactionStyle: 'Consultative',
      preferredChannel: 'Hybrid',
      typicalWindow: '8–12 minutes',
      contentPreference: 'Steroid-sparing protocols and FeNO biomarkers',
      observedObjectionPattern: 'Reimbursement coverage friction',
      responsePropensity: 'High',
      accessProbability: 88,
      radarScores: { evidence: 92, conciseness: 85, depth: 88, interactive: 86, access: 88 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Rapid 48-hour symptom control data',
      thenDiscuss: 'Steroid tapering milestones',
      askQuestion: 'What biomarker cutoff criteria do you apply before biologic initiation?',
      avoid: 'Generic bronchodilator comparisons',
      recommendedLength: '8–10 minutes',
      closeWith: 'Deliver patient access portal guide',
      whyRecommended: ['High digital responsiveness and expanding patient pool']
    },
    prepPlan: {
      title: 'Prepare for Dr. Priya Nambiar',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Review steroid-sparing biomarker thresholds',
      expectedHcpBehaviour: 'Biomarker-focused, scientific',
      expectedObjection: 'Access support for non-insured patients',
      developmentPriority: 'Market Access & Scientific Communication',
      aiRecommendation: 'Prepare the 48-hour onset clinical chart.',
      threeThingsToRemember: ['Highlight rapid symptom relief.', 'Show steroid-sparing curve.', 'Provide co-pay program details.']
    }
  },
  {
    id: 'hcp-10',
    name: 'Dr. Rajesh Deshmukh',
    specialty: 'Medical Oncology',
    hospital: 'Tata Memorial Associated Network',
    location: 'Pune',
    territory: 'Pune Metro',
    avatar: '👨‍⚕️',
    opportunityScore: 82,
    potential: 'Medium',
    engagement: 'High',
    coverage: 'Medium',
    responsiveness: 'High',
    estimatedTravelTime: 'N/A (Pune)',
    estimatedDuration: '10 min',
    isRecommendedToday: false,
    mapCoords: { x: 60, y: 40 },
    scoreFactors: { hcpPotential: 26, responsePropensity: 26, coverageGap: 12, timing: 10, accessProbability: 8, travelEfficiency: 0 },
    opportunitySummary: 'Advocate HCP requiring new clinical sub-group analysis for institutional formulary',
    recommendedAction: 'Formulary dossier review',
    recommendedObjective: 'Secure institutional pharmacy inclusion approval',
    recommendedTiming: 'Assigned to Pune Team',
    recommendedBrand: 'AgileX OncoCare™',
    recommendedChannel: 'Face-to-face',
    recentActivity: ['Requested updated Phase III renal sub-analysis documentation'],
    bio: 'Key Opinion Leader and member of Regional Formulary Committee.',
    prescriptionTrend: 'Steady champion of AgileX OncoCare',
    engagementPersona: {
      evidenceOrientation: 'High',
      communicationPreference: 'Regulatory & committee dossier focused',
      scientificDepth: 'High',
      interactionStyle: 'Formal academic',
      preferredChannel: 'Face-to-face',
      typicalWindow: '10–15 minutes',
      contentPreference: 'Full clinical study reports and pharmacoeconomic files',
      observedObjectionPattern: 'Formulary committee voting timelines',
      responsePropensity: 'High',
      accessProbability: 89,
      radarScores: { evidence: 90, conciseness: 78, depth: 94, interactive: 82, access: 89 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Formulary committee briefing binder',
      thenDiscuss: 'Institutional health economics',
      askQuestion: 'When is the next procurement committee review agenda set?',
      avoid: 'Rushing through clinical dossier details',
      recommendedLength: '12–15 minutes',
      closeWith: 'Schedule medical director sign-off meeting',
      whyRecommended: ['Institutional inclusion impacts 80+ patients annually']
    },
    prepPlan: {
      title: 'Prepare for Dr. Rajesh Deshmukh',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Deliver complete formulary submission pack',
      expectedHcpBehaviour: 'Institutional committee member',
      expectedObjection: 'Committee budget constraints',
      developmentPriority: 'Commercial Closing',
      aiRecommendation: 'Highlight budget-neutral substitution data.',
      threeThingsToRemember: ['Have certified trial copies ready.', 'Address procurement timeline.', 'Confirm committee voting date.']
    }
  },
  {
    id: 'hcp-11',
    name: 'Dr. Manish Gupta',
    specialty: 'Medical Oncology',
    hospital: 'Kokilaben Dhirubhai Ambani Hospital',
    location: 'Mumbai Suburban',
    territory: 'Mumbai North',
    avatar: '👨‍⚕️',
    opportunityScore: 71,
    potential: 'Medium',
    engagement: 'Low',
    coverage: 'Medium',
    responsiveness: 'Medium',
    estimatedTravelTime: '40 min',
    estimatedDuration: '8 min',
    isRecommendedToday: false,
    mapCoords: { x: 85, y: 30 },
    scoreFactors: { hcpPotential: 22, responsePropensity: 15, coverageGap: 16, timing: 8, accessProbability: 6, travelEfficiency: 4 },
    opportunitySummary: 'Moderate prescriber; prefers written email updates before physical meetings',
    recommendedAction: 'Digital touchpoint',
    recommendedObjective: 'Share clinical monograph via email',
    recommendedTiming: 'In 3 days',
    recommendedBrand: 'AgileX OncoCare™',
    recommendedChannel: 'Email / Digital',
    recentActivity: ['Last physical visit 35 days ago'],
    bio: 'Focuses on breast and thoracic malignancies.',
    prescriptionTrend: 'Prefers standard of care; slow adopter',
    engagementPersona: {
      evidenceOrientation: 'Medium',
      communicationPreference: 'Digital first, concise',
      scientificDepth: 'Medium',
      interactionStyle: 'Reserved',
      preferredChannel: 'Email / Digital',
      typicalWindow: '5–8 minutes',
      contentPreference: 'Peer-reviewed reprints',
      observedObjectionPattern: 'Wait-and-see for local registry data',
      responsePropensity: 'Medium',
      accessProbability: 70,
      radarScores: { evidence: 75, conciseness: 85, depth: 75, interactive: 60, access: 70 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Digital monograph reprint link',
      thenDiscuss: 'Local real-world patient registry',
      askQuestion: 'What trial data would give you confidence in targeted second-line?',
      avoid: 'Drop-in visits without appointment',
      recommendedLength: '5–7 minutes',
      closeWith: 'Agree on virtual brief',
      whyRecommended: ['Low travel efficiency today; high digital receptivity']
    },
    prepPlan: {
      title: 'Prepare for Dr. Manish Gupta',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Digital pre-briefing',
      expectedHcpBehaviour: 'Reserved and protocol-driven',
      expectedObjection: 'Need local experience data',
      developmentPriority: 'Digital Engagement',
      aiRecommendation: 'Send local registry summary.',
      threeThingsToRemember: ['Follow digital-first protocol.', 'Keep text brief.', 'Cite peer-reviewed evidence.']
    }
  },
  {
    id: 'hcp-12',
    name: 'Dr. Anita Joshi',
    specialty: 'Cardiology',
    hospital: 'Hinduja Hospital',
    location: 'Mumbai Central',
    territory: 'Mumbai South',
    avatar: '👩‍⚕️',
    opportunityScore: 76,
    potential: 'Medium',
    engagement: 'Medium',
    coverage: 'Low',
    responsiveness: 'High',
    estimatedTravelTime: '18 min',
    estimatedDuration: '10 min',
    isRecommendedToday: false,
    mapCoords: { x: 38, y: 48 },
    scoreFactors: { hcpPotential: 25, responsePropensity: 20, coverageGap: 15, timing: 8, accessProbability: 5, travelEfficiency: 3 },
    opportunitySummary: 'Heart failure specialist; strong potential for AgileX CardioPlus',
    recommendedAction: 'Schedule for next cycle route',
    recommendedObjective: 'Clinical efficacy presentation',
    recommendedTiming: 'Day after tomorrow',
    recommendedBrand: 'AgileX CardioPlus™',
    recommendedChannel: 'Face-to-face',
    recentActivity: ['Expressed interest in biomarker-guided titration'],
    bio: 'Senior consultant cardiologist leading post-MI rehabilitation clinic.',
    prescriptionTrend: 'Early adopter of cardiovascular innovations',
    engagementPersona: {
      evidenceOrientation: 'High',
      communicationPreference: 'Protocol and guideline-driven',
      scientificDepth: 'High',
      interactionStyle: 'Educational',
      preferredChannel: 'Face-to-face',
      typicalWindow: '8–10 minutes',
      contentPreference: 'Hemodynamic titration charts',
      observedObjectionPattern: 'Titration complexity',
      responsePropensity: 'High',
      accessProbability: 84,
      radarScores: { evidence: 88, conciseness: 80, depth: 85, interactive: 82, access: 84 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Titration simplicity protocol',
      thenDiscuss: 'Readmission reduction statistics',
      askQuestion: 'How often do your patients require titration adjustments?',
      avoid: 'Rushing through dose escalation guidelines',
      recommendedLength: '8–10 minutes',
      closeWith: 'Provide wall chart for clinic titration',
      whyRecommended: ['High clinical receptivity to titration guidelines']
    },
    prepPlan: {
      title: 'Prepare for Dr. Anita Joshi',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Present titration safety protocol',
      expectedHcpBehaviour: 'Structured and protocol-focused',
      expectedObjection: 'Titration burden on OPD nurses',
      developmentPriority: 'Scientific Detailing',
      aiRecommendation: 'Prepare the nursing titration flowchart.',
      threeThingsToRemember: ['Show titration guide.', 'Highlight patient adherence.', 'Leave clinic laminated charts.']
    }
  },
  {
    id: 'hcp-13',
    name: 'Dr. Sanjay Chawla',
    specialty: 'Pulmonology',
    hospital: 'Nanavati Super Speciality Hospital',
    location: 'Mumbai Suburban',
    territory: 'Mumbai North',
    avatar: '👨‍⚕️',
    opportunityScore: 68,
    potential: 'Medium',
    engagement: 'Low',
    coverage: 'Medium',
    responsiveness: 'Low',
    estimatedTravelTime: '45 min',
    estimatedDuration: '7 min',
    isRecommendedToday: false,
    mapCoords: { x: 75, y: 35 },
    scoreFactors: { hcpPotential: 20, responsePropensity: 12, coverageGap: 18, timing: 8, accessProbability: 6, travelEfficiency: 4 },
    opportunitySummary: 'Severe asthma cohort; competitor contracted clinic',
    recommendedAction: 'Monitor access window',
    recommendedObjective: 'Share clinical reprint',
    recommendedTiming: 'Next week',
    recommendedBrand: 'AgileX Respira™',
    recommendedChannel: 'Virtual',
    recentActivity: ['Contracted with competitor sponsored trial'],
    bio: 'Specialist in difficult-to-treat respiratory conditions.',
    prescriptionTrend: 'Tied to competitor biologic',
    engagementPersona: {
      evidenceOrientation: 'Medium',
      communicationPreference: 'Formal, skeptical',
      scientificDepth: 'Medium',
      interactionStyle: 'Challenging',
      preferredChannel: 'Virtual Brief',
      typicalWindow: '5–7 minutes',
      contentPreference: 'Direct comparative head-to-head trials',
      observedObjectionPattern: 'Loyalty to existing standard of care',
      responsePropensity: 'Low',
      accessProbability: 62,
      radarScores: { evidence: 75, conciseness: 80, depth: 70, interactive: 55, access: 62 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Head-to-head steroid sparing data',
      thenDiscuss: 'Onset speed (48 hours)',
      askQuestion: 'What percentage of your biologic patients still experience breakthrough exacerbations?',
      avoid: 'Disparaging competitor molecule',
      recommendedLength: '5–7 minutes',
      closeWith: 'Invite to regional scientific roundtable',
      whyRecommended: ['Competitor contract expiration creates future opportunity']
    },
    prepPlan: {
      title: 'Prepare for Dr. Sanjay Chawla',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Address competitor entrenchment',
      expectedHcpBehaviour: 'Skeptical and defensive of current molecule',
      expectedObjection: 'Current drug works fine for my patients',
      developmentPriority: 'Objection Handling',
      aiRecommendation: 'Focus on patients with breakthrough symptoms on competitor drug.',
      threeThingsToRemember: ['Never criticize competitor.', 'Highlight 48h onset speed.', 'Ask about breakthrough cases.']
    }
  },
  {
    id: 'hcp-14',
    name: 'Dr. Farhan Merchant',
    specialty: 'Medical Oncology',
    hospital: 'Jaslok Hospital & Research Centre',
    location: 'Mumbai South',
    territory: 'Mumbai South',
    avatar: '👨‍⚕️',
    opportunityScore: 72,
    potential: 'Medium',
    engagement: 'Medium',
    coverage: 'Medium',
    responsiveness: 'Medium',
    estimatedTravelTime: '15 min',
    estimatedDuration: '8 min',
    isRecommendedToday: false,
    mapCoords: { x: 30, y: 70 },
    scoreFactors: { hcpPotential: 24, responsePropensity: 16, coverageGap: 14, timing: 8, accessProbability: 6, travelEfficiency: 4 },
    opportunitySummary: 'Colleague of Dr. Mehta; responsive to peer recommendations',
    recommendedAction: 'Schedule post-Dr. Mehta initiation',
    recommendedObjective: 'Peer clinical sharing',
    recommendedTiming: 'In 4 days',
    recommendedBrand: 'AgileX OncoCare™',
    recommendedChannel: 'Face-to-face',
    recentActivity: ['Expressed interest in oncology grand rounds presentation'],
    bio: 'Consultant thoracic oncologist working closely with Dr. Mehta.',
    prescriptionTrend: 'Influenced by departmental opinion leaders',
    engagementPersona: {
      evidenceOrientation: 'High',
      communicationPreference: 'Peer validation led',
      scientificDepth: 'Medium',
      interactionStyle: 'Collegial',
      preferredChannel: 'Face-to-face',
      typicalWindow: '7–10 minutes',
      contentPreference: 'Departmental case series and peer experience',
      observedObjectionPattern: 'Departmental alignment',
      responsePropensity: 'Medium',
      accessProbability: 78,
      radarScores: { evidence: 85, conciseness: 80, depth: 80, interactive: 85, access: 78 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Departmental evidence overview',
      thenDiscuss: 'Clinical grand rounds topics',
      askQuestion: 'How does your thoracic team standardize second-line dosing?',
      avoid: 'Isolating his opinion from departmental practice',
      recommendedLength: '7–9 minutes',
      closeWith: 'Coordinate joint case discussion with Dr. Mehta',
      whyRecommended: ['High network synergy with Dr. Mehta']
    },
    prepPlan: {
      title: 'Prepare for Dr. Farhan Merchant',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Leverage peer clinical advocacy',
      expectedHcpBehaviour: 'Collegial and department-oriented',
      expectedObjection: 'Waiting for department consensus',
      developmentPriority: 'Network Influence',
      aiRecommendation: 'Reference institutional peer trial participation.',
      threeThingsToRemember: ['Mention Dr. Mehta’s review of safety data.', 'Highlight departmental consensus.', 'Offer grand rounds presentation.']
    }
  },
  {
    id: 'hcp-15',
    name: 'Dr. Shalini Singhania',
    specialty: 'Cardiology',
    hospital: 'Wockhardt Hospital',
    location: 'Mumbai South',
    territory: 'Mumbai South',
    avatar: '👩‍⚕️',
    opportunityScore: 70,
    potential: 'Medium',
    engagement: 'Low',
    coverage: 'Low',
    responsiveness: 'Medium',
    estimatedTravelTime: '12 min',
    estimatedDuration: '8 min',
    isRecommendedToday: false,
    mapCoords: { x: 50, y: 75 },
    scoreFactors: { hcpPotential: 22, responsePropensity: 17, coverageGap: 16, timing: 7, accessProbability: 5, travelEfficiency: 3 },
    opportunitySummary: 'Elderly HFrEF patient cohort; competitor safety concerns opening doors',
    recommendedAction: 'Schedule for next week route',
    recommendedObjective: 'Safety presentation',
    recommendedTiming: 'Next week',
    recommendedBrand: 'AgileX CardioPlus™',
    recommendedChannel: 'Face-to-face',
    recentActivity: ['Lapsed contact for 38 days'],
    bio: 'Specialist in geriatric cardiology.',
    prescriptionTrend: 'Cautious prescriber',
    engagementPersona: {
      evidenceOrientation: 'Medium',
      communicationPreference: 'Safety first, patient focused',
      scientificDepth: 'Medium',
      interactionStyle: 'Inquisitive',
      preferredChannel: 'Face-to-face',
      typicalWindow: '6–8 minutes',
      contentPreference: 'Geriatric safety data',
      observedObjectionPattern: 'Orthostatic hypotension in seniors',
      responsePropensity: 'Medium',
      accessProbability: 75,
      radarScores: { evidence: 80, conciseness: 85, depth: 75, interactive: 80, access: 75 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Orthostatic stability data',
      thenDiscuss: 'Geriatric subgroup analysis',
      askQuestion: 'What is your primary safety concern in patients aged 75+?',
      avoid: 'Aggressive commitment pressure',
      recommendedLength: '6–8 minutes',
      closeWith: 'Leave geriatric safety monograph',
      whyRecommended: ['Coverage gap creates high recovery value']
    },
    prepPlan: {
      title: 'Prepare for Dr. Shalini Singhania',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Geriatric safety briefing',
      expectedHcpBehaviour: 'Cautious and patient-protective',
      expectedObjection: 'Hypotension in vulnerable seniors',
      developmentPriority: 'Safety Detailing',
      aiRecommendation: 'Prepare the senior safety graph.',
      threeThingsToRemember: ['Emphasize low discontinuation rate.', 'Detail blood pressure stability.', 'Offer nurse educator visit.']
    }
  },
  {
    id: 'hcp-16',
    name: 'Dr. Rakesh Nair',
    specialty: 'Medical Oncology',
    hospital: 'Ruby Hall Clinic',
    location: 'Pune',
    territory: 'Pune Metro',
    avatar: '👨‍⚕️',
    opportunityScore: 69,
    potential: 'Medium',
    engagement: 'Medium',
    coverage: 'Medium',
    responsiveness: 'Medium',
    estimatedTravelTime: 'N/A (Pune)',
    estimatedDuration: '10 min',
    isRecommendedToday: false,
    mapCoords: { x: 65, y: 55 },
    scoreFactors: { hcpPotential: 23, responsePropensity: 16, coverageGap: 14, timing: 8, accessProbability: 5, travelEfficiency: 3 },
    opportunitySummary: 'Regional opinion leader; responsive to clinical webinars',
    recommendedAction: 'Digital event invitation',
    recommendedObjective: 'Clinical symposium invite',
    recommendedTiming: 'Assigned to Pune Team',
    recommendedBrand: 'AgileX OncoCare™',
    recommendedChannel: 'Virtual',
    recentActivity: ['Attended national oncology webinar'],
    bio: 'Regional expert in gastrointestinal malignancies.',
    prescriptionTrend: 'Steady volume prescriber',
    engagementPersona: {
      evidenceOrientation: 'High',
      communicationPreference: 'Symposium and case-study driven',
      scientificDepth: 'High',
      interactionStyle: 'Academic',
      preferredChannel: 'Hybrid',
      typicalWindow: '8–12 minutes',
      contentPreference: 'GI oncology sub-analysis',
      observedObjectionPattern: 'Toxicity in liver metastasis patients',
      responsePropensity: 'Medium',
      accessProbability: 77,
      radarScores: { evidence: 90, conciseness: 75, depth: 90, interactive: 80, access: 77 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'GI sub-analysis landmark trial',
      thenDiscuss: 'Hepatic tolerance profile',
      askQuestion: 'What proportion of your GI patients present with hepatic involvement?',
      avoid: 'Rushing through biochemical safety',
      recommendedLength: '8–10 minutes',
      closeWith: 'Invite to regional scientific roundtable',
      whyRecommended: ['Specialized GI patient segment']
    },
    prepPlan: {
      title: 'Prepare for Dr. Rakesh Nair',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'GI oncology symposium briefing',
      expectedHcpBehaviour: 'Scientific and academically rigorous',
      expectedObjection: 'Hepatic impairment dosing',
      developmentPriority: 'Scientific Fluency',
      aiRecommendation: 'Prepare the hepatic clearance table.',
      threeThingsToRemember: ['Detail GI subgroup survival.', 'Show hepatic safety profile.', 'Extend symposium invitation.']
    }
  },
  {
    id: 'hcp-17',
    name: 'Dr. Meera Iyer',
    specialty: 'Pulmonology',
    hospital: 'Manipal Hospital',
    location: 'Bengaluru',
    territory: 'Bengaluru South',
    avatar: '👩‍⚕️',
    opportunityScore: 67,
    potential: 'Medium',
    engagement: 'Low',
    coverage: 'Medium',
    responsiveness: 'Medium',
    estimatedTravelTime: 'N/A (Bengaluru)',
    estimatedDuration: '8 min',
    isRecommendedToday: false,
    mapCoords: { x: 70, y: 80 },
    scoreFactors: { hcpPotential: 21, responsePropensity: 18, coverageGap: 12, timing: 8, accessProbability: 5, travelEfficiency: 3 },
    opportunitySummary: 'Severe asthma patient volume; high digital inquiry volume',
    recommendedAction: 'Digital outreach',
    recommendedObjective: 'Biologic onboarding protocol',
    recommendedTiming: 'Assigned to South Team',
    recommendedBrand: 'AgileX Respira™',
    recommendedChannel: 'Virtual',
    recentActivity: ['Submitted online inquiry on biologic injection training'],
    bio: 'Consultant pulmonologist.',
    prescriptionTrend: 'Increasing biologic use',
    engagementPersona: {
      evidenceOrientation: 'Medium',
      communicationPreference: 'Practical onboarding focus',
      scientificDepth: 'Medium',
      interactionStyle: 'Implementation oriented',
      preferredChannel: 'Virtual',
      typicalWindow: '6–8 minutes',
      contentPreference: 'Self-administration videos and nurse guides',
      observedObjectionPattern: 'Patient injection compliance',
      responsePropensity: 'Medium',
      accessProbability: 82,
      radarScores: { evidence: 80, conciseness: 85, depth: 75, interactive: 85, access: 82 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Pre-filled autoinjector simplicity',
      thenDiscuss: 'Nurse-assisted first dose program',
      askQuestion: 'What causes injection hesitation among your severe asthma patients?',
      avoid: 'Over-complicating cytokine pathways',
      recommendedLength: '6–8 minutes',
      closeWith: 'Ship demonstration trainer devices',
      whyRecommended: ['Solves practical clinical friction']
    },
    prepPlan: {
      title: 'Prepare for Dr. Meera Iyer',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Injection onboarding presentation',
      expectedHcpBehaviour: 'Implementation-focused',
      expectedObjection: 'Patients fear self-injection',
      developmentPriority: 'Patient Centricity',
      aiRecommendation: 'Demonstrate autoinjector ergonomic design.',
      threeThingsToRemember: ['Show the trainer pen.', 'Explain the nurse support hotline.', 'Emphasize 48h onset.']
    }
  },
  {
    id: 'hcp-18',
    name: 'Dr. Vivek Bhatt',
    specialty: 'Cardiology',
    hospital: 'Apollo Hospitals',
    location: 'Ahmedabad',
    territory: 'Ahmedabad',
    avatar: '👨‍⚕️',
    opportunityScore: 65,
    potential: 'Medium',
    engagement: 'Low',
    coverage: 'Medium',
    responsiveness: 'Low',
    estimatedTravelTime: 'N/A (Gujarat)',
    estimatedDuration: '10 min',
    isRecommendedToday: false,
    mapCoords: { x: 50, y: 18 },
    scoreFactors: { hcpPotential: 22, responsePropensity: 13, coverageGap: 15, timing: 7, accessProbability: 5, travelEfficiency: 3 },
    opportunitySummary: 'High HFrEF outpatient load; needs dedicated clinical representative attention',
    recommendedAction: 'Territory rep assignment',
    recommendedObjective: 'Clinical re-introduction',
    recommendedTiming: 'Assigned to Amit Patel',
    recommendedBrand: 'AgileX CardioPlus™',
    recommendedChannel: 'Face-to-face',
    recentActivity: ['Lapsed call for 45 days'],
    bio: 'Director of Cardiology OPD.',
    prescriptionTrend: 'High volume standard therapy',
    engagementPersona: {
      evidenceOrientation: 'Medium',
      communicationPreference: 'Relationship & clinical balance',
      scientificDepth: 'Medium',
      interactionStyle: 'Traditional',
      preferredChannel: 'Face-to-face',
      typicalWindow: '8–10 minutes',
      contentPreference: 'Comparative readmission data',
      observedObjectionPattern: 'Familiarity with older beta-blocker/ACE regimens',
      responsePropensity: 'Low',
      accessProbability: 71,
      radarScores: { evidence: 75, conciseness: 78, depth: 75, interactive: 70, access: 71 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'Landmark secondary readmission trial',
      thenDiscuss: 'Combination guideline recommendations',
      askQuestion: 'What is your primary treatment goal in recurring HFrEF readmissions?',
      avoid: 'Criticizing older foundational regimens',
      recommendedLength: '8–10 minutes',
      closeWith: 'Schedule MSL clinical session',
      whyRecommended: ['Territory recovery priority for Amit Patel']
    },
    prepPlan: {
      title: 'Prepare for Dr. Vivek Bhatt',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Address legacy inertia',
      expectedHcpBehaviour: 'Traditional and habit-bound',
      expectedObjection: 'Older drugs are working adequately',
      developmentPriority: 'Value Differentiation',
      aiRecommendation: 'Focus on 31% incremental readmission drop.',
      threeThingsToRemember: ['Validate his foundational regimen.', 'Position as complementary add-on.', 'Show readmission curves.']
    }
  },
  {
    id: 'hcp-19',
    name: 'Dr. Kavita Narang',
    specialty: 'Medical Oncology',
    hospital: 'Artemis Hospital',
    location: 'Delhi NCR',
    territory: 'Delhi North',
    avatar: '👩‍⚕️',
    opportunityScore: 63,
    potential: 'Medium',
    engagement: 'Medium',
    coverage: 'Medium',
    responsiveness: 'Medium',
    estimatedTravelTime: 'N/A (Delhi)',
    estimatedDuration: '8 min',
    isRecommendedToday: false,
    mapCoords: { x: 75, y: 12 },
    scoreFactors: { hcpPotential: 20, responsePropensity: 15, coverageGap: 13, timing: 7, accessProbability: 5, travelEfficiency: 3 },
    opportunitySummary: 'Thoracic oncology prescriber; responds to patient registry data',
    recommendedAction: 'Digital case monograph share',
    recommendedObjective: 'Clinical registry update',
    recommendedTiming: 'Assigned to Delhi Team',
    recommendedBrand: 'AgileX OncoCare™',
    recommendedChannel: 'Virtual',
    recentActivity: ['Attended thoracic symposium session'],
    bio: 'Associate consultant in medical oncology.',
    prescriptionTrend: 'Moderate volume adopter',
    engagementPersona: {
      evidenceOrientation: 'High',
      communicationPreference: 'Real-world data driven',
      scientificDepth: 'High',
      interactionStyle: 'Analytical',
      preferredChannel: 'Virtual',
      typicalWindow: '7–9 minutes',
      contentPreference: 'Real-world registry follow-up',
      observedObjectionPattern: 'Long-term duration of response',
      responsePropensity: 'Medium',
      accessProbability: 79,
      radarScores: { evidence: 88, conciseness: 82, depth: 85, interactive: 78, access: 79 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: '18-month real-world registry durability',
      thenDiscuss: 'Quality-of-life survey results',
      askQuestion: 'What is your median treatment duration for targeted second-line patients?',
      avoid: 'Focusing exclusively on short-term response rate',
      recommendedLength: '7–9 minutes',
      closeWith: 'Share full real-world registry reprint',
      whyRecommended: ['Strong synergy with real-world evidence asset']
    },
    prepPlan: {
      title: 'Prepare for Dr. Kavita Narang',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Present 18-month durability data',
      expectedHcpBehaviour: 'Analytical and durability-focused',
      expectedObjection: 'Will response endure past 12 months?',
      developmentPriority: 'Scientific Communication',
      aiRecommendation: 'Prepare the durability swimmer plot.',
      threeThingsToRemember: ['Highlight sustained duration of response.', 'Cite real-world patient counts.', 'Provide digital reprint.']
    }
  },
  {
    id: 'hcp-20',
    name: 'Dr. Ashok Bansal',
    specialty: 'Cardiology',
    hospital: 'Care Hospitals',
    location: 'Hyderabad',
    territory: 'Hyderabad North',
    avatar: '👨‍⚕️',
    opportunityScore: 61,
    potential: 'Low',
    engagement: 'Medium',
    coverage: 'Medium',
    responsiveness: 'Medium',
    estimatedTravelTime: 'N/A (Hyderabad)',
    estimatedDuration: '8 min',
    isRecommendedToday: false,
    mapCoords: { x: 55, y: 78 },
    scoreFactors: { hcpPotential: 18, responsePropensity: 16, coverageGap: 12, timing: 7, accessProbability: 5, travelEfficiency: 3 },
    opportunitySummary: 'Community cardiology center with growing heart failure OPD',
    recommendedAction: 'Territory introductory call',
    recommendedObjective: 'Product introduction',
    recommendedTiming: 'Assigned to Arjun Das',
    recommendedBrand: 'AgileX CardioPlus™',
    recommendedChannel: 'Face-to-face',
    recentActivity: ['First contact in newly expanded territory'],
    bio: 'Consultant cardiologist in tertiary network.',
    prescriptionTrend: 'Standard medical therapy',
    engagementPersona: {
      evidenceOrientation: 'Medium',
      communicationPreference: 'Practical clinic benefits',
      scientificDepth: 'Medium',
      interactionStyle: 'Conversational',
      preferredChannel: 'Face-to-face',
      typicalWindow: '6–8 minutes',
      contentPreference: 'Hospital discharge protocols',
      observedObjectionPattern: 'Pricing and patient co-pay',
      responsePropensity: 'Medium',
      accessProbability: 74,
      radarScores: { evidence: 72, conciseness: 80, depth: 70, interactive: 75, access: 74 }
    },
    engagementTimeline: [],
    engagementStrategy: {
      startWith: 'HFrEF post-discharge stabilization',
      thenDiscuss: 'Patient assistance programs',
      askQuestion: 'What are the main causes of discharge readmission in your center?',
      avoid: 'Academic jargon',
      recommendedLength: '6–8 minutes',
      closeWith: 'Provide discharge protocol kit',
      whyRecommended: ['Expanding territory presence in Hyderabad']
    },
    prepPlan: {
      title: 'Prepare for Dr. Ashok Bansal',
      subtitle: 'Your AI-generated 5-minute preparation plan',
      objective: 'Deliver post-discharge protocol',
      expectedHcpBehaviour: 'Pragmatic and clinic-focused',
      expectedObjection: 'Patient affordability in community center',
      developmentPriority: 'Access Detailing',
      aiRecommendation: 'Prepare the co-pay assistance scheme card.',
      threeThingsToRemember: ['Focus on practical discharge steps.', 'Highlight affordability.', 'Leave product starter dossier.']
    }
  }
];

export const MOCK_REP_PROFILE: RepPerformance = {
  name: 'Priya Shah',
  title: 'Key Account Manager — Oncology & Specialty',
  territory: 'Mumbai South',
  overallReadiness: 84,
  skills: {
    scientificCommunication: 91,
    objectionHandling: 82,
    hcpEngagement: 88,
    closing: 74,
    listening: 86
  },
  priorityGap: 'Closing the conversation & Treatment Commitment',
  learningProgress: 62,
  completedSimulations: 14,
  fieldHoursLogged: 5.8,
  targetFieldHours: 7.0,
  badges: [
    { name: 'Evidence Master', icon: '🧬', earnedDate: 'Oct 2026' },
    { name: 'Active Listener', icon: '🎯', earnedDate: 'Sep 2026' },
    { name: 'Objection Navigator', icon: '🛡️', earnedDate: 'Sep 2026' }
  ]
};

export const MOCK_TEAM_MEMBERS = [
  { name: 'Priya Shah', territory: 'Mumbai South', readiness: 92, keyGap: 'Closing', status: 'Ready', callsTarget: 8, callsDone: 7 },
  { name: 'Rahul Mehta', territory: 'Delhi North', readiness: 84, keyGap: 'Objection Handling', status: 'Coach', callsTarget: 8, callsDone: 6 },
  { name: 'Amit Patel', territory: 'Ahmedabad', readiness: 72, keyGap: 'Scientific Communication', status: 'High Priority', callsTarget: 8, callsDone: 4 },
  { name: 'Neha Rao', territory: 'Bengaluru South', readiness: 89, keyGap: 'Engagement', status: 'Monitor', callsTarget: 8, callsDone: 7 },
  { name: 'Siddharth Roy', territory: 'Kolkata East', readiness: 81, keyGap: 'Closing', status: 'Coach', callsTarget: 8, callsDone: 5 },
  { name: 'Kavita Verma', territory: 'Chennai Central', readiness: 86, keyGap: 'Objection Handling', status: 'Ready', callsTarget: 8, callsDone: 7 },
  { name: 'Arjun Das', territory: 'Hyderabad North', readiness: 78, keyGap: 'Scientific Communication', status: 'Coach', callsTarget: 8, callsDone: 5 },
  { name: 'Tanvi Joshi', territory: 'Pune Metro', readiness: 87, keyGap: 'Listening', status: 'Ready', callsTarget: 8, callsDone: 6 }
];

export const MOCK_LEARNING_MODULES = [
  {
    id: 'mod-1',
    title: 'Disease & Unmet Need in Solid Tumours',
    category: 'Therapeutic Science',
    duration: '25 min',
    difficulty: 'Foundation',
    status: 'Completed',
    score: '96%',
    brand: 'AgileX OncoCare™'
  },
  {
    id: 'mod-2',
    title: 'Phase III Landmark Trial Clinical Evidence',
    category: 'Clinical Mastery',
    duration: '35 min',
    difficulty: 'Intermediate',
    status: 'Completed',
    score: '92%',
    brand: 'AgileX OncoCare™'
  },
  {
    id: 'mod-3',
    title: 'HCP Dialogue Architecture & Consultative Listening',
    category: 'Field Skills',
    duration: '30 min',
    difficulty: 'Foundation',
    status: 'Completed',
    score: '88%',
    brand: 'Cross-Portfolio'
  },
  {
    id: 'mod-4',
    title: 'Handling Safety & Renal Comorbidity Objections',
    category: 'Simulation Lab',
    duration: '20 min',
    difficulty: 'Advanced',
    status: 'Recommended',
    score: 'Pending',
    brand: 'AgileX OncoCare™'
  },
  {
    id: 'mod-5',
    title: 'Value Proposition & Differentiated Positioning',
    category: 'Commercial Strategy',
    duration: '40 min',
    difficulty: 'Intermediate',
    status: 'Upcoming',
    score: '-',
    brand: 'AgileX CardioPlus™'
  },
  {
    id: 'mod-6',
    title: 'Access, Reimbursement & Patient Co-Pay Schemes',
    category: 'Market Access',
    duration: '30 min',
    difficulty: 'Intermediate',
    status: 'Upcoming',
    score: '-',
    brand: 'Cross-Portfolio'
  },
  {
    id: 'mod-7',
    title: 'Q4 Product Launch Readiness & Commitment Closing',
    category: 'Launch Excellence',
    duration: '45 min',
    difficulty: 'Advanced',
    status: 'Upcoming',
    score: '-',
    brand: 'AgileX OncoCare™'
  }
];
