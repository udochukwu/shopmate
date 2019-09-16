/* eslint-disable react/destructuring-assignment */
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {Elements, StripeProvider} from 'react-stripe-elements';
import ReduxToastr from "react-redux-toastr";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Pagination from "../../components/Pagination/Pagination";
import Header from "../../components/Header/Header";
import "./Home.scss";
import {
  getAllProducts,
  searchProducts,
  getSingleProduct,
  getProductReviews,
  addProductReview
} from "../../redux/actionCreators/productActions";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import MapProductsToCard from "../../components/MapProductsToCard/MapProductsToCard";
import FirstJumbotron from "../../components/FirstJumbotron/FirstJumbotron";
import Footer from "../../components/Footer/Footer";
import Quote from "../../components/Quote/Quote";
import Categories from "../../components/Categories/Categories";
import AuthModal from "../../components/AuthModal/AuthModal";
import ProductPage from "../ProductPage/ProductPage";
import ProfileModal from "../../components/ProfileModal/ProfileModal";
import CartModal from "../../components/CartModal/CartModal";
import CheckoutPage from '../CheckoutPage/CheckoutPage'

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

  notFound() {
    return <h1>Not found</h1>;
  }

  renderReduxToaster() {
    return (
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    );
  }

  renderHomeSlider() {
    const { isSearchResult } = this.props;
    return (
      <section>
        <div className="row">
          <div className="col-md-12">{!isSearchResult && <HomeSlider />}</div>
        </div>
      </section>
    );
  }

  renderProducts() {
    const { products, productsCount, isSearchResult } = this.props;
    return (
      <section className="products-section">
        <div className="row">
          <div className="col-lg-9">
            {isSearchResult & (products.length < 1) ? (
              <div className="alert alert-danger" role="alert">
                No exact matches found
              </div>
            ) : (
              <div>
                <MapProductsToCard products={products} />
                <Pagination
                  page={this.state.page}
                  limit={this.state.limit}
                  productsCount={productsCount}
                  pageRange={5}
                  handlePageChange={this.handlePageChange}
                  itemClass="pagination-item"
                />
              </div>
            )}
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <Categories />
          </div>
        </div>
      </section>
    );
  }

  render() {
    const { displaySidebar, match, auth } = this.props;
    return (
      <React.Fragment>
        {this.renderReduxToaster()}
        <Sidebar displaySidebar={displaySidebar} {...this.props} />
        <Header {...this.props} />
        <AuthModal {...this.props} />
        {auth.isAuthenticated && <ProfileModal />}
        <CartModal />
        <div className="custom-container main-wrapper">
          <Switch>
            <Route
              path="/product/:product_id"
              render={() => (
                <ProductPage
                  {...this.props}
                  productId={match.params.product_id}
                />
              )}
            />
            <Route path="/cart/checkout" render={() => <StripeProvider apiKey="pk_test_NcwpaplBCuTL6I0THD44heRe"><Elements><CheckoutPage /></Elements></StripeProvider>} />
            <Route
              path="/"
              render={() => {
                return (
                  <div>
                    {this.renderHomeSlider()}
                    {this.renderProducts()}
                  </div>
                );
              }}
            />
          </Switch>
          <FirstJumbotron />
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
  getSingleProduct: PropTypes.func.isRequired,
  getProductReviews: PropTypes.func.isRequired,
  addProductReview: PropTypes.func.isRequired,
  displaySidebar: PropTypes.bool.isRequired,
  isSearchResult: PropTypes.bool.isRequired,
  productsCount: PropTypes.number,
  products: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object,
  profile: PropTypes.object,
  auth: PropTypes.object
};

const mapStateToProps = ({ products, sidebar, modals, product, auth }) => ({
  productsCount: products.count,
  products: products.rows,
  product,
  auth,
  loading: products.loading,
  displaySidebar: sidebar.visible,
  isSearchResult: products.searchResults,
  showModal: modals.showModal,
  authType: modals.authType
});

export default connect(
  mapStateToProps,
  {
    getAllProducts,
    searchProducts,
    getSingleProduct,
    getProductReviews,
    addProductReview
  }
)(Home);
