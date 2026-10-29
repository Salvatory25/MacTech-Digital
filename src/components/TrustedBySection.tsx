import React from 'react';

// Customer Logo Data Structure — Easy to replace with uploaded customer logos/images
interface CustomerLogo {
  id: string;
  name: string;
  category: string;
  accent?: string;
  svgIcon: React.ReactNode;
}

const CUSTOMER_LOGOS: CustomerLogo[] = [
  {
    id: 'msc',
    name: 'MSC International',
    category: 'Logistics & Supply',
    svgIcon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 40 40">
        <path d="M20 28v6M18 34h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 28c0-5-4-9-4-13a4 4 0 0 1 8 0c0 4-4 8-4 13z" />
        <circle cx="13" cy="14" r="3.5" />
        <circle cx="27" cy="14" r="3.5" />
        <circle cx="16" cy="7" r="3.2" />
        <circle cx="24" cy="7" r="3.2" />
        <circle cx="20" cy="3" r="3" />
        <circle cx="10" cy="19" r="2.8" />
        <circle cx="30" cy="19" r="2.8" />
      </svg>
    ),
  },
  {
    id: 'page-of-africa',
    name: 'Page of Africa',
    category: 'Safari & Hospitality',
    svgIcon: (
      <svg className="w-7 h-9 fill-current" viewBox="0 0 32 40">
        <path d="M6 4h18c2 3 5 5 5 10 0 5-6 10-8 15-2 5-3 9-5 9s-2-7-3-11c-2-4-7-5-9-10-1-3 0-8 2-13z" />
        <path d="M22 6c3 5 4 12 1 18" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 'wild-nexus',
    name: 'Wild Nexus',
    category: 'Eco-Tourism Tech',
    svgIcon: (
      <div className="w-8 h-8 rounded-xl bg-[#063B29] text-[#8FF04F] flex items-center justify-center font-black text-sm tracking-tighter">
        WN
      </div>
    ),
  },
  {
    id: 'mlengu',
    name: 'Mlengu Tours',
    category: 'Tours & Expeditions',
    svgIcon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
        <path d="M4 14c2-4 8-5 13-5s11 2 13 5c-4 1-8 2-13 2s-10-1-13-2z" />
        <path d="M16 14v8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 22c1-2 3-3 5-3h4c2 0 3 2 3 4v3h-2v-2h-2v2h-2v-2h-2v2H8v-4z" />
      </svg>
    ),
  },
  {
    id: 'solo-adventures',
    name: 'Solo Adventures',
    category: 'Adventure Travel',
    svgIcon: (
      <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold text-xs">
        🐾
      </div>
    ),
  },
  {
    id: 'sericoda',
    name: 'Sericoda African Safaris',
    category: 'Luxury Travel',
    svgIcon: (
      <svg className="w-7 h-8 fill-current" viewBox="0 0 32 36">
        <path d="M8 2h14c2 3 4 5 4 9 0 4-5 8-7 13-2 4-3 8-5 8s-2-6-3-9c-2-3-6-4-8-8-1-3 0-7 2-11z" />
        <path d="M12 8c2-3 5-3 7-1 2 2 3 5 3 5s-3-1-5 0c-2 1-3 3-5 1-1-1-1-3 0-5z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'kibo-logistics',
    name: 'Kibo Peak Freight',
    category: 'Cross-Border Freight',
    svgIcon: (
      <div className="w-8 h-8 rounded-xl bg-[#063B29] text-[#8FF04F] flex items-center justify-center font-black text-xs font-mono">
        KP
      </div>
    ),
  },
  {
    id: 'kilimo-trade',
    name: 'Kilimo Trade Group',
    category: 'Agritech & Export',
    svgIcon: (
      <div className="w-8 h-8 rounded-xl bg-emerald-800 text-emerald-200 flex items-center justify-center font-black text-xs">
        KT
      </div>
    ),
  },
];

export const TrustedBySection: React.FC = () => {
  // Seamless loop by concatenating logos
  const marqueeLogos = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

  return (
    <section id="trusted" className="py-16 sm:py-24 bg-white text-[#14211B] border-b border-[#E3E7E2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Tag with Orange Indicator */}
        <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-[#FFF5F0] border border-[#FF6B35]/20">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#FF6B35] font-mono">
            TRUSTED BY INDUSTRY LEADERS
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0D1D2D] tracking-tight mb-4">
          Powering Businesses Building the Future
        </h2>

        {/* Subtitle with Original Brand Messaging */}
        <p className="text-sm sm:text-base text-[#69766E] max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed">
          Ambitious businesses across Tanzania, East Africa, and beyond partner with MacTech Digital
          for dependable engineering, digital platforms, and software solutions.
        </p>

        {/* Motion Design Marquee Container with Gradient Edge Masks */}
        <div className="relative w-full overflow-hidden group py-4">
          {/* Left Gradient Edge Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          {/* Right Gradient Edge Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Continuous Motion Loop */}
          <div className="animate-marquee flex items-center gap-6 sm:gap-8">
            {marqueeLogos.map((logo, idx) => (
              <div
                key={`${logo.id}-${idx}`}
                className="flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-[#F8FAF7] border border-[#E3E7E2] hover:border-[#8FF04F] hover:bg-white hover:shadow-lg hover:shadow-[#063B29]/5 transition-all duration-300 transform hover:-translate-y-0.5 shrink-0 group/card cursor-pointer"
              >
                <div className="text-gray-700 group-hover/card:text-[#063B29] transition-colors shrink-0">
                  {logo.svgIcon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#14211B] leading-snug whitespace-nowrap group-hover/card:text-[#063B29] transition-colors">
                    {logo.name}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-[#69766E] uppercase whitespace-nowrap">
                    {logo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[11px] font-mono text-gray-400 tracking-wider">
            <span>← Continuous Partner Telemetry • Hover to Pause →</span>
          </div>
        </div>

      </div>
    </section>
  );
};
