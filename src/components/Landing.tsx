import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Landing.css";
import * as Icon from "react-bootstrap-icons";

export default function Landing() {
  var tl = gsap.timeline();
  
  useGSAP(() => {
    tl.fromTo(".icon-container", 
      { x: -300, opacity: 0 },
      { 
        duration: 1,
        x: 0, // Move 100px to the right
        opacity: 1,
        ease: "back",
        stagger: 0.5, // Stagger start times
      })
  });

  return (
    <div className="landing">
      <h1>Aaron Tanner</h1>
      <h4>full-stack developer</h4>
      <div className="icon-row">
        <div
          className="icon-container"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "none",
            opacity: 0,
          }}
        >
          <Icon.Linkedin
            style={{
              width: "50px",
              height: "50px",
              color: "white",
            }}
          />
        </div>
        <div
          className="icon-container"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "none",
            opacity: 0,
          }}
        >
          <Icon.Github
            style={{
              width: "50px",
              height: "50px",
              color: "white",
            }}
          />
        </div>
        <div
          className="icon-container"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "none",
            opacity: 0,
          }}
        >
          <Icon.EnvelopeAtFill
            style={{
              width: "50px",
              height: "50px",
              color: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
}
