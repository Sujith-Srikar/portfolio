import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", moveCursor);

    const handleCursorHover = (e) => {
      setHovered(e.detail.hovered);
    };

    window.addEventListener("cursorHover", handleCursorHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("cursorHover", handleCursorHover);
    };
  }, [cursorX, cursorY]);

  const cursorVariants = {
    default: {
      scale: 1,
      opacity: 1,
      mixBlendMode: "difference",
    },
    hovered: {
      scale: 5,
      opacity: 0.9,
      mixBlendMode: "normal",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      variants={cursorVariants}
      animate={hovered ? "hovered" : "default"}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      <div
        className="w-6 h-6 rounded-full bg-white border border-white"
        style={{
          backdropFilter: hovered ? "blur(10px)" : "none",
          filter: hovered ? "blur(0.2px)" : "none",
        }}
      />

      {hovered && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-[4px] text-black">View Live</span>
        </div>
      )}
    </motion.div>
  );
};

export default CustomCursor;
