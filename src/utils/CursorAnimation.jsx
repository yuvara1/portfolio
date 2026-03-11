import { useState } from "react";
import { motion } from "motion/react";
import { useEffect } from "react";
function OppositeColorText({ text }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="text-white bg-black hover:text-black hover:bg-white transition"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </span>
  );
}

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(32);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const tag = e.target.tagName;
      if (
        [
          "P",
          "H1",
          "H2",
          "H3",
          "H4",
          "H5",
          "H6",
          "SPAN",
          "A",
          "BUTTON",
        ].includes(tag)
      ) {
        setCursorSize(80);
      }
    };

    const handleMouseOut = (e) => {
      const tag = e.target.tagName;
      if (
        [
          "P",
          "H1",
          "H2",
          "H3",
          "H4",
          "H5",
          "H6",
          "SPAN",
          "A",
          "BUTTON",
        ].includes(tag)
      ) {
        setCursorSize(32);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="fixed bg-white rounded-full pointer-events-none mix-blend-difference z-50 hidden lg:block [transform:translateZ(0)]"
      style={{ width: cursorSize, height: cursorSize }}
      animate={{
        x: cursorPosition.x - cursorSize / 2,
        y: cursorPosition.y - cursorSize / 2,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    />
  );
}
