export interface Package {
  name: string;
  beschreibung: string[];
  preis: {
    einmalig: string;
    hosting_vertrag: string;
  };
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  icon: string;
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