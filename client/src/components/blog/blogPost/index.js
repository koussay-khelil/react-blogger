import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import BlogPost from './BlogPost';
import * as actions from '../../../actions/blog';

class ConnectedBlogPost extends React.Component {
  state = {
    blogItem: {},
  }

  async componentWillMount() {
    const { fetchBlogbySlugId, match: { params: { postId } } } = this.props;
    const res = await fetchBlogbySlugId(postId);
    this.setState({
      blogItem: res,
    });
  }

  render() {
    const {
      blogItem,
    } = this.state;
    return (
      <Fragment>
        <BlogPost blogItem={blogItem} {...this.props} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = ({
  ...actions,
});

export default connect(null, mapDispatchToProps)(ConnectedBlogPost);
