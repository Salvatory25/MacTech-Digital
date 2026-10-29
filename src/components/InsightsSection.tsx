import React, { useState } from 'react';
import type { Article } from '../types';
import { ARTICLES_DATA } from '../data/siteData';
import { BookOpen, Clock, ArrowUpRight } from 'lucide-react';


interface InsightsSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectArticle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Business Digitalization',
    'Web Engineering',
    'Mobile & POS',
    'SEO & Growth',
  ];

  const filteredArticles = activeCategory === 'All'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter((a) => a.category === activeCategory);

  return (
    <section id="insights" className="py-24 sm:py-32 bg-white text-[#14211B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F6F3] border border-[#E3E7E2] text-xs font-semibold text-[#063B29] mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#063B29]" />
            <span>Knowledge Hub & Engineering Perspectives</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#14211B] leading-tight">
            Insights on Modern Technology & Digitalization.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#69766E] leading-relaxed">
            Practical analyses from our engineers and strategists on business software, web architecture,
            mobile optimization, and digital growth in Tanzania and East Africa.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#063B29] text-white shadow-md shadow-[#063B29]/20'
                    : 'bg-[#F4F6F3] text-[#69766E] hover:text-[#14211B] hover:bg-gray-200 border border-transparent'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-[#F4F6F3] rounded-3xl p-7 sm:p-8 border border-[#E3E7E2] hover:border-[#8FF04F] transition-all duration-300 hover:shadow-xl hover:shadow-[#063B29]/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#69766E] mb-4">
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E3E7E2] font-semibold text-[#063B29]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#14211B] tracking-tight group-hover:text-[#063B29] transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-[#69766E] leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white text-[11px] font-mono text-gray-600 border border-[#E3E7E2]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Read Action */}
              <div className="pt-4 border-t border-[#E3E7E2] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#14211B]">{article.author.name}</p>
                  <p className="text-[11px] text-[#69766E]">{article.author.role}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063B29] hover:text-black group-hover:underline cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
