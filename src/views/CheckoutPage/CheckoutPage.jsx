/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { injectStripe } from "react-stripe-elements";
import { countryList } from "./countries";
import IconInput from "../../components/IconInput/IconInput";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { createOrder } from "../../redux/actionCreators/orderActions";
import "./CheckoutPage.scss";
import OrderSummary from "./OrderSummary";
import OrderSuccess from "./OrderSuccess";

export class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        address_1: "",
        address_2: "",
        city: "",
        region: "",
        shipping_region_id: "",
        country: "",
        postal_code: ""
      },
      shipping_id: 0,
      populated: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShippingOptionsChange = this.handleShippingOptionsChange.bind(
      this
    );
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.createOrder = this.createOrder.bind(this);
  }

  componentDidMount() {}

  static getDerivedStateFromProps(props, state) {
    if (!state.populated && props.profile.profile.name) {
      return {
        profile: props.profile.profile,
        populated: true
      };
    }
    return true;
  }

  handleChange(event) {
    const savedKey = event.target.name;
    const savedValue = event.target.value;
    this.setState(prevState => {
      return {
        profile: {
          ...prevState.profile,
          [savedKey]: savedValue
        }
      };
    });
  }

  handleShippingOptionsChange(event) {
    this.setState({ shipping_id: event.target.value });
  }

  handleRegionChange() {
    const savedValue = event.target.value;
    this.setState(prevState => {
      return {
        profile: {
          ...prevState.profile,
          shipping_region_id: savedValue,
          region: savedValue
        }
      };
    });
  }

  createOrder(e) {
    e.preventDefault();
    const reqBody = {
      shipping_id: this.state.shipping_id,
      tax_id: 1,
      cart_id: this.props.cart.cartId
    };
    this.props.createOrder(reqBody);
    // console.log('creating orer....', reqBody);
  }

  renderCountryOptions() {
    return countryList.map(country => {
      return (
        <option key={country} value={country}>
          {country}
        </option>
      );
    });
  }

  renderShippingOptions(regionId) {
    if (regionId == 2) {
      return (
        <React.Fragment>
          <option value={0}>Choose shipping option</option>
          <option value={1}> Next Day Delivery ($20)</option>
          <option value={2}>3-4 Days ($10)</option>
          <option value={3}>7 Days ($5)</option>
        </React.Fragment>
      );
    }
    if (regionId == 3) {
      return (
        <React.Fragment>
          <option value={0}>Choose shipping option</option>
          <option value={4}> By air (7 days, $25)</option>
          <option value={5}>By sea (28 days, $10)</option>
        </React.Fragment>
      );
    }
    if (regionId == 4) {
      return (
        <React.Fragment>
          <option value={0}>Choose shipping option</option>
          <option value={6}>By air (10 days, $35)</option>
          <option value={7}>By sea (28 days, $30)</option>
        </React.Fragment>
      );
    }
    if (regionId == 1) {
      return (
        <React.Fragment>
          <option value={0}>Choose shipping option</option>
          <option value={6}>Please select A region</option>
        </React.Fragment>
      );
    }
  }

  render() {
    const { profile } = this.state;
    const { order } = this.props;
    if (order.loading) {
      return (
        <div className="checkout-page">
          <div className="container ">
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: '300px'}}>
              <div className="spinner-border primary-text" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (order.chargeSuccess) {
      return (
        <div className="checkout-page">
          <div className="container ">
            <OrderSuccess />
          </div>
        </div>
      );
    }

    if (order.getOrderSuccess) {
      return (
        <div className="checkout-page">
          <div className="container ">
            <div className="row">
              <div className="summary-div col-md-6 ">
                <div className="d-block w-100">
                  <h4 className="mb-5">PAYMENT INFORMATION</h4>
                  <CheckoutForm />
                </div>
              </div>
              <OrderSummary order={order} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="checkout-page">
        <div className="container ">
          <div className="addressDiv">
            <form onSubmit={this.createOrder}>
              <div className="row">
                <div className="col-md-6">
                  <label>Address 1</label>
                  <IconInput
                    value={profile.address_1}
                    placeholder="Address"
                    type="text"
                    iconClass="fas fa-address-card"
                    handleChange={this.handleChange}
                    name="address_1"
                  />
                </div>
                <div className="col-md-6">
                  <label>Address 2</label>
                  <IconInput
                    value={profile.address_2}
                    placeholder="Address"
                    type="text"
                    iconClass="fas fa-address-card"
                    handleChange={this.handleChange}
                    name="address_2"
                  />
                </div>
                <div className="col-md-6">
                  <label>Postal Code</label>
                  <IconInput
                    value={profile.postal_code}
                    placeholder="Postal Code"
                    type="text"
                    iconClass="fas fa-map-marked"
                    handleChange={this.handleChange}
                    name="postal_code"
                  />
                </div>
                <div className="col-md-6">
                  <label>City</label>
                  <IconInput
                    value={profile.city}
                    placeholder="City"
                    type="text"
                    iconClass="fas fa-map-marker"
                    handleChange={this.handleChange}
                    name="city"
                  />
                </div>
                <div className="col-md-4">
                  <label>Country</label>
                  <select
                    className="no-outline"
                    value={profile.country}
                    onChange={this.handleChange}
                    name="country"
                  >
                    {this.renderCountryOptions()}
                  </select>
                </div>
                <div className="col-md-4">
                  <label>Region</label>
                  <select
                    className="no-outline"
                    value={profile.region}
                    onChange={this.handleRegionChange}
                    name="region"
                  >
                    <option value="1">Select region</option>
                    <option value="2">America</option>
                    <option value="3">Europe</option>
                    <option value="4">Rest of world</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label>Shipping Options</label>
                  <select
                    className="no-outline"
                    value={this.state.shipping_id}
                    onChange={this.handleShippingOptionsChange}
                    name="shipping_id"
                  >
                    {this.renderShippingOptions(profile.shipping_region_id)}
                  </select>
                </div>
                <div className="col-12 text-center mt-5">
                  <button className="order-btn no-outline" type="submit">
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
CheckoutPage.propTypes = {
  createOrder: PropTypes.func,
  cart: PropTypes.object,
  order: PropTypes.object
};

const mapStateToProps = ({ profile, cart, order }) => ({
  profile,
  cart,
  order
});

export default connect(
  mapStateToProps,
  { createOrder }
)(injectStripe(CheckoutPage));
