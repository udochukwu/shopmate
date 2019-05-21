import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./IconInput.scss";

export class IconInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const {value, placeholder, type, iconClass, handleChange, name, required } = this.props;
    return (
      <div className="icon-input">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
            <i className={iconClass}></i>
            </span>
          </div>
          <input
            type={type}
            className="form-control text-input mb-0"
            placeholder={placeholder}
            value={value}
            name={name}
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handleChange}
            required={required}
          />
        </div>
      </div>
    );
  }
}
IconInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  iconClass: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool
};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({
}) => ({});

export default connect(
  mapStateToProps,
  {}
)(IconInput);
