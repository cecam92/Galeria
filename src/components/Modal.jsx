import Modal from "react-bootstrap/Modal";
import React from "react";
import { Person, Unlock } from "react-bootstrap-icons";
import Login from "./Login.jsx";
import "./styles/Modal.css";

export default function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modalHeader" closeButton>
        <nav className="modalHeader__nav">
          <li>
            <div className="cursor__pointer modalHeader__signIn">
              <Unlock className="modalHeader__lockIcon" />
              <span> Sign in </span>
            </div>
          </li>
          <li>
            <div className="cursor__pointer modalHeader__signUp">
              <Person className="modalHeader__personIcon" />
              <span> Sign up </span>
            </div>
          </li>
        </nav>
      </Modal.Header>
      <div className="container py-4">
        <Login />
      </div>
      <Modal.Body></Modal.Body>
    </Modal>
  );
}
