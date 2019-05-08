
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import React, { Component} from 'react';
import './SearchInput.scss';

export class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return (<span>Something</span>);
  }
}
SearchInput.propTypes = {};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  { }
)(SearchInput);
