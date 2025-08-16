import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.scss';

interface CookieBannerProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onAccept?.();
    }, 300);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onDecline?.();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.cookieBanner} ${isAnimating ? styles.visible : ''}`}>
      <div className={styles.cookieContent}>
        <div className={styles.cookieIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cookieText}>
          <h3>Cookie-Einstellungen</h3>
          <p>
            Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. 
            Durch die weitere Nutzung stimmen Sie der Verwendung von Cookies zu.
          </p>
        </div>
        <div className={styles.cookieActions}>
          <button 
            className={`${styles.cookieButton} ${styles.decline}`}
            onClick={handleDecline}
            aria-label="Cookies ablehnen"
          >
            Ablehnen
          </button>
          <button 
            className={`${styles.cookieButton} ${styles.accept}`}
            onClick={handleAccept}
            aria-label="Cookies akzeptieren"
          >
            Akzeptieren
          </button>
        </div>
      </div>
      <div className={styles.cookieGlow}></div>
    </div>
  );
};

export default CookieBanner;