import React, { Fragment } from "react";
import Layout from "../components/Layout";
import CheckoutDetails from "../components/CheckoutDetails";
import Order from "../components/Order";

import { Link } from "react-router-dom";
import { House } from "react-bootstrap-icons";

function Checkout() {
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
            <li className="breadcrumb-item onPage">Checkout</li>
          </ol>
        </nav>
        <section className="container-fluid">
          <div className="d-lg-flex">
            <div className=" col-12 col-lg-6">
              <CheckoutDetails />
            </div>
            <div className="col-12 col-lg-5 offset-lg-1 px-4 ">
              <Order />
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
}

export default Checkout;
