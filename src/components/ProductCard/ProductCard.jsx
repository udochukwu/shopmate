import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./ProductCard.scss";
 import dummyImages from  "./images";


export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { product } = this.props;
    // eslint-disable-next-line no-unused-vars
    const imageUrl = `https://backendapi.turing.com/images/products/${
      product.thumbnail
    }`;

    const index = Math.floor(Math.random() * 11) + 1;
    return (
      <div className="product-card text-center d-flex justify-content-center align-items-center">
      <div>
        <img className="img-fluid" alt="" src={dummyImages[index]} />
        {/* <img className="img-fluid" alt="" src={imageUrl} /> */}
        <h4 className="product-name">{product.name}</h4>
        <h5 className="product-price">{`£${product.price}`}</h5>
        <a className="btn " href="/">Buy Now</a>
        {product.discounted_price == "0.00" && <span className="badge">Hot</span>}
        </div>
      </div>
    );
  }
}
ProductCard.propTypes = {
  product: PropTypes.object
};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  {}
)(ProductCard);
