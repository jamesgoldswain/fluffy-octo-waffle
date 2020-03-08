import * as React from 'react'
import NewDomino from '../../components/NewDomino';
import { getDominos, addDomino, removeDominos } from '../../services/DominoService';
import { IDomino } from '../../interfaces/IDomino';
import DominoList from '../../components/DominoList';
import Router from 'next/router'

const MainDominos = () => {

    const [dominoList, setDominoList] = React.useState<IDomino[]>();

    React.useEffect(() => {
      setDominoList(getDominos().dominos || [])
    }, []);
    
    let dominos = dominoList || [];
    let dominoView = dominos.length > 0 ? <DominoList dominos={dominos} /> : <span>no dominos :..(</span>

    return (
        <>
            <button
                type="button"
                onClick={() => { 
                    removeDominos();
                    setDominoList(getDominos().dominos);
                }}
                >Remove them
            </button>
            <button
                type="button"
                onClick={() => { 
                    Router.push(`/domino/`)
                }}
                >Add one
            </button>
            { dominoView }
        </>
    );
  };
  
  export default MainDominos;