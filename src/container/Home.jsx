import React, { Fragment } from "react";
import Layout from "../components/Layout";
import HomeSlider from "../components/HomeSlider";
import HomeMain from "../components/HomeMain";

function Home() {
  return (
    <Fragment>
      <Layout>
        <HomeSlider />
        <HomeMain />
      </Layout>
    </Fragment>
  );
}

export default Home;
