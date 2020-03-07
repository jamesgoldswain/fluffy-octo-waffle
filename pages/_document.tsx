import Document, { Head, Html, Main, NextScript } from 'next/document';
// import { GoogleFont, TypographyStyle } from '@react-typography';
//import typography from '../lib/typography';
  
class MyDocument extends Document {

  
    render() {
      return (
        <Html lang="en">
        <Head>
          {/* <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} /> */}
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