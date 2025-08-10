import { Project } from '@/types';

// Bestehende Projekte mit Links zu GitHub
export const realProjects: Project[] = [
  {
    title: 'Prisma Graph Visualizer',
    description: 'Ein JetBrains IDE-Plugin zur Visualisierung von Prisma-Datenbankschemas als interaktive Graphen. Ermöglicht Entwicklern, komplexe Datenbankbeziehungen besser zu verstehen und zu navigieren.',
    technologies: ['Kotlin', 'JetBrains Platform', 'Prisma', 'Graph Visualization'],
    role: 'Konzeption, Entwicklung, Testing und Veröffentlichung im JetBrains Marketplace',
    liveUrl: 'https://plugins.jetbrains.com/plugin/27817-prisma-graph-visualizer',
    githubUrl: 'https://github.com/AlexanderKoch-UX/prisma-graph',
    icon: 'fas fa-project-diagram'
  },
  {
    title: 'Collaborative LaTeX Editor',
    description: 'Ein kollaborativer LaTeX-Editor für die gemeinsame Dokumentenerstellung. Ermöglicht das Erstellen neuer Dokumente, sicheres Teilen über Links mit Passwortschutz, Server-seitige PDF-Kompilierung und direkten Download.',
    technologies: ['Next.js', 'TypeScript', 'LaTeX', 'WebSockets', 'MongoDB'],
    role: 'Full-Stack Entwicklung, LaTeX-Integration, Security-Features, Echtzeit-Kollaboration',
    liveUrl: 'https://colab-latex-editor.alexanderkoch.dev/',
    githubUrl: 'https://github.com/AlexanderKoch-UX/colab-latex-editor',
    icon: 'fas fa-file-alt'
  },
  {
    title: 'Accessibility Widget',
    description: 'Ein anpassbares Widget zur Verbesserung der Barrierefreiheit von Websites. Bietet Funktionen wie Kontraständerung, Schriftgrößenanpassung, Fokushervorhebung und Screenreader-Unterstützung.',
    technologies: ['JavaScript', 'CSS', 'ARIA', 'Web Accessibility'],
    role: 'Konzeption, Entwicklung, Barrierefreiheits-Testing, Dokumentation',
    githubUrl: 'https://github.com/AlexanderKoch-UX/accessibility-widget',
    icon: 'fas fa-universal-access'
  }
];

// CMS und E-Commerce Systeme, mit denen Sie Erfahrung haben
export const systemExperience = [
  {
    category: 'Content Management Systeme',
    systems: [
      {
        name: 'WordPress',
        description: 'Umfangreiche Erfahrung in der Entwicklung maßgeschneiderter WordPress-Themes und Plugins. Optimierung für Geschwindigkeit, SEO und Benutzerfreundlichkeit.',
        technologies: ['PHP', 'JavaScript', 'CSS', 'MySQL', 'Gutenberg', 'WooCommerce'],
        icon: 'fab fa-wordpress'
      },
      {
        name: 'Drupal',
        description: 'Implementierung komplexer Drupal-Websites mit benutzerdefinierten Content-Typen, Taxonomien und Ansichten. Erfahrung mit Mehrsprachigkeit und komplexen Berechtigungsstrukturen.',
        technologies: ['Drupal 9', 'PHP', 'Twig', 'JavaScript', 'MySQL', 'Composer'],
        icon: 'fab fa-drupal'
      },
      {
        name: 'TYPO3',
        description: 'Entwicklung von Enterprise-Websites mit TYPO3, einschließlich benutzerdefinierter Extensions, Templates und Integrationen. Spezialisierung auf mehrsprachige Inhalte und komplexe Seitenstrukturen.',
        technologies: ['TYPO3', 'PHP', 'Fluid', 'TypeScript', 'MySQL', 'Docker'],
        icon: 'fas fa-sitemap'
      },
      {
        name: 'Headless CMS',
        description: 'Implementierung moderner Headless-CMS-Lösungen wie Contentful, Strapi und Prismic in Verbindung mit Frontend-Frameworks wie Next.js und Gatsby.',
        technologies: ['Contentful', 'Strapi', 'Prismic', 'Next.js', 'GraphQL', 'REST API'],
        icon: 'fas fa-cubes'
      }
    ]
  },
  {
    category: 'E-Commerce Systeme',
    systems: [
      {
        name: 'Shopware',
        description: 'Entwicklung maßgeschneiderter Shopware-Shops mit individuellen Themes, Plugins und Erweiterungen. Optimierung für Conversion und Benutzerfreundlichkeit.',
        technologies: ['Shopware 6', 'PHP', 'Twig', 'JavaScript', 'SCSS', 'MySQL'],
        icon: 'fas fa-shopping-cart'
      },
      {
        name: 'Magento',
        description: 'Implementierung komplexer Magento-Shops für B2B- und B2C-Kunden. Erfahrung mit kundenspezifischen Preisen, komplexen Produktkonfigurationen und ERP-Integration.',
        technologies: ['Magento 2', 'PHP', 'JavaScript', 'LESS', 'MySQL', 'Elasticsearch'],
        icon: 'fas fa-store'
      },
      {
        name: 'WooCommerce',
        description: 'Entwicklung von WooCommerce-Shops mit maßgeschneiderten Funktionen, Zahlungsgateways und Versandmethoden. Integration mit externen Systemen und APIs.',
        technologies: ['WooCommerce', 'WordPress', 'PHP', 'JavaScript', 'REST API'],
        icon: 'fab fa-wordpress'
      },
      {
        name: 'Headless Commerce',
        description: 'Implementierung moderner Headless-Commerce-Lösungen mit Frontends auf Basis von React und Next.js. Integration mit verschiedenen Commerce-APIs und Zahlungsdienstleistern.',
        technologies: ['Next.js', 'React', 'GraphQL', 'REST API', 'Stripe', 'PayPal'],
        icon: 'fas fa-shopping-bag'
      }
    ]
  }
];