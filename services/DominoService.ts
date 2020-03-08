import { IDominos } from '../interfaces/IDominos';
import { IDomino } from '../interfaces/IDomino';
import { v4 as uuidv4 } from 'uuid';
import { Emoji } from '../lib/icons';

const dominoKey = 'dominos';

export const addDomino = (domino : IDomino) => {

    // get the current list of dominos out of storage

    let dominoList: IDominos = JSON.parse(localStorage.getItem(dominoKey) || JSON.stringify({ dominos: []}));

    domino.id = uuidv4();
    // add the new domino to the list
    dominoList.dominos.push(domino)

    // store the new one added
    localStorage.setItem(dominoKey, JSON.stringify(dominoList));
};

export const getDominos = () => {
    let dominoList: IDominos = JSON.parse(localStorage.getItem(dominoKey) || JSON.stringify({ dominos: []}));
    return dominoList;
};

export const getDomino = (id: string) => {
    let dominoList: IDominos = JSON.parse(localStorage.getItem(dominoKey) || JSON.stringify({ dominos: []}));
    return dominoList.dominos.find(d => d.id === id);
};

export const removeDominos = () => {
    let dominos = { dominos: []}
    localStorage.setItem(dominoKey, JSON.stringify(dominos));
    return dominos;
};
