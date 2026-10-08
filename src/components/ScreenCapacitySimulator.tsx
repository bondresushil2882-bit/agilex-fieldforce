import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sliders,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Clock,
  Users,
  Target,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export const ScreenCapacitySimulator: React.FC = () => {
  const { setActiveScreen } = useApp();

  const [reps, setReps] = useState<number>(100);
  const [fieldHours, setFieldHours] = useState<number>(650);
  const [targetHcps, setTargetHcps] = useState<number>(500);

  // Dynamic calculations based on sliders
  const hourRatio = fieldHours / 800; // baseline 800
  const repRatio = reps / 100;

  // Without AgileX (legacy static scheduling drops rapidly as hours drop)
  const withoutCoverage = Math.min(95, Math.max(45, Math.round(72 * (hourRatio * 0.7 + repRatio * 0.3))));
  
  // With AgileX (dynamic reallocation protects Tier-1 HCPs)
  const withCoverage = Math.min(98, Math.max(68, Math.round(88 * (Math.pow(hourRatio, 0.4) * 0.8 + repRatio * 0.2))));
  
  const coverageLift = withCoverage - withoutCoverage;
  const hoursRecovered = Math.round(fieldHours * 0.08 + (100 - repRatio * 100) * 0.3);
  const protectedPercent = Math.max(8, Math.round(coverageLift * 1.1));

  return (
    <div className="space-y-7 animate-fade-in max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-2">
            <Sliders className="w-3.5 h-3.5 text-purple-600" />
            EXECUTIVE WHAT-IF SCENARIO ENGINE
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Field Capacity Simulator
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
            Model how dynamic AI allocation protects Tier-1 HCP coverage when territorial field hours, headcount, or travel budgets fluctuate.
          </p>
        </div>

        <button
          onClick={() => setActiveScreen('commercial-insights')}
          className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
        >
          <span>View Commercial Impact</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Sliders Control Panel */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Sliders className="w-4 h-4 text-purple-600" />
            <span>CAPACITY PARAMETER CONTROLS</span>
          </h2>
          <span className="text-[11px] text-slate-500">Adjust sliders to stress-test capacity</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Slider 1: Available Reps */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-purple-600" />
                Available Reps
              </span>
              <span className="text-base font-black text-purple-900">{reps}</span>
            </div>
            <input
              type="range"
              min="50"
              max="150"
              step="5"
              value={reps}
              onChange={(e) => setReps(Number(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>50 reps</span>
              <span>Baseline: 100</span>
              <span>150 reps</span>
            </div>
          </div>

          {/* Slider 2: Available Field Hours */}
          <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-purple-600" />
                Available Field Hours
              </span>
              <span className="text-base font-black text-purple-900">{fieldHours} hrs</span>
            </div>
            <input
              type="range"
              min="400"
              max="1200"
              step="25"
              value={fieldHours}
              onChange={(e) => setFieldHours(Number(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-purple-600 font-semibold">
              <span>400 hrs</span>
              <span>Simulated: {fieldHours}</span>
              <span>1,200 hrs</span>
            </div>
          </div>

          {/* Slider 3: Target HCPs */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-indigo-600" />
                Target HCP Universe
              </span>
              <span className="text-base font-black text-slate-900">{targetHcps}</span>
            </div>
            <input
              type="range"
              min="200"
              max="800"
              step="20"
              value={targetHcps}
              onChange={(e) => setTargetHcps(Number(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>200 doctors</span>
              <span>Baseline: 500</span>
              <span>800 doctors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-Side Simulation Results Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* WITHOUT AGILEX */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              WITHOUT AGILEX (LEGACY CRM MODEL)
            </span>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              Static Routing
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs text-slate-500 font-medium">Priority HCP Coverage</span>
              <div className="text-3xl font-black text-slate-700 mt-0.5">{withoutCoverage}%</div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full" style={{ width: `${withoutCoverage}%` }}></div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Travel Downtime Overhead:</span>
                <strong className="text-slate-800">28% of field hours</strong>
              </div>
              <div className="flex justify-between">
                <span>Unrehearsed Objection Stumble:</span>
                <strong className="text-slate-800">34% of in-clinic calls</strong>
              </div>
              <div className="flex justify-between">
                <span>Coverage Slippage in Headcount Crunch:</span>
                <strong className="text-rose-700 font-bold">-22% Tier-1 drops</strong>
              </div>
            </div>
          </div>
        </div>

        {/* WITH AGILEX */}
        <div className="bg-white rounded-2xl p-6 border border-purple-200/90 shadow-xs space-y-5 bg-gradient-to-br from-purple-50/40 via-white to-pink-50/20">
          <div className="flex items-center justify-between pb-2 border-b border-purple-100">
            <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700">
              WITH AGILEX DYNAMIC OPTIMISATION
            </span>
            <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              +{coverageLift}% Coverage Lift
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs text-purple-700 font-semibold">Priority HCP Coverage</span>
              <div className="text-3xl font-black text-purple-900 mt-0.5">{withCoverage}%</div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" style={{ width: `${withCoverage}%` }}></div>
              </div>
            </div>

            <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200 space-y-1.5 text-xs text-purple-950 font-medium">
              <div className="flex justify-between">
                <span>Field Hours Recovered:</span>
                <strong className="text-emerald-700 font-bold">+{hoursRecovered} hrs / month</strong>
              </div>
              <div className="flex justify-between">
                <span>High-Value Interactions Protected:</span>
                <strong className="text-purple-800 font-bold">+{protectedPercent}%</strong>
              </div>
              <div className="flex justify-between">
                <span>Re-sequenced Route Travel Efficiency:</span>
                <strong className="text-purple-800 font-bold">+31% less transit</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Illustrative Disclaimer Note */}
      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center text-xs text-slate-500 italic">
        &ldquo;Illustrative scenario for competition demonstration. Demonstrates AgileX algorithmic reallocation under constrained field-force resources — not a clinical or guaranteed commercial forecast.&rdquo;
      </div>
    </div>
  );
};
