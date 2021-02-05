import React from "react";

import placeholder from "../../assets/images/placeholder.svg";

import { Container, Media, TextContainer, Title, Headline } from "./styles";

function NewsCard({
  backgroundColor,
  borderBottom,
  headline = null,
  height,
  imageSrc,
  title,
  titleFontSize,
  titlePadding,
  titlePosition,
}) {
  return (
    <Container borderBottom={borderBottom}>
      {imageSrc ? (
        <Media src={imageSrc} />
      ) : (
        <Media src={placeholder} alt="The Peaks placeholder" />
      )}
      <TextContainer backgroundColor={backgroundColor} height={height}>
        <Title
          fontSize={titleFontSize}
          padding={titlePadding}
          position={titlePosition}
        >
          {title}
        </Title>
        {headline ? <Headline>{headline}</Headline> : null}
      </TextContainer>
    </Container>
  );
}

export default NewsCard;
