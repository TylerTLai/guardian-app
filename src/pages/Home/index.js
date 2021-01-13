import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import NewsSection from '../../components/NewsSection';
import { fetchArticles } from '../../store/actions/news';
import { Container } from '../styles';

function Home({ fetchArticles, news }) {
  useEffect(() => {
    fetchArticles();
  }, []);

  // console.log(news);

  // const stories = news.map((newsArticle) => {
  //   return <NewsSection title={newsArticle.webTitle} />;
  // });

  return (
    <Layout>
      <Container>test</Container>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    news: state.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => dispatch(fetchArticles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
