// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React from "react";
import "./Header.scss";
import gbrFlag from "../../static/images/gbr.png";

import  CartIcon  from "../CartIcon/CartIcon";

function TopBar() {
  return (
    <div className="bg-white">
    <div className="custom-container header-top-bar align-items-center justify-content-between">
      <div>
        Hi!{" "}
        <a className="primary-text" href="/signin">
          Sign in
        </a>{" "}
        or{" "}
        <a className="primary-text" href="/register">
          Register
        </a>{" "}
      </div>
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
          items={0}
          cartColor='#000000'
          badgeColor='#f62f5e'
          textColor='#ffffff'
          iconType='cart'
          />
           <span className="hide-on-small-device">Your bag: £3.99</span>
      </div>
    </div>
    </div>
  );
}
TopBar.propTypes = {};

export default TopBar;
