import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

import theme from "../../styles/theme";

const { colors } = theme;

export const Nav = styled.nav`
  background-color: ${colors.royalBlue};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 300px;
  width: 100%;
  border: 3px solid gold;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
