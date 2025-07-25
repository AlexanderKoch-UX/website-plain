import { Package } from '@/types';

export const packages: Package[] = [
  {
    name: 'Starter-Paket – Web-Visitenkarte',
    beschreibung: [
      'Domainregistrierung (.de)',
      'Webhosting (1 Jahr inklusive)',
      'WordPress-Installation',
      '1–3 Seiten (z.B. Start, Kontakt, Leistungen)',
      'DSGVO-konformes Impressum & Datenschutz',
      'Responsive Design (mobiloptimiert)',
      'Basis-SEO (Meta-Daten, Suchmaschinen-Anmeldung)'
    ],
    preis: {
      einmalig: '1000–1500 €',
      hosting_vertrag: '10–20 € netto/Monat'
    }
  },
  {
    name: 'Business-Paket – Online-Präsenz für Unternehmen',
    beschreibung: [
      'Alle Leistungen aus dem Starter-Paket',
      'Bis zu 8 Seiten (z.B. Team, Portfolio, Blog)',
      'Erweiterte SEO-Optimierung',
      'Individuelles Design nach CI',
      'Einbindung von Social Media',
      'Kontakt-/Anfrageformulare',
      'Einrichtung von E-Mail-Adressen',
      'Schulung (1h Video-Call oder vor Ort)'
    ],
    preis: {
      einmalig: '2000–2900 €',
      hosting_vertrag: '20–35 € netto/Monat'
    }
  },
  {
    name: 'Premium-Paket – Komplett digital',
    beschreibung: [
      'Alle Leistungen aus dem Business-Paket',
      'Bis zu 15 Seiten & individuelle Unterseiten',
      'Blog- oder Newsbereich',
      'Erweiterte Sicherheitsmaßnahmen (Backups, Firewalls)',
      'Einrichtung Google Analytics & Search Console',
      'Content-Erstellung (Texte, Bilder, SEO)',
      'Performance-Optimierung',
      'Laufende Wartung & Updates (6 Monate inklusive)'
    ],
    preis: {
      einmalig: '3000–4900 €',
      hosting_vertrag: '30–50 € netto/Monat'
    }
  }
];