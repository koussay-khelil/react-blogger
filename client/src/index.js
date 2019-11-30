/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import './index.css';
import TagManager from 'react-gtm-module';
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const tagManagerArgs = {
  gtmId: 'GTM-5NK5ZZK',
  dataLayerName: 'PageDataLayer',
};

TagManager.initialize(tagManagerArgs);

const history = createHistory();
const nop = () => { };

if (process.env.NODE_ENV !== 'development') {
  console.log = nop;
  console.warn = nop;
  console.error = nop;
}

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  // <CoursesAndWorkshopContainer />
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
