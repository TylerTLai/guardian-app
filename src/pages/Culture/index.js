import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../../store/actions/news';

import Layout from '../../components/Layout';
import NewsCard from '../../components/NewsCard';
import NewsSection from '../../components/NewsSection';

import { Container, Heading } from '../styles';

function Culture({ articles, fetchArticles, location, section }) {
  useEffect(() => {
    const section = location.pathname;
    fetchArticles(section);
  }, []);

  const newsCards = articles.map((article) => {
    return <NewsCard key={article.id} title={article.webTitle} />;
  });

  return (
    <Layout>
      <Container>
        <Heading>{section}</Heading>
        <NewsSection>{newsCards}</NewsSection>
      </Container>
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
    fetchArticles: (section) => dispatch(fetchArticles(section)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Culture);
// export default Culture;
