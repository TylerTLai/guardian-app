import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../../store/actions/news';

import Layout from '../../components/Layout';
import NewsCard from '../../components/NewsCard';
import NewsSection from '../../components/NewsSection';

import { Container } from '../styles';
import { Heading } from './styles';

function Sports({ fetchArticles, articles, location }) {
  useEffect(() => {
    const section = location.pathname.slice(1, 6);
    fetchArticles(section);
  }, []);

  const newsCards = articles.map((article) => {
    return <NewsCard key={article.id} title={article.webTitle} />;
  });

  return (
    <Layout>
      <Container>
        <Heading>Sports</Heading>
        <NewsSection>{newsCards}</NewsSection>
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: (section) => dispatch(fetchArticles(section)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sports);
