import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import SignInWidget from './SignInWidget';

export default withAuth(
  class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: null,
      };
      this.checkAuthentication();
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    onSuccess = res => this.props.auth.redirect({
      sessionToken: res.session.token,
    });

    onError = (err) => {
      console.log('error logging in', err);
    };

    render() {
      if (this.state.authenticated === null) return null;
      return this.state.authenticated ? (
        <Redirect to={{ pathname: '/' }} />
      ) : (
        <SignInWidget
          baseUrl={this.props.baseUrl}
          onSuccess={this.onSuccess}
          onError={this.onError}
        />
      );
    }
  },
);
