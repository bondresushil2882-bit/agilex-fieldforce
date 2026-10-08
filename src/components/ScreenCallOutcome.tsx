import React from 'react';
import { useApp } from '../context/AppContext';
import {
  CheckCircle2,
  Sparkles,
  Repeat,
  ArrowRight,
  TrendingUp,
  Brain,
  Compass,
  Calendar,
  Send,
  FileCheck,
  ChevronRight
} from 'lucide-react';

export const ScreenCallOutcome: React.FC = () => {
  const { selectedHcp, callOutcomeState, setActiveScreen } = useApp();

  const outcome = callOutcomeState || {
    hcpId: selectedHcp.id,
    hcpName: selectedHcp.name,
    actualOutcome: 'HCP requested additional evidence on elderly sub-analyses and agreed to candidate review.',
    repScore: 86,
    aiLearnsQuote: 'Evidence-led discussions generated stronger engagement for this HCP.',
    nextFollowupDays: 7,
    nextChannel: 'Face-to-face',
    nextContent: 'Relevant safety / real-world evidence monograph',
    personaUpdates: {
      evidenceDelta: 'Evidence Engagement: ↑ High (+8 pts)',
      safetyDelta: 'Safety Concern: Addressed & Validated',
      followupPropensity: 'Follow-up Propensity: High (89%)'
    }
  };

  return (
    <div className="space-y-7 animate-fade-in max-w-4xl mx-auto">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            CALL COMPLETED • FIELD INTERACTION LOGGED
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Call Outcome &amp; Continuous Learning
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Real-time synthesis of observed doctor response with AgileX autonomous learning engine.
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200 text-center min-w-[140px] shadow-2xs">
          <span className="text-[10px] text-purple-700 font-bold uppercase tracking-wider block">Rep Performance</span>
          <div className="text-3xl font-black text-purple-900 mt-0.5">{outcome.repScore}<span className="text-sm font-semibold text-slate-400">/100</span></div>
          <span className="text-[10px] text-emerald-700 font-bold">Field Certified</span>
        </div>
      </div>

      {/* Actual Outcome vs Rep Score Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-xl">
              {selectedHcp.avatar}
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900">{selectedHcp.name}</h3>
              <span className="text-[11px] text-slate-500">{selectedHcp.hospital} • {selectedHcp.specialty}</span>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Interaction Verified
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">ACTUAL OBSERVED CALL OUTCOME</span>
          <p className="text-sm font-bold text-slate-900 leading-relaxed">
            &ldquo;{outcome.actualOutcome}&rdquo;
          </p>
        </div>
      </div>

      {/* AI LEARNS Banner */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 rounded-2xl p-6 text-white shadow-md space-y-2">
        <div className="flex items-center gap-2 text-purple-200 text-xs font-bold uppercase tracking-wider">
          <Brain className="w-4 h-4 text-purple-200" />
          <span>AI LEARNS (CONTINUOUS HEURISTICS UPDATE)</span>
        </div>
        <p className="text-base font-extrabold leading-relaxed text-white">
          &ldquo;{outcome.aiLearnsQuote}&rdquo;
        </p>
        <p className="text-xs text-purple-100 pt-1">
          The model adjusts Dr. Mehta&apos;s engagement propensity weights to favor peer-reviewed clinical reprints and safety dossiers for all future territorial visits.
        </p>
      </div>

      {/* Updated HCP Engagement Persona + Prescribed Follow-Up Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Updated Persona Signals */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span>UPDATED HCP ENGAGEMENT PERSONA</span>
            </h3>
            <span className="text-[10px] text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded">
              Real-time Calibration
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-200 flex items-center justify-between">
              <span className="text-xs font-bold text-purple-900">Evidence Engagement</span>
              <span className="text-xs font-extrabold text-purple-700 flex items-center gap-1">
                <span className="text-emerald-600">↑</span>
                <span>High (+8 pts)</span>
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Safety Objection Pattern</span>
              <span className="text-xs font-bold text-slate-600">Addressed &amp; Validated</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-900">Follow-up Propensity</span>
              <span className="text-xs font-extrabold text-emerald-700">High (89%)</span>
            </div>
          </div>
        </div>

        {/* Prescribed Next Best Action */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Compass className="w-4 h-4 text-purple-600" />
              <span>PRESCRIBED NEXT BEST ACTION</span>
            </h3>
            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
              Automated Pipeline
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Calendar className="w-4 h-4 text-purple-600" />
              <span>Follow-up Window: <strong className="text-slate-900">{outcome.nextFollowupDays} days</strong></span>
            </div>

            <div className="flex items-center gap-2 text-slate-700">
              <Send className="w-4 h-4 text-purple-600" />
              <span>Channel: <strong className="text-slate-900">{outcome.nextChannel}</strong></span>
            </div>

            <div className="flex items-center gap-2 text-slate-700">
              <FileCheck className="w-4 h-4 text-purple-600" />
              <span>Content: <strong className="text-purple-900">{outcome.nextContent}</strong></span>
            </div>
          </div>

          <button
            onClick={() => setActiveScreen('next-best-action')}
            className="w-full mt-2 py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-purple-200 transition-all cursor-pointer"
          >
            <span>View Full Next Best Action Analysis</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <span className="text-xs text-slate-400 italic">
          *Illustrative simulated learning feedback loop for competition demonstration.
        </span>
        <button
          onClick={() => setActiveScreen('next-best-action')}
          className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Continue to Next Best Action</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
