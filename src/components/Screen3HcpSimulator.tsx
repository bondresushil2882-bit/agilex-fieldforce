import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Mic,
  Send,
  Sparkles,
  Bot,
  User,
  Shield,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Volume2,
  RefreshCw,
  ChevronRight,
  Brain,
  Clock
} from 'lucide-react';

interface DialogueStep {
  sender: 'hcp' | 'rep';
  text: string;
  sentiment?: 'skeptical' | 'neutral' | 'interested' | 'convinced';
  scoreBadge?: string;
}

export const Screen3HcpSimulator: React.FC = () => {
  const { selectedHcp, setActiveScreen, setSimulationResult, setRepProfile, setCallOutcomeState } = useApp();

  const isMehta = selectedHcp.id === 'hcp-1' || selectedHcp.name.includes('Mehta');
  const isRao = selectedHcp.id === 'hcp-2' || selectedHcp.name.includes('Rao');
  const isKapoor = selectedHcp.id === 'hcp-3' || selectedHcp.name.includes('Kapoor');

  // Initial prompt based on persona
  const getInitialStatement = () => {
    if (isRao) {
      return "I have only about 5 minutes before my next OPD session starts. What is the single most compelling clinical number that justifies reconsidering my current protocol?";
    }
    if (isKapoor) {
      return "Thanks for connecting on video. I'm seeing an increase in co-mutated second-line cases that fail standard therapy. How does AgileX approach patient biomarker stratification?";
    }
    return "I've reviewed the efficacy data and it looks promising, but I'm concerned about the safety profile, particularly in elderly patients with multiple comorbidities. What evidence do you have?";
  };

  const [dialogueHistory, setDialogueHistory] = useState<DialogueStep[]>([
    {
      sender: 'hcp',
      sentiment: 'skeptical',
      text: getInitialStatement()
    }
  ]);

  const [currentTurn, setCurrentTurn] = useState<number>(0);
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [userTurnResponses, setUserTurnResponses] = useState<string[]>([]);
  const [isListeningMic, setIsListeningMic] = useState<boolean>(false);

  // Turn 0 Quick Options per Persona
  const getTurn0Options = () => {
    if (isRao) {
      return [
        {
          id: 'rao-takeaway',
          label: 'State bottom-line PFS number first',
          text: "Dr. Rao, bottom line: 4.2 month median PFS extension over standard of care, achieved with a simple oral once-daily dosing regimen that requires no extra clinic titration.",
          scoreContribution: 94,
          hcpNextReply: "That 4.2-month margin is meaningful. If I switch patients, how soon do you observe stabilization, and what does the pharmacy onboarding turnaround look like?"
        },
        {
          id: 'rao-generic',
          label: 'Provide broad background overview (Weak)',
          text: "AgileX OncoCare represents an innovative breakthrough in modern molecular oncology with a novel mechanism of action.",
          scoreContribution: 70,
          hcpNextReply: "I'm on a tight clock here. I don't need background biology—what is the specific progression-free survival delta compared to standard inhibitor therapy?"
        }
      ];
    }
    if (isKapoor) {
      return [
        {
          id: 'kapoor-discovery',
          label: 'Ask about institutional biomarker panel',
          text: "That co-mutated population is challenging, Dr. Kapoor. In our Phase III biomarker sub-analysis, patients harboring secondary mutations showed a 58% overall response rate. Which genomic panels are you routinely ordering?",
          scoreContribution: 95,
          hcpNextReply: "We run NGS panels focusing on co-occurring alterations. That 58% response rate in refractory patients is intriguing. Do you have case studies in pre-treated cohorts?"
        },
        {
          id: 'kapoor-generic',
          label: 'State overall trial efficacy only (Weak)',
          text: "Overall trial efficacy was 62% across all enrolled oncology patients regardless of mutation status.",
          scoreContribution: 74,
          hcpNextReply: "Overall numbers are fine, but in this academic clinic, I treat refractory patients with specific resistance mutations. What data do you have in my biomarker subgroup?"
        }
      ];
    }
    // Default: Dr. Mehta
    return [
      {
        id: 'mehta-safety',
        label: 'Address safety evidence in 65+ cohort',
        text: "I completely appreciate that concern, Dr. Mehta. In our landmark Phase III trial, 34% of enrolled patients were over 65 with renal comorbidities, showing a discontinuation rate under 4% and no unexpected adverse events.",
        scoreContribution: 93,
        hcpNextReply: "That renal tolerance rate is certainly lower than what we see with standard kinase inhibitors. But how do you handle co-prescribing when patients are already on multiple cardiovascular medications?"
      },
      {
        id: 'mehta-generic',
        label: 'State efficacy without acknowledging safety (Weak)',
        text: "AgileX OncoCare has demonstrated strong overall efficacy across all clinical endpoints.",
        scoreContribution: 72,
        hcpNextReply: "That's helpful, but I'm asking specifically about safety in elderly patients with comorbidities. What clinical evidence supports that population?"
      },
      {
        id: 'mehta-population',
        label: 'Inquire on proportion of comorbid patients',
        text: "That is a critical clinical perspective, Dr. Mehta. What proportion of your current second-line oncology patients present with mild-to-moderate renal or cardiac comorbidities?",
        scoreContribution: 89,
        hcpNextReply: "Easily around 40-50% in this tertiary referral center. That's why I need concrete reassurance on renal tolerance before initiating elderly patients."
      },
      {
        id: 'mehta-rwe',
        label: 'Share 18-month real-world registry evidence',
        text: "We actually published 18-month real-world registry data from 1,200 non-interventional cases confirming that clinical trial tolerability translates directly into everyday elderly community practice.",
        scoreContribution: 90,
        hcpNextReply: "Real-world registry data is helpful. Can you confirm if dose modification algorithms are straightforward for community oncologists?"
      }
    ];
  };

  // Turn 1 Quick Options
  const getTurn1Options = () => {
    return [
      {
        id: 'turn1-commit',
        label: 'Propose candidate patient initiation protocol',
        text: "Dosing is straightforward: oral once-daily with standard labs at weeks 2 and 4. Given your comorbid cohort, would you be open to evaluating AgileX OncoCare in your next suitable candidate and reviewing their tolerance together in two weeks?",
        scoreContribution: 95,
        hcpNextReply: "That seems very pragmatic. Let's start with my next patient meeting those clinical criteria and review the lab work together."
      },
      {
        id: 'turn1-monograph',
        label: 'Offer clinical monograph & schedule follow-up',
        text: "I can share the complete elderly sub-analysis monograph today and schedule a dedicated MSL discussion next Wednesday to review the pharmacokinetic data.",
        scoreContribution: 84,
        hcpNextReply: "Send the monograph through, and I'll review the elderly renal subgroup data before our next discussion."
      }
    ];
  };

  const handleSelectOption = (opt: { text: string; scoreContribution: number; hcpNextReply: string }) => {
    const updatedHistory: DialogueStep[] = [
      ...dialogueHistory,
      { sender: 'rep', text: opt.text, scoreBadge: `${opt.scoreContribution}% Quality` }
    ];
    setDialogueHistory(updatedHistory);
    setUserTurnResponses(prev => [...prev, opt.text]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (currentTurn === 0) {
        setDialogueHistory([
          ...updatedHistory,
          {
            sender: 'hcp',
            sentiment: 'interested',
            text: opt.hcpNextReply
          }
        ]);
        setCurrentTurn(1);
      } else {
        setDialogueHistory([
          ...updatedHistory,
          {
            sender: 'hcp',
            sentiment: 'convinced',
            text: opt.hcpNextReply
          }
        ]);
        setCurrentTurn(2);
      }
    }, 1000);
  };

  const handleSendCustomText = () => {
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');

    const updatedHistory: DialogueStep[] = [
      ...dialogueHistory,
      { sender: 'rep', text: userText, scoreBadge: 'AI Evaluated' }
    ];
    setDialogueHistory(updatedHistory);
    setUserTurnResponses(prev => [...prev, userText]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      // Adaptive challenge if user gave weak answer
      const isWeak = userText.length < 35 || userText.toLowerCase().includes('good') || (!userText.toLowerCase().includes('safety') && !userText.toLowerCase().includes('pfs') && !userText.toLowerCase().includes('elderly'));

      let reply = "That provides valuable clarity. How would you apply that evidence to my candidate patient population?";
      if (isWeak && currentTurn === 0) {
        reply = "That's helpful, but I'm asking specifically about concrete data in elderly patients. What evidence supports that specific population?";
      }

      if (currentTurn === 0) {
        setDialogueHistory([
          ...updatedHistory,
          {
            sender: 'hcp',
            sentiment: isWeak ? 'skeptical' : 'interested',
            text: reply
          }
        ]);
        setCurrentTurn(1);
      } else {
        setDialogueHistory([
          ...updatedHistory,
          {
            sender: 'hcp',
            sentiment: 'convinced',
            text: "That addresses my clinical concern clearly. I have two patients coming in tomorrow who fit this exact profile; let's evaluate them for AgileX initiation."
          }
        ]);
        setCurrentTurn(2);
      }
    }, 1100);
  };

  const handleFinishSimulation = () => {
    const computedResult = {
      score: 86,
      scientificAccuracy: 91,
      hcpUnderstanding: 88,
      objectionHandling: 82,
      communicationClarity: 85,
      engagement: 87,
      userTurnResponses: userTurnResponses,
      hcpId: selectedHcp.id
    };

    setSimulationResult(computedResult);

    // Update rep profile state
    setRepProfile(prev => ({
      ...prev,
      overallReadiness: Math.min(96, prev.overallReadiness + 3),
      completedSimulations: prev.completedSimulations + 1,
      skills: {
        ...prev.skills,
        objectionHandling: Math.min(95, prev.skills.objectionHandling + 4),
        scientificCommunication: Math.min(98, prev.skills.scientificCommunication + 2)
      }
    }));

    // Setup Call Outcome state
    setCallOutcomeState({
      hcpId: selectedHcp.id,
      hcpName: selectedHcp.name,
      actualOutcome: `HCP acknowledged clinical data for ${selectedHcp.recommendedBrand} and agreed to evaluate candidates.`,
      repScore: 86,
      aiLearnsQuote: `Evidence-led discussions addressed ${selectedHcp.name}'s specific clinical objections with 86% quality score.`,
      nextFollowupDays: 7,
      nextChannel: selectedHcp.recommendedChannel,
      nextContent: 'Phase III Comorbid Patient Monograph + Initiation Support Kit',
      personaUpdates: {
        evidenceDelta: 'Evidence Engagement: ↑ High (+8 pts)',
        safetyDelta: 'Safety Objection: Addressed & Validated',
        followupPropensity: 'Follow-up Propensity: High (89%)'
      }
    });

    setActiveScreen('ai-coach');
  };

  const toggleMic = () => {
    setIsListeningMic(!isListeningMic);
    if (!isListeningMic) {
      setTimeout(() => {
        setInputText("Dr. Mehta, in our Phase III trial, patients over 65 maintained comparable tolerance without dose-limiting renal toxicities.");
        setIsListeningMic(false);
      }, 1500);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Simulation Header & Scenario Metadata in Light Theme */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
              PERSONA-AWARE AI SIMULATOR
            </span>
            <span className="text-xs text-slate-300">•</span>
            <span className="text-xs text-slate-700 font-bold">Scenario: {selectedHcp.recommendedBrand} — Treatment Initiation</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-500 flex-wrap">
            <span>HCP: <strong className="text-slate-900">{selectedHcp.name}</strong></span>
            <span>•</span>
            <span>Persona: <strong className="text-purple-700">{selectedHcp.engagementPersona.interactionStyle}</strong></span>
            <span>•</span>
            <span>Difficulty: <strong className="text-amber-700">Advanced</strong></span>
            <span>•</span>
            <span>Window: <strong className="text-slate-700">{selectedHcp.engagementPersona.typicalWindow}</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium">Turn {Math.min(currentTurn + 1, 2)} of 2</span>
          {currentTurn >= 2 && (
            <button
              onClick={handleFinishSimulation}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>View AI Coach Evaluation</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Roleplay Area */}
      <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs flex flex-col min-h-[480px]">
        {/* HCP Virtual Avatar Bar */}
        <div className="p-4 bg-slate-50/80 border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-2xl relative shadow-2xs">
              {selectedHcp.avatar}
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white"></span>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                <span>{selectedHcp.name}</span>
                <span className="text-[10px] text-purple-700 bg-purple-50 px-2 py-0.2 rounded font-semibold border border-purple-200/60">
                  Adaptive AI Persona
                </span>
              </div>
              <div className="text-[11px] text-slate-500">
                {selectedHcp.specialty} • {selectedHcp.hospital}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 text-[11px]">HCP Disposition:</span>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded capitalize ${
              currentTurn === 0
                ? 'bg-amber-100 text-amber-800 border border-amber-200'
                : currentTurn === 1
                ? 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
            }`}>
              {currentTurn === 0 ? 'Skeptical (Safety Inquiry)' : currentTurn === 1 ? 'Engaged & Probing' : 'Receptive to Initiation'}
            </span>
          </div>
        </div>

        {/* Conversation Stream in Clean White Aesthetic */}
        <div className="flex-1 p-6 space-y-5 overflow-y-auto max-h-[380px] bg-[#fcfbfe]">
          {dialogueHistory.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3.5 ${item.sender === 'rep' ? 'justify-end' : 'justify-start'}`}
            >
              {item.sender === 'hcp' && (
                <div className="w-9 h-9 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-lg flex-shrink-0 shadow-2xs">
                  {selectedHcp.avatar}
                </div>
              )}

              <div
                className={`max-w-xl rounded-2xl p-4 text-xs leading-relaxed space-y-1.5 shadow-xs ${
                  item.sender === 'rep'
                    ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-none shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between gap-3 text-[10px] mb-0.5 opacity-90">
                  <span className="font-bold">{item.sender === 'rep' ? 'Priya Shah (You)' : selectedHcp.name}</span>
                  {item.scoreBadge && (
                    <span className="bg-white/20 text-white px-1.5 py-0.5 rounded font-bold">
                      {item.scoreBadge}
                    </span>
                  )}
                </div>
                <p className="text-sm font-normal">{item.text}</p>
              </div>

              {item.sender === 'rep' && (
                <div className="w-9 h-9 rounded-xl bg-purple-700 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-2xs">
                  PS
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-lg">
                {selectedHcp.avatar}
              </div>
              <div className="bg-white border border-slate-200 text-slate-500 text-xs px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping"></span>
                <span>{selectedHcp.name} is evaluating your response...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input & Action Panel */}
        <div className="p-4 bg-white border-t border-slate-200 space-y-3">
          {currentTurn < 2 ? (
            <>
              {/* Quick response options bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-bold flex items-center gap-1.5 text-purple-700">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    AI Recommended Consultative Options:
                  </span>
                  <span>Click to reply instantly</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {(currentTurn === 0 ? getTurn0Options() : getTurn1Options()).map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt)}
                      disabled={isTyping}
                      className="text-left p-3 rounded-xl bg-slate-50 hover:bg-purple-50/70 border border-slate-200 hover:border-purple-300 transition-all text-xs text-slate-800 group flex items-start justify-between gap-3 disabled:opacity-50 cursor-pointer"
                    >
                      <div>
                        <div className="text-[11px] font-bold text-purple-700 group-hover:text-purple-900 mb-0.5">
                          {opt.label}
                        </div>
                        <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                          {opt.text}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 flex-shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Free-text response & microphone simulation */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleMic}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isListeningMic
                      ? 'bg-rose-600 text-white animate-pulse'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                  title={isListeningMic ? 'Listening...' : 'Simulate voice speech-to-text'}
                >
                  <Mic className="w-4 h-4" />
                </button>

                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendCustomText();
                  }}
                  placeholder={`Or type custom response to ${selectedHcp.name}...`}
                  disabled={isTyping}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-colors"
                />

                <button
                  onClick={handleSendCustomText}
                  disabled={!inputText.trim() || isTyping}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </div>
            </>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Simulation Complete</h4>
                  <p className="text-[11px] text-slate-600">
                    {selectedHcp.name} acknowledged safety tolerability and agreed to review candidates for treatment initiation.
                  </p>
                </div>
              </div>
              <button
                onClick={handleFinishSimulation}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to AI Coach Evaluation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
