import React, { useEffect } from 'react';
import type { Service } from '../types';
import { X, ArrowUpRight, Check, Clock, ShieldCheck } from 'lucide-react';


interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onRequestQuote }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-y-auto text-[#14211B] text-left p-4 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 transition-colors cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
          <span className="text-[11px] sm:text-xs font-mono font-bold text-[#063B29] uppercase tracking-wider bg-[#063B29]/10 px-2.5 sm:px-3 py-1 rounded-full">
            Service Scope {service.number}
          </span>
          <span className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-500 font-mono">
            <Clock className="w-3.5 h-3.5" />
            Typical: {service.typicalTimeline}
          </span>
        </div>

        <h2 id="modal-service-title" className="text-xl sm:text-3xl font-extrabold text-[#14211B] tracking-tight mb-3 sm:mb-4">
          {service.title}
        </h2>

        <p className="text-xs sm:text-base text-[#69766E] leading-relaxed mb-5 sm:mb-6">
          {service.fullDesc}
        </p>

        {/* Sub-capabilities */}
        <div className="mb-5 sm:mb-6">
          <h4 className="text-xs font-bold text-[#14211B] uppercase tracking-wider mb-2.5 sm:mb-3">
            Service Capabilities Included
          </h4>
          <div className="space-y-2">
            {service.subservices.map((sub, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-5 sm:mb-6 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F4F6F3] border border-[#E3E7E2]">
          <h4 className="text-xs font-bold text-[#063B29] uppercase tracking-wider mb-2.5 sm:mb-3">
            Tangible Deliverables
          </h4>
          <div className="space-y-2">
            {service.deliverables.map((del, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#14211B]">
                <ShieldCheck className="w-4 h-4 text-[#063B29] shrink-0 mt-0.5" />
                <span>{del}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-6 sm:mb-8">
          <h4 className="text-xs font-bold text-[#14211B] uppercase tracking-wider mb-2">
            Core Technologies & Tooling
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-1 rounded-lg bg-gray-100 text-[11px] sm:text-xs font-mono font-semibold text-gray-800 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 sm:pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto text-xs font-semibold text-gray-500 hover:text-black cursor-pointer py-2 text-center"
          >
            Close Scope
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote(service.title);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#8FF04F] hover:bg-[#A5FF57] active:bg-[#A5FF57] text-[#04291F] font-black text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
          >
            <span>Request Quote for {service.title}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
