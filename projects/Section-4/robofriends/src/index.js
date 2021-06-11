import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchAliens, requestAliens } from './redux/reducers';

import registerServiceWorker from 'react-service-worker';

const appSW = registerServiceWorker();

const logger = createLogger();
const rootReducer = combineReducers({
  searchAliens: searchAliens,
  requestAliens: requestAliens
})
const STORE = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      logger
    )
)

ReactDOM.render(
  <Provider store={STORE}>
    <App appServiceWorker={appSW}/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
