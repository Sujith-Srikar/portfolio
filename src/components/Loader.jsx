import React from "react";
import '../styles/font.css'
import "../styles/index.css";

const Loader = () => {

  return (
    <div
      id="loader"
      className="fixed w-full h-screen bg-[#fff] text-[#111] z-50 flex flex-col items-center justify-center"
    >
      <div
        id="topheading"
        className="absolute top-5 left-1/2 transform -translate-x-1/2"
      >
        <h5 className="reveal text-center uppercase text-xs font-light">
          Developer Portfolio
        </h5>
        <h5 className="reveal text-center uppercase text-xs font-light">
          &copy; 2025
        </h5>
      </div>
      <h1 className="reveal w-full flex justify-center text-[10vw] md:text-[4vw] font-medium">
        <span>Sujith</span>{" "}
        <span className="text-[#14CF93] font-playfair">Srikar </span>{" "}
        <span>is a</span>
      </h1>
    </div>
  );
};

export default Loader;
