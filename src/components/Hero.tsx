import React, { useState } from 'react';
import {
  ArrowUpRight,
  Play,
  CheckCircle2,
  Activity,
  ShieldCheck,
} from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
  onOpenMauzoChapDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExploreWork,
  onOpenMauzoChapDemo,
}) => {
  const [activeTab, setActiveTab] = useState<'Projects' | 'Velocity' | 'Milestones' | 'Impact'>('Projects');

  // Dynamic telemetry metrics based on selected tab
  const impactStats = {
    Projects: {
      headline: '48+ Delivered Solutions',
      growth: '+100% Milestone Success',
      points: '10,80 45,68 85,75 125,50 165,60 205,28 245,45 285,18 325,35 365,15',
      peakBadge: '100% Milestone Success',
      peakX: 205,
      peakY: 28,
      recentProject: {
        code: 'PY',
        name: 'PdfYako.com Document Suite',
        date: 'Production Deployed',
        status: '100% Wasm Core',
        metric: '100k+ Users',
      },
    },
    Velocity: {
      headline: '2-4 Week Average Sprint',
      growth: '3x Faster Time to Market',
      points: '10,85 50,70 95,65 140,55 180,42 225,38 270,22 315,30 365,10',
      peakBadge: 'Sub-Second Speeds',
      peakX: 270,
      peakY: 22,
      recentProject: {
        code: 'MC',
        name: 'MauzoChap POS Engine',
        date: 'Production Deployed',
        status: 'Offline SQLite Sync',
        metric: '50+ Branches',
      },
    },
    Milestones: {
      headline: '250,000+ End Users',
      growth: '+48.6% Annual Growth',
      points: '10,75 45,65 80,72 120,40 160,55 200,30 240,48 280,25 320,38 360,20',
      peakBadge: 'Zero Downtime',
      peakX: 200,
      peakY: 30,
      recentProject: {
        code: 'HL',
        name: 'Horizon Logistics ERP',
        date: 'Enterprise Deployed',
        status: 'TRA EFD Verified',
        metric: '99.8% Accuracy',
      },
    },
    Impact: {
      headline: '120+ Growing Businesses',
      growth: '99.4% Client Retention',
      points: '10,90 50,80 100,68 150,58 200,45 250,35 300,28 350,15 370,8',
      peakBadge: '99.4% Client Satisfaction',
      peakX: 300,
      peakY: 28,
      recentProject: {
        code: 'KS',
        name: 'KilimoSmart Agritech App',
        date: 'Regional Scaling',
        status: 'M-Pesa Integrated',
        metric: '14,000+ Farmers',
      },
    },
  };

  const currentStat = impactStats[activeTab];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#04291F] hero-tile-grid overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32 flex flex-col justify-between"
    >
      {/* Ambient background glow layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#063B29] rounded-full blur-[140px] pointer-events-none opacity-80" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#8FF04F]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Monogram Brand Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#063B29]/90 border border-[#8FF04F]/35 text-xs text-gray-200 mb-8 backdrop-blur-md shadow-md">
          <img
            src="/mactech-logo.png"
            alt="MacTech Digital Monogram"
            className="w-5 h-5 object-contain filter brightness-125 contrast-125 drop-shadow-[0_0_5px_rgba(143,240,79,0.6)]"
          />
          <span className="font-bold text-[#8FF04F]">MacTech Digital</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-200">Bespoke Software, Web & POS Solutions in Tanzania</span>
        </div>

        {/* High-Converting Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-5xl mx-auto">
          We Build Digital Solutions That{' '}
          <span className="relative inline-block text-white">
            Sell, Scale
            <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-[#8FF04F] to-transparent rounded-full opacity-80" />
          </span>{' '}
          <span className="text-[#8FF04F]">& Empower Growth.</span>
        </h1>

        {/* Persuasive copy written to sell */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
          From high-converting corporate websites and offline-first POS engines to enterprise mobile apps,
          MacTech Digital engineers custom technology that attracts customers, automates operations, and accelerates revenue.
        </p>

        {/* Primary and secondary CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onStartProject}
            className="px-8 py-4 rounded-full text-base font-extrabold bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] transition-all duration-200 transform hover:-translate-y-1 shadow-xl shadow-[#8FF04F]/25 flex items-center gap-2 cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={onExploreWork}
            className="px-7 py-4 rounded-full text-base font-semibold text-white bg-[#063B29]/70 hover:bg-[#063B29] border border-white/20 hover:border-[#8FF04F]/50 transition-all duration-200 backdrop-blur-md flex items-center gap-2.5 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white text-white" />
            <span>Explore Shipped Work</span>
          </button>
        </div>

        {/* Credibility highlights: Real company value propositions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-gray-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#8FF04F]" />
            <span>48+ Completed Digital Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#8FF04F]" />
            <span>100% Code & Intellectual Property Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#8FF04F]" />
            <span>Enterprise SLAs & Continuous Support</span>
          </div>
        </div>
      </div>

      {/* Layered Product Showcase — Transformed with real company impact & credibility */}
      <div className="relative mt-14 lg:mt-20 max-w-5xl mx-auto px-4 w-full">
        <div className="relative mx-auto flex items-center justify-center">

          {/* ========================================================= */}
          {/* FLOATING CARD 1: Top Left (48+ Projects Accomplished) */}
          {/* ========================================================= */}
          <div className="hidden sm:block absolute -top-8 left-2 lg:left-8 z-20 animate-float-slow">
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/40 border border-white/60 min-w-[210px] text-left transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between gap-3">
                <span className="text-2xl font-extrabold text-[#14211B] tracking-tight">
                  48+ Projects
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#8FF04F]/25 text-[#063B29] text-[11px] font-bold flex items-center gap-0.5">
                  ↗ 100% Delivered
                </span>
              </div>
              <p className="text-xs text-[#69766E] font-medium mt-1">
                Web, Mobile & POS Systems Shipped
              </p>
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-emerald-800 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Client Verification: 100% Passed</span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* FLOATING CARD 2: Top Right (120+ Happy Clients / Retention) */}
          {/* ========================================================= */}
          <div className="hidden sm:block absolute top-6 right-2 lg:right-6 z-20 animate-float-reverse">
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/40 border border-white/60 min-w-[220px] text-left transform rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#69766E] font-medium">
                  Happy Clients & Partners
                </p>
                <span className="px-2 py-0.5 rounded-full bg-[#8FF04F]/30 text-[#063B29] text-[11px] font-bold">
                  ★ 99.4%
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#14211B] tracking-tight">
                  120+ Businesses
                </span>
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[11px] text-gray-500 border-t border-gray-100 pt-2">
                <span>Regional Reach</span>
                <span className="font-mono text-emerald-800 font-bold">Tanzania & Global</span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CENTRAL SMARTPHONE / PLATFORM SHOWCASE (MacTech Impact Engine) */}
          {/* ========================================================= */}
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] bg-[#0A3D2C] rounded-[40px] p-3 sm:p-4 shadow-2xl shadow-black/70 border-4 border-[#08422F] backdrop-blur-xl z-10 transition-transform hover:scale-[1.01]">
            <div className="bg-[#05261C] rounded-[32px] p-5 sm:p-6 text-white border border-[#8FF04F]/15 relative overflow-hidden">
              
              {/* Dynamic Island / Speaker notch */}
              <div className="w-24 h-4 bg-black/60 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-950 mr-2" />
                <div className="w-2.5 h-2.5 rounded-full bg-black" />
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-4 px-1">
                <span>Arusha Hub</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-[#8FF04F] font-bold">● Active Online</span>
                  <div className="w-4 h-2 rounded-sm border border-gray-400 flex items-center p-0.5">
                    <div className="w-full h-full bg-[#8FF04F] rounded-xs" />
                  </div>
                </div>
              </div>

              {/* Screen Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-[#8FF04F]" />
                  MacTech Velocity Telemetry
                </span>
                <div className="px-2.5 py-0.5 rounded-full bg-black/40 text-[10px] font-mono text-[#8FF04F] border border-white/10">
                  REAL-TIME TELEMETRY
                </div>
              </div>

              {/* Timeframe pill tabs */}
              <div className="flex items-center justify-between bg-black/40 p-1 rounded-full mb-5 border border-white/10">
                {(['Projects', 'Velocity', 'Milestones', 'Impact'] as const).map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#8FF04F] text-[#04291F] shadow-sm font-bold'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Metric Title & Growth */}
              <div className="text-left mb-3">
                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider font-mono">
                  Verified Engineering Track Record
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {currentStat.headline}
                  </span>
                  <span className="text-xs text-[#8FF04F] font-semibold">
                    {currentStat.growth}
                  </span>
                </div>
              </div>

              {/* High-fidelity Vector Sparkline & Trend Chart */}
              <div className="relative h-28 w-full mt-4 mb-5">
                <svg
                  viewBox="0 0 380 100"
                  fill="none"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    <linearGradient id="heroLimeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8FF04F" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#8FF04F" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Gradient Area under curve */}
                  <polygon
                    points={`10,100 ${currentStat.points} 370,100`}
                    fill="url(#heroLimeGradient)"
                  />

                  {/* Main Wavy Line */}
                  <polyline
                    fill="none"
                    stroke="#8FF04F"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={currentStat.points}
                  />

                  {/* Secondary comparison line */}
                  <polyline
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                    points="10,90 50,78 100,82 150,68 200,65 250,55 300,50 370,42"
                  />

                  {/* Highlight pill pin at peak */}
                  <g transform={`translate(${currentStat.peakX - 55}, ${currentStat.peakY - 26})`}>
                    <rect
                      width="110"
                      height="20"
                      rx="10"
                      fill="#8FF04F"
                      className="drop-shadow-md"
                    />
                    <text
                      x="55"
                      y="14"
                      textAnchor="middle"
                      fill="#04291F"
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="system-ui"
                    >
                      {currentStat.peakBadge}
                    </text>
                    <circle cx="55" cy="26" r="3.5" fill="#8FF04F" stroke="#04291F" strokeWidth="2" />
                  </g>
                </svg>
              </div>

              {/* Replaced Devil Ron with Real Shipped Project Milestone */}
              <div className="bg-black/45 rounded-2xl p-3 border border-white/10 flex items-center justify-between text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-[#8FF04F] p-0.5 flex items-center justify-center text-xs font-extrabold text-[#04291F]">
                    {currentStat.recentProject.code}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{currentStat.recentProject.name}</p>
                    <p className="text-[10px] text-gray-400 font-mono">{currentStat.recentProject.date}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-[#8FF04F] font-mono block">
                    {currentStat.recentProject.status}
                  </span>
                  <p className="text-[9px] text-gray-300 font-mono">{currentStat.recentProject.metric}</p>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-32 h-1 bg-white/20 rounded-full mx-auto mt-5" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* FLOATING CARD 3: Left Bottom (MauzoChap Retail Engine) */}
          {/* ========================================================= */}
          <div className="hidden md:block absolute -bottom-6 -left-6 lg:-left-12 z-20 animate-float-slow">
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/50 border border-white/60 min-w-[230px] text-left transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center -space-x-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-emerald-700 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  TZ
                </div>
                <div className="w-7 h-7 rounded-full bg-amber-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  KE
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  UG
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-900 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  50+
                </div>
                <span className="text-[11px] font-semibold text-gray-700 pl-3">Active Outlets</span>
              </div>

              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                MauzoChap Commercial Engine
              </div>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-xl sm:text-2xl font-extrabold text-[#14211B] tracking-tight">
                  100k+ Daily Txns
                </span>
                <span className="text-xs font-bold text-emerald-600">
                  TRA EFD
                </span>
              </div>

              <button
                type="button"
                onClick={onOpenMauzoChapDemo}
                className="w-full mt-3 py-2 rounded-xl bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] font-bold text-xs tracking-wide transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Explore Platform</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};
