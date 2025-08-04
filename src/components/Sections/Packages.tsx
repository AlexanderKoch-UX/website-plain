'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { packages } from '@/data/packages';
import styles from './Packages.module.scss';

const Packages: React.FC = () => {
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

  const getPackageClass = (index: number) => {
    const classes = ['starter', 'business', 'premium'];
    return classes[index] || 'starter';
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
            <h2>Meine Pakete</h2>
            <p>Professionelle Webentwicklung für jeden Bedarf – transparent und fair kalkuliert</p>
            <div className={styles.packagesIntro}>
              <div className={styles.introItem}>
                <i className="fas fa-shield-alt"></i>
                <span>Festpreise ohne versteckte Kosten</span>
              </div>
              <div className={styles.introItem}>
                <i className="fas fa-handshake"></i>
                <span>Persönliche Beratung inklusive</span>
              </div>
              <div className={styles.introItem}>
                <i className="fas fa-rocket"></i>
                <span>Schnelle Umsetzung</span>
              </div>
            </div>
          </motion.div>
          
          <div className={styles.packagesGrid}>
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`${styles.packageCard} ${styles[getPackageClass(index)]}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {index === 1 && <div className={styles.popularBadge}>Beliebteste Wahl</div>}
                
                <div className={styles.packageHeader}>
                  <div className={styles.packageIcon}>
                    <i className={index === 0 ? "fas fa-paper-plane" : index === 1 ? "fas fa-crown" : "fas fa-gem"}></i>
                  </div>
                  <h3>{pkg.name}</h3>
                  <div className={styles.packagePricing}>
                    <div className={styles.mainPrice}>
                      <span className={styles.priceLabel}>Ab</span>
                      <span className={styles.priceValue}>{pkg.preis.einmalig.split('–')[0]}</span>
                    </div>
                    <div className={styles.hostingPrice}>
                      + {pkg.preis.hosting_vertrag} Hosting
                    </div>
                  </div>
                </div>
                
                <div className={styles.packageContent}>
                  <ul className={styles.packageFeatures}>
                    {pkg.beschreibung.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <div className={styles.checkIcon}>
                          <i className="fas fa-check"></i>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.a
                    href="#contact"
                    className={`${styles.packageButton} ${styles[getPackageClass(index)]}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Paket anfragen</span>
                    <i className="fas fa-arrow-right"></i>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div className={styles.packagesFooter} variants={itemVariants}>
            <p><i className="fas fa-info-circle"></i> Alle Preise sind Richtwerte und werden individuell nach Ihren Anforderungen kalkuliert.</p>
            <p><i className="fas fa-phone"></i> Gerne berate ich Sie kostenlos und unverbindlich zu Ihrem Projekt.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;