import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import InstagramIcon from "../../static/icons/instagram.svg";
import PinterestIcon from "../../static/icons/pinterest.svg";
import TwitterIcon from "../../static/icons/twitter.svg";
import FacebookIcon from "../../static/icons/facebook.svg";


import "./Footer.scss";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <footer style={{ backgroundColor: "#2e2e2e" }}>
        <div className="custom-container footer ">
          <div className="d-flex justify-content-around footer-links">
            <a href="/">Women</a>
            <a href="/">Men</a>
            <a href="/">Kids</a>
            <a href="/">Shoes</a>
            <a href="/">Brands</a>
          </div>
          <div className="d-flex justify-content-center mt-5 social-links">
            <a href="/">
              {" "}
              <InstagramIcon style={{ fill: "#ffffff", height: '40px', width: "40px" }} />
            </a>
            <a href="/">
              {" "}
              <PinterestIcon style={{ fill: "#ffffff", height: '40px', width: "40px" }} />
            </a>
            <a href="/">
              {" "}
              <TwitterIcon style={{ fill: "#ffffff", height: '40px', width: "40px" }} />
            </a>
            <a href="/">
              {" "}
              <FacebookIcon style={{ fill: "#ffffff", height: '40px', width: "40px" }} />
            </a>
          </div>
          <div className="copyright-div d-flex justify-content-center mt-5">
            <span className="text-muted">©2016 shopmate Ltd  •  Contact  • Privacy policy</span>
          </div>
        </div>
      </footer>
    );
  }
}
Footer.propTypes = {};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  {}
)(Footer);
