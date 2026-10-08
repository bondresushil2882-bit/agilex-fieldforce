import React from 'react';
import { useApp } from '../context/AppContext';
import { Bell, Sparkles, User, Play, ChevronRight, Activity, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const { repProfile, goToNextInJudgeTour, activeScreen } = useApp();

  const screenDisplayNames: Record<string, string> = {
    'dashboard': 'Command Center',
    'field-planner': 'AI Field Planner',
    'hcp-opportunity': 'HCP Opportunity Dossier',
    'hcp-intelligence': 'HCP Engagement Intelligence',
    'prepare-call': 'Personalised Call Preparation',
    'hcp-simulator': 'AI HCP Simulator',
    'ai-coach': 'AI Field Coach Assessment',
    'call-outcome': 'Field Execution Learning Loop',
    'next-best-action': 'Next Best Action (NBA)',
    'my-performance': 'Rep Performance Profile',
    'academy': 'AI Academy Learning Hub',
    'manager': 'Team Readiness Dashboard',
    'capacity-simulator': 'Field Capacity Simulator',
    'commercial-insights': 'Commercial Impact Model',
    'ai-learning-loop': 'AI Continuous Decision Architecture'
  };

  return (
    <header className="h-16 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-6 flex items-center justify-between z-10 sticky top-0 shadow-xs">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/80 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></span>
            Dynamic Field Force Optimisation
          </span>
          <span className="text-xs text-slate-300 hidden md:inline">|</span>
          <span className="text-xs font-semibold text-slate-600 hidden md:inline">
            Active: <strong className="text-slate-900 font-bold">{screenDisplayNames[activeScreen] || activeScreen}</strong>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Judge Tour Button */}
        <button
          onClick={goToNextInJudgeTour}
          className="flex items-center gap-2 text-xs font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-xl shadow-sm shadow-purple-600/20 transition-all cursor-pointer border border-purple-500/20 active:scale-95"
          title="Click to step through the 14-step judge story"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Next Judge Step</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {/* Notifications & System state */}
        <div className="relative">
          <button className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-purple-600 ring-2 ring-white"></span>
        </div>

        {/* User profile */}
        <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
          <div className="text-right">
            <div className="text-xs font-bold text-slate-900">{repProfile.name}</div>
            <div className="text-[10px] text-purple-700 font-semibold">{repProfile.territory}</div>
          </div>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 border border-purple-400/40 flex items-center justify-center text-white font-bold text-xs shadow-sm">
            PS
          </div>
        </div>
      </div>
    </header>
  );
};
