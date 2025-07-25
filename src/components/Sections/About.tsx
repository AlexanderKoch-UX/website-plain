'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.scss';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Über mich</h2>
            <p>Mein Weg als Softwareentwickler</p>
          </motion.div>
          
          <div className={styles.aboutContent}>
            <motion.div className={styles.aboutText} variants={itemVariants}>
              <h3>Wer ich bin</h3>
              <p>
                Ich bin 20 Jahre alt und bringe bereits über 6 Jahre Erfahrung in der Softwareentwicklung mit. 
                Aktuell absolviere ich meine Ausbildung als Fachinformatiker für Anwendungsentwicklung und 
                studiere parallel Informatik (Softwaresysteme) an der Westfälischen Hochschule Bocholt.
              </p>
              <p>
                Meine Leidenschaft liegt in der Entwicklung moderner, benutzerfreundlicher Anwendungen. 
                Ich habe erfolgreich eigene CMS und HQ-Systeme mit NextJS entwickelt und dabei sowohl 
                Frontend- als auch Backend-Komponenten implementiert.
              </p>
            </motion.div>
            
            <motion.div className={styles.aboutHighlights} variants={itemVariants}>
              <h3>Highlights</h3>
              <div className={styles.highlightItem}>
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <h4>Ausbildung & Studium</h4>
                  <p>
                    Fachinformatiker für Anwendungsentwicklung<br />
                    Informatik (Softwaresysteme) - Westfälische Hochschule Bocholt
                  </p>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <i className="fas fa-code"></i>
                <div>
                  <h4>6+ Jahre Erfahrung</h4>
                  <p>Umfassende Erfahrung in der Entwicklung moderner Webanwendungen</p>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <i className="fas fa-rocket"></i>
                <div>
                  <h4>Eigene Projekte</h4>
                  <p>Erfolgreiche Entwicklung von CMS und HQ-Systemen</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;