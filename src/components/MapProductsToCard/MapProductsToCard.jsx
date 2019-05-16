
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import React, { Component} from 'react';
import './MapProductsToCard.scss';
import { ProductCard } from '../ProductCard/ProductCard';

export class MapProductsToCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  componentDidMount() { }

  mapProductsToCard(products){
   return products.map((product)=>{
     return <div key={product.product_id}  className="col-lg-4 col-md-6"><ProductCard product={product}/></div>
   })
  }

  render() {
    const { products } = this.props;
    return (
      <div className="row">
        {this.mapProductsToCard(products)}
      </div>
      );
  }
}
MapProductsToCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  { }
)(MapProductsToCard);
