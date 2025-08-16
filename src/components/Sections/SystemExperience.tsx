'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useGlossary } from '@/contexts/GlossaryContext';
import { systemExperience } from '@/data/systemExperience';
import AutoGlossary from '@/components/AutoGlossary';
import styles from './SystemExperience.module.scss';

const SystemExperience: React.FC = () => {
  const { showExplanation } = useGlossary();
  const [activeTab, setActiveTab] = useState(0);
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

  const handleTermClick = (term: string) => {
    showExplanation(term, `${term} ist ein wichtiger Begriff in der Webentwicklung.`);
  };

  return (
    <section id="system-experience" className={styles.systemExperience}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Bewährte Systeme</h2>
            <p>Umfangreiche Erfahrung mit führenden CMS- und E-Commerce-Plattformen für maßgeschneiderte Lösungen</p>
          </motion.div>

          <motion.div className={styles.tabNavigation} variants={itemVariants}>
            {systemExperience.map((category, index) => (
              <button
                key={index}
                className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <i className={index === 0 ? 'fas fa-cogs' : 'fas fa-shopping-cart'}></i>
                {category.category}
              </button>
            ))}
          </motion.div>

          <motion.div className={styles.tabContent} variants={itemVariants}>
            <div className={styles.systemsGrid}>
              {systemExperience[activeTab]?.systems.map((system, index) => (
                <motion.div
                  key={index}
                  className={styles.systemCard}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.systemHeader}>
                    <div className={styles.systemIcon}>
                      <i className={system.icon}></i>
                    </div>
                    <h3>{system.name}</h3>
                  </div>

                  <div className={styles.systemContent}>
                    <p className={styles.systemDescription}>
                      <AutoGlossary>{system.description}</AutoGlossary>
                    </p>

                    <div className={styles.systemTechnologies}>
                      <h4><i className="fas fa-code"></i> Technologien</h4>
                      <div className={styles.techTags}>
                        {system.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className={styles.techTag}
                            onClick={() => handleTermClick(tech)}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className={styles.experienceFooter} variants={itemVariants}>
            <div className={styles.footerContent}>
              <div className={styles.footerItem}>
                <i className="fas fa-award"></i>
                <div>
                  <h4>Bewährte Expertise</h4>
                  <p>Langjährige Erfahrung mit verschiedenen Systemen und Technologien</p>
                </div>
              </div>
              <div className={styles.footerItem}>
                <i className="fas fa-tools"></i>
                <div>
                  <h4>Maßgeschneiderte Lösungen</h4>
                  <p>Individuelle Anpassungen und Erweiterungen für Ihre spezifischen Anforderungen</p>
                </div>
              </div>
              <div className={styles.footerItem}>
                <i className="fas fa-rocket"></i>
                <div>
                  <h4>Moderne Standards</h4>
                  <p>Einsatz aktueller Technologien und Best Practices für zukunftssichere Lösungen</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemExperience;