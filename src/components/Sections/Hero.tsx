'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = `Hallo, ich bin`;

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
    <section id="home" className={styles.hero}>
      {/* Floating Background Elements */}
      <div className={styles.floatingElement}></div>
      <div className={styles.floatingElement}></div>
      <div className={styles.floatingElement}></div>
      
      <div className={`${styles.heroContainer} container`}>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className={`${styles.heroText} ${styles.heroSideBySide} hero-text-side`} 
            variants={itemVariants}
          >
            <motion.h1 className="animate-fade-in-up">
              {displayText} <br />
              <span className={styles.highlight}>
                 Alexander Koch
              </span>
            </motion.h1>
            <motion.h2 
              className="animate-fade-in-up animate-delay-200"
            >
              {personalInfo.title}
            </motion.h2>
            <motion.p 
              className={`${styles.heroDescription} animate-fade-in-up animate-delay-300`}
            >
              {personalInfo.description}
            </motion.p>
            <motion.div 
              className={`${styles.heroButtons} animate-fade-in-up animate-delay-400`}
            >
              <Link href="#services" className="btn btn-primary btn-lg hover-lift">
                <i className="fas fa-code"></i>
                Meine Leistungen
              </Link>
              <a href="#contact" className="btn btn-secondary btn-lg hover-lift">
                <i className="fas fa-comments"></i>
                Kostenloses Beratungsgespräch
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={`${styles.heroImage} ${styles.heroSideBySide} hero-image-side`} 
            variants={itemVariants}
          >
            <div className={`${styles.imagePlaceholder}`}>
              <Image
                src={personalInfo.image}
                alt="Alexander Koch Profilbild"
                width={400}
                height={400}
                priority
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgQRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bccXvdUTEfPvvn7aLvWVuFN9K90gp8pC0hOFLKCP2TsRF5vS5ixnr3/UUlQNETmhN36yC+kULcZCH02p22HEjrJtpdOaJu2Z8p6FUW0rPjDgjP6J8nq7DWqz1SWjgAaVFZTEwOgADrGu1vz4cOdVdNmjlTdFLd2bPnf8nEJKzqCt3IvCmvGt1O/5JKHqY72wXFJWE7jRW8uKCe9gHzLH+LfGQs8Kj4MQdBGmn2vkL/8Gn5SDp6urcTSAjd2Wjd9rlDsaYl4jnK0LXGDzV6aU8LHHC4aFO3UWr/WPQ="
                className="hover-scale"
                style={{
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;