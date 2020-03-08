/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './styles';
import { IDomino } from '../../interfaces/IDomino';
import Domino from '../Domino';
import Router from 'next/router'

interface IP {
  dominos: IDomino[]
  handleOnClick: any
}
const DominoList = ({dominos}: any) => {
  return (
    <div css={styles}>
    <h1>Your dominojis!</h1>
    <div className='dominos'>
    {
      dominos.map((domino: IDomino, index: number) => {
        return (
          <Domino key={domino.id} domino={domino} handleSubmit={() => { 
            Router.push({
              pathname: '/domino',
              query: { dominoId: domino.id },
            })
          } }/>
          );
        }
      )}
    </div>
    
  </div>
  );
}
export default DominoList;
