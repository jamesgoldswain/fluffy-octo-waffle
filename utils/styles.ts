import { css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import { ITheme } from '../lib/theme';

export const globalStyles = (theme : ITheme) => css`
  ${emotionNormalize}
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Fira Sans';
    background: ${theme.colors.orange};
    color: ${theme.colors.doveGrey};
    overflow-x: hidden;
  }
`;
