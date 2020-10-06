import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />)),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="dns-prefetch" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
          <link
            rel="dns-prefetch"
            href="https://www.google-analytics.com/"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
          <link rel="shortcut icon" href="favicon.ico" />
        </Head>

        <body>
          <noscript>
            <div id="noscript">You need to enable JavaScript to see this page.</div>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
