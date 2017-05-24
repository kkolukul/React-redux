import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Invalid from './components/invalid';
import {store} from './store';


const app = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <div>
    <Switch>
      <Route exact path='/' component={App} />
      <Route component={Invalid} />
    </Switch>
    </div>
    </BrowserRouter>
  </Provider>,
  app
);
