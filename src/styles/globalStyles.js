import { createGlobalStyle } from 'styled-components';

import theme from '../styles/theme';

const { colors, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500;700&family=Open+Sans:wght@300;400&display=swap');

    * {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  font-size: ${fontSizes.md};
 

  & h1, h2, h3, h4 {
    color: ${colors.black};
    font-family: 'Frank Ruhl Libre', serif;
  }
    }

`;
export default GlobalStyle;
