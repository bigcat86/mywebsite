import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ruby from "./images/ruby_village_greens.jpg";
import "./ScrollDemo.css";

// Important: you must register the plugin
gsap.registerPlugin(ScrollTrigger);

export default function ScrollDemo() {
  var tl = gsap.timeline();

  useGSAP(() => {
    tl.to(".scroll-title", {
      scrollTrigger: {
        trigger: ".scroll-title",
        pin: true, // pin the trigger element while active
        start: "center center", // when the top of elem is 80% from the top of the viewport
        end: "bottom 10%", // optional end point
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers: true, // for debugging
      },
    });

    tl.to(".scroll-image", {
      y: -1000,
      opacity: 0.2,
      scrollTrigger: {
        trigger: ".scroll-container",
        pin: true, // pin the trigger element while active
        start: "bottom 65%", // when the top of elem is 80% from the top of the viewport
        end: "bottom 20%", // optional end point
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers: true, // for debugging
      },
    });

    tl.fromTo(
      ".ruby-title",
      { x: 1000, opacity: 0 },
      {
        x: 400,
        y: 100, 
        opacity: 1,
        scrollTrigger: {
          trigger: ".scroll-container",
          start: "bottom 65%", // when the top of elem is 80% from the top of the viewport
          end: "bottom 20%", // optional end point
          // pin: true,
          scrub: true,
          // markers: true,
        },
      }
    );
  }); // Run this once on mount

  return (
    <div style={{ height: "200vh" }}>
      <h1
        className="scroll-title"
        style={{
          color: "black",
          padding: "20px",
        }}
      >
        Scroll down to see the animation
      </h1>
      <div
        className="scroll-container"
        style={{
          height: "50vh",
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          className="scroll-image"
          src={ruby}
          alt="Ruby Village Greens"
          style={{
            height: "auto",
            width: "100%",
            objectFit: "cover",
          }}
        ></img>
      </div>
      <h1
        className="ruby-title"

      >
        This is my daughter, Ruby
      </h1>
    </div>
  );
}
