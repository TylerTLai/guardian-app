import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  background-color: #10357b;
  color: #fff;
  width: 100%;
  height: 125px;
`;

export const NavLogo = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;
