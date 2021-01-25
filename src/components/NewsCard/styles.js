import styled from 'styled-components';

import theme from '../../styles/theme';

const { colors, fontSizes } = theme;

export const Container = styled.div`
  border-bottom: ${(props) =>
    props.borderBottom || `3px solid ${colors.mediumRed}`};
  /* border-bottom: 3px solid ${colors.mediumRed}; */
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  height: 350px;
  justify-content: center;
  padding: 0;
  position: relative;
  width: 350px;
`;

export const Media = styled.img`
  height: auto;
  object-fit: cover;
  width: 100%;
`;

export const Title = styled.h1`
  background-color: ${colors.transparentBlue};
  bottom: 0;
  color: ${colors.white};
  font-size: ${(props) => props.fontSize || fontSizes.lg};
  font-weight: 200;
  margin: 0;
  position: absolute;
  padding: 1rem;
  width: 100%;
  height: ${(props) => props.height || '40%'};
`;

export const Body = styled.p``;
