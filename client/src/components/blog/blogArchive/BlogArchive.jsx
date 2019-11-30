import React from 'react';
import PropTypes from 'prop-types';
import './BlogArchive.scss';
import BlogHomePageContent from '../../blogHomePageContent';

const BlogArchive = ({ blogList }) => (
  <div className="blog-archive">
    <BlogHomePageContent blogState={blogList} />
  </div>
);

BlogArchive.propTypes = {
  blogList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BlogArchive;
