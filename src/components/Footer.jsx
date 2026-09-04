import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
        padding: "40px 48px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "linear-gradient(135deg,#8b5cf6,#ec4899)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span
            className="font-cal"
            style={{ fontSize: "15px", fontWeight: 600, color: "var(--text)" }}
          >
            eda<span className="grad-text">dev</span>
          </span>
        </div>

        <p style={{ fontSize: "12px", color: "var(--text-3)" }}>
          © {year} Eda Yavuz — Built with React & Framer Motion
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ y: -1 }}
              style={{
                fontSize: "12px",
                color: "var(--text-3)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-3)")}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){footer > div{flex-direction:column;text-align:center;}footer{padding:32px 24px!important;}}`}</style>
    </footer>
  );
}
