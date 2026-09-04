import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig1 = { stiffness: 800, damping: 35, mass: 0.3 };
  const spring1X = useSpring(cursorX, springConfig1);
  const spring1Y = useSpring(cursorY, springConfig1);

  const springConfig2 = { stiffness: 200, damping: 25, mass: 0.6 };
  const spring2X = useSpring(cursorX, springConfig2);
  const spring2Y = useSpring(cursorY, springConfig2);

  const springConfig3 = { stiffness: 80, damping: 20, mass: 1 };
  const spring3X = useSpring(cursorX, springConfig3);
  const spring3Y = useSpring(cursorY, springConfig3);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div className="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: spring1X,
          y: spring1Y,
          translateX: "-50%",
          translateY: "-50%",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
          zIndex: 9999,
          pointerEvents: "none",
          mixBlendMode: "normal",
        }}
      />

      <motion.div className="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: spring2X,
          y: spring2Y,
          translateX: "-50%",
          translateY: "-50%",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "rgba(236,72,153,0.25)",
          zIndex: 9998,
          pointerEvents: "none",
        }}
      />

      <motion.div className="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: spring3X,
          y: spring3Y,
          translateX: "-50%",
          translateY: "-50%",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "rgba(139,92,246,0.12)",
          border: "1px solid rgba(139,92,246,0.3)",
          zIndex: 9997,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
