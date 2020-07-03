import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import { Person, Unlock } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
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
              <Unlock className="modalHeacer__lockIcon" />
              <span> Sign in </span>
            </div>
          </li>
          <li>
            <div className="cursor__pointer modalHeader__signUp">
              <Person className="modalHeacer__personIcon"  />
              <span> Sign up </span>
            </div>
          </li>
        </nav>
      </Modal.Header>
      <Modal.Body>
        <form>
        <div className="form-group">
          <label for="inputEmail">Email</label>
          <input
            className="form-control"
            id="inputEmail"
            placeholder="galeriau@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlfor="inputPassword">Password</label>

          <input className="form-control" id="inputPassword" type="password" />
        </div>

        <div className="modalBody__rememberMe form-group">
          <div className="row">
            <div className="modalBody__rememberMe-checkbox col-4">
              <label className="customcheck ">
                Remember me
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="modalBody__rememberMe-forgotPassword col-8">
              <Link to="/">
                <label className="forgotPassword cursor__pointer">
                  Forgot Password?
                </label>
              </Link>
            </div>
          </div>
        </div>
        <Button className='form-group btn btn-primary btn-block btn-shadow' id="signIn-button" type="submit">Sign in</Button>
        {/* <Button className='form-group btn btn-primary btn-block btn-shadow' type="submit" onClick={props.onHide}>Sign in</Button> */}

        </form>
      </Modal.Body>
  
    </Modal>
  );
}
