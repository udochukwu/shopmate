/* eslint-disable react/destructuring-assignment */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component} from 'react';
import './Home.scss';
import { getAllProducts } from '../../redux/actionCreators/productActions';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    const {loading} = this.props;
    if (loading) {
      return (
        <div className="home">
          <h1> Loading...</h1>
        </div>
      );
    }
    return (
      <div className="home">
        <h1> Hello, World! Welcome Home </h1>
      </div>
    );
  }
}
Home.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ products }) => ({
  count: products.count,
  rows: products.rows,
  loading: products.loading
});

export default connect(
  mapStateToProps,
  { getAllProducts }
)(Home);
