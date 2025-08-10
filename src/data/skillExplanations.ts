export interface SkillExplanation {
  term: string;
  explanation: string;
}

export const skillExplanations: SkillExplanation[] = [
  // Service-Bereiche
  {
    term: 'Web Development',
    explanation: 'Web Development umfasst die Erstellung von Websites und Webanwendungen. Es beinhaltet Frontend-Entwicklung (das, was Benutzer sehen und mit dem sie interagieren) und kann auch Backend-Entwicklung (Serverlogik und Datenbanken) umfassen.'
  },
  {
    term: 'Backend Development',
    explanation: 'Backend Development bezieht sich auf die serverseitige Entwicklung von Anwendungen. Es umfasst die Erstellung von APIs, Datenbanken, Serverlogik und allem, was hinter den Kulissen einer Webanwendung passiert.'
  },
  {
    term: 'Consulting & Support',
    explanation: 'Consulting & Support umfasst Beratungsleistungen und technische Unterstützung für Unternehmen. Dies kann Code-Reviews, Performance-Optimierungen, technische Beratung und langfristigen Support für bestehende Systeme beinhalten.'
  },
  {
    term: 'Moderne Webtechnologien',
    explanation: 'Moderne Webtechnologien umfassen aktuelle Frameworks, Bibliotheken und Tools, die die Entwicklung effizienter, skalierbarer und benutzerfreundlicher Webanwendungen ermöglichen. Dazu gehören React, Next.js, TypeScript und moderne CSS-Frameworks.'
  },
  {
    term: 'Full-Stack Expertise',
    explanation: 'Full-Stack Expertise bezeichnet die Fähigkeit, sowohl Frontend- als auch Backend-Entwicklung zu beherrschen. Ein Full-Stack-Entwickler kann eine komplette Anwendung von der Benutzeroberfläche bis zur Datenbank entwickeln.'
  },
  {
    term: 'Persönliche Betreuung',
    explanation: 'Persönliche Betreuung bedeutet, dass Kunden einen direkten Ansprechpartner haben, der ihre Bedürfnisse versteht und maßgeschneiderte Lösungen anbietet. Dies umfasst regelmäßige Kommunikation, flexible Arbeitszeiten und individuelle Unterstützung.'
  },
  {
    term: 'Bewährte Projektmethodik',
    explanation: 'Bewährte Projektmethodik bezieht sich auf strukturierte Ansätze zur Projektplanung und -durchführung. Dies umfasst agile Methoden wie Scrum oder Kanban, klare Roadmaps, transparente Kommunikation und termintreue Umsetzung.'
  },
  
  // Services
  {
    term: 'Responsive Websites',
    explanation: 'Responsive Websites passen sich automatisch an verschiedene Bildschirmgrößen und Geräte an. Sie bieten eine optimale Benutzererfahrung auf Desktops, Tablets und Smartphones durch flexible Layouts und anpassungsfähiges Design.'
  },
  {
    term: 'E-Commerce Lösungen',
    explanation: 'E-Commerce Lösungen sind Webplattformen, die Online-Verkäufe ermöglichen. Sie umfassen Produktkataloge, Warenkorb-Funktionen, Zahlungsgateways, Bestandsverwaltung und Kundenverwaltungssysteme.'
  },
  {
    term: 'Content Management Systeme',
    explanation: 'Content Management Systeme (CMS) ermöglichen es Benutzern ohne technische Kenntnisse, Inhalte auf einer Website zu erstellen, zu bearbeiten und zu verwalten. Beispiele sind WordPress, Drupal und headless CMS-Lösungen.'
  },
  {
    term: 'Progressive Web Apps',
    explanation: 'Progressive Web Apps (PWAs) sind Webanwendungen, die wie native Apps funktionieren. Sie bieten Offline-Funktionalität, Push-Benachrichtigungen, schnelle Ladezeiten und können auf dem Startbildschirm installiert werden.'
  },
  {
    term: 'Landing Pages',
    explanation: 'Landing Pages sind speziell gestaltete Webseiten mit einem klaren Ziel, wie z.B. Lead-Generierung oder Produktverkauf. Sie sind optimiert, um Besucher zu einer bestimmten Aktion zu bewegen und haben oft ein fokussiertes Design ohne Ablenkungen.'
  },
  {
    term: 'Corporate Websites',
    explanation: 'Corporate Websites sind professionelle Unternehmenswebseiten, die die Markenidentität, Produkte, Dienstleistungen und Werte eines Unternehmens präsentieren. Sie dienen als digitale Visitenkarte und zentrale Informationsquelle für Kunden und Partner.'
  },
  {
    term: 'REST API Development',
    explanation: 'REST API Development umfasst die Erstellung von Schnittstellen, die es verschiedenen Systemen ermöglichen, miteinander zu kommunizieren. RESTful APIs nutzen HTTP-Methoden wie GET, POST, PUT und DELETE für den Datenaustausch in standardisierten Formaten wie JSON.'
  },
  {
    term: 'Datenbankdesign',
    explanation: 'Datenbankdesign ist der Prozess der Erstellung einer effizienten und strukturierten Datenbank. Es umfasst die Definition von Tabellen, Beziehungen, Indizes und Constraints, um Datenintegrität, Performance und Skalierbarkeit zu gewährleisten.'
  },
  {
    term: 'Server-Architektur',
    explanation: 'Server-Architektur bezieht sich auf die Planung und Implementierung der serverseitigen Infrastruktur einer Anwendung. Dies umfasst die Auswahl von Servern, Betriebssystemen, Netzwerkkomponenten und die Konfiguration für optimale Performance und Sicherheit.'
  },
  {
    term: 'Cloud Integration',
    explanation: 'Cloud Integration ist der Prozess der Einbindung von Cloud-Diensten wie AWS, Google Cloud oder Azure in eine Anwendung. Dies ermöglicht Skalierbarkeit, Flexibilität und Kosteneffizienz durch die Nutzung von Cloud-Ressourcen und -Diensten.'
  },
  {
    term: 'Performance Optimierung',
    explanation: 'Performance Optimierung umfasst Techniken zur Verbesserung der Geschwindigkeit und Effizienz einer Anwendung. Dies beinhaltet Code-Optimierung, Caching, Komprimierung, Lazy Loading und andere Strategien, um Ladezeiten zu reduzieren und die Benutzererfahrung zu verbessern.'
  },
  {
    term: 'Security Implementation',
    explanation: 'Security Implementation umfasst die Integration von Sicherheitsmaßnahmen in eine Anwendung. Dies beinhaltet Authentifizierung, Autorisierung, Datenverschlüsselung, HTTPS, CSRF-Schutz, XSS-Prävention und andere Maßnahmen zum Schutz vor Sicherheitsbedrohungen.'
  },
  {
    term: 'Technische Beratung',
    explanation: 'Technische Beratung bietet Expertise und Empfehlungen zu technologischen Entscheidungen und Strategien. Dies umfasst die Auswahl von Technologien, Architekturentscheidungen, Best Practices und Lösungsansätze für technische Herausforderungen.'
  },
  {
    term: 'Code Reviews',
    explanation: 'Code Reviews sind systematische Überprüfungen von Quellcode durch andere Entwickler. Sie dienen der Qualitätssicherung, Fehlererkennung, Wissensaustausch und der Einhaltung von Coding-Standards und Best Practices.'
  },
  {
    term: 'Performance Audits',
    explanation: 'Performance Audits sind umfassende Analysen der Leistung einer Anwendung. Sie identifizieren Engpässe, ineffizienten Code und Optimierungsmöglichkeiten, um die Geschwindigkeit, Reaktionsfähigkeit und Ressourcennutzung zu verbessern.'
  },
  {
    term: 'Wartung & Support',
    explanation: 'Wartung & Support umfasst die kontinuierliche Pflege und Unterstützung einer Anwendung nach der Entwicklung. Dies beinhaltet Fehlerbehebung, Updates, Sicherheitspatches, Performance-Monitoring und technische Unterstützung für Benutzer.'
  },
  {
    term: 'Team Mentoring',
    explanation: 'Team Mentoring ist die Anleitung und Unterstützung von Entwicklerteams zur Verbesserung ihrer Fähigkeiten und Arbeitsweisen. Es umfasst Wissenstransfer, Best Practices, Code-Reviews und die Förderung von technischem Wachstum und Zusammenarbeit.'
  },
  {
    term: 'Projekt-Coaching',
    explanation: 'Projekt-Coaching bietet Unterstützung und Anleitung für Projektteams bei der Planung, Durchführung und Überwachung von Projekten. Es umfasst agile Methoden, Risikomanagement, Ressourcenplanung und die Förderung effektiver Teamarbeit.'
  },
  
  // Weitere Begriffe
  {
    term: 'moderne Weblösungen',
    explanation: 'Moderne Weblösungen sind zeitgemäße, technologisch fortschrittliche Anwendungen und Websites, die aktuelle Standards und Best Practices nutzen. Sie zeichnen sich durch Benutzerfreundlichkeit, Performance, Sicherheit und Skalierbarkeit aus.'
  },
  
  // CMS und E-Commerce Systeme
  {
    term: 'Shopware Online-Shop',
    explanation: 'Shopware ist ein führendes E-Commerce-System aus Deutschland, das eine flexible und benutzerfreundliche Plattform für Online-Shops bietet. Es kombiniert moderne Technologien mit umfangreichen Funktionen für Produktmanagement, Zahlungsabwicklung und Kundenverwaltung.'
  },
  {
    term: 'Shopware 6',
    explanation: 'Shopware 6 ist die neueste Version des Shopware E-Commerce-Systems, die auf einer modernen Symfony-Architektur basiert. Es bietet erweiterte Funktionen für Produktverwaltung, Marketing, Zahlungsabwicklung und Kundenverwaltung sowie eine API-First-Strategie für Headless-Commerce.'
  },
  {
    term: 'WordPress Business Website',
    explanation: 'Eine WordPress Business Website ist eine professionelle Unternehmenswebsite, die auf dem WordPress CMS basiert. Sie bietet eine benutzerfreundliche Content-Verwaltung, flexible Designmöglichkeiten und zahlreiche Erweiterungsmöglichkeiten durch Plugins.'
  },
  {
    term: 'WordPress',
    explanation: 'WordPress ist das weltweit am häufigsten verwendete Content-Management-System (CMS). Es ermöglicht die einfache Erstellung und Verwaltung von Websites ohne Programmierkenntnisse und bietet tausende von Themes und Plugins zur Erweiterung der Funktionalität.'
  },
  {
    term: 'Prisma Graph Visualizer',
    explanation: 'Der Prisma Graph Visualizer ist ein JetBrains IDE-Plugin, das Prisma-Datenbankschemas als interaktive Graphen visualisiert. Es hilft Entwicklern, komplexe Datenbankbeziehungen besser zu verstehen und zu navigieren, was die Entwicklung mit Prisma ORM effizienter macht.'
  },
  {
    term: 'Prisma',
    explanation: 'Prisma ist ein modernes ORM (Object-Relational Mapping) für Node.js und TypeScript, das die Datenbankzugriffe vereinfacht. Es bietet typsichere Datenbankabfragen, automatische Migrations und eine deklarative Schemadefinition für verschiedene Datenbanktypen.'
  },
  {
    term: 'JetBrains Platform',
    explanation: 'Die JetBrains Platform ist die Grundlage für die Entwicklungsumgebungen (IDEs) von JetBrains wie IntelliJ IDEA, WebStorm und PhpStorm. Sie bietet eine erweiterbare Architektur für Plugins und Tools, die die Entwicklungsproduktivität steigern.'
  },
  {
    term: 'Drupal Content-Management',
    explanation: 'Drupal ist ein leistungsstarkes Open-Source-CMS für komplexe Websites und Anwendungen. Es bietet erweiterte Funktionen für Benutzerrollen, Workflow-Management, mehrsprachige Inhalte und maßgeschneiderte Content-Typen für anspruchsvolle Projekte.'
  },
  {
    term: 'Drupal 9',
    explanation: 'Drupal 9 ist die aktuelle Hauptversion des Drupal CMS, die auf modernen PHP-Standards basiert. Es bietet verbesserte Sicherheit, Performance und Wartbarkeit sowie eine vereinfachte Upgrade-Erfahrung im Vergleich zu früheren Versionen.'
  },
  {
    term: 'TYPO3 Enterprise Portal',
    explanation: 'TYPO3 ist ein Enterprise-CMS, das sich besonders für große und komplexe Websites eignet. Es bietet umfangreiche Funktionen für mehrsprachige Inhalte, komplexe Berechtigungsstrukturen und individuelle Erweiterungen für Unternehmen und Organisationen.'
  },
  {
    term: 'TYPO3',
    explanation: 'TYPO3 ist ein leistungsstarkes Open-Source-CMS, das besonders in Europa verbreitet ist. Es eignet sich für komplexe Websites mit mehreren Sprachen, umfangreichen Berechtigungsstrukturen und individuellen Anforderungen an die Content-Verwaltung.'
  },
  {
    term: 'Magento E-Commerce',
    explanation: 'Magento ist eine fortschrittliche E-Commerce-Plattform für mittelgroße bis große Online-Shops. Es bietet umfangreiche Funktionen für Produktmanagement, Marketing, Kundenbeziehungen und ist besonders für B2B-Commerce und komplexe Produktkataloge geeignet.'
  },
  {
    term: 'Magento 2',
    explanation: 'Magento 2 ist die aktuelle Version der Magento E-Commerce-Plattform mit verbesserter Performance, Skalierbarkeit und Benutzerfreundlichkeit. Es bietet erweiterte Funktionen für B2B- und B2C-Commerce, komplexe Produktkonfigurationen und internationale Shops.'
  },
  {
    term: 'Twig',
    explanation: 'Twig ist eine moderne Template-Engine für PHP, die in Frameworks wie Symfony und CMS wie Drupal verwendet wird. Sie bietet eine saubere, lesbare Syntax für die Trennung von Logik und Präsentation in Webanwendungen.'
  },
  {
    term: 'Fluid',
    explanation: 'Fluid ist die Template-Engine des TYPO3 CMS. Sie ermöglicht die Erstellung von dynamischen Templates mit einer XML-basierten Syntax und bietet Funktionen wie ViewHelpers, Layouts und Partials für flexible Templatestrukturen.'
  },
  {
    term: 'Gutenberg',
    explanation: 'Gutenberg ist der moderne Block-Editor von WordPress, der einen visuellen, blockbasierten Ansatz für die Content-Erstellung bietet. Er ermöglicht die einfache Erstellung komplexer Layouts ohne HTML-Kenntnisse und verbessert die Content-Erstellung.'
  },
  {
    term: 'Composer',
    explanation: 'Composer ist ein Abhängigkeitsmanager für PHP, der die Installation und Aktualisierung von Bibliotheken und Frameworks vereinfacht. Er ist ein Standard-Tool in modernen PHP-Projekten wie Drupal, Symfony und Laravel.'
  },
  {
    term: 'Elasticsearch',
    explanation: 'Elasticsearch ist eine verteilte, RESTful Suchmaschine, die für die Volltextsuche, strukturierte Suche und Analyse großer Datenmengen optimiert ist. In E-Commerce-Systemen wie Magento verbessert es die Produktsuche und Filterung.'
  },
  {
    term: 'LESS',
    explanation: 'LESS ist eine CSS-Präprozessor-Sprache, die CSS um Funktionen wie Variablen, Mixins, Funktionen und Verschachtelung erweitert. Sie macht CSS-Code besser wartbar und wiederverwendbar, besonders in großen Projekten.'
  },
  // Frontend
  {
    term: 'NextJS',
    explanation: 'Next.js ist ein React-Framework, das Features wie serverseitiges Rendering und statische Seitengenerierung bietet. Es vereinfacht die Entwicklung von React-Anwendungen durch automatisches Routing, Code-Splitting und optimierte Performance.'
  },
  {
    term: 'React',
    explanation: 'React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen. Es wurde von Facebook entwickelt und ermöglicht die Erstellung wiederverwendbarer UI-Komponenten mit einem komponentenbasierten Ansatz.'
  },
  {
    term: 'TypeScript',
    explanation: 'TypeScript ist eine von Microsoft entwickelte Programmiersprache, die JavaScript um ein Typsystem erweitert. Es hilft, Fehler frühzeitig zu erkennen und verbessert die Code-Qualität und Wartbarkeit durch statische Typisierung.'
  },
  {
    term: 'JavaScript',
    explanation: 'JavaScript ist eine Programmiersprache, die hauptsächlich für interaktive Webseiten verwendet wird. Es ist eine der Kernsprachen des Web und ermöglicht dynamische Inhalte und Benutzerinteraktionen im Browser.'
  },
  {
    term: 'HTML5',
    explanation: 'HTML5 ist die neueste Version der Hypertext Markup Language, dem Standard-Markup für Webseiten. Es bietet erweiterte Funktionen wie semantische Elemente, Audio- und Video-Unterstützung ohne Plugins und verbesserte Formularkontrollen.'
  },
  {
    term: 'CSS3',
    explanation: 'CSS3 ist die neueste Version von Cascading Style Sheets, der Sprache zur Gestaltung von HTML-Dokumenten. Es bietet erweiterte Styling-Möglichkeiten wie Animationen, Transformationen, Flexbox und Grid-Layout.'
  },
  {
    term: 'SCSS',
    explanation: 'SCSS (Sassy CSS) ist eine Erweiterung von CSS, die zusätzliche Funktionen wie Variablen, Verschachtelung, Mixins und Funktionen bietet. Es macht CSS-Code besser wartbar und wiederverwendbar.'
  },
  {
    term: 'Tailwind CSS',
    explanation: 'Tailwind CSS ist ein Utility-First CSS-Framework, das es ermöglicht, Designs direkt im HTML zu erstellen, ohne separate CSS-Dateien zu schreiben. Es bietet vordefinierte Klassen für nahezu alle Styling-Bedürfnisse.'
  },

  // Backend
  {
    term: 'Node.js',
    explanation: 'Node.js ist eine JavaScript-Laufzeitumgebung, die es ermöglicht, JavaScript auf der Serverseite auszuführen. Es verwendet ein ereignisgesteuertes, nicht-blockierendes I/O-Modell, das es effizient und leichtgewichtig macht.'
  },
  {
    term: 'Express.js',
    explanation: 'Express.js ist ein minimalistisches Web-Framework für Node.js, das eine robuste Reihe von Funktionen für Web- und Mobile-Anwendungen bietet. Es vereinfacht die Erstellung von APIs und Webservern.'
  },
  {
    term: 'SQL',
    explanation: 'SQL (Structured Query Language) ist eine Programmiersprache zum Verwalten und Abfragen relationaler Datenbanken. Sie wird verwendet, um Daten zu speichern, zu manipulieren und abzurufen.'
  },
  {
    term: 'MongoDB',
    explanation: 'MongoDB ist eine dokumentenorientierte NoSQL-Datenbank, die JSON-ähnliche Dokumente mit dynamischen Schemas speichert. Sie bietet hohe Skalierbarkeit, Flexibilität und Performance für moderne Anwendungen.'
  },
  {
    term: 'PostgreSQL',
    explanation: 'PostgreSQL ist ein leistungsstarkes, Open-Source-Objektrelationsdatenbanksystem. Es bietet Zuverlässigkeit, Robustheit und Erweiterbarkeit mit Unterstützung für komplexe Datentypen und Funktionen.'
  },
  {
    term: 'REST APIs',
    explanation: 'REST (Representational State Transfer) APIs sind ein Architekturstil für die Kommunikation zwischen Systemen im Web. Sie nutzen HTTP-Methoden wie GET, POST, PUT und DELETE, um Ressourcen zu manipulieren und Daten auszutauschen.'
  },
  {
    term: 'GraphQL',
    explanation: 'GraphQL ist eine Abfragesprache für APIs und eine Laufzeitumgebung zur Ausführung dieser Abfragen. Es ermöglicht Clients, genau die Daten anzufordern, die sie benötigen, und reduziert so Übertragungsvolumen und Komplexität.'
  },

  // Tools
  {
    term: 'Git',
    explanation: 'Git ist ein verteiltes Versionskontrollsystem, das Änderungen an Dateien über die Zeit verfolgt. Es ermöglicht Entwicklern, an Code zusammenzuarbeiten, Änderungen zu verfolgen und bei Bedarf zu früheren Versionen zurückzukehren.'
  },
  {
    term: 'GitHub',
    explanation: 'GitHub ist eine webbasierte Plattform für Git-Repositories, die Funktionen für Zusammenarbeit wie Issue-Tracking, Pull Requests und Code-Reviews bietet. Es ist ein zentraler Ort für Open-Source-Projekte und Team-Entwicklung.'
  },
  {
    term: 'Jira',
    explanation: 'Jira ist eine Projektmanagement-Software von Atlassian, die für agile Entwicklungsteams entwickelt wurde. Sie unterstützt Scrum und Kanban und bietet Funktionen für Aufgabenverfolgung, Projektplanung und Berichterstattung.'
  },
  {
    term: 'Docker',
    explanation: 'Docker ist eine Plattform zur Entwicklung, Bereitstellung und Ausführung von Anwendungen in Containern. Container verpacken Code und Abhängigkeiten, um sicherzustellen, dass die Anwendung in jeder Umgebung gleich funktioniert.'
  },
  {
    term: 'VS Code',
    explanation: 'Visual Studio Code ist ein kostenloser, quelloffener Code-Editor von Microsoft. Er bietet Funktionen wie IntelliSense, Debugging, Git-Integration und Erweiterbarkeit durch eine Vielzahl von Plugins.'
  },
  {
    term: 'Figma',
    explanation: 'Figma ist ein webbasiertes Design-Tool für UI/UX-Design und Prototyping. Es ermöglicht Echtzeit-Zusammenarbeit und bietet leistungsstarke Funktionen für die Erstellung von Benutzeroberflächen und Design-Systemen.'
  },
  {
    term: 'Postman',
    explanation: 'Postman ist ein API-Entwicklungstool, das die Erstellung, Dokumentation, Testung und Überwachung von APIs erleichtert. Es bietet eine benutzerfreundliche Oberfläche zum Senden von HTTP-Anfragen und Analysieren von Antworten.'
  },

  // Soft Skills
  {
    term: 'Problemlösung',
    explanation: 'Problemlösung ist die Fähigkeit, Herausforderungen systematisch zu analysieren und effektive Lösungen zu finden. In der Softwareentwicklung beinhaltet dies Debugging, Optimierung und kreatives Denken.'
  },
  {
    term: 'Teamarbeit',
    explanation: 'Teamarbeit ist die Fähigkeit, effektiv mit anderen zusammenzuarbeiten, um gemeinsame Ziele zu erreichen. Dies umfasst Kommunikation, Respekt für unterschiedliche Perspektiven und die Bereitschaft, Wissen zu teilen.'
  },
  {
    term: 'Kommunikation',
    explanation: 'Kommunikation ist die Fähigkeit, Ideen klar und effektiv zu vermitteln, sowohl schriftlich als auch mündlich. In der Softwareentwicklung ist dies entscheidend für die Zusammenarbeit mit Teammitgliedern und Stakeholdern.'
  },
  {
    term: 'Projektmanagement',
    explanation: 'Projektmanagement umfasst die Planung, Organisation und Überwachung von Ressourcen, um bestimmte Ziele zu erreichen. Es beinhaltet Zeitplanung, Ressourcenzuweisung und Risikomanagement.'
  },
  {
    term: 'Zeitmanagement',
    explanation: 'Zeitmanagement ist die Fähigkeit, Zeit effektiv zu nutzen und zu priorisieren, um Aufgaben fristgerecht zu erledigen. Es hilft, Produktivität zu steigern und Stress zu reduzieren.'
  },
  {
    term: 'Detailgenauigkeit',
    explanation: 'Detailgenauigkeit ist die Fähigkeit, auf kleine Details zu achten und präzise zu arbeiten. In der Softwareentwicklung hilft dies, Fehler zu vermeiden und qualitativ hochwertigen Code zu schreiben.'
  },

  // Weitere Fachbegriffe
  {
    term: 'Frontend',
    explanation: 'Frontend bezeichnet den Teil einer Webanwendung, der direkt mit dem Benutzer interagiert. Es umfasst alles, was der Benutzer sieht und mit dem er interagiert, wie Layouts, Designs und Benutzeroberflächen.'
  },
  {
    term: 'Backend',
    explanation: 'Backend bezeichnet den serverseitigen Teil einer Webanwendung, der für die Datenverarbeitung, Geschäftslogik und Datenbankoperationen zuständig ist. Es ist der "unsichtbare" Teil, der die Funktionalität hinter den Kulissen bereitstellt.'
  },
  {
    term: 'Full-Stack',
    explanation: 'Full-Stack bezeichnet die Entwicklung sowohl des Frontend als auch des Backend einer Anwendung. Ein Full-Stack-Entwickler beherrscht Technologien auf beiden Seiten und kann eine komplette Anwendung von Grund auf erstellen.'
  },
  {
    term: 'API',
    explanation: 'API (Application Programming Interface) ist eine Schnittstelle, die es verschiedenen Softwareanwendungen ermöglicht, miteinander zu kommunizieren. APIs definieren, wie Komponenten interagieren sollen und erleichtern die Integration verschiedener Systeme.'
  },
  {
    term: 'Responsive Design',
    explanation: 'Responsive Design ist ein Ansatz zur Webentwicklung, bei dem Websites so gestaltet werden, dass sie auf verschiedenen Geräten und Bildschirmgrößen optimal dargestellt werden. Es verwendet flexible Layouts und CSS-Media-Queries.'
  },
  {
    term: 'SEO',
    explanation: 'SEO (Search Engine Optimization) umfasst Techniken zur Verbesserung der Sichtbarkeit einer Website in Suchmaschinen. Dazu gehören On-Page-Optimierung, technische Optimierung und Content-Strategie.'
  },
  {
    term: 'CI/CD',
    explanation: 'CI/CD (Continuous Integration/Continuous Deployment) ist eine Methode der Softwareentwicklung, bei der Code regelmäßig integriert, getestet und bereitgestellt wird. Es automatisiert den Build-, Test- und Deployment-Prozess.'
  },
  {
    term: 'CMS',
    explanation: 'CMS (Content Management System) ist eine Software, die die Erstellung und Verwaltung digitaler Inhalte erleichtert. Es ermöglicht Benutzern ohne technische Kenntnisse, Inhalte zu erstellen, zu bearbeiten und zu veröffentlichen.'
  },
  {
    term: 'Agile Entwicklung',
    explanation: 'Agile Entwicklung ist ein iterativer Ansatz zur Softwareentwicklung, der sich auf Zusammenarbeit, Kundenfeedback und schnelle Anpassung an Veränderungen konzentriert. Scrum und Kanban sind beliebte agile Methoden.'
  },
  {
    term: 'UI/UX',
    explanation: 'UI (User Interface) bezieht sich auf das visuelle Design einer Anwendung, während UX (User Experience) das gesamte Erlebnis des Benutzers bei der Interaktion mit der Anwendung umfasst. Beide sind entscheidend für benutzerfreundliche Produkte.'
  }
];