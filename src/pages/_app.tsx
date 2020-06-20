import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { Provider as ReduxProvider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { AnalyticsProvider } from '~/providers/Analytics';
import { FontLoadedProvider } from '~/providers/FontLoaded';
import { FirebaseProvider } from '~/providers/Firebase';
import { generateColors } from '~/utils/generateColors';
import { store } from '~/config/redux';
import fonts from 'content/fonts.json';
import colors from 'content/colors.json';
import { Header } from '@organisms/Header';
import { Footer } from '@organisms/Footer';

import '~/styles/index.scss';

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast-body {
    font-family: ${(props) => props.theme.fonts.secondary};
  }
  .Toastify__toast--error {
    background-color: ${(props) => props.theme.colors.error};
    color: ${(props) => props.theme.colors.errorContrast};
  }
  .Toastify__toast--warning {
    background-color: ${(props) => props.theme.colors.warn};
    color: ${(props) => props.theme.colors.warnContrast};
  }
  .Toastify__toast--success {
    background-color: ${(props) => props.theme.colors.success};
    color: ${(props) => props.theme.colors.successContrast};
  }
`;

const MyApp = ({ Component, pageProps }: AppPropsType) => {
  return (
    <ThemeProvider theme={{ colors: generateColors(colors), fonts: fonts }}>
      <AnalyticsProvider>
        <FontLoadedProvider fonts={fonts}>
          <ReduxProvider store={store}>
            <FirebaseProvider>
              <Header />
              <Component {...pageProps} />
              <Footer />
              <StyledToastContainer className="text-sm" />
            </FirebaseProvider>
          </ReduxProvider>
        </FontLoadedProvider>
      </AnalyticsProvider>
    </ThemeProvider>
  );
};

export default MyApp;
