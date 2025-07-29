import React, { Suspense, ReactNode } from 'react';
import Loading from './Loading';
import ErrorBoundary from './ErrorBoundary';

interface SuspenseWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  loadingMessage?: string;
  errorFallback?: ReactNode;
}

const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({
  children,
  fallback,
  loadingMessage = 'Wird geladen...',
  errorFallback
}) => {
  const defaultFallback = fallback || <Loading message={loadingMessage} size="medium" />;

  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={defaultFallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseWrapper;