import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const header = styled.header``;

export const nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #10357b;
  color: #fff;
  height: 100px;
`;

export const navLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;
