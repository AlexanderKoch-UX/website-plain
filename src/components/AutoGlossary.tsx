import React, { ReactNode } from 'react';
import { useGlossary } from '@/contexts/GlossaryContext';
import styles from '@/styles/GlossaryTerm.module.scss';

interface AutoGlossaryProps {
  children: string;
  className?: string;
}

/**
 * AutoGlossary-Komponente, die automatisch Fachwörter im Text erkennt und markiert
 * 
 * Hinweis: Diese Komponente funktioniert nur mit einfachem Text, nicht mit JSX/React-Elementen
 */
const AutoGlossary: React.FC<AutoGlossaryProps> = ({ children, className = '' }) => {
  const { terms, showExplanation } = useGlossary();
  
  if (!children || typeof children !== 'string') {
    return <>{children}</>;
  }
  
  // Sortiere Begriffe nach Länge (längste zuerst), um Teilbegriffe korrekt zu erkennen
  const sortedTerms = [...terms].sort((a, b) => b.term.length - a.term.length);
  
  // Teile den Text in Segmente auf und markiere Fachwörter
  let segments: ReactNode[] = [children];
  
  sortedTerms.forEach(glossaryTerm => {
    segments = segments.flatMap(segment => {
      // Wenn das Segment kein String ist (bereits ein React-Element), nicht weiter verarbeiten
      if (typeof segment !== 'string') {
        return segment;
      }
      
      const parts = segment.split(new RegExp(`(\\b${glossaryTerm.term}\\b)`, 'i'));
      
      return parts.map((part, index) => {
        if (part.toLowerCase() === glossaryTerm.term.toLowerCase()) {
          // Erstelle einen einfachen span mit onClick-Handler
          return (
            <span 
              key={`${glossaryTerm.id}-${index}`}
              className={`${styles.term} ${className}`}
              onClick={() => showExplanation(glossaryTerm.term, glossaryTerm.explanation)}
              role="button"
              tabIndex={0}
              aria-label={`Begriff: ${glossaryTerm.term}`}
              data-glossary-term={glossaryTerm.term}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  showExplanation(glossaryTerm.term, glossaryTerm.explanation);
                }
              }}
            >
              {part}
            </span>
          );
        }
        return part;
      });
    });
  });
  
  return <>{segments}</>;
};

export default AutoGlossary;