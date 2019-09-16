import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProductCard.scss";
 import dummyImages from  "./images";


export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { product, settings } = this.props;

    const index = Math.floor(Math.random() * 11) + 1;
    const imageSrc = settings.dummyImages
      ? dummyImages[index]
      : `https://backendapi.turing.com/images/products/${product.thumbnail}`;

    return (
      <div className="product-card text-center d-flex justify-content-center align-items-center">
      <div>
        <img className="img-fluid" alt="" src={imageSrc} />
        <h4 className="product-name">{product.name}</h4>
        <h5 className="product-price">{`£${product.price}`}</h5>
        <Link className="btn gradient-bg" to={`/product/${product.product_id}`}>Buy Now</Link>
        {product.discounted_price == "0.00" && <span className="badge">Hot</span>}
        </div>
      </div>
    );
  }
}
ProductCard.propTypes = {
  product: PropTypes.object,
  settings: PropTypes.object,
};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({ settings }) => ({
  settings: settings
});

export default connect(
  mapStateToProps,
  {}
)(ProductCard);
