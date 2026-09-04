import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const floatingCards = [
  { icon: "⚡", label: "React Expert", sub: "1+ years", color: "#8b5cf6" },
  { icon: "📧", label: "Email Dev", sub: "MJML & HTML", color: "#ec4899" },
  { icon: "🎨", label: "UI/UX Focused", sub: "Figma & CSS", color: "#06b6d4" },
  { icon: "🚀", label: "10+ Projects", sub: "Deployed live", color: "#10b981" },
];

function FloatingCard({ card, index, dark }) {
  const positions = [
    { top: "4%", right: "-22%" },
    { top: "38%", right: "-28%" },
    { bottom: "34%", left: "-22%" },
    { bottom: "4%", right: "-18%" },
  ];
  const pos = positions[index];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.8 + index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.06, y: -4 }}
      style={{
        position: "absolute",
        ...pos,
        padding: "10px 14px",
        borderRadius: "14px",
        background: dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        border: dark
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        boxShadow: dark
          ? `0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px ${card.color}20`
          : `0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px ${card.color}15`,
        cursor: "default",
        whiteSpace: "nowrap",
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "10px",
          background: `${card.color}18`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "17px",
          flexShrink: 0,
          border: `1px solid ${card.color}30`,
        }}
      >
        {card.icon}
      </div>
      <div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            color: dark ? "var(--text)" : "#0a0a0a",
            lineHeight: 1.2,
          }}
        >
          {card.label}
        </div>
        <div
          style={{
            fontSize: "10px",
            color: dark ? "rgba(237,236,240,0.45)" : "rgba(10,10,10,0.45)",
            marginTop: "1px",
          }}
        >
          {card.sub}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero({ dark }) {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handler = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.03);
      mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.03);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const textColor = dark ? "#edecf0" : "#0a0a0a";
  const mutedColor = dark ? "rgba(237,236,240,0.5)" : "rgba(10,10,10,0.5)";
  const borderColor = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)";
  const cardBg = dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.8)";

  const words = ["Frontend", "Developer", "&", "Email", "Template", "Expert"];

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "64px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${dark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px), linear-gradient(90deg, ${dark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.6,
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          x: springX,
          y: springY,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "20%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(236,72,153,0.07) 0%,transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          x: useTransform(springX, (v) => -v),
          y: useTransform(springY, (v) => -v),
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "100px",
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
              marginBottom: "28px",
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "#10b981",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Available for freelance & full-time
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: mutedColor,
              marginBottom: "8px",
              letterSpacing: "0.04em",
            }}
          >
            Hi, I'm{" "}
            <span style={{ color: textColor, fontWeight: 600 }}>Eda Yavuz</span>{" "}
            👋
          </motion.p>

          <div style={{ marginBottom: "24px" }}>
            {words.map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-cal"
                style={{
                  display: "inline-block",
                  marginRight: word === "&" ? "12px" : "10px",
                  fontSize: "clamp(2.2rem,4.5vw,3.8rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color:
                    word === "Frontend" || word === "Email"
                      ? "transparent"
                      : textColor,
                  background:
                    word === "Frontend" || word === "Email"
                      ? "linear-gradient(135deg,#8b5cf6,#ec4899)"
                      : "none",
                  WebkitBackgroundClip:
                    word === "Frontend" || word === "Email" ? "text" : "unset",
                  WebkitTextFillColor:
                    word === "Frontend" || word === "Email"
                      ? "transparent"
                      : "unset",
                  backgroundClip:
                    word === "Frontend" || word === "Email" ? "text" : "unset",
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            style={{
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: mutedColor,
              maxWidth: "440px",
              marginBottom: "36px",
            }}
          >
            I build clean, pixel-perfect web interfaces with{" "}
            <strong style={{ color: textColor, fontWeight: 500 }}>
              React & Tailwind CSS
            </strong>
            , and craft high-converting email templates with{" "}
            <strong style={{ color: textColor, fontWeight: 500 }}>
              MJML & HTML
            </strong>
            . I don't just write code — I engineer solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "48px",
            }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "13px 28px",
                borderRadius: "12px",
                background: "linear-gradient(135deg,#8b5cf6,#ec4899)",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
                boxShadow: "0 8px 24px rgba(139,92,246,0.4)",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              View My Work →
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "13px 28px",
                borderRadius: "12px",
                background: dark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.05)",
                border: `1px solid ${borderColor}`,
                color: textColor,
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            {[
              {
                href: "https://github.com/edayavuz6",
                title: "GitHub",
                d: (
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                ),
              },
              {
                href: "https://www.linkedin.com/in/eda-yavuz-646011377/",
                title: "LinkedIn",
                d: (
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                ),
              },
              {
                href: "mailto:edayavuzcontact@gmail.com",
                title: "Email",
                d: (
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                ),
              },
            ].map((s) => (
              <motion.a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                title={s.title}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: dark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.05)",
                  border: `1px solid ${borderColor}`,
                  color: mutedColor,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = textColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = mutedColor)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "16px", height: "16px" }}
                >
                  {s.d}
                </svg>
              </motion.a>
            ))}
            <span
              style={{
                fontSize: "11px",
                color: dark ? "rgba(237,236,240,0.3)" : "rgba(10,10,10,0.3)",
                marginLeft: "4px",
              }}
            >
              edayavuzcontact@gmail.com
            </span>
          </motion.div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: springX, y: springY, position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-24px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(139,92,246,0.14) 0%,transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            <div
              style={{
                width: "280px",
                height: "360px",
                borderRadius: "140px 140px 0 0",
                overflow: "hidden",
                background:
                  "linear-gradient(var(--bg2),var(--bg2)) padding-box, linear-gradient(135deg,#8b5cf6,#ec4899,#06b6d4) border-box",
                border: "2px solid transparent",
                boxShadow: dark
                  ? "0 32px 80px rgba(0,0,0,0.5), 0 0 40px rgba(139,92,246,0.18)"
                  : "0 32px 80px rgba(0,0,0,0.15), 0 0 40px rgba(139,92,246,0.12)",
                position: "relative",
              }}
            >
              <img
                src="img/portfolio pp-.png"
                alt="Eda Yavuz"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top,rgba(6,6,8,0.25) 0%,transparent 50%)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {floatingCards.map((card, i) => (
              <FloatingCard key={i} card={card} index={i} dark={dark} />
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: dark ? "rgba(237,236,240,0.25)" : "rgba(10,10,10,0.25)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "32px",
            background: `linear-gradient(to bottom,${dark ? "rgba(237,236,240,0.25)" : "rgba(10,10,10,0.2)"},transparent)`,
          }}
        />
      </motion.div>

      <style>{`
        @media(max-width:900px){
          section#home > div[style*="grid-template-columns"]{grid-template-columns:1fr!important;padding:0 24px!important;gap:48px!important;}
          section#home > div > div:last-child{display:none;}
        }
      `}</style>
    </section>
  );
}
