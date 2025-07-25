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
                <div className={styles.packageHeader}>
                  <h3>{pkg.name}</h3>
                </div>
                <div className={styles.packageContent}>
                  <ul className={styles.packageFeatures}>
                    {pkg.beschreibung.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.packagePricing}>
                    <div className={styles.priceItem}>
                      <strong>Einmalig:</strong> {pkg.preis.einmalig}
                    </div>
                    <div className={styles.priceItem}>
                      <strong>Hosting:</strong> {pkg.preis.hosting_vertrag}
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className={`btn btn-package ${getPackageClass(index)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                  >
                    Paket anfragen
                  </a>
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