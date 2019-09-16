/* eslint-disable no-empty-pattern */
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import React, { Component } from "react";
import {  Link, Redirect, withRouter } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { hideCartModal } from "../../redux/actionCreators/modalActions";
import { removeCartItem, updateCartItem } from "../../redux/actionCreators/cartActions";
import "./CartModal.scss";

export class CartModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  removeCartItem(itemId){
   this.props.removeCartItem(itemId);
  }

  updateCartItem(itemId, quantity ){
    this.props.updateCartItem({itemId, quantity});
  }

  increaseQuantity(itemId, initialQuantity){
    this.props.updateCartItem({itemId, quantity: initialQuantity + 1 });
  }
  decreaseQuantity(itemId, initialQuantity){
    if(initialQuantity == 1){
      return false;
    }
    this.props.updateCartItem({itemId, quantity: initialQuantity - 1 });
  }

  renderCartItems(items) {
    return items.map(item => (
      <tr key={item.item_id}>
        <th scope="row">
          <div className="row">
            <div className="col-2">
              <img
                className="img-flui"
                alt="itemphoto"
                src={`https://backendapi.turing.com/images/products/${
                  item.image
                }`}
              />
            </div>
            <div className="col-10">
              <h5 className="item-name">{item.name}</h5>
              <span 
                onClick={() => this.removeCartItem(item.item_id)}
                role='button'
                tabIndex={0}
                className="no-outline cursor-pointer"
              >
                <i className="fas fa-times text-danger" />{" "}
                <small className="text-muted">Remove</small>
              </span>
            </div>
          </div>
        </th>
        <td>{item.attributes.split(",")[0]}</td>
        <td>
          {" "}
          <div className="quantity d-flex">
            <button
              type="button"
              onClick={() => this.decreaseQuantity(item.item_id, item.quantity)}
              className="active"
            >
              -
            </button>
            <input
              name="quantity"
              onChange={this.handleChange}
              type="text"
              value={item.quantity}
              readOnly
            />
            <button
              type="button"
              onClick={()=> this.increaseQuantity(item.item_id, item.quantity)}
              className="active"
            >
              +
            </button>
          </div>
        </td>
        <td
          style={{
            fontSize: "15px",
            fontWeight: "bold"
          }}
        >
          £{item.price}
        </td>
      </tr>
    ));
  }

  render() {
    const { modals, hideCartModal, cart } = this.props;
    const {} = this.state;

    return (
      <div className="cart-modal">
        <Modal
          show={modals.showCartModal}
          dialogClassName="cart-modal"
          size="lg"
          onHide={hideCartModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h3 className="text-black">
                {cart.items.length} item{cart.items.length > 1 && "s"} In your
                cart
              </h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className="table table-borderless">
              <thead className="mb-5">
                <tr
                  style={{
                    borderBottom: "2px solid #dee2e6",
                    color: "#8e8787"
                  }}
                >
                  <th scope="col">Item</th>
                  <th scope="col">Size/Color</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>{this.renderCartItems(cart.items)}</tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex justify-content-between">
            <button
              type="button"
              className="button-white no-outline"
              onClick={hideCartModal}
            >
              Back to Shop
            </button>
            <button
              type="button"
              className="button-primary no-outline"
              onClick={()=>{
                console.log(this.props);
                this.props.history.push('/cart/checkout');
                hideCartModal();
                
              }}
            >
              Checkout
            </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
CartModal.propTypes = {
  modals: PropTypes.object,
  cart: PropTypes.object,
  hideCartModal: PropTypes.func,
  removeCartItem: PropTypes.func,
  updateCartItem: PropTypes.func,
};

const mapStateToProps = ({ modals, cart }) => ({
  modals,
  cart
});

export default connect(
  mapStateToProps,
  { hideCartModal, removeCartItem, updateCartItem }
)(withRouter(CartModal));
