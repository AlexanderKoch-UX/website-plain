'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutSections } from '@/data/marketing';
import { personalInfo } from '@/data/personal';
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
            <p>Lernen Sie Alexander Koch kennen</p>
          </motion.div>
          
          {/* Hero About Section with Image */}
          <motion.div className={styles.aboutHero} variants={itemVariants}>
            <div className={styles.aboutHeroContent}>
              <div className={styles.aboutText}>
                <h3>Alexander Koch</h3>
                <p className={styles.subtitle}>Ihr vertrauensvoller Partner für moderne Weblösungen</p>
                <p className={styles.description}>{personalInfo.description}</p>
              </div>
              <div className={styles.aboutImage}>
                <img 
                  src={personalInfo.image} 
                  alt={personalInfo.name}
                />
              </div>
            </div>
          </motion.div>

          {/* Detailed About Sections */}
          <div className={styles.aboutSections}>
            {aboutSections.map((section, index) => {
              const icons = ['fas fa-user-tie', 'fas fa-lightbulb', 'fas fa-handshake'];
              return (
                <motion.div 
                  key={index} 
                  className={styles.aboutSection}
                  variants={itemVariants}
                >
                  <div className={styles.sectionContent}>
                    <div className={styles.sectionIcon}>
                      <i className={icons[index] || 'fas fa-star'}></i>
                    </div>
                    <h3>{section.title}</h3>
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;