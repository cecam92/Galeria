import React, { Fragment } from "react";
import Header from "../components/Header";
import Login from "../components/Login";

function Home() {
  return (
    <Fragment>
      <Header />
      <div className="container py-4">
        <Login />
      </div>
    </Fragment>
  );
}

export default Home;
