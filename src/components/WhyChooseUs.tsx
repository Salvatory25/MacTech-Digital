import React from 'react';
import { WHY_CHOOSE_US } from '../data/siteData';
import {
  Target,
  Users,
  Layers,
  MessageSquareCheck,
  ShieldCheck,
  LifeBuoy,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return <Target className="w-6 h-6 text-[#063B29]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#063B29]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#063B29]" />;
      case 'MessageSquareCheck':
        return <MessageSquareCheck className="w-6 h-6 text-[#063B29]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#063B29]" />;
      case 'LifeBuoy':
        return <LifeBuoy className="w-6 h-6 text-[#063B29]" />;
      default:
        return <Target className="w-6 h-6 text-[#063B29]" />;
    }
  };

  return (
    <section id="company" className="py-24 sm:py-32 bg-white text-[#14211B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4F6F3] border border-[#E3E7E2] text-xs font-semibold text-[#063B29] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8FF04F]" />
            <span className="font-mono uppercase tracking-wider text-xs">The MacTech Advantage • Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#14211B] leading-tight">
            Why Market Leaders Choose <span className="text-[#063B29]">MacTech Digital.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#69766E] leading-relaxed">
            We don't build generic, cookie-cutter templates. We engineer competitive business assets—high-converting corporate websites, resilient offline-first POS engines, and distinctive visual identities that directly drive revenue and command customer trust.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F4F6F3] border border-[#E3E7E2] hover:border-[#8FF04F] transition-all duration-300 hover:shadow-lg hover:shadow-[#063B29]/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-[#E3E7E2] flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#14211B] tracking-tight mb-2 sm:mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#69766E] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#E3E7E2]/60 flex items-center text-xs font-semibold text-[#063B29]">
                <span>Principle 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
