# Alexander Koch Portfolio - NextJS

Ein modernes, responsives Portfolio für Alexander Koch, entwickelt mit NextJS, TypeScript und SCSS.

## 🚀 Features

- **NextJS 14** mit TypeScript
- **Responsive Design** für alle Geräte
- **SCSS** für modulare Styles
- **Framer Motion** für Animationen
- **Static Export** für einfaches Hosting
- **SEO-optimiert** mit Meta-Tags
- **Accessibility-freundlich**

## 📁 Projektstruktur

```
nextjs-portfolio/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   └── Sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       ├── Packages.tsx
│   │       └── Contact.tsx
│   ├── data/
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── packages.ts
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── impressum.tsx
│   │   └── datenschutz.tsx
│   ├── styles/
│   │   ├── globals.scss
│   │   └── Legal.module.scss
│   └── types/
│       └── index.ts
├── public/
│   ├── favicon.ico
│   └── site.webmanifest
├── package.json
├── next.config.js
└── tsconfig.json
```

## 🛠️ Installation & Setup

1. **Dependencies installieren:**
   ```bash
   npm install
   ```

2. **Development Server starten:**
   ```bash
   npm run dev
   ```

3. **Production Build erstellen:**
   ```bash
   npm run build
   ```

4. **Static Export für Hosting:**
   ```bash
   npm run export
   ```

## 📦 Build für Webserver

Das Projekt ist so konfiguriert, dass es nach dem Build in einen `build/` Ordner exportiert wird:

```bash
npm run build
```

Der `build/` Ordner enthält alle statischen Dateien, die direkt auf einen Webserver hochgeladen werden können.

## 🎨 Styling

- **SCSS Modules** für komponentenbasierte Styles
- **Responsive Design** mit Mobile-First Ansatz
- **CSS Custom Properties** für Theming
- **Framer Motion** für smooth Animationen

## 📱 Responsive Breakpoints

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px

## 🔧 Konfiguration

### Next.js Config
- Static Export aktiviert
- Optimierte Bilder für statisches Hosting
- Custom Build Directory (`build/`)

### TypeScript
- Strict Mode aktiviert
- Path Aliases für saubere Imports
- Moderne ES6+ Features

## 📄 Seiten

- **Homepage:** Vollständiges Portfolio mit allen Sektionen
- **Impressum:** Rechtliche Informationen
- **Datenschutz:** DSGVO-konforme Datenschutzerklärung

## 🚀 Deployment

1. Build erstellen: `npm run build`
2. `build/` Ordner auf Webserver hochladen
3. Webserver auf `index.html` als Startseite konfigurieren

## 📞 Kontakt

Alexander Koch  
E-Mail: alexanderkoch@uxnetwork.eu  
Website: https://alexanderkoch.dev