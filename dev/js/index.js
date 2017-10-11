import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import localForage from 'localforage';
import {persistStore, autoRehydrate, getStoredState} from 'redux-persist'
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import allReducers from './reducers';
import App from './components/App';
const logger = createLogger();
const store = createStore(
    allReducers,
    compose(
      applyMiddleware(thunk, promise, logger),
      autoRehydrate()
    )
);
persistStore(store, {storage: localForage});

// console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
