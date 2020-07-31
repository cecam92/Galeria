import React, { Fragment } from "react";
import ProductsSlider from "./ProductsSlider";
import ReviewSlider from "./ReviewSlider";
function HomeMain() {
  return (
    <Fragment>
      <ProductsSlider />
      <ReviewSlider />
    </Fragment>
  );
}
export default HomeMain;
