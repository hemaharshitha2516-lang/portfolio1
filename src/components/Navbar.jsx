import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navBg = scrolled
    ? dark
      ? "rgba(6,6,8,0.88)"
      : "rgba(250,250,252,0.88)"
    : "transparent";
  const borderC = scrolled
    ? dark
      ? "rgba(255,255,255,0.06)"
      : "rgba(0,0,0,0.06)"
    : "transparent";
  const textColor = dark ? "rgba(237,236,240,0.45)" : "rgba(10,10,10,0.45)";
  const activeColor = dark ? "#ffffff" : "#0a0a0a";
  const activeBg = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)";
  const hoverColor = dark ? "#ffffff" : "#0a0a0a";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "64px",
        display: "flex",
        alignItems: "center",
        padding: "0 48px",
        background: navBg,
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: `1px solid ${borderC}`,
        transition: "all 0.4s ease",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        style={{ cursor: "pointer", flexShrink: 0 }}
      >
        <span
          className="font-cal"
          style={{
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: dark ? "#edecf0" : "#0a0a0a",
          }}
        >
          eda
          <span
            style={{
              background: "linear-gradient(135deg,#8b5cf6,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            dev
          </span>
        </span>
      </motion.div>

      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2px",
          listStyle: "none",
          margin: "0 auto",
        }}
      >
        {links.map((link) => (
          <li key={link}>
            <motion.a
              href={`#${link.toLowerCase()}`}
              onClick={() => setActive(link)}
              whileHover={{ y: -1 }}
              style={{
                display: "block",
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.01em",
                color: active === link ? activeColor : textColor,
                background: active === link ? activeBg : "transparent",
                transition: "color 0.2s, background 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
                if (active !== link)
                  e.currentTarget.style.background = dark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(0,0,0,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  active === link ? activeColor : textColor;
                if (active !== link)
                  e.currentTarget.style.background = "transparent";
              }}
            >
              {link}
            </motion.a>
          </li>
        ))}
      </ul>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <motion.button
          onClick={toggleDark}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
            border: dark
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(0,0,0,0.08)",
            cursor: "pointer",
            fontSize: "17px",
            transition: "all 0.2s",
          }}
        >
          {dark ? "☀️" : "🌙"}
        </motion.button>
      </div>
    </motion.nav>
  );
}
