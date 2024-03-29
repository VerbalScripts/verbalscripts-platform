// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src='https://fw-cdn.com/11485930/4150032.js'
          strategy='afterInteractive'
        />
      </body>
    </Html>
  );
}
