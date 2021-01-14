import styled from 'styled-components';
import theme from '../../styles/theme';

const { fontSizes, colors } = theme;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 3px solid white;
`;

export const SearchInput = styled.input`
  font-size: ${fontSizes.md};
  padding: 0.5rem;
  border: 0;
  color: ${colors.white};
  background-color: transparent;
  width: 0px;
  cursor: pointer;
  background: rgb(255, 255, 255) url(https://i.imgur.com/seveWIw.png) no-repeat
    center center;
  transition: 0.3s;

  ::placeholder {
    visibility: hidden;
  }

  &:focus {
    cursor: text;
    background-color: ${colors.transparentWhite};
    outline: 0;
    width: 230px;
    padding-left: 1.5rem;
    background: rgb(255, 255, 255) url(https://i.imgur.com/seveWIw.png)
      no-repeat left center;

    ::placeholder {
      color: ${colors.lightblue};
      visibility: visible;
    }
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  &:focus {
    background-color: red;
  }
`;
