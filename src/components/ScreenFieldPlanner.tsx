import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MOCK_HCPS, HCP } from '../data/mockData';
import {
  MapPin,
  Clock,
  Navigation,
  Compass,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ChevronRight,
  Send,
  Zap,
  Brain,
  Sliders,
  Car,
  Video,
  ArrowRight
} from 'lucide-react';

export const ScreenFieldPlanner: React.FC = () => {
  const { setSelectedHcp, setActiveScreen, isPlanOptimized, setIsPlanOptimized } = useApp();
  const [selectedCallId, setSelectedCallId] = useState<string>('hcp-1');

  const recommendedCalls = MOCK_HCPS.filter(h => h.isRecommendedToday);
  const activeCall = recommendedCalls.find(h => h.id === selectedCallId) || recommendedCalls[0];

  const handleStartPrep = (hcp: HCP) => {
    setSelectedHcp(hcp);
    setActiveScreen('prepare-call');
  };

  const handleViewPersona = (hcp: HCP) => {
    setSelectedHcp(hcp);
    setActiveScreen('hcp-intelligence');
  };

  return (
    <div className="space-y-7 animate-fade-in max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5 text-purple-600" />
            DYNAMIC FIELD FORCE OPTIMISATION ENGINE
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Today&apos;s AI Field Plan
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
            Optimised for maximum high-value HCP engagement per field hour. Prioritises high-opportunity prescription windows while eliminating route travel wastage.
          </p>
        </div>

        {/* Primary CTA: OPTIMISE MY DAY */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => setIsPlanOptimized(!isPlanOptimized)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-700 hover:to-indigo-700 text-white font-extrabold text-xs shadow-sm shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-purple-200" />
            <span>{isPlanOptimized ? 'AI Plan Active (Re-Optimise)' : 'OPTIMISE MY DAY'}</span>
          </button>
        </div>
      </div>

      {/* Territory & Field Capacity Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs">
          <span className="text-[10px] text-slate-400 font-bold uppercase block">Representative</span>
          <span className="text-xs font-bold text-slate-900 mt-0.5 block">Priya Shah</span>
          <span className="text-[10px] text-purple-700 font-semibold">Key Account Mgr</span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs">
          <span className="text-[10px] text-slate-400 font-bold uppercase block">Territory</span>
          <span className="text-xs font-bold text-slate-900 mt-0.5 block">Mumbai South</span>
          <span className="text-[10px] text-slate-500">Tier-1 Onco Hub</span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs">
          <span className="text-[10px] text-slate-400 font-bold uppercase block">Available Field Time</span>
          <span className="text-xs font-bold text-slate-900 mt-0.5 block">7.0 Hours</span>
          <span className="text-[10px] text-emerald-700 font-semibold">Standard shift</span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs">
          <span className="text-[10px] text-slate-400 font-bold uppercase block">Potential Target HCPs</span>
          <span className="text-xs font-bold text-slate-900 mt-0.5 block">12 Doctor Pool</span>
          <span className="text-[10px] text-slate-500">In territory</span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-purple-200 shadow-2xs bg-purple-50/40">
          <span className="text-[10px] text-purple-700 font-bold uppercase block">AI Recommended Calls</span>
          <span className="text-xs font-black text-purple-900 mt-0.5 block">6 High-Value Calls</span>
          <span className="text-[10px] text-purple-700 font-semibold">Strict priority filter</span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-emerald-200 shadow-2xs bg-emerald-50/40">
          <span className="text-[10px] text-emerald-700 font-bold uppercase block">Priority Coverage</span>
          <span className="text-xs font-black text-emerald-900 mt-0.5 block">91% Tier-1 Protected</span>
          <span className="text-[10px] text-emerald-700 font-semibold">+29% vs legacy plan</span>
        </div>
      </div>

      {/* ROUTE COMPARISON CARD: CURRENT PLAN vs AI OPTIMISED */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span>TERRITORY EFFICIENCY: CURRENT PLAN vs. AI OPTIMISED</span>
            </h2>
            <p className="text-xs text-slate-500">Impact of dynamic sequence optimisation on representative productivity</p>
          </div>
          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
            Efficiency Lift: +29% Priority Coverage
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* CURRENT PLAN */}
          <div className={`p-4 rounded-xl border transition-all ${!isPlanOptimized ? 'bg-amber-50/40 border-amber-300 ring-2 ring-amber-400/20' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">CURRENT LEGACY PLAN</span>
              <span className="text-[11px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                Quarterly Static Route
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center py-2">
              <div className="bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-400 block font-medium">Planned Calls</span>
                <span className="text-base font-black text-slate-800">8 calls</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-400 block font-medium">Field Hours</span>
                <span className="text-base font-black text-amber-700">7.2 hrs</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-400 block font-medium">Priority Coverage</span>
                <span className="text-base font-black text-slate-600">62%</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
              High transit delays across congested corridors; 2 calls scheduled with low-propensity doctors; Dr. Mehta missed due to rigid sequence.
            </p>
          </div>

          {/* AI OPTIMISED PLAN */}
          <div className={`p-4 rounded-xl border transition-all ${isPlanOptimized ? 'bg-purple-50/50 border-purple-300 ring-2 ring-purple-500/20 shadow-xs' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700">AI OPTIMISED DYNAMIC ROUTE</span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Recommended by AgileX
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center py-2">
              <div className="bg-white p-2 rounded-lg border border-purple-100 shadow-2xs">
                <span className="text-[10px] text-slate-400 block font-medium">Optimised Calls</span>
                <span className="text-base font-black text-slate-900">6 calls</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-purple-100 shadow-2xs">
                <span className="text-[10px] text-slate-400 block font-medium">Field Hours</span>
                <span className="text-base font-black text-emerald-700">6.1 hrs</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-purple-100 shadow-2xs">
                <span className="text-[10px] text-slate-400 block font-medium">Priority Coverage</span>
                <span className="text-base font-black text-purple-700">91%</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
              Recovers 1.1 hours of travel time; routes physical visits through South Mumbai cluster; injects 2 midday virtual briefs during clinic breaks.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Schedule List + Territory Map Visual & Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (7 cols): Today's 6 Recommended Calls Schedule */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-600" />
              <span>OPTIMISED DAILY SCHEDULE (6 CALLS)</span>
            </h2>
            <span className="text-xs text-slate-500 font-medium">09:30 to 17:00</span>
          </div>

          <div className="space-y-2.5">
            {recommendedCalls.map((call, idx) => {
              const isSelected = call.id === selectedCallId;
              const isVirtual = call.recommendedChannel.toLowerCase().includes('virtual');

              return (
                <div
                  key={call.id}
                  onClick={() => setSelectedCallId(call.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-50/70 border-purple-400 shadow-xs ring-1 ring-purple-400/30'
                      : 'bg-white border-slate-200/90 hover:border-purple-200 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="text-center min-w-[50px] pt-0.5">
                        <span className="text-xs font-black text-purple-900 block">{call.scheduledTime}</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full inline-flex items-center gap-1 mt-1 ${
                          isVirtual
                            ? 'bg-cyan-100 text-cyan-800 border border-cyan-200'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}>
                          {isVirtual ? <Video className="w-2.5 h-2.5" /> : <Car className="w-2.5 h-2.5" />}
                          {isVirtual ? 'Virtual' : 'F2F'}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xs font-extrabold text-slate-900">{call.name}</h3>
                          <span className="text-[10px] text-slate-500 font-medium">{call.hospital}</span>
                        </div>
                        <p className="text-xs text-slate-600">
                          <strong className="text-slate-700">Objective:</strong> {call.recommendedObjective}
                        </p>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 pt-0.5 flex-wrap">
                          <span>Travel: <strong className="text-slate-700">{call.estimatedTravelTime}</strong></span>
                          <span>•</span>
                          <span>Duration: <strong className="text-slate-700">{call.estimatedDuration}</strong></span>
                          <span>•</span>
                          <span className="text-purple-700 font-semibold">{call.engagementPersona.communicationPreference}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Priority</div>
                      <div className="text-base font-black text-purple-700 flex items-center gap-0.5 justify-end">
                        <Zap className="w-3.5 h-3.5 text-purple-600 fill-purple-600" />
                        <span>{call.opportunityScore}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStartPrep(call);
                        }}
                        className="mt-2 text-[11px] font-bold text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Prep Plan</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column (5 cols): SIMULATED TERRITORY MAP & SELECTED CALL INTELLIGENCE */}
        <div className="lg:col-span-5 space-y-4">
          {/* Simulated Territory Route Visual */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-purple-600" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Territory Route Visual</h3>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Mumbai South Grid</span>
            </div>

            {/* Custom SVG Territory Canvas */}
            <div className="relative w-full h-56 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden select-none">
              {/* Subtle Grid Lines */}
              <svg className="absolute inset-0 w-full h-full stroke-slate-200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                    <path d="M 28 0 L 0 0 0 28" fill="none" strokeWidth="0.8" stroke="#e2e8f0" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Simulated connecting route paths */}
                <path
                  d="M 60 40 L 110 65 L 160 85 L 85 120 L 190 145 L 140 175"
                  fill="none"
                  stroke="#9333ea"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                />
              </svg>

              {/* Rep Starting Hub Pin */}
              <div className="absolute left-4 top-4 bg-slate-900 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Rep Start (09:00)</span>
              </div>

              {/* Pins for recommended calls */}
              {recommendedCalls.map((call, idx) => {
                const isSelected = call.id === activeCall.id;
                return (
                  <button
                    key={call.id}
                    onClick={() => setSelectedCallId(call.id)}
                    style={{ left: `${call.mapCoords.x}%`, top: `${call.mapCoords.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group transition-transform ${
                      isSelected ? 'scale-110 z-20' : 'z-10 hover:scale-105'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-sm transition-all ${
                      isSelected
                        ? 'bg-purple-600 text-white ring-4 ring-purple-200'
                        : 'bg-white text-slate-800 border-2 border-purple-500'
                    }`}>
                      {idx + 1}
                    </div>
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded mt-0.5 shadow-2xs whitespace-nowrap ${
                      isSelected ? 'bg-purple-900 text-white' : 'bg-white/90 text-slate-700 border border-slate-200'
                    }`}>
                      {call.name.replace('Dr. ', '')} ({call.scheduledTime})
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span>Optimised sequence: 1 → 2 → 3 → 4 → 5 → 6</span>
              <span className="text-purple-700 font-bold">Total transit: 51 min</span>
            </div>
          </div>

          {/* Active Call Quick Focus Card */}
          <div className="bg-white rounded-2xl p-5 border border-purple-200 shadow-xs space-y-4 bg-gradient-to-b from-purple-50/30 to-white">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-2.5 py-0.5 rounded-full">
                SELECTED CALL INSPECTION
              </span>
              <span className="text-xs font-bold text-slate-600">
                Time: <strong className="text-slate-900">{activeCall.scheduledTime}</strong>
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-2xl flex-shrink-0">
                {activeCall.avatar}
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-slate-900">{activeCall.name}</h3>
                <p className="text-xs text-slate-500">{activeCall.specialty} • {activeCall.hospital}</p>
                <div className="text-[11px] text-purple-700 font-semibold pt-0.5">
                  Persona: {activeCall.engagementPersona.interactionStyle}
                </div>
              </div>
            </div>

            {/* Why AgileX recommends this call */}
            <div className="p-3 bg-white rounded-xl border border-slate-200/90 space-y-2 text-xs shadow-2xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                WHY AGILEX RECOMMENDS THIS CALL
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-700">
                <div className="flex justify-between">
                  <span>HCP Potential:</span>
                  <strong className="text-purple-700">+{activeCall.scoreFactors.hcpPotential}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Response Propensity:</span>
                  <strong className="text-purple-700">+{activeCall.scoreFactors.responsePropensity}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Coverage Gap:</span>
                  <strong className="text-purple-700">+{activeCall.scoreFactors.coverageGap}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Travel Efficiency:</span>
                  <strong className="text-emerald-700">+{activeCall.scoreFactors.travelEfficiency}</strong>
                </div>
              </div>
              <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-600">Priority Score:</span>
                <span className="text-purple-800 text-sm">{activeCall.opportunityScore}/100</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => handleViewPersona(activeCall)}
                className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Brain className="w-3.5 h-3.5 text-purple-700" />
                <span>View Persona</span>
              </button>
              <button
                onClick={() => handleStartPrep(activeCall)}
                className="py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
                <span>Prepare Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
