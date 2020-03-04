import * as React from 'react'
import PageHeader from '../components/PageHeader'
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../lib/theme';
import NewDomino from '../components/Domino';

const Home = () => {
    return (

        <ThemeProvider theme={theme}>
            <PageHeader
                title={ 'Welcome' }
                text={ 'Something' }
            />
            <NewDomino />
        </ThemeProvider>
        
    );
  };
  
  export default Home;