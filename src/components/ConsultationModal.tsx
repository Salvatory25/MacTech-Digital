import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [channel, setChannel] = useState<'Google Meet' | 'WhatsApp' | 'Direct Phone'>('Google Meet');
  const [topic, setTopic] = useState('New Project Architecture & Feasibility');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please provide your name and email to schedule your session.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#04291F] rounded-3xl border border-[#8FF04F]/30 p-7 sm:p-9 text-white text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 transition-colors cursor-pointer"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-[#8FF04F]/20 text-[#8FF04F] flex items-center justify-center mx-auto border border-[#8FF04F]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Consultation Scheduled!
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-white">{name}</strong>. Our engineering lead will reach out to you via <strong className="text-[#8FF04F]">{channel}</strong> to confirm the exact time slot.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#8FF04F] text-[#04291F] font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Message Directly on WhatsApp
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-white/10 text-white font-medium text-xs"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#063B29] border border-[#8FF04F]/30 text-xs font-mono text-[#8FF04F] mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Complimentary 15-Minute Session</span>
            </div>

            <h3 id="consultation-modal-title" className="text-2xl font-extrabold text-white tracking-tight">
              Let's Talk Technology.
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed">
              Have questions about software feasibility, POS workflows, or corporate web architecture?
              Book an informal discussion with our solutions engineer.
            </p>

            {error && (
              <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="consultation-name" className="block text-xs font-semibold text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                id="consultation-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Kimaro"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#063B29] border border-white/15 text-white text-xs focus:outline-none focus:border-[#8FF04F]"
              />
            </div>

            <div>
              <label htmlFor="consultation-email" className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                id="consultation-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@organization.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#063B29] border border-white/15 text-white text-xs focus:outline-none focus:border-[#8FF04F]"
              />
            </div>

            <div>
              <label htmlFor="consultation-phone" className="block text-xs font-semibold text-gray-300 mb-1">Phone / WhatsApp Number</label>
              <input
                type="tel"
                id="consultation-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+255 7..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#063B29] border border-white/15 text-white text-xs focus:outline-none focus:border-[#8FF04F]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="consultation-channel" className="block text-xs font-semibold text-gray-300 mb-1">Preferred Channel</label>
                <select
                  id="consultation-channel"
                  value={channel}
                  onChange={(e) => setChannel(e.target.value as any)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#063B29] border border-white/15 text-white text-xs focus:outline-none focus:border-[#8FF04F]"
                >
                  <option value="Google Meet">Google Meet</option>
                  <option value="WhatsApp">WhatsApp Call / Audio</option>
                  <option value="Direct Phone">Direct Cellular Phone</option>
                </select>
              </div>

              <div>
                <label htmlFor="consultation-topic" className="block text-xs font-semibold text-gray-300 mb-1">Topic</label>
                <select
                  id="consultation-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#063B29] border border-white/15 text-white text-xs focus:outline-none focus:border-[#8FF04F]"
                >
                  <option value="New Project Architecture">New Project Architecture</option>
                  <option value="MauzoChap POS System">MauzoChap POS System</option>
                  <option value="Corporate Web Redesign">Corporate Web Redesign</option>
                  <option value="Mobile App Scoping">Mobile App Scoping</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 rounded-xl bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] font-bold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Confirm 15-Minute Booking</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
