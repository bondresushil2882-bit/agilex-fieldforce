import React from 'react';
import { useApp } from '../context/AppContext';
import {
  FileText,
  Target,
  Bot,
  AlertCircle,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Brain,
  Zap,
  ArrowLeft,
  Play
} from 'lucide-react';

export const ScreenPrepareCall: React.FC = () => {
  const { selectedHcp, setActiveScreen } = useApp();

  const prep = selectedHcp.prepPlan;

  const handleLaunchSimulator = () => {
    setActiveScreen('hcp-simulator');
  };

  return (
    <div className="space-y-7 animate-fade-in max-w-4xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => setActiveScreen('hcp-intelligence')}
        className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to HCP Engagement Intelligence</span>
      </button>

      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            AI-POWERED PRE-CALL READINESS
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Prepare for {selectedHcp.name}
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            {prep.subtitle} • Calibrated dynamically to {selectedHcp.name}&apos;s engagement persona
          </p>
        </div>

        <button
          onClick={handleLaunchSimulator}
          className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
        >
          <Bot className="w-4 h-4" />
          <span>Practice With {selectedHcp.name.split(' ')[1] || selectedHcp.name}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* HCP Snapshot Card */}
      <div className="bg-white rounded-2xl p-5 border border-purple-200/90 shadow-xs flex items-center justify-between gap-4 bg-gradient-to-r from-purple-50/50 to-white">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-2xl flex-shrink-0">
            {selectedHcp.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-black text-slate-900">{selectedHcp.name}</h3>
              <span className="text-[11px] px-2 py-0.2 rounded bg-white text-purple-800 border border-purple-200 font-bold">
                {selectedHcp.specialty}
              </span>
            </div>
            <div className="text-xs text-slate-500">
              {selectedHcp.location} • {selectedHcp.hospital} • Recommended Channel: <strong className="text-slate-800">{selectedHcp.recommendedChannel}</strong>
            </div>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Priority</span>
          <div className="text-xl font-black text-purple-700 flex items-center gap-1 justify-end">
            <Zap className="w-4 h-4 text-purple-600 fill-purple-600" />
            <span>{selectedHcp.opportunityScore}</span>
          </div>
        </div>
      </div>

      {/* Core Preparation Quadrants */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* OBJECTIVE */}
        <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <Target className="w-4 h-4 text-purple-600" />
            PRIMARY CALL OBJECTIVE
          </div>
          <div className="text-base font-extrabold text-slate-900">
            {prep.objective}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Transition from general Phase III trial discussion into active consideration for second-line patient initiation.
          </p>
        </div>

        {/* EXPECTED HCP BEHAVIOUR */}
        <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Brain className="w-4 h-4 text-indigo-600" />
            EXPECTED HCP BEHAVIOUR
          </div>
          <div className="text-base font-extrabold text-slate-900">
            {prep.expectedHcpBehaviour}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Will scrutinize safety endpoints and question adverse-event management in vulnerable patient subsets.
          </p>
        </div>

        {/* EXPECTED OBJECTION */}
        <div className="bg-white rounded-xl p-5 border border-amber-200 shadow-xs space-y-2 bg-amber-50/20">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            PREDICTED OBJECTION
          </div>
          <div className="text-base font-extrabold text-slate-900">
            &ldquo;{prep.expectedObjection}&rdquo;
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            History indicates hesitation around renal clearance and multiple concomitant medications.
          </p>
        </div>

        {/* YOUR DEVELOPMENT PRIORITY */}
        <div className="bg-white rounded-xl p-5 border border-purple-200 shadow-xs space-y-2 bg-purple-50/20">
          <div className="flex items-center gap-2 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            YOUR DEVELOPMENT PRIORITY
          </div>
          <div className="text-base font-extrabold text-purple-900">
            {prep.developmentPriority}
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {prep.aiRecommendation}
          </p>
        </div>
      </div>

      {/* 3 THINGS TO REMEMBER */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
        <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>3 THINGS TO REMEMBER FOR THIS CALL</span>
        </h2>

        <div className="space-y-3">
          {prep.threeThingsToRemember.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs font-bold text-slate-800 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Big Action CTA */}
      <div className="p-6 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 rounded-2xl text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-extrabold">Ready to Rehearse with AI?</h3>
          <p className="text-xs text-purple-100 mt-0.5">
            Launch the Persona-Aware Simulator with {selectedHcp.name}&apos;s behavioural profile.
          </p>
        </div>
        <button
          onClick={handleLaunchSimulator}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-purple-900 hover:bg-purple-50 font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 fill-current text-purple-700" />
          <span>Practice With {selectedHcp.name.split(' ')[1] || selectedHcp.name}</span>
        </button>
      </div>
    </div>
  );
};
