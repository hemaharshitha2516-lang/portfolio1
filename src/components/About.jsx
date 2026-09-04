import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="content-section">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="section-heading">
            <span className="eyebrow">About me</span>
            <h2 className="font-cal">Learning by <span className="grad-text">building</span></h2>
          </div>
          <div className="about-grid">
            <div className="prose">
              <p>I’m <strong>Hema Harshitha Reddy Puli</strong>, a second-year Computer Science student at QIS College of Engineering and Technology with a growing interest in software engineering, artificial intelligence, and web development.</p>
              <p>I’m currently learning Python full-stack development and Java while building projects that help me strengthen my programming and problem-solving skills. I enjoy learning by creating practical applications and want to continue improving as a developer.</p>
            </div>
            <motion.aside className="info-card" whileHover={{ y: -4 }}>
              <span className="eyebrow">What I’m exploring</span>
              <ul className="interest-list">
                <li>Software Engineering</li><li>Artificial Intelligence</li><li>Web Development</li>
              </ul>
              <p className="muted">My goal is to build modern websites and improve my software development skills, one project at a time.</p>
            </motion.aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
