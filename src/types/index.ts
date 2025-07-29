export interface Package {
  id?: string;
  name: string;
  beschreibung: string[];
  preis: {
    einmalig: string;
    hosting_vertrag: string;
  };
}

export interface Project {
  id?: string;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  icon: string;
  status?: 'active' | 'completed' | 'archived';
  featured?: boolean;
}

export interface Skill {
  id?: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  icon: string;
  level?: number; // 1-5 or 1-10 scale
  featured?: boolean;
}



export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  website: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  image: string;
  contact: ContactInfo;
  social: SocialLink[];
}

export interface ClientTestimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  company: string;
  website?: string;
  testimonial: string;
  project: string;
  image?: string;
  rating: number; // 1-5 stars
  date: string;
}

export interface MarketingPoint {
  title: string;
  description: string;
  icon: string;
  benefits?: string[];
}

export interface ServiceArea {
  title: string;
  description: string;
  icon: string;
  services: string[];
  technologies?: string[];
}

export interface AboutSection {
  title: string;
  content: string[];
  highlights: string[];
  image?: string;
}

// Accessibility Widget Types
export interface A11yWidgetConfig {
  position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  theme: 'light' | 'dark' | 'auto';
  language: 'de' | 'en';
  showToggleText: boolean;
}

// Global Window Interface Extension
declare global {
  interface Window {
    A11Y_WIDGET_CONFIG?: A11yWidgetConfig;
  }
}