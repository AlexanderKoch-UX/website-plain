import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProvider from '@/components/ErrorProvider';
import { ToastProvider } from '@/contexts/ToastContext';
import { GlossaryProvider } from '@/contexts/GlossaryContext';
import GlossaryModal from '@/components/GlossaryModal';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  // Aktiviere Dark Mode beim Laden der Seite
  useEffect(() => {
    // Füge die dark-mode Klasse zum HTML-Element hinzu
    document.documentElement.classList.add('dark-mode');
    
    // Service Worker registrieren für bessere Performance
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return (
    <ErrorBoundary>
      <ToastProvider>
        <ErrorProvider>
          <GlossaryProvider>
            <Component {...pageProps} />
            <GlossaryModal />
          </GlossaryProvider>
        </ErrorProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}