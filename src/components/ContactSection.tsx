import React, { useState } from 'react';
import type { ContactFormData } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/siteData';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Loader2,
} from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
  prefilledBudget?: string;
  prefilledDescription?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  prefilledBudget,
  prefilledDescription,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phoneCountryCode: '+255',
    phoneNumber: '',
    companyName: '',
    serviceRequired: preselectedService || 'Web Design & Development',
    estimatedBudget: prefilledBudget || '',
    projectDescription: prefilledDescription || '',
    agreeToPrivacy: false,
    honeypot: '',
  });

  // Dynamically synchronize when prefilled props change
  React.useEffect(() => {
    if (preselectedService || prefilledBudget || prefilledDescription) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: preselectedService || prev.serviceRequired,
        estimatedBudget: prefilledBudget || prev.estimatedBudget,
        projectDescription: prefilledDescription || prev.projectDescription,
      }));
    }
  }, [preselectedService, prefilledBudget, prefilledDescription]);

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionReference, setSubmissionReference] = useState<string>('');

  const countryCodes = [
    { code: '+255', country: 'Tanzania' },
    { code: '+254', country: 'Kenya' },
    { code: '+256', country: 'Uganda' },
    { code: '+250', country: 'Rwanda' },
    { code: '+1', country: 'USA/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+971', country: 'UAE' },
    { code: '+27', country: 'South Africa' },
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid business email address.';
    }

    if (!formData.phoneNumber.trim() || formData.phoneNumber.replace(/\D/g, '').length < 6) {
      newErrors.phoneNumber = 'Please provide a valid phone number.';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a service.';
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = 'Please briefly describe your project (minimum 10 characters).';
    }

    if (!formData.agreeToPrivacy) {
      newErrors.agreeToPrivacy = 'You must consent to project communication to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.honeypot && formData.honeypot.length > 0) {
      console.warn('Spam submission detected and blocked.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate real API latency & store submission locally
      await new Promise((resolve) => setTimeout(resolve, 1400));

      const refId = `MTD-${Date.now().toString().slice(-6)}`;
      setSubmissionReference(refId);

      const existingInquiries = JSON.parse(localStorage.getItem('mactech_inquiries') || '[]');
      existingInquiries.push({
        refId,
        date: new Date().toISOString(),
        ...formData,
      });
      localStorage.setItem('mactech_inquiries', JSON.stringify(existingInquiries));

      setIsSubmitted(true);
    } catch (err) {
      setErrors({ projectDescription: 'Submission failed. Please try WhatsApp or email us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phoneCountryCode: '+255',
      phoneNumber: '',
      companyName: '',
      serviceRequired: 'Web Design & Development',
      estimatedBudget: '',
      projectDescription: '',
      agreeToPrivacy: false,
      honeypot: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#04291F] text-white relative hero-tile-grid overflow-hidden">
      {/* Background ambient lighting — inspired by the 2nd reference image */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#063B29] rounded-full blur-[140px] pointer-events-none opacity-80" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8FF04F]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#063B29] border border-[#8FF04F]/25 text-xs font-semibold text-[#8FF04F] mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#8FF04F]" />
            <span>Direct Project Inquiry</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Have an Idea? Let's Build Something Great.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            Tell us about your organization and digital goals. We typically review requirements
            and respond with actionable advice or a proposal within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Office Details (Inspired by Arounda Reference) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#063B29]/70 backdrop-blur-md rounded-3xl p-8 border border-[#8FF04F]/20 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Need a project? Drop us a message.
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                Connect directly with our engineering and strategy team in Arusha, Tanzania.
              </p>

              {/* Direct Email Card */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#04291F] border border-white/10 hover:border-[#8FF04F]/50 transition-all mb-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#063B29] flex items-center justify-center text-[#8FF04F]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block font-mono">General Inquiries</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#8FF04F] transition-colors">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#8FF04F]" />
              </a>

              {/* WhatsApp Fast Track Button */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] transition-all font-bold mb-6 shadow-lg shadow-[#8FF04F]/15"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#04291F] flex items-center justify-center text-[#8FF04F]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-mono tracking-wider opacity-80 block">Fast Track WhatsApp</span>
                    <span className="text-sm font-extrabold">Chat with MacTech Team</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              {/* Office Details */}
              <div className="space-y-4 pt-6 border-t border-white/10 text-xs text-gray-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#8FF04F] shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white font-mono">
                    {COMPANY_INFO.phone} (Direct & WhatsApp)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#8FF04F] shrink-0" />
                  <span>{COMPANY_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#8FF04F] shrink-0" />
                  <span>{COMPANY_INFO.timezone} (08:30 – 17:30 EAT)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#8FF04F] shrink-0" />
                  <span>NDA Protection Available Upon Request</span>
                </div>
              </div>

            </div>

            {/* Response Time Guarantee Box */}
            <div className="p-6 rounded-3xl bg-[#063B29]/40 border border-white/10 text-left text-xs text-gray-300">
              <span className="font-bold text-white block text-sm mb-1">
                24-Hour Review Turnaround
              </span>
              Every inquiry is reviewed directly by our lead engineer and solutions architect to provide realistic estimates and technical guidance.
            </div>
          </div>

          {/* Right Column: Functional Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#063B29]/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-[#8FF04F]/25 text-left shadow-2xl">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#8FF04F]/20 text-[#8FF04F] flex items-center justify-center mx-auto border border-[#8FF04F]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Inquiry Received Successfully
                  </h3>

                  <div className="bg-[#04291F] p-4 rounded-2xl border border-white/10 max-w-md mx-auto text-xs font-mono text-gray-300 space-y-1">
                    <div>Reference ID: <span className="text-[#8FF04F] font-bold">{submissionReference}</span></div>
                    <div>Status: <span className="text-emerald-400">Queued for Engineering Review</span></div>
                    <div>Target Response: Within 24 Business Hours</div>
                  </div>

                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. A copy of your inquiry details has been acknowledged. For urgent discussions, you can reach out via WhatsApp immediately.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] font-bold text-xs flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Follow Up on WhatsApp
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/10"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Spam honeypot (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {/* Name and Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-gray-200 mb-2">
                        Full Name <span className="text-[#8FF04F]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. David Mushi"
                        className={`w-full px-4 py-3 rounded-xl bg-[#04291F] border text-white text-sm placeholder-gray-500 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-[#8FF04F]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-semibold text-gray-200 mb-2">
                        Company / Organization <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Kilimo Trade Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-[#04291F] border border-white/15 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8FF04F] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-200 mb-2">
                        Business Email <span className="text-[#8FF04F]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#04291F] border text-white text-sm placeholder-gray-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-[#8FF04F]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold text-gray-200 mb-2">
                        Phone Number <span className="text-[#8FF04F]">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.phoneCountryCode}
                          onChange={(e) => setFormData({ ...formData, phoneCountryCode: e.target.value })}
                          className="px-2.5 py-3 rounded-xl bg-[#04291F] border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#8FF04F]"
                          aria-label="Country Code"
                        >
                          {countryCodes.map((c) => (
                            <option key={c.code} value={c.code} className="bg-[#04291F]">
                              {c.code} ({c.country})
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          id="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="742 835 420"
                          className={`w-full px-4 py-3 rounded-xl bg-[#04291F] border text-white text-sm placeholder-gray-500 focus:outline-none transition-colors ${
                            errors.phoneNumber ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-[#8FF04F]'
                          }`}
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Required Service and Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="serviceRequired" className="block text-xs font-semibold text-gray-200 mb-2">
                        Primary Service Required <span className="text-[#8FF04F]">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#04291F] border border-white/15 text-white text-sm focus:outline-none focus:border-[#8FF04F]"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#04291F]">
                            {s.title}
                          </option>
                        ))}
                        <option value="MauzoChap POS System" className="bg-[#04291F]">
                          MauzoChap POS & Multi-Branch System
                        </option>
                        <option value="PdfYako Document & PDF Platform" className="bg-[#04291F]">
                          PdfYako Document & PDF Technology
                        </option>
                        <option value="Custom Technical Consultation" className="bg-[#04291F]">
                          Custom Technical Consultation
                        </option>
                      </select>

                    </div>

                    <div>
                      <label htmlFor="estimatedBudget" className="block text-xs font-semibold text-gray-200 mb-2">
                        Estimated Budget <span className="text-gray-400 font-normal">(Enter in USD or TZS)</span>
                      </label>
                      <input
                        type="text"
                        id="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        placeholder="e.g. $2,500 or TZS 6,000,000"
                        className="w-full px-4 py-3 rounded-xl bg-[#04291F] border border-white/15 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8FF04F] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Description Textarea */}
                  <div>
                    <label htmlFor="projectDescription" className="block text-xs font-semibold text-gray-200 mb-2">
                      Project Description & Goals <span className="text-[#8FF04F]">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Outline what you are looking to build, expected timelines, key functionality, or specific challenges..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#04291F] border text-white text-sm placeholder-gray-500 focus:outline-none transition-colors resize-y ${
                        errors.projectDescription ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-[#8FF04F]'
                      }`}
                    />
                    {errors.projectDescription && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.projectDescription}
                      </p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeToPrivacy}
                        onChange={(e) => setFormData({ ...formData, agreeToPrivacy: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-white/20 bg-[#04291F] text-[#8FF04F] focus:ring-[#8FF04F]"
                      />
                      <span className="text-xs text-gray-300 leading-relaxed">
                        I agree to allow MacTech Digital Solutions Limited to process my submitted information
                        to contact me regarding this inquiry. We respect your confidentiality.
                      </span>
                    </label>
                    {errors.agreeToPrivacy && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.agreeToPrivacy}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] font-extrabold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#8FF04F]/25 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
