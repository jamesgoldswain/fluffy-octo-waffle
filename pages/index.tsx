import * as React from 'react'
import PageHeader from '../components/PageHeader'
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../lib/theme';
import NewDomino from '../components/Domino';
import DominoList from '../components/DominoList';
import { Dominos } from '../interfaces/Dominos';
import { getDominos } from '../services/DominoService';
import { Domino } from '../interfaces/Domino';

const Home = () => {
    return (

        <ThemeProvider theme={theme}>
            <PageHeader
                title={ 'Welcome' }
                text={ 'Something' }
            />
            <DominoList dominos={getDominos().dominos} />
            <NewDomino />
        </ThemeProvider>
        
    );
  };
  
  export default Home;