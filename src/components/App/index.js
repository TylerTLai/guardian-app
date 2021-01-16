import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store/store';

import GlobalStyle from '../../styles/globalStyles';

import Home from '../../pages/Home';

import Article from '../../pages/Article';
import Category from '../../pages/Category';
import SearchResults from '../../pages/SearchResults';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/results" component={SearchResults} />
          <Route path="/:section/:articleId" component={Article} />
          <Route path="/:sectionId" component={Category} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
