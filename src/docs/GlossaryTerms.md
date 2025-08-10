# Fachwörter-Erklärungen mit Modals

Diese Funktion ermöglicht es, Fachwörter in Ihrem Portfolio mit kleinen, einfachen Erklärungen zu versehen. Wenn Besucher auf diese Fachwörter klicken, öffnet sich ein Modal mit einer Erklärung.

## Funktionen

- **Direkte Verwendung von span-Elementen** mit onClick-Handlern
- **Manuelle Markierung von Fachwörtern** mit der `GlossaryTerm`-Komponente
- **Automatische Erkennung von Fachwörtern** im Text mit der `AutoGlossary`-Komponente
- **Übersicht aller Fachwörter** mit der `GlossaryOverview`-Komponente
- **Vordefinierte Fachwörter** in der Datei `src/data/glossaryTerms.ts`
- **Persistente Speicherung** der Fachwörter im localStorage
- **Responsive Design** für alle Geräte
- **Zugänglichkeit** durch Tastaturnavigation und ARIA-Attribute

## 1. Direkte Verwendung von span-Elementen

Die einfachste Methode ist die direkte Verwendung von span-Elementen mit onClick-Handlern:

```tsx
import { useGlossary } from '@/contexts/GlossaryContext';
import styles from '@/styles/GlossaryTerm.module.scss';

// ...

const { showExplanation } = useGlossary();

// ...

<span 
  className={styles.term}
  onClick={() => showExplanation(
    "React", 
    "React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen."
  )}
  role="button"
  tabIndex={0}
>
  React
</span>
```

## 2. Verwendung der GlossaryTerm-Komponente

Alternativ können Sie die `GlossaryTerm`-Komponente verwenden, die intern auch einen span mit onClick-Handler erstellt:

```tsx
import GlossaryTerm from '@/components/GlossaryTerm';

// ...

<GlossaryTerm 
  term="React" 
  explanation="React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen."
>
  React
</GlossaryTerm>
```

### Parameter

Die `GlossaryTerm`-Komponente akzeptiert folgende Parameter:

- `term` (string): Der Fachbegriff, der erklärt werden soll
- `explanation` (string): Die Erklärung des Fachbegriffs (kann HTML enthalten)
- `children` (ReactNode): Der anzuzeigende Text (normalerweise der Fachbegriff selbst)
- `className` (string, optional): Zusätzliche CSS-Klassen

## 3. Automatische Erkennung von Fachwörtern

Die `AutoGlossary`-Komponente erkennt automatisch Fachwörter im Text und markiert sie:

```tsx
import AutoGlossary from '@/components/AutoGlossary';

// ...

<p>
  <AutoGlossary>
    Bei meinen Projekten setze ich auf moderne Webtechnologien. Für das Frontend verwende ich React und TypeScript, während ich im Backend oft mit REST APIs arbeite.
  </AutoGlossary>
</p>
```

### Parameter

- `children` (string): Der Text, in dem Fachwörter erkannt werden sollen
- `className` (string, optional): Zusätzliche CSS-Klassen

### Hinweis

Die `AutoGlossary`-Komponente funktioniert nur mit einfachem Text, nicht mit JSX/React-Elementen.

## 4. Übersicht aller Fachwörter

Die `GlossaryOverview`-Komponente zeigt eine Übersicht aller verfügbaren Fachwörter an und ermöglicht die Suche nach Begriffen:

```tsx
import GlossaryOverview from '@/components/GlossaryOverview';

// ...

<GlossaryOverview 
  title="Technologie-Glossar" 
  description="Hier finden Sie eine Übersicht aller technischen Begriffe, die in meinem Portfolio verwendet werden."
/>
```

### Parameter

- `title` (string, optional): Der Titel der Übersicht
- `description` (string, optional): Die Beschreibung der Übersicht

## 5. Vollständige Glossar-Seite

Es gibt auch eine vollständige Glossar-Seite unter `/glossary`, die alle Fachwörter alphabetisch sortiert anzeigt:

```tsx
import Link from 'next/link';

// ...

<Link href="/glossary">
  Zum vollständigen Glossar
</Link>
```

## 6. Vordefinierte Fachwörter

In der Datei `src/data/glossaryTerms.ts` sind bereits einige gängige Fachwörter vordefiniert. Sie können diese Liste nach Belieben erweitern oder anpassen:

```tsx
// Beispiel für einen neuen Eintrag
{
  term: "Progressive Web App",
  explanation: "Eine Progressive Web App (PWA) ist eine Webanwendung, die reguläre Webseiten-Funktionalitäten mit App-ähnlichen Funktionen kombiniert. PWAs können offline funktionieren, Push-Benachrichtigungen senden und auf dem Startbildschirm installiert werden."
}
```

## Styling

Die Fachwörter werden mit einer gestrichelten Unterstreichung und einem kleinen Info-Icon dargestellt, um anzuzeigen, dass sie anklickbar sind. Beim Hover ändert sich die Unterstreichung zu einer durchgezogenen Linie.

Sie können das Styling in folgenden Dateien anpassen:
- `src/styles/GlossaryTerm.module.scss` - Styling der Fachwörter
- `src/styles/Modal.module.scss` - Styling der Modals
- `src/styles/GlossaryOverview.module.scss` - Styling der Übersicht
- `src/styles/pages/Glossary.module.scss` - Styling der Glossar-Seite

## Funktionsweise

1. Wenn ein Benutzer auf ein Fachwort klickt, wird die `showExplanation`-Funktion aus dem GlossaryContext aufgerufen.
2. Diese Funktion prüft, ob der Begriff bereits im Context existiert.
3. Falls ja, wird das Modal mit der vorhandenen Erklärung geöffnet.
4. Falls nein, wird der Begriff mit seiner Erklärung zum Context hinzugefügt und dann das Modal geöffnet.
5. Alle Begriffe werden im localStorage gespeichert, sodass sie auch nach einem Seitenneuladen verfügbar sind.

Die Modals werden über den GlossaryContext verwaltet, der in der Layout-Komponente eingebunden ist.

## Vorteile

- **Einfache Implementierung** durch direkte Verwendung von span-Elementen mit onClick-Handlern
- **Verbesserte Benutzererfahrung** für Kunden, die nicht mit allen Fachbegriffen vertraut sind
- **Zeigt Ihre Expertise** und Ihr Engagement für Kundenkommunikation
- **Macht Ihr Portfolio attraktiver** und benutzerfreundlicher
- **Hilft, komplexe Konzepte** einfach zu erklären, ohne den Haupttext zu überladen
- **Automatische Erkennung** von Fachwörtern spart Zeit bei der Implementierung
- **Übersicht aller Begriffe** bietet einen zusätzlichen Mehrwert für Besucher