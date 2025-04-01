import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-scroll
      data-scroll-section
      id="nav"
      className="flex items-center justify-between px-[5vw] w-full h-[100px]"
    >
      <a href="#" className="relative text-white uppercase text-xs font-light">
        Sujith Srikar
        <span
          id="line1"
          className="line absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-1000 delay-300"
        ></span>
        <span
          id="line2"
          className="line absolute bottom-0 right-0 w-full h-px bg-white transition-all duration-1000"
        ></span>
      </a>
      <a
        href="#work"
        className="relative text-white uppercase text-xs font-light hidden md:block"
        onClick={(e) => handleNavClick(e, "home")}
      >
        Projects
        <span
          id="line1"
          className="line absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-1000 delay-300"
        ></span>
        <span
          id="line2"
          className="line absolute bottom-0 right-0 w-full h-px bg-white transition-all duration-1000"
        ></span>
      </a>
      <a
        href="#"
        className="relative text-white uppercase text-xs font-light hidden md:block"
      >
        Socials
        <span
          id="line1"
          className="line absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-1000 delay-300"
        ></span>
        <span
          id="line2"
          className="line absolute bottom-0 right-0 w-full h-px bg-white transition-all duration-1000"
        ></span>
      </a>
      <a href="#" className="relative text-white uppercase text-xs font-light">
        Contact
        <span
          id="line1"
          className="line absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-1000 delay-300"
        ></span>
        <span
          id="line2"
          className="line absolute bottom-0 right-0 w-full h-px bg-white transition-all duration-1000"
        ></span>
      </a>
    </nav>
  );
};

export default Navigation;
