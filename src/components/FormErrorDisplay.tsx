import React from 'react';
import styles from '@/styles/FormErrorDisplay.module.scss';

interface FormErrorDisplayProps {
  error: string | string[] | null;
  className?: string;
}

const FormErrorDisplay: React.FC<FormErrorDisplayProps> = ({ 
  error, 
  className = '' 
}) => {
  if (!error) return null;

  const errors = Array.isArray(error) ? error : [error];

  return (
    <div className={`${styles.errorContainer} ${className}`} role="alert">
      {errors.map((err, index) => (
        <div key={index} className={styles.errorMessage}>
          <span className={styles.errorIcon}>⚠</span>
          <span className={styles.errorText}>{err}</span>
        </div>
      ))}
    </div>
  );
};

export default FormErrorDisplay;