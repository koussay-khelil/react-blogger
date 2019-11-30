import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import BlogArchive from './BlogArchive';
import { fetchBlog as fetchB } from '../../../actions/blog';

class ConnectedBlogHeader extends React.Component {
  static propTypes = {
    blogList: PropTypes.objectOf(PropTypes.any).isRequired,
    fetchBlog: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    const { fetchBlog } = this.props;
    await fetchBlog();
  }

  render() {
    const { blogList } = this.props;
    return (
      <Fragment>
        {blogList.length > 0 && <BlogArchive blogList={blogList} />}
      </Fragment>
    );
  }
}
const mapDispatchToProps = {
  fetchBlog: fetchB,
};
const mapStateToProps = state => ({
  blogList: state.blog,
});


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedBlogHeader);
