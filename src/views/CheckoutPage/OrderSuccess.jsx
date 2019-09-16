import React from "react";

function OrderSuccess() {

  return (
    <div className="row">
    <div className="custom-div success-div col-md-6 offset-md-3 text-center">
      <i className="fas fa-check-circle" />
      <div className="d-block w-100">
        <h3 className="my-4">Thank You!</h3>
        <p>
          Your purchase has been confirmed. Check your email for
          details
        </p>
        <button className="button button-primary" type="button">
          Return Home
        </button>
      </div>
    </div>
  </div>
  );
}

export default OrderSuccess;
