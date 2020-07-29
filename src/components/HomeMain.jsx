import React, { Fragment } from "react";
import CardProduct from "./CardProduct";

function HomeMain() {
  return (
    <Fragment>
      <h1 className="p-4 text-center">Products</h1>
      <section className="home__productSlider d-flex">
        <ul className="d-flex">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </ul>
      </section>
    </Fragment>
  );
}
export default HomeMain;
