import type { AppProps } from 'next/app';
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProvider from '@/components/ErrorProvider';
import { ToastProvider } from '@/contexts/ToastContext';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <ErrorProvider>
          <Component {...pageProps} />
        </ErrorProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}