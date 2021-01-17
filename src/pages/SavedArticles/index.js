import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import NewsCard from '../../components/NewsCard';
import NewsSection from '../../components/NewsSection';
import PageHeader from '../../components/PageHeader';
import { getBookmarks, removeBookmark } from '../../store/actions/bookmark';
import { ArticleLink, Container } from '../styles';

function SavedArticles({ bookmarks, getBookmarks }) {
  // const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    getBookmarks();
  }, []);

  useEffect(() => {
    const localStorageBookmarks = JSON.parse(
      localStorage.getItem('guardian-bookmark')
    );
    console.log('from saved', localStorageBookmarks.bookmarks);
    // setBookmarks((prevState) => [...prevState, localStorageBookmarks.bookmarks]);
  }, []);

  // const newsCards = bookmarks
  //   ? bookmarks.map((article) => {
  //       const imageUrl = article.fields.thumbnail;
  //       return (
  //         <ArticleLink to={'/' + article.id} key={article.id}>
  //           <NewsCard
  //             key={article.id}
  //             title={article.webTitle}
  //             imageSrc={imageUrl}
  //           />
  //         </ArticleLink>
  //       );
  //     })
  //   : 'no articles bookmarked';

  return (
    <Layout>
      <Container>
        <PageHeader title="All bookmarks" filter={true} />

        {/* <NewsSection>{newsCards}</NewsSection> */}
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarkReducer.bookmarks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBookmarks: () => dispatch(getBookmarks()),
    removeBookmark: (articleId) => dispatch(removeBookmark(articleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedArticles);
