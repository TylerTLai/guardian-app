import React from "react";
import { connect } from "react-redux";

import BookmarkButton from "../../components/BookmarkButton";
import {
  BookmarkSortContainer,
  Container,
  Heading,
  SortDropdown,
  SortArrow,
  SortStyling,
} from "./styles";

import { ArticleLink } from "../../pages/styles";
import { sortArticles } from "../../store/actions/articles";

function PageHeader({ title, bookmarkText, sort, sortArticles }) {
  const handleSortSelect = (e) => {
    sortArticles(e.target.value);
  };

  return (
    <Container>
      <Heading>{title}</Heading>
      <BookmarkSortContainer>
        <ArticleLink to="/saved-articles">
          {bookmarkText && <BookmarkButton text={bookmarkText} />}
        </ArticleLink>
        {sort && (
          <SortStyling>
            <SortArrow />
            <SortDropdown
              defaultValue="newest"
              onChange={(e) => handleSortSelect(e)}
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </SortDropdown>
          </SortStyling>
        )}
      </BookmarkSortContainer>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortArticles: (sortValue) => dispatch(sortArticles(sortValue)),
  };
};

export default connect(null, mapDispatchToProps)(PageHeader);
