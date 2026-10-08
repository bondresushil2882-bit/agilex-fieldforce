'use client';

import React from 'react';
import { AppProvider, useApp } from '@/context/AppContext';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Screen1Dashboard } from '@/components/Screen1Dashboard';
import { ScreenFieldPlanner } from '@/components/ScreenFieldPlanner';
import { Screen2HcpOpportunity } from '@/components/Screen2HcpOpportunity';
import { ScreenHcpIntelligence } from '@/components/ScreenHcpIntelligence';
import { ScreenPrepareCall } from '@/components/ScreenPrepareCall';
import { Screen3HcpSimulator } from '@/components/Screen3HcpSimulator';
import { Screen4AiCoach } from '@/components/Screen4AiCoach';
import { ScreenCallOutcome } from '@/components/ScreenCallOutcome';
import { Screen5NextBestAction } from '@/components/Screen5NextBestAction';
import { Screen6MyPerformance } from '@/components/Screen6MyPerformance';
import { Screen7Academy } from '@/components/Screen7Academy';
import { Screen8Manager } from '@/components/Screen8Manager';
import { ScreenCapacitySimulator } from '@/components/ScreenCapacitySimulator';
import { Screen9CommercialInsights } from '@/components/Screen9CommercialInsights';
import { Screen10AiLearningLoop } from '@/components/Screen10AiLearningLoop';

function MainContent() {
  const { activeScreen } = useApp();

  return (
    <main className="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
      {activeScreen === 'dashboard' && <Screen1Dashboard />}
      {activeScreen === 'field-planner' && <ScreenFieldPlanner />}
      {activeScreen === 'hcp-opportunity' && <Screen2HcpOpportunity />}
      {activeScreen === 'hcp-intelligence' && <ScreenHcpIntelligence />}
      {activeScreen === 'prepare-call' && <ScreenPrepareCall />}
      {activeScreen === 'hcp-simulator' && <Screen3HcpSimulator />}
      {activeScreen === 'ai-coach' && <Screen4AiCoach />}
      {activeScreen === 'call-outcome' && <ScreenCallOutcome />}
      {activeScreen === 'next-best-action' && <Screen5NextBestAction />}
      {activeScreen === 'my-performance' && <Screen6MyPerformance />}
      {activeScreen === 'academy' && <Screen7Academy />}
      {activeScreen === 'manager' && <Screen8Manager />}
      {activeScreen === 'capacity-simulator' && <ScreenCapacitySimulator />}
      {activeScreen === 'commercial-insights' && <Screen9CommercialInsights />}
      {activeScreen === 'ai-learning-loop' && <Screen10AiLearningLoop />}
    </main>
  );
}

export default function Home() {
  return (
    <AppProvider>
      <div className="flex min-h-screen bg-[#fcfbfe] text-slate-900 antialiased selection:bg-purple-600 selection:text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0 bg-[#fcfbfe]">
          <Header />
          <MainContent />
        </div>
      </div>
    </AppProvider>
  );
}
