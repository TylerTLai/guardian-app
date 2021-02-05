import React from "react";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import Article from "../../pages/Article";
import Category from "../../pages/Category";
import Home from "../../pages/Home";
import SavedArticles from "../../pages/SavedArticles";
import SearchResults from "../../pages/SearchResults";
import { store, persistor } from "../../store/store";

import GlobalStyle from "../../styles/globalStyles";

function App() {
  const location = useLocation();

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

        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathnam}>
            <Route path="/saved-articles" component={SavedArticles} />
            <Route path="/results" component={SearchResults} />
            <Route path="/:section/:articleId" component={Article} />
            <Route path="/:sectionId" component={Category} />
            <Route exact path="/" component={Home} />
            <Route path="*">
              <div>Not found.</div>
            </Route>
          </Switch>
        </AnimatePresence>
      </PersistGate>
    </Provider>
  );
}

export default App;
