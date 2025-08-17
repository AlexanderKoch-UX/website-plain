import { useCallback, useState, useRef, useEffect } from 'react';
import { ErrorHandler } from '@/utils/errorHandler';
import { ERROR_MESSAGES } from '@/utils/constants';

interface UseErrorHandlerReturn {
  error: Error | null;
  isLoading: boolean;
  retryCount: number;
  setError: (error: Error | null) => void;
  handleError: (error: Error, context?: string, showToast?: boolean) => void;
  clearError: () => void;
  handleAsyncOperation: <T>(
    operation: () => Promise<T>,
    context?: string,
    maxRetries?: number
  ) => Promise<T | null>;
  retry: () => void;
  withTimeout: <T>(
    operation: () => Promise<T>,
    timeoutMs?: number,
    context?: string
  ) => Promise<T | null>;
}

export const useErrorHandler = (): UseErrorHandlerReturn => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const lastOperationRef = useRef<(() => Promise<unknown>) | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    const currentTimeout = timeoutRef.current;
    return () => {
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
    };
  }, []);

  const handleError = useCallback((error: Error, context?: string, showToast = false) => {
    ErrorHandler.logError(error, undefined, context, showToast);
    setError(error);
    setIsLoading(false);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
    setRetryCount(0);
    lastOperationRef.current = null;
  }, []);

  const retry = useCallback(async () => {
    if (lastOperationRef.current && retryCount < 3) {
      try {
        setRetryCount(prev => prev + 1);
        setError(null);
        setIsLoading(true);
        await lastOperationRef.current();
      } catch (error) {
        handleError(error as Error, 'retry operation');
      } finally {
        setIsLoading(false);
      }
    }
  }, [retryCount, handleError]);

  const withTimeout = useCallback(
    async <T>(
      operation: () => Promise<T>,
      timeoutMs = 30000,
      context?: string
    ): Promise<T | null> => {
      return new Promise<T | null>((resolve) => {
        let completed = false;

        // Set up timeout
        const timeout = setTimeout(() => {
          if (!completed) {
            completed = true;
            const timeoutError = new Error(ERROR_MESSAGES.timeout);
            handleError(timeoutError, `${context} (timeout)`);
            resolve(null);
          }
        }, timeoutMs);

        // Execute operation
        operation()
          .then((result) => {
            if (!completed) {
              completed = true;
              clearTimeout(timeout);
              resolve(result);
            }
          })
          .catch((error) => {
            if (!completed) {
              completed = true;
              clearTimeout(timeout);
              handleError(error as Error, context);
              resolve(null);
            }
          });
      });
    },
    [handleError]
  );

  const handleAsyncOperation = useCallback(
    async <T>(
      operation: () => Promise<T>,
      context?: string,
      maxRetries = 2
    ): Promise<T | null> => {
      let attempt = 0;
      
      while (attempt <= maxRetries) {
        try {
          if (attempt === 0) {
            clearError();
            setIsLoading(true);
            lastOperationRef.current = operation;
          }
          
          const result = await operation();
          setIsLoading(false);
          return result;
        } catch (error) {
          attempt++;
          
          if (attempt > maxRetries) {
            handleError(error as Error, context);
            return null;
          }
          
          // Wait before retry
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        }
      }
      
      setIsLoading(false);
      return null;
    },
    [handleError, clearError]
  );

  return {
    error,
    isLoading,
    retryCount,
    setError,
    handleError,
    clearError,
    handleAsyncOperation,
    retry,
    withTimeout,
  };
};