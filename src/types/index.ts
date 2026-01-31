/**
 * Core TypeScript interfaces for BarnNorth Studios Portfolio
 */

export type ProjectCategory = 'ai-art' | 'web-apps' | 'experiments' | 'open-source' | 'creative-tech';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface BuiltWithTool {
  name: string;
  logo: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  tools?: string;
  location?: string;
  slug: string;
  liveUrl?: string;
  repoUrl?: string;
  features?: string;
  externalLink?: string;
  tags?: string[];
  builtWith?: BuiltWithTool[];
}

export interface PhotographerInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  awards: string[];
  clients: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    behance?: string;
    twitter?: string;
    github?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'collaboration' | 'commission' | 'inquiry';
  message: string;
  timestamp: Date;
}
