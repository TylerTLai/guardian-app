import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";

import theme from "../../styles/theme";

const { fontSizes, colors } = theme;

export const Container = styled.div`
  align-items: center;
  background-color: ${colors.royalBlue};
  border-bottom: 3px solid white;
  display: flex;
  height: 40px;
  justify-content: center;
  padding: 0.3rem 0.3rem 0.4rem 0.3rem;
  transition: 0.2s;
  width: 95px;
  
  ${(props) =>
    props.active &&
    `
    width: 230px;
    background-color: ${colors.mediumBlue};
  `}

  @media (max-width: 1024px) {
    width: 100%;
    display: ${(props) => props.display || "none"};
    padding: 1.5em .5rem;
  }
`;

export const SearchInput = styled(DebounceInput)`
  font-size: ${fontSizes.md};
  border: 0;
  color: ${colors.white};
  background-color: transparent;
  width: 0;
  display: none;
  cursor: pointer;
  transition: 0.2s;

  ::placeholder {
    visibility: hidden;
  }

  ${(props) =>
    props.active &&
    `
    cursor: text;
    background-color: ${colors.transparentWhite};
    display: inline-block;
    outline: 0;
    padding: .5rem .5rem .5rem .5rem;
    width: 230px;

    ::placeholder {
      color: ${colors.lightblue};
      visibility: visible;
    }
  `}
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: 0;

  & svg {
    fill: ${colors.white};
  }
`;
