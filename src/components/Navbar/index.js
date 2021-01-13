import React from 'react';
import {
  GridContainer,
  Nav,
  NavLink,
  NavLogo,
  NavMenu,
  NavSearch,
} from './styles';

import Search from '../Search';
import logo from '../../assets/images/the-peaks-logo.png';

import theme from '../../styles/theme';

const { colors } = theme;

function Navbar() {
  return (
    <Nav>
      <NavLogo to="/">
        <img src={logo} alt="The Peaks logo" />
      </NavLogo>
      <GridContainer>
        <NavMenu>
          <NavLink to="/" color={colors.green}>
            NEWS TODAY
          </NavLink>
          <NavLink to="/sports" color={colors.red}>
            SPORTS
          </NavLink>
          <NavLink to="/culture" color={colors.yellow}>
            CULTURE
          </NavLink>
          <NavLink to="/lifestyle" color={colors.blue}>
            LIFESTYLE
          </NavLink>
        </NavMenu>
        <NavSearch>
          <Search />
        </NavSearch>
      </GridContainer>
    </Nav>
  );
}

export default Navbar;
