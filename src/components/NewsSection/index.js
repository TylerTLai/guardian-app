import React from 'react';
import { GridContainer } from './styles';

function NewsSection({ children }) {
  return (
    <>
      <GridContainer>{children}</GridContainer>
    </>
  );
}

export default NewsSection;
