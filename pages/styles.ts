import { css } from '@emotion/core';
import { ITheme } from '../lib/theme';

export const styles = (theme : ITheme) => {
  return css`
  p {
    margin: 0;
  }
  .container {
    width:80%;
    margin-left: auto;
    margin-right: auto;
  }
`;
};
