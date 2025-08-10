'use client';

import React from 'react';
import styles from './SectionBackground.module.scss';

interface SectionBackgroundProps {
  variant?: 'default' | 'blue' | 'purple' | 'gradient' | 'light' | 'dark';
  pattern?: 'dots' | 'grid' | 'waves' | 'none';
  glow?: boolean;
  className?: string;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({
  variant = 'default',
  pattern = 'dots',
  glow = true,
  className = '',
}) => {
  return (
    <div 
      className={`
        ${styles.background} 
        ${styles[`variant-${variant}`]} 
        ${styles[`pattern-${pattern}`]}
        ${glow ? styles.glow : ''}
        ${className}
      `}
    >
      <div className={styles.overlay}></div>
      {pattern !== 'none' && <div className={styles.pattern}></div>}
      {glow && <div className={styles.glowEffect}></div>}
    </div>
  );
};

export default SectionBackground;