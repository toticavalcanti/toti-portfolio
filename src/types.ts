// TypeScript Types for Código Fluente Studio

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'clipe' | 'personagem' | 'banda' | 'app' | 'experimento' | 'producao-musical' | 'educacao';
  tags: string[];
  thumbnail: string;
  videoUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  storeUrl?: string;  // Para lojas adicionais (Colab55, etc.)
  featured: boolean;
  date: string;
}

// Pricing Types
export interface PricingRange {
  name: string;
  price: string;
  description: string;
  ideal?: string;
  breakdown?: string[];
  timeline?: string;
  iterations?: string;
}

export interface PricingExample {
  description: string;
  calculation: string;
  total: string;
}

export interface EquipmentPackage {
  name: string;
  price: string;
  includes: string;
}

export interface AddOn {
  name: string;
  price: string;
}

export interface UseCase {
  name: string;
  description: string;
  details: string;
}

export interface Pricing {
  model: string; // 'por minuto', 'por hora', 'por quantidade', 'por projeto'
  unit: string;
  ranges: PricingRange[];
  discounts?: string[];
  equipment?: {
    note: string;
    packages: EquipmentPackage[];
  };
  examples: PricingExample[];
}

// Service Type (updated with pricing)
export interface Service {
  id: string;
  title: string;
  icon: string;
  tagline?: string;
  description: string;
  pricing?: Pricing;
  whatsIncluded: string[];
  stylesNote?: string; // For music production
  equipmentRequired?: {
    title: string;
    items: string[];
  }; // For pocket shows
  addOns?: AddOn[];
  useCases?: (string | UseCase)[];
  whoItsFor: string[];
  benefits: string[];
  realExamples?: string[];
  technologies?: string[];
  category?: 'software' | 'ai' | 'audiovisual' | 'music-production' | 'live-performance' | 'digital-character' | 'visual-design';
  detailedDescription?: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  thumbnail: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

export type ProjectCategory = 'todos' | 'clipe' | 'personagem' | 'banda' | 'app' | 'experimento' | 'producao-musical' | 'educacao';

// YouTube API Types
export interface YouTubeChannelData {
  channelId?: string;
  channelTitle: string;
  description?: string;
  thumbnail: string;
  subscriberCount: string | null;
  videoCount: string | null;
  viewCount?: string | null;
}

export interface YouTubeVideoData {
  videoId: string;
  title: string;
  description?: string;
  channelTitle: string;
  publishedAt: string;
  thumbnail: string;
  viewCount: string | null;
  likeCount?: string | null;
}

// Channel Type
export interface Channel {
  id: string;
  name: string;
  handle: string;
  url: string;
  description: string;
  thumbnail?: string; // URL da thumbnail do canal
  category: 'music' | 'tech' | 'character' | 'films' | 'label';
  status: 'active' | 'lab';
  featured: boolean;
}
