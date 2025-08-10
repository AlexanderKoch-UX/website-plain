import React from 'react';
import { useGlossary } from '@/contexts/GlossaryContext';
import styles from '@/styles/GlossaryTerm.module.scss';

interface GlossaryTermProps {
  term: string;
  explanation: string;
  children: React.ReactNode;
  className?: string;
}

const GlossaryTerm: React.FC<GlossaryTermProps> = ({ 
  term, 
  explanation, 
  children,
  className = ''
}) => {
  const { addTerm, showExplanation } = useGlossary();
  
  // Einfache onClick-Funktion zum Anzeigen der Erklärung
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Füge den Begriff hinzu, falls er noch nicht existiert
    addTerm({
      term,
      explanation
    });
    
    // Zeige die Erklärung an
    showExplanation(term, explanation);
  };
  
  return (
    <span 
      className={`${styles.term} ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Begriff: ${term}`}
      data-glossary-term={term}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(e as unknown as React.MouseEvent);
        }
      }}
    >
      {children}
    </span>
  );
};

export default GlossaryTerm;