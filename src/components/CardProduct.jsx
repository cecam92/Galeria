import React, { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import DarkImage from "../assets/darkImage.png";
import { Cart3 } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

function CardProduct() {
  const [showBag, setShowBag] = useState(false);

  return (
    <Fragment>
      <Card
        onMouseOver={() => setShowBag(true)}
        onMouseLeave={() => setShowBag(false)}
      >
        <Card.Img variant="top" src={DarkImage} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Product Section
          </Card.Subtitle>
          <Card.Title>Product Name</Card.Title>
          <div className="d-flex align-items-center">
            <Card.Text className="col-8">$5.00</Card.Text>

            {showBag && (
              <Button className="btn-primary btn-block">
                <Cart3 />
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
}
export default CardProduct;
