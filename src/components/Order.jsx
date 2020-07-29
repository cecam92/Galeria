import React, { Fragment } from "react";
import ItemInOrder from "./ItemInOrder";
import Payment from "./Payment";

function Order() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div
          className="p-4"
          style={{ backgroundColor: "#FFF", borderRadius: "10px" }}
        >
          <h2>Your Order</h2>

          <div
            className="ListOrder list-group-flush"
            style={{ overflowY: "auto", height: "370px" }}
          >
            <ul>
              <ItemInOrder />
              <ItemInOrder />
              <ItemInOrder />
              <ItemInOrder />
              <ItemInOrder />
              <ItemInOrder />
              <ItemInOrder />
            </ul>
          </div>

          <div className="container-fluid py-4 ">
            <div className="row" style={{ height: "50px" }}>
              <label className="col-2 offset-md-4 font-weight-bold">
                Subtotal
              </label>
              <label className="valorCompra col-6">50.00</label>
            </div>
            <div
              className="row delivery border-bottom"
              style={{ height: "50px" }}
            >
              <label className="col-2 offset-md-4 font-weight-bold">
                Delivery
              </label>
              <label className="valorDelivery col-6 ">10.00</label>
            </div>
            <h3 className="text-center py-2">$60.00</h3>
          </div>

          <Payment />
        </div>
      </div>
    </Fragment>
  );
}

export default Order;
