import React, { useRef } from 'react'
import RoundedButton from './RoundedButton'
import {motion, useTransform, useScroll} from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';

function About() {

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        data-scroll
        data-scroll-section
        className="pb-[20vh]"
      >
        <div className="memoji flex items-center justify-center w-full h-24 rounded-full mb-[10px]">
          <div className="w-24 h-24">
            <img
              src="../../images/memoji.jpg"
              alt="memoji"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <div className="text-[1.5vw] font-['Gilroy-Light'] text-center leading flex flex-col items-center justify-center px-[10vw]">
          <span className='font-["Gilroy-Light"] text-[5vw] lg:text-[3vw]'>
            Hi,
            <span className="font-bold text-[#14CF93]">
              {" "}
              I'm Sujith Srikar
            </span>{" "}
          </span>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            delay={200}
            onAnimationComplete={handleAnimationComplete}
            className="font-bold text-[5vw] md:text-[3vw] lg:text-[2vw] mb-4"
          >
            a passionate Designer, Developer, Student and Tech Enthusiast.
          </ScrollReveal>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            delay={300}
            onAnimationComplete={handleAnimationComplete}
            className="text-[4vw] md:text-[2vw] lg:text-[1.5vw] max-w-3xl"
          >
            Specializing in Web Development (MERN) and UI/UX design, I create
            captivating and seamless digital experiences. Let's blend
            imagination with tech mastery to craft innovative masterpieces that
            leave a lasting impression.
          </ScrollReveal>
        </div>
        <div className="mt-[50px] mx-[40vw]">
          <a
            href="https://linktr.ee/Sujith_Srikar"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default About