import React from 'react';

import Layout from '../../components/Layout';
import NewsCard from '../../components/NewsCard';
import NewsSection from '../../components/NewsSection';
import PageHeader from '../../components/PageHeader';
import { ArticleLink, Container, Heading } from '../styles';

function SavedArticles() {
  return (
    <Layout>
      <Container>
        <PageHeader title="All bookmark" filter={true} />
        <NewsSection>
          <ArticleLink to="/">
            <NewsCard />
          </ArticleLink>
        </NewsSection>
      </Container>
    </Layout>
  );
}

export default SavedArticles;
