// Service Types
export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  gradient: string;
  services: Service[];
  capabilities: string[];
  technologies: string[];
  startingPrice: string;
  typicalRoi: string[];
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  description: string;
  shortDescription: string;
  capabilities: string[];
  technologies: string[];
  processSteps: ProcessStep[];
  roiMetrics: RoiMetric[];
  faqs: FAQ[];
  idealUseCases: string[];
  startingPrice: string;
  typicalResults: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface RoiMetric {
  metric: string;
  value: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Blog Types
export interface Author {
  id: string;
  name: string;
  slug: string;
  bio: string;
  image: string;
  role: string;
  linkedin?: string;
  twitter?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: Author;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  readingTime: number;
}

// Case Study Types
export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  industry: string;
  services: string[];
  image: string;
  client?: {
    name: string;
    size: string;
    location: string;
  };
  challenge?: string;
  solution?: any[]; // Portable Text blocks
  metrics: Array<{
    label: string;
    value: string;
    suffix: string;
  }>;
  technologies?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  publishedAt: string;
  featured?: boolean;
}
