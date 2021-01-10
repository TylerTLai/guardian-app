import React from 'react';
import { Nav, NavLink, NavLogo, NavMenu } from './styles';

function Navbar() {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <h1>LOGO</h1>
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
