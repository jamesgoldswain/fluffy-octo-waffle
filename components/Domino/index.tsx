/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './styles';
import { Emoji } from '../../lib/icons';
import { IDomino } from '../../interfaces/IDomino';

const Domino = ({domino} : any) => {
  return (
    
    <div css={styles}>
      <div className='top'>{domino.topIcon}</div>
      <div className='bottom'>{domino.bottomIcon}</div>
    </div>);
}
export default Domino;