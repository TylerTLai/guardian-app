import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Culture from '../../pages/Culture';
import Home from '../../pages/Home';
import Lifestyle from '../../pages/Lifestyle';
import Navbar from '../Navbar';
import Sports from '../../pages/Sports';
import GlobalStyle from '../../globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sports" component={Sports} />
        <Route exact path="/culture" component={Culture} />
        <Route exact path="/lifestyle" component={Lifestyle} />
      </Switch>
    </Router>
  );
}

export default App;
