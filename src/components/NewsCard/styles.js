import styled from 'styled-components';

import theme from '../../styles/theme';

const { colors, fontSizes } = theme;

export const Container = styled.div`
  border-bottom: 3px solid ${colors.mediumRed};
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
  font-size: ${fontSizes.lg};
  font-weight: 200;
  height: 40%;
  margin: 0;
  position: absolute;
  padding: 1rem;
`;

export const Body = styled.p``;
