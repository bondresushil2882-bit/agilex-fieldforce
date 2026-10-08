import React from 'react';
import { useApp, ScreenType } from '../context/AppContext';
import {
  LayoutDashboard,
  CalendarCheck,
  Target,
  Bot,
  Compass,
  Award,
  GraduationCap,
  Users,
  LineChart,
  Repeat,
  Sparkles,
  MapPin,
  Brain,
  Sliders,
  CheckCircle2,
  FileText
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { activeScreen, setActiveScreen } = useApp();

  const navSections = [
    {
      title: 'COMMAND CENTER',
      items: [
        { id: 'dashboard' as ScreenType, label: 'Dashboard', icon: LayoutDashboard },
      ]
    },
    {
      title: 'FIELD FORCE',
      items: [
        { id: 'field-planner' as ScreenType, label: 'AI Field Planner', icon: MapPin, badge: 'Optimiser' },
        { id: 'hcp-opportunity' as ScreenType, label: 'HCP Opportunities', icon: Target },
        { id: 'hcp-intelligence' as ScreenType, label: 'HCP Engagement Intelligence', icon: Brain, badge: 'Engine 1' },
        { id: 'next-best-action' as ScreenType, label: 'Next Best Action', icon: Compass },
      ]
    },
    {
      title: 'AI ACADEMY',
      items: [
        { id: 'prepare-call' as ScreenType, label: 'Call Preparation', icon: FileText },
        { id: 'hcp-simulator' as ScreenType, label: 'AI HCP Simulator', icon: Bot, badge: 'Roleplay' },
        { id: 'academy' as ScreenType, label: 'Learning Hub', icon: GraduationCap },
      ]
    },
    {
      title: 'PERFORMANCE',
      items: [
        { id: 'my-performance' as ScreenType, label: 'My Performance', icon: Award },
        { id: 'call-outcome' as ScreenType, label: 'Call Outcome & Debrief', icon: CheckCircle2 },
        { id: 'manager' as ScreenType, label: 'Team Dashboard', icon: Users },
      ]
    },
    {
      title: 'INSIGHTS & STRATEGY',
      items: [
        { id: 'capacity-simulator' as ScreenType, label: 'Capacity Simulator', icon: Sliders, badge: 'What-If' },
        { id: 'commercial-insights' as ScreenType, label: 'Commercial Insights', icon: LineChart },
        { id: 'ai-learning-loop' as ScreenType, label: 'AI Continuous Loop', icon: Repeat },
      ]
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200/90 flex flex-col flex-shrink-0 text-slate-700 min-h-screen select-none shadow-[1px_0_4px_rgba(0,0,0,0.02)]">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/20 text-white font-black text-sm">
            AX
          </div>
          <div>
            <div className="text-slate-900 font-extrabold tracking-tight text-base leading-tight flex items-center gap-1.5">
              AgileX <span className="text-purple-700 text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-purple-50 border border-purple-200">AI</span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium">FieldForce Optimisation</div>
          </div>
        </div>
      </div>

      {/* Demo Mode Badge */}
      <div className="px-5 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-slate-700 font-semibold text-[11px]">Demo Mode Active</span>
        </div>
        <span className="text-[10px] text-purple-700 font-semibold bg-purple-100/70 px-2 py-0.5 rounded border border-purple-200/60">
          Competition Case
        </span>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {navSections.map((sec, idx) => (
          <div key={idx} className="space-y-1">
            <div className="px-3 text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-1">
              {sec.title}
            </div>
            {sec.items.map((item, itemIdx) => {
              const Icon = item.icon;
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={itemIdx}
                  onClick={() => setActiveScreen(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all ${
                    isActive
                      ? 'bg-purple-50 text-purple-800 font-semibold border border-purple-200/80 shadow-xs'
                      : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-purple-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                      isActive
                        ? 'bg-purple-200/60 text-purple-800'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Strategic Value Proposition Footer */}
      <div className="p-4 bg-slate-50/70 border-t border-slate-100">
        <div className="rounded-xl p-3 bg-white border border-purple-100 text-xs shadow-xs">
          <div className="flex items-center gap-1.5 text-purple-700 font-bold mb-1 text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Core AgileX Proposition</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            &ldquo;AI helps every representative spend every field hour on the right HCP, at the right time, with the right engagement approach.&rdquo;
          </p>
        </div>
      </div>
    </aside>
  );
};
