import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

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
