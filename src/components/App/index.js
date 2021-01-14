import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store/store';

import GlobalStyle from '../../styles/globalStyles';

import Home from '../../pages/Home';
import Culture from '../../pages/Culture';
import Lifestyle from '../../pages/Lifestyle';
import Sports from '../../pages/Sports';
import Article from '../../pages/Article';
import Category from '../../pages/Category';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Switch>
          {/* <Route exact path="/culture" component={Culture} />
          <Route exact path="/lifeandstyle" component={Lifestyle} />
          <Route exact path="/sport" component={Sports} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/:section/:articleId" component={Article} />
          <Route path="/:section" component={Category} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
