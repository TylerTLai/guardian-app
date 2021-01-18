import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

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

  const newsCards =
    bookmarks.length > 0
      ? bookmarks.map((article) => {
          const imageUrl = article.fields.thumbnail
            ? article.fields.thumbnail
            : "";
          return (
            <ArticleLink to={'/' + article.id} key={uuidv4()}>
              <NewsCard
                key={uuidv4()}
                title={article.webTitle}
                imageSrc={imageUrl}
              />
            </ArticleLink>
          );
        })
      : 'No articles bookmarked.';

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
  return {
    bookmarks: state.bookmarkReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBookmarks: () => dispatch(getBookmarks()),
    removeBookmark: (articleId) => dispatch(removeBookmark(articleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedArticles);
