import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import * as Icon from "react-bootstrap-icons";
import "./NavBar.css";

export default function NavBar() {
  var tl = gsap.timeline();

  useGSAP(() => {
    tl.fromTo(
      ".nav-item",
      { x: -300, opacity: 0 },
      {
        duration: 3,
        x: 0, // Move 100px to the right
        opacity: 1,
        ease: "power4",
        stagger: 0.5, // Stagger start times
      }
    );
  });

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
