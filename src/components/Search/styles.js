import styled from "styled-components";
import theme from "../../styles/theme";
import { DebounceInput } from "react-debounce-input";

const { fontSizes, colors } = theme;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.royalBlue};
  align-items: center;
  border-bottom: 3px solid white;
  width: 95px;
  height: 40px;
  padding: 0.3rem 0.3rem 0.4rem 0.3rem;
  transition: 0.2s;

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
    outline: 0;
    width: 230px;
    display: inline-block;
    padding: .5rem .5rem .5rem .5rem;

    ::placeholder {
      color: ${colors.lightblue};
      visibility: visible;
    }
  `}
`;

export const SearchButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;

  & svg {
    fill: ${colors.white};
  }
`;
