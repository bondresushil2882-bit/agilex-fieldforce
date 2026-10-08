import React from 'react';
import { useApp } from '../context/AppContext';
import { MOCK_HCPS, HCP } from '../data/mockData';
import {
  Brain,
  Sparkles,
  ArrowRight,
  Clock,
  Send,
  HelpCircle,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Zap,
  TrendingUp,
  FileText,
  ChevronRight,
  ShieldCheck,
  Activity,
  Layers,
  ChevronDown
} from 'lucide-react';

export const ScreenHcpIntelligence: React.FC = () => {
  const { selectedHcp, setSelectedHcp, setActiveScreen } = useApp();

  const persona = selectedHcp.engagementPersona;
  const strategy = selectedHcp.engagementStrategy;
  const timeline = selectedHcp.engagementTimeline;

  const handlePrepare = () => {
    setActiveScreen('prepare-call');
  };

  return (
    <div className="space-y-7 animate-fade-in max-w-6xl mx-auto">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-2">
            <Brain className="w-3.5 h-3.5 text-purple-600" />
            ENGINE 1 • HCP ENGAGEMENT INTELLIGENCE
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Illustrative AI Engagement Persona
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
            AI understands the HCP&apos;s demonstrated engagement preferences from simulated commercial interaction data to prescribe the highest-converting consultative conversation approach.
          </p>
        </div>

        {/* HCP Switcher Dropdown */}
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-slate-500">Switch HCP:</label>
          <div className="relative">
            <select
              value={selectedHcp.id}
              onChange={(e) => {
                const found = MOCK_HCPS.find(h => h.id === e.target.value);
                if (found) setSelectedHcp(found);
              }}
              className="appearance-none bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold py-2.5 pl-3.5 pr-8 rounded-xl focus:outline-none focus:border-purple-500 cursor-pointer"
            >
              {MOCK_HCPS.slice(0, 6).map((hcp) => (
                <option key={hcp.id} value={hcp.id}>
                  {hcp.name} ({hcp.specialty.split(' ')[0]})
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* HCP Hero Summary Header */}
      <div className="bg-white border border-purple-200/80 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-r from-purple-50/40 via-white to-pink-50/20">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-3xl shadow-2xs">
            {selectedHcp.avatar}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-xl font-black text-slate-900">{selectedHcp.name}</h2>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                {selectedHcp.specialty}
              </span>
              <span className="text-xs text-slate-500">
                {selectedHcp.location} • {selectedHcp.hospital}
              </span>
            </div>
            <p className="text-xs text-slate-600 max-w-xl">{selectedHcp.bio}</p>
            <div className="text-[11px] text-purple-700 font-semibold pt-1">
              Demonstrated Style: <strong className="text-purple-900">{persona.interactionStyle}</strong> ({persona.communicationPreference})
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
          <div className="text-center px-4 py-3 bg-white rounded-xl border border-purple-100 shadow-2xs">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Opportunity Score</span>
            <div className="text-2xl font-black text-purple-700 flex items-center justify-center gap-1">
              <Zap className="w-4 h-4 text-purple-600 fill-purple-600" />
              <span>{selectedHcp.opportunityScore}</span>
              <span className="text-xs text-slate-400 font-normal">/100</span>
            </div>
            <span className="text-[10px] text-emerald-700 font-bold">Access Prob: {persona.accessProbability}%</span>
          </div>

          <button
            onClick={handlePrepare}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Prepare Me for This HCP</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ENGAGEMENT DNA METRICS GRID */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-600" />
              <span>HCP ENGAGEMENT DNA PROFILE</span>
            </h2>
            <p className="text-xs text-slate-500">Derived from fictional commercial touchpoint analytics</p>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            10 Quantitative Engagement Dimensions
          </span>
        </div>

        {/* 10 Dimension Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium block">Evidence Orientation</span>
            <div className="text-sm font-black text-slate-900 mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{persona.evidenceOrientation}</span>
            </div>
            <span className="text-[10px] text-slate-400">Demands Phase III citations</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium block">Communication Pref</span>
            <div className="text-sm font-black text-purple-900 mt-1 truncate">
              {persona.communicationPreference}
            </div>
            <span className="text-[10px] text-slate-400">Values speed &amp; precision</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium block">Scientific Depth</span>
            <div className="text-sm font-black text-slate-900 mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              <span>{persona.scientificDepth}</span>
            </div>
            <span className="text-[10px] text-slate-400">Welcomes sub-analyses</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium block">Interaction Style</span>
            <div className="text-sm font-black text-slate-900 mt-1 truncate">
              {persona.interactionStyle}
            </div>
            <span className="text-[10px] text-slate-400">Challenges assertions</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium block">Preferred Channel</span>
            <div className="text-sm font-black text-purple-900 mt-1">
              {persona.preferredChannel}
            </div>
            <span className="text-[10px] text-slate-400">In-clinic OPD consult room</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium block">Typical Window</span>
            <div className="text-sm font-black text-slate-900 mt-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-purple-600" />
              <span>{persona.typicalWindow}</span>
            </div>
            <span className="text-[10px] text-slate-400">Target concise close</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium block">Content Preference</span>
            <div className="text-sm font-black text-slate-900 mt-1 truncate">
              {persona.contentPreference}
            </div>
            <span className="text-[10px] text-slate-400">Trial + registry data</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium block">Observed Objection</span>
            <div className="text-sm font-black text-amber-800 mt-1 truncate">
              {persona.observedObjectionPattern}
            </div>
            <span className="text-[10px] text-slate-400">Recurrent theme</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
            <span className="text-[11px] text-slate-500 font-medium block">Response Propensity</span>
            <div className="text-sm font-black text-emerald-800 mt-1">
              {persona.responsePropensity}
            </div>
            <span className="text-[10px] text-slate-400">High engagement probability</span>
          </div>

          <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200">
            <span className="text-[11px] text-purple-700 font-semibold block">Access Probability</span>
            <div className="text-sm font-black text-purple-900 mt-1">
              {persona.accessProbability}%
            </div>
            <span className="text-[10px] text-purple-700 font-semibold">Tier-1 availability</span>
          </div>
        </div>
      </div>

      {/* Main Row: Personalized Engagement Strategy & Engagement Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (7 cols): How to Engage Dr. Mehta Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>PERSONALISED ENGAGEMENT STRATEGY</span>
              </h2>
              <p className="text-xs text-slate-500">Prescriptive execution protocol for representative call</p>
            </div>
            <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
              Tactical Playbook
            </span>
          </div>

          {/* 6 Step Strategy Protocol */}
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </span>
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">START WITH</span>
                <span className="text-xs font-bold text-slate-900 leading-relaxed block">{strategy.startWith}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </span>
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">THEN DISCUSS</span>
                <span className="text-xs font-bold text-slate-900 leading-relaxed block">{strategy.thenDiscuss}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </span>
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">ASK THIS QUESTION</span>
                <span className="text-xs font-bold text-purple-900 leading-relaxed block">&ldquo;{strategy.askQuestion}&rdquo;</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-200 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                4
              </span>
              <div>
                <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block">AVOID</span>
                <span className="text-xs font-bold text-rose-900 leading-relaxed block">{strategy.avoid}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                5
              </span>
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">RECOMMENDED CONVERSATION LENGTH</span>
                <span className="text-xs font-bold text-slate-900 leading-relaxed block">{strategy.recommendedLength}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                6
              </span>
              <div>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">CLOSE WITH</span>
                <span className="text-xs font-bold text-emerald-900 leading-relaxed block">{strategy.closeWith}</span>
              </div>
            </div>
          </div>

          {/* Why AgileX recommends this strategy */}
          <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-200 space-y-2">
            <span className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              Why AgileX Recommends This Playbook
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-purple-950 font-medium">
              {strategy.whyRecommended.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Engagement Timeline & AI Learning */}
        <div className="lg:col-span-5 space-y-5">
          {/* Timeline Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span>HCP ENGAGEMENT TIMELINE</span>
              </h2>
              <span className="text-[10px] text-slate-400 font-medium">Fictional Signals</span>
            </div>

            <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 pl-1">
              {(timeline.length > 0 ? timeline : [
                { date: 'May 04', title: 'Clinical evidence discussion', outcome: 'Positive engagement', signalType: 'positive' as const, description: 'Reviewed Phase III survival curves.' },
                { date: 'May 16', title: 'Safety discussion', outcome: 'Raised elderly patient concern', signalType: 'objection' as const, description: 'Questioned renal clearance thresholds.' },
                { date: 'May 29', title: 'Competitor interaction detected', outcome: 'Illustrative demo signal', signalType: 'competitor' as const, description: 'Competitor rep detailed alternative monotherapy.' },
                { date: 'June 07', title: 'Real-world evidence content viewed', outcome: 'High engagement', signalType: 'content' as const, description: 'Accessed 18-month registry reprint.' },
                { date: 'June 19', title: 'AgileX interaction', outcome: 'Follow-up requested', signalType: 'followup' as const, description: 'Agreed to in-person review once elderly monograph arrives.' }
              ]).map((item, idx) => (
                <div key={idx} className="relative pl-6 space-y-0.5 group">
                  <div className={`absolute left-1.5 top-1.5 w-3 h-3 rounded-full -translate-x-1/2 border-2 border-white ${
                    item.signalType === 'positive'
                      ? 'bg-emerald-500'
                      : item.signalType === 'objection'
                      ? 'bg-amber-500'
                      : item.signalType === 'competitor'
                      ? 'bg-pink-500'
                      : item.signalType === 'content'
                      ? 'bg-indigo-500'
                      : 'bg-purple-600'
                  }`}></div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-900">{item.title}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{item.date}</span>
                  </div>
                  <span className="text-[11px] text-purple-700 font-semibold block">{item.outcome}</span>
                  <p className="text-[10px] text-slate-500 leading-normal">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Learning Callout Card */}
          <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50/40 rounded-2xl p-5 border border-purple-200/90 shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-purple-800 text-xs font-bold uppercase tracking-wider">
              <Brain className="w-4 h-4 text-purple-600" />
              <span>AI CONTINUOUS SYNTHESIS</span>
            </div>
            <p className="text-xs text-slate-800 leading-relaxed font-medium">
              &ldquo;{selectedHcp.name} has demonstrated stronger engagement when conversations begin with evidence and are linked to specific patient-population questions.&rdquo;
            </p>
            <div className="pt-1 text-[11px] text-slate-500 italic">
              *Illustrative AI insights generated from simulated commercial interaction data.
            </div>
          </div>

          {/* Bottom CTA to Launch Personalised Prep */}
          <button
            onClick={handlePrepare}
            className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <span>Proceed to 5-Minute Call Preparation Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
