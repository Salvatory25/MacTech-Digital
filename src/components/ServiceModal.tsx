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
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-y-auto text-[#14211B] text-left p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-[#063B29] uppercase tracking-wider bg-[#063B29]/10 px-3 py-1 rounded-full">
            Service Scope {service.number}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-500 font-mono">
            <Clock className="w-3.5 h-3.5" />
            Typical Timeline: {service.typicalTimeline}
          </span>
        </div>

        <h2 id="modal-service-title" className="text-2xl sm:text-3xl font-extrabold text-[#14211B] tracking-tight mb-4">
          {service.title}
        </h2>

        <p className="text-sm sm:text-base text-[#69766E] leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Sub-capabilities */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#14211B] uppercase tracking-wider mb-3">
            Service Capabilities Included
          </h4>
          <div className="space-y-2">
            {service.subservices.map((sub, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-6 p-5 rounded-2xl bg-[#F4F6F3] border border-[#E3E7E2]">
          <h4 className="text-xs font-bold text-[#063B29] uppercase tracking-wider mb-3">
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
        <div className="mb-8">
          <h4 className="text-xs font-bold text-[#14211B] uppercase tracking-wider mb-2.5">
            Core Technologies & Tooling
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-gray-100 text-xs font-mono font-semibold text-gray-800 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-gray-500 hover:text-black cursor-pointer"
          >
            Close Scope
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote(service.title);
            }}
            className="px-6 py-3 rounded-full bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] font-bold text-xs tracking-wide transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Request Quote for {service.title}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
