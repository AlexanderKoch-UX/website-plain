import React, { useEffect, useState, useCallback } from 'react';
import styles from '@/styles/Toast.module.scss';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  persistent?: boolean;
}

interface ToastProps {
  toast: ToastMessage;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(toast.id);
    }, 300);
  }, [onClose, toast.id]);

  useEffect(() => {
    // Trigger entrance animation
    const enterTimer = setTimeout(() => setIsVisible(true), 100);

    // Auto-close timer
    let exitTimer: NodeJS.Timeout;
    if (!toast.persistent) {
      exitTimer = setTimeout(() => {
        handleClose();
      }, toast.duration || 5000);
    }

    return () => {
      clearTimeout(enterTimer);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, [toast.duration, toast.persistent, handleClose]);

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return 'ℹ';
    }
  };

  return (
    <div
      className={`${styles.toast} ${styles[toast.type]} ${
        isVisible ? styles.visible : ''
      } ${isExiting ? styles.exiting : ''}`}
    >
      <div className={styles.icon}>
        {getIcon()}
      </div>
      
      <div className={styles.content}>
        <div className={styles.title}>{toast.title}</div>
        {toast.message && (
          <div className={styles.message}>{toast.message}</div>
        )}
      </div>

      <button
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Toast schließen"
      >
        ×
      </button>
    </div>
  );
};

interface ToastContainerProps {
  toasts: ToastMessage[];
  onClose: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onClose,
}) => {
  if (toasts.length === 0) return null;

  return (
    <div className={styles.toastContainer}>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  );
};

export default Toast;