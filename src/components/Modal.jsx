import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Person, Unlock } from "react-bootstrap-icons";
import Login from "./Login.jsx";
import "./styles/Modal.css";
import SignUp from "./SignUp.jsx";

export default function LoginModal(props) {
  const [showLogIn, setShowLogIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modalHeader pb-0 " closeButton>
        <nav className="modalHeader__nav border-bottom-1 w-100 pb-0">
          <li>
            <div
              className="cursor__pointer modalHeader__signIn"
              onClick={() => (setShowLogIn(true), setShowSignUp(false))}
              style={
                showLogIn
                  ? {
                      color: "red",
                      borderBottom: "1px solid #fe696a",
                      paddingBottom: "16px",
                    }
                  : { paddingBottom: "16px" }
              }
            >
              <Unlock className="modalHeader__lockIcon" />
              <span> Sign in </span>
            </div>
          </li>
          <li>
            <div
              className="cursor__pointer modalHeader__signUp"
              onClick={() => (setShowLogIn(false), setShowSignUp(true))}
              style={
                showSignUp
                  ? {
                      color: "red",
                      borderBottom: "1px solid #fe696a",
                      paddingBottom: "16px",
                    }
                  : { paddingBottom: "16px" }
              }
            >
              <Person className="modalHeader__personIcon" />
              <span> Sign up </span>
            </div>
          </li>
        </nav>
      </Modal.Header>

      <Modal.Body>
        <div className="container py-4">
          {showLogIn && <Login />}

          {showSignUp && <SignUp />}
        </div>
      </Modal.Body>
    </Modal>
  );
}
