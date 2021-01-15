import styled from 'styled-components';

import theme from '../../styles/theme';

const { fontSizes, colors } = theme;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-areas: 1fr 1fr;
  padding: 5rem 10rem 5rem 10rem;
  grid-column-gap: 30px;
  grid-template-areas:
    'heading ...'
    'article image';
`;

export const ArticleContainer = styled.div`
  grid-area: article;
  font-size: ${fontSizes.sm};
  line-height: 1.5;
`;

export const ImageContainer = styled.div`
  grid-area: image;
  margin-top: 1rem;
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

export const Date = styled.p`
  font-size: ${fontSizes.sm};
  color: ${colors.gray};
  text-transform: uppercase;
  font-family: Calibri, 'Trebuchet MS', sans-serif;
`;

export const Title = styled.h1`
  font-size: ${fontSizes.xl};
  letter-spacing: 0.5px;
`;
export const Headline = styled.h2`
  font-size: ${fontSizes.lg};
  line-height: 1.5;
  letter-spacing: 0.5px;
`;

export const Divider = styled.hr`
  border-top: 1px solid ${colors.lightGray};
`;
