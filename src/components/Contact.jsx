import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import RoundedButton from "./RoundedButton.jsx";
import Magnetic from "./Magnetic.jsx";
import "../styles/index.css"

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <div
      data-scroll
      data-scroll-section
      style={{ y }}
      ref={container}
      className="relative flex flex-col items-center justify-center"
    >
      <div
        style={{
          paddingLeft: "calc(6vw * 2)",
          paddingRight: "calc(6vw * 2)",
        }}
        className="pt-[120px] w-full max-w-[100em]"
      >
        <div className="border-b border-gray-600 pb-[100px]  relative">
          <span className="flex items-center">
            <div className="w-[100px] h-[100px] relative rounded-full overflow-hidden">
              <img
                fill={true}
                alt="image"
                src="../../images/sujith.jpg"
                className="object-cover"
              />
            </div>
            <h2
              style={{
                fontSize: "calc(clamp(3.25em, 7vw, 8em) * 0.875)",
              }}
              className="ml-[0.3em] text-[5vw] m-0 font-semibold"
            >
              Let's work
            </h2>
          </span>
          <h2
            style={{
              fontSize: "calc(clamp(3.25em, 7vw, 8em) * 0.875)",
            }}
            className="text-[5vw] m-0 font-semibold"
          >
            together
          </h2>
          <motion.div
            style={{ x }}
            className="absolute left-[calc(100%-300px)] top-[calc(100%-75px)]"
          >
            <a
              href="https://linktr.ee/Sujith_Srikar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RoundedButton
                backgroundColor="#334BD3"
                style={{
                  width: "clamp(9em, 12vw, 11em)",
                  height: "clamp(9em, 12vw, 11em)",
                }}
                className="w-[180px] h-[180px] bg-[#455CE9] text-white rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
              >
                <p className="m-0 text-[16px] z-10 font-light relative">
                  Get in touch
                </p>
              </RoundedButton>
            </a>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[30%] left-full"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div
          style={{
            fontSize: "clamp(16px, 1.2vw, 19px)",
          }}
          className="flex flex-wrap md:flex-nowrap mt-[100px] gap-[2em]  min-w-[1em] text-[1em]"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kandregulasujith@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RoundedButton>
              <p className="z-10">kandregulasujith@gmail.com</p>
            </RoundedButton>
          </a>
          <RoundedButton>
            <p className="z-10">+31 6 27 84 74 30</p>
          </RoundedButton>
        </div>
        <div
          style={{
            padding:
              "calc(var(--section-padding) / 1.3) calc(var(--gap-padding) / 1.33) calc(var(--gap-padding) / 1.75) calc(var(--gap-padding) / 1)",
          }}
          className="flex flex-wrap gap-5 items-end pt-[100px]"
        >
          <span className="flex flex-col gap-5">
            <h3
              style={{ fontSize: "clamp(16px, 1.2vw, 19px)" }}
              className="text-gray-500 cursor-default font-light"
            >
              socials
            </h3>
            <a
              href="https://github.com/Sujith-Srikar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Magnetic>
                <p
                  style={{ fontSize: "clamp(16px, 1.2vw, 19px)" }}
                  className="cursor-pointer"
                >
                  GitHub
                </p>
              </Magnetic>
            </a>
          </span>
          <a
            href="https://www.linkedin.com/in/sujith-srikar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Magnetic>
              <p
                style={{ fontSize: "clamp(16px, 1.2vw, 19px)" }}
                className="cursor-pointer"
              >
                Linkedin
              </p>
            </Magnetic>
          </a>
          <a
            href="https://leetcode.com/u/SujithSrikar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Magnetic>
              <p
                style={{ fontSize: "clamp(16px, 1.2vw, 19px)" }}
                className="cursor-pointer"
              >
                Leetcode
              </p>
            </Magnetic>
          </a>
          <a
            href="https://linktr.ee/Sujith_Srikar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Magnetic>
              <p
                style={{ fontSize: "clamp(16px, 1.2vw, 19px)" }}
                className="cursor-pointer"
              >
                LinkTree
              </p>
            </Magnetic>
          </a>
        </div>
        <div className="h-[3vh]"></div>
      </div>
    </div>
  );
}