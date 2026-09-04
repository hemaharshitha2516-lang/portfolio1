import { motion } from "framer-motion";

const groups = [
  { title: "Programming languages", mark: "01", skills: ["Python", "Java", "C"] },
  { title: "Web", mark: "02", skills: ["HTML", "CSS", "JavaScript"] },
  { title: "Tools", mark: "03", skills: ["Git", "GitHub", "VS Code"] },
  { title: "Currently learning", mark: "04", skills: ["Python Full Stack Development", "Java"] },
];

export default function Skills() {
  return (
    <section id="skills" className="content-section">
      <div className="section-container">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">Skills</span>
          <h2 className="font-cal">My growing <span className="grad-text">toolkit</span></h2>
          <p className="muted">The languages and tools I’m using as I learn and build.</p>
        </motion.div>
        <div className="skills-grid">
          {groups.map((group, i) => (
            <motion.div className="info-card" key={group.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} whileHover={{ y: -4 }}>
              <span className="card-number" aria-hidden="true">{group.mark}</span>
              <h3>{group.title}</h3>
              <ul className="tag-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
