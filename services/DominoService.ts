import { Dominos } from '../interfaces/Dominos';
import { Domino } from '../interfaces/Domino';

const dominoKey = 'dominos';

export const addDomino = (domino : Domino) => {

    // get the current list of dominos out of storage

    let dominoList: Dominos = JSON.parse(localStorage.getItem(dominoKey) || JSON.stringify({ dominos: []}));

    // add the new domino to the list
    dominoList.dominos.push(domino)

    // store the new one added
    localStorage.setItem(dominoKey, JSON.stringify(dominoList));
};

export const getDominos = () => {

    // get the current list of dominos out of storage

    let dominoList: Dominos = { dominos: [
        { colour: 'red', value:10 },
        { colour: 'green', value:10},
        { colour: 'blue', value:10},
        { colour: 'orange', value:10},
        { colour: 'purple', value:10}
    ]};

    // add the new domino to the list
    return dominoList

};
