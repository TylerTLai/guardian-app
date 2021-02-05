import React from "react";
import { connect } from "react-redux";

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
import { sortArticles } from "../../store/actions/articles";

function PageHeader({ title, bookmarkText, filter, sortArticles }) {
  const handleFilterChange = (e) => {
    sortArticles(e.target.value);
  };

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
            <Filter
              defaultValue="newest"
              // value={sortValue}
              onChange={(e) => handleFilterChange(e)}
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </Filter>
          </FilterStyling>
        )}
      </BookmarkFilterContainer>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortArticles: (sortValue) => dispatch(sortArticles(sortValue)),
  };
};

export default connect(null, mapDispatchToProps)(PageHeader);
