import React from "react";
import Form from "react-bootstrap/Form";

function CheckoutForm() {
  return (
    <div className="container-fluid">
      <Form className="px-4 py-4">
        <Form.Row className="names">
          <Form.Group className="col-12 col-md-3 offset-md-3 ">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="col-12 col-md-3">
            <Form.Label>Last name </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form.Row>
        <Form.Row className="phoneAddress">
          <Form.Group className="col-12 col-md-3 offset-md-3">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="col-12 col-md-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group
            type="areaText"
            controlId="formBasicEmail"
            className="col-12 col-md-6 offset-md-3 "
          >
            <Form.Label>Order Note</Form.Label>
            <textarea type="text" className="form-control" />
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}

export default CheckoutForm;
