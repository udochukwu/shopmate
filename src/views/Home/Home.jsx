/* eslint-disable react/destructuring-assignment */
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Pagination from "../../components/Pagination/Pagination";

import Header from "../../components/Header/Header";
import "./Home.scss";
import {
  getAllProducts,
  searchProducts
} from "../../redux/actionCreators/productActions";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import MapProductsToCard from "../../components/MapProductsToCard/MapProductsToCard";
import FirstJumbotron from "../../components/FirstJumbotron/FirstJumbotron";
import Footer from "../../components/Footer/Footer";
import Quote from "../../components/Quote/Quote";
import { Categories } from "../../components/Categories/Categories";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      limit: 6,
      page: 1
    };
  }

  componentDidMount() {
    const { limit, page } = this.state;
    this.props.getAllProducts({ limit, page });
  }

  handlePageChange(pageNumber) {
    this.setState({ page: pageNumber });
    this.props.getAllProducts(this.state);
  }

  render() {
    const {
      displaySidebar,
      products,
      productsCount,
      isSearchResult
    } = this.props;
    return (
      <React.Fragment>
        <Sidebar displaySidebar={displaySidebar} {...this.props} />
        <Header {...this.props} />
        <div className="custom-container main-wrapper">
          <section>
            <div className="row">
              <div className="col-md-12">
                {!isSearchResult && <HomeSlider />}
              </div>
              {/* <div className="col-md-3">other content here</div> */}
            </div>
          </section>
          <div />
          <section className="products-section">
            <div className="row">
              <div className="col-lg-9">
                {products.length < 1 ? (
                  <div>
                    <div className="alert alert-danger" role="alert">
                      No exact matches found
                    </div>
                  </div>
                ) : (
                  <div>
                    <MapProductsToCard products={products} />
                    <div className="text-center">
                      <Pagination
                        page={this.state.page}
                        limit={this.state.limit}
                        productsCount={productsCount}
                        pageRange={5}
                        handlePageChange={this.handlePageChange}
                        itemClass="pagination-item"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-3 d-none d-lg-block">
                <Categories/>
              </div>
            </div>
          </section>
          <section>
            <FirstJumbotron />
          </section>
        </div>
        <Quote />
        <Footer />
      </React.Fragment>
    );
  }
}
Home.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  searchProducts: PropTypes.func.isRequired,
  displaySidebar: PropTypes.bool.isRequired,
  isSearchResult: PropTypes.bool.isRequired,
  productsCount: PropTypes.number,
  products: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = ({ products, sidebar }) => ({
  productsCount: products.count,
  products: products.rows,
  loading: products.loading,
  displaySidebar: sidebar.visible,
  isSearchResult: products.searchResults
});

export default connect(
  mapStateToProps,
  { getAllProducts, searchProducts }
)(Home);
