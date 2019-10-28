import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function OrderBtn(props) {
  return (
    <div>
      <a href="/summary">
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block fixed-bottom"
          onClick={props.handleFormSubmit}
        >
          Order Drinks
        </button>
      </a>
    </div>
  );
}

export default OrderBtn;
