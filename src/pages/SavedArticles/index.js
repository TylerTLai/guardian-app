import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';

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

  // console.log('what is bookmarks ', bookmarks);

  const newsCards = bookmarks.map((bookmarkObj) => {
    if (bookmarkObj.article) {
      const { article } = bookmarkObj;

      const imageUrl = article.fields.thumbnail
        ? bookmarkObj.article.fields.thumbnail
        : '';

      return (
        <ArticleLink to={'/' + article.id}>
          <NewsCard title={article.webTitle} imageSrc={imageUrl} />
        </ArticleLink>
      );
    }

    // console.log('bookmarkObj ', bookmarkObj);
  });

  // const newsCards =
  //   bookmarks.length > 1
  //     ? bookmarks.map((article) => {
  //         const imageUrl = article.fields.thumbnail
  //           ? article.fields.thumbnail
  //           : '';
  //         return (
  //           <ArticleLink to={'/' + article.id} key={uuidv4()}>
  //             <NewsCard
  //               key={uuidv4()}
  //               title={article.webTitle}
  //               imageSrc={imageUrl}
  //             />
  //           </ArticleLink>
  //         );
  //       })
  //     : '';

  // const newsCards =
  //   bookmarks.length >= 1
  //     ? bookmarks.map((bookmarkObj) => {
  //         const imageUrl = bookmarkObj.article.fields.thumbnail
  //           ? bookmarkObj.article.fields.thumbnail
  //           : '';
  //         return (
  //           <ArticleLink to={'/' + bookmarkObj.article.id} key={uuidv4()}>
  //             <NewsCard
  //               key={uuidv4()}
  //               title={bookmarkObj.article.webTitle}
  //               imageSrc={imageUrl}
  //             />
  //           </ArticleLink>
  //         );
  //       })
  //     : '';

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

  // return {
  //   bookmarks: state.bookmarkReducer.bookmarks,
  // };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBookmarks: () => dispatch(getBookmarks()),
    removeBookmark: (articleId) => dispatch(removeBookmark(articleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedArticles);
