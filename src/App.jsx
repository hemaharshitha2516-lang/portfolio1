import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    document.body.style.background = dark ? "#100d14" : "#fffafc";
    document.body.style.color = dark ? "#edecf0" : "#0a0a0a";
  }, [dark]);

  const toggleDark = () => setDark((prev) => !prev);

  return (
    <div
      className={dark ? "theme-dark" : "theme-light"}
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        overflowX: "hidden",
        transition: "background 0.4s ease, color 0.4s ease",
        cursor: "none",
      }}
    >
      <CustomCursor />

      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Hero dark={dark} />
        <About dark={dark} />
        <Education />
        <Skills dark={dark} />
        <Projects dark={dark} />
        <Contact dark={dark} />
      </main>
      <Footer dark={dark} />
    </div>
  );
}
