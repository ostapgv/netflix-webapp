import * as React from 'react';
import {AppContainer} from 'react-hot-loader';
import * as ReactDom from 'react-dom';
import {App} from './App';

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  )
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    require("./App");
    render(App);
  });
}
