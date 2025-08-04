import { useEffect, useState, useCallback } from 'react';
import { ErrorHandler } from '@/utils/errorHandler';
import { STORAGE_KEYS } from '@/utils/constants';

interface AccessibilityPreferences {
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  focusVisible: boolean;
  screenReader: boolean;
}

interface UseAccessibilityReturn {
  preferences: AccessibilityPreferences;
  updatePreference: <K extends keyof AccessibilityPreferences>(
    key: K,
    value: AccessibilityPreferences[K]
  ) => void;
  resetPreferences: () => void;
  detectScreenReader: () => boolean;
  announceToScreenReader: (message: string) => void;
  setFocusToMain: () => void;
  trapFocus: (element: HTMLElement) => () => void;
}

const DEFAULT_PREFERENCES: AccessibilityPreferences = {
  reducedMotion: false,
  highContrast: false,
  fontSize: 'medium',
  focusVisible: true,
  screenReader: false,
};

export const useAccessibility = (): UseAccessibilityReturn => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(DEFAULT_PREFERENCES);

  // Load preferences from localStorage
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;

      const stored = localStorage.getItem(STORAGE_KEYS.accessibility);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences(prev => ({ ...prev, ...parsed }));
      }

      // Detect system preferences
      const mediaQueries = {
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
        highContrast: window.matchMedia('(prefers-contrast: high)'),
      };

      const handleMotionChange = (e: MediaQueryListEvent) => {
        setPreferences(prev => ({ ...prev, reducedMotion: e.matches }));
      };

      const handleContrastChange = (e: MediaQueryListEvent) => {
        setPreferences(prev => ({ ...prev, highContrast: e.matches }));
      };

      mediaQueries.reducedMotion.addEventListener('change', handleMotionChange);
      mediaQueries.highContrast.addEventListener('change', handleContrastChange);

      // Set initial values
      setPreferences(prev => ({
        ...prev,
        reducedMotion: mediaQueries.reducedMotion.matches,
        highContrast: mediaQueries.highContrast.matches,
        screenReader: false, // Will be updated after mount
      }));

      return () => {
        mediaQueries.reducedMotion.removeEventListener('change', handleMotionChange);
        mediaQueries.highContrast.removeEventListener('change', handleContrastChange);
      };
    } catch (error) {
      ErrorHandler.logError(
        error as Error,
        undefined,
        'useAccessibility:useEffect'
      );
      return undefined;
    }
  }, []);

  // Apply preferences to DOM
  useEffect(() => {
    try {
      if (typeof document === 'undefined') return;

      const root = document.documentElement;

      // Apply font size
      root.style.setProperty('--base-font-size', getFontSizeValue(preferences.fontSize));

      // Apply high contrast
      if (preferences.highContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }

      // Apply reduced motion
      if (preferences.reducedMotion) {
        root.classList.add('reduced-motion');
      } else {
        root.classList.remove('reduced-motion');
      }

      // Apply focus visible
      if (preferences.focusVisible) {
        root.classList.add('focus-visible');
      } else {
        root.classList.remove('focus-visible');
      }

      // Save to localStorage
      localStorage.setItem(STORAGE_KEYS.accessibility, JSON.stringify(preferences));

    } catch (error) {
      ErrorHandler.logError(
        error as Error,
        undefined,
        'useAccessibility:applyPreferences'
      );
    }
  }, [preferences]);

  const getFontSizeValue = (size: AccessibilityPreferences['fontSize']): string => {
    const sizeMap = {
      'small': '14px',
      'medium': '16px',
      'large': '18px',
      'extra-large': '20px',
    };
    return sizeMap[size];
  };

  const detectScreenReader = useCallback((): boolean => {
    try {
      if (typeof window === 'undefined') return false;

      // Check for common screen reader user agents
      const userAgent = window.navigator.userAgent.toLowerCase();
      const screenReaderIndicators = [
        'nvda', 'jaws', 'voiceover', 'orca', 'narrator', 'dragon'
      ];

      return screenReaderIndicators.some(indicator => 
        userAgent.includes(indicator)
      ) || window.speechSynthesis !== undefined;
    } catch {
      return false;
    }
  }, []);

  const updatePreference = useCallback(<K extends keyof AccessibilityPreferences>(
    key: K,
    value: AccessibilityPreferences[K]
  ) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetPreferences = useCallback(() => {
    setPreferences(DEFAULT_PREFERENCES);
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.accessibility);
    }
  }, []);

  const announceToScreenReader = useCallback((message: string) => {
    try {
      if (typeof document === 'undefined') return;

      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.style.position = 'absolute';
      announcement.style.left = '-10000px';
      announcement.style.width = '1px';
      announcement.style.height = '1px';
      announcement.style.overflow = 'hidden';
      announcement.textContent = message;

      document.body.appendChild(announcement);

      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    } catch (error) {
      ErrorHandler.logError(
        error as Error,
        undefined,
        'useAccessibility:announceToScreenReader'
      );
    }
  }, []);

  const setFocusToMain = useCallback(() => {
    try {
      if (typeof document === 'undefined') return;

      const mainElement = document.querySelector('main') || 
                          document.querySelector('[role="main"]') ||
                          document.querySelector('#main');
      
      if (mainElement) {
        (mainElement as HTMLElement).focus();
      }
    } catch (error) {
      ErrorHandler.logError(
        error as Error,
        undefined,
        'useAccessibility:setFocusToMain'
      );
    }
  }, []);

  const trapFocus = useCallback((element: HTMLElement) => {
    try {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
        
        if (e.key === 'Escape') {
          element.blur();
        }
      };

      element.addEventListener('keydown', handleKeyDown);

      return () => {
        element.removeEventListener('keydown', handleKeyDown);
      };
    } catch (error) {
      ErrorHandler.logError(
        error as Error,
        undefined,
        'useAccessibility:trapFocus'
      );
      return () => {};
    }
  }, []);

  return {
    preferences,
    updatePreference,
    resetPreferences,
    detectScreenReader,
    announceToScreenReader,
    setFocusToMain,
    trapFocus,
  };
};