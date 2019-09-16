/* eslint-disable react/destructuring-assignment */
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { Component } from "react";
import dummyImages from "./images";
import "./ProductPage.scss";
import ProductReview from "../../components/ProductReview/ProductReview";
import StarRatings from "../../components/StarRatings/StarRatings";
import { addToCart } from "../../redux/actionCreators/cartActions";

export class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.onStarClick = this.onStarClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      activeSize: "S",
      activeColor: "#6eb2fb",
      quantity: 1,
      rating: 0,
      review: "",
      nickname: ""
    };
  }

  componentDidMount() {
    const { productId, getSingleProduct, getProductReviews } = this.props;
    getSingleProduct(productId);
    getProductReviews(productId);
  }

  onSubmitReview() {}

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  handleChange(event) {
    if (event.target.name == "quantity") {
      this.setState({ [event.target.name]: event.target.value });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  handleSubmit(event) {
    const { productId, addProductReview, getProductReviews } = this.props;
    addProductReview(productId, this.state).then(() => {
      getProductReviews(productId);
      this.setState({ nickname: "", review: "", rating: 0 });
    });
    event.preventDefault();
  }

  handleColorChange(color) {
    this.setState({ activeColor: color });
  }
  handleSizeChange(size) {
    this.setState({ activeSize: size });
  }

  increaseQuantity() {
    this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
  }

  decreaseQuantity() {
    this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
  }

  addToCart(e) {
    e.preventDefault();
    const { activeSize, activeColor, quantity } = this.state;
    const { cart, productId } = this.props;

    const reqBody = {
      cart_id: cart.cartId,
      product_id: productId,
      attributes: `${activeSize}, ${activeColor}`,
      quantity
    };
    this.props.addToCart(reqBody);
  }

  renderColors() {
    const colors = [
      "#6eb2fb",
      "#00d3ca",
      "#f62f5e",
      "#fe5c07",
      "#f8e71c",
      "#7ed321",
      "#9013fe"
    ];
    return colors.map(color => {
      // eslint-disable-next-line react/destructuring-assignment
      if (color === this.state.activeColor) {
        return (
          <div
            style={{ backgroundColor: color }}
            className="color-option active"
            role="button"
            tabIndex="0"
            key={color}
            onClick={e => this.handleColorChange(color, e)}
          />
        );
      }
      return (
        <div
          key={color}
          style={{ backgroundColor: color }}
          onClick={e => this.handleColorChange(color, e)}
          className="color-option"
          role="button"
          tabIndex="0"
        />
      );
    });
  }

  renderSizes() {
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    return sizes.map(size => {
      // eslint-disable-next-line react/destructuring-assignment
      if (size === this.state.activeSize) {
        return (
          <button
            key={size}
            type="button"
            onClick={e => this.handleSizeChange(size, e)}
            className="size-option active"
          >
            {size}
          </button>
        );
      }
      return (
        <button
          onClick={e => this.handleSizeChange(size, e)}
          key={size}
          type="button"
          className="size-option"
        >
          {size}
        </button>
      );
    });
  }

  renderReviews(reviews) {
    return reviews.map((review, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ProductReview key={index} review={review} />
    ));
  }
  render() {
    const index = Math.floor(Math.random() * 11) + 1;
    const { product, settings } = this.props;

    let imageSrc;
    if (product.success) {
      imageSrc = settings.dummyImages
        ? dummyImages[index]
        : `https://backendapi.turing.com/images/products/${product.data.image}`;
    }

    return (
      <div className="product-page">
        <div className="container ">
          {product.success && (
            <React.Fragment>
              <div className="row product-details">
                <div className="col-md-6 text-center">
                  <img className="img-fluid main-image" alt="" src={imageSrc} />
                </div>
                <div className="col-md-6">
                  <p>
                    Home • All Categories • Men&apos;s Clothing & Accessories
                  </p>
                  <StarRatings name="rate-2" starCount={5} value={5} editable />
                  <h4 className="mon">{product.data.name}</h4>
                  <h4 className="primary-text">£{product.data.price}</h4>
                  <div className="my-3">
                    <span className="content-header">Color</span>
                    <div className="colors">{this.renderColors("#6eb2fb")}</div>
                  </div>
                  <div className="my-3">
                    <span className="content-header">Size</span>
                    <div className="sizes">{this.renderSizes("#6eb2fb")}</div>
                  </div>
                  <div className="my-3">
                    <span className="content-header">Quantity</span>
                    <div className="quantity d-flex">
                      <button
                        type="button"
                        onClick={e => this.decreaseQuantity(e)}
                        className="active"
                      >
                        -
                      </button>
                      <input
                        name="quantity"
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.quantity}
                      />
                      <button
                        type="button"
                        onClick={e => this.increaseQuantity(e)}
                        className="active"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Cart and wish list */}
                  <div className="cart-wish">
                    <div className="row">
                      <div className="col-6">
                        <button
                         type="button"
                         className="no-outline"
                         onClick={e => this.addToCart(e)}
                         >
                          Add to cart
                        </button>
                      </div>
                      <div className="col-6 align-items-center justify-content-center d-flex">
                        <i className="far fa-heart mr-2" />
                        <small>Add to wish list</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row product-reviews">
                <div className="col-md-12">
                  <h4>Product reviews</h4>
                  {this.renderReviews(product.reviews)}
                  <h4 className="mb-5">Add a review</h4>
                  <form onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-md-4 mb-4">
                        <h6 className="font-weight-bold">Choose a nickname</h6>
                      </div>
                      <div className="col-md-8 mb-4">
                        <input
                          name="nickname"
                          value={this.state.nickname}
                          onChange={this.handleChange}
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="col-md-4 mb-4">
                        <h6 className="font-weight-bold">Your review</h6>
                      </div>
                      <div className="col-md-8 mb-4">
                        <textarea
                          name="review"
                          value={this.state.review}
                          onChange={this.handleChange}
                          className="form-control"
                          rows="4"
                          cols="50"
                        />
                        <small>
                          Your review must be at least 50 characters{" "}
                          <span className="primary-text">
                            Full review guidelines
                          </span>
                        </small>
                      </div>
                      <div className="col-md-4 mb-4">
                        <h6 className="font-weight-bold">Overall rating</h6>
                      </div>
                      <div className="col-md-8 mb-4">
                        <StarRatings
                          name="rate-2"
                          starCount={5}
                          value={this.state.rating}
                          editable
                          onStarClick={this.onStarClick}
                        />
                      </div>
                      <div className="col-md-8 offset-md-4">
                        <button type="submit" className="btn submit-review">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
ProductPage.propTypes = {
  productId: PropTypes.string,
  product: PropTypes.object,
  getSingleProduct: PropTypes.func,
  getProductReviews: PropTypes.func,
  addProductReview: PropTypes.func,
  addToCart: PropTypes.func,
  settings: PropTypes.object,
  cart: PropTypes.object,
};

const mapStateToProps = ({ settings, cart }) => ({
  settings,
  cart
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductPage);
