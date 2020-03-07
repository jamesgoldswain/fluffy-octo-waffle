import { css } from '@emotion/core';
import { ITheme } from '../../lib/theme';

export const styles = (theme : ITheme) => {
  return css`

  div {
    height: 50px;
    width: 50px;
    background-color: #FFF;
    border: solid 1px #000;
    padding: 5px;
    
  }
  cursor: grab;
  font-size: 20pt;
  text-align: center;

  .top {
    border-radius: 10px 10px 0 0;
  }
  .bottom {
    border-radius: 0 0 10px 10px;
  }
  
`;
};
