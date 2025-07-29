// Global Constants
export const APP_CONFIG = {
  name: 'Alexander Koch Portfolio',
  version: '1.0.0',
  description: 'Modern portfolio website for Alexander Koch',
  author: 'Alexander Koch',
  keywords: ['portfolio', 'web development', 'ui/ux', 'alexander koch'],
  url: 'https://alexanderkoch.dev',
} as const;

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
} as const;

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const;

export const ACCESSIBILITY = {
  skipToContent: 'Zum Hauptinhalt springen',
  ariaLabels: {
    navigation: 'Hauptnavigation',
    socialLinks: 'Social Media Links',
    contactForm: 'Kontaktformular',
    projectCard: 'Projektdetails',
    skillCard: 'Fähigkeit',
  },
} as const;

export const SEO_DEFAULTS = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    site_name: APP_CONFIG.name,
  },
  twitter: {
    cardType: 'summary_large_image',
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  general: 'Ein unerwarteter Fehler ist aufgetreten',
  network: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung',
  notFound: 'Die angeforderte Seite wurde nicht gefunden',
  server: 'Serverfehler. Bitte versuchen Sie es später erneut',
  validation: 'Bitte überprüfen Sie Ihre Eingaben',
  timeout: 'Die Anfrage hat zu lange gedauert',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  emailSent: 'E-Mail wurde erfolgreich gesendet',
  formSubmitted: 'Formular wurde erfolgreich übermittelt',
  copied: 'In die Zwischenablage kopiert',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  theme: 'alexanderkoch_theme',
  language: 'alexanderkoch_language',
  accessibility: 'alexanderkoch_a11y',
  consent: 'alexanderkoch_consent',
} as const;

// Environment Variables Validation
export const validateEnvironment = () => {
  const requiredVars: string[] = [];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn('Missing environment variables:', missingVars);
  }
  
  return {
    isValid: missingVars.length === 0,
    missing: missingVars,
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
  };
};

// Type Guards
export const isString = (value: unknown): value is string => 
  typeof value === 'string';

export const isNumber = (value: unknown): value is number => 
  typeof value === 'number' && !isNaN(value);

export const isArray = <T>(value: unknown): value is T[] => 
  Array.isArray(value);

export const isObject = (value: unknown): value is Record<string, unknown> => 
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) return true;
  if (isString(value)) return value.trim().length === 0;
  if (isArray(value)) return value.length === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  return false;
};