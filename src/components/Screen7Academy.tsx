import React from 'react';
import { useApp } from '../context/AppContext';
import { MOCK_LEARNING_MODULES } from '../data/mockData';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Clock,
  CheckCircle2,
  Lock,
  Play,
  ArrowRight,
  Target,
  ChevronRight
} from 'lucide-react';

export const Screen7Academy: React.FC = () => {
  const { setActiveScreen } = useApp();

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Banner in Clean Light Enterprise Style */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            ADAPTIVE SKILL ACCELERATION
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Your AI Learning Path
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
            Curated continuous learning calibrated dynamically against real field simulation gaps, objections encountered in the clinic, and upcoming commercial launch priorities.
          </p>
        </div>

        <button
          onClick={() => setActiveScreen('hcp-simulator')}
          className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Launch AI Roleplay</span>
        </button>
      </div>

      {/* AI Personalized Recommendation Callout */}
      <div className="bg-white border border-purple-200 rounded-2xl p-5 shadow-xs bg-gradient-to-br from-purple-50/50 via-white to-pink-50/20 flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0 text-purple-700">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-purple-700">
            AI RECOMMENDATION ENGINE
          </div>
          <p className="text-xs md:text-sm text-slate-900 font-bold">
            &ldquo;Based on your recent simulation performance, we recommend focusing on objection handling and closing.&rdquo;
          </p>
          <div className="text-[11px] text-slate-500">
            Suggested immediate focus: <strong className="text-purple-800 font-semibold">Module 4: Handling Safety &amp; Renal Comorbidity Objections</strong>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span>COMMERCIAL CAPABILITY CURRICULUM</span>
          </h2>
          <span className="text-xs text-slate-500 font-medium">3 of 7 Modules Completed (62%)</span>
        </div>

        <div className="space-y-3">
          {MOCK_LEARNING_MODULES.map((mod) => {
            const isCompleted = mod.status === 'Completed';
            const isRecommended = mod.status === 'Recommended';

            return (
              <div
                key={mod.id}
                className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isRecommended
                    ? 'bg-purple-50/60 border-purple-300 shadow-2xs'
                    : isCompleted
                    ? 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    : 'bg-slate-50/40 border-slate-200/60 opacity-60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : isRecommended ? (
                      <div className="w-5 h-5 rounded-full bg-purple-100 border border-purple-300 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                      </div>
                    ) : (
                      <Lock className="w-4 h-4 text-slate-400" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xs font-bold text-slate-900">{mod.title}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 font-medium">
                        {mod.category}
                      </span>
                      <span className="text-[10px] text-purple-700 font-bold">
                        {mod.brand}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {mod.duration}
                      </span>
                      <span>•</span>
                      <span>Difficulty: <strong className="text-slate-700">{mod.difficulty}</strong></span>
                      {isCompleted && (
                        <>
                          <span>•</span>
                          <span className="text-emerald-700 font-bold">Score: {mod.score}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-end flex-shrink-0">
                  {isRecommended ? (
                    <button
                      onClick={() => setActiveScreen('hcp-simulator')}
                      className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Start Simulation Drill</span>
                    </button>
                  ) : isCompleted ? (
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Completed
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                      Locked
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
