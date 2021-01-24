import React, { useEffect } from 'react';

import Layout from '../../components/Layout';
import NewsCard from '../../components/NewsCard';
import NewsSection from '../../components/NewsSection';
import PageHeader from '../../components/PageHeader';

import { ArticleLink, Container } from '../styles';

function SearchResults(props) {
  
  const { results } = props.location.state;

  const newsCards = results.map((result) => {
    const imageUrl = result.fields.thumbnail;

    return (
      <ArticleLink to={'/' + result.id} key={result.id}>
        <NewsCard title={result.webTitle} imageSrc={imageUrl} />
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
        <NewsSection>{newsCards}</NewsSection>
      </Container>
    </Layout>
  );
}

export default SearchResults;
