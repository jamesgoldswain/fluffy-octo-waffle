import * as React from 'react'
import PageHeader from '../components/PageHeader'
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../lib/theme';

const Home = () => {
    return (

        <ThemeProvider theme={theme}>
            <PageHeader
                title={ 'Welcome' }
                text={ 'Something' }
            />
        </ThemeProvider>
        
    );
  };
  
  export default Home;