import React, { Fragment, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import DarkImage from "../assets/darkImage.png";

function HomeSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Fragment>
      <div className="homeSlider container-fluid justify-content-center p-5">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="container-fluid"
        >
          <Carousel.Item>
            <div className="d-flex flex-wrap firstItem justify-content-center">
              <img className="d-block " src={DarkImage} alt="First slide" />
              <img className="d-block " src={DarkImage} alt="First slide" />
              <img className="d-block " src={DarkImage} alt="First slide" />
              <img
                className="d-none d-sm-block "
                src={DarkImage}
                alt="First slide"
              />
              <img
                className="d-none d-md-block "
                src={DarkImage}
                alt="First slide"
              />
              <img
                className="d-none d-md-block "
                src={DarkImage}
                alt="First slide"
              />
              <img
                className="d-none d-xl-block "
                src={DarkImage}
                alt="First slide"
              />
              <img
                className="d-none d-xl-block "
                src={DarkImage}
                alt="First slide"
              />
            </div>

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-wrap firstItem justify-content-center">
              <img className="d-block " src={DarkImage} alt="First slide" />
              <img className="d-block " src={DarkImage} alt="First slide" />
              <img className="d-block " src={DarkImage} alt="First slide" />
              <img
                className="d-none d-sm-block "
                src={DarkImage}
                alt="First slide"
              />
              <img
                className="d-none d-md-block "
                src={DarkImage}
                alt="First slide"
              />
              <img
                className="d-none d-md-block "
                src={DarkImage}
                alt="First slide"
              />
              <img
                className="d-none d-xl-block "
                src={DarkImage}
                alt="First slide"
              />
              <img
                className="d-none d-xl-block "
                src={DarkImage}
                alt="First slide"
              />
            </div>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
}

export default HomeSlider;
