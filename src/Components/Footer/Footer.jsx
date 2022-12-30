import React from "react";
import "../Header/Header.scss";
import { GrInstagram } from "react-icons/Gr";

export default function Footer() {
  return (
    <footer className="App-footer">
      <div>
        <p className="text-footer">Almaleka 2022</p>
      </div>
      <div>
        <a href="https://www.instagram.com/deliciasalmaleka/" target="_blank">
          <GrInstagram className="icons" />
        </a>
      </div>
    </footer>
  );
}
