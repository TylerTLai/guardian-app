import React from 'react';

import placeholder from '../../assets/images/placeholder.svg';

import { Container, Media, TextContainer, Title, Headline } from './styles';

function NewsCard({
  title,
  titleFontSize,
  backgroundColor,
  height,
  headline = null,
  imageSrc,
  borderBottom,
}) {
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
      <TextContainer backgroundColor={backgroundColor} height={height}>
        <Title
          // backgroundColor={backgroundColor}
          fontSize={titleFontSize}
          // height={height}
        >
          {title}
        </Title>
        {headline ? <Headline>{headline}</Headline> : null}
      </TextContainer>
    </Container>
  );
}

export default NewsCard;
