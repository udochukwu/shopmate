
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import React, { Component} from 'react';
import ReactPagination from "react-js-pagination";

import './Pagination.scss';

export class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    const {page, limit, productsCount, handlePageChange, pageRange} = this.props;
    return (
      <ReactPagination
      activePage={page}
      itemsCountPerPage={limit}
      totalItemsCount={productsCount}
      pageRangeDisplayed={pageRange}
      onChange={handlePageChange}
      itemClass="pagination-item"
    />
    );
  }
}
Pagination.propTypes = {
  page: PropTypes.number,
  limit: PropTypes.number,
  productsCount: PropTypes.number,
  pageRange: PropTypes.number,
  handlePageChange: PropTypes.func
};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  { }
)(Pagination);
