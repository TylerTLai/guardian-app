import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import { Container } from './styles';

function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

export default Layout;
