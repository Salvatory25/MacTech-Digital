import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'solutions', 'products', 'company', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Why Us', href: '#company', id: 'company' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#04291F]/95 backdrop-blur-md border-b border-[#8FF04F]/15 py-3 sm:py-3.5 shadow-lg shadow-black/25'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with Official Brand Monogram & White Solutions Ltd Text */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex items-center gap-2 sm:gap-3 focus:outline-none"
              aria-label="MacTech Digital Home"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#063B29] to-[#04291F] border border-[#8FF04F]/40 flex items-center justify-center p-1 shadow-inner group-hover:border-[#8FF04F] transition-all group-hover:shadow-[0_0_14px_rgba(143,240,79,0.45)] shrink-0">
                <img
                  src="/mactech-logo.png"
                  alt="MacTech Digital Official Monogram Logo"
                  className="w-full h-full object-contain filter brightness-125 contrast-125 drop-shadow-[0_0_6px_rgba(143,240,79,0.5)] transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-base sm:text-xl tracking-tight text-white flex items-center gap-1">
                  MacTech Digital
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-wider text-white/90 font-medium font-mono uppercase -mt-0.5 sm:-mt-1">
                  Solutions Ltd
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links — Centered with Spacious Layout */}
            <nav className="hidden lg:flex items-center gap-2 bg-[#063B29]/70 border border-[#8FF04F]/15 backdrop-blur-sm px-5 py-2 rounded-full" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-[#8FF04F]/20 text-[#8FF04F] shadow-sm font-bold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Controls: Let's Talk + Start Project with Clean Spacing */}
            <div className="hidden md:flex items-center gap-3">
              {/* Consultation Button */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-4 py-2.5 rounded-full text-xs font-semibold text-white border border-white/20 hover:border-[#8FF04F]/50 hover:bg-[#8FF04F]/10 transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#8FF04F]" />
                <span>Let's Talk</span>
              </button>

              {/* Primary CTA Button */}
              <button
                type="button"
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-full text-xs font-extrabold bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#8FF04F]/25 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Actions: Touch-Friendly Fast CTA + Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="px-3 py-2 rounded-full text-xs font-black bg-[#8FF04F] text-[#04291F] shadow-md shadow-[#8FF04F]/20 active:scale-95 transition-transform"
              >
                Start Project
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 min-w-[44px] min-h-[44px] rounded-xl text-gray-200 hover:text-white hover:bg-[#063B29] border border-white/10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#8FF04F]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#8FF04F]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Pro Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#04291F]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between animate-fadeIn overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar inside Drawer */}
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-[#031E16]">
            <div className="flex items-center gap-2.5">
              <img src="/mactech-logo.png" alt="MacTech Digital Logo" className="w-7 h-7 object-contain" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-extrabold text-white">MacTech Digital</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#8FF04F]">Solutions Ltd • Arusha</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-white/10 text-white hover:text-[#8FF04F] min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links with 48px+ Touch Targets */}
          <div className="px-6 py-6 space-y-2 flex-1">
            <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-3 text-left">
              Navigation
            </p>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`min-h-[48px] py-3.5 px-3 rounded-xl flex items-center justify-between text-xl font-bold transition-all ${
                    isActive
                      ? 'text-[#8FF04F] bg-[#063B29] border border-[#8FF04F]/30 pl-4'
                      : 'text-white hover:text-[#8FF04F] hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#8FF04F]' : 'text-gray-500'}`} />
                </a>
              );
            })}
          </div>

          {/* Bottom Fast-Track Actions */}
          <div className="p-6 bg-[#031E16]/90 border-t border-white/10 space-y-3">
            {/* Mobile WhatsApp Quick Action */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] py-3.5 px-4 rounded-2xl bg-[#8FF04F] active:bg-[#A5FF57] text-[#04291F] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#8FF04F]/20"
            >
              <span>WhatsApp Direct: {COMPANY_INFO.phone}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full min-h-[48px] py-3.5 px-4 rounded-2xl border border-white/20 hover:border-[#8FF04F]/40 active:bg-white/10 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#8FF04F]" />
              <span>Book 15-Min Free Consultation</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
