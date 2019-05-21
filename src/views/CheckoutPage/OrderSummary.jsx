/* eslint-disable no-empty-pattern */
import PropTypes from "prop-types";
import React from "react";

function OrderSummary(props) {
  const {
    order,
  } = props;

  return (
    <div className="summary-div col-md-5 offset-md-1">
    <div className="d-flex justify-content-between">
      <h4>ORDER SUMMARY</h4>
      <div>
        <h5 className="text-right m-0">
          Invoice No:{" "}
          <span className="text-success">
            #{order.order.info.order_id}
          </span>
        </h5>
      </div>
    </div>
    <table className="table mt-4">
      <tbody>
        <tr>
          <th scope="row">Subtotal</th>
          <td>£{order.order.info.total_amount}</td>
        </tr>
        <tr>
          <th scope="row">Shipping Cost</th>
          <td>£0.00</td>
        </tr>
        <tr>
          <th scope="row">Total</th>
          <th>£{order.order.info.total_amount}</th>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

OrderSummary.propTypes = {
  order: PropTypes.object,
};

export default OrderSummary;
