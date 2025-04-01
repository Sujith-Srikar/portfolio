import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./Magnetic";

const RoundedButton = ({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) => {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-gray-500 cursor-pointer
                   px-4 py-2
                   sm:px-6 sm:py-3
                   md:px-8 md:py-4
                   lg:px-10 lg:py-5"
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className="absolute w-full h-[150%] rounded-full top-full transition-colors duration-300"
        ></div>
      </div>
    </Magnetic>
  );
};

export default RoundedButton;
