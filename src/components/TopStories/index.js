import React from 'react';
import BookmarkButton from '../BookmarkButton';
import { Bottom, Container, Filter, Heading, Middle, Top } from './styles';

function TopStories() {
  return (
    <Container>
      <Top>
        <Heading>Top stories</Heading>
        <div>
          <BookmarkButton text="VIEW BOOKMARK" />
          <Filter>
            <option value="newest" selected="selected">
              Newest First
            </option>
            <option value="oldest">Oldest First</option>
          </Filter>
        </div>
      </Top>
      <Middle>middle</Middle>
      <Bottom>Bottom</Bottom>
    </Container>
  );
}

export default TopStories;
