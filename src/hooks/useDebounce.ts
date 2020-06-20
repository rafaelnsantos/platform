import { useEffect } from 'react';

export function useDebounce<T>(callback: (v: T) => void, [value, delay]: [T, number]) {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
}
