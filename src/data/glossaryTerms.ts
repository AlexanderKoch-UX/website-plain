// Vordefinierte Fachwörter und deren Erklärungen
export interface GlossaryTermData {
  term: string;
  explanation: string;
}

const glossaryTerms: GlossaryTermData[] = [
  {
    term: "React",
    explanation: "React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen. Es wurde von Facebook entwickelt und ermöglicht die Erstellung wiederverwendbarer UI-Komponenten."
  },
  {
    term: "Next.js",
    explanation: "Next.js ist ein React-Framework, das Features wie serverseitiges Rendering und statische Seitengenerierung bietet. Es vereinfacht die Entwicklung von React-Anwendungen durch automatisches Routing, Code-Splitting und optimierte Performance."
  },
  {
    term: "TypeScript",
    explanation: "TypeScript ist eine von Microsoft entwickelte Programmiersprache, die JavaScript um Typsystem-Funktionalitäten erweitert. Es hilft, Fehler frühzeitig zu erkennen und verbessert die Code-Qualität und Wartbarkeit."
  },
  {
    term: "SCSS",
    explanation: "SCSS (Sassy CSS) ist eine Erweiterung von CSS, die zusätzliche Funktionen wie Variablen, Verschachtelung und Mixins bietet. Es macht CSS-Code besser wartbar und wiederverwendbar."
  },
  {
    term: "API",
    explanation: "API (Application Programming Interface) ist eine Schnittstelle, die es verschiedenen Softwareanwendungen ermöglicht, miteinander zu kommunizieren. APIs definieren, wie verschiedene Softwarekomponenten interagieren sollen."
  },
  {
    term: "REST API",
    explanation: "REST (Representational State Transfer) ist ein Architekturstil für die Kommunikation zwischen Computersystemen im Web. REST APIs nutzen HTTP-Anfragen, um Daten zu lesen, zu erstellen, zu aktualisieren und zu löschen."
  },
  {
    term: "Frontend",
    explanation: "Frontend bezeichnet den Teil einer Webanwendung, mit dem Benutzer direkt interagieren - also alles, was im Browser sichtbar und bedienbar ist. Dazu gehören Layouts, Designs, Benutzeroberflächen und Client-seitige Funktionalitäten."
  },
  {
    term: "Backend",
    explanation: "Backend bezeichnet den serverseitigen Teil einer Webanwendung, der für die Datenverarbeitung, Geschäftslogik und Datenbankoperationen zuständig ist. Es ist der 'unsichtbare' Teil, der die Funktionalität hinter den Kulissen bereitstellt."
  },
  {
    term: "Responsive Design",
    explanation: "Responsive Design ist ein Ansatz zur Webentwicklung, bei dem Websites so gestaltet werden, dass sie auf verschiedenen Geräten und Bildschirmgrößen optimal dargestellt werden. Die Layouts passen sich automatisch an, um die beste Benutzererfahrung zu bieten."
  },
  {
    term: "SEO",
    explanation: "SEO (Search Engine Optimization) umfasst Maßnahmen, die dazu dienen, die Sichtbarkeit einer Website in den organischen Suchergebnissen von Suchmaschinen zu verbessern. Ziel ist es, mehr relevanten Traffic auf die Website zu lenken."
  },
  {
    term: "UI",
    explanation: "UI (User Interface) bezeichnet die Benutzeroberfläche, über die Menschen mit digitalen Produkten oder Dienstleistungen interagieren. Ein gutes UI ist intuitiv, effizient und ansprechend gestaltet."
  },
  {
    term: "UX",
    explanation: "UX (User Experience) beschreibt das Gesamterlebnis eines Benutzers bei der Interaktion mit einem Produkt oder einer Dienstleistung. UX-Design konzentriert sich darauf, nützliche, benutzerfreundliche und angenehme Erlebnisse zu schaffen."
  },
  {
    term: "CI/CD",
    explanation: "CI/CD (Continuous Integration/Continuous Deployment) ist eine Methode der Softwareentwicklung, bei der Code regelmäßig integriert, getestet und bereitgestellt wird. Dies automatisiert den Entwicklungsprozess und ermöglicht schnellere, zuverlässigere Updates."
  },
  {
    term: "Agile Entwicklung",
    explanation: "Agile Entwicklung ist ein iterativer Ansatz zur Softwareentwicklung, der sich auf Zusammenarbeit, Kundenfeedback und kleine, schnelle Releases konzentriert. Agile Teams passen sich kontinuierlich an veränderte Anforderungen an."
  },
  {
    term: "CMS",
    explanation: "CMS (Content Management System) ist eine Software, die es Benutzern ermöglicht, digitale Inhalte zu erstellen, zu verwalten und zu veröffentlichen, ohne tiefgreifende technische Kenntnisse zu benötigen. Beispiele sind WordPress, Drupal und Joomla."
  }
];

export default glossaryTerms;