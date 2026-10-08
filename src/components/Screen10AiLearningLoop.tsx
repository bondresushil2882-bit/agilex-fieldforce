import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Database,
  Cpu,
  Target,
  UserCheck,
  MessageSquare,
  BarChart,
  BrainCircuit,
  ArrowRight,
  Sparkles,
  Repeat,
  CheckCircle2,
  ChevronRight,
  Layers,
  ArrowDown
} from 'lucide-react';

export const Screen10AiLearningLoop: React.FC = () => {
  const { setActiveScreen } = useApp();

  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
      {/* Banner in Clean Light Enterprise Style */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-2">
            <Repeat className="w-3.5 h-3.5" />
            PART 9 • AGILEX AI ENGINE ARCHITECTURE
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Connected AI Intelligence &amp; Continuous Learning
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-2xl leading-relaxed">
            AgileX is not a static CRM dashboard. It is an interconnected, self-learning commercial decision engine that continuously calibrates field decisions based on real-world interactions.
          </p>
        </div>

        <button
          onClick={() => setActiveScreen('dashboard')}
          className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
        >
          <span>Return to Command Center</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* PART 9: THE 6-TIER CONNECTED SYSTEM ARCHITECTURE */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-600" />
            <span>AGILEX AI PRODUCT ARCHITECTURE</span>
          </h2>
          <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            5 Interconnected Sub-Engines
          </span>
        </div>

        {/* Vertical Pipeline Cards with connecting arrows */}
        <div className="space-y-4">
          {/* TIER 1: DATA */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-purple-700 flex items-center gap-2">
                <Database className="w-4 h-4 text-purple-600" />
                1. MULTIVARIATE DATA INGESTION
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Input Layer</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs pt-1">
              <span className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 font-medium text-center">HCP Engagement History</span>
              <span className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 font-medium text-center">Rep Skills &amp; Gaps</span>
              <span className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 font-medium text-center">Territory Routing &amp; Geography</span>
              <span className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 font-medium text-center">Field Capacity &amp; Hours</span>
              <span className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 font-medium text-center">Previous Call Outcomes</span>
            </div>
          </div>

          <div className="flex justify-center text-purple-600">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* TIER 2: AI INTELLIGENCE */}
          <div className="p-5 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-purple-900 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-700" />
                2. AGILEX INTELLIGENCE ENGINES
              </span>
              <span className="text-[10px] text-purple-700 font-bold">Algorithmic Core</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs pt-1">
              <div className="p-2.5 bg-white rounded-lg border border-purple-200 text-center shadow-2xs">
                <strong className="text-purple-900 block text-[11px]">HCP Opportunity</strong>
                <span className="text-[10px] text-slate-500">Dynamic score index</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-purple-200 text-center shadow-2xs">
                <strong className="text-purple-900 block text-[11px]">Engagement Persona</strong>
                <span className="text-[10px] text-slate-500">Style &amp; objection DNA</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-purple-200 text-center shadow-2xs">
                <strong className="text-purple-900 block text-[11px]">Field Optimiser</strong>
                <span className="text-[10px] text-slate-500">Capacity &amp; travel sequence</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-purple-200 text-center shadow-2xs">
                <strong className="text-purple-900 block text-[11px]">Rep Coaching Engine</strong>
                <span className="text-[10px] text-slate-500">Adaptive roleplay simulator</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-purple-200 text-center shadow-2xs">
                <strong className="text-purple-900 block text-[11px]">Next Best Action</strong>
                <span className="text-[10px] text-slate-500">Prescriptive follow-up</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-purple-600">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* TIER 3: DECISIONS */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-600" />
                3. PRESCRIPTIVE FIELD DECISIONS
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Output Actions</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs pt-1 text-center font-bold">
              <span className="p-2 bg-white rounded-lg border border-slate-200 text-purple-900">WHO: Target HCP</span>
              <span className="p-2 bg-white rounded-lg border border-slate-200 text-purple-900">WHEN: Timing Window</span>
              <span className="p-2 bg-white rounded-lg border border-slate-200 text-purple-900">WHERE: Optimal Channel</span>
              <span className="p-2 bg-white rounded-lg border border-slate-200 text-purple-900">HOW: Consultative Strategy</span>
              <span className="p-2 bg-white rounded-lg border border-slate-200 text-purple-900">PRACTICE: Pre-Call Roleplay</span>
            </div>
          </div>

          <div className="flex justify-center text-purple-600">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* TIER 4: FIELD EXECUTION & OUTCOME & LEARNING LOOP */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">4. FIELD EXECUTION</span>
              <strong className="text-xs text-slate-900 block">Representative in Clinic</strong>
              <p className="text-[10px] text-slate-500">Rehearsed clinical dialogue addressing safety objections</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">5. MEASURED OUTCOME</span>
              <strong className="text-xs text-emerald-800 block">Candidate Initiation Review</strong>
              <p className="text-[10px] text-slate-500">Physician agreement, sample acceptance, formulary progression</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-xs space-y-1 text-center">
              <span className="text-[10px] font-bold text-purple-200 uppercase block">6. LEARNING LOOP</span>
              <strong className="text-xs text-white block">Continuous Model Retraining</strong>
              <p className="text-[10px] text-purple-100">Updates propensity weights &amp; refines subsequent NBA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Takeaway for Judges */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50/30 border border-purple-200 rounded-2xl p-6 md:p-8 space-y-4 shadow-xs">
        <h3 className="text-sm font-bold uppercase tracking-wider text-purple-800 flex items-center gap-2">
          <BrainCircuit className="w-4 h-4 text-purple-600" />
          <span>EXECUTIVE TAKEAWAY FOR PHARMACEUTICAL LEADERS</span>
        </h3>
        <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
          Traditional commercial models treat field force sizing, territory alignment, and training as disconnected annual projects. AgileX unifies them into a single dynamic system: <strong>the AI that targets the HCP is the same intelligence that coaches the representative for that exact conversation and measures the commercial outcome.</strong>
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-purple-100">
          <span className="text-xs text-slate-500 font-medium">Ready to return to the executive dashboard?</span>
          <button
            onClick={() => setActiveScreen('dashboard')}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
          >
            Return to Command Center
          </button>
        </div>
      </div>
    </div>
  );
};
