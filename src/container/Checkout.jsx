import React, { Fragment } from "react";
import Layout from "../components/Layout";
import CheckoutDetails from "../components/CheckoutDetails";

function Checkout() {
  return (
    <Fragment>
      <Layout>
        <main>
          <CheckoutDetails />
        </main>
      </Layout>
    </Fragment>
  );
}

export default Checkout;
