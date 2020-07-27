import React, { Fragment } from "react";
import Layout from "../components/Layout";

import { Link } from "react-router-dom";
import { House } from "react-bootstrap-icons";

function SingleProduct() {
  return (
    <Fragment>
      <Layout>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 p-4">
            <li className="breadcrumb-item">
              <Link className="" to="/">
                <House style={{ paddingBottom: "2px" }} /> Home
              </Link>
            </li>
            <li className="breadcrumb-item ">
              <Link to="/checkout">Checkout</Link>
            </li>
            <li className="breadcrumb-item onPage"> Single Product</li>
          </ol>
        </nav>
      </Layout>
    </Fragment>
  );
}

export default SingleProduct;
