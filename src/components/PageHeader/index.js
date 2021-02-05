import React from "react";

import BookmarkButton from "../../components/BookmarkButton";
import {
  BookmarkFilterContainer,
  Container,
  Heading,
  Filter,
  FilterArrow,
  FilterStyling,
} from "./styles";

import { ArticleLink } from "../../pages/styles";

function PageHeader({ title, bookmarkText, filter }) {
  return (
    <Container>
      <Heading>{title}</Heading>
      <BookmarkFilterContainer>
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
      </BookmarkFilterContainer>
    </Container>
  );
}

export default PageHeader;
