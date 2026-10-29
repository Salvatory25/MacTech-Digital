import React, { useState } from 'react';
import type { Project, ProjectStatus } from '../types';
import { PROJECTS_DATA } from '../data/siteData';
import {
  ExternalLink,
  Play,
  Pause,
  Sparkles,
  Search,
  X,
  SlidersHorizontal,
} from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
  onStartProject: () => void;
}

// Video simulation & site URL metadata per product
interface ProjectMediaConfig {
  browserUrl: string;
  videoPlaceholderTheme: string;
  gradient: string;
  videoUrl?: string; // Optional real mp4/webm video file link
  previewFeature: string;
}

const PROJECT_MEDIA: Record<string, ProjectMediaConfig> = {
  pdfyako: {
    browserUrl: 'https://pdfyako.com',
    videoPlaceholderTheme: 'PDF Compression & Conversion Engine',
    gradient: 'from-[#05261C] via-[#063B29] to-[#04291F]',
    previewFeature: 'Instant WebAssembly Client-Side PDF Tools',
  },
  mauzochap: {
    browserUrl: 'https://mauzochap.mactechdigital.co.tz',
    videoPlaceholderTheme: 'Offline POS Barcode Terminal & Cashier Demo',
    gradient: 'from-[#04291F] via-[#074732] to-[#031E16]',
    previewFeature: 'Multi-Branch SQLite Cache & Real-Time Sync',
  },
  invoicepro: {
    browserUrl: 'https://invoicepro.mactechdigital.co.tz',
    videoPlaceholderTheme: 'Multi-Currency Invoice Dispatch & Payment Link Demo',
    gradient: 'from-[#0A3326] via-[#04291F] to-[#063B29]',
    previewFeature: 'Automated Tax Invoice & M-Pesa QR Generation',
  },
  tusome360: {
    browserUrl: 'https://tusome360.mactechdigital.co.tz',
    videoPlaceholderTheme: 'Interactive NECTA Student Tablet Curriculum Demo',
    gradient: 'from-[#04291F] via-[#103D2E] to-[#05231A]',
    previewFeature: 'Offline Educational Modules & Quiz Engine',
  },
  kilimosmart: {
    browserUrl: 'https://kilimosmart.mactechdigital.co.tz',
    videoPlaceholderTheme: 'Agricultural Grain Weighbridge & Silo Logistics Demo',
    gradient: 'from-[#063B29] via-[#084834] to-[#04291F]',
    previewFeature: 'Digital Scale Integration & SMS Farmer Payouts',
  },
};

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
  onStartProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const filterOptions: { label: string; value: 'all' | ProjectStatus }[] = [
    { label: 'All Products & Work', value: 'all' },
    { label: 'Launched Products', value: 'Launched' },
    { label: 'In Active Development', value: 'In Active Development' },
    { label: 'Concepts & Prototypes', value: 'Concept & Prototype' },
    { label: 'Client Solutions', value: 'Client Solution' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesFilter = activeFilter === 'all' || p.status === activeFilter;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesFilter;

    const matchesSearch =
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q));

    return matchesFilter && matchesSearch;
  });

  const toggleVideoPlayback = (projectId: string) => {
    setPlayingVideoId((prev) => (prev === projectId ? null : projectId));
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-white text-[#14211B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F6F3] border border-[#E3E7E2] text-xs font-semibold text-[#063B29] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8FF04F]" />
            <span className="font-mono uppercase tracking-wider text-xs">Our Products & Selected Work</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#14211B] leading-tight">
            Software That Sells Itself{' '}
            <span className="text-[#063B29]">Through Performance.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#69766E] leading-relaxed">
            Explore videos and live interactive solutions created by MacTech Digital. From high-speed document tools
            like <strong className="text-[#063B29]">pdfyako.com</strong> to multi-branch commercial retail engines,
            every build is engineered for high performance.
          </p>
        </div>

        {/* Dynamic Controls: Filter Pills + Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 sm:mb-12">
          {/* Horizontally Scrollable Filter Pills on Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center w-full md:w-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            {filterOptions.map((opt) => {
              const isSelected = activeFilter === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setActiveFilter(opt.value)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap min-h-[40px] flex items-center ${
                    isSelected
                      ? 'bg-[#063B29] text-white shadow-md shadow-[#063B29]/20'
                      : 'bg-[#F4F6F3] text-[#69766E] hover:text-[#14211B] hover:bg-gray-200 border border-transparent'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products & tech..."
              className="w-full pl-10 pr-9 py-2.5 rounded-full bg-[#F4F6F3] border border-[#E3E7E2] text-xs sm:text-sm text-[#14211B] placeholder-gray-400 focus:outline-none focus:border-[#063B29] transition-all min-h-[42px]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 text-gray-500"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-[#F4F6F3] rounded-2xl sm:rounded-3xl border border-[#E3E7E2] p-6 sm:p-8">
            <p className="text-base font-bold text-[#14211B]">
              No products found matching "{searchQuery}"
            </p>
            <p className="text-xs text-[#69766E] mt-1 mb-4">
              Try searching for "POS", "PDF", "Wasm", "TypeScript", or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="px-5 py-2.5 rounded-full bg-[#063B29] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Cards Grid: Video -> Name -> Short Description -> Visit Site -> Blinking Start Your Project */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {filteredProjects.map((project) => {
              const media = PROJECT_MEDIA[project.id] || {
                browserUrl: project.externalUrl || `https://${project.id}.mactechdigital.co.tz`,
                videoPlaceholderTheme: `${project.title} Interface Walkthrough`,
                gradient: 'from-[#063B29] via-[#04291F] to-[#021811]',
                previewFeature: project.subtitle,
              };

              const isPlaying = playingVideoId === project.id;
              const displayUrl = project.title === 'PdfYako' ? 'https://pdfyako.com' : project.externalUrl;

              return (
                <div
                  key={project.id}
                  className="group bg-[#F4F6F3] rounded-2xl sm:rounded-3xl border border-[#E3E7E2] p-4 sm:p-7 hover:border-[#8FF04F] transition-all duration-300 hover:shadow-xl hover:shadow-[#063B29]/5 flex flex-col justify-between"
                >
                  <div>
                    {/* ======================================================== */}
                    {/* 1. VIDEO OF THE SITE (Browser Frame + Interactive Video) */}
                    {/* ======================================================== */}
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-300 bg-[#04291F] shadow-inner mb-5 sm:mb-6 group/video">
                      {/* Browser Window Header */}
                      <div className="bg-[#031E16] px-3 py-2 border-b border-white/10 flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="bg-[#04291F] px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] text-gray-300 font-mono flex items-center gap-1 border border-white/10 max-w-[130px] xs:max-w-[200px] sm:max-w-xs truncate">
                          <span className="text-[#8FF04F]">🔒</span>
                          <span className="truncate">{media.browserUrl}</span>
                        </div>
                        <div className="text-[9px] sm:text-[10px] font-mono text-[#8FF04F] flex items-center gap-1 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8FF04F] animate-pulse" />
                          <span>HD</span>
                        </div>
                      </div>

                      {/* Video Player Display */}
                      <div className={`relative min-h-[190px] xs:min-h-[220px] sm:min-h-[250px] bg-gradient-to-br ${media.gradient} flex flex-col justify-between p-3.5 sm:p-5 text-white overflow-hidden`}>
                        {/* Background Subtle Tech Grid */}
                        <div className="absolute inset-0 hero-tile-grid opacity-30 pointer-events-none" />

                        {/* Top Video Status & Controls */}
                        <div className="relative z-10 flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[#8FF04F]">
                            {isPlaying ? '● Video Playing' : 'Site Video Walkthrough'}
                          </span>

                          <button
                            type="button"
                            onClick={() => toggleVideoPlayback(project.id)}
                            className="p-2 rounded-full bg-[#8FF04F] text-[#04291F] hover:bg-[#A5FF57] transition-all transform hover:scale-105 cursor-pointer shadow-md shadow-[#8FF04F]/30"
                            aria-label={isPlaying ? 'Pause video' : 'Play video'}
                          >
                            {isPlaying ? (
                              <Pause className="w-4 h-4 fill-current stroke-none" />
                            ) : (
                              <Play className="w-4 h-4 fill-current stroke-none pl-0.5" />
                            )}
                          </button>
                        </div>

                        {/* Center Screen Demonstration Preview */}
                        <div className="relative z-10 text-center my-auto py-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-2.5 text-xs text-white">
                            <Sparkles className="w-3.5 h-3.5 text-[#8FF04F]" />
                            <span>{media.previewFeature}</span>
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                            {media.videoPlaceholderTheme}
                          </h4>
                          {isPlaying && (
                            <div className="mt-3 flex items-center justify-center gap-1.5">
                              <span className="w-1 h-3 bg-[#8FF04F] rounded-full animate-pulse" />
                              <span className="w-1 h-5 bg-[#8FF04F] rounded-full animate-pulse delay-75" />
                              <span className="w-1 h-2 bg-[#8FF04F] rounded-full animate-pulse delay-150" />
                              <span className="w-1 h-4 bg-[#8FF04F] rounded-full animate-pulse delay-100" />
                            </div>
                          )}
                        </div>

                        {/* Bottom Scrubber & Telemetry */}
                        <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-300">
                          <span className="flex items-center gap-1 text-[#8FF04F]">
                            <span>0:14</span> / <span>1:30</span>
                          </span>
                          <span className="text-[10px] text-gray-400">
                            Verified Responsive UI
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ======================================================== */}
                    {/* 2. NAME OF THE SITE                                      */}
                    {/* ======================================================== */}
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-xl sm:text-3xl font-extrabold text-[#14211B] tracking-tight group-hover:text-[#063B29] transition-colors">
                        {project.title === 'PdfYako' ? 'PdfYako.com' : project.title}
                      </h3>
                      <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#063B29] bg-white px-2 sm:px-2.5 py-1 rounded-full border border-[#E3E7E2] shrink-0">
                        {project.category}
                      </span>
                    </div>

                    {/* ======================================================== */}
                    {/* 3. SHORT DESCRIPTION                                     */}
                    {/* ======================================================== */}
                    <p className="text-xs sm:text-sm text-[#69766E] leading-relaxed mb-5 sm:mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* ========================================================== */}
                  {/* 4. LINK TEXT: VISIT SITE                                   */}
                  {/* 5. BELOW LINK TEXT: START YOUR PROJECT BLINKING            */}
                  {/* ========================================================== */}
                  <div className="space-y-3 pt-4 sm:pt-5 border-t border-[#E3E7E2]">
                    
                    {/* Link Text: Visit Site */}
                    <div className="flex items-center justify-between">
                      {displayUrl ? (
                        <a
                          href={displayUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-extrabold text-[#063B29] hover:text-[#04291F] underline decoration-2 underline-offset-4 transition-colors group/link py-1"
                        >
                          <span>Visit Site</span>
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-extrabold text-[#063B29] hover:text-[#04291F] underline decoration-2 underline-offset-4 transition-colors group/link cursor-pointer py-1"
                        >
                          <span>View Specifications & Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="text-xs font-semibold text-gray-500 hover:text-black flex items-center gap-1 cursor-pointer py-1"
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        <span>Specs</span>
                      </button>
                    </div>

                    {/* Below Link Text: START YOUR PROJECT BLINKING */}
                    <button
                      type="button"
                      onClick={onStartProject}
                      className="w-full py-3.5 px-3.5 sm:px-5 rounded-2xl bg-[#04291F] hover:bg-[#063B29] active:scale-[0.99] text-white font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-between group/cta cursor-pointer border border-[#8FF04F]/40 min-h-[46px]"
                    >
                      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                        {/* Blinking / Pulsing Indicator */}
                        <div className="relative flex items-center justify-center shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#8FF04F] animate-ping absolute opacity-75" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#8FF04F]" />
                        </div>
                        <span className="text-[#8FF04F] font-black tracking-wide uppercase text-left">
                          Start Your Project
                        </span>
                      </div>
                      <span className="text-[11px] sm:text-xs text-white/80 group-hover/cta:translate-x-1 transition-transform font-bold whitespace-nowrap">
                        <span className="hidden xs:inline">Get Instant </span>Proposal →
                      </span>
                    </button>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
