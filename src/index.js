import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './index.css';

import Home from './components/App/index';
import NotFound from './components/NotFound/index';

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </div>
  )
}

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={App} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
