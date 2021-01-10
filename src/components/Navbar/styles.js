import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

import theme from '../../styles/theme';

const { colors } = theme;

export const Nav = styled.nav`
  background-color: ${colors.royalBlue};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr, 1fr;
  align-items: center;
  height: 125px;
  grid-template-areas:
    'NavLogo'
    'FlexContainer';
`;

export const NavLogo = styled(Link)`
  grid-area: NavLogo;
  cursor: pointer;
`;

export const FlexContainer = styled.div`
  grid-area: FlexContainer;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

export const NavSearch = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 3px solid white;
  width: 100px;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  cursor: pointer;
  border-bottom: 3px solid;
  border-color: ${({ color }) => color || `${colors.red}`};
  padding: 1rem 3rem 0.4rem 3rem;
  width: 200px;
  text-align: center;
`;
