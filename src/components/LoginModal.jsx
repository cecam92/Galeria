import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import { Person, Unlock } from "react-bootstrap-icons";

import "./styles/LoginModal.css";

export default function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modalHeader" closeButton>
        <nav className="modalHeader__nav">
          <li>
          <div className="modalHeader__signIn">
            <Unlock className="modalHeacer__lockIcon" />
            <span> Sign in </span>
          </div>
          </li>
          <li>
          <div className="modalHeader__signUp">
            <Person />
            <span> Sign up </span>
          </div>
          </li>
        </nav>
      </Modal.Header>

      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
