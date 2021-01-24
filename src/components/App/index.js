import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from '../../store/store';
import Article from '../../pages/Article';
import Category from '../../pages/Category';
import Home from '../../pages/Home';
import SearchResults from '../../pages/SearchResults';
import SavedArticles from '../../pages/SavedArticles';

import GlobalStyle from '../../styles/globalStyles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Helmet>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500;700&family=Open+Sans:wght@300;400&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Router>
          <GlobalStyle />
          <Switch>
            <Route path="/saved-articles" component={SavedArticles} />
            <Route path="/results" component={SearchResults} />
            <Route path="/:section/:articleId" component={Article} />
            <Route path="/:sectionId" component={Category} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
