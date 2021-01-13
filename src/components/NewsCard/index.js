import React from 'react';
import { Container, CoverImage, NewsTitle } from './styles';

function NewsCard({ title }) {
  return (
    <Container>
      <CoverImage />
      <NewsTitle>{title}</NewsTitle>
    </Container>
  );
}

export default NewsCard;
