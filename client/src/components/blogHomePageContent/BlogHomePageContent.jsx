import React from 'react';
import { Grid, Cell } from 'react-md';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Pagination from './tips/pagination';
import './BlogHomePageContent.scss';
import BlogCard from '../blog/blogCard';


class Blog extends React.Component {
  state = {
    list: [],
    tipsList: [],
    currentPage: 1,
    tipsPerPage: 9,
  }

  async componentDidMount() {
    const { blogState } = this.props;
    // await fetchBlog();
    this.setState({
      tipsList: blogState,
      list: blogState,
    });
  }

  handleNext = () => {
    const { currentPage, tipsList, tipsPerPage } = this.state;
    const lastPage = tipsList.length > 0 && Math.floor(tipsList.length / tipsPerPage) + 1;
    this.setState({
      currentPage: currentPage === lastPage ? 1 : currentPage + 1,
    });
  }

  handlePrev = () => {
    const { currentPage, tipsList, tipsPerPage } = this.state;
    this.setState({
      currentPage: currentPage <= 1
        ? Math.round(tipsList.length / tipsPerPage) : currentPage - 1,
    });
  }

  handleChange = (index) => {
    this.setState({
      currentPage: index + 1,
    });
  }

  render() {
    const {
      tipsPerPage, currentPage, list,
    } = this.state;
    const { withoutPagination } = this.props;
    const indexofLastTip = currentPage * tipsPerPage;
    const indexOfFirstTip = indexofLastTip - tipsPerPage;
    // eslint-disable-next-line max-len
    const currentTips = list.slice(indexOfFirstTip, indexofLastTip);
    const lastPage = Math.floor(list.length / tipsPerPage) + 1;
    return (
      <div className="blog blog-home-page-content">
        {
          withoutPagination ? <span className="title"> Recent posts</span> : <span className="title"> Posts </span>
        }

        <Grid className="tips-grid">
          {
            list && (currentTips.map(el => (
              <Cell key={el.id} size={4} className="tips-cell">
                <BlogCard item={el} />
              </Cell>
            )))
          }
        </Grid>
        {
          !withoutPagination && (
            <span className="tips-pagination">
              <Button
                type="submit"
                onClick={() => this.handlePrev()}
                backgroundColor="transparent"
                borderColor="transparent"
                className={currentPage === 1 ? 'pagination-stop' : 'pagination-button'}
              >
                <img src="/images/redArrow.png" alt="arrow" className="left-arrow" />
              </Button>

              <Pagination
                onClick={this.handleChange}
                total={list.length}
                currentPage={currentPage}
                pageSize={tipsPerPage}
              />

              <Button
                type="submit"
                backgroundColor="transparent"
                onClick={() => this.handleNext()}
                borderColor="transparent"
                className={currentPage === lastPage ? 'pagination-stop' : 'pagination-button'}
              >
                <img src="/images/redArrow.png" alt="arrow" className="right-arrow" />
              </Button>
            </span>
          )
        }
        {
          withoutPagination && (
            <div className="see-all">
              <Link to="/blog/archive">
                <Button className="btn">See all</Button>
              </Link>
            </div>
          )
        }
      </div>
    );
  }
}

Blog.propTypes = {
  tipsList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  withoutPagination: PropTypes.bool,
};
Blog.defaultProps = {
  withoutPagination: false,
};

export default Blog;
