import React from 'react';

import placeholder from '../../assets/images/placeholder.svg';

import { Container, Media, Title } from './styles';

function NewsCard({ title, titleFontSize, height, imageSrc, borderBottom }) {
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
      <Title fontSize={titleFontSize} height={height}>
        {title}
      </Title>
    </Container>
  );
}

export default NewsCard;
