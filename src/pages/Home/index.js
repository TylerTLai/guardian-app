import React from 'react';

import Layout from '../../components/Layout';
import NewsSection from '../../components/NewsSection';
import { Container } from '../styles';

function Home() {
  return (
    <Layout>
      <Container>
        <h1>Top Stories</h1>
        <NewsSection />
      </Container>
    </Layout>
  ); 
}

export default Home;
