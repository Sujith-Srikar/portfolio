import React from "react";
// NavLink is not used, so it can be removed if not planned for future use.
// For now, keeping it as it doesn't harm.

const Navigation = ({ onNavigate }) => { // Accept onNavigate prop

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(`#${targetId}`); // Use onNavigate with the constructed selector
    }
  };

  return (
    <nav
      data-scroll
      data-scroll-section
      id="nav"
      className="fixed z-10 backdrop-blur-md flex items-center justify-between px-[5vw] w-full h-[80px]"
    >
      <a
        href="#home" // Changed href to #home to match targetId
        className="group relative text-white uppercase text-xs font-light" // Added "group"
        onClick={(e) => handleNavClick(e, "home")} // Changed targetId to "home"
      >
        Sujith Srikar
        <span
          id="line1"
          className="line absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-1000 group-hover:w-full" // Removed delay-300, added group-hover:w-full
        ></span>
        <span
          id="line2"
          className="line absolute bottom-0 right-0 w-full h-px bg-white transition-all duration-1000 group-hover:w-0" // Added group-hover:w-0
        ></span>
      </a>
      <a
        href="#about"
        className="group relative text-white uppercase text-xs font-light hidden md:block" // Added "group"
        onClick={(e) => handleNavClick(e, "about")}
      >
        About
        <span
          id="line1" // Note: IDs are kept as "line1", "line2" as per original structure for each link block. If they need to be unique for JS, they should be (e.g. line1-about, line2-about). For pure CSS animation via group-hover, they don't strictly need to be unique across different parent 'a' tags.
          className="line absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-1000 group-hover:w-full" // Removed delay-300, added group-hover:w-full
        ></span>
        <span
          id="line2"
          className="line absolute bottom-0 right-0 w-full h-px bg-white transition-all duration-1000 group-hover:w-0" // Added group-hover:w-0
        ></span>
      </a>
      <a
        href="#work"
        className="group relative text-white uppercase text-xs font-light hidden md:block" // Added "group"
        onClick={(e) => handleNavClick(e, "work")}
      >
        Projects
        <span
          id="line1"
          className="line absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-1000 group-hover:w-full" // Removed delay-300, added group-hover:w-full
        ></span>
        <span
          id="line2"
          className="line absolute bottom-0 right-0 w-full h-px bg-white transition-all duration-1000 group-hover:w-0" // Added group-hover:w-0
        ></span>
      </a>
      <a
        href="#contact"
        className="group relative text-white uppercase text-xs font-light" // Added "group"
        onClick={(e) => handleNavClick(e, "contact")}
      >
        Contact
        <span
          id="line1"
          className="line absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-1000 group-hover:w-full" // Removed delay-300, added group-hover:w-full
        ></span>
        <span
          id="line2"
          className="line absolute bottom-0 right-0 w-full h-px bg-white transition-all duration-1000 group-hover:w-0" // Added group-hover:w-0
        ></span>
      </a>
    </nav>
  );
};

export default Navigation;
