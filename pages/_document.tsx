import Document, { Head, Html, Main, NextScript } from 'next/document';
import { GoogleFont, TypographyStyle } from 'react-typography';
import typography from '../lib/typography';
import { NextPageContext } from 'next';

  
class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
      return (
        <Html lang="en">
        <Head>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
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