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