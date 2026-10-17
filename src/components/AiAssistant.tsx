import React, { useState } from 'react';
import { DEFAULT_FAULT_PHOTO } from '../data/mockData';
import { AiDiagnosisResult } from '../types';

interface AiAssistantProps {
  onMatchCategory: (catSlug: string) => void;
  onSelectZone: (zone: string) => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ onMatchCategory, onSelectZone }) => {
  const [problemText, setProblemText] = useState('');
  const [vicinity, setVicinity] = useState('Near Bhopal');
  const [urgency, setUrgency] = useState('standard');
  const [budget, setBudget] = useState('all');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string>(DEFAULT_FAULT_PHOTO);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diagnosis, setDiagnosis] = useState<AiDiagnosisResult | null>(null);

  const quickChips = [
    { label: '“AC running but not cooling”', query: 'AC running continuously but not cooling the room at all. Fan works fine.' },
    { label: '“Washing machine knocking noise”', query: 'Front load washing machine making loud knocking noise and won’t spin drain cycle.' },
    { label: '“Sparking kitchen socket & MCB”', query: 'Main kitchen switchboard sparked with burning smell, tripping the MCB repeatedly.' },
    { label: '“EV Scooter battery not charging”', query: 'Ather 450X EV Scooter battery not taking charge after rain trip, red charger error.' },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
      setHasPhoto(true);
    }
  };

  const removePhoto = () => {
    setHasPhoto(false);
    setPhotoUrl(DEFAULT_FAULT_PHOTO);
  };

  const handleRunAi = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const q = problemText.toLowerCase();

      let result: AiDiagnosisResult = {
        title: "Diagnosed Issue: AC Refrigerant Leak & Low Cooling",
        category: "AC Repair",
        categorySlug: "ac",
        urgency: urgency === 'urgent' ? 'Immediate (under 2 hours)' : 'Standard (within 24 hours)',
        estimatedCost: budget === 'budget' ? '₹399 - ₹650' : '₹399 Inspection + parts as needed',
        rationale: "Matched because technician Amit Patel & Mukesh Chouhan hold Inverter AC gas charging certification, operate across Arera Colony / MP Nagar, and can arrive quickly.",
        safetyTip: "Turn off the outdoor breaker to protect the compressor from dry cycling.",
        recommendedProId: "pro-1"
      };

      if (q.includes('wash') || q.includes('spin') || q.includes('drum') || q.includes('drain') || q.includes('noise')) {
        result = {
          title: "Diagnosed Issue: Front-Load Washing Machine Drum / Spider Assembly Failure",
          category: "Washing Machine",
          categorySlug: "washing",
          urgency: "Scheduled Visit",
          estimatedCost: "₹349 Visit + Damper replacement",
          rationale: "Matched Priya Sundaram: Bosch & IFB certified appliance specialist with genuine damper kits and drum bearing diagnostic tools.",
          safetyTip: "Do not run another spin cycle to avoid damaging the outer tub casing.",
          recommendedProId: "pro-8"
        };
      } else if (q.includes('spark') || q.includes('wire') || q.includes('socket') || q.includes('mcb') || q.includes('shock') || q.includes('electric')) {
        result = {
          title: "Diagnosed Issue: Electrical Neutral Short Circuit & MCB Load Overload",
          category: "Electricians",
          categorySlug: "electrician",
          urgency: "High Priority Safety Hazard",
          estimatedCost: "₹299 Inspection + MCB component",
          rationale: "Matched Rajesh Sharma: Master Electrician with 9 years experience, specializing in concealed wiring shorts and Schneider/Havells distribution panels.",
          safetyTip: "Keep the tripped breaker in the OFF position until technician verifies line resistance.",
          recommendedProId: "pro-5"
        };
      } else if (q.includes('ev') || q.includes('scooter') || q.includes('battery') || q.includes('ather') || q.includes('ola') || q.includes('bike') || q.includes('brake')) {
        result = {
          title: "Diagnosed Issue: EV Battery Management System (BMS) Thermal / Fault Lockout",
          category: "Mechanics",
          categorySlug: "mechanic",
          urgency: "Same Day Diagnostic",
          estimatedCost: "₹349 On-site Scanner & Reset",
          rationale: "Matched Vikram Verma: Bhopal's premier certified EV technician with dedicated diagnostic tablets for Ather, Ola, TVS iQube, and Hero Electric.",
          safetyTip: "Disconnect portable charger from wall socket and keep vehicle in shaded dry area.",
          recommendedProId: "pro-3"
        };
      } else if (q.includes('leak') || q.includes('pipe') || q.includes('plumb') || q.includes('water') || q.includes('tap') || q.includes('sink')) {
        result = {
          title: "Diagnosed Issue: Concealed Pipe Joint Seepage & Pressure Drop",
          category: "Plumbers",
          categorySlug: "plumber",
          urgency: "Within 24 Hours",
          estimatedCost: "₹249 Inspection + CPVC repair",
          rationale: "Matched Mohammed Arif: 14 years experience using non-destructive acoustic leak sensors in Bhopal homes.",
          safetyTip: "Shut off the overhead main gate valve if water is pooling near electrical conduits.",
          recommendedProId: "pro-4"
        };
      }

      setDiagnosis(result);
      setIsAnalyzing(false);
      onMatchCategory(result.categorySlug);
      if (vicinity !== 'Near Bhopal') {
        onSelectZone(vicinity);
      }
    }, 600);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full pt-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ffffff] via-[#eff4ff] to-[#e5eeff] p-6 md:p-8 shadow-lg border border-[#dce9ff]">
        {/* Soft atmospheric gradient blurs */}
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#dbe1ff]/40 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-[#6ffbbe]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left Form Area */}
          <div className="max-w-2xl flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-xs font-semibold mb-3">
              <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
              <span>AI-Powered Diagnostics Assistant</span>
            </div>

            <h1 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl text-[#0b1c30] tracking-tight font-bold">
              Tell us what&apos;s wrong. We&apos;ll match the verified specialist.
            </h1>
            <p className="text-sm text-[#434655] mt-2">
              Describe your breakdown or upload a photo. Our contextual rule-engine analyzes faults, brands, and urgency to find technician matches in Bhopal instantly.
            </p>

            {/* Quick Problem Chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {quickChips.map((chip, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setProblemText(chip.query)}
                  className="px-3 py-1.5 bg-white text-[#0b1c30] rounded-lg text-xs font-medium shadow-sm hover:bg-[#dbe1ff] transition-colors cursor-pointer border border-[#e2e8f0]"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Problem Description Textarea */}
            <div className="mt-4 space-y-3">
              <textarea
                value={problemText}
                onChange={(e) => setProblemText(e.target.value)}
                rows={3}
                className="w-full p-3.5 rounded-xl bg-white text-[#0b1c30] placeholder:text-[#565e74] shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] border border-[#cbd5e1]"
                placeholder="Describe your issue in plain words (e.g., 'My Voltas inverter AC displays error E5 and blows room temperature air', or 'Plumbing water pipe joint leaking under kitchen sink')..."
              />

              {/* 3 Parameter Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#434655] mb-1">Bhopal Vicinity</label>
                  <select
                    value={vicinity}
                    onChange={(e) => setVicinity(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white text-[#0b1c30] text-xs font-medium shadow-sm border border-[#cbd5e1] focus:outline-none"
                  >
                    <option value="Near Bhopal">All Bhopal</option>
                    <option value="MP Nagar, Bhopal">MP Nagar</option>
                    <option value="Arera Colony, Bhopal">Arera Colony</option>
                    <option value="Kolar Road, Bhopal">Kolar Road</option>
                    <option value="Indrapuri, Bhopal">Indrapuri / BHEL</option>
                    <option value="Hoshangabad Rd, Bhopal">Hoshangabad Rd</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#434655] mb-1">Job Urgency</label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white text-[#0b1c30] text-xs font-medium shadow-sm border border-[#cbd5e1] focus:outline-none"
                  >
                    <option value="urgent">Today - Urgent (within 2h)</option>
                    <option value="standard">Within 24 Hours</option>
                    <option value="flexible">Flexible / Weekend</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#434655] mb-1">Expected Budget</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white text-[#0b1c30] text-xs font-medium shadow-sm border border-[#cbd5e1] focus:outline-none"
                  >
                    <option value="all">Any Budget</option>
                    <option value="budget">&lt; ₹500 (Basic fix)</option>
                    <option value="medium">₹500 - ₹1,500</option>
                    <option value="premium">₹1,500+ (Major overhaul)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Photo / Vision & Run Action */}
          <div className="w-full lg:w-80 shrink-0 bg-white p-4 rounded-xl shadow-md border border-[#e5eeff] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-title-sm text-sm font-bold text-[#0b1c30]">Fault Photo / Vision</span>
                <span className="text-[10px] font-bold text-[#006242] bg-[#bdffdb] px-2 py-0.5 rounded-full">
                  Vision Enabled
                </span>
              </div>
              <p className="text-xs text-[#434655] mb-3">
                Upload snapshot of broken pipe, error display, or leaking unit.
              </p>

              {/* Upload Dropzone */}
              {!hasPhoto ? (
                <label className="cursor-pointer bg-[#eff4ff] hover:bg-[#e5eeff] transition-all rounded-lg p-4 flex flex-col items-center justify-center text-center group min-h-[115px] border border-dashed border-[#b4c5ff]">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <span className="material-symbols-outlined text-[#2563eb] text-[32px] group-hover:scale-110 transition-transform">
                    add_a_photo
                  </span>
                  <span className="text-xs font-semibold text-[#0b1c30] mt-1">Tap to browse photo</span>
                  <span className="text-[11px] text-[#565e74]">PNG, JPG up to 5MB</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setHasPhoto(true);
                      setPhotoUrl(DEFAULT_FAULT_PHOTO);
                    }}
                    className="mt-2 text-[10px] text-[#2563eb] hover:underline font-semibold"
                  >
                    Use Sample Fault Photo
                  </button>
                </label>
              ) : (
                <div className="bg-[#eff4ff] rounded-lg p-2.5 flex flex-col items-center text-center border border-[#b4c5ff]">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={photoUrl}
                      alt="Fault photo diagnostics inspection"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="absolute top-1 right-1 bg-white/90 text-[#ba1a1a] rounded-full p-0.5 shadow-sm hover:bg-white"
                    >
                      <span className="material-symbols-outlined text-[14px]">close</span>
                    </button>
                  </div>
                  <span className="text-xs text-[#006242] font-semibold mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Photo Attached (Vision Loaded)
                  </span>
                </div>
              )}

              <div className="mt-2 text-center text-[11px] text-[#565e74]">
                Rule-based context assistant ready for Servelink MVP
              </div>
            </div>

            <div className="mt-4 pt-2 border-t border-[#e5eeff]">
              <button
                type="button"
                onClick={handleRunAi}
                disabled={isAnalyzing}
                className="w-full py-3 bg-[#2563eb] hover:bg-[#004ac6] text-white text-sm font-semibold rounded-xl shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer disabled:opacity-60"
              >
                {isAnalyzing ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span>
                    <span>Analyzing Fault...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">auto_fix_high</span>
                    <span>AI Help Me / Match Expert</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic AI Assistant Result Panel */}
        {diagnosis && (
          <div className="mt-6 pt-4 bg-white p-4 sm:p-5 rounded-xl shadow-md border border-[#2563eb]/20 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-3 border-b border-[#e5eeff]">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-title-sm text-base font-bold text-[#0b1c30]">
                      {diagnosis.title}
                    </h3>
                    <span className="px-2.5 py-0.5 bg-[#dae2fd] text-[#131b2e] rounded-full text-xs font-bold">
                      {diagnosis.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#434655] mt-1">
                    {diagnosis.rationale}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs">
                    <span className="text-[#006242] font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      {diagnosis.urgency}
                    </span>
                    <span className="text-[#2563eb] font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">payments</span>
                      {diagnosis.estimatedCost}
                    </span>
                    <span className="text-[#ba1a1a] flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-[16px]">health_and_safety</span>
                      Safety: {diagnosis.safetyTip}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end md:self-start">
                <button
                  type="button"
                  onClick={() => {
                    onMatchCategory(diagnosis.categorySlug);
                    const el = document.getElementById('results-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3 py-1.5 bg-[#2563eb] text-white text-xs font-semibold rounded-lg hover:bg-[#004ac6] transition-colors cursor-pointer"
                >
                  View Matched Pros
                </button>
                <button
                  type="button"
                  onClick={() => setDiagnosis(null)}
                  className="text-[#737686] hover:text-[#0b1c30] p-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
