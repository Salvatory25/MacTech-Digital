import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBySection } from './components/TrustedBySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal } from './components/LegalModal';

import type { Project, Service } from './types';
import { COMPANY_INFO, PROJECTS_DATA } from './data/siteData';
import { MessageCircle } from 'lucide-react';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);
  const [inquiryPrefillService, setInquiryPrefillService] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = (serviceName?: string) => {
    if (serviceName) {
      setInquiryPrefillService(serviceName);
    }
    scrollToSection('contact');
  };

  const handleOpenMauzoChapDemo = () => {
    const mauzo = PROJECTS_DATA.find((p) => p.id === 'mauzochap');
    if (mauzo) {
      setSelectedProject(mauzo);
    }
  };

  return (
    <div className="min-h-screen bg-[#04291F] text-[#14211B] flex flex-col relative selection:bg-[#8FF04F] selection:text-[#04291F]">
      {/* Intelligently Fixed Navbar with Logo and Dynamic Controls */}
      <Navbar
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenContact={() => handleStartProject()}
      />

      {/* Main Content Sections in Strategic High-Converting Order */}
      <main className="flex-1">
        {/* 1. Hero: Visually striking, selling digital solutions with real company proof */}
        <Hero
          onStartProject={() => handleStartProject()}
          onExploreWork={() => scrollToSection('products')}
          onOpenMauzoChapDemo={handleOpenMauzoChapDemo}
        />

        {/* 2. Trusted By: Logos of companies that trusted us for Web, Graphics, POS, and Mobile */}
        <TrustedBySection />

        {/* 3. Why Choose Us: The MacTech Advantage, 6 growth pillars & 100% IP ownership */}
        <WhyChooseUs />

        {/* 4. Digital Solutions for Ambitious Businesses: Full-stack engineering capabilities */}
        <ServicesSection
          onSelectService={(serv) => setSelectedService(serv)}
          onStartProject={() => handleStartProject()}
        />

        {/* 5. Portfolio & Shipped Work: Filterable and searchable client implementations */}
        <PortfolioSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onStartProject={() => handleStartProject()}
        />

        {/* 7. Strategic 4-Step Milestone Engineering Process */}
        <ProcessSection />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. High-Converting Closing Inquiry Section: Custom budget input, validated form, honeypot */}
        <ContactSection
          preselectedService={inquiryPrefillService}
        />
      </main>

      {/* 10. Deep Forest Green Footer */}
      <Footer
        onOpenPrivacy={() => setLegalType('privacy')}
        onOpenTerms={() => setLegalType('terms')}
      />

      {/* Floating Fast-Track WhatsApp Trigger */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] shadow-xl shadow-[#8FF04F]/25 font-extrabold text-xs tracking-wide transition-all duration-300 transform hover:scale-105"
          aria-label="Direct WhatsApp Contact"
        >
          <div className="w-2 h-2 rounded-full bg-[#04291F] animate-ping" />
          <MessageCircle className="w-4 h-4 fill-[#04291F]" />
          <span className="hidden sm:inline">WhatsApp Fast Track</span>
        </a>
      </aside>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projName) => handleStartProject(projName)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(servName) => handleStartProject(servName)}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />
    </div>
  );
}

export default App;
