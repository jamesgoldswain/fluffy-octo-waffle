import { css } from '@emotion/core';
import { ITheme } from '../../lib/theme';

export const styles = (theme : ITheme) => {
  return css`
  width: 80%;
  background-color: #fff;
  margin-left: auto:
  margin-right: auto;
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

  span {
    font-size: 25pt;
  }
  p {
    margin: 0;
  }
`;
};
