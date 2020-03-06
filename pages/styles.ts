import { css } from '@emotion/core';
import { ITheme } from '../lib/theme';

export const styles = (theme : ITheme) => {
  return css`
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    color: #333;
    font-family: sans-serif;
  }
  p {
    margin: 0;
  }
`;
};
