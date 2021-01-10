import React from 'react';
import * as styled from './styles';

function Navbar() {
  return (
    <styled.header>
      <styled.nav>
        <styled.navLink to="/">NEWS TODAY</styled.navLink>
        <styled.navLink to="/sports">SPORTS</styled.navLink>
        <styled.navLink to="/culture">CULTURE</styled.navLink>
        <styled.navLink to="/lifestyle">LIFESTYLE</styled.navLink>
      </styled.nav>
    </styled.header>
  );
}

export default Navbar;
