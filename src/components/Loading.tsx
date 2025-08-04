import React from 'react';
import styles from '@/styles/Loading.module.scss';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ 
  message = 'Wird geladen...', 
  size = 'medium',
  fullScreen = false 
}) => {
  const containerClass = fullScreen 
    ? `${styles.loadingContainer} ${styles.fullScreen}` 
    : styles.loadingContainer;

  return (
    <div className={containerClass}>
      <div className={`${styles.loader} ${styles[size]}`}>
        <div className={styles.spinner}>
          <div className={styles.dot1}></div>
          <div className={styles.dot2}></div>
          <div className={styles.dot3}></div>
        </div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default Loading;