
import NewDomino from "../components/NewDomino";
import { IDomino } from "../interfaces/IDomino";
import { addDomino, getDomino, updateDomino } from "../services/DominoService";
import { useRouter } from 'next/router'
import { Emoji } from "../lib/icons";
import React from "react";
import Router from 'next/router'
import PageTemplate from "../layout/PageTemplate";

const Domino = () => {

    const router = useRouter();
    let id = router.query.dominoId as string;
    let isNew: boolean = true;
    if (!id) {
        isNew = false;
    }
    const [domino, setDomino] = React.useState<IDomino>();

    React.useEffect(() => {
        setDomino(getDomino(id));
      }, []);
      
    return (
        <PageTemplate 
            main={<NewDomino domino={domino || { topIcon: Emoji.coffee, bottomIcon: Emoji.coffee, colour: 'white' } as IDomino} handleSubmit={(domino: IDomino) => { 
            isNew ? updateDomino(domino) : addDomino(domino);
            Router.push(`/`);
        }} />} />
    );
};
export default Domino;