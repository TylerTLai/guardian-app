import React from 'react';
import { Container, Media, Title } from './styles';

function NewsCard({ title, imageSrc }) {
  return (
    <Container>
      <Media src={imageSrc} />
      <Title>{title}</Title>
    </Container>
  );
}

export default NewsCard;
