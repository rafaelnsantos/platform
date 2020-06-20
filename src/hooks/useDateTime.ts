import { useEffect } from 'react';

export const useDateTime = (callback: (now: Date) => void, interval: number) => {
  useEffect(() => {
    const id = setInterval(() => callback(new Date()), interval);

    return () => {
      clearInterval(id);
    };
  }, []);
};
