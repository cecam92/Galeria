import React, { Fragment } from "react";
import CityDetails from "./CityDetails";
import CheckoutForm from "./CheckoutForm";
import Coupon from "./Coupon";

function CheckoutDetails() {
  return (
    <Fragment>
      <div className="container-fluid">
        <section className="mx-3">
          <h1> Checkout</h1>
          <h2 className="my-4"> Delivery Details</h2>
        </section>
        <section>
          <CityDetails />
        </section>
        <section>
          <CheckoutForm />
        </section>
        <section>
          <Coupon />
        </section>
      </div>
    </Fragment>
  );
}
export default CheckoutDetails;
