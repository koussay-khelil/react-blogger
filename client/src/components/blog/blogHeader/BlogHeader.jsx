import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './BlogHeader.scss';
import { Link } from 'react-router-dom';

const BlogHeader = ({ home, link, blogList }) => (
  <div className={`blog-header ${home && 'post-bg'}`}>
    {
        link
          ? (
            <Fragment>
              <div className="cell first ">
                <div className={`title ${!home && 'archive-title'}`}><Link className="link2" to={`/blog/${blogList._id}`} dangerouslySetInnerHTML={{ __html: blogList.blog_title }} /></div>
                <div className={`by ${!home && 'archive-by'}`}>By {blogList.blog_author}</div>
                {
                  home && <Link to={`/blog/${blogList._id}`} className="link" />
                }
              </div>
              <div className="cell second ">
                <Link className="img-link" to={`/blog/${blogList._id}`}>
                  <img src={blogList.blog_image} alt="" />
                </Link>
              </div>
            </Fragment>
          )
          : (
            <Fragment>
              <div className="cell first ">
                <div className={`title ${!home && 'archive-title'}`} dangerouslySetInnerHTML={{ __html: blogList.blog_title }} />
                <div className={`by ${!home && 'archive-by'}`}>By {blogList.blog_author}</div>

              </div>
              <div className="cell second ">
                <img src={blogList.blog_image} alt="" />
              </div>
            </Fragment>
          )
      }
  </div>
);

BlogHeader.propTypes = {
  home: PropTypes.bool,
  link: PropTypes.string.isRequired,
  blogList: PropTypes.objectOf(PropTypes.any).isRequired,
};

BlogHeader.defaultProps = {
  home: false,
};

export default BlogHeader;
