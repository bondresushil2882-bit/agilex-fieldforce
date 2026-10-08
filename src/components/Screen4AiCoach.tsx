import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  RotateCcw,
  ArrowRight,
  Sparkles,
  Bot,
  ThumbsUp,
  Lightbulb,
  ShieldCheck,
  ChevronRight,
  Repeat
} from 'lucide-react';

export const Screen4AiCoach: React.FC = () => {
  const { setActiveScreen, simulationResult, selectedHcp } = useApp();

  const scores = simulationResult || {
    score: 86,
    scientificAccuracy: 91,
    hcpUnderstanding: 88,
    objectionHandling: 82,
    communicationClarity: 85,
    engagement: 87
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Simulation Complete Banner in Light Enterprise Styling */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            ROLEPLAY SIMULATION COMPLETE
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            AI Field Coaching Assessment
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-xl">
            Real-time evaluation based on consultative dialogue structure, clinical accuracy, and objection resolution with {selectedHcp.name}.
          </p>
        </div>

        {/* Big Overall Score Card */}
        <div className="bg-purple-50 rounded-2xl p-5 text-center min-w-[170px] border border-purple-200 shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-purple-700 tracking-wider">Overall Score</span>
          <div className="text-4xl font-black text-purple-900 my-1">
            {scores.score} <span className="text-sm font-semibold text-slate-400">/ 100</span>
          </div>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
            Field Certified
          </span>
        </div>
      </div>

      {/* 5 Metric Breakdown Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
          <span className="text-[11px] text-slate-500 font-medium">Scientific Accuracy</span>
          <div className="text-xl font-black text-slate-900 mt-1">{scores.scientificAccuracy}%</div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${scores.scientificAccuracy}%` }}></div>
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
          <span className="text-[11px] text-slate-500 font-medium">HCP Understanding</span>
          <div className="text-xl font-black text-slate-900 mt-1">{scores.hcpUnderstanding}%</div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${scores.hcpUnderstanding}%` }}></div>
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
          <span className="text-[11px] text-slate-500 font-medium">Objection Handling</span>
          <div className="text-xl font-black text-slate-900 mt-1">{scores.objectionHandling}%</div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: `${scores.objectionHandling}%` }}></div>
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
          <span className="text-[11px] text-slate-500 font-medium">Communication Clarity</span>
          <div className="text-xl font-black text-slate-900 mt-1">{scores.communicationClarity}%</div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-purple-600 rounded-full" style={{ width: `${scores.communicationClarity}%` }}></div>
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs col-span-2 md:col-span-1">
          <span className="text-[11px] text-slate-500 font-medium">Engagement</span>
          <div className="text-xl font-black text-slate-900 mt-1">{scores.engagement}%</div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-pink-500 rounded-full" style={{ width: `${scores.engagement}%` }}></div>
          </div>
        </div>
      </div>

      {/* AI Coach Feedback & Debrief */}
      <div className="bg-white border border-purple-200/90 rounded-2xl p-6 shadow-xs space-y-4 bg-gradient-to-br from-purple-50/30 via-white to-pink-50/20">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-purple-600" />
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">AI COACH DEBRIEF</h2>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-950 leading-relaxed font-semibold">
            &ldquo;Strong response. You acknowledged the HCP&apos;s safety concern before presenting evidence.&rdquo;
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
            &ldquo;Opportunity to improve: connect the evidence more directly to the HCP&apos;s elderly patient population.&rdquo;
          </div>
        </div>
      </div>

      {/* Strengths vs Improvement Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-emerald-700">
            <ThumbsUp className="w-4 h-4 text-emerald-600" />
            <h3 className="text-xs font-bold uppercase tracking-wider">STRENGTHS</h3>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-700">
            <li className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Clear structure — validated physician inquiry before presenting clinical data</span>
            </li>
            <li className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Good listening — reflected back the patient comorbidity focus</span>
            </li>
            <li className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Relevant evidence — cited pivotal Phase III elderly subgroup dataset accurately</span>
            </li>
          </ul>
        </div>

        {/* Improvement Areas */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-amber-700">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <h3 className="text-xs font-bold uppercase tracking-wider">IMPROVEMENT AREAS</h3>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-700">
            <li className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>Stronger objection handling — pre-empt drug-drug interaction questions</span>
            </li>
            <li className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>More patient-contextual language — ground statistics in local clinic outpatient flow</span>
            </li>
            <li className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>Stronger closing — secure explicit date for initial candidate patient follow-up</span>
            </li>
          </ul>
        </div>
      </div>

      {/* AI Next Recommendation & Navigation CTAs */}
      <div className="bg-white border border-purple-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-purple-700">
            AI RECOMMENDATION
          </div>
          <p className="text-xs md:text-sm text-slate-900 font-semibold">
            &ldquo;Practice one additional safety-objection scenario before the next field interaction.&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={() => setActiveScreen('hcp-simulator')}
            className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>

          <button
            onClick={() => setActiveScreen('call-outcome')}
            className="flex-1 md:flex-initial px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Log Call Outcome &amp; Learn</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
