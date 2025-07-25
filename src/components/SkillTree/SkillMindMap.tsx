'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { skillMindMapData, getSkillsByDirection, getSkillsByDistanceAndDirection } from '@/data/skillMindMap';
import { personalInfo } from '@/data/personal';
import { SkillNode } from '@/types';
import styles from './SkillMindMap.module.scss';

interface NodePosition {
  id: string;
  x: number;
  y: number;
  level: number;
  angle: number;
}

interface Connection {
  from: string;
  to: string;
  fromPos: NodePosition;
  toPos: NodePosition;
}

const SkillMindMap: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(null);
  const [nodePositions, setNodePositions] = useState<Map<string, NodePosition>>(new Map());
  const [connections, setConnections] = useState<Connection[]>([]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  const skillsByDirection = React.useMemo(getSkillsByDirection, []);
  const skillsByDistanceAndDirection = React.useMemo(getSkillsByDistanceAndDirection, []);

  // Debounced hover handler to prevent excessive re-renders
  const setHoveredSkillDebounced = React.useCallback((skillId: string | null) => {
    setHoveredSkill(skillId);
  }, []);

  // Calculate positions for all nodes based on direction and distance
  useEffect(() => {
    if (!containerRef.current) return;

    const calculatePositions = () => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;

      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;
      
      const positions = new Map<string, NodePosition>();
      
      // Distance multipliers for each ring (adjusted for fullscreen)
      const distanceMultiplier = Math.min(containerRect.width, containerRect.height) / 10;

      // Add center node (Alexander Koch)
      positions.set('center', {
        id: 'center',
        x: centerX,
        y: centerY,
        level: 0,
        angle: 0
      });

      // Position skills by direction and distance
      Object.entries(skillsByDistanceAndDirection).forEach(([direction, distanceGroups]) => {
        Object.entries(distanceGroups).forEach(([distanceStr, skills]) => {
          const distance = parseInt(distanceStr);
          const radius = distance * distanceMultiplier;
          
          // Define base angles for each direction
          const baseAngles = {
            top: -Math.PI / 2,      // 270° (12 o'clock)
            right: 0,               // 0° (3 o'clock)
            bottom: Math.PI / 2,    // 90° (6 o'clock)
            left: Math.PI           // 180° (9 o'clock)
          };
          
          const baseAngle = baseAngles[direction as keyof typeof baseAngles];
          
          // Spread skills within a sector (60° spread for each direction)
          const sectorSpread = Math.PI / 3; // 60 degrees
          const angleStep = skills.length > 1 ? sectorSpread / (skills.length - 1) : 0;
          const startAngle = baseAngle - sectorSpread / 2;
          
          skills.forEach((skill, index) => {
            let angle: number;
            
            if (skills.length === 1) {
              angle = baseAngle;
            } else {
              angle = startAngle + (index * angleStep);
            }
            
            // Use skill.id as seed for consistent positioning
            const seed = skill.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const randomOffset = ((seed % 100) / 100 - 0.5) * 0.1;
            angle += randomOffset;
            
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            positions.set(skill.id, {
              id: skill.id,
              x,
              y,
              level: skill.level || 1,
              angle
            });
          });
        });
      });

      setNodePositions(positions);

      // Calculate connections
      const newConnections: Connection[] = [];
      
      // Connect center to distance 1 skills (closest to center)
      skillMindMapData.filter(skill => skill.distance === 1).forEach(skill => {
        const centerPos = positions.get('center');
        const skillPos = positions.get(skill.id);
        if (centerPos && skillPos) {
          newConnections.push({
            from: 'center',
            to: skill.id,
            fromPos: centerPos,
            toPos: skillPos
          });
        }
      });

      // Connect skills within the same direction based on distance (parent-child relationships)
      Object.entries(skillsByDistanceAndDirection).forEach(([direction, distanceGroups]) => {
        const distances = Object.keys(distanceGroups).map(Number).sort((a, b) => a - b);
        
        for (let i = 0; i < distances.length - 1; i++) {
          const currentDistance = distances[i];
          const nextDistance = distances[i + 1];
          
          const currentSkills = distanceGroups[currentDistance];
          const nextSkills = distanceGroups[nextDistance];
          
          // Connect each skill in the next distance to the closest skill in current distance
          nextSkills.forEach(nextSkill => {
            // Find the closest skill in the current distance
            const nextSkillPos = positions.get(nextSkill.id);
            if (!nextSkillPos) return;
            
            let closestSkill = currentSkills[0];
            let minDistance = Infinity;
            
            currentSkills.forEach(currentSkill => {
              const currentSkillPos = positions.get(currentSkill.id);
              if (currentSkillPos) {
                const dist = Math.sqrt(
                  Math.pow(nextSkillPos.x - currentSkillPos.x, 2) + 
                  Math.pow(nextSkillPos.y - currentSkillPos.y, 2)
                );
                if (dist < minDistance) {
                  minDistance = dist;
                  closestSkill = currentSkill;
                }
              }
            });
            
            const closestSkillPos = positions.get(closestSkill.id);
            if (closestSkillPos) {
              newConnections.push({
                from: closestSkill.id,
                to: nextSkill.id,
                fromPos: closestSkillPos,
                toPos: nextSkillPos
              });
            }
          });
        }
      });

      setConnections(newConnections);
      setIsInitialized(true);
    };

    // Initial calculation
    setTimeout(calculatePositions, 100);

    // Recalculate on window resize with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculatePositions, 300);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [skillsByDistanceAndDirection]); // Add dependencies to prevent stale closures

  const getSkillByMindMapCategory = (category: string) => {
    const colors = {
      softskills: '#FFD700',   // Gold - Soft Skills (Top)
      programming: '#FF6B6B',  // Red - Programming (Left)
      teamwork: '#4ECDC4',     // Teal - Teamwork (Right)
      business: '#45B7D1'      // Blue - Business (Bottom)
    };
    return colors[category as keyof typeof colors] || '#6C5CE7';
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

  const CenterNode: React.FC = () => (
    <motion.div
      ref={centerRef}
      className={styles.centerNode}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className={styles.profileImage}>
        <Image
          src={personalInfo.image}
          alt="Alexander Koch"
          width={120}
          height={120}
          priority
          quality={90}
          style={{
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div className={styles.centerInfo}>
        <h3>{personalInfo.name}</h3>
        <p>{personalInfo.title}</p>
      </div>
      <div className={styles.centerGlow}></div>
    </motion.div>
  );

  const SkillNode: React.FC<{ skill: SkillNode; position: NodePosition; isInitialized: boolean }> = React.memo(function SkillNode({ skill, position, isInitialized }) {
    const handleClick = React.useCallback(() => setSelectedSkill(skill), [skill]);
    const handleMouseEnter = React.useCallback(() => setHoveredSkillDebounced(skill.id), [skill.id, setHoveredSkillDebounced]);
    const handleMouseLeave = React.useCallback(() => setHoveredSkillDebounced(null), [setHoveredSkillDebounced]);

    // Memoize transition values to prevent recalculation
    const animationDelay = React.useMemo(() => 
      skill.level * 0.2 + (skill.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 100) / 1000,
      [skill.id, skill.level]
    );

    return (
      <motion.div
        className={`${styles.skillNode} ${styles[skill.category]}`}
        style={{
          position: 'absolute',
          left: position.x - 40, // Center the node (assuming 80px width)
          top: position.y - 40,  // Center the node (assuming 80px height)
          '--skill-color': getSkillByMindMapCategory(skill.mindMapCategory || 'programming')
        } as React.CSSProperties}
        initial={isInitialized ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={isInitialized ? { duration: 0 } : { 
          duration: 0.5, 
          delay: animationDelay,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.2, 
          zIndex: 10,
          transition: { duration: 0.2 }
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      <div className={styles.skillIcon}>
        <i className={skill.icon}></i>
      </div>
      <div className={styles.skillLabel}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillLevel}>Level {skill.level}</span>
      </div>
      <div className={styles.skillGlow}></div>
      
      {/* Level indicator dots */}
      <div className={styles.levelDots}>
        {Array.from({ length: 5 }, (_, i) => (
          <span 
            key={i} 
            className={`${styles.levelDot} ${i < skill.level ? styles.active : ''}`}
          />
        ))}
      </div>
    </motion.div>
    );
  }, (prevProps, nextProps) => {
    // Custom comparison to prevent unnecessary re-renders
    return (
      prevProps.skill.id === nextProps.skill.id &&
      prevProps.position.x === nextProps.position.x &&
      prevProps.position.y === nextProps.position.y &&
      prevProps.isInitialized === nextProps.isInitialized
    );
  });

  const ConnectionLine: React.FC<{ connection: Connection; hoveredSkill: string | null; isInitialized: boolean }> = React.memo(function ConnectionLine({ connection, hoveredSkill, isInitialized }) {
    const isHighlighted = hoveredSkill === connection.from || hoveredSkill === connection.to;
    
    return (
      <motion.line
        x1={connection.fromPos.x}
        y1={connection.fromPos.y}
        x2={connection.toPos.x}
        y2={connection.toPos.y}
        stroke={isHighlighted ? '#FFD700' : 'rgba(255, 255, 255, 0.3)'}
        strokeWidth={isHighlighted ? 3 : 1}
        strokeDasharray="5,5"
        initial={isInitialized ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: isHighlighted ? 0.8 : 0.5,
          strokeWidth: isHighlighted ? 3 : 1
        }}
        transition={isInitialized ? {
          opacity: { duration: 0.2 },
          strokeWidth: { duration: 0.2 }
        } : { 
          pathLength: { duration: 1, delay: connection.fromPos.level * 0.2 },
          opacity: { duration: 0.2 },
          strokeWidth: { duration: 0.2 }
        }}
        className={styles.connectionLine}
      />
    );
  }, (prevProps, nextProps) => {
    // Custom comparison to prevent unnecessary re-renders
    const prevHighlighted = prevProps.hoveredSkill === prevProps.connection.from || prevProps.hoveredSkill === prevProps.connection.to;
    const nextHighlighted = nextProps.hoveredSkill === nextProps.connection.from || nextProps.hoveredSkill === nextProps.connection.to;
    
    return (
      prevProps.connection.from === nextProps.connection.from &&
      prevProps.connection.to === nextProps.connection.to &&
      prevHighlighted === nextHighlighted &&
      prevProps.isInitialized === nextProps.isInitialized
    );
  });

  return (
    <section className={styles.skillMindMap}>
      <div className={styles.container}>
        {/* Close button for fullscreen mode */}
        <button 
          className={styles.closeButton}
          onClick={() => window.history.back()}
          aria-label="Close Skill Mind Map"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Skill Mind Map</h2>
            <p>Eine interaktive Visualisierung meiner Fähigkeiten und deren Verbindungen</p>
          </motion.div>
        </div>

        <div className={styles.mindMapContainer} ref={containerRef}>
          {/* SVG for connection lines */}
          <svg className={styles.connectionsSvg} width="100%" height="100%">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {connections.map((connection, index) => (
              <ConnectionLine 
                key={`${connection.from}-${connection.to}-${index}`} 
                connection={connection} 
                hoveredSkill={hoveredSkill}
                isInitialized={isInitialized}
              />
            ))}
          </svg>

          {/* Center node - Alexander Koch */}
          <div 
            className={styles.centerContainer}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <CenterNode />
          </div>

          {/* Skill nodes */}
          {skillMindMapData.map(skill => {
            const position = nodePositions.get(skill.id);
            if (!position) return null;
            
            return (
              <SkillNode 
                key={skill.id} 
                skill={skill} 
                position={position}
                isInitialized={isInitialized}
              />
            );
          })}

          {/* Distance rings indicator */}
          {containerRef.current && [1, 2, 3, 4, 5].map(distance => {
            const containerRect = containerRef.current?.getBoundingClientRect();
            const distanceMultiplier = containerRect ? Math.min(containerRect.width, containerRect.height) / 10 : 120;
            
            return (
              <div
                key={distance}
                className={styles.levelRing}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: (distance * distanceMultiplier) * 2,
                  height: (distance * distanceMultiplier) * 2,
                  border: `1px dashed rgba(255, 255, 255, 0.1)`,
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }}
              />
            );
          })}
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          <h4>Kategorien</h4>
          <div className={styles.legendItem}>
            <div 
              className={styles.legendColor}
              style={{ backgroundColor: getSkillByMindMapCategory('softskills') }}
            ></div>
            <span>↑ Soft Skills</span>
          </div>
          <div className={styles.legendItem}>
            <div 
              className={styles.legendColor}
              style={{ backgroundColor: getSkillByMindMapCategory('programming') }}
            ></div>
            <span>← Programmierung</span>
          </div>
          <div className={styles.legendItem}>
            <div 
              className={styles.legendColor}
              style={{ backgroundColor: getSkillByMindMapCategory('teamwork') }}
            ></div>
            <span>→ Teamarbeit</span>
          </div>
          <div className={styles.legendItem}>
            <div 
              className={styles.legendColor}
              style={{ backgroundColor: getSkillByMindMapCategory('business') }}
            ></div>
            <span>↓ Business</span>
          </div>
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
                  className={styles.modalCloseButton}
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
                      {selectedSkill.category}
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

                  <div className={styles.categoryInfo}>
                    <h4>Kategorie</h4>
                    <div className={styles.categoryTag}>
                      <div 
                        className={styles.categoryColor}
                        style={{ backgroundColor: getSkillByMindMapCategory(selectedSkill.mindMapCategory || 'programming') }}
                      ></div>
                      <span>
                        {selectedSkill.mindMapCategory === 'softskills' && 'Soft Skills'}
                        {selectedSkill.mindMapCategory === 'programming' && 'Programmierung'}
                        {selectedSkill.mindMapCategory === 'teamwork' && 'Teamarbeit'}
                        {selectedSkill.mindMapCategory === 'business' && 'Business'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillMindMap;