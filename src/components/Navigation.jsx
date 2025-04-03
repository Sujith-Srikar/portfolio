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
      className="fixed z-10 backdrop-blur-md flex items-center justify-between px-[5vw] w-full h-[80px]"
    >
      <a
        href="#main"
        className="relative text-white uppercase text-xs font-light"
        onClick={(e) => handleNavClick(e, "main")}
      >
        Sujith Srikar
        <span
          id="line1"
          className="line line1 absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-1000 delay-300"
        ></span>
        <span
          id="line2"
          className="line line2 absolute bottom-0 right-0 w-full h-px bg-white transition-all duration-1000"
        ></span>
      </a>
      <a
        href="#about"
        className="relative text-white uppercase text-xs font-light hidden md:block"
        onClick={(e) => handleNavClick(e, "about")}
      >
        About
        <span
          id="line1"
          className="line line1 absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-1000 delay-300"
        ></span>
        <span
          id="line2"
          className="line line2 absolute bottom-0 right-0 w-full h-px bg-white transition-all duration-1000"
        ></span>
      </a>
      <a
        href="#work"
        className="relative text-white uppercase text-xs font-light hidden md:block"
        onClick={(e) => handleNavClick(e, "work")}
      >
        Projects
        <span
          id="line1"
          className="line line1 absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-1000 delay-300"
        ></span>
        <span
          id="line2"
          className="line line2 absolute bottom-0 right-0 w-full h-px bg-white transition-all duration-1000"
        ></span>
      </a>

      <a
        href="#contact"
        className="relative text-white uppercase text-xs font-light"
        onClick={(e) => handleNavClick(e, "contact")}
      >
        Contact
        <span
          id="line1"
          className="line line1 absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-1000 delay-300"
        ></span>
        <span
          id="line2"
          className="line line2 absolute bottom-0 right-0 w-full h-px bg-white transition-all duration-1000"
        ></span>
      </a>
    </nav>
  );
};

export default Navigation;
