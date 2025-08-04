# Alexander Koch Portfolio - Styling System

## Übersicht

Dieses Portfolio verwendet ein modernes, komponentenbasiertes SCSS-System mit wiederverwendbaren Komponenten, Utility-Klassen und konsistenten Design-Tokens.

## Struktur

```
src/styles/
├── components/           # Wiederverwendbare Komponenten
│   ├── _animations.scss  # Animationen und Keyframes
│   ├── _buttons.scss     # Button-Komponenten
│   ├── _cards.scss       # Card-Komponenten
│   ├── _forms.scss       # Formular-Komponenten
│   ├── _sections.scss    # Section-Layouts
│   ├── _utilities.scss   # Utility-Klassen
│   └── _index.scss       # Import aller Komponenten
├── globals.scss          # Globale Styles und CSS-Variablen
└── [Page].module.scss    # Seitenspezifische Styles
```

## Design-System

### CSS Custom Properties (Variablen)

Das System verwendet CSS Custom Properties für konsistente Gestaltung:

#### Farben
- **Primary**: `--primary-50` bis `--primary-900` (Blau-Töne)
- **Secondary**: `--secondary-50` bis `--secondary-900` (Lila-Töne)
- **Accent**: `--accent-50` bis `--accent-900` (Orange-Töne)
- **Gray**: `--gray-50` bis `--gray-900` (Grau-Töne)
- **Status**: `--success-500`, `--warning-500`, `--error-500`

#### Gradienten
- `--gradient-primary`: Primärer Gradient (Blau → Lila)
- `--gradient-secondary`: Sekundärer Gradient (Lila → Orange)
- `--gradient-accent`: Akzent-Gradient (Orange → Blau)

#### Abstände
- `--space-xs` bis `--space-3xl` (0.25rem bis 4rem)

#### Schatten
- `--shadow-sm` bis `--shadow-2xl`

#### Border Radius
- `--radius-sm` bis `--radius-2xl`, `--radius-full`

#### Übergänge
- `--transition-fast`, `--transition-normal`, `--transition-slow`

## Komponenten-System

### Cards (`_cards.scss`)

Wiederverwendbare Card-Komponenten mit verschiedenen Varianten:

```scss
// Basis-Card
.card { @extend %card-base; }

// Glass-Effekt Card
.card-glass { @extend %card-glass; }

// Interaktive Card
.card-hover { @extend %card-hover; }

// Card-Inhalte
.card-content { padding: var(--space-xl); }
.card-content--sm { padding: var(--space-lg); }
.card-content--lg { padding: var(--space-2xl); }

// Card-Grids
.cards-grid--2 { /* 2-Spalten Grid */ }
.cards-grid--3 { /* 3-Spalten Grid */ }
```

### Buttons (`_buttons.scss`)

Umfassendes Button-System mit verschiedenen Stilen:

```scss
// Basis-Button
.btn { @extend %btn-primary; }

// Varianten
.btn--secondary { @extend %btn-secondary; }
.btn--outline { @extend %btn-outline; }
.btn--ghost { @extend %btn-ghost; }

// Größen
.btn--sm, .btn--lg, .btn--xl

// Spezial-Buttons
.btn-social { /* Social Media Buttons */ }
.btn-group { /* Button-Gruppen */ }
```

### Sections (`_sections.scss`)

Layout-Komponenten für Sektionen:

```scss
// Basis-Section
.section { @extend %section-base; }

// Varianten
.section--gradient { /* Gradient-Hintergrund */ }
.section--animated { /* Animierter Hintergrund */ }
.section--dark { /* Dunkle Section */ }

// Layouts
.section-two-column { /* 2-Spalten Layout */ }
.section-three-column { /* 3-Spalten Layout */ }
```

### Forms (`_forms.scss`)

Vollständiges Formular-System:

```scss
// Eingabefelder
.form-input, .form-textarea, .form-select

// Checkboxen und Radio-Buttons
.form-checkbox, .form-radio

// Validierung
.form-error, .form-success, .form-help

// Layouts
.form-grid--2, .form-grid--3
.form-actions
```

### Animations (`_animations.scss`)

Wiederverwendbare Animationen:

```scss
// Utility-Klassen
.animate-float, .animate-slide-up, .animate-fade-in

// Hover-Effekte
.hover-lift, .hover-scale, .hover-glow

// Intersection Observer
.fade-in-up, .fade-in-left, .fade-in-right
```

### Utilities (`_utilities.scss`)

Utility-Klassen für schnelle Anpassungen:

```scss
// Display
.d-flex, .d-grid, .d-none

// Flexbox
.justify-center, .align-center, .gap-lg

// Spacing
.m-lg, .p-xl, .mt-2xl

// Text
.text-center, .font-bold, .text-primary

// Responsive
.sm:d-none, .xs:text-center
```

## Verwendung

### 1. Globale Styles importieren

```scss
// In globals.scss
@import 'components/index';
```

### 2. Komponenten verwenden

```scss
// In einer .module.scss Datei
.mySection {
  @extend .section--animated;
  
  .myCard {
    @extend .card-glass;
    @extend .card-content--lg;
  }
  
  .myButton {
    @extend .btn;
    @extend .btn--lg;
  }
}
```

### 3. Utility-Klassen in JSX

```jsx
<div className="d-flex justify-center gap-lg">
  <button className="btn btn--primary">
    Primary Button
  </button>
  <button className="btn btn--secondary">
    Secondary Button
  </button>
</div>
```

## Responsive Design

Das System verwendet Mobile-First Breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Responsive Utility-Klassen:
- `sm:` für Mobile (< 768px)
- `xs:` für sehr kleine Screens (< 480px)

## Accessibility

Das System berücksichtigt Accessibility-Anforderungen:

- `prefers-reduced-motion`: Reduzierte Animationen
- `prefers-contrast: high`: Hoher Kontrast
- `prefers-color-scheme: dark`: Dark Mode Support
- Fokus-Styles für Tastaturnavigation

## Performance

- Verwendung von CSS Custom Properties für bessere Performance
- GPU-beschleunigte Animationen mit `transform` und `opacity`
- Optimierte Selektoren und minimale Verschachtelung
- Lazy Loading von nicht-kritischen Styles

## Wartung

### Neue Komponenten hinzufügen

1. Erstelle eine neue `_component.scss` Datei
2. Definiere wiederverwendbare `%placeholders`
3. Erstelle entsprechende Klassen
4. Importiere in `_index.scss`

### Farben anpassen

Ändere die CSS Custom Properties in `globals.scss`:

```scss
:root {
  --primary-600: #your-color;
  --gradient-primary: linear-gradient(135deg, #color1, #color2);
}
```

### Breakpoints anpassen

Ändere die Media Queries in den entsprechenden Komponenten-Dateien.

## Best Practices

1. **Verwende Komponenten-Klassen** statt individuelle Styles
2. **Nutze CSS Custom Properties** für konsistente Werte
3. **Folge der BEM-Methodologie** für Klassennamen
4. **Teste Accessibility** mit Screen Readern
5. **Optimiere für Performance** mit effizienten Selektoren
6. **Dokumentiere neue Komponenten** in dieser README

## Browser-Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

Für ältere Browser werden Fallbacks über PostCSS bereitgestellt.