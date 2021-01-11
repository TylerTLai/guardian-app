import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store/store';

import GlobalStyle from '../../styles/globalStyles';

import Home from '../../pages/Home';
import Culture from '../../pages/Culture';
import Lifestyle from '../../pages/Lifestyle';
import Sports from '../../pages/Sports';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/culture" component={Culture} />
          <Route exact path="/lifestyle" component={Lifestyle} />
          <Route exact path="/sports" component={Sports} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
