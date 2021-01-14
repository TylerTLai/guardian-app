import styled from 'styled-components';

import theme from '../../styles/theme';

const { fontSizes, colors } = theme;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-areas: 1fr 1fr;
  padding: 1rem 10rem 1rem 10rem;
  grid-template-areas:
    'heading ...'
    'article image';
`;

export const ArticleContainer = styled.div`
  grid-area: article;
`;

export const ImageContainer = styled.div`
  grid-area: image;
`;

export const HeadingContainer = styled.div`
  grid-area: heading;
`;

export const Image = styled.img`
  width: 450px;
  height: 275px;
`;

export const Caption = styled.p`
  font-size: ${fontSizes.sm};
  color: ${colors.gray};
`;

export const Title = styled.h1``;
