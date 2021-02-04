import React from "react";

import logo from "../../assets/images/the-peaks-logo.svg";
import Search from "../Search";

import { FlexContainer, Nav, NavLink, NavLogo, NavMenu } from "./styles";

import theme from "../../styles/theme";

const { colors } = theme;

function Navbar() {
  return (
    <Nav>
      <NavLogo to="/">
        <img src={logo} alt="The Peaks logo" width="150px" height="auto" />
      </NavLogo>
      <FlexContainer>
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
      </FlexContainer>
    </Nav>
  );
}

export default Navbar;
