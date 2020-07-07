import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { House } from "react-bootstrap-icons";
import CityDetails from "./CityDetails";
import CheckoutForm from "./CheckoutForm";
import Coupon from "./Coupon";

function CheckoutDetails() {
  return (
    <Fragment>
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="" to="/">
                <House style={{ paddingBottom: "2px" }} /> Home
              </Link>
            </li>
            <li className="breadcrumb-item onPage">
              <Link to="/checkout">Checkout</Link>
            </li>
          </ol>
        </nav>
        <section className="mx-3">
          <h1> Checkout</h1>
          <h2 className="my-4"> Delivery Details</h2>
        </section>
        <section>
          <CityDetails className="px-2" />
        </section>
        <section>
          <CheckoutForm className="px-2" />
        </section>
        <section>
          <Coupon className="px-2" />
        </section>
      </div>
    </Fragment>
  );
}
export default CheckoutDetails;
