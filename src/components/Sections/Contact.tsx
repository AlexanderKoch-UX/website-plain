'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '@/data/personal';
import styles from './Contact.module.scss';



const Contact: React.FC = () => {
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



  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Kontakt</h2>
            <p>Lassen Sie uns über Ihr nächstes Projekt sprechen</p>
          </motion.div>
          
          <div className={styles.contactContent}>
            <motion.div className={styles.contactInfo} variants={itemVariants}>
              <h3>Kontaktieren Sie mich</h3>
              <p>Ich freue mich auf Ihre Nachricht und stehe für Fragen oder Projektanfragen zur Verfügung.</p>
              
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <i className="fas fa-envelope"></i>
                  <span>{personalInfo.contact.email}</span>
                </div>
                <div className={styles.contactItem}>
                  <i className="fas fa-phone"></i>
                  <span>{personalInfo.contact.phone}</span>
                </div>
                <div className={styles.contactItem}>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{personalInfo.contact.location}</span>
                </div>
              </div>
              
              <div className={styles.socialLinks}>
                {personalInfo.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </motion.div>
            
            <motion.div className={styles.contactForm} variants={itemVariants}>
              <div className={styles.emailSection}>
                <h3>Schreiben Sie mir</h3>
                <p>Ich freue mich auf Ihre Nachricht und stehe für Fragen oder Projektanfragen zur Verfügung.</p>
                <div className={styles.contactActions}>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="btn btn-package premium"
                  >
                    <i className="fas fa-envelope"></i>
                    E-Mail senden
                  </a>
                  <Link
                    href="/visitenkarte"
                    className="btn btn-secondary"
                  >
                    <i className="fas fa-address-card"></i>
                    Visitenkarte
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;