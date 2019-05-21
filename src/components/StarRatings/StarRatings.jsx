import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./StarRatings.scss";

export class StarRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { name, starCount, value, onStarClick, editable } = this.props;
    return (
      <div className="star-ratings">
        <StarRatingComponent
          name={name}
          starCount={starCount}
          value={value}
          onStarClick={onStarClick}
          editable={editable}
        />
      </div>
    );
  }
}

StarRatings.propTypes = {
  value: PropTypes.number,
  name: PropTypes.string,
  starCount: PropTypes.number,
  onStarClick: PropTypes.func,
  editable: PropTypes.bool
};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  {}
)(StarRatings);
