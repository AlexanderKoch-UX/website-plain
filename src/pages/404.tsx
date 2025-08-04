import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/Error404.module.scss';

const Error404Page: React.FC = () => {
  return (
    <Layout
      title="404 - Seite nicht gefunden | Alexander Koch"
      description="Die angeforderte Seite konnte nicht gefunden werden. Kehren Sie zu meinem Portfolio zurück oder nutzen Sie die Navigation."
      canonical="https://alexanderkoch.dev/404/"
    >
      <section className={styles.errorSection}>
        <div className="container perfect-center">
          <div className={styles.errorContent}>
            {/* 404 Animation */}
            <div className={styles.errorAnimation}>
              <div className={styles.errorCode}>
                <span className={styles.digit}>4</span>
                <span className={styles.digit}>0</span>
                <span className={styles.digit}>4</span>
              </div>
              
              {/* Floating Elements */}
              <div className={styles.errorIllustration}>
                <div className={styles.floatingElements}>
                  <div className={styles.element}></div>
                  <div className={styles.element}></div>
                  <div className={styles.element}></div>
                  <div className={styles.element}></div>
                  <div className={styles.element}></div>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className={styles.errorMessage}>
              <h1>Oops! Seite nicht gefunden</h1>
              <p>
                Die Seite, nach der Sie suchen, existiert nicht oder wurde verschoben. 
                Möglicherweise haben Sie sich vertippt oder der Link ist veraltet.
              </p>
            </div>

            {/* Action Buttons */}
            <div className={styles.errorActions}>
              <Link href="/" className="btn btn-primary btn-lg">
                <i className="fas fa-home"></i>
                Zurück zur Startseite
              </Link>
              
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.history.back();
                  }
                }} 
                className="btn btn-secondary btn-lg"
                style={{ border: 'none' }}
              >
                <i className="fas fa-arrow-left"></i>
                Zurück
              </button>
            </div>

            {/* Helpful Links */}
            <div className={styles.helpfulLinks}>
              <h3>Vielleicht interessiert Sie:</h3>
              
              <div className={styles.linkGrid}>
                {[
                  { href: '/ueber-mich', icon: 'fas fa-user', text: 'Über mich' },
                  { href: '/leistungen', icon: 'fas fa-briefcase', text: 'Leistungen' },
                  { href: '/#projects', icon: 'fas fa-code', text: 'Projekte' },
                  { href: '/#skills', icon: 'fas fa-tools', text: 'Fähigkeiten' },
                  { href: '/#contact', icon: 'fas fa-envelope', text: 'Kontakt' },
                  { href: '/#packages', icon: 'fas fa-box', text: 'Pakete' }
                ].map((link, index) => (
                  <Link key={index} href={link.href} className={styles.helpLink}>
                    <i className={link.icon}></i>
                    <span>{link.text}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Search Suggestion */}
            <div className={styles.searchSuggestion}>
              <p>
                <strong>Tipp:</strong> Verwenden Sie die Navigation oben, um zu den gewünschten Inhalten zu gelangen, 
                oder <Link href="/#contact">kontaktieren Sie mich</Link> direkt, wenn Sie Hilfe benötigen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Error404Page;