import React from 'react';
import { useApp } from '../context/AppContext';
import { MOCK_HCPS } from '../data/mockData';
import {
  Users,
  CalendarCheck,
  Zap,
  Award,
  Clock,
  ArrowUpRight,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Compass,
  MapPin,
  Bot,
  Brain,
  ArrowRight,
  FileText
} from 'lucide-react';

export const Screen1Dashboard: React.FC = () => {
  const { setSelectedHcp, setActiveScreen } = useApp();

  const handleSelectHcp = (hcp: typeof MOCK_HCPS[0], targetScreen: 'hcp-opportunity' | 'hcp-intelligence' | 'prepare-call' = 'hcp-opportunity') => {
    setSelectedHcp(hcp);
    setActiveScreen(targetScreen);
  };

  const topHcp = MOCK_HCPS[0]; // Dr. Ananya Mehta

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Welcome Banner in Light Pharmaceutical Enterprise Aesthetic */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white p-7 md:p-8 shadow-md">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-white text-xs font-semibold border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-purple-200" />
              Dynamic Field Force Optimisation Platform
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Good morning, Priya.
            </h1>
            <p className="text-sm md:text-base text-purple-100 max-w-2xl leading-relaxed">
              AI has analysed territorial call history, competitor activity, and engagement signals to identify the highest-value field opportunities for today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => setActiveScreen('field-planner')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-purple-900 hover:bg-purple-50 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-purple-700" />
              <span>View Today&apos;s Field Plan</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* PART 8: 3 PROMINENT EXECUTIVE ACTION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: TODAY'S AI FIELD PLAN */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-purple-300 transition-all flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200/60 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-600" />
                ENGINE 2 • FIELD PLAN
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                Optimised
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Today&apos;s AI Field Plan</h3>
            <div className="grid grid-cols-3 gap-2 py-2 text-center bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
              <div>
                <span className="text-[10px] text-slate-500 font-medium block">Recommended</span>
                <span className="text-base font-black text-slate-900">6 calls</span>
              </div>
              <div className="border-x border-slate-200">
                <span className="text-[10px] text-slate-500 font-medium block">Coverage</span>
                <span className="text-base font-black text-purple-700">91%</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-medium block">Field Hours</span>
                <span className="text-base font-black text-slate-900">6.1 hrs</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Sequence calibrated to minimize travel downtime across Mumbai South and protect Tier-1 oncology windows.
            </p>
          </div>
          <button
            onClick={() => setActiveScreen('field-planner')}
            className="w-full py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-purple-200/80 transition-all cursor-pointer"
          >
            <span>View Optimised Route</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 2: YOUR NEXT HCP */}
        <div className="bg-white rounded-2xl p-6 border border-purple-200/80 shadow-xs hover:border-purple-400 transition-all flex flex-col justify-between space-y-4 bg-gradient-to-b from-purple-50/40 to-white">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-2.5 py-1 rounded-full border border-purple-200 flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-purple-600" />
                ENGINE 1 • PERSONA
              </span>
              <span className="text-xs font-black text-purple-700 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-purple-600 fill-purple-600" />
                94 / 100
              </span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <div className="w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-xl flex-shrink-0">
                {topHcp.avatar}
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900 leading-tight">{topHcp.name}</h3>
                <span className="text-xs text-slate-500">{topHcp.specialty} • {topHcp.hospital}</span>
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-purple-100 space-y-1.5 text-xs text-slate-700 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Engagement Persona:</span>
                <span className="font-bold text-purple-900">Evidence-led + Safety-conscious</span>
              </div>
              <div className="text-[11px] text-slate-600 pt-0.5 border-t border-slate-100">
                <strong>Recommended Approach:</strong> Clinical evidence → Safety → Patient population
              </div>
            </div>
          </div>
          <button
            onClick={() => handleSelectHcp(topHcp, 'prepare-call')}
            className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Prepare for Call (5-Min Plan)</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 3: AI DEVELOPMENT */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-purple-300 transition-all flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-purple-600" />
                FIELD SKILLS ACCELERATOR
              </span>
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                Priority Gap
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900">AI Roleplay &amp; Coaching</h3>
            <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100 space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span>Identified Skill Gap:</span>
                <strong className="text-amber-800 font-bold">Closing &amp; Commitment</strong>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Recommended Simulation:</span>
                <strong className="text-purple-800 font-bold">Dr. Mehta Objection Scenario</strong>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              5-minute adaptive roleplay with Dr. Mehta&apos;s virtual AI persona to rehearse handling elderly safety objections.
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedHcp(topHcp);
              setActiveScreen('hcp-simulator');
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-purple-200/80 transition-all cursor-pointer"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Practice Now with AI HCP</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 5 Top KPI Cards in Light Enterprise Design */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* KPI 1 */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-1.5">
            <span className="text-xs font-semibold">Priority HCPs</span>
            <Users className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">7</div>
          <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>+2 dynamic additions</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-1.5">
            <span className="text-xs font-semibold">Today&apos;s Planned Calls</span>
            <CalendarCheck className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">8</div>
          <div className="text-[11px] text-slate-500 font-medium mt-1">
            Optimized route sequenced
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-white border border-purple-200 rounded-xl p-4 shadow-xs bg-gradient-to-br from-purple-50/50 to-white">
          <div className="flex items-center justify-between text-purple-700 mb-1.5">
            <span className="text-xs font-bold">AI Opportunity Score</span>
            <Zap className="w-4 h-4 text-purple-600 fill-purple-600/30" />
          </div>
          <div className="text-2xl font-black text-purple-900">86<span className="text-xs font-medium text-slate-500">/100</span></div>
          <div className="text-[11px] text-purple-700 font-semibold mt-1">
            High commercial propensity
          </div>
        </div>

        {/* KPI 4 */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-1.5">
            <span className="text-xs font-semibold">Rep Readiness</span>
            <Award className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">84%</div>
          <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>+6% this week</span>
          </div>
        </div>

        {/* KPI 5 */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs col-span-2 md:col-span-1">
          <div className="flex items-center justify-between text-slate-500 mb-1.5">
            <span className="text-xs font-semibold">Productive Field Hours</span>
            <Clock className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">5.8 <span className="text-xs font-medium text-slate-500">/ 7.0</span></div>
          <div className="text-[11px] text-slate-600 font-semibold mt-1">
            83% target efficiency
          </div>
        </div>
      </div>

      {/* Main Grid: Today's Priorities + Why These HCPs? */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Today's AI Priorities (Top 5 HCPs) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>TODAY&apos;S AI PRIORITIES</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200 font-bold">
                  Dynamic Real-Time
                </span>
              </h2>
              <p className="text-xs text-slate-500">Ranked by commercial opportunity index &amp; contact window urgency</p>
            </div>
            <button
              onClick={() => setActiveScreen('hcp-opportunity')}
              className="text-xs text-purple-700 font-bold hover:text-purple-900 flex items-center gap-1 cursor-pointer"
            >
              <span>View all 20 HCPs</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {MOCK_HCPS.slice(0, 5).map((hcp) => (
              <div
                key={hcp.id}
                onClick={() => handleSelectHcp(hcp, 'hcp-opportunity')}
                className="group p-5 rounded-xl bg-white border border-slate-200/90 hover:border-purple-300 hover:shadow-xs transition-all cursor-pointer relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                      {hcp.avatar}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                          {hcp.name}
                        </h3>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                          {hcp.specialty}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          • {hcp.location}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-1">
                        <strong className="text-purple-700 font-semibold">Opportunity:</strong> {hcp.opportunitySummary}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-0.5">
                        <span>Action: <strong className="text-slate-800">{hcp.recommendedAction}</strong></span>
                        <span>•</span>
                        <span>Brand: <strong className="text-purple-700">{hcp.recommendedBrand}</strong></span>
                        <span>•</span>
                        <span>Timing: <strong className="text-emerald-700 font-semibold">{hcp.recommendedTiming}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 flex-shrink-0">
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Priority Score</div>
                      <div className="text-xl font-black text-purple-700 flex items-center gap-1 justify-end">
                        <Zap className="w-4 h-4 text-purple-600 fill-purple-600" />
                        <span>{hcp.opportunityScore}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectHcp(hcp, 'hcp-intelligence');
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
                        title="View Engagement Intelligence"
                      >
                        Persona
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectHcp(hcp, 'prepare-call');
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-2xs"
                      >
                        <span>Start Prep</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: WHY THESE HCPS? + Strategic Principle */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>WHY THESE HCPs?</span>
              </h2>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
                Dr. Ananya Mehta
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent multi-factor dynamic scoring evaluates commercial potential vs. opportunity cost of representative time:
            </p>

            <div className="space-y-3 pt-1">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 font-medium">HCP potential</span>
                  <span className="text-purple-700 font-bold">+32</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 font-medium">Recent engagement</span>
                  <span className="text-purple-700 font-bold">+24</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 font-medium">Response propensity</span>
                  <span className="text-purple-700 font-bold">+21</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-500 rounded-full" style={{ width: '52%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 font-medium">Coverage gap</span>
                  <span className="text-purple-700 font-bold">+17</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl flex items-center justify-between">
              <span className="text-xs font-bold text-purple-900">Total Opportunity Score:</span>
              <span className="text-lg font-black text-purple-700">94 / 100</span>
            </div>

            <div className="text-[11px] text-slate-400 italic text-center">
              *Illustrative AI scoring framework for commercial prioritisation.
            </div>
          </div>

          {/* Strategic Reminder Box */}
          <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50/30 border border-purple-200/80 rounded-2xl p-5 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-purple-800 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-purple-600" />
              Strategic Productivity Principle
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              &ldquo;AI should not simply automate the sales force. AI should help the sales force spend every limited field-force hour where it can create the greatest incremental commercial value.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
