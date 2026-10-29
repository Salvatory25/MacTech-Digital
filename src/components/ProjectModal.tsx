import React, { useEffect } from 'react';
import type { Project } from '../types';
import { X, ArrowUpRight, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';


interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-y-auto text-[#14211B] text-left p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
          aria-label="Close specification modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Status & Category */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#063B29]/10 text-[#063B29]">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            {project.status}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 id="modal-project-title" className="text-2xl sm:text-4xl font-extrabold text-[#14211B] tracking-tight">
          {project.title}
        </h2>
        <p className="text-base font-semibold text-[#063B29] mt-1 mb-6">
          {project.subtitle}
        </p>

        {/* Executive Summary */}
        <p className="text-sm sm:text-base text-[#69766E] leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 bg-[#F4F6F3] p-5 rounded-2xl border border-[#E3E7E2]">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-left">
              <span className="text-[11px] text-[#69766E] block">{m.label}</span>
              <span className="text-base sm:text-lg font-black text-[#14211B]">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Problem and Solution */}
        <div className="space-y-4 mb-8">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wide block mb-1">
              Operational Friction / Problem
            </span>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
            <span className="text-xs font-bold text-emerald-900 uppercase tracking-wide block mb-1">
              MacTech Engineering Architecture
            </span>
            <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-[#14211B] uppercase tracking-wide mb-3">
            Core Technical Capabilities
          </h4>
          <div className="space-y-2">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-[#14211B] uppercase tracking-wide mb-3">
            Technology Stack & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl bg-gray-100 text-xs font-mono font-semibold text-gray-800 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Verified System Specification</span>
          </div>

          <div className="flex items-center gap-3">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{project.title === 'PdfYako' ? 'Visit pdfyako.com' : 'Open Platform'}</span>
              </a>
            )}

            <button
              type="button"
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="px-6 py-2.5 rounded-full bg-[#063B29] hover:bg-[#04291F] text-white font-bold text-xs tracking-wide transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>Inquire About Similar Build</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
