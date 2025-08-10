'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './ModernCard.module.scss';

interface ModernCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'gradient' | 'dark';
  interactive?: boolean;
  glowEffect?: boolean;
  borderEffect?: boolean;
  className?: string;
}

const ModernCard: React.FC<ModernCardProps> = ({
  children,
  variant = 'default',
  interactive = true,
  glowEffect = true,
  borderEffect = true,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for interactive effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  // Calculate rotation and glow position based on mouse position
  useEffect(() => {
    if (!interactive || !isHovered || !cardRef.current) return;
    
    const card = cardRef.current;
    const { width, height } = card.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;
    
    const rotateX = (mousePosition.y - centerY) / 25;
    const rotateY = (centerX - mousePosition.x) / 25;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Update glow position
    if (glowEffect) {
      const glowX = (mousePosition.x / width) * 100;
      const glowY = (mousePosition.y / height) * 100;
      
      card.style.setProperty('--glow-x', `${glowX}%`);
      card.style.setProperty('--glow-y', `${glowY}%`);
    }
    
    return () => {
      card.style.transform = '';
    };
  }, [mousePosition, isHovered, interactive, glowEffect]);

  return (
    <div
      ref={cardRef}
      className={`
        ${styles.card} 
        ${styles[variant]} 
        ${interactive ? styles.interactive : ''} 
        ${glowEffect ? styles.glow : ''} 
        ${borderEffect ? styles.border : ''} 
        ${isHovered ? styles.hovered : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {glowEffect && <div className={styles.glowEffect}></div>}
      {borderEffect && <div className={styles.borderEffect}></div>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ModernCard;