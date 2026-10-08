import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  Target,
  TrendingUp,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Play,
  Sparkles,
  Shield,
  Layers,
  ChevronRight
} from 'lucide-react';

export const Screen6MyPerformance: React.FC = () => {
  const { repProfile, setActiveScreen } = useApp();

  const skillsList = [
    { label: 'Scientific Communication', score: repProfile.skills.scientificCommunication, color: 'bg-emerald-500' },
    { label: 'Objection Handling', score: repProfile.skills.objectionHandling, color: 'bg-indigo-600' },
    { label: 'HCP Engagement', score: repProfile.skills.hcpEngagement, color: 'bg-purple-600' },
    { label: 'Closing & Commitment', score: repProfile.skills.closing, color: 'bg-amber-500' },
    { label: 'Consultative Listening', score: repProfile.skills.listening, color: 'bg-pink-500' }
  ];

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Performance Header Banner in Light Theme */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-2">
            <Award className="w-3.5 h-3.5" />
            REPRESENTATIVE COMPETENCY PROFILE
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            {repProfile.name}
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            {repProfile.title} • {repProfile.territory}
          </p>
        </div>

        {/* Overall Readiness Card */}
        <div className="bg-purple-50 rounded-2xl p-5 text-center min-w-[170px] border border-purple-200 shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-purple-700 tracking-wider">Overall Readiness</span>
          <div className="text-4xl font-black text-purple-900 my-1">{repProfile.overallReadiness}%</div>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded">
            Launch Certified
          </span>
        </div>
      </div>

      {/* Main Grid: Skills Breakdown + AI Development Priority */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skills Competency Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-4 h-4 text-purple-600" />
              <span>CORE COMMERCIAL COMPETENCIES</span>
            </h2>
            <span className="text-[11px] text-slate-500 font-medium">Benchmark: 80%</span>
          </div>

          <div className="space-y-4">
            {skillsList.map((skill, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-semibold">{skill.label}</span>
                  <span className="text-slate-900 font-black">{skill.score}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-500`}
                    style={{ width: `${skill.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">Total Field Hours Logged</span>
            <span className="text-slate-900 font-bold">{repProfile.fieldHoursLogged} hrs / {repProfile.targetFieldHours} hrs</span>
          </div>
        </div>

        {/* AI-Identified Development Priority Card */}
        <div className="space-y-6">
          <div className="bg-white border border-purple-200 rounded-2xl p-6 shadow-xs space-y-4 bg-gradient-to-br from-purple-50/40 via-white to-pink-50/20">
            <div className="flex items-center gap-2 text-amber-700">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-bold uppercase tracking-wider">AI-IDENTIFIED DEVELOPMENT PRIORITY</h2>
            </div>

            <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
              <div className="text-sm font-black text-purple-900 mb-1">
                &ldquo;Closing the conversation &amp; Securing Commitment&rdquo;
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rep demonstrates exceptional scientific fluency (91%), but closes interactions passively. Strengthening definitive commitment requests will convert high HCP receptivity into direct initiation.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                AI RECOMMENDED ACTION DRILLS
              </span>
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-800 font-medium">1. Treatment initiation simulation drill</span>
                  <button
                    onClick={() => setActiveScreen('hcp-simulator')}
                    className="text-purple-700 hover:text-purple-900 font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Launch</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-800 font-medium">2. Competitor objection rapid-fire</span>
                  <button
                    onClick={() => setActiveScreen('hcp-simulator')}
                    className="text-purple-700 hover:text-purple-900 font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Launch</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-800 font-medium">3. Commitment closing practice module</span>
                  <button
                    onClick={() => setActiveScreen('academy')}
                    className="text-purple-700 hover:text-purple-900 font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Module</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Badges / Micro-Credentials Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                EARNED FIELD BADGES
              </span>
              <span className="text-slate-500 font-medium">Learning Progress: <strong className="text-purple-700">{repProfile.learningProgress}%</strong></span>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {repProfile.badges.map((b, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <div className="text-xl">{b.icon}</div>
                  <div className="text-[11px] font-bold text-slate-900 truncate">{b.name}</div>
                  <div className="text-[10px] text-slate-400">{b.earnedDate}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          onClick={() => setActiveScreen('academy')}
          className="text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
        >
          Explore AI Academy Learning Path →
        </button>
        <button
          onClick={() => setActiveScreen('manager')}
          className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>View Team Readiness Dashboard</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
