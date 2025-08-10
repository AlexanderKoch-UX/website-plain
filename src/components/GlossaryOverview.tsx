import React, { useState, useEffect } from 'react';
import { useGlossary, GlossaryTerm } from '@/contexts/GlossaryContext';
import styles from '@/styles/GlossaryOverview.module.scss';

interface GlossaryOverviewProps {
  title?: string;
  description?: string;
}

const GlossaryOverview: React.FC<GlossaryOverviewProps> = ({
  title = 'Fachwörter-Glossar',
  description = 'Hier finden Sie eine Übersicht aller Fachbegriffe, die auf dieser Website verwendet werden. Klicken Sie auf einen Begriff, um eine Erklärung zu erhalten.'
}) => {
  const { terms, showExplanation } = useGlossary();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTerms, setFilteredTerms] = useState<GlossaryTerm[]>([]);
  
  // Sortiere Begriffe alphabetisch
  useEffect(() => {
    const sorted = [...terms].sort((a, b) => 
      a.term.localeCompare(b.term, 'de', { sensitivity: 'base' })
    );
    setFilteredTerms(sorted);
  }, [terms]);
  
  // Filtere Begriffe basierend auf der Suche
  useEffect(() => {
    if (!searchTerm.trim()) {
      const sorted = [...terms].sort((a, b) => 
        a.term.localeCompare(b.term, 'de', { sensitivity: 'base' })
      );
      setFilteredTerms(sorted);
      return;
    }
    
    const filtered = terms.filter(term => 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.explanation.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => 
      a.term.localeCompare(b.term, 'de', { sensitivity: 'base' })
    );
    
    setFilteredTerms(filtered);
  }, [searchTerm, terms]);
  
  const handleTermClick = (term: GlossaryTerm) => {
    showExplanation(term.term, term.explanation);
  };
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Suchen Sie nach Begriffen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Suche nach Fachwörtern"
        />
      </div>
      
      {filteredTerms.length > 0 ? (
        <div className={styles.termsList}>
          {filteredTerms.map(term => (
            <button
              key={term.id}
              className={styles.term}
              onClick={() => handleTermClick(term)}
              aria-label={`Begriff: ${term.term}`}
            >
              {term.term}
            </button>
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>
          Keine Begriffe gefunden, die Ihrer Suche entsprechen.
        </p>
      )}
    </div>
  );
};

export default GlossaryOverview;