import React, { Fragment } from "react";
import CardReviews from "./CardReviews";

function ReviewSlider() {
  return (
    <Fragment>
      <section className="container-fluid p-4">
        <div className="bg-light m-4 pt-2">
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
        </div>
      </section>
    </Fragment>
  );
}

export default ReviewSlider;
