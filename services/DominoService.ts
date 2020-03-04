import { Domino } from '../components/Domino';

interface Dominos {
    dominos: Array<Domino>
}

const dominoKey = 'dominos';

export const addDomino = (domino : Domino) => {

    // get the current list of dominos out of storage

    let dominoList: Dominos = JSON.parse(localStorage.getItem(dominoKey) || JSON.stringify({ dominos: []}));

    // add the new domino to the list
    dominoList.dominos.push(domino)

    // store the new one added
    localStorage.setItem(dominoKey, JSON.stringify(dominoList));
};