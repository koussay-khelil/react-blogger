import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BlogHome from './blogHome';
import BlogArchive from './blogArchive';
import BlogPost from './blogPost';
// import PropTypes from 'prop-types'
import './Blog.scss';
import blogAdmin from '../blogAdminDashboard';
import Home from '../Home';

const Blog = () => (
  <div className="blog">
    <Home />
    <Switch>
      <Route
        exact
        path="/blog/"
        component={BlogHome}
      />
      <Route
        exact
        path="/blog/archive"
        component={BlogArchive}
      />
      <Route
        exact
        path="/blog/:postId"
        component={BlogPost}
      />
      <Route
        exact
        path="/write"
        component={blogAdmin}
      />
      <Route render={() => <Redirect to="/blog" />} />
    </Switch>
  </div>
);

// Blog.propTypes = {
// }

export default Blog;
