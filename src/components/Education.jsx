import { motion } from "framer-motion";

const coursework = ["Python", "Data Structures and Algorithms", "Design and Analysis of Algorithms", "C", "Java"];

export default function Education() {
  return (
    <section id="education" className="content-section tinted-section">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="section-heading">
            <span className="eyebrow">Education</span>
            <h2 className="font-cal">Building a <span className="grad-text">strong foundation</span></h2>
          </div>
          <div className="info-card education-card">
            <span className="eyebrow">B.Tech in Computer Science</span>
            <h3 className="font-cal">QIS College of Engineering and Technology</h3>
            <dl className="education-details">
              <div><dt>Current year</dt><dd>2nd Year</dd></div>
              <div><dt>Expected graduation</dt><dd>2029</dd></div>
              <div><dt>Academic score</dt><dd>8.12</dd></div>
            </dl>
            <h4>Relevant coursework</h4>
            <ul className="tag-list">{coursework.map((course) => <li key={course}>{course}</li>)}</ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
