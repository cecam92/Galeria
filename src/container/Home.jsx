import React, { Fragment } from "react";
import Layout from "../components/Layout";
import HomeSlider from "../components/HomeSlider";
function Home() {
  return (
    <Fragment>
      <Layout>
        <HomeSlider />
      </Layout>
    </Fragment>
  );
}

export default Home;
