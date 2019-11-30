import React from 'react';
import PropTypes from 'prop-types';
import './BlogCard.scss';
import { Link } from 'react-router-dom';

const BlogCard = ({
  item,
}) => (
  <div className="blog-card">
    {/* <div className="image" > */}
    <div className="image"><img src="/images/cardBackGroundGrid.png" alt="" /></div>
    <div className="img-and-content">
      <img src={item.blog_image} alt="" />

      <div className="content">
        <div className="card-title">
          <Link to={`/blog/${item._id}`} dangerouslySetInnerHTML={{ __html: item.blog_title }} />
        </div>
        <div className="card-by">
            By {item.blog_author}
        </div>
      </div>
    </div>
  </div>
);

BlogCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BlogCard;
