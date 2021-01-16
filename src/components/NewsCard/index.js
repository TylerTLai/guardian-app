import React from 'react';
import { Container, Media, Title } from './styles';

import placeholder from '../../assets/images/Placeholder.png';

function NewsCard({ title, titleFontSize, imageSrc, borderBottom }) {
  return (
    <Container borderBottom={borderBottom}>
      {imageSrc ? (
        <Media src={imageSrc} />
      ) : (
        <img
          src={placeholder}
          width="100%"
          height="auto"
          alt="The Peaks placeholder"
        />
      )}
      <Title fontSize={titleFontSize}>{title}</Title>
    </Container>
  );
}

export default NewsCard;
