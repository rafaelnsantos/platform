import React, { createContext, useContext, useEffect } from 'react';
import ReactGA from 'react-ga';
import { useRouter } from 'next/dist/client/router';

export const analitycsContext = createContext(ReactGA);

const { Provider } = analitycsContext;

interface AnalitycsProviderProps {
  children: React.ReactNode;
}

ReactGA.initialize(process.env.NEXT_PUBLIC_TRACKING_ID as string, {
  debug: process.env.NODE_ENV !== 'production',
});

export function AnalyticsProvider({ children }: AnalitycsProviderProps) {
  const { route } = useRouter();

  useEffect(() => {
    ReactGA.pageview(route);
  }, [route]);

  return <Provider value={ReactGA}>{children}</Provider>;
}

export const useAnalytics = () => useContext(analitycsContext);
