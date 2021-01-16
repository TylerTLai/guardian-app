import styled from 'styled-components';
import theme from '../../styles/theme';

const { fontSizes, colors } = theme;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.royalBlue};
  align-items: center;
  border-bottom: 3px solid white;
  width: 95px;
  padding: 0.3rem 0.3rem 0.4rem 0.3rem;
  transition: 0.3s;

  ${(props) =>
    props.active &&
    `
    width: 230px;
    background-color: ${colors.mediumBlue};
  `}
`;

export const SearchInput = styled.input`
  font-size: ${fontSizes.md};
  border: 0;
  color: ${colors.white};
  background-color: transparent;
  width: 0px;
  cursor: pointer;
  transition: 0.3s;

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
