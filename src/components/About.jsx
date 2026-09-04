import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { num: "10+", label: "Projects Built", icon: "🚀" },
  { num: "1K+", label: "Hours Coding", icon: "⚡" },
  { num: "15K+", label: "Lines of Code", icon: "💻" },
  { num: "2+", label: "Tech Stacks", icon: "🎨" },
];

const timeline = [
  {
    year: "1",
    title: "Started Frontend Journey",
    desc: "Fell in love with HTML, CSS, and JavaScript. Built my first projects from scratch.",
  },
  {
    year: "2",
    title: "React & Modern Stack",
    desc: "Mastered React, Tailwind CSS, and started building full-featured web applications.",
  },
  {
    year: "3",
    title: "Email Development",
    desc: "Specialized in MJML & HTML email templates — pixel-perfect across all email clients.",
  },
  {
    year: "4",
    title: "Freelance & Open Source",
    desc: "Delivering production-ready projects for clients and contributing to the dev community.",
  },
];

function StatCard({ stat, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      style={{
        padding: "24px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        textAlign: "center",
        cursor: "default",
      }}
    >
      <div style={{ fontSize: "28px", marginBottom: "8px" }}>{stat.icon}</div>
      <div
        className="font-cal grad-text"
        style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}
      >
        {stat.num}
      </div>
      <div
        style={{
          fontSize: "12px",
          color: "var(--text-2)",
          marginTop: "6px",
          fontWeight: 500,
        }}
      >
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section"
      ref={ref}
      style={{ padding: "120px 0" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
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
            About Me
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
            The developer <span className="grad-text">behind the code</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.85,
                  color: "var(--text-2)",
                  fontWeight: 300,
                  marginBottom: "20px",
                }}
              >
                Hi! I'm{" "}
                <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                  Eda Yavuz
                </strong>
                , a Frontend & Email Template Developer passionate about
                building interfaces that feel as good as they look.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.85,
                  color: "var(--text-2)",
                  fontWeight: 300,
                  marginBottom: "20px",
                }}
              >
                My hunger for growth and innovative perspective always bring a
                fresh touch to every project. I believe great UI is not just
                about aesthetics — it's about how it makes people feel.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.85,
                  color: "var(--text-2)",
                  fontWeight: 300,
                  marginBottom: "36px",
                }}
              >
                I specialize in{" "}
                <span style={{ color: "var(--text)", fontWeight: 500 }}>
                  React & Tailwind CSS
                </span>{" "}
                for web interfaces, and{" "}
                <span style={{ color: "var(--text)", fontWeight: 500 }}>
                  MJML & HTML
                </span>{" "}
                for pixel-perfect email templates that render beautifully across
                every client.
              </p>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "0" }}
              >
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    style={{
                      display: "flex",
                      gap: "20px",
                      paddingBottom: "24px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg,#8b5cf6,#ec4899)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "white",
                          flexShrink: 0,
                        }}
                      >
                        {item.year.slice(2)}
                      </div>
                      {i < timeline.length - 1 && (
                        <div
                          style={{
                            width: "1px",
                            flex: 1,
                            background:
                              "linear-gradient(to bottom,rgba(139,92,246,0.4),transparent)",
                            marginTop: "6px",
                            minHeight: "24px",
                          }}
                        />
                      )}
                    </div>
                    <div style={{ paddingBottom: "8px" }}>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "var(--text)",
                          marginBottom: "4px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "var(--text-2)",
                          fontWeight: 300,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              {stats.map((s, i) => (
                <StatCard key={i} stat={s} i={i} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                padding: "28px",
                borderRadius: "18px",
                background: "rgba(139,92,246,0.06)",
                border: "1px solid rgba(139,92,246,0.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg,#8b5cf6,#ec4899)",
                }}
              />
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "16px",
                }}
              >
                What I bring to every project
              </h3>
              {[
                ["🎯", "Attention to detail — pixel-perfect execution"],
                ["⚡", "Performance-first mindset"],
                ["🔄", "Clean, maintainable code architecture"],
                ["💡", "Innovative solutions to complex problems"],
                ["🤝", "Clear communication & fast delivery"],
              ].map(([icon, text]) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <span style={{ fontSize: "15px" }}>{icon}</span>
                  <span style={{ fontSize: "13px", color: "var(--text-2)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){section#about > div > div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;gap:48px!important;}section#about{padding:80px 0!important;}section#about > div{padding:0 24px!important;}}`}</style>
    </section>
  );
}
