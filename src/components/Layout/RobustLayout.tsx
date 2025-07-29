import React, { ReactNode, Suspense } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';
import { useAccessibility } from '@/hooks/useAccessibility';
import ErrorBoundary from '@/components/ErrorBoundary';
import Loading from '@/components/Loading';
import { validateEnvironment } from '@/utils/constants';

interface RobustLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  showLoadingFallback?: boolean;
}

const RobustLayout: React.FC<RobustLayoutProps> = ({
  children,
  title = 'Alexander Koch Portfolio',
  description = 'Modern portfolio website for Alexander Koch',
  showLoadingFallback = true,
}) => {
  // Initialize hooks for robustness
  useScrollAnimation();
  const { measureComponentRender } = usePerformanceMonitor();
  const { preferences, announceToScreenReader } = useAccessibility();

  // Validate environment on mount
  React.useEffect(() => {
    const envStatus = validateEnvironment();
    if (!envStatus.isValid && envStatus.isDevelopment) {
      console.warn('Environment validation failed:', envStatus.missing);
    }
  }, []);

  // Measure layout render performance
  React.useEffect(() => {
    const stopMeasuring = measureComponentRender('RobustLayout');
    return stopMeasuring;
  }, [measureComponentRender]);

  // Announce page changes to screen readers
  React.useEffect(() => {
    if (preferences.screenReader && title) {
      announceToScreenReader(`Seite geladen: ${title}`);
    }
  }, [title, preferences.screenReader, announceToScreenReader]);

  return (
    <div 
      className={`robust-layout ${preferences.reducedMotion ? 'reduced-motion' : ''} ${preferences.highContrast ? 'high-contrast' : ''}`}
      data-theme={preferences.highContrast ? 'high-contrast' : 'default'}
    >
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>

      {/* Main content wrapper with error boundary */}
      <ErrorBoundary>
        <main id="main-content" role="main" tabIndex={-1}>
          {showLoadingFallback ? (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary fallback={<div>Ein Fehler ist beim Laden des Inhalts aufgetreten.</div>}>
                {children}
              </ErrorBoundary>
            </Suspense>
          ) : (
            <ErrorBoundary fallback={<div>Ein Fehler ist beim Laden des Inhalts aufgetreten.</div>}>
              {children}
            </ErrorBoundary>
          )}
        </main>
      </ErrorBoundary>

      {/* Screen reader live region for announcements */}
      <div
        id="live-region"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      {/* Development overlay for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <DevOverlay />
      )}
    </div>
  );
};

// Development overlay component
const DevOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { metrics } = usePerformanceMonitor();

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          zIndex: 10000,
          fontSize: '12px',
        }}
        title="Debug Info anzeigen"
      >
        🔧
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '16px',
        borderRadius: '8px',
        fontSize: '12px',
        maxWidth: '300px',
        zIndex: 10000,
        fontFamily: 'monospace',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ margin: 0, fontSize: '14px' }}>Debug Info</h4>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          ×
        </button>
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>Environment:</strong> {process.env.NODE_ENV}
      </div>
      
      {metrics && (
        <>
          <div style={{ marginBottom: '4px' }}>
            <strong>Load Time:</strong> {metrics.loadTime}ms
          </div>
          <div style={{ marginBottom: '4px' }}>
            <strong>DOM Ready:</strong> {metrics.domContentLoaded}ms
          </div>
          {metrics.firstContentfulPaint && (
            <div style={{ marginBottom: '4px' }}>
              <strong>FCP:</strong> {metrics.firstContentfulPaint.toFixed(2)}ms
            </div>
          )}
        </>
      )}
      
      <div style={{ fontSize: '10px', opacity: 0.7, marginTop: '8px' }}>
        Nur in der Entwicklung sichtbar
      </div>
    </div>
  );
};

export default RobustLayout;