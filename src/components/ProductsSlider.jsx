import React, { Fragment } from "react";
import CardProduct from "./CardProduct";

function ProductsSlider() {
  return (
    <Fragment>
      <section className="p-4">
        <h1 className=" text-center border-bottom p-4">Products</h1>
        <article className="home__productSlider d-flex">
          <ul className="d-flex p-0 p-sm-4">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </ul>
        </article>
      </section>
    </Fragment>
  );
}

export default ProductsSlider;
