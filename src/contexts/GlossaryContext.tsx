import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import predefinedTerms from '@/data/glossaryTerms';

export interface GlossaryTerm {
  id: string;
  term: string;
  explanation: string;
}

interface GlossaryContextValue {
  terms: GlossaryTerm[];
  addTerm: (term: Omit<GlossaryTerm, 'id'>) => void;
  removeTerm: (id: string) => void;
  updateTerm: (id: string, updates: Partial<Omit<GlossaryTerm, 'id'>>) => void;
  activeTerm: GlossaryTerm | null;
  setActiveTerm: (term: GlossaryTerm | null) => void;
  isModalOpen: boolean;
  openModal: (term: GlossaryTerm) => void;
  closeModal: () => void;
  findTermByName: (termName: string) => GlossaryTerm | undefined;
  showExplanation: (term: string, explanation: string) => void;
}

const GlossaryContext = createContext<GlossaryContextValue | undefined>(undefined);

interface GlossaryProviderProps {
  children: ReactNode;
  initialTerms?: Omit<GlossaryTerm, 'id'>[];
}

export const GlossaryProvider: React.FC<GlossaryProviderProps> = ({ 
  children, 
  initialTerms = [] 
}) => {
  // Kombiniere vordefinierte Begriffe mit initialTerms
  const combinedInitialTerms = [...predefinedTerms, ...initialTerms];
  
  const [terms, setTerms] = useState<GlossaryTerm[]>(
    combinedInitialTerms.map(term => ({
      ...term,
      id: generateId(),
    }))
  );
  const [activeTerm, setActiveTerm] = useState<GlossaryTerm | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Speichere Begriffe im localStorage
  useEffect(() => {
    try {
      const savedTerms = localStorage.getItem('glossaryTerms');
      if (savedTerms) {
        const parsedTerms = JSON.parse(savedTerms) as GlossaryTerm[];
        
        // Kombiniere gespeicherte Begriffe mit vordefinierten Begriffen
        // und vermeide Duplikate
        const existingTermNames = parsedTerms.map(term => term.term);
        const newPredefinedTerms = predefinedTerms
          .filter(term => !existingTermNames.includes(term.term))
          .map(term => ({
            ...term,
            id: generateId(),
          }));
        
        setTerms([...parsedTerms, ...newPredefinedTerms]);
      }
    } catch (error) {
      console.error('Fehler beim Laden der Glossarbegriffe:', error);
    }
  }, []);

  // Speichere Änderungen im localStorage
  useEffect(() => {
    try {
      localStorage.setItem('glossaryTerms', JSON.stringify(terms));
    } catch (error) {
      console.error('Fehler beim Speichern der Glossarbegriffe:', error);
    }
  }, [terms]);

  function generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  const updateTerm = useCallback((id: string, updates: Partial<Omit<GlossaryTerm, 'id'>>) => {
    setTerms(prev => 
      prev.map(term => 
        term.id === id ? { ...term, ...updates } : term
      )
    );
  }, []);

  const addTerm = useCallback((term: Omit<GlossaryTerm, 'id'>) => {
    // Prüfe, ob der Begriff bereits existiert
    const existingTerm = terms.find(t => t.term.toLowerCase() === term.term.toLowerCase());
    
    if (existingTerm) {
      // Aktualisiere den bestehenden Begriff, falls nötig
      if (existingTerm.explanation !== term.explanation) {
        updateTerm(existingTerm.id, { explanation: term.explanation });
      }
      return existingTerm;
    }
    
    // Füge neuen Begriff hinzu
    const newTerm: GlossaryTerm = {
      ...term,
      id: generateId(),
    };
    setTerms(prev => [...prev, newTerm]);
    return newTerm;
  }, [terms, updateTerm]);

  const removeTerm = useCallback((id: string) => {
    setTerms(prev => prev.filter(term => term.id !== id));
  }, []);

  const findTermByName = useCallback((termName: string) => {
    return terms.find(term => term.term.toLowerCase() === termName.toLowerCase());
  }, [terms]);

  // Neue Funktion zum direkten Anzeigen einer Erklärung
  const showExplanation = useCallback((term: string, explanation: string) => {
    // Finde den Begriff oder füge ihn hinzu
    const existingTerm = findTermByName(term);
    
    if (existingTerm) {
      // Öffne das Modal mit dem existierenden Begriff
      setActiveTerm(existingTerm);
      setIsModalOpen(true);
    } else {
      // Erstelle einen neuen Begriff und öffne das Modal
      const newTermData = {
        term,
        explanation
      };
      
      const newTerm = addTerm(newTermData);
      
      // Wenn der Begriff erfolgreich hinzugefügt wurde, öffne das Modal
      if (newTerm) {
        setActiveTerm(newTerm as GlossaryTerm);
        setIsModalOpen(true);
      }
    }
  }, [findTermByName, addTerm]);

  const openModal = useCallback((term: GlossaryTerm) => {
    setActiveTerm(term);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => {
      setActiveTerm(null);
    }, 300); // Delay clearing the active term until after the animation completes
  }, []);

  const value: GlossaryContextValue = {
    terms,
    addTerm,
    removeTerm,
    updateTerm,
    activeTerm,
    setActiveTerm,
    isModalOpen,
    openModal,
    closeModal,
    findTermByName,
    showExplanation,
  };

  return (
    <GlossaryContext.Provider value={value}>
      {children}
    </GlossaryContext.Provider>
  );
};

export const useGlossary = (): GlossaryContextValue => {
  const context = useContext(GlossaryContext);
  if (context === undefined) {
    throw new Error('useGlossary must be used within a GlossaryProvider');
  }
  return context;
};

export default GlossaryContext;