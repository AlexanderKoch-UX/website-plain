import { Package, ServicePackage } from '@/types';

// Alte Pakete (für Referenz)
export const oldPackages: Package[] = [
  {
    name: 'Starter-Paket – Web-Visitenkarte',
    beschreibung: [
      'Domainregistrierung (.de)',
      'Webhosting (1 Jahr inklusive)',
      'WordPress-Installation',
      '1–3 Seiten (z.B. Start, Kontakt, Leistungen)',
      'DSGVO-konformes Impressum & Datenschutz',
      'Responsive Design (mobiloptimiert)',
      'Basis-SEO (Meta-Daten, Suchmaschinen-Anmeldung)'
    ],
    preis: {
      einmalig: '1000–1500 €',
      hosting_vertrag: '10–20 € netto/Monat'
    }
  },
  {
    name: 'Business-Paket – Online-Präsenz für Unternehmen',
    beschreibung: [
      'Alle Leistungen aus dem Starter-Paket',
      'Bis zu 8 Seiten (z.B. Team, Portfolio, Blog)',
      'Erweiterte SEO-Optimierung',
      'Individuelles Design nach CI',
      'Einbindung von Social Media',
      'Kontakt-/Anfrageformulare',
      'Einrichtung von E-Mail-Adressen',
      'Schulung (1h Video-Call oder vor Ort)'
    ],
    preis: {
      einmalig: '2000–2900 €',
      hosting_vertrag: '20–35 € netto/Monat'
    }
  },
  {
    name: 'Premium-Paket – Komplett digital',
    beschreibung: [
      'Alle Leistungen aus dem Business-Paket',
      'Bis zu 15 Seiten & individuelle Unterseiten',
      'Blog- oder Newsbereich',
      'Erweiterte Sicherheitsmaßnahmen (Backups, Firewalls)',
      'Einrichtung Google Analytics & Search Console',
      'Content-Erstellung (Texte, Bilder, SEO)',
      'Performance-Optimierung',
      'Laufende Wartung & Updates (6 Monate inklusive)'
    ],
    preis: {
      einmalig: '3000–4900 €',
      hosting_vertrag: '30–50 € netto/Monat'
    }
  }
];

// Neue, detailliertere Pakete
export const packages: ServicePackage[] = [
  {
    id: 'starter',
    title: 'Web Presence',
    subtitle: 'Professionelle Webpräsenz',
    description: 'Etablieren Sie Ihre digitale Identität mit einer modernen, responsiven Website, die Ihr Unternehmen optimal repräsentiert.',
    priceRange: 'ab 2.500 €',
    timeframe: '3-4 Wochen',
    features: [
      'Responsive Single-Page Application (SPA)',
      'Semantisches HTML5 & SEO-Optimierung',
      'Performanceoptimierung (Core Web Vitals)',
      'Content Management System Integration',
      'Barrierefreiheit nach WCAG 2.1 AA',
      'Cross-Browser Kompatibilität',
      'Grundlegende Analytik-Integration',
      'Hosting-Setup & Deployment'
    ],
    technologies: [
      'Next.js / React',
      'TypeScript',
      'SCSS / Tailwind CSS',
      'Headless CMS',
      'Vercel / Netlify'
    ],
    deliverables: [
      'Quellcode (GitHub Repository)',
      'Technische Dokumentation',
      'CMS-Schulung (1 Stunde)',
      '30 Tage Support nach Launch'
    ],
    ideal: 'Ideal für Freelancer, Startups und kleine Unternehmen, die eine professionelle Online-Präsenz aufbauen möchten.',
    icon: 'fas fa-rocket'
  },
  {
    id: 'business',
    title: 'Business Solution',
    subtitle: 'Maßgeschneiderte Webanwendung',
    description: 'Entwicklung einer individuellen Webanwendung, die auf Ihre spezifischen Geschäftsprozesse zugeschnitten ist und Ihre Effizienz steigert.',
    priceRange: 'ab 5.000 €',
    timeframe: '6-8 Wochen',
    features: [
      'Multi-Page Application mit dynamischen Inhalten',
      'Benutzerverwaltung & Authentifizierung',
      'REST API / GraphQL Backend-Integration',
      'Datenbank-Design & -Implementierung',
      'Formularvalidierung & Datenverarbeitung',
      'Erweiterte SEO-Optimierung',
      'Umfassende Analytik & Conversion Tracking',
      'CI/CD Pipeline & Automatisiertes Testing'
    ],
    technologies: [
      'Next.js / React',
      'Node.js / Express',
      'TypeScript',
      'MongoDB / PostgreSQL',
      'Redux / Context API',
      'Jest / React Testing Library',
      'GitHub Actions / GitLab CI'
    ],
    deliverables: [
      'Vollständiger Quellcode',
      'API-Dokumentation',
      'Technisches Handbuch',
      'Admin-Schulung (2 Stunden)',
      '60 Tage Support nach Launch',
      'Monatliches Performance-Monitoring'
    ],
    ideal: 'Ideal für etablierte Unternehmen, die ihre digitalen Prozesse optimieren und skalierbare Lösungen implementieren möchten.',
    icon: 'fas fa-building'
  },
  {
    id: 'enterprise',
    title: 'Enterprise Integration',
    subtitle: 'Komplexe Systemarchitektur',
    description: 'Entwicklung und Integration komplexer Webanwendungen mit bestehenden Systemen, Microservices-Architektur und skalierbarer Infrastruktur.',
    priceRange: 'Individuelles Angebot',
    timeframe: '3-6 Monate',
    features: [
      'Microservices-Architektur',
      'Legacy-System Integration',
      'API Gateway & Service Mesh',
      'Skalierbare Cloud-Infrastruktur',
      'Echtzeit-Datenverarbeitung',
      'Umfassendes Monitoring & Logging',
      'Hochverfügbarkeit & Disaster Recovery',
      'Sicherheitsaudits & Penetrationstests'
    ],
    technologies: [
      'React / Angular / Vue.js',
      'Node.js / Python / Java',
      'Docker / Kubernetes',
      'AWS / Azure / GCP',
      'Kafka / RabbitMQ',
      'Elasticsearch / Prometheus / Grafana',
      'OAuth2 / OpenID Connect'
    ],
    deliverables: [
      'Architektur-Dokumentation',
      'Infrastruktur als Code (IaC)',
      'Deployment-Strategien',
      'Umfassende Schulungen',
      'SLA mit definierten Response-Zeiten',
      'Langfristige Wartung & Support'
    ],
    ideal: 'Ideal für Großunternehmen mit komplexen Anforderungen, die eine skalierbare, zukunftssichere Lösung benötigen.',
    icon: 'fas fa-cogs'
  }
];

// Zusätzliche Dienstleistungen
export const additionalServices = [
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Professionelle Beratung zu technischen Herausforderungen, Architekturentscheidungen und Best Practices in der Webentwicklung.',
    priceInfo: '120 € / Stunde',
    features: [
      'Technische Architekturberatung',
      'Code-Reviews & Qualitätsanalyse',
      'Performance-Audits & Optimierung',
      'Technologie-Stack Evaluation',
      'DevOps & CI/CD Beratung',
      'Skalierbarkeits-Strategien'
    ],
    icon: 'fas fa-lightbulb'
  },
  {
    id: 'security',
    title: 'Security Audits',
    description: 'Umfassende Sicherheitsanalyse Ihrer Webanwendungen und Infrastruktur zur Identifizierung und Behebung von Schwachstellen.',
    priceInfo: 'ab 1.500 €',
    features: [
      'Penetrationstests',
      'Schwachstellenanalyse',
      'OWASP Top 10 Prüfung',
      'Sicherheitskonzepte',
      'Härtungsmaßnahmen',
      'Sicherheitsschulungen'
    ],
    icon: 'fas fa-shield-alt'
  },
  {
    id: 'optimization',
    title: 'Performance Optimization',
    description: 'Analyse und Optimierung der Leistung Ihrer bestehenden Webanwendungen für schnellere Ladezeiten und bessere Nutzererfahrung.',
    priceInfo: 'ab 800 €',
    features: [
      'Core Web Vitals Optimierung',
      'Ladezeit-Analyse',
      'Asset-Optimierung',
      'Caching-Strategien',
      'Datenbankoptimierung',
      'Serverless Deployment'
    ],
    icon: 'fas fa-tachometer-alt'
  },
  {
    id: 'maintenance',
    title: 'Wartung & Support',
    description: 'Kontinuierliche Betreuung und Wartung Ihrer Webanwendungen zur Sicherstellung von Stabilität, Sicherheit und Aktualität.',
    priceInfo: 'ab 200 € / Monat',
    features: [
      'Regelmäßige Updates',
      'Sicherheitspatches',
      'Backup-Management',
      'Monitoring & Alerting',
      'Bug-Fixing',
      'Technischer Support'
    ],
    icon: 'fas fa-tools'
  }
];