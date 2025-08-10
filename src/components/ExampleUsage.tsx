import React from 'react';
import Link from 'next/link';
import { useGlossary } from '@/contexts/GlossaryContext';
import GlossaryTerm from './GlossaryTerm';
import AutoGlossary from './AutoGlossary';
import GlossaryOverview from './GlossaryOverview';
import styles from '@/styles/GlossaryTerm.module.scss';

const ExampleUsage: React.FC = () => {
  const { showExplanation } = useGlossary();
  
  return (
    <div>
      <h2>Beispiel für die Verwendung von Fachwörtern</h2>
      
      <h3>1. Manuelle Markierung von Fachwörtern mit span-Elementen</h3>
      <p>
        In meinen Projekten verwende ich moderne Technologien wie{' '}
        <span 
          className={styles.term}
          onClick={() => showExplanation(
            "React", 
            "React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen. Es wurde von Facebook entwickelt und ermöglicht die Erstellung wiederverwendbarer UI-Komponenten."
          )}
          role="button"
          tabIndex={0}
        >
          React
        </span>{' '}
        und{' '}
        <span 
          className={styles.term}
          onClick={() => showExplanation(
            "Next.js", 
            "Next.js ist ein React-Framework, das Features wie serverseitiges Rendering und statische Seitengenerierung bietet. Es vereinfacht die Entwicklung von React-Anwendungen durch automatisches Routing, Code-Splitting und optimierte Performance."
          )}
          role="button"
          tabIndex={0}
        >
          Next.js
        </span>.
      </p>
      <p>
        Für die Gestaltung nutze ich{' '}
        <span 
          className={styles.term}
          onClick={() => showExplanation(
            "SCSS", 
            "SCSS (Sassy CSS) ist eine Erweiterung von CSS, die zusätzliche Funktionen wie Variablen, Verschachtelung und Mixins bietet. Es macht CSS-Code besser wartbar und wiederverwendbar."
          )}
          role="button"
          tabIndex={0}
        >
          SCSS
        </span>{' '}
        und für die Typensicherheit{' '}
        <span 
          className={styles.term}
          onClick={() => showExplanation(
            "TypeScript", 
            "TypeScript ist eine von Microsoft entwickelte Programmiersprache, die JavaScript um Typsystem-Funktionalitäten erweitert. Es hilft, Fehler frühzeitig zu erkennen und verbessert die Code-Qualität und Wartbarkeit."
          )}
          role="button"
          tabIndex={0}
        >
          TypeScript
        </span>.
      </p>
      
      <h3>2. Verwendung der GlossaryTerm-Komponente</h3>
      <p>
        Alternativ können Sie auch die{' '}
        <GlossaryTerm 
          term="GlossaryTerm" 
          explanation="Eine React-Komponente, die Fachwörter mit Erklärungen versieht. Beim Klick auf ein Fachwort wird ein Modal mit der Erklärung angezeigt."
        >
          GlossaryTerm-Komponente
        </GlossaryTerm>{' '}
        verwenden, die intern auch einen span mit onClick-Handler erstellt.
      </p>
      
      <h3>3. Automatische Erkennung von Fachwörtern</h3>
      <p>
        <AutoGlossary>
          Bei meinen Projekten setze ich auf moderne Webtechnologien. Für das Frontend verwende ich React und TypeScript, während ich im Backend oft mit REST APIs arbeite. Responsive Design ist für mich selbstverständlich, und ich achte stets auf gute SEO.
        </AutoGlossary>
      </p>
      <p>
        <AutoGlossary>
          Meine Entwicklungsprozesse folgen den Prinzipien der Agilen Entwicklung und ich nutze CI/CD für kontinuierliche Integration und Bereitstellung. Für Kunden, die ihre Inhalte selbst verwalten möchten, implementiere ich passende CMS-Lösungen.
        </AutoGlossary>
      </p>
      
      <h3>4. Übersicht aller Fachwörter</h3>
      <GlossaryOverview 
        title="Technologie-Glossar" 
        description="Hier finden Sie eine Übersicht aller technischen Begriffe, die in meinem Portfolio verwendet werden. Klicken Sie auf einen Begriff, um eine einfache Erklärung zu erhalten."
      />
      
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/glossary" style={{ 
          display: 'inline-block', 
          padding: '0.75rem 1.5rem', 
          backgroundColor: '#667eea', 
          color: 'white', 
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'all 0.2s ease'
        }}>
          Zum vollständigen Glossar
        </Link>
      </div>
    </div>
  );
};

export default ExampleUsage;