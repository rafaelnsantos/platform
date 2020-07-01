import React, { createContext, useContext, useEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';

const fontLoadedContext = createContext<boolean>(false);

const { Provider } = fontLoadedContext;

interface FontLoadedProviderProps {
  children: React.ReactNode;
  font: string;
}

function loadFont(family: string, weight: string) {
  const link = document.createElement('link');

  link.href = `https://fonts.googleapis.com/css?family=${family}:${weight}&display=swap`;
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const font = new FontFaceObserver(family);

  return font.load();
}

export function FontLoadedProvider({ font, children }: FontLoadedProviderProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all([loadFont(font, '300,400,500,700')]).then(() => setLoaded(true));
  }, []);

  return <Provider value={loaded}>{children}</Provider>;
}

export const useFontLoaded = () => useContext(fontLoadedContext);
