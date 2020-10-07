import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { Content } from 'content/content';
import { Options } from '@material-ui/core';

// Create a theme instance.
export const generateTheme = (theme: Content['theme']) =>
  createMuiTheme({
    palette: {
      primary: {
        main: theme.primary,
      },
      secondary: {
        main: theme.secondary,
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
      background: {
        default: theme.background,
        paper: theme.paper,
      },
    },
    typography: {
      fontFamily: theme.fontPrimary,
    },
  });

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare module '@material-ui/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare module '@material-ui/core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}

  export function useMediaQuery(
    query: string | ((theme: DefaultTheme) => string),
    options?: Options
  ): boolean;
}
