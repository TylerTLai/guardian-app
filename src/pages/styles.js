import styled from 'styled-components';
import theme from '../styles/theme';

const { fontSizes } = theme;

export const Container = styled.div`
  padding: 0.5rem 10rem 0rem 10rem;
`;

export const Heading = styled.h1`
  font-size: ${fontSizes.xl};
`;
