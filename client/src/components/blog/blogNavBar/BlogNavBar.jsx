import React from 'react';
import './BlogNavBar.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Grid, Cell } from 'react-md';
import * as actions from '../../../actions/blog';


const logout = async () => {
  this.props.auth.logout('/');
};

const BlogNavBar = () => (
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
        <Button onClick={logout}>Logout</Button>
      </Cell>
    </Grid>
  </div>
);
const mapDispatchToProps = {
  ...actions,
};
export default connect(null, mapDispatchToProps)(BlogNavBar);
