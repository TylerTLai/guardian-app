import React from 'react';
import { Nav, NavLink, NavLogo, NavMenu } from './styles';

import logo from '../../assets/images/the-peaks-logo.png';

function Navbar() {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <img src={logo} alt="The Peaks logo" />
        </NavLogo>
        <NavMenu>
          <NavLink to="/">NEWS TODAY</NavLink>
          <NavLink to="/sports">SPORTS</NavLink>
          <NavLink to="/culture">CULTURE</NavLink>
          <NavLink to="/lifestyle">LIFESTYLE</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
