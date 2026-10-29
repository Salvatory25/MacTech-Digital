import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Check,
  Sparkles,
  ArrowRight,
  Send,
  HelpCircle,
  Copy,
  CheckCheck,
} from 'lucide-react';

interface ProjectEstimatorProps {
  currency: 'USD' | 'TZS';
  onToggleCurrency: () => void;
  onApplyEstimateToInquiry: (details: {
    service: string;
    budget: string;
    description: string;
  }) => void;
}

interface ProjectTypeOption {
  id: string;
  name: string;
  serviceCategory: string;
  basePriceUSD: number;
  baseTimelineWeeks: number;
  description: string;
  recommendedStack: string[];
}

interface AddonFeature {
  id: string;
  name: string;
  category: 'Payments' | 'Compliance' | 'Sync' | 'Communication' | 'Security';
  priceUSD: number;
  timelineDays: number;
  description: string;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  currency,
  onToggleCurrency,
  onApplyEstimateToInquiry,
}) => {
  const USD_TO_TZS = 2650;

  // Project Types
  const projectTypes: ProjectTypeOption[] = [
    {
      id: 'web-corporate',
      name: 'High-Impact Corporate Website',
      serviceCategory: 'Web Design & Development',
      basePriceUSD: 1400,
      baseTimelineWeeks: 3,
      description: 'Custom React/Next.js frontend, ultra-responsive layout, SEO architecture, CMS integration, and sub-second load times.',
      recommendedStack: ['Next.js / Vite', 'TypeScript', 'Tailwind CSS', 'Vercel / Cloudflare'],
    },
    {
      id: 'custom-saas',
      name: 'Scalable SaaS & Web Application',
      serviceCategory: 'Custom Software Development',
      basePriceUSD: 3600,
      baseTimelineWeeks: 6,
      description: 'End-to-end cloud platform, PostgreSQL database, authentication, multi-tenant billing, and REST/GraphQL APIs.',
      recommendedStack: ['React', 'Node.js / Go', 'PostgreSQL', 'Docker', 'AWS / DigitalOcean'],
    },
    {
      id: 'pos-retail',
      name: 'MauzoChap-Style POS & Retail System',
      serviceCategory: 'Custom Software Development',
      basePriceUSD: 2900,
      baseTimelineWeeks: 5,
      description: 'Offline-first cashier terminal, Bluetooth receipting, barcode scanning, stock ledger, and branch cloud sync.',
      recommendedStack: ['React / Electron', 'SQLite Offline Sync', 'Node.js', 'ESC/POS Printer API'],
    },
    {
      id: 'mobile-app',
      name: 'Cross-Platform Mobile App (iOS & Android)',
      serviceCategory: 'Mobile App Development',
      basePriceUSD: 3800,
      baseTimelineWeeks: 6,
      description: 'Native-feel Flutter or React Native application for App Store & Google Play with offline caching and push notifications.',
      recommendedStack: ['Flutter / React Native', 'Firebase / Supabase', 'REST API', 'Push Notifications'],
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design System & Interactive Prototype',
      serviceCategory: 'UI/UX Design',
      basePriceUSD: 1200,
      baseTimelineWeeks: 3,
      description: 'Figma component library, user journey wireframes, high-fidelity clickable prototype, and developer design tokens.',
      recommendedStack: ['Figma', 'Design Systems', 'Usability Audits', 'Interactive Prototyping'],
    },
    {
      id: 'brand-identity',
      name: 'Complete Brand Identity & Visual Strategy',
      serviceCategory: 'Branding & Graphic Design',
      basePriceUSD: 950,
      baseTimelineWeeks: 2,
      description: 'Custom monogram/logo suite, brand guidelines manual, typography rules, corporate stationery, and social media kit.',
      recommendedStack: ['Adobe Illustrator', 'Brand Guidelines Book', 'Vector Asset Suite'],
    },
  ];

  // Technical Add-ons
  const addonFeatures: AddonFeature[] = [
    {
      id: 'momo-payments',
      name: 'East African Mobile Money & Card Gateway',
      category: 'Payments',
      priceUSD: 550,
      timelineDays: 4,
      description: 'Direct integration with M-Pesa, Tigo Pesa, Airtel Money, and Visa/Mastercard payment links.',
    },
    {
      id: 'tra-compliance',
      name: 'TRA EFD / VFD Fiscal Tax Receipt Engine',
      category: 'Compliance',
      priceUSD: 650,
      timelineDays: 5,
      description: 'Tanzania Revenue Authority certified fiscal receipt generation with verified QR code signatures.',
    },
    {
      id: 'offline-sync',
      name: 'Offline-First SQLite Local Data Sync',
      category: 'Sync',
      priceUSD: 480,
      timelineDays: 4,
      description: 'Continuous operation without internet with automated conflict resolution upon reconnection.',
    },
    {
      id: 'whatsapp-sms',
      name: 'Automated WhatsApp & SMS Notification Gateway',
      category: 'Communication',
      priceUSD: 420,
      timelineDays: 3,
      description: 'Instant customer alerts, payment receipts, order tracking, and appointment reminders.',
    },
    {
      id: 'multilingual',
      name: 'Bilingual Engine (English & Swahili Localization)',
      category: 'Communication',
      priceUSD: 350,
      timelineDays: 3,
      description: 'Dual-language UI toggling with localized formatting, currency, and date conventions.',
    },
    {
      id: 'roles-security',
      name: 'Enterprise Role-Based Access Control (RBAC) & Audit Logs',
      category: 'Security',
      priceUSD: 400,
      timelineDays: 3,
      description: 'Cashier/manager permission levels, activity audit trails, and biometric/2FA security.',
    },
  ];

  // State
  const [selectedTypeId, setSelectedTypeId] = useState<string>('custom-saas');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([
    'momo-payments',
    'whatsapp-sms',
  ]);
  const [timelineUrgency, setTimelineUrgency] = useState<'standard' | 'accelerated' | 'squad'>('standard');
  const [copiedQuote, setCopiedQuote] = useState(false);

  const selectedType = projectTypes.find((p) => p.id === selectedTypeId) || projectTypes[0];

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const calculation = useMemo(() => {
    let subtotalUSD = selectedType.basePriceUSD;
    let totalAddonDays = 0;

    selectedAddonIds.forEach((addonId) => {
      const addon = addonFeatures.find((a) => a.id === addonId);
      if (addon) {
        subtotalUSD += addon.priceUSD;
        totalAddonDays += addon.timelineDays;
      }
    });

    let urgencyMultiplier = 1;
    let weeksMultiplier = 1;

    if (timelineUrgency === 'accelerated') {
      urgencyMultiplier = 1.25; // 25% sprint velocity fee
      weeksMultiplier = 0.7; // 30% faster delivery
    } else if (timelineUrgency === 'squad') {
      urgencyMultiplier = 1.45;
      weeksMultiplier = 1.0;
    }

    const finalUSD = Math.round(subtotalUSD * urgencyMultiplier);
    const finalTZS = Math.round(finalUSD * USD_TO_TZS);

    const baseDays = selectedType.baseTimelineWeeks * 7;
    const calculatedWeeks = Math.max(
      2,
      Math.round(((baseDays + totalAddonDays) / 7) * weeksMultiplier)
    );

    return {
      finalUSD,
      finalTZS,
      calculatedWeeks,
      selectedAddonCount: selectedAddonIds.length,
      subtotalUSD,
    };
  }, [selectedType, selectedAddonIds, timelineUrgency]);

  // Format numbers
  const formattedBudget =
    currency === 'USD'
      ? `$${calculation.finalUSD.toLocaleString()}`
      : `TZS ${calculation.finalTZS.toLocaleString()}`;

  // WhatsApp pre-filled text
  const whatsappQuoteUrl = useMemo(() => {
    const selectedAddonNames = selectedAddonIds
      .map((id) => addonFeatures.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const urgencyLabel =
      timelineUrgency === 'accelerated'
        ? 'Accelerated Sprint (Priority Delivery)'
        : timelineUrgency === 'squad'
        ? 'Dedicated Engineering Squad'
        : 'Standard Agile Delivery';

    const message = `Hello MacTech Digital Team,\n\nI just generated an interactive project estimate on your website:\n\n• Solution: ${selectedType.name}\n• Category: ${selectedType.serviceCategory}\n• Add-on Modules: ${selectedAddonNames || 'Core features only'}\n• Delivery Track: ${urgencyLabel}\n• Estimated Timeline: ~${calculation.calculatedWeeks} weeks\n• Estimated Budget: ${formattedBudget} (${currency})\n\nI would like to discuss next steps and project kickoff.`;

    return `https://wa.me/255627274168?text=${encodeURIComponent(message)}`;
  }, [selectedType, selectedAddonIds, timelineUrgency, calculation, formattedBudget, currency]);

  // Apply to Inquiry Form
  const handleTransferToForm = () => {
    const selectedAddonNames = selectedAddonIds
      .map((id) => addonFeatures.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const description = `Interactive Estimate Specification:\n- Solution: ${selectedType.name}\n- Add-ons: ${selectedAddonNames || 'None'}\n- Urgency: ${timelineUrgency}\n- Calculated Scope: ~${calculation.calculatedWeeks} weeks\n- Estimated Budget: ${formattedBudget}`;

    onApplyEstimateToInquiry({
      service: selectedType.serviceCategory,
      budget: formattedBudget,
      description,
    });
  };

  const handleCopyQuote = () => {
    const text = `MacTech Digital Project Estimate:\n- Solution: ${selectedType.name}\n- Estimated Cost: ${formattedBudget}\n- Estimated Timeline: ~${calculation.calculatedWeeks} weeks\n- WhatsApp Contact: +255 627 274 168\n- Generated at mactechdigital.co.tz`;
    navigator.clipboard.writeText(text);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  return (
    <section id="estimator" className="py-20 sm:py-28 bg-[#032118] text-white relative overflow-hidden border-t border-b border-[#8FF04F]/15">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#8FF04F]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#063B29]/40 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#063B29] border border-[#8FF04F]/30 text-xs font-mono text-[#8FF04F] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Scope & Cost Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Calculate Your Solution <span className="text-[#8FF04F]">In Real Time.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            Configure your technical requirements, select add-on modules, choose your delivery pace,
            and instantly preview estimated investment and sprint timeline in USD or TZS.
          </p>

          {/* Interactive Currency Switcher Pill */}
          <div className="mt-6 inline-flex items-center gap-2 bg-[#063B29]/80 border border-[#8FF04F]/25 p-1 rounded-full text-xs font-mono">
            <span className="text-gray-400 pl-3">Active Currency:</span>
            <button
              type="button"
              onClick={onToggleCurrency}
              className={`px-3 py-1 rounded-full font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-[#8FF04F] text-[#04291F] shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <button
              type="button"
              onClick={onToggleCurrency}
              className={`px-3 py-1 rounded-full font-bold transition-all ${
                currency === 'TZS'
                  ? 'bg-[#8FF04F] text-[#04291F] shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              TZS (TSh)
            </button>
          </div>
        </div>

        {/* Main Grid: Left Controls (7 cols) + Right Live Calculation Card (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Step 1: Select Solution Type */}
            <div className="bg-[#063B29]/40 border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#8FF04F] text-[#04291F] font-bold text-xs flex items-center justify-center font-mono">
                  1
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Select Core Solution Architecture
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const isSelected = type.id === selectedTypeId;
                  const priceLabel =
                    currency === 'USD'
                      ? `From $${type.basePriceUSD.toLocaleString()}`
                      : `From TZS ${(type.basePriceUSD * USD_TO_TZS).toLocaleString()}`;

                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedTypeId(type.id)}
                      className={`p-4 rounded-2xl text-left border transition-all cursor-pointer relative ${
                        isSelected
                          ? 'bg-[#063B29] border-[#8FF04F] shadow-[0_0_15px_rgba(143,240,79,0.2)]'
                          : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/10'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#8FF04F] text-[#04291F] flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}

                      <div className="font-bold text-sm text-white pr-6 mb-1">
                        {type.name}
                      </div>

                      <p className="text-xs text-gray-400 line-clamp-2 mb-3">
                        {type.description}
                      </p>

                      <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/10 font-mono">
                        <span className="text-[#8FF04F] font-semibold">{priceLabel}</span>
                        <span className="text-gray-400">~{type.baseTimelineWeeks} wks</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Technical Add-ons */}
            <div className="bg-[#063B29]/40 border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#8FF04F] text-[#04291F] font-bold text-xs flex items-center justify-center font-mono">
                    2
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Add Specialized Enterprise Modules
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#8FF04F]">
                  {selectedAddonIds.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonFeatures.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  const priceLabel =
                    currency === 'USD'
                      ? `+$${addon.priceUSD}`
                      : `+TZS ${(addon.priceUSD * USD_TO_TZS).toLocaleString()}`;

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? 'bg-[#063B29] border-[#8FF04F]/70 text-white'
                          : 'bg-white/5 border-white/10 hover:border-white/20 text-gray-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md mt-0.5 shrink-0 flex items-center justify-center border transition-colors ${
                          isChecked
                            ? 'bg-[#8FF04F] border-[#8FF04F] text-[#04291F]'
                            : 'border-white/30 bg-transparent'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-xs font-bold text-white mb-0.5">
                          <span className="truncate pr-2">{addon.name}</span>
                        </div>
                        <p className="text-[11px] text-gray-400 line-clamp-2 mb-1.5 leading-snug">
                          {addon.description}
                        </p>
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-[#8FF04F] font-semibold">{priceLabel}</span>
                          <span className="text-gray-400">+{addon.timelineDays} days</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Velocity */}
            <div className="bg-[#063B29]/40 border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#8FF04F] text-[#04291F] font-bold text-xs flex items-center justify-center font-mono">
                  3
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Choose Delivery Track & Velocity
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setTimelineUrgency('standard')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    timelineUrgency === 'standard'
                      ? 'bg-[#063B29] border-[#8FF04F] text-white shadow-sm'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/25'
                  }`}
                >
                  <div className="text-xs font-bold text-white mb-1">Standard Agile</div>
                  <div className="text-[11px] text-gray-400 mb-2">Regular two-week milestones</div>
                  <div className="text-[10px] font-mono text-[#8FF04F]">Standard Rate</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTimelineUrgency('accelerated')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                    timelineUrgency === 'accelerated'
                      ? 'bg-[#063B29] border-[#8FF04F] text-white shadow-sm'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/25'
                  }`}
                >
                  <span className="absolute -top-2 right-3 px-2 py-0.5 rounded-full bg-[#8FF04F] text-[#04291F] text-[9px] font-bold uppercase tracking-wider">
                    Fast Track
                  </span>
                  <div className="text-xs font-bold text-white mb-1">Accelerated Sprint</div>
                  <div className="text-[11px] text-gray-400 mb-2">Priority resource allocation</div>
                  <div className="text-[10px] font-mono text-[#8FF04F]">+25% Sprint Velocity</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTimelineUrgency('squad')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    timelineUrgency === 'squad'
                      ? 'bg-[#063B29] border-[#8FF04F] text-white shadow-sm'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/25'
                  }`}
                >
                  <div className="text-xs font-bold text-white mb-1">Dedicated Squad</div>
                  <div className="text-[11px] text-gray-400 mb-2">Ongoing embedded team</div>
                  <div className="text-[10px] font-mono text-[#8FF04F]">Enterprise Monthly</div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Live Output & Action Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-gradient-to-b from-[#063B29] to-[#04291F] border-2 border-[#8FF04F]/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/40 text-left relative overflow-hidden">
              {/* Subtle top lime glow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8FF04F]/15 border border-[#8FF04F]/30 text-xs font-mono text-[#8FF04F] mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Recalculated Quote</span>
              </div>

              {/* Solution Title */}
              <div className="mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400 block">
                  Configured Solution
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-0.5">
                  {selectedType.name}
                </h4>
                <span className="text-xs text-[#8FF04F] font-medium">
                  {selectedType.serviceCategory}
                </span>
              </div>

              {/* Price & Timeline Display */}
              <div className="grid grid-cols-2 gap-4 py-6 my-6 border-t border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                    Estimated Investment
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#8FF04F] tracking-tight">
                    {formattedBudget}
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {currency === 'USD'
                      ? `≈ TZS ${calculation.finalTZS.toLocaleString()}`
                      : `≈ $${calculation.finalUSD.toLocaleString()} USD`}
                  </span>
                </div>

                <div className="border-l border-white/10 pl-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                    Estimated Delivery
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                    ~{calculation.calculatedWeeks}
                    <span className="text-xs font-normal text-gray-300">weeks</span>
                  </div>
                  <span className="text-[10px] text-emerald-300 font-mono">
                    {timelineUrgency === 'accelerated' ? '⚡ Accelerated Delivery' : 'Agile Sprint Milestones'}
                  </span>
                </div>
              </div>

              {/* Milestone Roadmap Breakdown */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold text-gray-200 tracking-wide block uppercase font-mono">
                  Sprint Delivery Breakdown
                </span>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-gray-300">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FF04F]" />
                      <span>Phase 1: Architecture, Scope & UI/UX</span>
                    </span>
                    <span className="font-mono text-gray-400">Week 1 - 2</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FF04F]" />
                      <span>Phase 2: Core Engineering & Modules</span>
                    </span>
                    <span className="font-mono text-gray-400">Week 2 - {Math.max(2, calculation.calculatedWeeks - 1)}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FF04F]" />
                      <span>Phase 3: QA, Security Audit & Cloud Launch</span>
                    </span>
                    <span className="font-mono text-gray-400">Final Week</span>
                  </div>
                </div>
              </div>

              {/* Recommended Stack Chips */}
              <div className="mb-8">
                <span className="text-[11px] font-mono text-gray-400 block mb-2">
                  Engineered With:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedType.recommendedStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-black/30 border border-white/10 text-[11px] font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                {/* 1. Direct WhatsApp Dispatch */}
                <a
                  href={whatsappQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-2xl bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] font-extrabold text-sm tracking-wide transition-all shadow-lg shadow-[#8FF04F]/25 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Send className="w-4 h-4 fill-[#04291F] transition-transform group-hover:translate-x-0.5" />
                  <span>Send Quote to WhatsApp (+255 627 274 168)</span>
                </a>

                {/* 2. Apply to Form */}
                <button
                  type="button"
                  onClick={handleTransferToForm}
                  className="w-full py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wide border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply Specification to Project Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* 3. Copy Quote */}
                <button
                  type="button"
                  onClick={handleCopyQuote}
                  className="w-full py-2 px-4 rounded-xl text-gray-400 hover:text-white text-[11px] font-mono transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedQuote ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-[#8FF04F]" />
                      <span className="text-[#8FF04F]">Quote Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Quote Summary</span>
                    </>
                  )}
                </button>
              </div>

              {/* Assurance footnote */}
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-gray-400 flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#8FF04F] shrink-0" />
                <span>
                  Estimates are indicative and finalized following free technical discovery. 100% IP ownership.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
