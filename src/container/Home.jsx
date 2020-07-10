import React, { Fragment } from "react";
import Layout from "../components/Layout";
import Login from "../components/Login";
function Home() {
  return (
    <Fragment>
      <Layout>
        <Login />
      </Layout>
    </Fragment>
  );
}

export default Home;
