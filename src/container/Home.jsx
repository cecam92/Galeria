import React, { Fragment } from "react";
import Layout from "../components/Layout";
import Coupon from "../components/Coupon";
function Home() {
  return (
    <Fragment>
      <Layout>
        <Coupon />
      </Layout>
    </Fragment>
  );
}

export default Home;
