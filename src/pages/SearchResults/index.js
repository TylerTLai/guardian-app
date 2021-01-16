import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../../store/actions/news';

import Layout from '../../components/Layout';
import NewsCard from '../../components/NewsCard';
import NewsSection from '../../components/NewsSection';
import PageHeader from '../../components/PageHeader';

import { ArticleLink, Container } from '../styles';

function SearchResults({ articles, fetchArticles }) {
  useEffect(() => {
    const section = 'lifeandstyle';
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
        <PageHeader
          title="Search Results"
          bookmarkText="VIEW BOOKMARK"
          filter={true}
        />
        {/* <NewsSection>{newsCards}</NewsSection> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
