import { SkillNode } from '@/types';

export const skillTree: SkillNode[] = [
  // Foundation Layer (Level 1)
  {
    id: 'html',
    name: 'HTML5',
    category: 'foundation',
    icon: 'fab fa-html5',
    level: 1,
    description: 'Markup-Sprache für Webseiten-Struktur',
    children: []
  },
  {
    id: 'css',
    name: 'CSS3',
    category: 'foundation',
    icon: 'fab fa-css3-alt',
    level: 1,
    description: 'Stylesheet-Sprache für Design und Layout',
    children: []
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'foundation',
    icon: 'fab fa-js-square',
    level: 1,
    description: 'Programmiersprache für interaktive Webseiten',
    children: []
  },
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    icon: 'fab fa-git-alt',
    level: 1,
    description: 'Versionskontrollsystem',
    children: []
  },

  // Frontend Layer (Level 2-3)
  {
    id: 'scss',
    name: 'SCSS',
    category: 'frontend',
    icon: 'fab fa-sass',
    level: 2,
    prerequisites: ['css'],
    description: 'CSS-Präprozessor für erweiterte Stylesheets',
    children: []
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: 'fas fa-paint-brush',
    level: 2,
    prerequisites: ['css'],
    description: 'Utility-first CSS Framework',
    children: []
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    icon: 'fab fa-js-square',
    level: 2,
    prerequisites: ['javascript'],
    description: 'Typisierte Erweiterung von JavaScript',
    children: []
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    icon: 'fab fa-react',
    level: 3,
    prerequisites: ['javascript', 'html', 'css'],
    description: 'JavaScript-Bibliothek für User Interfaces',
    children: []
  },

  // Advanced Frontend (Level 4)
  {
    id: 'nextjs',
    name: 'NextJS',
    category: 'frontend',
    icon: 'fab fa-react',
    level: 4,
    prerequisites: ['react', 'typescript'],
    description: 'Full-Stack React Framework',
    children: []
  },

  // Backend Layer (Level 2-4)
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    icon: 'fab fa-node-js',
    level: 2,
    prerequisites: ['javascript'],
    description: 'JavaScript-Laufzeitumgebung für Server',
    children: []
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'backend',
    icon: 'fas fa-database',
    level: 2,
    description: 'Abfragesprache für Datenbanken',
    children: []
  },
  {
    id: 'expressjs',
    name: 'Express.js',
    category: 'backend',
    icon: 'fas fa-server',
    level: 3,
    prerequisites: ['nodejs'],
    description: 'Web-Framework für Node.js',
    children: []
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'backend',
    icon: 'fas fa-leaf',
    level: 3,
    prerequisites: ['nodejs'],
    description: 'NoSQL-Dokumentendatenbank',
    children: []
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'backend',
    icon: 'fas fa-database',
    level: 3,
    prerequisites: ['sql'],
    description: 'Relationale Open-Source-Datenbank',
    children: []
  },
  {
    id: 'rest-apis',
    name: 'REST APIs',
    category: 'backend',
    icon: 'fas fa-exchange-alt',
    level: 3,
    prerequisites: ['nodejs', 'expressjs'],
    description: 'RESTful Web Services',
    children: []
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'backend',
    icon: 'fas fa-project-diagram',
    level: 4,
    prerequisites: ['rest-apis', 'nodejs'],
    description: 'Query-Sprache für APIs',
    children: []
  },

  // Development Tools (Level 2-3)
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    icon: 'fab fa-github',
    level: 2,
    prerequisites: ['git'],
    description: 'Code-Repository und Kollaborationsplattform',
    children: []
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'tools',
    icon: 'fas fa-code',
    level: 2,
    description: 'Code-Editor und Entwicklungsumgebung',
    children: []
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'tools',
    icon: 'fab fa-figma',
    level: 2,
    description: 'Design- und Prototyping-Tool',
    children: []
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    icon: 'fas fa-paper-plane',
    level: 3,
    prerequisites: ['rest-apis'],
    description: 'API-Testing und Entwicklungstool',
    children: []
  },
  {
    id: 'jira',
    name: 'Jira',
    category: 'tools',
    icon: 'fab fa-atlassian',
    level: 3,
    description: 'Projektmanagement und Issue-Tracking',
    children: []
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'tools',
    icon: 'fab fa-docker',
    level: 4,
    prerequisites: ['nodejs'],
    description: 'Containerisierung und Deployment',
    children: []
  },

  // Soft Skills (Independent)
  {
    id: 'problemlosung',
    name: 'Problemlösung',
    category: 'soft',
    icon: 'fas fa-lightbulb',
    level: 3,
    description: 'Analytisches Denken und kreative Lösungsansätze',
    children: []
  },
  {
    id: 'teamarbeit',
    name: 'Teamarbeit',
    category: 'soft',
    icon: 'fas fa-users',
    level: 3,
    description: 'Kollaboratives Arbeiten in Teams',
    children: []
  },
  {
    id: 'kommunikation',
    name: 'Kommunikation',
    category: 'soft',
    icon: 'fas fa-comments',
    level: 3,
    description: 'Effektive Kommunikation mit Stakeholdern',
    children: []
  },
  {
    id: 'projektmanagement',
    name: 'Projektmanagement',
    category: 'soft',
    icon: 'fas fa-tasks',
    level: 4,
    prerequisites: ['teamarbeit', 'kommunikation'],
    description: 'Planung und Durchführung von Projekten',
    children: []
  },
  {
    id: 'zeitmanagement',
    name: 'Zeitmanagement',
    category: 'soft',
    icon: 'fas fa-clock',
    level: 3,
    description: 'Effiziente Arbeitsorganisation',
    children: []
  },
  {
    id: 'detailgenauigkeit',
    name: 'Detailgenauigkeit',
    category: 'soft',
    icon: 'fas fa-eye',
    level: 3,
    description: 'Präzision und Qualitätsbewusstsein',
    children: []
  }
];

// Helper function to build the hierarchical tree structure
export const buildSkillTree = (): SkillNode[] => {
  const skillMap = new Map<string, SkillNode>();
  const roots: SkillNode[] = [];

  // Create a map of all skills
  skillTree.forEach(skill => {
    skillMap.set(skill.id, { ...skill, children: [] });
  });

  // Build the tree structure based on prerequisites
  skillTree.forEach(skill => {
    const skillNode = skillMap.get(skill.id)!;
    
    if (!skill.prerequisites || skill.prerequisites.length === 0) {
      // Root level skills (no prerequisites)
      roots.push(skillNode);
    } else {
      // Add as child to prerequisite skills
      skill.prerequisites.forEach(prereqId => {
        const parentSkill = skillMap.get(prereqId);
        if (parentSkill && !parentSkill.children?.some(child => child.id === skill.id)) {
          parentSkill.children?.push(skillNode);
        }
      });
    }
  });

  return roots;
};

// Helper function to get all skills grouped by level
export const getSkillsByLevel = (): Record<number, SkillNode[]> => {
  const levelGroups: Record<number, SkillNode[]> = {};
  
  skillTree.forEach(skill => {
    if (!levelGroups[skill.level]) {
      levelGroups[skill.level] = [];
    }
    levelGroups[skill.level].push(skill);
  });
  
  return levelGroups;
};

// Helper function to get skills arranged for mind map (balanced distribution)
export const getSkillsForMindMap = (): Record<number, SkillNode[]> => {
  const levelGroups = getSkillsByLevel();
  const mindMapGroups: Record<number, SkillNode[]> = {};
  
  // Reorganize skills for better radial distribution
  Object.entries(levelGroups).forEach(([level, skills]) => {
    const levelNum = parseInt(level);
    
    // Sort skills by category to group similar skills
    const sortedSkills = [...skills].sort((a, b) => {
      const categoryOrder = ['foundation', 'frontend', 'backend', 'tools', 'soft', 'fullstack', 'advanced'];
      return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
    });
    
    mindMapGroups[levelNum] = sortedSkills;
  });
  
  return mindMapGroups;
};

// Helper function to get skills by category
export const getSkillsByCategory = (): Record<string, SkillNode[]> => {
  const categoryGroups: Record<string, SkillNode[]> = {};
  
  skillTree.forEach(skill => {
    if (!categoryGroups[skill.category]) {
      categoryGroups[skill.category] = [];
    }
    categoryGroups[skill.category].push(skill);
  });
  
  return categoryGroups;
};