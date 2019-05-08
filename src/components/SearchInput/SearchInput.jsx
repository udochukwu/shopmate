
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component} from 'react';

import './SearchInput.scss';

export class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { queryString: ""};
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() { }

  onFormSubmit(e){
    const { searchProducts } = this.props;
    const { queryString } = this.state;
    e.preventDefault();
    searchProducts({queryString: queryString});
  }
  onInputChange(e){
    e.preventDefault();
    this.setState({
      queryString: e.target.value
    });
  }
  render() {
const {queryString} = this.state;
    return (

      <div className="header-search-input">
      <form onSubmit={this.onFormSubmit}>
      <div className="input-group">
        <div className="input-group-prepend mr-0">
          <button
            className="search-input-button btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
        <input
          type="text"
          className="form-control search-text-input"
          onChange={this.onInputChange}
          placeholder="search anything"
          value={queryString}
          name="queryString"
        />
      </div>
      </form>
    </div>
    );
  }
}
SearchInput.propTypes = {
  searchProducts: PropTypes.func
};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({ products}) => ({
  products: products.rows
});

export default connect(
  mapStateToProps,
  {}
)(SearchInput);
