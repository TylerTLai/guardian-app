import React from 'react';
import NewsCard from '../NewsCard';
import { FlexContainer } from './styles';

function NewsSection({ title, image }) {
  return (
    <>
      <FlexContainer>
        <NewsCard title={title} />
      </FlexContainer>
    </>
  );
}

export default NewsSection;
