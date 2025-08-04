'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { serviceAreas, marketingPoints } from '@/data/marketing';
import styles from './Services.module.scss';

const Services: React.FC = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Meine Leistungen</h2>
            <p>Umfassende Webentwicklung für Ihr Unternehmen</p>
          </motion.div>

          {/* Marketing Points */}
          <motion.div className={styles.marketingPoints} variants={itemVariants}>
            <div className={styles.pointsGrid}>
              {marketingPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className={styles.pointCard}
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className={styles.pointIcon}>
                    <i className={point.icon}></i>
                  </div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                  {point.benefits && (
                    <div className={styles.benefitsList}>
                      {point.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className={styles.benefitItem}>
                          <i className="fas fa-check"></i>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service Areas */}
          <motion.div className={styles.serviceAreas} variants={itemVariants}>
            <motion.h3 className={styles.areasTitle} variants={itemVariants}>
              Service-Bereiche
            </motion.h3>
            <div className={styles.areasGrid}>
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className={styles.areaCard}
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className={styles.areaHeader}>
                    <div className={styles.areaIcon}>
                      <i className={area.icon}></i>
                    </div>
                    <h4>{area.title}</h4>
                  </div>
                  
                  <p className={styles.areaDescription}>{area.description}</p>
                  
                  <div className={styles.areaServices}>
                    <h5>Services</h5>
                    <ul>
                      {area.services.map((service, sIndex) => (
                        <li key={sIndex}>
                          <i className="fas fa-arrow-right"></i>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {area.technologies && (
                    <div className={styles.areaTechnologies}>
                      <h5>Technologien</h5>
                      <div className={styles.techTags}>
                        {area.technologies.map((tech, tIndex) => (
                          <span key={tIndex} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;