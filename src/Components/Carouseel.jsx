import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../img/ArrozConLeche.jpg";
import carousel2 from "../img/cheesecake1.jpg";
import carousel3 from "../img/cheesecake2.jpg";

export default function Carouseel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
