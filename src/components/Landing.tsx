import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Landing.css";
import * as Icon from "react-bootstrap-icons";

export default function Landing() {
  var tl = gsap.timeline();
  
  useGSAP(() => {
    tl.fromTo(".icon-container", 
      { x: -300, opacity: 0, scale: 0.2 },
      { 
        duration: 1,
        x: 0, // Move 100px to the right
        opacity: 1,
        scale: 1,
        ease: "back",
        stagger: 0.5, // Stagger start times
      })
    })

  //   tl.fromTo(".aaron, .full",
  //     { x: -700, y: -200, opacity: 0.5, scale: 0.2 },
  //     {
  //     opacity: 1,
  //     scale: 2,
  //     x: 0,
  //     y: 0,
  //     scrollTrigger: {
  //       trigger: ".landing",
  //       start: "top",
  //       end: "bottom",
  //       pin: true,
  //       scrub: true,
  //       markers: true,
  //     }
  //   });
  // }
  // );

  return (
    <div className="landing">
      <h1 className="aaron">Aaron Tanner</h1>
      <h4 className="full">full stack developer</h4>
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
              color: "#333333",
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
              color: "#333333",
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
              color: "#333333",
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
          <Icon.FileEarmarkPersonFill
            style={{
              width: "50px",
              height: "50px",
              color: "red",
            }}
          />
        </div>
      </div>
    </div>
  );
}
