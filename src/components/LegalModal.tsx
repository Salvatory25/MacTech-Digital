import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';


interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-y-auto text-[#14211B] text-left p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
          aria-label="Close legal terms modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#063B29] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Data Protection & Privacy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14211B] mb-4">
              Privacy Policy
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>MacTech Digital Solutions Limited</strong> ("MacTech Digital", "we", "our")
                is committed to maintaining the confidentiality and integrity of all personal, business,
                and technical data entrusted to us by our clients and website visitors.
              </p>

              <h4 className="font-bold text-[#14211B] text-sm pt-2">1. Information We Collect</h4>
              <p>
                When you submit a project inquiry or schedule a consultation, we collect contact details such
                as your name, email address, phone number, company name, and project scope notes.
                We do not sell, rent, or monetize client information to third parties.
              </p>

              <h4 className="font-bold text-[#14211B] text-sm pt-2">2. Confidentiality & Non-Disclosure</h4>
              <p>
                All proprietary concept notes, system architecture specifications, and commercial plans submitted
                to MacTech Digital are treated as strictly confidential. We readily sign mutual Non-Disclosure
                Agreements (NDAs) prior to formal discovery sessions.
              </p>

              <h4 className="font-bold text-[#14211B] text-sm pt-2">3. Storage & Security</h4>
              <p>
                Data is stored in secure, encrypted environments adhering to modern industry security standards.
                You may request data deletion or correction at any time by contacting us at {COMPANY_INFO.email}.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#063B29] uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Commercial Terms</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14211B] mb-4">
              Terms of Service
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>
                These terms govern software engineering, web design, and digital consulting services provided
                by <strong>MacTech Digital Solutions Limited</strong> in Arusha, Tanzania.
              </p>

              <h4 className="font-bold text-[#14211B] text-sm pt-2">1. Scope of Work & Deliverables</h4>
              <p>
                Every client engagement operates under an explicit Statement of Work (SOW) defining milestones,
                technical deliverables, testing protocols, and timeline projections.
              </p>

              <h4 className="font-bold text-[#14211B] text-sm pt-2">2. Intellectual Property & Ownership</h4>
              <p>
                Upon complete settlement of agreed contractual invoices, 100% of custom developed source code,
                database schemas, design system files, and production assets become the exclusive intellectual
                property of the client.
              </p>

              <h4 className="font-bold text-[#14211B] text-sm pt-2">3. Warranty & Defect Remediation</h4>
              <p>
                We stand behind our engineering with a complimentary post-launch warranty period to remediate any
                latent defects or software bugs occurring within agreed functional specifications.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-gray-200 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#063B29] text-white text-xs font-bold"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
