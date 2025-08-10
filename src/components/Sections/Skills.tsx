'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useGlossary } from '@/contexts/GlossaryContext';
import { skills } from '@/data/skills';
import { skillExplanations } from '@/data/skillExplanations';
import { Skill } from '@/types';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
  const { showExplanation } = useGlossary();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const categoryTitles = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & Technologien',
    soft: 'Soft Skills'
  };

  // Funktion zum Finden der Erklärung für einen Skill
  const getExplanation = (skillName: string): string => {
    const explanation = skillExplanations.find(
      item => item.term.toLowerCase() === skillName.toLowerCase()
    );
    return explanation?.explanation || `${skillName} ist eine Technologie oder Fähigkeit im Bereich der Webentwicklung.`;
  };

  // Funktion zum Anzeigen der Erklärung
  const handleSkillClick = (skillName: string) => {
    const explanation = getExplanation(skillName);
    showExplanation(skillName, explanation);
  };

  // Funktion zum Filtern nach Kategorie
  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  // Gefilterte Skills basierend auf der aktiven Kategorie
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={styles.skillsContainer}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Meine Skills</h2>
            <p>Technologien und Fähigkeiten, die ich beherrsche</p>
          </motion.div>
          
          <motion.div className={styles.categoryFilter} variants={itemVariants}>
            <button 
              className={`${styles.categoryButton} ${activeCategory === null ? styles.active : ''}`}
              onClick={() => setActiveCategory(null)}
            >
              Alle
            </button>
            {Object.entries(categoryTitles).map(([key, title]) => (
              <button 
                key={key}
                className={`${styles.categoryButton} ${activeCategory === key ? styles.active : ''}`}
                onClick={() => handleCategoryClick(key)}
              >
                {title}
              </button>
            ))}
          </motion.div>
          
          <motion.div className={styles.skillBadges} variants={containerVariants}>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={styles.skillBadge}
                variants={itemVariants}
                transition={{ delay: index * 0.03 }}
                onClick={() => handleSkillClick(skill.name)}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;