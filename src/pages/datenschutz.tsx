import React from 'react';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/pages/LegalPages.module.scss';

const DatenschutzPage: React.FC = () => {
  return (
    <Layout
      title="Datenschutzerklärung | Alexander Koch - Full-Stack Entwickler"
      description="Datenschutzerklärung der Website von Alexander Koch - Full-Stack Entwickler und Digital Solutions Expert aus Deutschland."
      canonical="https://alexanderkoch.dev/datenschutz"
    >
      <section className={styles.legalPage}>
        <div className={styles.container}>
          <div className={styles.contentCard}>
            <div className={styles.pageHeader}>
              <h1 className={styles.pageTitle}>Datenschutzerklärung</h1>
              <p className={styles.pageSubtitle}>
                Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO
              </p>
            </div>
            
            {/* Privacy Overview Section */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Datenschutz auf einen Blick</h2>
              
              <div className={styles.contentBox}>
                <h3 className={styles.subsectionTitle}>Allgemeine Hinweise</h3>
                <p className={styles.textContent}>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
              
              <h3 className={styles.subsectionTitle}>Datenerfassung auf dieser Website</h3>
              
              {[
                {
                  question: "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
                  answer: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten finden Sie im Impressum dieser Website."
                },
                {
                  question: "Wie erfasse ich Ihre Daten?",
                  answer: "Ihre Daten werden automatisch beim Besuch der Website durch meine IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten."
                },
                {
                  question: "Wofür nutze ich Ihre Daten?",
                  answer: "Die Daten werden erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten."
                },
                {
                  question: "Welche Rechte haben Sie bezüglich Ihrer Daten?",
                  answer: "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an mich wenden."
                }
              ].map((item, index) => (
                <div key={index} className={styles.highlightBox}>
                  <h4 className={styles.questionTitle}>
                    {item.question}
                  </h4>
                  <p className={styles.textContent}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
              
            {/* Main Privacy Sections */}
            {[
              {
                title: "2. Hosting",
                subsections: [
                  {
                    subtitle: "Externes Hosting",
                    content: [
                      "Diese Website wird bei einem externen Dienstleister gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Meta- und Kommunikationsdaten, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.",
                      "Der Einsatz des Hosters erfolgt im Interesse einer sicheren, schnellen und effizienten Bereitstellung meines Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO)."
                    ]
                  }
                ]
              },
              {
                title: "3. Allgemeine Hinweise und Pflichtinformationen",
                subsections: [
                  {
                    subtitle: "Datenschutz",
                    content: ["Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst. Ich behandle Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung."]
                  },
                  {
                    subtitle: "Speicherdauer",
                    content: ["Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei mir, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen, werden Ihre Daten gelöscht, sofern ich keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten habe."]
                  }
                ]
              },
              {
                title: "4. Datenerfassung auf dieser Website",
                subsections: [
                  {
                    subtitle: "Server-Log-Dateien",
                    content: [
                      "Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt.",
                      "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.",
                      "Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Ich habe ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung meiner Website."
                    ],
                    list: [
                      "Browsertyp und Browserversion",
                      "verwendetes Betriebssystem", 
                      "Referrer URL",
                      "Hostname des zugreifenden Rechners",
                      "Uhrzeit der Serveranfrage",
                      "IP-Adresse"
                    ]
                  }
                ]
              },
              {
                title: "5. Externe Dienste",
                subsections: [
                  {
                    subtitle: "Google Fonts",
                    content: [
                      "Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in den Browsercache, um Texte und Schriftarten korrekt anzuzeigen.",
                      "Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Ich habe ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf meiner Website."
                    ]
                  },
                  {
                    subtitle: "Font Awesome (CDN)",
                    content: [
                      "Diese Seite nutzt Font Awesome für die Darstellung von Icons. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Icon-Fonts über ein Content Delivery Network (CDN) in den Browsercache, um Icons korrekt anzuzeigen.",
                      "Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Font Awesome bzw. dem CDN aufnehmen. Hierdurch kann der Anbieter Kenntnis darüber erlangen, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Font Awesome erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Ich habe ein berechtigtes Interesse an der einheitlichen Darstellung der Icons auf meiner Website."
                    ]
                  }
                ]
              }
            ].map((section, sectionIndex) => (
              <div key={sectionIndex} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                
                {section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className={styles.contentBox}>
                    <h3 className={styles.subsectionTitle}>{subsection.subtitle}</h3>
                    
                    {subsection.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className={styles.textContent}>
                        {paragraph}
                      </p>
                    ))}
                    
                    {'list' in subsection && subsection.list && (
                      <ul className={styles.listContent}>
                        {subsection.list.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
              
            {/* Contact Information */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Verantwortliche Stelle</h2>
              <div className={styles.contactInfo}>
                <h3>Verantwortliche Stelle</h3>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p>
                  <strong>Alexander Koch</strong><br />
                  E-Mail: alexanderkoch@uxnetwork.eu<br />
                  Telefon: +49 1575 3635132<br />
                  Website: https://alexanderkoch.dev
                </p>
                <p>
                  Verantwortliche Stelle ist die natürliche Person, die allein über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                </p>
              </div>
            </div>
            
            {/* Rights Section */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Ihre Rechte</h2>
              <div className={styles.contentBox}>
                <h3 className={styles.subsectionTitle}>Ihre Rechte nach der DSGVO</h3>
                <p className={styles.textContent}>
                  Sie haben folgende Rechte:
                </p>
                <ul className={styles.listContent}>
                  {[
                    "Recht auf Auskunft (Art. 15 DSGVO)",
                    "Recht auf Berichtigung (Art. 16 DSGVO)",
                    "Recht auf Löschung (Art. 17 DSGVO)",
                    "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                    "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                    "Widerspruchsrecht (Art. 21 DSGVO)"
                  ].map((right, index) => (
                    <li key={index}>
                      {right}
                    </li>
                  ))}
                </ul>
                <p className={styles.textContent}>
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
                </p>
              </div>
            </div>
            
            {/* Last Updated */}
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

export default DatenschutzPage;