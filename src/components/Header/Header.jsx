/* eslint-disable no-unused-vars */
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import "./Header.scss";

import {
  showSidebar,
  hideSidebar
} from "../../redux/actionCreators/sidebarActions";
import { fetchProductsByDepartment } from "../../redux/actionCreators/productActions";
import {
  generateCartId,
  getCartItems
} from "../../redux/actionCreators/cartActions";
import { showCartModal } from "../../redux/actionCreators/modalActions";
import SearchInput from "../SearchInput/SearchInput";
import TopBar from "./Top-Bar";
import CartIcon from "../CartIcon/CartIcon";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fetchProductsByDepartment = this.fetchProductsByDepartment.bind(this);
    this.handleCartClick = this.handleCartClick.bind(this);
  }

  componentDidMount() {
    this.props.generateCartId();
  }

  fetchProductsByDepartment(departmentId, e) {
    e.preventDefault();
    this.props.fetchProductsByDepartment({ departmentId });
  }

  handleCartClick() {
    this.props.showCartModal();
  }
  render() {
    const { showSidebar, hideSidebar, visible, cart} = this.props;
    return (
      <header>
        <TopBar handleCartClick={this.handleCartClick} />
        <div style={{ backgroundColor: "#2e2e2e" }}>
          <nav className="custom-container navbar navbar-expand-lg header-navbar d-flex align-items-center justify-content-between">
            <Link className="navbar-brand" to="/">
              SHOPMATE
            </Link>

            <div className="hide-on-small-device header-links">
              <a
                className="text-white"
                onClick={e => this.fetchProductsByDepartment(1, e)}
                href="/signin"
              >
                Regional
              </a>{" "}
              <a
                className="text-white"
                onClick={e => this.fetchProductsByDepartment(2, e)}
                href="/signin"
              >
                Nature
              </a>{" "}
              <a
                className="text-white"
                onClick={e => this.fetchProductsByDepartment(3, e)}
                href="/signin"
              >
                Seasonal
              </a>{" "}
            </div>
            <div className="header-togglebar">
              {visible ? (
                <i
                  className="fas fa-arrow-left"
                  onClick={hideSidebar}
                  role="button"
                  tabIndex="-1"
                />
              ) : (
                <i
                  className="fas fa-bars"
                  onClick={showSidebar}
                  role="button"
                  tabIndex="-1"
                />
              )}
            </div>
            <SearchInput {...this.props} />
            <CartIcon
              items={cart.items.length}
              cartColor="#ffffff"
              badgeColor="#ffffff"
              textColor="#f62f5e"
              iconType="bag"
              addedClass="hide-on-small-device"
              handleClick={this.handleCartClick}
            />
          </nav>
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  showSidebar: PropTypes.func.isRequired,
  hideSidebar: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  fetchProductsByDepartment: PropTypes.func,
  generateCartId: PropTypes.func,
  showCartModal: PropTypes.func,
  getCartItems: PropTypes.func,
  cart: PropTypes.object
};

const mapStateToProps = ({ sidebar, cart }) => ({
  visible: sidebar.visible,
  cart
});

export default connect(
  mapStateToProps,
  {
    showSidebar,
    hideSidebar,
    fetchProductsByDepartment,
    generateCartId,
    getCartItems,
    showCartModal
  }
)(Header);
