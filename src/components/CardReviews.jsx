import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import { StarFill } from "react-bootstrap-icons";
import DarkImage from "../assets/darkImage.png";

function CardReviews() {
  return (
    <Fragment>
      <Card className="border">
        <Card.Body>
          <div className="rating m-1 ">
            <StarFill />
            <StarFill />
            <StarFill />
            <StarFill />
            <StarFill />
          </div>
          <Card.Text className="mb-2 text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam{" "}
          </Card.Text>
          <div className="reviewAuthor d-flex p-3 ">
            <img
              src={DarkImage}
              className="cityImage rounded-circle "
              alt="City Pic"
            />
            <div className="p-2">
              <Card.Title className="m-0">Cesar Martinez</Card.Title>
              <Card.Subtitle className="text-muted mx-2 my-1">
                12 Jun,1992
              </Card.Subtitle>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
}
export default CardReviews;
