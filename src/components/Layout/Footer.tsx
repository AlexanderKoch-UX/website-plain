import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>

      <div className="container">
        {/* Main footer content */}
        <div className={styles.footerMain}>
          {/* Brand section */}
          <div className={styles.footerBrand}>
            <h3 className={styles.brandName}>Alexander Koch</h3>
            <p className={styles.brandDescription}>
              Web Developer & UX Designer
            </p>
          </div>

          {/* Quick links section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Navigation</h4>
            <div className={styles.quickLinks}>
              <a href="#home" className={styles.quickLink}>Home</a>
              <a href="#about" className={styles.quickLink}>Über mich</a>
              <a href="#services" className={styles.quickLink}>Leistungen</a>
              <a href="#projects" className={styles.quickLink}>Projekte</a>
              <a href="#contact" className={styles.quickLink}>Kontakt</a>
            </div>
          </div>
        </div>

        {/* Decorative separator */}
        <div className={styles.footerDivider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerDot}></div>
          <div className={styles.dividerLine}></div>
        </div>

        {/* Bottom section */}
        <div className={styles.footerBottom}>
          <div className={styles.copyrightInfo}>
            <p>&copy; {currentYear} Alexander Koch. Alle Rechte vorbehalten.</p>
            <p className={styles.subCopyright}>
              Erstellt mit <span className={styles.heart}>♥</span> in Deutschland
            </p>
          </div>
          
          <div className={styles.legalLinks}>
            <Link href="/impressum" className={styles.legalLink}>
              <i className="fas fa-info-circle"></i>
              Impressum
            </Link>
            <Link href="/datenschutz" className={styles.legalLink}>
              <i className="fas fa-shield-alt"></i>
              Datenschutz
            </Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.decorationCircle}></div>
        <div className={styles.decorationCircle}></div>
        <div className={styles.decorationCircle}></div>
      </div>
    </footer>
  );
};

export default Footer;