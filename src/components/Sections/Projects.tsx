'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useGlossary } from '@/contexts/GlossaryContext';
import { skillExplanations } from '@/data/skillExplanations';
import { realProjects } from '@/data/projects';
import AutoGlossary from '@/components/AutoGlossary';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  const { showExplanation } = useGlossary();
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
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  // Funktion zum Finden der Erklärung für einen Begriff
  const getExplanation = (term: string): string => {
    const explanation = skillExplanations.find(
      item => item.term.toLowerCase() === term.toLowerCase()
    );
    return explanation?.explanation || `${term} ist eine Technologie oder ein System im Bereich der Webentwicklung.`;
  };

  // Funktion zum Anzeigen der Erklärung
  const handleTermClick = (term: string) => {
    const explanation = getExplanation(term);
    showExplanation(term, explanation);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Meine Projekte</h2>
            <p><AutoGlossary>Erfahrung mit verschiedenen CMS und E-Commerce-Systemen</AutoGlossary></p>
          </motion.div>
          
          {/* Bestehende Projekte Sektion */}
          <motion.div className={styles.realProjects} variants={itemVariants}>
            <motion.h3 className={styles.realProjectsTitle} variants={itemVariants}>
              Aktuelle Projekte
            </motion.h3>
            
            <div className={styles.realProjectsGrid}>
              {realProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className={styles.projectCard}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={index}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <div className={styles.projectIcon}>
                    <i className={project.icon}></i>
                  </div>
                  <div className={styles.projectContent}>
                    <h4 
                      className={styles.projectTitle}
                      onClick={() => handleTermClick(project.title)}
                    >
                      {project.title}
                    </h4>
                    <p>
                      <AutoGlossary>{project.description}</AutoGlossary>
                    </p>
                    <div className={styles.projectTech}>
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className={styles.techTag}
                          onClick={() => handleTermClick(tech)}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className={styles.projectRole}>
                      <strong>Mein Beitrag:</strong> <AutoGlossary>{project.role}</AutoGlossary>
                    </div>
                    <div className={styles.projectLinks}>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.projectLink}
                        >
                          <i className="fas fa-external-link-alt"></i> Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`${styles.projectLink} ${styles.githubLink}`}
                        >
                          <i className="fab fa-github"></i> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;