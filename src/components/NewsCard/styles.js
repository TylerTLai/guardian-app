import styled from "styled-components";

import theme from "../../styles/theme";

const { colors, fontSizes } = theme;

export const Container = styled.div`
  border-bottom: ${(props) =>
    props.borderBottom || `3px solid ${colors.mediumRed}`};
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Media = styled.img`
  height: auto;
  object-fit: cover;
  object-position: top left;
  width: 100%;
`;

export const TextContainer = styled.div`
  background-color: ${(props) =>
    props.backgroundColor || colors.transparentBlue};
  display: flex;
  height: ${(props) => props.height || "auto"};
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: ${(props) => props.fontSize || fontSizes.lg};
  font-weight: 300;
  margin-bottom: 0.1rem;
  padding: ${(props) => props.padding || "0.3rem 1rem 1rem 1rem"};
  width: 100%;
  position: ${(props) => props.position || "static"};
  top: 0;
  line-height: 1.3;
`;

export const Headline = styled.h2`
  color: ${colors.white};
  font-size: ${(props) => props.fontSize || fontSizes.md};
  font-weight: 100;
  padding: ${(props) => props.padding || "0 1rem 0.5rem 1rem"};
  width: 100%;
  line-height: 1.3;
`;

export const Body = styled.p``;
