import { MarketingPoint, ServiceArea, AboutSection } from '@/types';

export const marketingPoints: MarketingPoint[] = [
  {
    title: 'Moderne Webtechnologien',
    description: 'Entwicklung mit neuesten Technologien für zukunftssichere Lösungen',
    icon: 'fas fa-rocket',
    benefits: [
      'Hohe Performance und Geschwindigkeit',
      'Responsive Design für alle Geräte',
      'SEO-optimierte Entwicklung',
      'Skalierbare Architektur'
    ]
  },
  {
    title: 'Full-Stack Expertise',
    description: 'Von der Datenbank bis zur Benutzeroberfläche - alles aus einer Hand',
    icon: 'fas fa-layer-group',
    benefits: [
      'Frontend und Backend Development',
      'Datenbankdesign und -optimierung',
      'API-Entwicklung und Integration',
      'Komplette Projektabwicklung'
    ]
  },
  {
    title: 'Persönliche Betreuung',
    description: 'Direkter Kontakt und individuelle Lösungen für Ihr Unternehmen',
    icon: 'fas fa-handshake',
    benefits: [
      'Persönlicher Ansprechpartner',
      'Flexible Arbeitszeiten',
      'Regelmäßige Updates',
      'Langfristige Partnerschaft'
    ]
  },
  {
    title: 'Bewährte Projektmethodik',
    description: 'Strukturierte Herangehensweise für erfolgreiche Projekte',
    icon: 'fas fa-tasks',
    benefits: [
      'Klare Projekt-Roadmaps',
      'Agile Entwicklungsmethoden',
      'Transparente Kommunikation',
      'Termintreue Umsetzung'
    ]
  }
];

export const serviceAreas: ServiceArea[] = [
  {
    title: 'Web Development',
    description: 'Moderne, responsive Websites und Webanwendungen',
    icon: 'fas fa-globe',
    services: [
      'Responsive Websites',
      'E-Commerce Lösungen',
      'Content Management Systeme',
      'Progressive Web Apps',
      'Landing Pages',
      'Corporate Websites'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'SCSS', 'Node.js']
  },
  {
    title: 'Backend Development',
    description: 'Robuste Server-Architekturen und API-Entwicklung',
    icon: 'fas fa-server',
    services: [
      'REST API Development',
      'Datenbankdesign',
      'Server-Architektur',
      'Cloud Integration',
      'Performance Optimierung',
      'Security Implementation'
    ],
    technologies: ['Node.js', 'Python', 'MySQL', 'REST APIs', 'Cloud Services']
  },
  {
    title: 'Consulting & Support',
    description: 'Strategische Beratung und langfristiger Support',
    icon: 'fas fa-lightbulb',
    services: [
      'Technische Beratung',
      'Code Reviews',
      'Performance Audits',
      'Wartung & Support',
      'Team Mentoring',
      'Projekt-Coaching'
    ],
    technologies: ['Projektmanagement', 'Agile Methoden', 'Code Quality', 'Best Practices']
  }
];

export const aboutSections: AboutSection[] = [
  {
    title: 'Über mich',
    content: [
      'Als erfahrener Softwareentwickler mit über 6 Jahren Berufserfahrung unterstütze ich Unternehmen dabei, ihre digitalen Visionen zu verwirklichen. Meine Leidenschaft liegt in der Entwicklung moderner, benutzerfreundlicher Webanwendungen, die echten Mehrwert schaffen.',
      'Durch meine umfassende Expertise in Frontend- und Backend-Technologien kann ich Projekte ganzheitlich betreuen - von der ersten Idee bis zur erfolgreichen Umsetzung und darüber hinaus.'
    ],
    highlights: [
      'Über 6 Jahre Erfahrung in der Softwareentwicklung',
      'Spezialisierung auf moderne Webtechnologien',
      'Full-Stack Development Expertise',
      'Fokus auf Performance und Benutzerfreundlichkeit',
      'Agile Arbeitsweise und transparente Kommunikation'
    ]
  },
  {
    title: 'Mein Ansatz',
    content: [
      'Jedes Projekt ist einzigartig. Deshalb nehme ich mir die Zeit, Ihre spezifischen Anforderungen und Ziele zu verstehen. Gemeinsam entwickeln wir eine maßgeschneiderte Lösung, die nicht nur technisch überzeugt, sondern auch Ihre Geschäftsziele unterstützt.',
      'Dabei setze ich auf bewährte Technologien und moderne Entwicklungsmethoden, um sicherzustellen, dass Ihre Lösung nicht nur heute funktioniert, sondern auch für die Zukunft gerüstet ist.'
    ],
    highlights: [
      'Individuelle Lösungskonzepte',
      'Enge Zusammenarbeit mit dem Kunden',
      'Fokus auf Geschäftsziele',
      'Zukunftssichere Technologien',
      'Kontinuierliche Verbesserung'
    ]
  },
  {
    title: 'Warum Alexander Koch?',
    content: [
      'Als selbstständiger Entwickler biete ich Ihnen die Flexibilität und persönliche Betreuung, die größere Agenturen oft nicht leisten können. Sie arbeiten direkt mit mir zusammen - ohne Umwege, ohne Missverständnisse.',
      'Meine langjährige Erfahrung in verschiedenen Projekten und Branchen ermöglicht es mir, auch komplexe Herausforderungen effizient zu lösen und innovative Lösungsansätze zu entwickeln.'
    ],
    highlights: [
      'Direkter, persönlicher Kontakt',
      'Flexible und schnelle Umsetzung',
      'Kosteneffiziente Lösungen',
      'Branchenübergreifende Erfahrung',
      'Langfristige Partnerschaft'
    ]
  }
];