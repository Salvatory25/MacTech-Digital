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

        {/* Process Stepper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROCESS_STEPS.map((stepItem, idx) => {
            const isSelected = activeStep === idx;

            return (
              <div
                key={stepItem.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl sm:rounded-3xl p-5 sm:p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#04291F] border-[#8FF04F] shadow-2xl shadow-black/50 scale-[1.01] sm:scale-[1.02]'
                    : 'bg-[#04291F]/60 border-white/10 hover:border-white/30 hover:bg-[#04291F]/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="text-xl sm:text-2xl font-mono font-black text-[#8FF04F]">
                      {stepItem.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#063B29] border border-white/10 flex items-center justify-center shrink-0">
                      {icons[idx]}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#8FF04F] mb-3 sm:mb-4">
                    {stepItem.tagline}
                  </p>

                  <p className="text-xs text-gray-300 leading-relaxed mb-5 sm:mb-6 font-normal">
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
        <div className="mt-8 sm:mt-12 bg-[#04291F] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#8FF04F]/25 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-center gap-3.5 sm:gap-4 w-full md:w-auto">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#063B29] border border-[#8FF04F]/40 flex items-center justify-center shrink-0">
              <span className="text-base sm:text-lg font-mono font-bold text-[#8FF04F]">
                {PROCESS_STEPS[activeStep].step}
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-base font-bold text-white">
                Active Phase: {PROCESS_STEPS[activeStep].title} — {PROCESS_STEPS[activeStep].tagline}
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-300 mt-0.5">
                Each stage produces tangible code, designs, or verifiable test reports before moving to the next.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 py-1">
            {PROCESS_STEPS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setActiveStep(dotIdx)}
                className={`h-3 rounded-full transition-all duration-300 p-1 min-h-[32px] flex items-center justify-center cursor-pointer`}
                aria-label={`Go to step ${dotIdx + 1}`}
              >
                <span className={`block h-2 rounded-full transition-all ${
                  activeStep === dotIdx ? 'w-7 sm:w-8 bg-[#8FF04F]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`} />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
