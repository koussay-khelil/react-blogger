import {
  Route, BrowserRouter as Router,
} from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import React, { Component } from 'react';
import TagManager from 'react-gtm-module';
import Blog from '../blog';
import Login from '../Login';
import * as routes from '../../routes';
import './App.css';
import blogAdmin from '../blogAdminDashboard';

function onAuthRequired({ history }) {
  history.push('/login');
}
const tagManagerArgs = {
  dataLayer: {
    page: 'app',
  },
  dataLayerName: 'PageDataLayer',
};

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  render() {
    TagManager.dataLayer(tagManagerArgs);
    const {
      BLOG,
    } = routes;
    return (
      <Router>
        <Security
          issuer="issuer"
          client_id="id"
          redirect_uri={`${window.location.origin}/implicit/callback`}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <div className="container">
              <SecureRoute path="/" exact component={Blog} />
              <SecureRoute path={BLOG} component={Blog} />
              <SecureRoute path="/write" component={blogAdmin} />
              <SecureRoute path="/admin" exact component={Login} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="baseURL" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
