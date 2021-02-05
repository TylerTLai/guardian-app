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

  @media (max-width: 1024px) {
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  display: inline-block;
`;

export const HamburgerButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  display: none;

  & svg {
    fill: ${colors.white};
  }
  @media (max-width: 1024px) {
    display: inline-block;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 1024px) {
    flex-wrap: nowrap;
    align-items: center;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavMobileMenu = styled.div`
  display: none;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: ${(props) => props.display || "none"};
    flex-direction: column;
    width: 100%;
  }
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
  transition: 0.2s;

  &:hover {
    border-bottom: 8px solid;
    border-color: ${({ color }) => color || `${colors.red}`};
    padding: 1rem 3rem 0 3rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1.5rem;

    &:hover {
      border-bottom: 3px solid;
      border-color: ${({ color }) => color || `${colors.red}`};
      padding: 1.5rem;
    }
  }
`;
