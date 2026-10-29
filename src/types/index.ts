export type ProjectStatus = 'Launched' | 'In Active Development' | 'Concept & Prototype' | 'Client Solution';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: ProjectStatus;
  statusColor: 'emerald' | 'amber' | 'blue' | 'purple';
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  externalUrl?: string;
  badge?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  subservices: string[];
  technologies: string[];
  typicalTimeline: string;
  deliverables: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Business Digitalization' | 'Web Engineering' | 'Mobile & POS' | 'SEO & Growth';
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  companyName?: string;
  serviceRequired: string;
  estimatedBudget?: string;
  projectDescription: string;
  agreeToPrivacy: boolean;
  honeypot?: string;
}
