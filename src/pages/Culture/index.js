import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../../store/actions/news';

import Layout from '../../components/Layout';
import NewsCard from '../../components/NewsCard';
import NewsSection from '../../components/NewsSection';

import { ArticleLink, Container, Heading } from '../styles';

function Culture({ articles, fetchArticles, location }) {
  useEffect(() => {
    const section = location.pathname;
    fetchArticles(section);
  }, []);

  const newsCards = articles.map((article) => {
    return (
      <ArticleLink to={'/' + article.id} key={article.id}>
        <NewsCard title={article.webTitle} />
      </ArticleLink>
    );
  });

  return (
    <Layout>
      <Container>
        <Heading>Culture</Heading>
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

export default connect(mapStateToProps, mapDispatchToProps)(Culture);
