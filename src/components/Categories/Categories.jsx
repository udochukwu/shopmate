import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Categories.scss";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="category">
        <div className="category-head gradient-bg">
          <span>
            <i className="far fa-list-alt mr-3" />
            All Categories
          </span>
        </div>
        <div className="category-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">French</li>
            <li className="list-group-item">Italian</li>
            <li className="list-group-item">Irish</li>
            <li className="list-group-item">Animal</li>
            <li className="list-group-item">Flower</li>
            <li className="list-group-item">Christmas</li>
            <li className="list-group-item">Valentine</li>
          </ul>
        </div>
      </div>
    );
  }
}
Categories.propTypes = {};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  {}
)(Categories);
