import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, color } from "framer-motion";

const projects = [
  {
    title: "Habit Tracker",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A clean and functional web app to help users build consistency by tracking their daily habits. Features streak tracking, progress charts, and local storage persistence.",
    img: "img/habit-tracker.png",
    link: "https://edayavuz6.github.io/Habit-Tracker/",
    github: "https://github.com/edayavuz6/Habit-Tracker",
    color: "#10b981",
    featured: false,
  },
  {
    title: "Lumina AI — SaaS Email Template",
    tags: ["MJML", "Email", "HTML"],
    desc: "A premium, high-conversion SaaS email template crafted with MJML for flawless responsiveness across all email clients including Gmail, Outlook, and Apple Mail.",
    img: "img/lumina-ai.png",
    link: "https://edayavuz6.github.io/Lumina-AI--Premium-SaaS-Email-Template/",
    github:
      "https://github.com/edayavuz6/Lumina-AI--Premium-SaaS-Email-Template",
    color: "#ec4899",
    featured: true,
  },
  {
    title: "WealthWise — Finance Tracker",
    tags: ["JavaScript", "Chart.js", "PDF Export"],
    desc: "Vanilla JS finance tracker with beautiful Chart.js visualizations, PDF export functionality, and full dark/light theme support. Zero dependencies.",
    img: "img/wealth-wise.png",
    link: "https://edayavuz6.github.io/WealthWise-app/",
    github: "https://github.com/edayavuz6/WealthWise-app",
    color: "#f59e0b",
    featured: false,
  },
  {
    title: "Lectus Academy — Welcome Email",
    tags: ["MJML", "Email", "HTML"],
    desc: "A professional educational SaaS email template designed for cross-platform compatibility and high engagement. Clean hierarchy, strong CTAs.",
    img: "img/lectus-academy.png",
    link: "https://edayavuz6.github.io/Lectus-Academy-SaaS-email-template/",
    github: "https://github.com/edayavuz6/Lectus-Academy-SaaS-email-template",
    color: "#8b5cf6",
    featured: false,
  },
  {
    title: "CineFlux — Discover Cinema",
    tags: ["JavaScript", "TMDB API", "CSS"],
    desc: "A premium movie discovery app powered by the TMDB API. Features dynamic search, genre filtering, and a fully responsive cinematic layout. Built with pure vanilla JS.",
    img: "img/cine-flux.png",
    link: "https://edayavuz6.github.io/CineFux/",
    github: "https://github.com/edayavuz6/CineFux",
    color: "#06b6d4",
    featured: true,
  },
  {
    title: "Serenity — Onboarding Email",
    tags: ["MJML", "Email", "HTML"],
    desc: "A minimalist, responsive SaaS onboarding email template with optimized typographic hierarchy and cross-platform compatibility.",
    img: "img/serenity.png",
    link: "https://edayavuz6.github.io/Serenity-Saas-Email-Template/",
    github: "https://github.com/edayavuz6/Serenity-Saas-Email-Template",
    color: "#a855f7",
    featured: false,
  },
  {
    title: "Psychology Practice Website",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A clean, responsive one-page website for a clinical psychology practice. No frameworks, no build tools — pure HTML, CSS, and JavaScript. Fully accessible.",
    img: "img/elenor.png",
    link: "https://edayavuz6.github.io/Psychology-Practice-Website/",
    github: "https://github.com/edayavuz6/Psychology-Practice-Website",
    color: "#10b981",
    featured: true,
  },
  {
    title: "My Portfolio Website",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    desc: "This very portfolio — built with React, Tailwind CSS, and Framer Motion. Premium animations, dark/light mode, and fully responsive layout.",
    img: "img/newp.png",
    link: "https://edayavuz-portfolio.vercel.app/",
    github: "https://github.com/edayavuz6/My-Portfolio",
    color: "#8b5cf6",
    featured: true,
  },
  {
    title: "NEXUS - Premium Technology Marketplace",
    tags: ["React", "Tailwind CSS"],
    desc: "A production-ready, full-featured e-commerce web application built with React & Vite. Inspired by the design philosophy of Apple, Nothing, and modern SaaS platforms.",
    img: "img/nexus.png",
    link: "https://nexus-marketplace-3mhd.vercel.app/",
    github: "https://github.com/edayavuz6/nexus-marketplace",
    color: "#f59e0b",
    featured: true,
  },
  {
    title: "TaskFlow ⚡ - Modern Landing Page",
    tags: ["React", "Tailwind CSS"],
    desc: "TaskFlow is a modern, high-performance, and visually stunning landing page for a next-generation project management platform.",
    img: "img/landing.png",
    link: "https://landing-page-project-mu.vercel.app/",
    github: "https://github.com/edayavuz6/Landing-Page-Project",
    color: "#8b5cf6",
    featured: true,
  },
];

const filters = ["All", "React", "JavaScript", "MJML", "HTML", "Email"];

function ProjectCard({ project, i }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "18px",
        overflow: "hidden",
        background: hovered
          ? "rgba(255,255,255,0.05)"
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? project.color + "40" : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${project.color}20`
          : "none",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "none",
        position: "relative",
        cursor: "default",
      }}
    >
      {project.featured && (
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            zIndex: 2,
            padding: "3px 10px",
            borderRadius: "100px",
            background: "linear-gradient(135deg,#8b5cf6,#ec4899)",
            fontSize: "9px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Featured
        </div>
      )}

      <div
        style={{
          height: "200px",
          overflow: "hidden",
          background: "var(--bg3)",
          position: "relative",
        }}
      >
        <motion.img
          src={project.img}
          alt={project.title}
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.4 }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top, rgba(6,6,8,0.6) 0%, transparent 50%)`,
            pointerEvents: "none",
          }}
        />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                background: "rgba(6,6,8,0.7)",
                backdropFilter: "blur(4px)",
              }}
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "9px 20px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg,#8b5cf6,#ec4899)",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                View Live ↗
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "9px 20px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                GitHub →
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div style={{ padding: "18px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            marginBottom: "10px",
          }}
        >
          {project.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "10px",
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: "100px",
                background: `${project.color}12`,
                color: project.color,
                border: `1px solid ${project.color}25`,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "6px",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "12px",
            color: "var(--text-2)",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          {project.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) =>
            t.toLowerCase().includes(activeFilter.toLowerCase()),
          ),
        );

  return (
    <section id="projects" ref={ref} style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--purple)",
              display: "block",
              marginBottom: "12px",
            }}
          >
            Work
          </span>
          <h2
            className="font-cal"
            style={{
              fontSize: "clamp(2rem,4vw,3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text)",
            }}
          >
            Featured <span className="grad-text">Projects</span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              fontWeight: 300,
              marginTop: "12px",
            }}
          >
            A selection of my recent work
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "7px 18px",
                borderRadius: "100px",
                fontSize: "12px",
                fontWeight: 600,
                background:
                  activeFilter === f
                    ? "linear-gradient(135deg,#8b5cf6,#ec4899)"
                    : "rgba(255,255,255,0.05)",
                color: activeFilter === f ? "white" : "var(--text-2)",
                border:
                  activeFilter === f
                    ? "none"
                    : "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
                fontFamily: "'Inter',sans-serif",
                boxShadow:
                  activeFilter === f
                    ? "0 4px 16px rgba(139,92,246,0.35)"
                    : "none",
                transition: "all 0.2s",
              }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={p} i={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <style>{`@media(max-width:900px){section#projects > div{padding:0 24px!important;}section#projects{padding:80px 0!important;}}`}</style>
    </section>
  );
}
