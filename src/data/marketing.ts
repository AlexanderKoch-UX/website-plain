import { MarketingPoint, ServiceArea } from '@/types';

export const marketingPoints: MarketingPoint[] = [
  {
    title: 'Moderne Technologien',
    description: 'Schnelle, zukunftssichere Weblösungen',
    icon: 'fas fa-rocket',
    benefits: [
      'Hohe Performance',
      'Responsive Design',
      'SEO-optimiert',
      'Skalierbar'
    ]
  },
  {
    title: 'Full-Stack Expertise',
    description: 'Frontend bis Backend - alles aus einer Hand',
    icon: 'fas fa-layer-group',
    benefits: [
      'Frontend & Backend',
      'Datenbank-Optimierung',
      'API-Integration',
      'Komplettlösungen'
    ]
  },
  {
    title: 'Persönliche Betreuung',
    description: 'Direkter Kontakt und individuelle Lösungen',
    icon: 'fas fa-handshake',
    benefits: [
      'Persönlicher Kontakt',
      'Flexible Zeiten',
      'Regelmäßige Updates',
      'Langfristige Betreuung'
    ]
  },
  {
    title: 'Bewährte Methodik',
    description: 'Strukturierte Prozesse für erfolgreiche Projekte',
    icon: 'fas fa-tasks',
    benefits: [
      'Klare Roadmaps',
      'Agile Entwicklung',
      'Transparente Kommunikation',
      'Termintreue'
    ]
  }
];

export const serviceAreas: ServiceArea[] = [
  {
    title: 'Web Development',
    description: 'Moderne Websites & Webanwendungen',
    icon: 'fas fa-globe',
    services: [
      'Responsive Websites',
      'E-Commerce',
      'CMS-Lösungen',
      'Web Apps',
      'Landing Pages',
      'Corporate Sites'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'SCSS', 'Node.js']
  },
  {
    title: 'Backend Development',
    description: 'Server & API-Entwicklung',
    icon: 'fas fa-server',
    services: [
      'REST APIs',
      'Datenbanken',
      'Server-Setup',
      'Cloud-Dienste',
      'Performance',
      'Sicherheit'
    ],
    technologies: ['Node.js', 'Python', 'MySQL', 'REST APIs', 'Cloud']
  },
  {
    title: 'Consulting & Support',
    description: 'Beratung & langfristiger Support',
    icon: 'fas fa-lightbulb',
    services: [
      'Tech-Beratung',
      'Code Reviews',
      'Performance-Checks',
      'Wartung',
      'Mentoring',
      'Coaching'
    ],
    technologies: ['Projektmanagement', 'Agile', 'Code Quality', 'Best Practices']
  }
];