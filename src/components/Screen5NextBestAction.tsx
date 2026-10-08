import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Compass,
  Calendar,
  Clock,
  Send,
  Target,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export const Screen5NextBestAction: React.FC = () => {
  const { selectedHcp, setActiveScreen } = useApp();

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Banner in Clean Light Enterprise Style */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            COMMERCIAL FIELD FORCE EFFECTIVENESS
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            AI Next Best Action (NBA)
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
            Synthesising rehearsal performance with {selectedHcp.name}&apos;s real-time commercial profile to prescribe the highest-ROI follow-up field activity.
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200 text-center min-w-[150px] shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-purple-700 tracking-wider">AI Confidence</span>
          <div className="text-3xl font-black text-purple-900 mt-0.5">87%</div>
          <span className="text-[10px] text-emerald-700 font-bold">Validated NBA</span>
        </div>
      </div>

      {/* Synthesis Input Parameters Bar */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs space-y-3">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          MULTIVARIATE AI SYNTHESIS INPUTS
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2.5 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] text-slate-400 block font-medium">HCP Profile</span>
            <span className="text-slate-900 font-bold">{selectedHcp.specialty.split(' ')[0]}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] text-slate-400 block font-medium">Interaction Window</span>
            <span className="text-amber-700 font-bold">Lapsed 18d</span>
          </div>
          <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
            <span className="text-[10px] text-purple-700 block font-medium">Simulation Score</span>
            <span className="text-purple-900 font-black">86/100 (Pass)</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] text-slate-400 block font-medium">Responsiveness</span>
            <span className="text-emerald-700 font-bold">{selectedHcp.responsiveness}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] text-slate-400 block font-medium">Engagement Pattern</span>
            <span className="text-slate-900 font-bold">Evidence-Led</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] text-slate-400 block font-medium">Opportunity Score</span>
            <span className="text-purple-700 font-black">{selectedHcp.opportunityScore} / 100</span>
          </div>
        </div>
      </div>

      {/* Main Recommendation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recommendation Details (2 cols) */}
        <div className="md:col-span-2 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-purple-600" />
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">PRESCRIBED FIELD ACTION</h2>
            </div>
            <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
              Confidence: 87%
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-[11px] font-semibold text-slate-500">Recommended Timing</span>
              <div className="text-base font-black text-slate-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <span>Follow-up in 7 days</span>
              </div>
              <span className="text-[10px] text-slate-400">Aligns with scheduled patient review window</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-[11px] font-semibold text-slate-500">Interaction Channel</span>
              <div className="text-base font-black text-slate-900 flex items-center gap-2">
                <Send className="w-4 h-4 text-indigo-600" />
                <span>Face-to-face Clinic Visit</span>
              </div>
              <span className="text-[10px] text-slate-400">In-person oncology consult room consultation</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-[11px] font-semibold text-slate-500">Primary Objective</span>
              <div className="text-base font-black text-slate-900 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-600" />
                <span>Treatment Discussion &amp; Initiation</span>
              </div>
              <span className="text-[10px] text-slate-400">Evaluate initial 2 candidate patients</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-[11px] font-semibold text-slate-500">Collateral / Recommended Content</span>
              <div className="text-base font-black text-purple-900 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-purple-600" />
                <span>Safety + Elderly Patient Monograph</span>
              </div>
              <span className="text-[10px] text-slate-400">Leave-behind printed clinical dossier</span>
            </div>
          </div>
        </div>

        {/* Expected Impact Card */}
        <div className="bg-white border border-purple-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-5 bg-gradient-to-b from-purple-50/30 to-white">
          <div>
            <div className="flex items-center gap-2 mb-2 text-purple-700">
              <TrendingUp className="w-4 h-4" />
              <h2 className="text-xs font-bold uppercase tracking-wider">EXPECTED IMPACT</h2>
            </div>
            <p className="text-xs text-slate-500">HCP Engagement Probability Shift</p>

            {/* Impact Metric Visual */}
            <div className="mt-4 space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Before AI Preparation</span>
                  <span className="text-slate-700 font-bold">61%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-400 rounded-full" style={{ width: '61%' }}></div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-purple-800 font-bold">After AI-guided Preparation</span>
                  <span className="text-emerald-700 font-black text-sm">78%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-600 to-emerald-500 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <div className="text-[10px] text-emerald-700 font-bold pt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>+17% incremental engagement probability</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-500 italic">
            *Illustrative demo prediction for business strategy case study — not a clinical or guaranteed commercial outcome.
          </div>
        </div>
      </div>

      {/* Navigation CTA */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={() => setActiveScreen('my-performance')}
          className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>View My Updated Performance Profile</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
