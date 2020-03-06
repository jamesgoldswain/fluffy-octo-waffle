import App from 'next/app';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { globalStyles } from '../utils/styles';
import { theme } from '../lib/theme';

class MyApp extends App {

    static async getInitialProps(ctx: any) {
      // calls page's `getInitialProps` and fills `appProps.pageProps`
      const appProps = await App.getInitialProps(ctx);
      return { ...appProps };
    }
  
    render() {
      const { Component, pageProps } = this.props;
      return (
          <ThemeProvider theme={theme}>
              <Global styles={globalStyles(theme)} />
              <Component {...pageProps} />
          </ThemeProvider>
      );
    }
  }
  
  export default MyApp;