// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import { logout } from "../../redux/actionCreators/authActions";
import "./Header.scss";
import {
  showSignupModal,
  showSigninModal,
  showProfileModal
} from "../../redux/actionCreators/modalActions";
import { getCartItems } from '../../redux/actionCreators/cartActions';

import gbrFlag from "../../static/images/gbr.png";

import CartIcon from "../CartIcon/CartIcon";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderAuthLinks() {
    const { auth, showSignupModal, showSigninModal, showProfileModal, logout } = this.props;
    if (auth.isAuthenticated) {
      return (
        <div className=" d-flex align-items-center justify-content-between">
          <span>Hi!</span>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {auth.userData.name}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button">
                <i className="fas fa-shopping-bag mr-2" /> My Bag
              </button>
              <button
                className="dropdown-item"
                type="button"
                onClick={e => {
                  e.preventDefault();
                  showProfileModal();
                }}
              >
                <i className="far fa-user mr-2" /> My Profile
              </button>
              <button
                className="dropdown-item"
                type="button"
                onClick={e => {
                  e.preventDefault();
                  logout();
                }}
              >
                <i className="fas fa-sign-out-alt mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        Hi!{" "}
        <a
          className="primary-text"
          href="/signin"
          onClick={e => {
            e.preventDefault();
            showSigninModal();
          }}
        >
          Sign in
        </a>{" "}
        or{" "}
        <a
          className="primary-text"
          href="/register"
          onClick={e => {
            e.preventDefault();
            showSignupModal();
          }}
        >
          Register
        </a>{" "}
      </div>
    );
  }

  render() {
    const { cart, handleCartClick } = this.props;
    return (
      <div className="bg-white">
        <div className="custom-container header-top-bar align-items-center justify-content-between">
          {this.renderAuthLinks()}
          <div className="hide-on-small-device header-links align-items-center justify-content-between">
            <a className="text-black" href="/signin">
              Daily Deals
            </a>{" "}
            <a className="text-black" href="/signin">
              Sell
            </a>{" "}
            <a className="text-black" href="/signin">
              Help & Contact
            </a>{" "}
          </div>
          <div className="d-flex align-items-center">
            <span className="text-black mr-5">
              <img alt="" src={gbrFlag} /> £GBP
            </span>
            <CartIcon
              items={cart.items.length}
              cartColor="#000000"
              badgeColor="#f62f5e"
              textColor="#ffffff"
              iconType="cart"
              handleClick={handleCartClick}
            />
            <span className="hide-on-small-device">Your bag: £3.99</span>
          </div>
        </div>
      </div>
    );
  }
}
TopBar.propTypes = {
  showSignupModal: PropTypes.func.isRequired,
  showSigninModal: PropTypes.func.isRequired,
  showProfileModal: PropTypes.func.isRequired,
  handleCartClick: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  cart: PropTypes.object,
};
const mapStateToProps = ({ auth, cart }) => ({
  auth,
  cart
});

export default connect(
  mapStateToProps,
  { showSignupModal, showSigninModal, showProfileModal, logout, getCartItems }
)(TopBar);
