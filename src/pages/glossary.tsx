import React from 'react';
import Layout from '@/components/Layout/Layout';
import { useGlossary } from '@/contexts/GlossaryContext';
import styles from '@/styles/pages/Glossary.module.scss';

const GlossaryPage: React.FC = () => {
  const { terms, showExplanation } = useGlossary();
  
  // Sortiere Begriffe alphabetisch
  const sortedTerms = [...terms].sort((a, b) => 
    a.term.localeCompare(b.term, 'de', { sensitivity: 'base' })
  );
  
  // Gruppiere Begriffe nach Anfangsbuchstaben
  const groupedTerms: Record<string, typeof terms> = {};
  
  sortedTerms.forEach(term => {
    const firstLetter = term.term.charAt(0).toUpperCase();
    if (!groupedTerms[firstLetter]) {
      groupedTerms[firstLetter] = [];
    }
    groupedTerms[firstLetter].push(term);
  });
  
  // Sortierte Liste der Anfangsbuchstaben
  const sortedLetters = Object.keys(groupedTerms).sort();
  
  return (
    <Layout
      title="Fachwörter-Glossar | Alexander Koch - Full-Stack Entwickler"
      description="Glossar mit Erklärungen zu Fachbegriffen aus der Webentwicklung und Programmierung."
      canonical="https://alexanderkoch.dev/glossary"
    >
      <section className={styles.glossaryPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Fachwörter-Glossar</h1>
            <p className={styles.description}>
              Hier finden Sie Erklärungen zu Fachbegriffen aus der Webentwicklung und Programmierung.
              Klicken Sie auf einen Begriff, um eine einfache Erklärung zu erhalten.
            </p>
          </div>
          
          <div className={styles.alphabetNav}>
            {sortedLetters.map(letter => (
              <a 
                key={letter} 
                href={`#section-${letter}`}
                className={styles.letterLink}
              >
                {letter}
              </a>
            ))}
          </div>
          
          <div className={styles.glossaryContent}>
            {sortedLetters.map(letter => {
              const termsForLetter = groupedTerms[letter] || [];
              return (
                <div key={letter} id={`section-${letter}`} className={styles.letterSection}>
                  <h2 className={styles.letterHeading}>{letter}</h2>
                  <div className={styles.termsList}>
                    {termsForLetter.map(term => (
                      <div key={term.id} className={styles.termItem}>
                        <span 
                          className={styles.term}
                          onClick={() => showExplanation(term.term, term.explanation)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              showExplanation(term.term, term.explanation);
                            }
                          }}
                        >
                          {term.term}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GlossaryPage;