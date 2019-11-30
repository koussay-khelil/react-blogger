import React from 'react';
import PropTypes from 'prop-types';
import './BlogHome.scss';
import BlogHeader from '../blogHeader/BlogHeader';
import BlogHomePageContent from '../../blogHomePageContent';

const BlogHome = ({ blogList }) => (
  <div className="blogHome">
    <BlogHeader home blogList={blogList[0]} link="/" />
    <BlogHomePageContent withoutPagination blogState={blogList} />
  </div>
);

BlogHome.propTypes = {
  blogList: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BlogHome;
