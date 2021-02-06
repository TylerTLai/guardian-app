import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import { LayoutContainer } from "./styles";

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
