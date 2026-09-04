import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/hemaharshitha2516-lang",
    color: "#a855f7",
    icon: (
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hema-harshitha-reddy-puli-446b67433/",
    color: "#38bdf8",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:hemaharshitha2516@gmail.com",
    color: "#ec4899",
    icon: (
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const [copyError, setCopyError] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hemaharshitha2516@gmail.com");
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyError(true);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "120px 0",
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 48px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
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
            Contact
          </span>
          <h2
            className="font-cal"
            style={{
              fontSize: "clamp(2rem,4vw,3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: "16px",
            }}
          >
            Let's build something{" "}
            <span className="grad-text">great together</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text-2)",
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            I enjoy connecting with fellow learners and talking about software engineering, AI, and web development. Say hello or share what you’re building.
          </p>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            borderRadius: "24px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "48px",
            marginBottom: "32px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "400px",
              height: "200px",
              background:
                "radial-gradient(ellipse,rgba(139,92,246,0.1) 0%,transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg,transparent,rgba(139,92,246,0.5),rgba(236,72,153,0.5),transparent)",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "100px",
                background: "rgba(192,132,190,0.08)",
                border: "1px solid rgba(192,132,190,0.2)",
                marginBottom: "28px",
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--purple)",
                  display: "inline-block",
                }}
              />
              <span
                style={{ fontSize: "12px", fontWeight: 600, color: "var(--purple)" }}
              >
                Ongole, Andhra Pradesh, India
              </span>
            </div>


            <h3
              className="font-cal"
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "8px",
              }}
            >
              Say hello!
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-2)",
                marginBottom: "32px",
              }}
            >
              hemaharshitha2516@gmail.com
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <motion.a
                href="mailto:hemaharshitha2516@gmail.com"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "14px 32px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg,#7843b6,#b53279)",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(139,92,246,0.4)",
                  display: "inline-block",
                }}
              >
                Send Me an Email →
              </motion.a>
              <motion.button
                aria-live="polite"
                onClick={copyEmail}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "14px 24px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "var(--text)",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "'Inter',sans-serif",
                  transition: "all 0.2s",
                }}
              >
                {copied ? "✓ Copied!" : "Copy Email"}
              </motion.button>
            </div>
            {copyError && <p role="status">Please select the email address above to copy it, or use the email link.</p>}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 22px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${s.color}25`,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${s.color}10`;
                e.currentTarget.style.borderColor = `${s.color}50`;
                e.currentTarget.style.boxShadow = `0 0 20px ${s.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = `${s.color}25`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: `${s.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill={s.color}
                  style={{ width: "16px", height: "16px" }}
                >
                  {s.icon}
                </svg>
              </div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--text)",
                }}
              >
                {s.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <style>{`@media(max-width:900px){section#contact > div{padding:0 24px!important;}section#contact{padding:80px 0!important;}section#contact > div > div:nth-child(3){padding:28px!important;}}`}</style>
    </section>
  );
}
