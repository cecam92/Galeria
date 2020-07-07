import React from "react";
import Kami from "../assets/kami.png";
import { Truck } from "react-bootstrap-icons";

function CityDetails() {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center rounded-lg border py-2 px-3 mb-4">
      <div className="cityDetails d-flex">
        <img src={Kami} className="cityImage rounded-circle " alt="City Pic" />
        <div className="cityDescription media-body pl-3">
          <small>Your city is:</small>
          <p style={{ fontWeight: "bold" }}>Melbourne, AU</p>
        </div>
      </div>

      <button className="btn btn-light btn-sm btn-shadow mt-3 mt-sm-0">
        <Truck className="truck-icon" />
        Change city
      </button>
    </div>
  );
}
export default CityDetails;
