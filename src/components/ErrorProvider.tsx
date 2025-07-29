import React, { useEffect, ReactNode } from 'react';
import { useToast } from '@/contexts/ToastContext';
import { ErrorHandler } from '@/utils/errorHandler';

interface ErrorProviderProps {
  children: ReactNode;
}

const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
  const { showError } = useToast();

  useEffect(() => {
    // Set up toast handler for error notifications
    ErrorHandler.setToastHandler(showError);

    // Clean up on unmount
    return () => {
      ErrorHandler.setToastHandler(() => {});
    };
  }, [showError]);

  return <>{children}</>;
};

export default ErrorProvider;