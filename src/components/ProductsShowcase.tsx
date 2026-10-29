import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/siteData';
import type { Project } from '../types';
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Barcode,
  Printer,
  Zap,
  RotateCcw,
  FileText,
  Languages,
  Send,
  QrCode,
  Play,
  Image as ImageIcon,
  Monitor,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Globe,
} from 'lucide-react';

interface ProductsShowcaseProps {
  onStartProject: (initialService?: string) => void;
  onSelectProject: (project: Project) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({
  onStartProject,
  onSelectProject,
}) => {
  // Proprietary products (MauzoChap, PdfYako, InvoicePro, Tusome360)
  const products = PROJECTS_DATA.filter((p) => p.id !== 'kilimosmart');
  const [selectedProductId, setSelectedProductId] = useState<string>(products[0].id);
  const [mediaView, setMediaView] = useState<'simulator' | 'video' | 'screenshots'>('simulator');
  const [screenshotIndex, setScreenshotIndex] = useState(0);

  const currentProduct = products.find((p) => p.id === selectedProductId) || products[0];

  // Platform Type Metadata
  const platformMeta: Record<
    string,
    {
      platformType: 'Web Platform' | 'Mobile & Desktop POS' | 'Enterprise Cloud SaaS' | 'Offline Mobile App';
      badgeColor: string;
      icon: typeof Globe;
      tagline: string;
    }
  > = {
    mauzochap: {
      platformType: 'Mobile & Desktop POS',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      icon: Monitor,
      tagline: 'Retail POS & Multi-Branch Sales Engine for East African Businesses',
    },
    pdfyako: {
      platformType: 'Web Platform',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-300',
      icon: Globe,
      tagline: 'Production-Grade Client-Side Document & PDF Suite (pdfyako.com)',
    },
    invoicepro: {
      platformType: 'Enterprise Cloud SaaS',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-300',
      icon: Zap,
      tagline: 'Automated Billing, Multi-Currency Invoicing & WhatsApp Reminders',
    },
    tusome360: {
      platformType: 'Offline Mobile App',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-300',
      icon: Smartphone,
      tagline: 'Interactive NECTA-Curriculum EdTech Platform for Students & Tablets',
    },
  };

  const currentMeta = platformMeta[currentProduct.id] || {
    platformType: 'Web Platform',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    icon: Globe,
    tagline: currentProduct.subtitle,
  };

  // Screenshots data per product
  const productScreenshots: Record<string, { title: string; caption: string; bgGradient: string }[]> = {
    mauzochap: [
      {
        title: 'Multi-Branch Cashier Terminal',
        caption: 'Fast-scan barcode cashier screen with instant SQLite offline cache and Bluetooth thermal printing queue.',
        bgGradient: 'from-[#063B29] to-[#04291F]',
      },
      {
        title: 'Executive Real-Time Stock Ledger',
        caption: 'Multi-outlet inventory tracking, re-order threshold alerts, and TRA EFD compliance telemetry.',
        bgGradient: 'from-[#0A3D2C] to-[#063B29]',
      },
      {
        title: 'Mobile Cashier App View',
        caption: 'Handheld Android POS interface for dispatch drivers and mobile sales representatives.',
        bgGradient: 'from-[#04291F] to-[#021811]',
      },
    ],
    pdfyako: [
      {
        title: 'Smart PDF Compressor Interface',
        caption: 'Client-side WebAssembly crunching large PDF reports by 80%+ without sending data to remote servers.',
        bgGradient: 'from-[#063B29] to-[#04291F]',
      },
      {
        title: 'Document Merge & Reorder Suite',
        caption: 'Intuitive drag-and-drop page organizing with instant local rendering and digital signature tools.',
        bgGradient: 'from-[#05261C] to-[#063B29]',
      },
    ],
    invoicepro: [
      {
        title: 'Automated Invoice Generator',
        caption: 'TZS, USD, and KES billing with integrated M-Pesa QR codes and instant PDF downloads.',
        bgGradient: 'from-[#063B29] to-[#04291F]',
      },
      {
        title: 'WhatsApp Dispatch Automation',
        caption: 'Scheduled payment reminder dispatch directly to customer WhatsApp with 1-click payment links.',
        bgGradient: 'from-[#04291F] to-[#0A3D2C]',
      },
    ],
    tusome360: [
      {
        title: 'Interactive Algebra & Science Lab',
        caption: 'NECTA secondary curriculum animations with bilingual voice prompts in Kiswahili and English.',
        bgGradient: 'from-[#063B29] to-[#04291F]',
      },
      {
        title: 'Offline Student PWA Dashboard',
        caption: 'Self-contained 3.2 MB package storing quiz progress locally with zero internet required.',
        bgGradient: 'from-[#05261C] to-[#04291F]',
      },
    ],
  };

  // 1. MauzoChap Simulator State
  const sampleItems = [
    { name: 'White Maize Flour 25kg', price: 45000, sku: 'SKU-TZ-0418' },
    { name: 'Pure Sunflower Oil 5L', price: 28500, sku: 'SKU-TZ-0892' },
    { name: 'Premium Basmati Rice 10kg', price: 36000, sku: 'SKU-TZ-0523' },
    { name: 'Refined White Sugar 5kg', price: 16500, sku: 'SKU-TZ-0118' },
  ];

  const [cart, setCart] = useState<{ name: string; price: number; sku: string; qty: number }[]>([
    { name: 'White Maize Flour 25kg', price: 45000, sku: 'SKU-TZ-0418', qty: 1 },
    { name: 'Pure Sunflower Oil 5L', price: 28500, sku: 'SKU-TZ-0892', qty: 1 },
  ]);
  const [isScanning, setIsScanning] = useState(false);
  const [showThermalReceipt, setShowThermalReceipt] = useState(false);

  const handleScanNext = () => {
    setIsScanning(true);
    setTimeout(() => {
      const nextIndex = cart.length % sampleItems.length;
      const nextItem = sampleItems[nextIndex];
      setCart((prev) => {
        const existing = prev.find((i) => i.sku === nextItem.sku);
        if (existing) {
          return prev.map((i) => (i.sku === nextItem.sku ? { ...i, qty: i.qty + 1 } : i));
        }
        return [...prev, { ...nextItem, qty: 1 }];
      });
      setIsScanning(false);
    }, 400);
  };

  const handleClearCart = () => {
    setCart([]);
    setShowThermalReceipt(false);
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartVat = Math.round(cartSubtotal * 0.18);
  const cartGrandTotal = cartSubtotal + cartVat;

  // 2. PdfYako Simulator State
  const [pdfCompressing, setPdfCompressing] = useState(false);
  const [pdfCompressed, setPdfCompressed] = useState(false);
  const [pdfFileSize, setPdfFileSize] = useState(24.8);

  const handleRunPdfCompress = () => {
    setPdfCompressing(true);
    setPdfCompressed(false);
    setTimeout(() => {
      setPdfCompressing(false);
      setPdfCompressed(true);
      setPdfFileSize(4.2);
    }, 600);
  };

  const handleResetPdf = () => {
    setPdfFileSize(24.8);
    setPdfCompressed(false);
  };

  // 3. InvoicePro Simulator State
  const [invoiceDispatched, setInvoiceDispatched] = useState(false);

  const handleDispatchInvoice = () => {
    setInvoiceDispatched(true);
    setTimeout(() => setInvoiceDispatched(false), 3500);
  };

  // 4. Tusome360 Simulator State
  const [tusomeLang, setTusomeLang] = useState<'EN' | 'SW'>('SW');

  const screenshots = productScreenshots[currentProduct.id] || [];

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#F4F6F3] text-[#14211B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with high-converting copy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E3E7E2] text-xs font-semibold text-[#063B29] mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#8FF04F]" />
            <span className="font-mono uppercase tracking-wider text-xs">Proprietary Products & Digital Platforms</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#14211B] leading-tight">
            Software That Sells Itself{' '}
            <span className="text-[#063B29]">Through Performance.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#69766E] leading-relaxed">
            In addition to custom client engineering, MacTech Digital builds, launches, and operates our own proprietary digital products—including the document suite{' '}
            <a
              href="https://pdfyako.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#063B29] underline hover:text-black"
            >
              pdfyako.com
            </a>{' '}
            and commercial multi-branch POS engines. Explore interactive previews, video walkthroughs, and screenshots below.
          </p>
        </div>

        {/* Product Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {products.map((p) => {
            const isSelected = p.id === selectedProductId;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setSelectedProductId(p.id);
                  setScreenshotIndex(0);
                }}
                className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#04291F] text-white shadow-lg shadow-[#04291F]/20'
                    : 'bg-white text-[#69766E] hover:text-[#14211B] border border-[#E3E7E2]'
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    p.status === 'Launched'
                      ? 'bg-emerald-500'
                      : p.status === 'In Active Development'
                      ? 'bg-amber-500'
                      : 'bg-purple-500'
                  }`}
                />
                <span>{p.title}</span>
                <span className="text-[11px] font-mono opacity-60">
                  [{p.status.split(' ')[0]}]
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Showcase Card */}
        <div className="bg-white rounded-3xl border border-[#E3E7E2] p-8 sm:p-12 shadow-xl shadow-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-6 text-left">
              {/* Platform Type & Status Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${currentMeta.badgeColor}`}>
                  <currentMeta.icon className="w-3.5 h-3.5" />
                  <span>{currentMeta.platformType}</span>
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    currentProduct.status === 'Launched'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : currentProduct.status === 'In Active Development'
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'bg-purple-50 text-purple-800 border-purple-200'
                  }`}
                >
                  {currentProduct.status === 'Launched' ? 'Production Release' : currentProduct.status}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#14211B] tracking-tight">
                {currentProduct.title}
              </h3>

              <p className="text-base font-semibold text-[#063B29] mt-1 mb-4">
                {currentMeta.tagline}
              </p>

              <p className="text-sm sm:text-base text-[#69766E] leading-relaxed mb-6">
                {currentProduct.description}
              </p>

              {/* Problem vs Solution Callout */}
              <div className="space-y-3 mb-8 bg-[#F4F6F3] p-5 rounded-2xl border border-[#E3E7E2]">
                <div>
                  <span className="text-xs font-bold text-[#063B29] uppercase tracking-wide block">
                    The Business Challenge:
                  </span>
                  <p className="text-xs text-[#69766E] mt-0.5">
                    {currentProduct.problem}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E3E7E2]">
                  <span className="text-xs font-bold text-[#063B29] uppercase tracking-wide block">
                    MacTech Architectural Advantage:
                  </span>
                  <p className="text-xs text-[#69766E] mt-0.5">
                    {currentProduct.solution}
                  </p>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2 mb-8">
                {currentProduct.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#14211B]">
                    <CheckCircle2 className="w-4 h-4 text-[#063B29] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* High-Converting Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {currentProduct.externalUrl ? (
                  <a
                    href={currentProduct.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-[#8FF04F]/25 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Visit {currentProduct.title === 'PdfYako' ? 'pdfyako.com' : 'Platform'}</span>
                    <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onSelectProject(currentProduct)}
                    className="px-6 py-3.5 rounded-full bg-[#063B29] hover:bg-[#04291F] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-[#063B29]/20 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Full Demo & Specs</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => onSelectProject(currentProduct)}
                  className="px-5 py-3 rounded-full bg-white hover:bg-gray-100 text-[#14211B] font-semibold text-xs sm:text-sm border border-[#E3E7E2] transition-colors cursor-pointer"
                >
                  Architecture & Tech Stack
                </button>

                <button
                  type="button"
                  onClick={() => onStartProject(currentProduct.title)}
                  className="px-5 py-3 rounded-full bg-[#F4F6F3] hover:bg-gray-200 text-[#69766E] hover:text-[#14211B] font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Deploy for Your Business
                </button>
              </div>
            </div>

            {/* Right Column: Custom Interactive Simulated Console & Video / Screenshots Media Selector */}
            <div className="lg:col-span-6">
              <div className="bg-[#04291F] rounded-3xl p-6 sm:p-7 border border-[#8FF04F]/25 text-white shadow-2xl relative overflow-hidden text-left">
                
                {/* Media Mode Selector: Simulator vs Video vs Screenshots */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-full border border-white/10">
                    <button
                      type="button"
                      onClick={() => setMediaView('simulator')}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        mediaView === 'simulator'
                          ? 'bg-[#8FF04F] text-[#04291F] font-bold shadow-sm'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Interactive Simulator
                    </button>
                    <button
                      type="button"
                      onClick={() => setMediaView('video')}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all flex items-center gap-1 ${
                        mediaView === 'video'
                          ? 'bg-[#8FF04F] text-[#04291F] font-bold shadow-sm'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Video Demo</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMediaView('screenshots')}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all flex items-center gap-1 ${
                        mediaView === 'screenshots'
                          ? 'bg-[#8FF04F] text-[#04291F] font-bold shadow-sm'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <ImageIcon className="w-3 h-3" />
                      <span>Screenshots</span>
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-[#8FF04F] hidden sm:flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#8FF04F] animate-pulse" />
                    <span>
                      {currentProduct.id === 'pdfyako'
                        ? 'pdfyako.com'
                        : `${currentProduct.id}.mactech`}
                    </span>
                  </span>
                </div>

                {/* VIEW 1: VIDEO WALKTHROUGH DEMO */}
                {mediaView === 'video' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="relative rounded-2xl overflow-hidden bg-black/70 border border-white/10 aspect-video flex flex-col items-center justify-center p-6 text-center group cursor-pointer">
                      {/* Ambient background glowing circle */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#063B29] to-black opacity-80" />
                      
                      {/* Play Button Overlay */}
                      <div className="relative z-10 w-16 h-16 rounded-full bg-[#8FF04F] text-[#04291F] flex items-center justify-center shadow-xl shadow-[#8FF04F]/30 group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 fill-[#04291F] ml-1" />
                      </div>

                      <div className="relative z-10 mt-4">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#8FF04F] font-bold block">
                          Product Video Walkthrough
                        </span>
                        <h4 className="text-lg font-bold text-white mt-1">
                          {currentProduct.title} Platform Demo & UI Tour
                        </h4>
                        <p className="text-xs text-gray-300 mt-1 max-w-sm mx-auto">
                          Watch real-time workflows, sub-second checkout latency, and offline SQLite synchronization in action.
                        </p>
                      </div>

                      <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-gray-300">
                        HD 1080p • 2:14
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                      <span className="text-gray-300">Have a custom demo request?</span>
                      <a
                        href="https://wa.me/255627274168?text=Hello%20MacTech%20Digital,%20I%20would%20like%20a%20guided%20video%20walkthrough%20of%20your%20software."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8FF04F] font-bold hover:underline flex items-center gap-1"
                      >
                        <span>Schedule Walkthrough</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}

                {/* VIEW 2: UI SCREENSHOTS GALLERY */}
                {mediaView === 'screenshots' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#063B29] to-[#04291F] border border-white/10 p-6 min-h-[260px] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-2">
                          <span>Screenshot {screenshotIndex + 1} of {screenshots.length}</span>
                          <span className="text-[#8FF04F] font-bold">{currentProduct.title} UI</span>
                        </div>
                        <h4 className="text-lg font-bold text-white tracking-tight">
                          {screenshots[screenshotIndex]?.title}
                        </h4>
                        <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                          {screenshots[screenshotIndex]?.caption}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          {screenshots.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setScreenshotIndex(idx)}
                              className={`w-2.5 h-2.5 rounded-full transition-all ${
                                screenshotIndex === idx ? 'w-6 bg-[#8FF04F]' : 'bg-white/30'
                              }`}
                              aria-label={`Slide ${idx + 1}`}
                            />
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              setScreenshotIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1))
                            }
                            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setScreenshotIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1))
                            }
                            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-[11px] text-gray-400 font-mono">
                      High-Resolution Production Screenshots • Verified Responsive Layouts
                    </div>
                  </div>
                )}

                {/* VIEW 3: INTERACTIVE CONSOLE SIMULATOR */}
                {mediaView === 'simulator' && (
                  <>
                    {/* 1. MauzoChap: Interactive POS Barcode & Receipt Simulator */}
                    {currentProduct.id === 'mauzochap' && (
                      <div className="space-y-4">
                        {/* Live Barcode Scanner Action Bar */}
                        <div className="bg-[#063B29] p-4 rounded-2xl border border-white/10 relative overflow-hidden">
                          {isScanning && (
                            <div className="absolute inset-x-0 top-0 h-1 bg-[#8FF04F] shadow-[0_0_12px_#8FF04F] animate-pulse" />
                          )}

                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Barcode className="w-4 h-4 text-[#8FF04F]" />
                              <span className="text-xs font-bold text-white font-mono">
                                POS Terminal #04
                              </span>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                              Offline SQLite Ready
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={handleScanNext}
                              disabled={isScanning}
                              className="flex-1 py-2 px-3 rounded-xl bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] font-extrabold text-xs tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                            >
                              <Zap className="w-3.5 h-3.5 fill-[#04291F]" />
                              <span>{isScanning ? 'Reading Barcode...' : 'Scan Next Item'}</span>
                            </button>

                            <button
                              type="button"
                              onClick={handleClearCart}
                              className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-gray-300 transition-colors cursor-pointer"
                              title="Reset Cart"
                            >
                              <RotateCcw className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Active Cart Items */}
                        <div className="bg-black/25 rounded-2xl p-3 border border-white/5 space-y-1.5 max-h-44 overflow-y-auto">
                          <div className="text-[10px] font-mono uppercase text-gray-400 px-1 pb-1 border-b border-white/5 flex justify-between">
                            <span>Cart Items ({cart.length})</span>
                            <span>Amount</span>
                          </div>

                          {cart.length === 0 ? (
                            <div className="py-4 text-center text-xs text-gray-400">
                              Cart is empty. Click "Scan Next Item" above.
                            </div>
                          ) : (
                            cart.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between text-xs p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <div className="truncate pr-2">
                                  <span className="text-white font-medium block truncate">
                                    {item.name}
                                  </span>
                                  <span className="text-[10px] font-mono text-gray-400">
                                    {item.sku} • Qty {item.qty}
                                  </span>
                                </div>
                                <span className="font-mono text-[#8FF04F] text-xs shrink-0">
                                  TZS {(item.price * item.qty).toLocaleString()}
                                </span>
                              </div>
                            ))
                          )}
                        </div>

                        {/* Subtotal & EFD Total */}
                        <div className="bg-[#063B29]/70 rounded-2xl p-3 border border-white/10 space-y-1 text-xs">
                          <div className="flex justify-between text-gray-300">
                            <span>Subtotal:</span>
                            <span className="font-mono">TZS {cartSubtotal.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-gray-400 text-[11px]">
                            <span>TRA VAT 18%:</span>
                            <span className="font-mono">TZS {cartVat.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between font-bold text-white text-sm pt-1 border-t border-white/10">
                            <span>Grand Total:</span>
                            <span className="text-[#8FF04F] font-mono">
                              TZS {cartGrandTotal.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Action: Print Receipt */}
                        <button
                          type="button"
                          onClick={() => setShowThermalReceipt(!showThermalReceipt)}
                          className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Printer className="w-3.5 h-3.5 text-[#8FF04F]" />
                          <span>{showThermalReceipt ? 'Hide Thermal Receipt' : 'Preview Instant Thermal Receipt'}</span>
                        </button>

                        {/* Simulated Thermal Receipt */}
                        {showThermalReceipt && (
                          <div className="p-4 rounded-2xl bg-white text-black font-mono text-[11px] shadow-2xl animate-fadeIn space-y-2 border border-gray-300">
                            <div className="text-center pb-2 border-b border-dashed border-gray-400">
                              <div className="font-extrabold text-xs uppercase">MACTECH WHOLESALE LTD</div>
                              <div className="text-[10px] text-gray-600">DAR ES SALAAM, TANZANIA</div>
                              <div className="text-[9px] text-gray-500">TRA Z-REPORT: #2026-09418</div>
                            </div>

                            <div className="space-y-1">
                              {cart.map((item, idx) => (
                                <div key={idx} className="flex justify-between text-[10px]">
                                  <span>{item.qty}x {item.name.slice(0, 18)}</span>
                                  <span>{(item.price * item.qty).toLocaleString()}</span>
                                </div>
                              ))}
                            </div>

                            <div className="pt-2 border-t border-dashed border-gray-400 flex justify-between font-bold text-xs">
                              <span>TOTAL TZS</span>
                              <span>{cartGrandTotal.toLocaleString()}</span>
                            </div>

                            <div className="text-center pt-2 text-[9px] text-gray-500 flex flex-col items-center">
                              <QrCode className="w-8 h-8 text-black my-1" />
                              <span>FISCAL RECEIPT VERIFIED BY TRA EFD</span>
                              <span>THANK YOU / KARIBU TENA</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* 2. PdfYako: Live Wasm Compression Simulator */}
                    {currentProduct.id === 'pdfyako' && (
                      <div className="space-y-4">
                        <div className="p-5 rounded-2xl bg-[#063B29] border border-white/10 text-left">
                          <div className="flex items-center justify-between text-[11px] text-gray-300 font-mono mb-2">
                            <span className="flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5 text-[#8FF04F]" />
                              <span>Annual_Financial_Report_2026.pdf</span>
                            </span>
                            <span className="text-[#8FF04F] font-bold">Wasm Core</span>
                          </div>

                          <div className="flex items-center justify-between my-3">
                            <div>
                              <span className="text-xs text-gray-400 block font-mono">Original File</span>
                              <span className="text-xl font-extrabold text-white">24.8 MB</span>
                            </div>

                            <div className="text-center px-3">
                              <span className="text-xs font-mono text-[#8FF04F] block">
                                {pdfCompressed ? '-83% Saved' : 'Ready'}
                              </span>
                              <span className="text-lg">→</span>
                            </div>

                            <div>
                              <span className="text-xs text-gray-400 block font-mono">Optimized</span>
                              <span className="text-xl font-extrabold text-[#8FF04F]">
                                {pdfFileSize} MB
                              </span>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden my-3">
                            <div
                              className={`h-full bg-[#8FF04F] transition-all duration-500 ${
                                pdfCompressing ? 'w-3/4 animate-pulse' : pdfCompressed ? 'w-full' : 'w-0'
                              }`}
                            />
                          </div>

                          {/* Action Button */}
                          <div className="flex gap-2 mt-4">
                            <button
                              type="button"
                              onClick={handleRunPdfCompress}
                              disabled={pdfCompressing}
                              className="flex-1 py-2.5 px-4 rounded-xl bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                            >
                              <Zap className="w-3.5 h-3.5 fill-[#04291F]" />
                              <span>{pdfCompressing ? 'Compressing with Wasm...' : 'Run Dynamic Compression'}</span>
                            </button>

                            {pdfCompressed && (
                              <button
                                type="button"
                                onClick={handleResetPdf}
                                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-gray-300 transition-colors cursor-pointer"
                                title="Reset"
                              >
                                <RotateCcw className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Features checklist */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs p-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-gray-300">Data Privacy Standard</span>
                            <span className="text-[#8FF04F] font-mono font-bold">100% Client-Side Wasm</span>
                          </div>
                          <div className="flex justify-between text-xs p-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-gray-300">Cloud Data Uploaded</span>
                            <span className="text-white font-mono">0 Bytes (Zero Telemetry)</span>
                          </div>
                          <div className="flex justify-between text-xs p-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-gray-300">Suite Operations</span>
                            <span className="text-emerald-300 font-mono">Merge • Split • Convert • Protect</span>
                          </div>
                        </div>

                        {/* Direct Link to pdfyako.com */}
                        <a
                          href="https://pdfyako.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 px-4 rounded-xl bg-[#063B29] hover:bg-[#063B29]/80 border border-[#8FF04F]/40 text-[#8FF04F] font-bold text-xs transition-all flex items-center justify-center gap-2"
                        >
                          <span>Open pdfyako.com</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}

                    {/* 3. InvoicePro: Interactive Dispatch Simulator */}
                    {currentProduct.id === 'invoicepro' && (
                      <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-[#063B29] border border-white/10 text-left">
                          <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono">
                            <span>Invoice #INV-2026-089</span>
                            <span className="text-amber-400 font-bold">Pending Payment</span>
                          </div>
                          <div className="text-2xl font-extrabold text-white mt-1">
                            TZS 4,850,000
                          </div>
                          <span className="text-xs text-gray-300 block mt-1">
                            Client: Horizon Construction Ltd
                          </span>

                          <button
                            type="button"
                            onClick={handleDispatchInvoice}
                            disabled={invoiceDispatched}
                            className="mt-4 w-full py-2.5 px-4 rounded-xl bg-[#8FF04F] hover:bg-[#A5FF57] text-[#04291F] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                          >
                            <Send className="w-3.5 h-3.5 fill-[#04291F]" />
                            <span>
                              {invoiceDispatched ? 'Dispatched via WhatsApp!' : 'Simulate WhatsApp Dispatch (+255...)'}
                            </span>
                          </button>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-xs p-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-gray-300">Payment Gateway Support</span>
                            <span className="text-white font-mono">M-Pesa • Tigo Pesa • Cards</span>
                          </div>
                          <div className="flex justify-between text-xs p-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-gray-300">Direct WhatsApp Link</span>
                            <span className="text-[#8FF04F] font-mono">+255 627 274 168</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 4. Tusome360: Language & Offline PWA Simulator */}
                    {currentProduct.id === 'tusome360' && (
                      <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-[#063B29] border border-white/10 text-left">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] text-[#8FF04F] font-mono uppercase">
                              NECTA Form II Curriculum
                            </span>
                            <button
                              type="button"
                              onClick={() => setTusomeLang((l) => (l === 'EN' ? 'SW' : 'EN'))}
                              className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white flex items-center gap-1.5 cursor-pointer"
                            >
                              <Languages className="w-3 h-3 text-[#8FF04F]" />
                              <span>{tusomeLang === 'SW' ? 'Kiswahili' : 'English'}</span>
                            </button>
                          </div>

                          <div className="text-lg font-bold text-white mt-1">
                            {tusomeLang === 'SW' ? 'Maabara ya Aljebra & Milinganyo' : 'Interactive Algebra & Equation Lab'}
                          </div>
                          <span className="text-xs text-gray-300 block mt-1">
                            {tusomeLang === 'SW'
                              ? 'Inafanya kazi bila mtandao wowote (PWA Offline Package: 3.2 MB)'
                              : 'Fully functional offline without data connectivity (3.2 MB PWA)'}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-xs p-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-gray-300">Bilingual Voice Prompts</span>
                            <span className="text-[#8FF04F] font-mono">Swahili / English TTS</span>
                          </div>
                          <div className="flex justify-between text-xs p-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-gray-300">Deployment Target</span>
                            <span className="text-white font-mono">Schools & Tablets</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Bottom Console Tech Bar */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span>Engine: TypeScript & Web Standards</span>
                  <span className="text-[#8FF04F]">
                    {currentProduct.id === 'pdfyako' ? 'WebAssembly Core' : 'Architecture: Enterprise'}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
