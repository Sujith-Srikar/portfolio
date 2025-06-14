import React from "react";
import Digital from "./Digital";

const HomeSection = () => {
  return (
    <section
      data-scroll
      data-scroll-section
      id="home"
      className="relative w-full h-screen p-3 md:pt-[10vh] md:px-[5rem] leading-[1.2] text-gray-100"
    >
      {/* Visionary Section */}
      <div className="relative mt-[6vh] flex flex-col md:flex-row md:justify-between items-center w-full leading-tight">
        <h1 className="relative self-start reveal text-custom-small md:text-custom-large font-[Gilroy-Medium] font-medium leading-[220px]">
          Visionary
        </h1>
        <div className="hidden md:flex flex-col items-end">
          <h5 className="reveal opacity-40 text-sm font-medium">
            CURRENTLY AVAILABLE FOR
          </h5>
          <h5 className="reveal opacity-40 text-sm font-medium">
            &gt;WORK WORLDWIDE
          </h5>
        </div>
        {/* <div className="hidden md:flex flex-col items-end">
          <h5 className="reveal opacity-40 text-xs font-medium">
            MY LOCAL TIME 8:39
          </h5>
          <h5 className="reveal opacity-40 text-xs font-medium">GMT (+5:30)</h5>
        </div> */}
      </div>

      {/* Creator Section */}
      <div className="row mt-8 flex flex-col md:flex-row items-center justify-between w-full md:pt-8 leading-tight">
        <img
          src="../../images/down-arrow.svg"
          alt="down-arrow"
          className="hidden md:block bg-white rounded-full p-2"
        />
        <div className="md:px-[2vw] self-center">
          <Digital />
        </div>
        <h1 className="reveal self-start text-custom-small md:text-custom-large font-[Gilroy-Medium] font-medium leading-[220px]">
          Creator
        </h1>
      </div>
    </section>
  );
};

export default HomeSection;
