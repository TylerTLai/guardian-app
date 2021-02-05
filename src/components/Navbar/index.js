import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

import logo from "../../assets/images/the-peaks-logo.svg";
import Search from "../Search";

import {
  FlexContainer,
  HamburgerButton,
  Nav,
  NavLink,
  NavLogo,
  NavMenu,
  NavMobileMenu,
} from "./styles";

import theme from "../../styles/theme";

const { colors } = theme;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
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
          <HamburgerButton onClick={() => handleMenuClick()}>
            <BiMenu size={50} color={`${colors.white}`} />
          </HamburgerButton>
          <Search />
        </FlexContainer>
      </Nav>
      {/* mobile menu */}
      <NavMobileMenu display={menuOpen ? "flex" : "none"}>
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
        <Search display={menuOpen ? "flex" : "none"} />
      </NavMobileMenu>
    </>
  );
}

export default Navbar;
