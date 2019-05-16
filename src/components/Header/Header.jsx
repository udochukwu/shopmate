/* eslint-disable react/destructuring-assignment */
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Header.scss";

import {
  showSidebar,
  hideSidebar
} from "../../redux/actionCreators/sidebarActions";
import { SearchInput } from "../SearchInput/SearchInput";
import TopBar from "./Top-Bar";
import CartIcon from "../CartIcon/CartIcon";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { showSidebar, hideSidebar, visible } = this.props;
    return (
      <header>
        <TopBar />
        <div style={{backgroundColor: "#2e2e2e"}}>
        <nav className="custom-container navbar navbar-expand-lg header-navbar d-flex align-items-center justify-content-between">
          <a className="navbar-brand mr-aut" href="/#">
            SHOPMATE
          </a>

          <div className="hide-on-small-device header-links">
            <a className="text-white" href="/signin">
              Women
            </a>{" "}
            <a className="text-white" href="/signin">
              Men
            </a>{" "}
            <a className="text-white" href="/signin">
              Kids
            </a>{" "}
            <a className="text-white" href="/signin">
              Shoes
            </a>{" "}
            <a className="text-white" href="/signin">
              Brands
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
          <SearchInput {...this.props}/>
          <CartIcon
            items={0}
            cartColor="#ffffff"
            badgeColor="#ffffff"
            textColor="#f62f5e"
            iconType="bag"
            addedClass="hide-on-small-device"
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
  visible: PropTypes.bool.isRequired
};

const mapStateToProps = ({ sidebar }) => ({
  visible: sidebar.visible
});

export default connect(
  mapStateToProps,
  { showSidebar, hideSidebar }
)(Header);
