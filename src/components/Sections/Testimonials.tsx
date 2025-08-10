import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { clientTestimonials } from '@/data/testimonials';
import styles from '@/styles/Testimonials.module.scss';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  // Temporär ausblenden, bis Kundenrezensionen verfügbar sind
  const isVisible = false;

  if (!isVisible) {
    return null; // Komponente nicht rendern
  }

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={styles.testimonialsContent}
        >
          <motion.div variants={itemVariants} className={styles.header}>
            <h2>Was Kunden über mich sagen</h2>
            <p className={styles.subtitle}>
              Erfahrungen und Feedback aus abgeschlossenen Projekten
            </p>
          </motion.div>

          <div className={styles.testimonialsGrid}>
            {clientTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className={styles.testimonialCard}
              >
                <div className={styles.testimonialHeader}>
                  <div className={styles.clientInfo}>
                    <h4>{testimonial.clientName}</h4>
                    <p>{testimonial.clientTitle}</p>
                    <p className={styles.company}>
                      {testimonial.website ? (
                        <a href={testimonial.website} target="_blank" rel="noopener noreferrer">
                          {testimonial.company}
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      ) : (
                        testimonial.company
                      )}
                    </p>
                  </div>
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                
                <blockquote>
                  &ldquo;{testimonial.testimonial}&rdquo;
                </blockquote>
                
                <div className={styles.projectInfo}>
                  <span className={styles.projectLabel}>Projekt:</span>
                  <span className={styles.projectName}>{testimonial.project}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;