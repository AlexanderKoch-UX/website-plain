'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = `Hallo, ich bin Alexander Koch`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
    <section id="home" className={styles.hero}>
      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.heroText} variants={itemVariants}>
            <h1>
              {displayText}
              <span className={styles.highlight}>
                {displayText.includes('Alexander Koch') ? '' : ''}
              </span>
            </h1>
            <h2>{personalInfo.title}</h2>
            <p className={styles.heroDescription}>
              {personalInfo.description}
            </p>
            <div className={styles.heroButtons}>
              <a href="#projects" className="btn btn-primary">
                Projekte ansehen
              </a>
              <a href="#contact" className="btn btn-secondary">
                Kontakt aufnehmen
              </a>
            </div>
          </motion.div>
          
          <motion.div className={styles.heroImage} variants={itemVariants}>
            <div className={styles.imagePlaceholder}>
              <Image
                src={personalInfo.image}
                alt="Alexander Koch Profilbild"
                width={300}
                height={300}
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;