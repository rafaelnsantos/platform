import React, { createContext, useContext, useEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';

const fontLoadedContext = createContext<boolean>(false);

const { Provider } = fontLoadedContext;

interface FontLoadedProviderProps {
  children: React.ReactNode;
  fontPrimary: string;
  fontSecondary: string;
}

function loadFont(family: string, weight: string) {
  const link = document.createElement('link');

  link.href = `https://fonts.googleapis.com/css?family=${family}:${weight}&display=swap`;
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const font = new FontFaceObserver(family);

  return font.load();
}

export function FontLoadedProvider({
  fontPrimary,
  fontSecondary,
  children,
}: FontLoadedProviderProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all([loadFont(fontPrimary, '300,400,500,700'), loadFont(fontSecondary, '500')])
      .then(() => setLoaded(true))
      .catch(() => console.log('nao foi possivel carregar a fonte'));
  }, []);

  return <Provider value={loaded}>{children}</Provider>;
}

export const useFontLoaded = () => useContext(fontLoadedContext);
