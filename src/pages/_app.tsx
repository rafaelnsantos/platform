import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { Provider as ReduxProvider } from 'react-redux';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { AnalyticsProvider } from '~/providers/Analytics';
import { FirebaseProvider } from '~/providers/Firebase';
import { store } from '~/config/redux';
import '~/styles/index.scss';
import { ThemeProvider } from '~/providers/Theme';
import theme from 'content/theme.json';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Provider as AuthProvider } from 'next-auth/client';

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast-body {
    font-family: ${(props) => props.theme.typography.fontFamily};
  }
  .Toastify__toast--error {
    background-color: ${(props) => props.theme.palette.error.main};
    color: ${(props) => props.theme.palette.error.contrastText};
  }
  .Toastify__toast--warning {
    background-color: ${(props) => props.theme.palette.warning.main};
    color: ${(props) => props.theme.palette.warning.contrastText};
  }
  .Toastify__toast--success {
    background-color: ${(props) => props.theme.palette.success.main};
    color: ${(props) => props.theme.palette.success.contrastText};
  }
`;

const MyApp = ({ Component, pageProps }: AppPropsType) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AnalyticsProvider>
        <ReduxProvider store={store}>
          <FirebaseProvider>
            <AuthProvider session={pageProps.session}>
              <AnimatePresence>
                <Component {...pageProps} />
              </AnimatePresence>
            </AuthProvider>
            <StyledToastContainer className="text-sm" />
          </FirebaseProvider>
        </ReduxProvider>
      </AnalyticsProvider>
    </ThemeProvider>
  );
};

export default MyApp;
