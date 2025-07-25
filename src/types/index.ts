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

export interface SkillNode {
  id: string;
  name: string;
  category: 'foundation' | 'frontend' | 'backend' | 'fullstack' | 'tools' | 'soft' | 'advanced';
  icon: string;
  level: number; // 1-5, where 1 is foundation and 5 is expert
  prerequisites?: string[]; // IDs of required skills
  description?: string;
  children?: SkillNode[];
  // New MindMap properties
  direction?: 'top' | 'left' | 'right' | 'bottom';
  distance?: number; // 1-5, distance from center
  mindMapCategory?: 'softskills' | 'programming' | 'teamwork' | 'business';
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