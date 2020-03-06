import { css } from '@emotion/core';
import { ITheme } from '../../lib/theme';

export const styles = (theme : ITheme) => {
  return css`
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
  select {
    margin: 10px;
    font-size: 22pt;
    min-height:35pt;
  }
  p {
    margin: 0;
  }
`;
};
