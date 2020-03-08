import { css } from '@emotion/core';
import { ITheme } from '../../lib/theme';

export const styles = (theme : ITheme) => {
  return css`
  background-color: #FFF;
  border-bottom: solid 2px #000;
  margin-bottom: 10px;
  
  h1 {
    margin: 0;
    padding: 0;
    color: ${theme.colors.black};
    font-size: 3.125rem;
    font-weight: 400;

    span {
      font-weight: 900;
    }
  }

  p {
    margin: 0;
  }
`;
};
