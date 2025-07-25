import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'Collaborative LaTeX Editor',
    description: 'Ein einfacher, kollaborativer LaTeX-Editor für gemeinsame Dokumentenerstellung. Ermöglicht das Erstellen neuer Dokumente, sicheres Teilen über Links mit Passwortschutz, Server-seitige PDF-Kompilierung und direkten Download.',
    technologies: ['LaTeX', 'Web Editor', 'PDF Compilation', 'Collaboration'],
    role: 'Full-Stack Entwicklung, LaTeX-Integration, Security-Features',
    liveUrl: 'https://colab-latex-editor.alexanderkoch.dev/',
    icon: 'fas fa-file-alt'
  },
  {
    title: 'CMS-System',
    description: 'Eigenentwicklung eines modernen Content Management Systems mit NextJS. Umfasst Benutzerverwaltung, Content-Editor und responsives Dashboard.',
    technologies: ['NextJS', 'TypeScript', 'Node.js', 'SQL'],
    role: 'Full-Stack Entwicklung, UI/UX Design, Datenbankarchitektur',
    icon: 'fas fa-cogs'
  },
  {
    title: 'HQ-System',
    description: 'Entwicklung eines Hauptquartier-Systems für Unternehmensverwaltung mit Mitarbeiterverwaltung, Projekttracking und Reporting-Funktionen.',
    technologies: ['NextJS', 'TypeScript', 'Jira API', 'Database'],
    role: 'Backend-Architektur, API-Integration, Projektmanagement',
    icon: 'fas fa-building'
  }
];