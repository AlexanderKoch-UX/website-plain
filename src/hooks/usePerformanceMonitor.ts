import { useEffect, useCallback, useRef } from 'react';
import { ErrorHandler } from '@/utils/errorHandler';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
}

interface UsePerformanceMonitorReturn {
  metrics: PerformanceMetrics | null;
  measureComponentRender: (componentName: string) => () => void;
  measureAsyncOperation: <T>(
    operation: () => Promise<T>,
    operationName: string
  ) => Promise<T>;
}

export const usePerformanceMonitor = (): UsePerformanceMonitorReturn => {
  const metricsRef = useRef<PerformanceMetrics | null>(null);
  const renderTimingsRef = useRef<Map<string, number>>(new Map());

  const collectWebVitals = useCallback(() => {
    try {
      if (typeof window === 'undefined' || !window.performance) {
        return;
      }

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const metrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        };

        // Try to get Core Web Vitals if available
        if ('PerformanceObserver' in window) {
          try {
            // First Contentful Paint
            const fcpObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
              if (fcp) {
                metrics.firstContentfulPaint = fcp.startTime;
              }
            });
            fcpObserver.observe({ entryTypes: ['paint'] });

            // Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              if (lastEntry) {
                metrics.largestContentfulPaint = lastEntry.startTime;
              }
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // Cumulative Layout Shift
            const clsObserver = new PerformanceObserver((list) => {
              let clsValue = 0;
              for (const entry of list.getEntries()) {
                if (!(entry as any).hadRecentInput) {
                  clsValue += (entry as any).value;
                }
              }
              metrics.cumulativeLayoutShift = clsValue;
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });

            // First Input Delay
            const fidObserver = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                metrics.firstInputDelay = (entry as any).processingStart - entry.startTime;
              }
            });
            fidObserver.observe({ entryTypes: ['first-input'] });

          } catch (error) {
            ErrorHandler.logError(
              error as Error,
              undefined,
              'usePerformanceMonitor:webVitals'
            );
          }
        }

        metricsRef.current = metrics;

        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.group('📊 Performance Metrics');
          console.log('Load Time:', metrics.loadTime, 'ms');
          console.log('DOM Content Loaded:', metrics.domContentLoaded, 'ms');
          if (metrics.firstContentfulPaint) {
            console.log('First Contentful Paint:', metrics.firstContentfulPaint, 'ms');
          }
          console.groupEnd();
        }
      }
    } catch (error) {
      ErrorHandler.logError(
        error as Error,
        undefined,
        'usePerformanceMonitor:collectWebVitals'
      );
    }
  }, []);

  const measureComponentRender = useCallback((componentName: string) => {
    const startTime = performance.now();
    renderTimingsRef.current.set(componentName, startTime);

    return () => {
      try {
        const endTime = performance.now();
        const startTime = renderTimingsRef.current.get(componentName);
        
        if (startTime) {
          const renderTime = endTime - startTime;
          renderTimingsRef.current.delete(componentName);

          if (process.env.NODE_ENV === 'development') {
            console.log(`🎨 ${componentName} render time:`, renderTime.toFixed(2), 'ms');
          }

          // Warn about slow renders
          if (renderTime > 16) { // 60fps threshold
            console.warn(`⚠️  Slow render detected in ${componentName}:`, renderTime.toFixed(2), 'ms');
          }
        }
      } catch (error) {
        ErrorHandler.logError(
          error as Error,
          undefined,
          `usePerformanceMonitor:measureComponentRender:${componentName}`
        );
      }
    };
  }, []);

  const measureAsyncOperation = useCallback(
    async <T>(
      operation: () => Promise<T>,
      operationName: string
    ): Promise<T> => {
      const startTime = performance.now();
      
      try {
        const result = await operation();
        const endTime = performance.now();
        const duration = endTime - startTime;

        if (process.env.NODE_ENV === 'development') {
          console.log(`⚡ ${operationName} completed in:`, duration.toFixed(2), 'ms');
        }

        // Warn about slow operations
        if (duration > 1000) {
          console.warn(`⚠️  Slow operation detected: ${operationName}`, duration.toFixed(2), 'ms');
        }

        return result;
      } catch (error) {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        ErrorHandler.logError(
          error as Error,
          undefined,
          `usePerformanceMonitor:measureAsyncOperation:${operationName} (${duration.toFixed(2)}ms)`
        );
        
        throw error;
      }
    },
    []
  );

  useEffect(() => {
    // Collect initial metrics when component mounts
    if (typeof window !== 'undefined') {
      // Wait for page to fully load
      if (document.readyState === 'complete') {
        collectWebVitals();
        return undefined;
      } else {
        window.addEventListener('load', collectWebVitals);
        return () => window.removeEventListener('load', collectWebVitals);
      }
    }
    return undefined;
  }, [collectWebVitals]);

  return {
    metrics: metricsRef.current,
    measureComponentRender,
    measureAsyncOperation,
  };
};