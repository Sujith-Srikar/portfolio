import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll, useTransform, motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../components/ui/Bento-grid";

gsap.registerPlugin(ScrollTrigger);

function FeaturedWork() {
  const [bgColor, setBgColor] = useState("#151515");
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.95], [100, 0]);

  const cardData = [
    {
      index: 0,
      src: "/images/watchpool-desktop.png",
      alt: "watchpool",
      name: "WatchPool",
      description:
        "It is a place where friends can come to listen to music and watch videos at the same time",
      className: "md:col-span-2",
      link: "https://watchpool.vercel.app/",
      githubLink: "https://github.com/Sujith-Srikar/WatchPool",
    },
    {
      index: 2,
      src: "/images/mern-init-cli.png",
      alt: "MERN-Init-Cli",
      name: "Mern-Init-Cli",
      description:
        "It is a CLI tool that helps you quickly set up a full-stack MERN project",
      className: "md:col-span-1",
      link: "https://www.npmjs.com/package/mern-init-cli",
      githubLink: "https://github.com/Sujith-Srikar/mern-init-cli",
    },
    {
      index: 3,
      src: "/images/ochi.png",
      alt: "Ochi",
      name: "Ochi",
      description: "Frontend Clone of a design agency website - OCHI",
      className: "md:col-span-1",
      link: "https://ochi-gilt.vercel.app/",
      githubLink: "https://github.com/Sujith-Srikar/Ochi",
    },
    {
      index: 4,
      src: "/images/tinytag.png",
      alt: "TinyTag",
      name: "TinyTag",
      description:
        "It is a tool that allows users to shorten URLs and generate QR codes with custom aliases",
      className: "md:col-span-2",
      link: "https://tiny-tag.vercel.app/",
      githubLink: "https://github.com/Sujith-Srikar/TinyTag",
    },
  ];

  return (
    <>
      <div
        ref={container}
        id="work"
        className="transition-colors duration-2000 pb-[8vh] w-full min-h-[100vh] relative"
        style={{ backgroundColor: bgColor }}
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between py-[10vh] items-center md:px-12">
          <motion.div
            initial="initial"
            whileInView="hovered"
            className="relative overflow-hidden whitespace-nowrap ml-[10vw]"
            style={{ lineHeight: 0.75 }}
          >
            <motion.div
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font-[Gilroy-SemiBold] text-[20vw] md:text-[8vw] font-semibold flex flex-wrap md:flex-nowrap items-center"
            >
              <span>Feat</span>
              <div className="ml-auto mt-3 mr-4 md:ml-[3vw] md:mr-0">
                Wo<span className="text-[#14CF93] font-playfair">r </span>ks
              </div>
              <div className="hidden md:block text-[2vw] font-medium ml-[4vw]">
                (04)
              </div>
            </motion.div>
          </motion.div>
          <svg
            className="o-ui-arrow hidden md:block w-[5vw] rotate-90"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.10162 3.10156L62.9999 62.9999"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-gray-400"
            ></path>
            <path
              d="M63 1.00001L63 63L0.999989 63"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-gray-400"
            ></path>
          </svg>
        </div>

        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem] my-12 px-4 md:px-0">
          {cardData.map((card) => (
            <BentoGridItem
              key={card.index}
              title={card.name}
              description={card.description}
              image={card.src}
              alt={card.alt}
              className={card.className}
              link={card.link}
              githubLink={card.githubLink}
            />
          ))}
        </BentoGrid>
      </div>

      <motion.div
        style={{ height }}
        className="circle-container z-10 left-0 w-screen relative h-[20px] bg-red-500 block"
      >
        <div
          style={{ borderRadius: "0 0 50% 50%" }}
          className="circle absolute left-[-10%] h-[1550%] w-[120vw] bg-[#151515] z-[10] shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"
        ></div>
      </motion.div>
    </>
  );
}

export default FeaturedWork;
