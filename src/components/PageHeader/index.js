import React from 'react';

import BookmarkButton from '../../components/BookmarkButton';
import {
  BFContainer,
  Container,
  Heading,
  Filter,
  FilterArrow,
  FilterStyling,
} from './styles';

import { ArticleLink } from '../../pages/styles';

function PageHeader({ title, bookmarkText, filter }) {
  return (
    <Container>
      <Heading>{title}</Heading>
      <BFContainer>
        <ArticleLink to="/saved-articles">
          {bookmarkText && <BookmarkButton text={bookmarkText} />}
        </ArticleLink>
        {filter && (
          <FilterStyling>
            <FilterArrow />
            <Filter defaultValue="newest">
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </Filter>
          </FilterStyling>
        )}
      </BFContainer>
    </Container>
  );
}

export default PageHeader;
