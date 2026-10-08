import React, { createContext, useContext, useState } from 'react';
import { MOCK_HCPS, MOCK_REP_PROFILE, HCP, RepPerformance } from '../data/mockData';

export type ScreenType = 
  | 'dashboard'
  | 'field-planner'
  | 'hcp-opportunity'
  | 'hcp-intelligence'
  | 'prepare-call'
  | 'hcp-simulator'
  | 'ai-coach'
  | 'call-outcome'
  | 'next-best-action'
  | 'my-performance'
  | 'academy'
  | 'manager'
  | 'capacity-simulator'
  | 'commercial-insights'
  | 'ai-learning-loop';

export interface SimulationResult {
  score: number;
  scientificAccuracy: number;
  hcpUnderstanding: number;
  objectionHandling: number;
  communicationClarity: number;
  engagement: number;
  userTurnResponses: string[];
  hcpId: string;
}

export interface CallOutcomeState {
  hcpId: string;
  hcpName: string;
  actualOutcome: string;
  repScore: number;
  aiLearnsQuote: string;
  nextFollowupDays: number;
  nextChannel: string;
  nextContent: string;
  personaUpdates: {
    evidenceDelta: string;
    safetyDelta: string;
    followupPropensity: string;
  };
}

interface AppContextType {
  activeScreen: ScreenType;
  setActiveScreen: (screen: ScreenType) => void;
  selectedHcp: HCP;
  setSelectedHcp: (hcp: HCP) => void;
  simulationResult: SimulationResult | null;
  setSimulationResult: (result: SimulationResult | null) => void;
  callOutcomeState: CallOutcomeState | null;
  setCallOutcomeState: (outcome: CallOutcomeState | null) => void;
  repProfile: RepPerformance;
  setRepProfile: React.Dispatch<React.SetStateAction<RepPerformance>>;
  demoMode: boolean;
  setDemoMode: (val: boolean) => void;
  // Field planner toggle
  isPlanOptimized: boolean;
  setIsPlanOptimized: (val: boolean) => void;
  // Judge tour
  goToNextInJudgeTour: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('dashboard');
  const [selectedHcp, setSelectedHcp] = useState<HCP>(MOCK_HCPS[0]);
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null);
  const [callOutcomeState, setCallOutcomeState] = useState<CallOutcomeState | null>({
    hcpId: 'hcp-1',
    hcpName: 'Dr. Ananya Mehta',
    actualOutcome: 'HCP acknowledged Phase III safety tolerability and agreed to review elderly candidate patients.',
    repScore: 86,
    aiLearnsQuote: 'Evidence-led discussions addressing renal comorbidity safety generated stronger consultative engagement for this HCP.',
    nextFollowupDays: 7,
    nextChannel: 'Face-to-face',
    nextContent: 'Phase III Comorbid Patient Monograph + Initiation Support Kit',
    personaUpdates: {
      evidenceDelta: 'Evidence Orientation: Strengthened (+8 pts)',
      safetyDelta: 'Safety Concern: Addressed & Validated',
      followupPropensity: 'Follow-up Propensity: High (89%)'
    }
  });
  const [repProfile, setRepProfile] = useState<RepPerformance>(MOCK_REP_PROFILE);
  const [demoMode, setDemoMode] = useState<boolean>(true);
  const [isPlanOptimized, setIsPlanOptimized] = useState<boolean>(true);

  // 14-Step Judge Journey sequence
  const judgeSequence: ScreenType[] = [
    'dashboard',           // 1. Command Center
    'field-planner',       // 2. Today's AI Field Plan & Route
    'hcp-opportunity',     // 3. Select Dr. Mehta Opportunity
    'hcp-intelligence',    // 4. HCP Engagement Intelligence
    'prepare-call',        // 5. 5-Min Personalised Prep
    'hcp-simulator',       // 6. Persona-Aware Simulation
    'ai-coach',            // 7. AI Coaching Assessment
    'call-outcome',        // 8. Field Execution Learning Loop
    'next-best-action',    // 9. NBA Commercial Synthesis
    'my-performance',      // 10. Rep Performance Profile
    'manager',             // 11. Manager Field Force Readiness
    'capacity-simulator',  // 12. What-If Field Capacity Simulator
    'commercial-insights', // 13. Commercial Impact & Value Chain
    'ai-learning-loop'     // 14. AI Architecture & Continuous Loop
  ];

  const goToNextInJudgeTour = () => {
    const currentIndex = judgeSequence.indexOf(activeScreen);
    if (currentIndex >= 0 && currentIndex < judgeSequence.length - 1) {
      setActiveScreen(judgeSequence[currentIndex + 1]);
    } else {
      setActiveScreen('dashboard');
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeScreen,
        setActiveScreen,
        selectedHcp,
        setSelectedHcp,
        simulationResult,
        setSimulationResult,
        callOutcomeState,
        setCallOutcomeState,
        repProfile,
        setRepProfile,
        demoMode,
        setDemoMode,
        isPlanOptimized,
        setIsPlanOptimized,
        goToNextInJudgeTour
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
