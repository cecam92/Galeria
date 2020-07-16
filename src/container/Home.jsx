import React, { Fragment } from "react";
import Layout from "../components/Layout";
import CheckoutForm from "../components/CheckoutForm";
function Home() {
  return (
    <Fragment>
      <Layout>
        <CheckoutForm />
      </Layout>
    </Fragment>
  );
}

export default Home;
