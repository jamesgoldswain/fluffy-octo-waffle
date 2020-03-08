import { css } from '@emotion/core';
import { ITheme } from '../../lib/theme';

export const styles = (theme : ITheme) => {
  return css`

  select {
    width: 80%
  }
  div {
    height: 120px;
    width: 120px;
    border: solid 1px #000;
    padding: 5px;
  }

  .top {
    border-radius: 10px 10px 0 0;
  }
  .bottom {
    border-radius: 0 0 10px 10px;
  }

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
