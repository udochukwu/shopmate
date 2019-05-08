import { connect } from "react-redux";
import React, { Component } from "react";
import Slider from "react-slick";
import "./HomeSlider.scss";
import "../../static/styles/slick.scss";
import "../../static/styles/slick-theme.scss";

export class HomeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="home-slider">
        <Slider {...settings}>
          <div className="slide-1 slide-item d-flex align-items-center">
            <div >
              <h1>Background <span>and</span><br/> development</h1>
              <p>Convergent the dictates of the consumer: background and development</p>
              <a href="/" className="btn btn-primary">View All</a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
HomeSlider.propTypes = {};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  {}
)(HomeSlider);
