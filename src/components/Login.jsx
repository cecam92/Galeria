import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Eye } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Login() {
  const [typeInput, setTypeInput] = useState("true");

  const showPassword = () => {
    setTypeInput(typeInput ? false : true);
  };

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="input-group">
            <Form.Control
              className="password-input"
              type={typeInput ? "password" : "text"}
              placeholder="Password"
            />
            <div className="input-group-append">
              <div
                className="input-group-text password-icon"
                onClick={showPassword}
              >
                <Eye />
              </div>
            </div>
          </div>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox" className="row">
          <div className="form-group col-6">
            <Form.Check type="checkbox" label="Remember me" />
          </div>
          <div className="col-6 text-right pb-2">
            <Form.Label>
              <Link className="link" to="/">
                Forgot Password
              </Link>
            </Form.Label>
          </div>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="btn btn-primary btn-block"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
