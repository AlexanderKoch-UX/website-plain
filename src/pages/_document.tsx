import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        
        {/* Accessibility Widget Configuration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Globale Konfiguration vor dem Laden des Widgets
              window.A11Y_WIDGET_CONFIG = {
                position: 'bottom-left',
                theme: 'light',
                language: 'de',
                showToggleText: false
              };
            `,
          }}
        />
        
        {/* Accessibility Widget Script */}
        <script src="/accessibility-widget.js" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}