/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Formik, FieldArray } from 'formik';
import { styles } from './styles';
import { IDomino } from '../../interfaces/IDomino';
import { IDominos } from '../../interfaces/IDominos';
import Domino from '../Domino';

const DominoList = ({dominos} : IDominos) => {

  return (
    
    <div css={styles}>
    <h1>Your dominos!</h1>

    {
      dominos.map((domino: IDomino, index: number) => {
        return (
          <Domino key={domino.id} domino={domino} />
            );
          }
    )}

  </div>);
}
export default DominoList;