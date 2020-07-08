import React, { Fragment } from "react";
import Kami from "../assets/kami.png";

function ItemInOrder() {
  return (
    <Fragment>
      <div className="d-flex flex-wrap justify-content-between align-items-center border-bottom py-2 px-3">
        <div className="itemProduct d-flex pt-2">
          <img
            src={Kami}
            className="item-image"
            style={{ width: "50px", height: "50px", paddingTop: "0px" }}
            alt="item image"
          />
          <div className="cityDescription media-body pl-3">
            <h5>ProductName</h5>
            <label className="dollars">5</label>{" "}
            <small className="cents">.00</small>
            <label>x</label>
            <label className="quantity">1</label>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ItemInOrder;
