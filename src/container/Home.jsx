import React, { Fragment } from "react";
import Layout from "../components/Layout";
import Payment from "../components/Payment";
function Home() {
  return (
    <Fragment>
      <Layout>
        <Payment />
      </Layout>
    </Fragment>
  );
}

export default Home;
