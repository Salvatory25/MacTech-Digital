import type { Project, Service, Article } from '../types';

export const COMPANY_INFO = {
  name: 'MacTech Digital',
  legalName: 'MacTech Digital Solutions Limited',
  tagline: 'Turning Ideas into Digital Solutions.',
  location: 'Arusha, Tanzania',
  timezone: 'East Africa Time (EAT • UTC+3)',
  email: 'info@mactechdigital.co.tz',
  projectsEmail: 'projects@mactechdigital.co.tz',
  phone: '+255 627 274 168',
  phoneRaw: '+255627274168',
  phoneDisplay: '+255 (0) 627 274 168',
  whatsappNumber: '+255627274168',
  whatsappUrl: 'https://wa.me/255627274168?text=Hello%20MacTech%20Digital%20team,%20I%20would%20like%20to%20discuss%20a%20digital%20project.',
  logoUrl: '/mactech-logo.png',
  linkedin: 'https://linkedin.com/company/mactech-digital-solutions',
  github: 'https://github.com/mactech-digital',
  twitter: 'https://x.com/MacTechDigital',
  instagram: 'https://instagram.com/mactechdigital',
};


export const PROJECTS_DATA: Project[] = [
  {
    id: 'mauzochap',
    title: 'MauzoChap',
    subtitle: 'Point of Sale & Multi-Branch Retail Engine',
    category: 'Commercial SaaS & POS',
    status: 'Launched',
    statusColor: 'emerald',
    badge: 'Core Proprietary Product',
    description: 'An offline-first, high-performance sales and retail management software designed to eliminate stock discrepancy, accelerate customer checkout, and provide real-time sales visibility across branches.',
    problem: 'Retailers and wholesale distributors in East Africa frequently lose revenue due to slow manual checkout processes, unstable internet connectivity, and fragmented paper-based inventory tracking.',
    solution: 'MauzoChap introduces local SQLite caching with background WebSocket synchronization, instant thermal Bluetooth receipting, barcode scanning, and multi-user cashier permissions.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'SQLite Offline Sync', 'Tailwind CSS'],
    metrics: [
      { label: 'Checkout Latency', value: '< 1.2s' },
      { label: 'Offline Resiliency', value: '100% Local Cache' },
      { label: 'SKU Capacity', value: '50,000+ Items' },
      { label: 'TRA / VAT Compatibility', value: 'Ready' }
    ],
    keyFeatures: [
      'Offline-capable cashier checkout with automatic conflict resolution upon reconnection',
      'Multi-branch inventory transfers and threshold low-stock SMS notifications',
      'Daily profit, tax, and sales performance reports in one-click PDF/Excel formats',
      'Role-based permissions (Cashier, Storekeeper, Branch Manager, Super Admin)'
    ],
    externalUrl: 'https://mauzochap.mactechdigital.co.tz'
  },
  {
    id: 'pdfyako',
    title: 'PdfYako',
    subtitle: 'High-Speed Online PDF & Document Suite',
    category: 'SaaS & Document Utility',
    status: 'Launched',
    statusColor: 'emerald',
    badge: 'Commercial Platform',
    description: 'A privacy-first, lightning-fast digital document tool suite engineered to merge, split, compress, convert, and protect PDF files directly in the browser with zero bloat.',
    problem: 'Professionals, students, and businesses frequently need to compress government/tax documents or merge tender proposals, but face slow uploads, file size paywalls, or privacy concerns with foreign platforms.',
    solution: 'PdfYako utilizes high-performance WebAssembly (Wasm) and client-side rendering so files are processed locally on device with maximum privacy, zero data leakage, and instantaneous download speeds.',
    techStack: ['Next.js', 'TypeScript', 'WebAssembly (Wasm)', 'Tailwind CSS', 'PDF-Lib', 'Cloudflare Edge'],
    metrics: [
      { label: 'Processing Latency', value: '< 800ms Wasm' },
      { label: 'File Privacy', value: '100% Client-Side' },
      { label: 'Availability', value: 'Globally Accessible' },
      { label: 'Platform URL', value: 'pdfyako.com' }
    ],
    keyFeatures: [
      'Zero-upload client-side PDF compression, merging, splitting, and reordering',
      'High-fidelity format conversion between PDF, Word, Excel, and images',
      'Document security encryption, password protection, and digital watermarking',
      'Ultra-lightweight mobile experience optimized for East African bandwidth realities'
    ],
    externalUrl: 'https://pdfyako.com'
  },
  {
    id: 'invoicepro',
    title: 'InvoicePro',
    subtitle: 'Invoicing, Quotations & Receivable Ledgers',
    category: 'Business Productivity Tool',
    status: 'In Active Development',
    statusColor: 'amber',
    badge: 'Beta In Development',
    description: 'A purpose-built business document management platform enabling African SMEs to issue professional quotations, tax invoices, and payment receipts with integrated payment reconciliation.',
    problem: 'Freelancers, consultants, and emerging enterprises spend countless hours formatting spreadsheets, tracking unpaid invoices, and reconciling multiple currency transfers manually.',
    solution: 'InvoicePro automates document life-cycles from draft quote to approved tax invoice, complete with customer payment portals, automated reminder triggers, and multi-currency ledgers.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PDFKit', 'Stripe & Mobile Money APIs'],
    metrics: [
      { label: 'Currencies Supported', value: 'TZS, KES, USD, EUR' },
      { label: 'Generation Speed', value: 'Instant Vector PDF' },
      { label: 'Development Phase', value: 'Closed Beta v0.8' },
      { label: 'Target Launch', value: 'Q4 2026' }
    ],
    keyFeatures: [
      'Custom-branded invoice designs with vector corporate stamp and signature embedding',
      'Automated email and WhatsApp payment link dispatch with reminder schedule',
      'Dual-currency display for Tanzanian Shillings (TZS) and US Dollars (USD)',
      'Exportable client statements and end-of-year tax summary documents'
    ]
  },
  {
    id: 'tusome360',
    title: 'Tusome360',
    subtitle: 'Interactive Digital Learning Ecosystem',
    category: 'Education Technology',
    status: 'Concept & Prototype',
    statusColor: 'purple',
    badge: 'Design Concept & Prototype',
    description: 'An interactive e-learning platform architecture designed to make quality secondary and vocational educational content accessible to Tanzanian students, teachers, and institutions.',
    problem: 'High data costs and limited high-speed internet in suburban and rural regions create severe educational inequality, preventing students from accessing digital textbooks and video lessons.',
    solution: 'Tusome360 combines progressive web app caching, highly compressed educational media, interactive competency quizzes, and teacher performance dashboards.',
    techStack: ['Figma Design System', 'React Native / PWA', 'WebAssembly Video Engine', 'GraphQL', 'Tailwind CSS'],
    metrics: [
      { label: 'Data Compression', value: 'Up to 70% lighter' },
      { label: 'Curriculum Align', value: 'NECTA Standard' },
      { label: 'Status', value: 'Interactive Prototype' },
      { label: 'Access Modality', value: 'Mobile-first PWA' }
    ],
    keyFeatures: [
      'Bilingual learning modules available in English and Swahili',
      'Low-bandwidth offline mode allowing lesson download during off-peak hours',
      'Continuous assessment engine with instant grading and knowledge gap analytics',
      'Institutional portal for headteachers to monitor syllabus completion rates'
    ]
  },
  {
    id: 'kilimosmart',
    title: 'KilimoSmart Supply Hub',
    subtitle: 'Agricultural Produce Aggregation & Logistics',
    category: 'Custom Enterprise System',
    status: 'Client Solution',
    statusColor: 'blue',
    badge: 'Completed Client System',
    description: 'A tailored supply-chain aggregation platform built for an agricultural cooperative in Morogoro, tracking grain collection, bulk weighing, farmer payouts, and transport logistics.',
    problem: 'Disorganized manual paper weighbills resulted in crop shrinkage disputes, delayed farmer payments, and lack of traceability between harvest collection centers and central storage silos.',
    solution: 'Designed and deployed a responsive web-based collection center console paired with mobile dispatch logging, digital scale integration, and instant automated SMS payout notifications.',
    techStack: ['React', 'TypeScript', 'Node.js API', 'PostgreSQL', 'Twilio SMS Gateway', 'Tailwind CSS'],
    metrics: [
      { label: 'Collection Centers', value: '14 Active Hubs' },
      { label: 'Transaction Integrity', value: 'Zero Ledger Discrepancy' },
      { label: 'Payout Processing', value: 'Under 10 Minutes' },
      { label: 'Deployment State', value: 'Production Deployed' }
    ],
    keyFeatures: [
      'Digital weighbridge data logging with automated moisture deduction algorithms',
      'Farmer digital profile registry with National ID (NIDA) verification',
      'Silo inventory batch tracking from receipt through final grain miller delivery',
      'Executive dashboard showing daily tonnage, price averages, and transport dispatch'
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Design & Development',
    shortDesc: 'Modern, high-performance corporate websites and responsive web applications built for speed, engagement, and conversion.',
    fullDesc: 'We build digital flagship websites and web applications that reflect your brand credibility and drive measurable commercial results. From lightning-fast corporate portals to complex web applications, our engineering combines clean code, semantic structure, responsive finesse, and search engine excellence.',
    iconName: 'Globe',
    subservices: [
      'Corporate & Institutional Websites',
      'High-Conversion Business Landing Pages',
      'Modern E-Commerce Storefronts',
      'Custom Web Applications & Portals'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'PostgreSQL'],
    typicalTimeline: '3 to 6 weeks',
    deliverables: [
      'Fully responsive, mobile-optimized web application',
      'Comprehensive content management setup',
      'Full Technical SEO setup with sitemaps & Schema markup',
      '100% Core Web Vitals optimization score guarantee'
    ]
  },
  {
    id: 'mobile-development',
    number: '02',
    title: 'Mobile App Development',
    shortDesc: 'Native Android and cross-platform mobile applications crafted for intuitive touch interactions and resilient offline experiences.',
    fullDesc: 'We turn mobile concepts into sleek, dependable applications for smartphones and tablets. By engineering mobile applications with offline persistence, minimal battery consumption, and lightweight data footprints, we ensure your app performs flawlessly even in low-bandwidth environments.',
    iconName: 'Smartphone',
    subservices: [
      'Native Android Application Engineering',
      'Cross-Platform iOS & Android Apps',
      'Mobile-First Progressive Web Apps (PWAs)',
      'Continuous Mobile Maintenance & Store Deployment'
    ],
    technologies: ['Flutter', 'React Native', 'Kotlin', 'TypeScript', 'Firebase', 'SQLite'],
    typicalTimeline: '6 to 12 weeks',
    deliverables: [
      'Signed production binaries for Google Play Store',
      'Secure tokenized authentication and API backend integration',
      'Push notification engine and background synchronization',
      'Detailed API documentation and post-launch maintenance period'
    ]
  },
  {
    id: 'custom-software',
    number: '03',
    title: 'Custom Software Development',
    shortDesc: 'Robust business management systems, POS software, SaaS platforms, and automated workflows engineered to scale your operations.',
    fullDesc: 'Off-the-shelf software often forces you to compromise your unique business processes. We architect tailored software systems that fit your precise operational workflows, including inventory control, multi-branch POS, billing pipelines, customer portals, and enterprise resource planning.',
    iconName: 'Cpu',
    subservices: [
      'Business Management & ERP Systems',
      'Point of Sale (POS) & Inventory Systems',
      'Multi-Tenant SaaS Product Architectures',
      'Automated Workflow & Data Pipeline Engines'
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'Redis', 'REST/GraphQL'],
    typicalTimeline: '8 to 16 weeks',
    deliverables: [
      'Modular microservices or monolith architecture tailored to budget',
      'Role-based access control (RBAC) with audit logs',
      'Automated database migrations, backup schedules & monitoring',
      'Complete intellectual property and source code ownership transfer'
    ]
  },
  {
    id: 'ui-ux-design',
    number: '04',
    title: 'UI/UX Design & Product Strategy',
    shortDesc: 'User research, wireframing, design systems, and interactive prototypes designed to delight customers and maximize clarity.',
    fullDesc: 'Great software starts with deep human empathy and rigorous structural clarity. We conduct user research, establish comprehensive design systems in Figma, craft intuitive user journeys, and test interactive prototypes before writing a single line of production code.',
    iconName: 'Layout',
    subservices: [
      'User Research, Persona Modeling & Journey Maps',
      'Wireframing & High-Fidelity UI Prototypes',
      'Scalable Design Systems & Component Libraries',
      'Usability Audits & Conversion Rate Optimization'
    ],
    technologies: ['Figma', 'FigJam', 'Tokens Studio', 'Interactive Prototyping', 'User Testing'],
    typicalTimeline: '2 to 5 weeks',
    deliverables: [
      'Complete Figma design workspace with auto-layout components',
      'Interactive clickable prototypes for stakeholder demonstrations',
      'Design token specifications (colors, spacing, typography)',
      'Developer handoff documentation with asset export packets'
    ]
  },
  {
    id: 'branding-design',
    number: '05',
    title: 'Branding & Graphic Identity',
    shortDesc: 'Memorable brand identities, logos, marketing collateral, and digital visual assets that command authority and trust.',
    fullDesc: 'In a crowded marketplace, visual consistency builds instant credibility. We define your brand voice, color harmony, typography hierarchies, logo marks, and visual collateral to ensure your business stands out across print, digital, and mobile touchpoints.',
    iconName: 'Palette',
    subservices: [
      'Comprehensive Brand Identity & Logo Systems',
      'Corporate Stationery & Marketing Collateral',
      'Social Media Campaign Assets & Templates',
      'Investor Pitch Decks & Executive Presentations'
    ],
    technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Vector Systems', 'Brand Guidelines'],
    typicalTimeline: '2 to 4 weeks',
    deliverables: [
      'Vector logo package (SVG, EPS, PNG, monochrome, inverted)',
      'Comprehensive Brand Style Guide (usage rules, typography, palettes)',
      'Business card, letterhead, and document presentation templates',
      'Digital social banner and avatar kit'
    ]
  },
  {
    id: 'seo-marketing',
    number: '06',
    title: 'Digital Marketing & Technical SEO',
    shortDesc: 'Search visibility, technical site audits, content architecture, and strategic digital campaigns that capture high-intent buyers.',
    fullDesc: 'Building a great website is only the first step; your target audience must be able to discover it. We implement rigorous technical SEO, local Tanzanian and regional East African search targeting, structured Schema markup, and high-intent content strategies to drive organic commercial inquiries.',
    iconName: 'TrendingUp',
    subservices: [
      'Technical SEO Audits & Core Web Vitals Fixes',
      'Local SEO (Google Business & Regional Targeting)',
      'High-Intent Content Architecture & On-Page SEO',
      'Digital Growth Analytics & Conversion Tracking'
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'Schema.org JSON-LD', 'Google Analytics 4'],
    typicalTimeline: 'Ongoing / 4-week foundation',
    deliverables: [
      'Complete technical SEO crawl audit with actionable remediations',
      'Schema.org structured data implementation',
      'Keyword strategy tailored to Tanzanian & East African markets',
      'Custom Google Analytics 4 conversion tracking dashboard'
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Unpack the Challenge & Define Success',
    description: 'We sit down with you to dissect your business model, understand user expectations, identify operational bottlenecks, and establish clear technical milestones.',
    activities: [
      'Stakeholder consultation & business logic mapping',
      'Target user persona and workflow analysis',
      'Technical feasibility & architecture assessment',
      'Defined scope of work, timeline, and deliverables'
    ]
  },
  {
    step: '02',
    title: 'Design',
    tagline: 'Architect the Experience & Prototype',
    description: 'We translate requirements into intuitive user journeys, wireframes, and production-ready visual interfaces tested against real user behavior.',
    activities: [
      'Information architecture and database schema design',
      'Interactive Figma prototypes for rapid stakeholder feedback',
      'Component-based design system tailored to your brand identity',
      'Approval of final screens before code implementation'
    ]
  },
  {
    step: '03',
    title: 'Develop',
    tagline: 'Engineer with Precision & Test Rigorously',
    description: 'Our engineers write clean, maintainable, modern TypeScript code with strict type safety, modular component structure, and robust automated testing.',
    activities: [
      'Agile sprint cycles with transparent progress updates',
      'Clean, modular code adhering to international standards',
      'Cross-browser, responsive, and performance benchmarking',
      'Security auditing, data encryption, and validation checks'
    ]
  },
  {
    step: '04',
    title: 'Launch & Grow',
    tagline: 'Deploy, Train, Monitor & Support',
    description: 'We orchestrate zero-downtime production deployment, conduct comprehensive staff onboarding, and provide continuous technical support.',
    activities: [
      'Production cloud deployment (Vercel, AWS, or local VPS)',
      'Staff training sessions and administrator documentation',
      'Continuous server monitoring, error telemetry, and uptime alerts',
      'Structured ongoing maintenance and feature enhancement SLAs'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Solutions Tailored to Business Needs',
    description: 'We reject cookie-cutter templates. Every system we build is custom-engineered to solve the real operational friction points of your enterprise.',
    icon: 'Target'
  },
  {
    title: 'User-Centered Design Philosophy',
    description: 'Software succeeds only when users adopt it effortlessly. We craft clean, frictionless interfaces that reduce onboarding time and human error.',
    icon: 'Users'
  },
  {
    title: 'Maintainable, Scalable Architecture',
    description: 'We write modular TypeScript code with clean architecture, meaning your application grows with your business without requiring costly rewrites.',
    icon: 'Layers'
  },
  {
    title: 'Transparent, Honest Communication',
    description: 'No technical jargon designed to confuse you. You receive clear milestone reports, candid technical advice, and predictable cost structures.',
    icon: 'MessageSquareCheck'
  },
  {
    title: 'Practical, Pragmatic Technology',
    description: 'We choose battle-tested technologies that solve business problems reliably, focusing on uptime, offline resilience, and rapid load times.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Dedicated Ongoing Support & Care',
    description: 'Our relationship does not end at deployment. We stand behind our software with responsive technical support, backups, and security patches.',
    icon: 'LifeBuoy'
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: '1',
    slug: 'business-digitalization-tanzania-smes',
    title: 'Business Digitalization in Tanzania: Moving from Manual Books to Cloud Systems',
    excerpt: 'How modern point-of-sale and cloud bookkeeping platforms are helping Tanzanian merchants protect margins, track inventory, and comply with tax standards.',
    category: 'Business Digitalization',
    readTime: '5 min read',
    publishDate: 'October 2026',
    author: {
      name: 'MacTech Engineering Team',
      role: 'Enterprise Systems Practice'
    },
    tags: ['Tanzania Business', 'POS Systems', 'MauzoChap', 'SME Automation'],
    content: [
      'In bustling commercial districts like Kariakoo in Dar es Salaam, Arusha, and Mwanza, thousands of transactions take place every minute. Historically, business owners relied on paper ledgers, desktop spreadsheets, or simple memory to keep track of purchases, receivables, and stock.',
      'However, as businesses expand across multiple branches, manual record-keeping presents severe operational risks: inventory shrinkage goes unnoticed, reconciliation takes days, and owners are tied to physical premises.',
      'Modern cloud-native point of sale systems like MauzoChap bridge this gap by bringing enterprise-level inventory controls directly to affordable tablets and computers. With local SQLite caching, store cashiers can continue serving customers seamlessly even during sudden power outages or internet disruptions.',
      'Key takeaway for Tanzanian entrepreneurs: Digitalization is no longer a luxury reserved for multinational banks; it is the fundamental tool that frees business owners from daily manual friction so they can focus on strategic growth.'
    ]
  },
  {
    id: '2',
    slug: 'modern-web-architecture-speed-conversion',
    title: 'Why Website Speed and Core Web Vitals Dictate Revenue in 2026',
    excerpt: 'Examining why modern corporate web development must prioritize lightweight JavaScript bundles, sub-second LCP scores, and responsive layout stability.',
    category: 'Web Engineering',
    readTime: '6 min read',
    publishDate: 'September 2026',
    author: {
      name: 'MacTech Frontend Architecture',
      role: 'Web Platform Team'
    },
    tags: ['Web Performance', 'Core Web Vitals', 'React', 'SEO'],
    content: [
      'A corporate website is frequently the first touchpoint between an ambitious company and high-value prospective clients or institutional partners. Yet many business websites remain bogged down with bloated plugins, uncompressed images, and render-blocking scripts.',
      'Research consistently proves that when mobile page load exceeds 3 seconds, over 53% of visits are abandoned. In regions where mobile network latency fluctuates, efficient asset delivery is vital.',
      'By adopting modern frontend architectures—such as Vite-bundled React, atomic CSS with Tailwind, responsive image formats (AVIF/WebP), and clean semantic HTML—we achieve sub-second Largest Contentful Paint (LCP) times.',
      'When your corporate website loads instantaneously and maintains zero cumulative layout shift, prospective clients perceive your organization as competent, modern, and reliable before reading a single word of your proposal.'
    ]
  },
  {
    id: '3',
    slug: 'offline-first-mobile-apps-east-africa',
    title: 'Building Resilient Offline-First Mobile Applications for East Africa',
    excerpt: 'Architectural strategies for designing smartphone software that operates gracefully regardless of network quality, dropped packets, or rural connectivity.',
    category: 'Mobile & POS',
    readTime: '7 min read',
    publishDate: 'August 2026',
    author: {
      name: 'MacTech Mobile Practice',
      role: 'Application Engineering'
    },
    tags: ['Mobile Development', 'Offline Sync', 'Android', 'East Africa'],
    content: [
      'Developing mobile applications for emerging markets requires fundamentally different engineering choices than developing for high-bandwidth metropolitan tech hubs. Field agents, logistics drivers, and rural healthcare workers routinely operate in zero-connectivity environments.',
      'An "offline-first" architecture assumes the network is unavailable by default. All data read and write operations occur immediately against a local device database (such as SQLite or Room), providing the user with zero perceived latency.',
      'In the background, a synchronization queue tracks mutations with monotonic sequence numbers. When the device reconnects to Wi-Fi or cellular networks, synchronization resolves conflicts cleanly using deterministic server rules.',
      'This resilient approach eliminates frustrating loading spinners and guarantees data integrity, making business operations dependable regardless of physical geography.'
    ]
  },
  {
    id: '4',
    slug: 'technical-seo-strategies-tanzanian-companies',
    title: 'Technical SEO Strategies for Tanzanian Companies Competing Regionally',
    excerpt: 'A practical roadmap for structuring corporate websites to rank organically for competitive search terms in East Africa and international markets.',
    category: 'SEO & Growth',
    readTime: '5 min read',
    publishDate: 'July 2026',
    author: {
      name: 'MacTech Growth Lab',
      role: 'SEO & Search Strategy'
    },
    tags: ['Technical SEO', 'Structured Data', 'Regional Growth'],
    content: [
      'Search engine optimization in East Africa has evolved dramatically. It is no longer sufficient to repeat keywords across page headers. Modern search engines demand technical excellence, localized authority, and semantic content depth.',
      'Essential elements include: valid Schema.org Organization and LocalBusiness JSON-LD markup, explicit geo-targeting signals, lightning-fast mobile performance, and authoritative topical coverage.',
      'At MacTech Digital, every website we deliver is pre-configured with clean XML sitemaps, automated OpenGraph social preview tags, proper canonical routing, and accessibility-first contrast ratios.',
      'By laying an impeccable technical foundation, our clients consistently outrank competitors who rely on outdated marketing tactics.'
    ]
  }
];

export const FAQS_DATA = [
  {
    question: 'Where is MacTech Digital based and what regions do you serve?',
    answer: 'MacTech Digital Solutions Limited is based in Arusha, Tanzania. We serve clients across Tanzania, East Africa (Kenya, Uganda, Rwanda), and international organizations requiring high-standard digital engineering.'
  },
  {
    question: 'How do you structure project pricing and payments?',
    answer: 'We provide transparent, fixed-scope milestone pricing or monthly sprint arrangements depending on the nature of your project. Typically, projects are structured into clear milestone stages: Discovery & Prototype (30%), Core Development (40%), and Final Testing & Deployment (30%).'
  },
  {
    question: 'Who owns the intellectual property and code once a project is finished?',
    answer: 'You do. Upon full completion and settlement of the agreed project fees, 100% of the custom source code, design assets, and intellectual property belong entirely to your company.'
  },
  {
    question: 'Can you integrate existing payment gateways like M-Pesa, Airtel Money, or Tigo Pesa?',
    answer: 'Yes. We have extensive experience integrating mobile money gateways, local bank merchant APIs (such as CRDB and NMB), and international providers like Stripe and Flutterwave into websites, custom software, and mobile apps.'
  },
  {
    question: 'Do you provide training and post-launch maintenance?',
    answer: 'Yes. Every project includes structured administrator and staff training sessions, thorough documentation, and a post-launch warranty period. We also offer ongoing maintenance SLAs for security updates, performance monitoring, and continuous feature development.'
  }
];
