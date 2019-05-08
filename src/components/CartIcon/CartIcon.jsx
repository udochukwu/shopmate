/* eslint-disable no-empty-pattern */
import PropTypes from "prop-types";
import React from "react";
import "./CartIcon.scss";
import ShopingCart from "../../static/icons/shopping-bag.svg";

function CartIcon(props) {
  const {
    cartColor,
    badgeColor,
    textColor,
    items,
    addedClass
  } = props;

  return (
    <div
      className={`header-cart-icon ${addedClass}`}
      style={{ "--text-color": textColor, "--badge-color": badgeColor }}
    >
      <span style={{ width: '25px'}} className="p1 fa-stack fa-2x has-badge" data-count={items}>
        <ShopingCart
          style={{ fill: cartColor }}
        />
      </span>
    </div>
  );
}

CartIcon.propTypes = {
  items: PropTypes.number,
  cartColor: PropTypes.string,
  badgeColor: PropTypes.string,
  textColor: PropTypes.string,
  addedClass: PropTypes.string
};

export default CartIcon;
