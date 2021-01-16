import React from 'react';
import { Container, Media, Title } from './styles';

function NewsCard({ title, titleFontSize, imageSrc }) {
  return (
    <Container>
      <Media src={imageSrc} />
      <Title fontSize={titleFontSize}>{title}</Title>
    </Container>
  );
}

export default NewsCard;
