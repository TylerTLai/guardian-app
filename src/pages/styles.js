import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../styles/theme";

const { fontSizes } = theme;

export const Container = styled.div`
  padding: 0.4rem 10rem 7rem 10rem;
  /* render 100vh or 100% depending on if content exists */
  /* height: 100vh; */
  /* height: 100%;  */
`;

export const ArticleLink = styled(Link)`
  text-decoration: ${(props) => props.textDecoration || "none"};
  cursor: pointer;
  color: ${(props) => props.color};
`;

export const Heading = styled.h1`
  font-size: ${fontSizes.xl};
`;

export const SpinnerContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
`;
