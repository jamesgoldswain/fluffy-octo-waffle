import { css } from '@emotion/core';
import { ITheme } from '../lib/theme';

export const styles = (theme : ITheme) => {
  return css`
  /* rancho-regular - latin */
  @font-face {
    font-family: 'Rancho';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/rancho-v10-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Rancho Regular'), local('Rancho-Regular'),
         url('../fonts/rancho-v10-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('../fonts/rancho-v10-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('../fonts/rancho-v10-latin-regular.woff') format('woff'), /* Modern Browsers */
         url('../fonts/rancho-v10-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('../fonts/rancho-v10-latin-regular.svg#Rancho') format('svg'); /* Legacy iOS */
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    color: #333;
  }
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
