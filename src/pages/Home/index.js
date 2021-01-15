import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../../store/actions/news';

import Layout from '../../components/Layout';
import NewsCard from '../../components/NewsCard';
import NewsSection from '../../components/NewsSection';

import { Container, Heading } from '../styles';

function Home({ articles, fetchArticles }) {
  useEffect(() => {
    const section = 'world';
    fetchArticles(section);
  }, []);

  const newsCards = articles.map((article) => {
    const imageUrl = article.blocks.main.elements[0].assets[0].file;
    return (
      <NewsCard key={article.id} title={article.webTitle} imageSrc={imageUrl} />
    );
  });

  return (
    <Layout>
      <Container>
        <Heading>Top Stories</Heading>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
