import React from 'react';
import type { Service } from '../types';
import { SERVICES_DATA } from '../data/siteData';
import {
  Globe,
  Smartphone,
  Cpu,
  Layout,
  Palette,
  TrendingUp,
  ArrowUpRight,
  Check,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onStartProject: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onStartProject,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#8FF04F]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#8FF04F]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#8FF04F]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#8FF04F]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#8FF04F]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#8FF04F]" />;
      default:
        return <Globe className="w-6 h-6 text-[#8FF04F]" />;
    }
  };

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-[#04291F] text-white relative hero-tile-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#063B29] border border-[#8FF04F]/25 text-xs font-semibold text-[#8FF04F] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8FF04F]" />
              <span>Full-Stack Engineering & Creative Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Digital Solutions for Ambitious Businesses.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              We combine enterprise engineering rigor with modern design aesthetics to deliver digital products that scale smoothly and win market share.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartProject}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-black tracking-wide bg-[#8FF04F] hover:bg-[#A5FF57] active:scale-[0.99] text-[#04291F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#8FF04F]/20 min-h-[46px]"
          >
            <span>Request a Custom Quote</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-[#063B29]/70 hover:bg-[#063B29] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#8FF04F]/15 hover:border-[#8FF04F]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 backdrop-blur-sm"
            >
              <div>
                {/* Top Row: Icon and Number */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#04291F] border border-[#8FF04F]/30 flex items-center justify-center p-2.5 shadow-inner group-hover:border-[#8FF04F] transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#8FF04F]/60 group-hover:text-[#8FF04F] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5 sm:mb-3 group-hover:text-[#8FF04F] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5 sm:mb-6 font-normal">
                  {service.shortDesc}
                </p>

                {/* Subservice check items */}
                <div className="space-y-2 mb-6 sm:mb-8 pt-4 border-t border-white/10">
                  {service.subservices.map((sub, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-200">
                      <Check className="w-3.5 h-3.5 text-[#8FF04F] mt-0.5 shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <button
                type="button"
                onClick={() => onSelectService(service)}
                className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#8FF04F]/15 border border-white/15 hover:border-[#8FF04F]/40 text-xs font-semibold text-gray-200 hover:text-white transition-all flex items-center justify-between cursor-pointer min-h-[44px]"
              >
                <span>Scope & Deliverables</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8FF04F]" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
