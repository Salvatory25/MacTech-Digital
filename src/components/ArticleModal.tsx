import React, { useEffect } from 'react';
import type { Article } from '../types';
import { X, Clock, Calendar, Share2 } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-article-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-y-auto text-[#14211B] text-left p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Metadata bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#69766E] mb-4">
          <span className="px-3 py-1 rounded-full bg-[#063B29]/10 text-[#063B29] font-bold">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.publishDate}
          </span>
        </div>

        {/* Article Title */}
        <h1 id="modal-article-title" className="text-2xl sm:text-4xl font-extrabold text-[#14211B] tracking-tight leading-tight mb-4">
          {article.title}
        </h1>

        {/* Author Bylines */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-100">
          <div>
            <p className="text-sm font-bold text-[#14211B]">{article.author.name}</p>
            <p className="text-xs text-[#69766E]">{article.author.role}</p>
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            Share Article
          </button>
        </div>

        {/* Lead Excerpt */}
        <div className="p-5 rounded-2xl bg-[#F4F6F3] border-l-4 border-[#063B29] mb-8 text-sm sm:text-base font-medium text-[#14211B] leading-relaxed">
          {article.excerpt}
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed mb-10">
          {article.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-2">
          {article.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg bg-gray-100 text-xs font-mono text-gray-700"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
