import React from 'react';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/pages/LegalPages.module.scss';

const ImpressumPage: React.FC = () => {
  return (
    <Layout
      title="Impressum | Alexander Koch - Full-Stack Entwickler"
      description="Impressum der Website von Alexander Koch - Full-Stack Entwickler und Digital Solutions Expert aus Deutschland."
      canonical="https://alexanderkoch.dev/impressum"
    >
      <section className={styles.legalPage}>
        <div className={styles.container}>
          <div className={styles.contentCard}>
            <div className={styles.pageHeader}>
              <h1 className={styles.pageTitle}>Impressum</h1>
              <p className={styles.pageSubtitle}>
                Rechtliche Informationen gemäß den gesetzlichen Bestimmungen
              </p>
            </div>
            
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Angaben gemäß § 5 TMG</h2>
              
              <div className={styles.contentBox}>
                <h3 className={styles.subsectionTitle}>Verantwortlich für den Inhalt:</h3>
                <p className={styles.textContent}>
                  <strong>Alexander Koch</strong><br />
                  Full-Stack Entwickler & Digital Solutions Expert<br />
                  Vreden, Deutschland<br />
                  <br />
                  <strong>USt-ID-Nr.: </strong>DE364969858<br />
                </p>
              </div>
              
              <div className={styles.contactInfo}>
                <h3>Kontakt</h3>
                <p>
                  <strong>E-Mail:</strong> alexanderkoch@uxnetwork.eu<br />
                  <strong>Telefon:</strong> +49 1575 3635132<br />
                  <strong>Website:</strong> <a href="https://alexanderkoch.dev" target="_blank" rel="noopener noreferrer">
                    https://alexanderkoch.dev
                  </a>
                </p>
              </div>
            </div>
              
            {/* Legal Sections */}
            {[
                {
                  title: "Haftung für Inhalte",
                  content: [
                    "Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
                    "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen."
                  ]
                },
                {
                  title: "Haftung für Links",
                  content: [
                    "Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
                    "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen."
                  ]
                },
                {
                  title: "Urheberrecht",
                  content: [
                    "Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
                    "Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen."
                  ]
                }
              ].map((section, index) => (
                <div key={index} className={styles.section}>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <div className={styles.contentBox}>
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className={styles.textContent}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
            ))}
            
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Verwendete externe Dienste</h2>
              <div className={styles.contentBox}>
                <p className={styles.textContent}>
                  Diese Website nutzt folgende externe Dienste:
                </p>
                <ul className={styles.listContent}>
                  <li>
                    <strong>Google Fonts:</strong> Zur einheitlichen Darstellung von Schriftarten
                  </li>
                  <li>
                    <strong>Font Awesome (CDN):</strong> Für Icons und grafische Elemente
                  </li>
                </ul>
              </div>
            </div>
            
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Social Media Profile</h2>
              <div className={styles.contentBox}>
                <p className={styles.textContent}>
                  Dieses Impressum gilt auch für folgende Social-Media-Profile:
                </p>
                <ul className={styles.listContent}>
                  <li>
                    LinkedIn: <a href="https://www.linkedin.com/in/alexander-koch-78b9a5365/" target="_blank" rel="noopener noreferrer">
                      Alexander Koch
                    </a>
                  </li>
                  <li>
                    GitHub: <a href="https://github.com/AlexanderKoch-UX" target="_blank" rel="noopener noreferrer">
                      Alexander Koch
                    </a>
                  </li>
                  <li>
                    Xing: <a href="https://www.xing.com/profile/Alexander_Koch034926" target="_blank" rel="noopener noreferrer">
                      Alexander Koch
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className={styles.updateInfo}>
              <p>
                <strong>Letzte Aktualisierung: </strong>Januar 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImpressumPage;