import { useEffect } from 'react';

/**
 * Custom hook that handles escape key press events.
 * Commonly used for closing modals, menus, and other overlay components.
 * 
 * @param callback - Function to call when escape key is pressed
 * @param isActive - Whether the escape key listener should be active
 */
export function useEscapeKey(callback: () => void, isActive: boolean = true) {
  useEffect(() => {
    if (!isActive) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        callback();
      }
    };

    // Add event listener to document to capture escape key globally
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [callback, isActive]);
}