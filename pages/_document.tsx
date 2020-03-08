import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  
    render() {
      return (
        <Html lang="en">
        <Head>
        <link
            rel="preload"
            href="/fonts/Rancho-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
      )
    }
  }
  
  export default MyDocument