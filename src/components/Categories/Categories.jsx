import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import { fetchProductsByCategory } from "../../redux/actionCreators/productActions";
import "./Categories.scss";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  fetchProductsByCategory(categoryId, e) {
    e.preventDefault();
    this.props.fetchProductsByCategory({ categoryId });
  }

  renderCategories() {
    const categories = [
      { category_id: 1, name: "French" },
      { category_id: 2, name: "Italian" },
      { category_id: 3, name: "Irish" },
      { category_id: 4, name: "Animal" },
      { category_id: 5, name: "Flower" },
      { category_id: 6, name: "Christmas" },
      { category_id: 7, name: "Valentine" }
    ];
    return categories.map(category => (
      <li
        key={category.category_id}
        className="list-group-item"
        onClick={e => this.fetchProductsByCategory(category.category_id, e)}
        onKeyPress={e => this.fetchProductsByCategory(1, e)}
        role="presentation"
      >
        {category.name}
      </li>
    ));
  }

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
            {this.renderCategories()}
          </ul>
        </div>
      </div>
    );
  }
}
Categories.propTypes = {
  fetchProductsByCategory: PropTypes.func
};

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  { fetchProductsByCategory }
)(Categories);
