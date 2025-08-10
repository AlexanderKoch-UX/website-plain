import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} animate-fade-in`}>

      <div className="container">
        {/* Main footer content */}
        <div className={`${styles.footerMain} stagger-children`}>
          {/* Brand section */}
          <div className={`${styles.footerBrand} fade-in-up`}>
            <h3 className={`${styles.brandName} animate-text-glow`}>Alexander Koch</h3>
            <p className={styles.brandDescription}>
              Web Developer & UX Designer
            </p>
          </div>

          {/* Quick links section */}
          <div className={`${styles.footerSection} fade-in-up`}>
            <h4 className={styles.sectionTitle}>Navigation</h4>
            <div className={styles.quickLinks}>
              <a href="#home" className={`${styles.quickLink} hover-lift`}>Home</a>
              <a href="#services" className={`${styles.quickLink} hover-lift`}>Leistungen</a>
              <a href="#projects" className={`${styles.quickLink} hover-lift`}>Projekte</a>
              <a href="#contact" className={`${styles.quickLink} hover-lift`}>Kontakt</a>
            </div>
          </div>
        </div>

        {/* Decorative separator */}
        <div className={`${styles.footerDivider} animate-fade-in`}>
          <div className={`${styles.dividerLine} animate-shimmer`}></div>
          <div className={`${styles.dividerDot} animate-pulse`}></div>
          <div className={`${styles.dividerLine} animate-shimmer`}></div>
        </div>

        {/* Bottom section */}
        <div className={`${styles.footerBottom} fade-in-up`}>
          <div className={styles.copyrightInfo}>
            <p>&copy; {currentYear} Alexander Koch. Alle Rechte vorbehalten.</p>
            <p className={styles.subCopyright}>
              Erstellt mit <span className={`${styles.heart} animate-pulse`}>♥</span> in Deutschland
            </p>
          </div>
          
          <div className={styles.legalLinks}>
            <Link href="/impressum" className={`${styles.legalLink} hover-lift`}>
              <i className="fas fa-info-circle"></i>
              Impressum
            </Link>
            <Link href="/datenschutz" className={`${styles.legalLink} hover-lift`}>
              <i className="fas fa-shield-alt"></i>
              Datenschutz
            </Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className={styles.backgroundDecoration}>
        <div className={`${styles.decorationCircle} animate-float`}></div>
        <div className={`${styles.decorationCircle} animate-float-slow`}></div>
        <div className={`${styles.decorationCircle} animate-float-fast`}></div>
      </div>
    </footer>
  );
};

export default Footer;