import styled from 'styled-components';

import theme from '../../styles/theme';

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
  width: 100%;
  border: 5px solid pink;
`;

export const TextContainer = styled.div`
  background-color: ${(props) =>
    props.backgroundColor || colors.red};
  display: flex;
  height: ${(props) => props.height || '100px'};
  flex-direction: column;
  justify-content: flex-end;
  border: 5px solid green;
  position: absolute;
  bottom: 0;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: ${(props) => props.fontSize || fontSizes.lg};
  font-weight: 300;
  margin: 0;
  padding: 1rem 1rem 0.2rem 1rem;
  width: 100%;
  border: 5px solid orange;
`;

export const Headline = styled.h2`
  color: ${colors.white};
  font-size: ${(props) => props.fontSize || fontSizes.md};
  border: 5px solid purple;
  font-weight: 100;
  margin-top: 0;
  padding: 0 1rem 1rem 1rem;
  width: 100%;
`;

export const Body = styled.p``;
