import React from 'react';
import NewsCard from '../NewsCard';
import { FlexContainer, Heading } from './styles';

function NewsSection() {
  return (
    <>
      <Heading>Sports</Heading>
      <FlexContainer>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </FlexContainer>
    </>
  );
}

export default NewsSection;
