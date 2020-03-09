import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
        <Head>
        <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,700&display=swap"
            rel="stylesheet"
        />
        <link rel="icon" 
          type="image/png" 
          href="/favicon.ico"></link>
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