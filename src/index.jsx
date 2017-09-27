import * as React from 'react';
import * as ReactDom from 'react-dom';
import {App} from './App';
import {Main} from './components/main';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const render = () => {
  ReactDom.render((
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/search/:query" component={Main} />
          <Route path="/film/:film" component={Main}/>
          <Route path="*" component={Main}/>
        </Switch>
      </App>
    </Router>
  ), document.getElementById('app'));
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    require("./App");
    render(App);
  });
}
