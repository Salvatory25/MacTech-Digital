import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#032118] text-gray-400 border-t border-[#8FF04F]/15 relative overflow-hidden">
      {/* Top subtle lime accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#8FF04F]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-14 border-b border-white/10">
          
          {/* Brand Info & Mission */}
          <div className="sm:col-span-2 lg:col-span-4 text-left">
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="inline-flex items-center gap-3 mb-4 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#063B29] to-[#04291F] border border-[#8FF04F]/40 flex items-center justify-center p-1 shadow-inner group-hover:border-[#8FF04F] transition-colors shrink-0">
                <img
                  src="/mactech-logo.png"
                  alt="MacTech Digital Official Monogram"
                  className="w-full h-full object-contain filter brightness-125 contrast-125 drop-shadow-[0_0_8px_rgba(143,240,79,0.5)]"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight flex items-center gap-1.5">
                  MacTech <span className="text-[#8FF04F]">Digital</span>
                </span>
                <span className="text-[10px] tracking-wider text-[#8FF04F]/70 font-mono uppercase -mt-1">
                  Solutions Limited
                </span>
              </div>
            </a>

            <p className="text-sm text-gray-300 leading-relaxed font-medium mb-3 sm:mb-4">
              "{COMPANY_INFO.tagline}"
            </p>

            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Engineering high-performance corporate websites, scalable SaaS backends, mobile applications,
              and Point-of-Sale software for businesses in Tanzania and worldwide.
            </p>

            {/* Social Links with inline SVGs — 40px touch targets */}
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href={COMPANY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#8FF04F] hover:text-[#8FF04F] active:bg-white/10 flex items-center justify-center text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href={COMPANY_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#8FF04F] hover:text-[#8FF04F] active:bg-white/10 flex items-center justify-center text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href={COMPANY_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#8FF04F] hover:text-[#8FF04F] active:bg-white/10 flex items-center justify-center text-gray-300 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#8FF04F] hover:text-[#8FF04F] active:bg-white/10 flex items-center justify-center text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Solutions & Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleSmoothScroll(e, '#solutions')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Web Design & Development</span>
                  <ArrowUpRight className="w-3 h-3 text-transparent group-hover:text-[#8FF04F]" />
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleSmoothScroll(e, '#solutions')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Mobile App Development</span>
                  <ArrowUpRight className="w-3 h-3 text-transparent group-hover:text-[#8FF04F]" />
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleSmoothScroll(e, '#solutions')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Custom Software & ERP</span>
                  <ArrowUpRight className="w-3 h-3 text-transparent group-hover:text-[#8FF04F]" />
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleSmoothScroll(e, '#solutions')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>UI/UX Design Systems</span>
                  <ArrowUpRight className="w-3 h-3 text-transparent group-hover:text-[#8FF04F]" />
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleSmoothScroll(e, '#solutions')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Branding & Graphic Identity</span>
                  <ArrowUpRight className="w-3 h-3 text-transparent group-hover:text-[#8FF04F]" />
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleSmoothScroll(e, '#solutions')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Digital Marketing & Technical SEO</span>
                  <ArrowUpRight className="w-3 h-3 text-transparent group-hover:text-[#8FF04F]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Proprietary Platforms */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleSmoothScroll(e, '#products')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>MauzoChap POS</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pdfyako.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>PdfYako.com</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-transparent group-hover:text-[#8FF04F]" />
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  onClick={(e) => handleSmoothScroll(e, '#products')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>InvoicePro Beta</span>
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleSmoothScroll(e, '#products')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Tusome360 Concept</span>
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleSmoothScroll(e, '#products')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>KilimoSmart Hub</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Arusha Hub
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-[#8FF04F] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <Mail className="w-4 h-4 text-[#8FF04F] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <Phone className="w-4 h-4 text-[#8FF04F] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <MessageSquare className="w-4 h-4 text-[#8FF04F] shrink-0" />
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8FF04F] flex items-center gap-1 transition-colors"
                >
                  <span>WhatsApp: {COMPANY_INFO.phone}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#8FF04F]" />
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#063B29] border border-[#8FF04F]/25 text-[11px] text-[#8FF04F] font-mono">
                <span className="w-2 h-2 rounded-full bg-[#8FF04F] animate-pulse" />
                <span>All Systems Operational</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {currentYear} MacTech Digital Solutions Limited. All rights reserved.</span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="text-white font-semibold">Web by MacTech Digital Solutions</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="text-[#8FF04F] hover:underline"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
