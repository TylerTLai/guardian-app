import { createGlobalStyle } from 'styled-components';

import theme from '../styles/theme';

const { colors, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`
    * {
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${fontSizes.md};

  & h1, h2, h3, h4 {
    color: ${colors.black};
  }
    }

`;
export default GlobalStyle;
