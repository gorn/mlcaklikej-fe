import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

import App from './components/App';
import './index.css';

let store = createStore(rootReducer, applyMiddleware(thunk));
let history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);