import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import NewsCard from '../../components/NewsCard';
import NewsSection from '../../components/NewsSection';
import PageHeader from '../../components/PageHeader';
import { getBookmarks, removeBookmark } from '../../store/actions/bookmark';

import { ArticleLink, Container } from '../styles';

function SavedArticles({ bookmarks, getBookmarks }) {
  useEffect(() => {
    getBookmarks();
  }, []);

  const newsCards = bookmarks
    ? bookmarks.map((bookmark) => {
        if (bookmark) {
          const imageUrl = bookmark.fields.thumbnail
            ? bookmark.fields.thumbnail
            : '';

          return (
            <ArticleLink to={'/' + bookmark.id} key={bookmark.id}>
              <NewsCard title={bookmark.webTitle} imageSrc={imageUrl} />
            </ArticleLink>
          );
        }
      })
    : null;

  return (
    <Layout>
      <Container>
        <PageHeader title="All bookmarks" filter={true} />
        <NewsSection>{newsCards}</NewsSection>
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  const { bookmarks } = state.bookmarkReducer;

  if (bookmarks) {
    return {
      bookmarks,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBookmarks: () => dispatch(getBookmarks()),
    removeBookmark: (articleId) => dispatch(removeBookmark(articleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedArticles);
