import { useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import { ErrorHandler } from '@/utils/errorHandler';

/**
 * Custom hook to automatically animate scroll-animation elements
 * This ensures animations work both on initial page load and client-side navigation
 * Enhanced to always activate all animations regardless of scroll position
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

      // Activate all scroll animations regardless of visibility
      const scrollElements = document.querySelectorAll('.scroll-animation');
      
      if (scrollElements.length === 0) {
        return;
      }

      scrollElements.forEach((element) => {
        try {
          // Always add the animate class to all elements
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

      // Also activate all fade-in animations
      const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
      fadeElements.forEach((element) => {
        try {
          if (element) {
            element.classList.add('in-view');
          }
        } catch (error) {
          ErrorHandler.logError(
            error as Error,
            undefined,
            'useScrollAnimation:activateScrollAnimations:fadeElement'
          );
        }
      });

      // Apply animations to all sections, cards, buttons, etc.
      const animatableElements = document.querySelectorAll('.section, .card, .btn, .hero, img, .icon, .section-header, .divider-gradient');
      animatableElements.forEach((element) => {
        try {
          if (element && !element.classList.contains('no-animation')) {
            element.classList.add('animated');
          }
        } catch (error) {
          ErrorHandler.logError(
            error as Error,
            undefined,
            'useScrollAnimation:activateScrollAnimations:animatableElement'
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

      // Add additional timeouts to ensure all animations are activated
      const timeout2 = setTimeout(activateScrollAnimations, 300);
      timeoutsRef.current.push(timeout2);
      
      const timeout3 = setTimeout(activateScrollAnimations, 1000);
      timeoutsRef.current.push(timeout3);
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

      // Also activate after multiple delays to handle any late-rendered elements
      const timeoutId1 = setTimeout(activateScrollAnimations, 100);
      timeoutsRef.current.push(timeoutId1);
      
      const timeoutId2 = setTimeout(activateScrollAnimations, 500);
      timeoutsRef.current.push(timeoutId2);
      
      const timeoutId3 = setTimeout(activateScrollAnimations, 1500);
      timeoutsRef.current.push(timeoutId3);

      // Listen for route changes
      router.events.on('routeChangeComplete', handleRouteChange);
      router.events.on('routeChangeError', () => {
        clearAllTimeouts();
      });

      // Set up a recurring check to ensure animations stay active
      const intervalId = setInterval(activateScrollAnimations, 2000);

      return () => {
        clearAllTimeouts();
        clearInterval(intervalId);
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