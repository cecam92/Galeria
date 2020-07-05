import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Eye } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

export default function SignUp() {
  const [typeInput1, setTypeInput1] = useState("true");

  const showPassword1 = () => {
    setTypeInput1(typeInput1 ? false : true);
  };
  const [typeInput2, setTypeInput2] = useState("true");

  const showPassword2 = () => {
    setTypeInput2(typeInput2 ? false : true);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Full name</Form.Label>
        <Form.Control placeholder="John Doe"></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control placeholder="Johndoe@example.com"></Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicPassword1">
        <Form.Label>Password</Form.Label>
        <div className="input-group">
          <Form.Control
            className="password-input"
            type={typeInput1 ? "password" : "text"}
            placeholder="Password"
          />
          <div className="input-group-append">
            <div
              className="input-group-text password-icon"
              onClick={showPassword1}
            >
              <Eye />
            </div>
          </div>
        </div>
      </Form.Group>
      <Form.Group controlId="formBasicPassword2">
        <Form.Label>Confirm Password</Form.Label>
        <div className="input-group">
          <Form.Control
            className="password-input"
            type={typeInput2 ? "password" : "text"}
            placeholder="Confirm Password"
          />
          <div className="input-group-append">
            <div
              className="input-group-text password-icon"
              onClick={showPassword2}
            >
              <Eye />
            </div>
          </div>
        </div>
      </Form.Group>

      <Button className="btn btn-primary btn-block" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}
