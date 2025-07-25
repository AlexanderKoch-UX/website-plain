import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/Error404.module.scss';

const Error404Page: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Layout
      title="404 - Seite nicht gefunden | Alexander Koch"
      description="Die angeforderte Seite konnte nicht gefunden werden. Kehren Sie zu meinem Portfolio zurück oder nutzen Sie die Navigation."
      canonical="https://alexanderkoch.dev/404/"
    >
      <section className={styles.errorSection}>
        <div className="container">
          <div className={styles.errorContent}>
            <div className={styles.errorAnimation}>
              <div className={styles.errorCode}>
                <span className={styles.digit}>4</span>
                <span className={styles.digit}>0</span>
                <span className={styles.digit}>4</span>
              </div>
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

            <div className={styles.errorMessage}>
              <h1>Oops! Seite nicht gefunden</h1>
              <p>
                Die Seite, nach der Sie suchen, existiert nicht oder wurde verschoben. 
                Möglicherweise haben Sie sich vertippt oder der Link ist veraltet.
              </p>
            </div>

            <div className={styles.errorActions}>
              <Link href="/" className="btn btn-primary">
                <i className="fas fa-home"></i>
                Zurück zur Startseite
              </Link>
              
              <button 
                onClick={() => window.history.back()} 
                className="btn btn-outline"
              >
                <i className="fas fa-arrow-left"></i>
                Zurück
              </button>
            </div>

            <div className={styles.helpfulLinks}>
              <h3>Vielleicht interessiert Sie:</h3>
              <div className={styles.linkGrid}>
                <Link href="/#about" className={styles.helpLink}>
                  <i className="fas fa-user"></i>
                  <span>Über mich</span>
                </Link>
                
                <Link href="/#projects" className={styles.helpLink}>
                  <i className="fas fa-code"></i>
                  <span>Projekte</span>
                </Link>
                
                <Link href="/#skills" className={styles.helpLink}>
                  <i className="fas fa-tools"></i>
                  <span>Fähigkeiten</span>
                </Link>
                
                <Link href="/#contact" className={styles.helpLink}>
                  <i className="fas fa-envelope"></i>
                  <span>Kontakt</span>
                </Link>
                
                <Link href="/visitenkarte" className={styles.helpLink}>
                  <i className="fas fa-address-card"></i>
                  <span>Visitenkarte</span>
                </Link>
                
                <Link href="/#packages" className={styles.helpLink}>
                  <i className="fas fa-box"></i>
                  <span>Pakete</span>
                </Link>
              </div>
            </div>

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