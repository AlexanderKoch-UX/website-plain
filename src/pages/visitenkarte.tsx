import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import { personalInfo } from '@/data/personal';
import styles from '@/styles/BusinessCard.module.scss';

const BusinessCardPage: React.FC = () => {
  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${personalInfo.name}
ORG:${personalInfo.title}
TITLE:${personalInfo.title}
EMAIL:${personalInfo.contact.email}
TEL:${personalInfo.contact.phone}
ADR:;;${personalInfo.contact.location};;;;
URL:${personalInfo.contact.website}
NOTE:${personalInfo.description}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personalInfo.name.replace(' ', '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Layout
      title="Digitale Visitenkarte - Alexander Koch"
      description="Laden Sie meine digitale Visitenkarte herunter oder speichern Sie meine Kontaktdaten direkt in Ihrem Adressbuch."
      canonical="https://alexanderkoch.dev/visitenkarte/"
    >
      <section className={styles.businessCardSection}>
        <div className="container">
          <div className={styles.businessCard}>
            <div className={styles.cardHeader}>
              <div className={styles.profileImage}>
                <img 
                  src={personalInfo.image} 
                  alt={personalInfo.name}
                  width={120}
                  height={120}
                />
              </div>
              <div className={styles.profileInfo}>
                <h1>{personalInfo.name}</h1>
                <p className={styles.title}>{personalInfo.title}</p>
                <p className={styles.description}>{personalInfo.description}</p>
              </div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.contactInfo}>
                <h2>Kontaktinformationen</h2>
                <div className={styles.contactGrid}>
                  <div className={styles.contactItem}>
                    <i className="fas fa-envelope"></i>
                    <div>
                      <strong>E-Mail</strong>
                      <a href={`mailto:${personalInfo.contact.email}`}>
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <i className="fas fa-phone"></i>
                    <div>
                      <strong>Telefon</strong>
                      <a href={`tel:${personalInfo.contact.phone}`}>
                        {personalInfo.contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <strong>Standort</strong>
                      <span>{personalInfo.contact.location}</span>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <i className="fas fa-globe"></i>
                    <div>
                      <strong>Website</strong>
                      <a href={personalInfo.contact.website} target="_blank" rel="noopener noreferrer">
                        {personalInfo.contact.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h2>Social Media</h2>
                <div className={styles.socialGrid}>
                  {personalInfo.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <i className={social.icon}></i>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <button
                onClick={downloadVCard}
                className="btn btn-primary"
              >
                <i className="fas fa-download"></i>
                Kontakt herunterladen (.vcf)
              </button>
              
              <Link
                href="/"
                className="btn btn-outline"
              >
                <i className="fas fa-arrow-left"></i>
                Zurück zum Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessCardPage;