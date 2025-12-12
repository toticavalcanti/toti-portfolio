// TypeScript Types for Código Fluente Studio

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'clipe' | 'personagem' | 'banda' | 'app' | 'experimento';
  tags: string[];
  thumbnail: string;
  videoUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  whatsIncluded: string[];
  whoItsFor: string[];
  benefits: string[];
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
  platform: string;
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

export type ProjectCategory = 'todos' | 'clipe' | 'personagem' | 'banda' | 'app' | 'experimento';
