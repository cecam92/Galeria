import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";

function Coupon() {
  return (
    <Fragment>
      <div className="container-fluid px-3">
        <div className=" align-items-center rounded-lg border p-4 mb-4 ">
          <Form>
            <h2>Do you have a coupon code?</h2>
            <Form.Row
              style={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
              }}
            >
              <Form.Control className=" col-12 col-lg-8 pb-2" type="text" />

              <div className="col-12 col-lg-4 pt-2 px-0  pt-md-0">
                <button className="form-control btn btn-outline-primary w-100">
                  Apply Code
                </button>
              </div>
            </Form.Row>
          </Form>
        </div>
      </div>
    </Fragment>
  );
}

export default Coupon;
