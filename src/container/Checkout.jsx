import React, { Fragment } from "react";
import Layout from "../components/Layout";
import CheckoutDetails from "../components/CheckoutDetails";
import Order from "../components/Order";

function Checkout() {
  return (
    <Fragment>
      <Layout>
        <main>
          <CheckoutDetails />
          <Order />
        </main>
      </Layout>
    </Fragment>
  );
}

export default Checkout;
