import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { Button } from 'antd';
import { Grid, Cell } from 'react-md';
import './Home.scss';

export default withAuth(
  class Home extends Component {
    state = { authenticated: null, blogs: [] };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      return (
        <div className="blog-navBar">
          <div className="log">
            <Link to="/blog">
              <img src="/images/blog/house.svg" alt="" />
            </Link>
            <Link to="/write" className="link-text">
              <img src="/images/blog/edit.svg" alt="" />
            </Link>
          </div>
          <Grid className="search">
            <Cell className="search-bar">
              <Button onClick={this.logout}>Logout</Button>
            </Cell>
          </Grid>
        </div>
      );
    }
  },
);
