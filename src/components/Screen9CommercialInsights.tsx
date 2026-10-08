import React from 'react';
import { useApp } from '../context/AppContext';
import {
  TrendingUp,
  BarChart3,
  Clock,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PieChart,
  Repeat,
  Zap,
  ChevronRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

export const Screen9CommercialInsights: React.FC = () => {
  const { setActiveScreen } = useApp();

  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
      {/* Banner connecting to the Case Question */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            EXECUTIVE COMMERCIAL STRATEGY CASE
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            From Rep Activity to Commercial Impact
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-3xl leading-relaxed">
            &ldquo;If a pharmaceutical company could make only one major AI investment across its commercial organisation today, why should it place its bet on dynamic field force optimisation?&rdquo;
          </p>
        </div>

        <button
          onClick={() => setActiveScreen('ai-learning-loop')}
          className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
        >
          <span>View Decision Architecture</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* CORE STRATEGIC MOTTO CARD (PART 7) */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 rounded-2xl p-7 md:p-8 text-white shadow-md text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-200 block">
          THE STRATEGIC AGILEX IMPERATIVE
        </span>
        <blockquote className="text-xl md:text-2xl font-black tracking-tight max-w-3xl mx-auto leading-snug">
          &ldquo;AgileX does not make the sales force work harder. It makes every field hour more valuable.&rdquo;
        </blockquote>
        <p className="text-xs text-purple-100 max-w-2xl mx-auto pt-1 leading-relaxed">
          Pharmaceutical sales forces face hard capacity ceilings. Success is not driving more calls per day; it is ensuring that every call reaches a high-propensity HCP with rehearsed clinical precision.
        </p>
      </div>

      {/* 6 Key Enterprise Field Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
          <span className="text-[10px] text-slate-400 font-bold uppercase block">Total Fleet Hours</span>
          <div className="text-2xl font-black text-slate-900 mt-1">1,120</div>
          <span className="text-[10px] text-slate-500">Monthly fleet capacity</span>
        </div>

        <div className="bg-white border border-purple-200 rounded-xl p-4 shadow-2xs bg-purple-50/50">
          <span className="text-[10px] text-purple-700 font-bold uppercase block">Productive Field Hours</span>
          <div className="text-2xl font-black text-purple-900 mt-1">928</div>
          <span className="text-[10px] text-emerald-700 font-bold">82.8% active in-clinic</span>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
          <span className="text-[10px] text-slate-400 font-bold uppercase block">HCP Coverage</span>
          <div className="text-2xl font-black text-slate-900 mt-1">88%</div>
          <span className="text-[10px] text-slate-500">Of target universe</span>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
          <span className="text-[10px] text-slate-400 font-bold uppercase block">High-Value Coverage</span>
          <div className="text-2xl font-black text-purple-900 mt-1">94%</div>
          <span className="text-[10px] text-purple-700 font-semibold">Tier-1 oncologists</span>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
          <span className="text-[10px] text-slate-400 font-bold uppercase block">AI-Recommended Calls</span>
          <div className="text-2xl font-black text-slate-900 mt-1">480</div>
          <span className="text-[10px] text-purple-700">Dynamic route batches</span>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
          <span className="text-[10px] text-slate-400 font-bold uppercase block">Priority Actions</span>
          <div className="text-2xl font-black text-emerald-700 mt-1">342</div>
          <span className="text-[10px] text-emerald-700 font-bold">Completed with NBA</span>
        </div>
      </div>

      {/* Illustrative Impact Model: Current State vs AI-Enabled */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-purple-600" />
              <span>MACRO COMMERCIAL PRODUCTIVITY SHIFT</span>
            </h2>
            <p className="text-xs text-slate-500">Illustrative simulation model demonstrating incremental commercial lift</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Net Productivity Gain: +8% Index
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current State Box */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">CURRENT BASELINE STATE</span>
              <span className="text-xs font-semibold text-slate-600 px-2.5 py-0.5 rounded bg-white border border-slate-200">
                Standard CRM Call Planning
              </span>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-slate-800">100 <span className="text-sm text-slate-500 font-normal">index</span></div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Static call cycles based on legacy quarterly lists. Reps spend excessive time on low-responsiveness contacts or get caught off-guard by emergent clinical objections.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
              <div>• Unplanned travel downtime: <strong>26%</strong></div>
              <div>• Unrehearsed objection stumbling rate: <strong>34%</strong></div>
              <div>• Lapsed contact on high-value prescriber: <strong>28 days avg</strong></div>
            </div>
          </div>

          {/* AI-Enabled Scenario Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-pink-50/30 border border-purple-200 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700">AI-ENABLED DYNAMIC SCENARIO</span>
              <span className="text-xs font-bold text-emerald-700 px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                +8% Improvement
              </span>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-purple-900">108 <span className="text-sm text-purple-700 font-semibold">index</span></div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Dynamic prioritisation directs reps to high-opportunity windows, supported by pre-call AI rehearsal simulations to ensure every doctor interaction has maximal impact.
              </p>
            </div>
            <div className="pt-2 border-t border-purple-200 space-y-1.5 text-xs text-purple-950 font-medium">
              <div>• Prioritised high-propensity HCP focus: <strong>+38%</strong></div>
              <div>• Objection readiness certification before call: <strong>92%</strong></div>
              <div>• Opportunity-to-initiation conversion velocity: <strong>+22%</strong></div>
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 italic text-center">
          &ldquo;Illustrative scenario for competition case — not actual company data.&rdquo;
        </div>
      </div>

      {/* PART 7: 8-STAGE STRATEGIC VALUE CHAIN VISUAL */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xs space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-2">
            <Zap className="w-4 h-4 text-purple-600" />
            <span>THE 8-STAGE VALUE CREATION CHAIN</span>
          </h2>
          <span className="text-xs text-slate-500 font-medium">End-to-End Field Force Transformation</span>
        </div>

        {/* 8 Step Process Flow Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 pt-2">
          {[
            { step: '01', title: 'LIMITED CAPACITY', desc: 'Finite rep hours & territory limits' },
            { step: '02', title: 'AI PRIORITISATION', desc: 'Multi-factor dynamic opportunity scoring' },
            { step: '03', title: 'TERRITORY ROUTING', desc: 'Optimal transit sequence & clustering' },
            { step: '04', title: 'PERSONA STRATEGY', desc: 'Evidence-led playbooks per doctor' },
            { step: '05', title: 'TARGETED TRAINING', desc: 'Persona-aware roleplay simulation' },
            { step: '06', title: 'BETTER INTERACTIONS', desc: 'Rehearsed objection resolution' },
            { step: '07', title: 'HIGHER COVERAGE', desc: '91% Tier-1 prescriber protection' },
            { step: '08', title: 'COMMERCIAL VALUE', desc: '+8% net productivity index gain' },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center relative group hover:border-purple-300 hover:bg-purple-50/40 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black text-purple-700 block mb-1">{item.step}</span>
                <div className="text-[11px] font-bold text-slate-900 mb-1 leading-tight">{item.title}</div>
                <p className="text-[10px] text-slate-500 leading-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-end pt-4 border-t border-slate-200">
        <button
          onClick={() => setActiveScreen('ai-learning-loop')}
          className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Explore AI Continuous Decision Loop</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
