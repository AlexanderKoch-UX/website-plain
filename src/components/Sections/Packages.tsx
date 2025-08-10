'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useGlossary } from '@/contexts/GlossaryContext';
import { packages } from '@/data/packages';
import AutoGlossary from '@/components/AutoGlossary';
import styles from './Packages.module.scss';

const Packages: React.FC = () => {
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

  const getPackageClass = (id: string) => {
    const classes: { [key: string]: string } = {
      'starter': 'starter',
      'business': 'business',
      'enterprise': 'premium'
    };
    return classes[id] || 'starter';
  };

  // Funktion zum Anzeigen der Erklärung
  const handleTermClick = (term: string) => {
    showExplanation(term, `${term} ist ein wichtiger Begriff in der Webentwicklung.`);
  };

  return (
    <section id="packages" className={styles.packages}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Leistungspakete</h2>
            <p>Maßgeschneiderte Lösungen für Ihre individuellen Anforderungen</p>
            <div className={styles.packagesIntro}>
              <div className={styles.introItem}>
                <i className="fas fa-code"></i>
                <span>Moderne Technologie-Stacks</span>
              </div>
              <div className={styles.introItem}>
                <i className="fas fa-handshake"></i>
                <span>Transparente Zusammenarbeit</span>
              </div>
              <div className={styles.introItem}>
                <i className="fas fa-rocket"></i>
                <span>Skalierbare Lösungen</span>
              </div>
            </div>
          </motion.div>
          
          <div className={styles.packagesGrid}>
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                className={`${styles.packageCard} ${styles[getPackageClass(pkg.id)]}`}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {pkg.id === 'business' && <div className={styles.popularBadge}>Empfehlung</div>}
                
                <div className={styles.packageHeader}>
                  <div className={styles.packageIcon}>
                    <i className={pkg.icon}></i>
                  </div>
                  <h3>{pkg.title}</h3>
                  <p className={styles.packageSubtitle}>{pkg.subtitle}</p>
                  <div className={styles.packagePricing}>
                    <div className={styles.mainPrice}>
                      <span className={styles.priceValue}>{pkg.priceRange}</span>
                    </div>
                    <div className={styles.hostingPrice}>
                      Zeitrahmen: {pkg.timeframe}
                    </div>
                  </div>
                </div>
                
                <div className={styles.packageContent}>
                  <div className={styles.packageDescription}>
                    <AutoGlossary>{pkg.description}</AutoGlossary>
                  </div>
                  
                  <div className={styles.packageSections}>
                    <div className={styles.packageSection}>
                      <h4><i className="fas fa-list"></i> Leistungen</h4>
                      <ul className={styles.packageFeatures}>
                        {pkg.features.map((feature, index) => (
                          <li key={index}>
                            <div className={styles.checkIcon}>
                              <i className="fas fa-check"></i>
                            </div>
                            <span onClick={() => handleTermClick(feature)}>
                              <AutoGlossary>{feature}</AutoGlossary>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.packageSection}>
                      <h4><i className="fas fa-code"></i> Technologien</h4>
                      <div className={styles.techTags}>
                        {pkg.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className={styles.techTag}
                            onClick={() => handleTermClick(tech)}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.packageSection}>
                      <h4><i className="fas fa-file-alt"></i> Lieferumfang</h4>
                      <ul className={styles.packageFeatures}>
                        {pkg.deliverables.map((deliverable, index) => (
                          <li key={index}>
                            <div className={styles.checkIcon}>
                              <i className="fas fa-file-alt"></i>
                            </div>
                            <span>
                              <AutoGlossary>{deliverable}</AutoGlossary>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.packageIdeal}>
                    <i className="fas fa-user-check"></i>
                    <p>{pkg.ideal}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div className={styles.packagesFooter} variants={itemVariants}>
            <p><i className="fas fa-info-circle"></i> Alle Pakete können individuell an Ihre spezifischen Anforderungen angepasst werden.</p>
            <p><i className="fas fa-phone"></i> Gerne berate ich Sie kostenlos und unverbindlich zu Ihrem Projekt.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;