import { Project, Skill, Package, PersonalInfo, ClientTestimonial } from '@/types';
import { isString, isArray, isObject, isEmpty } from './constants';

// Data Validation Functions
export const validateProject = (project: unknown): project is Project => {
  if (!isObject(project)) return false;
  
  const p = project as Record<string, unknown>;
  return isString(p.title) && !isEmpty(p.title) &&
         isString(p.description) && !isEmpty(p.description) &&
         isArray(p.technologies) &&
         isString(p.role) && !isEmpty(p.role) &&
         isString(p.icon) && !isEmpty(p.icon);
};

export const validateSkill = (skill: unknown): skill is Skill => {
  if (!isObject(skill)) return false;
  
  const s = skill as Record<string, unknown>;
  const validCategories = ['frontend', 'backend', 'tools', 'soft'];
  
  return isString(s.name) && !isEmpty(s.name) &&
         isString(s.category) && validCategories.includes(s.category as string) &&
         isString(s.icon) && !isEmpty(s.icon);
};

export const validatePackage = (pkg: unknown): pkg is Package => {
  if (!isObject(pkg)) return false;
  
  const p = pkg as Record<string, unknown>;
  return isString(p.name) && !isEmpty(p.name) &&
         isArray(p.beschreibung) &&
         isObject(p.preis) &&
         isString((p.preis as Record<string, unknown>)?.einmalig) &&
         isString((p.preis as Record<string, unknown>)?.hosting_vertrag);
};

export const validatePersonalInfo = (info: unknown): info is PersonalInfo => {
  if (!isObject(info)) return false;
  
  const i = info as Record<string, unknown>;
  return isString(i.name) && !isEmpty(i.name) &&
         isString(i.title) && !isEmpty(i.title) &&
         isString(i.description) && !isEmpty(i.description) &&
         isString(i.image) && !isEmpty(i.image) &&
         isObject(i.contact) &&
         isArray(i.social);
};

export const validateTestimonial = (testimonial: unknown): testimonial is ClientTestimonial => {
  if (!isObject(testimonial)) return false;
  
  const t = testimonial as Record<string, unknown>;
  return isString(t.id) && !isEmpty(t.id) &&
         isString(t.clientName) && !isEmpty(t.clientName) &&
         isString(t.clientTitle) && !isEmpty(t.clientTitle) &&
         isString(t.company) && !isEmpty(t.company) &&
         isString(t.testimonial) && !isEmpty(t.testimonial) &&
         isString(t.project) && !isEmpty(t.project) &&
         typeof t.rating === 'number' && t.rating >= 1 && t.rating <= 5 &&
         isString(t.date) && !isEmpty(t.date);
};

// Data Sanitization Functions
export const sanitizeProject = (project: Partial<Project>): Project | null => {
  if (!validateProject(project)) return null;
  
  return {
    id: project.id || generateId(),
    title: project.title.trim(),
    description: project.description.trim(),
    technologies: project.technologies.filter(tech => isString(tech) && !isEmpty(tech)),
    role: project.role.trim(),
    liveUrl: project.liveUrl?.trim() || undefined,
    githubUrl: project.githubUrl?.trim() || undefined,
    icon: project.icon.trim(),
    status: project.status || 'active',
    featured: project.featured || false,
  };
};

export const sanitizeSkill = (skill: Partial<Skill>): Skill | null => {
  if (!validateSkill(skill)) return null;
  
  return {
    id: skill.id || generateId(),
    name: skill.name.trim(),
    category: skill.category as Skill['category'],
    icon: skill.icon.trim(),
    level: skill.level || 0,
    featured: skill.featured || false,
  };
};

// Array Validation Functions
export const validateAndSanitizeProjects = (projects: unknown[]): Project[] => {
  if (!isArray(projects)) return [];
  
  return projects
    .map(project => sanitizeProject(project as Partial<Project>))
    .filter((project): project is Project => project !== null);
};

export const validateAndSanitizeSkills = (skills: unknown[]): Skill[] => {
  if (!isArray(skills)) return [];
  
  return skills
    .map(skill => sanitizeSkill(skill as Partial<Skill>))
    .filter((skill): skill is Skill => skill !== null);
};

// Fallback Data Generators
export const generateFallbackProject = (): Project => ({
  id: generateId(),
  title: 'Projekt wird geladen...',
  description: 'Projektbeschreibung wird geladen...',
  technologies: [],
  role: 'Entwicklung',
  icon: 'fas fa-code',
  status: 'active',
  featured: false,
});

export const generateFallbackSkill = (): Skill => ({
  id: generateId(),
  name: 'Fähigkeit wird geladen...',
  category: 'tools',
  icon: 'fas fa-cog',
  level: 0,
  featured: false,
});

// Helper Functions
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const handleDataError = (error: Error, context: string, fallback?: unknown) => {
  console.error(`Data error in ${context}:`, error);
  return fallback || null;
};

// Safe Data Access Functions
export const safeGetProperty = <T>(
  obj: unknown, 
  path: string, 
  fallback: T
): T => {
  try {
    if (!isObject(obj)) return fallback;
    
    const keys = path.split('.');
    let current: unknown = obj;
    
    for (const key of keys) {
      if (current === null || current === undefined || !isObject(current) || !(key in current)) {
        return fallback;
      }
      current = (current as Record<string, unknown>)[key];
    }
    
    return current !== undefined ? (current as T) : fallback;
  } catch {
    return fallback;
  }
};

export const safeArrayAccess = <T>(
  array: unknown, 
  index: number, 
  fallback: T
): T => {
  try {
    if (!isArray(array) || index < 0 || index >= array.length) {
      return fallback;
    }
    const value = array[index];
    return value !== undefined && value !== null ? value as T : fallback;
  } catch {
    return fallback;
  }
};