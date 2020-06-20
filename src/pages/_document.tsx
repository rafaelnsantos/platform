import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
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
