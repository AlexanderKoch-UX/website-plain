'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useGlossary } from '@/contexts/GlossaryContext';
import { skillExplanations } from '@/data/skillExplanations';
import { serviceAreas, marketingPoints } from '@/data/marketing';
import AutoGlossary from '@/components/AutoGlossary';
import styles from './Services.module.scss';

const Services: React.FC = () => {
  const { showExplanation } = useGlossary();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  // Funktion zum Finden der Erklärung für einen Begriff
  const getExplanation = (term: string): string => {
    const explanation = skillExplanations.find(
      item => item.term.toLowerCase() === term.toLowerCase()
    );
    return explanation?.explanation || `${term} ist ein Begriff aus dem Bereich der Webentwicklung.`;
  };

  // Funktion zum Anzeigen der Erklärung
  const handleTermClick = (term: string) => {
    const explanation = getExplanation(term);
    showExplanation(term, explanation);
  };

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Allgemeine Vorteile - Zusammenfassung */}
          <motion.div className={styles.generalBenefits} variants={itemVariants}>
            <motion.h3 className={styles.benefitsTitle} variants={itemVariants}>
              Warum mit mir zusammenarbeiten?
            </motion.h3>
            <div className={styles.benefitsCards}>
              {marketingPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className={styles.benefitCard}
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className={styles.benefitIcon}>
                    <i className={point.icon}></i>
                  </div>
                  <h4 
                    onClick={() => handleTermClick(point.title)}
                    className={styles.benefitCardTitle}
                  >
                    {point.title}
                  </h4>
                  <p>
                    <AutoGlossary>{point.description}</AutoGlossary>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;