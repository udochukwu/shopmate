import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import Moment from "moment";
import "./ProductReview.scss";
import { StarRatings } from "../StarRatings/StarRatings";

export class ProductReview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { review } = this.props;
    const { name, rating, created_on } = review;
    return (
      <div className="product-review">
        <div className="row">
          <div className="col-md-4">
            <StarRatings name="rate-2" starCount={5} value={rating} editable />
            <h6>{name}</h6>
            <small>
              {Moment(created_on)
                .startOf("hour")
                .fromNow()}
            </small>
          </div>
          <div className="col-md-8">
            <p>{review.review}</p>
            <div className="actions-div d-flex">
              <div className="d-flex  button-cont">
                <button type="button" className="active">
                  <i className="far fa-heart " />
                </button>
                113
              </div>
              <div className="d-flex button-cont">
                <button type="button" className="active">
                  <i className="far fa-comment " />
                </button>
                113
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ProductReview.propTypes = {
  review: PropTypes.object,
};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  {}
)(ProductReview);
