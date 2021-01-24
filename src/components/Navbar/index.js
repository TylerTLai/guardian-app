import React from 'react';

import logo from '../../assets/images/the-peaks-logo.svg';
import Search from '../Search';

import {
  GridContainer,
  Nav,
  NavLink,
  NavLogo,
  NavMenu,
  NavSearch,
} from './styles';

import theme from '../../styles/theme';

const { colors } = theme;

function Navbar() {
  return (
    <Nav>
      <NavLogo to="/">
        <img src={logo} alt="The Peaks logo" width="150px" height="auto" />
      </NavLogo>
      <GridContainer>
        <NavMenu>
          <NavLink to="/" color={colors.green}>
            NEWS TODAY
          </NavLink>
          <NavLink to="/sport" color={colors.red}>
            SPORTS
          </NavLink>
          <NavLink to="/culture" color={colors.yellow}>
            CULTURE
          </NavLink>
          <NavLink to="/lifeandstyle" color={colors.blue}>
            LIFESTYLE
          </NavLink>
        </NavMenu>
        <Search />
      </GridContainer>
    </Nav>
  );
}

export default Navbar;
