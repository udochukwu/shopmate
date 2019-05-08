import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Quote.scss";

export class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{backgroundColor: '#efefef'}}>
      <div className="quote custom-container">
        <div className="row">
          <div className="col-sm-7 d-flex align-items-center">
            <h4>SUBSCRIBE FOR SHOP NEWS, UPDATES AND SPECIAL OFFERS</h4>
          </div>
          <div className="col-sm-5 d-flex justify-content-center input-div">
            <div className="input-group">
              <div className="input-group-prepend mr-0">
                <button
                  className="search-input-button btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                >
                  <i className="far fa-envelope" />
                </button>
              </div>
              <input
                type="text"
                className="form-control search-text-input"
              placeholder="Your e-mail here"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
            <input
              className="btn submit-btn"
              value="subscribe"
              type="submit"
            />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
SearchInput.propTypes = {};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  {}
)(SearchInput);
