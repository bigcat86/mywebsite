import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import * as Icon from "react-bootstrap-icons";
import "./NavBar.css";

export default function NavBar() {
  var tl = gsap.timeline();

  useGSAP(() => {});

  return (
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href=".about">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href=".portfolio">
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href=".contact">
          Contact
        </a>
      </li>
    </ul>
  );
}
