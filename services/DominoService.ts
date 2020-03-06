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
    let dominoList: Dominos = JSON.parse(localStorage.getItem(dominoKey) || JSON.stringify({ dominos: []}));
    return dominoList;
};

export const removeDominos = () => {
    let dominos = { dominos: []}
    localStorage.setItem(dominoKey, JSON.stringify(dominos));
    return dominos;
};
