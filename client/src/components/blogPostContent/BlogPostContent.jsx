import React from 'react';
import PropTypes from 'prop-types';
import './BlogPostContent.scss';


const BlogPostContent = ({ content, title }) => (
  <div className="blog-bg">
    <div className="blog-graphism">
      <div className="blog-paragraphe">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  </div>
);

BlogPostContent.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogPostContent;
