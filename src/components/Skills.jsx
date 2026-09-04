import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillRows = [
  [
    {
      name: "HTML5",
      color: "#ff6b39",
      svg: (
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      ),
    },
    {
      name: "CSS3",
      color: "#38bdf8",
      svg: (
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      ),
    },
    {
      name: "JavaScript",
      color: "#fbbf24",
      svg: (
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      ),
    },
    {
      name: "React",
      color: "#38bdf8",
      svg: (
        <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z" />
      ),
    },
    {
      name: "Tailwind",
      color: "#06b6d4",
      svg: (
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      ),
    },
    {
      name: "Bootstrap",
      color: "#a855f7",
      svg: (
        <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 .87-.53 1.572-2.174 1.572zm.324 1.206H9.956v3.348h2.231c1.459 0 2.232-.587 2.232-1.685s-.795-1.663-2.325-1.663zM21.974 7.808c-.01-.977-.145-1.95-.398-2.895a6.48 6.48 0 0 0-1.132-2.26 5.316 5.316 0 0 0-2.002-1.53C17.494.697 16.4.5 15.092.5H8.908C7.6.5 6.506.697 5.558 1.123a5.316 5.316 0 0 0-2.002 1.53 6.48 6.48 0 0 0-1.132 2.26 12.94 12.94 0 0 0-.398 2.895C2.01 8.785 2 9.392 2 10v4c0 .608.01 1.215.026 1.808.01.977.145 1.95.398 2.895a6.48 6.48 0 0 0 1.132 2.26 5.316 5.316 0 0 0 2.002 1.53C6.506 22.919 7.6 23.5 8.908 23.5h6.184c1.308 0 2.402-.581 3.35-1.007a5.316 5.316 0 0 0 2.002-1.53 6.48 6.48 0 0 0 1.132-2.26c.253-.945.388-1.918.398-2.895C21.99 15.215 22 14.608 22 14v-4c0-.608-.01-1.215-.026-1.808zM13.202 17H8.002V7h4.695c2.178 0 3.494 1.149 3.494 2.988 0 1.23-.636 2.124-1.722 2.554C15.745 12.95 16.5 13.96 16.5 15.4 16.5 16.85 15.496 17 13.202 17z" />
      ),
    },
  ],
  [
    {
      name: "Figma",
      color: "#ec4899",
      svg: (
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.477 0-4.491-2.015-4.491-4.491S5.671 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.477 0-4.491-2.015-4.491-4.491s2.014-4.49 4.491-4.49h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.354-3.019 3.019 0 1.665 1.354 3.019 3.019 3.019h3.117v-6.038H8.148zm4.587 15.019c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.509c-1.665 0-3.019 1.354-3.019 3.019 0 1.665 1.354 3.019 3.019 3.019 1.665 0 3.019-1.354 3.019-3.019 0-1.665-1.354-3.019-3.019-3.019zm4.489-3.51h-4.588V8.981h4.588c2.476 0 4.49 2.015 4.49 4.491s-2.014 4.49-4.49 4.49zm0-7.509h-3.117v6.038h3.117c1.665 0 3.019-1.354 3.019-3.019 0-1.665-1.354-3.019-3.019-3.019z" />
      ),
    },
    {
      name: "Git",
      color: "#ff6b39",
      svg: (
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      ),
    },
    {
      name: "GitHub",
      color: "#a855f7",
      svg: (
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      ),
    },
    { name: "MJML", color: "#ec4899", isMjml: true },
    {
      name: "WordPress",
      color: "#06b6d4",
      svg: (
        <path d="M21.469 6.825c.61 1.453.977 3.55.977 6.175 0 3.475-1.198 5.875-2.265 7.562L15.195 6.31a27.22 27.22 0 0 1 1.688-.218c.516-.122.457-1.037-.061-1.037a74.098 74.098 0 0 0-4.953.366 74.098 74.098 0 0 0-4.948-.366c-.516 0-.576.915-.061 1.037.424.061.908.123 1.39.183l2.07 5.673-2.909 8.723L3.434 6.31c.546-.062 1.091-.122 1.69-.183.519-.122.459-1.037-.06-1.037a74.098 74.098 0 0 0-4.953.366C.742 3.947.742 2.133.742 2.133s.06-.06.121-.06c5.673 2.765 9.51 8.55 9.51 15.314 0 1.816-.247 3.597-.74 5.263L3.9 7.5c.51-.04 1.02-.102 1.53-.163zm9.329 4.89c.363 1.025.546 2.235.546 3.476 0 2.522-.426 4.697-1.215 6.448l-4.023-11.62c.547.182 1.029.425 1.383.668a7.463 7.463 0 0 1 3.309.97zm-12.66-.365L21.651 19.5c-1.33 3.597-4.892 6.179-9.085 6.179a9.818 9.818 0 0 1-4.286-.972zm-.916-.366l4.953 13.59c-1.696.395-3.47.303-5.106-.3L9.039 13.53a9.747 9.747 0 0 1 7.783 0z" />
      ),
    },
    {
      name: "VS Code",
      color: "#06b6d4",
      svg: (
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.88V4.12a1.5 1.5 0 0 0-.85-1.533zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
      ),
    },
  ],
];

function SkillPill({ skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -3 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 18px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${skill.color}25`,
        cursor: "default",
        flexShrink: 0,
        margin: "0 6px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${skill.color}12`;
        e.currentTarget.style.borderColor = `${skill.color}50`;
        e.currentTarget.style.boxShadow = `0 0 20px ${skill.color}25`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        e.currentTarget.style.borderColor = `${skill.color}25`;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "8px",
          background: `${skill.color}18`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {skill.isMjml ? (
          <svg
            viewBox="0 0 200 200"
            fill="none"
            style={{ width: "20px", height: "20px", color: skill.color }}
          >
            <rect
              x="55"
              y="30"
              width="110"
              height="35"
              rx="17.5"
              fill="currentColor"
            />
            <circle cx="170" cy="47.5" r="17.5" fill="currentColor" />
            <circle cx="35" cy="105" r="17.5" fill="#e91e63" />
            <rect
              x="55"
              y="87.5"
              width="130"
              height="35"
              rx="17.5"
              fill="currentColor"
            />
            <rect
              x="55"
              y="145"
              width="110"
              height="35"
              rx="17.5"
              fill="currentColor"
            />
            <circle cx="185" cy="162.5" r="17.5" fill="currentColor" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill={skill.color}
            style={{ width: "16px", height: "16px" }}
          >
            {skill.svg}
          </svg>
        )}
      </div>
      <span
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--text)",
          whiteSpace: "nowrap",
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "120px 0",
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>
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
            Skills
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
            My <span className="grad-text">Tech Stack</span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              fontWeight: 300,
              marginTop: "12px",
            }}
          >
            Technologies and tools I work with daily
          </p>
        </motion.div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          overflow: "hidden",
        }}
      >
        {skillRows.map((row, ri) => (
          <div key={ri} style={{ overflow: "hidden", padding: "8px 0" }}>
            <div
              className={ri % 2 === 0 ? "marquee-left" : "marquee-right"}
              style={{ display: "flex", width: "max-content" }}
            >
              {[...row, ...row, ...row].map((skill, i) => (
                <SkillPill key={`${skill.name}-${i}`} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{ maxWidth: "1280px", margin: "64px auto 0", padding: "0 48px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "16px",
          }}
        >
          {[
            {
              title: "Frontend Engineering",
              desc: "Building fast, accessible, and beautiful web interfaces with React, Tailwind CSS, and modern JavaScript.",
              icon: "⚛️",
              color: "#38bdf8",
            },
            {
              title: "Email Development",
              desc: "Crafting pixel-perfect email templates with MJML & HTML that render flawlessly across all email clients.",
              icon: "📧",
              color: "#ec4899",
            },
            {
              title: "UI/UX Design",
              desc: "Designing intuitive interfaces in Figma with a strong focus on visual hierarchy, spacing, and user flow.",
              icon: "🎨",
              color: "#8b5cf6",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              style={{
                padding: "24px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${item.color}20`,
                cursor: "default",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-2)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){section#skills > div{padding:0 24px!important;}section#skills > div > div[style*="grid-template-columns: repeat(3"]{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
