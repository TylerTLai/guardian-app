import React from 'react';
import { Container, CoverImage, NewsTitle } from './styles';

function NewsCard() {
  return (
    <Container>
      <CoverImage />
      <NewsTitle>Title</NewsTitle>
    </Container>
  );
}

export default NewsCard;
