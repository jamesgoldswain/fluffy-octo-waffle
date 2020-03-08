
import NewDomino from "../components/NewDomino";
import { IDomino } from "../interfaces/IDomino";
import { addDomino, getDomino } from "../services/DominoService";
import { useRouter } from 'next/router'
import { Emoji } from "../lib/icons";
import React from "react";
import Router from 'next/router'
import PageTemplate from "../layout/PageTemplate";

const Domino = () => {

    const router = useRouter();
    let id = router.query.dominoId as string;
  
    const [domino, setDomino] = React.useState<IDomino>();

    React.useEffect(() => {
        setDomino(getDomino(id));
      }, []);
      
    return (
        <>Hello!</>,
        <PageTemplate 
            main={<NewDomino domino={domino || { topIcon: Emoji.none, bottomIcon: Emoji.none, colour: 'white' } as IDomino} handleSubmit={(domino: IDomino) => { 
            addDomino(domino);
            Router.push(`/`)
        }} />} />
    );
};
export default Domino;