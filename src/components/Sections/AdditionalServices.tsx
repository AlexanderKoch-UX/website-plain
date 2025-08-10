'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useGlossary } from '@/contexts/GlossaryContext';
import { additionalServices } from '@/data/packages';
import AutoGlossary from '@/components/AutoGlossary';
import styles from './AdditionalServices.module.scss';

const AdditionalServices: React.FC = () => {
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
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: 'easeOut',
        delay: i * 0.1
      }
    })
  };

  // Funktion zum Anzeigen der Erklärung
  const handleTermClick = (term: string) => {
    showExplanation(term, `${term} ist ein wichtiger Begriff in der Webentwicklung.`);
  };

  return (
    <section id="additional-services" className={styles.additionalServices}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Weitere Dienstleistungen</h2>
            <p>
              <AutoGlossary>
                Spezialisierte Expertise für Ihre individuellen Anforderungen
              </AutoGlossary>
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.id}
                className={styles.serviceCard}
                variants={cardVariants}
                custom={index}
              >
                <div className={styles.serviceIcon}>
                  <i className={service.icon}></i>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  <AutoGlossary>{service.description}</AutoGlossary>
                </p>
                
                <div className={styles.serviceFeatures}>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="fas fa-check-circle"></i>
                        <span onClick={() => handleTermClick(feature)}>
                          <AutoGlossary>{feature}</AutoGlossary>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.servicePrice}>
                  <span>{service.priceInfo}</span>
                </div>
                
                <motion.a
                  href="#contact"
                  className={styles.serviceButton}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Anfrage stellen</span>
                  <i className="fas fa-arrow-right"></i>
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.div className={styles.servicesNote} variants={itemVariants}>
            <i className="fas fa-info-circle"></i>
            <p>
              <AutoGlossary>
                Alle Dienstleistungen können individuell an Ihre spezifischen Anforderungen angepasst werden.
                Kontaktieren Sie mich für ein persönliches Angebot.
              </AutoGlossary>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalServices;