'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import ModernBackground from '@/components/UI/ModernBackground';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = `Hallo, ich bin`;
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 75);

    return () => clearInterval(timer);
  }, [fullText]);

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
    <section id="home" className={styles.hero} ref={heroRef}>
      <ModernBackground variant="gradient" intensity="medium" animated={true} />
      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className={`${styles.heroSideBySide} ${styles.heroText} hero-text-side`} 
            variants={itemVariants}
          >
            <motion.h1>
              {displayText} <br />
              <span className={styles.highlight}>
                 Alexander Koch
              </span>
            </motion.h1>
            <motion.h2>
              {personalInfo.title}
            </motion.h2>
            <motion.p className={styles.heroDescription}>
              {personalInfo.description}
            </motion.p>
            <motion.div className={styles.heroButtons}>
              <Link href="/#services" className="button-primary">
                <i className="fas fa-code"></i>
                Meine Leistungen
              </Link>
              <Link href="/#contact" className="button-secondary">
                <i className="fas fa-comments"></i>
                Kostenloses Beratungsgespräch
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={`${styles.heroSideBySide} hero-image-side`} 
            variants={itemVariants}
          >
            <div className={styles.imageContainer}>
              <div className={styles.imageGlow}></div>
              <Image
                src={personalInfo.image}
                alt="Alexander Koch - Full-Stack Entwickler & Digital Solutions Expert"
                width={400}
                height={400}
                priority
                quality={95}
                sizes="(max-width: 768px) 280px, (max-width: 1200px) 350px, 400px"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '400px',
                }}
                className={styles.profileImage}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;