import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './Pagination.scss';

class Pagination extends React.Component {
  state = {
    currentPage: 1,
  }


  componentWillReceiveProps(p) {
    this.setState({
      currentPage: p.currentPage,
    });
  }


  render() {
    const {
      onClick,
      total: totalItems,
      pageSize,
    } = this.props;

    const {
      currentPage,
    } = this.state;

    const totalPages = Math.ceil(totalItems / pageSize);

    // const interval = <li key="...">&hellip;</li>;
    const links = [];

    if (totalPages > 3) {
      // this specifies the range of pages we want to show in the middle
      const min = Math.max(totalPages - currentPage <= 3 ? totalPages - 4 : currentPage - 2, 2);
      const max = Math.min(currentPage <= 4 ? 5 : currentPage + 2, totalPages - 1);

      // we always show the first page
      links.push(1);

      // we're more than one space away from the beginning, so we need a separator
      if (min > 2) {
        links.push('...');
      }

      // generate the middle numbers
      for (let i = min; i < max + 1; i += 1) {
        links.push(i);
      }

      // we're more than one space away from the end, so we need a separator
      if (max < totalPages - 1) {
        links.push('...');
      }

      // we always show the last page
      links.push(totalPages);
    } else {
      // we must special-case three or less, because the above logic won't work
      // generate the middle numbers
      for (let i = 1; i <= totalPages; i += 1) {
        links.push(i);
      }
    }


    return (
      <span className="pagination-buttons">
        {links.map((x, idx) => (x === '...'
          ? (
            <Button
              key={`elipp-${idx}`}
              borderColor="transparent"
              backgroundColor="transparent"
              color="#878787"
              className="pagination-button"
              onClick={e => (e)}
            >{'...'}
            </Button>
          )
          : (
            <Button
              key={x}
              onClick={() => (this.setState({
                currentPage: x,
              }, () => onClick(x - 1)))}
              borderColor={currentPage === x ? 'transparent' : 'transparent'}
              backgroundColor={currentPage === x ? 'transparent' : 'transparent'}
              color={currentPage === x ? '#000000' : '#000000'}
              className={currentPage === x ? 'pagination-button-active' : 'pagination-button'}
            >{x}
            </Button>

          )))}
      </span>
    );
  }
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Pagination;
