import React from 'react';
import Layout from '../components/Layout';
import NewsSection from '../components/NewsSection';

function Home() {
  return (
    <Layout>
      <h1>Top Stories</h1>
      <NewsSection />
    </Layout>
  );
}

export default Home;
