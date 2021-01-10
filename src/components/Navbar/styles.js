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
  width: 100%;
  height: 125px;
  grid-template-areas:
    'NavLogo ...'
    'NavMenu NavSearch';
`;

export const NavLogo = styled(Link)`
  grid-area: NavLogo;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  grid-area: NavMenu;
`;

export const NavSearch = styled.div`
  grid-area: NavSearch;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  cursor: pointer;
`;
