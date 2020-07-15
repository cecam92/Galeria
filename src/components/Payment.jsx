import React, { useState, Fragment } from "react";
import Collapse from "react-bootstrap/Collapse";
import FormCheck from "react-bootstrap/FormCheck";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
function Payment() {
  const [openCC, setOpenCC] = useState(true);
  const [openCash, setOpenCash] = useState(false);
  return (
    <Fragment>
      <ListGroup as="ul" className="mb-4">
        <ListGroup.Item as="li">
          <div className="creditCar">
            <FormCheck
              type="radio"
              className="container-fluid p-4"
              label="Credit card"
              onClick={() => {
                setOpenCC(!openCC);
                setOpenCash(false);
              }}
              checked={openCC}
            />
          </div>
          <div>
            <Collapse in={openCC}>
              <div id="example-collapse-text1">
                <input
                  className="form-control col-12  form-group"
                  placeholder="Card Number"
                  type="number"
                ></input>

                <div className="form-group d-flex">
                  <input className="form-control  col-5 " placeholder="MM/YY" />

                  <input
                    className="form-control col-5 offset-2"
                    placeholder="CVC"
                  />
                </div>
              </div>
            </Collapse>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="row ">
            <FormCheck
              type="radio"
              className="container"
              label="Cash on delivery"
              onClick={() => {
                setOpenCash(!openCash);
                setOpenCC(false);
              }}
              checked={openCash}
            />
          </div>
          <div>
            <Collapse in={openCash}>
              <div id="example-collapse-text1">
                <span> I will pay with cash to the courier on delivery.</span>
              </div>
            </Collapse>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <Button
        variant="primary"
        type="submit"
        className="btn btn-primary btn-block"
      >
        Submit
      </Button>
    </Fragment>
  );
}

export default Payment;
