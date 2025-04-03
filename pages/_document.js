import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Remove the CDN link since we're using the npm version */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 