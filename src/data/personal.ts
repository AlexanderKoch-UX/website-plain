import { PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Alexander Koch',
  title: 'Softwareentwickler',
  description: 'Mit über 6 Jahren Erfahrung in der Softwareentwicklung entwickle ich moderne, skalierbare Anwendungen. Spezialisiert auf NextJS, TypeScript und Full-Stack-Entwicklung.',
  image: '/android-chrome-512x512.png',
  contact: {
    email: 'alexanderkoch@uxnetwork.eu',
    phone: '+49 1575 3635132',
    location: 'Vreden, Deutschland',
    website: 'https://alexanderkoch.dev'
  },
  social: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alexander-koch-78b9a5365/',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AlexanderKoch-UX',
      icon: 'fab fa-github'
    },
    {
      name: 'Xing',
      url: 'https://www.xing.com/profile/Alexander_Koch034926',
      icon: 'fab fa-xing'
    }
  ]
};