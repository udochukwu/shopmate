import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./FirstJumbotron.scss";

export class FirstJumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="first-jumbotron d-flex align-items-center">
        <div>
          <h1>Converse</h1>
          <p>Explore styles tough enough to handle all your workouts</p>
          <a href="/">Shop Brand</a>
        </div>
      </div>
    );
  }
}
FirstJumbotron.propTypes = {};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  {}
)(FirstJumbotron);
