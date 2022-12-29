import React, { useState } from "react";
import "./Header.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Menu() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      {values.map((v, idx) => (
        <Button
          key={idx}
          className="me-2 mb-2 menu"
          onClick={() => handleShow(v)}
        >
          <GiHamburgerMenu className="icons" />
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <hr />
            <li>
              <Link to="/aboutUs">Acerca de nosotros</Link>
            </li>
            <hr />
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <hr />
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <hr />
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}
