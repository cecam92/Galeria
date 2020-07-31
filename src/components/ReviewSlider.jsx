import React, { Fragment } from "react";
import CardReviews from "./CardReviews";

function ReviewSlider() {
  return (
    <Fragment>
      <section className="bg-light p-4">
        <h1 className=" text-center">Customer Reviews</h1>
        <article className=" home__ReviewSlider d-flex">
          <ul className="d-flex p-sm-4">
            <CardReviews />
            <CardReviews />
            <CardReviews />
            <CardReviews />
            <CardReviews />
            <CardReviews />
          </ul>
        </article>
      </section>
    </Fragment>
  );
}

export default ReviewSlider;
