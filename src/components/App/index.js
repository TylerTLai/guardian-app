import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../../store/store';

import GlobalStyle from '../../styles/globalStyles';

import Home from '../../pages/Home';

import Article from '../../pages/Article';
import Category from '../../pages/Category';
import SearchResults from '../../pages/SearchResults';
import SavedArticles from '../../pages/SavedArticles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
