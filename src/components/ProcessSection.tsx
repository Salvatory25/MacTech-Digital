import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/siteData';
import { Check, Compass, PencilRuler, Terminal, Rocket } from 'lucide-react';


export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [
    <Compass className="w-5 h-5 text-[#8FF04F]" />,
    <PencilRuler className="w-5 h-5 text-[#8FF04F]" />,
    <Terminal className="w-5 h-5 text-[#8FF04F]" />,
    <Rocket className="w-5 h-5 text-[#8FF04F]" />,
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#063B29] text-white relative hero-tile-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04291F] border border-[#8FF04F]/25 text-xs font-semibold text-[#8FF04F] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8FF04F]" />
            <span>Structured Four-Stage Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Our Development Process.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            From initial requirements unpacking to long-term operational monitoring,
            every project adheres to a disciplined engineering lifecycle.
          </p>
        </div>

        {/* Desktop Process Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((stepItem, idx) => {
            const isSelected = activeStep === idx;

            return (
              <div
                key={stepItem.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#04291F] border-[#8FF04F] shadow-2xl shadow-black/50 scale-[1.02]'
                    : 'bg-[#04291F]/60 border-white/10 hover:border-white/30 hover:bg-[#04291F]/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-black text-[#8FF04F]">
                      {stepItem.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#063B29] border border-white/10 flex items-center justify-center">
                      {icons[idx]}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs font-medium text-[#8FF04F] mb-4">
                    {stepItem.tagline}
                  </p>

                  <p className="text-xs text-gray-300 leading-relaxed mb-6 font-normal">
                    {stepItem.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {stepItem.activities.slice(0, 3).map((act, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-1.5 text-[11px] text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#8FF04F] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Detail Spotlight */}
        <div className="mt-12 bg-[#04291F] rounded-3xl p-6 sm:p-8 border border-[#8FF04F]/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#063B29] border border-[#8FF04F]/40 flex items-center justify-center shrink-0">
              <span className="text-lg font-mono font-bold text-[#8FF04F]">
                {PROCESS_STEPS[activeStep].step}
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-base font-bold text-white">
                Active Phase Focus: {PROCESS_STEPS[activeStep].title} — {PROCESS_STEPS[activeStep].tagline}
              </h4>
              <p className="text-xs text-gray-300 mt-0.5">
                Each stage produces tangible code, designs, or verifiable test reports before moving to the next.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {PROCESS_STEPS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setActiveStep(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeStep === dotIdx ? 'w-8 bg-[#8FF04F]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to step ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
