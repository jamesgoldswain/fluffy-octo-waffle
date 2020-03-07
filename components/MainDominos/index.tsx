import * as React from 'react'
import PageHeader from '../../components/PageHeader'
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../../lib/theme';
import NewDomino from '../../components/NewDomino';
import { getDominos, addDomino, removeDominos } from '../../services/DominoService';
import { IDomino } from '../../interfaces/IDomino';
import DominoList from '../../components/DominoList';

const MainDominos = () => {

    const [dominoList, setDominoList] = React.useState<IDomino[]>();
  
    React.useEffect(() => {
      setDominoList(getDominos().dominos || [])
    }, []);
    
    let dominos = dominoList || [];
  
    return (
        <>

                <button
                    type="button"
                    onClick={() => { 
                        removeDominos();
                        setDominoList(getDominos().dominos);
                    } }
                    >Remove them
                </button>
                <DominoList dominos={dominos} />
                <NewDomino handleSubmit={(domino: IDomino) => { 
                    addDomino(domino);
                    setDominoList(getDominos().dominos);
                }} />

        </>
    );
  };
  
  export default MainDominos;