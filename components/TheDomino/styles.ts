import { css } from '@emotion/core';
import { ITheme } from '../../lib/theme';

export const styles = (theme : ITheme) => {
  return css`

  input {
    padding-top:20px;
    width: 100%;
    font-size: 25pt;
    border: 0;
    text-align: center;
  }

  div {
    height: 120px;
    width: 120px;
    border: solid 1px #000;
    padding: 5px;
  }

  .emojiChoice:hover {
    transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

  .emojiChoice {
    font-size: 12pt;
    cursor: grab;
    transition: transform .2s; /* Animation */
  }

  .emojiChoice:hover {
    transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
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
    color: ${theme.colors.yellow};
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
