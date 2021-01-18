import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { fetchArticles } from '../../store/actions/news';

import Layout from '../../components/Layout';
import NewsCard from '../../components/NewsCard';
import NewsSection from '../../components/NewsSection';

import { ArticleLink, Container } from '../styles';
import PageHeader from '../../components/PageHeader';

function Category({ articles, fetchArticles, location, section }) {
  const sectionId = location.pathname.slice(1);

  useEffect(() => {
    fetchArticles(sectionId);
  }, [sectionId]);

  // console.log('category ', articles);

  const newsCards = articles.map((article) => {
    const imageUrl = article.fields.thumbnail;
    return (
      <ArticleLink to={'/' + article.id} key={uuidv4()}>
        <NewsCard
          key={uuidv4()}
          title={article.webTitle}
          imageSrc={imageUrl}
        />
      </ArticleLink>
    );
  });

  return (
    <Layout>
      <Container>
        <PageHeader
          title={section === 'Life and style' ? 'Lifestyle' : section}
          bookmarkText="VIEW BOOKMARK"
          filter={true}
        />
        <NewsSection>{newsCards}</NewsSection>
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    articles: state.articleReducer.articles,
    section: state.articleReducer.section,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: (section) => dispatch(fetchArticles(section)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
