import React, { useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { FontLoadedProvider } from '~/providers/FontLoaded';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { generateTheme } from '~/styles/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Content } from 'content/content';

export interface ThemeProviderProps {
  theme: Content['theme'];
  children: React.ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const generatedTheme = useMemo(() => generateTheme(theme), []);
  return (
    <MaterialThemeProvider theme={generatedTheme}>
      <CssBaseline />
      <StyledThemeProvider theme={generatedTheme}>
        <FontLoadedProvider font={theme.fontPrimary}>{children}</FontLoadedProvider>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
};
