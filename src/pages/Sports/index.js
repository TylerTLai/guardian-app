import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../../store/actions/news';
import Layout from '../../components/Layout';
import NewsSection from '../../components/NewsSection';

import { Heading } from './styles';

function Sports({ fetchArticles, articles, section }) {
  useEffect(() => {
    fetchArticles();
  }, []);

  const newsSection = articles.map((article) => {
    return <NewsSection key={article.id} title={article.webTitle} />;
  });

  return (
    <Layout>
      <Heading>{section}</Heading>
      {newsSection}
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    section: state.section,
    articles: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => dispatch(fetchArticles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sports);
