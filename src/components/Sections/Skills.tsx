'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/skills';
import { Skill } from '@/types';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const groupSkillsByCategory = (skills: Skill[]) => {
    return skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);
  };

  const skillGroups = groupSkillsByCategory(skills);
  
  const categoryTitles = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & Technologien',
    soft: 'Soft Skills'
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Meine Skills</h2>
            <p>Technologien und Fähigkeiten, die ich beherrsche</p>
            
            <div className={styles.skillTreeLink}>
              <Link href="/skills" className={styles.treeButton}>
                <i className="fas fa-sitemap"></i>
                Interaktiven Skill Tree erkunden
              </Link>
            </div>
          </motion.div>
          
          <div className={styles.skillsContent}>
            {Object.entries(skillGroups).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                className={styles.skillCategory}
                variants={itemVariants}
              >
                <h3>{categoryTitles[category as keyof typeof categoryTitles]}</h3>
                <div className={styles.skillsGrid}>
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className={styles.skillItem}
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <i className={skill.icon}></i>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;