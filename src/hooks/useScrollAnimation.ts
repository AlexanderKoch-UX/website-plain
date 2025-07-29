import { useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import { ErrorHandler } from '@/utils/errorHandler';

/**
 * Custom hook to automatically animate scroll-animation elements
 * This ensures animations work both on initial page load and client-side navigation
 */
export const useScrollAnimation = () => {
  const router = useRouter();
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];
  }, []);

  const activateScrollAnimations = useCallback(() => {
    try {
      // Check if we're in the browser environment
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }

      const scrollElements = document.querySelectorAll('.scroll-animation');
      
      if (scrollElements.length === 0) {
        return;
      }

      scrollElements.forEach((element) => {
        try {
          // Check if element is valid and hasn't been animated yet
          if (element && !element.classList.contains('animate')) {
            element.classList.add('animate');
          }
        } catch (error) {
          ErrorHandler.logError(
            error as Error, 
            undefined, 
            'useScrollAnimation:activateScrollAnimations:element'
          );
        }
      });
    } catch (error) {
      ErrorHandler.logError(
        error as Error, 
        undefined, 
        'useScrollAnimation:activateScrollAnimations'
      );
    }
  }, []);

  const handleRouteChange = useCallback(() => {
    try {
      // Clear any existing timeouts
      clearAllTimeouts();
      
      // Small delay to ensure DOM is ready after route change
      const timeout = setTimeout(activateScrollAnimations, 50);
      timeoutsRef.current.push(timeout);
    } catch (error) {
      ErrorHandler.logError(
        error as Error, 
        undefined, 
        'useScrollAnimation:handleRouteChange'
      );
    }
  }, [activateScrollAnimations, clearAllTimeouts]);

  useEffect(() => {
    try {
      // Activate animations immediately for initial load
      activateScrollAnimations();

      // Also activate after a small delay to handle any late-rendered elements
      const timeoutId = setTimeout(activateScrollAnimations, 100);
      timeoutsRef.current.push(timeoutId);

      // Listen for route changes
      router.events.on('routeChangeComplete', handleRouteChange);
      router.events.on('routeChangeError', () => {
        clearAllTimeouts();
      });

      return () => {
        clearAllTimeouts();
        router.events.off('routeChangeComplete', handleRouteChange);
        router.events.off('routeChangeError', () => {
          clearAllTimeouts();
        });
      };
    } catch (error) {
      ErrorHandler.logError(
        error as Error, 
        undefined, 
        'useScrollAnimation:useEffect'
      );
      return undefined;
    }
  }, [router.events, handleRouteChange, activateScrollAnimations, clearAllTimeouts]);
};