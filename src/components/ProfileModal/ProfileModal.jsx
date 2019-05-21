/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/destructuring-assignment */
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./ProfileModal.scss";
import IconInput  from "../IconInput/IconInput";
import { countryList } from "./countries";
import { hideProfileModal } from "../../redux/actionCreators/modalActions";
import {
  updatePersonalDetails,
  getUserProfile,
  updateAddress
} from "../../redux/actionCreators/profileActions";

export class ProfileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        name: "",
        email: "",
        mob_phone: "",
        passwordd: "",
        address_1: "",
        address_2: "",
        city: "",
        region: "",
        shipping_region_id: "",
        country: "",
        postal_code: ""
      },
      activeTab: 1,
      populated: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.updatePersonalDetails = this.updatePersonalDetails.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
  }

  componentDidMount() {
    const { getUserProfile } = this.props;
    getUserProfile();
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.populated && props.profile.profile.name) {
      return {
        profile: props.profile.profile,
        populated: true
      };
    }
    return true;
  }

  handleChange(event) {
    const savedKey = event.target.name;
    const savedValue = event.target.value;
    this.setState(prevState => {
      return {
        profile: {
          ...prevState.profile,
          [savedKey]: savedValue
        }
      };
    });
  }

  updatePersonalDetails(e) {
    e.preventDefault();
    this.props.updatePersonalDetails(this.state.profile);
  }

  updateAddress(e) {
    e.preventDefault();
    this.props.updateAddress({...this.state.profile, shipping_region_id: this.state.profile.region});
  }

  toggleTab(tabIndex, e) {
    e.preventDefault();
    this.setState({ activeTab: tabIndex });
  }

  renderCountryOptions() {
    return countryList.map(country => {
      return <option key={country} value={country}>{country}</option>;
    });
  }

  render() {
    const { activeTab, profile } = this.state;
    const { showProfileModal, hideProfileModal } = this.props;
    return (
      <Modal
        show={showProfileModal}
        dialogClassName="profile-modal"
        size="lg"
        onHide={hideProfileModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Profile</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <ul className="nav nav-tabs mb-5 nav-justified">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 1 && "active"}`}
                  onClick={e => this.toggleTab(1, e)}
                  href="/"
                >
                  Personal Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 2 && "active"}`}
                  onClick={e => this.toggleTab(2, e)}
                  href="/"
                >
                  Shipping Address
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 3 && "active"}`}
                  onClick={e => this.toggleTab(3, e)}
                  href="/"
                >
                  Card Details
                </a>
              </li>
            </ul>
          </div>
          <form onSubmit={this.updatePersonalDetails}>
            <div className={`row mb-5 ${activeTab != 1 && "d-none"}`}>
              <div className="col-md-6">
                <label>Name</label>
                <IconInput
                  value={profile.name}
                  placeholder="Your Name"
                  type="text"
                  iconClass="far fa-user"
                  handleChange={this.handleChange}
                  name="name"
                />
              </div>
              <div className="col-md-6">
              <label>Email</label>
                <IconInput
                  value={profile.email}
                  placeholder="Your Email"
                  type="email"
                  iconClass="far fa-envelope"
                  handleChange={this.handleChange}
                  name="email"
                  readonly
                />
              </div>
              <div className="col-md-6">
              <label>Phone</label>
                <IconInput
                  value={profile.mob_phone}
                  placeholder="Phone Number"
                  type="text"
                  iconClass="fas fa-phone"
                  handleChange={this.handleChange}
                  name="mob_phone"
                />
              </div>
              <div className="col-md-6">
              <label>Password</label>
                <IconInput
                  value={profile.password}
                  placeholder="Update Password"
                  type="password"
                  iconClass="fas fa-lock"
                  handleChange={this.handleChange}
                  name="passwordd"
                />
              </div>
              <div className="col-md-12 text-center mt-3">
                <button type="submit" className="btn update-btn">
                  {this.props.profile.updateLoading ? (
                    <span>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />{" "}
                      updating
                    </span>
                  ) : (
                    "Update personal Details"
                  )}
                </button>
              </div>
            </div>
          </form>
          <form onSubmit={this.updateAddress}>
            <div className={`row mb-5 ${activeTab != 2 && "d-none"}`}>
              <div className="col-md-12 text-center">
                {/* <div className="alert alert-danger" role="alert">
                  A simple danger alert—check it out!
                </div> */}
              </div>
              <div className="col-md-6">
              <label>Address 1</label>              
                <IconInput
                  value={profile.address_1}
                  placeholder="Address"
                  type="text"
                  iconClass="fas fa-address-card"
                  handleChange={this.handleChange}
                  name="address_1"
                />
              </div>
              <div className="col-md-6">
              <label>Address 2</label>              
                <IconInput
                  value={profile.address_2}
                  placeholder="Address"
                  type="text"
                  iconClass="fas fa-address-card"
                  handleChange={this.handleChange}
                  name="address_2"
                />
              </div>
              <div className="col-md-6">
              <label>Postal Code</label>              
                <IconInput
                  value={profile.postal_code}
                  placeholder="Postal Code"
                  type="text"
                  iconClass="fas fa-map-marked"
                  handleChange={this.handleChange}
                  name="postal_code"
                />
              </div>
              <div className="col-md-6">
              <label>City</label>              
              <IconInput
                  value={profile.city}
                  placeholder="City"
                  type="text"
                  iconClass="fas fa-map-marker"
                  handleChange={this.handleChange}
                  name="city"
                />
              </div>
              <div className="col-md-6">
              <label>Country</label>              
                <select
                  className="no-outline"
                  value={profile.country}
                  onChange={this.handleChange}
                  name='country'
                >
                  {this.renderCountryOptions()}
                </select>
              </div>
              <div className="col-md-6">
              <label>Region</label>              
                <select
                  className="no-outline"
                  value={profile.region}
                  onChange={this.handleChange}
                  name='region'
                >
                  <option value="1">SELECT REGION</option>
                  <option value="2">AMERICA</option>
                  <option value="3">EUROPE</option>
                  <option value="4">OTHER</option>
                </select>
              </div>
              <div className="col-md-12 text-center mt-3">
                <button type="submit" className="btn update-btn">
                  {this.props.profile.updateLoading ? (
                    <span>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />{" "}
                      updating
                    </span>
                  ) : (
                    "Update Shipping Address"
                  )}
                </button>
              </div>
            </div>
          </form>
          <div className={`row mb-5 ${activeTab != 3 && "d-none"}`}>
            <div className="col-md-6">
              <IconInput
                value={profile.name}
                placeholder="Your Name"
                type="text"
                iconClass="far fa-user"
                handleChange={this.handleChange}
                name="name"
              />
            </div>
            <div className="col-md-12 text-center mt-3">
              <button type="submit" className="btn update-btn">
                Update Card Details
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
ProfileModal.propTypes = {
  getUserProfile: PropTypes.func,
  hideProfileModal: PropTypes.func,
  updatePersonalDetails: PropTypes.func,
  updateAddress: PropTypes.func,
  showProfileModal: PropTypes.bool,
  profile: PropTypes.object,
};

const mapStateToProps = ({ profile, modals }) => {
  return {
    profile,
    showProfileModal: modals.showProfileModal
  };
};

export default connect(
  mapStateToProps,
  { getUserProfile, updatePersonalDetails, hideProfileModal, updateAddress }
)(ProfileModal);
