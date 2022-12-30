import React from "react";
import Logo from "../../../public/img/Delicias Almaleka.webp";
import "./Header.scss";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useCart } from "../context/CartContext";


export default function Header() {
  const context = useCart();
  const cartContent = context.items;
  return (
    <header className="App-header">
      <Menu />
      <a href="#/">
        <img className="logo" src={Logo} />
      </a>
      <Link to="/Cart">
        <span className="badge-cart" data-count={cartContent}>
          <GiShoppingCart className="icons" />
        </span>
      </Link>
    </header>
  );
}
