/* eslint-disable react/jsx-curly-brace-presence */
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { hideSignupModal } from "../../redux/actionCreators/modalActions";
import { signup, login } from "../../redux/actionCreators/authActions";
import "./AuthModal.scss";
import { IconInput } from "../IconInput/IconInput";

export class AuthModal extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = { name: "", email: "", password: "" };
  }

  componentDidMount() {}

  onFormSubmit(e) {
    e.preventDefault();
    const { signup, login, authType } = this.props;
    if (authType === "Signin") login(this.state);
    if (authType === "Signup") signup(this.state);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      showModal,
      hideSignupModal,
      loading,
      failure,
      error,
      authType,
    } = this.props;
    const { name, email, password } = this.state;

    return (
      <div className="signup-modal">
        <Modal show={showModal} onHide={hideSignupModal} size="sm">
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>{authType}</h4>
            </Modal.Title>
          </Modal.Header>
          <form onSubmit={this.onFormSubmit}>
            <Modal.Body>
              <div>
                {failure && (
                  <div className="alert alert-danger">
                    <small className="text-danger">{error.message}</small>
                  </div>
                )}
                {authType === "Signup" && (
                  <IconInput
                    value={name}
                    placeholder="Your Name"
                    type="text"
                    iconClass="far fa-user"
                    handleChange={this.handleChange}
                    name="name"
                  />
                )}
                <IconInput
                  value={email}
                  placeholder="Your Email"
                  type="email"
                  iconClass="far fa-envelope"
                  name="email"
                  handleChange={this.handleChange}
                />
                <IconInput
                  value={password}
                  placeholder="Password"
                  type="password"
                  iconClass="fas fa-key"
                  name="password"
                  handleChange={this.handleChange}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div>
                <div className="d-flex justify-content-center">
                  <input
                    className="btn gradient-bg"
                    type="submit"
                    value={loading ? "loading..." : authType}
                  />
                </div>
                <div className="d-flex justify-content-center my-3">
                  <small className="d-block font-weight-bold">
                    or continue with
                  </small>
                </div>
                <div className="d-flex justify-content-center social-links">
                  <a href="/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="/">
                    <i className="fab fa-google-plus-g" />
                  </a>
                  <a href="/">
                    <i className="fab fa-twitter" />
                  </a>
                </div>
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}
AuthModal.propTypes = {
  showModal: PropTypes.bool,
  loading: PropTypes.bool,
  failure: PropTypes.bool,
  hideSignupModal: PropTypes.func,
  error: PropTypes.object,
  signup: PropTypes.func,
  login: PropTypes.func,
  authType: PropTypes.string
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  success: auth.success,
  failure: auth.failure,
  error: auth.error
});

export default connect(
  mapStateToProps,
  { hideSignupModal, signup, login }
)(AuthModal);
