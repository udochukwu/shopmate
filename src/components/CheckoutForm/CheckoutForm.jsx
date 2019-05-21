import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { stripeCharge } from '../../redux/actionCreators/orderActions';
import "./CheckoutForm.scss";



   const  style = {
      base: {
        fontSize: '12px',
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding: '',
      },
      invalid: {
        color: '#9e2146',
      },
    }

export class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {}

  submit(e) {
    e.preventDefault();
    this.props.stripe
      .createToken({ name: "Shopmate Token" })
      .then(response => {
        const reqBody = {
          stripeToken: response.token.id,
          order_id: this.props.order.order.info.order_id,
          description: "Clothe purchase from Shopmate INC",
          amount: parseInt(this.props.order.order.info.total_amount) + 50,
        };
        this.props.stripeCharge(reqBody);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error, "<<<<<<<<<<"));
  }

  render() {
    return (
      <div className="checkout-form text-center">
        <CardElement style={style}/>
        <button className="" type="submit" onClick={this.submit}>Pay with <span className="font-weight-bold">Stripes</span></button>
      </div>
    );
  }
}
CheckoutForm.propTypes = {
  stripe: PropTypes.object,
  order: PropTypes.object,
  stripeCharge: PropTypes.func,
};

const mapStateToProps = ({ order }) => ({
  order,
});

export default connect(
  mapStateToProps,
  { stripeCharge }
)(injectStripe(CheckoutForm));
