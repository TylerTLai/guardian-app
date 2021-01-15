import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../../store/actions/news';

import Layout from '../../components/Layout';
import NewsCard from '../../components/NewsCard';
import NewsSection from '../../components/NewsSection';

import { ArticleLink, Container } from '../styles';
import TopStories from '../../components/TopStories';

function Home({ articles, fetchArticles }) {
  useEffect(() => {
    const section = 'world';
    fetchArticles(section);
  }, []);

  const newsCards = articles.slice(0, 3).map((article) => {
    const imageUrl = article.fields.thumbnail;
    return (
      <ArticleLink to={'/' + article.id} key={article.id}>
        <NewsCard
          key={article.id}
          title={article.webTitle}
          imageSrc={imageUrl}
        />
      </ArticleLink>
    );
  });

  return (
    <Layout>
      <Container>
        <TopStories />
        <h1>Sports</h1>
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
