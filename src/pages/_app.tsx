import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { Provider as ReduxProvider } from 'react-redux';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { AnalyticsProvider } from '~/providers/Analytics';
import { FirebaseProvider } from '~/providers/Firebase';
import { store } from '~/config/redux';
import { Header } from '@organisms/Header';
import { Footer } from '@organisms/Footer';
import '~/styles/index.scss';
import { ThemeProvider } from '~/providers/Theme';
import theme from 'content/theme.json';

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

const Content = styled.div`
  margin-top: ${(props) => props.theme.mixins.toolbar.minHeight}px;
`;

const MyApp = ({ Component, pageProps }: AppPropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <AnalyticsProvider>
        <ReduxProvider store={store}>
          <FirebaseProvider>
            <Header />
            <Content>
              <Component {...pageProps} />
            </Content>
            <Footer />
            <StyledToastContainer className="text-sm" />
          </FirebaseProvider>
        </ReduxProvider>
      </AnalyticsProvider>
    </ThemeProvider>
  );
};

export default MyApp;
