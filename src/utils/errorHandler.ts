import { ErrorInfo } from 'react';

export interface AppError {
  message: string;
  code?: string | number;
  stack?: string;
  timestamp: number;
  userAgent?: string;
  url?: string;
}

export class ErrorHandler {
  private static errors: AppError[] = [];
  private static toastHandler: ((title: string, message?: string) => void) | null = null;

  static setToastHandler(handler: (title: string, message?: string) => void): void {
    this.toastHandler = handler;
  }

  static logError(error: Error, errorInfo?: ErrorInfo, context?: string, showToast = false): void {
    const appError: AppError = {
      message: error.message,
      stack: error.stack,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
      code: context || 'Unknown'
    };

    // Store error locally for debugging
    this.errors.push(appError);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Logged');
      console.error('Error:', error);
      if (errorInfo) {
        console.error('Error Info:', errorInfo);
      }
      if (context) {
        console.error('Context:', context);
      }
      console.groupEnd();
    }

    // Show toast notification if requested and in browser
    if (showToast && typeof window !== 'undefined' && this.toastHandler) {
      this.toastHandler('Ein Fehler ist aufgetreten', error.message);
    }

    // In production, you might want to send this to an error tracking service
    // this.sendToErrorService(appError);
  }

  static getErrors(): AppError[] {
    return [...this.errors];
  }

  static clearErrors(): void {
    this.errors = [];
  }

  static handleAsyncError<T>(promise: Promise<T>, context?: string): Promise<T> {
    return promise.catch((error: Error) => {
      this.logError(error, undefined, context);
      throw error; // Re-throw to maintain original behavior
    });
  }

  static wrapComponent<T extends unknown[], R>(
    fn: (...args: T) => R,
    context?: string
  ): (...args: T) => R {
    return (...args: T) => {
      try {
        const result = fn(...args);
        
        // Handle promises
        if (result && typeof (result as unknown as Promise<unknown>).then === 'function') {
          return this.handleAsyncError(result as unknown as Promise<R>, context) as R;
        }
        
        return result;
      } catch (error) {
        this.logError(error as Error, undefined, context);
        throw error;
      }
    };
  }
}

// Global error handlers
if (typeof window !== 'undefined') {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    ErrorHandler.logError(
      new Error(`Unhandled Promise Rejection: ${event.reason}`),
      undefined,
      'unhandledrejection'
    );
  });

  // Handle global JavaScript errors
  window.addEventListener('error', (event) => {
    ErrorHandler.logError(
      new Error(event.message),
      undefined,
      `Global Error: ${event.filename}:${event.lineno}:${event.colno}`
    );
  });
}

export default ErrorHandler;