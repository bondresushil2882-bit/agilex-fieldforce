import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowLeft,
  Bot,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  MapPin,
  Sparkles,
  TrendingUp,
  Zap,
  AlertTriangle,
  Activity,
  Layers,
  Brain,
  ChevronRight
} from 'lucide-react';

export const Screen2HcpOpportunity: React.FC = () => {
  const { selectedHcp, setActiveScreen } = useApp();

  return (
    <div className="space-y-6 animate-fade-in max-w-6xl mx-auto">
      {/* Back button and breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveScreen('dashboard')}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Command Center</span>
        </button>
        <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
          HCP Opportunity Dossier
        </span>
      </div>

      {/* Hero Profile Card in Light Theme */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-3xl shadow-2xs">
              {selectedHcp.avatar}
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-2xl font-black text-slate-900">{selectedHcp.name}</h1>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  {selectedHcp.specialty}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {selectedHcp.location} • {selectedHcp.hospital}
                </span>
              </div>
              <p className="text-xs text-slate-600 max-w-2xl">{selectedHcp.bio}</p>
              <div className="text-[11px] text-purple-700 font-bold flex items-center gap-1.5 pt-0.5">
                <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
                <span>Prescription Trend: {selectedHcp.prescriptionTrend}</span>
              </div>
            </div>
          </div>

          {/* AI Score Badge */}
          <div className="bg-purple-50 rounded-2xl p-4 text-center md:min-w-[160px] border border-purple-200 shadow-2xs flex-shrink-0">
            <div className="text-[10px] uppercase font-bold text-purple-700 tracking-wider">AI Opportunity Score</div>
            <div className="text-3xl font-black text-purple-900 mt-1 flex items-center justify-center gap-1">
              <Zap className="w-6 h-6 text-purple-600 fill-purple-600" />
              <span>{selectedHcp.opportunityScore}</span>
              <span className="text-sm font-semibold text-slate-400">/100</span>
            </div>
            <div className="text-[10px] text-emerald-700 font-bold mt-0.5">Tier-1 Dynamic Priority</div>
          </div>
        </div>

        {/* 4 Quadrants: Potential, Engagement, Coverage, Responsiveness */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium">HCP Potential</span>
            <div className="text-base font-black text-slate-900 mt-0.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>{selectedHcp.potential}</span>
            </div>
            <span className="text-[10px] text-slate-400">Top 5% category prescriber</span>
          </div>

          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium">Engagement Level</span>
            <div className="text-base font-black text-slate-900 mt-0.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span>{selectedHcp.engagement}</span>
            </div>
            <span className="text-[10px] text-slate-400">Lapsed interaction window</span>
          </div>

          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium">AgileX Coverage</span>
            <div className="text-base font-black text-slate-900 mt-0.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span>{selectedHcp.coverage}</span>
            </div>
            <span className="text-[10px] text-slate-400">Sub-optimal rep touchpoints</span>
          </div>

          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium">Responsiveness</span>
            <div className="text-base font-black text-slate-900 mt-0.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              <span>{selectedHcp.responsiveness}</span>
            </div>
            <span className="text-[10px] text-slate-400">Fast adopter of clinical data</span>
          </div>
        </div>
      </div>

      {/* Middle Grid: Recent Activity & AI Recommendation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Activity className="w-4 h-4 text-purple-600" />
            <span>Recent Activity Signals</span>
          </h2>

          <div className="space-y-2.5">
            {selectedHcp.recentActivity.map((act, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-2 h-2 rounded-full bg-purple-600 mt-1.5 flex-shrink-0"></div>
                <span className="text-xs text-slate-700 leading-relaxed">{act}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendation */}
        <div className="bg-white border border-purple-200/90 rounded-2xl p-6 shadow-xs space-y-4 bg-gradient-to-br from-purple-50/40 via-white to-pink-50/20">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>AI Strategic Recommendation</span>
            </h2>
            <span className="text-[10px] font-bold text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded border border-purple-200">
              Prescriptive
            </span>
          </div>

          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 text-xs leading-relaxed font-semibold">
            &ldquo;Prioritise a face-to-face interaction today. Lead with relevant clinical evidence and address safety concerns before discussing treatment initiation.&rdquo;
          </div>

          <div className="space-y-2 text-xs text-slate-700 pt-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Target Brand: <strong className="text-slate-900">{selectedHcp.recommendedBrand}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Predicted Objection: <strong className="text-amber-800">{selectedHcp.engagementPersona.observedObjectionPattern}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Recommended Engagement Approach: <strong className="text-purple-700">{selectedHcp.engagementPersona.communicationPreference}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Screen 2 Next Best Action Summary Card */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-4 h-4 text-purple-600" />
              <span>NEXT BEST ACTION (NBA)</span>
            </h2>
            <p className="text-xs text-slate-500">Commercial execution parameters tailored for representative call</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Validated by AI Engine
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] uppercase font-bold text-slate-400">WHO</span>
            <div className="text-xs font-black text-slate-900 mt-1">{selectedHcp.name}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] uppercase font-bold text-slate-400">WHEN</span>
            <div className="text-xs font-black text-slate-900 mt-1">{selectedHcp.recommendedTiming}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] uppercase font-bold text-slate-400">CHANNEL</span>
            <div className="text-xs font-black text-slate-900 mt-1">{selectedHcp.recommendedChannel}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] uppercase font-bold text-slate-400">OBJECTIVE</span>
            <div className="text-xs font-black text-slate-900 mt-1">{selectedHcp.recommendedObjective}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 col-span-2 md:col-span-1">
            <span className="text-[10px] uppercase font-bold text-purple-700">CONTENT</span>
            <div className="text-xs font-black text-purple-900 mt-1">Clinical evidence + safety profile</div>
          </div>
        </div>

        {/* Dual Actions: View Engagement Intelligence or Prepare */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-purple-50/50 p-4 rounded-xl border border-purple-200">
          <div>
            <div className="text-xs font-extrabold text-slate-900 flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-600" />
              Deepen Intelligence or Prepare for Field Call
            </div>
            <div className="text-[11px] text-slate-500">
              Explore {selectedHcp.name}&apos;s complete engagement persona or generate the 5-minute pre-call plan.
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveScreen('hcp-intelligence')}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-purple-800 font-bold text-xs border border-purple-200 shadow-2xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Brain className="w-3.5 h-3.5 text-purple-600" />
              <span>Engagement Persona</span>
            </button>
            <button
              onClick={() => setActiveScreen('prepare-call')}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Prepare for Call</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
