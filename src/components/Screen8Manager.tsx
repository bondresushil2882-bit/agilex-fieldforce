import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MOCK_TEAM_MEMBERS } from '../data/mockData';
import {
  Users,
  Award,
  AlertTriangle,
  Rocket,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sliders,
  BellRing,
  CheckCircle2
} from 'lucide-react';

export const Screen8Manager: React.FC = () => {
  const { setActiveScreen } = useApp();
  const [reallocated, setReallocated] = useState<boolean>(false);

  return (
    <div className="space-y-6 animate-fade-in max-w-6xl mx-auto">
      {/* Banner in Clean Light Enterprise Theme */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-2">
            <Users className="w-3.5 h-3.5" />
            COMMERCIAL MANAGEMENT CONTROL
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Field Force Readiness &amp; Team Intelligence
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-xl">
            Territorial team capability aggregation, launch certification benchmarks, and targeted manager coaching interventions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveScreen('capacity-simulator')}
            className="px-4 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sliders className="w-4 h-4 text-purple-600" />
            <span>Capacity Simulator</span>
          </button>
        </div>
      </div>

      {/* PART 6: AI FIELD FORCE ALERTS (RED, AMBER, GREEN) */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <BellRing className="w-4 h-4 text-purple-600" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              AI FIELD FORCE ALERTS
            </h2>
          </div>
          <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
            Real-time Fleet Anomaly Detection
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* RED ALERT */}
          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2">
            <div className="flex items-center gap-2 text-rose-800 text-xs font-black">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
              <span>CRITICAL ALLOCATION LEAK</span>
            </div>
            <p className="text-xs text-rose-950 font-medium leading-relaxed">
              <strong>7 representatives</strong> are spending &gt;30% of field time on low-priority HCPs.
            </p>
            <span className="text-[10px] text-rose-700 font-semibold block pt-1">
              Estimated opportunity loss: ~48 Tier-1 contact windows
            </span>
          </div>

          {/* AMBER ALERT */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2 text-amber-800 text-xs font-black">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span>WINDOW EXPIRATION WARNING</span>
            </div>
            <p className="text-xs text-amber-950 font-medium leading-relaxed">
              <strong>18 high-value HCPs</strong> are approaching their recommended engagement window.
            </p>
            <span className="text-[10px] text-amber-700 font-semibold block pt-1">
              Lapse threshold: &gt;21 days without touchpoint
            </span>
          </div>

          {/* GREEN ALERT */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-black">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>OPTIMISATION LIFT VERIFIED</span>
            </div>
            <p className="text-xs text-emerald-950 font-medium leading-relaxed">
              Priority HCP coverage improved <strong>+14%</strong> after AI route optimisation.
            </p>
            <span className="text-[10px] text-emerald-700 font-semibold block pt-1">
              54 transit hours converted to in-clinic time
            </span>
          </div>
        </div>

        {/* AI Action Directive Bar with "Optimise Team Capacity" */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 via-white to-pink-50/30 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700">AI CAPACITY DIRECTIVE</span>
            <p className="text-xs font-extrabold text-slate-900">
              &ldquo;Reallocate 42 field hours toward 18 high-opportunity HCPs next week.&rdquo;
            </p>
          </div>
          <button
            onClick={() => setReallocated(!reallocated)}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer shadow-2xs ${
              reallocated
                ? 'bg-emerald-600 text-white'
                : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}
          >
            {reallocated ? '✓ 42 Hours Reallocated' : 'Optimise Team Capacity'}
          </button>
        </div>
      </div>

      {/* 4 Management KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-purple-200 rounded-xl p-5 shadow-xs bg-gradient-to-br from-purple-50/40 to-white">
          <span className="text-xs text-purple-700 font-bold">Team Readiness</span>
          <div className="text-3xl font-black text-purple-900 mt-1">84%</div>
          <span className="text-[11px] text-emerald-700 font-semibold">+4% vs last cycle</span>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs">
          <span className="text-xs text-slate-500 font-medium">Reps Ready</span>
          <div className="text-3xl font-black text-slate-900 mt-1">82%</div>
          <span className="text-[11px] text-slate-500 font-medium">6 of 8 reps certified</span>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs">
          <span className="text-xs text-slate-500 font-medium">High-Priority Skill Gaps</span>
          <div className="text-3xl font-black text-amber-700 mt-1">7</div>
          <span className="text-[11px] text-amber-700 font-medium">Concentrated in closing</span>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs">
          <span className="text-xs text-slate-500 font-medium">Launch Readiness</span>
          <div className="text-3xl font-black text-slate-900 mt-1">79%</div>
          <span className="text-[11px] text-purple-700 font-semibold">Target: 85% by Q4 Launch</span>
        </div>
      </div>

      {/* Rep Readiness Table */}
      <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-4 h-4 text-purple-600" />
            <span>TERRITORY REPRESENTATIVE READINESS MATRIX</span>
          </h2>
          <span className="text-xs text-slate-400 font-medium">Live Fleet Intelligence</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-5 py-3 font-semibold">Rep Name</th>
                <th className="px-5 py-3 font-semibold">Territory</th>
                <th className="px-5 py-3 font-semibold">Readiness</th>
                <th className="px-5 py-3 font-semibold">Key Skill Gap</th>
                <th className="px-5 py-3 font-semibold">AI Recommendation</th>
                <th className="px-5 py-3 font-semibold">Planned vs Logged</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {MOCK_TEAM_MEMBERS.map((rep, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-slate-900 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center text-[10px] font-black text-purple-800">
                      {rep.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span>{rep.name}</span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-500">{rep.territory}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{rep.readiness}%</span>
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            rep.readiness >= 85 ? 'bg-emerald-500' : rep.readiness >= 75 ? 'bg-purple-600' : 'bg-rose-500'
                          }`}
                          style={{ width: `${rep.readiness}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-slate-800 font-medium">{rep.keyGap}</td>
                  <td className="px-5 py-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                      rep.status === 'Ready'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : rep.status === 'Coach'
                        ? 'bg-purple-50 text-purple-800 border border-purple-200'
                        : rep.status === 'High Priority'
                        ? 'bg-rose-50 text-rose-800 border border-rose-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      {rep.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-500">
                    {rep.callsDone} / {rep.callsTarget} calls
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Team Readiness Over Time Visual */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div>
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>TEAM READINESS TRAJECTORY OVER TIME</span>
            </h2>
            <p className="text-xs text-slate-500">Fleet capability growth across 8-week pre-launch cycle</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            +18% Net Competency Lift
          </span>
        </div>

        {/* Minimalist Professional CSS Bar Chart */}
        <div className="h-40 flex items-end justify-between gap-3 pt-6 px-4">
          {[
            { week: 'W1 (Baseline)', score: 66 },
            { week: 'W2', score: 69 },
            { week: 'W3', score: 71 },
            { week: 'W4 (Midpoint)', score: 75 },
            { week: 'W5', score: 78 },
            { week: 'W6', score: 80 },
            { week: 'W7 (Current)', score: 84 },
            { week: 'W8 (Projected)', score: 88, projected: true },
          ].map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span className="text-[10px] text-slate-500 font-bold group-hover:text-purple-700 transition-colors">
                {bar.score}%
              </span>
              <div
                className={`w-full rounded-t-lg transition-all duration-300 ${
                  bar.projected
                    ? 'bg-purple-200 border-t-2 border-dashed border-purple-500'
                    : 'bg-gradient-to-t from-purple-200 to-purple-600 group-hover:from-purple-300 group-hover:to-purple-700'
                }`}
                style={{ height: `${(bar.score / 100) * 100}%` }}
              ></div>
              <span className="text-[10px] text-slate-400 font-medium truncate max-w-[60px] text-center">
                {bar.week}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-end pt-4 border-t border-slate-200">
        <button
          onClick={() => setActiveScreen('capacity-simulator')}
          className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Open Field Capacity Simulator</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
