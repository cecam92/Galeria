import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";

function Coupon() {
  return (
    <Fragment>
      <div className="align-items-center rounded-lg border py-2 px-3 mb-4 ">
        <Form>
          <h2>Do you have a coupon code?</h2>
          <Form.Row className="form-row">
            <Form.Control
              className="form-control col-12 col-md-6 pb-2"
              type="text"
            />
            <div className="col-12 col-md-2 pt-2 px-0 px-md-2  pt-md-0">
              <button className="form-control btn btn-outline-primary w-100">
                Apply Code
              </button>
            </div>
          </Form.Row>
        </Form>
      </div>
    </Fragment>
  );
}

export default Coupon;
