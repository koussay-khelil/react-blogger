import React from 'react';
import PropTypes from 'prop-types';
import './BlogPost.scss';
import { Helmet } from 'react-helmet';
import BlogPostContent from '../../blogPostContent';
import BlogHeader from '../blogHeader/BlogHeader';

const BlogPost = (
  { blogItem },
) => (

  <div className="blog-post">
    <Helmet>
      <title>{blogItem.blog_title && blogItem.blog_title}</title>
      <meta name="description" content={blogItem.blog_content && blogItem.blog_content} />
    </Helmet>
    {blogItem.blog_title && <BlogHeader blogList={blogItem} />}
    {blogItem.blog_content && <BlogPostContent content={blogItem.blog_content} title={blogItem.blog_title} />}
  </div>
);


BlogPost.propTypes = {
  blogItem: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BlogPost;
