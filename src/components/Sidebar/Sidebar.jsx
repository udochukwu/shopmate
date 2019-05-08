/* eslint-disable react/destructuring-assignment */
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Sidebar.scss";
import { getAllProducts } from "../../redux/actionCreators/productActions";
import SearchInputMobile from "../SearchInputMobile/SearchInputMobile";
// eslint-disable-next-line no-unused-vars
import  VerticalMenu  from "../VerticalMenu/VerticalMenu";


export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={
          this.props.displaySidebar
            ? "sidebar show-sidebar"
            : "sidebar hide-sidebar"
        }
      >
        <div className="text-center">
          <a className="navbar-brand mr-auto" href="/#">
            SHOPMATE
          </a>
        </div>
        <SearchInputMobile {...this.props} />
        {/* <VerticalMenu /> */}
      </div>
    );
  }
}
Sidebar.propTypes = {
  displaySidebar: PropTypes.bool.isRequired
};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  { getAllProducts }
)(Sidebar);
