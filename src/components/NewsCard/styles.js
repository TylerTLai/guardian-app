import styled from 'styled-components';

import theme from '../../styles/theme';

const { colors, fontSizes } = theme;

export const Container = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid red;
  margin: 1rem;
`;

export const CoverImage = styled.img``;

export const NewsTitle = styled.h1`
  color: ${colors.white};
  background-color: ${colors.royalBlue};
`;
