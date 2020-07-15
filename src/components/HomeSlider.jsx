import React, { Fragment, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Kami from "../assets/kami.png";
import Piccolo from "../assets/Piccolo.jpg";
import Tenshinhan from "../assets/Tenshinhan.jpg";
import King from "../assets/King.jpg";
import Goku from "../assets/Goku.jpg";

function HomeSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect} className="pepito">
        <Carousel.Item>
          <div className="container d-md-flex firstItem">
            <img className="d-block " src={King} alt="First slide" />
            <img className="d-block " src={Piccolo} alt="First slide" />
            <img className="d-block " src={Kami} alt="First slide" />
            <img className="d-block " src={Tenshinhan} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container d-md-flex">
            <img className="d-block " src={Kami} alt="First slide" />
            <img className="d-block " src={Tenshinhan} alt="First slide" />
            <img className="d-block " src={Goku} alt="First slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default HomeSlider;
