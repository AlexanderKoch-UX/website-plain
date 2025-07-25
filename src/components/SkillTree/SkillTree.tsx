'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillTree, getSkillsByLevel, getSkillsByCategory, buildSkillTree } from '@/data/skillTree';
import { SkillNode } from '@/types';
import SkillMindMap from './SkillMindMap';
import styles from './SkillTree.module.scss';

interface SkillTreeProps {
  viewMode?: 'tree' | 'levels' | 'categories' | 'mindmap';
}

interface SkillPosition {
  id: string;
  x: number;
  y: number;
  element?: HTMLElement;
}

const SkillTree: React.FC<SkillTreeProps> = ({ viewMode = 'mindmap' }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(null);
  const [currentViewMode, setCurrentViewMode] = useState(viewMode);
  const [skillPositions, setSkillPositions] = useState<Map<string, SkillPosition>>(new Map());
  const treeRef = useRef<HTMLDivElement>(null);

  const skillsByLevel = getSkillsByLevel();
  const skillsByCategory = getSkillsByCategory();

  // Update skill positions for connection lines
  useEffect(() => {
    if (currentViewMode !== 'tree') return;

    const updatePositions = () => {
      const positions = new Map<string, SkillPosition>();
      
      skillTree.forEach(skill => {
        const element = document.querySelector(`[data-skill-id="${skill.id}"]`) as HTMLElement;
        if (element) {
          const rect = element.getBoundingClientRect();
          const containerRect = treeRef.current?.getBoundingClientRect();
          if (containerRect) {
            positions.set(skill.id, {
              id: skill.id,
              x: rect.left - containerRect.left + rect.width / 2,
              y: rect.top - containerRect.top + rect.height / 2,
              element
            });
          }
        }
      });
      
      setSkillPositions(positions);
    };

    // Initial position calculation
    setTimeout(updatePositions, 100);
    
    // Update on resize
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, [currentViewMode]);

  const getConnectionLines = (): JSX.Element[] => {
    const lines: JSX.Element[] = [];
    
    skillTree.forEach(skill => {
      if (skill.prerequisites) {
        skill.prerequisites.forEach(prereqId => {
          const skillPos = skillPositions.get(skill.id);
          const prereqPos = skillPositions.get(prereqId);
          
          if (skillPos && prereqPos) {
            const lineId = `${prereqId}-${skill.id}`;
            lines.push(
              <motion.line
                key={lineId}
                x1={prereqPos.x}
                y1={prereqPos.y}
                x2={skillPos.x}
                y2={skillPos.y}
                stroke="rgba(255, 215, 0, 0.6)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            );
          }
        });
      }
    });
    
    return lines;
  };

  const getLevelName = (level: number): string => {
    const levelNames = {
      1: 'Grundlagen',
      2: 'Aufbau',
      3: 'Fortgeschritten',
      4: 'Experte',
      5: 'Meister'
    };
    return levelNames[level as keyof typeof levelNames] || `Level ${level}`;
  };

  const getCategoryName = (category: string): string => {
    const categoryNames = {
      foundation: 'Grundlagen',
      frontend: 'Frontend',
      backend: 'Backend',
      fullstack: 'Full-Stack',
      tools: 'Tools & Software',
      soft: 'Soft Skills',
      advanced: 'Fortgeschritten'
    };
    return categoryNames[category as keyof typeof categoryNames] || category;
  };

  const getPrerequisiteSkills = (skill: SkillNode): SkillNode[] => {
    if (!skill.prerequisites) return [];
    return skillTree.filter(s => skill.prerequisites?.includes(s.id));
  };

  const SkillCard: React.FC<{ skill: SkillNode; size?: 'small' | 'medium' | 'large' }> = ({ 
    skill, 
    size = 'medium' 
  }) => (
    <motion.div
      className={`${styles.skillCard} ${styles[size]} ${styles[skill.category]}`}
      data-skill-id={skill.id}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelectedSkill(skill)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.skillIcon}>
        <i className={skill.icon}></i>
      </div>
      <div className={styles.skillInfo}>
        <h4>{skill.name}</h4>
        <div className={styles.skillLevel}>
          {Array.from({ length: 5 }, (_, i) => (
            <span 
              key={i} 
              className={`${styles.levelDot} ${i < skill.level ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderLevelsView = () => (
    <div className={styles.levelsView}>
      {Object.entries(skillsByLevel)
        .sort(([a], [b]) => parseInt(a) - parseInt(b))
        .map(([level, skills]) => (
          <motion.div 
            key={level} 
            className={styles.levelSection}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: parseInt(level) * 0.1 }}
          >
            <div className={styles.levelHeader}>
              <h3>Level {level}: {getLevelName(parseInt(level))}</h3>
              <span className={styles.skillCount}>{skills.length} Skills</span>
            </div>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
            {skills.some(skill => skill.prerequisites && skill.prerequisites.length > 0) && (
              <div className={styles.prerequisites}>
                <span>Benötigt Kenntnisse aus vorherigen Leveln</span>
              </div>
            )}
          </motion.div>
        ))}
    </div>
  );

  const renderCategoriesView = () => (
    <div className={styles.categoriesView}>
      {Object.entries(skillsByCategory).map(([category, skills]) => (
        <motion.div 
          key={category} 
          className={styles.categorySection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.categoryHeader}>
            <h3>{getCategoryName(category)}</h3>
            <span className={styles.skillCount}>{skills.length} Skills</span>
          </div>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderTreeView = () => (
    <div className={styles.treeView} ref={treeRef}>
      <div className={styles.treeContainer}>
        {/* SVG for connection lines */}
        <svg className={styles.connectionSvg}>
          {getConnectionLines()}
        </svg>
        
        {/* Tree structure by levels */}
        {Object.entries(skillsByLevel)
          .sort(([a], [b]) => parseInt(a) - parseInt(b))
          .map(([level, skills]) => (
            <motion.div 
              key={level} 
              className={`${styles.treeLevel} ${styles[`level${level}`]}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: parseInt(level) * 0.2 }}
            >
              <div className={styles.levelLabel}>
                <span>Level {level}</span>
                <span className={styles.levelName}>{getLevelName(parseInt(level))}</span>
              </div>
              <div className={styles.levelSkills}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: parseInt(level) * 0.2 + index * 0.1 
                    }}
                  >
                    <SkillCard skill={skill} size="medium" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );

  return (
    <section className={styles.skillTree}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Skill Tree</h2>
          <p>Entdecken Sie die Abhängigkeiten und den Aufbau meiner technischen Fähigkeiten</p>
          
          <div className={styles.viewModeToggle}>
            <button 
              className={currentViewMode === 'mindmap' ? styles.active : ''}
              onClick={() => setCurrentViewMode('mindmap')}
            >
              <i className="fas fa-project-diagram"></i>
              Mind Map
            </button>
            <button 
              className={currentViewMode === 'tree' ? styles.active : ''}
              onClick={() => setCurrentViewMode('tree')}
            >
              <i className="fas fa-sitemap"></i>
              Baum-Ansicht
            </button>
            <button 
              className={currentViewMode === 'levels' ? styles.active : ''}
              onClick={() => setCurrentViewMode('levels')}
            >
              <i className="fas fa-layer-group"></i>
              Nach Level
            </button>
            <button 
              className={currentViewMode === 'categories' ? styles.active : ''}
              onClick={() => setCurrentViewMode('categories')}
            >
              <i className="fas fa-th-large"></i>
              Nach Kategorie
            </button>
          </div>
        </div>

        <div className={styles.content}>
          {currentViewMode === 'mindmap' && <SkillMindMap />}
          {currentViewMode === 'tree' && renderTreeView()}
          {currentViewMode === 'levels' && renderLevelsView()}
          {currentViewMode === 'categories' && renderCategoriesView()}
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div 
              className={styles.skillModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div 
                className={styles.modalContent}
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className={styles.closeButton}
                  onClick={() => setSelectedSkill(null)}
                >
                  <i className="fas fa-times"></i>
                </button>
                
                <div className={styles.modalHeader}>
                  <div className={styles.skillIcon}>
                    <i className={selectedSkill.icon}></i>
                  </div>
                  <div>
                    <h3>{selectedSkill.name}</h3>
                    <span className={styles.category}>
                      {getCategoryName(selectedSkill.category)}
                    </span>
                  </div>
                </div>

                <div className={styles.modalBody}>
                  <div className={styles.skillLevel}>
                    <span>Expertise Level:</span>
                    <div className={styles.levelIndicator}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <span 
                          key={i} 
                          className={`${styles.levelDot} ${i < selectedSkill.level ? styles.active : ''}`}
                        />
                      ))}
                      <span className={styles.levelText}>
                        {getLevelName(selectedSkill.level)}
                      </span>
                    </div>
                  </div>

                  {selectedSkill.description && (
                    <div className={styles.description}>
                      <h4>Beschreibung</h4>
                      <p>{selectedSkill.description}</p>
                    </div>
                  )}

                  {selectedSkill.prerequisites && selectedSkill.prerequisites.length > 0 && (
                    <div className={styles.prerequisites}>
                      <h4>Voraussetzungen</h4>
                      <div className={styles.prerequisiteSkills}>
                        {getPrerequisiteSkills(selectedSkill).map((prereq) => (
                          <div key={prereq.id} className={styles.prerequisiteSkill}>
                            <i className={prereq.icon}></i>
                            <span>{prereq.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillTree;