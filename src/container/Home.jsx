import React, { Fragment } from "react";
import Layout from "../components/Layout";
import Order from "../components/Order";
function Home() {
  return (
    <Fragment>
      <Layout>
        <Order />
      </Layout>
    </Fragment>
  );
}

export default Home;
