import { createGlobalStyle } from "styled-components";
import theme from "../styles/theme";

const { colors } = theme;

const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
  box-sizing: border-box;
  color: ${colors.black};
  font-family: 'Open Sans', sans-serif;

  & h1, h2, h3, h4 {
    font-family: 'Frank Ruhl Libre', serif;
    }
  }
`;

export default GlobalStyle;
