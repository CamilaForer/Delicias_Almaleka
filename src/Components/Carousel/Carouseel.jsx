import React from "react";
import './Carousel.scss'
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../../public/img/Banner1.png";
import carousel2 from "../../../public/img/Banner2.png";
import carousel3 from "../../../public/img/Banner3.png";

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
